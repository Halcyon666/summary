"use strict";(self.webpackChunksummary=self.webpackChunksummary||[]).push([[4517],{3406:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>t,metadata:()=>c,toc:()=>u});var o=r(1527),a=r(73);const t={title:"Docusaurus DocSearch TroubleShooting",sidebar_label:"Docusaurus DocSearch TroubleShooting",sidebar_position:13,description:"Docusaurus DocSearch TroubleShooting"},s="Docusaurus DocSearch TroubleShooting",c={id:"Frontend/doc-search-docusaurus",title:"Docusaurus DocSearch TroubleShooting",description:"Docusaurus DocSearch TroubleShooting",source:"@site/docs/02-Frontend/doc-search-docusaurus.mdx",sourceDirName:"02-Frontend",slug:"/Frontend/doc-search-docusaurus",permalink:"/Frontend/doc-search-docusaurus",draft:!1,unlisted:!1,editUrl:"https://github.com/Halcyon666/summary/edit/main/docs/02-Frontend/doc-search-docusaurus.mdx",tags:[],version:"current",lastUpdatedAt:1710574421,formattedLastUpdatedAt:"2024\u5e743\u670816\u65e5",sidebarPosition:13,frontMatter:{title:"Docusaurus DocSearch TroubleShooting",sidebar_label:"Docusaurus DocSearch TroubleShooting",sidebar_position:13,description:"Docusaurus DocSearch TroubleShooting"},sidebar:"tutorialSidebar",previous:{title:"tailwind usage",permalink:"/Frontend/tailwind"},next:{title:"Basic React",permalink:"/Frontend/react"}},i={},u=[{value:"Background",id:"background",level:2},{value:"The URL Ignorance",id:"the-url-ignorance",level:2},{value:"The Invalid Application-ID or API key",id:"the-invalid-application-id-or-api-key",level:2},{value:"The misunderstand faceFilters",id:"the-misunderstand-facefilters",level:2}];function l(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"docusaurus-docsearch-troubleshooting",children:"Docusaurus DocSearch TroubleShooting"}),"\n",(0,o.jsx)(n.h2,{id:"background",children:"Background"}),"\n",(0,o.jsx)(n.p,{children:"My Docusaurus(version 3.1.0) blog deploy on GitHub Page, before I change my domain from"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"https://halcyon666.github.io/summary/"})," to ",(0,o.jsx)(n.code,{children:"https://halcyon666.top"}),", the DocSearch v2 works in my site. When I apply the"]}),"\n",(0,o.jsx)(n.p,{children:"DocSearch again for my new domain, I just do the same as before doing, the search doesn't work."}),"\n",(0,o.jsx)(n.h2,{id:"the-url-ignorance",children:"The URL Ignorance"}),"\n",(0,o.jsxs)(n.p,{children:["Firstly I checked the crawler admin ",(0,o.jsx)(n.a,{href:"https://crawler.algolia.com/",children:"https://crawler.algolia.com/"}),", I found many website url be ignore, because there are many 302 redirection in my new application."]}),"\n",(0,o.jsx)(n.p,{children:"I try search in the Preview Search, There is not a result about my markdown blogs except homepage informations."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:"https://s2.loli.net/2024/02/02/eM7Vc45PLlyGJYw.png",alt:"image-20240202002105462"})}),"\n",(0,o.jsx)(n.p,{children:"you can see my correct configuration above, and the wrong configuration below, in this case solve the scrawler ignore problems."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-react",children:"new Crawler({\n  sitemaps: [],\n  ignoreCanonicalTo: false,\n});\n"})}),"\n",(0,o.jsx)(n.p,{children:"In this time I can search in the Search Preview, but not in my site."}),"\n",(0,o.jsx)(n.h2,{id:"the-invalid-application-id-or-api-key",children:"The Invalid Application-ID or API key"}),"\n",(0,o.jsxs)(n.p,{children:["resolve Invalid Application-ID or API key, I check the helpful ",(0,o.jsx)(n.a,{href:"https://support.algolia.com/hc/en-us/articles/11217017604497-Why-am-I-getting-403-error-message-Invalid-Application-ID-or-API-key-status-403-with-DocSearch",children:"url"}),", and find my API Key is wrong, given by the DocSearch rely email, so when you encounter this error, you need check your API key in your ",(0,o.jsx)(n.a,{href:"https://dashboard.algolia.com/account/api-keys",children:"dashboard"})]}),"\n",(0,o.jsx)(n.h2,{id:"the-misunderstand-facefilters",children:"The misunderstand faceFilters"}),"\n",(0,o.jsx)(n.p,{children:"Has result in Preview Search , but not in my site."}),"\n",(0,o.jsxs)(n.p,{children:["I get both payload from Preview Search and my site, I compare those parameters, and find that there some different with my parameters.So I checked the ",(0,o.jsx)(n.a,{href:"https://docusaurus.io/docs/search#contextual-search",children:"docusaurus docs"}),", and fix this by changing the configuration."]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"This is the wrong payload Parameter in the end of the request url."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.code,{children:'facetFilters=["language:zh",["docusaurus_tag:default","docusaurus_tag:docs-default-current"]]'})}),"\n",(0,o.jsx)(n.p,{children:"and my wrong configuration is"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"contextualSearch: true,\nsearchParameters: {},\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["You need to indicate the contextualSearch to false(",(0,o.jsxs)(n.em,{children:["hint: this configuration in ",(0,o.jsx)(n.code,{children:"docusaurus.config.ts"})," or ",(0,o.jsx)(n.code,{children:"docusaurus.config.js"})]}),"), and write you language filter to in brackets. You can see my fixed example below."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:'contextualSearch: false,\nsearchParameters: {\n  // maybe yours is en\n\tfacetFilters: ["zh"],\n},\n'})})]})}function d(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},73:(e,n,r)=>{r.d(n,{Z:()=>c,a:()=>s});var o=r(959);const a={},t=o.createContext(a);function s(e){const n=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),o.createElement(t.Provider,{value:n},e.children)}}}]);