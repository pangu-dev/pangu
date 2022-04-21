(window.webpackJsonp=window.webpackJsonp||[]).push([[22,30],{548:function(t,e,n){var content=n(587);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(46).default)("06efc3a9",content,!0,{sourceMap:!1})},586:function(t,e,n){"use strict";n(548)},587:function(t,e,n){var r=n(45)((function(i){return i[1]}));r.push([t.i,"a.button-link[data-v-b8b6b57c]{background-color:var(--primary-500);border-color:transparent;border-radius:.375rem;border-width:1px;display:inline-flex;align-items:center;flex:none;font-size:.875rem;line-height:1.25rem;line-height:1rem;padding:.375rem .75rem;--tw-text-opacity:1;color:rgba(255,255,255,var(--tw-text-opacity));transition-property:background-color,border-color,color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s;transition-duration:.2s}a.button-link[data-v-b8b6b57c]:hover{background-color:var(--primary-600)}a.button-link[data-v-b8b6b57c]:focus{outline:2px solid transparent;outline-offset:2px;--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 transparent);--tw-ring-offset-opacity:1;--tw-ring-offset-color:rgba(255,255,255,var(--tw-ring-offset-opacity));--tw-ring-offset-width:2px;--tw-ring-color:var(--primary-600)}.dark a.button-link[data-v-b8b6b57c]:focus{--tw-ring-offset-opacity:1;--tw-ring-offset-color:rgba(17,24,39,var(--tw-ring-offset-opacity))}a.button-link.medium[data-v-b8b6b57c]{font-size:1rem;line-height:1.5rem;line-height:1rem;padding:.5rem 1rem}a.button-link.large[data-v-b8b6b57c]{font-size:1.125rem;line-height:1.5rem;padding:.625rem 1.5rem}",""]),r.locals={},t.exports=r},786:function(t,e,n){"use strict";n.r(e);var r=n(0),o=Object(r.defineComponent)({props:{href:{type:String,default:""},blank:{type:Boolean,default:!1},size:{type:String,default:"medium"},bold:{type:Boolean,default:!1}}}),l=(n(586),n(2)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Link",{staticClass:"button-link",class:[t.size,t.bold?"font-semibold":"font-medium"],attrs:{to:t.href},scopedSlots:t._u([{key:"href",fn:function(){return[t.blank?n("IconExternalLink",{staticClass:"w-4 h-4 ml-2"}):t._e()]},proxy:!0}])},[n("Markdown",{attrs:{use:t.$slots.default,unwrap:"p ul li"}})],1)}),[],!1,null,"b8b6b57c",null);e.default=component.exports;installComponents(component,{Markdown:n(271).default,IconExternalLink:n(275).default,Link:n(273).default})},950:function(t,e,n){"use strict";n.r(e);var r=n(0),o=Object(r.defineComponent)({props:{cta:{type:Array,default:function(){return["Get started","/get-started"]}},secondary:{type:Array,default:function(){return["Open on GitHub","https://github.com"]}},snippet:{type:[String,Boolean],default:function(){return!1}}}}),l=n(2),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"py-12 lg:py-24 d-container-content"},[n("div",{staticClass:"flex flex-col lg:flex-row my-8 md:my-16"},[n("div",{staticClass:"flex flex-col items-center pr-0 lg:items-start lg:pr-8 lg:w-2/3"},[n("h2",{staticClass:"\n          mb-4\n          text-4xl\n          xs:text-5xl\n          font-semibold\n          sm:leading-none\n          tracking-tighter\n          text-center text-gray-900\n          lg:text-left\n          dark:text-gray-100\n          sm:text-6xl\n          lg:text-7xl\n          sm:mb-8\n        "},[n("Markdown",{attrs:{use:"title",unwrap:"p"}})],1),t._v(" "),n("p",{staticClass:"\n          mb-8\n          text-lg text-center text-gray-700\n          font-medium\n          tracking-tight\n          lg:text-left\n          sm:text-xl\n          xl:text-xl\n          leading-base\n          sm:mb-12\n          dark:text-gray-300\n        "},[n("Markdown",{attrs:{use:"description",unwrap:"p"}})],1),t._v(" "),n("div",{staticClass:"flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 lg:space-x-6 mb-8"},[n("InjectComponent",{attrs:{component:t.cta}},[n("ButtonLink",{staticClass:"mx-auto md:mx-0",attrs:{size:"large",href:t.cta[1]}},[t._v("\n            "+t._s(t.cta[0])+"\n          ")])],1),t._v(" "),t.secondary?n("InjectComponent",{attrs:{component:t.secondary}},[n("a",{staticClass:"\n              py-px\n              mt-px\n              font-medium\n              text-primary-500\n              border-b-1 border-transparent\n              dark:text-primary-400\n              hover:border-primary-500\n              dark:hover:border-primary-400\n            ",attrs:{href:t.secondary[1]}},[t._v("\n            "+t._s(t.secondary[0])+"\n          ")])]):t._e()],1)]),t._v(" "),t.snippet?n("div",{staticClass:"w-full mx-auto lg:w-1/3 sm:w-580px"},[n("div",{staticClass:"md:pl-2 md:mx"},[n("Terminal",{attrs:{snippet:t.snippet}})],1)]):t._e()])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Markdown:n(271).default,ButtonLink:n(786).default,InjectComponent:n(276).default,Terminal:n(912).default})}}]);