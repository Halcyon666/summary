"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2581],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>N});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(n),d=l,N=c["".concat(s,".").concat(d)]||c[d]||m[d]||a;return n?r.createElement(N,i(i({ref:t},p),{},{components:n})):r.createElement(N,i({ref:t},p))}));function N(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:l,i[1]=o;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7481:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var r=n(7462),l=(n(7294),n(3905));const a={title:"\u4e24\u4e2a\u5355\u94fe\u8868\u76f8\u52a0",hidemeta:!0},i=void 0,o={unversionedId:"Algorithm/leetcode\u4e24\u4e2a\u5355\u94fe\u8868\u4e24\u6570\u76f8\u52a0",id:"Algorithm/leetcode\u4e24\u4e2a\u5355\u94fe\u8868\u4e24\u6570\u76f8\u52a0",title:"\u4e24\u4e2a\u5355\u94fe\u8868\u76f8\u52a0",description:"\u9898\u76ee",source:"@site/docs/Algorithm/leetcode\u4e24\u4e2a\u5355\u94fe\u8868\u4e24\u6570\u76f8\u52a0.md",sourceDirName:"Algorithm",slug:"/Algorithm/leetcode\u4e24\u4e2a\u5355\u94fe\u8868\u4e24\u6570\u76f8\u52a0",permalink:"/summary/Algorithm/leetcode\u4e24\u4e2a\u5355\u94fe\u8868\u4e24\u6570\u76f8\u52a0",draft:!1,editUrl:"https://github.com/Halcyon666/summary/blob/main/docs/Algorithm/leetcode\u4e24\u4e2a\u5355\u94fe\u8868\u4e24\u6570\u76f8\u52a0.md",tags:[],version:"current",frontMatter:{title:"\u4e24\u4e2a\u5355\u94fe\u8868\u76f8\u52a0",hidemeta:!0},sidebar:"tutorialSidebar",previous:{title:"\u5e0c\u5c14\u6392\u5e8f",permalink:"/summary/Algorithm/ShellSort"},next:{title:"cnblogs-theme-silence",permalink:"/summary/CnblogsThemeConfiguration/cnblogs-theme-silence\u4e3b\u9898\u8bbe\u7f6e\u7b80\u7ea6\u98ce\u683c"}},s={},u=[],p={toc:u},c="wrapper";function m(e){let{components:t,...n}=e;return(0,l.kt)(c,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://leetcode-cn.com/problems/add-two-numbers/"},"\u9898\u76ee"),"\n",(0,l.kt)("strong",{parentName:"p"},"NOTE")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u8981\u70b9\u4e0d\u8981\u5fd8\u4e86\u6700\u540e\u7684\u8fdb\u4f4d"),(0,l.kt)("li",{parentName:"ol"},"\u4e24\u4e2a\u5355\u94fe\u8868\u53ef\u4ee5\u957f\u5ea6\u4efb\u610f")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'package whale.leetcode.simple;\n\n/**\n * @Author: WhaleFall541\n * @Date: 2021/5/29 20:30\n */\npublic class AddTwoSumLinkedList {\n    public static class ListNode {\n        int val;\n        ListNode next;\n\n        ListNode() {\n        }\n\n        ListNode(int val) {\n            this.val = val;\n        }\n\n        ListNode(int val, ListNode next) {\n            this.val = val;\n            this.next = next;\n        }\n    }\n\n    /*\n    [9,9,9,9,9,9,9]\n    [9,9,9,9]\n     */\n    public static void main(String[] args) {\n        ListNode l1 = new ListNode(9, new ListNode(9, new ListNode(9,\n                new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9)))))));\n        ListNode l2 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))));\n        ListNode result = addTwoNumbers(l1, l2);\n        StringBuilder sb = new StringBuilder();\n        while (result != null) {\n            sb.append(result.val);\n            result = result.next;\n        }\n        System.out.println("sb = " + sb);\n\n    }\n\n    public static ListNode addTwoNumbers(ListNode l1, ListNode l2) {\n        ListNode result;\n        ListNode head = result = new ListNode();\n        int temp = 0, value1, value2;\n\n        while (l1 != null || l2 != null) {\n            value1 = (l1 == null) ? 0 : l1.val;\n            value2 = (l2 == null) ? 0 : l2.val;\n\n            // \u5f53\u524d\u6307\u9488\u4f4d\u503c\u7684\u503c\u76f8\u52a0\n            result.val = value1 + value2 + temp;\n            temp = result.val / 10;// \u8bb0\u5f55\u8fdb\u4f4d\u7684\u503c\n            result.val = result.val % 10;// \u8bb0\u5f55\u5f53\u524d\u4f4d\u7684\u503c\n\n            // l1 l2 \u53ea\u8981\u4e0d\u4e3a\u7a7a\u5219\u540e\u79fb\u6307\u9488\n            if (l1 != null)\n                l1 = l1.next;\n            if (l2 != null)\n                l2 = l2.next;\n            // l1 l2 \u53ea\u8981\u5176\u4e00\u4e0d\u4e3a\u7a7a\u5219\u7ed3\u679c\u96c6\u9700\u8981\u540e\u5ef6\u4e00\u4f4d\n            if (l1 != null || l2 != null)\n                result = result.next = new ListNode();\n        }\n\n        // \u5904\u7406\u6700\u540e\u4e00\u4f4d\u8fdb\u4f4d\u7684\u60c5\u51b5\n        if (temp != 0)\n            result.next = new ListNode(temp);\n        return head;\n    }\n}\n')),(0,l.kt)("admonition",{title:"\u534f\u8bae",type:"tip"},(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u672c\u4f5c\u54c1\u4ee3\u7801\u90e8\u5206\u91c7\u7528 ",(0,l.kt)("a",{parentName:"p",href:"https://www.apache.org/licenses/LICENSE-2.0"},"Apache 2.0\u534f\u8bae"),"\u8fdb\u884c\u8bb8\u53ef\u3002\u9075\u5faa\u8bb8\u53ef\u7684\u524d\u63d0\u4e0b\uff0c\u4f60\u53ef\u4ee5\u81ea\u7531\u5730\u5bf9\u4ee3\u7801\u8fdb\u884c\u4fee\u6539\uff0c\u518d\u53d1\u5e03\uff0c\u53ef\u4ee5\u5c06\u4ee3\u7801\u7528\u4f5c\u5546\u4e1a\u7528\u9014\u3002\u4f46\u8981\u6c42\u4f60\uff1a"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u7f72\u540d"),"\uff1a\u5728\u539f\u6709\u4ee3\u7801\u548c\u884d\u751f\u4ee3\u7801\u4e2d\uff0c\u4fdd\u7559\u539f\u4f5c\u8005\u7f72\u540d\u53ca\u4ee3\u7801\u6765\u6e90\u4fe1\u606f\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u4fdd\u7559\u8bb8\u53ef\u8bc1"),"\uff1a\u5728\u539f\u6709\u4ee3\u7801\u548c\u884d\u751f\u4ee3\u7801\u4e2d\uff0c\u4fdd\u7559Apache 2.0\u534f\u8bae\u6587\u4ef6\u3002"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u672c\u4f5c\u54c1\u6587\u6863\u90e8\u5206\u91c7\u7528",(0,l.kt)("a",{parentName:"p",href:"http://creativecommons.org/licenses/by/4.0/"},"\u77e5\u8bc6\u5171\u4eab\u7f72\u540d 4.0 \u56fd\u9645\u8bb8\u53ef\u534f\u8bae"),"\u8fdb\u884c\u8bb8\u53ef\u3002 \u9075\u5faa\u8bb8\u53ef\u7684\u524d\u63d0\u4e0b\uff0c\u4f60\u53ef\u4ee5\u81ea\u7531\u5730\u5171\u4eab\uff0c\u5305\u62ec\u5728\u4efb\u4f55\u5a92\u4ecb\u4e0a\u4ee5\u4efb\u4f55\u5f62\u5f0f\u590d\u5236\u3001\u53d1\u884c\u672c\u4f5c\u54c1\uff0c\u4ea6\u53ef\u4ee5\u81ea\u7531\u5730\u6f14\u7ece\u3001\u4fee\u6539\u3001\u8f6c\u6362\u6216\u4ee5\u672c\u4f5c\u54c1\u4e3a\u57fa\u7840\u8fdb\u884c\u4e8c\u6b21\u521b\u4f5c\u3002\u4f46\u8981\u6c42\u4f60\uff1a"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u7f72\u540d"),"\uff1a\u5e94\u5728\u4f7f\u7528\u672c\u6587\u6863\u7684\u5168\u90e8\u6216\u90e8\u5206\u5185\u5bb9\u65f6\u5019\uff0c\u6ce8\u660e\u539f\u4f5c\u8005\u53ca\u6765\u6e90\u4fe1\u606f\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u975e\u5546\u4e1a\u6027\u4f7f\u7528"),"\uff1a\u4e0d\u5f97\u7528\u4e8e\u5546\u4e1a\u51fa\u7248\u6216\u5176\u4ed6\u4efb\u4f55\u5e26\u6709\u5546\u4e1a\u6027\u8d28\u7684\u884c\u4e3a\u3002\u5982\u9700\u5546\u4e1a\u4f7f\u7528\uff0c\u8bf7\u8054\u7cfb\u4f5c\u8005\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u76f8\u540c\u65b9\u5f0f\u5171\u4eab\u7684\u6761\u4ef6"),"\uff1a\u5728\u672c\u6587\u6863\u57fa\u7840\u4e0a\u6f14\u7ece\u3001\u4fee\u6539\u7684\u4f5c\u54c1\uff0c\u5e94\u5f53\u7ee7\u7eed\u4ee5\u77e5\u8bc6\u5171\u4eab\u7f72\u540d 4.0\u56fd\u9645\u8bb8\u53ef\u534f\u8bae\u8fdb\u884c\u8bb8\u53ef\u3002"))))))}m.isMDXComponent=!0}}]);