"use strict";(self.webpackChunksummary=self.webpackChunksummary||[]).push([[3241],{8868:(n,i,e)=>{e.r(i),e.d(i,{assets:()=>c,contentTitle:()=>t,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>o});var l=e(1527),r=e(73);const s={title:"final\u57df\u5185\u5b58\u77e5\u8bc6",sidebar_position:2,sidebar_label:"final\u57df\u5185\u5b58\u77e5\u8bc6"},t=void 0,a={id:"Java/ConcurrentAndJVM/final memory domain",title:"final\u57df\u5185\u5b58\u77e5\u8bc6",description:"final\u57df\u91cd\u6392\u5e8f\u89c4\u5219",source:"@site/docs/01-Java/05-ConcurrentAndJVM/final memory domain.mdx",sourceDirName:"01-Java/05-ConcurrentAndJVM",slug:"/Java/ConcurrentAndJVM/final memory domain",permalink:"/en/Java/ConcurrentAndJVM/final memory domain",draft:!1,unlisted:!1,editUrl:"https://github.com/Halcyon666/summary/edit/main/i18n/en/docusaurus-plugin-content-docs/current/01-Java/05-ConcurrentAndJVM/final memory domain.mdx",tags:[],version:"current",lastUpdatedAt:1723734192e3,sidebarPosition:2,frontMatter:{title:"final\u57df\u5185\u5b58\u77e5\u8bc6",sidebar_position:2,sidebar_label:"final\u57df\u5185\u5b58\u77e5\u8bc6"},sidebar:"tutorialSidebar",previous:{title:"volatile\u57df\u5185\u5b58\u77e5\u8bc6",permalink:"/en/Java/ConcurrentAndJVM/volatile memory domain"},next:{title:"JMM\u76f8\u5173\u5185\u5bb9",permalink:"/en/Java/ConcurrentAndJVM/JMM"}},c={},o=[{value:"final\u57df\u91cd\u6392\u5e8f\u89c4\u5219",id:"final\u57df\u91cd\u6392\u5e8f\u89c4\u5219",level:2},{value:"\u88abfinal\u4fee\u9970\u7684\u7c7b\u578b\u4e3a\u5f15\u7528\u7c7b\u578b",id:"\u88abfinal\u4fee\u9970\u7684\u7c7b\u578b\u4e3a\u5f15\u7528\u7c7b\u578b",level:2},{value:"\u4e3a\u4ec0\u4e48final\u5f15\u7528\u4e0d\u80fd\u4ece\u6784\u9020\u51fd\u6570\u5185\u6ea2\u51fa",id:"\u4e3a\u4ec0\u4e48final\u5f15\u7528\u4e0d\u80fd\u4ece\u6784\u9020\u51fd\u6570\u5185\u6ea2\u51fa",level:2},{value:"final\u8bed\u4e49\u5728\u5904\u7406\u5668\u4e2d\u7684\u5b9e\u73b0",id:"final\u8bed\u4e49\u5728\u5904\u7406\u5668\u4e2d\u7684\u5b9e\u73b0",level:2}];function d(n){const i={a:"a",admonition:"admonition",h2:"h2",hr:"hr",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.h2,{id:"final\u57df\u91cd\u6392\u5e8f\u89c4\u5219",children:"final\u57df\u91cd\u6392\u5e8f\u89c4\u5219"}),"\n",(0,l.jsx)(i.p,{children:"\u5728\u6784\u9020\u51fd\u6570\u5185\u5bf9\u4e00\u4e2afinal\u57df\u7684\u5199\u5165\uff0c\u4e0e\u968f\u540e\u628a\u8fd9\u4e2a\u88ab\u6784\u9020\u5bf9\u8c61\u7684\u5f15\u7528\u8d4b\u503c\u7ed9\u4e00\u4e2a\u5f15\u7528\u53d8\u91cf\uff0c\u8fd9\u4e24\u4e2a\u64cd\u4f5c\u4e4b\u95f4\u4e0d\u80fd\u91cd\u6392\u5e8f\u3002"}),"\n",(0,l.jsx)(i.p,{children:"\u521d\u6b21\u8bfb\u4e00\u4e2a\u5305\u542bfinal\u57df\u7684\u5bf9\u8c61\u7684\u5f15\u7528\uff0c\u4e0e\u968f\u540e\u521d\u6b21\u8bfb\u8fd9\u4e2afinal\u57df\uff0c\u8fd9\u4e24\u4e2a\u64cd\u4f5c\u4e4b\u95f4\u4e0d\u80fd\u91cd\u6392\u5e8f"}),"\n",(0,l.jsx)(i.p,{children:(0,l.jsx)(i.img,{src:"https://s2.loli.net/2023/07/15/Da4P5Cl7dFgKYen.png",alt:""})}),"\n",(0,l.jsx)(i.p,{children:"\u5047\u8bbe\u4e00\u4e2a\u7ebf\u7a0bA\u6267\u884cwriter()\u65b9\u6cd5\uff0c\u968f\u540e\u53e6\u4e00\u4e2a\u7ebf\u7a0bB\u6267\u884creader()\u65b9\u6cd5"}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:"JMM\u7981\u6b62\u7f16\u8bd1\u5668\u628afinal\u57df\u7684\u5199\u91cd\u6392\u5e8f\u5230\u6784\u9020\u51fd\u6570\u4e4b\u5916\u3002"}),"\n",(0,l.jsx)(i.li,{children:"\u7f16\u8bd1\u5668\u4f1a\u5728final\u57df\u7684\u5199\u4e4b\u540e\uff0c\u6784\u9020\u51fd\u6570return\u4e4b\u524d\uff0c\u63d2\u5165\u4e00\u4e2aStoreStore\u5c4f\u969c\u3002\u8fd9\u4e2a\u5c4f\u969c\u7981\u6b62\u5904\u7406\u5668\u628afinal\u57df\u7684\u5199\u91cd\u6392\u5e8f\u5230\u6784\u9020\u51fd\u6570\u4e4b\u5916\u3002"}),"\n"]}),"\n",(0,l.jsx)(i.p,{children:(0,l.jsx)(i.img,{src:"https://s2.loli.net/2023/07/15/Sh4OgLmT1iNGFCf.png",alt:""})}),"\n",(0,l.jsx)(i.p,{children:"\u8bfb\u5230\u666e\u901a\u53d8\u91cf\u521d\u59cb\u5316\u4e4b\u524d\u7684\u503c"}),"\n",(0,l.jsx)(i.p,{children:(0,l.jsx)(i.img,{src:"https://s2.loli.net/2023/07/15/k96DUOV1gT4Ftso.png",alt:""})}),"\n",(0,l.jsx)(i.p,{children:"\u5bf9\u8c61\u7684\u666e\u901a\u57df\u7684\u64cd\u4f5c\u88ab\u5904\u7406\u5668\u91cd\u6392\u5e8f\u5230\u8bfb\u5bf9\u8c61\u5f15\u7528\u4e4b\u524d\u3002\u8bfb\u666e\u901a\u57df\u65f6\uff0c\u8be5\u57df\u8fd8\u6ca1\u6709\u88ab\u5199\u7ebf\u7a0bA\u5199\u5165\uff0c\u8fd9\u662f\u4e00\u4e2a\u9519\u8bef\u7684\u8bfb\u53d6\u64cd\u4f5c\u3002\u800c\u8bfbfinal\u57df\u7684\u91cd\u6392\u5e8f\u89c4\u5219\u4f1a\u628a\u8bfb\u5bf9\u8c61final\u57df\u7684\u64cd\u4f5c\u201c\u9650\u5b9a\u201d\u5728\u8bfb\u5bf9\u8c61\u5f15\u7528\u4e4b\u540e\uff0c\u6b64\u65f6\u8be5final\u57df\u5df2\u7ecf\u88abA\u7ebf\u7a0b\u521d\u59cb\u5316\u8fc7\u4e86\uff0c\u8fd9\u662f\u4e00\u4e2a\u6b63\u786e\u7684\u8bfb\u53d6\u64cd\u4f5c\u3002"}),"\n",(0,l.jsx)(i.h2,{id:"\u88abfinal\u4fee\u9970\u7684\u7c7b\u578b\u4e3a\u5f15\u7528\u7c7b\u578b",children:"\u88abfinal\u4fee\u9970\u7684\u7c7b\u578b\u4e3a\u5f15\u7528\u7c7b\u578b"}),"\n",(0,l.jsx)(i.p,{children:(0,l.jsx)(i.img,{src:"https://s2.loli.net/2023/07/15/TLzvsetCf178j59.png",alt:""})}),"\n",(0,l.jsx)(i.p,{children:"\u5728\u6784\u9020\u51fd\u6570\u5185\u5bf9\u4e00\u4e2afinal\u5f15\u7528\u7684\u5bf9\u8c61\u7684\u6210\u5458\u57df\u7684\u5199\u5165\uff0c\u4e0e\u968f\u540e\u5728\u6784\u9020\u51fd\u6570\u5916\u628a\u8fd9\u4e2a\u88ab\u6784\u9020\u5bf9\u8c61\u7684\u5f15\u7528\u8d4b\u503c\u7ed9\u4e00\u4e2a\u5f15\u7528\u53d8\u91cf\uff0c\u8fd9\u4e24\u4e2a\u64cd\u4f5c\u4e4b\u95f4\u4e0d\u80fd\u91cd\u6392\u5e8f\u3002"}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsxs)(i.li,{children:["\n",(0,l.jsx)(i.p,{children:"1\u662f\u5bf9final\u57df\u7684\u5199\u5165\uff0c2\u662f\u5bf9\u8fd9\u4e2afinal\u57df\u5f15\u7528\u7684\u5bf9\u8c61\u7684\u6210\u5458\u57df\u7684\u5199\u5165\uff0c3\u662f\u628a\u88ab\u6784\u9020\u7684\u5bf9\u8c61\u7684\u5f15\u7528\u8d4b\u503c\u7ed9\u67d0\u4e2a\u5f15\u7528\u53d8\u91cf\u3002\u8fd9\u91cc\u9664\u4e86\u524d\u9762\u63d0\u5230\u76841\u4e0d\u80fd\u548c3\u91cd\u6392\u5e8f\u5916\uff0c2\u548c3\u4e5f\u4e0d\u80fd\u91cd\u6392\u5e8f\u3002"}),"\n"]}),"\n",(0,l.jsxs)(i.li,{children:["\n",(0,l.jsx)(i.p,{children:"JMM\u53ef\u4ee5\u786e\u4fdd\u8bfb\u7ebf\u7a0bC\u81f3\u5c11\u80fd\u770b\u5230\u5199\u7ebf\u7a0bA\u5728\u6784\u9020\u51fd\u6570\u4e2d\u5bf9final\u5f15\u7528\u5bf9\u8c61\u7684\u6210\u5458\u57df\u7684\u5199\u5165\u3002\u5373C\u81f3\u5c11\u80fd\u770b\u5230\u6570\u7ec4\u4e0b\u68070\u7684\u503c\u4e3a1\u3002\u800c\u5199\u7ebf\u7a0bB\u5bf9\u6570\u7ec4\u5143\u7d20\u7684\u5199\u5165\uff0c\u8bfb\u7ebf\u7a0bC\u53ef\u80fd\u770b\u5f97\u5230\uff0c\u4e5f\u53ef\u80fd\u770b\u4e0d\u5230\u3002JMM\u4e0d\u4fdd\u8bc1\u7ebf\u7a0bB\u7684\u5199\u5165\u5bf9\u8bfb\u7ebf\u7a0bC\n\u53ef\u89c1\uff0c\u56e0\u4e3a\u5199\u7ebf\u7a0bB\u548c\u8bfb\u7ebf\u7a0bC\u4e4b\u95f4\u5b58\u5728\u6570\u636e\u7ade\u4e89\uff0c\u6b64\u65f6\u7684\u6267\u884c\u7ed3\u679c\u4e0d\u53ef\u9884\u77e5\u3002"}),"\n"]}),"\n",(0,l.jsxs)(i.li,{children:["\n",(0,l.jsx)(i.p,{children:"\u5982\u679c\u60f3\u8981\u786e\u4fdd\u8bfb\u7ebf\u7a0bC\u770b\u5230\u5199\u7ebf\u7a0bB\u5bf9\u6570\u7ec4\u5143\u7d20\u7684\u5199\u5165\uff0c\u5199\u7ebf\u7a0bB\u548c\u8bfb\u7ebf\u7a0bC\u4e4b\u95f4\u9700\u8981\u4f7f\u7528\u540c\u6b65\u539f\u8bed\uff08lock\u6216volatile\uff09\u6765\u786e\u4fdd\u5185\u5b58\u53ef\u89c1\u6027\u3002"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(i.h2,{id:"\u4e3a\u4ec0\u4e48final\u5f15\u7528\u4e0d\u80fd\u4ece\u6784\u9020\u51fd\u6570\u5185\u6ea2\u51fa",children:"\u4e3a\u4ec0\u4e48final\u5f15\u7528\u4e0d\u80fd\u4ece\u6784\u9020\u51fd\u6570\u5185\u6ea2\u51fa"}),"\n",(0,l.jsx)(i.p,{children:"\u5728\u5f15\u7528\u53d8\u91cf\u4e3a\u4efb\u610f\u7ebf\u7a0b\u53ef\u89c1\u4e4b\u524d\uff0c\u8be5\u5f15\u7528\u53d8\u91cf\u6307\u5411\u7684\u5bf9\u8c61\u7684final\u57df\u5df2\u7ecf\u5728\u6784\u9020\u51fd\u6570\u4e2d\u88ab\u6b63\u786e\u521d\u59cb\u5316\u8fc7\u4e86"}),"\n",(0,l.jsx)(i.p,{children:"\u5728\u6784\u9020\u51fd\u6570\u5185\u90e8\uff0c\u4e0d\u80fd\u8ba9\u8fd9\u4e2a\u88ab\u6784\u9020\u5bf9\u8c61\u7684\u5f15\u7528\u4e3a\u5176\u4ed6\u7ebf\u7a0b\u6240\u89c1\uff0c\u4e5f\u5c31\u662f\u5bf9\u8c61\u5f15\u7528\u4e0d\u80fd\u5728\u6784\u9020\u51fd\u6570\u4e2d\u201c\u9038\u51fa\u201d\u3002"}),"\n",(0,l.jsx)(i.p,{children:(0,l.jsx)(i.img,{src:"https://s2.loli.net/2023/07/15/iKW2PU6vFrCqVT9.png",alt:""})}),"\n",(0,l.jsx)(i.p,{children:"\u6267\u884cread()\u65b9\u6cd5\u7684\u7ebf\u7a0b\u4ecd\u7136\u53ef\u80fd\u65e0\u6cd5\u770b\u5230final\u57df\u88ab\u521d\u59cb\u5316\u540e\u7684\u503c\uff0c\u56e0\u4e3a\u8fd9\u91cc\u7684\u64cd\u4f5c1\u548c\u64cd\u4f5c2\u4e4b\u95f4\u53ef\u80fd\u88ab\u91cd\u6392\u5e8f\u3002"}),"\n",(0,l.jsx)(i.p,{children:(0,l.jsx)(i.img,{src:"https://s2.loli.net/2023/07/15/w8cFmhtjfQYyk49.png",alt:""})}),"\n",(0,l.jsx)(i.hr,{}),"\n",(0,l.jsx)(i.p,{children:(0,l.jsx)(i.img,{src:"https://s2.loli.net/2023/07/15/H7jnLcbMDz2WUhi.png",alt:""})}),"\n",(0,l.jsx)(i.h2,{id:"final\u8bed\u4e49\u5728\u5904\u7406\u5668\u4e2d\u7684\u5b9e\u73b0",children:"final\u8bed\u4e49\u5728\u5904\u7406\u5668\u4e2d\u7684\u5b9e\u73b0"}),"\n",(0,l.jsx)(i.p,{children:"\u5199final\u57df\u7684\u91cd\u6392\u5e8f\u89c4\u5219\u4f1a\u8981\u6c42\u7f16\u8bd1\u5668\u5728final\u57df\u7684\u5199\u4e4b\u540e\uff0c\u6784\u9020\u51fd\u6570return\u4e4b\u524d\u63d2\u5165\u4e00\u4e2aStoreStore\u969c\u5c4f\u3002\u8bfbfinal\u57df\u7684\u91cd\u6392\u5e8f\u89c4\u5219\u8981\u6c42\u7f16\u8bd1\u5668\u5728\u8bfbfinal\u57df\u7684\u64cd\u4f5c\u524d\u9762\u63d2\u5165\u4e00\u4e2aLoadLoad\u5c4f\u969c\u3002\u7531\u4e8eX86\u5904\u7406\u5668\u4e0d\u4f1a\u5bf9\u5199-\u5199\u64cd\u4f5c\u505a\u91cd\u6392\u5e8f\uff0c\u6240\u4ee5\u5728X86\u5904\u7406\u5668\u4e2d\uff0c\u5199final\u57df\u9700\u8981\u7684StoreStore\u969c\u5c4f\u4f1a\u88ab\u7701\u7565\u6389\u3002\u540c\u6837\uff0c\u7531\u4e8eX86\u5904\u7406\u5668\u4e0d\u4f1a\u5bf9\u5b58\u5728\u95f4\u63a5\u4f9d\u8d56\u5173\u7cfb\u7684\u64cd\u4f5c\u505a\u91cd\u6392\u5e8f\uff0c\u6240\u4ee5\u5728X86\u5904\u7406\u5668\u4e2d\uff0c\u8bfbfinal\u57df\u9700\u8981\u7684LoadLoad\u5c4f\u969c\u4e5f\u4f1a\u88ab\u7701\u7565\u6389\u3002\u4e5f\u5c31\u662f\u8bf4\uff0c\u5728X86\u5904\u7406\u5668\u4e2d\uff0cfinal\u57df\u7684\u8bfb/\u5199\u4e0d\u4f1a\u63d2\u5165\u4efb\u4f55\u5185\u5b58\u5c4f\u969c\uff01(\u5728x86\u5904\u7406\u5668\u4e2d\u4ec5\u6709StoreLoad\u5c4f\u969c)"}),"\n",(0,l.jsx)(i.admonition,{title:"\u534f\u8bae",type:"tip",children:(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsxs)(i.li,{children:["\n",(0,l.jsxs)(i.p,{children:["\u672c\u4f5c\u54c1\u4ee3\u7801\u90e8\u5206\u91c7\u7528 ",(0,l.jsx)(i.a,{href:"https://www.apache.org/licenses/LICENSE-2.0",children:"Apache 2.0\u534f\u8bae"}),"\u8fdb\u884c\u8bb8\u53ef\u3002\u9075\u5faa\u8bb8\u53ef\u7684\u524d\u63d0\u4e0b\uff0c\u4f60\u53ef\u4ee5\u81ea\u7531\u5730\u5bf9\u4ee3\u7801\u8fdb\u884c\u4fee\u6539\uff0c\u518d\u53d1\u5e03\uff0c\u53ef\u4ee5\u5c06\u4ee3\u7801\u7528\u4f5c\u5546\u4e1a\u7528\u9014\u3002\u4f46\u8981\u6c42\u4f60\uff1a"]}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.strong,{children:"\u7f72\u540d"}),"\uff1a\u5728\u539f\u6709\u4ee3\u7801\u548c\u884d\u751f\u4ee3\u7801\u4e2d\uff0c\u4fdd\u7559\u539f\u4f5c\u8005\u7f72\u540d\u53ca\u4ee3\u7801\u6765\u6e90\u4fe1\u606f\u3002"]}),"\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.strong,{children:"\u4fdd\u7559\u8bb8\u53ef\u8bc1"}),"\uff1a\u5728\u539f\u6709\u4ee3\u7801\u548c\u884d\u751f\u4ee3\u7801\u4e2d\uff0c\u4fdd\u7559Apache 2.0\u534f\u8bae\u6587\u4ef6\u3002"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(i.li,{children:["\n",(0,l.jsxs)(i.p,{children:["\u672c\u4f5c\u54c1\u6587\u6863\u90e8\u5206\u91c7\u7528",(0,l.jsx)(i.a,{href:"http://creativecommons.org/licenses/by/4.0/",children:"\u77e5\u8bc6\u5171\u4eab\u7f72\u540d 4.0 \u56fd\u9645\u8bb8\u53ef\u534f\u8bae"}),"\u8fdb\u884c\u8bb8\u53ef\u3002 \u9075\u5faa\u8bb8\u53ef\u7684\u524d\u63d0\u4e0b\uff0c\u4f60\u53ef\u4ee5\u81ea\u7531\u5730\u5171\u4eab\uff0c\u5305\u62ec\u5728\u4efb\u4f55\u5a92\u4ecb\u4e0a\u4ee5\u4efb\u4f55\u5f62\u5f0f\u590d\u5236\u3001\u53d1\u884c\u672c\u4f5c\u54c1\uff0c\u4ea6\u53ef\u4ee5\u81ea\u7531\u5730\u6f14\u7ece\u3001\u4fee\u6539\u3001\u8f6c\u6362\u6216\u4ee5\u672c\u4f5c\u54c1\u4e3a\u57fa\u7840\u8fdb\u884c\u4e8c\u6b21\u521b\u4f5c\u3002\u4f46\u8981\u6c42\u4f60\uff1a"]}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.strong,{children:"\u7f72\u540d"}),"\uff1a\u5e94\u5728\u4f7f\u7528\u672c\u6587\u6863\u7684\u5168\u90e8\u6216\u90e8\u5206\u5185\u5bb9\u65f6\u5019\uff0c\u6ce8\u660e\u539f\u4f5c\u8005\u53ca\u6765\u6e90\u4fe1\u606f\u3002"]}),"\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.strong,{children:"\u975e\u5546\u4e1a\u6027\u4f7f\u7528"}),"\uff1a\u4e0d\u5f97\u7528\u4e8e\u5546\u4e1a\u51fa\u7248\u6216\u5176\u4ed6\u4efb\u4f55\u5e26\u6709\u5546\u4e1a\u6027\u8d28\u7684\u884c\u4e3a\u3002\u5982\u9700\u5546\u4e1a\u4f7f\u7528\uff0c\u8bf7\u8054\u7cfb\u4f5c\u8005\u3002"]}),"\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.strong,{children:"\u76f8\u540c\u65b9\u5f0f\u5171\u4eab\u7684\u6761\u4ef6"}),"\uff1a\u5728\u672c\u6587\u6863\u57fa\u7840\u4e0a\u6f14\u7ece\u3001\u4fee\u6539\u7684\u4f5c\u54c1\uff0c\u5e94\u5f53\u7ee7\u7eed\u4ee5\u77e5\u8bc6\u5171\u4eab\u7f72\u540d 4.0\u56fd\u9645\u8bb8\u53ef\u534f\u8bae\u8fdb\u884c\u8bb8\u53ef\u3002"]}),"\n"]}),"\n"]}),"\n"]})})]})}function h(n={}){const{wrapper:i}={...(0,r.a)(),...n.components};return i?(0,l.jsx)(i,{...n,children:(0,l.jsx)(d,{...n})}):d(n)}},73:(n,i,e)=>{e.d(i,{Z:()=>a,a:()=>t});var l=e(959);const r={},s=l.createContext(r);function t(n){const i=l.useContext(s);return l.useMemo((function(){return"function"==typeof n?n(i):{...i,...n}}),[i,n])}function a(n){let i;return i=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:t(n.components),l.createElement(s.Provider,{value:i},n.children)}}}]);