"use strict";(self.webpackChunksummary=self.webpackChunksummary||[]).push([[4433],{807:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>o,frontMatter:()=>i,metadata:()=>d,toc:()=>x});var n=l(5893),s=l(1151);const i={title:"shell\u57fa\u7840\u547d\u4ee4",sidebar_label:"shell\u57fa\u7840\u547d\u4ee4",sidebar_position:1},r=void 0,d={id:"Linux/Common-Shell-Command",title:"shell\u57fa\u7840\u547d\u4ee4",description:"\u5e38\u7528shell \u547d\u4ee4\u6574\u7406",source:"@site/docs/08-Linux/Common-Shell-Command.mdx",sourceDirName:"08-Linux",slug:"/Linux/Common-Shell-Command",permalink:"/summary/docs/Linux/Common-Shell-Command",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/08-Linux/Common-Shell-Command.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"shell\u57fa\u7840\u547d\u4ee4",sidebar_label:"shell\u57fa\u7840\u547d\u4ee4",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"K8S\u5e38\u7528\u547d\u4ee4",permalink:"/summary/docs/Container-Tech/kubernetes/k8s\u5e38\u7528\u547d\u4ee4"},next:{title:"AWK SED \u7b80\u5355\u4f7f\u7528",permalink:"/summary/docs/Linux/AWK-SED\u547d\u4ee4\u7b80\u5355\u5165\u95e8"}},c={},x=[{value:"\u5e38\u7528shell \u547d\u4ee4\u6574\u7406",id:"\u5e38\u7528shell-\u547d\u4ee4\u6574\u7406",level:2},{value:"\u5feb\u901f\u5199\u5165\u6587\u4ef6",id:"\u5feb\u901f\u5199\u5165\u6587\u4ef6",level:3},{value:"linux\u7cfb\u7edf \u5b9a\u65f6\u540c\u6b65\u7f51\u7edc\u65f6\u95f4",id:"linux\u7cfb\u7edf-\u5b9a\u65f6\u540c\u6b65\u7f51\u7edc\u65f6\u95f4",level:3},{value:"vmware \u8bbe\u7f6e\u7f51\u7edc",id:"vmware-\u8bbe\u7f6e\u7f51\u7edc",level:3},{value:"\u67e5\u8be2\u5f53\u524d\u6587\u4ef6\u5939\u603b\u5927\u5c0f",id:"\u67e5\u8be2\u5f53\u524d\u6587\u4ef6\u5939\u603b\u5927\u5c0f",level:3},{value:"\u67e5\u8be2\u5f53\u524d\u76ee\u5f55\u7ed3\u6784\u524dn\u7ea7\u76ee\u5f55\u6811",id:"\u67e5\u8be2\u5f53\u524d\u76ee\u5f55\u7ed3\u6784\u524dn\u7ea7\u76ee\u5f55\u6811",level:3}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"\u5e38\u7528shell-\u547d\u4ee4\u6574\u7406",children:"\u5e38\u7528shell \u547d\u4ee4\u6574\u7406"}),"\n",(0,n.jsx)(t.h3,{id:"\u5feb\u901f\u5199\u5165\u6587\u4ef6",children:"\u5feb\u901f\u5199\u5165\u6587\u4ef6"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"\u65b9\u6cd5\u4e00"}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",metastring:"script",children:"\tcat > a.txt << 'EOF'\n\tafasdf\n\tEOF\n"})}),"\n",(0,n.jsxs)(t.ol,{start:"2",children:["\n",(0,n.jsx)(t.li,{children:"\u65b9\u6cd5\u4e8c"}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",metastring:"script",children:"tee a.txt <<- 'EOF'\n\tafsafdsf\n\tEOF\t\n"})}),"\n",(0,n.jsx)(t.h3,{id:"linux\u7cfb\u7edf-\u5b9a\u65f6\u540c\u6b65\u7f51\u7edc\u65f6\u95f4",children:"linux\u7cfb\u7edf \u5b9a\u65f6\u540c\u6b65\u7f51\u7edc\u65f6\u95f4"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://www.cnblogs.com/jichuang/p/13542177.html",children:"\u53c2\u8003\u6587\u7ae0"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",children:"# \u8bbe\u7f6e\u5b9a\u65f6\u4efb\u52a1\ncrontab -e \n*/5 * * * * ntpdate time.nist.gov\n\n# \u67e5\u770b\u5b9a\u65f6\u4efb\u52a1\u5217\u8868\ncrontab -l\n\n# \u67e5\u770b\u5b9a\u65f6\u4efb\u52a1\u65e5\u5fd7\ntail -f /var/log/cron\n\n# \u51e0\u4e2a\u65f6\u95f4\u670d\u52a1\u5668\nntpdate time.nist.gov\nntpdate time.nuri.net\nntpdate 0.asia.pool.ntp.org\nntpdate 1.asia.pool.ntp.org\nntpdate 2.asia.pool.ntp.org\nntpdate 3.asia.pool.ntp.org\n\n"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://tool.lu/crontab",children:"crontab\u5b9a\u65f6\u4efb\u52a1\u53c2\u6570\u542b\u4e49"})}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"\u5b57\u6bb5"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"\u662f\u5426\u5fc5\u586b"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"\u5141\u8bb8\u503c"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"\u5141\u8bb8\u7279\u6b8a\u5b57\u7b26"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"\u5907\u6ce8"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Seconds"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"\u662f"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"0\u201359"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"*``,``-"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"\u6807\u51c6\u5b9e\u73b0\u4e0d\u652f\u6301\u6b64\u5b57\u6bb5\u3002"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Minutes"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"\u662f"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"0\u201359"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"*``,``-"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Hours"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"\u662f"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"0\u201323"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"*``,``-"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Day of month"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"\u662f"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"1\u201331"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"*``,``-``?``L``W"})}),(0,n.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,n.jsx)(t.code,{children:"?``L``W"}),"\u53ea\u6709\u90e8\u5206\u8f6f\u4ef6\u5b9e\u73b0\u4e86"]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Month"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"\u662f"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"1\u201312 or JAN\u2013DEC"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"*``,``-"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Day of week"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"\u662f"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"0\u20137 or SUN\u2013SAT"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"*``,``-``?``L``#"})}),(0,n.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,n.jsx)(t.code,{children:"?``L``#"}),"\u53ea\u6709\u90e8\u5206\u8f6f\u4ef6\u5b9e\u73b0\u4e86 Linux\u548cSpring\u7684\u5141\u8bb8\u503c\u4e3a0-7\uff0c0\u548c7\u4e3a\u5468\u65e5 Quartz\u7684\u5141\u8bb8\u503c\u4e3a1-7\uff0c1\u4e3a\u5468\u65e5"]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Year"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"\u5426"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"1970\u20132099"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"*``,``-"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"\u6807\u51c6\u5b9e\u73b0\u4e0d\u652f\u6301\u6b64\u5b57\u6bb5\u3002"})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"vmware-\u8bbe\u7f6e\u7f51\u7edc",children:"vmware \u8bbe\u7f6e\u7f51\u7edc"}),"\n",(0,n.jsx)(t.p,{children:"\u6ce8\u610f\u6700\u597d\u4f7f\u7528 vmware 15, vmware 16\u7684\u7248\u672c\u7f51\u7edc\u597d\u50cf\u6709\u95ee\u9898\u3002"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://s2.loli.net/2023/07/15/FPTm7eqMnoli6Yr.png",alt:"image-20211216221256892"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://s2.loli.net/2023/07/15/OpiwWHFrGackYZL.png",alt:"image-20211216221335326"})}),"\n",(0,n.jsx)(t.h3,{id:"\u67e5\u8be2\u5f53\u524d\u6587\u4ef6\u5939\u603b\u5927\u5c0f",children:"\u67e5\u8be2\u5f53\u524d\u6587\u4ef6\u5939\u603b\u5927\u5c0f"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:"du -sh ./"})}),"\n",(0,n.jsx)(t.h3,{id:"\u67e5\u8be2\u5f53\u524d\u76ee\u5f55\u7ed3\u6784\u524dn\u7ea7\u76ee\u5f55\u6811",children:"\u67e5\u8be2\u5f53\u524d\u76ee\u5f55\u7ed3\u6784\u524dn\u7ea7\u76ee\u5f55\u6811"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:"tree -L n"})}),"\n",(0,n.jsx)(t.admonition,{title:"\u534f\u8bae",type:"tip",children:(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["\u672c\u4f5c\u54c1\u4ee3\u7801\u90e8\u5206\u91c7\u7528 ",(0,n.jsx)(t.a,{href:"https://www.apache.org/licenses/LICENSE-2.0",children:"Apache 2.0\u534f\u8bae"}),"\u8fdb\u884c\u8bb8\u53ef\u3002\u9075\u5faa\u8bb8\u53ef\u7684\u524d\u63d0\u4e0b\uff0c\u4f60\u53ef\u4ee5\u81ea\u7531\u5730\u5bf9\u4ee3\u7801\u8fdb\u884c\u4fee\u6539\uff0c\u518d\u53d1\u5e03\uff0c\u53ef\u4ee5\u5c06\u4ee3\u7801\u7528\u4f5c\u5546\u4e1a\u7528\u9014\u3002\u4f46\u8981\u6c42\u4f60\uff1a"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"\u7f72\u540d"}),"\uff1a\u5728\u539f\u6709\u4ee3\u7801\u548c\u884d\u751f\u4ee3\u7801\u4e2d\uff0c\u4fdd\u7559\u539f\u4f5c\u8005\u7f72\u540d\u53ca\u4ee3\u7801\u6765\u6e90\u4fe1\u606f\u3002"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"\u4fdd\u7559\u8bb8\u53ef\u8bc1"}),"\uff1a\u5728\u539f\u6709\u4ee3\u7801\u548c\u884d\u751f\u4ee3\u7801\u4e2d\uff0c\u4fdd\u7559Apache 2.0\u534f\u8bae\u6587\u4ef6\u3002"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["\u672c\u4f5c\u54c1\u6587\u6863\u90e8\u5206\u91c7\u7528",(0,n.jsx)(t.a,{href:"http://creativecommons.org/licenses/by/4.0/",children:"\u77e5\u8bc6\u5171\u4eab\u7f72\u540d 4.0 \u56fd\u9645\u8bb8\u53ef\u534f\u8bae"}),"\u8fdb\u884c\u8bb8\u53ef\u3002 \u9075\u5faa\u8bb8\u53ef\u7684\u524d\u63d0\u4e0b\uff0c\u4f60\u53ef\u4ee5\u81ea\u7531\u5730\u5171\u4eab\uff0c\u5305\u62ec\u5728\u4efb\u4f55\u5a92\u4ecb\u4e0a\u4ee5\u4efb\u4f55\u5f62\u5f0f\u590d\u5236\u3001\u53d1\u884c\u672c\u4f5c\u54c1\uff0c\u4ea6\u53ef\u4ee5\u81ea\u7531\u5730\u6f14\u7ece\u3001\u4fee\u6539\u3001\u8f6c\u6362\u6216\u4ee5\u672c\u4f5c\u54c1\u4e3a\u57fa\u7840\u8fdb\u884c\u4e8c\u6b21\u521b\u4f5c\u3002\u4f46\u8981\u6c42\u4f60\uff1a"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"\u7f72\u540d"}),"\uff1a\u5e94\u5728\u4f7f\u7528\u672c\u6587\u6863\u7684\u5168\u90e8\u6216\u90e8\u5206\u5185\u5bb9\u65f6\u5019\uff0c\u6ce8\u660e\u539f\u4f5c\u8005\u53ca\u6765\u6e90\u4fe1\u606f\u3002"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"\u975e\u5546\u4e1a\u6027\u4f7f\u7528"}),"\uff1a\u4e0d\u5f97\u7528\u4e8e\u5546\u4e1a\u51fa\u7248\u6216\u5176\u4ed6\u4efb\u4f55\u5e26\u6709\u5546\u4e1a\u6027\u8d28\u7684\u884c\u4e3a\u3002\u5982\u9700\u5546\u4e1a\u4f7f\u7528\uff0c\u8bf7\u8054\u7cfb\u4f5c\u8005\u3002"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"\u76f8\u540c\u65b9\u5f0f\u5171\u4eab\u7684\u6761\u4ef6"}),"\uff1a\u5728\u672c\u6587\u6863\u57fa\u7840\u4e0a\u6f14\u7ece\u3001\u4fee\u6539\u7684\u4f5c\u54c1\uff0c\u5e94\u5f53\u7ee7\u7eed\u4ee5\u77e5\u8bc6\u5171\u4eab\u7f72\u540d 4.0\u56fd\u9645\u8bb8\u53ef\u534f\u8bae\u8fdb\u884c\u8bb8\u53ef\u3002"]}),"\n"]}),"\n"]}),"\n"]})})]})}function o(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},1151:(e,t,l)=>{l.d(t,{Z:()=>d,a:()=>r});var n=l(7294);const s={},i=n.createContext(s);function r(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);