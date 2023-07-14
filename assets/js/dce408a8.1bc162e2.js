"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7381],{3905:(t,n,e)=>{e.d(n,{Zo:()=>s,kt:()=>d});var r=e(7294);function a(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function i(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?i(Object(e),!0).forEach((function(n){a(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):i(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function p(t,n){if(null==t)return{};var e,r,a=function(t,n){if(null==t)return{};var e,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)e=i[r],n.indexOf(e)>=0||(a[e]=t[e]);return a}(t,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)e=i[r],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(a[e]=t[e])}return a}var o=r.createContext({}),c=function(t){var n=r.useContext(o),e=n;return t&&(e="function"==typeof t?t(n):l(l({},n),t)),e},s=function(t){var n=c(t.components);return r.createElement(o.Provider,{value:n},t.children)},m="mdxType",u={inlineCode:"code",wrapper:function(t){var n=t.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(t,n){var e=t.components,a=t.mdxType,i=t.originalType,o=t.parentName,s=p(t,["components","mdxType","originalType","parentName"]),m=c(e),h=a,d=m["".concat(o,".").concat(h)]||m[h]||u[h]||i;return e?r.createElement(d,l(l({ref:n},s),{},{components:e})):r.createElement(d,l({ref:n},s))}));function d(t,n){var e=arguments,a=n&&n.mdxType;if("string"==typeof t||a){var i=e.length,l=new Array(i);l[0]=h;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=t,p[m]="string"==typeof t?t:a,l[1]=p;for(var c=2;c<i;c++)l[c]=e[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,e)}h.displayName="MDXCreateElement"},9946:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var r=e(7462),a=(e(7294),e(3905));const i={},l="KMP",p={unversionedId:"Algorithm/KMP",id:"Algorithm/KMP",title:"KMP",description:"\u672c\u6587\u4ee3\u7801\u6765\u81ea\u4e8e\u4e2d\u56fd\u5927\u5b66MOOC",source:"@site/docs/Algorithm/KMP.md",sourceDirName:"Algorithm",slug:"/Algorithm/KMP",permalink:"/summary/docs/Algorithm/KMP",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Algorithm/KMP.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u63d2\u5165\u6392\u5e8f",permalink:"/summary/docs/Algorithm/InsertSort"},next:{title:"\u6c424\u7684\u5e42",permalink:"/summary/docs/Algorithm/LeetCode4\u7684\u5e42"}},o={},c=[],s={toc:c},m="wrapper";function u(t){let{components:n,...e}=t;return(0,a.kt)(m,(0,r.Z)({},s,e,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"kmp"},"KMP"),(0,a.kt)("p",null,"\u672c\u6587\u4ee3\u7801\u6765\u81ea\u4e8e",(0,a.kt)("a",{parentName:"p",href:"https://www.icourse163.org/learn/ZJU-93001?tid=1003997005#/learn/content?type=detail&id=1007588527&cid=1009165213"},"\u4e2d\u56fd\u5927\u5b66MOOC")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://nos.netease.com/edu-lesson-pdfsrc/5C4C0E5034E43DB3AD5A994156BD4D8D-1541934012176?download=KMP.pdf&Signature=Kv6I%2FJ3dPtxt5e4xw26MboN3s0jpTH5Q9AN14toQuA0%3D&Expires=1621614432&NOSAccessKeyId=7db2f370ff9a412987155d36d55a6ead"},"KMP\u8bfe\u4ef6\u4e0b\u8f7d")),(0,a.kt)("p",null,"\u6ce8\u91ca\u5185\u5bb9\u4e3a\u81ea\u5df1\u7406\u89e3\uff0c\u5982\u6709\u9519\u8bef\u8bf7\u8bc4\u8bba\uff0c\u6216\u8005\u79c1\u4fe1\u7ed9\u6211\uff0c\u8c22\u8c22"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://s2.loli.net/2023/07/15/KTyZxPf21UludEs.png",alt:"\u56fe1-1"})),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"match[j]"),"\u7684\u503c\u5b9e\u9645\u4e0a\u662f\u524dj\u4e2a\uff08\u5305\u62ecj\uff09\u5143\u7d20\u7684\u6700\u5927\u5b50\u4e32\u957f\u5ea6 \u5bf9\u5e94\u5230\u6570\u7ec4\u4e2d\u7684\u4f4d\u7f6e \u6bd4\u5982\u56fe\u4e2d ",(0,a.kt)("inlineCode",{parentName:"p"},"j = 6;")," \u6700\u5927\u5b50\u4e32(abca)\u7684\u957f\u5ea6\u4e3a4,\u5728\u6570\u7ec4\u4e2d\u7684\u7d22\u5f15\u4e3a3"),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://s2.loli.net/2023/07/15/my81bGBsHJpE47n.png",alt:"\u56fe1-2"})),(0,a.kt)("p",null,"\u5f53\u6bd4\u8f83\u5230\u540e\u9762\u4e0d\u76f8\u7b49\u65f6\uff0c\u6a21\u5f0f\u4e32\u76f8\u5f53\u4e8e\u8981\u540e\u79fb\u5230\u4ece\u4e0a\u5f80\u4e0b\u7684\u7b2c\u4e09\u4e2a\u6a2a\u6761\u7684\u60c5\u5f62\uff0c\u4e5f\u5c31\u662f\u628a\u7b2c\u4e8c\u4e2a\u6a2a\u6761\u60c5\u51b5",(0,a.kt)("inlineCode",{parentName:"p"},"p = match[p-1]+1")),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://s2.loli.net/2023/07/15/kItirzPyEoqG8lu.png",alt:"\u56fe1-3"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7b2cj\u4e2a\u4e0b\u6807\u7684\u5b57\u7b26\u548c",(0,a.kt)("inlineCode",{parentName:"li"},"(match[j-1]+1)"),"\u4e0b\u6807\u4e0a\u7684\u5143\u7d20\u6bd4\u8f83"),(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u4e0d\u5339\u914d\uff0c\u5219\u6839\u636e\u4e0b\u6807\u4e3a",(0,a.kt)("inlineCode",{parentName:"li"},"match[j-1]"),"\u7684\u76f8\u540c\u4e32\u57fa\u7840\u4e0a\u8fdb\u884c\u6761\u4ef6\u6bd4\u8f83"),(0,a.kt)("li",{parentName:"ul"},"\u56e0\u4e3a",(0,a.kt)("inlineCode",{parentName:"li"},"match[j-1]"),"\u5df2\u7ecf\u5b58\u5728\uff0c\u90a3\u4e48\u7eff\u7d2b\u8272\u6574\u5757\u548c\u540e\u9762\u7eff\u7d2b\u5757\u80af\u5b9a\u4e00\u6837"),(0,a.kt)("li",{parentName:"ul"},"\u53c8\u7b2c\u4e00\u4e2a\u5c0f\u7eff\u5757\u4e3a",(0,a.kt)("inlineCode",{parentName:"li"},"match[match[j-1]]"),"\uff0c\u7eff\u5757\u548c\u7d2b\u5757\u76f8\u540c"),(0,a.kt)("li",{parentName:"ul"},"\u6240\u4ee5\u7b2c\u4e00\u4e2a\u7eff\u5757\u548c\u6700\u540e\u4e00\u4e2a\u7d2b\u5757\u76f8\u540c\uff0c\u53ea\u9700\u6bd4\u8f83\u95ee\u53f7\u4f4d\u7f6e\u7684\u503c\u5373\u53ef"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"pattern[match[match[j-1]]+1]")," \u548c ",(0,a.kt)("inlineCode",{parentName:"li"},"pattern[j]")," \u7684\u503c\u662f\u5426\u76f8\u7b49")),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://s2.loli.net/2023/07/15/yHQe8skGVzd17o9.png",alt:"\u56fe1-4"})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'//\u6b64\u6848\u4f8b\u4e3aC\u8bed\u8a00\u7248\u672c\n#include <stdio.h>\n#include "stdlib.h"\n#include "string.h"\n\ntypedef int Position;\n\nPosition KMP(char string[25], char pattern[7]);\n\nvoid BuildMatch(char *pattern, int *match);\n\n#define NotFound -1\n\nint main() {\n    char string[] = "this is a simple example";\n    char pattern[] = "simple";\n    Position p = KMP(string, pattern);\n    if (p == NotFound) printf("Not found.\\n");\n    else {\n        printf("%s\\n", string + p);\n        printf("%d\\n", p);\n    }\n    return 0;\n}\n\nPosition KMP(char *string, char *pattern) {\n    int n = strlen(string);\n    int m = strlen(pattern);\n    int s, p, *match;\n\n    if (m > n) return NotFound;\n    match = (int *) malloc(sizeof(int) * m);\n    // \u67e5\u8be2match\u6700\u957f\u5339\u914d\u5b57\u7b26\u4e32\u4f4d\u7f6e\u503c \u4f8b\u5982\uff1a\u56fe1-1\n    // pattern a    b   c   a   b\n    // index   0    1   2   3   4\n    // match   -1   -1  -1  0   1\n    BuildMatch(pattern, match);\n\n    s = p = 0;\n    while (s < n && p < m) {\n        if (string[s] == pattern[p]) {\n            s++;\n            p++;\n        } else if (p > 0) {\n            // \u5c06p\u7f6e\u4e3a \u524dp-1\u4e2a\u5143\u7d20 \u6700\u5927\u5b50\u4e32\u957f\u5ea6+1\n            // \u5982\u56fe1-2\n            p = match[p - 1] + 1;\n        } else\n            s++;\n    }\n    return (p == m) ? (s - m) : NotFound;\n}\n\nvoid BuildMatch(char *pattern, int *match) {\n    int i, j;\n    int m = strlen(pattern);\n    match[0] = -1;// -1 \u8868\u793a\u5b50\u4e32\u957f\u5ea6\u4e0d\u5b58\u5728\uff0c\u65e0\u4efb\u4f55\u76f8\u540c\u7684\u5143\u7d20\n    for (int j = 1; j < m; ++j) {\n        // i\u8868\u793a\u524dj-1\u4e2a\u5143\u7d20\u6700\u5927\u76f8\u540c\u5b50\u4e32\u957f\u5ea6 \u6570\u7ec4\u7d22\u5f15\u4f4d\u7f6e index-length 0-1\n        i = match[j - 1];\n\n        while ((i >= 0) && (pattern[i + 1] != pattern[j]))\n            // \u7b2cj\u4e2a\u4e0b\u6807\u7684\u5b57\u7b26\u548c(match[j-1]+1)\u4e0b\u6807\u4e0a\u7684\u5143\u7d20\u6bd4\u8f83\n            // \u5982\u679c\u4e0d\u5339\u914d\uff0c\u5219\u6839\u636e\u4e0b\u6807\u4e3amatch[j-1]\u7684\u76f8\u540c\u4e32\u57fa\u7840\u4e0a\u8fdb\u884c\u6761\u4ef6\u6bd4\u8f83\n            // \u56e0\u4e3amatch[j-1]\u5df2\u7ecf\u5b58\u5728\uff0c\u90a3\u4e48\u7eff\u7d2b\u8272\u6574\u5757\u548c\u540e\u9762\u7eff\u7d2b\u5757\u80af\u5b9a\u4e00\u6837\n            // \u53c8\u7b2c\u4e00\u4e2a\u5c0f\u7eff\u5757\u4e3amatch[match[j-1]]\uff0c\u7eff\u5757\u548c\u7d2b\u5757\u76f8\u540c\n            // \u6240\u4ee5\u7b2c\u4e00\u4e2a\u7eff\u5757\u548c\u6700\u540e\u4e00\u4e2a\u7d2b\u5757\u76f8\u540c\uff0c\u53ea\u9700\u6bd4\u8f83\u95ee\u53f7\u4f4d\u7f6e\u7684\u503c\u5373\u53ef\n            // pattern[match[match[j-1]]+1] \u548c pattern[j] \u7684\u503c\u662f\u5426\u76f8\u7b49\n            // \u5982\u56fe 1-3\n            i = match[i];\n\n        if (pattern[i + 1] == pattern[j])\n            // \u5982\u56fe 1-4\n            match[j] = i + 1;\n            // \u5982\u679c\u90fd\u5339\u914d\u4e0d\u4e0a\u5c31\u76f4\u63a5\u8bbe\u7f6e\u4e3a-1\n        else match[j] = -1;\n    }\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'// \u6b64\u6848\u4f8b\u4e3aJava\u7248\u672c \u4f1a\u8f93\u51fa\u6240\u6709\u7684\u5339\u914d\u6a21\u5f0f\u4e32\u7684\u4f4d\u7f6e\n\n/**\n * @Author: WhaleFall541\n * @Date: 2021/5/22 11:00\n */\npublic class KMP {\n    public static void main(String[] args) {\n        String s = "this is a simple example simple";\n        String p = "simple";\n        indexKMP(s, p);\n    }\n\n    private static int indexKMP(String sStr, String pStr) {\n        char[] string = sStr.toCharArray();\n        char[] pattern = pStr.toCharArray();\n        if (sStr.length() < pStr.length()) return -1;\n        int[] match = buildMatch(pattern);\n        int s = 0, p = 0, n = 0;\n        while (s < sStr.length()) {\n            while (s < sStr.length() && p < pStr.length()) {\n                if (string[s] == pattern[p]) {\n                    s++;\n                    p++;\n                } else if (p > 0)\n                    p = match[p - 1] + 1;\n                else s++;\n            }\n\n            if (p == pStr.length()) {\n                ++n;\n                System.out.println("\u7b2c" + n + "\u6b21\u5339\u914d\u4f4d\u7f6e" + (s - pStr.length()) + "\\n");\n                p = 0;\n            }\n        }\n        return 0;\n    }\n\n    private static int[] buildMatch(char[] pattern) {\n        int[] match = new int[pattern.length];\n        int i;\n        match[0] = -1;\n        for (int j = 1; j < pattern.length; j++) {\n            i = match[j - 1];\n\n            if (i >= 0 && pattern[i + 1] != pattern[j])\n                i = match[i];\n\n            if (pattern[i + 1] == pattern[j])\n                match[j] = i + 1;\n\n            else match[j] = -1;\n        }\n\n        return match;\n    }\n}\n\n\n')),(0,a.kt)("blockquote",null,(0,a.kt)("font",{color:"red"},"\u8f6c\u8f7d\u8bf7\u6ce8\u660e [\u539f\u6587\u5730\u5740](https://www.cnblogs.com/whalefall541/p/14797921.html)")))}u.isMDXComponent=!0}}]);