import{_ as n,o as s,c as a,d as t}from"./app.3398e39f.js";const p={},e=t(`<h2 id="date-2013-10-06-10-55" tabindex="-1"><a class="header-anchor" href="#date-2013-10-06-10-55" aria-hidden="true">#</a> date: 2013-10-06 10:55</h2><p>js \u7F16\u7A0B\u65F6\u7ECF\u5E38\u4F1A\u7528\u5230\u5F02\u6B65\u5904\u7406\uFF0C\u800C\u5F02\u6B65\u4F1A\u5E26\u4E86\u6240\u8C13\u7684\u5E76\u53D1\u95EE\u9898\u3002\u6BD4\u5982\uFF0C\u4F60\u9700\u8981\u5411\u670D\u52A1\u5668\u53D1\u51FA\u591A\u4E2A ajax \u8BF7\u6C42\uFF0C\u7136\u540E\u5728\u8FD4\u56DE\u6240\u6709\u7ED3\u679C\u540E\u505A\u8FDB\u4E00\u6B65\u5904\u7406\uFF0C\u540C\u65F6\u8981\u663E\u793A\u52A8\u753B\u3002\u56E0\u6B64\u6211\u4EEC\u9700\u8981\u7528\u5230\u4EE5\u4E0B\u7684\u65B9\u6848\u3002</p><p>###<strong>\u3010\u5B9A\u4E49\u51FD\u6570\u3011</strong> \u5B9A\u4E49 Batch \u51FD\u6570\u3002\u53C2\u6570\u4E3A\u51FD\u6570\u7EC4\u6210\u7684\u6570\u7EC4 functions\uFF0C\u8FD9\u91CC\u9762\u7684\u51FD\u6570\u5C06\u7A0D\u540E\u6267\u884C\uFF0C\u4EE5\u53CA\u8FD9\u4E9B\u51FD\u6570\u5B8C\u6210\u540E\u7684\u56DE\u8C03 completionHandler\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Batch</span><span class="token punctuation">(</span><span class="token parameter">functions<span class="token punctuation">,</span> completionHandler</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>_functions <span class="token operator">=</span> functions
  <span class="token keyword">this</span><span class="token punctuation">.</span>_completionHandler <span class="token operator">=</span> completionHandler
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>###<strong>\u3010\u542F\u52A8\u8BF7\u6C42\u3011</strong> \u7528 this._remaining \u6765\u8BB0\u5F55\u672A\u6267\u884C\u7684\u51FD\u6570\u91CF\uFF0C\u7136\u540E\u6267\u884C\u5404\u4E2A\u51FD\u6570\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token class-name">Batch</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">execute</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> i
  <span class="token keyword">var</span> functions <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_functions
  <span class="token keyword">var</span> length <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>_remaining <span class="token operator">=</span> functions<span class="token punctuation">.</span>length<span class="token punctuation">)</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>_results <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> length<span class="token punctuation">;</span> i <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    functions<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>###<strong>\u3010\u8BA9 Batch \u77E5\u9053\u51FD\u6570\u5B8C\u6210\u3011</strong> \u7528 this._results \u6765\u8BB0\u5F55\u6267\u884C\u7ED3\u679C\uFF0C\u5F53 this._remaining \u4E3A 0 \u65F6\uFF0C\u8868\u793A\u6240\u6709\u51FD\u6570\u5DF2\u6267\u884C\u5B8C\u6BD5\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token class-name">Batch</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">done</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">done</span><span class="token punctuation">(</span><span class="token parameter">result</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>_remaining <span class="token operator">-=</span> <span class="token number">1</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> result <span class="token operator">!==</span> <span class="token string">&#39;undefined&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>_results<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>_remaining <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">_completionHandler</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>_results<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5230\u8FD9\u91CC\uFF0C\u5C31\u5B8C\u6210\u4E86 Batch \u8FD9\u4E2A\u51FD\u6570\u7684\u7B80\u5355\u529F\u80FD\u4E86\u3002</p><p>###<strong>\u3010\u4F7F\u7528\u3011</strong> \u5C06 Batch \u5E94\u7528\u5230\u5B9E\u9645\u4E0A\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> urls <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token string">&#39;/api/gists/1000&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;/api/gists/1001&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;/api/gists/1002&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;/api/gists/1003&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;/api/gists/1004&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">// ...</span>
  <span class="token string">&#39;/api/gists/1337&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">// etc...</span>
<span class="token punctuation">]</span>

<span class="token keyword">var</span> i
<span class="token keyword">var</span> length <span class="token operator">=</span> urls<span class="token punctuation">.</span>length
<span class="token keyword">var</span> batchFunctions <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

<span class="token comment">// \u521B\u5EFA\u9700\u8981\u88ABbatch\u6267\u884C\u7684\u51FD\u6570\u6570\u7EC4</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> length<span class="token punctuation">;</span> i <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  batchFunctions<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">batch</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    $<span class="token punctuation">.</span>ajax<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>urls<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      batch<span class="token punctuation">.</span><span class="token function">done</span><span class="token punctuation">(</span>response<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> myBatch <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Batch</span><span class="token punctuation">(</span>batchFunctions<span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">results</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">//\u8FD4\u56DE\u5404\u4E2A\u51FD\u6570\u7684\u7ED3\u679C\u6570\u7EC4</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

myBatch<span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// \u5F00\u59CB\u6267\u884C</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u6837\u7684\u65B9\u6848\u5176\u5B9E\u662F\u53C2\u8003\u4E86\u201C\u89C2\u5BDF\u8005\u201D\u6A21\u5F0F\u3002\u76F8\u5173\u6E90\u7801\u63A8\u8350 nodeJs \u7684 Async.js \u5E93\u3002</p><p>THE END.</p>`,13),o=[e];function c(i,l){return s(),a("div",null,o)}var r=n(p,[["render",c],["__file","handling-asynchronous-js.html.vue"]]);export{r as default};