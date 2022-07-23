__NUXT_JSONP__("/zh/community/reporting-bugs", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E){return {data:[{page:{key:"content:zh:5.community:2.reporting-bugs.md",generatedAt:new Date(1658586954393),mtime:new Date(1658586954377),slug:s,title:t,position:"000500020000",to:"\u002Fcommunity\u002Freporting-bugs",draft:i,page:j,language:"zh",empty:i,description:u,excerpt:v,body:{raw:"# Reporting Bugs\n\nTry as we might, we will never completely eliminate bugs. One of the most valuable roles in open source is taking the time to report bugs helpfully. Even if you can't fix the underlying code, reporting a bug well can enable someone else with a bit more familiarity with the codebase to spot a pattern or make a quick fix.\n\nHere are a few key steps.\n\n## Is it really a bug?\n\nConsider if you're looking to get help with something, or whether you think there's a bug with Nuxt itself. If it's the former, we'd love to help you - but the best way to do that is through [asking for help](\u002Fcommunity\u002Fgetting-help) rather than reporting a bug.\n\n## Search the issues\n\nSearch through the [open issues](https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fframework\u002Fissues) and [discussions](https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fframework\u002Fdiscussions) first. If you find anything that seems like the same bug, it's much better to comment on an existing thread than create a duplicate.\n\n## Create a minimal reproduction\n\nIt's important to be able to reproduce the bug reliably - in a minimal way and apart from the rest of your project. This narrows down what could be causing the issue and makes it possible for someone not only to find the cause, but also to test a potential solution.\n\nStart with the Nuxt 3 or Nuxt Bridge sandbox and add the **minimum** amount of code necessary to reproduce the bug you're experiencing.\n\n::alert\nIf your issue concerns Vue 3 or Vite, please try to reproduce it first with the Vue 3 SSR starter.\n::\n\n**Nuxt 3**:\n\n:button-link[Nuxt 3 on StackBlitz]{href=\"https:\u002F\u002Fstackblitz.com\u002Fgithub\u002Fnuxt\u002Fstarter\u002Ftree\u002Fv3-stackblitz\" blank}\n:button-link[Nuxt 3 on CodeSandbox]{href=\"https:\u002F\u002Fcodesandbox.io\u002Fs\u002Fgithub\u002Fnuxt\u002Fstarter\u002Ftree\u002Fv3-codesandbox\" blank}\n\n**Nuxt Bridge**:\n\n:button-link[Nuxt Bridge on CodeSandbox]{href=\"https:\u002F\u002Fcodesandbox.io\u002Fs\u002Fgithub\u002Fnuxt\u002Fstarter\u002Ftree\u002Fv2-bridge-codesandbox\" blank}\n\n**Vue 3**:\n\n:button-link[Vue 3 SSR on StackBlitz]{href=\"https:\u002F\u002Fstackblitz.com\u002Fgithub\u002Fnuxt-contrib\u002Fvue3-ssr-starter\u002Ftree\u002Fmain?terminal=dev\" blank}\n:button-link[Vue 3 SSR Template]{href=\"https:\u002F\u002Fgithub.com\u002Fnuxt-contrib\u002Fvue3-ssr-starter\u002Fgenerate\" blank}\n\nOnce you've reproduced the issue, remove as much code from your reproduction as you can (while still recreating the bug). The time spent making the reproduction as minimal as possible will make a huge difference to whoever sets out to fix the issue.\n\n## Figure out what the cause might be\n\nWith a Nuxt project, there are lots of moving pieces - from [nuxt modules](https:\u002F\u002Fnuxtjs.org\u002Fmodules) to [other JavaScript libraries](https:\u002F\u002Fwww.npmjs.com\u002F). Try to report the bug at the most relevant and specific place. That will likely be the Nuxt module causing an issue, or the upstream library that Nuxt is depending on.\n",ast:{type:"root",children:[{type:b,tag:"prose-h1",props:{class:"d-heading-title",id:s},children:[{type:a,value:t}]},{type:a,value:c},{type:b,tag:d,props:{class:"d-heading-description"},children:[{type:a,value:u}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Here are a few key steps."}]},{type:a,value:c},{type:b,tag:k,props:{id:w},children:[{type:b,tag:e,props:{href:"#is-it-really-a-bug"},children:[{type:a,value:x}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Consider if you're looking to get help with something, or whether you think there's a bug with Nuxt itself. If it's the former, we'd love to help you - but the best way to do that is through "},{type:b,tag:e,props:{href:q},children:[{type:a,value:"asking for help"}]},{type:a,value:" rather than reporting a bug."}]},{type:a,value:c},{type:b,tag:k,props:{id:y},children:[{type:b,tag:e,props:{href:"#search-the-issues"},children:[{type:a,value:z}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Search through the "},{type:b,tag:e,props:{href:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fframework\u002Fissues",rel:[l,m,n],target:o},children:[{type:a,value:"open issues"}]},{type:a,value:" and "},{type:b,tag:e,props:{href:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fframework\u002Fdiscussions",rel:[l,m,n],target:o},children:[{type:a,value:"discussions"}]},{type:a,value:" first. If you find anything that seems like the same bug, it's much better to comment on an existing thread than create a duplicate."}]},{type:a,value:c},{type:b,tag:k,props:{id:A},children:[{type:b,tag:e,props:{href:"#create-a-minimal-reproduction"},children:[{type:a,value:B}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"It's important to be able to reproduce the bug reliably - in a minimal way and apart from the rest of your project. This narrows down what could be causing the issue and makes it possible for someone not only to find the cause, but also to test a potential solution."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Start with the Nuxt 3 or Nuxt Bridge sandbox and add the "},{type:b,tag:p,props:{},children:[{type:a,value:"minimum"}]},{type:a,value:" amount of code necessary to reproduce the bug you're experiencing."}]},{type:a,value:c},{type:b,tag:"alert",props:{},children:[{type:b,tag:d,props:{},children:[{type:a,value:"If your issue concerns Vue 3 or Vite, please try to reproduce it first with the Vue 3 SSR starter."}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:p,props:{},children:[{type:a,value:"Nuxt 3"}]},{type:a,value:r}]},{type:a,value:c},{type:b,tag:g,props:{":blank":h,href:"https:\u002F\u002Fstackblitz.com\u002Fgithub\u002Fnuxt\u002Fstarter\u002Ftree\u002Fv3-stackblitz"},children:[{type:a,value:"Nuxt 3 on StackBlitz"}]},{type:a,value:c},{type:b,tag:g,props:{":blank":h,href:"https:\u002F\u002Fcodesandbox.io\u002Fs\u002Fgithub\u002Fnuxt\u002Fstarter\u002Ftree\u002Fv3-codesandbox"},children:[{type:a,value:"Nuxt 3 on CodeSandbox"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:p,props:{},children:[{type:a,value:"Nuxt Bridge"}]},{type:a,value:r}]},{type:a,value:c},{type:b,tag:g,props:{":blank":h,href:"https:\u002F\u002Fcodesandbox.io\u002Fs\u002Fgithub\u002Fnuxt\u002Fstarter\u002Ftree\u002Fv2-bridge-codesandbox"},children:[{type:a,value:"Nuxt Bridge on CodeSandbox"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:p,props:{},children:[{type:a,value:"Vue 3"}]},{type:a,value:r}]},{type:a,value:c},{type:b,tag:g,props:{":blank":h,href:"https:\u002F\u002Fstackblitz.com\u002Fgithub\u002Fnuxt-contrib\u002Fvue3-ssr-starter\u002Ftree\u002Fmain?terminal=dev"},children:[{type:a,value:"Vue 3 SSR on StackBlitz"}]},{type:a,value:c},{type:b,tag:g,props:{":blank":h,href:"https:\u002F\u002Fgithub.com\u002Fnuxt-contrib\u002Fvue3-ssr-starter\u002Fgenerate"},children:[{type:a,value:"Vue 3 SSR Template"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Once you've reproduced the issue, remove as much code from your reproduction as you can (while still recreating the bug). The time spent making the reproduction as minimal as possible will make a huge difference to whoever sets out to fix the issue."}]},{type:a,value:c},{type:b,tag:k,props:{id:C},children:[{type:b,tag:e,props:{href:"#figure-out-what-the-cause-might-be"},children:[{type:a,value:D}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"With a Nuxt project, there are lots of moving pieces - from "},{type:b,tag:e,props:{href:"https:\u002F\u002Fnuxtjs.org\u002Fmodules",rel:[l,m,n],target:o},children:[{type:a,value:"nuxt modules"}]},{type:a,value:" to "},{type:b,tag:e,props:{href:"https:\u002F\u002Fwww.npmjs.com\u002F",rel:[l,m,n],target:o},children:[{type:a,value:"other JavaScript libraries"}]},{type:a,value:". Try to report the bug at the most relevant and specific place. That will likely be the Nuxt module causing an issue, or the upstream library that Nuxt is depending on."}]}]},toc:{title:E,searchDepth:f,depth:f,links:[{id:w,depth:f,text:x},{id:y,depth:f,text:z},{id:A,depth:f,text:B},{id:C,depth:f,text:D}]}},template:"Docs"},templateOptions:{header:j,footer:j,aside:j,asideClass:E,fluid:i,banner:i},_img:{}}],fetch:{"0":{headerLinks:[{title:"Getting Started",to:"\u002Fgetting-started\u002Fquick-start"},{title:"Guide",to:"\u002Fguide\u002Fconcepts\u002Fintroduction"},{title:"API",to:"\u002Fapi\u002Fcomposables\u002Fuse-async-data"},{title:"示例",to:"\u002Fexamples\u002Fessentials\u002Fhello-world"},{title:"社区",to:q}]},"1":{repoUrl:"https:\u002F\u002Fgithub.com\u002Fpangu-dev\u002Fpangu",prev:{slug:"getting-help",to:q,title:"Getting Help"},next:{slug:"contribution",to:"\u002Fcommunity\u002Fcontribution",title:"Contribution"}},_lazyComponents:new Set(["ProseParagraph","ButtonLink","HomeHero","SectionContentItem","HomeFeatures","IconNuxtNitro","Headline","ProseStrong","ProseA","ProseCodeInline","NuxtContainer","IconNuxtBridge","ProseH3","ProseLi","ProseUl","List","ProseH1","ProseH2","ProseCode","Alert","CodeGroup","ProseEm","ReadMore","Sandbox","ProseTh","ProseTr","ProseThead","ProseTd","ProseTbody","ProseTable","ProseBlockquote","ProseImg","NeedContribution","LinkExample","ProseOl","ProseH4","IconCloud","LogoAzure","LogoCloudFlare","LogoFirebase","LogoNetlify","LogoVercel"])},mutations:v}}("text","element","\n","prose-paragraph","prose-a",2,"button-link","true",false,true,"prose-h2","nofollow","noopener","noreferrer","_blank","prose-strong","\u002Fcommunity\u002Fgetting-help",":","reporting-bugs","Reporting Bugs","Try as we might, we will never completely eliminate bugs. One of the most valuable roles in open source is taking the time to report bugs helpfully. Even if you can't fix the underlying code, reporting a bug well can enable someone else with a bit more familiarity with the codebase to spot a pattern or make a quick fix.",void 0,"is-it-really-a-bug","Is it really a bug?","search-the-issues","Search the issues","create-a-minimal-reproduction","Create a minimal reproduction","figure-out-what-the-cause-might-be","Figure out what the cause might be","")));