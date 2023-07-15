"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2558],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=l(n),h=a,d=c["".concat(s,".").concat(h)]||c[h]||m[h]||o;return n?r.createElement(d,p(p({ref:t},u),{},{components:n})):r.createElement(d,p({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,p=new Array(o);p[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:a,p[1]=i;for(var l=2;l<o;l++)p[l]=n[l];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},5198:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={title:"Vue\u9879\u76ee\u7b14\u8bb0",hidemeta:!0},p=void 0,i={unversionedId:"FrontEnd/vue-project-notes",id:"FrontEnd/vue-project-notes",title:"Vue\u9879\u76ee\u7b14\u8bb0",description:"\u8bf4\u660e\u672c\u6587\u9879\u76ee\u77e5\u8bc6\u7b14\u8bb0\u5185\u5bb9\u6765\u81ea B\u7ad9\u5c1a\u7845\u8c37\u89c6\u9891",source:"@site/docs/FrontEnd/vue-project-notes.md",sourceDirName:"FrontEnd",slug:"/FrontEnd/vue-project-notes",permalink:"/summary/FrontEnd/vue-project-notes",draft:!1,editUrl:"https://github.com/Halcyon666/summary/blob/main/docs/FrontEnd/vue-project-notes.md",tags:[],version:"current",frontMatter:{title:"Vue\u9879\u76ee\u7b14\u8bb0",hidemeta:!0},sidebar:"tutorialSidebar",previous:{title:"Vue \u8bed\u6cd52",permalink:"/summary/FrontEnd/vue-grammer-two"},next:{title:"Java\u865a\u62df\u673a",permalink:"/summary/Java/ConcurrentAndJVM/JAVA\u865a\u62df\u673a"}},s={},l=[{value:"\u5982\u4f55\u5b89\u88c5Vue-cli",id:"\u5982\u4f55\u5b89\u88c5vue-cli",level:2},{value:"python\u73af\u5883\u53d8\u91cf\u914d\u7f6e\u65e0\u6548\u7684\u95ee\u9898",id:"python\u73af\u5883\u53d8\u91cf\u914d\u7f6e\u65e0\u6548\u7684\u95ee\u9898",level:2},{value:"\u9879\u76ee\u7ed3\u6784\u8bf4\u660e",id:"\u9879\u76ee\u7ed3\u6784\u8bf4\u660e",level:2},{value:"\u9879\u76ee\u77e5\u8bc6\u70b9\u7b14\u8bb0",id:"\u9879\u76ee\u77e5\u8bc6\u70b9\u7b14\u8bb0",level:2},{value:"\u6ce8\u610f\u70b9",id:"\u6ce8\u610f\u70b9",level:3},{value:"router\u8def\u7531\u914d\u7f6e\u65f6\u6743\u9650\u63a7\u5236",id:"router\u8def\u7531\u914d\u7f6e\u65f6\u6743\u9650\u63a7\u5236",level:3},{value:"param query\u4f20\u53c2",id:"param-query\u4f20\u53c2",level:3},{value:"NavigationDuplicated\u5904\u7406",id:"navigationduplicated\u5904\u7406",level:3},{value:"\u8282\u6d41\u548c\u9632\u6296",id:"\u8282\u6d41\u548c\u9632\u6296",level:3}],u={toc:l},c="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u8bf4\u660e\u672c\u6587\u9879\u76ee\u77e5\u8bc6\u7b14\u8bb0\u5185\u5bb9\u6765\u81ea ",(0,a.kt)("a",{parentName:"strong",href:"https://www.bilibili.com/video/BV1Vf4y1T7bw?p=10&spm_id_from=pageDriver"},"B\u7ad9\u5c1a\u7845\u8c37\u89c6\u9891"))),(0,a.kt)("h2",{id:"\u5982\u4f55\u5b89\u88c5vue-cli"},"\u5982\u4f55\u5b89\u88c5Vue-cli"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# \u5b89\u88c5cnpm \u56fd\u5185\u7684yarn?\nnpm install -g cnpm --registry=https://registry.npm.taobao.org\n\nnpm config set registry https://registry.npm.taobao.org\n\n\n\n# \u5b89\u88c5vue cli  \ncnpm isntall -g @vue/cli # -g\u8868\u793a\u5168\u5c40\u5b89\u88c5\n# \u67e5\u770bvue cli \u7248\u672c\nvue -V\n\nvue create vue_xxx\n\n")),(0,a.kt)("h2",{id:"python\u73af\u5883\u53d8\u91cf\u914d\u7f6e\u65e0\u6548\u7684\u95ee\u9898"},(0,a.kt)("a",{parentName:"h2",href:"https://zhuanlan.zhihu.com/p/431747120"},"python\u73af\u5883\u53d8\u91cf\u914d\u7f6e\u65e0\u6548\u7684\u95ee\u9898")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://s2.loli.net/2023/07/15/INyuG4bdKnh5jMf.png",alt:"image-20220115145506444"})),(0,a.kt)("h2",{id:"\u9879\u76ee\u7ed3\u6784\u8bf4\u660e"},"\u9879\u76ee\u7ed3\u6784\u8bf4\u660e"),(0,a.kt)("p",null," components \u653e\u7f6e\u975e\u8def\u7531\u6587\u4ef6"),(0,a.kt)("p",null,"views/pages \u653e\u7f6e\u8def\u7531\u6587\u4ef6"),(0,a.kt)("h2",{id:"\u9879\u76ee\u77e5\u8bc6\u70b9\u7b14\u8bb0"},"\u9879\u76ee\u77e5\u8bc6\u70b9\u7b14\u8bb0"),(0,a.kt)("h3",{id:"\u6ce8\u610f\u70b9"},"\u6ce8\u610f\u70b9"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u590d\u5236\u5b8chtml style\u4e4b\u540e\uff0c\u6ce8\u610f\u56fe\u7247(html,style\u4e2d\u90fd\u53ef\u80fd\u6709\u56fe\u7247\u54e6)\u6240\u5bf9\u5e94\u7684\u8def\u5f84")),(0,a.kt)("h3",{id:"router\u8def\u7531\u914d\u7f6e\u65f6\u6743\u9650\u63a7\u5236"},"router\u8def\u7531\u914d\u7f6e\u65f6\u6743\u9650\u63a7\u5236"),(0,a.kt)("p",null,"\u901a\u8fc7route \u4e2d\u7684meta\u914d\u7f6e\u53ef\u4ee5\u63a7\u5236 \u4e00\u4e9b\u6743\u9650\uff1b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},"{\n    path:'/home',\n    name:'home',\n    component: () => import('@/pages/Home/'),\n    meta: {isShow: true}\n}\n")),(0,a.kt)("h3",{id:"param-query\u4f20\u53c2"},"param query\u4f20\u53c2"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"    // 1.0 \u5b57\u7b26\u4e32\u5f62\u5f0f\n    this.$router.push('/search/'+ this.wd + \"?k=\"+ this.wd)\n    // 2.0 \u6a21\u677f\u5b57\u7b26\u4e32\n    this.$router.push(`/search/${this.wd}?k=${this.wd.toUpperCase()}`)\n    // 3.0 \u5bf9\u8c61\u5199\u6cd5\n    this.$router.push({\n        name:\"search\",\n        params:{\n            wd: this.wd,\n        },\n        query:{\n            k:this.wd.toUpperCase(),\n        }\n    })\n\n    // \u9762\u8bd5\u98981 \u8def\u7531\u4f20\u53c2(\u5bf9\u8c61\u5199\u6cd5) path\u662f\u5426\u53ef\u4ee5\u7ed3\u5408params\u4e00\u8d77\u4f7f\u7528?\n    // \u8def\u7531\u8df3\u8f6c\u4f20\u53c2\u65f6\uff0c\u5bf9\u8c61\u5199\u6cd5\u53ef\u4ee5\u662fpath\u3001name \u4f46\u662fpath\u5199\u6cd5\u65f6\uff0c\u4e0d\u652f\u6301params\u4f20\u53c2\n    this.$router.push({\n        path: '/search',\n        params:{\n            wd: this.wd,\n        },\n        query:{\n            k:this.wd.toUpperCase(),\n        }\n    })\n\n    // \u9762\u8bd5\u98982 \u5982\u4f55\u6307\u5b9aparams\u53c2\u6570\u53ef\u4f20\u53ef\u4e0d\u4f20\n    // router\u4e2d\u5df2\u7ecf\u914d\u7f6e\u5360\u4f4d\uff0c\u4f46\u662f\u5c31\u662f\u4e0d\u4f20params\u53c2\u6570\uff0c\u8def\u5f84\u7f3a\u5931 http://localhost:8080/#/?k=KJKJ\n    // \u5982\u679c\u60f3\u53ef\u4f20\u53ef\u4e0d\u4f20 \u5360\u4f4d\u65f6\u52a0\u4e00\u4e2a\u95ee\u53f7 path:'/search/:wd?'\n    this.$router.push({\n        name:\"search\",\n        query: {\n            k: this.wd.toUpperCase(),\n        }\n    })\n\n    // \u9762\u8bd5\u98983 params\u53c2\u6570\u53ef\u4ee5\u4f20\u9012\u4e5f\u53ef\u4ee5\u4e0d\u4f20\u9012\uff0c\u4f46\u662f\u5982\u679c\u4f20\u9012\u7684\u662f\u7a7a\u4e32\u5982\u4f55\u5904\u7406\n    // \u4f7f\u7528undefine: params\u53c2\u6570\u53ef\u4ee5\u4f20\u9012\u6216\u8005\u4e0d\u4f20\u9012\u65f6\uff0c\u4f20\u9012\u7a7a\u5b57\u7b26\u4e32\u7684\u95ee\u9898\n    this.$router.push({\n        name:\"search\",\n        params:{wd:'' || undefined},\n        query: {\n            k: this.wd.toUpperCase(),\n        }\n    })\n\n    {\n        path:'/search/:wd?',\n        name:'search',\n        component: () => import('@/pages/Search'),\n        meta: {isShow: true},\n        // \u9762\u8bd5\u98984 \u8def\u7531\u7ec4\u4ef6\u80fd\u4e0d\u80fd\u4f20\u9012props\u6570\u636e\n        // \u65b9\u6cd51 \u5e03\u5c14\u503c\u5199\u6cd5 \u5e76\u4e14\u53ea\u80fd\u4f20\u9012params\u53c2\u6570\n        // props: true\n        // \u65b9\u6cd52 \u5bf9\u8c61\u5199\u6cd5\n        // props: {a:1,b:2,wd:'aaa'}\n        // \u65b9\u6cd53 \u51fd\u6570\u5199\u6cd5 \u53ef\u4ee5param\u53c2\u6570 query\u53c2\u6570 \u901a\u8fc7props\u4f20\u9012\u7ed9\u8def\u7531\u7ec4\u4ef6\n        props:($route) => ({wd:$route.params.wd, k:$route.query.k})  \n    }\n")),(0,a.kt)("h3",{id:"navigationduplicated\u5904\u7406"},"NavigationDuplicated\u5904\u7406"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'// \u62a5\u9519\u5904\u7406 Uncaught (in promise) NavigationDuplicated\n// \u58f0\u660e\u5f0f\u5bfc\u822a \u6ca1\u6709\u8fd9\u79cd\u95ee\u9898 \u56e0\u4e3a\u5e95\u5c42\u5904\u7406\u597d\u4e86\uff0c\u800c\u7f16\u7a0b\u5f0f\u5bfc\u822a\u6709\u95ee\u9898\n// \u901a\u8fc7\u7ed9push\u65b9\u6cd5\u4f20\u9012 \u76f8\u5e94\u7684\u6210\u529f\u548c\u5931\u8d25\u51fd\u6570\uff0c\u53ef\u4ee5\u6355\u83b7\u5230\u5f53\u524d\u7684\u9519\u8bef\uff0c\u4f46\u662f\u6cbb\u6807\u4e0d\u6cbb\u672c\n// \u5728\u522b\u7684\u5730\u65b9\u4f7f\u7528\u65f6\u8fd8\u662f\u5f97\u5904\u7406\n// this.$router.push({\n//   name:"search",\n//   params:{\n//     wd: this.wd,\n//   },\n//   query:{\n//     k:this.wd.toUpperCase(),\n//   }\n// },()=>{},(error)=>{});\n\n\n// \u62a5\u9519\u5904\u7406 Uncaught (in promise) NavigationDuplicated\n// \u5148\u4fdd\u5b58VueRouter\u539f\u578b\u5bf9\u8c61\u7684push \nlet originPush = VueRouter.prototype.push;\n// \u91cd\u5199push/replace \nVueRouter.prototype.push = function (location, resolve, reject) {\n    if (resolve && reject) {\n        // call/apply \u90fd\u53ef\u4ee5\u8c03\u7528\u51fd\u6570\u4e00\u6b21\uff0c\u7be1\u6539\u51fd\u6570\u7684\u4e0a\u4e0b\u6587\u4e00\u6b21\n        // call \u4f20\u9012\u53c2\u6570\u7528\u9017\u53f7\u9694\u5f00\uff0capply\u65b9\u6cd5\u6267\u884c\u4f20\u9012\u6570\u7ec4\n        // \u6b64\u5904this\u4fdd\u8bc1\u4e0a\u4e0b\u6587\u4e3aRouter\u5b9e\u4f8b\n        originPush.call(this, location, resolve, reject);\n    } else {\n        originPush.call(this, location, () => { }, () => { });\n    }\n}\n')),(0,a.kt)("h3",{id:"\u8282\u6d41\u548c\u9632\u6296"},"\u8282\u6d41\u548c\u9632\u6296"),(0,a.kt)("p",null,"\u9632\u6296\uff1a\u7528\u6237\u9891\u7e41\u64cd\u4f5c\uff0c\u53ea\u6267\u884c\u4e00\u6b21\uff1b"),(0,a.kt)("p",null,"\u8282\u6d41\uff1a\u7528\u6237\u9891\u7e41\u64cd\u4f5c\uff0c\u904f\u5236\u7528\u6237\u6267\u884c\u7684\u9891\u7387\uff1b"))}m.isMDXComponent=!0}}]);