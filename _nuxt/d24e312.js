(window.webpackJsonp=window.webpackJsonp||[]).push([[192],{511:function(t,e,n){var content=n(551);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(46).default)("359c0ec8",content,!0,{sourceMap:!1})},550:function(t,e,n){"use strict";n(511)},551:function(t,e,n){var o=n(45)((function(i){return i[1]}));o.push([t.i,".highlight-underline[data-v-ae77f522]{transition:left .15s,top .15s,width .15s,height .15s}",""]),o.locals={},t.exports=o},566:function(t,e,n){"use strict";n.r(e);n(60);var o=n(0),l=Object(o.defineComponent)({props:{tabs:{type:Array,required:!0},activeTabIndex:{type:Number,required:!0}},mounted:function(){this.updateHighlightUnderlinePosition()},methods:{updateTabs:function(i){var t=this;this.$emit("update",i),this.$nextTick((function(){return t.updateHighlightUnderlinePosition()}))},updateHighlightUnderlinePosition:function(){var t=this.$refs.tabs[this.activeTabIndex];if(t){var e=this.$refs["highlight-underline"];e.style.left="".concat(t.offsetLeft,"px"),e.style.top="".concat(t.offsetTop,"px"),e.style.width="".concat(t.clientWidth,"px"),e.style.height="".concat(t.clientHeight,"px")}}}}),r=(n(550),n(2)),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"relative text-white rounded-t-lg d-code-group-header-bg"},[n("div",{staticClass:"relative z-0 px-2"},[t._l(t.tabs,(function(e,i){var label=e.label;return n("button",{key:""+i+label,ref:"tabs",refInFor:!0,staticClass:"\n        relative\n        px-3\n        py-1.5\n        xs:py-3\n        my-1.5\n        xs:my-0\n        text-sm\n        font-mono font-medium\n        tracking-tight\n        focus:outline-none\n      ",class:[t.activeTabIndex===i?"active text-gray-800 dark:text-white":"d-prose-code-filename-text"],on:{click:function(e){return t.updateTabs(i)}}},[t._v("\n      "+t._s(label)+"\n    ")])})),t._v(" "),n("span",{ref:"highlight-underline",staticClass:"absolute -z-1 highlight-underline h-full xs:py-1.5"},[n("span",{staticClass:"flex w-full h-full d-code-group-tab rounded-md"})])],2),t._v(" "),t._t("footer")],2)}),[],!1,null,"ae77f522",null);e.default=component.exports}}]);