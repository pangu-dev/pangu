__NUXT_JSONP__("/docs/internals-glossary/$nuxt", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA,aB,aC,aD,aE,aF,aG,aH,aI,aJ,aK,aL,aM,aN,aO,aP,aQ,aR,aS,aT,aU,aV,aW){return {data:[{page:{key:"content:en:docs:6.internals-glossary:2.$nuxt.md",generatedAt:new Date(1650542409744),mtime:new Date(1650542409735),slug:D,title:Y,position:"999900060002",to:"\u002Fdocs\u002Finternals-glossary\u002F$nuxt",draft:E,page:z,language:"en",description:Z,category:"internals-glossary",empty:E,excerpt:void 0,body:{raw:"---\ntitle: '$nuxt: The Nuxt helper'\ndescription: $nuxt is a helper designed to improve user experience.\ncategory: internals-glossary\n---\n# $nuxt: The Nuxt helper\n\n$nuxt is a helper designed to improve user experience.\n\n---\n\n\u003E For more info on the Nuxt helper check out the [context and helpers chapter in the Concepts book](\u002Fdocs\u002Fconcepts\u002Fcontext-helpers#nuxt-the-nuxtjs-helper)\n\n## Connection checker\n\n- `isOffline`\n  - Type: `Boolean`\n  - Description: `true` when the user's internet connection becomes offline\n- `isOnline`\n  - Type: `Boolean`\n  - Description: Opposite of `isOffline`\n\n```html{}[layouts\u002Fdefault.vue]\n\u003Ctemplate\u003E\n  \u003Cdiv\u003E\n    \u003Cdiv v-if=\"$nuxt.isOffline\"\u003EYou are offline\u003C\u002Fdiv\u003E\n    \u003Cnuxt \u002F\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Ftemplate\u003E\n```\n\n## Refreshing page data\n\n- `refresh()`\n  - When you want to only refresh the data provided by asyncData or fetch\n\n```html{}[example.vue]\n\u003Ctemplate\u003E\n  \u003Cdiv\u003E\n    \u003Cdiv\u003E{{ content }}\u003C\u002Fdiv\u003E\n    \u003Cbutton @click=\"refresh\"\u003ERefresh\u003C\u002Fbutton\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Ftemplate\u003E\n\n\u003Cscript\u003E\n  export default {\n    asyncData() {\n      return { content: 'Created at: ' + new Date() }\n    },\n    methods: {\n      refresh() {\n        this.$nuxt.refresh()\n      }\n    }\n  }\n\u003C\u002Fscript\u003E\n```\n\n## Controlling the loading bar\n\n- `$loading`\n  - When you want to control Nuxt's loading bar programmatically\n\n```js{}[]\nexport default {\n  mounted() {\n    this.$nextTick(() =\u003E {\n      this.$nuxt.$loading.start()\n      setTimeout(() =\u003E this.$nuxt.$loading.finish(), 500)\n    })\n  }\n}\n```\n",ast:{type:"root",children:[{type:b,tag:"prose-h1",props:{class:"d-heading-title",id:"nuxt-the-nuxt-helper"},children:[{type:a,value:Y}]},{type:a,value:f},{type:b,tag:_,props:{class:"d-heading-description"},children:[{type:a,value:Z}]},{type:a,value:f},{type:b,tag:"prose-hr",props:{class:"d-heading-hr"},children:[]},{type:a,value:f},{type:b,tag:"prose-blockquote",props:{},children:[{type:a,value:f},{type:b,tag:_,props:{},children:[{type:a,value:"For more info on the Nuxt helper check out the "},{type:b,tag:F,props:{href:"\u002Fdocs\u002Fconcepts\u002Fcontext-helpers#nuxt-the-nuxtjs-helper"},children:[{type:a,value:"context and helpers chapter in the Concepts book"}]}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:N,props:{id:$},children:[{type:b,tag:F,props:{href:"#connection-checker"},children:[{type:a,value:aa}]}]},{type:a,value:f},{type:b,tag:y,props:{},children:[{type:a,value:f},{type:b,tag:l,props:{},children:[{type:a,value:f},{type:b,tag:r,props:{},children:[{type:a,value:ab}]},{type:a,value:f},{type:b,tag:y,props:{},children:[{type:a,value:f},{type:b,tag:l,props:{},children:[{type:a,value:f},{type:a,value:ac},{type:b,tag:r,props:{},children:[{type:a,value:ad}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:l,props:{},children:[{type:a,value:f},{type:a,value:"Description: "},{type:b,tag:r,props:{},children:[{type:a,value:"true"}]},{type:a,value:" when the user's internet connection becomes offline"},{type:a,value:f}]},{type:a,value:f}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:l,props:{},children:[{type:a,value:f},{type:b,tag:r,props:{},children:[{type:a,value:"isOnline"}]},{type:a,value:f},{type:b,tag:y,props:{},children:[{type:a,value:f},{type:b,tag:l,props:{},children:[{type:a,value:f},{type:a,value:ac},{type:b,tag:r,props:{},children:[{type:a,value:ad}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:l,props:{},children:[{type:a,value:f},{type:a,value:"Description: Opposite of "},{type:b,tag:r,props:{},children:[{type:a,value:ab}]},{type:a,value:f}]},{type:a,value:f}]},{type:a,value:f}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:O,props:{},children:[{type:b,tag:c,props:{className:[ae]},children:[{type:a,value:"layouts\u002Fdefault.vue"}]},{type:b,tag:P,props:{className:[Q,af]},children:[{type:b,tag:R,props:{},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:G}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:t}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:t}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,ag]},children:[{type:a,value:"v-if"}]},{type:b,tag:c,props:{className:[d,ah]},children:[{type:b,tag:c,props:{className:[d,e,ai]},children:[{type:a,value:aj}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:H}]},{type:a,value:"$nuxt.isOffline"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:H}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]}]},{type:a,value:"You are offline"},{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:a,value:t}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:"nuxt"}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"\u002F\u003E"}]}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:a,value:t}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:a,value:G}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:N,props:{id:ak},children:[{type:b,tag:F,props:{href:"#refreshing-page-data"},children:[{type:a,value:al}]}]},{type:a,value:f},{type:b,tag:y,props:{},children:[{type:a,value:f},{type:b,tag:l,props:{},children:[{type:a,value:f},{type:b,tag:r,props:{},children:[{type:a,value:"refresh()"}]},{type:a,value:f},{type:b,tag:y,props:{},children:[{type:a,value:f},{type:b,tag:l,props:{},children:[{type:a,value:f},{type:a,value:"When you want to only refresh the data provided by asyncData or fetch"},{type:a,value:f}]},{type:a,value:f}]},{type:a,value:f}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:O,props:{},children:[{type:b,tag:c,props:{className:[ae]},children:[{type:a,value:"example.vue"}]},{type:b,tag:P,props:{className:[Q,af]},children:[{type:b,tag:R,props:{},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:G}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:t}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:t}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]}]},{type:a,value:"{{ content }}"},{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:a,value:t}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:am}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,ag]},children:[{type:a,value:"@click"}]},{type:b,tag:c,props:{className:[d,ah]},children:[{type:b,tag:c,props:{className:[d,e,ai]},children:[{type:a,value:aj}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:H}]},{type:a,value:S},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:H}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]}]},{type:a,value:"Refresh"},{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:a,value:am}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:a,value:t}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:a,value:G}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]}]},{type:a,value:"\n\n"},{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:T}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]}]},{type:b,tag:c,props:{className:[d,T]},children:[{type:b,tag:c,props:{className:[d,"language-javascript"]},children:[{type:a,value:s},{type:b,tag:c,props:{className:[d,n,I]},children:[{type:a,value:an}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,n,I]},children:[{type:a,value:ao}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,w]},children:[{type:a,value:"asyncData"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:a,value:A},{type:b,tag:c,props:{className:[d,n,"control-flow"]},children:[{type:a,value:"return"}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,ap,aq]},children:[{type:a,value:"content"}]},{type:b,tag:c,props:{className:[d,B]},children:[{type:a,value:ar}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,"string"]},children:[{type:a,value:"'Created at: '"}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,B]},children:[{type:a,value:"+"}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:"new"}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,"class-name"]},children:[{type:a,value:"Date"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:x}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:x}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:as}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,ap,aq]},children:[{type:a,value:"methods"}]},{type:b,tag:c,props:{className:[d,B]},children:[{type:a,value:ar}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:a,value:A},{type:b,tag:c,props:{className:[d,w]},children:[{type:a,value:S}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:a,value:"\n        "},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:J}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:D}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,K,w,q]},children:[{type:a,value:S}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:A},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:x}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:x}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:x}]},{type:a,value:f}]}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:a,value:T}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:N,props:{id:at},children:[{type:b,tag:F,props:{href:"#controlling-the-loading-bar"},children:[{type:a,value:au}]}]},{type:a,value:f},{type:b,tag:y,props:{},children:[{type:a,value:f},{type:b,tag:l,props:{},children:[{type:a,value:f},{type:b,tag:r,props:{},children:[{type:a,value:U}]},{type:a,value:f},{type:b,tag:y,props:{},children:[{type:a,value:f},{type:b,tag:l,props:{},children:[{type:a,value:f},{type:a,value:"When you want to control Nuxt's loading bar programmatically"},{type:a,value:f}]},{type:a,value:f}]},{type:a,value:f}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:O,props:{},children:[{type:b,tag:P,props:{className:[Q,"language-js"]},children:[{type:b,tag:R,props:{},children:[{type:b,tag:c,props:{className:[d,n,I]},children:[{type:a,value:an}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,n,I]},children:[{type:a,value:ao}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,w]},children:[{type:a,value:"mounted"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:J}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,K,w,q]},children:[{type:a,value:"$nextTick"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,av,B]},children:[{type:a,value:aw}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:a,value:A},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:J}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:D}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:U}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,K,w,q]},children:[{type:a,value:"start"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:A},{type:b,tag:c,props:{className:[d,w]},children:[{type:a,value:"setTimeout"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,av,B]},children:[{type:a,value:aw}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:J}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:D}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:U}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,K,w,q]},children:[{type:a,value:"finish"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:as}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,"number"]},children:[{type:a,value:"500"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:x}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:x}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:x}]},{type:a,value:f}]}]}]}]},toc:{title:ax,searchDepth:C,depth:C,links:[{id:$,depth:C,text:aa},{id:ak,depth:C,text:al},{id:at,depth:C,text:au}]}},template:ay},templateOptions:{header:z,footer:z,aside:z,asideClass:ax,fluid:E,banner:z},_img:{}}],fetch:{"0":{headerLinks:[{title:"Discover",items:[{title:az,subtitle:"Selection of websites built with Nuxt",slug:"showcases",to:aA,icon:"showcases.svg",color:"bg-sand"},{title:"Case studies",subtitle:"How companies use Nuxt",slug:"case-studies",to:"\u002Fcase-studies",icon:"case-studies.svg",color:"bg-sand-dark"},{title:aB,subtitle:"What they think about us",slug:"testimonials",to:"\u002Ftestimonials",icon:"testimonials.svg",color:"bg-sand-darker"}]},{title:"Learn",items:[{title:ay,subtitle:"Create fast websites easily",slug:"docs",to:aC,icon:"docs.svg",color:"bg-green-500"},{title:aD,subtitle:"Understand everything in Nuxt",slug:"examples",to:aE,icon:"examples.svg",color:"bg-green-600"},{title:aF,subtitle:"Learn with concrete cases",slug:"tutorials",to:aG,icon:"tutorials.svg",color:"bg-green-700"},{title:L,subtitle:V,href:M,icon:W,color:X}]},{title:"Explore",items:[{title:aH,subtitle:"How to Deploy Nuxt",slug:"deployments",to:aI,icon:"deployments.svg",color:"bg-indigo-light"},{title:aJ,subtitle:"Extend the power of Nuxt",href:aK,icon:"modules.svg",color:"bg-indigo"},{title:aL,subtitle:"Get started with themes",slug:"themes",to:aM,icon:"themes.svg",color:"bg-indigo-dark"},{title:"Video Courses",subtitle:"Learn step by step",slug:"video-courses",to:"\u002Fvideo-courses",icon:"video-courses.svg",color:"bg-indigo-darker"}]},{title:"Community",items:[{title:aN,subtitle:"Latest news about Nuxt",slug:"announcements",to:aO,icon:"announcements.svg",color:"bg-mint-lighter"},{title:aP,subtitle:"They are Nuxt",slug:"teams",to:aQ,icon:"teams.svg",color:"bg-mint-light"},{title:aR,subtitle:"All the code we have released",slug:"releases",to:aS,icon:"releases.svg",color:"bg-mint"},{title:aT,subtitle:"They trust us",slug:"sponsors",to:aU,icon:"sponsors.svg",color:"bg-mint-dark"}]},{title:"Partners",slug:"partners",to:aV}],footerLinks:[{title:"About",items:[{title:"Contact us",href:"mailto:hello@nuxtjs.com"},{title:"Enterprise support",to:"\u002Fsupport"},{title:"NuxtLabs company",href:"https:\u002F\u002Fnuxtlabs.com\u002F"},{title:"Open Source Software",href:"https:\u002F\u002Fgithub.com\u002Fnuxt"},{title:"Partnerships",to:aV},{title:"Telemetry",href:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Ftelemetry"}]},{title:"Ecosystem",items:[{title:aN,to:aO},{title:"Contribute",to:"\u002Fcontribution-guide"},{title:"Chat with us",href:"https:\u002F\u002Fdiscord.nuxtjs.org\u002F"},{title:"Events",to:"\u002Fevents"},{title:aT,to:aU},{title:aP,to:aQ},{title:aF,to:aG},{title:"Video courses",to:"\u002Fvideo-courses\u002F"}]},{title:"Resources",items:[{title:"Design",to:"\u002Fdesign"},{title:"Documentation",to:aC},{title:aD,to:aE},{title:aH,to:aI},{title:L,href:M},{title:aJ,href:aK},{title:aR,to:aS},{title:az,to:aA},{title:aL,to:aM}]}],showCookieBanner:E},"1":{lastRelease:aW,masterCoursesLink:{title:L,subtitle:V,href:M,icon:W,color:X}},"2":{lastRelease:aW,masterCoursesLink:{title:L,subtitle:V,href:M,icon:W,color:X}},"3":{repoUrl:"https:\u002F\u002Fgithub.com\u002Fsee\u002Fpangu",prev:{slug:"customize-nuxt-loading",to:"\u002Fexamples\u002Floading\u002Fcustomize-nuxt-loading",title:"Customize Nuxt Loading"},next:{slug:"customize-loading-indicator",to:"\u002Fexamples\u002Floading\u002Fcustomize-loading-indicator",title:"Customize Nuxt Loading Indicator"}},"4":{_error:{name:"FetchError",message:"500 Internal Server Error (https:\u002F\u002Fapi.nuxtjs.org\u002Fapi\u002Fgithub\u002Fcontributors\u002Fsee\u002Fpangu\u002Fmain\u002Fcontent\u002F)",statusCode:500}},_lazyComponents:new Set(["ProseParagraph","AppButton","HomeHero","HomeLearnMaster","SectionContentItem","HomeFeatures","ProseEm","HomePartnersCard","HomeDiscoverPartners","HomeLearnGuides","HomeExplore","HomeCommunity",aB,"HomeTestimonials","ProseA","ShowcasesBottomHero","PageHero","ShowcasesListing","ThemesList","VideoCoursesList","TeamSection","SponsorsBottomHero","SustainabilitySection","PartnersBottomHero","PartnersSection","ProseH1","ProseHr","ProseH2","ProseLi","ProseUl","ProseCode","CodeGroup","Alert","ProseH3","ProseCodeInline","ProseStrong","ProseH4","VideoPlayer","BarChartCacheBuild","ProseOl","SupportCard","SupportContainer","ProseBlockquote","DesignHero","DesignLogos","DesignSection","DesignColors","DesignTypography","DesignSections","ProseImg","ProseTh","ProseTr","ProseThead","ProseTd","ProseTbody","ProseTable"])},mutations:[]}}("text","element","span","token","punctuation","\n","tag"," ","\u003E","(",")","prose-li","\n    ","keyword","\u003C",".","property-access","prose-code-inline","\n  ","div","\u003C\u002F","{","function","}","prose-ul",true,"\n      ","operator",2,"$nuxt",false,"prose-a","template","\"","module","this","method","Master courses","https:\u002F\u002Fmasteringnuxt.com\u002F?utm_source=nuxt&utm_medium=link&utm_campaign=nsite","prose-h2","prose-code","pre","line-numbers","code","refresh","script","$loading","Learn more with experts","master-courses.svg","bg-green-800","$nuxt: The Nuxt helper","$nuxt is a helper designed to improve user experience.","prose-paragraph","connection-checker","Connection checker","isOffline","Type: ","Boolean","filename","language-html","attr-name","attr-value","attr-equals","=","refreshing-page-data","Refreshing page data","button","export","default","literal-property","property",":",",","controlling-the-loading-bar","Controlling the loading bar","arrow","=\u003E","","Docs","Showcases","\u002Fshowcases","Testimonials","\u002Fdocs","Examples","\u002Fexamples","Tutorials","\u002Ftutorials","Deployments","\u002Fdeployments","Modules","https:\u002F\u002Fmodules.nuxtjs.org","Themes","\u002Fthemes","Announcements","\u002Fannouncements","Teams","\u002Fteams","Releases","\u002Freleases","Sponsors","\u002Fsponsors","\u002Fpartners",null)));