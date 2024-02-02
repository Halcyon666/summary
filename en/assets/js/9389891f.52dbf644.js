"use strict";(self.webpackChunksummary=self.webpackChunksummary||[]).push([[9757],{1473:(n,r,e)=>{e.r(r),e.d(r,{assets:()=>o,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var i=e(1527),t=e(8672);const s={title:"\u5e0c\u5c14\u6392\u5e8f",sidebar_label:"\u5e0c\u5c14\u6392\u5e8f",sidebar_position:13},a=void 0,l={id:"Algorithm/ShellSort",title:"\u5e0c\u5c14\u6392\u5e8f",description:"\u4ee3\u7801\u53c2\u8003\u8be5\u89c6\u9891",source:"@site/docs/03-Algorithm/ShellSort.mdx",sourceDirName:"03-Algorithm",slug:"/Algorithm/ShellSort",permalink:"/en/Algorithm/ShellSort",draft:!1,unlisted:!1,editUrl:"https://github.com/Halcyon666/summary/edit/main/i18n/en/docusaurus-plugin-content-docs/current/03-Algorithm/ShellSort.mdx",tags:[],version:"current",lastUpdatedAt:1706843147,formattedLastUpdatedAt:"Feb 2, 2024",sidebarPosition:13,frontMatter:{title:"\u5e0c\u5c14\u6392\u5e8f",sidebar_label:"\u5e0c\u5c14\u6392\u5e8f",sidebar_position:13},sidebar:"tutorialSidebar",previous:{title:"\u9009\u62e9\u6392\u5e8f",permalink:"/en/Algorithm/SelectSort"},next:{title:"Python\u4f7f\u7528\u95ee\u9898",permalink:"/en/Python/Common Problems"}},o={},c=[];function d(n){const r={a:"a",code:"code",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.p,{children:(0,i.jsx)(r.a,{href:"https://www.bilibili.com/video/BV1BK4y1478X?from=search&seid=18253194365918849629",children:"\u4ee3\u7801\u53c2\u8003\u8be5\u89c6\u9891"})}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:"\u7b97\u6cd5\u601d\u7ef4\uff1a"}),"\n",(0,i.jsx)(r.li,{children:"\u8bf4\u660e arr.length = n; \u589e\u91cf\u5e8f\u5217\u4e3a seq; \u95f4\u9694  span = seq[p];"}),"\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsxs)(r.ol,{children:["\n",(0,i.jsxs)(r.li,{children:["\u7b2c\u4e00\u5c42for\u5faa\u73af \u9009\u53d6\u589e\u91cf\u5e8f\u5217\u4e3a ",(0,i.jsx)(r.code,{children:"2^x-1"})," \u7684\u589e\u91cf\u5e8f\u5217`\u589e\u91cf\u5e8f\u5217\u7684\u957f\u5ea6\u5373\u4e3a\u9700\u8981\u6392\u5e8f\u7684\u8d9f\u6570"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsxs)(r.ol,{start:"2",children:["\n",(0,i.jsxs)(r.li,{children:["\u7b2c\u4e8c\u5c42for\u5faa\u73af ",(0,i.jsx)(r.code,{children:"arr[i]"}),"\u4ece",(0,i.jsx)(r.code,{children:"arr[span]"}),"\u5f00\u59cb\u5230",(0,i.jsx)(r.code,{children:"arr[n-1]"}),"\u8868\u793a\u95f4\u9694\u4e3a",(0,i.jsx)(r.code,{children:"span"}),"\u65f6\u9700\u8981\u6bd4\u8f83\u7684\u6b21\u6570"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsxs)(r.ol,{start:"3",children:["\n",(0,i.jsxs)(r.li,{children:["\u7b2c\u4e09\u5c42for\u5faa\u73af ",(0,i.jsx)(r.code,{children:"arr[j]"}),"\u548c ",(0,i.jsx)(r.code,{children:"arr[j - span]"})," \u6bd4\u8f83\u5927\u5c0f ",(0,i.jsx)(r.code,{children:"if (arr[j] < arr[j - span]) arr[j] = arr[j-span];"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["\u5219\u5c06",(0,i.jsx)(r.code,{children:"arr[j-span]"}),"\u540e\u79fb\uff0c\u7136\u540e\u5c06\u5f53\u524d\u6392\u5e8f\u7684\u5143\u7d20",(0,i.jsx)(r.code,{children:"arr[i]"}),"\u653e\u5230",(0,i.jsx)(r.code,{children:"j-span"}),"\u4f4d\u7f6e"]}),"\n"]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-java",children:'package simpleAlgorithm;\n\n/**\n * @Author: WhaleFall541\n * @Date: 2021/6/12 22:59\n * \u7b97\u6cd5\u601d\u7ef4\uff1a\n * \u8bf4\u660e arr.length = n; \u589e\u91cf\u5e8f\u5217\u4e3a seq; \u95f4\u9694  span = seq[p];\n * 1. \u7b2c\u4e00\u5c42for\u5faa\u73af \u9009\u53d6\u589e\u91cf\u5e8f\u5217\u4e3a `2^x-1` \u7684\u589e\u91cf\u5e8f\u5217`\u589e\u91cf\u5e8f\u5217\u7684\u957f\u5ea6\u5373\u4e3a\u9700\u8981\u6392\u5e8f\u7684\u8d9f\u6570\n * 2. \u7b2c\u4e8c\u5c42for\u5faa\u73af `arr[i]`\u4ece`arr[span]`\u5f00\u59cb\u5230`arr[n-1]`\u8868\u793a\u95f4\u9694\u4e3a`span`\u65f6\u9700\u8981\u6bd4\u8f83\u7684\u6b21\u6570\n * 3. \u7b2c\u4e09\u5c42for\u5faa\u73af `arr[j]`\u548c `arr[j - span]` \u6bd4\u8f83\u5927\u5c0f `if (arr[j] < arr[j - span]) arr[j] = arr[j-span];`\n * \u5219\u5c06`arr[j-span]`\u540e\u79fb\uff0c\u7136\u540e\u5c06\u5f53\u524d\u6392\u5e8f\u7684\u5143\u7d20`arr[i]`\u653e\u5230`j-span`\u4f4d\u7f6e\n */\npublic class ShellSort {\n    public static void main(String[] args) {\n\n        int[] arr = new int[] {3,1,-2,6,2,-10,90};\n\n        shellSort(arr);\n\n        StringBuilder sb = new StringBuilder();\n        for (int i : arr)\n            sb.append(i).append(" ");\n        System.out.println("sb = " + sb);\n\n        for (int i = 0; i < arr.length - 1; i++) {\n            if (arr[i + 1] < arr[i])\n                throw new RuntimeException("\u7b2c" + i + "\u672a\u6392\u597d\u987a\u5e8f");\n        }\n    }\n\n    static void shellSort(int[] arr) {\n        int n = arr.length;\n        // \u4ece\u751f\u6210\u7684\u589e\u91cf\u5e8f\u5217\u4e2d\u6309\u95f4\u9694\u8fdb\u884c\u6392\u5e8f 2^x - 1\n        int seq[] = generateSequence(n);\n\n        for (int p = 0; p < seq.length; p++) {\n            int span = seq[p];\n            for (int i = span; i < n; i++) {\n                // \u6b64\u5904\u53ef\u4ee5\u770b\u4f5c\u662f\u4ecearr[n/2]\u5904\u5f00\u59cb\uff0c\u8ddf\u95f4\u9694\u524d\u7684\u6bd4\u8f83\u5927\u5c0f\n                // \u5982\u679carr[n/2]\u5c0f\u4e8e\u524d\u9762\u7684arr[n/2-span] \u5219\u79fb\u52a8\u524d\u9762\u7684\u5143\u7d20\u5230arr[n/2]\u4e0a\n                int k = arr[i], j;// \u9700\u8981\u63d2\u5165\u6392\u5e8f\u7684\u5143\u7d20\n                // j >= span \u548c j -= span \u51b3\u5b9a\u4e86 for\u5faa\u73af\u4f53arr[j-span]\u540e\u79fb\u81f3\u591a\u6267\u884c\u4e00\u6b21\n                for (j = i; j >= span && k < arr[j - span]; j -= span)\n                    arr[j] = arr[j - span];\n                arr[j] = k;\n            }\n        }\n    }\n\n    private static int[] generateSequence(int n) {\n        int len = (int) (Math.log(n) / Math.log(2));// log2n\n        int[] seq = new int[len];\n        for (int i = 0; i < len; i++) {\n            seq[i] = (int) (Math.pow(2, len - i) - 1);// 2^x-1\n        }\n        return seq;\n    }\n}\n\n'})})]})}function p(n={}){const{wrapper:r}={...(0,t.a)(),...n.components};return r?(0,i.jsx)(r,{...n,children:(0,i.jsx)(d,{...n})}):d(n)}},8672:(n,r,e)=>{e.d(r,{Z:()=>l,a:()=>a});var i=e(959);const t={},s=i.createContext(t);function a(n){const r=i.useContext(s);return i.useMemo((function(){return"function"==typeof n?n(r):{...r,...n}}),[r,n])}function l(n){let r;return r=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:a(n.components),i.createElement(s.Provider,{value:r},n.children)}}}]);