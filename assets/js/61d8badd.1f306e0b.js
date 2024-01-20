"use strict";(self.webpackChunksummary=self.webpackChunksummary||[]).push([[1900],{2742:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>a});var l=t(1527),s=t(8672);const i={title:"\u4e24\u4e2a\u5355\u94fe\u8868\u76f8\u52a0",sidebar_label:"\u4e24\u4e2a\u5355\u94fe\u8868\u76f8\u52a0",sidebar_position:8},r=void 0,o={id:"Algorithm/LeetCode two link table add",title:"\u4e24\u4e2a\u5355\u94fe\u8868\u76f8\u52a0",description:"\u9898\u76ee",source:"@site/docs/03-Algorithm/LeetCode two link table add.mdx",sourceDirName:"03-Algorithm",slug:"/Algorithm/LeetCode two link table add",permalink:"/summary/Algorithm/LeetCode two link table add",draft:!1,unlisted:!1,editUrl:"https://github.com/Halcyon666/summary/blob/main/03-Algorithm/LeetCode two link table add.mdx",tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"\u4e24\u4e2a\u5355\u94fe\u8868\u76f8\u52a0",sidebar_label:"\u4e24\u4e2a\u5355\u94fe\u8868\u76f8\u52a0",sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"\u6c424\u7684\u5e42",permalink:"/summary/Algorithm/LeetCode 4 power"},next:{title:"\u8fd4\u56de\u4e24\u4e2a\u6b63\u5e8f\u6570\u7ec4\u4e2d\u4f4d\u6570",permalink:"/summary/Algorithm/LeetCode return twomedian of two positive intergers"}},d={},a=[];function c(n){const e={a:"a",admonition:"admonition",code:"code",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.a,{href:"https://leetcode-cn.com/problems/add-two-numbers/",children:"\u9898\u76ee"}),"\n",(0,l.jsx)(e.strong,{children:"NOTE"})]}),"\n",(0,l.jsxs)(e.ol,{children:["\n",(0,l.jsx)(e.li,{children:"\u8981\u70b9\u4e0d\u8981\u5fd8\u4e86\u6700\u540e\u7684\u8fdb\u4f4d"}),"\n",(0,l.jsx)(e.li,{children:"\u4e24\u4e2a\u5355\u94fe\u8868\u53ef\u4ee5\u957f\u5ea6\u4efb\u610f"}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-java",children:'package whale.leetcode.simple;\n\n/**\n * @Author: WhaleFall541\n * @Date: 2021/5/29 20:30\n */\npublic class AddTwoSumLinkedList {\n    public static class ListNode {\n        int val;\n        ListNode next;\n\n        ListNode() {\n        }\n\n        ListNode(int val) {\n            this.val = val;\n        }\n\n        ListNode(int val, ListNode next) {\n            this.val = val;\n            this.next = next;\n        }\n    }\n\n    /*\n    [9,9,9,9,9,9,9]\n    [9,9,9,9]\n     */\n    public static void main(String[] args) {\n        ListNode l1 = new ListNode(9, new ListNode(9, new ListNode(9,\n                new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9)))))));\n        ListNode l2 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))));\n        ListNode result = addTwoNumbers(l1, l2);\n        StringBuilder sb = new StringBuilder();\n        while (result != null) {\n            sb.append(result.val);\n            result = result.next;\n        }\n        System.out.println("sb = " + sb);\n\n    }\n\n    public static ListNode addTwoNumbers(ListNode l1, ListNode l2) {\n        ListNode result;\n        ListNode head = result = new ListNode();\n        int temp = 0, value1, value2;\n\n        while (l1 != null || l2 != null) {\n            value1 = (l1 == null) ? 0 : l1.val;\n            value2 = (l2 == null) ? 0 : l2.val;\n\n            // \u5f53\u524d\u6307\u9488\u4f4d\u503c\u7684\u503c\u76f8\u52a0\n            result.val = value1 + value2 + temp;\n            temp = result.val / 10;// \u8bb0\u5f55\u8fdb\u4f4d\u7684\u503c\n            result.val = result.val % 10;// \u8bb0\u5f55\u5f53\u524d\u4f4d\u7684\u503c\n\n            // l1 l2 \u53ea\u8981\u4e0d\u4e3a\u7a7a\u5219\u540e\u79fb\u6307\u9488\n            if (l1 != null)\n                l1 = l1.next;\n            if (l2 != null)\n                l2 = l2.next;\n            // l1 l2 \u53ea\u8981\u5176\u4e00\u4e0d\u4e3a\u7a7a\u5219\u7ed3\u679c\u96c6\u9700\u8981\u540e\u5ef6\u4e00\u4f4d\n            if (l1 != null || l2 != null)\n                result = result.next = new ListNode();\n        }\n\n        // \u5904\u7406\u6700\u540e\u4e00\u4f4d\u8fdb\u4f4d\u7684\u60c5\u51b5\n        if (temp != 0)\n            result.next = new ListNode(temp);\n        return head;\n    }\n}\n'})}),"\n",(0,l.jsx)(e.admonition,{title:"\u534f\u8bae",type:"tip",children:(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["\u672c\u4f5c\u54c1\u4ee3\u7801\u90e8\u5206\u91c7\u7528 ",(0,l.jsx)(e.a,{href:"https://www.apache.org/licenses/LICENSE-2.0",children:"Apache 2.0\u534f\u8bae"}),"\u8fdb\u884c\u8bb8\u53ef\u3002\u9075\u5faa\u8bb8\u53ef\u7684\u524d\u63d0\u4e0b\uff0c\u4f60\u53ef\u4ee5\u81ea\u7531\u5730\u5bf9\u4ee3\u7801\u8fdb\u884c\u4fee\u6539\uff0c\u518d\u53d1\u5e03\uff0c\u53ef\u4ee5\u5c06\u4ee3\u7801\u7528\u4f5c\u5546\u4e1a\u7528\u9014\u3002\u4f46\u8981\u6c42\u4f60\uff1a"]}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"\u7f72\u540d"}),"\uff1a\u5728\u539f\u6709\u4ee3\u7801\u548c\u884d\u751f\u4ee3\u7801\u4e2d\uff0c\u4fdd\u7559\u539f\u4f5c\u8005\u7f72\u540d\u53ca\u4ee3\u7801\u6765\u6e90\u4fe1\u606f\u3002"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"\u4fdd\u7559\u8bb8\u53ef\u8bc1"}),"\uff1a\u5728\u539f\u6709\u4ee3\u7801\u548c\u884d\u751f\u4ee3\u7801\u4e2d\uff0c\u4fdd\u7559Apache 2.0\u534f\u8bae\u6587\u4ef6\u3002"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["\u672c\u4f5c\u54c1\u6587\u6863\u90e8\u5206\u91c7\u7528",(0,l.jsx)(e.a,{href:"http://creativecommons.org/licenses/by/4.0/",children:"\u77e5\u8bc6\u5171\u4eab\u7f72\u540d 4.0 \u56fd\u9645\u8bb8\u53ef\u534f\u8bae"}),"\u8fdb\u884c\u8bb8\u53ef\u3002 \u9075\u5faa\u8bb8\u53ef\u7684\u524d\u63d0\u4e0b\uff0c\u4f60\u53ef\u4ee5\u81ea\u7531\u5730\u5171\u4eab\uff0c\u5305\u62ec\u5728\u4efb\u4f55\u5a92\u4ecb\u4e0a\u4ee5\u4efb\u4f55\u5f62\u5f0f\u590d\u5236\u3001\u53d1\u884c\u672c\u4f5c\u54c1\uff0c\u4ea6\u53ef\u4ee5\u81ea\u7531\u5730\u6f14\u7ece\u3001\u4fee\u6539\u3001\u8f6c\u6362\u6216\u4ee5\u672c\u4f5c\u54c1\u4e3a\u57fa\u7840\u8fdb\u884c\u4e8c\u6b21\u521b\u4f5c\u3002\u4f46\u8981\u6c42\u4f60\uff1a"]}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"\u7f72\u540d"}),"\uff1a\u5e94\u5728\u4f7f\u7528\u672c\u6587\u6863\u7684\u5168\u90e8\u6216\u90e8\u5206\u5185\u5bb9\u65f6\u5019\uff0c\u6ce8\u660e\u539f\u4f5c\u8005\u53ca\u6765\u6e90\u4fe1\u606f\u3002"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"\u975e\u5546\u4e1a\u6027\u4f7f\u7528"}),"\uff1a\u4e0d\u5f97\u7528\u4e8e\u5546\u4e1a\u51fa\u7248\u6216\u5176\u4ed6\u4efb\u4f55\u5e26\u6709\u5546\u4e1a\u6027\u8d28\u7684\u884c\u4e3a\u3002\u5982\u9700\u5546\u4e1a\u4f7f\u7528\uff0c\u8bf7\u8054\u7cfb\u4f5c\u8005\u3002"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"\u76f8\u540c\u65b9\u5f0f\u5171\u4eab\u7684\u6761\u4ef6"}),"\uff1a\u5728\u672c\u6587\u6863\u57fa\u7840\u4e0a\u6f14\u7ece\u3001\u4fee\u6539\u7684\u4f5c\u54c1\uff0c\u5e94\u5f53\u7ee7\u7eed\u4ee5\u77e5\u8bc6\u5171\u4eab\u7f72\u540d 4.0\u56fd\u9645\u8bb8\u53ef\u534f\u8bae\u8fdb\u884c\u8bb8\u53ef\u3002"]}),"\n"]}),"\n"]}),"\n"]})})]})}function u(n={}){const{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(c,{...n})}):c(n)}},8672:(n,e,t)=>{t.d(e,{Z:()=>o,a:()=>r});var l=t(959);const s={},i=l.createContext(s);function r(n){const e=l.useContext(i);return l.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:r(n.components),l.createElement(i.Provider,{value:e},n.children)}}}]);