---
title: 'pjax: 当ajax遇上pushState'
date: 2014-02-12 08:55
comments: true
---

> var pjax = pushState + ajax;  
> 小时候，小浣熊方便面里面有各种水浒人物的卡片。我买了一包，吃了方便面，饱了。而我又买了第二包，不是想吃方便面，而是仅仅想得到里面的卡片…

## **一、简介**

pushState 是 html5 中提供的方法，用以

- 无刷新的更新浏览器地址栏；
- 如其名称，将新地址 push 到历史堆栈中

用法：`pushState(data, title ,url)`

data 为保存的对象，可以在 window.onpopstate 时获取到；title 为页面标题；url 为需地址栏和历史发生改变的 url。  
正是这点看似很平常的功能，跟 ajax 结合到一起产生了火花。因为，ajax 最擅长的事情就是局部刷新页面。

## **二、ajax 的纠结历史**

一切可以从 ajax 最擅长的事情说起。
ajax 作为一个异步请求模型，从最初设计开始，也许压根就没打算将它跟浏览器历史挂钩。原因是历史堆栈所记录的，某种意思上可以说是顺序，跟我们理解的“同步”更为密切。

因而，`ajax可以无刷新改变页面内容，却无法改变页面的url`。

- ####历史问题 1 - 如何操控历史

当单页面越来越流行，操作记录却很容易被忽略。假设有这样的单页面，按照分类点击，界面逐层递进：`体育 - 篮球 -nba -马刺队 - 邓肯`  
当我们点了 4 下到“邓肯”界面时，一个不小心的刷新，出现在你面前的也许是“体育”。原因是操作记录没有被记录。  
而通常的解决方案是修改 hash，每递进一层，去更新 url 的 hash 值，这样的方法：

1. 刷新时预先判断 url 的 hash，从而知道这是哪一层，加载相应数据；
2. 支持了历史

这样的方式貌似比较完善，其实不然。

- ####历史问题 2 - 对搜索引擎不友好

最大的问题是，hash 后生成的内容是不会被搜索引擎引用到。数据不能被爬取，无疑是浪费和损失。因此 google 放言，咱可以约定个协议：`#!xxx`这样 hash 的 url，google 也去爬取。称之为`hash bang`（哈希大爆炸？）。这一协议，在 g+，twitter，人人，新浪微博上都可以看到。

事实上，ajax 最或缺的两个问题，恰好被 pushState 的功能补充完善。

## **三、pjax 带来的价值**

除去补齐了 ajax 的问题，我们发现 pjax 会给 web 带来更多的好处。  
回到开始说的“两包方便面”，我的意思是，有时你访问两个 url，部分数据是相同的。比如百度贴吧，第一页和第二页的区别只是帖子内容（卡片）的不同，网站外框部分（方便面）都是一样的，这些东西就不需要在页面刷新时重复加载。

ajax 处理这样的局部刷新，已经给我们带来了 web2.0 的体验，而加上 pushstate 的 ajax 则更进一步：

1. 一个 url 对应一套数据，有利于 SEO；
2. 更改数据和 url 时，只是局部刷新，带来较好的用户体验；
3. 兼容性好，对不支持 pushstate 的浏览器，url 也能正常请求页面（虽然有重复加载）；
4. 刷新页面时，由于是 url 唯一，能正常加载到用户希望看到的数据，比处理 hash 的方式更方便；
5. 后退与前进的浏览器操作，依然可以局部刷新（通过 onpushstate 事件捕获）

## **四、注意事项**

然而 pjax 不等于单纯的分离使用 pushstate 与 ajax，还必须得做一些封装。缘于以下我能想到的注意事项：

- 服务器端增加额外处理逻辑  
  服务器端，需要根据请求的参数，作出全页渲染或局部渲染响应

```
Accept:text/html, */*; q=0.01
Accept-Encoding:gzip,deflate,sdch
Connection:keep-alive
Host:qianduannotes.duapp.com
User-Agent:AppleWebKit/537.36 (KHTML, like Gecko) Chrome/31.0.1650.63 Safari/537.36
X-Requested-With:XMLHttpRequest
X-PJAX:true
```

比如请求头部可以设定一个 X-PAJX:true，用以通知服务器。

- 浏览器兼容
  假如浏览器不支持 pushstate，提供 fallback 操作，直接打开需更改 url 的地址：

```
$.support.pjax = window.history && window.history.pushState
// Fallback
if ( !$.support.pjax ) {
  $.pjax = function( options ) {
    window.location = $.isFunction(options.url) ? options.url() : options.url
  }
  $.fn.pjax = function() { return this }
}
```

- 本地存储机制  
  无疑 pjax 与 localstorage 共同使用可以进一步提升体验，但这一步容易忽略的是数据上报。

## **五、参考资料**

[jquery-pjax](https://github.com/defunkt/jquery-pjax)  
[welefen 封装的 pjax](https://github.com/welefen/pjax)
