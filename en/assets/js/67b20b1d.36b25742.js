"use strict";(self.webpackChunksummary=self.webpackChunksummary||[]).push([[1838],{9683:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var s=e(1527),i=e(8672);const r={title:"AWK SED \u7b80\u5355\u4f7f\u7528",sidebar_label:"AWK SED \u7b80\u5355\u4f7f\u7528",sidebar_position:2},a="awk",l={id:"Linux/AWK-SED quick start",title:"AWK SED \u7b80\u5355\u4f7f\u7528",description:"- \u672c\u4f5c\u54c1\u4ee3\u7801\u90e8\u5206\u91c7\u7528 Apache 2.0\u534f\u8bae\u8fdb\u884c\u8bb8\u53ef\u3002\u9075\u5faa\u8bb8\u53ef\u7684\u524d\u63d0\u4e0b\uff0c\u4f60\u53ef\u4ee5\u81ea\u7531\u5730\u5bf9\u4ee3\u7801\u8fdb\u884c\u4fee\u6539\uff0c\u518d\u53d1\u5e03\uff0c\u53ef\u4ee5\u5c06\u4ee3\u7801\u7528\u4f5c\u5546\u4e1a\u7528\u9014\u3002\u4f46\u8981\u6c42\u4f60\uff1a",source:"@site/docs/08-Linux/AWK-SED quick start.mdx",sourceDirName:"08-Linux",slug:"/Linux/AWK-SED quick start",permalink:"/summary/en/Linux/AWK-SED quick start",draft:!1,unlisted:!1,editUrl:"https://github.com/Halcyon666/summary/blob/main/i18n/en/docusaurus-plugin-content-docs/current/08-Linux/AWK-SED quick start.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"AWK SED \u7b80\u5355\u4f7f\u7528",sidebar_label:"AWK SED \u7b80\u5355\u4f7f\u7528",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"shell\u57fa\u7840\u547d\u4ee4",permalink:"/summary/en/Linux/Common-Shell-Command"},next:{title:"Linux\u6269\u5c55\u78c1\u76d8\u7a7a\u95f4",permalink:"/summary/en/Linux/vmware-centos8 Expand or Shrink disk"}},d={},c=[];function o(n){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"awk",children:"awk"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"# awk \ntee awk.txt <<-'EOF'\njohn wang male 30 02103213\nludc dasf fama 12 12311321\nEOF\n\nawk '{print $1,$4}' awk.txt\nawk '{print NF}' awk.txt\n# \u6253\u5370\u6700\u540e\u4e00\u884c awk \u9ed8\u8ba4\u4ee5\u7a7a\u4f4d\u4e3a\u5206\u9694\u7b26 NF\u5185\u90e8\u53d8\u91cf\u8868\u793a\u4ee5\u5206\u9694\u7b26\u5212\u5206\u540e\u5143\u7d20\u7684\u4e2a\u6570\nawk '{print $NF}' awk.txt\ncat awk.txt  | awk '{print substr($1,1)}'\ncat awk.txt  | awk   '{print length}'\n\ncat awk.txt | awk 'BEGIN{total=0}{total+=$4}END{print total}'\ncat awk.txt | awk 'BEGIN{total=0}{total+=$4}END{print total/NR}'\n"})}),"\n",(0,s.jsx)(t.h1,{id:"sed",children:"sed"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"tee sed.txt <<-'EOF'  \nthis is line 1, this is First line\nthis is line 2, the Second line, Empty line followed\n\nthis is line 4, this is Third line\nthis is line 5, this is Fifth line\nEOF\n# \u66ff\u6362\nsed 's/this/That/g ; s/line/LINE/g' sed.txt\n# \u5220\u9664\u7b2c\u4e00\u884c \nsed '1d' sed.txt\n# \u4fdd\u5b58\u5220\u9664\u540e\u6587\u4ef6\nsed '1d' sed.txt > save_file\n# \u5982\u679c\u60f3\u76f4\u63a5\u4fee\u6539\u6e90\u6587\u4ef6\nsed -i '1d' save_file\n\n# \u5220\u9664\u6307\u5b9a\u8303\u56f4 \uff08\u7b2c1-3\u884c\uff09\nsed '1,3d' sed.txt\n\n# \u5220\u9664\u6700\u540e\u4e00\u884c\nsed '$d' sed.txt\n\n# \u6e05\u7a7a\u6587\u4ef6\nsed '1,$d' sed.txt\n\n# \u53ea\u4fdd\u7559\u7b2c5\u884c\nsed '5!d' sed.txt\n\n# \u5220\u9664\u6240\u6709\u5305\u542bEmpty\u7684\u884c\nsed '/Empty/d' sed.txt \n\n# \u5220\u9664\u7a7a\u884c\nsed '/^$/d' sed.txt\n\n# \u66ff\u6362\u6bcf\u4e00\u884c\u7684\u7b2c\u4e00\u4e2a\u503c\nsed 's/line/LINE' sed.txt\n\nsed 's/line/LINE/2' sed.txt\nsed 's/line/LINE/g' sed.txt\n\n# \u66ff\u6362\u5f00\u5934\u7684this \u4e3a that\nsed 's/^this/that/'\n"})}),"\n",(0,s.jsx)(t.admonition,{title:"\u534f\u8bae",type:"tip",children:(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["\u672c\u4f5c\u54c1\u4ee3\u7801\u90e8\u5206\u91c7\u7528 ",(0,s.jsx)(t.a,{href:"https://www.apache.org/licenses/LICENSE-2.0",children:"Apache 2.0\u534f\u8bae"}),"\u8fdb\u884c\u8bb8\u53ef\u3002\u9075\u5faa\u8bb8\u53ef\u7684\u524d\u63d0\u4e0b\uff0c\u4f60\u53ef\u4ee5\u81ea\u7531\u5730\u5bf9\u4ee3\u7801\u8fdb\u884c\u4fee\u6539\uff0c\u518d\u53d1\u5e03\uff0c\u53ef\u4ee5\u5c06\u4ee3\u7801\u7528\u4f5c\u5546\u4e1a\u7528\u9014\u3002\u4f46\u8981\u6c42\u4f60\uff1a"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"\u7f72\u540d"}),"\uff1a\u5728\u539f\u6709\u4ee3\u7801\u548c\u884d\u751f\u4ee3\u7801\u4e2d\uff0c\u4fdd\u7559\u539f\u4f5c\u8005\u7f72\u540d\u53ca\u4ee3\u7801\u6765\u6e90\u4fe1\u606f\u3002"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"\u4fdd\u7559\u8bb8\u53ef\u8bc1"}),"\uff1a\u5728\u539f\u6709\u4ee3\u7801\u548c\u884d\u751f\u4ee3\u7801\u4e2d\uff0c\u4fdd\u7559Apache 2.0\u534f\u8bae\u6587\u4ef6\u3002"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["\u672c\u4f5c\u54c1\u6587\u6863\u90e8\u5206\u91c7\u7528",(0,s.jsx)(t.a,{href:"http://creativecommons.org/licenses/by/4.0/",children:"\u77e5\u8bc6\u5171\u4eab\u7f72\u540d 4.0 \u56fd\u9645\u8bb8\u53ef\u534f\u8bae"}),"\u8fdb\u884c\u8bb8\u53ef\u3002 \u9075\u5faa\u8bb8\u53ef\u7684\u524d\u63d0\u4e0b\uff0c\u4f60\u53ef\u4ee5\u81ea\u7531\u5730\u5171\u4eab\uff0c\u5305\u62ec\u5728\u4efb\u4f55\u5a92\u4ecb\u4e0a\u4ee5\u4efb\u4f55\u5f62\u5f0f\u590d\u5236\u3001\u53d1\u884c\u672c\u4f5c\u54c1\uff0c\u4ea6\u53ef\u4ee5\u81ea\u7531\u5730\u6f14\u7ece\u3001\u4fee\u6539\u3001\u8f6c\u6362\u6216\u4ee5\u672c\u4f5c\u54c1\u4e3a\u57fa\u7840\u8fdb\u884c\u4e8c\u6b21\u521b\u4f5c\u3002\u4f46\u8981\u6c42\u4f60\uff1a"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"\u7f72\u540d"}),"\uff1a\u5e94\u5728\u4f7f\u7528\u672c\u6587\u6863\u7684\u5168\u90e8\u6216\u90e8\u5206\u5185\u5bb9\u65f6\u5019\uff0c\u6ce8\u660e\u539f\u4f5c\u8005\u53ca\u6765\u6e90\u4fe1\u606f\u3002"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"\u975e\u5546\u4e1a\u6027\u4f7f\u7528"}),"\uff1a\u4e0d\u5f97\u7528\u4e8e\u5546\u4e1a\u51fa\u7248\u6216\u5176\u4ed6\u4efb\u4f55\u5e26\u6709\u5546\u4e1a\u6027\u8d28\u7684\u884c\u4e3a\u3002\u5982\u9700\u5546\u4e1a\u4f7f\u7528\uff0c\u8bf7\u8054\u7cfb\u4f5c\u8005\u3002"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"\u76f8\u540c\u65b9\u5f0f\u5171\u4eab\u7684\u6761\u4ef6"}),"\uff1a\u5728\u672c\u6587\u6863\u57fa\u7840\u4e0a\u6f14\u7ece\u3001\u4fee\u6539\u7684\u4f5c\u54c1\uff0c\u5e94\u5f53\u7ee7\u7eed\u4ee5\u77e5\u8bc6\u5171\u4eab\u7f72\u540d 4.0\u56fd\u9645\u8bb8\u53ef\u534f\u8bae\u8fdb\u884c\u8bb8\u53ef\u3002"]}),"\n"]}),"\n"]}),"\n"]})})]})}function h(n={}){const{wrapper:t}={...(0,i.a)(),...n.components};return t?(0,s.jsx)(t,{...n,children:(0,s.jsx)(o,{...n})}):o(n)}},8672:(n,t,e)=>{e.d(t,{Z:()=>l,a:()=>a});var s=e(959);const i={},r=s.createContext(i);function a(n){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof n?n(t):{...t,...n}}),[t,n])}function l(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:a(n.components),s.createElement(r.Provider,{value:t},n.children)}}}]);