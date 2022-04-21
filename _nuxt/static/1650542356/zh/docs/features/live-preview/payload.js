__NUXT_JSONP__("/zh/docs/features/live-preview", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA,aB,aC,aD,aE,aF){return {data:[{page:{key:"content:zh:docs:3.features:11.live-preview.md",generatedAt:new Date(1650542403838),mtime:new Date(1650542403829),slug:"live-preview",title:"Preview Mode",position:"999900030011",to:"\u002Fdocs\u002Ffeatures\u002Flive-preview",draft:v,page:q,language:"zh",description:O,category:"features",empty:v,excerpt:void 0,body:{raw:"---\ntitle: Preview Mode\ndescription: Live Preview for target static with the preview mode\ncategory: features\n---\n# Preview mode\n\nLive Preview for target static with the preview mode\n\n---\nWith Nuxt and full static you can now use live preview out of the box which will call your API or your CMS so you can see the changes live before deploying.\n\n::alert{type=\"warning\"}\nOnly available when using [`target:static`](\u002Fdocs\u002Ffeatures\u002Fdeployment-targets#static-hosting)\n::\n\nThe preview mode will automatically refresh the page data as it uses `$nuxt.refresh` under the hood and therefore calls nuxtServerInit, asyncData and fetch on the client side.\n\nIn order to activate live preview you will need to add the following plugin:\n\n```js{}[plugins\u002Fpreview.client.js]\nexport default function ({ query, enablePreview }) {\n  if (query.preview) {\n    enablePreview()\n  }\n}\n```\n\n::alert{type=\"warning\"}\n`enablePreview` is only available in the context object of plugins. Previews are handled client-side and\nthus the plugin should be run on the client: preview.client.js\n::\n\n```js{}[nuxt.config.js]\nexport default {\n  plugins: ['~\u002Fplugins\u002Fpreview.client.js']\n}\n```\n\nOnce you have added the plugin you can now generate your site and serve it.\n\n::code-group\n```bash [Yarn]\nyarn generate\nyarn start\n```\n```bash [NPX]\nnpx nuxt generate\nnpx nuxt start\n```\n::\n\nThen you can see your preview page by adding the query param to the end of the page you want to see once:\n\n```js\n?preview=true\n```\n\n::alert{type=\"warning\"}\nenablePreview should be tested locally with yarn start and not yarn\ndev\n::\n\n### Previewing pages that are not yet generated\n\nFor pages that are not yet generated, SPA fallback will still call the API before showing the 404 page as these pages exist on the API but are not generated yet.\n\nIf you have set a validate hook, you will probably need to modify it so that it doesn't redirect to the 404 page in preview mode.\n\n```js\nvalidate({ params, query }) {\n  if (query.preview) {\n    return true\n}\n```\n\n### Passing data to enablePreview\n\nYou can pass data to the `enablePreview` function. That data will then be available on the `$preview` context helper and on `this.$preview`.\n\n### What's next\n\n::alert{type=\"next\"}\nCheck out the [Directory Structure book](\u002Fdocs\u002Fdirectory-structure\u002Fnuxt)\n::\n",ast:{type:"root",children:[{type:b,tag:"prose-h1",props:{class:"d-heading-title",id:"preview-mode"},children:[{type:a,value:"Preview mode"}]},{type:a,value:e},{type:b,tag:g,props:{class:"d-heading-description"},children:[{type:a,value:O}]},{type:a,value:e},{type:b,tag:"prose-hr",props:{class:"d-heading-hr"},children:[]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"With Nuxt and full static you can now use live preview out of the box which will call your API or your CMS so you can see the changes live before deploying."}]},{type:a,value:e},{type:b,tag:w,props:{type:D},children:[{type:b,tag:g,props:{},children:[{type:a,value:"Only available when using "},{type:b,tag:r,props:{href:"\u002Fdocs\u002Ffeatures\u002Fdeployment-targets#static-hosting"},children:[{type:b,tag:k,props:{},children:[{type:a,value:"target:static"}]}]}]}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"The preview mode will automatically refresh the page data as it uses "},{type:b,tag:k,props:{},children:[{type:a,value:"$nuxt.refresh"}]},{type:a,value:" under the hood and therefore calls nuxtServerInit, asyncData and fetch on the client side."}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"In order to activate live preview you will need to add the following plugin:"}]},{type:a,value:e},{type:b,tag:l,props:{},children:[{type:b,tag:c,props:{className:[x]},children:[{type:a,value:"plugins\u002Fpreview.client.js"}]},{type:b,tag:m,props:{className:[n,y]},children:[{type:b,tag:o,props:{},children:[{type:b,tag:c,props:{className:[d,i,z]},children:[{type:a,value:P}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,i,z]},children:[{type:a,value:Q}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:s}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,R]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:j}]},{type:a,value:" query"},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:S}]},{type:a,value:" enablePreview "},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:p}]}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:u}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:j}]},{type:a,value:A},{type:b,tag:c,props:{className:[d,i,E]},children:[{type:a,value:T}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:t}]},{type:a,value:U},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:F}]},{type:b,tag:c,props:{className:[d,V]},children:[{type:a,value:G}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:u}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:j}]},{type:a,value:W},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:H}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:u}]},{type:a,value:A},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:p}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:p}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:w,props:{type:D},children:[{type:b,tag:g,props:{},children:[{type:b,tag:k,props:{},children:[{type:a,value:H}]},{type:a,value:" is only available in the context object of plugins. Previews are handled client-side and\nthus the plugin should be run on the client: preview.client.js"}]}]},{type:a,value:e},{type:b,tag:l,props:{},children:[{type:b,tag:c,props:{className:[x]},children:[{type:a,value:"nuxt.config.js"}]},{type:b,tag:m,props:{className:[n,y]},children:[{type:b,tag:o,props:{},children:[{type:b,tag:c,props:{className:[d,i,z]},children:[{type:a,value:P}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,i,z]},children:[{type:a,value:Q}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:j}]},{type:a,value:A},{type:b,tag:c,props:{className:[d,"literal-property","property"]},children:[{type:a,value:"plugins"}]},{type:b,tag:c,props:{className:[d,I]},children:[{type:a,value:":"}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:"["}]},{type:b,tag:c,props:{className:[d,"string"]},children:[{type:a,value:"'~\u002Fplugins\u002Fpreview.client.js'"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:"]"}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:p}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"Once you have added the plugin you can now generate your site and serve it."}]},{type:a,value:e},{type:b,tag:"code-group",props:{},children:[{type:b,tag:l,props:{},children:[{type:b,tag:c,props:{className:[x]},children:[{type:a,value:"Yarn"}]},{type:b,tag:m,props:{className:[n,X]},children:[{type:b,tag:o,props:{},children:[{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:Y}]},{type:a,value:" generate\n"},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:Y}]},{type:a,value:" start\n"}]}]}]},{type:b,tag:l,props:{},children:[{type:b,tag:c,props:{className:[x]},children:[{type:a,value:"NPX"}]},{type:b,tag:m,props:{className:[n,X]},children:[{type:b,tag:o,props:{},children:[{type:a,value:"npx nuxt generate\nnpx nuxt start\n"}]}]}]}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"Then you can see your preview page by adding the query param to the end of the page you want to see once:"}]},{type:a,value:e},{type:b,tag:l,props:{},children:[{type:b,tag:m,props:{className:[n,y]},children:[{type:b,tag:o,props:{},children:[{type:b,tag:c,props:{className:[d,I]},children:[{type:a,value:"?"}]},{type:a,value:G},{type:b,tag:c,props:{className:[d,I]},children:[{type:a,value:"="}]},{type:b,tag:c,props:{className:[d,Z]},children:[{type:a,value:_}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:w,props:{type:D},children:[{type:b,tag:g,props:{},children:[{type:a,value:"enablePreview should be tested locally with yarn start and not yarn\ndev"}]}]},{type:a,value:e},{type:b,tag:J,props:{id:$},children:[{type:b,tag:r,props:{href:"#previewing-pages-that-are-not-yet-generated"},children:[{type:a,value:aa}]}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"For pages that are not yet generated, SPA fallback will still call the API before showing the 404 page as these pages exist on the API but are not generated yet."}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"If you have set a validate hook, you will probably need to modify it so that it doesn't redirect to the 404 page in preview mode."}]},{type:a,value:e},{type:b,tag:l,props:{},children:[{type:b,tag:m,props:{className:[n,y]},children:[{type:b,tag:o,props:{},children:[{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:"validate"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,R]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:j}]},{type:a,value:" params"},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:S}]},{type:a,value:" query "},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:p}]}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:u}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:j}]},{type:a,value:A},{type:b,tag:c,props:{className:[d,i,E]},children:[{type:a,value:T}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:t}]},{type:a,value:U},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:F}]},{type:b,tag:c,props:{className:[d,V]},children:[{type:a,value:G}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:u}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:j}]},{type:a,value:W},{type:b,tag:c,props:{className:[d,i,E]},children:[{type:a,value:"return"}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,Z]},children:[{type:a,value:_}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:p}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:J,props:{id:ab},children:[{type:b,tag:r,props:{href:"#passing-data-to-enablepreview"},children:[{type:a,value:ac}]}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"You can pass data to the "},{type:b,tag:k,props:{},children:[{type:a,value:H}]},{type:a,value:" function. That data will then be available on the "},{type:b,tag:k,props:{},children:[{type:a,value:"$preview"}]},{type:a,value:" context helper and on "},{type:b,tag:k,props:{},children:[{type:a,value:"this.$preview"}]},{type:a,value:F}]},{type:a,value:e},{type:b,tag:J,props:{id:ad},children:[{type:b,tag:r,props:{href:"#whats-next"},children:[{type:a,value:ae}]}]},{type:a,value:e},{type:b,tag:w,props:{type:"next"},children:[{type:b,tag:g,props:{},children:[{type:a,value:"Check out the "},{type:b,tag:r,props:{href:"\u002Fdocs\u002Fdirectory-structure\u002Fnuxt"},children:[{type:a,value:"Directory Structure book"}]}]}]}]},toc:{title:af,searchDepth:ag,depth:ag,links:[{id:$,depth:K,text:aa},{id:ab,depth:K,text:ac},{id:ad,depth:K,text:ae}]}},template:ah},templateOptions:{header:q,footer:q,aside:q,asideClass:af,fluid:v,banner:q},_img:{}}],fetch:{"0":{headerLinks:[{title:"Discover",items:[{title:ai,subtitle:"Selection of websites built with Nuxt",slug:"showcases",to:aj,icon:"showcases.svg",color:"bg-sand"},{title:"Case studies",subtitle:"How companies use Nuxt",slug:"case-studies",to:"\u002Fcase-studies",icon:"case-studies.svg",color:"bg-sand-dark"},{title:ak,subtitle:"What they think about us",slug:"testimonials",to:"\u002Ftestimonials",icon:"testimonials.svg",color:"bg-sand-darker"}]},{title:"Learn",items:[{title:ah,subtitle:"Create fast websites easily",slug:"docs",to:al,icon:"docs.svg",color:"bg-green-500"},{title:am,subtitle:"Understand everything in Nuxt",slug:"examples",to:an,icon:"examples.svg",color:"bg-green-600"},{title:ao,subtitle:"Learn with concrete cases",slug:"tutorials",to:ap,icon:"tutorials.svg",color:"bg-green-700"},{title:B,subtitle:L,href:C,icon:M,color:N}]},{title:"Explore",items:[{title:aq,subtitle:"How to Deploy Nuxt",slug:"deployments",to:ar,icon:"deployments.svg",color:"bg-indigo-light"},{title:as,subtitle:"Extend the power of Nuxt",href:at,icon:"modules.svg",color:"bg-indigo"},{title:au,subtitle:"Get started with themes",slug:"themes",to:av,icon:"themes.svg",color:"bg-indigo-dark"},{title:"Video Courses",subtitle:"Learn step by step",slug:"video-courses",to:"\u002Fvideo-courses",icon:"video-courses.svg",color:"bg-indigo-darker"}]},{title:"Community",items:[{title:aw,subtitle:"Latest news about Nuxt",slug:"announcements",to:ax,icon:"announcements.svg",color:"bg-mint-lighter"},{title:ay,subtitle:"They are Nuxt",slug:"teams",to:az,icon:"teams.svg",color:"bg-mint-light"},{title:aA,subtitle:"All the code we have released",slug:"releases",to:aB,icon:"releases.svg",color:"bg-mint"},{title:aC,subtitle:"They trust us",slug:"sponsors",to:aD,icon:"sponsors.svg",color:"bg-mint-dark"}]},{title:"Partners",slug:"partners",to:aE}],footerLinks:[{title:"About",items:[{title:"Contact us",href:"mailto:hello@nuxtjs.com"},{title:"Enterprise support",to:"\u002Fsupport"},{title:"NuxtLabs company",href:"https:\u002F\u002Fnuxtlabs.com\u002F"},{title:"Open Source Software",href:"https:\u002F\u002Fgithub.com\u002Fnuxt"},{title:"Partnerships",to:aE},{title:"Telemetry",href:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Ftelemetry"}]},{title:"Ecosystem",items:[{title:aw,to:ax},{title:"Contribute",to:"\u002Fcontribution-guide"},{title:"Chat with us",href:"https:\u002F\u002Fdiscord.nuxtjs.org\u002F"},{title:"Events",to:"\u002Fevents"},{title:aC,to:aD},{title:ay,to:az},{title:ao,to:ap},{title:"Video courses",to:"\u002Fvideo-courses\u002F"}]},{title:"Resources",items:[{title:"Design",to:"\u002Fdesign"},{title:"Documentation",to:al},{title:am,to:an},{title:aq,to:ar},{title:B,href:C},{title:as,href:at},{title:aA,to:aB},{title:ai,to:aj},{title:au,to:av}]}],showCookieBanner:v},"1":{lastRelease:aF,masterCoursesLink:{title:B,subtitle:L,href:C,icon:M,color:N}},"2":{lastRelease:aF,masterCoursesLink:{title:B,subtitle:L,href:C,icon:M,color:N}},"3":{repoUrl:"https:\u002F\u002Fgithub.com\u002Fsee\u002Fpangu",prev:{slug:"transitions",to:"\u002Fdocs\u002Ffeatures\u002Ftransitions",title:"Transitions"},next:{slug:"moving-from-nuxtjs-dotenv-to-runtime-config",to:"\u002Ftutorials\u002Fmoving-from-nuxtjs-dotenv-to-runtime-config",title:"Moving from @nuxtjs\u002Fdotenv to runtime config"}},"4":{_error:{name:"FetchError",message:"500 Internal Server Error (https:\u002F\u002Fapi.nuxtjs.org\u002Fapi\u002Fgithub\u002Fcontributors\u002Fsee\u002Fpangu\u002Fmain\u002Fcontent\u002F)",statusCode:500}},_lazyComponents:new Set(["ProseParagraph","AppButton","HomeHero","HomeLearnMaster","SectionContentItem","HomeFeatures","ProseEm","HomePartnersCard","HomeDiscoverPartners","HomeLearnGuides","HomeExplore","HomeCommunity",ak,"HomeTestimonials","ProseA","ShowcasesBottomHero","PageHero","ShowcasesListing","ThemesList","VideoCoursesList","TeamSection","SponsorsBottomHero","SustainabilitySection","PartnersBottomHero","PartnersSection","ProseH1","ProseHr","ProseH2","ProseLi","ProseUl","ProseCode","CodeGroup","Alert","ProseH3","ProseCodeInline","ProseStrong","ProseH4","VideoPlayer","BarChartCacheBuild","ProseOl","SupportCard","SupportContainer","ProseBlockquote","DesignHero","DesignLogos","DesignSection","DesignColors","DesignTypography","DesignSections","ProseImg","ProseTh","ProseTr","ProseThead","ProseTd","ProseTbody","ProseTable"])},mutations:[]}}("text","element","span","token","\n","punctuation","prose-paragraph"," ","keyword","{","prose-code-inline","prose-code","pre","line-numbers","code","}",true,"prose-a","function","(",")",false,"alert","filename","language-js","module","\n  ","Master courses","https:\u002F\u002Fmasteringnuxt.com\u002F?utm_source=nuxt&utm_medium=link&utm_campaign=nsite","warning","control-flow",".","preview","enablePreview","operator","prose-h3",3,"Learn more with experts","master-courses.svg","bg-green-800","Live Preview for target static with the preview mode","export","default","parameter",",","if","query","property-access","\n    ","language-bash","yarn","boolean","true","previewing-pages-that-are-not-yet-generated","Previewing pages that are not yet generated","passing-data-to-enablepreview","Passing data to enablePreview","whats-next","What's next","",2,"Docs","Showcases","\u002Fshowcases","Testimonials","\u002Fdocs","Examples","\u002Fexamples","Tutorials","\u002Ftutorials","Deployments","\u002Fdeployments","Modules","https:\u002F\u002Fmodules.nuxtjs.org","Themes","\u002Fthemes","Announcements","\u002Fannouncements","Teams","\u002Fteams","Releases","\u002Freleases","Sponsors","\u002Fsponsors","\u002Fpartners",null)));