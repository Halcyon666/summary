"use strict";(self.webpackChunksummary=self.webpackChunksummary||[]).push([[2747],{468:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>c,metadata:()=>d,toc:()=>o});var i=s(1527),t=s(8672);const c={title:"tailwind usage",sidebar_label:"tailwind usage",sidebar_position:12,description:"taco shop project written by tailwind and vue"},l="How to use tailwind css in your project?",d={id:"Frontend/tailwind",title:"tailwind usage",description:"taco shop project written by tailwind and vue",source:"@site/docs/02-Frontend/tailwind.mdx",sourceDirName:"02-Frontend",slug:"/Frontend/tailwind",permalink:"/Frontend/tailwind",draft:!1,unlisted:!1,editUrl:"https://github.com/Halcyon666/summary/edit/main/docs/02-Frontend/tailwind.mdx",tags:[],version:"current",lastUpdatedAt:1706843147,formattedLastUpdatedAt:"2024\u5e742\u67082\u65e5",sidebarPosition:12,frontMatter:{title:"tailwind usage",sidebar_label:"tailwind usage",sidebar_position:12,description:"taco shop project written by tailwind and vue"},sidebar:"tutorialSidebar",previous:{title:"integrate husky prettier etc",permalink:"/Frontend/Integrate husky prettier etc"},next:{title:"Docusaurus DocSearch TroubleShooting",permalink:"/Frontend/doc-search-docusaurus"}},a={},o=[{value:"Prerequisite",id:"prerequisite",level:3},{value:"Learn Background",id:"learn-background",level:3},{value:"Install Tailwind Css",id:"install-tailwind-css",level:3},{value:"Tailwind Usage",id:"tailwind-usage",level:3},{value:"<code>margin-bottom</code>",id:"margin-bottom",level:4},{value:"<code>text-shadow</code>",id:"text-shadow",level:4},{value:"<code>font-family</code>",id:"font-family",level:4},{value:"<code>border</code>",id:"border",level:4},{value:"<code>animate</code>",id:"animate",level:4},{value:"pseudo <code>first-child</code> and <code>last-child</code>",id:"pseudo-first-child-and-last-child",level:4},{value:"pseudo <code>before</code> and <code>after</code>",id:"pseudo-before-and-after",level:4},{value:"<code>@media</code> query",id:"media-query",level:4},{value:"text color opacity",id:"text-color-opacity",level:4},{value:"<code>text-shadow</code>",id:"text-shadow-1",level:4},{value:"<code>box-shadow</code>",id:"box-shadow",level:4},{value:"Problems Fix",id:"problems-fix",level:3},{value:"Picture not display",id:"picture-not-display",level:5},{value:"My page lost all the styles",id:"my-page-lost-all-the-styles",level:5},{value:"Conclusion",id:"conclusion",level:3}];function r(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h3:"h3",h4:"h4",h5:"h5",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"how-to-use-tailwind-css-in-your-project",children:(0,i.jsx)(n.code,{children:"How to use tailwind css in your project?"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.strong,{children:["All contents base on tailwind ",(0,i.jsx)(n.code,{children:"3.4.1"}),", and this is my ",(0,i.jsx)(n.a,{href:"https://github.com/Halcyon666/taco-shop",children:"GitHub Repository"}),"."]})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.strong,{children:["Happy news, You can visit my deploy website ",(0,i.jsx)(n.a,{href:"https://halcyon666.github.io/taco-shop/",children:"here"})]})}),"\n",(0,i.jsx)(n.h3,{id:"prerequisite",children:"Prerequisite"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS",children:[(0,i.jsx)(n.code,{children:"MDN"})," Cascading Style Sheets"]})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://youtu.be/OXGznpKZ_sA?si=KTPSZgU2-h7IHr_d",children:"The css course learned from"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.a,{href:"https://vuejs.org/",children:["Official ",(0,i.jsx)(n.code,{children:"Vue"})," Website"]})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://www.typescriptlang.org/",children:"TypeScript"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"learn-background",children:"Learn Background"}),"\n",(0,i.jsxs)(n.p,{children:["First I learned a basic ",(0,i.jsx)(n.a,{href:"https://youtu.be/OXGznpKZ_sA?si=KTPSZgU2-h7IHr_d",children:"css course"})," given by ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"Dave Gray"})}),"(Thanks for you), second the thought throw out when I learning, I can rewrite this by other technology that html replace by vue and ts, css replace by tailwind css."]}),"\n",(0,i.jsx)(n.p,{children:"So this article the summary to record all of the key point, you will get great beneficial from here."}),"\n",(0,i.jsx)(n.h3,{id:"install-tailwind-css",children:"Install Tailwind Css"}),"\n",(0,i.jsxs)(n.p,{children:["If you wanna initiate a new project, you can read ",(0,i.jsx)(n.a,{href:"https://halcyon666.github.io/summary/Frontend/Integrate%20husky%20prettier%20etc",children:"this article"}),", then install the tailwind Css by reading ",(0,i.jsx)(n.a,{href:"https://tailwindcss.com/docs/guides/vite#vue",children:"this tutorial"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Also you can skip all steps above, just execute the following command,"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"pnpm install -D tailwindcss postcss autoprefixer\npnpm install -D postcss-nesting\npnpm install -D postcss-preset-env\npnpm install -D autoprefixer\n# this will use postcss-preset-env to compile css\npnpm install -D cssnano postcss \n# this will initiate will create typescript config file\npnpx tailwindcss init -p --ts\n# also you can execute without --ts will create js config file\npnpx tailwindcss init -p \n"})}),"\n",(0,i.jsx)(n.h3,{id:"tailwind-usage",children:"Tailwind Usage"}),"\n",(0,i.jsxs)(n.p,{children:["I will skip most simple usage, you can look up in ",(0,i.jsx)(n.a,{href:"https://tailwindcss.com",children:"official site"}),"."]}),"\n",(0,i.jsx)(n.h4,{id:"margin-bottom",children:(0,i.jsx)(n.code,{children:"margin-bottom"})}),"\n",(0,i.jsx)(n.p,{children:"If you wanna define margin-bottom space, custom definition is below,"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-css",children:".mb-4 {\n    margin-bottom: 1rem/* 16px */;\n}\n"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"All essay will omit basic css used in html."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"the tailwind css,"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:'<div class="mb-4">\n      \x3c!--  ... --\x3e\n</div>\n'})}),"\n",(0,i.jsxs)(n.p,{children:["another more complicated case, if wanna declare a space with a clamp function,this ",(0,i.jsx)(n.code,{children:"clamp(1em, 2.5vh, 1.5em) 0"})," is setting a margin for an element that will vary between ",(0,i.jsx)(n.code,{children:"1em"})," and ",(0,i.jsx)(n.code,{children:"1.5em"}),", with a preference for ",(0,i.jsx)(n.code,{children:"2.5vh"})," and an initial margin of ",(0,i.jsx)(n.code,{children:"0"}),". The actual margin will depend on the viewport size and how it fits within the specified range."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"2.5vh"})," is equivalent to 2.5% of the viewport height. It's a responsive unit that adjusts based on the height of the user's viewport (the visible area in the browser)."]}),"\n",(0,i.jsx)(n.p,{children:"custom css"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-css",children:".mb-clamp {\n    margin-bottom: clamp(1em, 2.5vh, 1.5em) 0;\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"tailwind css"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:'<div class="m-[clamp(1em,2.5vh,1.5em)_0] ">\n      \x3c!--  ... --\x3e\n</div>\n'})}),"\n",(0,i.jsx)(n.h4,{id:"text-shadow",children:(0,i.jsx)(n.code,{children:"text-shadow"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"custom css"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-css",children:".custom-shadow {\n    text-shadow: 2px 2px 5px #333;\n}\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"tailwind css"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:'<div class="[text-shadow:2px_2px_5px_#333]">\n      \x3c!--  ... --\x3e\n</div>\n'})}),"\n",(0,i.jsx)(n.h4,{id:"font-family",children:(0,i.jsx)(n.code,{children:"font-family"})}),"\n",(0,i.jsx)(n.p,{children:"If you wanna set font family, custom Css is below"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-css",children:".custom-font-family {\n    font-family: Fugaz One, cursive;\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["In tailwind css, you need put config into you ",(0,i.jsx)(n.code,{children:"tailwind.config.ts"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"export default {\n  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],\n  darkMode: 'class',\n  theme: {\n    extend: {\n      fontFamily: {\n        headings: ['Fugaz One', 'cursive'],\n      },\n    },\n  },\n  plugins: [],\n} satisfies Config\n"})}),"\n",(0,i.jsx)(n.p,{children:"and use in html,"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:'<div class="font-headings">\n      \x3c!--  ... --\x3e\n</div>\n'})}),"\n",(0,i.jsx)(n.h4,{id:"border",children:(0,i.jsx)(n.code,{children:"border"})}),"\n",(0,i.jsx)(n.p,{children:"The custom border composite css"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-css",children:".div {\n  border: 1px solid #999;\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"but there is not composite tailwind css style, define by sevaral field"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:'<div class="border-solid border border-black"></div>\n'})}),"\n",(0,i.jsx)(n.h4,{id:"animate",children:(0,i.jsx)(n.code,{children:"animate"})}),"\n",(0,i.jsxs)(n.p,{children:["This custom css define a animate, from top ",(0,i.jsx)(n.code,{children:"-100px"})," down the window."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-css",children:".hero__h2 {\n    top: -100px;\n    animation: showWelcome 0.5s ease-in-out 1s forwards;\n}\n\n@keyframes showWelcome {\n    0% {\n        top: -20px;\n        transform: skew(0deg, -5deg) scaleY(0);\n    }\n\n    80% {\n        top: 30px;\n        transform: skew(10deg, -5deg) scaleY(1.2);\n    }\n\n    100% {\n        top: 20px;\n        transform: skew(-10deg, -5deg) scaleY(1);\n    }\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["In tailwind css, you need put config into you ",(0,i.jsx)(n.code,{children:"tailwind.config.ts"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-css",children:"export default {\n  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}']\n  theme: {\n    extend: {\n      keyframes: {\n        showWelcome: {\n          '0%': {\n            top: '-20px',\n            transform: 'skew(0deg, -5deg) scaleY(0)',\n          },\n\n          '80%': {\n            top: '30px',\n            transform: 'skew(10deg, -5deg) scaleY(1.2)',\n          },\n\n          '100%': {\n            top: '20px',\n            transform: 'skew(-10deg, -5deg) scaleY(1)',\n          },\n        },\n      },\n    },\n  },\n  plugins: [],\n} satisfies Config\n"})}),"\n",(0,i.jsx)(n.p,{children:"use animate in html"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:'<div class="animate-[showWelcome_0.5s_ease-in-out_1s_forwards]">\n      \x3c!--  ... --\x3e\n</div>\n'})}),"\n",(0,i.jsxs)(n.h4,{id:"pseudo-first-child-and-last-child",children:["pseudo ",(0,i.jsx)(n.code,{children:"first-child"})," and ",(0,i.jsx)(n.code,{children:"last-child"})]}),"\n",(0,i.jsx)(n.p,{children:"custom css"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-css",children:".main__article:first-child {\n    margin-top: 1em;\n}\n\n.main__article:last-child {\n    min-height: calc(100vh-20rem);\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"tailwind css"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:'<div class="first:mt-4 last:min-h-[calc(100vh-20rem)]">\n      \x3c!--  ... --\x3e\n</div>\n\n'})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"Style an element if it\u2019s the first child of its type using the first-of-type modifier"}),", you need define this way."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:'<div class="first-of-type:mt-4 last-of-type:min-h-[calc(100vh-20rem)]">\n      \x3c!--  ... --\x3e\n</div>\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.strong,{children:["and be careful with the function usage, must not contains blank in ",(0,i.jsx)(n.code,{children:"last-of-type:min-h-[calc(100vh-20rem)]"}),", if you really wanna add, just use ",(0,i.jsx)(n.code,{children:"last-of-type:min-h-[calc(100vh_-_20rem)]"})," instead of ",(0,i.jsx)(n.code,{children:"last-of-type:min-h-[calc(100vh - 20rem)]"}),"."]})}),"\n"]}),"\n",(0,i.jsxs)(n.h4,{id:"pseudo-before-and-after",children:["pseudo ",(0,i.jsx)(n.code,{children:"before"})," and ",(0,i.jsx)(n.code,{children:"after"})]}),"\n",(0,i.jsxs)(n.p,{children:["use pseudo ",(0,i.jsx)(n.code,{children:"before"})," or ",(0,i.jsx)(n.code,{children:"after"})," custom css add some content, custom css"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-css",children:".header__h1::before {\n    content: '\ud83c\udf2e '\n}\n\n.header__h1::after {\n    content: ' \ud83c\udf2e'\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["tailwind ",(0,i.jsx)(n.code,{children:"css"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:"<div class=\"before:content-['\ud83c\udf2e'] after:content-['\ud83c\udf2e']\">\n      \x3c!--  ... --\x3e\n</div>\n"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"'\ud83c\udf2e' must need single quote** ,\ud83c\udf2e will does not work."}),"\n"]}),"\n",(0,i.jsxs)(n.h4,{id:"media-query",children:[(0,i.jsx)(n.code,{children:"@media"})," query"]}),"\n",(0,i.jsx)(n.p,{children:"custom css"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-css",children:"@media screen and (min-width: 576px) {\n    .header__h1::before {\n        content: '\ud83c\udf2e '\n    }\n\n    .header__h1::after {\n        content: ' \ud83c\udf2e'\n    }\n\n    .menu__header,\n    .menu__cr,\n    .menu__sf,\n    .menu__cs {\n        font-size: 125%;\n    }\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"use in tailwind css"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:"<div class=\"min-[576px]:before:content-['\ud83c\udf2e'] min-[576px]:after:content-['\ud83c\udf2e']\">\n      \x3c!--  ... --\x3e\n</div>\n"})}),"\n",(0,i.jsx)(n.p,{children:"It look more concise, I like this."}),"\n",(0,i.jsx)(n.h4,{id:"text-color-opacity",children:"text color opacity"}),"\n",(0,i.jsxs)(n.p,{children:["directly use ",(0,i.jsx)(n.code,{children:"text-black/[.6]"})," instead of ",(0,i.jsx)(n.code,{children:"text-[rgba(0, 0, 0, 0.6)]"}),", because it doesn't support yet."]}),"\n",(0,i.jsxs)(n.p,{children:["If the color is ",(0,i.jsx)(n.code,{children:"rgba(52, 178, 52, 0.75)"}),",first you should convert it to hex color, then use ",(0,i.jsx)(n.code,{children:"text-[#34b234bf]"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Here give a example, custom css"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-css",children:".header__h1 {\n    color: rgba(52, 178, 52, 0.75);\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"tailwind css"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:'<div class="text-[#34b234bf]">\n      \x3c!--  ... --\x3e\n</div>\n'})}),"\n",(0,i.jsx)(n.h4,{id:"text-shadow-1",children:(0,i.jsx)(n.code,{children:"text-shadow"})}),"\n",(0,i.jsx)(n.p,{children:"custom css,"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-css",children:":root {\n    --BORDER-COLOR: #333;\n}\n\n@media (prefers-color-scheme: dark) {\n    :root {\n        --BORDER-COLOR: whitesmoke;\n    }\n}\n\n.hero__h2 {\n    text-shadow: 2px 2px 5px var(--BORDER-COLOR);\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"tailwind css,"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:'<div class="[text-shadow:2px_2px_5px_#333] dark:[text-shadow:2px_2px_5px_white]">\n      \x3c!--  ... --\x3e\n</div>\n'})}),"\n",(0,i.jsx)(n.h4,{id:"box-shadow",children:(0,i.jsx)(n.code,{children:"box-shadow"})}),"\n",(0,i.jsx)(n.p,{children:"custom css"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-css",children:":root {\n    --BORDER-COLOR: #333;\n}\n\n@media (prefers-color-scheme: dark) {\n    :root {\n        --BORDER-COLOR: whitesmoke;\n    }\n}\n\nbody {\n    box-shadow: 0 0 10px var(--BORDER-COLOR);\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"tailwind css,"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:'<div class="shadow-[0_6px_5px_-5px_#333] dark:shadow-[0_6px_5px_-5px__whitesmoke]">\n      \x3c!--  ... --\x3e\n</div>\n'})}),"\n",(0,i.jsxs)(n.p,{children:["sometimes you can define in seperate way, more details plz check ",(0,i.jsx)(n.a,{href:"https://tailwindcss.com/docs/box-shadow",children:"here"}),","]}),"\n",(0,i.jsxs)(n.p,{children:["and below I give a tailwind css example in react, relative style ",(0,i.jsx)(n.code,{children:"shadow-lg shadow-cyan-500/50 opacity-85"}),", define ",(0,i.jsx)(n.code,{children:"box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);"})]}),"\n",(0,i.jsx)(n.p,{children:"and border color, box opacity."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:'<div className="text-center text-2xl font-bold mt-4 p-2 border border-purple-400 border-solid shadow-lg shadow-cyan-500/50 bg-cyan-500 opacity-85">\n  {tips}\n</div>\n'})}),"\n",(0,i.jsx)(n.h3,{id:"problems-fix",children:"Problems Fix"}),"\n",(0,i.jsx)(n.h5,{id:"picture-not-display",children:"Picture not display"}),"\n",(0,i.jsxs)(n.p,{children:["I used static picture in my vue file, once I deploy to github page picture disappear, because ",(0,i.jsx)(n.code,{children:"vite"})," don't include the png in ",(0,i.jsx)(n.code,{children:"src/assets/img/tacos_delicioso_1000x667.png"}),", I check the solution on the ",(0,i.jsx)(n.a,{href:"https://vitejs.dev/guide/assets.html",children:"vite official website"}),", both of this ways below works, just choose one you prefer. ",(0,i.jsx)(n.a,{href:"https://github.com/Halcyon666/taco-shop/commit/ae52cfc97ea40a73a5a32e9fd86ed971cb535ebf",children:"Here"})," is solution of commit change."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"First method"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"const img = new URL('@/assets/img/tacos_delicioso_1000x667.png', import.meta.url).href\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Second method"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"// but this will get a error hint, so I prefer to the first method\n// Cannot find module '@/assets/img/tacos_and_drink_1000x667.png' or its corresponding type declarations.\nimport img from '@/assets/img/tacos_delicioso_1000x667.png'\n"})}),"\n",(0,i.jsx)(n.h5,{id:"my-page-lost-all-the-styles",children:"My page lost all the styles"}),"\n",(0,i.jsxs)(n.p,{children:["Because of making mistake in ",(0,i.jsx)(n.code,{children:"postcss.config.js"}),", I delete the line ",(0,i.jsx)(n.code,{children:"tailwindcss: { config: './tailwind.config.ts' },"}),";"]}),"\n",(0,i.jsxs)(n.p,{children:["You can see the official ",(0,i.jsx)(n.a,{href:"https://tailwindcss.com/docs/configuration#creating-your-configuration-file",children:"guide"}),", ",(0,i.jsx)(n.a,{href:"https://github.com/Halcyon666/taco-shop/commit/4a136de832103a85edee410b3847ffafefd76b5f",children:"Here"})," is solution of commit change."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",metastring:"{4} showLineNumbers",children:"module.exports = {\n  plugins: {\n    // config location, defaullt is tailwind.config.js,here must indicate the file name\n    tailwindcss: { config: './tailwind.config.ts' },\n    autoprefixer: {},\n    cssnano: {},\n    // nest css\n    'tailwindcss/nesting': 'postcss-nesting',\n    'postcss-preset-env': {\n      features: { 'nesting-rules': false },\n    },\n    // optimizing for production, compres css\n    ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {}),\n  },\n}\n\n"})}),"\n",(0,i.jsx)(n.h3,{id:"conclusion",children:"Conclusion"}),"\n",(0,i.jsx)(n.p,{children:"Almost 20-days learning and rewriting this project, maybe the project is too small, but I have learned a lot about tailwind css, vue acknowledge. I wish you move on, you will find unlock fashioned tailwind css."}),"\n",(0,i.jsx)(n.p,{children:"Thank you for your time. If my article helps you, please give it a clap. Also feel free to ask any questions you may have."})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},8672:(e,n,s)=>{s.d(n,{Z:()=>d,a:()=>l});var i=s(959);const t={},c=i.createContext(t);function l(e){const n=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),i.createElement(c.Provider,{value:n},e.children)}}}]);