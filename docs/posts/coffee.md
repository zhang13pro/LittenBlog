---

title: '生产者-消费者模型的coffeescript实现'
date: 2012-12-24 23:51
comments: true
---

这两天一直在看 coffeescript 相关的东西，也帮一个朋友搞了个生产者-消费者模型的 C 语言实现。想到还没用 coffeescript 真正意义上写过程序，那就尝试做一下吧。

其实[《CoffeeScript 小书》](http://read.douban.com/ebook/198648/)是暑假实习时就买了，一直比较向往着函数式编程却拖延了很久没行动起来。小书只有几十页，本是 github 上一个开源的项目，我喜欢这种轻巧的文字。语法部分看下来，再看下类与继承，只花了半天的时间，而且心情非常愉悦，然后就可以开始我菜鸟的第一次试飞了。

生产者-消费者模型没什么好说的了，就是读写共享缓冲区，pv 操作控制是否冲突。更多的就是冲着 coffeescript 来的。下面是一些凌乱但自认为有思考价值的记录，或许后续我会继续写一些 coffeescript 的学习笔记，再做深入的研究。

<!-- more -->

## **demo，可尝试点击“生产”“消费”按钮**

<iframe src="/assets/demo/coffee_pc_demo/pro-con.html" width="780" height="336" scrolling="no"></iframe>

## **litten 如是想：**

- 我一定要学一门，至少一门函数式风格编程语言，没有太深远的想法，就觉得它就是我的菜
- 这个程序是 66 行的 coffeescript 代码，最后编译后得到了 122 行的 js 代码，说明编程效率提升显著
- 括号，方括号，花括号，还有逗号有时候会多烦人，特别是使用过 ExtJs 的人，而 coffeescript 可以没有
- 用法简洁的 jquery 在 coffeescript 里面会更简洁
- 关于 coffeescript 的循环，它不推荐你使用 for 循环，而是使用“推导”，暴露在底层的循环只有 while 语法
- 事件绑定时，使用=>可以免去 js 上下文切换 this 的麻烦
- coffeescript 的数组迭代方法非常的酷，三言两语说不清
- javascript 会是下一个 JVM 吗？
- 站在产品的角度，我认为 coffeescript 这名字太长了-\_-!

## **附上源码**

```coffeescript
	N = 10

	class ProCon
		data:
			mutex:1
			empty:N
			full:0
			front:0
			rear:0
			buf: []
		init:->
			i = 0
			while i<N
				newDom = $('<div class="bufBox"><div class="bufCover">'+i+'</div>'+i+'</div>')
				$('#buf').append(newDom)
				@data.buf.push 'e'
				i++
			$('#produce').click =>
				@producer()
			$('#consume').click =>
				@consumer()
		p:(num)->
			return --num
		v:(num)->
			return ++num
		produceItem:->
			$('<p class="desPro">生产了产品</p>').insertBefore $("#des p:first")
			return 'm'
		consumeItem:->
			$('<p class="desCon">消费了产品</p>').insertBefore $("#des p:first")
		enterItem:(item) ->
			@data.front = (@data.front+1)%N
			@data.buf[@data.front] = item;
			str = "存入产品#{@data.buf[@data.front]}到缓冲区#{@data.front}"
			$("<p class='desPro'>#{str}</p>").insertBefore $("#des p:first")
			$($('.bufCover')[@data.front]).animate
				"height":"50px"
		removeItem:->
			@data.rear = (@data.rear + 1) % N;
			@data.buf[@data.rear] = 'e';
			str = "取出产品#{@data.buf[@data.rear]}从缓冲区#{@data.rear}"
			$("<p class='desCon'>#{str}</p>").insertBefore $("#des p:first")
			$($('.bufCover')[@data.rear]).animate
				"height":"0px"
		producer:->
			if @data.full==N
				$("<p class='desSpe'>缓冲区已全满</p>").insertBefore $("#des p:first")
				return
			item = @produceItem()
			@data.empty = @p(@data.empty)
			@data.mutex = @p(@data.mutex)
			@enterItem(item)
			@data.mutex = @v(@data.mutex)
			@data.full = @v(@data.full)
		consumer:->
			if @data.empty==N
				$("<p class='desSpe'>缓冲区已空</p>").insertBefore $("#des p:first")
				return
			@data.full = @p(@data.full)
			@data.mutex = @p(@data.mutex)
			@removeItem()
			@data.mutex = @v(@data.mutex)
			@data.empty = @v(@data.empty)
			@consumeItem()

	procon = new ProCon
	procon.init();
```
