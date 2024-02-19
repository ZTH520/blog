import{_ as s,c as i,o as a,a2 as n}from"./chunks/framework.YPCx1-R1.js";const b=JSON.parse('{"title":"CSS","description":"","frontmatter":{},"headers":[],"relativePath":"front-base/html/css.md","filePath":"front-base/html/css.md","lastUpdated":1708330623000}'),l={name:"front-base/html/css.md"},e=n(`<h1 id="css" tabindex="-1">CSS <a class="header-anchor" href="#css" aria-label="Permalink to &quot;CSS&quot;">​</a></h1><h2 id="css盒子模型" tabindex="-1">CSS盒子模型 <a class="header-anchor" href="#css盒子模型" aria-label="Permalink to &quot;CSS盒子模型&quot;">​</a></h2><h3 id="基本概念" tabindex="-1">基本概念 <a class="header-anchor" href="#基本概念" aria-label="Permalink to &quot;基本概念&quot;">​</a></h3><p>CSS盒模型本质上是一个盒子，封装周围的HTML元素，它包括：边距，边框，填充，和实际内容。</p><p>标准模型：<code>Box Model = margin + border + padding + content</code></p><ul><li>IE模型：<code>width = content</code></li><li>标准模型：<code>width = content + padding + border</code></li></ul><div class="language-css vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes solarized-light solarized-dark vp-code"><code><span class="line"><span style="--shiki-light:#657B83;--shiki-dark:#839496;">//设置标准模型</span></span>
<span class="line"><span style="--shiki-light:#268BD2;--shiki-dark:#268BD2;">box-sizing</span><span style="--shiki-light:#657B83;--shiki-dark:#839496;">: </span><span style="--shiki-light:#268BD2;--shiki-dark:#268BD2;">content-box</span><span style="--shiki-light:#657B83;--shiki-dark:#839496;">;</span></span>
<span class="line"><span style="--shiki-light:#657B83;--shiki-dark:#839496;">//设置IE模型</span></span>
<span class="line"><span style="--shiki-light:#268BD2;--shiki-dark:#268BD2;">box-sizing</span><span style="--shiki-light:#657B83;--shiki-dark:#839496;">: </span><span style="--shiki-light:#268BD2;--shiki-dark:#268BD2;">border-box</span><span style="--shiki-light:#657B83;--shiki-dark:#839496;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="js获取盒模型的宽和高" tabindex="-1">js获取盒模型的宽和高 <a class="header-anchor" href="#js获取盒模型的宽和高" aria-label="Permalink to &quot;js获取盒模型的宽和高&quot;">​</a></h3><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes solarized-light solarized-dark vp-code"><code><span class="line"><span style="--shiki-light:#93A1A1;--shiki-dark:#586E75;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">// 只能获取内联样式设置的宽高</span></span>
<span class="line"><span style="--shiki-light:#268BD2;--shiki-dark:#268BD2;">dom</span><span style="--shiki-light:#657B83;--shiki-dark:#839496;">.</span><span style="--shiki-light:#268BD2;--shiki-dark:#268BD2;">style</span><span style="--shiki-light:#657B83;--shiki-dark:#839496;">.</span><span style="--shiki-light:#268BD2;--shiki-dark:#268BD2;">width</span><span style="--shiki-light:#859900;--shiki-dark:#859900;"> /</span><span style="--shiki-light:#268BD2;--shiki-dark:#268BD2;"> height</span></span>
<span class="line"><span style="--shiki-light:#93A1A1;--shiki-dark:#586E75;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">// 获取渲染后即时运行的宽高，值是准确的。但只支持 IE</span></span>
<span class="line"><span style="--shiki-light:#268BD2;--shiki-dark:#268BD2;">dom</span><span style="--shiki-light:#657B83;--shiki-dark:#839496;">.</span><span style="--shiki-light:#268BD2;--shiki-dark:#268BD2;">currentStyle</span><span style="--shiki-light:#657B83;--shiki-dark:#839496;">.</span><span style="--shiki-light:#268BD2;--shiki-dark:#268BD2;">width</span><span style="--shiki-light:#859900;--shiki-dark:#859900;"> /</span><span style="--shiki-light:#268BD2;--shiki-dark:#268BD2;"> height</span></span>
<span class="line"><span style="--shiki-light:#93A1A1;--shiki-dark:#586E75;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">// 获取渲染后即时运行的宽高，值是准确的。兼容性更好</span></span>
<span class="line"><span style="--shiki-light:#268BD2;--shiki-dark:#268BD2;">window</span><span style="--shiki-light:#657B83;--shiki-dark:#839496;">.</span><span style="--shiki-light:#268BD2;--shiki-dark:#268BD2;">getComputedStyle</span><span style="--shiki-light:#657B83;--shiki-dark:#839496;">(</span><span style="--shiki-light:#268BD2;--shiki-dark:#268BD2;">dom</span><span style="--shiki-light:#657B83;--shiki-dark:#839496;">).</span><span style="--shiki-light:#268BD2;--shiki-dark:#268BD2;">width</span><span style="--shiki-light:#859900;--shiki-dark:#859900;"> /</span><span style="--shiki-light:#268BD2;--shiki-dark:#268BD2;"> height</span></span>
<span class="line"><span style="--shiki-light:#93A1A1;--shiki-dark:#586E75;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">// 获取渲染后即时运行的宽高，值是准确的。兼容性也很好，一般用来获取元素的绝对位置，getBoundingClientRect()会得到4个值：left, top, width, height</span></span>
<span class="line"><span style="--shiki-light:#268BD2;--shiki-dark:#268BD2;">dom</span><span style="--shiki-light:#657B83;--shiki-dark:#839496;">.</span><span style="--shiki-light:#268BD2;--shiki-dark:#268BD2;">getBoundingClientRect</span><span style="--shiki-light:#657B83;--shiki-dark:#839496;">().</span><span style="--shiki-light:#268BD2;--shiki-dark:#268BD2;">width</span><span style="--shiki-light:#859900;--shiki-dark:#859900;"> /</span><span style="--shiki-light:#268BD2;--shiki-dark:#268BD2;"> height</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="日常积累" tabindex="-1">日常积累 <a class="header-anchor" href="#日常积累" aria-label="Permalink to &quot;日常积累&quot;">​</a></h2><h3 id="省略号" tabindex="-1">省略号 <a class="header-anchor" href="#省略号" aria-label="Permalink to &quot;省略号&quot;">​</a></h3><ul><li>超一行省略</li></ul><div class="language-css vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes solarized-light solarized-dark vp-code"><code><span class="line"><span style="--shiki-light:#657B83;--shiki-dark:#839496;">{</span></span>
<span class="line"><span style="--shiki-light:#859900;--shiki-dark:#859900;">  white-space</span><span style="--shiki-light:#657B83;--shiki-dark:#839496;">: nowrap;</span></span>
<span class="line"><span style="--shiki-light:#859900;--shiki-dark:#859900;">  text-overflow</span><span style="--shiki-light:#657B83;--shiki-dark:#839496;">: ellipsis;</span></span>
<span class="line"><span style="--shiki-light:#859900;--shiki-dark:#859900;">  overflow</span><span style="--shiki-light:#657B83;--shiki-dark:#839496;">: hidden;</span></span>
<span class="line"><span style="--shiki-light:#859900;--shiki-dark:#859900;">  word-break</span><span style="--shiki-light:#657B83;--shiki-dark:#839496;">: break-all;</span></span>
<span class="line"><span style="--shiki-light:#657B83;--shiki-dark:#839496;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><ul><li>超多行省略</li></ul><div class="language-CSS vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">CSS</span><pre class="shiki shiki-themes solarized-light solarized-dark vp-code"><code><span class="line"><span style="--shiki-light:#657B83;--shiki-dark:#839496;">{</span></span>
<span class="line"><span style="--shiki-light:#859900;--shiki-dark:#859900;">  text-overflow</span><span style="--shiki-light:#657B83;--shiki-dark:#839496;">: -o-ellipsis-lastline;</span></span>
<span class="line"><span style="--shiki-light:#859900;--shiki-dark:#859900;">  overflow</span><span style="--shiki-light:#657B83;--shiki-dark:#839496;">: hidden;</span></span>
<span class="line"><span style="--shiki-light:#859900;--shiki-dark:#859900;">  text-overflow</span><span style="--shiki-light:#657B83;--shiki-dark:#839496;">: ellipsis;</span></span>
<span class="line"><span style="--shiki-light:#859900;--shiki-dark:#859900;">  display</span><span style="--shiki-light:#657B83;--shiki-dark:#839496;">: -webkit-box;</span></span>
<span class="line"><span style="--shiki-light:#859900;--shiki-dark:#859900;">  -webkit-line-clamp</span><span style="--shiki-light:#657B83;--shiki-dark:#839496;">: </span><span style="--shiki-light:#D33682;--shiki-dark:#D33682;">2</span><span style="--shiki-light:#657B83;--shiki-dark:#839496;">;</span></span>
<span class="line"><span style="--shiki-light:#859900;--shiki-dark:#859900;">  line-clamp</span><span style="--shiki-light:#657B83;--shiki-dark:#839496;">: </span><span style="--shiki-light:#D33682;--shiki-dark:#D33682;">2</span><span style="--shiki-light:#657B83;--shiki-dark:#839496;">;</span></span>
<span class="line"><span style="--shiki-light:#859900;--shiki-dark:#859900;">  -webkit-box-orient</span><span style="--shiki-light:#657B83;--shiki-dark:#839496;">: vertical;</span></span>
<span class="line"><span style="--shiki-light:#657B83;--shiki-dark:#839496;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="隐藏滑动条" tabindex="-1">隐藏滑动条 <a class="header-anchor" href="#隐藏滑动条" aria-label="Permalink to &quot;隐藏滑动条&quot;">​</a></h3><div class="language-CSS vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">CSS</span><pre class="shiki shiki-themes solarized-light solarized-dark vp-code"><code><span class="line"><span style="--shiki-light:#657B83;--shiki-dark:#839496;">-webkit-scrollbar { </span><span style="--shiki-light:#859900;--shiki-dark:#859900;">width</span><span style="--shiki-light:#657B83;--shiki-dark:#839496;">: </span><span style="--shiki-light:#D33682;--shiki-dark:#D33682;">0</span><span style="--shiki-light:#657B83;--shiki-dark:#839496;">; </span><span style="--shiki-light:#859900;--shiki-dark:#859900;">height</span><span style="--shiki-light:#657B83;--shiki-dark:#839496;">: </span><span style="--shiki-light:#D33682;--shiki-dark:#D33682;">0</span><span style="--shiki-light:#657B83;--shiki-dark:#839496;">;  }</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="css动画" tabindex="-1">CSS动画 <a class="header-anchor" href="#css动画" aria-label="Permalink to &quot;CSS动画&quot;">​</a></h3><p>animation</p><ul><li>animation：时长|过渡方式|延迟|次数|方向|填充模式|是否暂停|动画名</li><li>animation-duration(时长)：1S或者1000ms</li><li>animation-timing-function(过渡方式)：同transition取值相同，如：linear</li><li>animation-delay(延迟)：延迟</li><li>animation-iteration-count(次数)：1或者2.5或者infinite</li><li>animation-direction(方向)：reverse|alternate|alternate-reverse</li><li>animation-fill-mode(填充模式)：none|forwards|backwards|both</li><li>animation-play-state(是否暂停)：paused|running</li></ul><h3 id="transition" tabindex="-1">transition <a class="header-anchor" href="#transition" aria-label="Permalink to &quot;transition&quot;">​</a></h3><ul><li>transition：属性名 时长 过渡方式 延迟。</li><li>transition：left 200ms linear。</li><li>还可以用逗号分隔两个不同属性： transition：left 200ms，top 300ms。</li><li>也可以用all来代表所有属性： transition：all 1s；</li><li>过渡方式： linear | ease | ease-in | ease-out | ease-in-out | cubic-bezier | step-start | step-end | steps</li></ul>`,22),t=[e];function h(p,r,k,d,o,c){return a(),i("div",null,t)}const y=s(l,[["render",h]]);export{b as __pageData,y as default};
