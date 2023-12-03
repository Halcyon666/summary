"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6366],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>b});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),m=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},s=function(t){var e=m(t.components);return r.createElement(p.Provider,{value:e},t.children)},c="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,p=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),c=m(n),d=a,b=c["".concat(p,".").concat(d)]||c[d]||u[d]||i;return n?r.createElement(b,o(o({ref:e},s),{},{components:n})):r.createElement(b,o({ref:e},s))}));function b(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l[c]="string"==typeof t?t:a,o[1]=l;for(var m=2;m<i;m++)o[m]=n[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5633:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var r=n(7462),a=(n(7294),n(3905));const i={title:"\u5806\u6392\u5e8f",sidebar_label:"\u5806\u6392\u5e8f",sidebar_position:4},o=void 0,l={unversionedId:"Algorithm/HeadSort",id:"Algorithm/HeadSort",title:"\u5806\u6392\u5e8f",description:"\u4ee3\u7801\u6765\u81ea\u8be5\u89c6\u9891",source:"@site/docs/03-Algorithm/HeadSort.md",sourceDirName:"03-Algorithm",slug:"/Algorithm/HeadSort",permalink:"/summary/Algorithm/HeadSort",draft:!1,editUrl:"https://github.com/Halcyon666/summary/blob/main/docs/03-Algorithm/HeadSort.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"\u5806\u6392\u5e8f",sidebar_label:"\u5806\u6392\u5e8f",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"\u5192\u6ce1\u6392\u5e8f",permalink:"/summary/Algorithm/BubbleSort"},next:{title:"\u63d2\u5165\u6392\u5e8f",permalink:"/summary/Algorithm/InsertSort"}},p={},m=[],s={toc:m},c="wrapper";function u(t){let{components:e,...n}=t;return(0,a.kt)(c,(0,r.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.bilibili.com/video/BV1Eb41147dK?t=1590"},"\u4ee3\u7801\u6765\u81ea\u8be5\u89c6\u9891"),"\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/whalefall541/learn4Algorithm.git"},"github\u4ed3\u5e93"),"\n",(0,a.kt)("strong",{parentName:"p"},"\u7b97\u6cd5\u601d\u7ef4"),"\uff1a\u5148\u521d\u59cb\u5316\u5806\uff08\u4ece\u6700\u5927\u7684\u975e\u53f6\u5b50\u8282\u70b9\u5f00\u59cb\uff0c\u5f80\u524d\u4e0d\u65ad\u8fdb\u884c\u6811\u5316\u6210\u5927\u6839\u5806\uff09\n\u518d\u628a\u5934\u7ed3\u70b9\u548c\u6700\u540e\u4e00\u4e2a\u8282\u70b9\u4e92\u6362\u4f4d\u7f6e\uff0c\u7136\u540e\u91cd\u65b0\u6811\u5316\u5934\u7ed3\u70b9\uff0c\u5982\u6b64\u5f80\u590d\uff0c\u6bcf\u6b21\u6392\u597d\u4e00\u4e2a\n\u5143\u7d20\u6700\u5dee\u7684\u60c5\u51b5\u9700\u8981\u8d70(n-1)\u8d9f\u4e92\u6362\u3002"),(0,a.kt)("p",null,"\u5982\u4f55\u6811\u5316\u6811\u5316i\u8282\u70b9\u6210\u5927\u6839\u5806\u5462\uff1f"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6bd4\u8f83\u6811\u5316\u8282\u70b9i\u548c\u5176\u53f6\u5b50\u8282\u70b9\u7684\u5927\u5c0f\uff0c\u5982\u679c\u53d1\u73b0\u6709\u6bd4i\u8282\u70b9\u8fd8\u5927\u7684\u5219\u4e92\u6362\u4f4d\u7f6e"),(0,a.kt)("li",{parentName:"ul"},"\u7136\u540e\u53bb\u8c03\u6574\u4e92\u6362\u540e\u7684\u4f4d\u7f6e\u7684\u8282\u70b9\u76f4\u81f3\u5230\u8fbe\u53f6\u5b50\u8282\u70b9\u4f4d\u7f6e"),(0,a.kt)("li",{parentName:"ul"},"PS\uff1a\u4e92\u6362\u4e4b\u540e\uff0cMAX\u503c\u6240\u5728\u7684\u6839\u5806\u88ab\u7834\u574f \u9700\u8981\u8fdb\u4e00\u6b65\u8c03\u6574")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'/**\n * @Author: WhaleFall541\n * @Date: 2021/6/12 16:43\n * @see <a href="https://www.bilibili.com/video/BV1Eb41147dK?t=1590">https://www.bilibili.com/video/BV1Eb41147dK?t=1590</a>\n */\npublic class HeapSort {\n\n    public static void main(String[] args) {\n\n        int[] arr = new int[]{4, 10, 3, 5, 1, 2};\n        heapSort(arr);\n        StringBuilder sb = new StringBuilder();\n        for (int i : arr)\n            sb.append(i).append(" ");\n        System.out.println("sb = " + sb);\n    }\n\n    private static void heapSort(int[] arr) {\n        int n = arr.length;\n\n\n        // \u521d\u59cb\u5316\u5806 \u4ece\u6700\u5927\u7684\u975e\u53f6\u5b50\u8282\u70b9\u5f00\u59cb\u6811\u5316\u5230\u5934\u8282\u70b9\n        // last_node = n-1\n        // \u53c8 parent = (i-1)/2\n        for (int i = (n - 2) / 2; i >= 0; i--)\n            heapAdjust(arr, n, i);\n\n        // \u5c06\u5927\u6839\u5806\u4e2d \u6839\u8282\u70b9\u548c\u6700\u540e\u4e00\u4e2a\u8282\u70b9\u4e92\u6362\u4f4d\u7f6e\n        for (int j = n - 1; j >= 0; j--) {\n            swap(arr, j, 0);\n            // \u5bf9\u5269\u4e0b\u7684\u5806 j\u4e2a\u5143\u7d20\u8fdb\u884c\u6811\u5316\n            heapAdjust(arr, j, 0);\n        }\n    }\n\n    /**\n     * \u5bf9\u7b2ci\u4e2a\u8282\u70b9\u6240\u5728\u7684\u6811\u8fdb\u884c\u6811\u5316,\u751f\u6210\u5927\u6839\u5806\n     *\n     * @param arr \u9700\u8981\u6811\u5316\u7684\u6570\u7ec4\n     * @param n   \u6811\u5316\u65f6\u6570\u7684\u957f\u5ea6\n     * @param i   \u5f53\u524d\u6811\u5316\u7684\u4f4d\u7f6e\n     */\n    private static void heapAdjust(int[] arr, int n, int i) {\n\n        if (i >= n) return;\n        int left = i * 2 + 1;\n        int right = i * 2 + 2;\n        int max = i;\n        if (left < n && arr[left] > arr[max])\n            max = left;\n        if (right < n && arr[right] > arr[max])\n            max = right;\n        if (max != i) {\n            swap(arr, max, i);\n            // \u6811\u5316\u4ea4\u6362\u540emax\u7684\u4f4d\u7f6e,\u76f4\u5230\u53f6\u5b50\u8282\u70b9\u6216\u8005\u6ca1\u6709\u4ea4\u6362\u60c5\u51b5\u4e3a\u6b62\n            heapAdjust(arr, n, max);\n        }\n    }\n\n    private static void swap(int[] arr, int a, int b) {\n        int tmp = arr[a];\n        arr[a] = arr[b];\n        arr[b] = tmp;\n    }\n}\n\n')),(0,a.kt)("admonition",{title:"\u534f\u8bae",type:"tip"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u672c\u4f5c\u54c1\u4ee3\u7801\u90e8\u5206\u91c7\u7528 ",(0,a.kt)("a",{parentName:"p",href:"https://www.apache.org/licenses/LICENSE-2.0"},"Apache 2.0\u534f\u8bae"),"\u8fdb\u884c\u8bb8\u53ef\u3002\u9075\u5faa\u8bb8\u53ef\u7684\u524d\u63d0\u4e0b\uff0c\u4f60\u53ef\u4ee5\u81ea\u7531\u5730\u5bf9\u4ee3\u7801\u8fdb\u884c\u4fee\u6539\uff0c\u518d\u53d1\u5e03\uff0c\u53ef\u4ee5\u5c06\u4ee3\u7801\u7528\u4f5c\u5546\u4e1a\u7528\u9014\u3002\u4f46\u8981\u6c42\u4f60\uff1a"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u7f72\u540d"),"\uff1a\u5728\u539f\u6709\u4ee3\u7801\u548c\u884d\u751f\u4ee3\u7801\u4e2d\uff0c\u4fdd\u7559\u539f\u4f5c\u8005\u7f72\u540d\u53ca\u4ee3\u7801\u6765\u6e90\u4fe1\u606f\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u4fdd\u7559\u8bb8\u53ef\u8bc1"),"\uff1a\u5728\u539f\u6709\u4ee3\u7801\u548c\u884d\u751f\u4ee3\u7801\u4e2d\uff0c\u4fdd\u7559Apache 2.0\u534f\u8bae\u6587\u4ef6\u3002"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u672c\u4f5c\u54c1\u6587\u6863\u90e8\u5206\u91c7\u7528",(0,a.kt)("a",{parentName:"p",href:"http://creativecommons.org/licenses/by/4.0/"},"\u77e5\u8bc6\u5171\u4eab\u7f72\u540d 4.0 \u56fd\u9645\u8bb8\u53ef\u534f\u8bae"),"\u8fdb\u884c\u8bb8\u53ef\u3002 \u9075\u5faa\u8bb8\u53ef\u7684\u524d\u63d0\u4e0b\uff0c\u4f60\u53ef\u4ee5\u81ea\u7531\u5730\u5171\u4eab\uff0c\u5305\u62ec\u5728\u4efb\u4f55\u5a92\u4ecb\u4e0a\u4ee5\u4efb\u4f55\u5f62\u5f0f\u590d\u5236\u3001\u53d1\u884c\u672c\u4f5c\u54c1\uff0c\u4ea6\u53ef\u4ee5\u81ea\u7531\u5730\u6f14\u7ece\u3001\u4fee\u6539\u3001\u8f6c\u6362\u6216\u4ee5\u672c\u4f5c\u54c1\u4e3a\u57fa\u7840\u8fdb\u884c\u4e8c\u6b21\u521b\u4f5c\u3002\u4f46\u8981\u6c42\u4f60\uff1a"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u7f72\u540d"),"\uff1a\u5e94\u5728\u4f7f\u7528\u672c\u6587\u6863\u7684\u5168\u90e8\u6216\u90e8\u5206\u5185\u5bb9\u65f6\u5019\uff0c\u6ce8\u660e\u539f\u4f5c\u8005\u53ca\u6765\u6e90\u4fe1\u606f\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u975e\u5546\u4e1a\u6027\u4f7f\u7528"),"\uff1a\u4e0d\u5f97\u7528\u4e8e\u5546\u4e1a\u51fa\u7248\u6216\u5176\u4ed6\u4efb\u4f55\u5e26\u6709\u5546\u4e1a\u6027\u8d28\u7684\u884c\u4e3a\u3002\u5982\u9700\u5546\u4e1a\u4f7f\u7528\uff0c\u8bf7\u8054\u7cfb\u4f5c\u8005\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u76f8\u540c\u65b9\u5f0f\u5171\u4eab\u7684\u6761\u4ef6"),"\uff1a\u5728\u672c\u6587\u6863\u57fa\u7840\u4e0a\u6f14\u7ece\u3001\u4fee\u6539\u7684\u4f5c\u54c1\uff0c\u5e94\u5f53\u7ee7\u7eed\u4ee5\u77e5\u8bc6\u5171\u4eab\u7f72\u540d 4.0\u56fd\u9645\u8bb8\u53ef\u534f\u8bae\u8fdb\u884c\u8bb8\u53ef\u3002"))))))}u.isMDXComponent=!0}}]);