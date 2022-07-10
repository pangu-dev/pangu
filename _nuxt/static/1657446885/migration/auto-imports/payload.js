__NUXT_JSONP__("/migration/auto-imports", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){return {data:[{page:{key:"content:migration:3.auto-imports.md",generatedAt:new Date(1657446975993),mtime:new Date(1657446975988),slug:k,title:l,position:"999900030000",to:"\u002Fmigration\u002Fauto-imports",draft:e,page:f,language:"en",head:{title:"Nuxt 2 to Nuxt 3: Auto Imports",titleTemplate:i},empty:e,description:m,excerpt:n,body:{raw:"---\nhead.title: 'Nuxt 2 to Nuxt 3: Auto Imports'\nhead.titleTemplate: ''\n---\n\n# Auto Imports\n\nNuxt 3 adopts a minimal friction approach, meaning wherever possible components and composables are auto-imported.\n\n::alert{type=info}\nIn the rest of the migration documentation, you will notice that key Nuxt and Vue utilities do not have explicit imports. This is not a typo; Nuxt will automatically import them for you, and you should get full type hinting if you have followed [the instructions](\u002Fmigration\u002Fconfiguration#typescript) to use Nuxt's TypeScript support.\n::\n\n[Read more about auto imports](\u002Fguide\u002Fconcepts\u002Fauto-imports)\n\n## Migration\n\n1. If you have been using `@nuxt\u002Fcomponents` in Nuxt 2, you can remove `components: true` in your `nuxt.config`. If you had a more complex setup, then note that the component options have changed somewhat. See the [components documentation](\u002Fguide\u002Fdirectory-structure\u002Fcomponents) for more information.\n\n::alert{type=info}\nYou can look at `.nuxt\u002Ftypes\u002Fcomponents.d.ts` and `.nuxt\u002Ftypes\u002Fauto-imports.d.ts` to see how Nuxt has resolved your components and composable auto-imports.\n::\n",ast:{type:"root",children:[{type:b,tag:"prose-h1",props:{class:"d-heading-title",id:k},children:[{type:a,value:l}]},{type:a,value:c},{type:b,tag:g,props:{class:"d-heading-description"},children:[{type:a,value:m}]},{type:a,value:c},{type:b,tag:o,props:{type:p},children:[{type:b,tag:g,props:{},children:[{type:a,value:"In the rest of the migration documentation, you will notice that key Nuxt and Vue utilities do not have explicit imports. This is not a typo; Nuxt will automatically import them for you, and you should get full type hinting if you have followed "},{type:b,tag:h,props:{href:"\u002Fmigration\u002Fconfiguration#typescript"},children:[{type:a,value:"the instructions"}]},{type:a,value:" to use Nuxt's TypeScript support."}]}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:b,tag:h,props:{href:"\u002Fguide\u002Fconcepts\u002Fauto-imports"},children:[{type:a,value:"Read more about auto imports"}]}]},{type:a,value:c},{type:b,tag:"prose-h2",props:{id:q},children:[{type:b,tag:h,props:{href:"#migration"},children:[{type:a,value:r}]}]},{type:a,value:c},{type:b,tag:"prose-ol",props:{},children:[{type:a,value:c},{type:b,tag:"prose-li",props:{},children:[{type:a,value:c},{type:a,value:"If you have been using "},{type:b,tag:d,props:{},children:[{type:a,value:"@nuxt\u002Fcomponents"}]},{type:a,value:" in Nuxt 2, you can remove "},{type:b,tag:d,props:{},children:[{type:a,value:"components: true"}]},{type:a,value:" in your "},{type:b,tag:d,props:{},children:[{type:a,value:"nuxt.config"}]},{type:a,value:". If you had a more complex setup, then note that the component options have changed somewhat. See the "},{type:b,tag:h,props:{href:"\u002Fguide\u002Fdirectory-structure\u002Fcomponents"},children:[{type:a,value:"components documentation"}]},{type:a,value:" for more information."},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:o,props:{type:p},children:[{type:b,tag:g,props:{},children:[{type:a,value:"You can look at "},{type:b,tag:d,props:{},children:[{type:a,value:".nuxt\u002Ftypes\u002Fcomponents.d.ts"}]},{type:a,value:" and "},{type:b,tag:d,props:{},children:[{type:a,value:".nuxt\u002Ftypes\u002Fauto-imports.d.ts"}]},{type:a,value:" to see how Nuxt has resolved your components and composable auto-imports."}]}]}]},toc:{title:i,searchDepth:j,depth:j,links:[{id:q,depth:j,text:r}]}},template:"Docs"},templateOptions:{header:f,footer:f,aside:f,asideClass:i,fluid:e,banner:e},_img:{}}],fetch:{"0":{headerLinks:[{title:"Getting Started",to:"\u002Fgetting-started\u002Fquick-start"},{title:"Guide",to:"\u002Fguide\u002Fconcepts\u002Fintroduction"},{title:"API",to:"\u002Fapi\u002Fcomposables\u002Fuse-async-data"},{title:"Examples",to:"\u002Fexamples\u002Fessentials\u002Fhello-world"},{title:"Community",to:"\u002Fcommunity\u002Fgetting-help"}]},"1":{repoUrl:"https:\u002F\u002Fgithub.com\u002Fpangu-dev\u002Fpangu",prev:{slug:"configuration",to:"\u002Fmigration\u002Fconfiguration",title:"Configuration"},next:{slug:"meta",to:"\u002Fmigration\u002Fmeta",title:"Meta Tags"}},_lazyComponents:new Set(["ProseParagraph","ButtonLink","HomeHero","SectionContentItem","HomeFeatures","IconNuxtNitro","Headline","ProseStrong","ProseA","ProseCodeInline","NuxtContainer","IconNuxtBridge","ProseH3","ProseLi","ProseUl","List","ProseH1","ProseH2","ProseCode","Alert","CodeGroup","ProseEm","ReadMore","Sandbox","ProseTh","ProseTr","ProseThead","ProseTd","ProseTbody","ProseTable","ProseBlockquote","ProseImg","NeedContribution","LinkExample","ProseOl","ProseH4","IconCloud","LogoAzure","LogoCloudFlare","LogoFirebase","LogoNetlify","LogoVercel"])},mutations:n}}("text","element","\n","prose-code-inline",false,true,"prose-paragraph","prose-a","",2,"auto-imports","Auto Imports","Nuxt 3 adopts a minimal friction approach, meaning wherever possible components and composables are auto-imported.",void 0,"alert","info","migration","Migration")));