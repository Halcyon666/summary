"use strict";(self.webpackChunksummary=self.webpackChunksummary||[]).push([[3471],{4974:(n,i,t)=>{t.r(i),t.d(i,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var e=t(1527),r=t(8672);const s={title:"\u4e8c\u5206\u63d2\u5165",sidebar_label:"\u4e8c\u5206\u63d2\u5165",sidebar_position:2},l=void 0,o={id:"Algorithm/Binary-Insert",title:"\u4e8c\u5206\u63d2\u5165",description:"\u4ee3\u7801\u6765\u81ea\u6539\u89c6\u9891\u6539\u5199",source:"@site/docs/03-Algorithm/Binary-Insert.mdx",sourceDirName:"03-Algorithm",slug:"/Algorithm/Binary-Insert",permalink:"/en/Algorithm/Binary-Insert",draft:!1,unlisted:!1,editUrl:"https://github.com/Halcyon666/summary/edit/main/i18n/en/docusaurus-plugin-content-docs/current/03-Algorithm/Binary-Insert.mdx",tags:[],version:"current",lastUpdatedAt:1706843147,formattedLastUpdatedAt:"Feb 2, 2024",sidebarPosition:2,frontMatter:{title:"\u4e8c\u5206\u63d2\u5165",sidebar_label:"\u4e8c\u5206\u63d2\u5165",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u57fa\u6570\u6392\u5e8f",permalink:"/en/Algorithm/Base-Sort"},next:{title:"\u5192\u6ce1\u6392\u5e8f",permalink:"/en/Algorithm/BubbleSort"}},a={},d=[{value:"\u53c2\u8003\u8d44\u6599",id:"\u53c2\u8003\u8d44\u6599",level:3}];function c(n){const i={a:"a",code:"code",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...n.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(i.p,{children:(0,e.jsx)(i.a,{href:"https://www.bilibili.com/video/BV1nJ411V7bd?p=161",children:"\u4ee3\u7801\u6765\u81ea\u6539\u89c6\u9891\u6539\u5199"})}),"\n",(0,e.jsxs)(i.ul,{children:["\n",(0,e.jsx)(i.li,{children:"\u7b97\u6cd5\u601d\u7ef4\uff1a\u8be5\u7b97\u6cd5\u662f\u5728\u63d2\u5165\u6392\u5e8f\u7684\u57fa\u7840\u4e0a\u4f18\u5316\u7684"}),"\n",(0,e.jsxs)(i.li,{children:["\u63d2\u5165\u5143\u7d20\u4e0b\u6807",(0,e.jsx)(i.code,{children:"i"}),"\uff0c\u4ece",(0,e.jsx)(i.code,{children:"0 ~ i-1"}),"\u627e\u63d2\u5165\u8be5\u5143\u7d20\u7684\u4f4d\u7f6e\uff0c"]}),"\n",(0,e.jsxs)(i.li,{children:["\u73b0\u5728\u4e0d\u662f\u4e00\u4e2a\u4e2a\u7684\u6bd4\u8f83\uff0c\u800c\u662f\u8fdb\u884c\u4e8c\u5206\u67e5\u627e",(0,e.jsx)(i.code,{children:"left<=right"})]}),"\n",(0,e.jsxs)(i.li,{children:["\u4e0d\u6ee1\u8db3\u7684\u65f6\u5019\uff0c",(0,e.jsx)(i.code,{children:"right+1"}),"\u5373\u4e3a\u5f53\u524d",(0,e.jsx)(i.code,{children:"i"}),"\u5143\u7d20\u8981\u63d2\u5165\u7684\u4f4d\u7f6e"]}),"\n",(0,e.jsx)(i.li,{}),"\n",(0,e.jsxs)(i.li,{children:["\u5f53\u7136\u63d2\u5165\u4e4b\u524d \u8fd8\u662f\u8981\u79fb\u52a8\u4e00\u4e0b\u5143\u7d20\u7684\uff0c\u4ece",(0,e.jsx)(i.code,{children:"right+1 ~ i-1"})]}),"\n",(0,e.jsx)(i.li,{children:"\u4f4d\u7f6e\u6574\u4f53\u540e\u79fb"}),"\n"]}),"\n",(0,e.jsx)(i.pre,{children:(0,e.jsx)(i.code,{children:'/**\n * @Author: WhaleFall541\n * @Date: 2021/6/9 22:05\n */\npublic class BinaryInsertion {\n    public static void main(String[] args) {\n        int[] arr = {-1, 20, -3, -10, 100, -255};\n        int[] ints = binaryInsertion(arr);\n        StringBuilder sb = new StringBuilder();\n        for (int i : ints)\n            sb.append(i).append(" ");\n        System.out.println("sb = " + sb);\n    }\n\n    public static int[] binaryInsertion(int[] arr) {\n        int n = arr.length;\n        // 3 -1 2\n        for (int i = 1; i < n; i++) {\n            int x = arr[i];// \u8868\u793a\u8981\u6392\u5e8f\u7684\u6570\u503c\n            int left = 0, right = i - 1;\n            while (left <= right) {\n                int mid = (left + right) / 2;\n                if (x > arr[mid])\n                    left = mid + 1;\n                else\n                    right = mid - 1;\n            }\n            // \u5c06\u4ece right+1 \u5230 i-1\u4f4d\u7f6e\u7684\u5143\u7d20\u540e\u79fb\u4e00\u4f4d\n            for (int j = i - 1; j >= right + 1; j--)\n                arr[j + 1] = arr[j];\n\n            // \u9000\u51fa\u5faa\u73af\u662fhigh+1\u5c31\u662fx\u8981\u63d2\u5165\u7684\u4f4d\u7f6e\n            arr[right + 1] = x;\n        }\n        return arr;\n    }\n}\n'})}),"\n",(0,e.jsx)(i.h3,{id:"\u53c2\u8003\u8d44\u6599",children:"\u53c2\u8003\u8d44\u6599"}),"\n",(0,e.jsxs)(i.ol,{children:["\n",(0,e.jsx)(i.li,{children:(0,e.jsx)(i.a,{href:"https://www.bilibili.com/video/BV1Eb4y1R7zd?",children:"B\u7ad9\u738b\u5353\u8001\u5e08\u7684\u89c6\u9891"})}),"\n"]})]})}function h(n={}){const{wrapper:i}={...(0,r.a)(),...n.components};return i?(0,e.jsx)(i,{...n,children:(0,e.jsx)(c,{...n})}):c(n)}},8672:(n,i,t)=>{t.d(i,{Z:()=>o,a:()=>l});var e=t(959);const r={},s=e.createContext(r);function l(n){const i=e.useContext(s);return e.useMemo((function(){return"function"==typeof n?n(i):{...i,...n}}),[i,n])}function o(n){let i;return i=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:l(n.components),e.createElement(s.Provider,{value:i},n.children)}}}]);