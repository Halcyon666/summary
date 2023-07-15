"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5694],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var m=n.createContext({}),p=function(e){var t=n.useContext(m),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(m.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,m=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(r),g=i,d=u["".concat(m,".").concat(g)]||u[g]||s[g]||a;return r?n.createElement(d,l(l({ref:t},c),{},{components:r})):n.createElement(d,l({ref:t},c))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,l=new Array(a);l[0]=g;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o[u]="string"==typeof e?e:i,l[1]=o;for(var p=2;p<a;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},8610:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>s,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var n=r(7462),i=(r(7294),r(3905));const a={title:"\u5f52\u5e76\u6392\u5e8f",hidemeta:!0},l=void 0,o={unversionedId:"Algorithm/MergeSort",id:"Algorithm/MergeSort",title:"\u5f52\u5e76\u6392\u5e8f",description:"* \u89c6\u9891\u94fe\u63a5",source:"@site/docs/Algorithm/MergeSort.md",sourceDirName:"Algorithm",slug:"/Algorithm/MergeSort",permalink:"/summary/Algorithm/MergeSort",draft:!1,editUrl:"https://github.com/Halcyon666/summary/blob/main/docs/Algorithm/MergeSort.md",tags:[],version:"current",frontMatter:{title:"\u5f52\u5e76\u6392\u5e8f",hidemeta:!0},sidebar:"tutorialSidebar",previous:{title:"\u8fd4\u56de\u4e24\u4e2a\u6b63\u5e8f\u6570\u7ec4\u7684\u4e2d\u4f4d\u6570",permalink:"/summary/Algorithm/LeetCode\u8fd4\u56de\u4e24\u4e2a\u6b63\u5e8f\u6570\u7ec4\u7684\u4e2d\u4f4d\u6570"},next:{title:"\u5feb\u901f\u6392\u5e8f",permalink:"/summary/Algorithm/QuickSort"}},m={},p=[],c={toc:p},u="wrapper";function s(e){let{components:t,...r}=e;return(0,i.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.bilibili.com/video/BV1Ax411U7Xx?from=search&seid=2724712095992885035"},"\u89c6\u9891\u94fe\u63a5")," "),(0,i.kt)("li",{parentName:"ul"},"\u7b97\u6cd5\u601d\u8def\uff1a\u5c06\u4e24\u4e2a\u5c40\u90e8\u6709\u5e8f\u7684\u6570\u7ec4\u5f52\u5e76\u4e3a\u4e00\u4e2a\u6709\u5e8f\u7684\u6570\u7ec4"),(0,i.kt)("li",{parentName:"ul"},"\u5f52\u5e76\u8fc7\u7a0b\uff1ai,j\u4e24\u4e2a\u6307\u9488\u6307\u5411\u4e24\u4e2a\u6570\u7ec4\uff0c\u5206\u522b\u6bd4\u8f83\u8be5\u4f4d\u7f6e\u4e0a\u503c\u7684\u5927\u5c0f"),(0,i.kt)("li",{parentName:"ul"},"\u5c0f\u7684\u5148\u653e\u5165\u539f\u6570\u7ec4\uff1b"),(0,i.kt)("li",{parentName:"ul"},"\u5206\u6cbb\u6cd5\uff1a\u9488\u5bf9\u6574\u4f53\u90fd\u65e0\u5e8f\u7684\u6570\u7ec4\u5219\u9700\u8981\u5206\u6cbb\u6cd5\u6765\u5904\u7406\uff0c\u5c06\u6570\u7ec4\u4e0d\u65ad\u4e00\u5206\u4e3a\u4e8c"),(0,i.kt)("li",{parentName:"ul"},"\u8fdb\u884c\u5f52\u5e76\u6392\u5e8f\uff0c\u76f4\u5230\u957f\u5ea6\u4e3a1(\u6307\u9488\u91cd\u5408\u7684\u65f6\u5019)\u6392\u5e8f\u5b8c\u6210")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'package simpleAlgorithm;\n\n/**\n * @Author: WhaleFall541\n * @Date: 2021/6/11 20:40\n * [\u89c6\u9891\u94fe\u63a5](https://www.bilibili.com/video/BV1Ax411U7Xx?from=search&seid=2724712095992885035)\n * \u7b97\u6cd5\u601d\u8def\uff1a\u5c06\u4e24\u4e2a\u5c40\u90e8\u6709\u5e8f\u7684\u6570\u7ec4\u5f52\u5e76\u4e3a\u4e00\u4e2a\u6709\u5e8f\u7684\u6570\u7ec4\n * \u5f52\u5e76\u8fc7\u7a0b\uff1ai,j\u4e24\u4e2a\u6307\u9488\u6307\u5411\u4e24\u4e2a\u6570\u7ec4\uff0c\u5206\u522b\u6bd4\u8f83\u8be5\u4f4d\u7f6e\u4e0a\u503c\u7684\u5927\u5c0f\n * \u5c0f\u7684\u5148\u653e\u5165\u539f\u6570\u7ec4\uff1b\n * \u5206\u6cbb\u6cd5\uff1a\u9488\u5bf9\u6574\u4f53\u90fd\u65e0\u5e8f\u7684\u6570\u7ec4\u5219\u9700\u8981\u5206\u6cbb\u6cd5\u6765\u5904\u7406\uff0c\u5c06\u6570\u7ec4\u4e0d\u65ad\u4e00\u5206\u4e3a\u4e8c\n * \u8fdb\u884c\u5f52\u5e76\u6392\u5e8f\uff0c\u76f4\u5230\u957f\u5ea6\u4e3a1(\u6307\u9488\u91cd\u5408\u7684\u65f6\u5019)\u6392\u5e8f\u5b8c\u6210\n */\npublic class MergeSort {\n\n    public static void main(String[] args) {\n        int[] arr = new int[]{10, 4, 6, 8, 2, 3, 9, 1};\n        mergeSort(arr, 0, arr.length-1);\n        StringBuilder sb = new StringBuilder();\n        for (int i : arr)\n            sb.append(i).append(" ");\n        System.out.println("sb = " + sb);\n    }\n\n    private static void mergeSort(int[] arr, int l, int r) {\n        // \u5f52\u5e76\u6392\u5e8f\u53ea\u6709\u4e00\u4e2a\u5143\u7d20\u65f6\u7ed3\u675f\u9012\u5f52\n        if (l == r)\n            return;\n        // \u89c4\u5b9amid\u4e3a\u5206\u754c\u7ebf\u53f3\u8fb9\u7684\u7b2c\u4e00\u4e2a\u5143\u7d20\n        int mid = (l + r) / 2+1;\n        mergeSort(arr, l, mid-1);\n        mergeSort(arr, mid, r);\n        merge(arr, l, mid, r);\n    }\n\n    private static void merge(int[] arr, int l, int mid, int r) {\n        int m = mid - l, n = r - mid + 1;\n\n        // \u89c4\u5b9amid\u4e3a\u5206\u754c\u7ebf\u53f3\u8fb9\u7684\u7b2c\u4e00\u4e2a\u5143\u7d20\n        int[] left = new int[m];\n        int[] right = new int[n];\n\n        for (int i = l; i < mid; i++)\n            left[i - l] = arr[i];\n        // NOTE: \u6ce8\u610f\u8fd9\u91cc\u7684r\u8868\u793a\u53f3\u8fb9\u754c i<=r \u7b49\u53f7\u6389\u4e86\u5c31\u60b2\u5267\u4e86\n        // \u9519\u8bef\u8f93\u51fa\u4e3a 0 0 0 0 0 0 0 10\n        for (int i = mid; i <= r; i++)\n            right[i - mid] = arr[i];\n\n        //do merge\n        int k = l, i = 0, j = 0;\n        while (i < n && j < m) {\n            if (left[i] > right[j])\n                // \u628a\u5c0f\u7684\u6570\u653e\u56de\u5230\u6570\u7ec4\u4e2d\u4ecek\u5f00\u59cb\u653e\n                arr[k++] = right[j++];\n            else\n                arr[k++] = left[i++];\n        }\n\n        // \u5982\u679c\u4e00\u4e2a\u6570\u7ec4\u4e3a\u7a7a\u4e86\uff0c\u653e\u5165\u53e6\u4e00\u4e2a\u6570\u7ec4\u6240\u6709\u5143\u7d20\n        while (i < n)\n            arr[k++] = left[i++];\n        while (j < m)\n            arr[k++] = right[j++];\n    }\n}\n')),(0,i.kt)("admonition",{title:"\u534f\u8bae",type:"tip"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u672c\u4f5c\u54c1\u4ee3\u7801\u90e8\u5206\u91c7\u7528 ",(0,i.kt)("a",{parentName:"p",href:"https://www.apache.org/licenses/LICENSE-2.0"},"Apache 2.0\u534f\u8bae"),"\u8fdb\u884c\u8bb8\u53ef\u3002\u9075\u5faa\u8bb8\u53ef\u7684\u524d\u63d0\u4e0b\uff0c\u4f60\u53ef\u4ee5\u81ea\u7531\u5730\u5bf9\u4ee3\u7801\u8fdb\u884c\u4fee\u6539\uff0c\u518d\u53d1\u5e03\uff0c\u53ef\u4ee5\u5c06\u4ee3\u7801\u7528\u4f5c\u5546\u4e1a\u7528\u9014\u3002\u4f46\u8981\u6c42\u4f60\uff1a"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\u7f72\u540d"),"\uff1a\u5728\u539f\u6709\u4ee3\u7801\u548c\u884d\u751f\u4ee3\u7801\u4e2d\uff0c\u4fdd\u7559\u539f\u4f5c\u8005\u7f72\u540d\u53ca\u4ee3\u7801\u6765\u6e90\u4fe1\u606f\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\u4fdd\u7559\u8bb8\u53ef\u8bc1"),"\uff1a\u5728\u539f\u6709\u4ee3\u7801\u548c\u884d\u751f\u4ee3\u7801\u4e2d\uff0c\u4fdd\u7559Apache 2.0\u534f\u8bae\u6587\u4ef6\u3002"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u672c\u4f5c\u54c1\u6587\u6863\u90e8\u5206\u91c7\u7528",(0,i.kt)("a",{parentName:"p",href:"http://creativecommons.org/licenses/by/4.0/"},"\u77e5\u8bc6\u5171\u4eab\u7f72\u540d 4.0 \u56fd\u9645\u8bb8\u53ef\u534f\u8bae"),"\u8fdb\u884c\u8bb8\u53ef\u3002 \u9075\u5faa\u8bb8\u53ef\u7684\u524d\u63d0\u4e0b\uff0c\u4f60\u53ef\u4ee5\u81ea\u7531\u5730\u5171\u4eab\uff0c\u5305\u62ec\u5728\u4efb\u4f55\u5a92\u4ecb\u4e0a\u4ee5\u4efb\u4f55\u5f62\u5f0f\u590d\u5236\u3001\u53d1\u884c\u672c\u4f5c\u54c1\uff0c\u4ea6\u53ef\u4ee5\u81ea\u7531\u5730\u6f14\u7ece\u3001\u4fee\u6539\u3001\u8f6c\u6362\u6216\u4ee5\u672c\u4f5c\u54c1\u4e3a\u57fa\u7840\u8fdb\u884c\u4e8c\u6b21\u521b\u4f5c\u3002\u4f46\u8981\u6c42\u4f60\uff1a"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\u7f72\u540d"),"\uff1a\u5e94\u5728\u4f7f\u7528\u672c\u6587\u6863\u7684\u5168\u90e8\u6216\u90e8\u5206\u5185\u5bb9\u65f6\u5019\uff0c\u6ce8\u660e\u539f\u4f5c\u8005\u53ca\u6765\u6e90\u4fe1\u606f\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\u975e\u5546\u4e1a\u6027\u4f7f\u7528"),"\uff1a\u4e0d\u5f97\u7528\u4e8e\u5546\u4e1a\u51fa\u7248\u6216\u5176\u4ed6\u4efb\u4f55\u5e26\u6709\u5546\u4e1a\u6027\u8d28\u7684\u884c\u4e3a\u3002\u5982\u9700\u5546\u4e1a\u4f7f\u7528\uff0c\u8bf7\u8054\u7cfb\u4f5c\u8005\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\u76f8\u540c\u65b9\u5f0f\u5171\u4eab\u7684\u6761\u4ef6"),"\uff1a\u5728\u672c\u6587\u6863\u57fa\u7840\u4e0a\u6f14\u7ece\u3001\u4fee\u6539\u7684\u4f5c\u54c1\uff0c\u5e94\u5f53\u7ee7\u7eed\u4ee5\u77e5\u8bc6\u5171\u4eab\u7f72\u540d 4.0\u56fd\u9645\u8bb8\u53ef\u534f\u8bae\u8fdb\u884c\u8bb8\u53ef\u3002"))))))}s.isMDXComponent=!0}}]);