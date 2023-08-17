import{_ as s,o as a,c as n,S as e}from"./chunks/framework.e036d9b7.js";const v=JSON.parse('{"title":"npm 常用操作命令","description":"","frontmatter":{},"headers":[],"relativePath":"front-base/other/npm.md","filePath":"front-base/other/npm.md","lastUpdated":1692253727000}'),l={name:"front-base/other/npm.md"},p=e(`<h1 id="npm-常用操作命令" tabindex="-1">npm 常用操作命令 <a class="header-anchor" href="#npm-常用操作命令" aria-label="Permalink to &quot;npm 常用操作命令&quot;">​</a></h1><h2 id="npm-config" tabindex="-1">npm config <a class="header-anchor" href="#npm-config" aria-label="Permalink to &quot;npm config&quot;">​</a></h2><h3 id="查看所有配置" tabindex="-1">查看所有配置 <a class="header-anchor" href="#查看所有配置" aria-label="Permalink to &quot;查看所有配置&quot;">​</a></h3><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#80A665;">npm</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">config</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">ls</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C99076;">-l</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#59873A;">npm</span><span style="color:#393A34;"> </span><span style="color:#B56959;">config</span><span style="color:#393A34;"> </span><span style="color:#B56959;">ls</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">-l</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="get-set" tabindex="-1">get/set <a class="header-anchor" href="#get-set" aria-label="Permalink to &quot;get/set&quot;">​</a></h3><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#80A665;">npm</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">config</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">get</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">registry</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#59873A;">npm</span><span style="color:#393A34;"> </span><span style="color:#B56959;">config</span><span style="color:#393A34;"> </span><span style="color:#B56959;">get</span><span style="color:#393A34;"> </span><span style="color:#B56959;">registry</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#80A665;">npm</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">config</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">set</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">registry=http://registry.npmjs.org</span></span>
<span class="line"><span style="color:#80A665;">npm</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">config</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">set</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">registry=http://registry.npm.taobao.org/</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#59873A;">npm</span><span style="color:#393A34;"> </span><span style="color:#B56959;">config</span><span style="color:#393A34;"> </span><span style="color:#B56959;">set</span><span style="color:#393A34;"> </span><span style="color:#B56959;">registry=http://registry.npmjs.org</span></span>
<span class="line"><span style="color:#59873A;">npm</span><span style="color:#393A34;"> </span><span style="color:#B56959;">config</span><span style="color:#393A34;"> </span><span style="color:#B56959;">set</span><span style="color:#393A34;"> </span><span style="color:#B56959;">registry=http://registry.npm.taobao.org/</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="npm-view" tabindex="-1">npm view <a class="header-anchor" href="#npm-view" aria-label="Permalink to &quot;npm view&quot;">​</a></h2><h3 id="view" tabindex="-1">view <a class="header-anchor" href="#view" aria-label="Permalink to &quot;view&quot;">​</a></h3><p>查看指定包的历史所有版本</p><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#80A665;">npm</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">view</span><span style="color:#DBD7CAEE;"> [包名] versions</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#59873A;">npm</span><span style="color:#393A34;"> </span><span style="color:#B56959;">view</span><span style="color:#393A34;"> [包名] versions</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>aliases: info, show, v</p><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#80A665;">npm</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">show/info/v</span><span style="color:#DBD7CAEE;"> [包名] versions</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#59873A;">npm</span><span style="color:#393A34;"> </span><span style="color:#B56959;">show/info/v</span><span style="color:#393A34;"> [包名] versions</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="npm-link" tabindex="-1">npm link <a class="header-anchor" href="#npm-link" aria-label="Permalink to &quot;npm link&quot;">​</a></h2><h3 id="link" tabindex="-1">link <a class="header-anchor" href="#link" aria-label="Permalink to &quot;link&quot;">​</a></h3><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#80A665;">npm</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">link</span><span style="color:#DBD7CAEE;"> [&lt;package-spec&gt;]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B8A965;">alias</span><span style="color:#DBD7CAEE;">: </span><span style="color:#C98A7D;">ln</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#59873A;">npm</span><span style="color:#393A34;"> </span><span style="color:#B56959;">link</span><span style="color:#393A34;"> [&lt;package-spec&gt;]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#998418;">alias</span><span style="color:#393A34;">: </span><span style="color:#B56959;">ln</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,16),o=[p];function t(r,c,i,d,y,h){return a(),n("div",null,o)}const A=s(l,[["render",t]]);export{v as __pageData,A as default};