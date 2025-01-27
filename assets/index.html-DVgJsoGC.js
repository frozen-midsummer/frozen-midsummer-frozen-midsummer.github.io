import{_ as t,c as a,b as s,o as i}from"./app-CSH33i_J.js";const n="/assets/image-2-BTUcPQCk.png",h="/assets/image-3-BwkBJvpt.png",l="/assets/image-BnB2EdSg.png",p="/assets/image-1-BJKG32Mz.png",r={};function g(o,e){return i(),a("div",null,e[0]||(e[0]=[s('<h2 id="_1-github-配置" tabindex="-1"><a class="header-anchor" href="#_1-github-配置"><span>1 github 配置</span></a></h2><h3 id="_1-1-设置正确的-base-选项" tabindex="-1"><a class="header-anchor" href="#_1-1-设置正确的-base-选项"><span>1.1 设置正确的 base 选项</span></a></h3><p>如果你准备发布到 <code>https://&lt;USERNAME&gt;.github.io/</code> ，你可以省略这一步，因为 base 默认就是 &quot;/&quot; 。</p><p>如果你准备发布到 <code>https://&lt;USERNAME&gt;.github.io/&lt;REPO&gt;/</code> ，也就是说你的仓库地址是 <code>https://github.com/&lt;USERNAME&gt;/&lt;REPO&gt;</code> ，则将 base 设置为 <code>&quot;/&lt;REPO&gt;/&quot;</code>。</p><h3 id="_1-2-选择你想要使用的-ci-工具" tabindex="-1"><a class="header-anchor" href="#_1-2-选择你想要使用的-ci-工具"><span>1.2 选择你想要使用的 CI 工具</span></a></h3><p>这里我们以 <a href="https://github.com/features/actions" target="_blank" rel="noopener noreferrer">GitHub Actions</a> 为例。创建 <code>.github/workflows/docs.yml</code> 文件来配置工作流。</p><h3 id="_1-3-github-action-权限配置" tabindex="-1"><a class="header-anchor" href="#_1-3-github-action-权限配置"><span>1.3 github action 权限配置</span></a></h3><p>在 settings &gt;&gt; Actions &gt;&gt; General 中配置 github action 工作流的读写权限。</p><p><img src="'+n+'" alt="alt text"></p><h3 id="_1-4-github-page-配置" tabindex="-1"><a class="header-anchor" href="#_1-4-github-page-配置"><span>1.4 github page 配置</span></a></h3><p>在 settings &gt;&gt; Pages &gt;&gt; Build and deployment 中配置 github page 主页对应的代码分支（vuepress 编译出的 docs 目录）。</p><p><img src="'+h+`" alt="alt text"></p><h2 id="_2-github-push-不上去的问题" tabindex="-1"><a class="header-anchor" href="#_2-github-push-不上去的问题"><span>2 github push 不上去的问题</span></a></h2><p>有时执行 git push 的时候会报错 443 超时，可以检查一下是否开启了全局代理(Global)，可以开启全局代理，用 git bash push 代码。</p><h3 id="_2-1-配置本地-github-ssh-彻底解决-git-push-不上去的问题" tabindex="-1"><a class="header-anchor" href="#_2-1-配置本地-github-ssh-彻底解决-git-push-不上去的问题"><span>2.1 配置本地 github ssh 彻底解决 git push 不上去的问题</span></a></h3><p>windows:</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">ssh-keygen <span class="token parameter variable">-t</span> rsa <span class="token parameter variable">-b</span> <span class="token number">4096</span> <span class="token parameter variable">-C</span> <span class="token string">&quot;610798187@qq.com&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>安装过程中一直点击 enter 即可，完成后代开 C:\\User\\XXX\\.ssh\\id_rsa.pub</p><p>将文件内的内容复制进个人 setting 的 SSH and GPG keys 的 SSH keys 中即可</p><p><img src="`+l+'" alt="github settings"></p><p>然后进入仓库用这个 url clone 项目</p><p><img src="'+p+`" alt="alt text"></p><p>然后就可以解决代码 push 443 的问题了</p><p>附：git page 上现实的 contributor 为以下 git 配置</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">git</span> config <span class="token parameter variable">--global</span> user.name <span class="token string">&quot;frozen-midsummer&quot;</span></span>
<span class="line"><span class="token function">git</span> config <span class="token parameter variable">--global</span> user.email <span class="token string">&quot;610798187@qq.com&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>附：</p><p>git 连接的远程仓库地址位于.git/config 文件中</p><h3 id="_2-2-参考博文" tabindex="-1"><a class="header-anchor" href="#_2-2-参考博文"><span>2.2 参考博文：</span></a></h3><p><a href="https://zhuanlan.zhihu.com/p/111344840" target="_blank" rel="noopener noreferrer">如何使用 SSH 连接到 Github</a></p><h2 id="_3-vs-code-开发-github-page-技巧" tabindex="-1"><a class="header-anchor" href="#_3-vs-code-开发-github-page-技巧"><span>3 VS Code 开发 GitHub page 技巧</span></a></h2><p><a href="https://blog.csdn.net/LT_admin/article/details/135136872" target="_blank" rel="noopener noreferrer">VS Code 自定义 Markdown 粘贴图片的位置</a></p><h2 id="_5-f-q" tabindex="-1"><a class="header-anchor" href="#_5-f-q"><span>5 F&amp;Q</span></a></h2><h3 id="_20250106-文件夹下的-readme-md-无法在-github-bot-上编译出-index-html" tabindex="-1"><a class="header-anchor" href="#_20250106-文件夹下的-readme-md-无法在-github-bot-上编译出-index-html"><span>20250106 文件夹下的 README.md 无法在 github bot 上编译出 index.html</span></a></h3><p>问题描述：</p><p>docs\\serverside\\pythonlearning\\README.md 无法正常在 github 流水线上编译出 index.html，修改文件名为 README1.md 之后可以正常编译出 README1.html。本地不修改文件名也可正常编译出 index.html</p><p>问题原因：不详</p><p>解决方案：后续新建目录时为目录下的 index markdown 文件起一个包含语义的文件名（新学的英语，semantic）</p>`,37)]))}const d=t(r,[["render",g],["__file","index.html.vue"]]),u=JSON.parse('{"path":"/websiteconstruction/githubpages/","title":"GitHub Pages 部署","lang":"zh-CN","frontmatter":{"lang":"zh-CN","title":"GitHub Pages 部署","sidebar":"heading","description":"GitHub Pages 部署问题"},"headers":[{"level":2,"title":"1 github 配置","slug":"_1-github-配置","link":"#_1-github-配置","children":[{"level":3,"title":"1.1 设置正确的 base 选项","slug":"_1-1-设置正确的-base-选项","link":"#_1-1-设置正确的-base-选项","children":[]},{"level":3,"title":"1.2 选择你想要使用的 CI 工具","slug":"_1-2-选择你想要使用的-ci-工具","link":"#_1-2-选择你想要使用的-ci-工具","children":[]},{"level":3,"title":"1.3 github action 权限配置","slug":"_1-3-github-action-权限配置","link":"#_1-3-github-action-权限配置","children":[]},{"level":3,"title":"1.4 github page 配置","slug":"_1-4-github-page-配置","link":"#_1-4-github-page-配置","children":[]}]},{"level":2,"title":"2 github push 不上去的问题","slug":"_2-github-push-不上去的问题","link":"#_2-github-push-不上去的问题","children":[{"level":3,"title":"2.1 配置本地 github ssh 彻底解决 git push 不上去的问题","slug":"_2-1-配置本地-github-ssh-彻底解决-git-push-不上去的问题","link":"#_2-1-配置本地-github-ssh-彻底解决-git-push-不上去的问题","children":[]},{"level":3,"title":"2.2 参考博文：","slug":"_2-2-参考博文","link":"#_2-2-参考博文","children":[]}]},{"level":2,"title":"3 VS Code 开发 GitHub page 技巧","slug":"_3-vs-code-开发-github-page-技巧","link":"#_3-vs-code-开发-github-page-技巧","children":[]},{"level":2,"title":"5 F&Q","slug":"_5-f-q","link":"#_5-f-q","children":[{"level":3,"title":"20250106 文件夹下的 README.md 无法在 github bot 上编译出 index.html","slug":"_20250106-文件夹下的-readme-md-无法在-github-bot-上编译出-index-html","link":"#_20250106-文件夹下的-readme-md-无法在-github-bot-上编译出-index-html","children":[]}]}],"git":{"updatedTime":1736500431000,"contributors":[{"name":"wjx","email":"610798187@qq.com","commits":1,"url":"https://github.com/wjx"},{"name":"wangjiaxuan","email":"610798187@qq.com","commits":4,"url":"https://github.com/wangjiaxuan"}]},"filePathRelative":"websiteconstruction/githubpages/README.md","excerpt":"<h2>1 github 配置</h2>\\n<h3>1.1 设置正确的 base 选项</h3>\\n<p>如果你准备发布到 <code>https://&lt;USERNAME&gt;.github.io/</code> ，你可以省略这一步，因为 base 默认就是 \\"/\\" 。</p>\\n<p>如果你准备发布到 <code>https://&lt;USERNAME&gt;.github.io/&lt;REPO&gt;/</code> ，也就是说你的仓库地址是 <code>https://github.com/&lt;USERNAME&gt;/&lt;REPO&gt;</code> ，则将 base 设置为 <code>\\"/&lt;REPO&gt;/\\"</code>。</p>"}');export{d as comp,u as data};
