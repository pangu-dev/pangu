__NUXT_JSONP__("/docs/features/rendering-modes", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as){return {data:[{page:{key:"content:en:docs:3.features:1.rendering-modes.md",generatedAt:new Date(1650542392242),mtime:new Date(1650542392229),slug:"rendering-modes",title:u,position:"999900030001",to:"\u002Fdocs\u002Ffeatures\u002Frendering-modes",draft:i,page:h,language:"en",category:"features",empty:i,description:q,excerpt:void 0,body:{raw:"---\ntitle: Rendering\ncategory: features\n---\n# Rendering\n\n## Server Side Rendered Sites and Static Sites\n\n**Server-side rendered sites** are rendered on the server each time the user requests a page, therefore a server is needed to be able to serve the page on each request.\n\n**Static sites** are very similar to server-side rendered applications with the main difference being that static sites are rendered at build time, therefore no server is needed. Navigating from one page to another is then on the client-side.\n\nSee [deployment targets](\u002Fdocs\u002Ffeatures\u002Fdeployment-targets) for more info on static and server hosting.\n\n```js{}[nuxt.config.js]\nexport default {\n  ssr: true \u002F\u002F default value\n}\n```\n\n::alert{type=\"info\"}\nYou do not need to add `ssr: true` to your nuxt config in order to enable server-side-rendering as it is enabled by default.\n::\n\n## Client Side Rendering Only\n\nWith client side rendering only there is no server-side rendering. Client side rendering means rendering the content in the browser using JavaScript. Instead of getting all of the content from the HTML we just get a basic HTML document with a JavaScript file that will then render the rest of the site using the browser. For client side rendering set ssr to `false`.\n\n```js{}[nuxt.config.js]\nexport default {\n  ssr: false\n}\n```\n\n::alert{type=\"next\"}\n[The ssr property](\u002Fdocs\u002Fconfiguration-glossary\u002Fconfiguration-ssr)\n::\n",ast:{type:"root",children:[{type:b,tag:"prose-h1",props:{class:"d-heading-title",id:"rendering"},children:[{type:a,value:u}]},{type:a,value:e},{type:b,tag:v,props:{id:w},children:[{type:b,tag:j,props:{href:"#server-side-rendered-sites-and-static-sites"},children:[{type:a,value:x}]}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:b,tag:y,props:{},children:[{type:a,value:"Server-side rendered sites"}]},{type:a,value:" are rendered on the server each time the user requests a page, therefore a server is needed to be able to serve the page on each request."}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:b,tag:y,props:{},children:[{type:a,value:"Static sites"}]},{type:a,value:" are very similar to server-side rendered applications with the main difference being that static sites are rendered at build time, therefore no server is needed. Navigating from one page to another is then on the client-side."}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"See "},{type:b,tag:j,props:{href:"\u002Fdocs\u002Ffeatures\u002Fdeployment-targets"},children:[{type:a,value:"deployment targets"}]},{type:a,value:" for more info on static and server hosting."}]},{type:a,value:e},{type:b,tag:z,props:{},children:[{type:b,tag:c,props:{className:[A]},children:[{type:a,value:B}]},{type:b,tag:C,props:{className:[D,E]},children:[{type:b,tag:F,props:{},children:[{type:b,tag:c,props:{className:[d,k,l]},children:[{type:a,value:G}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,k,l]},children:[{type:a,value:H}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:I}]},{type:a,value:J},{type:b,tag:c,props:{className:[d,K,L]},children:[{type:a,value:M}]},{type:b,tag:c,props:{className:[d,N]},children:[{type:a,value:O}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,P]},children:[{type:a,value:"true"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,"comment"]},children:[{type:a,value:"\u002F\u002F default value"}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:Q}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:R,props:{type:"info"},children:[{type:b,tag:g,props:{},children:[{type:a,value:"You do not need to add "},{type:b,tag:S,props:{},children:[{type:a,value:"ssr: true"}]},{type:a,value:" to your nuxt config in order to enable server-side-rendering as it is enabled by default."}]}]},{type:a,value:e},{type:b,tag:v,props:{id:T},children:[{type:b,tag:j,props:{href:"#client-side-rendering-only"},children:[{type:a,value:U}]}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"With client side rendering only there is no server-side rendering. Client side rendering means rendering the content in the browser using JavaScript. Instead of getting all of the content from the HTML we just get a basic HTML document with a JavaScript file that will then render the rest of the site using the browser. For client side rendering set ssr to "},{type:b,tag:S,props:{},children:[{type:a,value:V}]},{type:a,value:"."}]},{type:a,value:e},{type:b,tag:z,props:{},children:[{type:b,tag:c,props:{className:[A]},children:[{type:a,value:B}]},{type:b,tag:C,props:{className:[D,E]},children:[{type:b,tag:F,props:{},children:[{type:b,tag:c,props:{className:[d,k,l]},children:[{type:a,value:G}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,k,l]},children:[{type:a,value:H}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:I}]},{type:a,value:J},{type:b,tag:c,props:{className:[d,K,L]},children:[{type:a,value:M}]},{type:b,tag:c,props:{className:[d,N]},children:[{type:a,value:O}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,P]},children:[{type:a,value:V}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:Q}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:R,props:{type:"next"},children:[{type:b,tag:g,props:{},children:[{type:b,tag:j,props:{href:"\u002Fdocs\u002Fconfiguration-glossary\u002Fconfiguration-ssr"},children:[{type:a,value:"The ssr property"}]}]}]}]},toc:{title:q,searchDepth:n,depth:n,links:[{id:w,depth:n,text:x},{id:T,depth:n,text:U}]}},template:W},templateOptions:{header:h,footer:h,aside:h,asideClass:q,fluid:i,banner:h},_img:{}}],fetch:{"0":{headerLinks:[{title:"Discover",items:[{title:X,subtitle:"Selection of websites built with Nuxt",slug:"showcases",to:Y,icon:"showcases.svg",color:"bg-sand"},{title:"Case studies",subtitle:"How companies use Nuxt",slug:"case-studies",to:"\u002Fcase-studies",icon:"case-studies.svg",color:"bg-sand-dark"},{title:Z,subtitle:"What they think about us",slug:"testimonials",to:"\u002Ftestimonials",icon:"testimonials.svg",color:"bg-sand-darker"}]},{title:"Learn",items:[{title:W,subtitle:"Create fast websites easily",slug:"docs",to:_,icon:"docs.svg",color:"bg-green-500"},{title:$,subtitle:"Understand everything in Nuxt",slug:"examples",to:aa,icon:"examples.svg",color:"bg-green-600"},{title:ab,subtitle:"Learn with concrete cases",slug:"tutorials",to:ac,icon:"tutorials.svg",color:"bg-green-700"},{title:o,subtitle:r,href:p,icon:s,color:t}]},{title:"Explore",items:[{title:ad,subtitle:"How to Deploy Nuxt",slug:"deployments",to:ae,icon:"deployments.svg",color:"bg-indigo-light"},{title:af,subtitle:"Extend the power of Nuxt",href:ag,icon:"modules.svg",color:"bg-indigo"},{title:ah,subtitle:"Get started with themes",slug:"themes",to:ai,icon:"themes.svg",color:"bg-indigo-dark"},{title:"Video Courses",subtitle:"Learn step by step",slug:"video-courses",to:"\u002Fvideo-courses",icon:"video-courses.svg",color:"bg-indigo-darker"}]},{title:"Community",items:[{title:aj,subtitle:"Latest news about Nuxt",slug:"announcements",to:ak,icon:"announcements.svg",color:"bg-mint-lighter"},{title:al,subtitle:"They are Nuxt",slug:"teams",to:am,icon:"teams.svg",color:"bg-mint-light"},{title:an,subtitle:"All the code we have released",slug:"releases",to:ao,icon:"releases.svg",color:"bg-mint"},{title:ap,subtitle:"They trust us",slug:"sponsors",to:aq,icon:"sponsors.svg",color:"bg-mint-dark"}]},{title:"Partners",slug:"partners",to:ar}],footerLinks:[{title:"About",items:[{title:"Contact us",href:"mailto:hello@nuxtjs.com"},{title:"Enterprise support",to:"\u002Fsupport"},{title:"NuxtLabs company",href:"https:\u002F\u002Fnuxtlabs.com\u002F"},{title:"Open Source Software",href:"https:\u002F\u002Fgithub.com\u002Fnuxt"},{title:"Partnerships",to:ar},{title:"Telemetry",href:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Ftelemetry"}]},{title:"Ecosystem",items:[{title:aj,to:ak},{title:"Contribute",to:"\u002Fcontribution-guide"},{title:"Chat with us",href:"https:\u002F\u002Fdiscord.nuxtjs.org\u002F"},{title:"Events",to:"\u002Fevents"},{title:ap,to:aq},{title:al,to:am},{title:ab,to:ac},{title:"Video courses",to:"\u002Fvideo-courses\u002F"}]},{title:"Resources",items:[{title:"Design",to:"\u002Fdesign"},{title:"Documentation",to:_},{title:$,to:aa},{title:ad,to:ae},{title:o,href:p},{title:af,href:ag},{title:an,to:ao},{title:X,to:Y},{title:ah,to:ai}]}],showCookieBanner:i},"1":{lastRelease:as,masterCoursesLink:{title:o,subtitle:r,href:p,icon:s,color:t}},"2":{lastRelease:as,masterCoursesLink:{title:o,subtitle:r,href:p,icon:s,color:t}},"3":{repoUrl:"https:\u002F\u002Fgithub.com\u002Fsee\u002Fpangu",prev:{slug:"nuxtjs-from-terminal-to-browser",to:"\u002Fannouncements\u002Fnuxtjs-from-terminal-to-browser",title:"Nuxt: From Terminal to Browser"},next:{slug:"pre-processors",to:"\u002Fexamples\u002Fassets-management\u002Fpre-processors",title:"Pre-processors"}},"4":{_error:{name:"FetchError",message:"500 Internal Server Error (https:\u002F\u002Fapi.nuxtjs.org\u002Fapi\u002Fgithub\u002Fcontributors\u002Fsee\u002Fpangu\u002Fmain\u002Fcontent\u002F)",statusCode:500}},_lazyComponents:new Set(["ProseParagraph","AppButton","HomeHero","HomeLearnMaster","SectionContentItem","HomeFeatures","ProseEm","HomePartnersCard","HomeDiscoverPartners","HomeLearnGuides","HomeExplore","HomeCommunity",Z,"HomeTestimonials","ProseA","ShowcasesBottomHero","PageHero","ShowcasesListing","ThemesList","VideoCoursesList","TeamSection","SponsorsBottomHero","SustainabilitySection","PartnersBottomHero","PartnersSection","ProseH1","ProseHr","ProseH2","ProseLi","ProseUl","ProseCode","CodeGroup","Alert","ProseH3","ProseCodeInline","ProseStrong","ProseH4","VideoPlayer","BarChartCacheBuild","ProseOl","SupportCard","SupportContainer","ProseBlockquote","DesignHero","DesignLogos","DesignSection","DesignColors","DesignTypography","DesignSections","ProseImg"])},mutations:[]}}("text","element","span","token","\n"," ","prose-paragraph",true,false,"prose-a","keyword","module","punctuation",2,"Master courses","https:\u002F\u002Fmasteringnuxt.com\u002F?utm_source=nuxt&utm_medium=link&utm_campaign=nsite","","Learn more with experts","master-courses.svg","bg-green-800","Rendering","prose-h2","server-side-rendered-sites-and-static-sites","Server Side Rendered Sites and Static Sites","prose-strong","prose-code","filename","nuxt.config.js","pre","language-js","line-numbers","code","export","default","{","\n  ","literal-property","property","ssr","operator",":","boolean","}","alert","prose-code-inline","client-side-rendering-only","Client Side Rendering Only","false","Docs","Showcases","\u002Fshowcases","Testimonials","\u002Fdocs","Examples","\u002Fexamples","Tutorials","\u002Ftutorials","Deployments","\u002Fdeployments","Modules","https:\u002F\u002Fmodules.nuxtjs.org","Themes","\u002Fthemes","Announcements","\u002Fannouncements","Teams","\u002Fteams","Releases","\u002Freleases","Sponsors","\u002Fsponsors","\u002Fpartners",null)));