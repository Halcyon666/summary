"use strict";(self.webpackChunksummary=self.webpackChunksummary||[]).push([[9616],{2722:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>a});var s=t(1527),l=t(73);const r={title:"\u9501",sidebar_position:5,sidebar_label:"\u9501"},i=void 0,o={id:"Java/ConcurrentAndJVM/lock",title:"\u9501",description:"lock\u9501",source:"@site/docs/01-Java/05-ConcurrentAndJVM/lock.mdx",sourceDirName:"01-Java/05-ConcurrentAndJVM",slug:"/Java/ConcurrentAndJVM/lock",permalink:"/Java/ConcurrentAndJVM/lock",draft:!1,unlisted:!1,editUrl:"https://github.com/Halcyon666/summary/edit/main/docs/01-Java/05-ConcurrentAndJVM/lock.mdx",tags:[],version:"current",lastUpdatedAt:1710340003,formattedLastUpdatedAt:"2024\u5e743\u670813\u65e5",sidebarPosition:5,frontMatter:{title:"\u9501",sidebar_position:5,sidebar_label:"\u9501"},sidebar:"tutorialSidebar",previous:{title:"\u5904\u7406\u5668\u5185\u5b58\u6a21\u578b",permalink:"/Java/ConcurrentAndJVM/CPU memory domain"},next:{title:"JAVA\u865a\u62df\u673a",permalink:"/Java/ConcurrentAndJVM/JAVA Virtual Machine"}},c={},a=[{value:"lock\u9501",id:"lock\u9501",level:2},{value:"\u9501\u548c\u540c\u6b65\u5668AQS\u6982\u5ff5\u533a\u522b",id:"\u9501\u548c\u540c\u6b65\u5668aqs\u6982\u5ff5\u533a\u522b",level:2}];function d(n){const e={blockquote:"blockquote",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",...(0,l.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h2,{id:"lock\u9501",children:"lock\u9501"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{src:"https://s2.loli.net/2023/07/15/T2tYREiaSpo3eyx.png",alt:""})}),"\n",(0,s.jsx)(e.h2,{id:"\u9501\u548c\u540c\u6b65\u5668aqs\u6982\u5ff5\u533a\u522b",children:"\u9501\u548c\u540c\u6b65\u5668AQS\u6982\u5ff5\u533a\u522b"}),"\n",(0,s.jsx)(e.p,{children:"\u9501\u662f\u9762\u5411\u4f7f\u7528\u8005\u7684\uff0c\u5b83\u5b9a\u4e49\u4e86\u4f7f\u7528\u8005\u4e0e\u9501\u4ea4\u4e92\u7684\u63a5\u53e3\uff08\u6bd4\u5982\u53ef\u4ee5\u5141\u8bb8\u4e24\u4e2a\u7ebf\u7a0b\u5e76\u884c\u8bbf\u95ee\uff09\uff0c\u9690\u85cf\u4e86\u5b9e\u73b0\u7ec6\u8282\uff1b"}),"\n",(0,s.jsx)(e.p,{children:"\u540c\u6b65\u5668\u9762\u5411\u7684\u662f\u9501\u7684\u5b9e\u73b0\u8005\uff0c\u5b83\u7b80\u5316\u4e86\u9501\u7684\u5b9e\u73b0\u65b9\u5f0f\uff0c\u5c4f\u853d\u4e86\u540c\u6b65\u72b6\u6001\u7ba1\u7406\u3001\u7ebf\u7a0b\u7684\u6392\u961f\u3001\u7b49\u5f85\u4e0e\u5524\u9192\u7b49\u5e95\u5c42\u64cd\u4f5c\u3002\u9501\u548c\u540c\u6b65\u5668\u5f88\u597d\u5730\u9694\u79bb\u4e86\u4f7f\u7528\u8005\u548c\u5b9e\u73b0\u8005\u6240\u9700\u5173\u6ce8\u7684\u9886\u57df"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{src:"https://s2.loli.net/2023/07/15/VABC2cpNlRky3eG.png",alt:""})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{src:"https://s2.loli.net/2023/07/15/XMl6UmZ3GkwvAyO.png",alt:""})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{src:"https://s2.loli.net/2023/07/15/e3fV7UgrLNY46ZP.png",alt:""})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{src:"https://s2.loli.net/2023/07/15/do1wcpmjDu49I3s.png",alt:""})}),"\n",(0,s.jsx)(e.p,{children:"\u56e0\u6b64\u540c\u6b65\u5668\u63d0\u4f9b\u4e86\u4e00\u4e2a\u57fa\u4e8eCAS\u7684\u8bbe\u7f6e\u5c3e\u8282\u70b9\u7684\u65b9\u6cd5\uff1acompareAndSetTail(Node expect, Node update)\uff0c\u5b83\u9700\u8981\u4f20\u9012\u5f53\u524d\u7ebf\u7a0b\u201c\u8ba4\u4e3a\u201d\u7684\u5c3e\u8282\u70b9\u548c\u5f53\u524d\u8282\u70b9\uff0c\u53ea\u6709\u8bbe\u7f6e\u6210\u529f\u540e\uff0c\u5f53\u524d\u8282\u70b9\u624d\u6b63\u5f0f\u4e0e\u4e4b\u524d\u7684\u5c3e\u8282\u70b9\u5efa\u7acb\u5173\u8054\u3002"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{src:"https://s2.loli.net/2023/07/15/BXPAhpmak3iQdKe.png",alt:""})}),"\n",(0,s.jsx)(e.p,{children:"\u540c\u6b65\u961f\u5217\u9075\u5faaFIFO\uff0c\u9996\u8282\u70b9\u662f\u83b7\u53d6\u540c\u6b65\u72b6\u6001\u6210\u529f\u7684\u8282\u70b9\uff0c\u9996\u8282\u70b9\u7684\u7ebf\u7a0b\u5728\u91ca\u653e\u540c\u6b65\u72b6\u6001\u65f6\uff0c\u5c06\u4f1a\u5524\u9192\u540e\u7ee7\u8282\u70b9\uff0c\u800c\u540e\u7ee7\u8282\u70b9\u5c06\u4f1a\u5728\u83b7\u53d6\u540c\u6b65\u72b6\u6001\u6210\u529f\u65f6\u5c06\u81ea\u5df1\u8bbe\u7f6e\u4e3a\u9996\u8282\u70b9\uff0c\u5982\u4e0b\u56fe\u6240\u793a"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{src:"https://s2.loli.net/2023/07/15/cIp73PN1Ym8Cf2o.png",alt:""})}),"\n",(0,s.jsx)(e.p,{children:"\u8bbe\u7f6e\u9996\u8282\u70b9\u662f\u901a\u8fc7\u83b7\u53d6\u540c\u6b65\u72b6\u6001\u6210\u529f\u7684\u7ebf\u7a0b\u6765\u5b8c\u6210\u7684\uff0c\u7531\u4e8e\u53ea\u6709\u4e00\u4e2a\u7ebf\u7a0b\u80fd\u591f\u6210\u529f\u83b7\u53d6\u5230\u540c\u6b65\u72b6\u6001\uff0c\u56e0\u6b64\u8bbe\u7f6e\u5934\u8282\u70b9\u7684\u65b9\u6cd5\u5e76\u4e0d\u9700\u8981\u4f7f\u7528CAS\u6765\u4fdd\u8bc1\uff0c\u5b83\u53ea\u9700\u8981\u5c06\u9996\u8282\u70b9\u8bbe\u7f6e\u6210\u4e3a\u539f\u9996\u8282\u70b9\u7684\u540e\u7ee7\u8282\u70b9\u5e76\u65ad\u5f00\u539f\u9996\u8282\u70b9\u7684next\u5f15\u7528\u5373\u53ef\u3002"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{src:"https://s2.loli.net/2023/07/15/kSXlBVHZn1AW6zi.png",alt:""})}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsx)(e.p,{children:"\u53c2\u8003\u8d44\u6599"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsx)(e.li,{children:"\u4e66\u7c4d\u540d\u79f0\uff1a\u300ajava\u5e76\u53d1\u7f16\u7a0b\u7684\u827a\u672f\u300b \u4f5c\u8005\uff1a\u65b9\u817e\u98de \u9b4f\u9e4f \u7a0b\u6653\u660e"}),"\n"]}),"\n"]})]})}function p(n={}){const{wrapper:e}={...(0,l.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(d,{...n})}):d(n)}},73:(n,e,t)=>{t.d(e,{Z:()=>o,a:()=>i});var s=t(959);const l={},r=s.createContext(l);function i(n){const e=s.useContext(r);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:i(n.components),s.createElement(r.Provider,{value:e},n.children)}}}]);