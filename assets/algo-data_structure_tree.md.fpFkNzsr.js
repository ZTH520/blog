import{_ as s,c as i,o as a,a2 as n}from"./chunks/framework.CEkdeU7f.js";const o=JSON.parse('{"title":"树","description":"","frontmatter":{},"headers":[],"relativePath":"algo-data/structure/tree.md","filePath":"algo-data/structure/tree.md","lastUpdated":1711098500000}'),h={name:"algo-data/structure/tree.md"},l=n(`<h1 id="树" tabindex="-1">树 <a class="header-anchor" href="#树" aria-label="Permalink to &quot;树&quot;">​</a></h1><h2 id="二叉树" tabindex="-1">二叉树 <a class="header-anchor" href="#二叉树" aria-label="Permalink to &quot;二叉树&quot;">​</a></h2><h3 id="二叉树常见术语" tabindex="-1">二叉树常见术语 <a class="header-anchor" href="#二叉树常见术语" aria-label="Permalink to &quot;二叉树常见术语&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">常见术语</p><ul><li><strong>二叉树的「根节点」</strong>: 位于二叉树的顶部的节点，没有父节点。</li><li><strong>二叉树的「叶节点」</strong>: 没有子节点，也被称为「叶子节点」。</li><li><strong>二叉树的「边」</strong>: 连接两个节点的线段，即节点引用（指针）。</li><li><strong>节点所在的「层」</strong>: 从顶至底，根节点所在的层为1。</li><li><strong>节点的「度」</strong>: 节点的子节点数量，二叉树的度取值范围0,1,2。</li><li><strong>二叉树的「高度」</strong>: 从顶至底，根节点所在的层为1。</li><li><strong>节点的「深度」</strong>: 从根节点至叶节点所经过的边的条数。</li><li><strong>节点的「高度」</strong>: 从距离该节点最远的叶节点到该节点所经过的边的条数。</li></ul></div><h2 id="二叉树的遍历" tabindex="-1">二叉树的遍历 <a class="header-anchor" href="#二叉树的遍历" aria-label="Permalink to &quot;二叉树的遍历&quot;">​</a></h2><h3 id="层序遍历" tabindex="-1">层序遍历 <a class="header-anchor" href="#层序遍历" aria-label="Permalink to &quot;层序遍历&quot;">​</a></h3><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-XvScA" id="tab-V4WeJxo" checked="checked"><label for="tab-V4WeJxo">binary_tree_bfs.js</label><input type="radio" name="group-XvScA" id="tab-_inD6oV"><label for="tab-_inD6oV">binary_tree_bfs.ts</label></div><div class="blocks"><div class="language-js vp-adaptive-theme active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes solarized-light solarized-dark vp-code"><code><span class="line"><span style="--shiki-light:#586E75;--shiki-dark:#93A1A1;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">function</span><span style="--shiki-light:#268BD2;--shiki-dark:#268BD2;"> levelOrder</span><span style="--shiki-light:#657B83;--shiki-dark:#839496;">(root) {</span></span>
<span class="line"><span style="--shiki-light:#586E75;--shiki-dark:#93A1A1;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">  const</span><span style="--shiki-light:#268BD2;--shiki-dark:#268BD2;"> res</span><span style="--shiki-light:#859900;--shiki-dark:#859900;"> =</span><span style="--shiki-light:#657B83;--shiki-dark:#839496;"> []</span></span>
<span class="line"><span style="--shiki-light:#586E75;--shiki-dark:#93A1A1;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">  const</span><span style="--shiki-light:#268BD2;--shiki-dark:#268BD2;"> queue</span><span style="--shiki-light:#859900;--shiki-dark:#859900;"> =</span><span style="--shiki-light:#657B83;--shiki-dark:#839496;"> [</span><span style="--shiki-light:#268BD2;--shiki-dark:#268BD2;">root</span><span style="--shiki-light:#657B83;--shiki-dark:#839496;">]</span></span>
<span class="line"><span style="--shiki-light:#859900;--shiki-dark:#859900;">  while</span><span style="--shiki-light:#657B83;--shiki-dark:#839496;"> (</span><span style="--shiki-light:#268BD2;--shiki-dark:#268BD2;">queue</span><span style="--shiki-light:#657B83;--shiki-dark:#839496;">.length) {</span></span>
<span class="line"><span style="--shiki-light:#586E75;--shiki-dark:#93A1A1;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">    const</span><span style="--shiki-light:#268BD2;--shiki-dark:#268BD2;"> node</span><span style="--shiki-light:#859900;--shiki-dark:#859900;"> =</span><span style="--shiki-light:#268BD2;--shiki-dark:#268BD2;"> queue</span><span style="--shiki-light:#657B83;--shiki-dark:#839496;">.</span><span style="--shiki-light:#268BD2;--shiki-dark:#268BD2;">shift</span><span style="--shiki-light:#657B83;--shiki-dark:#839496;">()</span></span>
<span class="line"><span style="--shiki-light:#268BD2;--shiki-dark:#268BD2;">    res</span><span style="--shiki-light:#657B83;--shiki-dark:#839496;">.</span><span style="--shiki-light:#268BD2;--shiki-dark:#268BD2;">push</span><span style="--shiki-light:#657B83;--shiki-dark:#839496;">(</span><span style="--shiki-light:#268BD2;--shiki-dark:#268BD2;">node</span><span style="--shiki-light:#657B83;--shiki-dark:#839496;">.</span><span style="--shiki-light:#268BD2;--shiki-dark:#268BD2;">val</span><span style="--shiki-light:#657B83;--shiki-dark:#839496;">)</span></span>
<span class="line"><span style="--shiki-light:#859900;--shiki-dark:#859900;">    if</span><span style="--shiki-light:#657B83;--shiki-dark:#839496;"> (</span><span style="--shiki-light:#268BD2;--shiki-dark:#268BD2;">node</span><span style="--shiki-light:#657B83;--shiki-dark:#839496;">.</span><span style="--shiki-light:#268BD2;--shiki-dark:#268BD2;">left</span><span style="--shiki-light:#657B83;--shiki-dark:#839496;">)</span></span>
<span class="line"><span style="--shiki-light:#268BD2;--shiki-dark:#268BD2;">      queue</span><span style="--shiki-light:#657B83;--shiki-dark:#839496;">.</span><span style="--shiki-light:#268BD2;--shiki-dark:#268BD2;">push</span><span style="--shiki-light:#657B83;--shiki-dark:#839496;">(</span><span style="--shiki-light:#268BD2;--shiki-dark:#268BD2;">node</span><span style="--shiki-light:#657B83;--shiki-dark:#839496;">.</span><span style="--shiki-light:#268BD2;--shiki-dark:#268BD2;">left</span><span style="--shiki-light:#657B83;--shiki-dark:#839496;">)</span></span>
<span class="line"><span style="--shiki-light:#859900;--shiki-dark:#859900;">    if</span><span style="--shiki-light:#657B83;--shiki-dark:#839496;"> (</span><span style="--shiki-light:#268BD2;--shiki-dark:#268BD2;">node</span><span style="--shiki-light:#657B83;--shiki-dark:#839496;">.</span><span style="--shiki-light:#268BD2;--shiki-dark:#268BD2;">right</span><span style="--shiki-light:#657B83;--shiki-dark:#839496;">)</span></span>
<span class="line"><span style="--shiki-light:#268BD2;--shiki-dark:#268BD2;">      queue</span><span style="--shiki-light:#657B83;--shiki-dark:#839496;">.</span><span style="--shiki-light:#268BD2;--shiki-dark:#268BD2;">push</span><span style="--shiki-light:#657B83;--shiki-dark:#839496;">(</span><span style="--shiki-light:#268BD2;--shiki-dark:#268BD2;">node</span><span style="--shiki-light:#657B83;--shiki-dark:#839496;">.</span><span style="--shiki-light:#268BD2;--shiki-dark:#268BD2;">right</span><span style="--shiki-light:#657B83;--shiki-dark:#839496;">)</span></span>
<span class="line"><span style="--shiki-light:#657B83;--shiki-dark:#839496;">  }</span></span>
<span class="line"><span style="--shiki-light:#859900;--shiki-dark:#859900;">  return</span><span style="--shiki-light:#268BD2;--shiki-dark:#268BD2;"> res</span></span>
<span class="line"><span style="--shiki-light:#657B83;--shiki-dark:#839496;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes solarized-light solarized-dark vp-code"><code><span class="line"><span style="--shiki-light:#93A1A1;--shiki-dark:#586E75;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">/* 二叉树节点类 */</span></span>
<span class="line"><span style="--shiki-light:#586E75;--shiki-dark:#93A1A1;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">class</span><span style="--shiki-light:#CB4B16;--shiki-dark:#CB4B16;"> TreeNode</span><span style="--shiki-light:#657B83;--shiki-dark:#839496;"> {</span></span>
<span class="line"><span style="--shiki-light:#657B83;--shiki-dark:#839496;">  val</span><span style="--shiki-light:#859900;--shiki-dark:#859900;">:</span><span style="--shiki-light:#859900;--shiki-dark:#859900;"> number</span></span>
<span class="line"><span style="--shiki-light:#657B83;--shiki-dark:#839496;">  left</span><span style="--shiki-light:#859900;--shiki-dark:#859900;">:</span><span style="--shiki-light:#CB4B16;--shiki-dark:#CB4B16;"> TreeNode</span><span style="--shiki-light:#859900;--shiki-dark:#859900;"> |</span><span style="--shiki-light:#859900;--shiki-dark:#859900;"> null</span></span>
<span class="line"><span style="--shiki-light:#657B83;--shiki-dark:#839496;">  right</span><span style="--shiki-light:#859900;--shiki-dark:#859900;">:</span><span style="--shiki-light:#CB4B16;--shiki-dark:#CB4B16;"> TreeNode</span><span style="--shiki-light:#859900;--shiki-dark:#859900;"> |</span><span style="--shiki-light:#859900;--shiki-dark:#859900;"> null</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#586E75;--shiki-dark:#93A1A1;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">  constructor</span><span style="--shiki-light:#657B83;--shiki-dark:#839496;">(val</span><span style="--shiki-light:#859900;--shiki-dark:#859900;">?:</span><span style="--shiki-light:#859900;--shiki-dark:#859900;"> number</span><span style="--shiki-light:#657B83;--shiki-dark:#839496;">, left</span><span style="--shiki-light:#859900;--shiki-dark:#859900;">?:</span><span style="--shiki-light:#CB4B16;--shiki-dark:#CB4B16;"> TreeNode</span><span style="--shiki-light:#859900;--shiki-dark:#859900;"> |</span><span style="--shiki-light:#859900;--shiki-dark:#859900;"> null</span><span style="--shiki-light:#657B83;--shiki-dark:#839496;">, right</span><span style="--shiki-light:#859900;--shiki-dark:#859900;">?:</span><span style="--shiki-light:#CB4B16;--shiki-dark:#CB4B16;"> TreeNode</span><span style="--shiki-light:#859900;--shiki-dark:#859900;"> |</span><span style="--shiki-light:#859900;--shiki-dark:#859900;"> null</span><span style="--shiki-light:#657B83;--shiki-dark:#839496;">) {</span></span>
<span class="line"><span style="--shiki-light:#268BD2;--shiki-dark:#268BD2;">    this</span><span style="--shiki-light:#657B83;--shiki-dark:#839496;">.</span><span style="--shiki-light:#268BD2;--shiki-dark:#268BD2;">val</span><span style="--shiki-light:#859900;--shiki-dark:#859900;"> =</span><span style="--shiki-light:#268BD2;--shiki-dark:#268BD2;"> val</span><span style="--shiki-light:#859900;--shiki-dark:#859900;"> ===</span><span style="--shiki-light:#B58900;--shiki-dark:#B58900;"> undefined</span><span style="--shiki-light:#859900;--shiki-dark:#859900;"> ?</span><span style="--shiki-light:#D33682;--shiki-dark:#D33682;"> 0</span><span style="--shiki-light:#859900;--shiki-dark:#859900;"> :</span><span style="--shiki-light:#268BD2;--shiki-dark:#268BD2;"> val</span><span style="--shiki-light:#93A1A1;--shiki-dark:#586E75;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> // 节点值</span></span>
<span class="line"><span style="--shiki-light:#268BD2;--shiki-dark:#268BD2;">    this</span><span style="--shiki-light:#657B83;--shiki-dark:#839496;">.</span><span style="--shiki-light:#268BD2;--shiki-dark:#268BD2;">left</span><span style="--shiki-light:#859900;--shiki-dark:#859900;"> =</span><span style="--shiki-light:#268BD2;--shiki-dark:#268BD2;"> left</span><span style="--shiki-light:#859900;--shiki-dark:#859900;"> ===</span><span style="--shiki-light:#B58900;--shiki-dark:#B58900;"> undefined</span><span style="--shiki-light:#859900;--shiki-dark:#859900;"> ?</span><span style="--shiki-light:#B58900;--shiki-dark:#B58900;"> null</span><span style="--shiki-light:#859900;--shiki-dark:#859900;"> :</span><span style="--shiki-light:#268BD2;--shiki-dark:#268BD2;"> left</span><span style="--shiki-light:#93A1A1;--shiki-dark:#586E75;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> // 左子节点引用</span></span>
<span class="line"><span style="--shiki-light:#268BD2;--shiki-dark:#268BD2;">    this</span><span style="--shiki-light:#657B83;--shiki-dark:#839496;">.</span><span style="--shiki-light:#268BD2;--shiki-dark:#268BD2;">right</span><span style="--shiki-light:#859900;--shiki-dark:#859900;"> =</span><span style="--shiki-light:#268BD2;--shiki-dark:#268BD2;"> right</span><span style="--shiki-light:#859900;--shiki-dark:#859900;"> ===</span><span style="--shiki-light:#B58900;--shiki-dark:#B58900;"> undefined</span><span style="--shiki-light:#859900;--shiki-dark:#859900;"> ?</span><span style="--shiki-light:#B58900;--shiki-dark:#B58900;"> null</span><span style="--shiki-light:#859900;--shiki-dark:#859900;"> :</span><span style="--shiki-light:#268BD2;--shiki-dark:#268BD2;"> right</span><span style="--shiki-light:#93A1A1;--shiki-dark:#586E75;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> // 右子节点引用</span></span>
<span class="line"><span style="--shiki-light:#657B83;--shiki-dark:#839496;">  }</span></span>
<span class="line"><span style="--shiki-light:#657B83;--shiki-dark:#839496;">}</span></span>
<span class="line"><span style="--shiki-light:#586E75;--shiki-dark:#93A1A1;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">function</span><span style="--shiki-light:#268BD2;--shiki-dark:#268BD2;"> levelOrder</span><span style="--shiki-light:#657B83;--shiki-dark:#839496;">(root</span><span style="--shiki-light:#859900;--shiki-dark:#859900;">:</span><span style="--shiki-light:#CB4B16;--shiki-dark:#CB4B16;"> TreeNode</span><span style="--shiki-light:#859900;--shiki-dark:#859900;"> |</span><span style="--shiki-light:#859900;--shiki-dark:#859900;"> null</span><span style="--shiki-light:#657B83;--shiki-dark:#839496;">)</span><span style="--shiki-light:#859900;--shiki-dark:#859900;">:</span><span style="--shiki-light:#859900;--shiki-dark:#859900;"> number</span><span style="--shiki-light:#657B83;--shiki-dark:#839496;">[] {</span></span>
<span class="line"><span style="--shiki-light:#586E75;--shiki-dark:#93A1A1;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">  const</span><span style="--shiki-light:#268BD2;--shiki-dark:#268BD2;"> res</span><span style="--shiki-light:#859900;--shiki-dark:#859900;">:</span><span style="--shiki-light:#859900;--shiki-dark:#859900;"> number</span><span style="--shiki-light:#657B83;--shiki-dark:#839496;">[] </span><span style="--shiki-light:#859900;--shiki-dark:#859900;">=</span><span style="--shiki-light:#657B83;--shiki-dark:#839496;"> []</span></span>
<span class="line"><span style="--shiki-light:#586E75;--shiki-dark:#93A1A1;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">  const</span><span style="--shiki-light:#268BD2;--shiki-dark:#268BD2;"> queue</span><span style="--shiki-light:#859900;--shiki-dark:#859900;"> =</span><span style="--shiki-light:#657B83;--shiki-dark:#839496;"> [</span><span style="--shiki-light:#268BD2;--shiki-dark:#268BD2;">root</span><span style="--shiki-light:#657B83;--shiki-dark:#839496;">]</span></span>
<span class="line"><span style="--shiki-light:#859900;--shiki-dark:#859900;">  while</span><span style="--shiki-light:#657B83;--shiki-dark:#839496;"> (</span><span style="--shiki-light:#268BD2;--shiki-dark:#268BD2;">queue</span><span style="--shiki-light:#657B83;--shiki-dark:#839496;">.length) {</span></span>
<span class="line"><span style="--shiki-light:#586E75;--shiki-dark:#93A1A1;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">    const</span><span style="--shiki-light:#268BD2;--shiki-dark:#268BD2;"> node</span><span style="--shiki-light:#859900;--shiki-dark:#859900;"> =</span><span style="--shiki-light:#268BD2;--shiki-dark:#268BD2;"> queue</span><span style="--shiki-light:#657B83;--shiki-dark:#839496;">.</span><span style="--shiki-light:#268BD2;--shiki-dark:#268BD2;">shift</span><span style="--shiki-light:#657B83;--shiki-dark:#839496;">()</span></span>
<span class="line"><span style="--shiki-light:#268BD2;--shiki-dark:#268BD2;">    res</span><span style="--shiki-light:#657B83;--shiki-dark:#839496;">.</span><span style="--shiki-light:#268BD2;--shiki-dark:#268BD2;">push</span><span style="--shiki-light:#657B83;--shiki-dark:#839496;">(</span><span style="--shiki-light:#268BD2;--shiki-dark:#268BD2;">node</span><span style="--shiki-light:#657B83;--shiki-dark:#839496;">.</span><span style="--shiki-light:#268BD2;--shiki-dark:#268BD2;">val</span><span style="--shiki-light:#657B83;--shiki-dark:#839496;">)</span></span>
<span class="line"><span style="--shiki-light:#859900;--shiki-dark:#859900;">    if</span><span style="--shiki-light:#657B83;--shiki-dark:#839496;"> (</span><span style="--shiki-light:#268BD2;--shiki-dark:#268BD2;">node</span><span style="--shiki-light:#657B83;--shiki-dark:#839496;">.</span><span style="--shiki-light:#268BD2;--shiki-dark:#268BD2;">left</span><span style="--shiki-light:#657B83;--shiki-dark:#839496;">)</span></span>
<span class="line"><span style="--shiki-light:#268BD2;--shiki-dark:#268BD2;">      queue</span><span style="--shiki-light:#657B83;--shiki-dark:#839496;">.</span><span style="--shiki-light:#268BD2;--shiki-dark:#268BD2;">push</span><span style="--shiki-light:#657B83;--shiki-dark:#839496;">(</span><span style="--shiki-light:#268BD2;--shiki-dark:#268BD2;">node</span><span style="--shiki-light:#657B83;--shiki-dark:#839496;">.</span><span style="--shiki-light:#268BD2;--shiki-dark:#268BD2;">left</span><span style="--shiki-light:#657B83;--shiki-dark:#839496;">)</span></span>
<span class="line"><span style="--shiki-light:#859900;--shiki-dark:#859900;">    if</span><span style="--shiki-light:#657B83;--shiki-dark:#839496;"> (</span><span style="--shiki-light:#268BD2;--shiki-dark:#268BD2;">node</span><span style="--shiki-light:#657B83;--shiki-dark:#839496;">.</span><span style="--shiki-light:#268BD2;--shiki-dark:#268BD2;">right</span><span style="--shiki-light:#657B83;--shiki-dark:#839496;">)</span></span>
<span class="line"><span style="--shiki-light:#268BD2;--shiki-dark:#268BD2;">      queue</span><span style="--shiki-light:#657B83;--shiki-dark:#839496;">.</span><span style="--shiki-light:#268BD2;--shiki-dark:#268BD2;">push</span><span style="--shiki-light:#657B83;--shiki-dark:#839496;">(</span><span style="--shiki-light:#268BD2;--shiki-dark:#268BD2;">node</span><span style="--shiki-light:#657B83;--shiki-dark:#839496;">.</span><span style="--shiki-light:#268BD2;--shiki-dark:#268BD2;">right</span><span style="--shiki-light:#657B83;--shiki-dark:#839496;">)</span></span>
<span class="line"><span style="--shiki-light:#657B83;--shiki-dark:#839496;">  }</span></span>
<span class="line"><span style="--shiki-light:#859900;--shiki-dark:#859900;">  return</span><span style="--shiki-light:#268BD2;--shiki-dark:#268BD2;"> res</span></span>
<span class="line"><span style="--shiki-light:#657B83;--shiki-dark:#839496;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div></div></div>`,7),k=[l];function t(p,e,r,d,g,B){return a(),i("div",null,k)}const c=s(h,[["render",t]]);export{o as __pageData,c as default};