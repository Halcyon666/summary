"use strict";(self.webpackChunksummary=self.webpackChunksummary||[]).push([[2425],{7861:(n,i,r)=>{r.r(i),r.d(i,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>a,toc:()=>m});var e=r(1527),t=r(8672);const o={title:"\u5f52\u5e76\u6392\u5e8f",sidebar_label:"\u5f52\u5e76\u6392\u5e8f",sidebar_position:10},l=void 0,a={id:"Algorithm/MergeSort",title:"\u5f52\u5e76\u6392\u5e8f",description:"* \u89c6\u9891\u94fe\u63a5",source:"@site/docs/03-Algorithm/MergeSort.mdx",sourceDirName:"03-Algorithm",slug:"/Algorithm/MergeSort",permalink:"/summary/Algorithm/MergeSort",draft:!1,unlisted:!1,editUrl:"https://github.com/Halcyon666/summary/edit/main/docs/03-Algorithm/MergeSort.mdx",tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"\u5f52\u5e76\u6392\u5e8f",sidebar_label:"\u5f52\u5e76\u6392\u5e8f",sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"\u8fd4\u56de\u4e24\u4e2a\u6b63\u5e8f\u6570\u7ec4\u4e2d\u4f4d\u6570",permalink:"/summary/Algorithm/LeetCode return twomedian of two positive intergers"},next:{title:"\u5feb\u901f\u6392\u5e8f",permalink:"/summary/Algorithm/QuickSort"}},s={},m=[];function d(n){const i={a:"a",code:"code",li:"li",pre:"pre",ul:"ul",...(0,t.a)(),...n.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(i.ul,{children:["\n",(0,e.jsx)(i.li,{children:(0,e.jsx)(i.a,{href:"https://www.bilibili.com/video/BV1Ax411U7Xx?from=search&seid=2724712095992885035",children:"\u89c6\u9891\u94fe\u63a5"})}),"\n",(0,e.jsx)(i.li,{children:"\u7b97\u6cd5\u601d\u8def\uff1a\u5c06\u4e24\u4e2a\u5c40\u90e8\u6709\u5e8f\u7684\u6570\u7ec4\u5f52\u5e76\u4e3a\u4e00\u4e2a\u6709\u5e8f\u7684\u6570\u7ec4"}),"\n",(0,e.jsx)(i.li,{children:"\u5f52\u5e76\u8fc7\u7a0b\uff1ai,j\u4e24\u4e2a\u6307\u9488\u6307\u5411\u4e24\u4e2a\u6570\u7ec4\uff0c\u5206\u522b\u6bd4\u8f83\u8be5\u4f4d\u7f6e\u4e0a\u503c\u7684\u5927\u5c0f"}),"\n",(0,e.jsx)(i.li,{children:"\u5c0f\u7684\u5148\u653e\u5165\u539f\u6570\u7ec4\uff1b"}),"\n",(0,e.jsx)(i.li,{children:"\u5206\u6cbb\u6cd5\uff1a\u9488\u5bf9\u6574\u4f53\u90fd\u65e0\u5e8f\u7684\u6570\u7ec4\u5219\u9700\u8981\u5206\u6cbb\u6cd5\u6765\u5904\u7406\uff0c\u5c06\u6570\u7ec4\u4e0d\u65ad\u4e00\u5206\u4e3a\u4e8c"}),"\n",(0,e.jsx)(i.li,{children:"\u8fdb\u884c\u5f52\u5e76\u6392\u5e8f\uff0c\u76f4\u5230\u957f\u5ea6\u4e3a1(\u6307\u9488\u91cd\u5408\u7684\u65f6\u5019)\u6392\u5e8f\u5b8c\u6210"}),"\n"]}),"\n",(0,e.jsx)(i.pre,{children:(0,e.jsx)(i.code,{className:"language-java",children:'package simpleAlgorithm;\n\n/**\n * @Author: WhaleFall541\n * @Date: 2021/6/11 20:40\n * [\u89c6\u9891\u94fe\u63a5](https://www.bilibili.com/video/BV1Ax411U7Xx?from=search&seid=2724712095992885035)\n * \u7b97\u6cd5\u601d\u8def\uff1a\u5c06\u4e24\u4e2a\u5c40\u90e8\u6709\u5e8f\u7684\u6570\u7ec4\u5f52\u5e76\u4e3a\u4e00\u4e2a\u6709\u5e8f\u7684\u6570\u7ec4\n * \u5f52\u5e76\u8fc7\u7a0b\uff1ai,j\u4e24\u4e2a\u6307\u9488\u6307\u5411\u4e24\u4e2a\u6570\u7ec4\uff0c\u5206\u522b\u6bd4\u8f83\u8be5\u4f4d\u7f6e\u4e0a\u503c\u7684\u5927\u5c0f\n * \u5c0f\u7684\u5148\u653e\u5165\u539f\u6570\u7ec4\uff1b\n * \u5206\u6cbb\u6cd5\uff1a\u9488\u5bf9\u6574\u4f53\u90fd\u65e0\u5e8f\u7684\u6570\u7ec4\u5219\u9700\u8981\u5206\u6cbb\u6cd5\u6765\u5904\u7406\uff0c\u5c06\u6570\u7ec4\u4e0d\u65ad\u4e00\u5206\u4e3a\u4e8c\n * \u8fdb\u884c\u5f52\u5e76\u6392\u5e8f\uff0c\u76f4\u5230\u957f\u5ea6\u4e3a1(\u6307\u9488\u91cd\u5408\u7684\u65f6\u5019)\u6392\u5e8f\u5b8c\u6210\n */\npublic class MergeSort {\n\n    public static void main(String[] args) {\n        int[] arr = new int[]{10, 4, 6, 8, 2, 3, 9, 1};\n        mergeSort(arr, 0, arr.length-1);\n        StringBuilder sb = new StringBuilder();\n        for (int i : arr)\n            sb.append(i).append(" ");\n        System.out.println("sb = " + sb);\n    }\n\n    private static void mergeSort(int[] arr, int l, int r) {\n        // \u5f52\u5e76\u6392\u5e8f\u53ea\u6709\u4e00\u4e2a\u5143\u7d20\u65f6\u7ed3\u675f\u9012\u5f52\n        if (l == r)\n            return;\n        // \u89c4\u5b9amid\u4e3a\u5206\u754c\u7ebf\u53f3\u8fb9\u7684\u7b2c\u4e00\u4e2a\u5143\u7d20\n        int mid = (l + r) / 2+1;\n        mergeSort(arr, l, mid-1);\n        mergeSort(arr, mid, r);\n        merge(arr, l, mid, r);\n    }\n\n    private static void merge(int[] arr, int l, int mid, int r) {\n        int m = mid - l, n = r - mid + 1;\n\n        // \u89c4\u5b9amid\u4e3a\u5206\u754c\u7ebf\u53f3\u8fb9\u7684\u7b2c\u4e00\u4e2a\u5143\u7d20\n        int[] left = new int[m];\n        int[] right = new int[n];\n\n        for (int i = l; i < mid; i++)\n            left[i - l] = arr[i];\n        // NOTE: \u6ce8\u610f\u8fd9\u91cc\u7684r\u8868\u793a\u53f3\u8fb9\u754c i<=r \u7b49\u53f7\u6389\u4e86\u5c31\u60b2\u5267\u4e86\n        // \u9519\u8bef\u8f93\u51fa\u4e3a 0 0 0 0 0 0 0 10\n        for (int i = mid; i <= r; i++)\n            right[i - mid] = arr[i];\n\n        //do merge\n        int k = l, i = 0, j = 0;\n        while (i < n && j < m) {\n            if (left[i] > right[j])\n                // \u628a\u5c0f\u7684\u6570\u653e\u56de\u5230\u6570\u7ec4\u4e2d\u4ecek\u5f00\u59cb\u653e\n                arr[k++] = right[j++];\n            else\n                arr[k++] = left[i++];\n        }\n\n        // \u5982\u679c\u4e00\u4e2a\u6570\u7ec4\u4e3a\u7a7a\u4e86\uff0c\u653e\u5165\u53e6\u4e00\u4e2a\u6570\u7ec4\u6240\u6709\u5143\u7d20\n        while (i < n)\n            arr[k++] = left[i++];\n        while (j < m)\n            arr[k++] = right[j++];\n    }\n}\n'})})]})}function c(n={}){const{wrapper:i}={...(0,t.a)(),...n.components};return i?(0,e.jsx)(i,{...n,children:(0,e.jsx)(d,{...n})}):d(n)}},8672:(n,i,r)=>{r.d(i,{Z:()=>a,a:()=>l});var e=r(959);const t={},o=e.createContext(t);function l(n){const i=e.useContext(o);return e.useMemo((function(){return"function"==typeof n?n(i):{...i,...n}}),[i,n])}function a(n){let i;return i=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:l(n.components),e.createElement(o.Provider,{value:i},n.children)}}}]);