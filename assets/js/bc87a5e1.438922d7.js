"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3065],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(r),b=a,f=u["".concat(p,".").concat(b)]||u[b]||m[b]||i;return r?n.createElement(f,o(o({ref:t},s),{},{components:r})):n.createElement(f,o({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=b;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},6553:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const i={title:"\u5192\u6ce1\u6392\u5e8f",sidebar_label:"\u5192\u6ce1\u6392\u5e8f",sidebar_position:3},o=void 0,l={unversionedId:"Tech/Algorithm/BubbleSort",id:"Tech/Algorithm/BubbleSort",title:"\u5192\u6ce1\u6392\u5e8f",description:"\u7b97\u6cd5\u601d\u7ef4\uff1a\u7b2c\u4e00\u5c42for\u5faa\u73af\u63a7\u5236\u8d9f\u6570\uff0c\u7b2c\u4e8c\u5c42for\u5faa\u73af\u4ecej=0\u548cj=1\u5f00\u59cb\u6bd4\u8f83",source:"@site/docs/01-Tech/05-Algorithm/BubbleSort.md",sourceDirName:"01-Tech/05-Algorithm",slug:"/Tech/Algorithm/BubbleSort",permalink:"/summary/Tech/Algorithm/BubbleSort",draft:!1,editUrl:"https://github.com/Halcyon666/summary/blob/main/docs/01-Tech/05-Algorithm/BubbleSort.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"\u5192\u6ce1\u6392\u5e8f",sidebar_label:"\u5192\u6ce1\u6392\u5e8f",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\u4e8c\u5206\u63d2\u5165",permalink:"/summary/Tech/Algorithm/Binary-Insert"},next:{title:"\u5806\u6392\u5e8f",permalink:"/summary/Tech/Algorithm/HeadSort"}},p={},c=[],s={toc:c},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u7b97\u6cd5\u601d\u7ef4"),"\uff1a\u7b2c\u4e00\u5c42for\u5faa\u73af\u63a7\u5236\u8d9f\u6570\uff0c\u7b2c\u4e8c\u5c42for\u5faa\u73af\u4ecej=0\u548cj=1\u5f00\u59cb\u6bd4\u8f83\n\u5982\u679c\u53d1\u73b0\u524d\u9762\u6bd4\u540e\u9762\u5927\u5219\u4e92\u6362\u4f4d\u7f6e\n",(0,a.kt)("strong",{parentName:"p"},"\u4f18\u5316"),"\uff1a\u5f53\u7b2c\u4e00\u8d9f\u4e0b\u6765 \u6ca1\u6709\u5143\u7d20\u4ea4\u6362\uff0c\u8bf4\u660e\u8be5\u6570\u7ec4\u5df2\u7ecf\u6709\u5e8f\u4e86\u4e0d\u9700\u8981\u6392\u5e8f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'package simpleAlgorithm;\n\n/**\n * @Author: WhaleFall541\n * @Date: 2021/6/12 23:22\n * \u7b97\u6cd5\u601d\u7ef4\uff1a\u7b2c\u4e00\u5c42for\u5faa\u73af\u63a7\u5236\u8d9f\u6570\uff0c\u7b2c\u4e8c\u5c42for\u5faa\u73af\u4ecej=0\u548cj=1\u5f00\u59cb\u6bd4\u8f83\n * \u5982\u679c\u53d1\u73b0\u524d\u9762\u6bd4\u540e\u9762\u5927\u5219\u4e92\u6362\u4f4d\u7f6e\n * \u4f18\u5316\uff1a\u5f53\u7b2c\u4e00\u8d9f\u4e0b\u6765 \u6ca1\u6709\u5143\u7d20\u4ea4\u6362\uff0c\u8bf4\u660e\u8be5\u6570\u7ec4\u5df2\u7ecf\u6709\u5e8f\u4e86\u4e0d\u9700\u8981\u6392\u5e8f\n */\npublic class BubbleSort {\n    public static void main(String[] args) throws InterruptedException {\n        int[] arr = {-1111, 20, -3, -10, 100, -255};\n        bubble(arr);\n        StringBuilder sb = new StringBuilder();\n        for (int i : arr)\n            sb.append(i).append(" ");\n        System.out.println("sb = " + sb);\n\n    }\n\n    // \u5192\u6ce1\u6392\u5e8f\n    private static void bubble(int[] arr) {\n\n        for (int i = 0; i < arr.length; i++) {\n            boolean f = false;\n            for (int j = i + 1; j < arr.length; j++) {\n                if (arr[j - 1] > arr[j]) {\n                    swap(arr, j - 1, j);\n                    f = true;\n                }\n            }\n            if (!f) return;\n        }\n\n    }\n\n    private static void swap(int[] arr, int a, int b) {\n        int tmp = arr[a];\n        arr[a] = arr[b];\n        arr[b] = tmp;\n    }\n}\n')),(0,a.kt)("admonition",{title:"\u534f\u8bae",type:"tip"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u672c\u4f5c\u54c1\u4ee3\u7801\u90e8\u5206\u91c7\u7528 ",(0,a.kt)("a",{parentName:"p",href:"https://www.apache.org/licenses/LICENSE-2.0"},"Apache 2.0\u534f\u8bae"),"\u8fdb\u884c\u8bb8\u53ef\u3002\u9075\u5faa\u8bb8\u53ef\u7684\u524d\u63d0\u4e0b\uff0c\u4f60\u53ef\u4ee5\u81ea\u7531\u5730\u5bf9\u4ee3\u7801\u8fdb\u884c\u4fee\u6539\uff0c\u518d\u53d1\u5e03\uff0c\u53ef\u4ee5\u5c06\u4ee3\u7801\u7528\u4f5c\u5546\u4e1a\u7528\u9014\u3002\u4f46\u8981\u6c42\u4f60\uff1a"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u7f72\u540d"),"\uff1a\u5728\u539f\u6709\u4ee3\u7801\u548c\u884d\u751f\u4ee3\u7801\u4e2d\uff0c\u4fdd\u7559\u539f\u4f5c\u8005\u7f72\u540d\u53ca\u4ee3\u7801\u6765\u6e90\u4fe1\u606f\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u4fdd\u7559\u8bb8\u53ef\u8bc1"),"\uff1a\u5728\u539f\u6709\u4ee3\u7801\u548c\u884d\u751f\u4ee3\u7801\u4e2d\uff0c\u4fdd\u7559Apache 2.0\u534f\u8bae\u6587\u4ef6\u3002"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u672c\u4f5c\u54c1\u6587\u6863\u90e8\u5206\u91c7\u7528",(0,a.kt)("a",{parentName:"p",href:"http://creativecommons.org/licenses/by/4.0/"},"\u77e5\u8bc6\u5171\u4eab\u7f72\u540d 4.0 \u56fd\u9645\u8bb8\u53ef\u534f\u8bae"),"\u8fdb\u884c\u8bb8\u53ef\u3002 \u9075\u5faa\u8bb8\u53ef\u7684\u524d\u63d0\u4e0b\uff0c\u4f60\u53ef\u4ee5\u81ea\u7531\u5730\u5171\u4eab\uff0c\u5305\u62ec\u5728\u4efb\u4f55\u5a92\u4ecb\u4e0a\u4ee5\u4efb\u4f55\u5f62\u5f0f\u590d\u5236\u3001\u53d1\u884c\u672c\u4f5c\u54c1\uff0c\u4ea6\u53ef\u4ee5\u81ea\u7531\u5730\u6f14\u7ece\u3001\u4fee\u6539\u3001\u8f6c\u6362\u6216\u4ee5\u672c\u4f5c\u54c1\u4e3a\u57fa\u7840\u8fdb\u884c\u4e8c\u6b21\u521b\u4f5c\u3002\u4f46\u8981\u6c42\u4f60\uff1a"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u7f72\u540d"),"\uff1a\u5e94\u5728\u4f7f\u7528\u672c\u6587\u6863\u7684\u5168\u90e8\u6216\u90e8\u5206\u5185\u5bb9\u65f6\u5019\uff0c\u6ce8\u660e\u539f\u4f5c\u8005\u53ca\u6765\u6e90\u4fe1\u606f\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u975e\u5546\u4e1a\u6027\u4f7f\u7528"),"\uff1a\u4e0d\u5f97\u7528\u4e8e\u5546\u4e1a\u51fa\u7248\u6216\u5176\u4ed6\u4efb\u4f55\u5e26\u6709\u5546\u4e1a\u6027\u8d28\u7684\u884c\u4e3a\u3002\u5982\u9700\u5546\u4e1a\u4f7f\u7528\uff0c\u8bf7\u8054\u7cfb\u4f5c\u8005\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u76f8\u540c\u65b9\u5f0f\u5171\u4eab\u7684\u6761\u4ef6"),"\uff1a\u5728\u672c\u6587\u6863\u57fa\u7840\u4e0a\u6f14\u7ece\u3001\u4fee\u6539\u7684\u4f5c\u54c1\uff0c\u5e94\u5f53\u7ee7\u7eed\u4ee5\u77e5\u8bc6\u5171\u4eab\u7f72\u540d 4.0\u56fd\u9645\u8bb8\u53ef\u534f\u8bae\u8fdb\u884c\u8bb8\u53ef\u3002"))))))}m.isMDXComponent=!0}}]);