__NUXT_JSONP__("/api/utils/clear-error", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){return {data:[{page:{key:"content:en:3.api:3.utils:clear-error.md",generatedAt:new Date(1658586930400),mtime:new Date(1658586930396),slug:"clear-error",title:f,position:"000300039999",to:"\u002Fapi\u002Futils\u002Fclear-error",draft:j,page:k,language:"en",empty:j,description:l,excerpt:m,body:{raw:"# `clearError`\n\nNuxt provides a composable to clear all handled errors.\n\nWithin your pages, components, and plugins, you can use `clearError` to clear all errors and redirect the user.\n\n**Parameters:**\n\n- `options?: { redirect?: string }`\n\nYou can provide an optional path to redirect to (for example, if you want to navigate to a 'safe' page).\n\n```js\n\u002F\u002F Without redirect\nclearError()\n\n\u002F\u002F With redirect\nclearError({ redirect: '\u002Fhomepage' })\n```\n\nErrors are set in state using [`useError()`](\u002Fapi\u002Fcomposables\u002Fuse-error). The `clearError` composable will reset this state and calls the `app:error:cleared` hook with the provided options.\n\n::ReadMore{link=\"\u002Fguide\u002Ffeatures\u002Ferror-handling\"}\n::\n",ast:{type:"root",children:[{type:b,tag:"prose-h1",props:{class:"d-heading-title",id:"clearerror"},children:[{type:b,tag:g,props:{},children:[{type:a,value:f}]}]},{type:a,value:c},{type:b,tag:i,props:{class:"d-heading-description"},children:[{type:a,value:l}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:"Within your pages, components, and plugins, you can use "},{type:b,tag:g,props:{},children:[{type:a,value:f}]},{type:a,value:" to clear all errors and redirect the user."}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:b,tag:"prose-strong",props:{},children:[{type:a,value:"Parameters:"}]}]},{type:a,value:c},{type:b,tag:"prose-ul",props:{},children:[{type:a,value:c},{type:b,tag:"prose-li",props:{},children:[{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"options?: { redirect?: string }"}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:"You can provide an optional path to redirect to (for example, if you want to navigate to a 'safe' page)."}]},{type:a,value:c},{type:b,tag:"prose-code",props:{},children:[{type:b,tag:"pre",props:{className:["language-js","line-numbers"]},children:[{type:b,tag:"code",props:{},children:[{type:b,tag:d,props:{className:[e,n]},children:[{type:a,value:"\u002F\u002F Without redirect"}]},{type:a,value:c},{type:b,tag:d,props:{className:[e,o]},children:[{type:a,value:f}]},{type:b,tag:d,props:{className:[e,h]},children:[{type:a,value:p}]},{type:b,tag:d,props:{className:[e,h]},children:[{type:a,value:q}]},{type:a,value:"\n\n"},{type:b,tag:d,props:{className:[e,n]},children:[{type:a,value:"\u002F\u002F With redirect"}]},{type:a,value:c},{type:b,tag:d,props:{className:[e,o]},children:[{type:a,value:f}]},{type:b,tag:d,props:{className:[e,h]},children:[{type:a,value:p}]},{type:b,tag:d,props:{className:[e,h]},children:[{type:a,value:"{"}]},{type:a,value:" redirect"},{type:b,tag:d,props:{className:[e,"operator"]},children:[{type:a,value:":"}]},{type:a,value:r},{type:b,tag:d,props:{className:[e,"string"]},children:[{type:a,value:"'\u002Fhomepage'"}]},{type:a,value:r},{type:b,tag:d,props:{className:[e,h]},children:[{type:a,value:"}"}]},{type:b,tag:d,props:{className:[e,h]},children:[{type:a,value:q}]},{type:a,value:c}]}]}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:"Errors are set in state using "},{type:b,tag:"prose-a",props:{href:"\u002Fapi\u002Fcomposables\u002Fuse-error"},children:[{type:b,tag:g,props:{},children:[{type:a,value:"useError()"}]}]},{type:a,value:". The "},{type:b,tag:g,props:{},children:[{type:a,value:f}]},{type:a,value:" composable will reset this state and calls the "},{type:b,tag:g,props:{},children:[{type:a,value:"app:error:cleared"}]},{type:a,value:" hook with the provided options."}]},{type:a,value:c},{type:b,tag:"read-more",props:{link:"\u002Fguide\u002Ffeatures\u002Ferror-handling"},children:[]}]},toc:{title:s,searchDepth:t,depth:t,links:[]}},template:"Docs"},templateOptions:{header:k,footer:k,aside:k,asideClass:s,fluid:j,banner:j},_img:{}}],fetch:{"0":{headerLinks:[{title:"Getting Started",to:"\u002Fgetting-started\u002Fquick-start"},{title:"Guide",to:"\u002Fguide\u002Fconcepts\u002Fintroduction"},{title:"API",to:"\u002Fapi\u002Fcomposables\u002Fuse-async-data"},{title:"Examples",to:"\u002Fexamples\u002Fessentials\u002Fhello-world"},{title:"Community",to:"\u002Fcommunity\u002Fgetting-help"}]},"1":{repoUrl:"https:\u002F\u002Fgithub.com\u002Fpangu-dev\u002Fpangu",prev:{slug:"add-route-middleware",to:"\u002Fapi\u002Futils\u002Fadd-route-middleware",title:"addRouteMiddleware"},next:{slug:"define-nuxt-component",to:"\u002Fapi\u002Futils\u002Fdefine-nuxt-component",title:"defineNuxtComponent"}},_lazyComponents:new Set(["ProseParagraph","ButtonLink","HomeHero","SectionContentItem","HomeFeatures","IconNuxtNitro","Headline","ProseStrong","ProseA","ProseCodeInline","NuxtContainer","IconNuxtBridge","ProseH3","ProseLi","ProseUl","List","ProseH1","ProseH2","ProseCode","Alert","CodeGroup","ProseEm","ReadMore","Sandbox","ProseTh","ProseTr","ProseThead","ProseTd","ProseTbody","ProseTable","ProseBlockquote","ProseImg","NeedContribution","LinkExample","ProseOl","ProseH4","IconCloud","LogoAzure","LogoCloudFlare","LogoFirebase","LogoNetlify","LogoVercel"])},mutations:m}}("text","element","\n","span","token","clearError","prose-code-inline","punctuation","prose-paragraph",false,true,"Nuxt provides a composable to clear all handled errors.",void 0,"comment","function","(",")"," ","",2)));