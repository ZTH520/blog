import{_ as s,c as a,o as i,a2 as e}from"./chunks/framework.CEkdeU7f.js";const g=JSON.parse('{"title":"npm 常用操作命令","description":"","frontmatter":{},"headers":[],"relativePath":"front-base/other/npm.md","filePath":"front-base/other/npm.md","lastUpdated":1711098500000}'),n={name:"front-base/other/npm.md"},l=e(`<h1 id="npm-常用操作命令" tabindex="-1">npm 常用操作命令 <a class="header-anchor" href="#npm-常用操作命令" aria-label="Permalink to &quot;npm 常用操作命令&quot;">​</a></h1><h2 id="npm-config" tabindex="-1">npm config <a class="header-anchor" href="#npm-config" aria-label="Permalink to &quot;npm config&quot;">​</a></h2><h3 id="查看所有配置" tabindex="-1">查看所有配置 <a class="header-anchor" href="#查看所有配置" aria-label="Permalink to &quot;查看所有配置&quot;">​</a></h3><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes solarized-light solarized-dark vp-code"><code><span class="line"><span style="--shiki-light:#268BD2;--shiki-dark:#268BD2;">npm</span><span style="--shiki-light:#2AA198;--shiki-dark:#2AA198;"> config</span><span style="--shiki-light:#2AA198;--shiki-dark:#2AA198;"> ls</span><span style="--shiki-light:#CB4B16;--shiki-dark:#CB4B16;"> -l</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="get-set" tabindex="-1">get/set <a class="header-anchor" href="#get-set" aria-label="Permalink to &quot;get/set&quot;">​</a></h3><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes solarized-light solarized-dark vp-code"><code><span class="line"><span style="--shiki-light:#268BD2;--shiki-dark:#268BD2;">npm</span><span style="--shiki-light:#2AA198;--shiki-dark:#2AA198;"> config</span><span style="--shiki-light:#2AA198;--shiki-dark:#2AA198;"> get</span><span style="--shiki-light:#2AA198;--shiki-dark:#2AA198;"> registry</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes solarized-light solarized-dark vp-code"><code><span class="line"><span style="--shiki-light:#268BD2;--shiki-dark:#268BD2;">npm</span><span style="--shiki-light:#2AA198;--shiki-dark:#2AA198;"> config</span><span style="--shiki-light:#2AA198;--shiki-dark:#2AA198;"> set</span><span style="--shiki-light:#2AA198;--shiki-dark:#2AA198;"> registry=https://registry.npmjs.org</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="npm-view" tabindex="-1">npm view <a class="header-anchor" href="#npm-view" aria-label="Permalink to &quot;npm view&quot;">​</a></h2><h3 id="view" tabindex="-1">view <a class="header-anchor" href="#view" aria-label="Permalink to &quot;view&quot;">​</a></h3><p>查看指定包的历史所有版本</p><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes solarized-light solarized-dark vp-code"><code><span class="line"><span style="--shiki-light:#268BD2;--shiki-dark:#268BD2;">npm</span><span style="--shiki-light:#2AA198;--shiki-dark:#2AA198;"> view</span><span style="--shiki-light:#657B83;--shiki-dark:#839496;"> [包名] versions</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>aliases: info, show, v</p><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes solarized-light solarized-dark vp-code"><code><span class="line"><span style="--shiki-light:#268BD2;--shiki-dark:#268BD2;">npm</span><span style="--shiki-light:#2AA198;--shiki-dark:#2AA198;"> show/info/v</span><span style="--shiki-light:#657B83;--shiki-dark:#839496;"> [包名] versions</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="npm-link" tabindex="-1">npm link <a class="header-anchor" href="#npm-link" aria-label="Permalink to &quot;npm link&quot;">​</a></h2><h3 id="link" tabindex="-1">link <a class="header-anchor" href="#link" aria-label="Permalink to &quot;link&quot;">​</a></h3><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes solarized-light solarized-dark vp-code"><code><span class="line"><span style="--shiki-light:#268BD2;--shiki-dark:#268BD2;">npm</span><span style="--shiki-light:#2AA198;--shiki-dark:#2AA198;"> link</span><span style="--shiki-light:#657B83;--shiki-dark:#839496;"> [&lt;package-spec&gt;]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#268BD2;--shiki-dark:#268BD2;">alias</span><span style="--shiki-light:#657B83;--shiki-dark:#839496;">: </span><span style="--shiki-light:#2AA198;--shiki-dark:#2AA198;">ln</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,16),t=[l];function p(r,h,d,o,c,k){return i(),a("div",null,t)}const u=s(n,[["render",p]]);export{g as __pageData,u as default};