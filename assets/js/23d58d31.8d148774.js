"use strict";(self.webpackChunksummary=self.webpackChunksummary||[]).push([[518],{3626:(n,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var e=r(1527),i=r(8672);const o={title:"\u9009\u62e9\u6392\u5e8f",sidebar_label:"\u9009\u62e9\u6392\u5e8f",sidebar_position:12},a=void 0,s={id:"Algorithm/SelectSort",title:"\u9009\u62e9\u6392\u5e8f",description:"* \u7b97\u6cd5\u601d\u7ef4\uff1a\u4ece0\u5230n-1\u6bcf\u6b21\u53d6\u4e00\u4e2a\u4e3ai\uff0c \u548ci\u540e\u9762\u7684\u5143\u7d20\u8fdb\u884c\u6bd4\u8f83",source:"@site/docs/03-Algorithm/SelectSort.mdx",sourceDirName:"03-Algorithm",slug:"/Algorithm/SelectSort",permalink:"/Algorithm/SelectSort",draft:!1,unlisted:!1,editUrl:"https://github.com/Halcyon666/summary/edit/main/docs/03-Algorithm/SelectSort.mdx",tags:[],version:"current",sidebarPosition:12,frontMatter:{title:"\u9009\u62e9\u6392\u5e8f",sidebar_label:"\u9009\u62e9\u6392\u5e8f",sidebar_position:12},sidebar:"tutorialSidebar",previous:{title:"\u5feb\u901f\u6392\u5e8f",permalink:"/Algorithm/QuickSort"},next:{title:"\u5e0c\u5c14\u6392\u5e8f",permalink:"/Algorithm/ShellSort"}},l={},c=[];function d(n){const t={code:"code",li:"li",pre:"pre",ul:"ul",...(0,i.a)(),...n.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(t.ul,{children:["\n",(0,e.jsxs)(t.li,{children:["\u7b97\u6cd5\u601d\u7ef4\uff1a\u4ece",(0,e.jsx)(t.code,{children:"0"}),"\u5230",(0,e.jsx)(t.code,{children:"n-1"}),"\u6bcf\u6b21\u53d6\u4e00\u4e2a\u4e3a",(0,e.jsx)(t.code,{children:"i"}),"\uff0c \u548ci\u540e\u9762\u7684\u5143\u7d20\u8fdb\u884c\u6bd4\u8f83"]}),"\n",(0,e.jsxs)(t.li,{children:["\u4ee4",(0,e.jsx)(t.code,{children:"int k = i;"}),"\u5982\u679c\u53d1\u73b0\u6bd4",(0,e.jsx)(t.code,{children:"i"}),"\u4f4d\u7f6e\u4e0a\u7684\u8fd8\u5c0f\uff0c\u5219\u5c06\u8be5\u4f4d\u7f6e\u7684\u89d2\u6807\u8d4b\u503c\u7ed9k\u3002"]}),"\n",(0,e.jsx)(t.li,{children:"\u6700\u540e\u4ea4\u6362i \u548c k\u7684\u4f4d\u7f6e\uff1b\u6bcf\u4e00\u8d9f\u90fd\u80fd\u6392\u597d\u4e00\u4e2a\u6700\u5c0f\u7684\u503c\u3002"}),"\n"]}),"\n",(0,e.jsx)(t.pre,{children:(0,e.jsx)(t.code,{className:"language-java",children:'package simpleAlgorithm;\n\n\n/**\n * @Author: WhaleFall541\n * @Date: 2021/4/4 16:08\n * \u7b97\u6cd5\u601d\u7ef4\uff1a\u4ece`0`\u5230`n-1`\u6bcf\u6b21\u53d6\u4e00\u4e2a\u4e3a`i`\uff0c \u548ci\u540e\u9762\u7684\u5143\u7d20\u8fdb\u884c\u6bd4\u8f83\n * \u4ee4`int k = i;`\u5982\u679c\u53d1\u73b0\u6bd4`i`\u4f4d\u7f6e\u4e0a\u7684\u8fd8\u5c0f\uff0c\u5219\u5c06\u8be5\u4f4d\u7f6e\u7684\u89d2\u6807\u8d4b\u503c\u7ed9k\u3002\n * \u6700\u540e\u4ea4\u6362i \u548c k\u7684\u4f4d\u7f6e\uff1b\u6bcf\u4e00\u8d9f\u90fd\u80fd\u6392\u597d\u4e00\u4e2a\u6700\u5c0f\u7684\u503c\u3002\n */\npublic class SelectSort {\n\n    public static void main(String[] args) {\n        int[] arr = {-1111, 20, -3, -10, 100, -255};\n        selectSort(arr);\n\n        StringBuilder sb = new StringBuilder();\n        for (int i : arr)\n            sb.append(i).append(" ");\n        System.out.println("sb = " + sb);\n\n    }\n\n    //\u9009\u62e9\u6392\u5e8f\n    private static void selectSort(int[] arr) {\n        for (int i = 0; i < arr.length; i++) {\n            int k = i;// i\u662f\u8981\u6392\u5e8f\u7684\u6570\u4e0b\u6807\n            // \u8ddfi\u4e0b\u6807\u540e\u9762\u7684\u6bcf\u4e2a\u5143\u7d20\u6bd4\u8f83\u8bb0\u5f55\u4e0b\u6765arr[k]\u6700\u5c0f\u7684k\u503c\n            for (int j = i + 1; j < arr.length; j++) {\n                if (arr[k] > arr[j])\n                    k = j;\n            }\n\n            // \u6700\u5c0f\u7684arr[k] \u548c \u5f53\u524d\u6392\u5e8f\u4f4d\u7f6earr[i]\u4e92\u6362\n            swap(arr, i, k);\n        }\n    }\n\n\n    private static void swap(int[] arr, int a, int b) {\n        int tmp = arr[a];\n        arr[a] = arr[b];\n        arr[b] = tmp;\n    }\n\n}\n'})})]})}function u(n={}){const{wrapper:t}={...(0,i.a)(),...n.components};return t?(0,e.jsx)(t,{...n,children:(0,e.jsx)(d,{...n})}):d(n)}},8672:(n,t,r)=>{r.d(t,{Z:()=>s,a:()=>a});var e=r(959);const i={},o=e.createContext(i);function a(n){const t=e.useContext(o);return e.useMemo((function(){return"function"==typeof n?n(t):{...t,...n}}),[t,n])}function s(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:a(n.components),e.createElement(o.Provider,{value:t},n.children)}}}]);