import{_ as n,c as a,b as e,o as t}from"./app-CSH33i_J.js";const p={};function c(l,s){return t(),a("div",null,s[0]||(s[0]=[e(`<p>UtEnumeration 接口改造为 Factory 模式(不就是 codeOf 方法吗)：</p><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">UtEnumerationFactory</span> <span class="token keyword">implements</span> <span class="token class-name">EnumerationFactory</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token annotation punctuation">@Overide</span></span>
<span class="line">  <span class="token keyword">public</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span> <span class="token keyword">extends</span> <span class="token class-name">Enum</span><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">&gt;</span> <span class="token operator">&amp;</span> <span class="token class-name">UtEnumeration</span><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span><span class="token punctuation">,</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token class-name">E</span> <span class="token function">createUtEnumeration</span><span class="token punctuation">(</span><span class="token class-name">T</span> t<span class="token punctuation">,</span><span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">&gt;</span></span> clazz<span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const i=n(p,[["render",c],["__file","index.html.vue"]]),u=JSON.parse('{"path":"/serverside/designmodel/factorymodel/","title":"工厂模式","lang":"zh-CN","frontmatter":{"lang":"zh-CN","title":"工厂模式","description":"工厂模式","sidebar":"heading"},"headers":[],"git":{"updatedTime":1733047328000,"contributors":[{"name":"wangjiaxuan","email":"610798187@qq.com","commits":3,"url":"https://github.com/wangjiaxuan"}]},"filePathRelative":"serverside/designmodel/factorymodel/readme.md","excerpt":"<p>UtEnumeration 接口改造为 Factory 模式(不就是 codeOf 方法吗)：</p>\\n<div class=\\"language-java line-numbers-mode\\" data-highlighter=\\"prismjs\\" data-ext=\\"java\\" data-title=\\"java\\"><pre><code><span class=\\"line\\"><span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">UtEnumerationFactory</span> <span class=\\"token keyword\\">implements</span> <span class=\\"token class-name\\">EnumerationFactory</span><span class=\\"token punctuation\\">{</span></span>\\n<span class=\\"line\\">  <span class=\\"token annotation punctuation\\">@Overide</span></span>\\n<span class=\\"line\\">  <span class=\\"token keyword\\">public</span> <span class=\\"token generics\\"><span class=\\"token punctuation\\">&lt;</span><span class=\\"token class-name\\">E</span> <span class=\\"token keyword\\">extends</span> <span class=\\"token class-name\\">Enum</span><span class=\\"token punctuation\\">&lt;</span><span class=\\"token class-name\\">E</span><span class=\\"token punctuation\\">&gt;</span> <span class=\\"token operator\\">&amp;</span> <span class=\\"token class-name\\">UtEnumeration</span><span class=\\"token punctuation\\">&lt;</span><span class=\\"token class-name\\">T</span><span class=\\"token punctuation\\">&gt;</span><span class=\\"token punctuation\\">,</span><span class=\\"token class-name\\">T</span><span class=\\"token punctuation\\">&gt;</span></span> <span class=\\"token class-name\\">E</span> <span class=\\"token function\\">createUtEnumeration</span><span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\">T</span> t<span class=\\"token punctuation\\">,</span><span class=\\"token class-name\\">Class</span><span class=\\"token generics\\"><span class=\\"token punctuation\\">&lt;</span><span class=\\"token class-name\\">E</span><span class=\\"token punctuation\\">&gt;</span></span> clazz<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">{</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\">  <span class=\\"token punctuation\\">}</span></span>\\n<span class=\\"line\\"><span class=\\"token punctuation\\">}</span></span>\\n<span class=\\"line\\"></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}');export{i as comp,u as data};
