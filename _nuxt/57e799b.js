(window.webpackJsonp=window.webpackJsonp||[]).push([[145,27],{493:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));n(8);var o=n(0);function r(){var t=Object(o.ref)(),e=Object(o.ref)([]),n=Object(o.ref)([]),r=function(t){return t.forEach((function(t){var n=t.target.id;t.isIntersecting?e.value.push(n):e.value=e.value.filter((function(t){return t!==n}))}))};return Object(o.watch)(e,(function(t,e){0===t.length?n.value=e:n.value=t})),Object(o.onBeforeMount)((function(){return t.value=new IntersectionObserver(r)})),Object(o.onBeforeUnmount)((function(){var e;return null===(e=t.value)||void 0===e?void 0:e.disconnect()})),{visibleHeadings:e,activeHeadings:n,updateHeadings:function(e){return e.forEach((function(e){t.value.observe(e)}))}}}n(28),n(39),n(27)},562:function(t,e,n){"use strict";n.r(e);n(12),n(9),n(8),n(17),n(18);var o=n(7),r=n(49),c=n(0),l=n(493);n(39);function d(t,e){history.replaceState({},"","#"+t),setTimeout((function(){var n=t.replace(/\./g,"\\."),o=document.querySelector("#".concat(n)).offsetTop-function(t){var e=document.createElement("div");e.style.position="absolute",e.style.opacity="0",e.style.height=getComputedStyle(document.documentElement).getPropertyValue(t),document.body.appendChild(e);var n=parseInt(getComputedStyle(e).height);return document.body.removeChild(e),n}(e);window.scrollTo(0,o)}))}function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=Object(c.defineComponent)({props:{toc:{type:Array,default:function(){return[]}},title:{type:String,default:null}},setup:function(t){var e=Object(c.reactive)({activeLink:"",exactActiveLink:"",showMobileToc:!1}),n=Object(l.a)(),o=n.activeHeadings,m=n.updateHeadings;Object(c.onMounted)((function(){return m([].concat(Object(r.a)(document.querySelectorAll(".docus-content h1")),Object(r.a)(document.querySelectorAll(".docus-content h2")),Object(r.a)(document.querySelectorAll(".docus-content h3"))))}));var v=Object(c.computed)((function(){var e=Object(r.a)(t.toc);return e.shift(),e}));return f(f({},Object(c.toRefs)(e)),{},{activeHeadings:o,scrollToHeading:d,filteredToc:v})}}),h=n(2),component=Object(h.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.toc.length?n("div",{staticClass:"sticky z-10 px-4 text-sm border-dashed top-header d-border-header d-blur-header d-page-mobile-toc-bg"},[n("button",{staticClass:"\n      relative\n      z-10\n      flex\n      items-center\n      w-full\n      py-3\n      text-sm\n      font-semibold\n      text-gray-900\n      focus:outline-none\n      dark:text-gray-100\n    ",on:{click:function(e){t.showMobileToc=!t.showMobileToc}}},[n("span",{staticClass:"mr-2"},[t._v(t._s(t.title||t.$t("toc.title")))]),t._v(" "),n("IconChevronRight",{staticClass:"w-4 h-4 d-tertiary-text transition-transform duration-100 transform",class:[t.showMobileToc?"rotate-90":"rotate-0"]})],1),t._v(" "),n("ul",{staticClass:"pb-4 overflow-x-hidden font-medium",class:[t.showMobileToc?"flex flex-col":"hidden"]},t._l(t.filteredToc,(function(link){return n("li",{key:link.id,on:{click:function(e){t.showMobileToc=!1}}},[n("a",{staticClass:"block py-1 transition-colors duration-100 transform",class:{"d-secondary-text-active hover:d-secondary-text-hover":t.activeHeadings.includes(link.id),"d-secondary-text hover:d-secondary-text-hover":!t.activeHeadings.includes(link.id)},attrs:{href:"#"+link.id},on:{click:function(e){return e.preventDefault(),t.scrollToHeading(link.id,"--blogpost-scroll-margin-block")}}},[t._v(t._s(link.text))])])})),0)]):t._e()}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{IconChevronRight:n(272).default})},983:function(t,e,n){"use strict";n.r(e);var o=n(49),r=(n(39),n(28),n(0)),c=Object(r.defineComponent)({props:{page:{type:Object,required:!0}},setup:function(){Object(r.onMounted)((function(){if(window.location.hash){var e=window.location.hash.replace("#","");setTimeout((function(){t(e,"--blogpost-scroll-margin-block")}),300)}setTimeout((function(){[].concat(Object(o.a)(document.querySelectorAll(".docus-content h1")),Object(o.a)(document.querySelectorAll(".docus-content h2")),Object(o.a)(document.querySelectorAll(".docus-content h3"))).forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault(),t(e.target.href.split("#").pop(),"--blogpost-scroll-margin-block")}))}))}),300)}));function t(t,e){history.replaceState({},"","#"+t),setTimeout((function(){var n=t.replace(/\./g,"\\."),o=document.querySelector("#".concat(n)).offsetTop-function(t){var e=document.createElement("div");e.style.position="absolute",e.style.opacity="0",e.style.height=getComputedStyle(document.documentElement).getPropertyValue(t),document.body.appendChild(e);var n=parseInt(getComputedStyle(e).height);return document.body.removeChild(e),n}(e);window.scrollTo(0,o)}))}return{today:(new Date).toISOString().split("T")[0],formatDateByLocale:function(t,e){var n=t||"en";return new Date(e).toLocaleDateString(n,{year:"numeric",month:"long",day:"numeric"})}}},computed:{imgUrl:function(){var t;return(null===(t=this.page.headingImg)||void 0===t||!t.hidden)&&(this.page.imgUrl||"https://source.unsplash.com/random")}}}),l=n(2),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"relative py-16 sm:py-24"},[n("div",{staticClass:"relative max-w-3xl mx-auto"},[n("AppLink",{staticClass:"absolute top-0 left-0 px-4 -mt-12 sm:-mt-16",attrs:{to:0!==t.page.to.lastIndexOf("/")?t.page.to.substr(0,t.page.to.lastIndexOf("/")):"/"}},[n("span",{staticClass:"\n            text-sm\n            font-medium\n            leading-none\n            text-gray-900\n            sm:text-base\n            dark:text-gray-100\n            hover:d-secondary-text\n          "},[t._v("\n          ← "+t._s(t.$t("common.back"))+"\n        ")])]),t._v(" "),n("div",{staticClass:"px-4 mb-6"},[n("h1",{staticClass:"flex-1 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl dark:text-gray-100"},[t._v("\n          "+t._s(t.page.title)+"\n        ")]),t._v(" "),n("p",{staticClass:"my-4 text-base font-medium d-secondary-text"},[t._v("\n          "+t._s(t.page.description)+"\n        ")]),t._v(" "),n("div",{staticClass:"flex items-center sm:flex-row"},[t.page.date?n("time",{staticClass:"mr-2 text-sm font-medium d-tertiary-text dark:text-cloud-lighter",attrs:{datetime:t.page.date}},[t._v("\n            "+t._s(t.formatDateByLocale(t.$i18n.locale,t.page.date))+"\n          ")]):t._e(),t._v(" "),t.page.authors&&t.page.authors.length?n("div",{staticClass:"text-sm d-tertiary-text dark:text-cloud-lighter"},[t._v("\n            |\n          ")]):t._e(),t._v(" "),n("div",{staticClass:"flex ml-4 sm:ml-2"},t._l(t.page.authors,(function(e,o){return n("AppLink",{key:o,staticClass:"flex items-center justify-end -ml-2 sm:ml-0 sm:mr-2 hover:d-secondary-text",attrs:{href:e.link,rel:"noopener noindex nofollow"}},[n("NuxtImg",{staticClass:"inline-block w-8 h-8 border rounded-full d-border-tertiary dark:d-border-cloud-lighter sm:mr-1",attrs:{height:"32",width:"32",loading:"lazy",src:e.avatarUrl,alt:e.name,title:e.name}}),t._v(" "),n("span",{staticClass:"hidden text-sm font-medium sm:inline-block"},[t._v("\n                "+t._s(e.name)+"\n              ")])],1)})),1)])])],1),t._v(" "),t.imgUrl?n("div",{staticClass:"max-w-4xl mx-auto"},[n("div",{staticClass:"mx-4 mb-8 bg-gray-100 aspect-w-16 aspect-h-9 dark:bg-gray-800"},[n("NuxtImg",{staticClass:"object-cover",attrs:{src:t.imgUrl,alt:t.page.title,loading:"lazy"}})],1)]):t._e(),t._v(" "),n("div",{staticClass:"max-w-3xl mx-auto"},[n("BlogpostToc",{staticClass:"mb-8",attrs:{toc:t.page.body.toc.links,title:t.page.body.toc.title}}),t._v(" "),n("DocusContent",{staticClass:"px-4 docus-content",attrs:{document:t.page}})],1)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AppLink:n(85).default,BlogpostToc:n(562).default,DocusContent:n(506).default})}}]);