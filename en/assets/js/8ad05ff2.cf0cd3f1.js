"use strict";(self.webpackChunksummary=self.webpackChunksummary||[]).push([[6601],{5229:(n,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var e=t(1527),i=t(73);const o={title:"\u63d2\u5165\u6392\u5e8f",sidebar_label:"\u63d2\u5165\u6392\u5e8f",sidebar_position:5},s=void 0,a={id:"Algorithm/InsertSort",title:"\u63d2\u5165\u6392\u5e8f",description:"\u63d2\u5165\u6392\u5e8f",source:"@site/docs/03-Algorithm/InsertSort.mdx",sourceDirName:"03-Algorithm",slug:"/Algorithm/InsertSort",permalink:"/en/Algorithm/InsertSort",draft:!1,unlisted:!1,editUrl:"https://github.com/Halcyon666/summary/edit/main/i18n/en/docusaurus-plugin-content-docs/current/03-Algorithm/InsertSort.mdx",tags:[],version:"current",lastUpdatedAt:1710340003,formattedLastUpdatedAt:"Mar 13, 2024",sidebarPosition:5,frontMatter:{title:"\u63d2\u5165\u6392\u5e8f",sidebar_label:"\u63d2\u5165\u6392\u5e8f",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"\u5806\u6392\u5e8f",permalink:"/en/Algorithm/HeadSort"},next:{title:"KMP\u7b97\u6cd5",permalink:"/en/Algorithm/KMP"}},c={},l=[];function d(n){const r={code:"code",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...n.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(r.p,{children:[(0,e.jsx)(r.strong,{children:"\u63d2\u5165\u6392\u5e8f"}),"\n\u5c06",(0,e.jsx)(r.code,{children:"i"}),"\u5143\u7d20\u63d2\u5165\u5230\u4e0b\u6807\u4e3a",(0,e.jsx)(r.code,{children:"0"}),"~",(0,e.jsx)(r.code,{children:"i-1"}),"\u7684\u4f4d\u7f6e\u4e0a\uff0c\u9010\u4e2a\u6bd4\u8f83\uff0c\u5982\u679c\u53d1\u73b0\u524d\u9762\u7684\u5143\u7d20\u6bd4",(0,e.jsx)(r.code,{children:"arr[i]"}),"\u5927\n\u5219\u5c06\u8be5\u5143\u7d20\u540e\u79fb \u5426\u5219\u5c06",(0,e.jsx)(r.code,{children:"i"}),"\u5143\u7d20\u653e\u5165\u5230\u7a7a\u4f4d\u7f6e\u4e0a"]}),"\n",(0,e.jsx)(r.pre,{children:(0,e.jsx)(r.code,{className:"language-java",children:'package whale.simpleAlgorithm;\n\n\n/**\n * @Author: WhaleFall541\n * @Date: 2021/4/4 16:08\n */\npublic class SimpleSort {\n\n    public static void main(String[] args) throws InterruptedException {\n\n        int[] arr = {-1111, 20, -3, -10, 100, -255};\n\n        insertSort(arr);\n        StringBuilder sb = new StringBuilder();\n        for (int i : arr)\n            sb.append(i).append(" ");\n        System.out.println("sb = " + sb);\n\n    }\n\n    // \u63d2\u5165\u6392\u5e8f\n    private static void insertSort(int[] arr) {\n        for (int i = 1; i < arr.length; i++) {\n            // \u9700\u8981\u5c06i\u63d2\u5165\u5230\u524d\u9762\u5b50\u5e8f\u5217\n            if (arr[i] < arr[i - 1]) {\n                int k = arr[i], j;\n                // i\u4e3a\u8981\u63d2\u5165\u7684\u5143\u7d20,j\u4e3ai\u5f80\u524d\u7684\u5143\u7d20\n                // \u5982\u679carr[j]\u6bd4k\u5927 \u5219\u628aarr[j]\u5143\u7d20\u5f80\u540e\u632a\n                // \u5982\u679carr[j]\u6bd4k\u5c0f\u5219\u76f4\u63a5\u63d2\u5165\u5143\u7d20\u5728\u7a7a\u4f4d\u4e0a\n                for (j = i - 1; j >= 0 && arr[j] > k; j--)\n                    arr[j + 1] = arr[j];\n                // \u5c06\u5143\u7d20\u653e\u5230\u6bd4k\u5c0f\u7684\u540e\u9762\n                arr[j + 1] = k;\n            }\n        }\n    }\n}\n\n'})})]})}function u(n={}){const{wrapper:r}={...(0,i.a)(),...n.components};return r?(0,e.jsx)(r,{...n,children:(0,e.jsx)(d,{...n})}):d(n)}},73:(n,r,t)=>{t.d(r,{Z:()=>a,a:()=>s});var e=t(959);const i={},o=e.createContext(i);function s(n){const r=e.useContext(o);return e.useMemo((function(){return"function"==typeof n?n(r):{...r,...n}}),[r,n])}function a(n){let r;return r=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:s(n.components),e.createElement(o.Provider,{value:r},n.children)}}}]);