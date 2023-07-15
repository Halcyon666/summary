"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7846],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(n),f=o,d=s["".concat(c,".").concat(f)]||s[f]||m[f]||a;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8359:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const a={title:"\u6c424\u7684\u5e42",hidemeta:!0},i=void 0,l={unversionedId:"Algorithm/LeetCode4\u7684\u5e42",id:"Algorithm/LeetCode4\u7684\u5e42",title:"\u6c424\u7684\u5e42",description:"\u8f6c\u8f7d\u8bf7\u6ce8\u660e \u539f\u6587\u5730\u5740",source:"@site/docs/Algorithm/LeetCode4\u7684\u5e42.md",sourceDirName:"Algorithm",slug:"/Algorithm/LeetCode4\u7684\u5e42",permalink:"/summary/Algorithm/LeetCode4\u7684\u5e42",draft:!1,editUrl:"https://github.com/Halcyon666/summary/blob/main/docs/Algorithm/LeetCode4\u7684\u5e42.md",tags:[],version:"current",frontMatter:{title:"\u6c424\u7684\u5e42",hidemeta:!0},sidebar:"tutorialSidebar",previous:{title:"KMP",permalink:"/summary/Algorithm/KMP"},next:{title:"\u8fd4\u56de\u4e24\u4e2a\u6b63\u5e8f\u6570\u7ec4\u7684\u4e2d\u4f4d\u6570",permalink:"/summary/Algorithm/LeetCode\u8fd4\u56de\u4e24\u4e2a\u6b63\u5e8f\u6570\u7ec4\u7684\u4e2d\u4f4d\u6570"}},c={},u=[],p={toc:u},s="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(s,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"package whale.leetcode.simple;\n\n/**\n * @Author: WhaleFall541\n * @Date: 2021/5/31 23:22\n */\npublic class PowerOfFour {\n    public static void main(String[] args) {\n        System.out.println(isPowerOfFour1(1073741825));\n    }\n\n    \n    public static boolean isPowerOfFour1(int n) {\n        if (n == 1)\n            return true;\n        int a = 4;\n        // a\u8fd8\u6ca1\u5230n\u7684\u5927\u5c0f\u5c31\u7ee7\u7eed\u4e58\u4ee54\uff0c\u6700\u540e\u5927\u5c0f\u6ea2\u51fa\u540ea=0\n        while (n > a && a > 0) {\n            a = a * 4;\n        }\n        if (n == a)\n            return true;\n        else\n            return false;\n    }\n\n    public static boolean isPowerOfFour(int n) {\n      // \u6b64\u5904\u770b\u7684\u7b54\u6848 \u4e8c\u8fdb\u5236 011 & 100 = 000 \u800c\u4e14 4 % 3 =1\n        return n > 0 && (n & (n - 1)) == 0 && n % 3 == 1;\n    }\n}\n")),(0,o.kt)("blockquote",null,(0,o.kt)("font",{color:"red"},"\u8f6c\u8f7d\u8bf7\u6ce8\u660e [\u539f\u6587\u5730\u5740](https://www.cnblogs.com/whalefall541/p/14835292.html)")))}m.isMDXComponent=!0}}]);