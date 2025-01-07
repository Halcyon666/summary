"use strict";(self.webpackChunksummary=self.webpackChunksummary||[]).push([[5726],{2766:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>a,frontMatter:()=>d,metadata:()=>n,toc:()=>x});const n=JSON.parse('{"id":"Linux/Common-Shell-Command","title":"shell\u57fa\u7840\u547d\u4ee4","description":"\u5e38\u7528shell \u547d\u4ee4\u6574\u7406","source":"@site/docs/08-Linux/Common-Shell-Command.mdx","sourceDirName":"08-Linux","slug":"/Linux/Common-Shell-Command","permalink":"/summary/Linux/Common-Shell-Command","draft":false,"unlisted":false,"editUrl":"https://github.com/Halcyon666/summary/edit/main/docs/08-Linux/Common-Shell-Command.mdx","tags":[],"version":"current","lastUpdatedAt":1736260505000,"sidebarPosition":1,"frontMatter":{"title":"shell\u57fa\u7840\u547d\u4ee4","sidebar_label":"shell\u57fa\u7840\u547d\u4ee4","sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"K8S\u5e38\u7528\u547d\u4ee4","permalink":"/summary/Container-Tech/kubernetes/k8s Common used Command"},"next":{"title":"AWK SED \u7b80\u5355\u4f7f\u7528","permalink":"/summary/Linux/AWK-SED quick start"}}');var s=l(6070),i=l(5248);const d={title:"shell\u57fa\u7840\u547d\u4ee4",sidebar_label:"shell\u57fa\u7840\u547d\u4ee4",sidebar_position:1},r=void 0,c={},x=[{value:"\u5e38\u7528shell \u547d\u4ee4\u6574\u7406",id:"\u5e38\u7528shell-\u547d\u4ee4\u6574\u7406",level:2},{value:"\u5feb\u901f\u5199\u5165\u6587\u4ef6",id:"\u5feb\u901f\u5199\u5165\u6587\u4ef6",level:3},{value:"linux\u7cfb\u7edf \u5b9a\u65f6\u540c\u6b65\u7f51\u7edc\u65f6\u95f4",id:"linux\u7cfb\u7edf-\u5b9a\u65f6\u540c\u6b65\u7f51\u7edc\u65f6\u95f4",level:3},{value:"vmware \u8bbe\u7f6e\u7f51\u7edc",id:"vmware-\u8bbe\u7f6e\u7f51\u7edc",level:3},{value:"\u67e5\u8be2\u5f53\u524d\u6587\u4ef6\u5939\u603b\u5927\u5c0f",id:"\u67e5\u8be2\u5f53\u524d\u6587\u4ef6\u5939\u603b\u5927\u5c0f",level:3},{value:"\u67e5\u8be2\u5f53\u524d\u76ee\u5f55\u7ed3\u6784\u524dn\u7ea7\u76ee\u5f55\u6811",id:"\u67e5\u8be2\u5f53\u524d\u76ee\u5f55\u7ed3\u6784\u524dn\u7ea7\u76ee\u5f55\u6811",level:3},{value:"\u5b89\u88c5 lrzsz",id:"\u5b89\u88c5-lrzsz",level:3},{value:"linux\u5173\u95edjava\u8fdb\u7a0b",id:"linux\u5173\u95edjava\u8fdb\u7a0b",level:3}];function h(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"\u5e38\u7528shell-\u547d\u4ee4\u6574\u7406",children:"\u5e38\u7528shell \u547d\u4ee4\u6574\u7406"}),"\n",(0,s.jsx)(t.h3,{id:"\u5feb\u901f\u5199\u5165\u6587\u4ef6",children:"\u5feb\u901f\u5199\u5165\u6587\u4ef6"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"\u65b9\u6cd5\u4e00"}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",metastring:"script",children:"\tcat > a.txt << 'EOF'\n\tafasdf\n\tEOF\n"})}),"\n",(0,s.jsxs)(t.ol,{start:"2",children:["\n",(0,s.jsx)(t.li,{children:"\u65b9\u6cd5\u4e8c"}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",metastring:"script",children:"tee a.txt <<- 'EOF'\n\tafsafdsf\n\tEOF\t\n"})}),"\n",(0,s.jsx)(t.h3,{id:"linux\u7cfb\u7edf-\u5b9a\u65f6\u540c\u6b65\u7f51\u7edc\u65f6\u95f4",children:"linux\u7cfb\u7edf \u5b9a\u65f6\u540c\u6b65\u7f51\u7edc\u65f6\u95f4"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://www.cnblogs.com/jichuang/p/13542177.html",children:"\u53c2\u8003\u6587\u7ae0"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"# \u8bbe\u7f6e\u5b9a\u65f6\u4efb\u52a1\ncrontab -e \n*/5 * * * * ntpdate time.nist.gov\n\n# \u67e5\u770b\u5b9a\u65f6\u4efb\u52a1\u5217\u8868\ncrontab -l\n\n# \u67e5\u770b\u5b9a\u65f6\u4efb\u52a1\u65e5\u5fd7\ntail -f /var/log/cron\n\n# \u51e0\u4e2a\u65f6\u95f4\u670d\u52a1\u5668\nntpdate time.nist.gov\nntpdate time.nuri.net\nntpdate 0.asia.pool.ntp.org\nntpdate 1.asia.pool.ntp.org\nntpdate 2.asia.pool.ntp.org\nntpdate 3.asia.pool.ntp.org\n\n"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://tool.lu/crontab",children:"crontab\u5b9a\u65f6\u4efb\u52a1\u53c2\u6570\u542b\u4e49"})}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"\u5b57\u6bb5"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"\u662f\u5426\u5fc5\u586b"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"\u5141\u8bb8\u503c"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"\u5141\u8bb8\u7279\u6b8a\u5b57\u7b26"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"\u5907\u6ce8"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Seconds"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"\u662f"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"0\u201359"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"*``,``-"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"\u6807\u51c6\u5b9e\u73b0\u4e0d\u652f\u6301\u6b64\u5b57\u6bb5\u3002"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Minutes"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"\u662f"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"0\u201359"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"*``,``-"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Hours"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"\u662f"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"0\u201323"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"*``,``-"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Day of month"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"\u662f"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"1\u201331"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"*``,``-``?``L``W"})}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,s.jsx)(t.code,{children:"?``L``W"}),"\u53ea\u6709\u90e8\u5206\u8f6f\u4ef6\u5b9e\u73b0\u4e86"]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Month"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"\u662f"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"1\u201312 or JAN\u2013DEC"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"*``,``-"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Day of week"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"\u662f"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"0\u20137 or SUN\u2013SAT"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"*``,``-``?``L``#"})}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,s.jsx)(t.code,{children:"?``L``#"}),"\u53ea\u6709\u90e8\u5206\u8f6f\u4ef6\u5b9e\u73b0\u4e86 Linux\u548cSpring\u7684\u5141\u8bb8\u503c\u4e3a0-7\uff0c0\u548c7\u4e3a\u5468\u65e5 Quartz\u7684\u5141\u8bb8\u503c\u4e3a1-7\uff0c1\u4e3a\u5468\u65e5"]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Year"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"\u5426"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"1970\u20132099"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"*``,``-"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"\u6807\u51c6\u5b9e\u73b0\u4e0d\u652f\u6301\u6b64\u5b57\u6bb5\u3002"})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"vmware-\u8bbe\u7f6e\u7f51\u7edc",children:"vmware \u8bbe\u7f6e\u7f51\u7edc"}),"\n",(0,s.jsx)(t.p,{children:"\u6ce8\u610f\u6700\u597d\u4f7f\u7528 vmware 15, vmware 16\u7684\u7248\u672c\u7f51\u7edc\u597d\u50cf\u6709\u95ee\u9898\u3002"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://s2.loli.net/2023/07/15/FPTm7eqMnoli6Yr.png",alt:"image-20211216221256892"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://s2.loli.net/2023/07/15/OpiwWHFrGackYZL.png",alt:"image-20211216221335326"})}),"\n",(0,s.jsx)(t.h3,{id:"\u67e5\u8be2\u5f53\u524d\u6587\u4ef6\u5939\u603b\u5927\u5c0f",children:"\u67e5\u8be2\u5f53\u524d\u6587\u4ef6\u5939\u603b\u5927\u5c0f"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"du -sh ./"})}),"\n",(0,s.jsx)(t.h3,{id:"\u67e5\u8be2\u5f53\u524d\u76ee\u5f55\u7ed3\u6784\u524dn\u7ea7\u76ee\u5f55\u6811",children:"\u67e5\u8be2\u5f53\u524d\u76ee\u5f55\u7ed3\u6784\u524dn\u7ea7\u76ee\u5f55\u6811"}),"\n",(0,s.jsxs)(t.p,{children:["\u663e\u793a \u7b2c\u4e00\u7ea7\u76ee\u5f55 ",(0,s.jsx)(t.code,{children:"for /d %i in (*) do @echo %i"})]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://s2.loli.net/2024/05/25/cVOMKZuHvI4RfiQ.png",alt:"image-20240525230752153"})}),"\n",(0,s.jsx)(t.h3,{id:"\u5b89\u88c5-lrzsz",children:"\u5b89\u88c5 lrzsz"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"yum install -y lrzsz"})}),"\n",(0,s.jsx)(t.p,{children:"sz \u4e0b\u8f7d rz \u4e0a\u4f20"}),"\n",(0,s.jsx)(t.h3,{id:"linux\u5173\u95edjava\u8fdb\u7a0b",children:"linux\u5173\u95edjava\u8fdb\u7a0b"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:'kill -9 $(ps -ef | grep -w "xxx-1.0.jar" |  grep -v "grep" | awk \'{print $2}\')'})})]})}function a(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},5248:(e,t,l)=>{l.d(t,{R:()=>d,x:()=>r});var n=l(758);const s={},i=n.createContext(s);function d(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);