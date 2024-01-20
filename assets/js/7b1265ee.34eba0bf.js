"use strict";(self.webpackChunksummary=self.webpackChunksummary||[]).push([[7955],{5850:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>o});var i=n(1527),r=n(8672);const s={title:"integrate husky prettier etc",sidebar_label:"integrate husky prettier etc",sidebar_position:11},l="How to integrate husky prettier etc in Vue project?",a={id:"Frontend/Integrate husky prettier etc",title:"integrate husky prettier etc",description:"Create Project with vite",source:"@site/docs/02-Frontend/Integrate husky prettier etc.mdx",sourceDirName:"02-Frontend",slug:"/Frontend/Integrate husky prettier etc",permalink:"/summary/Frontend/Integrate husky prettier etc",draft:!1,unlisted:!1,editUrl:"https://github.com/Halcyon666/summary/blob/main/02-Frontend/Integrate husky prettier etc.mdx",tags:[],version:"current",sidebarPosition:11,frontMatter:{title:"integrate husky prettier etc",sidebar_label:"integrate husky prettier etc",sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"uni-app\u5f00\u53d1",permalink:"/summary/Frontend/uni-app"},next:{title:"tailwind usage",permalink:"/summary/Frontend/tailwind"}},c={},o=[{value:"Create Project with vite",id:"create-project-with-vite",level:2},{value:"Install Dependencies",id:"install-dependencies",level:2},{value:"Configure prettier",id:"configure-prettier",level:2},{value:"Configure eslint",id:"configure-eslint",level:2},{value:"Install husky and Configure it",id:"install-husky-and-configure-it",level:2},{value:"Check the husky",id:"check-the-husky",level:2},{value:"To the End",id:"to-the-end",level:2}];function d(e){const t={code:"code",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"how-to-integrate-husky-prettier-etc-in-vue-project",children:"How to integrate husky prettier etc in Vue project?"}),"\n",(0,i.jsx)(t.h2,{id:"create-project-with-vite",children:"Create Project with vite"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:"pnpm create vite-app vue3-ts"})}),"\n",(0,i.jsx)(t.h2,{id:"install-dependencies",children:"Install Dependencies"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-shell",children:"pnpm install husky lint-staged eslint prettier -D\n"})}),"\n",(0,i.jsx)(t.h2,{id:"configure-prettier",children:"Configure prettier"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",children:'// .prettierrc.json\n{\n  "singleQuote": true,\n  "semi": true,\n  "printWidth": 100,\n  "trailingComma": "all",\n  "endOfLine": "auto"\n}\n'})}),"\n",(0,i.jsxs)(t.p,{children:["you can format code using ",(0,i.jsx)(t.code,{children:"pnpx prettier --write ."})]}),"\n",(0,i.jsx)(t.h2,{id:"configure-eslint",children:"Configure eslint"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-shell",children:"# inialize eslint \npnpm create @eslint/config\n"})}),"\n",(0,i.jsx)(t.p,{children:"The following optional, you can choose the same with me."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://s2.loli.net/2023/12/31/194DgcJLWNP2V5y.png",alt:"image-20231231160250767"})}),"\n",(0,i.jsxs)(t.p,{children:["run the command ",(0,i.jsx)(t.code,{children:"pnpx eslint ."})," to check eslint rules;"]}),"\n",(0,i.jsx)(t.h2,{id:"install-husky-and-configure-it",children:"Install husky and Configure it"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-shell",children:'# init husty \npnpm husky install\n# Configure husky \npnpx husky add .husky/pre-commit "pnpm lint-staged"\n'})}),"\n",(0,i.jsx)(t.p,{children:"after run the command above, see your project like this, a underline directory and a pre-commit file auto created."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://s2.loli.net/2023/12/31/NtE6ZeXCjAdHfGV.png",alt:"image-20231231154728294"})}),"\n",(0,i.jsx)(t.p,{children:"Wait a minute, another configuration need to configure."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-shell",children:'// pakage.json\n  "scripts": {\n    "lint": "eslint . --ext .vue,.js,.jsx,.cjs,.mjs,.ts,.tsx,.cts,.mts --fix --ignore-path .gitignore",\n    "prepare": "husky install",\n    "lint-staged": "lint-staged"\n  },\n "lint-staged": {\n    "*.{js,ts,vue}": [\n      "eslint --fix"\n    ]\n  },\n'})}),"\n",(0,i.jsx)(t.h2,{id:"check-the-husky",children:"Check the husky"}),"\n",(0,i.jsx)(t.p,{children:"Run the command following to commit some files"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-shell",children:"git add .\n\ngit commit -m 'test for husky'\n"})}),"\n",(0,i.jsx)(t.p,{children:"You will see this in the console:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://s2.loli.net/2023/12/31/f1Ap5UPsdYVjOMG.png",alt:"image-20231231160344135"})}),"\n",(0,i.jsxs)(t.p,{children:["Congratulations, you succeed to use ",(0,i.jsx)(t.code,{children:"git commit"})," trigger lint-stage."]}),"\n",(0,i.jsx)(t.p,{children:"This conclude eslint fix code and prettier format code."}),"\n",(0,i.jsx)(t.h2,{id:"to-the-end",children:"To the End"}),"\n",(0,i.jsx)(t.p,{children:"Thanks for your time, If you get something from my article, please give me clap, meanwhile, feel free to ask question as you need."})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8672:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>l});var i=n(959);const r={},s=i.createContext(r);function l(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);