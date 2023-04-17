import{_ as s,o as n,c as a,e as l}from"./app.bd964223.js";const b=JSON.parse('{"title":"CSS","description":"","frontmatter":{},"headers":[{"level":2,"title":"CSS盒子模型","slug":"css盒子模型","link":"#css盒子模型","children":[{"level":3,"title":"基本概念","slug":"基本概念","link":"#基本概念","children":[]},{"level":3,"title":"js获取盒模型的宽和高","slug":"js获取盒模型的宽和高","link":"#js获取盒模型的宽和高","children":[]}]},{"level":2,"title":"日常积累","slug":"日常积累","link":"#日常积累","children":[{"level":3,"title":"省略号","slug":"省略号","link":"#省略号","children":[]},{"level":3,"title":"隐藏滑动条","slug":"隐藏滑动条","link":"#隐藏滑动条","children":[]},{"level":3,"title":"CSS动画","slug":"css动画","link":"#css动画","children":[]},{"level":3,"title":"transition","slug":"transition","link":"#transition","children":[]}]}],"relativePath":"front-base/html/css.md","lastUpdated":1681743445000}'),p={name:"front-base/html/css.md"},e=l(`<h1 id="css" tabindex="-1">CSS <a class="header-anchor" href="#css" aria-hidden="true">#</a></h1><h2 id="css盒子模型" tabindex="-1">CSS盒子模型 <a class="header-anchor" href="#css盒子模型" aria-hidden="true">#</a></h2><h3 id="基本概念" tabindex="-1">基本概念 <a class="header-anchor" href="#基本概念" aria-hidden="true">#</a></h3><p>CSS盒模型本质上是一个盒子，封装周围的HTML元素，它包括：边距，边框，填充，和实际内容。</p><p>标准模型：<code>Box Model = margin + border + padding + content</code></p><ul><li>IE模型：<code>width = content</code></li><li>标准模型：<code>width = content + padding + border</code></li></ul><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki vitesse-dark vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#DBD7CAEE;">//设置标准模型</span></span>
<span class="line"><span style="color:#4D9375;">box-sizing</span><span style="color:#DBD7CAEE;">: </span><span style="color:#4D9375;">content-box</span><span style="color:#DBD7CAEE;">;</span></span>
<span class="line"><span style="color:#DBD7CAEE;">//设置IE模型</span></span>
<span class="line"><span style="color:#4D9375;">box-sizing</span><span style="color:#DBD7CAEE;">: </span><span style="color:#4D9375;">border-box</span><span style="color:#DBD7CAEE;">;</span></span>
<span class="line"></span></code></pre><pre class="shiki vitesse-light vp-code-light" tabindex="0"><code><span class="line"><span style="color:#393A34;">//设置标准模型</span></span>
<span class="line"><span style="color:#1E754F;">box-sizing</span><span style="color:#393A34;">: </span><span style="color:#1E754F;">content-box</span><span style="color:#393A34;">;</span></span>
<span class="line"><span style="color:#393A34;">//设置IE模型</span></span>
<span class="line"><span style="color:#1E754F;">box-sizing</span><span style="color:#393A34;">: </span><span style="color:#1E754F;">border-box</span><span style="color:#393A34;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="js获取盒模型的宽和高" tabindex="-1">js获取盒模型的宽和高 <a class="header-anchor" href="#js获取盒模型的宽和高" aria-hidden="true">#</a></h3><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki vitesse-dark vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#758575DD;">//只能获取内联样式设置的宽高</span></span>
<span class="line"><span style="color:#BD976A;">dom</span><span style="color:#666666;">.</span><span style="color:#BD976A;">style</span><span style="color:#666666;">.</span><span style="color:#BD976A;">width</span><span style="color:#CB7676;">/</span><span style="color:#BD976A;">height</span></span>
<span class="line"><span style="color:#758575DD;">//获取渲染后即时运行的宽高，值是准确的。但只支持 IE</span></span>
<span class="line"><span style="color:#BD976A;">dom</span><span style="color:#666666;">.</span><span style="color:#BD976A;">currentStyle</span><span style="color:#666666;">.</span><span style="color:#BD976A;">width</span><span style="color:#CB7676;">/</span><span style="color:#BD976A;">height</span></span>
<span class="line"><span style="color:#758575DD;">//获取渲染后即时运行的宽高，值是准确的。兼容性更好</span></span>
<span class="line"><span style="color:#BD976A;">window</span><span style="color:#666666;">.</span><span style="color:#80A665;">getComputedStyle</span><span style="color:#666666;">(</span><span style="color:#BD976A;">dom</span><span style="color:#666666;">).</span><span style="color:#BD976A;">width</span><span style="color:#CB7676;">/</span><span style="color:#BD976A;">height</span><span style="color:#666666;">;</span></span>
<span class="line"><span style="color:#758575DD;">//获取渲染后即时运行的宽高，值是准确的。兼容性也很好，一般用来获取元素的绝对位置，getBoundingClientRect()会得到4个值：left, top, width, height</span></span>
<span class="line"><span style="color:#BD976A;">dom</span><span style="color:#666666;">.</span><span style="color:#80A665;">getBoundingClientRect</span><span style="color:#666666;">().</span><span style="color:#BD976A;">width</span><span style="color:#CB7676;">/</span><span style="color:#BD976A;">height</span><span style="color:#666666;">;</span></span>
<span class="line"></span></code></pre><pre class="shiki vitesse-light vp-code-light" tabindex="0"><code><span class="line"><span style="color:#A0ADA0;">//只能获取内联样式设置的宽高</span></span>
<span class="line"><span style="color:#B07D48;">dom</span><span style="color:#999999;">.</span><span style="color:#B07D48;">style</span><span style="color:#999999;">.</span><span style="color:#B07D48;">width</span><span style="color:#AB5959;">/</span><span style="color:#B07D48;">height</span></span>
<span class="line"><span style="color:#A0ADA0;">//获取渲染后即时运行的宽高，值是准确的。但只支持 IE</span></span>
<span class="line"><span style="color:#B07D48;">dom</span><span style="color:#999999;">.</span><span style="color:#B07D48;">currentStyle</span><span style="color:#999999;">.</span><span style="color:#B07D48;">width</span><span style="color:#AB5959;">/</span><span style="color:#B07D48;">height</span></span>
<span class="line"><span style="color:#A0ADA0;">//获取渲染后即时运行的宽高，值是准确的。兼容性更好</span></span>
<span class="line"><span style="color:#B07D48;">window</span><span style="color:#999999;">.</span><span style="color:#59873A;">getComputedStyle</span><span style="color:#999999;">(</span><span style="color:#B07D48;">dom</span><span style="color:#999999;">).</span><span style="color:#B07D48;">width</span><span style="color:#AB5959;">/</span><span style="color:#B07D48;">height</span><span style="color:#999999;">;</span></span>
<span class="line"><span style="color:#A0ADA0;">//获取渲染后即时运行的宽高，值是准确的。兼容性也很好，一般用来获取元素的绝对位置，getBoundingClientRect()会得到4个值：left, top, width, height</span></span>
<span class="line"><span style="color:#B07D48;">dom</span><span style="color:#999999;">.</span><span style="color:#59873A;">getBoundingClientRect</span><span style="color:#999999;">().</span><span style="color:#B07D48;">width</span><span style="color:#AB5959;">/</span><span style="color:#B07D48;">height</span><span style="color:#999999;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="日常积累" tabindex="-1">日常积累 <a class="header-anchor" href="#日常积累" aria-hidden="true">#</a></h2><h3 id="省略号" tabindex="-1">省略号 <a class="header-anchor" href="#省略号" aria-hidden="true">#</a></h3><ul><li>超一行省略</li></ul><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki vitesse-dark vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#B8A965;">white-space</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C99076;">nowrap</span><span style="color:#666666;">;</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#B8A965;">text-overflow</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C99076;">ellipsis</span><span style="color:#666666;">;</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#B8A965;">overflow</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C99076;">hidden</span><span style="color:#666666;">;</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#B8A965;">word-break</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C99076;">break-all</span><span style="color:#666666;">;</span></span>
<span class="line"><span style="color:#666666;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki vitesse-light vp-code-light" tabindex="0"><code><span class="line"><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#998418;">white-space</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">nowrap</span><span style="color:#999999;">;</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#998418;">text-overflow</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">ellipsis</span><span style="color:#999999;">;</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#998418;">overflow</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">hidden</span><span style="color:#999999;">;</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#998418;">word-break</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">break-all</span><span style="color:#999999;">;</span></span>
<span class="line"><span style="color:#999999;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><ul><li>超多行省略</li></ul><div class="language-CSS line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">CSS</span><pre class="shiki vitesse-dark vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#B8A965;">text-overflow</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C99076;">-o-ellipsis-lastline</span><span style="color:#666666;">;</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#B8A965;">overflow</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C99076;">hidden</span><span style="color:#666666;">;</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#B8A965;">text-overflow</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C99076;">ellipsis</span><span style="color:#666666;">;</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#B8A965;">display</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C99076;">-webkit-box</span><span style="color:#666666;">;</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#B8A965;">-webkit-line-clamp</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4C9A91;">2</span><span style="color:#666666;">;</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#B8A965;">line-clamp</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4C9A91;">2</span><span style="color:#666666;">;</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#B8A965;">-webkit-box-orient</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C99076;">vertical</span><span style="color:#666666;">;</span></span>
<span class="line"><span style="color:#666666;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki vitesse-light vp-code-light" tabindex="0"><code><span class="line"><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#998418;">text-overflow</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">-o-ellipsis-lastline</span><span style="color:#999999;">;</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#998418;">overflow</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">hidden</span><span style="color:#999999;">;</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#998418;">text-overflow</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">ellipsis</span><span style="color:#999999;">;</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#998418;">display</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">-webkit-box</span><span style="color:#999999;">;</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#998418;">-webkit-line-clamp</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#2F798A;">2</span><span style="color:#999999;">;</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#998418;">line-clamp</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#2F798A;">2</span><span style="color:#999999;">;</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#998418;">-webkit-box-orient</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">vertical</span><span style="color:#999999;">;</span></span>
<span class="line"><span style="color:#999999;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="隐藏滑动条" tabindex="-1">隐藏滑动条 <a class="header-anchor" href="#隐藏滑动条" aria-hidden="true">#</a></h3><div class="language-CSS line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">CSS</span><pre class="shiki vitesse-dark vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#DBD7CAEE;">-webkit-scrollbar </span><span style="color:#666666;">{</span><span style="color:#DBD7CAEE;"> </span><span style="color:#B8A965;">width</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4C9A91;">0</span><span style="color:#666666;">;</span><span style="color:#DBD7CAEE;"> </span><span style="color:#B8A965;">height</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4C9A91;">0</span><span style="color:#666666;">;</span><span style="color:#DBD7CAEE;">  </span><span style="color:#666666;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki vitesse-light vp-code-light" tabindex="0"><code><span class="line"><span style="color:#393A34;">-webkit-scrollbar </span><span style="color:#999999;">{</span><span style="color:#393A34;"> </span><span style="color:#998418;">width</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#2F798A;">0</span><span style="color:#999999;">;</span><span style="color:#393A34;"> </span><span style="color:#998418;">height</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#2F798A;">0</span><span style="color:#999999;">;</span><span style="color:#393A34;">  </span><span style="color:#999999;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="css动画" tabindex="-1">CSS动画 <a class="header-anchor" href="#css动画" aria-hidden="true">#</a></h3><p>animation</p><ul><li>animation：时长|过渡方式|延迟|次数|方向|填充模式|是否暂停|动画名</li><li>animation-duration(时长)：1S或者1000ms</li><li>animation-timing-function(过渡方式)：同transition取值相同，如：linear</li><li>animation-delay(延迟)：延迟</li><li>animation-iteration-count(次数)：1或者2.5或者infinite</li><li>animation-direction(方向)：reverse|alternate|alternate-reverse</li><li>animation-fill-mode(填充模式)：none|forwards|backwards|both</li><li>animation-play-state(是否暂停)：paused|running</li></ul><h3 id="transition" tabindex="-1">transition <a class="header-anchor" href="#transition" aria-hidden="true">#</a></h3><ul><li>transition：属性名 时长 过渡方式 延迟。</li><li>transition：left 200ms linear。</li><li>还可以用逗号分隔两个不同属性： transition：left 200ms，top 300ms。</li><li>也可以用all来代表所有属性： transition：all 1s；</li><li>过渡方式： linear | ease | ease-in | ease-out | ease-in-out | cubic-bezier | step-start | step-end | steps</li></ul>`,22),o=[e];function t(r,c,i,y,d,h){return n(),a("div",null,o)}const D=s(p,[["render",t]]);export{b as __pageData,D as default};
