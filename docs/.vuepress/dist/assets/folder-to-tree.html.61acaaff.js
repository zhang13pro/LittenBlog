import{_ as e,e as i,o,c as p,a as n,f as c,d as s,b as a}from"./app.3398e39f.js";const l={},u=s('<h2 id="date-2014-07-25-08-52" tabindex="-1"><a class="header-anchor" href="#date-2014-07-25-08-52" aria-hidden="true">#</a> date: 2014-07-25 08:52</h2><p>#folder2tree</p><blockquote><p>\u7528\u5B57\u7B26\u5C55\u793A\u6587\u4EF6\u5939\u7ED3\u6784</p></blockquote><h3 id="\u524D\u8A00-before" tabindex="-1"><a class="header-anchor" href="#\u524D\u8A00-before" aria-hidden="true">#</a> \u524D\u8A00 Before:</h3><p>\u5982\u4F55\u4ECB\u7ECD\u4E00\u4E2A\u6587\u4EF6\u5939\uFF0C\u7B80\u76F4\u7EA0\u7ED3\u3002</p><p>\u8981\u4E48<strong>\u56FE\u7247</strong>\uFF0C\u5982\u679C\u5728\u622A\u56FE\u524D\uFF0C\u4F60\u771F\u7684\u613F\u610F\uFF0C\u4E00\u5C42\u4E00\u5C42\u4E00\u5C42\u7684\u5265\u5F00\u6211\u7684\u5FC3\u3002\u4F60\u4F1A\u9F3B\u9178\u4F60\u4F1A\u6D41\u6CEA\uFF1B<br> \u8981\u4E48<strong>\u9760\u8BF4</strong>\uFF0C\u90A3\u4E48\u4F60\u53EF\u80FD\u5F97\u8FD9\u4E48\u8BF4\uFF1A\u4ECE\u524D\uFF0C\u6709\u4E00\u4E2A\u6587\u4EF6\u5939\uFF0C\u6587\u4EF6\u5939\u91CC\u6709\u4E24\u5F20\u56FE\u7247\uFF1B\u5927\u56FE\u7247\u5728\u8DDF\u5C0F\u56FE\u7247\u8BB2\u6545\u4E8B\u2026\u8BB2\u4E2A\u4EC0\u4E48\u6545\u4E8B\u989D</p>',6),r=n("strong",null,"\u56E0\u800C\uFF0C\u7528\u7EAF\u5B57\u7B26\u63CF\u8FF0\u6587\u4EF6\u5939\u7684\u5C0F\u5DE5\u5177\u5FC5\u987B\u5F97\u6709\u5440\u3002",-1),d={href:"https://github.com/litten/folder2tree",target:"_blank",rel:"noopener noreferrer"},v=a("github here"),k=a("."),m=s(`<h3 id="\u4F7F\u7528-usage" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528-usage" aria-hidden="true">#</a> \u4F7F\u7528 Usage:</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>@param <span class="token punctuation">{</span>Dom<span class="token punctuation">}</span> \u7236\u7EA7dom\u8282\u70B9
@param <span class="token punctuation">{</span>Array<span class="token punctuation">}</span> \u63CF\u8FF0\u6587\u4EF6\u5939\u5C42\u7EA7\u5173\u7CFB\u5BF9\u8C61

folder2tree<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&quot;ctn&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>
	<span class="token punctuation">{</span>
		<span class="token string-property property">&quot;img&quot;</span> <span class="token operator">:</span> <span class="token punctuation">[</span>
			<span class="token string">&quot;sprite.png&quot;</span><span class="token punctuation">,</span>
			<span class="token string">&quot;bg.png&quot;</span>
		<span class="token punctuation">]</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span>
		<span class="token string-property property">&quot;js&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
			<span class="token string-property property">&quot;common&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
				<span class="token string">&quot;jquery.js&quot;</span><span class="token punctuation">,</span><span class="token punctuation">{</span>
					<span class="token string-property property">&quot;highcharts&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
						<span class="token string-property property">&quot;modules&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;exporting.js&quot;</span><span class="token punctuation">]</span>
					<span class="token punctuation">}</span><span class="token punctuation">,</span>
					<span class="token string">&quot;highcharts.js&quot;</span>
				<span class="token punctuation">]</span><span class="token punctuation">}</span>
			<span class="token punctuation">]</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span>
			<span class="token string-property property">&quot;index&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
				<span class="token string">&quot;mian.js&quot;</span><span class="token punctuation">,</span><span class="token punctuation">{</span>
					<span class="token string-property property">&quot;modules&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;mod.video.js&quot;</span><span class="token punctuation">]</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">]</span>
		<span class="token punctuation">}</span><span class="token punctuation">]</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span>
		<span class="token string-property property">&quot;css&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
			<span class="token string">&quot;base.css&quot;</span><span class="token punctuation">,</span>
			<span class="token string">&quot;index-main.css&quot;</span><span class="token punctuation">,</span>
			<span class="token string">&quot;index-video.css&quot;</span>
		<span class="token punctuation">]</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token string">&quot;index.html&quot;</span><span class="token punctuation">,</span>
	<span class="token string">&quot;favicon.ico&quot;</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5C55\u793A-show" tabindex="-1"><a class="header-anchor" href="#\u5C55\u793A-show" aria-hidden="true">#</a> \u5C55\u793A Show:</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u251C\u2500img
\u2502\u2003\u251C\u2500sprite.png
\u2502\u2003\u2514\u2500bg.png
\u251C\u2500js
\u2502\u2003\u251C\u2500common
\u2502\u2003\u2502\u2003\u251C\u2500jquery.js
\u2502\u2003\u2502\u2003\u2514\u2500highcharts
\u2502\u2003\u2502\u2003\u2003  \u251C\u2500modules
\u2502\u2003\u2502\u2003\u2003  \u2502\u2003\u2514\u2500exporting.js
\u2502\u2003\u2502\u2003\u2003  \u2514\u2500highcharts.js
\u2502\u2003\u2514\u2500index
\u2502\u2003\u2003  \u251C\u2500mian.js
\u2502\u2003\u2003  \u2514\u2500modules
\u2502\u2003\u2003  \u2003  \u2514\u2500mod.video.js
\u251C\u2500css
\u2502\u2003\u251C\u2500base.css
\u2502\u2003\u251C\u2500index-main.css
\u2502\u2003\u2514\u2500index-video.css
\u251C\u2500index.html
\u2514\u2500favicon.ico
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function b(h,g){const t=i("ExternalLinkIcon");return o(),p("div",null,[u,n("p",null,[r,n("a",d,[v,c(t)]),k]),m])}var _=e(l,[["render",b],["__file","folder-to-tree.html.vue"]]);export{_ as default};
