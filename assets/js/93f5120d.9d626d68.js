"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3058],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>f});var n=t(7294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var m=n.createContext({}),c=function(e){var r=n.useContext(m),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},p=function(e){var r=c(e.components);return n.createElement(m.Provider,{value:r},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,a=e.originalType,m=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(t),d=i,f=u["".concat(m,".").concat(d)]||u[d]||s[d]||a;return t?n.createElement(f,o(o({ref:r},p),{},{components:t})):n.createElement(f,o({ref:r},p))}));function f(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=d;var l={};for(var m in r)hasOwnProperty.call(r,m)&&(l[m]=r[m]);l.originalType=e,l[u]="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=t[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},441:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>m,contentTitle:()=>o,default:()=>s,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=t(7462),i=(t(7294),t(3905));const a={title:"\u5f52\u5e76\u6392\u5e8f",hidemeta:!0},o=void 0,l={unversionedId:"Algorithm/MergeSort",id:"Algorithm/MergeSort",title:"\u5f52\u5e76\u6392\u5e8f",description:"* \u89c6\u9891\u94fe\u63a5",source:"@site/docs/Algorithm/MergeSort.mdx",sourceDirName:"Algorithm",slug:"/Algorithm/MergeSort",permalink:"/summary/Algorithm/MergeSort",draft:!1,editUrl:"https://github.com/Halcyon666/summary/blob/main/docs/Algorithm/MergeSort.mdx",tags:[],version:"current",frontMatter:{title:"\u5f52\u5e76\u6392\u5e8f",hidemeta:!0},sidebar:"tutorialSidebar",previous:{title:"\u8fd4\u56de\u4e24\u4e2a\u6b63\u5e8f\u6570\u7ec4\u7684\u4e2d\u4f4d\u6570",permalink:"/summary/Algorithm/LeetCode\u8fd4\u56de\u4e24\u4e2a\u6b63\u5e8f\u6570\u7ec4\u7684\u4e2d\u4f4d\u6570"},next:{title:"\u5feb\u901f\u6392\u5e8f",permalink:"/summary/Algorithm/QuickSort"}},m={},c=[],p={toc:c},u="wrapper";function s(e){let{components:r,...t}=e;return(0,i.kt)(u,(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.bilibili.com/video/BV1Ax411U7Xx?from=search&seid=2724712095992885035"},"\u89c6\u9891\u94fe\u63a5")," "),(0,i.kt)("li",{parentName:"ul"},"\u7b97\u6cd5\u601d\u8def\uff1a\u5c06\u4e24\u4e2a\u5c40\u90e8\u6709\u5e8f\u7684\u6570\u7ec4\u5f52\u5e76\u4e3a\u4e00\u4e2a\u6709\u5e8f\u7684\u6570\u7ec4"),(0,i.kt)("li",{parentName:"ul"},"\u5f52\u5e76\u8fc7\u7a0b\uff1ai,j\u4e24\u4e2a\u6307\u9488\u6307\u5411\u4e24\u4e2a\u6570\u7ec4\uff0c\u5206\u522b\u6bd4\u8f83\u8be5\u4f4d\u7f6e\u4e0a\u503c\u7684\u5927\u5c0f"),(0,i.kt)("li",{parentName:"ul"},"\u5c0f\u7684\u5148\u653e\u5165\u539f\u6570\u7ec4\uff1b"),(0,i.kt)("li",{parentName:"ul"},"\u5206\u6cbb\u6cd5\uff1a\u9488\u5bf9\u6574\u4f53\u90fd\u65e0\u5e8f\u7684\u6570\u7ec4\u5219\u9700\u8981\u5206\u6cbb\u6cd5\u6765\u5904\u7406\uff0c\u5c06\u6570\u7ec4\u4e0d\u65ad\u4e00\u5206\u4e3a\u4e8c"),(0,i.kt)("li",{parentName:"ul"},"\u8fdb\u884c\u5f52\u5e76\u6392\u5e8f\uff0c\u76f4\u5230\u957f\u5ea6\u4e3a1(\u6307\u9488\u91cd\u5408\u7684\u65f6\u5019)\u6392\u5e8f\u5b8c\u6210")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'package simpleAlgorithm;\n\n/**\n * @Author: WhaleFall541\n * @Date: 2021/6/11 20:40\n * [\u89c6\u9891\u94fe\u63a5](https://www.bilibili.com/video/BV1Ax411U7Xx?from=search&seid=2724712095992885035)\n * \u7b97\u6cd5\u601d\u8def\uff1a\u5c06\u4e24\u4e2a\u5c40\u90e8\u6709\u5e8f\u7684\u6570\u7ec4\u5f52\u5e76\u4e3a\u4e00\u4e2a\u6709\u5e8f\u7684\u6570\u7ec4\n * \u5f52\u5e76\u8fc7\u7a0b\uff1ai,j\u4e24\u4e2a\u6307\u9488\u6307\u5411\u4e24\u4e2a\u6570\u7ec4\uff0c\u5206\u522b\u6bd4\u8f83\u8be5\u4f4d\u7f6e\u4e0a\u503c\u7684\u5927\u5c0f\n * \u5c0f\u7684\u5148\u653e\u5165\u539f\u6570\u7ec4\uff1b\n * \u5206\u6cbb\u6cd5\uff1a\u9488\u5bf9\u6574\u4f53\u90fd\u65e0\u5e8f\u7684\u6570\u7ec4\u5219\u9700\u8981\u5206\u6cbb\u6cd5\u6765\u5904\u7406\uff0c\u5c06\u6570\u7ec4\u4e0d\u65ad\u4e00\u5206\u4e3a\u4e8c\n * \u8fdb\u884c\u5f52\u5e76\u6392\u5e8f\uff0c\u76f4\u5230\u957f\u5ea6\u4e3a1(\u6307\u9488\u91cd\u5408\u7684\u65f6\u5019)\u6392\u5e8f\u5b8c\u6210\n */\npublic class MergeSort {\n\n    public static void main(String[] args) {\n        int[] arr = new int[]{10, 4, 6, 8, 2, 3, 9, 1};\n        mergeSort(arr, 0, arr.length-1);\n        StringBuilder sb = new StringBuilder();\n        for (int i : arr)\n            sb.append(i).append(" ");\n        System.out.println("sb = " + sb);\n    }\n\n    private static void mergeSort(int[] arr, int l, int r) {\n        // \u5f52\u5e76\u6392\u5e8f\u53ea\u6709\u4e00\u4e2a\u5143\u7d20\u65f6\u7ed3\u675f\u9012\u5f52\n        if (l == r)\n            return;\n        // \u89c4\u5b9amid\u4e3a\u5206\u754c\u7ebf\u53f3\u8fb9\u7684\u7b2c\u4e00\u4e2a\u5143\u7d20\n        int mid = (l + r) / 2+1;\n        mergeSort(arr, l, mid-1);\n        mergeSort(arr, mid, r);\n        merge(arr, l, mid, r);\n    }\n\n    private static void merge(int[] arr, int l, int mid, int r) {\n        int m = mid - l, n = r - mid + 1;\n\n        // \u89c4\u5b9amid\u4e3a\u5206\u754c\u7ebf\u53f3\u8fb9\u7684\u7b2c\u4e00\u4e2a\u5143\u7d20\n        int[] left = new int[m];\n        int[] right = new int[n];\n\n        for (int i = l; i < mid; i++)\n            left[i - l] = arr[i];\n        // NOTE: \u6ce8\u610f\u8fd9\u91cc\u7684r\u8868\u793a\u53f3\u8fb9\u754c i<=r \u7b49\u53f7\u6389\u4e86\u5c31\u60b2\u5267\u4e86\n        // \u9519\u8bef\u8f93\u51fa\u4e3a 0 0 0 0 0 0 0 10\n        for (int i = mid; i <= r; i++)\n            right[i - mid] = arr[i];\n\n        //do merge\n        int k = l, i = 0, j = 0;\n        while (i < n && j < m) {\n            if (left[i] > right[j])\n                // \u628a\u5c0f\u7684\u6570\u653e\u56de\u5230\u6570\u7ec4\u4e2d\u4ecek\u5f00\u59cb\u653e\n                arr[k++] = right[j++];\n            else\n                arr[k++] = left[i++];\n        }\n\n        // \u5982\u679c\u4e00\u4e2a\u6570\u7ec4\u4e3a\u7a7a\u4e86\uff0c\u653e\u5165\u53e6\u4e00\u4e2a\u6570\u7ec4\u6240\u6709\u5143\u7d20\n        while (i < n)\n            arr[k++] = left[i++];\n        while (j < m)\n            arr[k++] = right[j++];\n    }\n}\n')),(0,i.kt)("blockquote",null,(0,i.kt)("font",{color:"red"},"\u8f6c\u8f7d\u8bf7\u6ce8\u660e [\u539f\u6587\u5730\u5740](https://www.cnblogs.com/whalefall541/p/14879389.html)")))}s.isMDXComponent=!0}}]);