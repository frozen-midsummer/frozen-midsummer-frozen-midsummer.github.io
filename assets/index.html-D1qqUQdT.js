import{_ as n,c as a,b as e,o as t}from"./app-CSH33i_J.js";const l={};function p(i,s){return t(),a("div",null,s[0]||(s[0]=[e(`<h2 id="_1-基础" tabindex="-1"><a class="header-anchor" href="#_1-基础"><span>1 基础</span></a></h2><h3 id="元素的-ref-引用" tabindex="-1"><a class="header-anchor" href="#元素的-ref-引用"><span>元素的 ref 引用</span></a></h3><p>定义了 ref 属性的元素<code>&lt;element-a ref=&#39;elementARef&#39;&gt;</code>会在挂载时注入对应名称的 ref 响应式变量<code>const elementARef = ref(null)</code>。即使对应名称的 ref 响应式变量定义在 hooks 内部也不影响注入。</p><p>父组件可以通过子组件的 ref 访问子组件 defineExpose 暴露的函数/元素/变量</p><h3 id="计算属性" tabindex="-1"><a class="header-anchor" href="#计算属性"><span>计算属性</span></a></h3><ul><li>直接修改 computed(()=&gt;return )的值是无效的，因为即使修改了也会马上被计算覆盖</li><li>computed 计算出的值是一个 ref 对象，访问其值需要.value，但是貌似也有例外</li></ul><h3 id="监听" tabindex="-1"><a class="header-anchor" href="#监听"><span>监听</span></a></h3><ul><li>watch 监听对象的属性的时候，需要()=&gt;a.b.c 这样，直接 watch(a.b.c)监听不到</li><li>watch 想监听对象内部的变化，需要加上{ deep: true }，否则监听不到内部变化</li><li>Vue 会确保在 watch 触发监听器回调函数时，所有的 props 都已经更新到了最新的状态。</li><li>watch(,,{immediate:true})可以使监听器在监听的变量初始化时立即执行一次，适合于监听懒加载的 drawer、modal 等组件的 open 事件</li></ul><h2 id="_2-深入组件" tabindex="-1"><a class="header-anchor" href="#_2-深入组件"><span>2 深入组件</span></a></h2><h3 id="依赖注入" tabindex="-1"><a class="header-anchor" href="#依赖注入"><span>依赖注入</span></a></h3><p>注意：像以下这样在 async 函数内提供变量是无效的：</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span>onMonted<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">init</span> <span class="token operator">=</span> <span class="token keyword">async</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span> <span class="token keyword">await</span> <span class="token function">getInitEnums</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token function">provide</span><span class="token punctuation">(</span><span class="token string">&#39;enumsData&#39;</span><span class="token punctuation">,</span>enumsData<span class="token punctuation">)</span><span class="token punctuation">}</span></span>
<span class="line"><span class="token function">onMonted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>正确的注入就直接在变量定义之后 provide 就好了，inject 之后默认就是响应式的</p><h2 id="_3-风格指南" tabindex="-1"><a class="header-anchor" href="#_3-风格指南"><span>3 风格指南</span></a></h2><h3 id="hooks-风格封装" tabindex="-1"><a class="header-anchor" href="#hooks-风格封装"><span>hooks 风格封装</span></a></h3><p>将有复用价值的 script setup 内容（可以包含一些变量和函数）封装成一个 js，放在 hooks 目录中</p><h3 id="script-setup-风格代码组织顺序" tabindex="-1"><a class="header-anchor" href="#script-setup-风格代码组织顺序"><span>script setup 风格代码组织顺序</span></a></h3><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token operator">&lt;</span>script setup<span class="token operator">&gt;</span></span>
<span class="line"><span class="token comment">// 1. 导入声明</span></span>
<span class="line"><span class="token comment">// 2. 接收 props 和 emit</span></span>
<span class="line"><span class="token comment">// 使用hooks</span></span>
<span class="line"><span class="token comment">// 3. 定义响应式状态</span></span>
<span class="line"><span class="token comment">// 4. 定义计算属性</span></span>
<span class="line"><span class="token comment">// 5. 定义侦听器</span></span>
<span class="line"><span class="token comment">// 6. 定义方法</span></span>
<span class="line"><span class="token comment">// 7. 定义生命周期钩子</span></span>
<span class="line"><span class="token comment">// 8. 提供/注入 (如果适用)</span></span>
<span class="line"><span class="token comment">// 9. 使用插槽 (如果适用)</span></span>
<span class="line"><span class="token comment">// 10. 使用 attrs (如果适用)</span></span>
<span class="line"><span class="token operator">&lt;</span>script<span class="token operator">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-常见问题" tabindex="-1"><a class="header-anchor" href="#_4-常见问题"><span>4 常见问题</span></a></h2><h3 id="import-watch-from-less" tabindex="-1"><a class="header-anchor" href="#import-watch-from-less"><span>import { watch } from &#39;less&#39;</span></a></h3><ul><li>问题描述：见标题</li><li>问题分析：引用错了</li></ul>`,21)]))}const o=n(l,[["render",p],["__file","index.html.vue"]]),r=JSON.parse(`{"path":"/javascript/vuejs/","title":"","lang":"zh-CN","frontmatter":{"lang":"zh-CN","description":"vue.js","sidebar":"heading"},"headers":[{"level":2,"title":"1 基础","slug":"_1-基础","link":"#_1-基础","children":[{"level":3,"title":"元素的 ref 引用","slug":"元素的-ref-引用","link":"#元素的-ref-引用","children":[]},{"level":3,"title":"计算属性","slug":"计算属性","link":"#计算属性","children":[]},{"level":3,"title":"监听","slug":"监听","link":"#监听","children":[]}]},{"level":2,"title":"2 深入组件","slug":"_2-深入组件","link":"#_2-深入组件","children":[{"level":3,"title":"依赖注入","slug":"依赖注入","link":"#依赖注入","children":[]}]},{"level":2,"title":"3 风格指南","slug":"_3-风格指南","link":"#_3-风格指南","children":[{"level":3,"title":"hooks 风格封装","slug":"hooks-风格封装","link":"#hooks-风格封装","children":[]},{"level":3,"title":"script setup 风格代码组织顺序","slug":"script-setup-风格代码组织顺序","link":"#script-setup-风格代码组织顺序","children":[]}]},{"level":2,"title":"4 常见问题","slug":"_4-常见问题","link":"#_4-常见问题","children":[{"level":3,"title":"import { watch } from 'less'","slug":"import-watch-from-less","link":"#import-watch-from-less","children":[]}]}],"git":{"updatedTime":1737966412000,"contributors":[{"name":"wjx","email":"610798187@qq.com","commits":6,"url":"https://github.com/wjx"},{"name":"wangjiaxuan","email":"610798187@qq.com","commits":2,"url":"https://github.com/wangjiaxuan"}]},"filePathRelative":"javascript/vuejs/README.md","excerpt":"<h2>1 基础</h2>\\n<h3>元素的 ref 引用</h3>\\n<p>定义了 ref 属性的元素<code>&lt;element-a ref='elementARef'&gt;</code>会在挂载时注入对应名称的 ref 响应式变量<code>const elementARef = ref(null)</code>。即使对应名称的 ref 响应式变量定义在 hooks 内部也不影响注入。</p>\\n<p>父组件可以通过子组件的 ref 访问子组件 defineExpose 暴露的函数/元素/变量</p>\\n<h3>计算属性</h3>\\n<ul>\\n<li>直接修改 computed(()=&gt;return )的值是无效的，因为即使修改了也会马上被计算覆盖</li>\\n<li>computed 计算出的值是一个 ref 对象，访问其值需要.value，但是貌似也有例外</li>\\n</ul>"}`);export{o as comp,r as data};
