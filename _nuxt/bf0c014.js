(window.webpackJsonp=window.webpackJsonp||[]).push([[128,83,104,105,106,108,130,131],{502:function(e,t,n){var content=n(520);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(46).default)("037c2570",content,!0,{sourceMap:!1})},519:function(e,t,n){"use strict";n(502)},520:function(e,t,n){var r=n(45)((function(i){return i[1]}));r.push([e.i,"option[data-v-7052e5e4]{font:-moz-pull-down-menu}.dark option[data-v-7052e5e4]{--tw-text-opacity:1;color:rgba(0,0,0,var(--tw-text-opacity))}",""]),r.locals={},e.exports=r},523:function(e,t,n){"use strict";n.r(t);var r=n(524),o=n.n(r);for(var l in r)["default"].indexOf(l)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(l);t.default=o.a},524:function(e,t,n){"use strict";n(48);var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),l=r(n(588));t.default=(0,o.defineComponent)({props:{module:{type:Object,required:!0}},computed:{iconUrl:function(){var e=this.module,t=e.icon,n=e.category;return t&&t.startsWith("https://")?t:t?"https://modules.nuxtjs.org/icons/".concat(t):"/img/modules/categories/".concat((n||"").toLowerCase(),".svg")},npmUrl:function(){return"https://npmjs.com/package/".concat(this.module.npm)},githubUrl:function(){return"https://github.com/".concat(this.module.github)}},methods:{numberFormat:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{precision:1};return(0,l.default)(e||0,t)}}})},525:function(e,t,n){"use strict";n.r(t);var r=n(526),o=n.n(r);for(var l in r)["default"].indexOf(l)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(l);t.default=o.a},526:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=n(561);t.default=(0,r.defineComponent)({props:{categories:{type:Array,default:function(){return[]}},modules:{type:Array,default:function(){return[]}}},setup:function(e){var t=(0,o.useFuse)(e.modules);return{selectedCategory:t.selectedCategory,selectCategory:t.selectCategory}}})},527:function(e,t,n){"use strict";n.r(t);var r=n(528),o=n.n(r);for(var l in r)["default"].indexOf(l)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(l);t.default=o.a},528:function(e,t,n){"use strict";var r=n(280);Object.defineProperty(t,"__esModule",{value:!0});var o=n(0);t.default=(0,o.defineComponent)({props:{options:{type:Object,default:function(){}}},setup:function(e,t){var n=t.emit,l=(0,o.ref)(null),c=(0,o.ref)(null);return(0,o.onMounted)((function(){(l=new IntersectionObserver((function(e){var t=r(e,1)[0];t&&t.isIntersecting&&n("intersect")}),e.options)).observe(c.value)})),{observer:l,root:c}}})},535:function(e,t,n){"use strict";n.r(t);var r=n(11),o=(n(24),n(8),n(22),n(16),n(0)),l=Object(o.defineComponent)({props:{value:{type:String,default:""},options:{type:Array,default:null},id:{type:String,default:null},name:{type:String,default:null},placeholder:{type:String,default:null},disabled:{type:Boolean,default:!1},paddingClass:{type:String,default:"py-2 pl-3 pr-10"},textClass:{type:String,default:"text-base sm:text-md font-medium"},bgClass:{type:String,default:"bg-transparent"},borderClass:{type:String,default:"border-1 border-sky-dark-light dark:border-sky-dark"},extraClass:{type:String,default:null}},setup:function(){var e=Object(o.ref)(!1),t=Object(o.ref)(!1),n=Object(o.ref)(!1);return{focusedByMouse:e,focus:t,focusVisible:n,normalizeOption:function(option){return["string","number","boolean"].includes(Object(r.a)(option))?{value:option,text:option,disabled:!1}:{value:option.value,text:option.text,disabled:option.disabled}},normalizeOptionGroup:function(optgroup){var e=this;return{label:optgroup.label,disabled:optgroup.disabled,options:optgroup.options.map((function(option){return e.normalizeOption(option)})).filter(Boolean)}},mousedownHandler:function(){e.value=!0},handleFocus:function(r){r?e.value?(t.value=!0,n.value=!1):(t.value=!0,n.value=!0):(t.value=!1,n.value=!1,e.value=!1)}}},computed:{props:function(){return{value:this.value,id:this.id,name:this.name,disabled:this.disabled,required:this.required}},normalizedOptions:function(){var e=this;return Array.isArray(this.options)?this.options.map((function(option){return option.options?e.normalizeOptionGroup(option):e.normalizeOption(option)})).filter(Boolean):[]}}}),c=(n(519),n(2)),component=Object(c.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"relative"},[n("select",e._b({staticClass:"block w-full select-none appearance-none rounded-md focus:outline-none",class:[{"pointer-events-none opacity-50":e.disabled,"ring-2 ring-primary":e.focusVisible},e.paddingClass,e.textClass,e.bgClass,e.borderClass,e.extraClass],on:{input:function(t){return e.$emit("input",t.target.value)},focus:function(t){return e.handleFocus(!0)},blur:function(t){return e.handleFocus(!1)},mousedown:e.mousedownHandler}},"select",e.props,!1),[e.placeholder?n("option",{attrs:{value:"",disabled:""}},[e._v("\n      "+e._s(e.placeholder)+"\n    ")]):e._e(),e._v(" "),e._l(e.normalizedOptions,(function(option,i){return[option.options?n("optgroup",{key:option.value+"-"+i,attrs:{label:option.label,disabled:option.disabled}},e._l(option.options,(function(t,r){return n("option",{key:t.value+"-"+i+"-"+r,domProps:{value:t.value}},[e._v("\n          "+e._s(t.text)+"\n        ")])})),0):n("option",{key:option.value+"-"+i,attrs:{disabled:option.disabled},domProps:{value:option.value}},[e._v("\n        "+e._s(option.text)+"\n      ")])]}))],2),e._v(" "),n("div",{staticClass:"pointer-events-none absolute inset-y-0 right-0 px-2 flex items-center"},[n("IconChevronBottom",{staticClass:"h-4 w-4 dark:text-secondary light:text-gray-300"})],1)])}),[],!1,null,"7052e5e4",null);t.default=component.exports;installComponents(component,{IconChevronBottom:n(194).default})},561:function(e,t,n){"use strict";n.r(t),n.d(t,"useFuse",(function(){return w}));n(22),n(47),n(8),n(10),n(39);var r,o=n(593),l=n(0),c="desc",d="asc",f=["downloads","stars"],v=Object(l.ssrRef)([],"xjF9/CICYmaLQjZkAXBAjA=="),m=Object(l.ssrRef)(void 0,"fuseQueryRef"),h=Object(l.ssrRef)("desc","fuseOrderRef"),x=Object(l.ssrRef)("downloads","fuseSortedByRef"),y=Object(l.ssrRef)(void 0,"fuseSortByCategoryRef"),C=Object(l.ssrRef)(24,"fuseModulesLoadedRef");function w(e){var t=Object(l.useContext)().route,n=Object(l.useRouter)();function w(e){var t=Object.assign([],e.value);r&&m.value&&(t=r.search(m.value).map((function(e){return e.item}))),x.value&&(t=t.sort((function(a,b){return function(a,b,e){return e?a-b:b-a}(a[x.value],b[x.value],h.value===d)}))),y.value&&(t=t.filter((function(e){return e.category===y.value}))),t=t.splice(0,C.value),v.value=t}function _(){var e=t.value.path,q="";m.value&&(q+="?q=".concat(m.value)),h.value!==c&&(q+="".concat(q?"&":"?","orderBy=").concat(h.value)),x.value!==f[0]&&(q+="".concat(q?"&":"?","sortBy=").concat(x.value)),y.value&&(q+="#".concat(y.value)),n.replace("".concat(e).concat(q),(function(){}),(function(){}))}return Object(l.watch)([y,m,h,x],(function(){w(e),_()})),Object(l.watch)(C,(function(){return w(e)})),{fuse:r,query:m,orderedBy:h,sortedBy:x,selectedCategory:y,modulesLoaded:C,sortFields:f,filteredModules:v,init:function(){var n={threshold:.1,keys:["name","npm","category","maintainers.name","maintainers.github","description","repo"]},l=o.a.createIndex(n.keys,e.value);r=new o.a(e.value,n,l),y.value=(window.location.hash||"").substr(1);var c=t.value.query,q=c.q,d=c.sortBy,f=c.orderBy;q&&(m.value=q),d&&(x.value=d),f&&(h.value=f)},updateList:w,syncURL:_,getCategory:function(e){y.value=e},clearFilters:function(){y.value=null,m.value=null},toggleOrderBy:function(){h.value=h.value===d?c:d},selectSortBy:function(e){x.value=e},selectCategory:function(e){y.value===e?y.value=null:y.value=e},loadModules:function(){C.value+=24}}}},572:function(e,t,n){"use strict";n.r(t);var r=n(2),component=Object(r.a)({},(function(){var e=this.$createElement,t=this._self._c||e;return t("svg",{attrs:{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M6.75 0H9.25C9.66562 0 10 0.334375 10 0.75V6H12.7406C13.2969 6 13.575 6.67188 13.1812 7.06563L8.42813 11.8219C8.19375 12.0562 7.80937 12.0562 7.575 11.8219L2.81562 7.06563C2.42188 6.67188 2.7 6 3.25625 6H6V0.75C6 0.334375 6.33437 0 6.75 0ZM16 11.75V15.25C16 15.6656 15.6656 16 15.25 16H0.75C0.334375 16 0 15.6656 0 15.25V11.75C0 11.3344 0.334375 11 0.75 11H5.33437L6.86562 12.5312C7.49375 13.1594 8.50625 13.1594 9.13437 12.5312L10.6656 11H15.25C15.6656 11 16 11.3344 16 11.75ZM12.125 14.5C12.125 14.1562 11.8438 13.875 11.5 13.875C11.1562 13.875 10.875 14.1562 10.875 14.5C10.875 14.8438 11.1562 15.125 11.5 15.125C11.8438 15.125 12.125 14.8438 12.125 14.5ZM14.125 14.5C14.125 14.1562 13.8438 13.875 13.5 13.875C13.1562 13.875 12.875 14.1562 12.875 14.5C12.875 14.8438 13.1562 15.125 13.5 15.125C13.8438 15.125 14.125 14.8438 14.125 14.5Z",fill:"currentColor"}})])}),[],!1,null,null,null);t.default=component.exports},573:function(e,t,n){"use strict";n.r(t);var r=n(2),component=Object(r.a)({},(function(){var e=this.$createElement,t=this._self._c||e;return t("svg",{attrs:{width:"16",height:"15",viewBox:"0 0 16 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{d:"M7.29936 1.15381L5.48547 4.77413L1.42714 5.35655C0.699362 5.46045 0.407695 6.34366 0.935473 6.84952L3.87158 9.66592L3.17714 13.6444C3.05214 14.3636 3.82158 14.9023 4.46603 14.5659L8.09658 12.6874L11.7271 14.5659C12.3716 14.8995 13.141 14.3636 13.016 13.6444L12.3216 9.66592L15.2577 6.84952C15.7855 6.34366 15.4938 5.46045 14.766 5.35655L10.7077 4.77413L8.89381 1.15381C8.56881 0.508501 7.62714 0.500298 7.29936 1.15381Z",fill:"currentColor"}})])}),[],!1,null,null,null);t.default=component.exports},594:function(e,t,n){"use strict";n.r(t);var r=n(595),o=n.n(r);for(var l in r)["default"].indexOf(l)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(l);t.default=o.a},595:function(e,t,n){"use strict";var r=n(195);n(15),n(22),Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),l=n(877),c=n(561);t.default=(0,o.defineComponent)({directives:{focus:{inserted:function(e){e.focus()}}},setup:function(e){var t=(0,o.useContext)().i18n,n=(0,l.useModules)(),d=n.fetch,f=n.categories,v=n.modules,m=(0,c.useFuse)(v),h=m.query,x=m.orderedBy,y=m.sortedBy,C=m.filteredModules,w=m.sortFields,_=m.toggleOrderBy,k=m.loadModules,O=m.updateList,j=(0,o.computed)((function(){return w.map((function(e){return{text:t.t("common.".concat(e)),value:e}}))}));return(0,o.useFetch)(r(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d();case 2:t=e.sent,O(t);case 4:case"end":return e.stop()}}),e)})))),{categories:f,modules:v,filteredModules:C,sortedBy:y,sorts:j,toggleOrderBy:_,orderedBy:x,query:h,loadModules:k}}})},604:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o}));var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"\n    group\n    relative\n    hover:bg-gray-50 hover:dark:bg-sky-darkest\n    dark:bg-sky-darker\n    rounded-md\n    shadow-md\n    h-64\n    lg:h-40\n    p-4\n    flex flex-col\n    justify-between\n  "},[n("AppLink",{staticClass:"absolute inset-0",attrs:{href:e.module.website,"aria-label":e.module.website}}),e._v(" "),n("div",{staticClass:"\n      transition-opacity\n      duration-200\n      ease-in-out\n      opacity-0\n      group-hover:opacity-100\n      absolute\n      top-4\n      right-4\n      cursor-pointer\n    "},[n("NuxtImg",{attrs:{alt:"external_link",src:"/img/icons/ext.svg",width:"24",height:"24"}})],1),e._v(" "),n("div",{staticClass:"flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-3"},[n("img",{staticClass:"w-10 h-10 mt-2 object-contain",attrs:{loading:"lazy",src:e.iconUrl,alt:e.module.name}}),e._v(" "),n("div",{staticClass:"flex flex-col space-y-1"},[n("span",{staticClass:"font-medium"},[e._v(e._s(e.module.name))]),e._v(" "),n("div",{staticClass:"max-h-20 text-sm overflow-y-auto"},[e._v("\n        "+e._s(e.module.description)+"\n      ")])])]),e._v(" "),n("div",{staticClass:"lg:flex lg:flex-row-reverse lg:gap-2 justify-between w-full z-0"},[n("ul",{staticClass:"flex lg:flex-shrink-0 space-x-1 pb-4 lg:pb-0"},e._l(e.module.maintainers,(function(e){return n("li",{directives:[{name:"tooltip",rawName:"v-tooltip",value:{content:e.name,classes:["bg-sky-darker dark:bg-white","text-white dark:text-sky-darker","px-2","py-1","rounded","text-sm"]},expression:"{\n          content: maintainer.name,\n          classes: [\n            'bg-sky-darker dark:bg-white',\n            'text-white dark:text-sky-darker',\n            'px-2',\n            'py-1',\n            'rounded',\n            'text-sm'\n          ]\n        }"}],key:e.name},[n("AppLink",{attrs:{href:"https://github.com/"+e.github}},[n("img",{staticClass:"rounded-full w-6 h-6",attrs:{loading:"lazy",src:e.avatar,alt:e.name}})])],1)})),0),e._v(" "),n("div",{staticClass:"flex flex-shrink items-center space-x-4 text-xs font-medium truncate"},[n("AppLink",{staticClass:"group flex space-x-2 items-center",attrs:{href:e.module.github}},[n("IconStar",{staticClass:"text-sky-dark group-hover:text-sky-darker dark:text-cloud-surface dark:group-hover:text-white",attrs:{alt:"Star icon"}}),e._v(" "),n("span",{staticClass:"truncate pt-0.5"},[e._v("\n          "+e._s(e.numberFormat(e.module.stars))+"\n          "+e._s(e.$t(1!==e.module.stars?"common.stars":"common.star"))+"\n        ")])],1),e._v(" "),n("AppLink",{staticClass:"group flex space-x-2 items-center truncate",attrs:{href:e.npmUrl}},[n("IconDownload",{staticClass:"\n            w-4\n            h-4\n            text-sky-dark\n            group-hover:text-sky-darker\n            dark:text-cloud-surface dark:group-hover:text-white\n          ",attrs:{alt:"Download icon"}}),e._v(" "),n("span",{staticClass:"truncate pt-0.5"},[e._v("\n          "+e._s(e.numberFormat(e.module.downloads))+"\n          "+e._s(e.$t(1!==e.module.downloads?"common.downloads":"common.download"))+"\n        ")])],1)],1)])],1)},o=[]},605:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o}));var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"lg:sticky top-0 lg:left-0 h-full pointer-events-auto lg:h-screen lg:top-header lg:w-1/5"},[n("div",{staticClass:"w-auto h-full d-bg-header dark:lg:bg-transparent lg:bg-transparent"},[n("nav",{staticClass:"\n        flex\n        lg:flex-col\n        justify-between\n        lg:justify-start lg:max-w-sm\n        w-full\n        overflow-y-auto\n        text-sm\n        font-medium\n        lg:h-[reset]\n        h-(full-header)\n        d-scrollbar\n      "},[n("div",{staticClass:"py-4 pr-0"},[n("ul",{staticClass:"flex flex-wrap lg:flex-col"},e._l(e.categories,(function(t){return n("li",{key:t.name,staticClass:"px-1"},[n("AppButton",{class:{"rounded-md bg-gray-100 dark:bg-white dark:bg-opacity-10":t.name===e.selectedCategory},attrs:{"button-class":"py-2 px-4 flex justify-between w-full focus:outline-none focus:ring-transparent"},nativeOn:{click:function(n){return e.selectCategory(t.name)}}},[n("span",{staticClass:"truncate max-w-48 font"},[e._v(e._s(t.name))]),e._v(" "),t.name===e.selectedCategory?n("span",{staticClass:"rounded-xl bg-white dark:bg-sky-darkest ml-2 px-2 py-0.5 text-xs"},[e._v("\n                "+e._s(t.count)+"\n              ")]):e._e()])],1)})),0)])])])])},o=[]},606:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o}));var r=function(){var e=this.$createElement;return(this._self._c||e)("div",{ref:"root",staticClass:"observer"})},o=[]},640:function(e,t,n){"use strict";n.r(t);var r=n(604),o=n(523);for(var l in o)["default"].indexOf(l)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(l);var c=n(2),component=Object(c.a)(o.default,r.a,r.b,!1,null,null,null);t.default=component.exports,installComponents(component,{AppLink:n(85).default,IconStar:n(573).default,IconDownload:n(572).default})},643:function(e,t,n){"use strict";n.r(t);var r=n(605),o=n(525);for(var l in o)["default"].indexOf(l)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(l);var c=n(2),component=Object(c.a)(o.default,r.a,r.b,!1,null,null,null);t.default=component.exports,installComponents(component,{AppButton:n(101).default})},644:function(e,t,n){"use strict";n.r(t);var r=n(606),o=n(527);for(var l in o)["default"].indexOf(l)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(l);var c=n(2),component=Object(c.a)(o.default,r.a,r.b,!1,null,null,null);t.default=component.exports},801:function(e,t,n){"use strict";n.r(t);var r=n(2),component=Object(r.a)({},(function(){var e=this.$createElement,t=this._self._c||e;return t("svg",{attrs:{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M6 2C3.79086 2 2 3.79086 2 6C2 8.20914 3.79086 10 6 10C8.20914 10 10 8.20914 10 6C10 3.79086 8.20914 2 6 2ZM0 6C0 2.68629 2.68629 0 6 0C9.31371 0 12 2.68629 12 6C12 7.29583 11.5892 8.49572 10.8907 9.47653L15.7071 14.2929C16.0976 14.6834 16.0976 15.3166 15.7071 15.7071C15.3166 16.0976 14.6834 16.0976 14.2929 15.7071L9.47653 10.8907C8.49572 11.5892 7.29583 12 6 12C2.68629 12 0 9.31371 0 6Z",fill:"currentColor"}})])}),[],!1,null,null,null);t.default=component.exports},813:function(e,t,n){"use strict";n.r(t);var r=n(2),component=Object(r.a)({},(function(){var e=this.$createElement,t=this._self._c||e;return t("svg",{staticClass:"h-5 w-5",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[t("path",{attrs:{d:"M3 3a1 1 0 000 2h11a1 1 0 100-2H3zM3 7a1 1 0 000 2h5a1 1 0 000-2H3zM3 11a1 1 0 100 2h4a1 1 0 100-2H3zM13 16a1 1 0 102 0v-5.586l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 101.414 1.414L13 10.414V16z"}})])}),[],!1,null,null,null);t.default=component.exports},814:function(e,t,n){"use strict";n.r(t);var r=n(2),component=Object(r.a)({},(function(){var e=this.$createElement,t=this._self._c||e;return t("svg",{staticClass:"h-5 w-5",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[t("path",{attrs:{d:"M3 3a1 1 0 000 2h11a1 1 0 100-2H3zM3 7a1 1 0 000 2h7a1 1 0 100-2H3zM3 11a1 1 0 100 2h4a1 1 0 100-2H3zM15 8a1 1 0 10-2 0v5.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L15 13.586V8z"}})])}),[],!1,null,null,null);t.default=component.exports},877:function(e,t,n){"use strict";n.r(t),n.d(t,"useModules",(function(){return f}));var r=n(4),o=(n(15),n(22),n(54),n(16),n(0)),l=n(63),c=Object(o.ssrRef)([],"modulesRef"),d=Object(o.ssrRef)([],"categoriesRef");function f(){var e=Object(o.useContext)().$config.apiURL||"https://api.nuxtjs.org",t=function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(l.a)("".concat(e,"/api/modules"));case 2:return c.value=t.sent,d.value=Object.entries(c.value.reduce((function(e,t){return e[t.category]=(e[t.category]||0)+1,e}),{})).map((function(e){return{name:e[0],count:e[1]}})).sort((function(a,b){return a.name.toLowerCase().localeCompare(b.name.toLowerCase())})),t.abrupt("return",c);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return{fetch:t,modules:c,categories:d}}},915:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o}));var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"d-container-content"},[n("div",{staticClass:"\n      w-full\n      flex-col flex\n      md:flex-row\n      space-y-8\n      pt-1\n      pl-4\n      md:pl-0 md:space-y-0\n      justify-between\n      md:border-b\n      border-b-sky-dark\n      mb-2\n    "},[n("div",{staticClass:"flex flex-row space-x-4 items-center justify-start"},[n("IconSearch",{staticClass:"text-sky-darker dark:text-white w-4 h-4",attrs:{alt:"Search Icon"}}),e._v(" "),n("AppInput",{directives:[{name:"focus",rawName:"v-focus"}],staticClass:"w-full md:w-md xl:w-4xl",attrs:{type:"search",appearance:"transparent",placeholder:e.$t("modules.search")},model:{value:e.query,callback:function(t){e.query=t},expression:"query"}})],1),e._v(" "),n("div",{staticClass:"flex space-x-1 items-center"},[n("span",[e._v(e._s(e.$t("modules.sort_by")))]),e._v(" "),n("NuxtSelectNative",{staticClass:"ml-2",attrs:{options:e.sorts,"border-class":""},model:{value:e.sortedBy,callback:function(t){e.sortedBy=t},expression:"sortedBy"}}),e._v(" "),n("button",{staticClass:"focus:outline-none pl-3 pr-3 md:pr-0 py-3",attrs:{"aria-label":"reverseSortButton"},on:{click:e.toggleOrderBy}},["desc"===e.orderedBy?n("IconSortDesc",{staticClass:"text-sky-darker dark:text-white w-4 h-4",attrs:{alt:"Descending sort"}}):n("IconSortAsc",{staticClass:"text-sky-darker dark:text-white w-4 h-4",attrs:{alt:"Ascending sort"}})],1)],1)]),e._v(" "),n("div",{staticClass:"lg:flex"},[n("AsideModules",{attrs:{categories:e.categories,modules:e.modules}}),e._v(" "),n("div",{staticClass:"\n        w-full\n        px-4\n        md:px-0\n        lg:w-4/5\n        min-w-0 min-h-0\n        lg:static lg:overflow-visible\n        mt-8\n        grid\n        md:grid-cols-2\n        gap-8\n        lg:ml-20\n        auto-rows-min\n      "},[e._l(e.filteredModules,(function(e){return n("div",{key:e.name},[n("ModulesCard",{attrs:{module:e}})],1)})),e._v(" "),n("ObserverModules",{on:{intersect:e.loadModules}})],2)],1)])},o=[]},924:function(e,t,n){"use strict";n.r(t);var r=n(915),o=n(594);for(var l in o)["default"].indexOf(l)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(l);var c=n(2),component=Object(c.a)(o.default,r.a,r.b,!1,null,null,null);t.default=component.exports,installComponents(component,{IconSearch:n(801).default,AppInput:n(283).default,NuxtSelectNative:n(535).default,IconSortDesc:n(814).default,IconSortAsc:n(813).default,AsideModules:n(643).default,ModulesCard:n(640).default,ObserverModules:n(644).default})}}]);