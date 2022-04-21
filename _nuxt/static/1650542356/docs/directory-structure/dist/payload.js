__NUXT_JSONP__("/docs/directory-structure/dist", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA,aB){return {data:[{page:{key:"content:en:docs:4.directory-structure:5.dist.md",generatedAt:new Date(1650542391734),mtime:new Date(1650542391726),slug:u,title:L,position:"999900040005",to:"\u002Fdocs\u002Fdirectory-structure\u002Fdist",draft:v,page:m,language:"en",navigation:{title:u},description:"The dist folder, short for distribution folder, is dynamically generated when using the nuxt generate commands and includes the generated production ready HTML files and assets that are necessary to deploy and run your statically generated Nuxt application.",category:"directory-structure",csb_link:"https:\u002F\u002Fcodesandbox.io\u002Fembed\u002Fgithub\u002Fnuxt-academy\u002Fguides-examples\u002Ftree\u002Fmaster\u002F04_directory_structure\u002F05_dist?fontsize=14&hidenavigation=1&theme=dark",empty:v,excerpt:void 0,body:{raw:"---\ntitle: Dist directory\nnavigation.title: dist\ndescription: The dist folder, short for distribution folder, is dynamically generated when using the nuxt generate commands and includes the generated production ready HTML files and assets that are necessary to deploy and run your statically generated Nuxt application.\ncategory: directory-structure\ncsb_link: https:\u002F\u002Fcodesandbox.io\u002Fembed\u002Fgithub\u002Fnuxt-academy\u002Fguides-examples\u002Ftree\u002Fmaster\u002F04_directory_structure\u002F05_dist?fontsize=14&hidenavigation=1&theme=dark\n---\n# Dist directory\n\nThe `dist` folder, short for *distribution* folder, is dynamically generated when using the `nuxt generate` commands and includes the generated production ready HTML files and assets that are necessary to deploy and run your statically generated Nuxt application.\n\n---\n\n### Deploying\n\nThis is the folder you need to **upload for static hosting** as it contains your generated production ready HTML files and assets\n\n::alert{type=\"warning\"}\nThe `dist` directory should not be committed to your version control system and should be ignored through your `.gitignore` as it will be generated automatically every time you run `nuxt generate`.\n::\n\n### The dir property\n\nThe dist folder is named dist by default but can be configured in your nuxt.config file.\n\n```js{}[nuxt.config.js]\ngenerate: {\n  dir: 'my-site'\n}\n```\n\n::alert{type=\"warning\"}\nIf you do change your dist folder then you will need to add that to your version control so that git will ignore it.\n::\n\n### The subFolders Property\n\nNuxt puts all your generated pages inside a folder by default, however you can change this if you want by modifying the nuxt.config and changing the subFolders to be false.\n\n```js{}[nuxt.config.js]\ngenerate: {\n  subFolders: false\n}\n```\n\n### The fallback Property\n\nWhen deploying your site you will need to make sure the fallback HTML path is set correctly. It should be set as the error page so that unknown routes are rendered via Nuxt. If it is unset Nuxt will use the default value which is 200.html.\n\nWhen running a single page application it makes more sense to use 200.html as it is the only file necessary as no other routes are generated.\n\nWhen working with statically generated pages it is recommended to use a 404.html for error pages.\n\n::alert{type=\"warning\"}\nDepending on where you are hosting your site, you may have to use 200.html or 404.html. Please check with your hosting provider. Netlify, for example uses 404.html.\n::\n\n```js{}[nuxt.config.js]\nexport default {\n  generate: {\n    fallback: '404.html'\n  }\n}\n```\n\n### The excludes property\n\nYou can exclude pages from being generated by using the generate excludes property. Instead of being generated as a static page it will fallback to be a single page application page and will only be rendered on the client side.\n\n```js{}[nuxt.config.js]\ngenerate: {\n  exclude: [\u002Fadmin\u002F]\n}\n```\n\n::alert{type=\"info\"}\nYou can also use a regex expression here to exclude pages starting or ending with a particular word\n::\n",ast:{type:"root",children:[{type:b,tag:"prose-h1",props:{class:"d-heading-title",id:"dist-directory"},children:[{type:a,value:L}]},{type:a,value:e},{type:b,tag:f,props:{class:"d-heading-description"},children:[{type:a,value:M},{type:b,tag:n,props:{},children:[{type:a,value:u}]},{type:a,value:" folder, short for "},{type:b,tag:"prose-em",props:{},children:[{type:a,value:"distribution"}]},{type:a,value:" folder, is dynamically generated when using the "},{type:b,tag:n,props:{},children:[{type:a,value:N}]},{type:a,value:" commands and includes the generated production ready HTML files and assets that are necessary to deploy and run your statically generated Nuxt application."}]},{type:a,value:e},{type:b,tag:"prose-hr",props:{class:"d-heading-hr"},children:[]},{type:a,value:e},{type:b,tag:o,props:{id:O},children:[{type:b,tag:p,props:{href:"#deploying"},children:[{type:a,value:P}]}]},{type:a,value:e},{type:b,tag:f,props:{},children:[{type:a,value:"This is the folder you need to "},{type:b,tag:"prose-strong",props:{},children:[{type:a,value:"upload for static hosting"}]},{type:a,value:" as it contains your generated production ready HTML files and assets"}]},{type:a,value:e},{type:b,tag:w,props:{type:H},children:[{type:b,tag:f,props:{},children:[{type:a,value:M},{type:b,tag:n,props:{},children:[{type:a,value:u}]},{type:a,value:" directory should not be committed to your version control system and should be ignored through your "},{type:b,tag:n,props:{},children:[{type:a,value:".gitignore"}]},{type:a,value:" as it will be generated automatically every time you run "},{type:b,tag:n,props:{},children:[{type:a,value:N}]},{type:a,value:"."}]}]},{type:a,value:e},{type:b,tag:o,props:{id:Q},children:[{type:b,tag:p,props:{href:"#the-dir-property"},children:[{type:a,value:R}]}]},{type:a,value:e},{type:b,tag:f,props:{},children:[{type:a,value:"The dist folder is named dist by default but can be configured in your nuxt.config file."}]},{type:a,value:e},{type:b,tag:x,props:{},children:[{type:b,tag:c,props:{className:[y]},children:[{type:a,value:z}]},{type:b,tag:A,props:{className:[B,C]},children:[{type:b,tag:D,props:{},children:[{type:b,tag:c,props:{className:[d,i,j]},children:[{type:a,value:E}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:l}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:q}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,i,j]},children:[{type:a,value:"dir"}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:l}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,S]},children:[{type:a,value:"'my-site'"}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:s}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:w,props:{type:H},children:[{type:b,tag:f,props:{},children:[{type:a,value:"If you do change your dist folder then you will need to add that to your version control so that git will ignore it."}]}]},{type:a,value:e},{type:b,tag:o,props:{id:T},children:[{type:b,tag:p,props:{href:"#the-subfolders-property"},children:[{type:a,value:U}]}]},{type:a,value:e},{type:b,tag:f,props:{},children:[{type:a,value:"Nuxt puts all your generated pages inside a folder by default, however you can change this if you want by modifying the nuxt.config and changing the subFolders to be false."}]},{type:a,value:e},{type:b,tag:x,props:{},children:[{type:b,tag:c,props:{className:[y]},children:[{type:a,value:z}]},{type:b,tag:A,props:{className:[B,C]},children:[{type:b,tag:D,props:{},children:[{type:b,tag:c,props:{className:[d,i,j]},children:[{type:a,value:E}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:l}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:q}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,i,j]},children:[{type:a,value:"subFolders"}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:l}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,"boolean"]},children:[{type:a,value:"false"}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:s}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:o,props:{id:V},children:[{type:b,tag:p,props:{href:"#the-fallback-property"},children:[{type:a,value:W}]}]},{type:a,value:e},{type:b,tag:f,props:{},children:[{type:a,value:"When deploying your site you will need to make sure the fallback HTML path is set correctly. It should be set as the error page so that unknown routes are rendered via Nuxt. If it is unset Nuxt will use the default value which is 200.html."}]},{type:a,value:e},{type:b,tag:f,props:{},children:[{type:a,value:"When running a single page application it makes more sense to use 200.html as it is the only file necessary as no other routes are generated."}]},{type:a,value:e},{type:b,tag:f,props:{},children:[{type:a,value:"When working with statically generated pages it is recommended to use a 404.html for error pages."}]},{type:a,value:e},{type:b,tag:w,props:{type:H},children:[{type:b,tag:f,props:{},children:[{type:a,value:"Depending on where you are hosting your site, you may have to use 200.html or 404.html. Please check with your hosting provider. Netlify, for example uses 404.html."}]}]},{type:a,value:e},{type:b,tag:x,props:{},children:[{type:b,tag:c,props:{className:[y]},children:[{type:a,value:z}]},{type:b,tag:A,props:{className:[B,C]},children:[{type:b,tag:D,props:{},children:[{type:b,tag:c,props:{className:[d,X,Y]},children:[{type:a,value:"export"}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,X,Y]},children:[{type:a,value:"default"}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:q}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,i,j]},children:[{type:a,value:E}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:l}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:q}]},{type:a,value:"\n    "},{type:b,tag:c,props:{className:[d,i,j]},children:[{type:a,value:"fallback"}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:l}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,S]},children:[{type:a,value:"'404.html'"}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:s}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:s}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:o,props:{id:Z},children:[{type:b,tag:p,props:{href:"#the-excludes-property"},children:[{type:a,value:_}]}]},{type:a,value:e},{type:b,tag:f,props:{},children:[{type:a,value:"You can exclude pages from being generated by using the generate excludes property. Instead of being generated as a static page it will fallback to be a single page application page and will only be rendered on the client side."}]},{type:a,value:e},{type:b,tag:x,props:{},children:[{type:b,tag:c,props:{className:[y]},children:[{type:a,value:z}]},{type:b,tag:A,props:{className:[B,C]},children:[{type:b,tag:D,props:{},children:[{type:b,tag:c,props:{className:[d,i,j]},children:[{type:a,value:E}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:l}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:q}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,i,j]},children:[{type:a,value:"exclude"}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:l}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:"["}]},{type:b,tag:c,props:{className:[d,"regex"]},children:[{type:b,tag:c,props:{className:[d,$]},children:[{type:a,value:aa}]},{type:b,tag:c,props:{className:[d,"regex-source","language-regex"]},children:[{type:a,value:"admin"}]},{type:b,tag:c,props:{className:[d,$]},children:[{type:a,value:aa}]}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:"]"}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:s}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:w,props:{type:"info"},children:[{type:b,tag:f,props:{},children:[{type:a,value:"You can also use a regex expression here to exclude pages starting or ending with a particular word"}]}]}]},toc:{title:ab,searchDepth:ac,depth:ac,links:[{id:O,depth:t,text:P},{id:Q,depth:t,text:R},{id:T,depth:t,text:U},{id:V,depth:t,text:W},{id:Z,depth:t,text:_}]}},template:ad},templateOptions:{header:m,footer:m,aside:m,asideClass:ab,fluid:v,banner:m},_img:{}}],fetch:{"0":{headerLinks:[{title:"Discover",items:[{title:ae,subtitle:"Selection of websites built with Nuxt",slug:"showcases",to:af,icon:"showcases.svg",color:"bg-sand"},{title:"Case studies",subtitle:"How companies use Nuxt",slug:"case-studies",to:"\u002Fcase-studies",icon:"case-studies.svg",color:"bg-sand-dark"},{title:ag,subtitle:"What they think about us",slug:"testimonials",to:"\u002Ftestimonials",icon:"testimonials.svg",color:"bg-sand-darker"}]},{title:"Learn",items:[{title:ad,subtitle:"Create fast websites easily",slug:"docs",to:ah,icon:"docs.svg",color:"bg-green-500"},{title:ai,subtitle:"Understand everything in Nuxt",slug:"examples",to:aj,icon:"examples.svg",color:"bg-green-600"},{title:ak,subtitle:"Learn with concrete cases",slug:"tutorials",to:al,icon:"tutorials.svg",color:"bg-green-700"},{title:F,subtitle:I,href:G,icon:J,color:K}]},{title:"Explore",items:[{title:am,subtitle:"How to Deploy Nuxt",slug:"deployments",to:an,icon:"deployments.svg",color:"bg-indigo-light"},{title:ao,subtitle:"Extend the power of Nuxt",href:ap,icon:"modules.svg",color:"bg-indigo"},{title:aq,subtitle:"Get started with themes",slug:"themes",to:ar,icon:"themes.svg",color:"bg-indigo-dark"},{title:"Video Courses",subtitle:"Learn step by step",slug:"video-courses",to:"\u002Fvideo-courses",icon:"video-courses.svg",color:"bg-indigo-darker"}]},{title:"Community",items:[{title:as,subtitle:"Latest news about Nuxt",slug:"announcements",to:at,icon:"announcements.svg",color:"bg-mint-lighter"},{title:au,subtitle:"They are Nuxt",slug:"teams",to:av,icon:"teams.svg",color:"bg-mint-light"},{title:aw,subtitle:"All the code we have released",slug:"releases",to:ax,icon:"releases.svg",color:"bg-mint"},{title:ay,subtitle:"They trust us",slug:"sponsors",to:az,icon:"sponsors.svg",color:"bg-mint-dark"}]},{title:"Partners",slug:"partners",to:aA}],footerLinks:[{title:"About",items:[{title:"Contact us",href:"mailto:hello@nuxtjs.com"},{title:"Enterprise support",to:"\u002Fsupport"},{title:"NuxtLabs company",href:"https:\u002F\u002Fnuxtlabs.com\u002F"},{title:"Open Source Software",href:"https:\u002F\u002Fgithub.com\u002Fnuxt"},{title:"Partnerships",to:aA},{title:"Telemetry",href:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Ftelemetry"}]},{title:"Ecosystem",items:[{title:as,to:at},{title:"Contribute",to:"\u002Fcontribution-guide"},{title:"Chat with us",href:"https:\u002F\u002Fdiscord.nuxtjs.org\u002F"},{title:"Events",to:"\u002Fevents"},{title:ay,to:az},{title:au,to:av},{title:ak,to:al},{title:"Video courses",to:"\u002Fvideo-courses\u002F"}]},{title:"Resources",items:[{title:"Design",to:"\u002Fdesign"},{title:"Documentation",to:ah},{title:ai,to:aj},{title:am,to:an},{title:F,href:G},{title:ao,href:ap},{title:aw,to:ax},{title:ae,to:af},{title:aq,to:ar}]}],showCookieBanner:v},"1":{lastRelease:aB,masterCoursesLink:{title:F,subtitle:I,href:G,icon:J,color:K}},"2":{lastRelease:aB,masterCoursesLink:{title:F,subtitle:I,href:G,icon:J,color:K}},"3":{repoUrl:"https:\u002F\u002Fgithub.com\u002Fsee\u002Fpangu",prev:{slug:"content",to:"\u002Fdocs\u002Fdirectory-structure\u002Fcontent",title:"Content directory"},next:{slug:"layouts",to:"\u002Fdocs\u002Fdirectory-structure\u002Flayouts",title:"Layouts directory"}},"4":{_error:{name:"FetchError",message:"500 Internal Server Error (https:\u002F\u002Fapi.nuxtjs.org\u002Fapi\u002Fgithub\u002Fcontributors\u002Fsee\u002Fpangu\u002Fmain\u002Fcontent\u002F)",statusCode:500}},_lazyComponents:new Set(["ProseParagraph","AppButton","HomeHero","HomeLearnMaster","SectionContentItem","HomeFeatures","ProseEm","HomePartnersCard","HomeDiscoverPartners","HomeLearnGuides","HomeExplore","HomeCommunity",ag,"HomeTestimonials","ProseA","ShowcasesBottomHero","PageHero","ShowcasesListing","ThemesList","VideoCoursesList","TeamSection","SponsorsBottomHero","SustainabilitySection","PartnersBottomHero","PartnersSection","ProseH1","ProseHr","ProseH2","ProseLi","ProseUl","ProseCode","CodeGroup","Alert","ProseH3","ProseCodeInline","ProseStrong","ProseH4","VideoPlayer","BarChartCacheBuild","ProseOl","SupportCard","SupportContainer","ProseBlockquote","DesignHero","DesignLogos","DesignSection","DesignColors","DesignTypography","DesignSections","ProseImg"])},mutations:[]}}("text","element","span","token","\n","prose-paragraph","punctuation"," ","literal-property","property","operator",":",true,"prose-code-inline","prose-h3","prose-a","{","\n  ","}",3,"dist",false,"alert","prose-code","filename","nuxt.config.js","pre","language-js","line-numbers","code","generate","Master courses","https:\u002F\u002Fmasteringnuxt.com\u002F?utm_source=nuxt&utm_medium=link&utm_campaign=nsite","warning","Learn more with experts","master-courses.svg","bg-green-800","Dist directory","The ","nuxt generate","deploying","Deploying","the-dir-property","The dir property","string","the-subfolders-property","The subFolders Property","the-fallback-property","The fallback Property","keyword","module","the-excludes-property","The excludes property","regex-delimiter","\u002F","",2,"Docs","Showcases","\u002Fshowcases","Testimonials","\u002Fdocs","Examples","\u002Fexamples","Tutorials","\u002Ftutorials","Deployments","\u002Fdeployments","Modules","https:\u002F\u002Fmodules.nuxtjs.org","Themes","\u002Fthemes","Announcements","\u002Fannouncements","Teams","\u002Fteams","Releases","\u002Freleases","Sponsors","\u002Fsponsors","\u002Fpartners",null)));