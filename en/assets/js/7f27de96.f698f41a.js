"use strict";(self.webpackChunksummary=self.webpackChunksummary||[]).push([[8693],{5765:(n,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var i=r(1527),e=r(8672);const a={title:"\u5806\u6392\u5e8f",sidebar_label:"\u5806\u6392\u5e8f",sidebar_position:4},s=void 0,o={id:"Algorithm/HeadSort",title:"\u5806\u6392\u5e8f",description:"\u4ee3\u7801\u6765\u81ea\u8be5\u89c6\u9891",source:"@site/docs/03-Algorithm/HeadSort.mdx",sourceDirName:"03-Algorithm",slug:"/Algorithm/HeadSort",permalink:"/en/Algorithm/HeadSort",draft:!1,unlisted:!1,editUrl:"https://github.com/Halcyon666/summary/edit/main/i18n/en/docusaurus-plugin-content-docs/current/03-Algorithm/HeadSort.mdx",tags:[],version:"current",lastUpdatedAt:1706843147,formattedLastUpdatedAt:"Feb 2, 2024",sidebarPosition:4,frontMatter:{title:"\u5806\u6392\u5e8f",sidebar_label:"\u5806\u6392\u5e8f",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"\u5192\u6ce1\u6392\u5e8f",permalink:"/en/Algorithm/BubbleSort"},next:{title:"\u63d2\u5165\u6392\u5e8f",permalink:"/en/Algorithm/InsertSort"}},l={},d=[];function c(n){const t={a:"a",code:"code",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,e.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"https://www.bilibili.com/video/BV1Eb41147dK?t=1590",children:"\u4ee3\u7801\u6765\u81ea\u8be5\u89c6\u9891"}),"\n",(0,i.jsx)(t.a,{href:"https://github.com/whalefall541/learn4Algorithm.git",children:"github\u4ed3\u5e93"}),"\n",(0,i.jsx)(t.strong,{children:"\u7b97\u6cd5\u601d\u7ef4"}),"\uff1a\u5148\u521d\u59cb\u5316\u5806\uff08\u4ece\u6700\u5927\u7684\u975e\u53f6\u5b50\u8282\u70b9\u5f00\u59cb\uff0c\u5f80\u524d\u4e0d\u65ad\u8fdb\u884c\u6811\u5316\u6210\u5927\u6839\u5806\uff09\n\u518d\u628a\u5934\u7ed3\u70b9\u548c\u6700\u540e\u4e00\u4e2a\u8282\u70b9\u4e92\u6362\u4f4d\u7f6e\uff0c\u7136\u540e\u91cd\u65b0\u6811\u5316\u5934\u7ed3\u70b9\uff0c\u5982\u6b64\u5f80\u590d\uff0c\u6bcf\u6b21\u6392\u597d\u4e00\u4e2a\n\u5143\u7d20\u6700\u5dee\u7684\u60c5\u51b5\u9700\u8981\u8d70(n-1)\u8d9f\u4e92\u6362\u3002"]}),"\n",(0,i.jsx)(t.p,{children:"\u5982\u4f55\u6811\u5316\u6811\u5316i\u8282\u70b9\u6210\u5927\u6839\u5806\u5462\uff1f"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"\u6bd4\u8f83\u6811\u5316\u8282\u70b9i\u548c\u5176\u53f6\u5b50\u8282\u70b9\u7684\u5927\u5c0f\uff0c\u5982\u679c\u53d1\u73b0\u6709\u6bd4i\u8282\u70b9\u8fd8\u5927\u7684\u5219\u4e92\u6362\u4f4d\u7f6e"}),"\n",(0,i.jsx)(t.li,{children:"\u7136\u540e\u53bb\u8c03\u6574\u4e92\u6362\u540e\u7684\u4f4d\u7f6e\u7684\u8282\u70b9\u76f4\u81f3\u5230\u8fbe\u53f6\u5b50\u8282\u70b9\u4f4d\u7f6e"}),"\n",(0,i.jsx)(t.li,{children:"PS\uff1a\u4e92\u6362\u4e4b\u540e\uff0cMAX\u503c\u6240\u5728\u7684\u6839\u5806\u88ab\u7834\u574f \u9700\u8981\u8fdb\u4e00\u6b65\u8c03\u6574"}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",children:'/**\n * @Author: WhaleFall541\n * @Date: 2021/6/12 16:43\n * @see <a href="https://www.bilibili.com/video/BV1Eb41147dK?t=1590">https://www.bilibili.com/video/BV1Eb41147dK?t=1590</a>\n */\npublic class HeapSort {\n\n    public static void main(String[] args) {\n\n        int[] arr = new int[]{4, 10, 3, 5, 1, 2};\n        heapSort(arr);\n        StringBuilder sb = new StringBuilder();\n        for (int i : arr)\n            sb.append(i).append(" ");\n        System.out.println("sb = " + sb);\n    }\n\n    private static void heapSort(int[] arr) {\n        int n = arr.length;\n\n\n        // \u521d\u59cb\u5316\u5806 \u4ece\u6700\u5927\u7684\u975e\u53f6\u5b50\u8282\u70b9\u5f00\u59cb\u6811\u5316\u5230\u5934\u8282\u70b9\n        // last_node = n-1\n        // \u53c8 parent = (i-1)/2\n        for (int i = (n - 2) / 2; i >= 0; i--)\n            heapAdjust(arr, n, i);\n\n        // \u5c06\u5927\u6839\u5806\u4e2d \u6839\u8282\u70b9\u548c\u6700\u540e\u4e00\u4e2a\u8282\u70b9\u4e92\u6362\u4f4d\u7f6e\n        for (int j = n - 1; j >= 0; j--) {\n            swap(arr, j, 0);\n            // \u5bf9\u5269\u4e0b\u7684\u5806 j\u4e2a\u5143\u7d20\u8fdb\u884c\u6811\u5316\n            heapAdjust(arr, j, 0);\n        }\n    }\n\n    /**\n     * \u5bf9\u7b2ci\u4e2a\u8282\u70b9\u6240\u5728\u7684\u6811\u8fdb\u884c\u6811\u5316,\u751f\u6210\u5927\u6839\u5806\n     *\n     * @param arr \u9700\u8981\u6811\u5316\u7684\u6570\u7ec4\n     * @param n   \u6811\u5316\u65f6\u6570\u7684\u957f\u5ea6\n     * @param i   \u5f53\u524d\u6811\u5316\u7684\u4f4d\u7f6e\n     */\n    private static void heapAdjust(int[] arr, int n, int i) {\n\n        if (i >= n) return;\n        int left = i * 2 + 1;\n        int right = i * 2 + 2;\n        int max = i;\n        if (left < n && arr[left] > arr[max])\n            max = left;\n        if (right < n && arr[right] > arr[max])\n            max = right;\n        if (max != i) {\n            swap(arr, max, i);\n            // \u6811\u5316\u4ea4\u6362\u540emax\u7684\u4f4d\u7f6e,\u76f4\u5230\u53f6\u5b50\u8282\u70b9\u6216\u8005\u6ca1\u6709\u4ea4\u6362\u60c5\u51b5\u4e3a\u6b62\n            heapAdjust(arr, n, max);\n        }\n    }\n\n    private static void swap(int[] arr, int a, int b) {\n        int tmp = arr[a];\n        arr[a] = arr[b];\n        arr[b] = tmp;\n    }\n}\n\n'})})]})}function p(n={}){const{wrapper:t}={...(0,e.a)(),...n.components};return t?(0,i.jsx)(t,{...n,children:(0,i.jsx)(c,{...n})}):c(n)}},8672:(n,t,r)=>{r.d(t,{Z:()=>o,a:()=>s});var i=r(959);const e={},a=i.createContext(e);function s(n){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof n?n(t):{...t,...n}}),[t,n])}function o(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(e):n.components||e:s(n.components),i.createElement(a.Provider,{value:t},n.children)}}}]);