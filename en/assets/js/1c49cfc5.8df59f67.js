"use strict";(self.webpackChunksummary=self.webpackChunksummary||[]).push([[2905],{3778:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var o=t(1527),s=t(73);const i={title:"Docusaurus github page",sidebar_label:"Docusaurus github page",sidebar_position:4},a=void 0,r={id:"Frontend/github-page-blog",title:"Docusaurus github page",description:"refers article",source:"@site/docs/02-Frontend/github-page-blog.mdx",sourceDirName:"02-Frontend",slug:"/Frontend/github-page-blog",permalink:"/en/Frontend/github-page-blog",draft:!1,unlisted:!1,editUrl:"https://github.com/Halcyon666/summary/edit/main/i18n/en/docusaurus-plugin-content-docs/current/02-Frontend/github-page-blog.mdx",tags:[],version:"current",lastUpdatedAt:1710340003,formattedLastUpdatedAt:"Mar 13, 2024",sidebarPosition:4,frontMatter:{title:"Docusaurus github page",sidebar_label:"Docusaurus github page",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Vue \u57fa\u78402",permalink:"/en/Frontend/vue-grammer-two"},next:{title:"Vue \u9879\u76ee\u7b14\u8bb0",permalink:"/en/Frontend/vue-project-notes"}},u={},c=[];function l(e){const n={a:"a",blockquote:"blockquote",code:"code",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://juejin.cn/post/7115631818736402440",children:"refers article"})}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"besides: you need install yarn and run yarn install in your docs project"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://docusaurus.io/docs/deployment#deploying-to-github-pages",children:"Docusaurus Deployment"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yml",children:"name: Deploy to GitHub Pages\n\non:\n  push:\n    branches:\n      - main\n    # Review gh actions docs if you want to further define triggers, paths, etc\n    # https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#on\n\njobs:\n  deploy:\n    name: Deploy to GitHub Pages\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v3\n      - uses: actions/setup-node@v3\n        with:\n          node-version: 18\n          cache: yarn\n\n      - name: Install dependencies\n        run: yarn install --frozen-lockfile\n      - name: Build website\n        run: yarn build\n\n      # Popular action to deploy to GitHub Pages:\n      # Docs: https://github.com/peaceiris/actions-gh-pages#%EF%B8%8F-docusaurus\n      - name: Deploy to GitHub Pages\n        uses: peaceiris/actions-gh-pages@v3\n        with:\n          github_token: ${{ secrets.ACCESS_TOKEN }}\n          # Build output to publish to the `gh-pages` branch:\n          publish_dir: ./build\n          # The following lines assign commit authorship to the official\n          # GH-Actions bot for deploys to `gh-pages` branch:\n          # https://github.com/actions/checkout/issues/13#issuecomment-724415212\n          # The GH actions bot is used by default if you didn't specify the two fields.\n          # You can swap them out with your own user credentials.\n\n"})})]})}function d(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},73:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>a});var o=t(959);const s={},i=o.createContext(s);function a(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);