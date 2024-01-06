"use strict";(self.webpackChunksummary=self.webpackChunksummary||[]).push([[5381],{8841:(n,i,t)=>{t.r(i),t.d(i,{assets:()=>a,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=t(5893),e=t(1151);const o={title:"\u5feb\u901f\u6392\u5e8f",sidebar_label:"\u5feb\u901f\u6392\u5e8f",sidebar_position:11},s=void 0,l={id:"Algorithm/QuickSort",title:"\u5feb\u901f\u6392\u5e8f",description:"\u4ee3\u7801\u6e90\u81ea\u8be5\u89c6\u9891",source:"@site/docs/03-Algorithm/QuickSort.mdx",sourceDirName:"03-Algorithm",slug:"/Algorithm/QuickSort",permalink:"/Algorithm/QuickSort",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:11,frontMatter:{title:"\u5feb\u901f\u6392\u5e8f",sidebar_label:"\u5feb\u901f\u6392\u5e8f",sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"\u5f52\u5e76\u6392\u5e8f",permalink:"/Algorithm/MergeSort"},next:{title:"\u9009\u62e9\u6392\u5e8f",permalink:"/Algorithm/SelectSort"}},a={},c=[];function h(n){const i={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,e.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.a,{href:"https://www.bilibili.com/video/BV1nJ411V7bd?p=164",children:"\u4ee3\u7801\u6e90\u81ea\u8be5\u89c6\u9891"}),"\n",(0,r.jsx)(i.strong,{children:"\u7b97\u6cd5\u601d\u60f3"}),"\uff1a\u9009\u62e9\u4e00\u4e2a\u4e2d\u5fc3\u70b9\uff0c\u5c06\u6bd4\u4e2d\u5fc3\u70b9\u5c0f\u7684\u79fb\u52a8\u5230\u5de6\u8fb9\uff0c\u53cd\u4e4b\u79fb\u52a8\u5230\u53f3\u8fb9\uff1b\n\u8fd9\u65f6\u5f62\u6210\u4e24\u4e2a\u5b50\u5e8f\u5217\uff0c\u5bf9\u5b50\u5e8f\u5217\u9012\u5f52\u76f4\u81f3\uff0c\u6bcf\u4e2a\u5e8f\u5217\u53ea\u6709\u4e00\u4e2a\u5143\u7d20\u4e3a\u6b62\uff1b"]}),"\n",(0,r.jsx)(i.p,{children:"\u4e3a\u4e86\u7701\u7a7a\u95f4 \u8bbe\u7b2c\u4e00\u4e2a\u5143\u7d20\u4e3a\u4e2d\u5fc3\u8282\u70b9\u5e76\u5b58\u50a8\u8be5\u5143\u7d20\u7684\u503c\uff0c\u4ece\u6570\u7ec4\u540e\u9762\u5f80\u524d\u627e\u4e00\u4e2a\n\u6bd4\u4e2d\u5fc3\u8282\u70b9\u5c0f\u7684\u653e\u5728\u7b2c\u4e00\u4e2a\u5143\u7d20\u7684\u4f4d\u7f6e\u4e0a\uff0c\u7136\u540e\u518d\u4ece\u524d\u9762\u5f80\u540e\u627e\u627e\u4e00\u4e2a\u5143\u7d20\uff0c\u653e\u5728\n\u540e\u9762\u7a7a\u51fa\u6765\u7684\u5143\u7d20\u7684\u4f4d\u7f6e\u4e0a\u3002"}),"\n",(0,r.jsx)(i.p,{children:"\u5f53\u5de6\u53f3\u6307\u9488\u91cd\u5408\u7684\u65f6\u5019\uff0c\u8bf4\u660e\u6b64\u65f6\u5c31\u662f\u4e2d\u5fc3\u4f4d\u7f6e\uff0c\u6545\u53ea\u9700\u5c06\u6700\u5f00\u59cb\u5b58\u50a8\u7684\u7b2c\u4e00\u4e2a\u5143\u7d20\n\u653e\u5230\u8be5\u4f4d\u7f6e\u5373\u53ef"}),"\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.strong,{children:"\u65f6\u95f4\u590d\u6742\u5ea6"})," \u6700\u597d\u7684\u60c5\u51b5\u662fO(nlogn) \u6700\u5dee\u7684\u60c5\u51b5\u662fO(n\xb2)"]}),"\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.strong,{children:"\u7279\u70b9"})," \u5982\u679c\u57fa\u672c\u6709\u5e8f \u5219\u4f1a\u53d8\u6210\u5192\u6ce1\u6392\u5e8f\uff0c\u65f6\u95f4\u590d\u6742\u5ea6\u4e3aO(n\xb2)"]}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-java",children:'package whale.simpleAlgorithm;\n\n/**\n * @Author: WhaleFall541\n * @Date: 2021/6/10 22:42\n * @see <a href="https://www.bilibili.com/video/BV1nJ411V7bd?p=164">https://www.bilibili.com/video/BV1nJ411V7bd?p=164</a>\n */\npublic class QuickSort {\n    public static void main(String[] args) {\n        int[] arr = {-1, 20, -3, -10, 100, -255};\n\n        quickSort(arr, 0, arr.length - 1);\n        StringBuilder sb = new StringBuilder();\n        for (int i : arr)\n            sb.append(i).append(" ");\n        System.out.println("sb = " + sb);\n    }\n\n    private static void quickSort(int[] arr, int low, int high) {\n        if (low < high) {// \u957f\u5ea6\u5927\u4e8e1\n            int position = moveBaseOnPivot(arr, low, high);\n            quickSort(arr, low, position - 1);\n            quickSort(arr, position + 1, high);\n        }\n    }\n\n    private static int moveBaseOnPivot(int[] arr, int low, int high) {\n        // {, 20, -3, -10, 100, -255};-1\n        int pivot = arr[low];\n        // \u5f53low \u548chigh\u76f8\u540c\u65f6\uff0c\u8bf4\u660e\u4e2d\u5fc3\u70b9\u5c31\u5728\u8fd9\u91cc\u53ef\u4ee5\u56de\u586bpivot\u5143\u7d20\u4e86\n        while (low < high) {\n            // NOTE: \u6761\u4ef6\u522b\u5fd8\u4e86 low < high\n            // \u5f53\u4e00\u76f4\u5f80\u524d\u90fd\u6ca1\u627e\u5230\u6bd4pivot\u5c0f\u7684\u5143\u7d20 \u4ece\u800c\u9020\u6210\u6570\u7ec4\u8d8a\u754c\n            while (low < high && arr[high] >= pivot) high--;\n            arr[low] = arr[high];\n            while (low < high && arr[low] <= pivot) low++;\n            arr[high] = arr[low];\n        }\n        arr[low] = pivot;\n        return low;\n    }\n}\n\n'})})]})}function p(n={}){const{wrapper:i}={...(0,e.a)(),...n.components};return i?(0,r.jsx)(i,{...n,children:(0,r.jsx)(h,{...n})}):h(n)}},1151:(n,i,t)=>{t.d(i,{Z:()=>l,a:()=>s});var r=t(7294);const e={},o=r.createContext(e);function s(n){const i=r.useContext(o);return r.useMemo((function(){return"function"==typeof n?n(i):{...i,...n}}),[i,n])}function l(n){let i;return i=n.disableParentContext?"function"==typeof n.components?n.components(e):n.components||e:s(n.components),r.createElement(o.Provider,{value:i},n.children)}}}]);