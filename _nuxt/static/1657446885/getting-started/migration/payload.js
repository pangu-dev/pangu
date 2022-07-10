__NUXT_JSONP__("/getting-started/migration", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z){return {data:[{page:{key:"content:1.getting-started:2.migration.md",generatedAt:new Date(1657446956128),mtime:new Date(1657446956121),slug:"migration",title:n,position:"000100020000",to:"\u002Fgetting-started\u002Fmigration",draft:g,page:h,language:"en",empty:g,description:o,excerpt:p,body:{raw:"# Migration Guide\n\nAlready have a Nuxt project to migrate? These migration guides are for users wanting to upgrade their Nuxt application to Nuxt 3 or take the first step in that direction with Nuxt Bridge.\n\n- [**From Nuxt 2 to Nuxt 3**](\u002Fmigration\u002Foverview)\n- [From Nuxt 2 to Nuxt Bridge](\u002Fbridge\u002Foverview)\n\n## Feature Comparison\n\nIn the table below, there is a quick comparison between 3 versions of Nuxt:\n\nFeature \u002F Version        | Nuxt 2          | Nuxt Bridge      | Nuxt 3\n-------------------------|-----------------|------------------|---------\nVue                      | 2               | 2                | 3\nStability                | 😊 Stable      | 😌 Semi-stable   | 😬 Unstable\nPerformance              | 🏎 Fast        | ✈️ Faster        | 🚀 Fastest\nNitro Engine             | ❌             | ✅               | ✅\nESM support              | 🌙 Partial     | 👍 Better        | ✅\nTypeScript               | ☑️ Opt-in      | 🚧 Partial       | ✅\nComposition API          | ❌             | 🚧 Partial       | ✅\nOptions API              | ✅             | ✅               | ✅\nComponents Auto Import   | ✅             | ✅               | ✅\n`\u003Cscript setup\u003E` syntax  | ❌             | 🚧 Partial       | ✅\nAuto Imports             | ❌             | ✅               | ✅\nWebpack                  | 4              | 4                | 5\nVite                     | ⚠️ Partial     | 🚧 Partial       | ✅\nNuxi CLI                 | ❌ Old         | ✅ nuxi          | ✅ nuxi\nStatic sites             | ✅             | ✅               | 🚧 Experimental\n",ast:{type:"root",children:[{type:c,tag:"prose-h1",props:{class:"d-heading-title",id:"migration-guide"},children:[{type:a,value:n}]},{type:a,value:b},{type:c,tag:q,props:{class:"d-heading-description"},children:[{type:a,value:o}]},{type:a,value:b},{type:c,tag:"prose-ul",props:{},children:[{type:a,value:b},{type:c,tag:r,props:{},children:[{type:a,value:b},{type:c,tag:l,props:{href:"\u002Fmigration\u002Foverview"},children:[{type:c,tag:"prose-strong",props:{},children:[{type:a,value:"From Nuxt 2 to Nuxt 3"}]}]},{type:a,value:b}]},{type:a,value:b},{type:c,tag:r,props:{},children:[{type:a,value:b},{type:c,tag:l,props:{href:"\u002Fbridge\u002Foverview"},children:[{type:a,value:"From Nuxt 2 to Nuxt Bridge"}]},{type:a,value:b}]},{type:a,value:b}]},{type:a,value:b},{type:c,tag:"prose-h2",props:{id:s},children:[{type:c,tag:l,props:{href:"#feature-comparison"},children:[{type:a,value:t}]}]},{type:a,value:b},{type:c,tag:q,props:{},children:[{type:a,value:"In the table below, there is a quick comparison between 3 versions of Nuxt:"}]},{type:a,value:b},{type:c,tag:"prose-table",props:{},children:[{type:a,value:b},{type:c,tag:"prose-thead",props:{},children:[{type:a,value:b},{type:c,tag:f,props:{},children:[{type:a,value:b},{type:c,tag:i,props:{},children:[{type:a,value:"Feature \u002F Version"}]},{type:a,value:b},{type:c,tag:i,props:{},children:[{type:a,value:"Nuxt 2"}]},{type:a,value:b},{type:c,tag:i,props:{},children:[{type:a,value:"Nuxt Bridge"}]},{type:a,value:b},{type:c,tag:i,props:{},children:[{type:a,value:"Nuxt 3"}]},{type:a,value:b}]},{type:a,value:b}]},{type:a,value:b},{type:c,tag:"prose-tbody",props:{},children:[{type:a,value:b},{type:c,tag:f,props:{},children:[{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"Vue"}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:u}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:u}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"3"}]},{type:a,value:b}]},{type:a,value:b},{type:c,tag:f,props:{},children:[{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"Stability"}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"😊 Stable"}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"😌 Semi-stable"}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"😬 Unstable"}]},{type:a,value:b}]},{type:a,value:b},{type:c,tag:f,props:{},children:[{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"Performance"}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"🏎 Fast"}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"✈️ Faster"}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"🚀 Fastest"}]},{type:a,value:b}]},{type:a,value:b},{type:c,tag:f,props:{},children:[{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"Nitro Engine"}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:j}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:e}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:e}]},{type:a,value:b}]},{type:a,value:b},{type:c,tag:f,props:{},children:[{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"ESM support"}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"🌙 Partial"}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"👍 Better"}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:e}]},{type:a,value:b}]},{type:a,value:b},{type:c,tag:f,props:{},children:[{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"TypeScript"}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"☑️ Opt-in"}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:k}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:e}]},{type:a,value:b}]},{type:a,value:b},{type:c,tag:f,props:{},children:[{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"Composition API"}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:j}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:k}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:e}]},{type:a,value:b}]},{type:a,value:b},{type:c,tag:f,props:{},children:[{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"Options API"}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:e}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:e}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:e}]},{type:a,value:b}]},{type:a,value:b},{type:c,tag:f,props:{},children:[{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"Components Auto Import"}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:e}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:e}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:e}]},{type:a,value:b}]},{type:a,value:b},{type:c,tag:f,props:{},children:[{type:a,value:b},{type:c,tag:d,props:{},children:[{type:c,tag:"prose-code-inline",props:{},children:[{type:a,value:"\u003Cscript setup\u003E"}]},{type:a,value:" syntax"}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:j}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:k}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:e}]},{type:a,value:b}]},{type:a,value:b},{type:c,tag:f,props:{},children:[{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"Auto Imports"}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:j}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:e}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:e}]},{type:a,value:b}]},{type:a,value:b},{type:c,tag:f,props:{},children:[{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"Webpack"}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:v}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:v}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"5"}]},{type:a,value:b}]},{type:a,value:b},{type:c,tag:f,props:{},children:[{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"Vite"}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"⚠️ Partial"}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:k}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:e}]},{type:a,value:b}]},{type:a,value:b},{type:c,tag:f,props:{},children:[{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"Nuxi CLI"}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"❌ Old"}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:w}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:w}]},{type:a,value:b}]},{type:a,value:b},{type:c,tag:f,props:{},children:[{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"Static sites"}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:e}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:e}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"🚧 Experimental"}]},{type:a,value:b}]},{type:a,value:b}]},{type:a,value:b}]}]},toc:{title:x,searchDepth:m,depth:m,links:[{id:s,depth:m,text:t}]}},template:"Docs"},templateOptions:{header:h,footer:h,aside:h,asideClass:x,fluid:g,banner:g},_img:{}}],fetch:{"0":{headerLinks:[{title:"Getting Started",to:y},{title:"Guide",to:z},{title:"API",to:"\u002Fapi\u002Fcomposables\u002Fuse-async-data"},{title:"Examples",to:"\u002Fexamples\u002Fessentials\u002Fhello-world"},{title:"Community",to:"\u002Fcommunity\u002Fgetting-help"}]},"1":{repoUrl:"https:\u002F\u002Fgithub.com\u002Fpangu-dev\u002Fpangu",prev:{slug:"quick-start",to:y,title:"Quick Start"},next:{slug:"introduction",to:z,title:"What is Nuxt?"}},_lazyComponents:new Set(["ProseParagraph","ButtonLink","HomeHero","SectionContentItem","HomeFeatures","IconNuxtNitro","Headline","ProseStrong","ProseA","ProseCodeInline","NuxtContainer","IconNuxtBridge","ProseH3","ProseLi","ProseUl","List","ProseH1","ProseH2","ProseCode","Alert","CodeGroup","ProseEm","ReadMore","Sandbox","ProseTh","ProseTr","ProseThead","ProseTd","ProseTbody","ProseTable"])},mutations:p}}("text","\n","element","prose-td","✅","prose-tr",false,true,"prose-th","❌","🚧 Partial","prose-a",2,"Migration Guide","Already have a Nuxt project to migrate? These migration guides are for users wanting to upgrade their Nuxt application to Nuxt 3 or take the first step in that direction with Nuxt Bridge.",void 0,"prose-paragraph","prose-li","feature-comparison","Feature Comparison","2","4","✅ nuxi","","\u002Fgetting-started\u002Fquick-start","\u002Fguide\u002Fconcepts\u002Fintroduction")));