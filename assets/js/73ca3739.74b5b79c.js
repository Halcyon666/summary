"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2581],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=u(n),m=l,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,i=new Array(o);i[0]=m;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[d]="string"==typeof e?e:l,i[1]=a;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7481:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>u});var r=n(7462),l=(n(7294),n(3905));const o={title:"\u4e24\u4e2a\u5355\u94fe\u8868\u76f8\u52a0",hidemeta:!0},i=void 0,a={unversionedId:"Algorithm/leetcode\u4e24\u4e2a\u5355\u94fe\u8868\u4e24\u6570\u76f8\u52a0",id:"Algorithm/leetcode\u4e24\u4e2a\u5355\u94fe\u8868\u4e24\u6570\u76f8\u52a0",title:"\u4e24\u4e2a\u5355\u94fe\u8868\u76f8\u52a0",description:"\u9898\u76ee",source:"@site/docs/Algorithm/leetcode\u4e24\u4e2a\u5355\u94fe\u8868\u4e24\u6570\u76f8\u52a0.md",sourceDirName:"Algorithm",slug:"/Algorithm/leetcode\u4e24\u4e2a\u5355\u94fe\u8868\u4e24\u6570\u76f8\u52a0",permalink:"/summary/docs/Algorithm/leetcode\u4e24\u4e2a\u5355\u94fe\u8868\u4e24\u6570\u76f8\u52a0",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Algorithm/leetcode\u4e24\u4e2a\u5355\u94fe\u8868\u4e24\u6570\u76f8\u52a0.md",tags:[],version:"current",frontMatter:{title:"\u4e24\u4e2a\u5355\u94fe\u8868\u76f8\u52a0",hidemeta:!0},sidebar:"tutorialSidebar",previous:{title:"\u5e0c\u5c14\u6392\u5e8f",permalink:"/summary/docs/Algorithm/ShellSort"},next:{title:"cnblogs-theme-silence",permalink:"/summary/docs/CnblogsThemeConfiguration/cnblogs-theme-silence\u4e3b\u9898\u8bbe\u7f6e\u7b80\u7ea6\u98ce\u683c"}},s={},u=[],c={toc:u},d="wrapper";function p(e){let{components:t,...n}=e;return(0,l.kt)(d,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://leetcode-cn.com/problems/add-two-numbers/"},"\u9898\u76ee"),"\n",(0,l.kt)("strong",{parentName:"p"},"NOTE")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u8981\u70b9\u4e0d\u8981\u5fd8\u4e86\u6700\u540e\u7684\u8fdb\u4f4d"),(0,l.kt)("li",{parentName:"ol"},"\u4e24\u4e2a\u5355\u94fe\u8868\u53ef\u4ee5\u957f\u5ea6\u4efb\u610f")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'package whale.leetcode.simple;\n\n/**\n * @Author: WhaleFall541\n * @Date: 2021/5/29 20:30\n */\npublic class AddTwoSumLinkedList {\n    public static class ListNode {\n        int val;\n        ListNode next;\n\n        ListNode() {\n        }\n\n        ListNode(int val) {\n            this.val = val;\n        }\n\n        ListNode(int val, ListNode next) {\n            this.val = val;\n            this.next = next;\n        }\n    }\n\n    /*\n    [9,9,9,9,9,9,9]\n    [9,9,9,9]\n     */\n    public static void main(String[] args) {\n        ListNode l1 = new ListNode(9, new ListNode(9, new ListNode(9,\n                new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9)))))));\n        ListNode l2 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))));\n        ListNode result = addTwoNumbers(l1, l2);\n        StringBuilder sb = new StringBuilder();\n        while (result != null) {\n            sb.append(result.val);\n            result = result.next;\n        }\n        System.out.println("sb = " + sb);\n\n    }\n\n    public static ListNode addTwoNumbers(ListNode l1, ListNode l2) {\n        ListNode result;\n        ListNode head = result = new ListNode();\n        int temp = 0, value1, value2;\n\n        while (l1 != null || l2 != null) {\n            value1 = (l1 == null) ? 0 : l1.val;\n            value2 = (l2 == null) ? 0 : l2.val;\n\n            // \u5f53\u524d\u6307\u9488\u4f4d\u503c\u7684\u503c\u76f8\u52a0\n            result.val = value1 + value2 + temp;\n            temp = result.val / 10;// \u8bb0\u5f55\u8fdb\u4f4d\u7684\u503c\n            result.val = result.val % 10;// \u8bb0\u5f55\u5f53\u524d\u4f4d\u7684\u503c\n\n            // l1 l2 \u53ea\u8981\u4e0d\u4e3a\u7a7a\u5219\u540e\u79fb\u6307\u9488\n            if (l1 != null)\n                l1 = l1.next;\n            if (l2 != null)\n                l2 = l2.next;\n            // l1 l2 \u53ea\u8981\u5176\u4e00\u4e0d\u4e3a\u7a7a\u5219\u7ed3\u679c\u96c6\u9700\u8981\u540e\u5ef6\u4e00\u4f4d\n            if (l1 != null || l2 != null)\n                result = result.next = new ListNode();\n        }\n\n        // \u5904\u7406\u6700\u540e\u4e00\u4f4d\u8fdb\u4f4d\u7684\u60c5\u51b5\n        if (temp != 0)\n            result.next = new ListNode(temp);\n        return head;\n    }\n}\n')),(0,l.kt)("blockquote",null,(0,l.kt)("font",{color:"red"},"\u8f6c\u8f7d\u8bf7\u6ce8\u660e [\u539f\u6587\u5730\u5740](https://www.cnblogs.com/whalefall541/p/14826519.html)")))}p.isMDXComponent=!0}}]);