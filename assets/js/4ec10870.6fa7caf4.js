"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2620],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(n),m=o,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7620:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const a={},l=void 0,i={unversionedId:"FrontEnd/es",id:"FrontEnd/es",title:"es",description:"ES\u5b66\u4e60",source:"@site/docs/02-FrontEnd/es.md",sourceDirName:"02-FrontEnd",slug:"/FrontEnd/es",permalink:"/summary/FrontEnd/es",draft:!1,editUrl:"https://github.com/Halcyon666/summary/blob/main/docs/02-FrontEnd/es.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"css",permalink:"/summary/FrontEnd/css"},next:{title:"pnpm",permalink:"/summary/FrontEnd/pnpm"}},c={},s=[{value:"ES\u5b66\u4e60",id:"es\u5b66\u4e60",level:2},{value:"Node.js \u9ed8\u8ba4\u6ca1\u6709\u6253\u5f00ES6\u7684\u5b9e\u9a8c\u6027\u8bed\u6cd5\u3002",id:"nodejs-\u9ed8\u8ba4\u6ca1\u6709\u6253\u5f00es6\u7684\u5b9e\u9a8c\u6027\u8bed\u6cd5",level:2},{value:"Babel \u8f6c\u7801\u5668",id:"babel-\u8f6c\u7801\u5668",level:2}],p={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"es\u5b66\u4e60"},"ES\u5b66\u4e60"),(0,o.kt)("p",null,"ES\u5206\u6210ES5\uff08ES3.1\u91cd\u547d\u540d\uff09\uff0c ES6\uff082015\uff0c2016...\uff09"),(0,o.kt)("h2",{id:"nodejs-\u9ed8\u8ba4\u6ca1\u6709\u6253\u5f00es6\u7684\u5b9e\u9a8c\u6027\u8bed\u6cd5"},"Node.js \u9ed8\u8ba4\u6ca1\u6709\u6253\u5f00ES6\u7684\u5b9e\u9a8c\u6027\u8bed\u6cd5\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"// Linux & Mac\n$ node --v8-options | grep harmony\n\n// Windows\n$ node --v8-options | findstr harmony\n")),(0,o.kt)("h2",{id:"babel-\u8f6c\u7801\u5668"},"Babel \u8f6c\u7801\u5668"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://babeljs.io/"},"Babel")," \u662f\u4e00\u4e2a\u5e7f\u6cdb\u4f7f\u7528\u7684 ES6 \u8f6c\u7801\u5668\uff0c\u53ef\u4ee5\u5c06 ES6 \u4ee3\u7801\u8f6c\u4e3a ES5 \u4ee3\u7801\uff0c\u4ece\u800c\u5728\u8001\u7248\u672c\u7684\u6d4f\u89c8\u5668\u6267\u884c\u3002"),(0,o.kt)("p",null,'.babelrc rc\u4ee3\u8868"runtime configuration"'))}d.isMDXComponent=!0}}]);