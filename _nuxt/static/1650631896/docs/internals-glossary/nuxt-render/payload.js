__NUXT_JSONP__("/docs/internals-glossary/nuxt-render", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA,aB,aC){return {data:[{page:{key:"content:en:docs:6.internals-glossary:10.nuxt-render.md",generatedAt:new Date(1650631953761),mtime:new Date(1650631953754),slug:"nuxt-render",title:N,position:"999900060010",to:"\u002Fdocs\u002Finternals-glossary\u002Fnuxt-render",draft:v,page:q,language:"en",navigation:{title:O},description:"You can use Nuxt as a middleware with `nuxt.render` for your Node.js server.",category:"internals-glossary",empty:v,excerpt:void 0,body:{raw:"---\ntitle: nuxt.render(req, res)\nnavigation.title: render\ndescription: You can use Nuxt as a middleware with `nuxt.render` for your Node.js server.\ncategory: internals-glossary\n---\n# nuxt.render(req, res)\n\nYou can use Nuxt as a middleware with `nuxt.render` for your Node.js server.\n\n---\n\n- Type: `Function`\n- Arguments:\n  - [Request](https:\u002F\u002Fnodejs.org\u002Fapi\u002Fhttp.html#http_class_http_incomingmessage)\n  - [Response](https:\u002F\u002Fnodejs.org\u002Fapi\u002Fhttp.html#http_class_http_serverresponse)\n- Returns: `Promise`\n\nExample with [Express](https:\u002F\u002Fgithub.com\u002Fexpressjs\u002Fexpress):\n\n```js\nconst { loadNuxt, build } = require('nuxt')\n\nconst app = require('express')()\nconst isDev = process.env.NODE_ENV !== 'production'\nconst port = process.env.PORT || 3000\n\nasync function start() {\n  \u002F\u002F We get Nuxt instance\n  const nuxt = await loadNuxt(isDev ? 'dev' : 'start')\n\n  \u002F\u002F Render every route with Nuxt\n  app.use(nuxt.render)\n\n  \u002F\u002F Build only in dev mode with hot-reloading\n  if (isDev) {\n    build(nuxt)\n  }\n  \u002F\u002F Listen the server\n  app.listen(port, '0.0.0.0')\n  console.log('Server listening on `localhost:' + port + '`.')\n}\n\nstart()\n```\n\n::alert{type=\"warning\"}\nIt's recommended to call `nuxt.render` at the end of your middlewares since it will handle the rendering of your web application and won't call `next()`\n::\n",ast:{type:"root",children:[{type:b,tag:"prose-h1",props:{class:"d-heading-title",id:"nuxtrenderreq-res"},children:[{type:a,value:N}]},{type:a,value:f},{type:b,tag:z,props:{class:"d-heading-description"},children:[{type:a,value:"You can use Nuxt as a middleware with "},{type:b,tag:r,props:{},children:[{type:a,value:P}]},{type:a,value:" for your Node.js server."}]},{type:a,value:f},{type:b,tag:"prose-hr",props:{class:"d-heading-hr"},children:[]},{type:a,value:f},{type:b,tag:Q,props:{},children:[{type:a,value:f},{type:b,tag:s,props:{},children:[{type:a,value:f},{type:a,value:"Type: "},{type:b,tag:r,props:{},children:[{type:a,value:"Function"}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:s,props:{},children:[{type:a,value:f},{type:a,value:"Arguments:"},{type:a,value:f},{type:b,tag:Q,props:{},children:[{type:a,value:f},{type:b,tag:s,props:{},children:[{type:a,value:f},{type:b,tag:A,props:{href:"https:\u002F\u002Fnodejs.org\u002Fapi\u002Fhttp.html#http_class_http_incomingmessage",rel:[B,C,D],target:E},children:[{type:a,value:"Request"}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:s,props:{},children:[{type:a,value:f},{type:b,tag:A,props:{href:"https:\u002F\u002Fnodejs.org\u002Fapi\u002Fhttp.html#http_class_http_serverresponse",rel:[B,C,D],target:E},children:[{type:a,value:"Response"}]},{type:a,value:f}]},{type:a,value:f}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:s,props:{},children:[{type:a,value:f},{type:a,value:"Returns: "},{type:b,tag:r,props:{},children:[{type:a,value:"Promise"}]},{type:a,value:f}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:z,props:{},children:[{type:a,value:"Example with "},{type:b,tag:A,props:{href:"https:\u002F\u002Fgithub.com\u002Fexpressjs\u002Fexpress",rel:[B,C,D],target:E},children:[{type:a,value:"Express"}]},{type:a,value:R}]},{type:a,value:f},{type:b,tag:"prose-code",props:{},children:[{type:b,tag:"pre",props:{className:["language-js","line-numbers"]},children:[{type:b,tag:"code",props:{},children:[{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:t}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:F}]},{type:a,value:" loadNuxt"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:S}]},{type:a,value:" build "},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:G}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:u}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:T}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"'nuxt'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:H},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:t}]},{type:a,value:" app "},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:u}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:T}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"'express'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:t}]},{type:a,value:" isDev "},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:u}]},{type:a,value:U},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:V}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,W]},children:[{type:a,value:"NODE_ENV"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"!=="}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"'production'"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:t}]},{type:a,value:X},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:u}]},{type:a,value:U},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:V}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,W]},children:[{type:a,value:"PORT"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"||"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,"number"]},children:[{type:a,value:"3000"}]},{type:a,value:H},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:"async"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:k}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:Y}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:F}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,w]},children:[{type:a,value:"\u002F\u002F We get Nuxt instance"}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:t}]},{type:a,value:" nuxt "},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:u}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,l,Z]},children:[{type:a,value:"await"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"loadNuxt"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:"isDev "},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"?"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"'dev'"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:R}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"'start'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:_},{type:b,tag:c,props:{className:[d,w]},children:[{type:a,value:"\u002F\u002F Render every route with Nuxt"}]},{type:a,value:$},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,I,k,o]},children:[{type:a,value:"use"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:J},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:O}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:_},{type:b,tag:c,props:{className:[d,w]},children:[{type:a,value:"\u002F\u002F Build only in dev mode with hot-reloading"}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,l,Z]},children:[{type:a,value:"if"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:"isDev"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:F}]},{type:a,value:"\n    "},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"build"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:J},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:G}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,w]},children:[{type:a,value:"\u002F\u002F Listen the server"}]},{type:a,value:$},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,I,k,o]},children:[{type:a,value:"listen"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:"port"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:S}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"'0.0.0.0'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,aa,"class-name"]},children:[{type:a,value:aa}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,I,k,o]},children:[{type:a,value:"log"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"'Server listening on `localhost:'"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:ab}]},{type:a,value:X},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:ab}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"'`.'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:G}]},{type:a,value:H},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:Y}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:"alert",props:{type:"warning"},children:[{type:b,tag:z,props:{},children:[{type:a,value:"It's recommended to call "},{type:b,tag:r,props:{},children:[{type:a,value:P}]},{type:a,value:" at the end of your middlewares since it will handle the rendering of your web application and won't call "},{type:b,tag:r,props:{},children:[{type:a,value:"next()"}]}]}]}]},toc:{title:ac,searchDepth:ad,depth:ad,links:[]}},template:ae},templateOptions:{header:q,footer:q,aside:q,asideClass:ac,fluid:v,banner:q},_img:{}}],fetch:{"0":{headerLinks:[{title:"Discover",items:[{title:af,subtitle:"Selection of websites built with Nuxt",slug:"showcases",to:ag,icon:"showcases.svg",color:"bg-sand"},{title:"Case studies",subtitle:"How companies use Nuxt",slug:"case-studies",to:"\u002Fcase-studies",icon:"case-studies.svg",color:"bg-sand-dark"},{title:ah,subtitle:"What they think about us",slug:"testimonials",to:"\u002Ftestimonials",icon:"testimonials.svg",color:"bg-sand-darker"}]},{title:"Learn",items:[{title:ae,subtitle:"Create fast websites easily",slug:"docs",to:ai,icon:"docs.svg",color:"bg-green-500"},{title:aj,subtitle:"Understand everything in Nuxt",slug:"examples",to:ak,icon:"examples.svg",color:"bg-green-600"},{title:al,subtitle:"Learn with concrete cases",slug:"tutorials",to:am,icon:"tutorials.svg",color:"bg-green-700"},{title:x,subtitle:K,href:y,icon:L,color:M}]},{title:"Explore",items:[{title:an,subtitle:"How to Deploy Nuxt",slug:"deployments",to:ao,icon:"deployments.svg",color:"bg-indigo-light"},{title:ap,subtitle:"Extend the power of Nuxt",href:aq,icon:"modules.svg",color:"bg-indigo"},{title:ar,subtitle:"Get started with themes",slug:"themes",to:as,icon:"themes.svg",color:"bg-indigo-dark"},{title:"Video Courses",subtitle:"Learn step by step",slug:"video-courses",to:"\u002Fvideo-courses",icon:"video-courses.svg",color:"bg-indigo-darker"}]},{title:"Community",items:[{title:at,subtitle:"Latest news about Nuxt",slug:"announcements",to:au,icon:"announcements.svg",color:"bg-mint-lighter"},{title:av,subtitle:"They are Nuxt",slug:"teams",to:aw,icon:"teams.svg",color:"bg-mint-light"},{title:ax,subtitle:"All the code we have released",slug:"releases",to:ay,icon:"releases.svg",color:"bg-mint"},{title:az,subtitle:"They trust us",slug:"sponsors",to:aA,icon:"sponsors.svg",color:"bg-mint-dark"}]},{title:"Partners",slug:"partners",to:aB}],footerLinks:[{title:"About",items:[{title:"Contact us",href:"mailto:hello@nuxtjs.com"},{title:"Enterprise support",to:"\u002Fsupport"},{title:"NuxtLabs company",href:"https:\u002F\u002Fnuxtlabs.com\u002F"},{title:"Open Source Software",href:"https:\u002F\u002Fgithub.com\u002Fnuxt"},{title:"Partnerships",to:aB},{title:"Telemetry",href:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Ftelemetry"}]},{title:"Ecosystem",items:[{title:at,to:au},{title:"Contribute",to:"\u002Fcontribution-guide"},{title:"Chat with us",href:"https:\u002F\u002Fdiscord.nuxtjs.org\u002F"},{title:"Events",to:"\u002Fevents"},{title:az,to:aA},{title:av,to:aw},{title:al,to:am},{title:"Video courses",to:"\u002Fvideo-courses\u002F"}]},{title:"Resources",items:[{title:"Design",to:"\u002Fdesign"},{title:"Documentation",to:ai},{title:aj,to:ak},{title:an,to:ao},{title:x,href:y},{title:ap,href:aq},{title:ax,to:ay},{title:af,to:ag},{title:ar,to:as}]}],showCookieBanner:v},"1":{lastRelease:aC,masterCoursesLink:{title:x,subtitle:K,href:y,icon:L,color:M}},"2":{lastRelease:aC,masterCoursesLink:{title:x,subtitle:K,href:y,icon:L,color:M}},"3":{repoUrl:"https:\u002F\u002Fgithub.com\u002Fsee\u002Fpangu",prev:{slug:J,to:"\u002Fdocs\u002Finternals-glossary\u002Fnuxt",title:"Using Nuxt Programmatically"},next:{slug:"nuxt-render-route",to:"\u002Fdocs\u002Finternals-glossary\u002Fnuxt-render-route",title:"nuxt.renderRoute(route, context)"}},"4":{_error:{name:"FetchError",message:"500 Internal Server Error (https:\u002F\u002Fapi.nuxtjs.org\u002Fapi\u002Fgithub\u002Fcontributors\u002Fsee\u002Fpangu\u002Fmain\u002Fcontent\u002F)",statusCode:500}},_lazyComponents:new Set(["ProseParagraph","AppButton","HomeHero","HomeLearnMaster","SectionContentItem","HomeFeatures","ProseEm","HomePartnersCard","HomeDiscoverPartners","HomeLearnGuides","HomeExplore","HomeCommunity",ah,"HomeTestimonials","ProseA","ShowcasesBottomHero","PageHero","ShowcasesListing","ThemesList","VideoCoursesList","TeamSection","SponsorsBottomHero","SustainabilitySection","PartnersBottomHero","PartnersSection","ProseH1","ProseHr","ProseH2","ProseLi","ProseUl","ProseCode","CodeGroup","Alert","ProseH3","ProseCodeInline","ProseStrong","ProseH4","VideoPlayer","BarChartCacheBuild","ProseOl","SupportCard","SupportContainer","ProseBlockquote","DesignHero","DesignLogos","DesignSection","DesignColors","DesignTypography","DesignSections","ProseImg","ProseTh","ProseTr","ProseThead","ProseTd","ProseTbody","ProseTable"])},mutations:[]}}("text","element","span","token","punctuation","\n"," ","operator","(",")","function","keyword","string",".","property-access","\n  ",true,"prose-code-inline","prose-li","const","=",false,"comment","Master courses","https:\u002F\u002Fmasteringnuxt.com\u002F?utm_source=nuxt&utm_medium=link&utm_campaign=nsite","prose-paragraph","prose-a","nofollow","noopener","noreferrer","_blank","{","}","\n\n","method","nuxt","Learn more with experts","master-courses.svg","bg-green-800","nuxt.render(req, res)","render","nuxt.render","prose-ul",":",",","require"," process","env","constant"," port ","start","control-flow","\n\n  ","\n  app","console","+","",2,"Docs","Showcases","\u002Fshowcases","Testimonials","\u002Fdocs","Examples","\u002Fexamples","Tutorials","\u002Ftutorials","Deployments","\u002Fdeployments","Modules","https:\u002F\u002Fmodules.nuxtjs.org","Themes","\u002Fthemes","Announcements","\u002Fannouncements","Teams","\u002Fteams","Releases","\u002Freleases","Sponsors","\u002Fsponsors","\u002Fpartners",null)));