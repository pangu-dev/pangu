(window.webpackJsonp=window.webpackJsonp||[]).push([[111,87,142],{285:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var r=n(3);function l(){var t=Object(r.m)().$docus;return{settings:Object(r.a)((function(){var e;return null==t||null===(e=t.settings)||void 0===e?void 0:e.value}))}}},288:function(t,e,n){"use strict";n.d(e,"b",(function(){return l})),n.d(e,"a",(function(){return d})),n.d(e,"c",(function(){return o.a}));n(9);var r=n(3);function l(){var t=Object(r.j)(),e=Object(r.j)([]),n=Object(r.j)([]),l=function(t){return t.forEach((function(t){var n=t.target.id;t.isIntersecting?e.value.push(n):e.value=e.value.filter((function(t){return t!==n}))}))};return Object(r.p)(e,(function(t,e){0===t.length?n.value=e:n.value=t})),Object(r.f)((function(){return t.value=new IntersectionObserver(l)})),Object(r.g)((function(){var e;return null===(e=t.value)||void 0===e?void 0:e.disconnect()})),{visibleHeadings:e,activeHeadings:n,updateHeadings:function(e){return e.forEach((function(e){t.value.observe(e)}))}}}n(26),n(33);var c=n(59),o=n(285);function d(){var t=Object(o.a)().settings,e=Object(r.a)((function(){return Object(c.joinURL)(t.value.github.url,t.value.github.repo)}));return{repoUrl:e,getPageLink:function(n){return Object(r.a)((function(){if(t.value.github){var r=n.key.split(":"),l=r[r.length-2],source=r[r.length-1];return[e.value,"edit",t.value.github.branch,t.value.github.dir||"",t.value.contentDir,l,"".concat(source).replace(/^\//g,"")].filter(Boolean).join("/")}}))}}}},305:function(t,e,n){"use strict";n.r(e);var r=n(3),l=Object(r.b)({props:{label:{type:String,default:""}}}),c=n(4),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",{staticClass:"\n    text-xs text-primary-500\n    px-2.5\n    py-1.5\n    leading-none\n    rounded\n    font-semibold\n    uppercase\n    tracking-wide\n    bg-primary-100\n    dark:bg-primary-900 dark:text-primary-400\n  "},[t._v("\n  "+t._s(t.label)+"\n")])}),[],!1,null,null,null);e.default=component.exports},392:function(t,e,n){"use strict";n.r(e);var r=n(3),l=n(288),c=Object(r.b)({props:{size:{type:String,default:"w-6 h-6"},padding:{type:String,default:"p-0"}},setup:function(){var t=Object(l.c)().settings;return{repoUrl:Object(l.a)().repoUrl,settings:t}}}),o=n(4),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex"},[t.settings.twitter?n("a",{staticClass:"d-icon",class:[t.padding],attrs:{href:"https://twitter.com/"+t.settings.twitter,target:"_blank",rel:"noopener noreferrer",title:"Twitter",name:"Twitter"}},[n("IconTwitter",{class:t.size})],1):t._e(),t._v(" "),t.settings.github&&t.settings.github.repo&&t.repoUrl?n("a",{staticClass:"d-icon",class:[t.padding],attrs:{href:"https://github.com/"+t.settings.github.repo,target:"_blank",rel:"noopener noreferrer",title:"GitHub",name:"GitHub"}},[n("IconGitHub",{class:t.size})],1):t._e()])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{IconTwitter:n(197).default,IconGitHub:n(196).default})},490:function(t,e,n){"use strict";n.r(e);var r=n(3),l=Object(r.b)({props:{title:{type:String,default:"Hero title"},description:{type:String,default:"I am the Hero description, with some text useful to go with the title."},cta:{type:Object,default:function(){return{label:"CTA label",description:"CTA description",placeholder:"CTA placeholder"}}},imageUrl:{type:String,default:"https://source.unsplash.com/random"}}}),c=n(4),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"flex flex-col md:flex-row d-container-content py-12 md:py-24"},[n("div",{staticClass:"w-full md:w-1/2 flex flex-col justify-center mb-8 md:mb-0"},[n("div",{staticClass:"flex flex-col items-center md:items-start mb-2"},[n("InfoLabel",{staticClass:"mx-2 mb-4",attrs:{label:"🚀 Coming Soon"}}),t._v(" "),n("h2",{staticClass:"\n          mb-2\n          text-5xl\n          font-semibold\n          sm:leading-none\n          tracking-tighter\n          text-center text-gray-900\n          md:text-left\n          dark:text-gray-100\n          sm:text-6xl\n          lg:text-7xl\n          sm:mb-4\n        "},[t._v("\n        "+t._s(t.title)+"\n      ")]),t._v(" "),n("p",{staticClass:"\n          mb-2\n          text-base text-center text-gray-700\n          md:text-left\n          sm:text-xl\n          xl:text-2xl\n          leading-base\n          sm:mb-4\n          dark:text-gray-300\n        "},[t._v("\n        "+t._s(t.description)+"\n      ")])],1),t._v(" "),n("div",{staticClass:"w-full"},[n("div",{staticClass:"flex flex-col max-w-md mx-auto md:mx-0"},[n("p",{staticClass:"text-sm mb-2 font-medium text-center md:text-left text-gray-600 dark:text-gray-500"},[t._v("\n          "+t._s(t.cta.description)+"\n        ")]),t._v(" "),n("div",{staticClass:"\n            flex flex-col\n            md:flex-row\n            border border-gray-300\n            placeholder-gray-900\n            dark:border-gray-700\n            rounded-md\n            p-1\n            w-full\n            mb-2\n          "},[n("input",{staticClass:"\n              flex-1\n              py-3\n              px-3\n              focus:outline-none\n              bg-transparent\n              dark:text-gray-100\n              placeholder-gray-400\n              dark:placeholder-gray-600\n            ",attrs:{type:"text",placeholder:t.cta.placeholder}}),t._v(" "),n("button",{staticClass:"\n              inline-block\n              font-semibold\n              text-center\n              items-center\n              flex-none\n              px-6\n              py-3\n              text-lg\n              leading-6\n              rounded-md\n              text-white\n              transition-colors\n              duration-200\n              border border-transparent border-l-0\n              bg-primary-500\n              hover:bg-primary-600\n              focus:outline-none\n              select-none\n            "},[t._v("\n            "+t._s(t.cta.label)+"\n          ")])]),t._v(" "),n("SocialIcons",{attrs:{padding:"p-1.5"}})],1)])]),t._v(" "),n("div",{staticClass:"w-full md:w-1/2 flex-col flex"},[n("img",{staticClass:"max-h-64 md:max-h-96 mx-auto",attrs:{src:t.imageUrl,alt:""}})])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{InfoLabel:n(305).default,SocialIcons:n(392).default})}}]);