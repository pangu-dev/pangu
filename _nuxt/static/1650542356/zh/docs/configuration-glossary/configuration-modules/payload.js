__NUXT_JSONP__("/zh/docs/configuration-glossary/configuration-modules", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as){return {data:[{page:{key:"content:zh:docs:5.configuration-glossary:20.configuration-modules.md",generatedAt:new Date(1650542443038),mtime:new Date(1650542443023),slug:"configuration-modules",title:"The modules Property",position:"999900050020",to:"\u002Fdocs\u002Fconfiguration-glossary\u002Fconfiguration-modules",draft:o,page:j,language:"zh",navigation:{title:k},description:"Modules are Nuxt extensions which can extend its core functionality and add endless integrations.",menu:k,category:"configuration-glossary",empty:o,excerpt:void 0,body:{raw:"---\ntitle: The modules Property\nnavigation.title: modules\ndescription: Modules are Nuxt extensions which can extend its core functionality and add endless integrations.\nmenu: modules\ncategory: configuration-glossary\n---\n# The modules property\n\nModules are Nuxt extensions which can extend its core functionality and add endless integrations. [Learn More](\u002Fdocs\u002Fdirectory-structure\u002Fmodules)\n\n---\n\n- Type: `Array`\n\nExample (`nuxt.config.js`):\n\n```js\nexport default {\n  modules: [\n    \u002F\u002F Using package name\n    '@nuxtjs\u002Faxios',\n\n    \u002F\u002F Relative to your project srcDir\n    '~\u002Fmodules\u002Fawesome.js',\n\n    \u002F\u002F Providing options\n    ['@nuxtjs\u002Fgoogle-analytics', { ua: 'X1234567' }],\n\n    \u002F\u002F Inline definition\n    function () {}\n  ]\n}\n```\n\nModule developers usually provide additionally needed steps and details for usage.\n\nNuxt tries to resolve each item in the modules array using node require path (in the `node_modules`) and then will be resolved from project `srcDir` if `~` alias is used. Modules are executed sequentially so the order is important.\n\n**Note:** Any plugins injected by modules are added to the *beginning* of the plugins list. Your options are to:\n- Manually add your plugin to the end of the list of plugins (`this.nuxt.options.plugins.push(...`)\n- Reverse the order of the modules if it depends on another\n\nModules should export a function to enhance nuxt build\u002Fruntime and optionally return a promise until their job is finished. Note that they are required at runtime so should be already transpiled if depending on modern ES6 features.\n\nPlease see [Modules Guide](\u002Fdocs\u002Fdirectory-structure\u002Fmodules) for more detailed information on how they work or if interested developing your own module. Also we have provided an official [Modules](https:\u002F\u002Fgithub.com\u002Fnuxt-community\u002Fawesome-nuxt#modules) Section listing dozens of production ready modules made by Nuxt Community.\n\n## `buildModules`\n\n::alert{type=\"info\"}\nThis feature is available since Nuxt v2.9\n::\n\nSome modules are only required during development and build time. Using `buildModules` helps to make production startup faster and also significantly decreasing `node_modules` size for production deployments. Please refer to each module docs to see if it is recommended to use `modules` or `buildModules`.\n\nThe usage difference is:\n\n- Instead of adding to `modules` inside `nuxt.config.js`, use `buildModules`\n- Instead of adding to `dependencies` inside `package.json`, use `devDependencies` (`yarn add --dev` or `npm install --save-dev`)\n",ast:{type:"root",children:[{type:b,tag:"prose-h1",props:{class:"d-heading-title",id:"the-modules-property"},children:[{type:a,value:"The modules property"}]},{type:a,value:c},{type:b,tag:h,props:{class:"d-heading-description"},children:[{type:a,value:"Modules are Nuxt extensions which can extend its core functionality and add endless integrations. "},{type:b,tag:p,props:{href:G},children:[{type:a,value:"Learn More"}]}]},{type:a,value:c},{type:b,tag:"prose-hr",props:{class:"d-heading-hr"},children:[]},{type:a,value:c},{type:b,tag:v,props:{},children:[{type:a,value:c},{type:b,tag:l,props:{},children:[{type:a,value:c},{type:a,value:"Type: "},{type:b,tag:f,props:{},children:[{type:a,value:"Array"}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:"Example ("},{type:b,tag:f,props:{},children:[{type:a,value:H}]},{type:a,value:"):"}]},{type:a,value:c},{type:b,tag:"prose-code",props:{},children:[{type:b,tag:"pre",props:{className:["language-js","line-numbers"]},children:[{type:b,tag:"code",props:{},children:[{type:b,tag:d,props:{className:[e,w,I]},children:[{type:a,value:"export"}]},{type:a,value:i},{type:b,tag:d,props:{className:[e,w,I]},children:[{type:a,value:"default"}]},{type:a,value:i},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:x}]},{type:a,value:J},{type:b,tag:d,props:{className:[e,K,L]},children:[{type:a,value:k}]},{type:b,tag:d,props:{className:[e,M]},children:[{type:a,value:N}]},{type:a,value:i},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:O}]},{type:a,value:m},{type:b,tag:d,props:{className:[e,q]},children:[{type:a,value:"\u002F\u002F Using package name"}]},{type:a,value:m},{type:b,tag:d,props:{className:[e,r]},children:[{type:a,value:"'@nuxtjs\u002Faxios'"}]},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:s}]},{type:a,value:y},{type:b,tag:d,props:{className:[e,q]},children:[{type:a,value:"\u002F\u002F Relative to your project srcDir"}]},{type:a,value:m},{type:b,tag:d,props:{className:[e,r]},children:[{type:a,value:"'~\u002Fmodules\u002Fawesome.js'"}]},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:s}]},{type:a,value:y},{type:b,tag:d,props:{className:[e,q]},children:[{type:a,value:"\u002F\u002F Providing options"}]},{type:a,value:m},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:O}]},{type:b,tag:d,props:{className:[e,r]},children:[{type:a,value:"'@nuxtjs\u002Fgoogle-analytics'"}]},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:s}]},{type:a,value:i},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:x}]},{type:a,value:i},{type:b,tag:d,props:{className:[e,K,L]},children:[{type:a,value:"ua"}]},{type:b,tag:d,props:{className:[e,M]},children:[{type:a,value:N}]},{type:a,value:i},{type:b,tag:d,props:{className:[e,r]},children:[{type:a,value:"'X1234567'"}]},{type:a,value:i},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:z}]},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:P}]},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:s}]},{type:a,value:y},{type:b,tag:d,props:{className:[e,q]},children:[{type:a,value:"\u002F\u002F Inline definition"}]},{type:a,value:m},{type:b,tag:d,props:{className:[e,w]},children:[{type:a,value:"function"}]},{type:a,value:i},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:"("}]},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:A}]},{type:a,value:i},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:x}]},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:z}]},{type:a,value:J},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:P}]},{type:a,value:c},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:z}]},{type:a,value:c}]}]}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:"Module developers usually provide additionally needed steps and details for usage."}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:"Nuxt tries to resolve each item in the modules array using node require path (in the "},{type:b,tag:f,props:{},children:[{type:a,value:Q}]},{type:a,value:") and then will be resolved from project "},{type:b,tag:f,props:{},children:[{type:a,value:"srcDir"}]},{type:a,value:" if "},{type:b,tag:f,props:{},children:[{type:a,value:"~"}]},{type:a,value:" alias is used. Modules are executed sequentially so the order is important."}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:b,tag:"prose-strong",props:{},children:[{type:a,value:"Note:"}]},{type:a,value:" Any plugins injected by modules are added to the "},{type:b,tag:"prose-em",props:{},children:[{type:a,value:"beginning"}]},{type:a,value:" of the plugins list. Your options are to:"}]},{type:a,value:c},{type:b,tag:v,props:{},children:[{type:a,value:c},{type:b,tag:l,props:{},children:[{type:a,value:c},{type:a,value:"Manually add your plugin to the end of the list of plugins ("},{type:b,tag:f,props:{},children:[{type:a,value:"this.nuxt.options.plugins.push(..."}]},{type:a,value:A},{type:a,value:c}]},{type:a,value:c},{type:b,tag:l,props:{},children:[{type:a,value:c},{type:a,value:"Reverse the order of the modules if it depends on another"},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:"Modules should export a function to enhance nuxt build\u002Fruntime and optionally return a promise until their job is finished. Note that they are required at runtime so should be already transpiled if depending on modern ES6 features."}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:"Please see "},{type:b,tag:p,props:{href:G},children:[{type:a,value:"Modules Guide"}]},{type:a,value:" for more detailed information on how they work or if interested developing your own module. Also we have provided an official "},{type:b,tag:p,props:{href:"https:\u002F\u002Fgithub.com\u002Fnuxt-community\u002Fawesome-nuxt#modules",rel:["nofollow","noopener","noreferrer"],target:"_blank"},children:[{type:a,value:B}]},{type:a,value:" Section listing dozens of production ready modules made by Nuxt Community."}]},{type:a,value:c},{type:b,tag:"prose-h2",props:{id:R},children:[{type:b,tag:p,props:{href:"#buildmodules"},children:[{type:b,tag:f,props:{},children:[{type:a,value:n}]}]}]},{type:a,value:c},{type:b,tag:"alert",props:{type:"info"},children:[{type:b,tag:h,props:{},children:[{type:a,value:"This feature is available since Nuxt v2.9"}]}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:"Some modules are only required during development and build time. Using "},{type:b,tag:f,props:{},children:[{type:a,value:n}]},{type:a,value:" helps to make production startup faster and also significantly decreasing "},{type:b,tag:f,props:{},children:[{type:a,value:Q}]},{type:a,value:" size for production deployments. Please refer to each module docs to see if it is recommended to use "},{type:b,tag:f,props:{},children:[{type:a,value:k}]},{type:a,value:S},{type:b,tag:f,props:{},children:[{type:a,value:n}]},{type:a,value:"."}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:"The usage difference is:"}]},{type:a,value:c},{type:b,tag:v,props:{},children:[{type:a,value:c},{type:b,tag:l,props:{},children:[{type:a,value:c},{type:a,value:T},{type:b,tag:f,props:{},children:[{type:a,value:k}]},{type:a,value:U},{type:b,tag:f,props:{},children:[{type:a,value:H}]},{type:a,value:V},{type:b,tag:f,props:{},children:[{type:a,value:n}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:l,props:{},children:[{type:a,value:c},{type:a,value:T},{type:b,tag:f,props:{},children:[{type:a,value:"dependencies"}]},{type:a,value:U},{type:b,tag:f,props:{},children:[{type:a,value:"package.json"}]},{type:a,value:V},{type:b,tag:f,props:{},children:[{type:a,value:"devDependencies"}]},{type:a,value:" ("},{type:b,tag:f,props:{},children:[{type:a,value:"yarn add --dev"}]},{type:a,value:S},{type:b,tag:f,props:{},children:[{type:a,value:"npm install --save-dev"}]},{type:a,value:A},{type:a,value:c}]},{type:a,value:c}]}]},toc:{title:W,searchDepth:C,depth:C,links:[{id:R,depth:C,text:n}]}},template:X},templateOptions:{header:j,footer:j,aside:j,asideClass:W,fluid:o,banner:j},_img:{}}],fetch:{"0":{headerLinks:[{title:"Discover",items:[{title:Y,subtitle:"Selection of websites built with Nuxt",slug:"showcases",to:Z,icon:"showcases.svg",color:"bg-sand"},{title:"Case studies",subtitle:"How companies use Nuxt",slug:"case-studies",to:"\u002Fcase-studies",icon:"case-studies.svg",color:"bg-sand-dark"},{title:_,subtitle:"What they think about us",slug:"testimonials",to:"\u002Ftestimonials",icon:"testimonials.svg",color:"bg-sand-darker"}]},{title:"Learn",items:[{title:X,subtitle:"Create fast websites easily",slug:"docs",to:$,icon:"docs.svg",color:"bg-green-500"},{title:aa,subtitle:"Understand everything in Nuxt",slug:"examples",to:ab,icon:"examples.svg",color:"bg-green-600"},{title:ac,subtitle:"Learn with concrete cases",slug:"tutorials",to:ad,icon:"tutorials.svg",color:"bg-green-700"},{title:t,subtitle:D,href:u,icon:E,color:F}]},{title:"Explore",items:[{title:ae,subtitle:"How to Deploy Nuxt",slug:"deployments",to:af,icon:"deployments.svg",color:"bg-indigo-light"},{title:B,subtitle:"Extend the power of Nuxt",href:ag,icon:"modules.svg",color:"bg-indigo"},{title:ah,subtitle:"Get started with themes",slug:"themes",to:ai,icon:"themes.svg",color:"bg-indigo-dark"},{title:"Video Courses",subtitle:"Learn step by step",slug:"video-courses",to:"\u002Fvideo-courses",icon:"video-courses.svg",color:"bg-indigo-darker"}]},{title:"Community",items:[{title:aj,subtitle:"Latest news about Nuxt",slug:"announcements",to:ak,icon:"announcements.svg",color:"bg-mint-lighter"},{title:al,subtitle:"They are Nuxt",slug:"teams",to:am,icon:"teams.svg",color:"bg-mint-light"},{title:an,subtitle:"All the code we have released",slug:"releases",to:ao,icon:"releases.svg",color:"bg-mint"},{title:ap,subtitle:"They trust us",slug:"sponsors",to:aq,icon:"sponsors.svg",color:"bg-mint-dark"}]},{title:"Partners",slug:"partners",to:ar}],footerLinks:[{title:"About",items:[{title:"Contact us",href:"mailto:hello@nuxtjs.com"},{title:"Enterprise support",to:"\u002Fsupport"},{title:"NuxtLabs company",href:"https:\u002F\u002Fnuxtlabs.com\u002F"},{title:"Open Source Software",href:"https:\u002F\u002Fgithub.com\u002Fnuxt"},{title:"Partnerships",to:ar},{title:"Telemetry",href:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Ftelemetry"}]},{title:"Ecosystem",items:[{title:aj,to:ak},{title:"Contribute",to:"\u002Fcontribution-guide"},{title:"Chat with us",href:"https:\u002F\u002Fdiscord.nuxtjs.org\u002F"},{title:"Events",to:"\u002Fevents"},{title:ap,to:aq},{title:al,to:am},{title:ac,to:ad},{title:"Video courses",to:"\u002Fvideo-courses\u002F"}]},{title:"Resources",items:[{title:"Design",to:"\u002Fdesign"},{title:"Documentation",to:$},{title:aa,to:ab},{title:ae,to:af},{title:t,href:u},{title:B,href:ag},{title:an,to:ao},{title:Y,to:Z},{title:ah,to:ai}]}],showCookieBanner:o},"1":{lastRelease:as,masterCoursesLink:{title:t,subtitle:D,href:u,icon:E,color:F}},"2":{lastRelease:as,masterCoursesLink:{title:t,subtitle:D,href:u,icon:E,color:F}},"3":{repoUrl:"https:\u002F\u002Fgithub.com\u002Fsee\u002Fpangu",prev:{slug:"configuration-modern",to:"\u002Fdocs\u002Fconfiguration-glossary\u002Fconfiguration-modern",title:"The modern Property"},next:{slug:"configuration-modulesdir",to:"\u002Fdocs\u002Fconfiguration-glossary\u002Fconfiguration-modulesdir",title:"The modulesDir Property"}},"4":{_error:{name:"FetchError",message:"500 Internal Server Error (https:\u002F\u002Fapi.nuxtjs.org\u002Fapi\u002Fgithub\u002Fcontributors\u002Fsee\u002Fpangu\u002Fmain\u002Fcontent\u002F)",statusCode:500}},_lazyComponents:new Set(["ProseParagraph","AppButton","HomeHero","HomeLearnMaster","SectionContentItem","HomeFeatures","ProseEm","HomePartnersCard","HomeDiscoverPartners","HomeLearnGuides","HomeExplore","HomeCommunity",_,"HomeTestimonials","ProseA","ShowcasesBottomHero","PageHero","ShowcasesListing","ThemesList","VideoCoursesList","TeamSection","SponsorsBottomHero","SustainabilitySection","PartnersBottomHero","PartnersSection","ProseH1","ProseHr","ProseH2","ProseLi","ProseUl","ProseCode","CodeGroup","Alert","ProseH3","ProseCodeInline","ProseStrong","ProseH4","VideoPlayer","BarChartCacheBuild","ProseOl","SupportCard","SupportContainer","ProseBlockquote","DesignHero","DesignLogos","DesignSection","DesignColors","DesignTypography","DesignSections","ProseImg","ProseTh","ProseTr","ProseThead","ProseTd","ProseTbody","ProseTable","List"])},mutations:[]}}("text","element","\n","span","token","prose-code-inline","punctuation","prose-paragraph"," ",true,"modules","prose-li","\n    ","buildModules",false,"prose-a","comment","string",",","Master courses","https:\u002F\u002Fmasteringnuxt.com\u002F?utm_source=nuxt&utm_medium=link&utm_campaign=nsite","prose-ul","keyword","{","\n\n    ","}",")","Modules",2,"Learn more with experts","master-courses.svg","bg-green-800","\u002Fdocs\u002Fdirectory-structure\u002Fmodules","nuxt.config.js","module","\n  ","literal-property","property","operator",":","[","]","node_modules","buildmodules"," or ","Instead of adding to "," inside ",", use ","","Docs","Showcases","\u002Fshowcases","Testimonials","\u002Fdocs","Examples","\u002Fexamples","Tutorials","\u002Ftutorials","Deployments","\u002Fdeployments","https:\u002F\u002Fmodules.nuxtjs.org","Themes","\u002Fthemes","Announcements","\u002Fannouncements","Teams","\u002Fteams","Releases","\u002Freleases","Sponsors","\u002Fsponsors","\u002Fpartners",null)));