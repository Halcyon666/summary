"use strict";(self.webpackChunksummary=self.webpackChunksummary||[]).push([[6654],{4753:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>p,contentTitle:()=>t,default:()=>c,frontMatter:()=>r,metadata:()=>a,toc:()=>h});var l=s(5893),i=s(1151);const r={title:"JMM\u76f8\u5173\u5185\u5bb9",sidebar_position:3,sidebar_label:"JMM\u76f8\u5173\u5185\u5bb9"},t=void 0,a={id:"Java/ConcurrentAndJVM/JMM",title:"JMM\u76f8\u5173\u5185\u5bb9",description:"JMM\u76f8\u5173\u5185\u5bb9",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/01-Java/05-ConcurrentAndJVM/JMM.mdx",sourceDirName:"01-Java/05-ConcurrentAndJVM",slug:"/Java/ConcurrentAndJVM/JMM",permalink:"/en/Java/ConcurrentAndJVM/JMM",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"JMM\u76f8\u5173\u5185\u5bb9",sidebar_position:3,sidebar_label:"JMM\u76f8\u5173\u5185\u5bb9"},sidebar:"tutorialSidebar",previous:{title:"final\u57df\u5185\u5b58\u77e5\u8bc6",permalink:"/en/Java/ConcurrentAndJVM/final memory domain"},next:{title:"\u5904\u7406\u5668\u5185\u5b58\u6a21\u578b",permalink:"/en/Java/ConcurrentAndJVM/CPU memory domain"}},p={},h=[{value:"JMM\u76f8\u5173\u5185\u5bb9",id:"jmm\u76f8\u5173\u5185\u5bb9",level:2},{value:"\u5728x86\u67b6\u6784\u4e0b\u4ec5\u6709StoreLoad\u5c4f\u969c",id:"\u5728x86\u67b6\u6784\u4e0b\u4ec5\u6709storeload\u5c4f\u969c",level:2},{value:"JMM\u5185\u5b58\u6a21\u578b\u8bbe\u8ba1\u539f\u5219",id:"jmm\u5185\u5b58\u6a21\u578b\u8bbe\u8ba1\u539f\u5219",level:2},{value:"happens-before\u5173\u7cfb\u7684\u5b9a\u4e49",id:"happens-before\u5173\u7cfb\u7684\u5b9a\u4e49",level:2},{value:"happens-before \u548c as-if-serial \u5f02\u540c\u70b9",id:"happens-before-\u548c-as-if-serial-\u5f02\u540c\u70b9",level:2},{value:"happens-before\u89c4\u5219",id:"happens-before\u89c4\u5219",level:2},{value:"\u591a\u7ebf\u7a0b\u5e76\u53d1\u521d\u59cb\u5316\u5bf9\u8c61\u53ef\u80fd\u53d1\u751f\u6307\u4ee4\u91cd\u6392",id:"\u591a\u7ebf\u7a0b\u5e76\u53d1\u521d\u59cb\u5316\u5bf9\u8c61\u53ef\u80fd\u53d1\u751f\u6307\u4ee4\u91cd\u6392",level:2},{value:"\u5728\u9996\u6b21\u53d1\u751f\u4e0b\u5217\u4efb\u610f\u4e00\u79cd\u60c5\u51b5\u65f6\uff0c\u4e00\u4e2a\u7c7b\u6216\u63a5\u53e3\u7c7b\u578bT\u5c06\u88ab\u7acb\u5373\u521d\u59cb\u5316",id:"\u5728\u9996\u6b21\u53d1\u751f\u4e0b\u5217\u4efb\u610f\u4e00\u79cd\u60c5\u51b5\u65f6\u4e00\u4e2a\u7c7b\u6216\u63a5\u53e3\u7c7b\u578bt\u5c06\u88ab\u7acb\u5373\u521d\u59cb\u5316",level:2},{value:"\u7c7b\u521d\u59cb\u5316\u8fc7\u7a0b",id:"\u7c7b\u521d\u59cb\u5316\u8fc7\u7a0b",level:2}];function o(n){const e={a:"a",blockquote:"blockquote",h2:"h2",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",ul:"ul",...(0,i.a)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h2,{id:"jmm\u76f8\u5173\u5185\u5bb9",children:"JMM\u76f8\u5173\u5185\u5bb9"}),"\n",(0,l.jsx)(e.h2,{id:"\u5728x86\u67b6\u6784\u4e0b\u4ec5\u6709storeload\u5c4f\u969c",children:"\u5728x86\u67b6\u6784\u4e0b\u4ec5\u6709StoreLoad\u5c4f\u969c"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.a,{href:"https://zhuanlan.zhihu.com/p/81555436",children:"\u8be6\u60c5\u8bf7\u89c1"})}),"\n",(0,l.jsx)(e.h2,{id:"jmm\u5185\u5b58\u6a21\u578b\u8bbe\u8ba1\u539f\u5219",children:"JMM\u5185\u5b58\u6a21\u578b\u8bbe\u8ba1\u539f\u5219"}),"\n",(0,l.jsx)(e.p,{children:"\u5bf9\u4e8e\u4f1a\u6539\u53d8\u7a0b\u5e8f\u6267\u884c\u7ed3\u679c\u7684\u91cd\u6392\u5e8f\uff0cJMM\u8981\u6c42\u7f16\u8bd1\u5668\u548c\u5904\u7406\u5668\u5fc5\u987b\u7981\u6b62\u8fd9\u79cd\u91cd\u6392\u5e8f\u3002"}),"\n",(0,l.jsx)(e.p,{children:"\u5bf9\u4e8e\u4e0d\u4f1a\u6539\u53d8\u7a0b\u5e8f\u6267\u884c\u7ed3\u679c\u7684\u91cd\u6392\u5e8f\uff0cJMM\u5bf9\u7f16\u8bd1\u5668\u548c\u5904\u7406\u5668\u4e0d\u505a\u8981\u6c42\uff08JMM\u5141\u8bb8\u8fd9\u79cd\u91cd\u6392\u5e8f\uff09\u3002"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.img,{src:"https://s2.loli.net/2023/07/15/8hkiCWZ7jDaoARU.png",alt:""})}),"\n",(0,l.jsx)(e.h2,{id:"happens-before\u5173\u7cfb\u7684\u5b9a\u4e49",children:"happens-before\u5173\u7cfb\u7684\u5b9a\u4e49"}),"\n",(0,l.jsxs)(e.ol,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u5982\u679c\u4e00\u4e2a\u64cd\u4f5chappens-before\u53e6\u4e00\u4e2a\u64cd\u4f5c\uff0c\u90a3\u4e48\u7b2c\u4e00\u4e2a\u64cd\u4f5c\u7684\u6267\u884c\u7ed3\u679c\u5c06\u5bf9\u7b2c\u4e8c\u4e2a\u64cd\u4f5c\u53ef\u89c1\uff0c\u800c\u4e14\u7b2c\u4e00\u4e2a\u64cd\u4f5c\u7684\u6267\u884c\u987a\u5e8f\u6392\u5728\u7b2c\u4e8c\u4e2a\u64cd\u4f5c\u4e4b\u524d\u3002"}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u4e24\u4e2a\u64cd\u4f5c\u4e4b\u95f4\u5b58\u5728happens-before\u5173\u7cfb\uff0c\u5e76\u4e0d\u610f\u5473\u7740Java\u5e73\u53f0\u7684\u5177\u4f53\u5b9e\u73b0\u5fc5\u987b\u8981\u6309\u7167happens-before\u5173\u7cfb\u6307\u5b9a\u7684\u987a\u5e8f\u6765\u6267\u884c\u3002\u5982\u679c\u91cd\u6392\u5e8f\u4e4b\u540e\u7684\u6267\u884c\u7ed3\u679c\uff0c\u4e0e\u6309happens-before\n\u5173\u7cfb\u6765\u6267\u884c\u7684\u7ed3\u679c\u4e00\u81f4\uff0c\u90a3\u4e48\u8fd9\u79cd\u91cd\u6392\u5e8f\u5e76\u4e0d\u975e\u6cd5\uff08\u4e5f\u5c31\u662f\u8bf4\uff0cJMM\u5141\u8bb8\u8fd9\u79cd\u91cd\u6392\u5e8f\uff09\u3002"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u4e0a\u9762\u76841.\u662fJMM\u5bf9\u7a0b\u5e8f\u5458\u7684\u627f\u8bfa\u3002\u4ece\u7a0b\u5e8f\u5458\u7684\u89d2\u5ea6\u6765\u8bf4\uff0c\u53ef\u4ee5\u8fd9\u6837\u7406\u89e3happens-before\u5173\u7cfb\uff1a\u5982\u679cA happens-before B\uff0c\u90a3\u4e48Java\u5185\u5b58\u6a21\u578b\u5c06\u5411\u7a0b\u5e8f\u5458\u4fdd\u8bc1\u2014\u2014A\u64cd\u4f5c\u7684\u7ed3\u679c\u5c06\u5bf9B\u53ef\u89c1\uff0c\u4e14A\u7684\u6267\u884c\u987a\u5e8f\u6392\u5728B\n\u4e4b\u524d\u3002\u6ce8\u610f\uff0c\u8fd9\u53ea\u662fJava\u5185\u5b58\u6a21\u578b\u5411\u7a0b\u5e8f\u5458\u505a\u51fa\u7684\u4fdd\u8bc1\uff01"}),"\n",(0,l.jsx)(e.li,{children:"\u4e0a\u9762\u76842.\u662fJMM\u5bf9\u7f16\u8bd1\u5668\u548c\u5904\u7406\u5668\u91cd\u6392\u5e8f\u7684\u7ea6\u675f\u539f\u5219\u3002\u6b63\u5982\u524d\u9762\u6240\u8a00\uff0cJMM\u5176\u5b9e\u662f\u5728\u9075\u5faa\u4e00\u4e2a\u57fa\u672c\u539f\u5219\uff1a\u53ea\u8981\u4e0d\u6539\u53d8\u7a0b\u5e8f\u7684\u6267\u884c\u7ed3\u679c\uff08\u6307\u7684\u662f\u5355\u7ebf\u7a0b\u7a0b\u5e8f\u548c\u6b63\u786e\u540c\u6b65\u7684\u591a\u7ebf\u7a0b\u7a0b\u5e8f\uff09\uff0c\u7f16\u8bd1\u5668\u548c\u5904\u7406\u5668\u600e\u4e48\u4f18\u5316\u90fd\u884c\u3002JMM\n\u8fd9\u4e48\u505a\u7684\u539f\u56e0\u662f\uff1a\u7a0b\u5e8f\u5458\u5bf9\u4e8e\u8fd9\u4e24\u4e2a\u64cd\u4f5c\u662f\u5426\u771f\u7684\u88ab\u91cd\u6392\u5e8f\u5e76\u4e0d\u5173\u5fc3\uff0c\u7a0b\u5e8f\u5458\u5173\u5fc3\u7684\u662f\u7a0b\u5e8f\u6267\u884c\u65f6\u7684\u8bed\u4e49\u4e0d\u80fd\u88ab\u6539\u53d8\uff08\u5373\u6267\u884c\u7ed3\u679c\u4e0d\u80fd\u88ab\u6539\u53d8\uff09\u3002\u56e0\u6b64\uff0chappens-before\u5173\u7cfb\u672c\u8d28\u4e0a\u548cas-if-serial\u8bed\u4e49\u662f\u4e00\u56de\u4e8b\u3002"}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"happens-before-\u548c-as-if-serial-\u5f02\u540c\u70b9",children:"happens-before \u548c as-if-serial \u5f02\u540c\u70b9"}),"\n",(0,l.jsx)(e.p,{children:"\u76f8\u540c\u70b9\uff1a"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"as-if-serial\u8bed\u4e49\u548chappens-before\u8fd9\u4e48\u505a\u7684\u76ee\u7684\uff0c\u90fd\u662f\u4e3a\u4e86\u5728\u4e0d\u6539\u53d8\u7a0b\u5e8f\u6267\u884c\u7ed3\u679c\u7684\u524d\u63d0\u4e0b\uff0c\u5c3d\u53ef\u80fd\u5730\u63d0\u9ad8\u7a0b\u5e8f\u6267\u884c\u7684\u5e76\u884c\u5ea6\u3002"}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:"\u4e0d\u540c\u70b9\uff1a"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"as-if-serial\u8bed\u4e49\u4fdd\u8bc1\u5355\u7ebf\u7a0b\u5185\u7a0b\u5e8f\u7684\u6267\u884c\u7ed3\u679c\u4e0d\u88ab\u6539\u53d8\uff0chappens-before\u5173\u7cfb\u4fdd\u8bc1\u6b63\u786e\u540c\u6b65\u7684\u591a\u7ebf\u7a0b\u7a0b\u5e8f\u7684\u6267\u884c\u7ed3\u679c\u4e0d\u88ab\u6539\u53d8\u3002"}),"\n",(0,l.jsx)(e.li,{children:"as-if-serial\u8bed\u4e49\u7ed9\u7f16\u5199\u5355\u7ebf\u7a0b\u7a0b\u5e8f\u7684\u7a0b\u5e8f\u5458\u521b\u9020\u4e86\u4e00\u4e2a\u5e7b\u5883\uff1a\u5355\u7ebf\u7a0b\u7a0b\u5e8f\u662f\u6309\u7a0b\u5e8f\u7684\u987a\u5e8f\u6765\u6267\u884c\u7684\u3002happens-before\u5173\u7cfb\u7ed9\u7f16\u5199\u6b63\u786e\u540c\u6b65\u7684\u591a\u7ebf\u7a0b\u7a0b\u5e8f\u7684\u7a0b\u5e8f\u5458\u521b\u9020\u4e86\u4e00\u4e2a\u5e7b\u5883\uff1a\u6b63\u786e\u540c\u6b65\u7684\u591a\u7ebf\u7a0b\u7a0b\u5e8f\u662f\u6309happens\n-before\u6307\u5b9a\u7684\u987a\u5e8f\u6765\u6267\u884c\u7684\u3002"}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"happens-before\u89c4\u5219",children:"happens-before\u89c4\u5219"}),"\n",(0,l.jsxs)(e.ol,{children:["\n",(0,l.jsx)(e.li,{children:"\u7a0b\u5e8f\u987a\u5e8f\u89c4\u5219\uff1a\u4e00\u4e2a\u7ebf\u7a0b\u4e2d\u7684\u6bcf\u4e2a\u64cd\u4f5c\uff0chappens-before\u4e8e\u8be5\u7ebf\u7a0b\u4e2d\u7684\u4efb\u610f\u540e\u7eed\u64cd\u4f5c\u3002"}),"\n",(0,l.jsx)(e.li,{children:"\u76d1\u89c6\u5668\u9501\u89c4\u5219\uff1a\u5bf9\u4e00\u4e2a\u9501\u7684\u89e3\u9501\uff0chappens-before\u4e8e\u968f\u540e\u5bf9\u8fd9\u4e2a\u9501\u7684\u52a0\u9501\u3002"}),"\n",(0,l.jsx)(e.li,{children:"volatile\u53d8\u91cf\u89c4\u5219\uff1a\u5bf9\u4e00\u4e2avolatile\u57df\u7684\u5199\uff0chappens-before\u4e8e\u4efb\u610f\u540e\u7eed\u5bf9\u8fd9\u4e2avolatile\u57df\u7684\u8bfb\u3002"}),"\n",(0,l.jsx)(e.li,{children:"\u4f20\u9012\u6027\uff1a\u5982\u679cA happens-before B\uff0c\u4e14B happens-before C\uff0c\u90a3\u4e48A happens-beforeC\u3002"}),"\n",(0,l.jsx)(e.li,{children:"start()\u89c4\u5219\uff1a\u5982\u679c\u7ebf\u7a0bA\u6267\u884c\u64cd\u4f5cThreadB.start()\uff08\u542f\u52a8\u7ebf\u7a0bB\uff09\uff0c\u90a3\u4e48A\u7ebf\u7a0b\u7684ThreadB.start()\u64cd\u4f5chappens-before\u4e8e\u7ebf\u7a0bB\u4e2d\u7684\u4efb\u610f\u64cd\u4f5c\u3002"}),"\n",(0,l.jsx)(e.li,{children:"join()\u89c4\u5219\uff1a\u5982\u679c\u7ebf\u7a0bA\u6267\u884c\u64cd\u4f5cThreadB. join()\u5e76\u6210\u529f\u8fd4\u56de\uff0c\u90a3\u4e48\u7ebf\u7a0bB\u4e2d\u7684\u4efb\u610f\u64cd\u4f5chappens-before\u4e8e\u7ebf\u7a0bA\u4eceThreadB. join()\u64cd\u4f5c\u6210\u529f\u8fd4\u56de\u3002"}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.img,{src:"https://s2.loli.net/2023/07/15/rsJXG6e4DhLjVmW.png",alt:""})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"1 happens-before 2\u548c3 happens-before 4\u7531\u7a0b\u5e8f\u987a\u5e8f\u89c4\u5219\u4ea7\u751f\u3002\u7531\u4e8e\u7f16\u8bd1\u5668\u548c\u5904\u7406\u5668\u90fd\u8981\u9075\u5b88as-if-serial\u8bed\u4e49\uff0c\u4e5f\u5c31\u662f\u8bf4\uff0cas-if-serial\n\u8bed\u4e49\u4fdd\u8bc1\u4e86\u7a0b\u5e8f\u987a\u5e8f\u89c4\u5219\u3002\u56e0\u6b64\uff0c\u53ef\u4ee5\u628a\u7a0b\u5e8f\u987a\u5e8f\u89c4\u5219\u770b\u6210\u662f\u5bf9as-if-serial\u8bed\u4e49\u7684\u201c\u5c01\u88c5\u201d\u3002"}),"\n",(0,l.jsx)(e.li,{children:"2 happens-before 3\u662f\u7531volatile\u89c4\u5219\u4ea7\u751f\u3002\u524d\u9762\u63d0\u5230\u8fc7\uff0c\u5bf9\u4e00\u4e2avolatile\u53d8\u91cf\u7684\u8bfb\uff0c\u603b\u662f\u80fd\u770b\u5230\uff08\u4efb\u610f\u7ebf\u7a0b\uff09\u4e4b\u524d\u5bf9\u8fd9\u4e2avolatile\u53d8\u91cf\u6700\u540e\u7684\u5199\u5165\u3002\u56e0\u6b64\uff0cvolatile\n\u7684\u8fd9\u4e2a\u7279\u6027\u53ef\u4ee5\u4fdd\u8bc1\u5b9e\u73b0volatile\u89c4\u5219\u3002"}),"\n",(0,l.jsx)(e.li,{children:"1 happens-before 4\u662f\u7531\u4f20\u9012\u6027\u89c4\u5219\u4ea7\u751f\u7684\u3002\u8fd9\u91cc\u7684\u4f20\u9012\u6027\u662f\u7531volatile\u7684\u5185\u5b58\u5c4f\u969c\u63d2\u5165\u7b56\u7565\u548cvolatile\u7684\u7f16\u8bd1\u5668\u91cd\u6392\u5e8f\u89c4\u5219\u5171\u540c\u6765\u4fdd\u8bc1\u7684\u3002"}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"\u591a\u7ebf\u7a0b\u5e76\u53d1\u521d\u59cb\u5316\u5bf9\u8c61\u53ef\u80fd\u53d1\u751f\u6307\u4ee4\u91cd\u6392",children:"\u591a\u7ebf\u7a0b\u5e76\u53d1\u521d\u59cb\u5316\u5bf9\u8c61\u53ef\u80fd\u53d1\u751f\u6307\u4ee4\u91cd\u6392"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.img,{src:"https://s2.loli.net/2023/07/15/mHqVA9pQaDjPr8Y.png",alt:""})}),"\n",(0,l.jsx)(e.hr,{}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.img,{src:"https://s2.loli.net/2023/07/15/639NJO2xdsTVtjl.png",alt:""})}),"\n",(0,l.jsx)(e.hr,{}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.img,{src:"https://s2.loli.net/2023/07/15/u1TI87E4Xj3ROeq.png",alt:""})}),"\n",(0,l.jsx)(e.p,{children:"\u8fd9\u91ccA2\u548cA3\u867d\u7136\u91cd\u6392\u5e8f\u4e86\uff0c\u4f46Java\u5185\u5b58\u6a21\u578b\u7684intra-thread semantics\u5c06\u786e\u4fddA2\u4e00\u5b9a\u4f1a\u6392\u5728A4\u524d\u9762\u6267\u884c\u3002\u56e0\u6b64\uff0c\u7ebf\u7a0bA\u7684intra-thread semantics\u6ca1\u6709\u6539\u53d8\uff0c\u4f46A2\u548cA3\u7684\u91cd\u6392\u5e8f\uff0c\u5c06\u5bfc\u81f4\u7ebf\u7a0bB\u5728B1\u5904\u5224\u65ad\u51fainstance\u4e0d\u4e3a\u7a7a\uff0c\u7ebf\u7a0bB\u63a5\u4e0b\u6765\u5c06\u8bbf\u95eeinstance\u5f15\u7528\u7684\u5bf9\u8c61\u3002\u6b64\u65f6\uff0c\u7ebf\u7a0bB\u5c06\u4f1a\u8bbf\u95ee\u5230\u4e00\u4e2a\u8fd8\u672a\u521d\u59cb\u5316\u7684\u5bf9\u8c61\u3002"}),"\n",(0,l.jsx)(e.p,{children:"\u5728\u77e5\u6653\u4e86\u95ee\u9898\u53d1\u751f\u7684\u6839\u6e90\u4e4b\u540e\uff0c\u6211\u4eec\u53ef\u4ee5\u60f3\u51fa\u4e24\u4e2a\u529e\u6cd5\u6765\u5b9e\u73b0\u7ebf\u7a0b\u5b89\u5168\u7684\u5ef6\u8fdf\u521d\u59cb\u5316\u3002"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u4e0d\u5141\u8bb82\u548c3\u91cd\u6392\u5e8f\u3002"}),"\n",(0,l.jsx)(e.li,{children:"\u5141\u8bb82\u548c3\u91cd\u6392\u5e8f\uff0c\u4f46\u4e0d\u5141\u8bb8\u5176\u4ed6\u7ebf\u7a0b\u201c\u770b\u5230\u201d\u8fd9\u4e2a\u91cd\u6392\u5e8f\u3002"}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:"\u57fa\u4e8evolatile\u7684\u89e3\u51b3\u65b9\u6848"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.img,{src:"https://s2.loli.net/2023/07/15/dM7BZy5VlzsCkhf.png",alt:""})}),"\n",(0,l.jsx)(e.hr,{}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.img,{src:"https://s2.loli.net/2023/07/15/z3orwgqmWOtPGvh.png",alt:""})}),"\n",(0,l.jsx)(e.p,{children:"\u8fd9\u4e2a\u65b9\u6848\u672c\u8d28\u4e0a\u662f\u901a\u8fc7\u7981\u6b62\u56fe3-39\u4e2d\u76842\u548c3\u4e4b\u95f4\u7684\u91cd\u6392\u5e8f\uff0c\u6765\u4fdd\u8bc1\u7ebf\u7a0b\u5b89\u5168\u7684\u5ef6\u8fdf\u521d\u59cb\u5316"}),"\n",(0,l.jsx)(e.p,{children:"\u57fa\u4e8e\u7c7b\u521d\u59cb\u5316\u7684\u89e3\u51b3\u65b9\u6848"}),"\n",(0,l.jsx)(e.p,{children:"\u5728\u6267\u884c\u7c7b\u7684\u521d\u59cb\u5316\u671f\u95f4\uff0cJVM\u4f1a\u53bb\u83b7\u53d6\u4e00\u4e2a\u9501\u3002\u8fd9\u4e2a\u9501\u53ef\u4ee5\u540c\u6b65\u591a\u4e2a\u7ebf\u7a0b\u5bf9\u540c\u4e00\u4e2a\u7c7b\u7684\u521d\u59cb\u5316\u3002"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.img,{src:"https://s2.loli.net/2023/07/15/zY19HbjsKWfNayV.png",alt:""})}),"\n",(0,l.jsx)(e.hr,{}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.img,{src:"https://s2.loli.net/2023/07/15/sCIdV7nUM9xitWr.png",alt:""})}),"\n",(0,l.jsx)(e.h2,{id:"\u5728\u9996\u6b21\u53d1\u751f\u4e0b\u5217\u4efb\u610f\u4e00\u79cd\u60c5\u51b5\u65f6\u4e00\u4e2a\u7c7b\u6216\u63a5\u53e3\u7c7b\u578bt\u5c06\u88ab\u7acb\u5373\u521d\u59cb\u5316",children:"\u5728\u9996\u6b21\u53d1\u751f\u4e0b\u5217\u4efb\u610f\u4e00\u79cd\u60c5\u51b5\u65f6\uff0c\u4e00\u4e2a\u7c7b\u6216\u63a5\u53e3\u7c7b\u578bT\u5c06\u88ab\u7acb\u5373\u521d\u59cb\u5316"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"T\u662f\u4e00\u4e2a\u7c7b\uff0c\u800c\u4e14\u4e00\u4e2aT\u7c7b\u578b\u7684\u5b9e\u4f8b\u88ab\u521b\u5efa\u3002"}),"\n",(0,l.jsx)(e.li,{children:"T\u662f\u4e00\u4e2a\u7c7b\uff0c\u4e14T\u4e2d\u58f0\u660e\u7684\u4e00\u4e2a\u9759\u6001\u65b9\u6cd5\u88ab\u8c03\u7528\u3002"}),"\n",(0,l.jsx)(e.li,{children:"T\u4e2d\u58f0\u660e\u7684\u4e00\u4e2a\u9759\u6001\u5b57\u6bb5\u88ab\u8d4b\u503c\u3002"}),"\n",(0,l.jsx)(e.li,{children:"T\u4e2d\u58f0\u660e\u7684\u4e00\u4e2a\u9759\u6001\u5b57\u6bb5\u88ab\u4f7f\u7528\uff0c\u800c\u4e14\u8fd9\u4e2a\u5b57\u6bb5\u4e0d\u662f\u4e00\u4e2a\u5e38\u91cf\u5b57\u6bb5\u3002"}),"\n",(0,l.jsx)(e.li,{children:"T\u662f\u4e00\u4e2a\u9876\u7ea7\u7c7b\uff08Top Level Class\uff0c\u89c1Java\u8bed\u8a00\u89c4\u8303\u7684\xa77.6\uff09\uff0c\u800c\u4e14\u4e00\u4e2a\u65ad\u8a00\u8bed\u53e5\u5d4c\u5957\u5728T\u5185\u90e8\u88ab\u6267\u884c\u3002"}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"\u7c7b\u521d\u59cb\u5316\u8fc7\u7a0b",children:"\u7c7b\u521d\u59cb\u5316\u8fc7\u7a0b"}),"\n",(0,l.jsx)(e.p,{children:"\u7b2c1\u9636\u6bb5\uff1a\u901a\u8fc7\u5728Class\u5bf9\u8c61\u4e0a\u540c\u6b65\uff08\u5373\u83b7\u53d6Class\u5bf9\u8c61\u7684\u521d\u59cb\u5316\u9501\uff09\uff0c\u6765\u63a7\u5236\u7c7b\u6216\u63a5\u53e3\u7684\u521d\u59cb\u5316\u3002\u8fd9\u4e2a\u83b7\u53d6\u9501\u7684\u7ebf\u7a0b\u4f1a\u4e00\u76f4\u7b49\u5f85\uff0c\u76f4\u5230\u5f53\u524d\u7ebf\u7a0b\u80fd\u591f\u83b7\u53d6\u5230\u8fd9\u4e2a\u521d\u59cb\u5316\u9501\u3002"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.img,{src:"https://s2.loli.net/2023/07/15/EOH2Yjmk5G9buqy.png",alt:""})}),"\n",(0,l.jsx)(e.hr,{}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.img,{src:"https://s2.loli.net/2023/07/15/6kCQf31gUr9vRLE.png",alt:""})}),"\n",(0,l.jsx)(e.p,{children:"\u7b2c2\u9636\u6bb5\uff1a\u7ebf\u7a0bA\u6267\u884c\u7c7b\u7684\u521d\u59cb\u5316\uff0c\u540c\u65f6\u7ebf\u7a0bB\u5728\u521d\u59cb\u5316\u9501\u5bf9\u5e94\u7684condition\u4e0a\u7b49\u5f85\u3002"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.img,{src:"https://s2.loli.net/2023/07/15/pQNSUy7f6TRHa42.png",alt:""})}),"\n",(0,l.jsx)(e.hr,{}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.img,{src:"https://s2.loli.net/2023/07/15/dDaWkJe7LIwYEOs.png",alt:""})}),"\n",(0,l.jsx)(e.p,{children:"\u7b2c3\u9636\u6bb5\uff1a\u7ebf\u7a0bA\u8bbe\u7f6estate=initialized\uff0c\u7136\u540e\u5524\u9192\u5728condition\u4e2d\u7b49\u5f85\u7684\u6240\u6709\u7ebf\u7a0b\u3002"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.img,{src:"https://s2.loli.net/2023/07/15/6DeqC9QUvHIzfkw.png",alt:""})}),"\n",(0,l.jsx)(e.hr,{}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.img,{src:"https://s2.loli.net/2023/07/15/kK7IjBDOGTr56co.png",alt:""})}),"\n",(0,l.jsx)(e.p,{children:"\u7b2c4\u9636\u6bb5\uff1a\u7ebf\u7a0bB\u7ed3\u675f\u7c7b\u7684\u521d\u59cb\u5316\u5904\u7406\u3002"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.img,{src:"https://s2.loli.net/2023/07/15/hUYNfDTKIspRQOM.png",alt:""})}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.img,{src:"https://s2.loli.net/2023/07/15/B5ceYPOi2bCJ1GM.png",alt:""})}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.img,{src:"https://s2.loli.net/2023/07/15/ZyfwU7qXLEbdYG6.png",alt:""})}),"\n",(0,l.jsx)(e.p,{children:"\u7ebf\u7a0bA\u5728\u7b2c2\u9636\u6bb5\u7684A1\u6267\u884c\u7c7b\u7684\u521d\u59cb\u5316\uff0c\u5e76\u5728\u7b2c3\u9636\u6bb5\u7684A4\u91ca\u653e\u521d\u59cb\u5316\u9501\uff1b\u7ebf\u7a0bB\u5728\u7b2c4\u9636\u6bb5\u7684B1\u83b7\u53d6\u540c\u4e00\u4e2a\u521d\u59cb\u5316\u9501\uff0c\u5e76\u5728\u7b2c4\u9636\u6bb5\u7684B4\u4e4b\u540e\u624d\u5f00\u59cb\u8bbf\u95ee\u8fd9\u4e2a\u7c7b\u3002\u6839\u636eJava\u5185\u5b58\u6a21\u578b\u89c4\u8303\u7684\u9501\u89c4\u5219\uff0c\u8fd9\u91cc\u5c06\u5b58\u5728\u5982\u4e0b\u7684happens-before\u5173\u7cfb\u3002\u8fd9\u4e2ahappens-before\u5173\u7cfb\u5c06\u4fdd\u8bc1\uff1a\u7ebf\u7a0bA\u6267\u884c\u7c7b\u7684\u521d\u59cb\u5316\u65f6\u7684\u5199\u5165\u64cd\u4f5c\uff08\u6267\u884c\u7c7b\u7684\u9759\u6001\u521d\u59cb\u5316\u548c\u521d\u59cb\u5316\u7c7b\u4e2d\u58f0\u660e\u7684\u9759\u6001\u5b57\u6bb5\uff09\uff0c\u7ebf\u7a0bB\u4e00\u5b9a\u80fd\u770b\u5230\u3002\n\u7b2c5\u9636\u6bb5\uff1a\u7ebf\u7a0bC\u6267\u884c\u7c7b\u7684\u521d\u59cb\u5316\u7684\u5904\u7406\u3002"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.img,{src:"https://s2.loli.net/2023/07/15/woPNqEJTh4durWi.png",alt:""})}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.img,{src:"https://s2.loli.net/2023/07/15/cW9SGadHkCsyOuv.png",alt:""})}),"\n",(0,l.jsx)(e.p,{children:"\u5728\u7b2c3\u9636\u6bb5\u4e4b\u540e\uff0c\u7c7b\u5df2\u7ecf\u5b8c\u6210\u4e86\u521d\u59cb\u5316\u3002\u56e0\u6b64\u7ebf\u7a0bC\u5728\u7b2c5\u9636\u6bb5\u7684\u7c7b\u521d\u59cb\u5316\u5904\u7406\u8fc7\u7a0b\u76f8\u5bf9\u7b80\u5355\u4e00\u4e9b\uff08\u524d\u9762\u7684\u7ebf\u7a0bA\u548cB\u7684\u7c7b\u521d\u59cb\u5316\u5904\u7406\u8fc7\u7a0b\u90fd\u7ecf\u5386\u4e86\u4e24\u6b21\u9501\u83b7\u53d6-\u9501\u91ca\u653e\uff0c\u800c\u7ebf\u7a0bC\u7684\u7c7b\u521d\u59cb\u5316\u5904\u7406\u53ea\u9700\u8981\u7ecf\u5386\u4e00\u6b21\u9501\u83b7\u53d6-\u9501\u91ca\u653e\uff09\u3002\u7ebf\u7a0bA\u5728\u7b2c2\u9636\u6bb5\u7684A1\u6267\u884c\u7c7b\u7684\u521d\u59cb\u5316\uff0c\u5e76\u5728\u7b2c3\u9636\u6bb5\u7684A4\u91ca\u653e\u9501\uff1b\u7ebf\u7a0bC\u5728\u7b2c5\u9636\u6bb5\u7684C1\u83b7\u53d6\u540c\u4e00\u4e2a\u9501\uff0c\u5e76\u5728\u5728\u7b2c5\u9636\u6bb5\u7684C4\u4e4b\u540e\u624d\u5f00\u59cb\u8bbf\u95ee\u8fd9\u4e2a\u7c7b\u3002\u6839\u636eJava\u5185\u5b58\u6a21\u578b\u89c4\u8303\u7684\u9501\u89c4\u5219\uff0c\u5c06\u5b58\u5728\u5982\u4e0b\u7684happens-before\u5173\u7cfb\u3002"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.img,{src:"https://s2.loli.net/2023/07/15/uYt43fMHphDIbPd.png",alt:""})}),"\n",(0,l.jsx)(e.p,{children:"\u901a\u8fc7\u5bf9\u6bd4\u57fa\u4e8evolatile\u7684\u53cc\u91cd\u68c0\u67e5\u9501\u5b9a\u7684\u65b9\u6848\u548c\u57fa\u4e8e\u7c7b\u521d\u59cb\u5316\u7684\u65b9\u6848\uff0c\u6211\u4eec\u4f1a\u53d1\u73b0\u57fa\u4e8e\u7c7b\u521d\u59cb\u5316\u7684\u65b9\u6848\u7684\u5b9e\u73b0\u4ee3\u7801\u66f4\u7b80\u6d01\u3002\u4f46\u57fa\u4e8evolatile\u7684\u53cc\u91cd\u68c0\u67e5\u9501\u5b9a\u7684\u65b9\u6848\u6709\u4e00\u4e2a\u989d\u5916\u7684\u4f18\u52bf\uff1a\u9664\u4e86\u53ef\u4ee5\u5bf9\u9759\u6001\u5b57\u6bb5\u5b9e\u73b0\u5ef6\u8fdf\u521d\u59cb\u5316\u5916\uff0c\u8fd8\u53ef\u4ee5\u5bf9\u5b9e\u4f8b\u5b57\u6bb5\u5b9e\u73b0\u5ef6\u8fdf\u521d\u59cb\u5316\u3002"}),"\n",(0,l.jsx)(e.p,{children:"\u5b57\u6bb5\u5ef6\u8fdf\u521d\u59cb\u5316\u964d\u4f4e\u4e86\u521d\u59cb\u5316\u7c7b\u6216\u521b\u5efa\u5b9e\u4f8b\u7684\u5f00\u9500\uff0c\u4f46\u589e\u52a0\u4e86\u8bbf\u95ee\u88ab\u5ef6\u8fdf\u521d\u59cb\u5316\u7684\u5b57\u6bb5\u7684\u5f00\u9500\u3002\u5728\u5927\u591a\u6570\u65f6\u5019\uff0c\u6b63\u5e38\u7684\u521d\u59cb\u5316\u8981\u4f18\u4e8e\u5ef6\u8fdf\u521d\u59cb\u5316\u3002\u5982\u679c\u786e\u5b9e\u9700\u8981\u5bf9\u5b9e\u4f8b\u5b57\u6bb5\u4f7f\u7528\u7ebf\u7a0b\u5b89\u5168\u7684\u5ef6\u8fdf\u521d\u59cb\u5316\uff0c\u8bf7\u4f7f\u7528\u4e0a\u9762\u4ecb\u7ecd\u7684\u57fa\u4e8evolatile\u7684\u5ef6\u8fdf\u521d\u59cb\u5316\u7684\u65b9\u6848\uff1b\u5982\u679c\u786e\u5b9e\u9700\u8981\u5bf9\u9759\u6001\u5b57\u6bb5\u4f7f\u7528\u7ebf\u7a0b\u5b89\u5168\u7684\u5ef6\u8fdf\u521d\u59cb\u5316\uff0c\u8bf7\u4f7f\u7528\u4e0a\u9762\u4ecb\u7ecd\u7684\u57fa\u4e8e\u7c7b\u521d\u59cb\u5316\u7684\u65b9\u6848\u3002"}),"\n",(0,l.jsxs)(e.blockquote,{children:["\n",(0,l.jsx)(e.p,{children:"\u53c2\u8003\u8d44\u6599"}),"\n",(0,l.jsxs)(e.ol,{children:["\n",(0,l.jsx)(e.li,{children:"\u4e66\u7c4d\u540d\u79f0\uff1a\u300ajava\u5e76\u53d1\u7f16\u7a0b\u7684\u827a\u672f\u300b \u4f5c\u8005\uff1a\u65b9\u817e\u98de \u9b4f\u9e4f \u7a0b\u6653\u660e"}),"\n"]}),"\n"]})]})}function c(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(o,{...n})}):o(n)}},1151:(n,e,s)=>{s.d(e,{Z:()=>a,a:()=>t});var l=s(7294);const i={},r=l.createContext(i);function t(n){const e=l.useContext(r);return l.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:t(n.components),l.createElement(r.Provider,{value:e},n.children)}}}]);