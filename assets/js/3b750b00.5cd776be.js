"use strict";(self.webpackChunksummary=self.webpackChunksummary||[]).push([[6873],{8792:(n,r,e)=>{e.r(r),e.d(r,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var t=e(5893),i=e(1151);const s={title:"\u5192\u6ce1\u6392\u5e8f",sidebar_label:"\u5192\u6ce1\u6392\u5e8f",sidebar_position:3},o=void 0,a={id:"Algorithm/BubbleSort",title:"\u5192\u6ce1\u6392\u5e8f",description:"\u7b97\u6cd5\u601d\u7ef4\uff1a\u7b2c\u4e00\u5c42for\u5faa\u73af\u63a7\u5236\u8d9f\u6570\uff0c\u7b2c\u4e8c\u5c42for\u5faa\u73af\u4ecej=0\u548cj=1\u5f00\u59cb\u6bd4\u8f83",source:"@site/docs/03-Algorithm/BubbleSort.mdx",sourceDirName:"03-Algorithm",slug:"/Algorithm/BubbleSort",permalink:"/summary/docs/Algorithm/BubbleSort",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/03-Algorithm/BubbleSort.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"\u5192\u6ce1\u6392\u5e8f",sidebar_label:"\u5192\u6ce1\u6392\u5e8f",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\u4e8c\u5206\u63d2\u5165",permalink:"/summary/docs/Algorithm/Binary-Insert"},next:{title:"\u5806\u6392\u5e8f",permalink:"/summary/docs/Algorithm/HeadSort"}},l={},c=[];function d(n){const r={a:"a",admonition:"admonition",code:"code",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"\u7b97\u6cd5\u601d\u7ef4"}),"\uff1a\u7b2c\u4e00\u5c42for\u5faa\u73af\u63a7\u5236\u8d9f\u6570\uff0c\u7b2c\u4e8c\u5c42for\u5faa\u73af\u4ecej=0\u548cj=1\u5f00\u59cb\u6bd4\u8f83\n\u5982\u679c\u53d1\u73b0\u524d\u9762\u6bd4\u540e\u9762\u5927\u5219\u4e92\u6362\u4f4d\u7f6e\n",(0,t.jsx)(r.strong,{children:"\u4f18\u5316"}),"\uff1a\u5f53\u7b2c\u4e00\u8d9f\u4e0b\u6765 \u6ca1\u6709\u5143\u7d20\u4ea4\u6362\uff0c\u8bf4\u660e\u8be5\u6570\u7ec4\u5df2\u7ecf\u6709\u5e8f\u4e86\u4e0d\u9700\u8981\u6392\u5e8f"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-java",children:'package simpleAlgorithm;\n\n/**\n * @Author: WhaleFall541\n * @Date: 2021/6/12 23:22\n * \u7b97\u6cd5\u601d\u7ef4\uff1a\u7b2c\u4e00\u5c42for\u5faa\u73af\u63a7\u5236\u8d9f\u6570\uff0c\u7b2c\u4e8c\u5c42for\u5faa\u73af\u4ecej=0\u548cj=1\u5f00\u59cb\u6bd4\u8f83\n * \u5982\u679c\u53d1\u73b0\u524d\u9762\u6bd4\u540e\u9762\u5927\u5219\u4e92\u6362\u4f4d\u7f6e\n * \u4f18\u5316\uff1a\u5f53\u7b2c\u4e00\u8d9f\u4e0b\u6765 \u6ca1\u6709\u5143\u7d20\u4ea4\u6362\uff0c\u8bf4\u660e\u8be5\u6570\u7ec4\u5df2\u7ecf\u6709\u5e8f\u4e86\u4e0d\u9700\u8981\u6392\u5e8f\n */\npublic class BubbleSort {\n    public static void main(String[] args) throws InterruptedException {\n        int[] arr = {-1111, 20, -3, -10, 100, -255};\n        bubble(arr);\n        StringBuilder sb = new StringBuilder();\n        for (int i : arr)\n            sb.append(i).append(" ");\n        System.out.println("sb = " + sb);\n\n    }\n\n    // \u5192\u6ce1\u6392\u5e8f\n    private static void bubble(int[] arr) {\n\n        for (int i = 0; i < arr.length; i++) {\n            boolean f = false;\n            for (int j = i + 1; j < arr.length; j++) {\n                if (arr[j - 1] > arr[j]) {\n                    swap(arr, j - 1, j);\n                    f = true;\n                }\n            }\n            if (!f) return;\n        }\n\n    }\n\n    private static void swap(int[] arr, int a, int b) {\n        int tmp = arr[a];\n        arr[a] = arr[b];\n        arr[b] = tmp;\n    }\n}\n'})}),"\n",(0,t.jsx)(r.admonition,{title:"\u534f\u8bae",type:"tip",children:(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsxs)(r.p,{children:["\u672c\u4f5c\u54c1\u4ee3\u7801\u90e8\u5206\u91c7\u7528 ",(0,t.jsx)(r.a,{href:"https://www.apache.org/licenses/LICENSE-2.0",children:"Apache 2.0\u534f\u8bae"}),"\u8fdb\u884c\u8bb8\u53ef\u3002\u9075\u5faa\u8bb8\u53ef\u7684\u524d\u63d0\u4e0b\uff0c\u4f60\u53ef\u4ee5\u81ea\u7531\u5730\u5bf9\u4ee3\u7801\u8fdb\u884c\u4fee\u6539\uff0c\u518d\u53d1\u5e03\uff0c\u53ef\u4ee5\u5c06\u4ee3\u7801\u7528\u4f5c\u5546\u4e1a\u7528\u9014\u3002\u4f46\u8981\u6c42\u4f60\uff1a"]}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.strong,{children:"\u7f72\u540d"}),"\uff1a\u5728\u539f\u6709\u4ee3\u7801\u548c\u884d\u751f\u4ee3\u7801\u4e2d\uff0c\u4fdd\u7559\u539f\u4f5c\u8005\u7f72\u540d\u53ca\u4ee3\u7801\u6765\u6e90\u4fe1\u606f\u3002"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.strong,{children:"\u4fdd\u7559\u8bb8\u53ef\u8bc1"}),"\uff1a\u5728\u539f\u6709\u4ee3\u7801\u548c\u884d\u751f\u4ee3\u7801\u4e2d\uff0c\u4fdd\u7559Apache 2.0\u534f\u8bae\u6587\u4ef6\u3002"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsxs)(r.p,{children:["\u672c\u4f5c\u54c1\u6587\u6863\u90e8\u5206\u91c7\u7528",(0,t.jsx)(r.a,{href:"http://creativecommons.org/licenses/by/4.0/",children:"\u77e5\u8bc6\u5171\u4eab\u7f72\u540d 4.0 \u56fd\u9645\u8bb8\u53ef\u534f\u8bae"}),"\u8fdb\u884c\u8bb8\u53ef\u3002 \u9075\u5faa\u8bb8\u53ef\u7684\u524d\u63d0\u4e0b\uff0c\u4f60\u53ef\u4ee5\u81ea\u7531\u5730\u5171\u4eab\uff0c\u5305\u62ec\u5728\u4efb\u4f55\u5a92\u4ecb\u4e0a\u4ee5\u4efb\u4f55\u5f62\u5f0f\u590d\u5236\u3001\u53d1\u884c\u672c\u4f5c\u54c1\uff0c\u4ea6\u53ef\u4ee5\u81ea\u7531\u5730\u6f14\u7ece\u3001\u4fee\u6539\u3001\u8f6c\u6362\u6216\u4ee5\u672c\u4f5c\u54c1\u4e3a\u57fa\u7840\u8fdb\u884c\u4e8c\u6b21\u521b\u4f5c\u3002\u4f46\u8981\u6c42\u4f60\uff1a"]}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.strong,{children:"\u7f72\u540d"}),"\uff1a\u5e94\u5728\u4f7f\u7528\u672c\u6587\u6863\u7684\u5168\u90e8\u6216\u90e8\u5206\u5185\u5bb9\u65f6\u5019\uff0c\u6ce8\u660e\u539f\u4f5c\u8005\u53ca\u6765\u6e90\u4fe1\u606f\u3002"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.strong,{children:"\u975e\u5546\u4e1a\u6027\u4f7f\u7528"}),"\uff1a\u4e0d\u5f97\u7528\u4e8e\u5546\u4e1a\u51fa\u7248\u6216\u5176\u4ed6\u4efb\u4f55\u5e26\u6709\u5546\u4e1a\u6027\u8d28\u7684\u884c\u4e3a\u3002\u5982\u9700\u5546\u4e1a\u4f7f\u7528\uff0c\u8bf7\u8054\u7cfb\u4f5c\u8005\u3002"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.strong,{children:"\u76f8\u540c\u65b9\u5f0f\u5171\u4eab\u7684\u6761\u4ef6"}),"\uff1a\u5728\u672c\u6587\u6863\u57fa\u7840\u4e0a\u6f14\u7ece\u3001\u4fee\u6539\u7684\u4f5c\u54c1\uff0c\u5e94\u5f53\u7ee7\u7eed\u4ee5\u77e5\u8bc6\u5171\u4eab\u7f72\u540d 4.0\u56fd\u9645\u8bb8\u53ef\u534f\u8bae\u8fdb\u884c\u8bb8\u53ef\u3002"]}),"\n"]}),"\n"]}),"\n"]})})]})}function u(n={}){const{wrapper:r}={...(0,i.a)(),...n.components};return r?(0,t.jsx)(r,{...n,children:(0,t.jsx)(d,{...n})}):d(n)}},1151:(n,r,e)=>{e.d(r,{Z:()=>a,a:()=>o});var t=e(7294);const i={},s=t.createContext(i);function o(n){const r=t.useContext(s);return t.useMemo((function(){return"function"==typeof n?n(r):{...r,...n}}),[r,n])}function a(n){let r;return r=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:o(n.components),t.createElement(s.Provider,{value:r},n.children)}}}]);