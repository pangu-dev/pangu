(window.webpackJsonp=window.webpackJsonp||[]).push([[54,125,129],{489:function(t,e,n){"use strict";n.r(e);var l=n(0),r=Object(l.defineComponent)({props:{tag:{type:String,default:"div"}}}),o=n(2),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)(t.tag,{tag:"Component",staticClass:"relative w-full d-container-content"},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},789:function(t,e,n){"use strict";n.r(e);var l=n(0),r=Object(l.defineComponent)({props:{name:{type:String,required:!0},color:{type:String,default:"primary"},to:{type:String,required:!0},icon:{type:String,default:"IconChevronRight"},blank:{type:Boolean,default:!0},size:{type:String,default:"md"}}}),o=n(2),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Link",{staticClass:"relative inline-flex items-center font-bold group flex-nowrap max-w-max",class:"text-"+t.color,attrs:{to:""+t.to,blank:t.blank}},[n("span",{class:[{"text-md 2xl:text-base ":"sm"===t.size},{"text-lg":"md"===t.size},{"text-xl":"lg"===t.size}]},[t._v(t._s(t.name))]),t._v(" "),n(t.icon,{tag:"Component",staticClass:"ml-2",class:"sm"===t.size?"w-4 h-4":"w-5 h-5"}),t._v(" "),n("span",{staticClass:"absolute -bottom-2 h-0.5 w-8 group-hover:w-full transition-all",class:"bg-"+t.color})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Link:n(273).default})},965:function(t,e,n){"use strict";n.r(e);var l=n(4),r=(n(15),n(47),n(0)),o=Object(r.defineComponent)({props:{category:{type:String,default:"Category"},announcementsCategory:{type:String,default:""},eventsCategory:{type:String,default:""},articleLinkTitle:{type:String,default:""}},setup:function(){var t=Object(r.useContext)(),e=t.$docus,n=t.i18n,o=Object(r.ref)([]);return Object(r.useFetch)(Object(l.a)(regeneratorRuntime.mark((function t(){var l,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.search("/announcements",{deep:!0}).where({language:n.locale}).sortBy("position","asc").limit(1).fetch();case 2:return l=t.sent,t.next=5,e.search("/collections/events",{deep:!0}).where({slug:{$ne:""},language:n.locale}).sortBy("position","desc").limit(1).fetch();case 5:r=t.sent,o.value.push(l[0]),o.value.push(r[0].events[r[0].events.length-1]);case 8:case"end":return t.stop()}}),t)})))),{posts:o}}}),c=n(2),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"pb-20 pt-20 bg-sky-darker text-white"},[n("NuxtContainer",[n("div",{staticClass:"flex flex-col items-center xl:items-start col-span-12"},[n("div",{staticClass:"mb-2"},[n("span",{staticClass:"text-primary font-bold text-lg"},[t._v(t._s(t.category)+" ")])]),t._v(" "),n("h2",{staticClass:"mb-2 font-serif font-normal text-display-6 md:text-display-5 2xl:text-display-4"},[n("Markdown",{attrs:{use:"title",unwrap:"p"}})],1),t._v(" "),n("p",{staticClass:"mb-12 font-normal text-body-base md:text-body-lg 2xl:text-body-xl w-1/2 text-center xl:text-left"},[n("Markdown",{attrs:{use:"description",unwrap:"p"}})],1),t._v(" "),n("ul",{staticClass:"flex flex-col items-start grid grid-cols-1 sm:grid-cols-2 gap-8"},t._l(t.posts,(function(e,l){return n("li",{key:l},[e?n("div",[n("div",{staticClass:"aspect-w-16 aspect-h-8 bg-gray-100 overflow-hidden dark:bg-secondary-darker mb-4 rounded-lg"},[n("NuxtImg",{staticClass:"object-cover",attrs:{src:e.imgUrl||e.logo,alt:e.title,loading:"lazy"}})],1),t._v(" "),n("span",{staticClass:"text-primary text-body-base lg:text-body-lg font-bold mb-2"},[t._v(t._s(l>0?t.eventsCategory:t.announcementsCategory))]),t._v(" "),n("h3",{staticClass:"text-body-xl lg:text-body-2xl font-bold mb-2"},[t._v(t._s(e.title))]),t._v(" "),n("p",{staticClass:"mb-4 text-body-base lg:text-body-lg truncate"},[t._v(t._s(e.description))]),t._v(" "),n("MarketingLink",{attrs:{name:t.articleLinkTitle,to:e.to||e.link}})],1):t._e()])})),0)])])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Markdown:n(271).default,MarketingLink:n(789).default,NuxtContainer:n(489).default})}}]);