"use strict";(self.webpackChunksummary=self.webpackChunksummary||[]).push([[6873],{686:(n,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var e=r(1527),i=r(73);const o={title:"\u5192\u6ce1\u6392\u5e8f",sidebar_label:"\u5192\u6ce1\u6392\u5e8f",sidebar_position:3},a=void 0,s={id:"Algorithm/BubbleSort",title:"\u5192\u6ce1\u6392\u5e8f",description:"\u7b97\u6cd5\u601d\u7ef4\uff1a\u7b2c\u4e00\u5c42for\u5faa\u73af\u63a7\u5236\u8d9f\u6570\uff0c\u7b2c\u4e8c\u5c42for\u5faa\u73af\u4ecej=0\u548cj=1\u5f00\u59cb\u6bd4\u8f83",source:"@site/docs/03-Algorithm/BubbleSort.mdx",sourceDirName:"03-Algorithm",slug:"/Algorithm/BubbleSort",permalink:"/Algorithm/BubbleSort",draft:!1,unlisted:!1,editUrl:"https://github.com/Halcyon666/summary/edit/main/docs/03-Algorithm/BubbleSort.mdx",tags:[],version:"current",lastUpdatedAt:1710340003,formattedLastUpdatedAt:"2024\u5e743\u670813\u65e5",sidebarPosition:3,frontMatter:{title:"\u5192\u6ce1\u6392\u5e8f",sidebar_label:"\u5192\u6ce1\u6392\u5e8f",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\u4e8c\u5206\u63d2\u5165",permalink:"/Algorithm/Binary-Insert"},next:{title:"\u5806\u6392\u5e8f",permalink:"/Algorithm/HeadSort"}},l={},c=[];function d(n){const t={code:"code",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...n.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(t.p,{children:[(0,e.jsx)(t.strong,{children:"\u7b97\u6cd5\u601d\u7ef4"}),"\uff1a\u7b2c\u4e00\u5c42for\u5faa\u73af\u63a7\u5236\u8d9f\u6570\uff0c\u7b2c\u4e8c\u5c42for\u5faa\u73af\u4ecej=0\u548cj=1\u5f00\u59cb\u6bd4\u8f83\n\u5982\u679c\u53d1\u73b0\u524d\u9762\u6bd4\u540e\u9762\u5927\u5219\u4e92\u6362\u4f4d\u7f6e\n",(0,e.jsx)(t.strong,{children:"\u4f18\u5316"}),"\uff1a\u5f53\u7b2c\u4e00\u8d9f\u4e0b\u6765 \u6ca1\u6709\u5143\u7d20\u4ea4\u6362\uff0c\u8bf4\u660e\u8be5\u6570\u7ec4\u5df2\u7ecf\u6709\u5e8f\u4e86\u4e0d\u9700\u8981\u6392\u5e8f"]}),"\n",(0,e.jsx)(t.pre,{children:(0,e.jsx)(t.code,{className:"language-java",children:'package simpleAlgorithm;\n\n/**\n * @Author: WhaleFall541\n * @Date: 2021/6/12 23:22\n * \u7b97\u6cd5\u601d\u7ef4\uff1a\u7b2c\u4e00\u5c42for\u5faa\u73af\u63a7\u5236\u8d9f\u6570\uff0c\u7b2c\u4e8c\u5c42for\u5faa\u73af\u4ecej=0\u548cj=1\u5f00\u59cb\u6bd4\u8f83\n * \u5982\u679c\u53d1\u73b0\u524d\u9762\u6bd4\u540e\u9762\u5927\u5219\u4e92\u6362\u4f4d\u7f6e\n * \u4f18\u5316\uff1a\u5f53\u7b2c\u4e00\u8d9f\u4e0b\u6765 \u6ca1\u6709\u5143\u7d20\u4ea4\u6362\uff0c\u8bf4\u660e\u8be5\u6570\u7ec4\u5df2\u7ecf\u6709\u5e8f\u4e86\u4e0d\u9700\u8981\u6392\u5e8f\n */\npublic class BubbleSort {\n    public static void main(String[] args) throws InterruptedException {\n        int[] arr = {-1111, 20, -3, -10, 100, -255};\n        bubble(arr);\n        StringBuilder sb = new StringBuilder();\n        for (int i : arr)\n            sb.append(i).append(" ");\n        System.out.println("sb = " + sb);\n\n    }\n\n    // \u5192\u6ce1\u6392\u5e8f\n    private static void bubble(int[] arr) {\n\n        for (int i = 0; i < arr.length; i++) {\n            boolean f = false;\n            for (int j = i + 1; j < arr.length; j++) {\n                if (arr[j - 1] > arr[j]) {\n                    swap(arr, j - 1, j);\n                    f = true;\n                }\n            }\n            if (!f) return;\n        }\n\n    }\n\n    private static void swap(int[] arr, int a, int b) {\n        int tmp = arr[a];\n        arr[a] = arr[b];\n        arr[b] = tmp;\n    }\n}\n'})})]})}function u(n={}){const{wrapper:t}={...(0,i.a)(),...n.components};return t?(0,e.jsx)(t,{...n,children:(0,e.jsx)(d,{...n})}):d(n)}},73:(n,t,r)=>{r.d(t,{Z:()=>s,a:()=>a});var e=r(959);const i={},o=e.createContext(i);function a(n){const t=e.useContext(o);return e.useMemo((function(){return"function"==typeof n?n(t):{...t,...n}}),[t,n])}function s(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:a(n.components),e.createElement(o.Provider,{value:t},n.children)}}}]);