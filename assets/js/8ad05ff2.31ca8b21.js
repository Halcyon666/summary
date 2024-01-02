"use strict";(self.webpackChunksummary=self.webpackChunksummary||[]).push([[6601],{3064:(n,r,e)=>{e.r(r),e.d(r,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var i=e(5893),t=e(1151);const s={title:"\u63d2\u5165\u6392\u5e8f",sidebar_label:"\u63d2\u5165\u6392\u5e8f",sidebar_position:5},o=void 0,l={id:"Algorithm/InsertSort",title:"\u63d2\u5165\u6392\u5e8f",description:"\u63d2\u5165\u6392\u5e8f",source:"@site/docs/03-Algorithm/InsertSort.mdx",sourceDirName:"03-Algorithm",slug:"/Algorithm/InsertSort",permalink:"/summary/Algorithm/InsertSort",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"\u63d2\u5165\u6392\u5e8f",sidebar_label:"\u63d2\u5165\u6392\u5e8f",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"\u5806\u6392\u5e8f",permalink:"/summary/Algorithm/HeadSort"},next:{title:"KMP\u7b97\u6cd5",permalink:"/summary/Algorithm/KMP"}},a={},c=[];function d(n){const r={a:"a",admonition:"admonition",code:"code",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.strong,{children:"\u63d2\u5165\u6392\u5e8f"}),"\n\u5c06",(0,i.jsx)(r.code,{children:"i"}),"\u5143\u7d20\u63d2\u5165\u5230\u4e0b\u6807\u4e3a",(0,i.jsx)(r.code,{children:"0"}),"~",(0,i.jsx)(r.code,{children:"i-1"}),"\u7684\u4f4d\u7f6e\u4e0a\uff0c\u9010\u4e2a\u6bd4\u8f83\uff0c\u5982\u679c\u53d1\u73b0\u524d\u9762\u7684\u5143\u7d20\u6bd4",(0,i.jsx)(r.code,{children:"arr[i]"}),"\u5927\n\u5219\u5c06\u8be5\u5143\u7d20\u540e\u79fb \u5426\u5219\u5c06",(0,i.jsx)(r.code,{children:"i"}),"\u5143\u7d20\u653e\u5165\u5230\u7a7a\u4f4d\u7f6e\u4e0a"]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-java",children:'package whale.simpleAlgorithm;\n\n\n/**\n * @Author: WhaleFall541\n * @Date: 2021/4/4 16:08\n */\npublic class SimpleSort {\n\n    public static void main(String[] args) throws InterruptedException {\n\n        int[] arr = {-1111, 20, -3, -10, 100, -255};\n\n        insertSort(arr);\n        StringBuilder sb = new StringBuilder();\n        for (int i : arr)\n            sb.append(i).append(" ");\n        System.out.println("sb = " + sb);\n\n    }\n\n    // \u63d2\u5165\u6392\u5e8f\n    private static void insertSort(int[] arr) {\n        for (int i = 1; i < arr.length; i++) {\n            // \u9700\u8981\u5c06i\u63d2\u5165\u5230\u524d\u9762\u5b50\u5e8f\u5217\n            if (arr[i] < arr[i - 1]) {\n                int k = arr[i], j;\n                // i\u4e3a\u8981\u63d2\u5165\u7684\u5143\u7d20,j\u4e3ai\u5f80\u524d\u7684\u5143\u7d20\n                // \u5982\u679carr[j]\u6bd4k\u5927 \u5219\u628aarr[j]\u5143\u7d20\u5f80\u540e\u632a\n                // \u5982\u679carr[j]\u6bd4k\u5c0f\u5219\u76f4\u63a5\u63d2\u5165\u5143\u7d20\u5728\u7a7a\u4f4d\u4e0a\n                for (j = i - 1; j >= 0 && arr[j] > k; j--)\n                    arr[j + 1] = arr[j];\n                // \u5c06\u5143\u7d20\u653e\u5230\u6bd4k\u5c0f\u7684\u540e\u9762\n                arr[j + 1] = k;\n            }\n        }\n    }\n}\n\n'})}),"\n",(0,i.jsx)(r.admonition,{title:"\u534f\u8bae",type:"tip",children:(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsxs)(r.p,{children:["\u672c\u4f5c\u54c1\u4ee3\u7801\u90e8\u5206\u91c7\u7528 ",(0,i.jsx)(r.a,{href:"https://www.apache.org/licenses/LICENSE-2.0",children:"Apache 2.0\u534f\u8bae"}),"\u8fdb\u884c\u8bb8\u53ef\u3002\u9075\u5faa\u8bb8\u53ef\u7684\u524d\u63d0\u4e0b\uff0c\u4f60\u53ef\u4ee5\u81ea\u7531\u5730\u5bf9\u4ee3\u7801\u8fdb\u884c\u4fee\u6539\uff0c\u518d\u53d1\u5e03\uff0c\u53ef\u4ee5\u5c06\u4ee3\u7801\u7528\u4f5c\u5546\u4e1a\u7528\u9014\u3002\u4f46\u8981\u6c42\u4f60\uff1a"]}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.strong,{children:"\u7f72\u540d"}),"\uff1a\u5728\u539f\u6709\u4ee3\u7801\u548c\u884d\u751f\u4ee3\u7801\u4e2d\uff0c\u4fdd\u7559\u539f\u4f5c\u8005\u7f72\u540d\u53ca\u4ee3\u7801\u6765\u6e90\u4fe1\u606f\u3002"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.strong,{children:"\u4fdd\u7559\u8bb8\u53ef\u8bc1"}),"\uff1a\u5728\u539f\u6709\u4ee3\u7801\u548c\u884d\u751f\u4ee3\u7801\u4e2d\uff0c\u4fdd\u7559Apache 2.0\u534f\u8bae\u6587\u4ef6\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsxs)(r.p,{children:["\u672c\u4f5c\u54c1\u6587\u6863\u90e8\u5206\u91c7\u7528",(0,i.jsx)(r.a,{href:"http://creativecommons.org/licenses/by/4.0/",children:"\u77e5\u8bc6\u5171\u4eab\u7f72\u540d 4.0 \u56fd\u9645\u8bb8\u53ef\u534f\u8bae"}),"\u8fdb\u884c\u8bb8\u53ef\u3002 \u9075\u5faa\u8bb8\u53ef\u7684\u524d\u63d0\u4e0b\uff0c\u4f60\u53ef\u4ee5\u81ea\u7531\u5730\u5171\u4eab\uff0c\u5305\u62ec\u5728\u4efb\u4f55\u5a92\u4ecb\u4e0a\u4ee5\u4efb\u4f55\u5f62\u5f0f\u590d\u5236\u3001\u53d1\u884c\u672c\u4f5c\u54c1\uff0c\u4ea6\u53ef\u4ee5\u81ea\u7531\u5730\u6f14\u7ece\u3001\u4fee\u6539\u3001\u8f6c\u6362\u6216\u4ee5\u672c\u4f5c\u54c1\u4e3a\u57fa\u7840\u8fdb\u884c\u4e8c\u6b21\u521b\u4f5c\u3002\u4f46\u8981\u6c42\u4f60\uff1a"]}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.strong,{children:"\u7f72\u540d"}),"\uff1a\u5e94\u5728\u4f7f\u7528\u672c\u6587\u6863\u7684\u5168\u90e8\u6216\u90e8\u5206\u5185\u5bb9\u65f6\u5019\uff0c\u6ce8\u660e\u539f\u4f5c\u8005\u53ca\u6765\u6e90\u4fe1\u606f\u3002"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.strong,{children:"\u975e\u5546\u4e1a\u6027\u4f7f\u7528"}),"\uff1a\u4e0d\u5f97\u7528\u4e8e\u5546\u4e1a\u51fa\u7248\u6216\u5176\u4ed6\u4efb\u4f55\u5e26\u6709\u5546\u4e1a\u6027\u8d28\u7684\u884c\u4e3a\u3002\u5982\u9700\u5546\u4e1a\u4f7f\u7528\uff0c\u8bf7\u8054\u7cfb\u4f5c\u8005\u3002"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.strong,{children:"\u76f8\u540c\u65b9\u5f0f\u5171\u4eab\u7684\u6761\u4ef6"}),"\uff1a\u5728\u672c\u6587\u6863\u57fa\u7840\u4e0a\u6f14\u7ece\u3001\u4fee\u6539\u7684\u4f5c\u54c1\uff0c\u5e94\u5f53\u7ee7\u7eed\u4ee5\u77e5\u8bc6\u5171\u4eab\u7f72\u540d 4.0\u56fd\u9645\u8bb8\u53ef\u534f\u8bae\u8fdb\u884c\u8bb8\u53ef\u3002"]}),"\n"]}),"\n"]}),"\n"]})})]})}function h(n={}){const{wrapper:r}={...(0,t.a)(),...n.components};return r?(0,i.jsx)(r,{...n,children:(0,i.jsx)(d,{...n})}):d(n)}},1151:(n,r,e)=>{e.d(r,{Z:()=>l,a:()=>o});var i=e(7294);const t={},s=i.createContext(t);function o(n){const r=i.useContext(s);return i.useMemo((function(){return"function"==typeof n?n(r):{...r,...n}}),[r,n])}function l(n){let r;return r=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:o(n.components),i.createElement(s.Provider,{value:r},n.children)}}}]);