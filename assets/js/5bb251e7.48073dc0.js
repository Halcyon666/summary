"use strict";(self.webpackChunksummary=self.webpackChunksummary||[]).push([[2747],{8367:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var t=s(1527),i=s(8672);const a={title:"tailwind usage",sidebar_label:"tailwind usage",sidebar_position:12,description:"taco shop project written by tailwind and vue"},r="taco shop project written by tailwind and vue",l={id:"Frontend/tailwind",title:"tailwind usage",description:"taco shop project written by tailwind and vue",source:"@site/docs/02-Frontend/tailwind.mdx",sourceDirName:"02-Frontend",slug:"/Frontend/tailwind",permalink:"/summary/Frontend/tailwind",draft:!1,unlisted:!1,editUrl:"https://github.com/Halcyon666/summary/blob/main/docs/02-Frontend/tailwind.mdx",tags:[],version:"current",sidebarPosition:12,frontMatter:{title:"tailwind usage",sidebar_label:"tailwind usage",sidebar_position:12,description:"taco shop project written by tailwind and vue"},sidebar:"tutorialSidebar",previous:{title:"integrate husky prettier etc",permalink:"/summary/Frontend/Integrate husky prettier etc"},next:{title:"\u57fa\u6570\u6392\u5e8f",permalink:"/summary/Algorithm/Base-Sort"}},o={},c=[{value:"Prerequisite",id:"prerequisite",level:3},{value:"Learn Background",id:"learn-background",level:3},{value:"Install Tailwind Css",id:"install-tailwind-css",level:3},{value:"Tailwind Usage",id:"tailwind-usage",level:3},{value:"<strong>margin-bottom</strong>",id:"margin-bottom",level:4},{value:"text-shadow",id:"text-shadow",level:4},{value:"font-family",id:"font-family",level:4},{value:"<strong>animate</strong>",id:"animate",level:4},{value:"Problems Fix",id:"problems-fix",level:3}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"taco-shop-project-written-by-tailwind-and-vue",children:"taco shop project written by tailwind and vue"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.em,{children:["Happy news,You can visit my deploy page ",(0,t.jsx)(n.a,{href:"https://halcyon666.github.io/taco-shop/",children:"here"})]})}),"\n",(0,t.jsx)(n.h3,{id:"prerequisite",children:"Prerequisite"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS",children:"mdn Cascading Style Sheets"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://youtu.be/OXGznpKZ_sA?si=KTPSZgU2-h7IHr_d",children:"The css course learned from"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://vuejs.org/",children:"Official Vue Website"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://www.typescriptlang.org/",children:"typescript"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"learn-background",children:"Learn Background"}),"\n",(0,t.jsxs)(n.p,{children:["First I learned a basic ",(0,t.jsx)(n.a,{href:"https://youtu.be/OXGznpKZ_sA?si=KTPSZgU2-h7IHr_d",children:"css course"})," given by ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:"*Dave Gray*"})}),"(Thanks for you), second the thought throw out when I learning, I can rewrite this by other technology that html replace by vue and ts, css replace by tailwind css."]}),"\n",(0,t.jsx)(n.p,{children:"So this article the summary to record all of the key point, you will get great beneficial from here."}),"\n",(0,t.jsx)(n.h3,{id:"install-tailwind-css",children:"Install Tailwind Css"}),"\n",(0,t.jsxs)(n.p,{children:["If you wanna initiate a new project, you can read ",(0,t.jsx)(n.a,{href:"https://halcyon666.github.io/summary/Frontend/Integrate%20husky%20prettier%20etc",children:"this"}),", then install the tailwind Css by reading ",(0,t.jsx)(n.a,{href:"https://tailwindcss.com/docs/guides/vite#vue",children:"this tutorial"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Also you can skip all steps above, just execute the following command,"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"pnpm install -D tailwindcss postcss autoprefixer\npnpm install -D postcss-nesting\npnpm install -D postcss-preset-env\npnpm install -D autoprefixer\n# this will initiate will create typescript config file\npnpx tailwindcss init -p --ts\n# also you can execute witout --ts will create js config file\npnpx tailwindcss init -p \n"})}),"\n",(0,t.jsx)(n.h3,{id:"tailwind-usage",children:"Tailwind Usage"}),"\n",(0,t.jsx)(n.p,{children:"In this section, First I will give some basic usage, and then focus on tough issues."}),"\n",(0,t.jsx)(n.h4,{id:"margin-bottom",children:(0,t.jsx)(n.strong,{children:"margin-bottom"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"custom css"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-css",children:".mb-4 {\n    margin-bottom: 1rem/* 16px */;\n}\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-css",children:"m-[clamp(1em,2.5vh,1.5em)_0] \n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"tailwind css"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Below cases will not show the present tailwind css on the html element."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:'<div class="mb-4">\n      \x3c!--  ... --\x3e\n</div>\n'})}),"\n",(0,t.jsx)(n.h4,{id:"text-shadow",children:"text-shadow"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"custom css"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-css",children:".my-shadow {\n    text-shadow: 2px 2px 5px #333;\n}\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"tailwind css"}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"font-family",children:"font-family"}),"\n",(0,t.jsx)(n.p,{children:"If you wanna set font family, custom Css is below"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-css",children:".font-headings {\n    font-family: Fugaz One, cursive;\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["In tailwind css, you need put config into you ",(0,t.jsx)(n.code,{children:"tailwind.config.ts"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"export default {\n  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],\n  darkMode: 'class',\n  theme: {\n    extend: {\n      fontFamily: {\n        content: ['Nunito', 'sans-serif'],\n        headings: ['Fugaz One', 'cursive'],\n      },\n    },\n  },\n  plugins: [],\n} satisfies Config\n"})}),"\n",(0,t.jsx)(n.h4,{id:"animate",children:(0,t.jsx)(n.strong,{children:"animate"})}),"\n",(0,t.jsx)(n.p,{children:"custom css"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-css",children:"export default {\n  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],\n  darkMode: 'class',\n  theme: {\n    extend: {\n      keyframes: {\n        showWelcome: {\n          '0%': {\n            top: '-20px',\n            transform: 'skew(0deg, -5deg) scaleY(0)',\n          },\n\n          '80%': {\n            top: '30px',\n            transform: 'skew(10deg, -5deg) scaleY(1.2)',\n          },\n\n          '100%': {\n            top: '20px',\n            transform: 'skew(-10deg, -5deg) scaleY(1)',\n          },\n        },\n      },\n    },\n  },\n  plugins: [],\n} satisfies Config\n"})}),"\n",(0,t.jsx)(n.p,{children:"tail windcss"}),"\n",(0,t.jsx)(n.h4,{id:""}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-css",children:"animate-[showWelcome_0.5s_ease-in-out_1s_forwards]\n\nlast:min-h-[calc(100vh-20rem)]\n\n\nhover:text-black/[.6]\n\n\ndark:hover:text-orange-500\n\n\n\n@media screen and (min-width: 576px) {\n    .header__h1::before {\n        content: '\ud83c\udf2e '\n    }\n\n    .header__h1::after {\n        content: ' \ud83c\udf2e'\n    }\n\n    .menu__header,\n    .menu__cr,\n    .menu__sf,\n    .menu__cs {\n        font-size: 125%;\n    }\n}\nmin-[576px]:before:content-['\ud83c\udf2e'] min-[576px]:after:content-['\ud83c\udf2e']\n\ntext-shadow: 2px 2px 5px var(--BORDER-COLOR);\n[text-shadow:2px_2px_5px_#333] dark:[text-shadow:2px_2px_5px_white]\n\n\nbox-shadow: 0 6px 5px -5px var(--BORDER-COLOR);\nshadow-[0_0_10px_#333] dark:shadow-[0_0_10px_whitesmoke]\n\n\nshadow-[0_6px_5px_-5px_rgba(0,0,0,0.3)] dark:shadow-[0_6px_5px_-5px_rgba(255,255,255,0.3)]\n\nuse text-[rgba(0, 0, 0, 0.6)] not support, instead of text-black/[.6] \nif the color is rgba(52, 178, 52, 0.75), only can use text-[#34b234bf]\n"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"'\ud83c\udf2e' must need single quote"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"problems-fix",children:"Problems Fix"}),"\n",(0,t.jsxs)(n.p,{children:["I used static picture in my vue file, Once I deploy to github page picture disappear, because ",(0,t.jsx)(n.code,{children:"vite"})," don't include the png in ",(0,t.jsx)(n.code,{children:"src/assets/img/tacos_delicioso_1000x667.png"}),", I check the solution on the ",(0,t.jsx)(n.a,{href:"https://vitejs.dev/guide/assets.html",children:"vite official website"}),", both of this ways below works, just choose one you prefer. ",(0,t.jsx)(n.a,{href:"https://github.com/Halcyon666/taco-shop/commit/ae52cfc97ea40a73a5a32e9fd86ed971cb535ebf",children:"Here"})," is solution of commit change."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"First"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"const img = new URL('@/assets/img/tacos_delicioso_1000x667.png', import.meta.url).href\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"seconde"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"// but this will get a error hint, so I prefer to the first method\n// Cannot find module '@/assets/img/tacos_and_drink_1000x667.png' or its corresponding type declarations.\nimport img from '@/assets/img/tacos_delicioso_1000x667.png'\n"})})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8672:(e,n,s)=>{s.d(n,{Z:()=>l,a:()=>r});var t=s(959);const i={},a=t.createContext(i);function r(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);