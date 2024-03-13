"use strict";(self.webpackChunksummary=self.webpackChunksummary||[]).push([[8138],{9360:(n,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var e=r(1527),i=r(73);const o={title:"\u57fa\u6570\u6392\u5e8f",sidebar_label:"\u57fa\u6570\u6392\u5e8f",sidebar_position:1},a=void 0,s={id:"Algorithm/Base-Sort",title:"\u57fa\u6570\u6392\u5e8f",description:"\u53c2\u8003\u89c6\u9891",source:"@site/docs/03-Algorithm/Base-Sort.mdx",sourceDirName:"03-Algorithm",slug:"/Algorithm/Base-Sort",permalink:"/Algorithm/Base-Sort",draft:!1,unlisted:!1,editUrl:"https://github.com/Halcyon666/summary/edit/main/docs/03-Algorithm/Base-Sort.mdx",tags:[],version:"current",lastUpdatedAt:1710340003,formattedLastUpdatedAt:"2024\u5e743\u670813\u65e5",sidebarPosition:1,frontMatter:{title:"\u57fa\u6570\u6392\u5e8f",sidebar_label:"\u57fa\u6570\u6392\u5e8f",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Docusaurus DocSearch TroubleShooting",permalink:"/Frontend/doc-search-docusaurus"},next:{title:"\u4e8c\u5206\u63d2\u5165",permalink:"/Algorithm/Binary-Insert"}},c={},l=[];function u(n){const t={a:"a",blockquote:"blockquote",code:"code",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...n.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(t.p,{children:[(0,e.jsx)(t.a,{href:"https://www.bilibili.com/video/BV184411L79P?t=650",children:"\u53c2\u8003\u89c6\u9891"}),"\n",(0,e.jsx)(t.a,{href:"https://github.com/whalefall541/learn4Algorithm",children:"github\u4ed3\u5e93\u5730\u5740"})]}),"\n",(0,e.jsxs)(t.p,{children:[(0,e.jsx)(t.strong,{children:"\u7b97\u6cd5\u601d\u7ef4"}),":"]}),"\n",(0,e.jsxs)(t.blockquote,{children:["\n",(0,e.jsx)(t.p,{children:"\u57fa\u6570\u6392\u5e8f\u7684\u8d9f\u6570\u5c31\u662f\u6700\u5927\u6570\u7684\u957f\u5ea6"}),"\n"]}),"\n",(0,e.jsxs)(t.blockquote,{children:["\n",(0,e.jsx)(t.p,{children:"\u901a\u8fc710\u4e2a\u6876\u6765\u6536\u96c6\u6570\u503c\uff0c\u5148\u5bf9\u4e2a\u4f4d\u7684\u6570\u503c\u5bf9\u5e94\u5230count\u6570\u7ec4\u8fdb\u884c\u8ba1\u6570\uff0c\u7136\u540e\u5c06\u8ba1\u6570\u6570\u7ec4\u7d2f\u52a0"}),"\n"]}),"\n",(0,e.jsxs)(t.blockquote,{children:["\n",(0,e.jsx)(t.p,{children:"\u901a\u8fc7\u7d2f\u52a0\u540e\u7684\u6570\u7ec4\u53ef\u4ee5\u786e\u5b9a\u54ea\u51e0\u4e2a\u5143\u7d20\u5728\u54ea\u4e2a\u4f4d\u7f6e\n\u5982\u4e0b\uff1acount[5] = 7,\u524d\u9762\u67096\u4e2a\u5143\u7d20\uff0c\u5e76\u4e14 5,6\u53f7\u4e0b\u6807\u5747\u4e3a\u4e2a\u4f4d\u542b\u67095\u7684\u6570\ncount [2, 3, 4, 4, 5, 7, 7, 7, 7, 7]\nresult [240, 430, 421, 532, 124, 115, 305]\nNOTE: \u8ba1\u6570\u7d2f\u52a0\u6570\u7ec4 \u548c \u5012\u5e8f\u56de\u586b\u5143\u7d20\u4fdd\u8bc1\u4e86\u7b97\u6cd5\u7684\u7a33\u5b9a\u6027"}),"\n"]}),"\n",(0,e.jsx)(t.pre,{children:(0,e.jsx)(t.code,{className:"language-java",children:"package simpleAlgorithm;\n\nimport java.util.Arrays;\n\n/**\n * @Author: WhaleFall541\n * @Date: 2021/6/12 22:59\n * [\u89c6\u9891](https://www.bilibili.com/video/BV184411L79P?t=650)\n * \u7b97\u6cd5\u601d\u7ef4:\n * \u57fa\u6570\u6392\u5e8f\u7684\u8d9f\u6570\u5c31\u662f\u6700\u5927\u6570\u7684\u957f\u5ea6\n * \u901a\u8fc710\u4e2a\u6876\u6765\u6536\u96c6\u6570\u503c\uff0c\u5148\u5bf9\u4e2a\u4f4d\u7684\u6570\u503c\u5bf9\u5e94\u5230count\u6570\u7ec4\u8fdb\u884c\u8ba1\u6570\uff0c\u7136\u540e\u5c06\u8ba1\u6570\u6570\u7ec4\u7d2f\u52a0\n * \u901a\u8fc7\u7d2f\u52a0\u540e\u7684\u6570\u7ec4\u53ef\u4ee5\u786e\u5b9a\u54ea\u51e0\u4e2a\u5143\u7d20\u5728\u54ea\u4e2a\u4f4d\u7f6e\n * \u5982\u4e0b\uff1acount[5] = 7,\u524d\u9762\u67096\u4e2a\u5143\u7d20\uff0c\u5e76\u4e14 5,6\u53f7\u4e0b\u6807\u5747\u4e3a\u4e2a\u4f4d\u542b\u67095\u7684\u6570\n\n * NOTE: \u8ba1\u6570\u7d2f\u52a0\u6570\u7ec4 \u548c \u5012\u5e8f\u56de\u586b\u5143\u7d20\u4fdd\u8bc1\u4e86\u7b97\u6cd5\u7684\u7a33\u5b9a\u6027\n */\npublic class RadixSort {\n    public static void main(String[] args) {\n        int[] arr = new int[]{444444224, 240, 115, 532, 305, 430, 124};\n        radixSort(arr);\n        System.out.println(Arrays.toString(arr));\n    }\n\n    static void radixSort(int[] arr) {\n\n        int n = arr.length;\n        if (n == 0) return;\n\n        // 1. \u6c42\u51fa\u6700\u5927\u6570\n        int max = arr[0];\n        for (int i = 0; i < n; i++)\n            if (arr[i] > max)\n                max = arr[i];\n\n        // \u8ba1\u7b97\u51fa\u6700\u5927\u6570\u7684\u4f4d\u6570\n        int bit = String.valueOf(max).length();\n        for (int i = 0; i < bit; i++) {\n            int base = (int) Math.pow(10, i);\n\n            int[] count = new int[10];\n            int[] result = new int[arr.length];\n\n            // \u6839\u636e\u4f4d\u65700-9\u5206\u522b\u5bf9count\u6570\u7ec4\u4e2d\u5bf9\u5e94\u4f4d\u7f6e\u7d2f\u52a0\n            for (int j = 0; j < n; j++) {\n                // \u4f4d\u6570\u4e0a\u7684\u503c\n                int number = arr[j] / base % 10;\n                count[number]++;\n            }\n\n            // \u7d2f\u52a0\u8ba1\u6570\n            for (int j = 1; j < count.length; j++) {\n                count[j] = count[j - 1] + count[j];\n            }\n\n            for (int j = n - 1; j >= 0; j--) {\n                int number = arr[j] / base % 10;\n                // \u6309\u7167\u7d2f\u52a0\u6570\u7ec4 \u653e\u56de\u5143\u7d20\u5230result\u4e2d\n                //  count [2, 3, 4, 4, 5, 7, 7, 7, 7, 7]\n                //  result [240, 430, 421, 532, 124, 115, 305]\n                // --count[number] \u8868\u793a\u5bf9\u5e94\u4f4d\u7f6e\u4e0a\u7684\u6570\u7ec4\u524d\u9762\u6709\u591a\u5c11\u4e2a\u5143\u7d20\n                // \u6bd4\u5982 count[5] = 7,\u524d\u9762\u67096\u4e2a\u5143\u7d20\uff0c\u5e76\u4e14 5,6\u53f7\u4e0b\u6807\u5747\u4e3a\u4e2a\u4f4d\u542b\u67095\u7684\u6570\n                result[--count[number]] = arr[j];\n            }\n\n            // \u5c06\u7ed3\u679c\u96c6\u653e\u56de\u5230\u539f\u6570\u7ec4\u51c6\u5907\u4e0b\u4e00\u8f6e\u6392\u5e8f\n            System.arraycopy(result, 0, arr, 0, n);\n            //\u6e05\u7a7a\u8ba1\u6570\u6570\u7ec4\n            Arrays.fill(count, 0);\n        }\n    }\n\n}\n"})})]})}function d(n={}){const{wrapper:t}={...(0,i.a)(),...n.components};return t?(0,e.jsx)(t,{...n,children:(0,e.jsx)(u,{...n})}):u(n)}},73:(n,t,r)=>{r.d(t,{Z:()=>s,a:()=>a});var e=r(959);const i={},o=e.createContext(i);function a(n){const t=e.useContext(o);return e.useMemo((function(){return"function"==typeof n?n(t):{...t,...n}}),[t,n])}function s(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:a(n.components),e.createElement(o.Provider,{value:t},n.children)}}}]);