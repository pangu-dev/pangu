(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{963:function(e,t,r){"use strict";r.r(t);var n=r(4),o=(r(15),r(47),r(0)),l=Object(o.defineComponent)({props:{type:{type:String,default:"monogram"}},setup:function(e){var t=Object(o.useContext)(),r=t.$docus,l=t.i18n,c=Object(o.ref)();return Object(o.useFetch)(Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.search("/collections/design",{deep:!0}).where({slug:{$in:e.type},language:l.locale}).fetch();case 2:c.value=t.sent;case 3:case"end":return t.stop()}}),t)})))),{logosMd:c}}}),c=r(2),component=Object(c.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.logosMd?r("div",e._l(e.logosMd,(function(content,i){return r("div",{key:i,staticClass:"grid grid-cols-1 sm:grid-cols-3 sm:gap-6"},e._l(content.logos,(function(t,n){return r("div",{key:n,staticClass:"mt-4"},[t?r("div",[r("div",{staticClass:"border px-12 py-10 flex justify-center rounded-md max-h-36",class:"light"===t.color?"bg-secondary-black border-white":"bg-white"},[r("img",{attrs:{loading:"lazy",src:t.logoImg+".svg"}})]),e._v(" "),r("div",{staticClass:"flex w-full justify-between pt-2 pb-4"},[r("div",{staticClass:"font-semibold"},[e._v(e._s(t.type))]),e._v(" "),r("div",{staticClass:"flex space-x-2"},[r("a",{staticClass:"hover:text-primary light:text-gray-500 dark:white hover:underline",attrs:{href:t.logoImg+".svg","aria-label":"Download svg",download:""}},[e._v("SVG")]),e._v(" "),r("a",{staticClass:"hover:text-primary light:text-gray-500 dark:white hover:underline",attrs:{href:t.logoImg+".png","aria-label":"Download png",download:""}},[e._v("PNG")])])])]):e._e()])})),0)})),0):e._e()}),[],!1,null,null,null);t.default=component.exports}}]);