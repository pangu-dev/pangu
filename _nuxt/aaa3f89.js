(window.webpackJsonp=window.webpackJsonp||[]).push([[138,6,7,8,139,140,141,183],{486:function(t,e,n){var content=n(499);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(46).default)("3205bec8",content,!0,{sourceMap:!1})},487:function(t,e,n){var content=n(501);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(46).default)("fcb08f1c",content,!0,{sourceMap:!1})},490:function(t,e,n){"use strict";n.r(e);var r=n(2),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.$docus&&t.$docus.ui&&t.$docus.ui.slots?n("div",{staticClass:"flex items-center justify-center px-6 py-6 font-mono text-sm font-semibold bg-gray-100 dark:bg-gray-800"},[t._t("default",(function(){return[t._v("Slot")]}))],2):t._e()}),[],!1,null,null,null);e.default=component.exports},493:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"a",(function(){return d})),n.d(e,"c",(function(){return l}));n(8);var r=n(0);function o(){var t=Object(r.ref)(),e=Object(r.ref)([]),n=Object(r.ref)([]),o=function(t){return t.forEach((function(t){var n=t.target.id;t.isIntersecting?e.value.push(n):e.value=e.value.filter((function(t){return t!==n}))}))};return Object(r.watch)(e,(function(t,e){0===t.length?n.value=e:n.value=t})),Object(r.onBeforeMount)((function(){return t.value=new IntersectionObserver(o)})),Object(r.onBeforeUnmount)((function(){var e;return null===(e=t.value)||void 0===e?void 0:e.disconnect()})),{visibleHeadings:e,activeHeadings:n,updateHeadings:function(e){return e.forEach((function(e){t.value.observe(e)}))}}}n(28),n(39);var c=n(27);function l(){var t=Object(r.useContext)().$docus;return{settings:Object(r.computed)((function(){var e;return null==t||null===(e=t.settings)||void 0===e?void 0:e.value}))}}function d(){var t=l().settings,e=Object(r.computed)((function(){return Object(c.joinURL)(t.value.github.url,t.value.github.repo)}));return{repoUrl:e,getPageLink:function(n){return Object(r.computed)((function(){if(t.value.github){var r=n.key.split(":"),o=r[r.length-2],source=r[r.length-1];return[e.value,"edit",t.value.github.branch,t.value.github.dir||"",t.value.contentDir,o,"".concat(source).replace(/^\//g,"")].filter(Boolean).join("/")}}))}}}},496:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));n(39);function r(t,e){history.replaceState({},"","#"+t),setTimeout((function(){var n=t.replace(/\./g,"\\."),r=document.querySelector("#".concat(n)).offsetTop-function(t){var e=document.createElement("div");e.style.position="absolute",e.style.opacity="0",e.style.height=getComputedStyle(document.documentElement).getPropertyValue(t),document.body.appendChild(e);var n=parseInt(getComputedStyle(e).height);return document.body.removeChild(e),n}(e);window.scrollTo(0,r)}))}},498:function(t,e,n){"use strict";n(486)},499:function(t,e,n){var r=n(45)((function(i){return i[1]}));r.push([t.i,".nui-support-nuxt{--tw-bg-opacity:1;background-color:rgba(243,244,246,var(--tw-bg-opacity));border-radius:.375rem;padding:.5rem 1rem;display:flex;flex-direction:row;align-items:center;margin-top:1rem;width:100%}.dark .nui-support-nuxt{--tw-bg-opacity:1;background-color:rgba(255,255,255,var(--tw-bg-opacity));--tw-bg-opacity:0.1}@media (min-width:640px){.nui-support-nuxt{flex-direction:column;margin-top:0;width:10rem}}",""]),r.locals={},t.exports=r},500:function(t,e,n){"use strict";n(487)},501:function(t,e,n){var r=n(45)((function(i){return i[1]}));r.push([t.i,".light .Carbon .carbon-text{--tw-text-opacity:1;color:rgba(75,85,99,var(--tw-text-opacity))}.light .Carbon .carbon-text:hover{--tw-text-opacity:1;color:rgba(31,41,55,var(--tw-text-opacity))}.Carbon{display:flex;flex-direction:column;margin-top:1rem;max-width:100%;padding:1rem}@media (min-width:640px){.Carbon{max-width:20rem}}@media (min-width:1024px){.Carbon{margin-top:0;max-width:160px}}.Carbon #carbonads span{flex-direction:column;justify-content:space-between}.Carbon #carbonads span,.Carbon #carbonads span .carbon-wrap{display:flex;-webkit-box-orient:vertical}.Carbon #carbonads span .carbon-wrap{flex-direction:column;flex:1}@media (min-width:320px){.Carbon #carbonads span .carbon-wrap{flex-direction:row}}@media (min-width:1024px){.Carbon #carbonads span .carbon-wrap{flex-direction:column}}.Carbon #carbonads span .carbon-wrap .carbon-img{display:flex;align-items:flex-start;justify-content:center;margin-bottom:1rem}@media (min-width:320px){.Carbon #carbonads span .carbon-wrap .carbon-img{margin-bottom:0}}@media (min-width:1024px){.Carbon #carbonads span .carbon-wrap .carbon-img{margin-bottom:1rem}}.Carbon #carbonads span .carbon-wrap .carbon-text{display:block;flex:1 1 0%;font-size:.875rem;line-height:1.25rem;line-height:1.625;margin:0;text-align:left;width:100%}.Carbon #carbonads span .carbon-wrap .carbon-text:hover{text-decoration:none}@media (min-width:320px){.Carbon #carbonads span .carbon-wrap .carbon-text{margin-left:1rem}}@media (min-width:1024px){.Carbon #carbonads span .carbon-wrap .carbon-text{margin-left:0}}.Carbon img{width:100%}.Carbon .carbon-poweredby{display:block;font-size:.75rem;line-height:1rem;margin-left:.5rem;padding-top:.5rem;text-align:right;--tw-text-opacity:1;color:rgba(156,163,175,var(--tw-text-opacity))}.Carbon .carbon-poweredby:hover{--tw-text-opacity:1;color:rgba(107,114,128,var(--tw-text-opacity));text-decoration:none}",""]),r.locals={},t.exports=r},507:function(t,e,n){"use strict";n.r(e);var r=n(0),o=Object(r.defineComponent)({name:"AdsCarbon",mounted:function(){if(this.$refs.carbonads){var script=document.createElement("script");script.setAttribute("type","text/javascript"),script.setAttribute("src","https://cdn.carbonads.com/carbon.js?serve=CKYILK7U&placement=nuxtjsorg"),script.setAttribute("id","_carbonads_js"),this.$refs.carbonads.appendChild(script)}}}),c=(n(500),n(2)),component=Object(c.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)("div",{ref:"carbonads",staticClass:"Carbon dark:bg-secondary-darkest bg-gray-50"})}),[],!1,null,null,null);e.default=component.exports},508:function(t,e,n){"use strict";n.r(e);var r=n(49),o=(n(35),n(24),n(0)),c=n(493),l=n(496),d=Object(o.defineComponent)({props:{toc:{type:Array,default:function(){return[]}}},setup:function(){var t=Object(c.b)(),e=t.activeHeadings,n=t.visibleHeadings,d=t.updateHeadings;Object(o.onMounted)((function(){return setTimeout((function(){d([].concat(Object(r.a)(document.querySelectorAll(".docus-content h1")),Object(r.a)(document.querySelectorAll(".docus-content h2")),Object(r.a)(document.querySelectorAll(".docus-content h3"))))}),200)}));return{visibleHeadings:n,activeHeadings:e,scrollToHeading:l.a,isActiveParent:function(link){return link.children&&link.children.some((function(t){return e.value.includes(t.id)}))}}}}),f=n(2),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"font-medium ml-4"},t._l(t.toc,(function(link){return n("li",{key:link.id,on:{click:function(e){return t.$emit("click")}}},[n("a",{staticClass:"block py-1 transition-colors duration-100 transform",class:{"d-secondary-text-active hover:d-secondary-text-hover":t.activeHeadings.includes(link.id)||t.isActiveParent(link),"d-secondary-text hover:d-secondary-text-hover":!t.activeHeadings.includes(link.id)&&!t.isActiveParent(link)},attrs:{href:"#"+link.id},on:{click:function(e){return e.preventDefault(),t.scrollToHeading(link.id,"--docs-scroll-margin-block")}}},[t._v("\n      "+t._s(link.text)+"\n    ")]),t._v(" "),link.children?n("ul",{staticClass:"overflow-x-hidden font-medium"},t._l(link.children,(function(e){return n("li",{key:e.id},[n("a",{staticClass:"block py-1 pl-3 transition-colors duration-100 transform",class:{"d-secondary-text-active hover:d-secondary-text-hover":t.activeHeadings.includes(e.id),"d-secondary-text hover:d-secondary-text-hover":!t.activeHeadings.includes(e.id)},attrs:{href:"#"+e.id},on:{click:function(n){return n.preventDefault(),t.scrollToHeading(e.id,"--docs-scroll-margin-block")}}},[t._v("\n          "+t._s(e.text)+"\n        ")])])})),0):t._e()])})),0)}),[],!1,null,null,null);e.default=component.exports},509:function(t,e,n){"use strict";n.r(e);n(498);var r=n(2),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"nui-support-nuxt"},[n("div",[n("p",{staticClass:"pt-2 m-0 font-bold sm:text-sm d-text-primary"},[t._v(t._s(t.$t("sidebar.ads.fallback.title")))]),t._v(" "),n("p",{staticClass:"pb-2 m-0 leading-normal text-gray-600 dark:text-white sm:text-xs"},[t._v("\n      "+t._s(t.$t("sidebar.ads.fallback.description"))+"\n    ")])])])}),[],!1,null,null,null);e.default=component.exports},510:function(t,e,n){"use strict";n.r(e);var r=n(2),component=Object(r.a)({},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("SlotBase",[t._v("PageTocTop.vue")])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{SlotBase:n(490).default})},516:function(t,e,n){"use strict";n.r(e);var r=n(2),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",{staticClass:"mt-4"},[t.$store.state.adBlocked?n("AdsFallback"):n("AdsCarbon",{key:t.$route.params.slug})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AdsFallback:n(509).default,AdsCarbon:n(507).default})},541:function(t,e,n){"use strict";n.r(e);var r=n(2),component=Object(r.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("aside",[e("AdsBlock")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AdsBlock:n(516).default})},564:function(t,e,n){"use strict";n.r(e);var r=n(0),o=Object(r.defineComponent)({props:{toc:{type:Array,default:function(){return[]}},title:{type:String,default:null}}}),c=n(2),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"\n    hidden\n    z-10\n    left-0\n    flex-none\n    w-full\n    pl-4\n    mr-8\n    text-sm\n    bg-white\n    border-b border-gray-200 border-opacity-50\n    xl:relative xl:border-0\n    dark:border-gray-800\n    d-blur-header\n    bg-opacity-80\n    dark:bg-gray-900 dark:bg-opacity-80\n    xl:bg-transparent\n    dark:xl:bg-transparent\n    lg:left-60\n    xl:left-0\n    pl-4\n    sm:pl-6\n    xl:w-60\n    top-header\n    xl:block xl:top-0\n  "},[n("div",{staticClass:"\n      hidden\n      xl:flex\n      flex-col\n      justify-between\n      overflow-y-auto\n      d-scrollbar\n      sticky\n      max-h-(screen-header)\n      -mt-10\n      pt-10\n      pb-4\n      top-header\n    "},[n("PageTocTop"),t._v(" "),t.toc.length?n("div",{staticClass:"mb-4"},[n("h5",{staticClass:"items-center hidden mb-2 xl:flex"},[n("span",{staticClass:"text-base font-semibold text-gray-900 dark:text-gray-100"},[t._v(t._s(t.title||t.$t("toc.title")))])]),t._v(" "),n("PageTocList",{attrs:{toc:t.toc}})],1):t._e(),t._v(" "),n("PageTocBottom")],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{PageTocTop:n(510).default,PageTocList:n(508).default,PageTocBottom:n(541).default})}}]);