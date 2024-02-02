"use strict";(self.webpackChunksummary=self.webpackChunksummary||[]).push([[1437],{8591:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>a,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var i=t(1527),s=t(8672);const r={title:"\u8fd4\u56de\u4e24\u4e2a\u6b63\u5e8f\u6570\u7ec4\u4e2d\u4f4d\u6570",sidebar_label:"\u8fd4\u56de\u4e24\u4e2a\u6b63\u5e8f\u6570\u7ec4\u4e2d\u4f4d\u6570",sidebar_position:9},o=void 0,l={id:"Algorithm/LeetCode return twomedian of two positive intergers",title:"\u8fd4\u56de\u4e24\u4e2a\u6b63\u5e8f\u6570\u7ec4\u4e2d\u4f4d\u6570",description:"\u4ee3\u7801\u6765\u81ea",source:"@site/docs/03-Algorithm/LeetCode return twomedian of two positive intergers.mdx",sourceDirName:"03-Algorithm",slug:"/Algorithm/LeetCode return twomedian of two positive intergers",permalink:"/Algorithm/LeetCode return twomedian of two positive intergers",draft:!1,unlisted:!1,editUrl:"https://github.com/Halcyon666/summary/edit/main/docs/03-Algorithm/LeetCode return twomedian of two positive intergers.mdx",tags:[],version:"current",lastUpdatedAt:1706843147,formattedLastUpdatedAt:"2024\u5e742\u67082\u65e5",sidebarPosition:9,frontMatter:{title:"\u8fd4\u56de\u4e24\u4e2a\u6b63\u5e8f\u6570\u7ec4\u4e2d\u4f4d\u6570",sidebar_label:"\u8fd4\u56de\u4e24\u4e2a\u6b63\u5e8f\u6570\u7ec4\u4e2d\u4f4d\u6570",sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"\u4e24\u4e2a\u5355\u94fe\u8868\u76f8\u52a0",permalink:"/Algorithm/LeetCode two link table add"},next:{title:"\u5f52\u5e76\u6392\u5e8f",permalink:"/Algorithm/MergeSort"}},a={},d=[{value:"\u53c2\u8003\u8d44\u6599",id:"\u53c2\u8003\u8d44\u6599",level:3}];function m(n){const e={a:"a",admonition:"admonition",code:"code",h3:"h3",input:"input",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:(0,i.jsx)(e.a,{href:"https://leetcode-cn.com/problems/median-of-two-sorted-arrays/solution/xun-zhao-liang-ge-you-xu-shu-zu-de-zhong-wei-s-114/",children:"\u4ee3\u7801\u6765\u81ea"})}),"\n\u6b64\u4ee3\u7801\u4e3a\u4e8c\u5206\u67e5\u627e\uff0c\u65f6\u95f4\u590d\u6742\u5ea6\u4e3alog2(m+n)"]}),"\n",(0,i.jsxs)(e.ul,{className:"contains-task-list",children:["\n",(0,i.jsxs)(e.li,{className:"task-list-item",children:[(0,i.jsx)(e.input,{type:"checkbox",disabled:!0})," ","todo  \u6b64\u9898\u7b2ck\u5c0f\u89e3\u6cd5\u5f85\u5b8c\u6210 \u6c42\u7b2ck\u5c0f\u7684\u6570\u5373\u53ef\u6c42\u4e2a \u4e2d\u4f4d\u6570"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:'/**\n * @Author: WhaleFall541\n * @Date: 2021/6/8 20:23\n * \u7ed9\u5b9a\u4e24\u4e2a\u5927\u5c0f\u5206\u522b\u4e3a m \u548c n \u7684\u6b63\u5e8f\uff08\u4ece\u5c0f\u5230\u5927\uff09\u6570\u7ec4 nums1 \u548c nums2\u3002\u8bf7\u4f60\u627e\u51fa\u5e76\u8fd4\u56de\u8fd9\u4e24\u4e2a\u6b63\u5e8f\u6570\u7ec4\u7684 \u4e2d\u4f4d\u6570\n * @see <a href="https://leetcode-cn.com/problems/median-of-two-sorted-arrays/">https://leetcode-cn.com/problems/median-of-two-sorted-arrays/</a>\n */\npublic class FindMedianSortedArrays {\n    public static void main(String[] args) {\n        int[] a1 = {1};\n        int[] a2 = {1, 2, 2, 3};\n        double res = findMedianSortedArrays(a1, a2);\n        System.out.println("res = " + res);\n    }\n\n    public static double findMedianSortedArrays(int[] nums1, int[] nums2) {\n        if (nums1.length > nums2.length) {\n            int[] temp = nums1;\n            nums1 = nums2;\n            nums2 = temp;\n        }\n\n        int m = nums1.length;\n        int n = nums2.length;\n\n        // \u5206\u5272\u7ebf\u5de6\u8fb9\u7684\u6240\u6709\u5143\u7d20\u9700\u8981\u6ee1\u8db3\u7684\u4e2a\u6570\n        int totalLeft = (m + n + 1) / 2;\n\n        // \u5728 nums1 \u7684\u533a\u95f4 [0, m] \u91cc\u67e5\u627e\u6070\u5f53\u7684\u5206\u5272\u7ebf\uff0c\n        // \u4f7f\u5f97 nums1[i - 1] <= nums2[j] && nums2[j - 1] <= nums1[i]\n        int left = 0;\n        // NOTE: \u8fd9\u91cc\u7684m \u5982\u679c\u4f60\u5f53\u6307\u9488\u5199\u6210m-1 \u5f53\u77ed\u7684\u6570\u7ec4\u957f\u5ea6\u4e3a1\u65f6 right = m-1 = 0;\n        int right = m;\n\n\n        while (left < right) {\n            // NOTE: right - left + 1 \u6b64\u5904+1\u662f\u4e3a\u907f\u514d\u4e00\u79cd\u60c5\u51b5\n            // \u5f53left =1\uff0cright =2 \u65f6 left + (right - left) / 2=1;\n            // \u8bbeif\u6761\u4ef6\u8d70\u4e86else\u5206\u652f left\u53c8\u88ab\u8d4b\u503c\u4e3a1\u4e86 \u7136\u540e\u5c31\u6ca1\u73a9\u6ca1\u4e86\u6b21\u5faa\u73af\u4e86\n            int i = left + (right - left + 1) / 2;\n            int j = totalLeft - i;\n            if (nums1[i - 1] > nums2[j]) {\n                // \u4e0b\u4e00\u8f6e\u641c\u7d22\u7684\u533a\u95f4 [left, i - 1]\n                right = i - 1;\n            } else {\n                // \u4e0b\u4e00\u8f6e\u641c\u7d22\u7684\u533a\u95f4 [i, right]\n                left = i;\n            }\n        }\n\n        int i = left;\n        int j = totalLeft - i;\n\n        // NOTE: i \u8868\u793a \u5206\u754c\u7ebf\u6709\u53f3\u8fb9\u7684\u7b2c\u4e00\u4e2a\u5143\u7d20 \u5f53i\u4e3a0\u65f6\u8bf4\u660e\u6570\u7ec4\u5de6\u8fb9\u8d8a\u754c\u5904\u7406\u4e3a\u4e00\u4e2a\u6781\u5c0f\u7684\u503c\n        int nums1LeftMax = i == 0 ? Integer.MIN_VALUE : nums1[i - 1];\n        // NOTE: \u89d2\u6807\u4e3am\u3001n\u65f6\u6570\u7ec4\u5df2\u7ecf\u53f3\u8fb9\u8d8a\u754c \u6b64\u65f6\u5904\u7406\u4e3a\u4e00\u4e2a\u5f88\u5927\u7684\u503c\n        int nums1RightMin = i == m ? Integer.MAX_VALUE : nums1[i];\n        int nums2LeftMax = j == 0 ? Integer.MIN_VALUE : nums2[j - 1];\n        int nums2RightMin = j == n ? Integer.MAX_VALUE : nums2[j];\n\n        if (((m + n) % 2) == 1) {\n            return Math.max(nums1LeftMax, nums2LeftMax);\n        } else {\n            return (double) ((Math.max(nums1LeftMax, nums2LeftMax) + Math.min(nums1RightMin, nums2RightMin))) / 2;\n        }\n    }\n}\n'})}),"\n",(0,i.jsx)(e.h3,{id:"\u53c2\u8003\u8d44\u6599",children:"\u53c2\u8003\u8d44\u6599"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:["LEETCODE",(0,i.jsx)(e.a,{href:"https://leetcode-cn.com/problems/median-of-two-sorted-arrays/solution/xun-zhao-liang-ge-you-xu-shu-zu-de-zhong-wei-s-114/",children:"\u89c6\u9891\u5730\u5740"})]}),"\n"]}),"\n",(0,i.jsx)(e.admonition,{title:"\u534f\u8bae",type:"tip",children:(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["\u672c\u4f5c\u54c1\u4ee3\u7801\u90e8\u5206\u91c7\u7528 ",(0,i.jsx)(e.a,{href:"https://www.apache.org/licenses/LICENSE-2.0",children:"Apache 2.0\u534f\u8bae"}),"\u8fdb\u884c\u8bb8\u53ef\u3002\u9075\u5faa\u8bb8\u53ef\u7684\u524d\u63d0\u4e0b\uff0c\u4f60\u53ef\u4ee5\u81ea\u7531\u5730\u5bf9\u4ee3\u7801\u8fdb\u884c\u4fee\u6539\uff0c\u518d\u53d1\u5e03\uff0c\u53ef\u4ee5\u5c06\u4ee3\u7801\u7528\u4f5c\u5546\u4e1a\u7528\u9014\u3002\u4f46\u8981\u6c42\u4f60\uff1a"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u7f72\u540d"}),"\uff1a\u5728\u539f\u6709\u4ee3\u7801\u548c\u884d\u751f\u4ee3\u7801\u4e2d\uff0c\u4fdd\u7559\u539f\u4f5c\u8005\u7f72\u540d\u53ca\u4ee3\u7801\u6765\u6e90\u4fe1\u606f\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u4fdd\u7559\u8bb8\u53ef\u8bc1"}),"\uff1a\u5728\u539f\u6709\u4ee3\u7801\u548c\u884d\u751f\u4ee3\u7801\u4e2d\uff0c\u4fdd\u7559Apache 2.0\u534f\u8bae\u6587\u4ef6\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["\u672c\u4f5c\u54c1\u6587\u6863\u90e8\u5206\u91c7\u7528",(0,i.jsx)(e.a,{href:"http://creativecommons.org/licenses/by/4.0/",children:"\u77e5\u8bc6\u5171\u4eab\u7f72\u540d 4.0 \u56fd\u9645\u8bb8\u53ef\u534f\u8bae"}),"\u8fdb\u884c\u8bb8\u53ef\u3002 \u9075\u5faa\u8bb8\u53ef\u7684\u524d\u63d0\u4e0b\uff0c\u4f60\u53ef\u4ee5\u81ea\u7531\u5730\u5171\u4eab\uff0c\u5305\u62ec\u5728\u4efb\u4f55\u5a92\u4ecb\u4e0a\u4ee5\u4efb\u4f55\u5f62\u5f0f\u590d\u5236\u3001\u53d1\u884c\u672c\u4f5c\u54c1\uff0c\u4ea6\u53ef\u4ee5\u81ea\u7531\u5730\u6f14\u7ece\u3001\u4fee\u6539\u3001\u8f6c\u6362\u6216\u4ee5\u672c\u4f5c\u54c1\u4e3a\u57fa\u7840\u8fdb\u884c\u4e8c\u6b21\u521b\u4f5c\u3002\u4f46\u8981\u6c42\u4f60\uff1a"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u7f72\u540d"}),"\uff1a\u5e94\u5728\u4f7f\u7528\u672c\u6587\u6863\u7684\u5168\u90e8\u6216\u90e8\u5206\u5185\u5bb9\u65f6\u5019\uff0c\u6ce8\u660e\u539f\u4f5c\u8005\u53ca\u6765\u6e90\u4fe1\u606f\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u975e\u5546\u4e1a\u6027\u4f7f\u7528"}),"\uff1a\u4e0d\u5f97\u7528\u4e8e\u5546\u4e1a\u51fa\u7248\u6216\u5176\u4ed6\u4efb\u4f55\u5e26\u6709\u5546\u4e1a\u6027\u8d28\u7684\u884c\u4e3a\u3002\u5982\u9700\u5546\u4e1a\u4f7f\u7528\uff0c\u8bf7\u8054\u7cfb\u4f5c\u8005\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u76f8\u540c\u65b9\u5f0f\u5171\u4eab\u7684\u6761\u4ef6"}),"\uff1a\u5728\u672c\u6587\u6863\u57fa\u7840\u4e0a\u6f14\u7ece\u3001\u4fee\u6539\u7684\u4f5c\u54c1\uff0c\u5e94\u5f53\u7ee7\u7eed\u4ee5\u77e5\u8bc6\u5171\u4eab\u7f72\u540d 4.0\u56fd\u9645\u8bb8\u53ef\u534f\u8bae\u8fdb\u884c\u8bb8\u53ef\u3002"]}),"\n"]}),"\n"]}),"\n"]})})]})}function u(n={}){const{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(m,{...n})}):m(n)}},8672:(n,e,t)=>{t.d(e,{Z:()=>l,a:()=>o});var i=t(959);const s={},r=i.createContext(s);function o(n){const e=i.useContext(r);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:o(n.components),i.createElement(r.Provider,{value:e},n.children)}}}]);