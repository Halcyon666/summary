"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5869],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>b});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=l(n),g=a,b=c["".concat(u,".").concat(g)]||c[g]||m[g]||o;return n?r.createElement(b,i(i({ref:t},p),{},{components:n})):r.createElement(b,i({ref:t},p))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=g;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[c]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},9213:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={title:"Docusaurus github page",sidebar_label:"Docusaurus github page",sidebar_position:4},i=void 0,s={unversionedId:"FrontEnd/github-page-blog",id:"FrontEnd/github-page-blog",title:"Docusaurus github page",description:"refers article",source:"@site/docs/02-FrontEnd/github-page-blog.md",sourceDirName:"02-FrontEnd",slug:"/FrontEnd/github-page-blog",permalink:"/summary/FrontEnd/github-page-blog",draft:!1,editUrl:"https://github.com/Halcyon666/summary/blob/main/docs/02-FrontEnd/github-page-blog.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Docusaurus github page",sidebar_label:"Docusaurus github page",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Vue \u57fa\u78402",permalink:"/summary/FrontEnd/vue-grammer-two"},next:{title:"Vue \u9879\u76ee\u7b14\u8bb0",permalink:"/summary/FrontEnd/vue-project-notes"}},u={},l=[],p={toc:l},c="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7115631818736402440"},"refers article")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"besides: you need install yarn and run yarn install in your docs project")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/deployment#deploying-to-github-pages"},"Docusaurus Deployment")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},"name: Deploy to GitHub Pages\n\non:\n  push:\n    branches:\n      - main\n    # Review gh actions docs if you want to further define triggers, paths, etc\n    # https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#on\n\njobs:\n  deploy:\n    name: Deploy to GitHub Pages\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v3\n      - uses: actions/setup-node@v3\n        with:\n          node-version: 18\n          cache: yarn\n\n      - name: Install dependencies\n        run: yarn install --frozen-lockfile\n      - name: Build website\n        run: yarn build\n\n      # Popular action to deploy to GitHub Pages:\n      # Docs: https://github.com/peaceiris/actions-gh-pages#%EF%B8%8F-docusaurus\n      - name: Deploy to GitHub Pages\n        uses: peaceiris/actions-gh-pages@v3\n        with:\n          github_token: ${{ secrets.ACCESS_TOKEN }}\n          # Build output to publish to the `gh-pages` branch:\n          publish_dir: ./build\n          # The following lines assign commit authorship to the official\n          # GH-Actions bot for deploys to `gh-pages` branch:\n          # https://github.com/actions/checkout/issues/13#issuecomment-724415212\n          # The GH actions bot is used by default if you didn't specify the two fields.\n          # You can swap them out with your own user credentials.\n\n")),(0,a.kt)("admonition",{title:"\u534f\u8bae",type:"tip"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u672c\u4f5c\u54c1\u4ee3\u7801\u90e8\u5206\u91c7\u7528 ",(0,a.kt)("a",{parentName:"p",href:"https://www.apache.org/licenses/LICENSE-2.0"},"Apache 2.0\u534f\u8bae"),"\u8fdb\u884c\u8bb8\u53ef\u3002\u9075\u5faa\u8bb8\u53ef\u7684\u524d\u63d0\u4e0b\uff0c\u4f60\u53ef\u4ee5\u81ea\u7531\u5730\u5bf9\u4ee3\u7801\u8fdb\u884c\u4fee\u6539\uff0c\u518d\u53d1\u5e03\uff0c\u53ef\u4ee5\u5c06\u4ee3\u7801\u7528\u4f5c\u5546\u4e1a\u7528\u9014\u3002\u4f46\u8981\u6c42\u4f60\uff1a"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u7f72\u540d"),"\uff1a\u5728\u539f\u6709\u4ee3\u7801\u548c\u884d\u751f\u4ee3\u7801\u4e2d\uff0c\u4fdd\u7559\u539f\u4f5c\u8005\u7f72\u540d\u53ca\u4ee3\u7801\u6765\u6e90\u4fe1\u606f\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u4fdd\u7559\u8bb8\u53ef\u8bc1"),"\uff1a\u5728\u539f\u6709\u4ee3\u7801\u548c\u884d\u751f\u4ee3\u7801\u4e2d\uff0c\u4fdd\u7559Apache 2.0\u534f\u8bae\u6587\u4ef6\u3002"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u672c\u4f5c\u54c1\u6587\u6863\u90e8\u5206\u91c7\u7528",(0,a.kt)("a",{parentName:"p",href:"http://creativecommons.org/licenses/by/4.0/"},"\u77e5\u8bc6\u5171\u4eab\u7f72\u540d 4.0 \u56fd\u9645\u8bb8\u53ef\u534f\u8bae"),"\u8fdb\u884c\u8bb8\u53ef\u3002 \u9075\u5faa\u8bb8\u53ef\u7684\u524d\u63d0\u4e0b\uff0c\u4f60\u53ef\u4ee5\u81ea\u7531\u5730\u5171\u4eab\uff0c\u5305\u62ec\u5728\u4efb\u4f55\u5a92\u4ecb\u4e0a\u4ee5\u4efb\u4f55\u5f62\u5f0f\u590d\u5236\u3001\u53d1\u884c\u672c\u4f5c\u54c1\uff0c\u4ea6\u53ef\u4ee5\u81ea\u7531\u5730\u6f14\u7ece\u3001\u4fee\u6539\u3001\u8f6c\u6362\u6216\u4ee5\u672c\u4f5c\u54c1\u4e3a\u57fa\u7840\u8fdb\u884c\u4e8c\u6b21\u521b\u4f5c\u3002\u4f46\u8981\u6c42\u4f60\uff1a"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u7f72\u540d"),"\uff1a\u5e94\u5728\u4f7f\u7528\u672c\u6587\u6863\u7684\u5168\u90e8\u6216\u90e8\u5206\u5185\u5bb9\u65f6\u5019\uff0c\u6ce8\u660e\u539f\u4f5c\u8005\u53ca\u6765\u6e90\u4fe1\u606f\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u975e\u5546\u4e1a\u6027\u4f7f\u7528"),"\uff1a\u4e0d\u5f97\u7528\u4e8e\u5546\u4e1a\u51fa\u7248\u6216\u5176\u4ed6\u4efb\u4f55\u5e26\u6709\u5546\u4e1a\u6027\u8d28\u7684\u884c\u4e3a\u3002\u5982\u9700\u5546\u4e1a\u4f7f\u7528\uff0c\u8bf7\u8054\u7cfb\u4f5c\u8005\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u76f8\u540c\u65b9\u5f0f\u5171\u4eab\u7684\u6761\u4ef6"),"\uff1a\u5728\u672c\u6587\u6863\u57fa\u7840\u4e0a\u6f14\u7ece\u3001\u4fee\u6539\u7684\u4f5c\u54c1\uff0c\u5e94\u5f53\u7ee7\u7eed\u4ee5\u77e5\u8bc6\u5171\u4eab\u7f72\u540d 4.0\u56fd\u9645\u8bb8\u53ef\u534f\u8bae\u8fdb\u884c\u8bb8\u53ef\u3002"))))))}m.isMDXComponent=!0}}]);