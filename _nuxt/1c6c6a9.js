(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{783:function(e,t,r){"use strict";r.r(t);r(60),r(24);var n={props:{value:{type:[String,Number],default:""},placeholder:{type:String,default:null},required:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},rows:{type:[String,Number],default:3},autocomplete:{type:String,default:null},appearance:{type:String,default:"default",validator:function(e){return["default","transparent"].includes(e)}},size:{type:String,default:"md",validator:function(e){return["","xxs","xs","sm","md","lg","xl"].includes(e)}},baseClass:{type:String,default:"p-2 w-full rounded-md appearance-none"},customClass:{type:String,default:null},noResize:{type:Boolean,default:!1}},computed:{sizeClass:function(){return{xxs:"text-xs",xs:"text-xs",sm:"text-sm leading-4",md:"text-sm",lg:"text-base",xl:"text-base"}[this.size]},paddingClass:function(){return{xxs:"px-1 py-0.5",xs:"px-2.5 py-1.5",sm:"px-3 py-2",md:"px-4 py-2",lg:"px-4 py-2",xl:"px-6 py-3"}[this.size]},appearanceClass:function(){return{default:"light:text-gray-500 dark:text-white dark:bg-transparent light:bg-white border light:border-gray-200 dark:border-secondary-dark focus:outline-none light:focus:border-gray-400 dark:focus:border-secondary-light",transparent:"bg-transparent border-none outline-none"}[this.appearance]},resizeClass:function(){return{true:"resize-none",false:""}[this.noResize]},textareaClass:function(){return[this.baseClass,this.customClass,this.sizeClass,this.paddingClass,this.resizeClass,this.appearanceClass].join(" ")}},watch:{value:function(){this.resizeTextarea()}},mounted:function(){this.resizeTextarea()},methods:{resizeTextarea:function(){var e=this;this.$nextTick((function(){var textarea=e.$refs.textarea;textarea.style.height="auto",textarea.style.height="".concat(textarea.scrollHeight,"px")}))},updateValue:function(e){this.$emit("input",e)}}},l=r(2),component=Object(l.a)(n,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("textarea",{ref:"textarea",class:e.textareaClass,attrs:{rows:e.rows,required:e.required,disabled:e.disabled,placeholder:e.placeholder,autocomplete:e.autocomplete},domProps:{value:e.value},on:{input:function(t){return e.updateValue(t.target.value)}}})}),[],!1,null,null,null);t.default=component.exports}}]);