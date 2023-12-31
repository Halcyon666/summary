"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8287],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(n),m=i,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||a;return n?r.createElement(h,l(l({ref:t},u),{},{components:n})):r.createElement(h,l({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:i,l[1]=o;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2164:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var r=n(7462),i=(n(7294),n(3905));const a={title:"integrate husky prettier etc",sidebar_label:"integrate husky prettier etc",sidebar_position:11},l="Integrate husky prettier etc",o={unversionedId:"FrontEnd/Integrate husky prettier etc",id:"FrontEnd/Integrate husky prettier etc",title:"integrate husky prettier etc",description:"You can use this command to install all the needed dependencies",source:"@site/docs/02-FrontEnd/Integrate husky prettier etc.md",sourceDirName:"02-FrontEnd",slug:"/FrontEnd/Integrate husky prettier etc",permalink:"/summary/FrontEnd/Integrate husky prettier etc",draft:!1,editUrl:"https://github.com/Halcyon666/summary/blob/main/docs/02-FrontEnd/Integrate husky prettier etc.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{title:"integrate husky prettier etc",sidebar_label:"integrate husky prettier etc",sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"uni-app\u5f00\u53d1",permalink:"/summary/FrontEnd/uni-app"},next:{title:"\u57fa\u6570\u6392\u5e8f",permalink:"/summary/Algorithm/Base-Sort"}},s={},p=[{value:"Create Project with vite",id:"create-project-with-vite",level:2},{value:"Install Dependencies",id:"install-dependencies",level:2},{value:"Configure prettier",id:"configure-prettier",level:2},{value:"Configure eslint",id:"configure-eslint",level:2},{value:"Install huskey and Configure it",id:"install-huskey-and-configure-it",level:2},{value:"Check the husky",id:"check-the-husky",level:2},{value:"To the End",id:"to-the-end",level:2}],u={toc:p},c="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"integrate-husky-prettier-etc"},"Integrate husky prettier etc"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"You can use this command to install all the needed dependencies")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"pnpm install husky lint-staged eslint prettier -D")),(0,i.kt)("h2",{id:"create-project-with-vite"},"Create Project with vite"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"pnpm create vite-app vue3-ts")),(0,i.kt)("h2",{id:"install-dependencies"},"Install Dependencies"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"integrate husky prettier etc")),(0,i.kt)("h2",{id:"configure-prettier"},"Configure prettier"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'// .prettierrc.json\n{\n  "singleQuote": true,\n  "semi": true,\n  "printWidth": 100,\n  "trailingComma": "all",\n  "endOfLine": "auto"\n}\n')),(0,i.kt)("p",null,"you can format code using ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpx prettier --write .")),(0,i.kt)("h2",{id:"configure-eslint"},"Configure eslint"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"# inialize eslint \npnpm create @eslint/config\n")),(0,i.kt)("p",null,"The following optional, you can choose the same with me."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://s2.loli.net/2023/12/31/194DgcJLWNP2V5y.png",alt:"image-20231231160250767"})),(0,i.kt)("p",null,"run the command ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpx eslint .")," to check eslint rules;"),(0,i.kt)("h2",{id:"install-huskey-and-configure-it"},"Install huskey and Configure it"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'# init hustky \npnpm husky install\n# Configure husky \npnpx husky add .husky/pre-commit "pnpm lint-staged"\n')),(0,i.kt)("p",null,"after run the command above, see your project like this, a underline directory and a pre-commit file auto created."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://s2.loli.net/2023/12/31/NtE6ZeXCjAdHfGV.png",alt:"image-20231231154728294"})),(0,i.kt)("p",null,"Wait a minute, another configuration need to configure."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'// pakage.json\n  "scripts": {\n    "lint": "eslint . --ext .vue,.js,.jsx,.cjs,.mjs,.ts,.tsx,.cts,.mts --fix --ignore-path .gitignore",\n    "prepare": "husky install",\n    "lint-staged": "lint-staged"\n  },\n "lint-staged": {\n    "*.{js,ts,vue}": [\n      "eslint --fix"\n    ]\n  },\n')),(0,i.kt)("h2",{id:"check-the-husky"},"Check the husky"),(0,i.kt)("p",null,"Run the command following to commit some files"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"git add .\n\ngit commit -m 'test for husky'\n")),(0,i.kt)("p",null,"You will see this in the console:"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://s2.loli.net/2023/12/31/f1Ap5UPsdYVjOMG.png",alt:"image-20231231160344135"})),(0,i.kt)("p",null,"Congratulations, you succeed to use ",(0,i.kt)("inlineCode",{parentName:"p"},"git commit")," trigger lint-stage."),(0,i.kt)("p",null,"This conclude eslint fix code and prettier format code."),(0,i.kt)("h2",{id:"to-the-end"},"To the End"),(0,i.kt)("p",null,"Thanks for your time, If you get something from my article, please give me clap, mean the while, feel free to ask question as you need."))}d.isMDXComponent=!0}}]);