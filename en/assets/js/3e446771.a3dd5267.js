"use strict";(self.webpackChunksummary=self.webpackChunksummary||[]).push([[4517],{9989:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var t=r(1527),a=r(8672);const s={},o="how to handle url be ignored problem?",c={id:"Frontend/doc-search-docusaurus",title:"how to handle url be ignored problem?",description:"Background",source:"@site/docs/02-Frontend/doc-search-docusaurus.mdx",sourceDirName:"02-Frontend",slug:"/Frontend/doc-search-docusaurus",permalink:"/en/Frontend/doc-search-docusaurus",draft:!1,unlisted:!1,editUrl:"https://github.com/Halcyon666/summary/edit/main/i18n/en/docusaurus-plugin-content-docs/current/02-Frontend/doc-search-docusaurus.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"tailwind usage",permalink:"/en/Frontend/tailwind"},next:{title:"\u57fa\u6570\u6392\u5e8f",permalink:"/en/Algorithm/Base-Sort"}},i={},l=[{value:"Background",id:"background",level:3}];function d(e){const n={a:"a",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"how-to-handle-url-be-ignored-problem",children:"how to handle url be ignored problem?"}),"\n",(0,t.jsx)(n.h3,{id:"background",children:"Background"}),"\n",(0,t.jsx)(n.p,{children:"url be ignored"}),"\n",(0,t.jsx)(n.p,{children:"Today"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-react",children:"new Crawler({\n  sitemaps: [],\n  ignoreCanonicalTo: false,\n\n});\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-react",children:'  \nnew Crawler({\n  sitemaps: ["https://halcyon666.top/sitemap.xml"],\n  ignoreCanonicalTo: true,\n\n});\n'})}),"\n",(0,t.jsx)(n.p,{children:"resolve Invalid Application-ID or API key"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://support.algolia.com/hc/en-us/articles/11217017604497-Why-am-I-getting-403-error-message-Invalid-Application-ID-or-API-key-status-403-with-DocSearch",children:"https://support.algolia.com/hc/en-us/articles/11217017604497-Why-am-I-getting-403-error-message-Invalid-Application-ID-or-API-key-status-403-with-DocSearch"})}),"\n",(0,t.jsx)(n.p,{children:"has result in Search Preview, but not in my site"}),"\n",(0,t.jsxs)(n.p,{children:['facetFilters=["language',":zh",'",["docusaurus_tag',":default",'","docusaurus_tag',":docs-default-current",'"]]']}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"  contextualSearch: true,\n  searchParameters: {},\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:' contextualSearch: false,\n  searchParameters: {\n      // maybe yours is en\n    facetFilters: ["zh"],\n  },\n'})})]})}function u(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8672:(e,n,r)=>{r.d(n,{Z:()=>c,a:()=>o});var t=r(959);const a={},s=t.createContext(a);function o(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);