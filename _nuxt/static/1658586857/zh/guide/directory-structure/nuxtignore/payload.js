__NUXT_JSONP__("/zh/guide/directory-structure/nuxtignore", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){return {data:[{page:{key:"content:zh:2.guide:3.directory-structure:17.nuxtignore.md",generatedAt:new Date(1658586936681),mtime:new Date(1658586936677),slug:"nuxtignore",title:i,position:"000200030017",to:"\u002Fguide\u002Fdirectory-structure\u002Fnuxtignore",draft:j,page:k,language:"zh",icon:"IconFile",head:{title:".nuxtignore file"},empty:j,description:"You can use a .nuxtignore file to let Nuxt ignore layout, pages, components, composables and middleware files in your project’s root directory (rootDir) during the build phase. The .nuxtignore file is subject to the same specification as .gitignore and .eslintignore files, in which each line is a glob pattern indicating which files should be ignored.",excerpt:p,body:{raw:"---\nicon: IconFile\ntitle: .nuxtignore\nhead.title: .nuxtignore file\n---\n\n# Nuxt ignore file\n\nYou can use a `.nuxtignore` file to let Nuxt ignore `layout`, `pages`, `components`, `composables` and `middleware` files in your project’s root directory (`rootDir`) during the build phase. The `.nuxtignore` file is subject to the same specification as `.gitignore` and `.eslintignore` files, in which each line is a glob pattern indicating which files should be ignored.\n\n**Note**: You can also configure [`ignoreOptions`](\u002Fguide\u002Fdirectory-structure\u002Fnuxt.config#ignoreoptions), [`ignorePrefix`](\u002Fguide\u002Fdirectory-structure\u002Fnuxt.config#ignoreprefix) and [`ignore`](\u002Fguide\u002Fdirectory-structure\u002Fnuxt.config#ignore) in your `nuxt.config` file.\n\n## Example\n\n```bash [.nuxtignore]\n# ignore layout foo.vue\nlayouts\u002Ffoo.vue\n# ignore layout files whose name ends with -ignore.vue\nlayouts\u002F*-ignore.vue\n\n# ignore page bar.vue\npages\u002Fbar.vue\n# ignore page inside ignore folder\npages\u002Fignore\u002F*.vue\n\n# ignore route middleware files under foo folder except foo\u002Fbar.js\nmiddleware\u002Ffoo\u002F*.js\n!middleware\u002Ffoo\u002Fbar.js\n```\n\n\u003E More details about the spec are in the [gitignore doc](https:\u002F\u002Fgit-scm.com\u002Fdocs\u002Fgitignore).\n",ast:{type:"root",children:[{type:b,tag:"prose-h1",props:{class:"d-heading-title",id:"nuxt-ignore-file"},children:[{type:a,value:"Nuxt ignore file"}]},{type:a,value:d},{type:b,tag:m,props:{class:"d-heading-description"},children:[{type:a,value:"You can use a "},{type:b,tag:c,props:{},children:[{type:a,value:i}]},{type:a,value:" file to let Nuxt ignore "},{type:b,tag:c,props:{},children:[{type:a,value:"layout"}]},{type:a,value:l},{type:b,tag:c,props:{},children:[{type:a,value:"pages"}]},{type:a,value:l},{type:b,tag:c,props:{},children:[{type:a,value:"components"}]},{type:a,value:l},{type:b,tag:c,props:{},children:[{type:a,value:"composables"}]},{type:a,value:n},{type:b,tag:c,props:{},children:[{type:a,value:"middleware"}]},{type:a,value:" files in your project’s root directory ("},{type:b,tag:c,props:{},children:[{type:a,value:"rootDir"}]},{type:a,value:") during the build phase. The "},{type:b,tag:c,props:{},children:[{type:a,value:i}]},{type:a,value:" file is subject to the same specification as "},{type:b,tag:c,props:{},children:[{type:a,value:".gitignore"}]},{type:a,value:n},{type:b,tag:c,props:{},children:[{type:a,value:".eslintignore"}]},{type:a,value:" files, in which each line is a glob pattern indicating which files should be ignored."}]},{type:a,value:d},{type:b,tag:m,props:{},children:[{type:b,tag:"prose-strong",props:{},children:[{type:a,value:"Note"}]},{type:a,value:": You can also configure "},{type:b,tag:g,props:{href:"\u002Fguide\u002Fdirectory-structure\u002Fnuxt.config#ignoreoptions"},children:[{type:b,tag:c,props:{},children:[{type:a,value:"ignoreOptions"}]}]},{type:a,value:l},{type:b,tag:g,props:{href:"\u002Fguide\u002Fdirectory-structure\u002Fnuxt.config#ignoreprefix"},children:[{type:b,tag:c,props:{},children:[{type:a,value:"ignorePrefix"}]}]},{type:a,value:n},{type:b,tag:g,props:{href:"\u002Fguide\u002Fdirectory-structure\u002Fnuxt.config#ignore"},children:[{type:b,tag:c,props:{},children:[{type:a,value:"ignore"}]}]},{type:a,value:" in your "},{type:b,tag:c,props:{},children:[{type:a,value:q}]},{type:a,value:" file."}]},{type:a,value:d},{type:b,tag:"prose-h2",props:{id:r},children:[{type:b,tag:g,props:{href:"#example"},children:[{type:a,value:s}]}]},{type:a,value:d},{type:b,tag:"prose-code",props:{},children:[{type:b,tag:e,props:{className:["filename"]},children:[{type:a,value:i}]},{type:b,tag:"pre",props:{className:["language-bash","line-numbers"]},children:[{type:b,tag:"code",props:{},children:[{type:b,tag:e,props:{className:[f,h]},children:[{type:a,value:"# ignore layout foo.vue"}]},{type:a,value:"\nlayouts\u002Ffoo.vue\n"},{type:b,tag:e,props:{className:[f,h]},children:[{type:a,value:"# ignore layout files whose name ends with -ignore.vue"}]},{type:a,value:"\nlayouts\u002F*-ignore.vue\n\n"},{type:b,tag:e,props:{className:[f,h]},children:[{type:a,value:"# ignore page bar.vue"}]},{type:a,value:"\npages\u002Fbar.vue\n"},{type:b,tag:e,props:{className:[f,h]},children:[{type:a,value:"# ignore page inside ignore folder"}]},{type:a,value:"\npages\u002Fignore\u002F*.vue\n\n"},{type:b,tag:e,props:{className:[f,h]},children:[{type:a,value:"# ignore route middleware files under foo folder except foo\u002Fbar.js"}]},{type:a,value:"\nmiddleware\u002Ffoo\u002F*.js\n"},{type:b,tag:e,props:{className:[f,"operator"]},children:[{type:a,value:"!"}]},{type:a,value:"middleware\u002Ffoo\u002Fbar.js\n"}]}]}]},{type:a,value:d},{type:b,tag:"prose-blockquote",props:{},children:[{type:a,value:d},{type:b,tag:m,props:{},children:[{type:a,value:"More details about the spec are in the "},{type:b,tag:g,props:{href:"https:\u002F\u002Fgit-scm.com\u002Fdocs\u002Fgitignore",rel:["nofollow","noopener","noreferrer"],target:"_blank"},children:[{type:a,value:"gitignore doc"}]},{type:a,value:"."}]},{type:a,value:d}]}]},toc:{title:t,searchDepth:o,depth:o,links:[{id:r,depth:o,text:s}]}},template:"Docs"},templateOptions:{header:k,footer:k,aside:k,asideClass:t,fluid:j,banner:j},_img:{}}],fetch:{"0":{headerLinks:[{title:"Getting Started",to:"\u002Fgetting-started\u002Fquick-start"},{title:"Guide",to:"\u002Fguide\u002Fconcepts\u002Fintroduction"},{title:"API",to:"\u002Fapi\u002Fcomposables\u002Fuse-async-data"},{title:"示例",to:"\u002Fexamples\u002Fessentials\u002Fhello-world"},{title:"社区",to:"\u002Fcommunity\u002Fgetting-help"}]},"1":{repoUrl:"https:\u002F\u002Fgithub.com\u002Fpangu-dev\u002Fpangu",prev:{slug:"app",to:"\u002Fguide\u002Fdirectory-structure\u002Fapp",title:"app.vue"},next:{slug:q,to:"\u002Fguide\u002Fdirectory-structure\u002Fnuxt.config",title:"nuxt.config.ts"}},_lazyComponents:new Set(["ProseParagraph","ButtonLink","HomeHero","SectionContentItem","HomeFeatures","IconNuxtNitro","Headline","ProseStrong","ProseA","ProseCodeInline","NuxtContainer","IconNuxtBridge","ProseH3","ProseLi","ProseUl","List","ProseH1","ProseH2","ProseCode","Alert","CodeGroup","ProseEm","ReadMore","Sandbox","ProseTh","ProseTr","ProseThead","ProseTd","ProseTbody","ProseTable","ProseBlockquote","ProseImg","NeedContribution","LinkExample","ProseOl","ProseH4","IconCloud","LogoAzure","LogoCloudFlare","LogoFirebase","LogoNetlify","LogoVercel"])},mutations:p}}("text","element","prose-code-inline","\n","span","token","prose-a","comment",".nuxtignore",false,true,", ","prose-paragraph"," and ",2,void 0,"nuxt.config","example","Example","")));