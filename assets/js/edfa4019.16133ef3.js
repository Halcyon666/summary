"use strict";(self.webpackChunksummary=self.webpackChunksummary||[]).push([[7084],{282:(n,e,l)=>{l.r(e),l.d(e,{assets:()=>o,contentTitle:()=>t,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>a});var i=l(1527),s=l(7701);const r={title:"volatile\u57df\u5185\u5b58\u77e5\u8bc6",sidebar_position:1,sidebar_label:"volatile\u57df\u5185\u5b58\u77e5\u8bc6"},t=void 0,c={id:"Java/ConcurrentAndJVM/volatile memory domain",title:"volatile\u57df\u5185\u5b58\u77e5\u8bc6",description:"\u5982\u4f55\u51cf\u5c11cpu\u4e0a\u4e0b\u6587\u5207\u6362",source:"@site/docs/01-Java/05-ConcurrentAndJVM/volatile memory domain.mdx",sourceDirName:"01-Java/05-ConcurrentAndJVM",slug:"/Java/ConcurrentAndJVM/volatile memory domain",permalink:"/Java/ConcurrentAndJVM/volatile memory domain",draft:!1,unlisted:!1,editUrl:"https://github.com/Halcyon666/summary/edit/main/docs/01-Java/05-ConcurrentAndJVM/volatile memory domain.mdx",tags:[],version:"current",lastUpdatedAt:1709650790,formattedLastUpdatedAt:"2024\u5e743\u67085\u65e5",sidebarPosition:1,frontMatter:{title:"volatile\u57df\u5185\u5b58\u77e5\u8bc6",sidebar_position:1,sidebar_label:"volatile\u57df\u5185\u5b58\u77e5\u8bc6"},sidebar:"tutorialSidebar",previous:{title:"java \u9762\u8bd5\u98982",permalink:"/Java/Interview/Java-Case-Interview-two"},next:{title:"final\u57df\u5185\u5b58\u77e5\u8bc6",permalink:"/Java/ConcurrentAndJVM/final memory domain"}},o={},a=[{value:"\u5982\u4f55\u51cf\u5c11cpu\u4e0a\u4e0b\u6587\u5207\u6362",id:"\u5982\u4f55\u51cf\u5c11cpu\u4e0a\u4e0b\u6587\u5207\u6362",level:2},{value:"volatile\u548csynchronized",id:"volatile\u548csynchronized",level:2},{value:"cpu\u5982\u4f55\u4fdd\u8bc1\u539f\u5b50\u6027",id:"cpu\u5982\u4f55\u4fdd\u8bc1\u539f\u5b50\u6027",level:2},{value:"\u4ee5\u4f55\u79cd\u673a\u5236\u6765\u4ea4\u6362\u4fe1\u606f",id:"\u4ee5\u4f55\u79cd\u673a\u5236\u6765\u4ea4\u6362\u4fe1\u606f",level:2},{value:"\u6307\u4ee4\u91cd\u6392\u5e8f",id:"\u6307\u4ee4\u91cd\u6392\u5e8f",level:2},{value:"\u5e76\u53d1\u7f16\u7a0b\u6a21\u578b\u5206\u7c7b",id:"\u5e76\u53d1\u7f16\u7a0b\u6a21\u578b\u5206\u7c7b",level:2},{value:"happens-before",id:"happens-before",level:2},{value:"\u987a\u5e8f\u4e00\u81f4\u6027\u6a21\u578b",id:"\u987a\u5e8f\u4e00\u81f4\u6027\u6a21\u578b",level:2},{value:"CPU\u603b\u7ebf\u4e8b\u52a1",id:"cpu\u603b\u7ebf\u4e8b\u52a1",level:2},{value:"volatile\u7279\u70b9",id:"volatile\u7279\u70b9",level:2},{value:"volatile\u91cd\u6392\u5e8f\u89c4\u5219\u8868",id:"volatile\u91cd\u6392\u5e8f\u89c4\u5219\u8868",level:2},{value:"JMM\u63d2\u5165\u5185\u5b58\u5c4f\u969c\u6765\u7981\u6b62\u7279\u5b9a\u7c7b\u578b\u7684\u5904\u7406\u5668\u91cd\u6392\u5e8f",id:"jmm\u63d2\u5165\u5185\u5b58\u5c4f\u969c\u6765\u7981\u6b62\u7279\u5b9a\u7c7b\u578b\u7684\u5904\u7406\u5668\u91cd\u6392\u5e8f",level:2},{value:"ReentrantLock \u4e2d\u516c\u5e73\u9501\u548c\u975e\u516c\u5e73\u9501\u5185\u5b58\u8bed\u4e49",id:"reentrantlock-\u4e2d\u516c\u5e73\u9501\u548c\u975e\u516c\u5e73\u9501\u5185\u5b58\u8bed\u4e49",level:2},{value:"concurrent\u5305\u5b9e\u73b0\u793a\u610f\u56fe",id:"concurrent\u5305\u5b9e\u73b0\u793a\u610f\u56fe",level:2}];function d(n){const e={a:"a",admonition:"admonition",blockquote:"blockquote",h2:"h2",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h2,{id:"\u5982\u4f55\u51cf\u5c11cpu\u4e0a\u4e0b\u6587\u5207\u6362",children:"\u5982\u4f55\u51cf\u5c11cpu\u4e0a\u4e0b\u6587\u5207\u6362"}),"\n",(0,i.jsx)(e.p,{children:"\u907f\u514d\u4f7f\u7528\u9501\uff1a\u65e0\u9501\u5e76\u53d1\u7f16\u7a0b\uff0c\u591a\u7ebf\u7a0b\u7ade\u4e89\u9501\u65f6\uff0c\u4f1a\u5f15\u8d77\u4e0a\u4e0b\u95ee\u6587\u5207\u6362\uff0c\u6240\u4ee5\u591a\u7ebf\u7a0b\u5904\u7406\u65f6\uff0c\u53ef\u4ee5\u7528\u4e00\u4e9b\u529e\u6cd5\u6765\u907f\u514d\u4f7f\u7528\u9501\uff0c\u5982\u5c06\u6570\u636e\u7684ID\u6309\u7167Hash\u7b97\u6cd5\u53d6\u6a21\u5206\u6bb5\uff0c\u4e0d\u540c\u7684\u7ebf\u7a0b\u5904\u7406\u4e0d\u540c\u6bb5\u7684\u6570\u636e"}),"\n",(0,i.jsx)(e.p,{children:"CAS\u7b97\u6cd5\uff1ajava\u7684atomic\u5305\u4f7f\u7528CAS\u7b97\u6cd5\u6765\u66f4\u65b0\u6570\u636e\uff0c\u800c\u4e0d\u9700\u8981\u52a0\u9501"}),"\n",(0,i.jsx)(e.p,{children:"\u4f7f\u7528\u6700\u5c11\u7ebf\u7a0b\uff1a\u907f\u514d\u521b\u5efa\u4e0d\u9700\u8981\u7684\u7ebf\u7a0b\uff0c\u6bd4\u5982\u4efb\u52a1\u5f88\u5c11\uff0c\u4f46\u662f\u521b\u5efa\u4e86\u5f88\u591a\u7ebf\u7a0b\u6765\u5904\u7406\uff0c\u8fd9\u6837\u4f1a\u9020\u6210\u5927\u91cf\u7ebf\u7a0b\u90fd\u5904\u4e8e\u7b49\u5f85\u72b6\u6001"}),"\n",(0,i.jsx)(e.p,{children:"\u534f\u7a0b\uff1a\u5728\u5355\u7ebf\u7a0b\u91cc\u5b9e\u73b0\u591a\u4efb\u52a1\u7684\u8c03\u5ea6\uff0c\u5e76\u5728\u5355\u7ebf\u7a0b\u91cc\u7ef4\u6301\u591a\u4e2a\u4efb\u52a1\u95f4\u7684\u5207\u6362\u3002"}),"\n",(0,i.jsx)(e.h2,{id:"volatile\u548csynchronized",children:"volatile\u548csynchronized"}),"\n",(0,i.jsx)(e.p,{children:"\u5982\u679cvolatile\u53d8\u91cf\u4fee\u9970\u7b26\u4f7f\u7528\u6070\u5f53\u7684\u8bdd\uff0c\u5b83\u6bd4synchronized\u7684\u4f7f\u7528\u548c\u6267\u884c\u6210\u672c\u66f4\u4f4e\uff0c\u56e0\u4e3a\u5b83\u4e0d\u4f1a\u5f15\u8d77\u7ebf\u7a0b\u4e0a\u4e0b\u6587\u7684\u5207\u6362\u548c\u8c03\u5ea6\u3002"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{src:"https://s2.loli.net/2023/07/15/QE9kipnKDcVxP7o.png",alt:""})}),"\n",(0,i.jsx)(e.p,{children:"\u5982\u679c\u5bf9\u58f0\u660e\u4e86volatile\u7684\u53d8\u91cf\u8fdb\u884c\u5199\u64cd\u4f5c\uff0cJVM\u5c31\u4f1a\u5411\u5904\u7406\u5668\u53d1\u9001\u4e00\u6761Lock\u524d\u7f00\u7684\u6307\u4ee4\uff0c\u5c06\u8fd9\u4e2a\u53d8\u91cf\u6240\u5728\u7f13\u5b58\u884c\u7684\u6570\u636e\u5199\u56de\u5230\u7cfb\u7edf\u5185\u5b58"}),"\n",(0,i.jsx)(e.p,{children:"\u6bcf\u4e2a\u5904\u7406\u5668\u901a\u8fc7\u55c5\u63a2\u5728\u603b\u7ebf\u4e0a\u4f20\u64ad\u7684\u6570\u636e\u6765\u68c0\u67e5\u81ea\u5df1\u7f13\u5b58\u7684\u503c\u662f\u4e0d\u662f\u8fc7\u671f\u4e86\uff0c\u5f53\u5904\u7406\u5668\u53d1\u73b0\u81ea\u5df1\u7f13\u5b58\u884c\u5bf9\u5e94\u7684\u5185\u5b58\u5730\u5740\u88ab\u4fee\u6539\uff0c\u5c31\u4f1a\u5c06\u5f53\u524d\u5904\u7406\u5668\u7684\u7f13\u5b58\u884c\u8bbe\u7f6e\u6210\u65e0\u6548\u72b6\u6001\uff0c\u5f53\u5904\u7406\u5668\u5bf9\u8fd9\u4e2a\u6570\u636e\u8fdb\u884c\u4fee\u6539\u64cd\u4f5c\u7684\u65f6\u5019\uff0c\u4f1a\u91cd\u65b0\u4ece\u7cfb\u7edf\u5185\u5b58\u4e2d\u628a\u6570\u636e\u8bfb\u5230\u5904\u7406\u5668\u7f13\u5b58\u91cc\u3002"}),"\n",(0,i.jsx)(e.p,{children:"volatile\u5b9e\u73b0\u539f\u5219"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Lock\u524d\u7f00\u6307\u4ee4\u4f1a\u5f15\u8d77\u5904\u7406\u5668\u7f13\u5b58\u56de\u5199\u5230\u5185\u5b58\u3002Lock\u524d\u7f00\u6307\u4ee4\u5bfc\u81f4\u5728\u6267\u884c\u6307\u4ee4\u671f\u95f4\uff0c\u58f0\u8a00\u5904\u7406\u5668\u7684LOCK#\u4fe1\u53f7\u3002\u5728\u591a\u5904\u7406\u5668\u73af\u5883\u4e2d\uff0cLOCK#\u4fe1\u53f7\u786e\u4fdd\u5728\u58f0\u8a00\u8be5\u4fe1\u53f7\u671f\u95f4\uff0c\u5904\u7406\u5668\u53ef\u4ee5\u72ec\u5360\u4efb\u4f55\u5171\u4eab\u5185\u5b58\u3002\u4f46\u662f\uff0c\u5728\u6700\u8fd1\u7684\u5904\u7406\u5668\u91cc\uff0cLOCK#\u4fe1\u53f7\u4e00\u822c\u4e0d\u9501\u603b\u7ebf\uff0c\u800c\u662f\u9501\u7f13\u5b58\uff0c\u6bd5\u7adf\u9501\u603b\u7ebf\u5f00\u9500\u7684\u6bd4\u8f83\u5927\u3002"}),"\n",(0,i.jsx)(e.li,{children:"\u4e00\u4e2a\u5904\u7406\u5668\u7684\u7f13\u5b58\u56de\u5199\u5230\u5185\u5b58\u4f1a\u5bfc\u81f4\u5176\u4ed6\u5904\u7406\u5668\u7684\u7f13\u5b58\u65e0\u6548\u3002IA-32\u5904\u7406\u5668\u548cIntel 64\u5904\u7406\u5668\u4f7f\u7528MESI\uff08\u4fee\u6539\u3001\u72ec\u5360\u3001\u5171\u4eab\u3001\u65e0\u6548\uff09\u63a7\u5236\u534f\u8bae\u53bb\u7ef4\u62a4\u5185\u90e8\u7f13\u5b58\u548c\u5176\u4ed6\u5904\u7406\u5668\u7f13\u5b58\u7684\u4e00\u81f4\u6027"}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"jdk 7\u8ffd\u52a0\u5b57\u8282\u4f18\u5316\u6027\u80fd"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u5c06\u5171\u4eab\u53d8\u91cf\u8ffd\u52a0\u523064\u5b57\u8282\u3002\u4e00\u4e9b\u5904\u7406\u5668\u4e0d\u652f\u6301\u90e8\u5206\u586b\u5145\u7f13\u5b58\u884c\uff0c\u5982\u679c\u961f\u5217\u5934\u8282\u70b9\u548c\u5c3e\u8282\u70b9\u90fd\u4e0d\u8db364\u5b57\u8282\u7684\u8bdd\uff0c\u5904\u7406\u5668\u4f1a\u5c06\u4ed6\u4eec\u8bfb\u5230\u540c\u4e00\u4e2a\u9ad8\u901f\u7f13\u5b58\u884c\u4e2d\uff0c\u5728\u591a\u5904\u7406\u5668\u4e0b\u6bcf\u4e2a\u5904\u7406\u5668\u90fd\u4f1a\u7f13\u5b58\u540c\u6837\u7684\u5934\u3001\u5c3e\u8282\u70b9\uff0c\u5f53\u4e00\u4e2a\u5904\u7406\u5668\u8bd5\u56fe\u4fee\u6539\u5934\u8282\u70b9\u65f6\uff0c\u4f1a\u5c06\u6574\u4e2a\u7f13\u5b58\u884c\u9501\u5b9a\uff0c\u90a3\u4e48\u5728\u7f13\u5b58\u4e00\u81f4\u6027\u673a\u5236\u7684\u4f5c\u7528\u4e0b\uff0c\u4f1a\u5bfc\u81f4\u5176\u4ed6\u5904\u7406\u5668\u4e0d\u80fd\u8bbf\u95ee\u81ea\u5df1\u9ad8\u901f\u7f13\u5b58\u4e2d\u7684\u5c3e\u8282\u70b9\uff0c\u800c\u961f\u5217\u7684\u5165\u961f\u548c\u51fa\u961f\u64cd\u4f5c\u5219\u9700\u8981\u4e0d\u505c\u4fee\u6539\u5934\u8282\u70b9\u548c\u5c3e\u8282\u70b9\uff0c\u6240\u4ee5\u5728\u591a\u5904\u7406\u5668\u7684\u60c5\u51b5\u4e0b\u5c06\u4f1a\u4e25\u91cd\u5f71\u54cd\u5230\u961f\u5217\u7684\u5165\u961f\u548c\u51fa\u961f\u6548\u7387\u3002Doug lea\u4f7f\u7528\u8ffd\u52a0\u523064\u5b57\u8282\u7684\u65b9\u5f0f\u6765\u586b\u6ee1\u9ad8\u901f\u7f13\u51b2\u533a\u7684\u7f13\u5b58\u884c\uff0c\u907f\u514d\u5934\u8282\u70b9\u548c\u5c3e\u8282\u70b9\u52a0\u8f7d\u5230\u540c\u4e00\u4e2a\u7f13\u5b58\u884c\uff0c\u4f7f\u5934\u3001\u5c3e\u8282\u70b9\u5728\u4fee\u6539\u65f6\u4e0d\u4f1a\u4e92\u76f8\u9501\u5b9a\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u504f\u5411\u9501\uff1a\u5f53\u4e00\u4e2a\u7ebf\u7a0b\u8bbf\u95ee\u540c\u6b65\u5757\u5e76\u83b7\u53d6\u9501\u65f6\uff0c\u4f1a\u5728\u5bf9\u8c61\u5934\u548c\u6808\u5e27\u4e2d\u7684\u9501\u8bb0\u5f55\u91cc\u5b58\u50a8\u9501\u504f\u5411\u7684\u7ebf\u7a0bID\uff0c\u4ee5\u540e\u8be5\u7ebf\u7a0b\u5728\u8fdb\u5165\u548c\u9000\u51fa\u540c\u6b65\u5757\u65f6\u4e0d\u9700\u8981\u8fdb\u884cCAS\u64cd\u4f5c\u6765\u52a0\u9501\u548c\u89e3\u9501\uff0c\u53ea\u9700\u7b80\u5355\u5730\u6d4b\u8bd5\u4e00\u4e0b\u5bf9\u8c61\u5934\u7684Mark Word\n\u91cc\u662f\u5426\u5b58\u50a8\u7740\u6307\u5411\u5f53\u524d\u7ebf\u7a0b\u7684\u504f\u5411\u9501\u3002\u5982\u679c\u6d4b\u8bd5\u6210\u529f\uff0c\u8868\u793a\u7ebf\u7a0b\u5df2\u7ecf\u83b7\u5f97\u4e86\u9501\u3002\u5982\u679c\u6d4b\u8bd5\u5931\u8d25\uff0c\u5219\u9700\u8981\u518d\u6d4b\u8bd5\u4e00\u4e0bMark Word\u4e2d\u504f\u5411\u9501\u7684\u6807\u8bc6\u662f\u5426\u8bbe\u7f6e\u62101\uff08\u8868\u793a\u5f53\u524d\u662f\u504f\u5411\u9501\uff09\uff1a\u5982\u679c\u6ca1\u6709\u8bbe\u7f6e\uff0c\u5219\u4f7f\u7528CAS\u7ade\u4e89\u9501\uff1b\u5982\u679c\u8bbe\u7f6e\u4e86\uff0c\u5219\u5c1d\u8bd5\u4f7f\u7528CAS\u5c06\u5bf9\u8c61\u5934\u7684\u504f\u5411\u9501\u6307\u5411\u5f53\u524d\u7ebf\u7a0b\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u8f7b\u91cf\u7ea7\u9501\uff1a\u7ebf\u7a0b\u5728\u6267\u884c\u540c\u6b65\u5757\u4e4b\u524d\uff0cJVM\u4f1a\u5148\u5728\u5f53\u524d\u7ebf\u7a0b\u7684\u6808\u6862\u4e2d\u521b\u5efa\u7528\u4e8e\u5b58\u50a8\u9501\u8bb0\u5f55\u7684\u7a7a\u95f4\uff0c\u5e76\u5c06\u5bf9\u8c61\u5934\u4e2d\u7684Mark Word\u590d\u5236\u5230\u9501\u8bb0\u5f55\u4e2d\uff0c\u5b98\u65b9\u79f0\u4e3aDisplaced Mark Word\u3002\u7136\u540e\u7ebf\u7a0b\u5c1d\u8bd5\u4f7f\u7528CAS\u5c06\u5bf9\u8c61\u5934\u4e2d\u7684Mark\nWord\u66ff\u6362\u4e3a\u6307\u5411\u9501\u8bb0\u5f55\u7684\u6307\u9488\u3002\u5982\u679c\u6210\u529f\uff0c\u5f53\u524d\u7ebf\u7a0b\u83b7\u5f97\u9501\uff0c\u5982\u679c\u5931\u8d25\uff0c\u8868\u793a\u5176\u4ed6\u7ebf\u7a0b\u7ade\u4e89\u9501\uff0c\u5f53\u524d\u7ebf\u7a0b\u4fbf\u5c1d\u8bd5\u4f7f\u7528\u81ea\u65cb\u6765\u83b7\u53d6\u9501\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{src:"https://s2.loli.net/2023/07/15/AsOFLjqtH5xgbTQ.png",alt:""})}),"\n",(0,i.jsx)(e.h2,{id:"cpu\u5982\u4f55\u4fdd\u8bc1\u539f\u5b50\u6027",children:"cpu\u5982\u4f55\u4fdd\u8bc1\u539f\u5b50\u6027"}),"\n",(0,i.jsx)(e.p,{children:"\u603b\u7ebf\u9501\uff1a\u603b\u7ebf\u9501\u5c31\u662f\u4f7f\u7528\u5904\u7406\u5668\u63d0\u4f9b\u7684\u4e00\u4e2aLOCK#\u4fe1\u53f7\uff0c\u5f53\u4e00\u4e2a\u5904\u7406\u5668\u5728\u603b\u7ebf\u4e0a\u8f93\u51fa\u6b64\u4fe1\u53f7\u65f6\uff0c\u5176\u4ed6\u5904\u7406\u5668\u7684\u8bf7\u6c42\u5c06\u88ab\u963b\u585e\u4f4f\uff0c\u90a3\u4e48\u8be5\u5904\u7406\u5668\u53ef\u4ee5\u72ec\u5360\u5171\u4eab\u5185\u5b58\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u7f13\u5b58\u9501\uff1a\u6307\u5185\u5b58\u533a\u57df\u5982\u679c\u88ab\u7f13\u5b58\u5728\u5904\u7406\u5668\u7684\u7f13\u5b58\u884c\u4e2d\uff0c\u5e76\u4e14\u5728Lock\u64cd\u4f5c\u671f\u95f4\u88ab\u9501\u5b9a\uff0c\u90a3\u4e48\u5f53\u5b83\u6267\u884c\u9501\u64cd\u4f5c\u56de\u5199\u5230\u5185\u5b58\u65f6\uff0c\u5904\u7406\u5668\u4e0d\u5728\u603b\u7ebf\u4e0a\u58f0\u8a00LOCK#\u4fe1\u53f7\uff0c\u800c\u662f\u4fee\u6539\u5185\u90e8\u7684\u5185\u5b58\u5730\u5740\uff0c\u5e76\u5141\u8bb8\u5b83\u7684\u7f13\u5b58\u4e00\u81f4\u6027\u673a\u5236\u6765\u4fdd\u8bc1\u64cd\u4f5c\u7684\u539f\u5b50\u6027\uff0c\u56e0\u4e3a\u7f13\u5b58\u4e00\u81f4\u6027\u673a\u5236\u4f1a\u963b\u6b62\u540c\u65f6\u4fee\u6539\u7531\u4e24\u4e2a\u4ee5\u4e0a\u5904\u7406\u5668\u7f13\u5b58\u7684\u5185\u5b58\u533a\u57df\u6570\u636e\uff0c\u5f53\u5176\u4ed6\u5904\u7406\u5668\u56de\u5199\u5df2\u88ab\u9501\u5b9a\u7684\u7f13\u5b58\u884c\u7684\u6570\u636e\u65f6\uff0c\u4f1a\u4f7f\u7f13\u5b58\u884c\u65e0\u6548\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u4e24\u79cd\u60c5\u51b5\u4e0d\u4f1a\u4f7f\u7528\u7f13\u5b58\u9501"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7b2c\u4e00\u79cd\u60c5\u51b5\uff1a\u5f53\u64cd\u4f5c\u7684\u6570\u636e\u4e0d\u80fd\u88ab\u7f13\u5b58\u5728\u5904\u7406\u5668\u5185\u90e8\uff0c\u6216\u64cd\u4f5c\u7684\u6570\u636e\u8de8\u591a\u4e2a\u7f13\u5b58\u884c\uff08cache line\uff09\u65f6\uff0c\u5219\u5904\u7406\u5668\u4f1a\u8c03\u7528\u603b\u7ebf\u9501\u5b9a\u3002"}),"\n",(0,i.jsx)(e.li,{children:"\u7b2c\u4e8c\u79cd\u60c5\u51b5\uff1a\u6709\u4e9b\u5904\u7406\u5668\u4e0d\u652f\u6301\u7f13\u5b58\u9501\u5b9a\u3002\u5bf9\u4e8eIntel 486\u548cPentium\u5904\u7406\u5668\uff0c\u5c31\u7b97\u9501\u5b9a\u7684\u5185\u5b58\u533a\u57df\u5728\u5904\u7406\u5668\u7684\u7f13\u5b58\u884c\u4e2d\u4e5f\u4f1a\u8c03\u7528\u603b\u7ebf\u9501\u5b9a\u3002"}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"CAS \u539f\u5b50\u64cd\u4f5c\u7684\u95ee\u9898"}),"\n",(0,i.jsx)(e.p,{children:"ABA\u95ee\u9898\uff1a\u4f46\u662f\u5982\u679c\u4e00\u4e2a\u503c\u539f\u6765\u662fA\uff0c\u53d8\u6210\u4e86B\uff0c\u53c8\u53d8\u6210\u4e86A\uff0c\u90a3\u4e48\u4f7f\u7528CAS\u8fdb\u884c\u68c0\u67e5\u65f6\u4f1a\u53d1\u73b0\u5b83\u7684\u503c\u6ca1\u6709\u53d1\u751f\u53d8\u5316\uff0c\u4f46\u662f\u5b9e\u9645\u4e0a\u5374\u53d8\u5316\u4e86\u3002ABA\u95ee\u9898\u7684\u89e3\u51b3\u601d\u8def\u5c31\u662f\u4f7f\u7528\u7248\u672c\u53f7\u3002\u5728\u53d8\u91cf\u524d\u9762\u8ffd\u52a0\u4e0a\u7248\u672c\u53f7\uff0c\u6bcf\u6b21\u53d8\u91cf\u66f4\u65b0\u7684\u65f6\u5019\u628a\u7248\u672c\u53f7\u52a01\uff0c\u90a3\u4e48A\u2192B\u2192A\u5c31\u4f1a\u53d8\u62101A\u21922B\u21923A\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u89e3\u51b3\u529e\u6cd5\uff1a\u4eceJava 1.5\u5f00\u59cb\uff0cJDK\u7684Atomic\u5305\u91cc\u63d0\u4f9b\u4e86\u4e00\u4e2a\u7c7bAtomicStampedReference\u6765\u89e3\u51b3ABA\u95ee\u9898\u3002\u8fd9\u4e2a\u7c7b\u7684compareAndSet\u65b9\u6cd5\u7684\u4f5c\u7528\u662f\u9996\u5148\u68c0\u67e5\u5f53\u524d\u5f15\u7528\u662f\u5426\u7b49\u4e8e\u9884\u671f\u5f15\u7528\uff0c\u5e76\u4e14\u68c0\u67e5\u5f53\u524d\u6807\u5fd7\u662f\u5426\u7b49\u4e8e\u9884\u671f\u6807\u5fd7\uff0c\u5982\u679c\u5168\u90e8\u76f8\u7b49\uff0c\u5219\u4ee5\u539f\u5b50\u65b9\u5f0f\u5c06\u8be5\u5f15\u7528\u548c\u8be5\u6807\u5fd7\u7684\u503c\u8bbe\u7f6e\u4e3a\u7ed9\u5b9a\u7684\u66f4\u65b0\u503c\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u5faa\u73af\u65f6\u95f4\u957f\u5f00\u9500\u5927\u95ee\u9898\u3002\u81ea\u65cbCAS\u5982\u679c\u957f\u65f6\u95f4\u4e0d\u6210\u529f\uff0c\u4f1a\u7ed9CPU\u5e26\u6765\u975e\u5e38\u5927\u7684\u6267\u884c\u5f00\u9500\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u53ea\u80fd\u4fdd\u8bc1\u4e00\u4e2a\u5171\u4eab\u53d8\u91cf\u7684\u539f\u5b50\u64cd\u4f5c\u3002\u8fd8\u6709\u4e00\u4e2a\u53d6\u5de7\u7684\u529e\u6cd5\uff0c\u5c31\u662f\u628a\u591a\u4e2a\u5171\u4eab\u53d8\u91cf\u5408\u5e76\u6210\u4e00\u4e2a\u5171\u4eab\u53d8\u91cf\u6765\u64cd\u4f5c\u3002\u6bd4\u5982\uff0c\u6709\u4e24\u4e2a\u5171\u4eab\u53d8\u91cfi=2,j=a\uff0c\u5408\u5e76\u4e00\u4e0bij=2a\uff0c\u7136\u540e\u7528CAS\u6765\u64cd\u4f5cij\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u4f7f\u7528\u9501\u673a\u5236\u5b9e\u73b0\u539f\u5b50\u64cd\u4f5c\u9501\u673a\u5236\u4fdd\u8bc1\u4e86\u53ea\u6709\u83b7\u5f97\u9501\u7684\u7ebf\u7a0b\u624d\u80fd\u591f\u64cd\u4f5c\u9501\u5b9a\u7684\u5185\u5b58\u533a\u57df\u3002JVM\u5185\u90e8\u5b9e\u73b0\u4e86\u5f88\u591a\u79cd\u9501\u673a\u5236\uff0c\u6709\u504f\u5411\u9501\u3001\u8f7b\u91cf\u7ea7\u9501\u548c\u4e92\u65a5\u9501\u3002\u6709\u610f\u601d\u7684\u662f\u9664\u4e86\u504f\u5411\u9501\uff0cJVM\u5b9e\u73b0\u9501\u7684\u65b9\u5f0f\u90fd\u7528\u4e86\u5faa\u73afCAS\uff0c\u5373\u5f53\u4e00\u4e2a\u7ebf\u7a0b\u60f3\u8fdb\u5165\u540c\u6b65\u5757\u7684\u65f6\u5019\u4f7f\u7528\u5faa\u73afCAS\u7684\u65b9\u5f0f\u6765\u83b7\u53d6\u9501\uff0c\u5f53\u5b83\u9000\u51fa\u540c\u6b65\u5757\u7684\u65f6\u5019\u4f7f\u7528\u5faa\u73afCAS\u91ca\u653e\u9501\u3002"}),"\n",(0,i.jsx)(e.h2,{id:"\u4ee5\u4f55\u79cd\u673a\u5236\u6765\u4ea4\u6362\u4fe1\u606f",children:"\u4ee5\u4f55\u79cd\u673a\u5236\u6765\u4ea4\u6362\u4fe1\u606f"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{src:"https://s2.loli.net/2023/07/15/6C1U59TcR82lsyY.png",alt:""})}),"\n",(0,i.jsx)(e.hr,{}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{src:"https://s2.loli.net/2023/07/15/dIu64VxAGWb1fh7.png",alt:""})}),"\n",(0,i.jsx)(e.h2,{id:"\u6307\u4ee4\u91cd\u6392\u5e8f",children:"\u6307\u4ee4\u91cd\u6392\u5e8f"}),"\n",(0,i.jsx)(e.p,{children:"\u5728\u6267\u884c\u7a0b\u5e8f\u65f6\uff0c\u4e3a\u4e86\u63d0\u9ad8\u6027\u80fd\uff0c\u7f16\u8bd1\u5668\u548c\u5904\u7406\u5668\u5e38\u5e38\u4f1a\u5bf9\u6307\u4ee4\u505a\u91cd\u6392\u5e8f\u3002\u91cd\u6392\u5e8f\u52063\u79cd\u7c7b\u578b"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{src:"https://s2.loli.net/2023/07/15/AkZdw43br7YtEWn.png",alt:""})}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsx)(e.li,{children:"\u7f16\u8bd1\u5668\u4f18\u5316\u7684\u91cd\u6392\u5e8f\u3002\u7f16\u8bd1\u5668\u5728\u4e0d\u6539\u53d8\u5355\u7ebf\u7a0b\u7a0b\u5e8f\u8bed\u4e49\u7684\u524d\u63d0\u4e0b\uff0c\u53ef\u4ee5\u91cd\u65b0\u5b89\u6392\u8bed\u53e5\u7684\u6267\u884c\u987a\u5e8f\u3002"}),"\n",(0,i.jsx)(e.li,{children:"\u6307\u4ee4\u7ea7\u5e76\u884c\u91cd\u6392\u5e8f\u3002\u73b0\u4ee3\u5904\u7406\u5668\u91c7\u7528\u4e86\u6307\u4ee4\u7ea7\u5e76\u884c\u6280\u672f\uff08Instruction-Level Parallelism\uff0cILP\uff09\u6765\u5c06\u591a\u6761\u6307\u4ee4\u91cd\u53e0\u6267\u884c\u3002\u5982\u679c\u4e0d\u5b58\u5728\u6570\u636e\u4f9d\u8d56\u6027\uff0c\u5904\u7406\u5668\u53ef\u4ee5\u6539\u53d8\u8bed\u53e5\u5bf9\u5e94\u673a\u5668\u6307\u4ee4\u7684\u6267\u884c\u987a\u5e8f\u3002"}),"\n",(0,i.jsx)(e.li,{children:"\u5185\u5b58\u7cfb\u7edf\u7684\u91cd\u6392\u5e8f\u3002\u7531\u4e8e\u5904\u7406\u5668\u4f7f\u7528\u7f13\u5b58\u548c\u8bfb/\u5199\u7f13\u51b2\u533a\uff0c\u8fd9\u4f7f\u5f97\u52a0\u8f7d\u548c\u5b58\u50a8\u64cd\u4f5c\u770b\u4e0a\u53bb\u53ef\u80fd\u662f\u5728\u4e71\u5e8f\u6267\u884c\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsx)(e.p,{children:"1\u5c5e\u4e8e\u7f16\u8bd1\u5668\u91cd\u6392\u5e8f\uff0c2\u548c3\u5c5e\u4e8e\u5904\u7406\u5668\u91cd\u6392\u5e8f;"}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"\u5bf9\u4e8e\u7f16\u8bd1\u5668\uff0cJMM\u7684\u7f16\u8bd1\u5668\u91cd\u6392\u5e8f\u89c4\u5219\u4f1a\u7981\u6b62\u7279\u5b9a\u7c7b\u578b\u7684\u7f16\u8bd1\u5668\u91cd\u6392\u5e8f\uff08\u4e0d\u662f\u6240\u6709\u7684\u7f16\u8bd1\u5668\u91cd\u6392\u5e8f\u90fd\u8981\u7981\u6b62\uff09\u3002\u5bf9\u4e8e\u5904\u7406\u5668\u91cd\u6392\u5e8f\uff0cJMM\u7684\u5904\u7406\u5668\u91cd\u6392\u5e8f\u89c4\u5219\u4f1a\u8981\u6c42Java\u7f16\u8bd1\u5668\u5728\u751f\u6210\u6307\u4ee4\u5e8f\u5217\u65f6\uff0c\u63d2\u5165\u7279\u5b9a\u7c7b\u578b\u7684\u5185\u5b58\u5c4f\u969c\uff08Memory Barriers\uff0cIntel\u79f0\u4e4b\u4e3aMemory Fence\uff09\u6307\u4ee4\uff0c\u901a\u8fc7\u5185\u5b58\u5c4f\u969c\u6307\u4ee4\u6765\u7981\u6b62\u7279\u5b9a\u7c7b\u578b\u7684\u5904\u7406\u5668\u91cd\u6392\u5e8f\u3002"}),"\n",(0,i.jsx)(e.h2,{id:"\u5e76\u53d1\u7f16\u7a0b\u6a21\u578b\u5206\u7c7b",children:"\u5e76\u53d1\u7f16\u7a0b\u6a21\u578b\u5206\u7c7b"}),"\n",(0,i.jsx)(e.p,{children:"\u901a\u8fc7\u4ee5\u6279\u5904\u7406\u7684\u65b9\u5f0f\u5237\u65b0\u5199\u7f13\u51b2\u533a\uff0c\u4ee5\u53ca\u5408\u5e76\u5199\u7f13\u51b2\u533a\u4e2d\u5bf9\u540c\u4e00\u5185\u5b58\u5730\u5740\u7684\u591a\u6b21\u5199\uff0c\u51cf\u5c11\u5bf9\u5185\u5b58\u603b\u7ebf\u7684\u5360\u7528\u3002\u867d\u7136\u5199\u7f13\u51b2\u533a\u6709\u8fd9\u4e48\u591a\u597d\u5904\uff0c\u4f46\u6bcf\u4e2a\u5904\u7406\u5668\u4e0a\u7684\u5199\u7f13\u51b2\u533a\uff0c\u4ec5\u4ec5\u5bf9\u5b83\u6240\u5728\u7684\u5904\u7406\u5668\u53ef\u89c1\u3002\u8fd9\u4e2a\u7279\u6027\u4f1a\u5bf9\u5185\u5b58\u64cd\u4f5c\u7684\u6267\u884c\u987a\u5e8f\u4ea7\u751f\u91cd\u8981\u7684\u5f71\u54cd\uff1a\u5904\u7406\u5668\u5bf9\u5185\u5b58\u7684\u8bfb/\u5199\u64cd\u4f5c\u7684\u6267\u884c\u987a\u5e8f\uff0c\u4e0d\u4e00\u5b9a\u4e0e\u5185\u5b58\u5b9e\u9645\u53d1\u751f\u7684\u8bfb/\u5199\u64cd\u4f5c\u987a\u5e8f\u4e00\u81f4\uff01"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{src:"https://s2.loli.net/2023/07/15/cC3hmklsanAJLB4.png",alt:""})}),"\n",(0,i.jsx)(e.p,{children:"SPARC-TSO\u548cX86\u62e5\u6709\u76f8\u5bf9\u8f83\u5f3a\u7684\u5904\u7406\u5668\u5185\u5b58\u6a21\u578b\uff0c\u5b83\u4eec\u4ec5\u5141\u8bb8\u5bf9\u5199-\u8bfb\u64cd\u4f5c\u505a\u91cd\u6392\u5e8f"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{src:"https://s2.loli.net/2023/07/15/a4VU2ud1InQeCJl.png",alt:""})}),"\n",(0,i.jsx)(e.p,{children:"StoreLoad Barriers\u662f\u4e00\u4e2a\u201c\u5168\u80fd\u578b\u201d\u7684\u5c4f\u969c\uff0c\u5b83\u540c\u65f6\u5177\u6709\u5176\u4ed63\u4e2a\u5c4f\u969c\u7684\u6548\u679c\u3002\n\u6267\u884c\u8be5\u5c4f\u969c\u5f00\u9500\u4f1a\u5f88\u6602\u8d35\uff0c\u56e0\u4e3a\u5f53\u524d\u5904\u7406\u5668\u901a\u5e38\u8981\u628a\u5199\u7f13\u51b2\u533a\u4e2d\u7684\u6570\u636e\u5168\u90e8\u5237\u65b0\u5230\u5185\u5b58\u4e2d\uff08Buffer Fully Flush\uff09\u3002"}),"\n",(0,i.jsx)(e.h2,{id:"happens-before",children:"happens-before"}),"\n",(0,i.jsx)(e.p,{children:"java\u4f7f\u7528\u65b0\u7684JSR-133\u5185\u5b58\u6a21\u578b\u3002\u5728JMM\u4e2d\u5982\u679c\u4e00\u4e2a\u64cd\u4f5c\u6267\u884c\u7684\u7ed3\u679c\u9700\u8981\u5bf9\u53e6\u4e00\u4e2a\u64cd\u4f5c\u53ef\u89c1\uff0c\u90a3\u4e48\u8fd9\u4e24\u4e2a\u64cd\u4f5c\u4e4b\u95f4\u5fc5\u987b\u8981\u5728happens-before\u5173\u7cfb\u3002\n\u4e0e\u7a0b\u5e8f\u5458\u5bc6\u5207\u76f8\u5173\u7684happens-before\u89c4\u5219\u5982\u4e0b\u3002"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u7a0b\u5e8f\u987a\u5e8f\u89c4\u5219\uff1a\u4e00\u4e2a\u7ebf\u7a0b\u4e2d\u7684\u6bcf\u4e2a\u64cd\u4f5c\uff0chappens-before\u4e8e\u8be5\u7ebf\u7a0b\u4e2d\u7684\u4efb\u610f\u540e\u7eed\u64cd\u4f5c\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u76d1\u89c6\u5668\u9501\u89c4\u5219\uff1a\u5bf9\u4e00\u4e2a\u9501\u7684\u89e3\u9501\uff0chappens-before\u4e8e\u968f\u540e\u5bf9\u8fd9\u4e2a\u9501\u7684\u52a0\u9501\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"volatile\u53d8\u91cf\u89c4\u5219\uff1a\u5bf9\u4e00\u4e2avolatile\u57df\u7684\u5199\uff0chappens- before\u4e8e\u4efb\u610f\u540e\u7eed\u5bf9\u8fd9\u4e2avolatile\u57df\u7684\u8bfb\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u4f20\u9012\u6027\uff1a\u5982\u679cA happens-before B\uff0c\u4e14B happens-before C\uff0c\u90a3\u4e48A happens-before C\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.a,{href:"https://www.cnblogs.com/longshiyVip/p/5189085.html",children:"happens-before\u7406\u89e3"})}),"\n",(0,i.jsx)(e.h2,{id:"\u987a\u5e8f\u4e00\u81f4\u6027\u6a21\u578b",children:"\u987a\u5e8f\u4e00\u81f4\u6027\u6a21\u578b"}),"\n",(0,i.jsx)(e.p,{children:"\u4e00\u4e2a\u7ebf\u7a0b\u4e2d\u7684\u6240\u6709\u64cd\u4f5c\u5fc5\u987b\u6309\u7167\u7a0b\u5e8f\u7684\u987a\u5e8f\u6765\u6267\u884c\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\uff08\u4e0d\u7ba1\u7a0b\u5e8f\u662f\u5426\u540c\u6b65\uff09\u6240\u6709\u7ebf\u7a0b\u90fd\u53ea\u80fd\u770b\u5230\u4e00\u4e2a\u5355\u4e00\u7684\u64cd\u4f5c\u6267\u884c\u987a\u5e8f\u3002\u5728\u987a\u5e8f\u4e00\u81f4\u6027\u5185\u5b58\u6a21\u578b\u4e2d\uff0c\u6bcf\u4e2a\u64cd\u4f5c\u90fd\u5fc5\u987b\u539f\u5b50\u6267\u884c\u4e14\u7acb\u523b\u5bf9\u6240\u6709\u7ebf\u7a0b\u53ef\u89c1\u3002"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{src:"https://s2.loli.net/2023/07/15/M6W49XzwpJ3PF1S.png",alt:""})}),"\n",(0,i.jsx)(e.p,{children:"\u5f53\u591a\u4e2a\u7ebf\u7a0b\u5e76\u53d1\u6267\u884c\u65f6\uff0c\u56fe\u4e2d\u7684\u5f00\u5173\u88c5\u7f6e\u80fd\u628a\u6240\u6709\u7ebf\u7a0b\u7684\u6240\u6709\u5185\u5b58\u8bfb/\u5199\u64cd\u4f5c\u4e32\u884c\u5316\uff08\u5373\u5728\u987a\u5e8f\u4e00\u81f4\u6027\u6a21\u578b\u4e2d\uff0c\u6240\u6709\u64cd\u4f5c\u4e4b\u95f4\u5177\u6709\u5168\u5e8f\u5173\u7cfb\uff09\u3002"}),"\n",(0,i.jsx)(e.h2,{id:"cpu\u603b\u7ebf\u4e8b\u52a1",children:"CPU\u603b\u7ebf\u4e8b\u52a1"}),"\n",(0,i.jsx)(e.p,{children:"\u603b\u7ebf\u4e8b\u52a1\u5305\u62ec\u8bfb\u4e8b\u52a1\uff08Read Transaction\uff09\u548c\u5199\u4e8b\u52a1\uff08Write Transaction\uff09\u3002\u8bfb\u4e8b\u52a1\u4ece\u5185\u5b58\u4f20\u9001\u6570\u636e\u5230\u5904\u7406\u5668\uff0c\u5199\u4e8b\u52a1\u4ece\u5904\u7406\u5668\u4f20\u9001\u6570\u636e\u5230\u5185\u5b58\uff0c\u6bcf\u4e2a\u4e8b\u52a1\u4f1a\u8bfb/\u5199\u5185\u5b58\u4e2d\u4e00\u4e2a\u6216\u591a\u4e2a\u7269\u7406\u4e0a\u8fde\u7eed\u7684\u5b57\u3002\n\u5728\u4e00\u4e2a\u5904\u7406\u5668\u6267\u884c\u603b\u7ebf\u4e8b\u52a1\u671f\u95f4\uff0c\u603b\u7ebf\u4f1a\u7981\u6b62\u5176\u4ed6\u7684\u5904\u7406\u5668\u548cI/O\u8bbe\u5907\u6267\u884c\u5185\u5b58\u7684\u8bfb/\u5199\u3002"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{src:"https://s2.loli.net/2023/07/15/2s6ZNIJyPWTKARl.png",alt:""})}),"\n",(0,i.jsx)(e.p,{children:"\u5f53JVM\u5728\u8fd9\u79cd\u5904\u7406\u5668\u4e0a\u8fd0\u884c\u65f6\uff0c\u53ef\u80fd\u4f1a\u628a\u4e00\u4e2a64\u4f4dlong/double\u578b\u53d8\u91cf\u7684\u5199\u64cd\u4f5c\u62c6\u5206\u4e3a\u4e24\u4e2a32\u4f4d\u7684\u5199\u64cd\u4f5c\u6765\u6267\u884c\u3002\u8fd9\u4e24\u4e2a32\u4f4d\u7684\u5199\u64cd\u4f5c\u53ef\u80fd\u4f1a\u88ab\u5206\u914d\u5230\u4e0d\u540c\u7684\u603b\u7ebf\u4e8b\u52a1\u4e2d\u6267\u884c\uff0c\u6b64\u65f6\u5bf9\u8fd9\u4e2a64\u4f4d\u53d8\u91cf\u7684\u5199\u64cd\u4f5c\u5c06\u4e0d\u5177\u6709\u539f\u5b50\u6027\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u4eceJSR -133\u5185\u5b58\u6a21\u578b\u5f00\u59cb\uff08\u5373\u4eceJDK5\u5f00\u59cb\uff09\uff0c\u4ec5\u4ec5\u53ea\u5141\u8bb8\u628a\u4e00\u4e2a64\u4f4dlong/double\u578b\u53d8\u91cf\u7684\u5199\u64cd\u4f5c\u62c6\u5206\u4e3a\u4e24\u4e2a32\u4f4d\u7684\u5199\u64cd\u4f5c\u6765\u6267\u884c\uff0c\u4efb\u610f\u7684\u8bfb\u64cd\u4f5c\u5728JSR-133\u4e2d\u90fd\u5fc5\u987b\u5177\u6709\u539f\u5b50\u6027\uff08\u5373\u4efb\u610f\u8bfb\u64cd\u4f5c\u5fc5\u987b\u8981\u5728\u5355\u4e2a\u8bfb\u4e8b\u52a1\u4e2d\u6267\u884c\uff09\u3002"}),"\n",(0,i.jsx)(e.h2,{id:"volatile\u7279\u70b9",children:"volatile\u7279\u70b9"}),"\n",(0,i.jsx)(e.p,{children:"\u53ef\u89c1\u6027\u3002\u5bf9\u4e00\u4e2avolatile\u53d8\u91cf\u7684\u8bfb\uff0c\u603b\u662f\u80fd\u770b\u5230\uff08\u4efb\u610f\u7ebf\u7a0b\uff09\u5bf9\u8fd9\u4e2avolatile\u53d8\u91cf\u6700\u540e\u7684\u5199\u5165\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u539f\u5b50\u6027\uff1a\u5bf9\u4efb\u610f\u5355\u4e2avolatile\u53d8\u91cf\u7684\u8bfb/\u5199\u5177\u6709\u539f\u5b50\u6027\uff0c\u4f46\u7c7b\u4f3c\u4e8evolatile++\u8fd9\u79cd\u590d\u5408\u64cd\u4f5c\u4e0d\u5177\u6709\u539f\u5b50\u6027\u3002"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{src:"https://s2.loli.net/2023/07/15/o5nWcyJKE69CV32.png",alt:""})}),"\n",(0,i.jsx)(e.p,{children:"\u6bcf\u4e00\u4e2a\u7bad\u5934\u94fe\u63a5\u7684\u4e24\u4e2a\u8282\u70b9\uff0c\u4ee3\u8868\u4e86\u4e00\u4e2ahappens-before\u5173\u7cfb\u3002\u9ed1\u8272\u7bad\u5934\u8868\u793a\u7a0b\u5e8f\u987a\u5e8f\u89c4\u5219\uff1b\u6a59\u8272\u7bad\u5934\u8868\u793avolatile\u89c4\u5219\uff1b\u84dd\u8272\u7bad\u5934\u8868\u793a\u7ec4\u5408\u8fd9\u4e9b\u89c4\u5219\u540e\u63d0\u4f9b\u7684happens-before\u4fdd\u8bc1\u3002"}),"\n",(0,i.jsx)(e.p,{children:"A\u7ebf\u7a0b\u5199\u4e00\u4e2avolatile\u53d8\u91cf\u540e\uff0cB\u7ebf\u7a0b\u8bfb\u540c\u4e00\u4e2avolatile\u53d8\u91cf\u3002A\u7ebf\u7a0b\u5728\u5199volatile\u53d8\u91cf\u4e4b\u524d\u6240\u6709\u53ef\u89c1\u7684\u5171\u4eab\u53d8\u91cf(\u5373\u5199\u4e4b\u524d\u7684\u503c\u90fd\u5199\u5165\u5230JMM\u4e2d)\uff0c\u5728B\u7ebf\u7a0b\u8bfb\u540c\u4e00\u4e2avolatile\u53d8\u91cf\u540e\uff0c\u5c06\u7acb\u5373\u53d8\u5f97\u5bf9B\u7ebf\u7a0b\u53ef\u89c1\u3002"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{src:"https://s2.loli.net/2023/07/15/yWFazJqi6dTmrKQ.png",alt:""})}),"\n",(0,i.jsx)(e.hr,{}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{src:"https://s2.loli.net/2023/07/15/zOrsJ7AdvphY9jw.png",alt:""})}),"\n",(0,i.jsx)(e.p,{children:"\u7ebf\u7a0bA\u5199\u4e00\u4e2avolatile\u53d8\u91cf\uff0c\u968f\u540e\u7ebf\u7a0bB\u8bfb\u8fd9\u4e2avolatile\u53d8\u91cf\uff0c\u8fd9\u4e2a\u8fc7\u7a0b\u5b9e\u8d28\u4e0a\u662f\u7ebf\u7a0bA\u901a\u8fc7\u4e3b\u5185\u5b58\u5411\u7ebf\u7a0bB\u53d1\u9001\u6d88\u606f\u3002"}),"\n",(0,i.jsx)(e.h2,{id:"volatile\u91cd\u6392\u5e8f\u89c4\u5219\u8868",children:"volatile\u91cd\u6392\u5e8f\u89c4\u5219\u8868"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{src:"https://s2.loli.net/2023/07/15/BKRL3GYlVgZ6onr.png",alt:""})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u5f53\u7b2c\u4e8c\u4e2a\u64cd\u4f5c\u662fvolatile\u5199\u65f6\uff0c\u4e0d\u7ba1\u7b2c\u4e00\u4e2a\u64cd\u4f5c\u662f\u4ec0\u4e48\uff0c\u90fd\u4e0d\u80fd\u91cd\u6392\u5e8f\u3002\u8fd9\u4e2a\u89c4\u5219\u786e\u4fddvolatile\u5199\u4e4b\u524d\u7684\u64cd\u4f5c\u4e0d\u4f1a\u88ab\u7f16\u8bd1\u5668\u91cd\u6392\u5e8f\u5230volatile\u5199\u4e4b\u540e\u3002"}),"\n",(0,i.jsx)(e.li,{children:"\u5f53\u7b2c\u4e00\u4e2a\u64cd\u4f5c\u662fvolatile\u8bfb\u65f6\uff0c\u4e0d\u7ba1\u7b2c\u4e8c\u4e2a\u64cd\u4f5c\u662f\u4ec0\u4e48\uff0c\u90fd\u4e0d\u80fd\u91cd\u6392\u5e8f\u3002\u8fd9\u4e2a\u89c4\u5219\u786e\u4fddvolatile\u8bfb\u4e4b\u540e\u7684\u64cd\u4f5c\u4e0d\u4f1a\u88ab\u7f16\u8bd1\u5668\u91cd\u6392\u5e8f\u5230volatile\u8bfb\u4e4b\u524d\u3002"}),"\n",(0,i.jsx)(e.li,{children:"\u5f53\u7b2c\u4e00\u4e2a\u64cd\u4f5c\u662fvolatile\u5199\uff0c\u7b2c\u4e8c\u4e2a\u64cd\u4f5c\u662fvolatile\u8bfb\u65f6\uff0c\u4e0d\u80fd\u91cd\u6392\u5e8f\u3002"}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"jmm\u63d2\u5165\u5185\u5b58\u5c4f\u969c\u6765\u7981\u6b62\u7279\u5b9a\u7c7b\u578b\u7684\u5904\u7406\u5668\u91cd\u6392\u5e8f",children:"JMM\u63d2\u5165\u5185\u5b58\u5c4f\u969c\u6765\u7981\u6b62\u7279\u5b9a\u7c7b\u578b\u7684\u5904\u7406\u5668\u91cd\u6392\u5e8f"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u5f53\u7b2c\u4e8c\u4e2a\u64cd\u4f5c\u662fvolatile\u5199\u65f6\uff0c\u4e0d\u7ba1\u7b2c\u4e00\u4e2a\u64cd\u4f5c\u662f\u4ec0\u4e48\uff0c\u90fd\u4e0d\u80fd\u91cd\u6392\u5e8f\u3002\u8fd9\u4e2a\u89c4\u5219\u786e\u4fddvolatile\u5199\u4e4b\u524d\u7684\u64cd\u4f5c\u4e0d\u4f1a\u88ab\u7f16\u8bd1\u5668\u91cd\u6392\u5e8f\u5230volatile\u5199\u4e4b\u540e\u3002"}),"\n",(0,i.jsx)(e.li,{children:"\u5f53\u7b2c\u4e00\u4e2a\u64cd\u4f5c\u662fvolatile\u8bfb\u65f6\uff0c\u4e0d\u7ba1\u7b2c\u4e8c\u4e2a\u64cd\u4f5c\u662f\u4ec0\u4e48\uff0c\u90fd\u4e0d\u80fd\u91cd\u6392\u5e8f\u3002\u8fd9\u4e2a\u89c4\u5219\u786e\u4fddvolatile\u8bfb\u4e4b\u540e\u7684\u64cd\u4f5c\u4e0d\u4f1a\u88ab\u7f16\u8bd1\u5668\u91cd\u6392\u5e8f\u5230volatile\u8bfb\u4e4b\u524d\u3002"}),"\n",(0,i.jsx)(e.li,{children:"\u5f53\u7b2c\u4e00\u4e2a\u64cd\u4f5c\u662fvolatile\u5199\uff0c\u7b2c\u4e8c\u4e2a\u64cd\u4f5c\u662fvolatile\u8bfb\u65f6\uff0c\u4e0d\u80fd\u91cd\u6392\u5e8f\u3002"}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{src:"https://s2.loli.net/2023/07/15/6iUd3Y1bFgoxwLz.png",alt:""})}),"\n",(0,i.jsx)(e.p,{children:"StoreLoad\u5c4f\u969c:\u4e00\u4e2a\u5199\u7ebf\u7a0b\u5199volatile\u53d8\u91cf\uff0c\u591a\u4e2a\u8bfb\u7ebf\u7a0b\u8bfb\u540c\u4e00\u4e2avolatile\u53d8\u91cf\u3002\u5f53\u8bfb\u7ebf\u7a0b\u7684\u6570\u91cf\u5927\u5927\u8d85\u8fc7\u5199\u7ebf\u7a0b\u65f6\uff0c\u9009\u62e9\u5728volatile\u5199\u4e4b\u540e\u63d2\u5165StoreLoad\u5c4f\u969c\u5c06\u5e26\u6765\u53ef\u89c2\u7684\u6267\u884c\u6548\u7387\u7684\u63d0\u5347\u3002"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{src:"https://s2.loli.net/2023/07/15/BhM4beUqx9ZJtrf.png",alt:""})}),"\n",(0,i.jsx)(e.hr,{}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{src:"https://s2.loli.net/2023/07/15/KleJBMWTGq9cbAa.png",alt:""})}),"\n",(0,i.jsx)(e.h2,{id:"reentrantlock-\u4e2d\u516c\u5e73\u9501\u548c\u975e\u516c\u5e73\u9501\u5185\u5b58\u8bed\u4e49",children:"ReentrantLock \u4e2d\u516c\u5e73\u9501\u548c\u975e\u516c\u5e73\u9501\u5185\u5b58\u8bed\u4e49"}),"\n",(0,i.jsx)(e.p,{children:"\u516c\u5e73\u9501\u548c\u975e\u516c\u5e73\u9501\u91ca\u653e\u65f6\uff0c\u6700\u540e\u90fd\u8981\u5199\u4e00\u4e2avolatile\u53d8\u91cfstate\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u516c\u5e73\u9501\u83b7\u53d6\u65f6\uff0c\u9996\u5148\u4f1a\u53bb\u8bfbvolatile\u53d8\u91cf\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u975e\u516c\u5e73\u9501\u83b7\u53d6\u65f6\uff0c\u9996\u5148\u4f1a\u7528CAS\u66f4\u65b0volatile\u53d8\u91cf\uff0c\u8fd9\u4e2a\u64cd\u4f5c\u540c\u65f6\u5177\u6709volatile\u8bfb\u548cvolatile\u5199\u7684\u5185\u5b58\u8bed\u4e49\u3002"}),"\n",(0,i.jsx)(e.h2,{id:"concurrent\u5305\u5b9e\u73b0\u793a\u610f\u56fe",children:"concurrent\u5305\u5b9e\u73b0\u793a\u610f\u56fe"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{src:"https://s2.loli.net/2023/07/15/ZiBQLHJSwsYdpoc.png",alt:""})}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsx)(e.p,{children:"\u53c2\u8003\u8d44\u6599"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsx)(e.li,{children:"\u4e66\u7c4d\u540d\u79f0\uff1a\u300ajava\u5e76\u53d1\u7f16\u7a0b\u7684\u827a\u672f\u300b \u4f5c\u8005\uff1a\u65b9\u817e\u98de \u9b4f\u9e4f \u7a0b\u6653\u660e"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.admonition,{title:"\u534f\u8bae",type:"tip",children:(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["\u672c\u4f5c\u54c1\u4ee3\u7801\u90e8\u5206\u91c7\u7528 ",(0,i.jsx)(e.a,{href:"https://www.apache.org/licenses/LICENSE-2.0",children:"Apache 2.0\u534f\u8bae"}),"\u8fdb\u884c\u8bb8\u53ef\u3002\u9075\u5faa\u8bb8\u53ef\u7684\u524d\u63d0\u4e0b\uff0c\u4f60\u53ef\u4ee5\u81ea\u7531\u5730\u5bf9\u4ee3\u7801\u8fdb\u884c\u4fee\u6539\uff0c\u518d\u53d1\u5e03\uff0c\u53ef\u4ee5\u5c06\u4ee3\u7801\u7528\u4f5c\u5546\u4e1a\u7528\u9014\u3002\u4f46\u8981\u6c42\u4f60\uff1a"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u7f72\u540d"}),"\uff1a\u5728\u539f\u6709\u4ee3\u7801\u548c\u884d\u751f\u4ee3\u7801\u4e2d\uff0c\u4fdd\u7559\u539f\u4f5c\u8005\u7f72\u540d\u53ca\u4ee3\u7801\u6765\u6e90\u4fe1\u606f\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u4fdd\u7559\u8bb8\u53ef\u8bc1"}),"\uff1a\u5728\u539f\u6709\u4ee3\u7801\u548c\u884d\u751f\u4ee3\u7801\u4e2d\uff0c\u4fdd\u7559Apache 2.0\u534f\u8bae\u6587\u4ef6\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["\u672c\u4f5c\u54c1\u6587\u6863\u90e8\u5206\u91c7\u7528",(0,i.jsx)(e.a,{href:"http://creativecommons.org/licenses/by/4.0/",children:"\u77e5\u8bc6\u5171\u4eab\u7f72\u540d 4.0 \u56fd\u9645\u8bb8\u53ef\u534f\u8bae"}),"\u8fdb\u884c\u8bb8\u53ef\u3002 \u9075\u5faa\u8bb8\u53ef\u7684\u524d\u63d0\u4e0b\uff0c\u4f60\u53ef\u4ee5\u81ea\u7531\u5730\u5171\u4eab\uff0c\u5305\u62ec\u5728\u4efb\u4f55\u5a92\u4ecb\u4e0a\u4ee5\u4efb\u4f55\u5f62\u5f0f\u590d\u5236\u3001\u53d1\u884c\u672c\u4f5c\u54c1\uff0c\u4ea6\u53ef\u4ee5\u81ea\u7531\u5730\u6f14\u7ece\u3001\u4fee\u6539\u3001\u8f6c\u6362\u6216\u4ee5\u672c\u4f5c\u54c1\u4e3a\u57fa\u7840\u8fdb\u884c\u4e8c\u6b21\u521b\u4f5c\u3002\u4f46\u8981\u6c42\u4f60\uff1a"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u7f72\u540d"}),"\uff1a\u5e94\u5728\u4f7f\u7528\u672c\u6587\u6863\u7684\u5168\u90e8\u6216\u90e8\u5206\u5185\u5bb9\u65f6\u5019\uff0c\u6ce8\u660e\u539f\u4f5c\u8005\u53ca\u6765\u6e90\u4fe1\u606f\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u975e\u5546\u4e1a\u6027\u4f7f\u7528"}),"\uff1a\u4e0d\u5f97\u7528\u4e8e\u5546\u4e1a\u51fa\u7248\u6216\u5176\u4ed6\u4efb\u4f55\u5e26\u6709\u5546\u4e1a\u6027\u8d28\u7684\u884c\u4e3a\u3002\u5982\u9700\u5546\u4e1a\u4f7f\u7528\uff0c\u8bf7\u8054\u7cfb\u4f5c\u8005\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u76f8\u540c\u65b9\u5f0f\u5171\u4eab\u7684\u6761\u4ef6"}),"\uff1a\u5728\u672c\u6587\u6863\u57fa\u7840\u4e0a\u6f14\u7ece\u3001\u4fee\u6539\u7684\u4f5c\u54c1\uff0c\u5e94\u5f53\u7ee7\u7eed\u4ee5\u77e5\u8bc6\u5171\u4eab\u7f72\u540d 4.0\u56fd\u9645\u8bb8\u53ef\u534f\u8bae\u8fdb\u884c\u8bb8\u53ef\u3002"]}),"\n"]}),"\n"]}),"\n"]})})]})}function h(n={}){const{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(d,{...n})}):d(n)}},7701:(n,e,l)=>{l.d(e,{Z:()=>c,a:()=>t});var i=l(959);const s={},r=i.createContext(s);function t(n){const e=i.useContext(r);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:t(n.components),i.createElement(r.Provider,{value:e},n.children)}}}]);