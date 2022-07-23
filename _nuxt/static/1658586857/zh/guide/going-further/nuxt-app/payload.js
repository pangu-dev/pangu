__NUXT_JSONP__("/zh/guide/going-further/nuxt-app", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac){return {data:[{page:{key:"content:zh:2.guide:6.going-further:6.nuxt-app.md",generatedAt:new Date(1658586937641),mtime:new Date(1658586937635),slug:"nuxt-app",title:y,position:"000200060006",to:"\u002Fguide\u002Fgoing-further\u002Fnuxt-app",draft:p,page:q,language:"zh",empty:p,description:z,excerpt:A,body:{raw:"# NuxtApp\n\nIn Nuxt 3, you can access runtime app context within composables, components and plugins.\n\nIn Nuxt 2, this was referred to as [Nuxt context](https:\u002F\u002Fnuxtjs.org\u002Fdocs\u002Finternals-glossary\u002Fcontext#the-context).\n\n## Accessing NuxtApp\n\nWithin composables, plugins and components you can access `nuxtApp` with `useNuxtApp`:\n\n```js\nfunction useMyComposable () {\n  const nuxtApp = useNuxtApp()\n  \u002F\u002F access runtime nuxt app instance\n}\n```\n\nPlugins also receive `nuxtApp` as the first argument for convenience. [Read more about plugins.](\u002Fguide\u002Fdirectory-structure\u002Fplugins)\n\n::alert{icon=👉}\n**`useNuxtApp` (on the server) only works during `setup`, inside Nuxt plugins or `Lifecycle Hooks`**.\n::\n\n## Providing helpers\n\nYou can provide helpers to be usable across all composables and application. This usually happens within a Nuxt plugin.\n\n```js\nconst nuxtApp = useNuxtApp()\nnuxtApp.provide('hello', (name) =\u003E `Hello ${name}!`)\n\nconsole.log(nuxtApp.$hello('name')) \u002F\u002F Prints \"Hello name!\"\n```\n\nIn Nuxt 2 plugins, this was referred to as [inject function](https:\u002F\u002Fnuxtjs.org\u002Fdocs\u002Fdirectory-structure\u002Fplugins#inject-in-root--context).\n\n::alert{icon=👉}\nIt is possible to inject helpers by returning an object with a `provide` key. See the [plugins documentation](\u002Fguide\u002Fdirectory-structure\u002Fplugins) for more information.\n::\n",ast:{type:"root",children:[{type:b,tag:"prose-h1",props:{class:"d-heading-title",id:"nuxtapp"},children:[{type:a,value:y}]},{type:a,value:f},{type:b,tag:h,props:{class:"d-heading-description"},children:[{type:a,value:z}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"In Nuxt 2, this was referred to as "},{type:b,tag:m,props:{href:"https:\u002F\u002Fnuxtjs.org\u002Fdocs\u002Finternals-glossary\u002Fcontext#the-context",rel:[B,C,D],target:E},children:[{type:a,value:"Nuxt context"}]},{type:a,value:n}]},{type:a,value:f},{type:b,tag:F,props:{id:G},children:[{type:b,tag:m,props:{href:"#accessing-nuxtapp"},children:[{type:a,value:H}]}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"Within composables, plugins and components you can access "},{type:b,tag:i,props:{},children:[{type:a,value:t}]},{type:a,value:" with "},{type:b,tag:i,props:{},children:[{type:a,value:r}]},{type:a,value:":"}]},{type:a,value:f},{type:b,tag:I,props:{},children:[{type:b,tag:J,props:{className:[K,L]},children:[{type:b,tag:M,props:{},children:[{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:j}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"useMyComposable"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"{"}]},{type:a,value:N},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:O}]},{type:a,value:P},{type:b,tag:c,props:{className:[d,v]},children:[{type:a,value:Q}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:N},{type:b,tag:c,props:{className:[d,R]},children:[{type:a,value:"\u002F\u002F access runtime nuxt app instance"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:S}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"Plugins also receive "},{type:b,tag:i,props:{},children:[{type:a,value:t}]},{type:a,value:" as the first argument for convenience. "},{type:b,tag:m,props:{href:T},children:[{type:a,value:"Read more about plugins."}]}]},{type:a,value:f},{type:b,tag:U,props:{icon:V},children:[{type:b,tag:h,props:{},children:[{type:b,tag:"prose-strong",props:{},children:[{type:b,tag:i,props:{},children:[{type:a,value:r}]},{type:a,value:" (on the server) only works during "},{type:b,tag:i,props:{},children:[{type:a,value:"setup"}]},{type:a,value:", inside Nuxt plugins or "},{type:b,tag:i,props:{},children:[{type:a,value:"Lifecycle Hooks"}]}]},{type:a,value:n}]}]},{type:a,value:f},{type:b,tag:F,props:{id:W},children:[{type:b,tag:m,props:{href:"#providing-helpers"},children:[{type:a,value:X}]}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"You can provide helpers to be usable across all composables and application. This usually happens within a Nuxt plugin."}]},{type:a,value:f},{type:b,tag:I,props:{},children:[{type:b,tag:J,props:{className:[K,L]},children:[{type:b,tag:M,props:{},children:[{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:O}]},{type:a,value:P},{type:b,tag:c,props:{className:[d,v]},children:[{type:a,value:Q}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:"\nnuxtApp"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,w,j,x]},children:[{type:a,value:Y}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:"'hello'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:","}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,"parameter"]},children:[{type:a,value:Z}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,"arrow",v]},children:[{type:a,value:"=\u003E"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,"template-string"]},children:[{type:b,tag:c,props:{className:[d,_,o]},children:[{type:a,value:$}]},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:"Hello "}]},{type:b,tag:c,props:{className:[d,"interpolation"]},children:[{type:b,tag:c,props:{className:[d,aa,e]},children:[{type:a,value:"${"}]},{type:a,value:Z},{type:b,tag:c,props:{className:[d,aa,e]},children:[{type:a,value:S}]}]},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:"!"}]},{type:b,tag:c,props:{className:[d,_,o]},children:[{type:a,value:$}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:"\n\n"},{type:b,tag:c,props:{className:[d,ab,"class-name"]},children:[{type:a,value:ab}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,w,j,x]},children:[{type:a,value:"log"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,w,j,x]},children:[{type:a,value:"$hello"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:"'name'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,R]},children:[{type:a,value:"\u002F\u002F Prints \"Hello name!\""}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"In Nuxt 2 plugins, this was referred to as "},{type:b,tag:m,props:{href:"https:\u002F\u002Fnuxtjs.org\u002Fdocs\u002Fdirectory-structure\u002Fplugins#inject-in-root--context",rel:[B,C,D],target:E},children:[{type:a,value:"inject function"}]},{type:a,value:n}]},{type:a,value:f},{type:b,tag:U,props:{icon:V},children:[{type:b,tag:h,props:{},children:[{type:a,value:"It is possible to inject helpers by returning an object with a "},{type:b,tag:i,props:{},children:[{type:a,value:Y}]},{type:a,value:" key. See the "},{type:b,tag:m,props:{href:T},children:[{type:a,value:"plugins documentation"}]},{type:a,value:" for more information."}]}]}]},toc:{title:ac,searchDepth:s,depth:s,links:[{id:G,depth:s,text:H},{id:W,depth:s,text:X}]}},template:"Docs"},templateOptions:{header:q,footer:q,aside:q,asideClass:ac,fluid:p,banner:p},_img:{}}],fetch:{"0":{headerLinks:[{title:"Getting Started",to:"\u002Fgetting-started\u002Fquick-start"},{title:"Guide",to:"\u002Fguide\u002Fconcepts\u002Fintroduction"},{title:"API",to:"\u002Fapi\u002Fcomposables\u002Fuse-async-data"},{title:"示例",to:"\u002Fexamples\u002Fessentials\u002Fhello-world"},{title:"社区",to:"\u002Fcommunity\u002Fgetting-help"}]},"1":{repoUrl:"https:\u002F\u002Fgithub.com\u002Fpangu-dev\u002Fpangu",prev:{slug:"esm",to:"\u002Fguide\u002Fgoing-further\u002Fesm",title:"ES Modules"},next:{slug:"testing",to:"\u002Fguide\u002Fgoing-further\u002Ftesting",title:"Testing"}},_lazyComponents:new Set(["ProseParagraph","ButtonLink","HomeHero","SectionContentItem","HomeFeatures","IconNuxtNitro","Headline","ProseStrong","ProseA","ProseCodeInline","NuxtContainer","IconNuxtBridge","ProseH3","ProseLi","ProseUl","List","ProseH1","ProseH2","ProseCode","Alert","CodeGroup","ProseEm","ReadMore","Sandbox","ProseTh","ProseTr","ProseThead","ProseTd","ProseTbody","ProseTable","ProseBlockquote","ProseImg","NeedContribution","LinkExample","ProseOl","ProseH4","IconCloud","LogoAzure","LogoCloudFlare","LogoFirebase","LogoNetlify","LogoVercel"])},mutations:A}}("text","element","span","token","punctuation","\n"," ","prose-paragraph","prose-code-inline","function","(",")","prose-a",".","string",false,true,"useNuxtApp",2,"nuxtApp","keyword","operator","method","property-access","NuxtApp","In Nuxt 3, you can access runtime app context within composables, components and plugins.",void 0,"nofollow","noopener","noreferrer","_blank","prose-h2","accessing-nuxtapp","Accessing NuxtApp","prose-code","pre","language-js","line-numbers","code","\n  ","const"," nuxtApp ","=","comment","}","\u002Fguide\u002Fdirectory-structure\u002Fplugins","alert","👉","providing-helpers","Providing helpers","provide","name","template-punctuation","`","interpolation-punctuation","console","")));