__NUXT_JSONP__("/api/utils/abort-navigation", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){return {data:[{page:{key:"content:3.api:3.utils:abort-navigation.md",generatedAt:new Date(1657446962083),mtime:new Date(1657446962079),slug:"abort-navigation",title:j,position:"000300039999",to:"\u002Fapi\u002Futils\u002Fabort-navigation",draft:f,page:g,language:"en",empty:f,description:k,excerpt:m,body:{raw:"# `abortNavigation`\n\n```ts\nabortNavigation(err?: Error | string): false\n```\n\n* **err**: Optional error to be thrown by `abortNavigation()`.\n\n::alert{type=\"warning\"}\n`abortNavigation()` is only usable inside a [route middleware handler](\u002Fguide\u002Fdirectory-structure\u002Fmiddleware).\n::\n\nInside a route middleware handler, `abortNavigation()` will abort navigation, and throw an error if one is set as a parameter.\n\n::ReadMore{link=\"\u002Fguide\u002Ffeatures\u002Frouting\"}\n::\n",ast:{type:"root",children:[{type:b,tag:"prose-h1",props:{class:"d-heading-title",id:"abortnavigation"},children:[{type:b,tag:h,props:{},children:[{type:a,value:j}]}]},{type:a,value:c},{type:b,tag:"prose-code",props:{},children:[{type:b,tag:"pre",props:{className:["language-ts","line-numbers"]},children:[{type:b,tag:"code",props:{},children:[{type:b,tag:d,props:{className:[e,"function"]},children:[{type:a,value:j}]},{type:b,tag:d,props:{className:[e,n]},children:[{type:a,value:"("}]},{type:a,value:o},{type:b,tag:d,props:{className:[e,i]},children:[{type:a,value:"?"}]},{type:b,tag:d,props:{className:[e,i]},children:[{type:a,value:p}]},{type:a,value:" Error "},{type:b,tag:d,props:{className:[e,i]},children:[{type:a,value:"|"}]},{type:a,value:q},{type:b,tag:d,props:{className:[e,"builtin"]},children:[{type:a,value:"string"}]},{type:b,tag:d,props:{className:[e,n]},children:[{type:a,value:")"}]},{type:b,tag:d,props:{className:[e,i]},children:[{type:a,value:p}]},{type:a,value:q},{type:b,tag:d,props:{className:[e,"boolean"]},children:[{type:a,value:"false"}]},{type:a,value:c}]}]}]},{type:a,value:c},{type:b,tag:"prose-ul",props:{},children:[{type:a,value:c},{type:b,tag:"prose-li",props:{},children:[{type:a,value:c},{type:b,tag:"prose-strong",props:{},children:[{type:a,value:o}]},{type:a,value:": Optional error to be thrown by "},{type:b,tag:h,props:{},children:[{type:a,value:l}]},{type:a,value:r},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:"alert",props:{type:"warning"},children:[{type:b,tag:s,props:{},children:[{type:b,tag:h,props:{},children:[{type:a,value:l}]},{type:a,value:" is only usable inside a "},{type:b,tag:"prose-a",props:{href:"\u002Fguide\u002Fdirectory-structure\u002Fmiddleware"},children:[{type:a,value:"route middleware handler"}]},{type:a,value:r}]}]},{type:a,value:c},{type:b,tag:s,props:{},children:[{type:a,value:"Inside a route middleware handler, "},{type:b,tag:h,props:{},children:[{type:a,value:l}]},{type:a,value:" will abort navigation, and throw an error if one is set as a parameter."}]},{type:a,value:c},{type:b,tag:"read-more",props:{link:"\u002Fguide\u002Ffeatures\u002Frouting"},children:[]}]},toc:{title:k,searchDepth:t,depth:t,links:[]}},template:"Docs"},templateOptions:{header:g,footer:g,aside:g,asideClass:k,fluid:f,banner:f},_img:{}}],fetch:{"0":{headerLinks:[{title:"Getting Started",to:"\u002Fgetting-started\u002Fquick-start"},{title:"Guide",to:"\u002Fguide\u002Fconcepts\u002Fintroduction"},{title:"API",to:"\u002Fapi\u002Fcomposables\u002Fuse-async-data"},{title:"Examples",to:"\u002Fexamples\u002Fessentials\u002Fhello-world"},{title:"Community",to:"\u002Fcommunity\u002Fgetting-help"}]},"1":{repoUrl:"https:\u002F\u002Fgithub.com\u002Fpangu-dev\u002Fpangu",prev:{slug:u,to:"\u002Fapi\u002Futils\u002F$fetch",title:u},next:{slug:"add-route-middleware",to:"\u002Fapi\u002Futils\u002Fadd-route-middleware",title:"addRouteMiddleware"}},_lazyComponents:new Set(["ProseParagraph","ButtonLink","HomeHero","SectionContentItem","HomeFeatures","IconNuxtNitro","Headline","ProseStrong","ProseA","ProseCodeInline","NuxtContainer","IconNuxtBridge","ProseH3","ProseLi","ProseUl","List","ProseH1","ProseH2","ProseCode","Alert","CodeGroup","ProseEm","ReadMore","Sandbox","ProseTh","ProseTr","ProseThead","ProseTd","ProseTbody","ProseTable","ProseBlockquote","ProseImg","NeedContribution","LinkExample","ProseOl","ProseH4","IconCloud","LogoAzure","LogoCloudFlare","LogoFirebase","LogoNetlify","LogoVercel"])},mutations:m}}("text","element","\n","span","token",false,true,"prose-code-inline","operator","abortNavigation","","abortNavigation()",void 0,"punctuation","err",":"," ",".","prose-paragraph",2,"$fetch")));