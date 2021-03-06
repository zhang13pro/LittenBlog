---
title: 'css实现九宫格(一)'
---

## date: 2012-12-14 19:15

前段时间，我的 leader Henry 在群里面分享了一道[一淘](http://www.etao.com/)的面试题。 题目非常的有趣，忙完前阵的工作之后突然记起，也尝试做了一下。

> 9 个元素，每个 50\*50px，排成九宫格
> 默认是 border 颜色为 blue，hover 到格子上变成 red（兼容到 IE6）

![css题目](/assets/blogImg/jiugongge1.jpg)

<!--more-->

做成九宫格大家都会，但题目的陷阱就在 hover 上。鼠标 hover 到格子 4，格子 5 时，其实他们“共用”了一条边。由于是纯 css 实现的，我们不可能说用 js 去动态改变 dom，因此怎样实现“公用边”就成为了难点。

**尝试的过程：**

- 我的第一个想法，用“叠加”的方式实现“公用边”；
- 后来的想法，用 table 的 border-collapse 实现“公用边”；
- 在 table 想法的基础上改进；
- 一种更简便的做法，不需要 border，见九宫格(二)

##**我的第一个想法**

先做做看，尝试永远是第一步。我将 9 个 div 都设置了 5px 的 border，排成了九宫格，添加了 hover，这时候初始的效果是：  
![初始效果](/assets/blogImg/jiugongge2.jpg)  
这样其实格子之间的距离是两倍 border（10px）。需要再将中间的一竖（2，5，8）设置<code>margin-left:-5px;margin-right:-5px;</code>,再将中间的一横（3，4，5）设置<code>margin-top:-5px;margin-bottom:-5px;</code>，这样等于是强制把格子间的距离“拉”到 5px。  
![把格子间的距离“拉”到5px](/assets/blogImg/jiugongge3.jpg)  
到这一步，简单的九宫格是完成了，但 hover 之后会发现，格子的边会被挡住（格子 5 的下边和右边分别被格子 8 和格子 6 挡住）。因为这里“公用边”的思路准确来说是“重合边”，是用负值的 margin 强制定位的。而我的解决方式是 hover 时添加<code>z-index:999</code>，让 hover 到的格子在最上层显示而不会被挡住。同时，不要忘记在 9 个 div 的 css 里面添加一句让 z-index 生效的<code>position: relative;</code>，具体原因看[这里](http://www.csser.com/question/4f4332dedbc7b0ac4c00034e)。

代码君：  
1.html：

```html
<div id="test0">
  <div>1</div>
  <div class="lr_indent">2</div>
  <div>3</div>
  <div class="tb_indent">4</div>
  <div class="lr_indent tb_indent">5</div>
  <div class="tb_indent">6</div>
  <div>7</div>
  <div class="lr_indent">8</div>
  <div>9</div>
</div>
```

2.css:

```css
#test0 {
  margin: 30px;
  width: 200px;
  height: 200px;
}
#test0 div {
  width: 50px;
  height: 50px;
  float: left;
  background: #eee;
  border: 5px solid #00f;
  text-align: center;
  line-height: 50px;
  color: #090;
  position: relative;
}
#test0 .lr_indent {
  margin-left: -5px;
  margin-right: -5px;
}
#test0 .tb_indent {
  margin-top: -5px;
  margin-bottom: -5px;
}
#test0 div:hover {
  border: 5px solid #f00;
  z-index: 999;
  background: #eee; /*必须加这一句，在IE6，7有bug*/
}
```

> 思考：这样的方式好吗？不够好。  
> 这才是 9 宫格，如果是 16，25，…，81 个格子，设置 margin 缩进的人力代价是很高的。  
> 兼容性，在 IE6，7 下，负值 margin 在 hover 时候有 bug。

![ie6，7下，hover时负值margin-left不起效](/assets/blogImg/jiugongge4.jpg)

##**后来的想法**

经过第一次尝试，我得到一个经验：<code>要用一种通用的方法去解决“公用边”</code>，而不是分别设置.lr_indent 和.tb_indent。
随即我想到了表格。作为 table，它有个很突出的属性，就是合并 border，css 里面的设置为<code>border-collapse:collapse;</code>。ok，这就是 key point。

按照这个思路，我简单的编写了代码，一开始我把 hover 定位到 td 上面去，发现 hover 时也会出现第一个想法中“挡住”的情况。而且，去将 td 的 position 改变，再添加 z-index 的方法是不可能有用的(z-index 不会起效)。

我的方法是在 td 中包含一个 span，把 hover 定位到 span 中去，td 设置为<code>position:relative;</code>，span 设置为<code>position:absolute;</code>，这时候的 hover 就可以设置让 span 的 border 不被挡住展示了。  
代码君又来了：  
html：

```html
<div id="test1">
  <table>
    <tr>
      <td><span>1</span></td>
      <td><span>2</span></td>
      <td><span>3</span></td>
    </tr>
    <tr>
      <td><span>4</span></td>
      <td><span>5</span></td>
      <td><span>6</span></td>
    </tr>
    <tr>
      <td><span>7</span></td>
      <td><span>8</span></td>
      <td><span>9</span></td>
    </tr>
  </table>
</div>
```

css：

```css
* {
  margin: 0;
  padding: 0;
}
table {
  border-collapse: collapse;
}
#test1 td {
  width: 50px;
  height: 50px;
  background: #eee;
  position: relative;
  border: 5px solid #00f;
  text-align: center;
}
#test1 td span {
  color: #090;
  display: block;
  width: 50px;
  height: 50px;
  position: absolute;
  top: 0;
  left: 0;
  line-height: 50px;
}
#test1 td span:hover {
  border: 5px solid #f00;
  margin-top: -5px;
  margin-left: -5px;
}
```

别忘了 span 在 hover 时，必须设置一个负的<code>margein-top</code>和<code>margein-left</code>，以保证红色边框恰好定位在格子四周。见 css 君最后的片段。假如不设置，你看到的将是这样：  
![未设置span:hover的margin](/assets/blogImg/jiugongge5.jpg)  
本以为已经大功告成了，在 IE 中测试却让我傻了眼：  
![IE7下的情景](/assets/blogImg/jiugongge6.jpg)  
（ps：作为前端一枚，我已经做好了妥妥的心理准备，但此情此景还是让人喷出一口老血……）

##**改进，改进**

说实话，table 和 div 之争这么多年，大家都在页面中用越来越多的 div，而越发的鄙视 table，反而对 table 的熟悉程度反应了前端们的基础是否扎实。吃一堑长一智，这句话特别适用于在 table 中翻江倒海的亲们。

改进！

首先这个 bug（也无所谓是不是 bug，算是浏览器的差异性吧）我知道，在 table 的 td 里面设置了<code>position:relative;</code>就会在 IE 中出现这样的情况。注意是所有的 IE 哦，包括 IE10。而根据第二个思路，最后的 hover 定位的元素为 span，它本身设定为<code>position:absolute;</code>它的父级元素必须得设置<code>position:relative;</code>才能完成题目功能，这是毋庸置疑的。

既然现在 span 的父级 td 不能设置<code>position:relative;</code>，我就在它们之间添加一个 div，用来做 span 的容器。

代码君再一次来了：  
html:

```html
<div id="test2">
  <table>
    <tr>
      <td>
        <div><span>1</span></div>
      </td>
      <td>
        <div><span>2</span></div>
      </td>
      <td>
        <div><span>3</span></div>
      </td>
    </tr>
    <tr>
      <td>
        <div><span>4</span></div>
      </td>
      <td>
        <div><span>5</span></div>
      </td>
      <td>
        <div><span>6</span></div>
      </td>
    </tr>
    <tr>
      <td>
        <div><span>7</span></div>
      </td>
      <td>
        <div><span>8</span></div>
      </td>
      <td>
        <div><span>9</span></div>
      </td>
    </tr>
  </table>
</div>
```

css:

```css
* {
  margin: 0;
  padding: 0;
}
table {
  border-collapse: collapse;
}
#test2 td {
  width: 50px;
  height: 50px;
  background: #eee;
  border: 5px solid #00f;
  text-align: center;
  vertical-align: top;
}
#test2 td div {
  position: relative;
  width: 50px;
  height: 50px;
}
#test2 td div span {
  color: #090;
  display: block;
  width: 50px;
  height: 50px;
  position: absolute;
  top: 0;
  left: 0;
  line-height: 50px;
}
#test2 td div span:hover {
  border: 5px solid #f00;
  margin-left: -5px;
  margin-top: -5px;
}
```

OK，效果达成！  
![最终完成的效果](/assets/blogImg/jiugongge7.jpg)  
可以猛点这里看看[demo](/assets/demo/jiugongge_demo.html)。

**最后吐槽，不对，总结一下下：**

> 先到 IE 上去测，再转到其它浏览器，以少走弯路，这叫擒贼先擒王-\_-!；  
> win8 的 metro 布局最近挺流行的，有时候 table 比 div 好用；  
> IE 君，你真是……此处省略 1024 个字

这个系列打算写两篇文章，下一篇介绍另外一种更简洁的方法。:)
