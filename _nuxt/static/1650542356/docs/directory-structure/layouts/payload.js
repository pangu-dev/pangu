__NUXT_JSONP__("/docs/directory-structure/layouts", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA,aB,aC,aD,aE,aF,aG,aH,aI,aJ,aK,aL,aM,aN,aO,aP,aQ,aR,aS,aT,aU,aV,aW,aX){return {data:[{page:{key:"content:en:docs:4.directory-structure:6.layouts.md",generatedAt:new Date(1650542388406),mtime:new Date(1650542388395),slug:E,title:$,position:"999900040006",to:"\u002Fdocs\u002Fdirectory-structure\u002Flayouts",draft:F,page:v,language:"en",navigation:{title:E},description:aa,category:"directory-structure",csb_link:"https:\u002F\u002Fcodesandbox.io\u002Fembed\u002Fgithub\u002Fnuxt-academy\u002Fguides-examples\u002Ftree\u002Fmaster\u002F04_directory_structure\u002F07_layouts?fontsize=14&hidenavigation=1&theme=dark",empty:F,excerpt:void 0,body:{raw:"---\ntitle: Layouts directory\nnavigation.title: layouts\ndescription: Layouts are a great help when you want to change the look and feel of your Nuxt app. Whether you want to include a sidebar or have distinct layouts for mobile and desktop.\ncategory: directory-structure\ncsb_link: https:\u002F\u002Fcodesandbox.io\u002Fembed\u002Fgithub\u002Fnuxt-academy\u002Fguides-examples\u002Ftree\u002Fmaster\u002F04_directory_structure\u002F07_layouts?fontsize=14&hidenavigation=1&theme=dark\n---\n# Layouts directory\n\nLayouts are a great help when you want to change the look and feel of your Nuxt app. Whether you want to include a sidebar or have distinct layouts for mobile and desktop.\n\n---\n\n::alert{type=\"warning\"}\nThis directory cannot be renamed without extra configuration.\n::\n\n### Default Layout\n\nYou can extend the main layout by adding a `layouts\u002Fdefault.vue` file. It will be used for all pages that don't have a layout specified. Make sure to add the `\u003CNuxt\u003E` component when creating a layout to actually include the page component.\n\nAll you need in your layout is three lines of code which will render the page component.\n\n```html{}[layouts\u002Fdefault.vue]\n\u003Ctemplate\u003E\n  \u003CNuxt \u002F\u003E\n\u003C\u002Ftemplate\u003E\n```\n\nYou can add more components here such as Navigation, Header, Footer etc.\n\n```html{}[layouts\u002Fdefault.vue]\n\u003Ctemplate\u003E\n  \u003Cdiv\u003E\n    \u003CTheHeader \u002F\u003E\n    \u003CNuxt \u002F\u003E\n    \u003CTheFooter \u002F\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Ftemplate\u003E\n```\n\n::alert{type=\"info\"}\nIf you have [components set to true](\u002Fdocs\u002Fdirectory-structure\u002Fcomponents) then there is no need to add any import statements for your components.\n::\n\n### Custom Layout\n\nEvery file (_top-level_) in the `layouts` directory will create a custom layout accessible with the `layout` property in the page components.\n\nLet's say we want to create a blog layout and save it to `layouts\u002Fblog.vue`:\n\n```html{}[layouts\u002Fblog.vue]\n\u003Ctemplate\u003E\n  \u003Cdiv\u003E\n    \u003Cdiv\u003EMy blog navigation bar here\u003C\u002Fdiv\u003E\n    \u003CNuxt \u002F\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Ftemplate\u003E\n```\n\nThen you have to tell the pages to use your custom layout\n\n```js{}[pages\u002Fposts.vue]\n\u003Cscript\u003E\nexport default {\n  layout: 'blog',\n  \u002F\u002F OR\n  layout (context) {\n    return 'blog'\n  }\n}\n\u003C\u002Fscript\u003E\n```\n\n## Error Page\n\nThe error page is a *page component* which is always displayed when an error occurs (that is not thrown on the server-side).\n\n::alert{type=\"warning\"}\nThough this file is placed in the `layouts` folder, it should be treated as a page.\n::\n\nAs mentioned above, this layout is special and you should not include `\u003CNuxt\u003E` inside its template. You must see this layout as a component displayed when an error occurs (`404`, `500`, etc.). Similar to other page components, you can set a custom layout for the error page as well in the usual way.\n\nYou can customize the error page by adding a `layouts\u002Ferror.vue` file:\n\n```js{}[layouts\u002Ferror.vue]\n\u003Ctemplate\u003E\n  \u003Cdiv class=\"container\"\u003E\n    \u003Ch1 v-if=\"error.statusCode === 404\"\u003EPage not found\u003C\u002Fh1\u003E\n    \u003Ch1 v-else\u003EAn error occurred\u003C\u002Fh1\u003E\n    \u003CNuxtLink to=\"\u002F\"\u003EHome page\u003C\u002FNuxtLink\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Ftemplate\u003E\n\n\u003Cscript\u003E\nexport default {\n  props: ['error'],\n  layout: 'blog' \u002F\u002F you can set a custom layout for the error page\n}\n\u003C\u002Fscript\u003E\n```\n\n::alert{type=\"info\"}\nThe default error page source code is [available on GitHub](https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fnuxt.js\u002Fblob\u002Fdev\u002Fpackages\u002Fvue-app\u002Ftemplate\u002Fcomponents\u002Fnuxt-error.vue).\n::\n",ast:{type:"root",children:[{type:b,tag:"prose-h1",props:{class:"d-heading-title",id:"layouts-directory"},children:[{type:a,value:$}]},{type:a,value:g},{type:b,tag:l,props:{class:"d-heading-description"},children:[{type:a,value:aa}]},{type:a,value:g},{type:b,tag:"prose-hr",props:{class:"d-heading-hr"},children:[]},{type:a,value:g},{type:b,tag:G,props:{type:ab},children:[{type:b,tag:l,props:{},children:[{type:a,value:"This directory cannot be renamed without extra configuration."}]}]},{type:a,value:g},{type:b,tag:ac,props:{id:ad},children:[{type:b,tag:w,props:{href:"#default-layout"},children:[{type:a,value:ae}]}]},{type:a,value:g},{type:b,tag:l,props:{},children:[{type:a,value:"You can extend the main layout by adding a "},{type:b,tag:n,props:{},children:[{type:a,value:N}]},{type:a,value:" file. It will be used for all pages that don't have a layout specified. Make sure to add the "},{type:b,tag:n,props:{},children:[{type:a,value:af}]},{type:a,value:" component when creating a layout to actually include the page component."}]},{type:a,value:g},{type:b,tag:l,props:{},children:[{type:a,value:"All you need in your layout is three lines of code which will render the page component."}]},{type:a,value:g},{type:b,tag:x,props:{},children:[{type:b,tag:c,props:{className:[y]},children:[{type:a,value:N}]},{type:b,tag:z,props:{className:[A,O]},children:[{type:b,tag:B,props:{},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:p}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:P}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:C}]}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:a,value:p}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]}]},{type:a,value:g}]}]}]},{type:a,value:g},{type:b,tag:l,props:{},children:[{type:a,value:"You can add more components here such as Navigation, Header, Footer etc."}]},{type:a,value:g},{type:b,tag:x,props:{},children:[{type:b,tag:c,props:{className:[y]},children:[{type:a,value:N}]},{type:b,tag:z,props:{className:[A,O]},children:[{type:b,tag:B,props:{},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:p}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:r}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:"TheHeader"}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:C}]}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:P}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:C}]}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:"TheFooter"}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:C}]}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:a,value:r}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:a,value:p}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]}]},{type:a,value:g}]}]}]},{type:a,value:g},{type:b,tag:G,props:{type:ag},children:[{type:b,tag:l,props:{},children:[{type:a,value:"If you have "},{type:b,tag:w,props:{href:"\u002Fdocs\u002Fdirectory-structure\u002Fcomponents"},children:[{type:a,value:"components set to true"}]},{type:a,value:" then there is no need to add any import statements for your components."}]}]},{type:a,value:g},{type:b,tag:ac,props:{id:ah},children:[{type:b,tag:w,props:{href:"#custom-layout"},children:[{type:a,value:ai}]}]},{type:a,value:g},{type:b,tag:l,props:{},children:[{type:a,value:"Every file ("},{type:b,tag:aj,props:{},children:[{type:a,value:"top-level"}]},{type:a,value:") in the "},{type:b,tag:n,props:{},children:[{type:a,value:E}]},{type:a,value:" directory will create a custom layout accessible with the "},{type:b,tag:n,props:{},children:[{type:a,value:H}]},{type:a,value:" property in the page components."}]},{type:a,value:g},{type:b,tag:l,props:{},children:[{type:a,value:"Let's say we want to create a blog layout and save it to "},{type:b,tag:n,props:{},children:[{type:a,value:ak}]},{type:a,value:I}]},{type:a,value:g},{type:b,tag:x,props:{},children:[{type:b,tag:c,props:{className:[y]},children:[{type:a,value:ak}]},{type:b,tag:z,props:{className:[A,O]},children:[{type:b,tag:B,props:{},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:p}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:r}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:r}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]}]},{type:a,value:"My blog navigation bar here"},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:a,value:r}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:P}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:C}]}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:a,value:r}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:a,value:p}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]}]},{type:a,value:g}]}]}]},{type:a,value:g},{type:b,tag:l,props:{},children:[{type:a,value:"Then you have to tell the pages to use your custom layout"}]},{type:a,value:g},{type:b,tag:x,props:{},children:[{type:b,tag:c,props:{className:[y]},children:[{type:a,value:"pages\u002Fposts.vue"}]},{type:b,tag:z,props:{className:[A,al]},children:[{type:b,tag:B,props:{},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:j}]},{type:a,value:J},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,q,K]},children:[{type:a,value:am}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,q,K]},children:[{type:a,value:an}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:Q}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,R,S]},children:[{type:a,value:H}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:I}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:T}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ao}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,ap]},children:[{type:a,value:"\u002F\u002F OR"}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,"function"]},children:[{type:a,value:H}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"("}]},{type:b,tag:c,props:{className:[d,"parameter"]},children:[{type:a,value:"context"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:")"}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:Q}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,q,U]},children:[{type:a,value:"return"}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:T}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:V}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:V}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:t}]},{type:a,value:J},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]},{type:a,value:g}]}]}]},{type:a,value:g},{type:b,tag:"prose-h2",props:{id:aq},children:[{type:b,tag:w,props:{href:"#error-page"},children:[{type:a,value:ar}]}]},{type:a,value:g},{type:b,tag:l,props:{},children:[{type:a,value:"The error page is a "},{type:b,tag:aj,props:{},children:[{type:a,value:"page component"}]},{type:a,value:" which is always displayed when an error occurs (that is not thrown on the server-side)."}]},{type:a,value:g},{type:b,tag:G,props:{type:ab},children:[{type:b,tag:l,props:{},children:[{type:a,value:"Though this file is placed in the "},{type:b,tag:n,props:{},children:[{type:a,value:E}]},{type:a,value:" folder, it should be treated as a page."}]}]},{type:a,value:g},{type:b,tag:l,props:{},children:[{type:a,value:"As mentioned above, this layout is special and you should not include "},{type:b,tag:n,props:{},children:[{type:a,value:af}]},{type:a,value:" inside its template. You must see this layout as a component displayed when an error occurs ("},{type:b,tag:n,props:{},children:[{type:a,value:"404"}]},{type:a,value:", "},{type:b,tag:n,props:{},children:[{type:a,value:"500"}]},{type:a,value:", etc.). Similar to other page components, you can set a custom layout for the error page as well in the usual way."}]},{type:a,value:g},{type:b,tag:l,props:{},children:[{type:a,value:"You can customize the error page by adding a "},{type:b,tag:n,props:{},children:[{type:a,value:as}]},{type:a,value:" file:"}]},{type:a,value:g},{type:b,tag:x,props:{},children:[{type:b,tag:c,props:{className:[y]},children:[{type:a,value:as}]},{type:b,tag:z,props:{className:[A,al]},children:[{type:b,tag:B,props:{},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:j}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:j}]},{type:a,value:"div "},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:"class"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:W}]},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:"\"container\""}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:j}]},{type:a,value:at},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:au}]},{type:b,tag:c,props:{className:[d,q,U]},children:[{type:a,value:"if"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:W}]},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:"\"error.statusCode === 404\""}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,D]},children:[{type:a,value:"Page"}]},{type:a,value:" not found"},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:t}]},{type:a,value:av},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:j}]},{type:a,value:at},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:au}]},{type:b,tag:c,props:{className:[d,q,U]},children:[{type:a,value:"else"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,D]},children:[{type:a,value:"An"}]},{type:a,value:" error occurred"},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:t}]},{type:a,value:av},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,D]},children:[{type:a,value:aw}]},{type:a,value:" to"},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:W}]},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:"\"\u002F\""}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,D]},children:[{type:a,value:"Home"}]},{type:a,value:" page"},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,D]},children:[{type:a,value:aw}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:t}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:t}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]},{type:a,value:"\n\n"},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:j}]},{type:a,value:J},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,q,K]},children:[{type:a,value:am}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,q,K]},children:[{type:a,value:an}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:Q}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,R,S]},children:[{type:a,value:"props"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:I}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"["}]},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:"'error'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"]"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ao}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,R,S]},children:[{type:a,value:H}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:I}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:T}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,ap]},children:[{type:a,value:"\u002F\u002F you can set a custom layout for the error page"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:V}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:t}]},{type:a,value:J},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]},{type:a,value:g}]}]}]},{type:a,value:g},{type:b,tag:G,props:{type:ag},children:[{type:b,tag:l,props:{},children:[{type:a,value:"The default error page source code is "},{type:b,tag:w,props:{href:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fnuxt.js\u002Fblob\u002Fdev\u002Fpackages\u002Fvue-app\u002Ftemplate\u002Fcomponents\u002Fnuxt-error.vue",rel:["nofollow","noopener","noreferrer"],target:"_blank"},children:[{type:a,value:"available on GitHub"}]},{type:a,value:"."}]}]}]},toc:{title:ax,searchDepth:X,depth:X,links:[{id:ad,depth:ay,text:ae},{id:ah,depth:ay,text:ai},{id:aq,depth:X,text:ar}]}},template:az},templateOptions:{header:v,footer:v,aside:v,asideClass:ax,fluid:F,banner:v},_img:{}}],fetch:{"0":{headerLinks:[{title:"Discover",items:[{title:aA,subtitle:"Selection of websites built with Nuxt",slug:"showcases",to:aB,icon:"showcases.svg",color:"bg-sand"},{title:"Case studies",subtitle:"How companies use Nuxt",slug:"case-studies",to:"\u002Fcase-studies",icon:"case-studies.svg",color:"bg-sand-dark"},{title:aC,subtitle:"What they think about us",slug:"testimonials",to:"\u002Ftestimonials",icon:"testimonials.svg",color:"bg-sand-darker"}]},{title:"Learn",items:[{title:az,subtitle:"Create fast websites easily",slug:"docs",to:aD,icon:"docs.svg",color:"bg-green-500"},{title:aE,subtitle:"Understand everything in Nuxt",slug:"examples",to:aF,icon:"examples.svg",color:"bg-green-600"},{title:aG,subtitle:"Learn with concrete cases",slug:"tutorials",to:aH,icon:"tutorials.svg",color:"bg-green-700"},{title:L,subtitle:Y,href:M,icon:Z,color:_}]},{title:"Explore",items:[{title:aI,subtitle:"How to Deploy Nuxt",slug:"deployments",to:aJ,icon:"deployments.svg",color:"bg-indigo-light"},{title:aK,subtitle:"Extend the power of Nuxt",href:aL,icon:"modules.svg",color:"bg-indigo"},{title:aM,subtitle:"Get started with themes",slug:"themes",to:aN,icon:"themes.svg",color:"bg-indigo-dark"},{title:"Video Courses",subtitle:"Learn step by step",slug:"video-courses",to:"\u002Fvideo-courses",icon:"video-courses.svg",color:"bg-indigo-darker"}]},{title:"Community",items:[{title:aO,subtitle:"Latest news about Nuxt",slug:"announcements",to:aP,icon:"announcements.svg",color:"bg-mint-lighter"},{title:aQ,subtitle:"They are Nuxt",slug:"teams",to:aR,icon:"teams.svg",color:"bg-mint-light"},{title:aS,subtitle:"All the code we have released",slug:"releases",to:aT,icon:"releases.svg",color:"bg-mint"},{title:aU,subtitle:"They trust us",slug:"sponsors",to:aV,icon:"sponsors.svg",color:"bg-mint-dark"}]},{title:"Partners",slug:"partners",to:aW}],footerLinks:[{title:"About",items:[{title:"Contact us",href:"mailto:hello@nuxtjs.com"},{title:"Enterprise support",to:"\u002Fsupport"},{title:"NuxtLabs company",href:"https:\u002F\u002Fnuxtlabs.com\u002F"},{title:"Open Source Software",href:"https:\u002F\u002Fgithub.com\u002Fnuxt"},{title:"Partnerships",to:aW},{title:"Telemetry",href:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Ftelemetry"}]},{title:"Ecosystem",items:[{title:aO,to:aP},{title:"Contribute",to:"\u002Fcontribution-guide"},{title:"Chat with us",href:"https:\u002F\u002Fdiscord.nuxtjs.org\u002F"},{title:"Events",to:"\u002Fevents"},{title:aU,to:aV},{title:aQ,to:aR},{title:aG,to:aH},{title:"Video courses",to:"\u002Fvideo-courses\u002F"}]},{title:"Resources",items:[{title:"Design",to:"\u002Fdesign"},{title:"Documentation",to:aD},{title:aE,to:aF},{title:aI,to:aJ},{title:L,href:M},{title:aK,href:aL},{title:aS,to:aT},{title:aA,to:aB},{title:aM,to:aN}]}],showCookieBanner:F},"1":{lastRelease:aX,masterCoursesLink:{title:L,subtitle:Y,href:M,icon:Z,color:_}},"2":{lastRelease:aX,masterCoursesLink:{title:L,subtitle:Y,href:M,icon:Z,color:_}},"3":{repoUrl:"https:\u002F\u002Fgithub.com\u002Fsee\u002Fpangu",prev:{slug:"dist",to:"\u002Fdocs\u002Fdirectory-structure\u002Fdist",title:"Dist directory"},next:{slug:"middleware",to:"\u002Fdocs\u002Fdirectory-structure\u002Fmiddleware",title:"Middleware directory"}},"4":{_error:{name:"FetchError",message:"500 Internal Server Error (https:\u002F\u002Fapi.nuxtjs.org\u002Fapi\u002Fgithub\u002Fcontributors\u002Fsee\u002Fpangu\u002Fmain\u002Fcontent\u002F)",statusCode:500}},_lazyComponents:new Set(["ProseParagraph","AppButton","HomeHero","HomeLearnMaster","SectionContentItem","HomeFeatures","ProseEm","HomePartnersCard","HomeDiscoverPartners","HomeLearnGuides","HomeExplore","HomeCommunity",aC,"HomeTestimonials","ProseA","ShowcasesBottomHero","PageHero","ShowcasesListing","ThemesList","VideoCoursesList","TeamSection","SponsorsBottomHero","SustainabilitySection","PartnersBottomHero","PartnersSection","ProseH1","ProseHr","ProseH2","ProseLi","ProseUl","ProseCode","CodeGroup","Alert","ProseH3","ProseCodeInline","ProseStrong","ProseH4","VideoPlayer","BarChartCacheBuild","ProseOl","SupportCard","SupportContainer","ProseBlockquote","DesignHero","DesignLogos","DesignSection","DesignColors","DesignTypography","DesignSections","ProseImg"])},mutations:[]}}("text","element","span","token","punctuation","operator","\n","tag","\u003E","\u003C"," ","prose-paragraph","\n  ","prose-code-inline","\n    ","template","keyword","div","string","\u002F","\u003C\u002F",true,"prose-a","prose-code","filename","pre","line-numbers","code","\u002F\u003E","maybe-class-name","layouts",false,"alert","layout",":","script","module","Master courses","https:\u002F\u002Fmasteringnuxt.com\u002F?utm_source=nuxt&utm_medium=link&utm_campaign=nsite","layouts\u002Fdefault.vue","language-html","Nuxt","{","literal-property","property","'blog'","control-flow","}","=",2,"Learn more with experts","master-courses.svg","bg-green-800","Layouts directory","Layouts are a great help when you want to change the look and feel of your Nuxt app. Whether you want to include a sidebar or have distinct layouts for mobile and desktop.","warning","prose-h3","default-layout","Default Layout","\u003CNuxt\u003E","info","custom-layout","Custom Layout","prose-em","layouts\u002Fblog.vue","language-js","export","default",",","comment","error-page","Error Page","layouts\u002Ferror.vue","h1 v","-","h1","NuxtLink","",3,"Docs","Showcases","\u002Fshowcases","Testimonials","\u002Fdocs","Examples","\u002Fexamples","Tutorials","\u002Ftutorials","Deployments","\u002Fdeployments","Modules","https:\u002F\u002Fmodules.nuxtjs.org","Themes","\u002Fthemes","Announcements","\u002Fannouncements","Teams","\u002Fteams","Releases","\u002Freleases","Sponsors","\u002Fsponsors","\u002Fpartners",null)));