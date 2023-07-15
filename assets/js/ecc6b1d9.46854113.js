"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2746],{3905:(e,n,r)=>{r.d(n,{Zo:()=>c,kt:()=>d});var t=r(7294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=t.createContext({}),s=function(e){var n=t.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},c=function(e){var n=s(e.components);return t.createElement(p.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=s(r),f=a,d=m["".concat(p,".").concat(f)]||m[f]||u[f]||i;return r?t.createElement(d,l(l({ref:n},c),{},{components:r})):t.createElement(d,l({ref:n},c))}));function d(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=f;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[m]="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=r[s];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},8278:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var t=r(7462),a=(r(7294),r(3905));const i={title:"\u5e0c\u5c14\u6392\u5e8f",hidemeta:!0},l=void 0,o={unversionedId:"Algorithm/ShellSort",id:"Algorithm/ShellSort",title:"\u5e0c\u5c14\u6392\u5e8f",description:"\u4ee3\u7801\u53c2\u8003\u8be5\u89c6\u9891",source:"@site/docs/Algorithm/ShellSort.mdx",sourceDirName:"Algorithm",slug:"/Algorithm/ShellSort",permalink:"/summary/Algorithm/ShellSort",draft:!1,editUrl:"https://github.com/Halcyon666/summary/blob/main/docs/Algorithm/ShellSort.mdx",tags:[],version:"current",frontMatter:{title:"\u5e0c\u5c14\u6392\u5e8f",hidemeta:!0},sidebar:"tutorialSidebar",previous:{title:"\u9009\u62e9\u6392\u5e8f",permalink:"/summary/Algorithm/SelectSort"},next:{title:"\u4e24\u4e2a\u5355\u94fe\u8868\u76f8\u52a0",permalink:"/summary/Algorithm/leetcode\u4e24\u4e2a\u5355\u94fe\u8868\u4e24\u6570\u76f8\u52a0"}},p={},s=[],c={toc:s},m="wrapper";function u(e){let{components:n,...r}=e;return(0,a.kt)(m,(0,t.Z)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.bilibili.com/video/BV1BK4y1478X?from=search&seid=18253194365918849629"},"\u4ee3\u7801\u53c2\u8003\u8be5\u89c6\u9891")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7b97\u6cd5\u601d\u7ef4\uff1a"),(0,a.kt)("li",{parentName:"ul"},"\u8bf4\u660e arr.length = n; \u589e\u91cf\u5e8f\u5217\u4e3a seq; \u95f4\u9694  span = seq","[p]",";"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"\u7b2c\u4e00\u5c42for\u5faa\u73af \u9009\u53d6\u589e\u91cf\u5e8f\u5217\u4e3a ",(0,a.kt)("inlineCode",{parentName:"li"},"2^x-1")," \u7684\u589e\u91cf\u5e8f\u5217`\u589e\u91cf\u5e8f\u5217\u7684\u957f\u5ea6\u5373\u4e3a\u9700\u8981\u6392\u5e8f\u7684\u8d9f\u6570"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("ol",{parentName:"li",start:2},(0,a.kt)("li",{parentName:"ol"},"\u7b2c\u4e8c\u5c42for\u5faa\u73af ",(0,a.kt)("inlineCode",{parentName:"li"},"arr[i]"),"\u4ece",(0,a.kt)("inlineCode",{parentName:"li"},"arr[span]"),"\u5f00\u59cb\u5230",(0,a.kt)("inlineCode",{parentName:"li"},"arr[n-1]"),"\u8868\u793a\u95f4\u9694\u4e3a",(0,a.kt)("inlineCode",{parentName:"li"},"span"),"\u65f6\u9700\u8981\u6bd4\u8f83\u7684\u6b21\u6570"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("ol",{parentName:"li",start:3},(0,a.kt)("li",{parentName:"ol"},"\u7b2c\u4e09\u5c42for\u5faa\u73af ",(0,a.kt)("inlineCode",{parentName:"li"},"arr[j]"),"\u548c ",(0,a.kt)("inlineCode",{parentName:"li"},"arr[j - span]")," \u6bd4\u8f83\u5927\u5c0f ",(0,a.kt)("inlineCode",{parentName:"li"},"if (arr[j] < arr[j - span]) arr[j] = arr[j-span];")))),(0,a.kt)("li",{parentName:"ul"},"\u5219\u5c06",(0,a.kt)("inlineCode",{parentName:"li"},"arr[j-span]"),"\u540e\u79fb\uff0c\u7136\u540e\u5c06\u5f53\u524d\u6392\u5e8f\u7684\u5143\u7d20",(0,a.kt)("inlineCode",{parentName:"li"},"arr[i]"),"\u653e\u5230",(0,a.kt)("inlineCode",{parentName:"li"},"j-span"),"\u4f4d\u7f6e")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'package simpleAlgorithm;\n\n/**\n * @Author: WhaleFall541\n * @Date: 2021/6/12 22:59\n * \u7b97\u6cd5\u601d\u7ef4\uff1a\n * \u8bf4\u660e arr.length = n; \u589e\u91cf\u5e8f\u5217\u4e3a seq; \u95f4\u9694  span = seq[p];\n * 1. \u7b2c\u4e00\u5c42for\u5faa\u73af \u9009\u53d6\u589e\u91cf\u5e8f\u5217\u4e3a `2^x-1` \u7684\u589e\u91cf\u5e8f\u5217`\u589e\u91cf\u5e8f\u5217\u7684\u957f\u5ea6\u5373\u4e3a\u9700\u8981\u6392\u5e8f\u7684\u8d9f\u6570\n * 2. \u7b2c\u4e8c\u5c42for\u5faa\u73af `arr[i]`\u4ece`arr[span]`\u5f00\u59cb\u5230`arr[n-1]`\u8868\u793a\u95f4\u9694\u4e3a`span`\u65f6\u9700\u8981\u6bd4\u8f83\u7684\u6b21\u6570\n * 3. \u7b2c\u4e09\u5c42for\u5faa\u73af `arr[j]`\u548c `arr[j - span]` \u6bd4\u8f83\u5927\u5c0f `if (arr[j] < arr[j - span]) arr[j] = arr[j-span];`\n * \u5219\u5c06`arr[j-span]`\u540e\u79fb\uff0c\u7136\u540e\u5c06\u5f53\u524d\u6392\u5e8f\u7684\u5143\u7d20`arr[i]`\u653e\u5230`j-span`\u4f4d\u7f6e\n */\npublic class ShellSort {\n    public static void main(String[] args) {\n\n        int[] arr = new int[] {3,1,-2,6,2,-10,90};\n\n        shellSort(arr);\n\n        StringBuilder sb = new StringBuilder();\n        for (int i : arr)\n            sb.append(i).append(" ");\n        System.out.println("sb = " + sb);\n\n        for (int i = 0; i < arr.length - 1; i++) {\n            if (arr[i + 1] < arr[i])\n                throw new RuntimeException("\u7b2c" + i + "\u672a\u6392\u597d\u987a\u5e8f");\n        }\n    }\n\n    static void shellSort(int[] arr) {\n        int n = arr.length;\n        // \u4ece\u751f\u6210\u7684\u589e\u91cf\u5e8f\u5217\u4e2d\u6309\u95f4\u9694\u8fdb\u884c\u6392\u5e8f 2^x - 1\n        int seq[] = generateSequence(n);\n\n        for (int p = 0; p < seq.length; p++) {\n            int span = seq[p];\n            for (int i = span; i < n; i++) {\n                // \u6b64\u5904\u53ef\u4ee5\u770b\u4f5c\u662f\u4ecearr[n/2]\u5904\u5f00\u59cb\uff0c\u8ddf\u95f4\u9694\u524d\u7684\u6bd4\u8f83\u5927\u5c0f\n                // \u5982\u679carr[n/2]\u5c0f\u4e8e\u524d\u9762\u7684arr[n/2-span] \u5219\u79fb\u52a8\u524d\u9762\u7684\u5143\u7d20\u5230arr[n/2]\u4e0a\n                int k = arr[i], j;// \u9700\u8981\u63d2\u5165\u6392\u5e8f\u7684\u5143\u7d20\n                // j >= span \u548c j -= span \u51b3\u5b9a\u4e86 for\u5faa\u73af\u4f53arr[j-span]\u540e\u79fb\u81f3\u591a\u6267\u884c\u4e00\u6b21\n                for (j = i; j >= span && k < arr[j - span]; j -= span)\n                    arr[j] = arr[j - span];\n                arr[j] = k;\n            }\n        }\n    }\n\n    private static int[] generateSequence(int n) {\n        int len = (int) (Math.log(n) / Math.log(2));// log2n\n        int[] seq = new int[len];\n        for (int i = 0; i < len; i++) {\n            seq[i] = (int) (Math.pow(2, len - i) - 1);// 2^x-1\n        }\n        return seq;\n    }\n}\n\n')),(0,a.kt)("blockquote",null,(0,a.kt)("font",{color:"red"},"\u8f6c\u8f7d\u8bf7\u6ce8\u660e [\u539f\u6587\u5730\u5740](https://www.cnblogs.com/whalefall541/p/14880742.html)")))}u.isMDXComponent=!0}}]);