---

title: "分享一个IE6，7的CSS hack bug"
date: 2012-12-17 19:43
comments: true
tags: 
	- css
key: "5"
---

###一、分享一个 IE6，7 的 css hack bug。  
![css hack](/assets/blogImg/css_hack.jpg)

> IE 和我们之间，肯定有一个是傻逼，如果它不是，那我们准是。不然很多事情没法解释… ——多么痛的领悟

<!-- more -->

先看代码，或者点击看[demo](/assets/demo/hack_demo.html)  
html:

```html
<div id="main">
  <div class="box"></div>
  <div class="box"></div>
</div>
```

css:

```css
#main {
  width: 200px;
  height: 50px;
  border: 1px solid #000;
  margin: 0 auto;
}
#main .box {
  width: 50px;
  height: 50px;
  margin-left: 10px;
  position: relative;
  float: left;
  background: #333;
}
#main .box:hover {
  z-index: 999;
  /*background: #333;*/
  /*background: #999;*/
}
```

.box 设置了的四行核心代码是：

- <code>float:left</code> - 左浮动
- <code>margin-left: 10px</code> - 左外边距为 10px
- <code>position: relative</code> - 因为在 box 里面想用一个 dom 做绝对定位
- <code>background: #333</code> - 设置 background 颜色为#333  
  当.box 触发 hover 时，做了一步 z-index 的改变，这时候在 IE6，7 中出现 bug：因 margin-left 失效，.box 会向左移动 10px；而且这时候设置 margin-left 是不起作用的，hover 结束后.box 也不会回到原来的位置。

###二、淡定解决异次元的 bug

诡异的事情最后水落石出：**background 属性居然影响了 margin**。

将.box:hover 多加一行 background 属性，比如：<code>background: #999</code>，这样子在 IE 上“看上去”就解决了。  
**但是**，就当你以为解决了 bug 的时候，如果.box:hover 的 background 颜色设置与 hover 之前的颜色一样，也就是设置为<code>background: #333</code>，阴魂不散的 bug 又会重新出现啦。

庆幸你的需求是 background 颜色不一样吧。如果还真是悲剧到要做成一样的颜色，解决的办法恐怕只能是取消.box 的<code>position: relative</code>，然后多加一层 dom 容器了。

```css
	<div class="box">
		<div style="position: relative">…</div>
		…
	</div>
```

友情 link：[xueran 的这篇文字](http://xueran.github.com/blog/2012/12/17/csstest-jiugongge/)。
