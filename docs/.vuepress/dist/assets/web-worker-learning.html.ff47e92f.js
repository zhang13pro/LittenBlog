import{_ as t,e as n,o as s,c as a,a as e,f as p,b as o,d as i}from"./app.3398e39f.js";var c="/assets/blogImg/web_worker1.png",l="/assets/blogImg/web_worker2.png";const w={},d=e("h2",{id:"date-2013-09-25-10-55",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#date-2013-09-25-10-55","aria-hidden":"true"},"#"),o(" date: 2013-09-25 10:55")],-1),k=o("js \u662F\u5355\u7EBF\u7A0B\u7684\u8BED\u8A00\uFF0C\u7531\u4E8E\u6B64\u7279\u6027\uFF0C\u6211\u4EEC\u5728\u5904\u7406\u5E76\u53D1\u65F6\u9700\u8981\u7528\u5230\u4E00\u4E9B\u6280\u5DE7\uFF0C\u5982 setTimeout()\uFF0CsetInterval()\uFF0C\u8C03\u7528 XMLHttpRequest \u7B49\u3002 \u4F46\u8FD9\u91CC\u7684\u5E76\u53D1\u53EA\u662F\u975E\u963B\u585E\uFF08\u53C2\u7167 John Resig \u7684\u6587\u7AE0"),g={href:"http://ejohn.org/blog/how-javascript-timers-work/",target:"_blank",rel:"noopener noreferrer"},u=o("How JavaScript Timers Work"),m=o("\uFF09\uFF0C\u771F\u6B63\u7684\u591A\u7EBF\u7A0B\u7F16\u7A0B\u5219\u9700\u8981 HTML5 \u7684 web worker\u3002"),h=i(`<p>###<strong>\u3010worker \u7684\u4F7F\u7528\u3011</strong> web worker \u7684\u4F7F\u7528\u975E\u5E38\u7B80\u5355\uFF0C\u7EBF\u7A0B\u4E4B\u95F4\u901A\u8BAF\u7684 api \u4E0E html5 postmessage \u6216 node.js \u91CC\u9762\u7684 socket.io \u65B9\u6CD5\u7C7B\u4F3C\u3002</p><p>\u901A\u8BAF\uFF1A</p><ol><li>\u53D1\u9001\u65B9\uFF1ApostMessage(data)</li><li>\u63A5\u6536\u65B9\uFF1Aonmessage(event)</li></ol><p>\u7EC8\u6B62 web worker:</p><ol><li>\u5B50\u7EBF\u7A0B: self.close()</li><li>\u7236\u7EBF\u7A0B: worker.terminate()</li></ol><p>\u6309\u7167\u76EE\u524D w3c \u89C4\u8303\uFF0Cweb worker \u5206\u4E3A\u4E24\u79CD\uFF1A\u4E13\u7528 worker(Dedicated Worker)\u548C\u5171\u4EAB worker(Shared Worker)\u3002</p><p>###<strong>\u3010\u4E13\u7528 worker\u3011</strong> \u5B9E\u4F8B\u5316\u4E00\u4E2A web worker \u5BF9\u8C61\uFF0C\u5F02\u6B65\u52A0\u8F7D\u5B50\u7EBF\u7A0B\u6587\u4EF6 worker.js\uFF0C\u5176\u4E2D\u7684\u4EE3\u7801\u5C06\u6267\u884C\u3002</p><pre><code>var worker = new Worker(&quot;worker.js&quot;);
</code></pre><p>\u7ED9 worker \u589E\u52A0\u4FA6\u542C</p><pre><code>worker.onmessage = function (event) {
    alert(event.data);
};
</code></pre><p>\u5728 worker.js \u91CC\uFF0C\u53D1\u9001\u6D88\u606F\u7ED9\u7236\u7EBF\u7A0B</p><pre><code>postMessage(&#39;hello\uFF0Cimweb&#39;);
</code></pre><p>\u5728\u7236\u7EBF\u7A0B\u9875\u9762\u5C31\u80FD\u770B\u5230\u53D1\u9001\u8FC7\u6765\u7684\u4FE1\u606F\u4E86\u3002</p><p>\u540C\u65F6\uFF0C\u5728 web worker \u6807\u51C6\u4E2D\uFF0C\u662F\u652F\u6301\u5BF9\u8C61\u53C2\u6570\u7684\uFF0C\u4E5F\u5C31\u662F\u8BF4\u6211\u4EEC\u80FD\u591F\u4F20\u9012 json \u6570\u636E\u3002\u518D\u770B\u4E00\u4E2A\u7A0D\u5FAE\u590D\u6742\u70B9\u7684\u4F8B\u5B50\uFF0C\u7236\u7EBF\u7A0B\uFF1A</p><pre><code>var worker = new Worker(&quot;worker.js&quot;);
worker.onmessage = function (event) {
	document.getElementById(&quot;result&quot;).innerHTML=event.data;
};

function start(){
	worker.postMessage({&#39;cmd&#39;: &#39;start&#39;, &#39;msg&#39;: &#39;start&#39;});
}

function pause(){
	worker.postMessage({&#39;cmd&#39;: &#39;pause&#39;, &#39;msg&#39;: &#39;pause&#39;});
}

function stop(){
	worker.postMessage({&#39;cmd&#39;: &#39;stop&#39;, &#39;msg&#39;: &#39;stop&#39;});
}

function msg(){
	worker.postMessage({&#39;msg&#39;: &#39;hello imweb&#39;});
}
</code></pre><p>worker.js\uFF1A</p><pre><code>self.onmessage = function (e) {
	var data = e.data;
  	switch (data.cmd) {
    case &#39;start&#39;:
    	taskStart(); //\u5927\u91CF\u6570\u636E\u5904\u7406
      	postMessage(&#39;WORKER DO: &#39; + data.msg);
      	break;
    case &#39;pause&#39;:
    	taskPause();
      	postMessage(&#39;WORKER DO: &#39; + data.msg);
      	break;
    case &#39;stop&#39;:
      	postMessage(&#39;WORKER DO: &#39; + data.msg);
      	self.close(); //\u7EC8\u6B62web worker
      	break;
    default:
      	postMessage(&#39;MESSAGE: &#39; + data.msg);
  	};
};
</code></pre><p>\u4ECE\u4E0A\u9762\u7684\u4F8B\u5B50\u53EF\u4EE5\u770B\u5230\uFF0C\u4E00\u662F\u5229\u7528\u5BF9\u8C61\u53C2\u6570\uFF0C\u8FDB\u7A0B\u4E4B\u95F4\u80FD\u591F\u8F83\u7075\u6D3B\u7684\u5B9E\u73B0\u63A7\u5236\uFF1B\u4E8C\u662F\u5F53 woker \u6267\u884C taskStart()\u5904\u7406\u5927\u91CF\u6570\u636E\u65F6\uFF0C\u53EA\u5728\u5B50\u8FDB\u7A0B\u5904\u7406\uFF0C\u4E0D\u4F1A\u7ED9\u4E3B\u9875\u9762\u5E26\u6765\u963B\u585E\uFF0C\u901A\u5E38\uFF0C\u5904\u7406\u5927\u91CF\u6570\u636E\u4F1A\u6D88\u6781\u5F71\u54CD\u7A0B\u5E8F\u7684\u54CD\u5E94\u80FD\u529B\uFF0C\u800C web worker \u901A\u8FC7\u8FD9\u6837\u7684\u65B9\u5F0F\uFF0C\u80FD\u63D0\u4F9B\u4E00\u4E2A\u66F4\u6D41\u7545\u66F4\u5B9E\u65F6\u7684 UI\u3002</p><p>###<strong>\u3010\u5171\u4EAB worker\u3011</strong> \u5171\u4EAB worker \u5141\u8BB8\u7EBF\u7A0B\u5728\u540C\u6E90\u4E2D\u7684\u591A\u4E2A\u9875\u9762\u95F4\u8FDB\u884C\u5171\u4EAB\uFF0C\u4F8B\u5982\uFF1A\u540C\u6E90\u4E2D\u6240\u6709\u9875\u9762\u6216\u811A\u672C\u53EF\u4EE5\u4E0E\u540C\u4E00\u4E2A\u5171\u4EAB\u7EBF\u7A0B\u901A\u4FE1\u3002\u5B83\u7684\u5B9E\u4F8B\u5316\u4E0E\u4E8B\u4EF6\u4FA6\u542C\u7684\u5199\u6CD5\u4E0E\u4E13\u7528 worker \u7565\u6709\u4E0D\u540C,\u4E3B\u9875\u9762\uFF1A</p><pre><code>var worker = new SharedWorker(&#39;shared-worker.js&#39;);
worker.port.onmessage = function(e) {
    msg = &#39;Someone just said &quot;&#39; + e.data.message + &#39;&quot;. That is message number &#39; + e.data.counter;
    console.log(msg);
};
worker.port.postMessage(&#39;hello shared worker!&#39;);
</code></pre><p>shared-worker.js:</p><pre><code>var counter = 0;
var connections = [];
onconnect = function(eConn) {
</code></pre><p>var port = eConn.ports[0]; // \u6B64\u8FDE\u63A5\u7684\u7279\u6709 port</p><p>//\u5F53\u6709\u6D88\u606F\u7684\u65F6\u5019\u901A\u77E5\u6240\u6709\u7684\u8FDE\u63A5 port.onmessage = function(eMsg) { counter++; for (var i=0; i &lt; connections.length; i++) { connections[i].postMessage({ message: eMsg.data, counter: counter }); } } port.start(); connections.push(port);</p><p>\u7528\u4E24\u4E2A\u7A97\u53E3\u6253\u5F00\u8FD9\u4E2A\u9875\u9762\uFF0C\u7B2C\u4E00\u4E2A\u663E\u793A\uFF1A<strong>Someone just said &quot;Hello shared worker!&quot; This is message number 1</strong>\uFF0C\u7B2C\u4E8C\u4E2A\u4E5F\u6536\u5230\u4E00\u6837\u7684\u4FE1\u606F\uFF0C \u4F46\u662F\u540E\u9762\u662F<strong>message number 2</strong>\u3002</p><p>###<strong>\u3010\u5B89\u5168\u6027\u548C\u9519\u8BEF\u68C0\u67E5\u3011</strong> \u51FA\u4E8E\u5B89\u5168\u6027\u7684\u8003\u8651\uFF0Cweb worker \u5FC5\u987B\u9075\u5B88\u540C\u6E90\u7B56\u7565\u3002\u540C\u65F6\uFF0C\u5B83\u7684\u5168\u5C40\u5BF9\u8C61\u662F worker \u5BF9\u8C61\u672C\u8EAB\uFF0Cthis \u548C self \u5F15\u7528\u7684\u90FD\u662F worker \u5BF9\u8C61\u3002<br> \u53EA\u80FD\u8BBF\u95EE\uFF1A</p><ol><li>navigator \u5BF9\u8C61\uFF08\u4EC5\u9650 appName, appVersion, platform, userAgent\uFF09</li><li>location \u5BF9\u8C61\uFF08\u53EA\u8BFB\uFF09</li><li>XMLHttpRequest</li><li>setTimeout(), setInterval(), clearTimeout()\u548C clearInterval()\u65B9\u6CD5</li></ol><p>\u4E0D\u80FD\u8BBF\u95EE\uFF1A</p><ol><li>DOM(\u4E0D\u662F\u7EBF\u7A0B\u5B89\u5168\u7684)</li><li>window \u5BF9\u8C61</li><li>document \u5BF9\u8C61</li><li>parent \u5BF9\u8C61</li></ol><p>worker \u5185\u90E8\u51FA\u73B0\u9519\u8BEF\u65F6\uFF0C\u53EF\u4EE5\u7528 worker.onerror \u4FA6\u542C\u5230\uFF0Cerror \u7684\u4E8B\u4EF6\u6709\u4E09\u4E2A\u5C5E\u6027\uFF1A</p><ol><li>filename: \u53D1\u751F\u9519\u8BEF\u7684\u6587\u4EF6\u540D</li><li>lineno: \u4EE3\u7801\u884C\u53F7</li><li>message: \u5B8C\u6574\u7684\u9519\u8BEF\u4FE1\u606F</li></ol><p>\u5982\uFF1A</p><pre><code>worker.onerror = function(e) {
	console.log(e.filename+&quot;ERROR on line&quot;+e.lineno+&quot;,msg:&quot;+e.message);
}
</code></pre><p>###<strong>\u3010web worker \u7684\u5176\u4ED6\u5C1D\u8BD5\u3011</strong> \u5BF9\u4E8E\u6BD4\u8F83\u6D88\u8017\u65F6\u95F4\u7684\u64CD\u4F5C\uFF0C\u6211\u4EEC\u53EF\u770B\u5230 web worker \u80FD\u591F\u53D1\u6325\u5B83\u7684\u4F5C\u7528\u3002\u6BD4\u5982\uFF1A\u5927\u91CF\u6570\u636E\u6392\u5E8F\uFF0C\u7CBE\u786E\u5230\u50CF\u7D20\u7684 canvas \u8BA1\u7B97\u7B49\u3002\u800C\u6211\u4EEC\u53C8\u77E5\u9053\uFF0Cjsonp \u52A0\u8F7D\u6570\u636E\u65F6\uFF0C\u52A8\u6001\u521B\u5EFA script \u6807\u7B7E\uFF0C\u52A0\u8F7D\u548C\u6267\u884C\u8FD9\u4E9B\u8FC7\u7A0B\u90FD\u662F\u963B\u585E\u5F0F\u7684\uFF0C\u800C web worker \u6B63\u597D\u53EF\u4EE5\u5F02\u6B65\u52A0\u8F7D\uFF0C\u8FD9\u4F1A\u662F\u66F4\u5FEB\u7684\u65B9\u5F0F\u5417\uFF1F\u5E26\u7740\u8FD9\u4E2A\u7591\u95EE\u6211\u505A\u4E86\u4E0B\u9762\u7684\u8BD5\u9A8C\uFF0C\u5206\u522B\u7528 jsonp \u548C worker \u7684\u65B9\u5F0F\u53BB\u52A0\u8F7D\u6587\u4EF6\uFF0C\u8BA1\u7B97\u6570\u636E\u8FD4\u56DE\u65F6\u5EF6\uFF1A</p><pre><code>function tryJsonp(){
	var d = (new Date()).valueOf();
	var jsonp=document.createElement(&quot;script&quot;);
    jsonp.type=&quot;text/javascript&quot;;
    jsonp.src=&quot;worker.js?_=&quot;+d;
    document.getElementsByTagName(&quot;head&quot;)[0].appendChild(jsonp);
    jsonp.onload = jsonp.onreadystatechange = function(){
	   	if(!this.readyState||this.readyState==&#39;loaded&#39;||this.readyState==&#39;complete&#39;){
	   		console.log(&#39;jsonp: &#39;+ ((new Date()).valueOf() - d));
		}
	}
}
function tryWorker(){
	var d = (new Date()).valueOf();
	var worker = new Worker(&quot;worker.js&quot;);
	worker.postMessage({&#39;cmd&#39;: &#39;start&#39;, &#39;msg&#39;: &#39;start&#39;});
	worker.onmessage = function (event) {
		console.log(&#39;web worker: &#39;+ ((new Date()).valueOf() - d));
	};
}
</code></pre><p>\u7B2C\u4E00\u6B21\u52A0\u8F7D\u662F\u4E00\u4EFD 1k \u5927\u5C0F\u7684\u6587\u4EF6\uFF0C\u6BCF\u4E2A\u65B9\u6CD5\u91CD\u590D 5 \u6B21\uFF0C\u8FD4\u56DE\u7ED3\u679C\u4E3A:<br><img src="`+c+'" alt="1k\u6587\u4EF6\u91CD\u590D5\u6B21"><br> \u7B2C\u4E8C\u6B21\u52A0\u8F7D 1800k \u5927\u5C0F\u7684\u6587\u4EF6\uFF0C\u8FD4\u56DE\u7ED3\u679C\u4E3A\uFF1A<br><img src="'+l+'" alt="1800k\u6587\u4EF6\u91CD\u590D5\u6B21"><br> \u53EF\u4EE5\u770B\u5230\u5BF9\u4E8E\u8F83\u5C0F\u7684\u6570\u636E\uFF0Cjsonp \u8FD8\u662F\u6BD4 web worker \u8981\u5FEB\uFF0C\u8FD9\u53EF\u80FD\u662F\u5B9E\u4F8B\u5316 worker \u5BF9\u8C61\u65F6\u5E26\u6765\u7684\u5F71\u54CD\uFF1B\u800C\u6570\u636E\u504F\u5927\u65F6\uFF0Cweb worker \u7684\u52A0\u8F7D\u5C06\u4F1A\u66F4\u4F18\uFF0C\u800C\u4E14\u5B83\u53EF\u4EE5\u5F02\u6B65\u52A0\u8F7D\u3002</p><p>THE END.</p>',37);function f(b,v){const r=n("ExternalLinkIcon");return s(),a("div",null,[d,e("p",null,[k,e("a",g,[u,p(r)]),m]),h])}var j=t(w,[["render",f],["__file","web-worker-learning.html.vue"]]);export{j as default};
