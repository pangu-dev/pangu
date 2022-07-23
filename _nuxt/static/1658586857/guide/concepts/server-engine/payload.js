__NUXT_JSONP__("/guide/concepts/server-engine", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N){return {data:[{page:{key:"content:en:2.guide:1.concepts:4.server-engine.md",generatedAt:new Date(1658586922563),mtime:new Date(1658586922554),slug:s,title:t,position:"000200010004",to:"\u002Fguide\u002Fconcepts\u002Fserver-engine",draft:n,page:o,language:"en",empty:n,description:u,excerpt:v,body:{raw:"# Server Engine\n\nNuxt 3 is powered by a new server engine, code-named \"Nitro\".\n\nThis engine has many benefits:\n::list\n\n- Cross-platform support for Node.js, Browsers, service-workers and more.\n- Serverless support out-of-the-box.\n- API routes support.\n- Automatic code-splitting and async-loaded chunks.\n- Hybrid mode for static + serverless sites.\n- Development server with hot module reloading.\n::\n\n## API Layer\n\nServer [API endpoints](\u002Fguide\u002Fdirectory-structure\u002Fserver#api-routes) and [Middleware](\u002Fguide\u002Fdirectory-structure\u002Fserver#server-middleware) are added by Nitro that internally uses [h3](https:\u002F\u002Fgithub.com\u002Funjs\u002Fh3).\n\nKey features include:\n\n- Handlers can directly return objects\u002Farrays for an automatically-handled JSON response\n- Handlers can return promises, which will be awaited (`res.end()` and `next()` are also supported)\n- Helper functions for body parsing, cookie handling, redirects, headers and more\n\nCheck out [the h3 docs](https:\u002F\u002Fgithub.com\u002Funjs\u002Fh3) for more information.\n\n::alert{type=\"info\" icon=ℹ️}\nLearn more about the API layer in the [`server\u002F`](\u002Fguide\u002Fdirectory-structure\u002Fserver) directory.\n::\n\n## Direct API calls\n\nNitro allows 'direct' calling of routes via the globally-available `$fetch` helper. This will make an API call to the server if run on the browser, but will directly call the relevant function if run on the server, **saving an additional API call**.\n\n`$fetch` API is using [ohmyfetch](https:\u002F\u002Fgithub.com\u002Funjs\u002Fohmyfetch), with key features including:\n\n- Automatic parsing of JSON responses (with access to raw response if needed)\n- Request body and params are automatically handled, with correct `Content-Type` headers\n\nFor more information on `$fetch` features, check out [ohmyfetch](https:\u002F\u002Fgithub.com\u002Funjs\u002Fohmyfetch).\n\n## Typed API routes\n\nWhen using API routes (or middleware), Nitro will generate typings for these routes as long as you are returning a value instead of using `res.end()` to send a response.\n\nYou can access these types when using `$fetch()` or `useFetch()`.\n\n## Standalone Server\n\nNitro produces a standalone server dist that is independent of `node_modules`.\n\nThe server in Nuxt 2 is not standalone and requires part of Nuxt core to be involved by running `nuxt start` (with the [`nuxt-start`](https:\u002F\u002Fwww.npmjs.com\u002Fpackage\u002Fnuxt-start) or [`nuxt`](https:\u002F\u002Fwww.npmjs.com\u002Fpackage\u002Fnuxt) distributions) or custom programmatic usage, which is fragile and prone to breakage and not suitable for serverless and service-worker environments.\n\nNuxt 3 generates this dist when running `nuxt build` into a [`.output`](\u002Fguide\u002Fdirectory-structure\u002Foutput) directory.\n\nThe output contains runtime code to run your Nuxt server in any environment (including experimental browser service workers!) and serve your static files, making it a true hybrid framework for the JAMstack. In addition, Nuxt implements a native storage layer, supporting multi-source drivers and local assets.\n\n::alert{type=\"info\" icon=IconCode}\nCheck out the Nitro engine on GitHub: [unjs\u002Fnitro](https:\u002F\u002Fgithub.com\u002Funjs\u002Fnitro).\n::\n",ast:{type:"root",children:[{type:b,tag:"prose-h1",props:{class:"d-heading-title",id:s},children:[{type:a,value:t}]},{type:a,value:c},{type:b,tag:d,props:{class:"d-heading-description"},children:[{type:a,value:u}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"This engine has many benefits:"}]},{type:a,value:c},{type:b,tag:"list",props:{},children:[{type:b,tag:q,props:{},children:[{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:c},{type:a,value:"Cross-platform support for Node.js, Browsers, service-workers and more."},{type:a,value:c}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:c},{type:a,value:"Serverless support out-of-the-box."},{type:a,value:c}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:c},{type:a,value:"API routes support."},{type:a,value:c}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:c},{type:a,value:"Automatic code-splitting and async-loaded chunks."},{type:a,value:c}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:c},{type:a,value:"Hybrid mode for static + serverless sites."},{type:a,value:c}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:c},{type:a,value:"Development server with hot module reloading."},{type:a,value:c}]},{type:a,value:c}]}]},{type:a,value:c},{type:b,tag:p,props:{id:w},children:[{type:b,tag:f,props:{href:"#api-layer"},children:[{type:a,value:x}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Server "},{type:b,tag:f,props:{href:"\u002Fguide\u002Fdirectory-structure\u002Fserver#api-routes"},children:[{type:a,value:"API endpoints"}]},{type:a,value:y},{type:b,tag:f,props:{href:"\u002Fguide\u002Fdirectory-structure\u002Fserver#server-middleware"},children:[{type:a,value:"Middleware"}]},{type:a,value:" are added by Nitro that internally uses "},{type:b,tag:f,props:{href:z,rel:[h,i,j],target:k},children:[{type:a,value:"h3"}]},{type:a,value:l}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Key features include:"}]},{type:a,value:c},{type:b,tag:q,props:{},children:[{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:c},{type:a,value:"Handlers can directly return objects\u002Farrays for an automatically-handled JSON response"},{type:a,value:c}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:c},{type:a,value:"Handlers can return promises, which will be awaited ("},{type:b,tag:e,props:{},children:[{type:a,value:A}]},{type:a,value:y},{type:b,tag:e,props:{},children:[{type:a,value:"next()"}]},{type:a,value:" are also supported)"},{type:a,value:c}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:c},{type:a,value:"Helper functions for body parsing, cookie handling, redirects, headers and more"},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Check out "},{type:b,tag:f,props:{href:z,rel:[h,i,j],target:k},children:[{type:a,value:"the h3 docs"}]},{type:a,value:" for more information."}]},{type:a,value:c},{type:b,tag:B,props:{icon:"ℹ️",type:C},children:[{type:b,tag:d,props:{},children:[{type:a,value:"Learn more about the API layer in the "},{type:b,tag:f,props:{href:"\u002Fguide\u002Fdirectory-structure\u002Fserver"},children:[{type:b,tag:e,props:{},children:[{type:a,value:"server\u002F"}]}]},{type:a,value:D}]}]},{type:a,value:c},{type:b,tag:p,props:{id:E},children:[{type:b,tag:f,props:{href:"#direct-api-calls"},children:[{type:a,value:F}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Nitro allows 'direct' calling of routes via the globally-available "},{type:b,tag:e,props:{},children:[{type:a,value:r}]},{type:a,value:" helper. This will make an API call to the server if run on the browser, but will directly call the relevant function if run on the server, "},{type:b,tag:"prose-strong",props:{},children:[{type:a,value:"saving an additional API call"}]},{type:a,value:l}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{},children:[{type:a,value:r}]},{type:a,value:" API is using "},{type:b,tag:f,props:{href:G,rel:[h,i,j],target:k},children:[{type:a,value:H}]},{type:a,value:", with key features including:"}]},{type:a,value:c},{type:b,tag:q,props:{},children:[{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:c},{type:a,value:"Automatic parsing of JSON responses (with access to raw response if needed)"},{type:a,value:c}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:c},{type:a,value:"Request body and params are automatically handled, with correct "},{type:b,tag:e,props:{},children:[{type:a,value:"Content-Type"}]},{type:a,value:" headers"},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"For more information on "},{type:b,tag:e,props:{},children:[{type:a,value:r}]},{type:a,value:" features, check out "},{type:b,tag:f,props:{href:G,rel:[h,i,j],target:k},children:[{type:a,value:H}]},{type:a,value:l}]},{type:a,value:c},{type:b,tag:p,props:{id:I},children:[{type:b,tag:f,props:{href:"#typed-api-routes"},children:[{type:a,value:J}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"When using API routes (or middleware), Nitro will generate typings for these routes as long as you are returning a value instead of using "},{type:b,tag:e,props:{},children:[{type:a,value:A}]},{type:a,value:" to send a response."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"You can access these types when using "},{type:b,tag:e,props:{},children:[{type:a,value:"$fetch()"}]},{type:a,value:K},{type:b,tag:e,props:{},children:[{type:a,value:"useFetch()"}]},{type:a,value:l}]},{type:a,value:c},{type:b,tag:p,props:{id:L},children:[{type:b,tag:f,props:{href:"#standalone-server"},children:[{type:a,value:M}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Nitro produces a standalone server dist that is independent of "},{type:b,tag:e,props:{},children:[{type:a,value:"node_modules"}]},{type:a,value:l}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"The server in Nuxt 2 is not standalone and requires part of Nuxt core to be involved by running "},{type:b,tag:e,props:{},children:[{type:a,value:"nuxt start"}]},{type:a,value:" (with the "},{type:b,tag:f,props:{href:"https:\u002F\u002Fwww.npmjs.com\u002Fpackage\u002Fnuxt-start",rel:[h,i,j],target:k},children:[{type:b,tag:e,props:{},children:[{type:a,value:"nuxt-start"}]}]},{type:a,value:K},{type:b,tag:f,props:{href:"https:\u002F\u002Fwww.npmjs.com\u002Fpackage\u002Fnuxt",rel:[h,i,j],target:k},children:[{type:b,tag:e,props:{},children:[{type:a,value:"nuxt"}]}]},{type:a,value:" distributions) or custom programmatic usage, which is fragile and prone to breakage and not suitable for serverless and service-worker environments."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Nuxt 3 generates this dist when running "},{type:b,tag:e,props:{},children:[{type:a,value:"nuxt build"}]},{type:a,value:" into a "},{type:b,tag:f,props:{href:"\u002Fguide\u002Fdirectory-structure\u002Foutput"},children:[{type:b,tag:e,props:{},children:[{type:a,value:".output"}]}]},{type:a,value:D}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"The output contains runtime code to run your Nuxt server in any environment (including experimental browser service workers!) and serve your static files, making it a true hybrid framework for the JAMstack. In addition, Nuxt implements a native storage layer, supporting multi-source drivers and local assets."}]},{type:a,value:c},{type:b,tag:B,props:{icon:"IconCode",type:C},children:[{type:b,tag:d,props:{},children:[{type:a,value:"Check out the Nitro engine on GitHub: "},{type:b,tag:f,props:{href:"https:\u002F\u002Fgithub.com\u002Funjs\u002Fnitro",rel:[h,i,j],target:k},children:[{type:a,value:"unjs\u002Fnitro"}]},{type:a,value:l}]}]}]},toc:{title:N,searchDepth:m,depth:m,links:[{id:w,depth:m,text:x},{id:E,depth:m,text:F},{id:I,depth:m,text:J},{id:L,depth:m,text:M}]}},template:"Docs"},templateOptions:{header:o,footer:o,aside:o,asideClass:N,fluid:n,banner:n},_img:{}}],fetch:{"0":{headerLinks:[{title:"Getting Started",to:"\u002Fgetting-started\u002Fquick-start"},{title:"Guide",to:"\u002Fguide\u002Fconcepts\u002Fintroduction"},{title:"API",to:"\u002Fapi\u002Fcomposables\u002Fuse-async-data"},{title:"Examples",to:"\u002Fexamples\u002Fessentials\u002Fhello-world"},{title:"Community",to:"\u002Fcommunity\u002Fgetting-help"}]},"1":{repoUrl:"https:\u002F\u002Fgithub.com\u002Fpangu-dev\u002Fpangu",prev:{slug:"auto-imports",to:"\u002Fguide\u002Fconcepts\u002Fauto-imports",title:"Auto Imports"},next:{slug:"typescript",to:"\u002Fguide\u002Fconcepts\u002Ftypescript",title:"TypeScript"}},_lazyComponents:new Set(["ProseParagraph","ButtonLink","HomeHero","SectionContentItem","HomeFeatures","IconNuxtNitro","Headline","ProseStrong","ProseA","ProseCodeInline","NuxtContainer","IconNuxtBridge","ProseH3","ProseLi","ProseUl","List","ProseH1","ProseH2","ProseCode","Alert","CodeGroup","ProseEm","ReadMore","Sandbox","ProseTh","ProseTr","ProseThead","ProseTd","ProseTbody","ProseTable"])},mutations:v}}("text","element","\n","prose-paragraph","prose-code-inline","prose-a","prose-li","nofollow","noopener","noreferrer","_blank",".",2,false,true,"prose-h2","prose-ul","$fetch","server-engine","Server Engine","Nuxt 3 is powered by a new server engine, code-named \"Nitro\".",void 0,"api-layer","API Layer"," and ","https:\u002F\u002Fgithub.com\u002Funjs\u002Fh3","res.end()","alert","info"," directory.","direct-api-calls","Direct API calls","https:\u002F\u002Fgithub.com\u002Funjs\u002Fohmyfetch","ohmyfetch","typed-api-routes","Typed API routes"," or ","standalone-server","Standalone Server","")));