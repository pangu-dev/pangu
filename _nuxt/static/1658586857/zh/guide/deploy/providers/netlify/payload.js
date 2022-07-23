__NUXT_JSONP__("/zh/guide/deploy/providers/netlify", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H){return {data:[{page:{key:"content:zh:2.guide:5.deploy:providers:netlify.md",generatedAt:new Date(1658586955171),mtime:new Date(1658586955162),slug:s,title:l,position:"000200059999",to:"\u002Fguide\u002Fdeploy\u002Fproviders\u002Fnetlify",draft:m,page:n,language:"zh",icon:t,empty:m,description:"How to deploy Nuxt to Netlify.",excerpt:u,body:{raw:"---\nicon: LogoNetlify\n---\n\n# Netlify\n\nHow to deploy Nuxt to [Netlify](https:\u002F\u002Fwww.netlify.com\u002F).\n\n::list\n\n- Support for serverless SSR using Netlify Functions and Edge\n- Auto-detected when deploying\n- No configuration required\n\n::\n\n## Setup\n\nNormally, the deployment to Netlify does not require any configuration. Nuxt will auto-detect that you are in a [Netlify](https:\u002F\u002Fwww.netlify.com) build environment and build the correct version of your Nuxt server. For new sites, Netlify will detect that you are using Nuxt and set the publish directory to `dist` and build command to `npm run build`. If you are upgrading an existing site, you should check these and update them if needed.\n\nTo trigger a deploy, just push to your git repository [as you would normally do for Netlify](https:\u002F\u002Fdocs.netlify.com\u002Fconfigure-builds\u002Fget-started\u002F).\n\nBy default, Nuxt will server-render each page on server hit using [Netlify Functions](https:\u002F\u002Fdocs.netlify.com\u002Ffunctions\u002Foverview\u002F). You can optionally configure deployment to use [Netlify Edge Functions](https:\u002F\u002Fdocs.netlify.com\u002Fnetlify-labs\u002Fexperimental-features\u002Fedge-functions\u002F) or [Netlify On-demand Builders](https:\u002F\u002Fdocs.netlify.com\u002Fconfigure-builds\u002Fon-demand-builders\u002F).\n\n## Netlify Edge Functions\n\n[Netlify Edge Functions](https:\u002F\u002Fdocs.netlify.com\u002Fnetlify-labs\u002Fexperimental-features\u002Fedge-functions\u002F) use [Deno](https:\u002F\u002Fdeno.land) and the powerful V8 JavaScript runtime to let you run globally distributed functions for the fastest possible response times. Nuxt output can directly run the server at the edge - closer to your users!\n\nRead more in the [Netlify Edge Functions announcement](https:\u002F\u002Fwww.netlify.com\u002Fblog\u002Fannouncing-serverless-compute-with-edge-functions).\n\n## On-demand Builders\n\n[Netlify On-demand Builders](https:\u002F\u002Fdocs.netlify.com\u002Fconfigure-builds\u002Fon-demand-builders\u002F) are serverless functions used to generate web content as needed that’s automatically cached on Netlify’s Edge CDN. They enable you to build pages for your site when a user visits them for the first time and then cache them at the edge for subsequent visits (also known as Incremental Static Regeneration).\n\n## Custom Redirects\n\nIf you want to add custom redirects, you can do so by adding a [`_redirects`](https:\u002F\u002Fdocs.netlify.com\u002Frouting\u002Fredirects\u002F#syntax-for-the-redirects-file) file in the [`public`](\u002Fguide\u002Fdirectory-structure\u002Fpublic) directory.\n\n## Learn More\n\n:ReadMore{link=\"https:\u002F\u002Fnitro.unjs.io\u002Fdeploy\u002Fproviders\u002Fnetlify.html\" title=\"the Nitro documentation for Netlify deployment\"}\n",ast:{type:"root",children:[{type:b,tag:"prose-h1",props:{class:"d-heading-title",id:s},children:[{type:a,value:l}]},{type:a,value:c},{type:b,tag:i,props:{class:"d-heading-description"},children:[{type:a,value:"How to deploy Nuxt to "},{type:b,tag:d,props:{href:"https:\u002F\u002Fwww.netlify.com\u002F",rel:[e,f,g],target:h},children:[{type:a,value:l}]},{type:a,value:o}]},{type:a,value:c},{type:b,tag:"list",props:{},children:[{type:b,tag:"prose-ul",props:{},children:[{type:a,value:c},{type:b,tag:r,props:{},children:[{type:a,value:c},{type:a,value:"Support for serverless SSR using Netlify Functions and Edge"},{type:a,value:c}]},{type:a,value:c},{type:b,tag:r,props:{},children:[{type:a,value:c},{type:a,value:"Auto-detected when deploying"},{type:a,value:c}]},{type:a,value:c},{type:b,tag:r,props:{},children:[{type:a,value:c},{type:a,value:"No configuration required"},{type:a,value:c}]},{type:a,value:c}]}]},{type:a,value:c},{type:b,tag:k,props:{id:v},children:[{type:b,tag:d,props:{href:"#setup"},children:[{type:a,value:w}]}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:"Normally, the deployment to Netlify does not require any configuration. Nuxt will auto-detect that you are in a "},{type:b,tag:d,props:{href:"https:\u002F\u002Fwww.netlify.com",rel:[e,f,g],target:h},children:[{type:a,value:l}]},{type:a,value:" build environment and build the correct version of your Nuxt server. For new sites, Netlify will detect that you are using Nuxt and set the publish directory to "},{type:b,tag:p,props:{},children:[{type:a,value:"dist"}]},{type:a,value:" and build command to "},{type:b,tag:p,props:{},children:[{type:a,value:"npm run build"}]},{type:a,value:". If you are upgrading an existing site, you should check these and update them if needed."}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:"To trigger a deploy, just push to your git repository "},{type:b,tag:d,props:{href:"https:\u002F\u002Fdocs.netlify.com\u002Fconfigure-builds\u002Fget-started\u002F",rel:[e,f,g],target:h},children:[{type:a,value:"as you would normally do for Netlify"}]},{type:a,value:o}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:"By default, Nuxt will server-render each page on server hit using "},{type:b,tag:d,props:{href:"https:\u002F\u002Fdocs.netlify.com\u002Ffunctions\u002Foverview\u002F",rel:[e,f,g],target:h},children:[{type:a,value:"Netlify Functions"}]},{type:a,value:". You can optionally configure deployment to use "},{type:b,tag:d,props:{href:x,rel:[e,f,g],target:h},children:[{type:a,value:q}]},{type:a,value:" or "},{type:b,tag:d,props:{href:y,rel:[e,f,g],target:h},children:[{type:a,value:z}]},{type:a,value:o}]},{type:a,value:c},{type:b,tag:k,props:{id:A},children:[{type:b,tag:d,props:{href:"#netlify-edge-functions"},children:[{type:a,value:q}]}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:b,tag:d,props:{href:x,rel:[e,f,g],target:h},children:[{type:a,value:q}]},{type:a,value:" use "},{type:b,tag:d,props:{href:"https:\u002F\u002Fdeno.land",rel:[e,f,g],target:h},children:[{type:a,value:"Deno"}]},{type:a,value:" and the powerful V8 JavaScript runtime to let you run globally distributed functions for the fastest possible response times. Nuxt output can directly run the server at the edge - closer to your users!"}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:"Read more in the "},{type:b,tag:d,props:{href:"https:\u002F\u002Fwww.netlify.com\u002Fblog\u002Fannouncing-serverless-compute-with-edge-functions",rel:[e,f,g],target:h},children:[{type:a,value:"Netlify Edge Functions announcement"}]},{type:a,value:o}]},{type:a,value:c},{type:b,tag:k,props:{id:B},children:[{type:b,tag:d,props:{href:"#on-demand-builders"},children:[{type:a,value:C}]}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:b,tag:d,props:{href:y,rel:[e,f,g],target:h},children:[{type:a,value:z}]},{type:a,value:" are serverless functions used to generate web content as needed that’s automatically cached on Netlify’s Edge CDN. They enable you to build pages for your site when a user visits them for the first time and then cache them at the edge for subsequent visits (also known as Incremental Static Regeneration)."}]},{type:a,value:c},{type:b,tag:k,props:{id:D},children:[{type:b,tag:d,props:{href:"#custom-redirects"},children:[{type:a,value:E}]}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:"If you want to add custom redirects, you can do so by adding a "},{type:b,tag:d,props:{href:"https:\u002F\u002Fdocs.netlify.com\u002Frouting\u002Fredirects\u002F#syntax-for-the-redirects-file",rel:[e,f,g],target:h},children:[{type:b,tag:p,props:{},children:[{type:a,value:"_redirects"}]}]},{type:a,value:" file in the "},{type:b,tag:d,props:{href:"\u002Fguide\u002Fdirectory-structure\u002Fpublic"},children:[{type:b,tag:p,props:{},children:[{type:a,value:"public"}]}]},{type:a,value:" directory."}]},{type:a,value:c},{type:b,tag:k,props:{id:F},children:[{type:b,tag:d,props:{href:"#learn-more"},children:[{type:a,value:G}]}]},{type:a,value:c},{type:b,tag:"read-more",props:{link:"https:\u002F\u002Fnitro.unjs.io\u002Fdeploy\u002Fproviders\u002Fnetlify.html",title:"the Nitro documentation for Netlify deployment"},children:[]}]},toc:{title:H,searchDepth:j,depth:j,links:[{id:v,depth:j,text:w},{id:A,depth:j,text:q},{id:B,depth:j,text:C},{id:D,depth:j,text:E},{id:F,depth:j,text:G}]}},template:"Docs"},templateOptions:{header:n,footer:n,aside:n,asideClass:H,fluid:m,banner:m},_img:{}}],fetch:{"0":{headerLinks:[{title:"Getting Started",to:"\u002Fgetting-started\u002Fquick-start"},{title:"Guide",to:"\u002Fguide\u002Fconcepts\u002Fintroduction"},{title:"API",to:"\u002Fapi\u002Fcomposables\u002Fuse-async-data"},{title:"示例",to:"\u002Fexamples\u002Fessentials\u002Fhello-world"},{title:"社区",to:"\u002Fcommunity\u002Fgetting-help"}]},"1":{repoUrl:"https:\u002F\u002Fgithub.com\u002Fpangu-dev\u002Fpangu",prev:{slug:"layer0",to:"\u002Fguide\u002Fdeploy\u002Fproviders\u002Flayer0",title:"Layer0"},next:{slug:"render",to:"\u002Fguide\u002Fdeploy\u002Fproviders\u002Frender",title:"Render"}},_lazyComponents:new Set(["ProseParagraph","ButtonLink","HomeHero","SectionContentItem","HomeFeatures","IconNuxtNitro","Headline","ProseStrong","ProseA","ProseCodeInline","NuxtContainer","IconNuxtBridge","ProseH3","ProseLi","ProseUl","List","ProseH1","ProseH2","ProseCode","Alert","CodeGroup","ProseEm","ReadMore","Sandbox","ProseTh","ProseTr","ProseThead","ProseTd","ProseTbody","ProseTable","ProseBlockquote","ProseImg","NeedContribution","LinkExample","ProseOl","ProseH4","IconCloud","LogoAzure","LogoCloudFlare","LogoFirebase",t,"LogoVercel"])},mutations:u}}("text","element","\n","prose-a","nofollow","noopener","noreferrer","_blank","prose-paragraph",2,"prose-h2","Netlify",false,true,".","prose-code-inline","Netlify Edge Functions","prose-li","netlify","LogoNetlify",void 0,"setup","Setup","https:\u002F\u002Fdocs.netlify.com\u002Fnetlify-labs\u002Fexperimental-features\u002Fedge-functions\u002F","https:\u002F\u002Fdocs.netlify.com\u002Fconfigure-builds\u002Fon-demand-builders\u002F","Netlify On-demand Builders","netlify-edge-functions","on-demand-builders","On-demand Builders","custom-redirects","Custom Redirects","learn-more","Learn More","")));