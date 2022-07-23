__NUXT_JSONP__("/zh/guide/features/teleports", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W){return {data:[{page:{key:"content:zh:2.guide:2.features:11.teleports.md",generatedAt:new Date(1658586935300),mtime:new Date(1658586935289),slug:C,title:D,position:"000200020011",to:"\u002Fguide\u002Ffeatures\u002Fteleports",draft:r,page:s,language:"zh",empty:r,description:"Vue 3 provides the \u003CTeleport\u003E component which allows content to be rendered elsewhere in the DOM, outside of the Vue application.",excerpt:E,body:{raw:"# Teleports\n\nVue 3 provides the [`\u003CTeleport\u003E` component](https:\u002F\u002Fvuejs.org\u002Fguide\u002Fbuilt-ins\u002Fteleport.html) which allows content to be rendered elsewhere in the DOM, outside of the Vue application.\n\nThe `to` target of `\u003CTeleport\u003E` expects a CSS selector string or an actual DOM node. Nuxt currently has SSR support for teleports to `body` only, with client-side support for other targets using a `\u003CClientOnly\u003E` wrapper.\n\n## Example: body teleport\n\n```vue\n\u003Ctemplate\u003E\n  \u003Cbutton @click=\"open = true\"\u003E\n    Open Modal\n  \u003C\u002Fbutton\u003E\n  \u003CTeleport to=\"body\"\u003E\n    \u003Cdiv v-if=\"open\" class=\"modal\"\u003E\n      \u003Cp\u003EHello from the modal!\u003C\u002Fp\u003E\n      \u003Cbutton @click=\"open = false\"\u003E\n        Close\n      \u003C\u002Fbutton\u003E\n    \u003C\u002Fdiv\u003E\n  \u003C\u002FTeleport\u003E\n\u003C\u002Ftemplate\u003E\n```\n\n## Example: client-side teleport\n\n```vue\n  \u003CClientOnly\u003E\n    \u003CTeleport to=\"#some-selector\"\u003E\n      \u003C!-- content --\u003E\n    \u003C\u002FTeleport\u003E\n  \u003C\u002FClientOnly\u003E\n\u003C\u002Ftemplate\u003E\n```\n\n:LinkExample{link=\"\u002Fexamples\u002Fapp\u002Fteleport\"}\n",ast:{type:"root",children:[{type:b,tag:"prose-h1",props:{class:"d-heading-title",id:C},children:[{type:a,value:D}]},{type:a,value:i},{type:b,tag:F,props:{class:"d-heading-description"},children:[{type:a,value:"Vue 3 provides the "},{type:b,tag:y,props:{href:"https:\u002F\u002Fvuejs.org\u002Fguide\u002Fbuilt-ins\u002Fteleport.html",rel:["nofollow","noopener","noreferrer"],target:"_blank"},children:[{type:b,tag:q,props:{},children:[{type:a,value:G}]},{type:a,value:" component"}]},{type:a,value:" which allows content to be rendered elsewhere in the DOM, outside of the Vue application."}]},{type:a,value:i},{type:b,tag:F,props:{},children:[{type:a,value:"The "},{type:b,tag:q,props:{},children:[{type:a,value:z}]},{type:a,value:" target of "},{type:b,tag:q,props:{},children:[{type:a,value:G}]},{type:a,value:" expects a CSS selector string or an actual DOM node. Nuxt currently has SSR support for teleports to "},{type:b,tag:q,props:{},children:[{type:a,value:H}]},{type:a,value:" only, with client-side support for other targets using a "},{type:b,tag:q,props:{},children:[{type:a,value:"\u003CClientOnly\u003E"}]},{type:a,value:" wrapper."}]},{type:a,value:i},{type:b,tag:I,props:{id:J},children:[{type:b,tag:y,props:{href:"#example-body-teleport"},children:[{type:a,value:K}]}]},{type:a,value:i},{type:b,tag:L,props:{},children:[{type:b,tag:M,props:{className:[N,O]},children:[{type:b,tag:P,props:{},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:A}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:u}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:Q}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:b,tag:c,props:{className:[d,e,o]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:"open = true"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]}]},{type:a,value:"\n    Open Modal\n  "},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:u}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:v}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:z}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:b,tag:c,props:{className:[d,e,o]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:H},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]}]},{type:a,value:w},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:R}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"v-if"}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:b,tag:c,props:{className:[d,e,o]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:"open"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"class"}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:b,tag:c,props:{className:[d,e,o]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:"modal"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]}]},{type:a,value:B},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:S}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]}]},{type:a,value:"Hello from the modal!"},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:S}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]}]},{type:a,value:B},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:u}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:Q}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:b,tag:c,props:{className:[d,e,o]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:"open = false"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]}]},{type:a,value:"\n        Close\n      "},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:u}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]}]},{type:a,value:w},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:R}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:v}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:A}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]}]},{type:a,value:i}]}]}]},{type:a,value:i},{type:b,tag:I,props:{id:T},children:[{type:b,tag:y,props:{href:"#example-client-side-teleport"},children:[{type:a,value:U}]}]},{type:a,value:i},{type:b,tag:L,props:{},children:[{type:b,tag:M,props:{className:[N,O]},children:[{type:b,tag:P,props:{},children:[{type:a,value:"  "},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:V}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]}]},{type:a,value:w},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:v}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:z}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:b,tag:c,props:{className:[d,e,o]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:"#some-selector"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]}]},{type:a,value:B},{type:b,tag:c,props:{className:[d,"comment"]},children:[{type:a,value:"\u003C!-- content --\u003E"}]},{type:a,value:w},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:v}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:V}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:A}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]}]},{type:a,value:i}]}]}]},{type:a,value:i},{type:b,tag:"link-example",props:{link:"\u002Fexamples\u002Fapp\u002Fteleport"},children:[]}]},toc:{title:W,searchDepth:x,depth:x,links:[{id:J,depth:x,text:K},{id:T,depth:x,text:U}]}},template:"Docs"},templateOptions:{header:s,footer:s,aside:s,asideClass:W,fluid:r,banner:r},_img:{}}],fetch:{"0":{headerLinks:[{title:"Getting Started",to:"\u002Fgetting-started\u002Fquick-start"},{title:"Guide",to:"\u002Fguide\u002Fconcepts\u002Fintroduction"},{title:"API",to:"\u002Fapi\u002Fcomposables\u002Fuse-async-data"},{title:"示例",to:"\u002Fexamples\u002Fessentials\u002Fhello-world"},{title:"社区",to:"\u002Fcommunity\u002Fgetting-help"}]},"1":{repoUrl:"https:\u002F\u002Fgithub.com\u002Fpangu-dev\u002Fpangu",prev:{slug:"runtime-config",to:"\u002Fguide\u002Ffeatures\u002Fruntime-config",title:"Runtime Config"},next:{slug:"modules",to:"\u002Fguide\u002Ffeatures\u002Fmodules",title:"Modules"}},_lazyComponents:new Set(["ProseParagraph","ButtonLink","HomeHero","SectionContentItem","HomeFeatures","IconNuxtNitro","Headline","ProseStrong","ProseA","ProseCodeInline","NuxtContainer","IconNuxtBridge","ProseH3","ProseLi","ProseUl","List","ProseH1","ProseH2","ProseCode","Alert","CodeGroup","ProseEm","ReadMore","Sandbox","ProseTh","ProseTr","ProseThead","ProseTd","ProseTbody","ProseTable","ProseBlockquote","ProseImg","NeedContribution","LinkExample","ProseOl","ProseH4","IconCloud","LogoAzure","LogoCloudFlare","LogoFirebase","LogoNetlify","LogoVercel"])},mutations:E}}("text","element","span","token","punctuation","tag","\u003E","\"","\n","\u003C\u002F","\u003C"," ","attr-name","attr-value","attr-equals","=","prose-code-inline",false,true,"\n  ","button","Teleport","\n    ",2,"prose-a","to","template","\n      ","teleports","Teleports",void 0,"prose-paragraph","\u003CTeleport\u003E","body","prose-h2","example-body-teleport","Example: body teleport","prose-code","pre","language-html","line-numbers","code","@click","div","p","example-client-side-teleport","Example: client-side teleport","ClientOnly","")));