__NUXT_JSONP__("/docs/configuration-glossary/configuration-servermiddleware", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA,aB,aC,aD,aE,aF,aG,aH,aI,aJ,aK,aL,aM,aN,aO,aP,aQ,aR,aS,aT,aU,aV,aW,aX,aY,aZ,a_,a$,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm){return {data:[{page:{key:"content:en:docs:5.configuration-glossary:28.configuration-servermiddleware.md",generatedAt:new Date(1650542428187),mtime:new Date(1650542428172),slug:"configuration-servermiddleware",title:"The serverMiddleware Property",position:"999900050028",to:"\u002Fdocs\u002Fconfiguration-glossary\u002Fconfiguration-servermiddleware",draft:Q,page:M,language:"en",navigation:{title:z},description:aj,menu:z,category:"configuration-glossary",empty:Q,excerpt:void 0,body:{raw:"---\ntitle: The serverMiddleware Property\nnavigation.title: serverMiddleware\ndescription: Define server-side middleware.\nmenu: serverMiddleware\ncategory: configuration-glossary\n---\n# The serverMiddleware property\n\nDefine server-side middleware.\n\n---\n\n- Type: `Array`\n  - Items: `String` or `Object` or `Function`\n\nNuxt internally creates a [connect](https:\u002F\u002Fgithub.com\u002Fsenchalabs\u002Fconnect) instance that you can add your own custom middleware to. This allows us to register additional routes (typically `\u002Fapi` routes) **without need for an external server**.\n\nBecause connect itself is a middleware, registered middleware will work with both `nuxt start` and also when used as a middleware with programmatic usages like [express-template](https:\u002F\u002Fgithub.com\u002Fnuxt-community\u002Fexpress-template). Nuxt [Modules](\u002Fdocs\u002Fdirectory-structure\u002Fmodules) can also provide `serverMiddleware` using [this.addServerMiddleware()](\u002Fdocs\u002Finternals-glossary\u002Finternals-module-container#addservermiddleware-middleware)\n\nAdditional to them, we introduced a `prefix` option which defaults to `true`. It will add the router base to your server middlewares.\n\n**Example:**\n\n- Server middleware path: `\u002Fserver-middleware`\n- Router base: `\u002Fadmin`\n- With `prefix: true` (default): `\u002Fadmin\u002Fserver-middleware`\n- With `prefix: false`: `\u002Fserver-middleware`\n\n## serverMiddleware vs middleware!\n\nDon't confuse it with [routes middleware](\u002Fdocs\u002Fdirectory-structure\u002Fmiddleware) which are called before each route by Vue in Client Side or SSR. Middleware listed in the `serverMiddleware` property runs server-side **before** `vue-server-renderer` and can be used for server specific tasks like handling API requests or serving assets.\n\n::alert{type=\"warning\"}\nDo not add serverMiddleware to the middleware\u002F directory.\n\nMiddleware, are bundled by webpack into your production bundle and run on beforeRouteEnter. If you add serverMiddleware to the middleware\u002F directory it will be wrongly picked up by Nuxt as middleware and will add wrong dependencies to your bundle or generate errors.\n::\n\n## Usage\n\nIf middleware is String Nuxt will try to automatically resolve and require it.\n\n```js{}[nuxt.config.js]\nimport serveStatic from 'serve-static'\n\nexport default {\n  serverMiddleware: [\n    \u002F\u002F Will register redirect-ssl npm package\n    'redirect-ssl',\n\n    \u002F\u002F Will register file from project server-middleware directory to handle \u002Fserver-middleware\u002F* requires\n    { path: '\u002Fserver-middleware', handler: '~\u002Fserver-middleware\u002Findex.js' },\n\n    \u002F\u002F We can create custom instances too\n    { path: '\u002Fstatic2', handler: serveStatic(__dirname + '\u002Fstatic2') }\n  ]\n}\n```\n\n::alert{type=\"warning\"}\nIf you don't want middleware to register for all routes you have to use Object form with specific path, otherwise nuxt default handler won't work!\n::\n\n## Custom Server Middleware\n\nIt is also possible to write custom middleware. For more information See [Connect Docs](https:\u002F\u002Fgithub.com\u002Fsenchalabs\u002Fconnect#appusefn).\n\nMiddleware (`server-middleware\u002Flogger.js`):\n\n```js{}[server-middleware\u002Flogger.js]\nexport default function (req, res, next) {\n  \u002F\u002F req is the Node.js http request object\n  console.log(req.url)\n\n  \u002F\u002F res is the Node.js http response object\n\n  \u002F\u002F next is a function to call to invoke the next middleware\n  \u002F\u002F Don't forget to call next at the end if your middleware is not an endpoint!\n  next()\n}\n```\n\n```js{}[nuxt.config.js]\nserverMiddleware: ['~\u002Fserver-middleware\u002Flogger']\n```\n\n## Custom API endpoint\n\nA server middleware can also extend Express. This allows the creation of REST endpoints.\n\n```js{}[server-middleware\u002Frest.js]\nconst bodyParser = require('body-parser')\nconst app = require('express')()\n\napp.use(bodyParser.json())\napp.all('\u002FgetJSON', (req, res) =\u003E {\n  res.json({ data: 'data' })\n})\n\nmodule.exports = app\n```\n\n```js{}[nuxt.config.js]\nserverMiddleware: [\n  { path: \"\u002Fserver-middleware\", handler: \"~\u002Fserver-middleware\u002Frest.js\" },\n],\n```\n\n## Object Syntax\n\nIf your server middleware consists of a list of functions mapped to paths:\n\n```js\nexport default {\n  serverMiddleware: [\n    { path: '\u002Fa', handler: '~\u002Fserver-middleware\u002Fa.js' },\n    { path: '\u002Fb', handler: '~\u002Fserver-middleware\u002Fb.js' },\n    { path: '\u002Fc', handler: '~\u002Fserver-middleware\u002Fc.js' }\n  ]\n}\n```\n\nYou can alternatively pass an object to define them, as follows:\n\n```js\nexport default {\n  serverMiddleware: {\n    '\u002Fa': '~\u002Fserver-middleware\u002Fa.js',\n    '\u002Fb': '~\u002Fserver-middleware\u002Fb.js',\n    '\u002Fc': '~\u002Fserver-middleware\u002Fc.js'\n  }\n}\n```\n",ast:{type:"root",children:[{type:b,tag:"prose-h1",props:{class:"d-heading-title",id:"the-servermiddleware-property"},children:[{type:a,value:"The serverMiddleware property"}]},{type:a,value:f},{type:b,tag:o,props:{class:"d-heading-description"},children:[{type:a,value:aj}]},{type:a,value:f},{type:b,tag:"prose-hr",props:{class:"d-heading-hr"},children:[]},{type:a,value:f},{type:b,tag:X,props:{},children:[{type:a,value:f},{type:b,tag:J,props:{},children:[{type:a,value:f},{type:a,value:"Type: "},{type:b,tag:l,props:{},children:[{type:a,value:"Array"}]},{type:a,value:f},{type:b,tag:X,props:{},children:[{type:a,value:f},{type:b,tag:J,props:{},children:[{type:a,value:f},{type:a,value:"Items: "},{type:b,tag:l,props:{},children:[{type:a,value:"String"}]},{type:a,value:ak},{type:b,tag:l,props:{},children:[{type:a,value:"Object"}]},{type:a,value:ak},{type:b,tag:l,props:{},children:[{type:a,value:"Function"}]},{type:a,value:f}]},{type:a,value:f}]},{type:a,value:f}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:o,props:{},children:[{type:a,value:"Nuxt internally creates a "},{type:b,tag:u,props:{href:"https:\u002F\u002Fgithub.com\u002Fsenchalabs\u002Fconnect",rel:[Y,Z,_],target:$},children:[{type:a,value:"connect"}]},{type:a,value:" instance that you can add your own custom middleware to. This allows us to register additional routes (typically "},{type:b,tag:l,props:{},children:[{type:a,value:"\u002Fapi"}]},{type:a,value:" routes) "},{type:b,tag:aa,props:{},children:[{type:a,value:"without need for an external server"}]},{type:a,value:A}]},{type:a,value:f},{type:b,tag:o,props:{},children:[{type:a,value:"Because connect itself is a middleware, registered middleware will work with both "},{type:b,tag:l,props:{},children:[{type:a,value:"nuxt start"}]},{type:a,value:" and also when used as a middleware with programmatic usages like "},{type:b,tag:u,props:{href:"https:\u002F\u002Fgithub.com\u002Fnuxt-community\u002Fexpress-template",rel:[Y,Z,_],target:$},children:[{type:a,value:"express-template"}]},{type:a,value:". Nuxt "},{type:b,tag:u,props:{href:"\u002Fdocs\u002Fdirectory-structure\u002Fmodules"},children:[{type:a,value:ab}]},{type:a,value:" can also provide "},{type:b,tag:l,props:{},children:[{type:a,value:z}]},{type:a,value:" using "},{type:b,tag:u,props:{href:"\u002Fdocs\u002Finternals-glossary\u002Finternals-module-container#addservermiddleware-middleware"},children:[{type:a,value:"this.addServerMiddleware()"}]}]},{type:a,value:f},{type:b,tag:o,props:{},children:[{type:a,value:"Additional to them, we introduced a "},{type:b,tag:l,props:{},children:[{type:a,value:"prefix"}]},{type:a,value:" option which defaults to "},{type:b,tag:l,props:{},children:[{type:a,value:"true"}]},{type:a,value:". It will add the router base to your server middlewares."}]},{type:a,value:f},{type:b,tag:o,props:{},children:[{type:b,tag:aa,props:{},children:[{type:a,value:"Example:"}]}]},{type:a,value:f},{type:b,tag:X,props:{},children:[{type:a,value:f},{type:b,tag:J,props:{},children:[{type:a,value:f},{type:a,value:"Server middleware path: "},{type:b,tag:l,props:{},children:[{type:a,value:al}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:J,props:{},children:[{type:a,value:f},{type:a,value:"Router base: "},{type:b,tag:l,props:{},children:[{type:a,value:"\u002Fadmin"}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:J,props:{},children:[{type:a,value:f},{type:a,value:am},{type:b,tag:l,props:{},children:[{type:a,value:"prefix: true"}]},{type:a,value:" (default): "},{type:b,tag:l,props:{},children:[{type:a,value:"\u002Fadmin\u002Fserver-middleware"}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:J,props:{},children:[{type:a,value:f},{type:a,value:am},{type:b,tag:l,props:{},children:[{type:a,value:"prefix: false"}]},{type:a,value:": "},{type:b,tag:l,props:{},children:[{type:a,value:al}]},{type:a,value:f}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:N,props:{id:an},children:[{type:b,tag:u,props:{href:"#servermiddleware-vs-middleware"},children:[{type:a,value:ao}]}]},{type:a,value:f},{type:b,tag:o,props:{},children:[{type:a,value:"Don't confuse it with "},{type:b,tag:u,props:{href:"\u002Fdocs\u002Fdirectory-structure\u002Fmiddleware"},children:[{type:a,value:"routes middleware"}]},{type:a,value:" which are called before each route by Vue in Client Side or SSR. Middleware listed in the "},{type:b,tag:l,props:{},children:[{type:a,value:z}]},{type:a,value:" property runs server-side "},{type:b,tag:aa,props:{},children:[{type:a,value:"before"}]},{type:a,value:g},{type:b,tag:l,props:{},children:[{type:a,value:"vue-server-renderer"}]},{type:a,value:" and can be used for server specific tasks like handling API requests or serving assets."}]},{type:a,value:f},{type:b,tag:ap,props:{type:aq},children:[{type:b,tag:o,props:{},children:[{type:a,value:"Do not add serverMiddleware to the middleware\u002F directory."}]},{type:b,tag:o,props:{},children:[{type:a,value:"Middleware, are bundled by webpack into your production bundle and run on beforeRouteEnter. If you add serverMiddleware to the middleware\u002F directory it will be wrongly picked up by Nuxt as middleware and will add wrong dependencies to your bundle or generate errors."}]}]},{type:a,value:f},{type:b,tag:N,props:{id:ar},children:[{type:b,tag:u,props:{href:"#usage"},children:[{type:a,value:as}]}]},{type:a,value:f},{type:b,tag:o,props:{},children:[{type:a,value:"If middleware is String Nuxt will try to automatically resolve and require it."}]},{type:a,value:f},{type:b,tag:B,props:{},children:[{type:b,tag:c,props:{className:[O]},children:[{type:a,value:ac}]},{type:b,tag:C,props:{className:[D,E]},children:[{type:b,tag:F,props:{},children:[{type:b,tag:c,props:{className:[d,p,w]},children:[{type:a,value:"import"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,"imports"]},children:[{type:a,value:at}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,p,w]},children:[{type:a,value:"from"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"'serve-static'"}]},{type:a,value:"\n\n"},{type:b,tag:c,props:{className:[d,p,w]},children:[{type:a,value:R}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,p,w]},children:[{type:a,value:S}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,m,j]},children:[{type:a,value:z}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:k}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:T}]},{type:a,value:x},{type:b,tag:c,props:{className:[d,G]},children:[{type:a,value:"\u002F\u002F Will register redirect-ssl npm package"}]},{type:a,value:x},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"'redirect-ssl'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:au},{type:b,tag:c,props:{className:[d,G]},children:[{type:a,value:"\u002F\u002F Will register file from project server-middleware directory to handle \u002Fserver-middleware\u002F* requires"}]},{type:a,value:x},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,m,j]},children:[{type:a,value:K}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:k}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"'\u002Fserver-middleware'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,m,j]},children:[{type:a,value:L}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:k}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"'~\u002Fserver-middleware\u002Findex.js'"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:au},{type:b,tag:c,props:{className:[d,G]},children:[{type:a,value:"\u002F\u002F We can create custom instances too"}]},{type:a,value:x},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,m,j]},children:[{type:a,value:K}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:k}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:av}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,m,j]},children:[{type:a,value:L}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:k}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,y]},children:[{type:a,value:at}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:"__dirname "},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"+"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:av}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:U}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:ap,props:{type:aq},children:[{type:b,tag:o,props:{},children:[{type:a,value:"If you don't want middleware to register for all routes you have to use Object form with specific path, otherwise nuxt default handler won't work!"}]}]},{type:a,value:f},{type:b,tag:N,props:{id:aw},children:[{type:b,tag:u,props:{href:"#custom-server-middleware"},children:[{type:a,value:ax}]}]},{type:a,value:f},{type:b,tag:o,props:{},children:[{type:a,value:"It is also possible to write custom middleware. For more information See "},{type:b,tag:u,props:{href:"https:\u002F\u002Fgithub.com\u002Fsenchalabs\u002Fconnect#appusefn",rel:[Y,Z,_],target:$},children:[{type:a,value:"Connect Docs"}]},{type:a,value:A}]},{type:a,value:f},{type:b,tag:o,props:{},children:[{type:a,value:"Middleware ("},{type:b,tag:l,props:{},children:[{type:a,value:ay}]},{type:a,value:"):"}]},{type:a,value:f},{type:b,tag:B,props:{},children:[{type:b,tag:c,props:{className:[O]},children:[{type:a,value:ay}]},{type:b,tag:C,props:{className:[D,E]},children:[{type:b,tag:F,props:{},children:[{type:b,tag:c,props:{className:[d,p,w]},children:[{type:a,value:R}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,p,w]},children:[{type:a,value:S}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:y}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,az]},children:[{type:a,value:ad},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:aA},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:" next"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,G]},children:[{type:a,value:"\u002F\u002F req is the Node.js http request object"}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,aB,"class-name"]},children:[{type:a,value:aB}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:A}]},{type:b,tag:c,props:{className:[d,P,y,H]},children:[{type:a,value:"log"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:ad},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:A}]},{type:b,tag:c,props:{className:[d,H]},children:[{type:a,value:"url"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:aC},{type:b,tag:c,props:{className:[d,G]},children:[{type:a,value:"\u002F\u002F res is the Node.js http response object"}]},{type:a,value:aC},{type:b,tag:c,props:{className:[d,G]},children:[{type:a,value:"\u002F\u002F next is a function to call to invoke the next middleware"}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,G]},children:[{type:a,value:"\u002F\u002F Don't forget to call next at the end if your middleware is not an endpoint!"}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,y]},children:[{type:a,value:"next"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:B,props:{},children:[{type:b,tag:c,props:{className:[O]},children:[{type:a,value:ac}]},{type:b,tag:C,props:{className:[D,E]},children:[{type:b,tag:F,props:{},children:[{type:b,tag:c,props:{className:[d,m,j]},children:[{type:a,value:z}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:k}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:T}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"'~\u002Fserver-middleware\u002Flogger'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:U}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:N,props:{id:aD},children:[{type:b,tag:u,props:{href:"#custom-api-endpoint"},children:[{type:a,value:aE}]}]},{type:a,value:f},{type:b,tag:o,props:{},children:[{type:a,value:"A server middleware can also extend Express. This allows the creation of REST endpoints."}]},{type:a,value:f},{type:b,tag:B,props:{},children:[{type:b,tag:c,props:{className:[O]},children:[{type:a,value:"server-middleware\u002Frest.js"}]},{type:b,tag:C,props:{className:[D,E]},children:[{type:b,tag:F,props:{},children:[{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:aF}]},{type:a,value:" bodyParser "},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:ae}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,y]},children:[{type:a,value:aG}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"'body-parser'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:aF}]},{type:a,value:" app "},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:ae}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,y]},children:[{type:a,value:aG}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"'express'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:"\n\napp"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:A}]},{type:b,tag:c,props:{className:[d,P,y,H]},children:[{type:a,value:"use"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:"bodyParser"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:A}]},{type:b,tag:c,props:{className:[d,P,y,H]},children:[{type:a,value:aH}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:"\napp"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:A}]},{type:b,tag:c,props:{className:[d,P,y,H]},children:[{type:a,value:"all"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"'\u002FgetJSON'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,az]},children:[{type:a,value:ad},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:aA}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,"arrow",h]},children:[{type:a,value:"=\u003E"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:"\n  res"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:A}]},{type:b,tag:c,props:{className:[d,P,y,H]},children:[{type:a,value:aH}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,m,j]},children:[{type:a,value:"data"}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:k}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"'data'"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:"\n\nmodule"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:A}]},{type:b,tag:c,props:{className:[d,H]},children:[{type:a,value:"exports"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:ae}]},{type:a,value:" app\n"}]}]}]},{type:a,value:f},{type:b,tag:B,props:{},children:[{type:b,tag:c,props:{className:[O]},children:[{type:a,value:ac}]},{type:b,tag:C,props:{className:[D,E]},children:[{type:b,tag:F,props:{},children:[{type:b,tag:c,props:{className:[d,m,j]},children:[{type:a,value:z}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:k}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:T}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,m,j]},children:[{type:a,value:K}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:k}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"\"\u002Fserver-middleware\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,m,j]},children:[{type:a,value:L}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:k}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"\"~\u002Fserver-middleware\u002Frest.js\""}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:U}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:N,props:{id:aI},children:[{type:b,tag:u,props:{href:"#object-syntax"},children:[{type:a,value:aJ}]}]},{type:a,value:f},{type:b,tag:o,props:{},children:[{type:a,value:"If your server middleware consists of a list of functions mapped to paths:"}]},{type:a,value:f},{type:b,tag:B,props:{},children:[{type:b,tag:C,props:{className:[D,E]},children:[{type:b,tag:F,props:{},children:[{type:b,tag:c,props:{className:[d,p,w]},children:[{type:a,value:R}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,p,w]},children:[{type:a,value:S}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,m,j]},children:[{type:a,value:z}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:k}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:T}]},{type:a,value:x},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,m,j]},children:[{type:a,value:K}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:k}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:aK}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,m,j]},children:[{type:a,value:L}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:k}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:aL}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:x},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,m,j]},children:[{type:a,value:K}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:k}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:aM}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,m,j]},children:[{type:a,value:L}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:k}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:aN}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:x},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,m,j]},children:[{type:a,value:K}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:k}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:aO}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,m,j]},children:[{type:a,value:L}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:k}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:aP}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:U}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:o,props:{},children:[{type:a,value:"You can alternatively pass an object to define them, as follows:"}]},{type:a,value:f},{type:b,tag:B,props:{},children:[{type:b,tag:C,props:{className:[D,E]},children:[{type:b,tag:F,props:{},children:[{type:b,tag:c,props:{className:[d,p,w]},children:[{type:a,value:R}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,p,w]},children:[{type:a,value:S}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,m,j]},children:[{type:a,value:z}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:k}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:x},{type:b,tag:c,props:{className:[d,af,j]},children:[{type:a,value:aK}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:k}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:aL}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:x},{type:b,tag:c,props:{className:[d,af,j]},children:[{type:a,value:aM}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:k}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:aN}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:x},{type:b,tag:c,props:{className:[d,af,j]},children:[{type:a,value:aO}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:k}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:aP}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:f}]}]}]}]},toc:{title:aQ,searchDepth:I,depth:I,links:[{id:an,depth:I,text:ao},{id:ar,depth:I,text:as},{id:aw,depth:I,text:ax},{id:aD,depth:I,text:aE},{id:aI,depth:I,text:aJ}]}},template:aR},templateOptions:{header:M,footer:M,aside:M,asideClass:aQ,fluid:Q,banner:M},_img:{}}],fetch:{"0":{headerLinks:[{title:"Discover",items:[{title:aS,subtitle:"Selection of websites built with Nuxt",slug:"showcases",to:aT,icon:"showcases.svg",color:"bg-sand"},{title:"Case studies",subtitle:"How companies use Nuxt",slug:"case-studies",to:"\u002Fcase-studies",icon:"case-studies.svg",color:"bg-sand-dark"},{title:aU,subtitle:"What they think about us",slug:"testimonials",to:"\u002Ftestimonials",icon:"testimonials.svg",color:"bg-sand-darker"}]},{title:"Learn",items:[{title:aR,subtitle:"Create fast websites easily",slug:"docs",to:aV,icon:"docs.svg",color:"bg-green-500"},{title:aW,subtitle:"Understand everything in Nuxt",slug:"examples",to:aX,icon:"examples.svg",color:"bg-green-600"},{title:aY,subtitle:"Learn with concrete cases",slug:"tutorials",to:aZ,icon:"tutorials.svg",color:"bg-green-700"},{title:V,subtitle:ag,href:W,icon:ah,color:ai}]},{title:"Explore",items:[{title:a_,subtitle:"How to Deploy Nuxt",slug:"deployments",to:a$,icon:"deployments.svg",color:"bg-indigo-light"},{title:ab,subtitle:"Extend the power of Nuxt",href:ba,icon:"modules.svg",color:"bg-indigo"},{title:bb,subtitle:"Get started with themes",slug:"themes",to:bc,icon:"themes.svg",color:"bg-indigo-dark"},{title:"Video Courses",subtitle:"Learn step by step",slug:"video-courses",to:"\u002Fvideo-courses",icon:"video-courses.svg",color:"bg-indigo-darker"}]},{title:"Community",items:[{title:bd,subtitle:"Latest news about Nuxt",slug:"announcements",to:be,icon:"announcements.svg",color:"bg-mint-lighter"},{title:bf,subtitle:"They are Nuxt",slug:"teams",to:bg,icon:"teams.svg",color:"bg-mint-light"},{title:bh,subtitle:"All the code we have released",slug:"releases",to:bi,icon:"releases.svg",color:"bg-mint"},{title:bj,subtitle:"They trust us",slug:"sponsors",to:bk,icon:"sponsors.svg",color:"bg-mint-dark"}]},{title:"Partners",slug:"partners",to:bl}],footerLinks:[{title:"About",items:[{title:"Contact us",href:"mailto:hello@nuxtjs.com"},{title:"Enterprise support",to:"\u002Fsupport"},{title:"NuxtLabs company",href:"https:\u002F\u002Fnuxtlabs.com\u002F"},{title:"Open Source Software",href:"https:\u002F\u002Fgithub.com\u002Fnuxt"},{title:"Partnerships",to:bl},{title:"Telemetry",href:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Ftelemetry"}]},{title:"Ecosystem",items:[{title:bd,to:be},{title:"Contribute",to:"\u002Fcontribution-guide"},{title:"Chat with us",href:"https:\u002F\u002Fdiscord.nuxtjs.org\u002F"},{title:"Events",to:"\u002Fevents"},{title:bj,to:bk},{title:bf,to:bg},{title:aY,to:aZ},{title:"Video courses",to:"\u002Fvideo-courses\u002F"}]},{title:"Resources",items:[{title:"Design",to:"\u002Fdesign"},{title:"Documentation",to:aV},{title:aW,to:aX},{title:a_,to:a$},{title:V,href:W},{title:ab,href:ba},{title:bh,to:bi},{title:aS,to:aT},{title:bb,to:bc}]}],showCookieBanner:Q},"1":{lastRelease:bm,masterCoursesLink:{title:V,subtitle:ag,href:W,icon:ah,color:ai}},"2":{lastRelease:bm,masterCoursesLink:{title:V,subtitle:ag,href:W,icon:ah,color:ai}},"3":{repoUrl:"https:\u002F\u002Fgithub.com\u002Fsee\u002Fpangu",prev:{slug:"configuration-server",to:"\u002Fdocs\u002Fconfiguration-glossary\u002Fconfiguration-server",title:"The server Property"},next:{slug:"configuration-srcdir",to:"\u002Fdocs\u002Fconfiguration-glossary\u002Fconfiguration-srcdir",title:"The srcDir Property"}},"4":{_error:{name:"FetchError",message:"500 Internal Server Error (https:\u002F\u002Fapi.nuxtjs.org\u002Fapi\u002Fgithub\u002Fcontributors\u002Fsee\u002Fpangu\u002Fmain\u002Fcontent\u002F)",statusCode:500}},_lazyComponents:new Set(["ProseParagraph","AppButton","HomeHero","HomeLearnMaster","SectionContentItem","HomeFeatures","ProseEm","HomePartnersCard","HomeDiscoverPartners","HomeLearnGuides","HomeExplore","HomeCommunity",aU,"HomeTestimonials","ProseA","ShowcasesBottomHero","PageHero","ShowcasesListing","ThemesList","VideoCoursesList","TeamSection","SponsorsBottomHero","SustainabilitySection","PartnersBottomHero","PartnersSection","ProseH1","ProseHr","ProseH2","ProseLi","ProseUl","ProseCode","CodeGroup","Alert","ProseH3","ProseCodeInline","ProseStrong","ProseH4","VideoPlayer","BarChartCacheBuild","ProseOl","SupportCard","SupportContainer","ProseBlockquote","DesignHero","DesignLogos","DesignSection","DesignColors","DesignTypography","DesignSections","ProseImg","ProseTh","ProseTr","ProseThead","ProseTd","ProseTbody","ProseTable"])},mutations:[]}}("text","element","span","token","punctuation","\n"," ","operator","string","property",":","prose-code-inline","literal-property",",","prose-paragraph","keyword","{","}","(",")","prose-a","\n  ","module","\n    ","function","serverMiddleware",".","prose-code","pre","language-js","line-numbers","code","comment","property-access",2,"prose-li","path","handler",true,"prose-h2","filename","method",false,"export","default","[","]","Master courses","https:\u002F\u002Fmasteringnuxt.com\u002F?utm_source=nuxt&utm_medium=link&utm_campaign=nsite","prose-ul","nofollow","noopener","noreferrer","_blank","prose-strong","Modules","nuxt.config.js","req","=","string-property","Learn more with experts","master-courses.svg","bg-green-800","Define server-side middleware."," or ","\u002Fserver-middleware","With ","servermiddleware-vs-middleware","serverMiddleware vs middleware!","alert","warning","usage","Usage","serveStatic","\n\n    ","'\u002Fstatic2'","custom-server-middleware","Custom Server Middleware","server-middleware\u002Flogger.js","parameter"," res","console","\n\n  ","custom-api-endpoint","Custom API endpoint","const","require","json","object-syntax","Object Syntax","'\u002Fa'","'~\u002Fserver-middleware\u002Fa.js'","'\u002Fb'","'~\u002Fserver-middleware\u002Fb.js'","'\u002Fc'","'~\u002Fserver-middleware\u002Fc.js'","","Docs","Showcases","\u002Fshowcases","Testimonials","\u002Fdocs","Examples","\u002Fexamples","Tutorials","\u002Ftutorials","Deployments","\u002Fdeployments","https:\u002F\u002Fmodules.nuxtjs.org","Themes","\u002Fthemes","Announcements","\u002Fannouncements","Teams","\u002Fteams","Releases","\u002Freleases","Sponsors","\u002Fsponsors","\u002Fpartners",null)));