import{_ as k,d as P,q as m,k as M,o,c as a,b as u,T as L,w,u as T,a as t,t as l,F as h,v as x,x as j,s as D,e as N,f as B}from"./entry-b1521372.mjs";import{u as C}from"./asyncData-cb9e60a7.mjs";import{I as H}from"./arrow-right-218469e7.mjs";const S=P({__name:"medium",setup(v,{expose:f}){f();const{data:d,pending:e,error:p}=C("medium",()=>$fetch("/api/medium")),g=m(()=>{var n,r;return(r=(n=d.value)==null?void 0:n.data)==null?void 0:r.items[0]}),_=m(()=>{var n,r;return(r=(n=d.value)==null?void 0:n.data)==null?void 0:r.items.slice(1)}),i=m(()=>{var r,b;let n=[];return(b=(r=d.value)==null?void 0:r.data)==null||b.items.forEach(y=>n.push(...y.categories)),[...new Set(n)]});M(e,()=>{D.loading=e.value},{immediate:!0});const{setMeta:s}=T();s("My Medium \u{1F4D2} - Kimmy ");const c={data:d,pending:e,error:p,latestPost:g,otherPost:_,tagList:i,setMeta:s,IconArrow:H};return Object.defineProperty(c,"__isScriptSetup",{enumerable:!1,value:!0}),c}}),V={class:"w-full"},A={key:0,class:"font-bold text-5xl md:text-7xl text-center font-space"},E={key:1,class:"font-bold text-5xl md:text-7xl text-center font-space"},F={key:2},I=t("h1",{class:"font-bold text-5xl md:text-7xl text-center font-space"},"Medium",-1),q={key:0,class:"mt-6 md:mt-12 mb-8 md:mb-20 rounded-4xl p-4 md:p-8 shadow-inset-white dark:shadow-none transform hover:scale-102 transition duration-300"},z=["href"],K=["src","alt"],O={class:"p-4 md:p-6"},G={class:"text-sm text-warm-gray-400"},J={class:"font-bold text-2xl md:text-4xl font-space tracking-tight"},Q=["innerHTML"],R={class:"mt-4 flex flex-wrap flex-row"},U={class:"tag mr-2"},W={class:"md:grid grid-cols-2 gap-6"},X={class:"w-full mb-8 md:mb-12 rounded-4xl p-4 md:p-6 shadow-inset-white dark:shadow-none transform hover:scale-102 transition duration-300"},Y=["href"],Z=["src","alt"],$={class:"p-4 md:p-6 flex flex-col justify-between"},tt={class:"text-sm text-warm-gray-400"},et={class:"font-bold text-2xl font-space tracking-tight"},st=["innerHTML"],ot={class:"mt-4 flex flex-wrap flex-row"},at={class:"tag mr-2"},nt={class:"flex justify-center"},rt=N(" Blog ");function lt(v,f,d,e,p,g){const _=B;return o(),a("div",V,[u(L,{name:"fade",mode:"out-in"},{default:w(()=>{var i;return[!((i=e.data)!=null&&i.data)&&!e.error?(o(),a("h1",A,"Medium")):e.error?(o(),a("h1",E,"Error")):(o(),a("div",F,[I,e.latestPost?(o(),a("div",q,[t("a",{href:`${e.latestPost.guid}`,target:"_blank"},[t("img",{class:"rounded-2xl md:rounded-4xl aspect-video object-cover",src:e.latestPost.thumbnail,alt:e.latestPost.title},null,8,K),t("div",O,[t("p",G,l(e.latestPost.pubDate),1),t("h3",J,l(e.latestPost.title),1),t("p",{class:"mt-4 md:text-xl",innerHTML:e.latestPost.description},null,8,Q),t("ul",R,[(o(!0),a(h,null,x(e.latestPost.categories,s=>(o(),a("li",U,"#"+l(s),1))),256))])])],8,z)])):j("",!0),t("ul",W,[(o(!0),a(h,null,x(e.otherPost,s=>(o(),a("li",X,[t("a",{href:`${s.guid}`,target:"_blank"},[t("img",{class:"w-full h-auto rounded-2xl md:rounded-3xl aspect-video object-cover",src:s.thumbnail,alt:s.title},null,8,Z),t("div",$,[t("div",null,[t("p",tt,l(s.pubDate),1),t("h3",et,l(s.title),1),t("p",{class:"mt-2",innerHTML:s.description},null,8,st)]),t("ul",ot,[(o(!0),a(h,null,x(s.categories,c=>(o(),a("li",at,"#"+l(c),1))),256))])])],8,Y)]))),256))]),t("div",nt,[u(_,{to:"/blog",class:"button-next group my-12"},{default:w(()=>[rt,u(e.IconArrow,{class:"w-6 h-6 duration transition-all ml-2 group-hover:ml-3"})]),_:1})])]))]}),_:1})])}var _t=k(S,[["render",lt]]);export{_t as default};