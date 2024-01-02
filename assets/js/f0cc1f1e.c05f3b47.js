"use strict";(self.webpackChunksummary=self.webpackChunksummary||[]).push([[433],{3825:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>h,contentTitle:()=>c,default:()=>x,frontMatter:()=>s,metadata:()=>d,toc:()=>t});var l=i(5893),r=i(1151);const s={title:"JAVA\u865a\u62df\u673a",sidebar_label:"JAVA\u865a\u62df\u673a",sidebar_position:6},c=void 0,d={id:"Java/ConcurrentAndJVM/JAVA\u865a\u62df\u673a",title:"JAVA\u865a\u62df\u673a",description:"\u7c7b\u52a0\u8f7d\u8fc7\u7a0b",source:"@site/docs/01-Java/05-ConcurrentAndJVM/JAVA\u865a\u62df\u673a.mdx",sourceDirName:"01-Java/05-ConcurrentAndJVM",slug:"/Java/ConcurrentAndJVM/JAVA\u865a\u62df\u673a",permalink:"/Java/ConcurrentAndJVM/JAVA\u865a\u62df\u673a",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"JAVA\u865a\u62df\u673a",sidebar_label:"JAVA\u865a\u62df\u673a",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"\u9501",permalink:"/Java/ConcurrentAndJVM/\u9501"},next:{title:"Oracle\u5b58\u50a8\u8fc7\u7a0b",permalink:"/Java/DateBase/Oracle\u5b58\u50a8\u8fc7\u7a0b"}},h={},t=[{value:"\u7c7b\u52a0\u8f7d\u8fc7\u7a0b",id:"\u7c7b\u52a0\u8f7d\u8fc7\u7a0b",level:2},{value:"\u52a0\u8f7d",id:"\u52a0\u8f7d",level:3},{value:"\u9a8c\u8bc1",id:"\u9a8c\u8bc1",level:3},{value:"\u51c6\u5907",id:"\u51c6\u5907",level:3},{value:"\u89e3\u6790",id:"\u89e3\u6790",level:2},{value:"\u521d\u59cb\u5316",id:"\u521d\u59cb\u5316",level:3},{value:"\u52a8\u6001\u8c03\u7528",id:"\u52a8\u6001\u8c03\u7528",level:2},{value:"\u9759\u6001\u5206\u914d",id:"\u9759\u6001\u5206\u914d",level:3},{value:"\u52a8\u6001\u5206\u914d",id:"\u52a8\u6001\u5206\u914d",level:3},{value:"\u9501",id:"\u9501",level:2},{value:"\u504f\u5411\u9501",id:"\u504f\u5411\u9501",level:3},{value:"\u8f7b\u91cf\u9501",id:"\u8f7b\u91cf\u9501",level:3},{value:"\u91cd\u91cf\u9501",id:"\u91cd\u91cf\u9501",level:3},{value:"synchronized \u548c volatile",id:"synchronized-\u548c-volatile",level:3},{value:"synchronize \u548c ReentrantLock",id:"synchronize-\u548c-reentrantlock",level:3},{value:"\u53cc\u4eb2\u59d4\u6d3e\u6a21\u578b",id:"\u53cc\u4eb2\u59d4\u6d3e\u6a21\u578b",level:3},{value:"\u7c7b\u7684\u5b9e\u4f8b\u5316 \u65f6\u7236\u5b50\u7c7b\u4e2d\u5404\u5c5e\u6027\u52a0\u8f7d\u987a\u5e8f",id:"\u7c7b\u7684\u5b9e\u4f8b\u5316-\u65f6\u7236\u5b50\u7c7b\u4e2d\u5404\u5c5e\u6027\u52a0\u8f7d\u987a\u5e8f",level:3},{value:"\u4f18\u5316GC",id:"\u4f18\u5316gc",level:2},{value:"\u5783\u573e\u56de\u6536\u4ee5\u53ca\u7b97\u6cd5",id:"\u5783\u573e\u56de\u6536\u4ee5\u53ca\u7b97\u6cd5",level:2}];function o(n){const e={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h2,{id:"\u7c7b\u52a0\u8f7d\u8fc7\u7a0b",children:"\u7c7b\u52a0\u8f7d\u8fc7\u7a0b"}),"\n",(0,l.jsx)(e.h3,{id:"\u52a0\u8f7d",children:"\u52a0\u8f7d"}),"\n",(0,l.jsxs)(e.ol,{children:["\n",(0,l.jsx)(e.li,{children:"\u53d6\u4e8c\u8fdb\u5236\u6d41\uff1a\u901a\u8fc7\u4e00\u4e2a\u7c7b\u7684\u5168\u9650\u5b9a\u540d\u83b7\u53d6\u5b9a\u4e49\u6b64\u7c7b\u7684\u4e8c\u8fdb\u5236\u6d41\u3002"}),"\n",(0,l.jsx)(e.li,{children:"\u8f6c\u6362\u4e3a\u8fd0\u884c\u65f6\u7684\u6570\u636e\u7ed3\u6784\uff1a\u5c06\u5b57\u8282\u6d41\u9759\u6001\u5b58\u50a8\u7ed3\u6784\u8f6c\u5316\u4e3a\u65b9\u6cd5\u53bb\u8fd0\u884c\u65f6\u7684\u6570\u636e\u7ed3\u6784"}),"\n",(0,l.jsx)(e.li,{children:"\u751f\u6210class\uff1a\u5728\u5185\u5b58\u4e2d\u751f\u6210\u4e00\u4e2a\u4ee3\u8868\u8fd9\u4e2a\u7c7b\u7684class\u5bf9\u8c61 \uff0c\u4f5c\u4e3a\u65b9\u6cd5\u533a\u8fd9\u4e2a\u7c7b\u7684\u5404\u79cd\u6570\u636e\u7684\u8bbf\u95ee\u5165\u53e3"}),"\n"]}),"\n",(0,l.jsx)(e.h3,{id:"\u9a8c\u8bc1",children:"\u9a8c\u8bc1"}),"\n",(0,l.jsxs)(e.ol,{children:["\n",(0,l.jsx)(e.li,{children:"\u6587\u4ef6\u683c\u5f0f\u9a8c\u8bc1\uff1a\u5b57\u8282\u6d41\u8fdb\u5165\u5ae9\u6751\u7684\u65b9\u6cd5\u533a\u8fdb\u884c\u5b58\u50a8"}),"\n",(0,l.jsx)(e.li,{children:"\u5143\u6570\u636e\u9a8c\u8bc1"}),"\n",(0,l.jsx)(e.li,{children:"\u5b57\u8282\u7801\u9a8c\u8bc1\uff1a\u4f7f\u7528\u7c7b\u578b\u68c0\u67e5\u6765\u5b8c\u6210\u6570\u636e\u6d41\u5206\u6790\u6821\u9a8c"}),"\n",(0,l.jsx)(e.li,{children:"\u7b26\u53f7\u5f15\u7528\u9a8c\u8bc1\uff1a"}),"\n"]}),"\n",(0,l.jsx)(e.h3,{id:"\u51c6\u5907",children:"\u51c6\u5907"}),"\n",(0,l.jsx)(e.p,{children:"\u6b63\u5f0f\u4e3a\u7c7b\u53d8\u91cf\u5206\u914d\u5185\u5b58\u5e76\u8bbe\u7f6e\u7c7b\u53d8\u91cf\u521d\u59cb\u503c\uff0c\u90fd\u5c06\u5728\u65b9\u6cd5\u533a\u4e2d\u8fdb\u884c\u5206\u914d"}),"\n",(0,l.jsx)(e.h2,{id:"\u89e3\u6790",children:"\u89e3\u6790"}),"\n",(0,l.jsx)(e.p,{children:"\u865a\u62df\u673a\u5c06\u7b26\u53f7\u5f15\u7528\u66ff\u6362\u4e3a\u76f4\u63a5\u5f15\u7528\u7684\u8fc7\u7a0b"}),"\n",(0,l.jsx)(e.h3,{id:"\u521d\u59cb\u5316",children:"\u521d\u59cb\u5316"}),"\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.code,{children:"<clinit>"})," ",(0,l.jsx)(e.code,{children:"<init>"})]}),"\n",(0,l.jsx)(e.p,{children:"\u516d\u79cd\u89e6\u53d1\u521d\u59cb\u5316\u7684\u60c5\u5f62\u5982\u4e0b\uff1a"}),"\n",(0,l.jsxs)(e.ol,{children:["\n",(0,l.jsx)(e.li,{children:"new\u521b\u5efa\u7c7b\u5b9e\u4f8b"}),"\n",(0,l.jsx)(e.li,{children:"\u8bbf\u95ee\u67d0\u4e2a\u7c7b\u7684\u6216\u8005\u63a5\u53e3\u7684\u9759\u6001\u53d8\u91cf\uff0c\u6216\u8005\u5bf9\u8be5\u9759\u6001\u53d8\u91cf\u8d4b\u503c"}),"\n",(0,l.jsx)(e.li,{children:"\u8c03\u7528\u7c7b\u7684\u9759\u6001\u65b9\u6cd5"}),"\n",(0,l.jsx)(e.li,{children:'\u53cd\u5c04class.forName("com.xxx.xxx")'}),"\n",(0,l.jsx)(e.li,{children:"\u521d\u59cb\u5316\u4e00\u4e2a\u7c7b\u7684\u5b50\u7c7b"}),"\n",(0,l.jsx)(e.li,{children:"java\u865a\u62df\u673a\u542f\u52a8\u65f6\u88ab\u6807\u540d\u4e3a\u542f\u52a8\u7c7b\u7684\u7c7b"}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"\u52a8\u6001\u8c03\u7528",children:"\u52a8\u6001\u8c03\u7528"}),"\n",(0,l.jsx)(e.h3,{id:"\u9759\u6001\u5206\u914d",children:"\u9759\u6001\u5206\u914d"}),"\n",(0,l.jsx)(e.p,{children:"\u5bf9\u5e94\u65b9\u6cd5\u7684\u91cd\u8f7d\uff1a\u4f9d\u8d56\u9759\u6001\u7c7b\u578b\u6765\u5b9a\u4f4d\u65b9\u6cd5\u6267\u884c\u7684\u7248\u672c\uff0c\u5c5e\u4e8e\u591a\u5206\u6d3e"}),"\n",(0,l.jsx)(e.h3,{id:"\u52a8\u6001\u5206\u914d",children:"\u52a8\u6001\u5206\u914d"}),"\n",(0,l.jsx)(e.p,{children:"\u5bf9\u5e94\u65b9\u6cd5\u91cd\u5199\uff0c\u5c5e\u4e8e\u5355\u5206\u6d3e\u3002"}),"\n",(0,l.jsx)(e.p,{children:"\u786e\u8ba4\u65b9\u6cd5\u7684\u6b65\u9aa4\uff1a"}),"\n",(0,l.jsxs)(e.ol,{children:["\n",(0,l.jsx)(e.li,{children:"\u627e\u5230\u64cd\u4f5c\u6570\u6808\u7684\u7b2c\u4e00\u4e2a\u5143\u7d20\u6240\u6307\u5411\u7684\u5bf9\u8c61\u7684\u5b9e\u9645\u7c7b\u578b\uff0c\u5373new \u5173\u952e\u5b57\u540e\u9762\u7c7b\u578b"}),"\n",(0,l.jsx)(e.li,{children:"\u5982\u679c\u5728\u5e38\u91cf\u6c60\u4e2d\u627e\u5230\u63cf\u8ff0\u7b26\u5408\u7b80\u5355\u65b9\u6cd5\u540d\u90fd\u76f8\u7b26\u7684\u65b9\u6cd5\uff0c\u5219\u8fdb\u884c\u8bbf\u95ee\u6743\u9650\u7684\u6821\u9a8c\u901a\u8fc7\uff0c\u5219\u76f4\u63a5\u5f15\u7528"}),"\n",(0,l.jsx)(e.li,{children:"\u5426\u5219\u6309\u7167\u7ee7\u627f\u5173\u7cfb\u81ea\u4e0b\u800c\u4e0a\u8fdb\u884c\u7b2c\u4e8c\u90e8\u64cd\u4f5c\uff0c\u91cd\u65b0\u67e5\u627e\u5176\u4ed6\u5b50\u7c7b"}),"\n",(0,l.jsx)(e.li,{children:"\u5982\u679c\u59cb\u7ec8\u6ca1\u6709\u627e\u5230\u5219\u629b\u51fa\u5f02\u5e38"}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:"\u51e0\u4e2a\u76f8\u5173\u540d\u8bcd\u7684\u5b9a\u4e49\uff1a"}),"\n",(0,l.jsx)(e.p,{children:"\u5b97\u91cf\uff1a\u65b9\u6cd5\u63a5\u53d7\u8005\u4e0e\u65b9\u6cd5\u7684\u53c2\u6570\n\u5355\u5206\u6d3e\uff1a\u6839\u636e\u4e00\u4e2a\u603b\u91cf\u5bf9\u76ee\u6807\u65b9\u6cd5\u8fdb\u884c\u9009\u62e9\n\u591a\u5206\u6d3e\uff1a\u6839\u636e\u591a\u4e2a\u5b97\u91cf\u5bf9\u76ee\u6807\u65b9\u6cd5\u8fdb\u884c\u9009\u62e9"}),"\n",(0,l.jsxs)(e.p,{children:["JAVA\u8bed\u8a00\u662f\u4e00\u95e8",(0,l.jsx)(e.strong,{children:"\u9759\u6001\u591a\u5206\u6d3e"})," ",(0,l.jsx)(e.strong,{children:"\u52a8\u6001\u5355\u5206\u6d3e"}),"\u8bed\u8a00"]}),"\n",(0,l.jsx)(e.h2,{id:"\u9501",children:"\u9501"}),"\n",(0,l.jsx)(e.p,{children:"\u81ea\u65cb\uff1a\u81ea\u65cb\u662f\u6307\u67d0\u7ebf\u7a0b\u9700\u8981\u83b7\u53d6\u9501\uff0c\u4f46\u8be5\u9501\u5df2\u7ecf\u88ab\u5176\u4ed6\u7ebf\u7a0b\u5360\u7528\u65f6\uff0c\u8be5\u7ebf\u7a0b\u4e0d\u4f1a\u88ab\u6302\u8d77\uff0c\u800c\u662f\u5728\u4e0d\u65ad\u7684\u6d88\u8017CPU\u7684\u65f6\u95f4\uff0c\u4e0d\u505c\u7684\u8bd5\u56fe\u83b7\u53d6\u9501\u3002"}),"\n",(0,l.jsx)(e.h3,{id:"\u504f\u5411\u9501",children:"\u504f\u5411\u9501"}),"\n",(0,l.jsx)(e.p,{children:"\u5f15\u5165\u504f\u5411\u9501\u662f\u4e3a\u4e86\u5728\u65e0\u591a\u7ebf\u7a0b\u7ade\u4e89\u7684\u60c5\u51b5\u4e0b\u5c3d\u91cf\u51cf\u5c11\u4e0d\u5fc5\u8981\u7684\u8f7b\u91cf\u7ea7\u9501\u6267\u884c\u8def\u5f84\uff0c\u56e0\u4e3a\u8f7b\u91cf\u7ea7\u9501\u7684\u83b7\u53d6\u53ca\u91ca\u653e\u4f9d\u8d56\u591a\u6b21CAS\u539f\u5b50\u6307\u4ee4\uff0c\u800c\u504f\u5411\u9501\u53ea\u9700\u8981\u5728\u7f6e\u6362ThreadID\u7684\u65f6\u5019\u4f9d\u8d56\u4e00\u6b21CAS\u539f\u5b50\u6307\u4ee4\u3002\n\u5f53\u53ea\u6709\u4e00\u4e2a\u7ebf\u7a0b\u53bb\u7ade\u4e89\u9501\u7684\u65f6\u5019\uff0c\u6211\u4eec\u4e0d\u9700\u8981\u963b\u585e\uff0c\u4e5f\u4e0d\u9700\u8981\u81ea\u65cb\uff0c\u56e0\u4e3a\u53ea\u6709\u4e00\u4e2a\u7ebf\u7a0b\u5728\u7ade\u4e89\uff0c\u6211\u4eec\u53ea\u8981\u53bb\u5224\u65ad\u8be5\u504f\u5411\u9501\u4e2d\u7684ThreadID\u662f\u5426\u4e3a\u5f53\u524d\u7ebf\u7a0b\u5373\u53ef\u3002\u5982\u679c\u662f\u5c31\u6267\u884c\u540c\u6b65\u4ee3\u7801\uff0c\u4e0d\u662f\u5c31\u5c1d\u8bd5\u4f7f\u7528CAS\u4fee\u6539ThreadID\uff0c\u4fee\u6539\u6210\u529f\u6267\u884c\u540c\u6b65\u4ee3\u7801\uff0c\u4e0d\u6210\u529f\u5c31\u5c06\u504f\u5411\u9501\u5347\u7ea7\u6210\u8f7b\u91cf\u9501\u3002"}),"\n",(0,l.jsx)(e.h3,{id:"\u8f7b\u91cf\u9501",children:"\u8f7b\u91cf\u9501"}),"\n",(0,l.jsx)(e.p,{children:"\u83b7\u53d6\u8f7b\u91cf\u9501\u7684\u8fc7\u7a0b\u4e0e\u504f\u5411\u9501\u4e0d\u540c\uff0c\u7ade\u4e89\u9501\u7684\u7ebf\u7a0b\u9996\u5148\u9700\u8981\u62f7\u8d1d\u5bf9\u8c61\u5934\u4e2d\u7684Mark Word\u5230\u5e27\u6808\u7684\u9501\u8bb0\u5f55\u4e2d\u3002\u62f7\u8d1d\u6210\u529f\u540e\u4f7f\u7528CAS\u64cd\u4f5c\u5c1d\u8bd5\u5c06\u5bf9\u8c61\u7684Mark Word\u66f4\u65b0\u4e3a\u6307\u5411\u5f53\u524d\u7ebf\u7a0b\u7684\u6307\u9488\u3002\u5982\u679c\u8fd9\u4e2a\u66f4\u65b0\u52a8\u4f5c\u6210\u529f\u4e86\uff0c\u90a3\u4e48\u8fd9\u4e2a\u7ebf\u7a0b\u5c31\u62e5\u6709\u4e86\u8be5\u5bf9\u8c61\u7684\u9501\u3002\u5982\u679c\u66f4\u65b0\u5931\u8d25\uff0c\u90a3\u4e48\u610f\u5473\u7740\u6709\u591a\u4e2a\u7ebf\u7a0b\u5728\u7ade\u4e89\u3002\n\u5f53\u7ade\u4e89\u7ebf\u7a0b\u5c1d\u8bd5\u5360\u7528\u8f7b\u91cf\u7ea7\u9501\u5931\u8d25\u591a\u6b21\u4e4b\u540e\uff08\u4f7f\u7528\u81ea\u65cb\uff09\u8f7b\u91cf\u7ea7\u9501\u5c31\u4f1a\u81a8\u80c0\u4e3a\u91cd\u91cf\u7ea7\u9501\uff0c\u91cd\u91cf\u7ea7\u7ebf\u7a0b\u6307\u9488\u6307\u5411\u7ade\u4e89\u7ebf\u7a0b\uff0c\u7ade\u4e89\u7ebf\u7a0b\u4e5f\u4f1a\u963b\u585e\uff0c\u7b49\u5f85\u8f7b\u91cf\u7ea7\u7ebf\u7a0b\u91ca\u653e\u9501\u540e\u5524\u9192\u4ed6\u3002"}),"\n",(0,l.jsx)(e.h3,{id:"\u91cd\u91cf\u9501",children:"\u91cd\u91cf\u9501"}),"\n",(0,l.jsx)(e.p,{children:"\u91cd\u91cf\u7ea7\u9501\u7684\u52a0\u9501\u3001\u89e3\u9501\u8fc7\u7a0b\u548c\u8f7b\u91cf\u7ea7\u9501\u5dee\u4e0d\u591a\uff0c\u533a\u522b\u662f\uff1a\u7ade\u4e89\u5931\u8d25\u540e\uff0c\u7ebf\u7a0b\u963b\u585e\uff0c\u91ca\u653e\u9501\u540e\uff0c\u5524\u9192\u963b\u585e\u7684\u7ebf\u7a0b\uff0c\u4e0d\u4f7f\u7528\u81ea\u65cb\u9501\uff0c\u4e0d\u4f1a\u90a3\u4e48\u6d88\u8017CPU\uff0c\u6240\u4ee5\u91cd\u91cf\u7ea7\u9501\u9002\u5408\u7528\u5728\u540c\u6b65\u5757\u6267\u884c\u65f6\u95f4\u957f\u7684\u60c5\u51b5\u4e0b"}),"\n",(0,l.jsx)(e.h3,{id:"synchronized-\u548c-volatile",children:"synchronized \u548c volatile"}),"\n",(0,l.jsxs)(e.ol,{children:["\n",(0,l.jsx)(e.li,{children:"volatile\u672c\u8d28\u662f\u5728\u544a\u8bc9jvm\u5f53\u524d\u53d8\u91cf\u5728\u5bc4\u5b58\u5668(\u5de5\u4f5c\u5185\u5b58)\u4e2d\u7684\u503c\u4e0d\u786e\u5b9a\uff0c\u9700\u8981\u4ece\u4e3b\u5185\u5b58\u4e2d\u8bfb\u53d6\uff1bsynchronize\u9501\u5b9a\u5f53\u524d\u53d8\u91cf\uff0c\u53ea\u6709\u5f53\u524d\u7ebf\u7a0b\u53ef\u4ee5\u5f53\u95ee\u8be5\u53d8\u91cf\uff0c\u5176\u4ed6\u7ebf\u7a0b\u88ab\u963b\u585e\u4f4f"}),"\n",(0,l.jsx)(e.li,{children:"volatile\u4ec5\u80fd\u4f7f\u7528\u5728\u53d8\u91cf\u7ea7\u522b synchronize\u53ef\u4ee5\u4f7f\u7528\u5728\u53d8\u91cf\u3001\u65b9\u6cd5\u3001\u7c7b"}),"\n",(0,l.jsx)(e.li,{children:"volatile\u4ec5\u5b9e\u73b0\u53d8\u91cf\u7684\u4fee\u6539\u53ef\u89c1\u6027\uff0c\u4e0d\u80fd\u4fdd\u8bc1\u539f\u5b50\u6027\uff1b\u800csynchronized\u5219\u90fd\u53ef\u4ee5\u4fdd\u8bc1"}),"\n",(0,l.jsx)(e.li,{children:"volatile\u4e0d\u4f1a\u9020\u6210\u7ebf\u7a0b\u7684\u963b\u585e\uff1bsynchronized\u4f1a\u9020\u6210\u7ebf\u7a0b\u7684\u963b\u585e"}),"\n",(0,l.jsx)(e.li,{children:"volatile\u53d8\u91cf\u4e0d\u4f1a\u88ab\u7f16\u8bd1\u5668\u4f18\u5316\uff1bsynchronized\u6807\u8bb0\u7684\u53d8\u91cf\u53ef\u4ee5\u88ab\u7f16\u8bd1\u5668\u4f18\u5316"}),"\n"]}),"\n",(0,l.jsx)(e.h3,{id:"synchronize-\u548c-reentrantlock",children:"synchronize \u548c ReentrantLock"}),"\n",(0,l.jsx)(e.p,{children:"ReentrantLock\u6269\u5c55\u4e86synchronized\nReentrantLock\u53ef\u4ee5\u5bf9\u9501\u7684\u7b49\u5f85\u4e8b\u4ef6\u8fdb\u884c\u8bbe\u7f6e\uff0c\u8fd9\u6837\u5c31\u907f\u514d\u4e86\u6b7b\u9501\nReentrantLock\u53ef\u4ee5\u83b7\u53d6\u5404\u79cd\u9501\u7684\u4fe1\u606f\nReentrantLock\u53ef\u4ee5\u7075\u6d3b\u5730\u5b9e\u73b0\u591a\u8def\u901a\u77e5"}),"\n",(0,l.jsx)(e.p,{children:"\u4e24\u8005\u52a0\u9501\u673a\u5236\u4e0d\u4e00\u6837\uff1a\nReentrantLock\u5e95\u5c42\u8c03\u7528\u7684\u662fUnsafe\u7684park\u65b9\u6cd5\u52a0\u9501\nsynchronized\u64cd\u4f5c\u5bf9\u8c61\u5934\u4e2d\u7684mark word\u4fe1\u606f\u8fdb\u884c\u52a0\u9501"}),"\n",(0,l.jsx)(e.h3,{id:"\u53cc\u4eb2\u59d4\u6d3e\u6a21\u578b",children:"\u53cc\u4eb2\u59d4\u6d3e\u6a21\u578b"}),"\n",(0,l.jsx)(e.p,{children:"\u7c7b\u52a0\u8f7d\u5668\u5206\u7c7b\uff1a\u6bcf\u4e00\u4e2a\u7c7b\u52a0\u8f7d\u5668\u90fd\u6709\u4e00\u4e2a\u72ec\u7acb\u7684\u540d\u547d\u7a7a\u95f4"}),"\n",(0,l.jsx)(e.p,{children:"\u542f\u52a8\u7c7b\u52a0\u8f7d\u5668\uff1a\u662f\u865a\u62df\u673a\u81ea\u8eab\u7684\u4e00\u90e8\u5206\uff0c\u7528\u6765\u52a0\u8f7dJAVA_HOME/lib/\u76ee\u5f55\u4e2d\u7684\u7c7b\n\u6269\u5c55\u7c7b\u52a0\u8f7d\u5668\uff1a\u8d1f\u8d23\u52a0\u8f7djava.ext.dirs\u7cfb\u7edf\u53d8\u91cf\u6307\u5b9a\u7684\u8def\u5f84\u4e2d\u6240\u6709\u7684\u7c7b\u5e93\n\u5e94\u7528\u7a0b\u5e8f\u7c7b\u52a0\u8f7d\u5668\uff1a\u8d1f\u8d23\u52a0\u8f7d\u7528\u6237\u7c7b\u8def\u5f84\u4e0a\u7684\u6307\u5b9a\u7c7b\u5e93\uff0c\u9ed8\u8ba4\u4f7f\u7528\u7684\u7c7b\u52a0\u8f7d\u5668"}),"\n",(0,l.jsx)(e.p,{children:"\u5982\u679c\u4e00\u4e2a\u7c7b\u52a0\u8f7d\u5668\u6536\u5230\u4e86\u7c7b\u52a0\u8f7d\u7684\u8bf7\u6c42\uff0c\u5b83\u9996\u5148\u4e0d\u4f1a\u53bb\u52a0\u8f7d\u8fd9\u4e2a\u7c7b\uff0c\u800c\u662f\u628a\u8fd9\u4e2a\u8bf7\u6c42\u59d4\u6d3e\u7ed9\u7236\u7c7b\u52a0\u8f7d\u5668\u53bb\u5b8c\u6210\uff0c\u6bcf\u4e00\u5c42\u7684\u52a0\u8f7d\u5668\u90fd\u662f\u5982\u6b64\uff0c\u8fd9\u6837\u6240\u6709\u7684\u52a0\u8f7d\u8bf7\u6c42\u4f1a\u88ab\u4f20\u5230\u9876\u5c42\u7684\u542f\u52a8\u7c7b\u52a0\u8f7d\u5668\u4e2d\uff0c\u53ea\u6709\u5f53\u7236\u7c7b\u52a0\u8f7d\u65e0\u6cd5\u5b8c\u6210\u52a0\u8f7d\u8bf7\u6c42\u65f6\uff0c\u5b50\u52a0\u8f7d\u5668\u624d\u4f1a\u5c1d\u8bd5\u53bb\u52a0\u8f7d\u7c7b"}),"\n",(0,l.jsx)(e.h3,{id:"\u7c7b\u7684\u5b9e\u4f8b\u5316-\u65f6\u7236\u5b50\u7c7b\u4e2d\u5404\u5c5e\u6027\u52a0\u8f7d\u987a\u5e8f",children:"\u7c7b\u7684\u5b9e\u4f8b\u5316 \u65f6\u7236\u5b50\u7c7b\u4e2d\u5404\u5c5e\u6027\u52a0\u8f7d\u987a\u5e8f"}),"\n",(0,l.jsxs)(e.ol,{children:["\n",(0,l.jsx)(e.li,{children:"\u7236\u7c7b\u9759\u6001\u53d8\u91cf"}),"\n",(0,l.jsx)(e.li,{children:"\u7236\u7c7b\u9759\u6001\u4ee3\u7801\u5757"}),"\n",(0,l.jsx)(e.li,{children:"\u5b50\u7c7b\u7684\u9759\u6001\u53d8\u91cf"}),"\n",(0,l.jsx)(e.li,{children:"\u5b50\u7c7b\u9759\u6001\u4ee3\u7801\u5757"}),"\n",(0,l.jsx)(e.li,{children:"\u7236\u7c7b\u975e\u9759\u6001\u53d8\u91cf"}),"\n",(0,l.jsx)(e.li,{children:"\u7236\u7c7b\u6784\u9020\u51fd\u6570"}),"\n",(0,l.jsx)(e.li,{children:"\u5b50\u7c7b\u975e\u9759\u6001\u53d8\u91cf"}),"\n",(0,l.jsx)(e.li,{children:"\u5b50\u7c7b\u6784\u9020\u51fd\u6570"}),"\n",(0,l.jsx)(e.li,{children:"\u9759\u6001\u53d8\u91cf \u9759\u6001\u4ee3\u7801\u5757 \u975e\u9759\u6001\u53d8\u91cf \u6784\u9020\u51fd\u6570"}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"\u4f18\u5316gc",children:"\u4f18\u5316GC"}),"\n",(0,l.jsxs)(e.ol,{children:["\n",(0,l.jsxs)(e.li,{children:["\u9002\u5f53\u8c03\u6574-XX",":ServivorRatio","\u7684\u6bd4\u4f8b"]}),"\n",(0,l.jsx)(e.li,{children:"\u9009\u62e9\u9002\u5408\u81ea\u5df1\u4e1a\u52a1\u7684\u5783\u573e\u6536\u96c6\u5668\uff0cweb\u670d\u52a1\u4e00\u822c\u662fParNew+CMS"}),"\n",(0,l.jsx)(e.li,{children:"\u8c03\u6574jvm\u8001\u5e74\u4ee3\uff0c\u65b0\u751f\u4ee3\u4ee5\u53ca\u6301\u4e45\u4ee3\u7684\u6bd4\u4f8b\uff0c\u6d4b\u8bd5\u51fa\u4e00\u4e2a\u6bd4\u8f83\u6ee1\u610f\u7684\u503c"}),"\n",(0,l.jsxs)(e.li,{children:["\u8bbe\u7f6e-XX",":MaxTenuringThreshold"," \u8ba9\u65b0\u751f\u4ee3\u63d0\u524d\u8fdb\u5165\u8001\u5e74\u4ee3\uff0c\u51cf\u5c11\u5728survivor\u533a\u57df\u7684\u590d\u5236"]}),"\n",(0,l.jsxs)(e.li,{children:["\u8c03\u6574 -XX",":CMSInitiatingOccupancyFraction","=60\uff0c\u63a7\u5236minor gc\u9891\u7387"]}),"\n",(0,l.jsx)(e.li,{children:"-XX+UseCMSCompactAtFullCollection\u6d88\u9664cms\u788e\u7247"}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"\u5783\u573e\u56de\u6536\u4ee5\u53ca\u7b97\u6cd5",children:"\u5783\u573e\u56de\u6536\u4ee5\u53ca\u7b97\u6cd5"}),"\n",(0,l.jsx)(e.p,{children:"\u5f15\u7528\u8ba1\u6570\u6cd5\uff1a\u5f53\u6709\u4e00\u4e2a\u5730\u65b9\u4f7f\u7528\u8ba1\u6570\u503c+1\uff0c\u5931\u6548\u65f6-1\uff0c\u4e3a0\u65f6\u662f\u4e0d\u53ef\u518d\u88ab\u5f15\u7528\u7684\u5bf9\u8c61\n\u7f3a\u70b9\uff1a\u5faa\u73af\u5f15\u7528\u65f6\uff0c\u67d0\u4e9b\u5bf9\u8c61\u5c06\u65e0\u6cd5\u88ab\u56de\u6536\u6389"}),"\n",(0,l.jsx)(e.p,{children:"\u53ef\u8fbe\u6027\u5206\u6790\u7b97\u6cd5\uff1a\u901a\u8fc7\u4e00\u7cfb\u5217\u7684\u79f0\u4e3aGCROOTS\u7684\u5bf9\u8c61\u4f5c\u4e3a\u8d77\u70b9\uff0c\u5f80\u4e0b\u641c\u7d22\uff08\u8def\u5f84\u4e3a\u5f15\u7528\u94fe\uff09\uff0c\u5f53\u5bf9\u8c61\u4e0d\u4e0eGC\u4efb\u4f55\u5f15\u7528\u94fe\u76f8\u8fde\u65f6\uff0c\u5219\u8fd9\u4e9b\u5bf9\u8c61\u662f\u4e0d\u53ef\u8fbe\u7684\u3002\nGCROOTS\u5bf9\u8c61\u5305\u62ec\uff1a"}),"\n",(0,l.jsxs)(e.ol,{children:["\n",(0,l.jsx)(e.li,{children:"\u865a\u62df\u673a\u6808\u4e2d\u5f15\u7528\u7684\u5bf9\u8c61"}),"\n",(0,l.jsx)(e.li,{children:"\u65b9\u6cd5\u533a\u4e2d\u9759\u6001\u5c5e\u6027\u6216\u8005\u5e38\u91cf\u5f15\u7528\u7684\u5bf9\u8c61"}),"\n",(0,l.jsx)(e.li,{children:"\u672c\u5730\u65b9\u6cd5\u5f15\u7528\u7684\u5bf9\u8c61"}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:"\u5783\u573e\u6536\u96c6\u7b97\u6cd5\uff1a"}),"\n",(0,l.jsxs)(e.ol,{children:["\n",(0,l.jsx)(e.li,{children:"\u6807\u8bb0\u6e05\u9664\uff08\u9020\u6210\u788e\u76ae\u7a7a\u95f4\uff09"}),"\n",(0,l.jsx)(e.li,{children:"\u590d\u5236\u7b97\u6cd5 (\u5185\u5b58\u4f7f\u7528\u738750%)"}),"\n",(0,l.jsx)(e.li,{children:"\u6807\u8bb0\u6574\u7406 (\u6bd4\u6807\u8bb0\u6e05\u9664\u591a\u4e00\u6b65\uff0c\u5c06\u5b58\u6d3b\u5bf9\u8c61\u79fb\u52a8\u5230\u4e00\u7aef\uff0c\u6e05\u9664\u5176\u4ed6\u7684\u5bf9\u8c61)"}),"\n",(0,l.jsx)(e.li,{children:"\u5206\u4ee3\u7b97\u6cd5 (\u65b0\u751f\u4ee3\uff1a\u590d\u5236\u7b97\u6cd5 \u8001\u5e74\u4ee3\uff1a\u6807\u8bb0\u6e05\u9664\u6216\u8005\u6807\u8bb0\u6574\u7406)"}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:"\u5783\u573e\u6536\u96c6\u5668\uff1a\nParNew(\u591a\u7ebf\u7a0b \u9ad8\u541e\u5410)"}),"\n",(0,l.jsxs)(e.p,{children:["CMS(\u521d\u59cb\u6807\u8bb0\uff0c\u5e76\u53d1\u6807\u8bb0\uff08\u65f6\u95f4\u957f\uff09\uff0c\u91cd\u65b0\u6807\u8bb0\uff0c\u5e76\u53d1\u6e05\u9664\uff08\u65f6\u95f4\u957f\uff09\u4f4e\u5ef6\u8fdf)\n",(0,l.jsx)(e.img,{src:"https://s2.loli.net/2023/07/15/jX4mntlDOTis3QH.jpg",alt:""})]}),"\n",(0,l.jsx)("center",{children:"CMS\u5783\u573e\u6536\u96c6\u8fc7\u7a0b\u56fe"}),"\n",(0,l.jsxs)(e.p,{children:["G1(\u5c06\u6574\u4e2a\u5806\u5212\u5206\u4e3a\u4e00\u4e2a\u4e2a\u5c0f\u5757\uff0c1-32M,RememberSet\u6307\u5411\u5757\u7684\u5185\u5b58\u5730\u5740) \u8c03\u6574\u5c0f -XX",":InitiatingHeapOccupancyPercent","=45% \u589e\u591aMinor GC\u9891\u7387\uff0c\u51cf\u5c11Full GC\u9891\u7387\n",(0,l.jsx)(e.img,{src:"https://s2.loli.net/2023/07/15/mCdVOHFJ2htgLqc.jpg",alt:""})]}),"\n",(0,l.jsx)("center",{children:"G1\u5783\u573e\u6536\u96c6\u8fc7\u7a0b\u56fe"}),"\n",(0,l.jsxs)(e.blockquote,{children:["\n",(0,l.jsxs)(e.p,{children:["\u53c2\u8003\u6587\u732e\n^1 \u5468\u5fd7\u660e \u300a\u6df1\u5165\u7406\u89e3JAVA\u865a\u62df\u673a\u300b \u7b2c\u4e8c\u7248\nTIPS: \u8f6c\u8f7d\u5fc5\u987b\u6ce8\u660e\u539f\u6587\u5730\u5740 \u548c \u5f15\u7528\u53c2\u8003\u6587\u732e\u90e8\u5206\n",(0,l.jsx)(e.code,{children:"</init>"})," ",(0,l.jsx)(e.code,{children:"</clinit>"})]}),"\n"]}),"\n",(0,l.jsx)(e.admonition,{title:"\u534f\u8bae",type:"tip",children:(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["\u672c\u4f5c\u54c1\u4ee3\u7801\u90e8\u5206\u91c7\u7528 ",(0,l.jsx)(e.a,{href:"https://www.apache.org/licenses/LICENSE-2.0",children:"Apache 2.0\u534f\u8bae"}),"\u8fdb\u884c\u8bb8\u53ef\u3002\u9075\u5faa\u8bb8\u53ef\u7684\u524d\u63d0\u4e0b\uff0c\u4f60\u53ef\u4ee5\u81ea\u7531\u5730\u5bf9\u4ee3\u7801\u8fdb\u884c\u4fee\u6539\uff0c\u518d\u53d1\u5e03\uff0c\u53ef\u4ee5\u5c06\u4ee3\u7801\u7528\u4f5c\u5546\u4e1a\u7528\u9014\u3002\u4f46\u8981\u6c42\u4f60\uff1a"]}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"\u7f72\u540d"}),"\uff1a\u5728\u539f\u6709\u4ee3\u7801\u548c\u884d\u751f\u4ee3\u7801\u4e2d\uff0c\u4fdd\u7559\u539f\u4f5c\u8005\u7f72\u540d\u53ca\u4ee3\u7801\u6765\u6e90\u4fe1\u606f\u3002"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"\u4fdd\u7559\u8bb8\u53ef\u8bc1"}),"\uff1a\u5728\u539f\u6709\u4ee3\u7801\u548c\u884d\u751f\u4ee3\u7801\u4e2d\uff0c\u4fdd\u7559Apache 2.0\u534f\u8bae\u6587\u4ef6\u3002"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["\u672c\u4f5c\u54c1\u6587\u6863\u90e8\u5206\u91c7\u7528",(0,l.jsx)(e.a,{href:"http://creativecommons.org/licenses/by/4.0/",children:"\u77e5\u8bc6\u5171\u4eab\u7f72\u540d 4.0 \u56fd\u9645\u8bb8\u53ef\u534f\u8bae"}),"\u8fdb\u884c\u8bb8\u53ef\u3002 \u9075\u5faa\u8bb8\u53ef\u7684\u524d\u63d0\u4e0b\uff0c\u4f60\u53ef\u4ee5\u81ea\u7531\u5730\u5171\u4eab\uff0c\u5305\u62ec\u5728\u4efb\u4f55\u5a92\u4ecb\u4e0a\u4ee5\u4efb\u4f55\u5f62\u5f0f\u590d\u5236\u3001\u53d1\u884c\u672c\u4f5c\u54c1\uff0c\u4ea6\u53ef\u4ee5\u81ea\u7531\u5730\u6f14\u7ece\u3001\u4fee\u6539\u3001\u8f6c\u6362\u6216\u4ee5\u672c\u4f5c\u54c1\u4e3a\u57fa\u7840\u8fdb\u884c\u4e8c\u6b21\u521b\u4f5c\u3002\u4f46\u8981\u6c42\u4f60\uff1a"]}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"\u7f72\u540d"}),"\uff1a\u5e94\u5728\u4f7f\u7528\u672c\u6587\u6863\u7684\u5168\u90e8\u6216\u90e8\u5206\u5185\u5bb9\u65f6\u5019\uff0c\u6ce8\u660e\u539f\u4f5c\u8005\u53ca\u6765\u6e90\u4fe1\u606f\u3002"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"\u975e\u5546\u4e1a\u6027\u4f7f\u7528"}),"\uff1a\u4e0d\u5f97\u7528\u4e8e\u5546\u4e1a\u51fa\u7248\u6216\u5176\u4ed6\u4efb\u4f55\u5e26\u6709\u5546\u4e1a\u6027\u8d28\u7684\u884c\u4e3a\u3002\u5982\u9700\u5546\u4e1a\u4f7f\u7528\uff0c\u8bf7\u8054\u7cfb\u4f5c\u8005\u3002"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"\u76f8\u540c\u65b9\u5f0f\u5171\u4eab\u7684\u6761\u4ef6"}),"\uff1a\u5728\u672c\u6587\u6863\u57fa\u7840\u4e0a\u6f14\u7ece\u3001\u4fee\u6539\u7684\u4f5c\u54c1\uff0c\u5e94\u5f53\u7ee7\u7eed\u4ee5\u77e5\u8bc6\u5171\u4eab\u7f72\u540d 4.0\u56fd\u9645\u8bb8\u53ef\u534f\u8bae\u8fdb\u884c\u8bb8\u53ef\u3002"]}),"\n"]}),"\n"]}),"\n"]})})]})}function x(n={}){const{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(o,{...n})}):o(n)}},1151:(n,e,i)=>{i.d(e,{Z:()=>d,a:()=>c});var l=i(7294);const r={},s=l.createContext(r);function c(n){const e=l.useContext(s);return l.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:c(n.components),l.createElement(s.Provider,{value:e},n.children)}}}]);