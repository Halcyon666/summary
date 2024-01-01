"use strict";(self.webpackChunksummary=self.webpackChunksummary||[]).push([[9422],{9336:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var s=r(5893),t=r(1151);const i={title:"Joinpoint",sidebar_label:"Joinpoint",sidebar_position:7},l=void 0,a={id:"Java/Spring/Joinpoint",title:"Joinpoint",description:"\u672c\u6587\u76f8\u5173\u4ee3\u7801(\u6765\u81ea\u5b98\u65b9\u6e90\u7801spring-test\u6a21\u5757)\u8bf7\u53c2\u89c1spring-framework org.springframework.mylearntest\u5305\u4e0b\u3002",source:"@site/docs/01-Java/02-Spring/Joinpoint.mdx",sourceDirName:"01-Java/02-Spring",slug:"/Java/Spring/Joinpoint",permalink:"/summary/Java/Spring/Joinpoint",draft:!1,unlisted:!1,editUrl:"https://github.com/Halcyon666/summary/blob/main/docs/01-Java/02-Spring/Joinpoint.mdx",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Joinpoint",sidebar_label:"Joinpoint",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"ApplicationContext",permalink:"/summary/Java/Spring/ApplicationContext"},next:{title:"Spring AOP\u4e2d\u7684Pointcut",permalink:"/summary/Java/Spring/Spring AOP\u4e2d\u7684Pointcut"}},o={},c=[{value:"JAVA\u4e2dAOP\u5b9e\u73b0\u65b9\u5f0f",id:"java\u4e2daop\u5b9e\u73b0\u65b9\u5f0f",level:2},{value:"Joinpoint",id:"joinpoint",level:2},{value:"\u9759\u6001\u4ee3\u7406",id:"\u9759\u6001\u4ee3\u7406",level:3},{value:"\u52a8\u6001\u4ee3\u7406",id:"\u52a8\u6001\u4ee3\u7406",level:3},{value:"CGLIB\u5b57\u8282\u7801\u751f\u6210",id:"cglib\u5b57\u8282\u7801\u751f\u6210",level:3}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components},{Details:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["\u672c\u6587\u76f8\u5173\u4ee3\u7801(\u6765\u81ea",(0,s.jsx)(n.a,{href:"https://github.com/spring-projects/spring-framework.git",title:"\u5b98\u65b9\u6e90\u7801",children:"\u5b98\u65b9\u6e90\u7801"}),"spring-test\u6a21\u5757)\u8bf7\u53c2\u89c1",(0,s.jsx)(n.a,{href:"https://github.com/Halcyon666/spring-framework-modified/tree/main/spring-test",children:"spring-framework"})," org.springframework.mylearntest\u5305\u4e0b\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"java\u4e2daop\u5b9e\u73b0\u65b9\u5f0f",children:"JAVA\u4e2dAOP\u5b9e\u73b0\u65b9\u5f0f"}),"\n",(0,s.jsx)(n.p,{children:"\u7edf\u79f0\u80fd\u591f\u5b9e\u73b0AOP\u7684\u8bed\u8a00\u4e3aAOL\uff0c\u5373(Aspect-Oriented Language)\uff0c\u5176\u4ed6Aspectj"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"AspectC"}),"\n",(0,s.jsx)(n.li,{children:"AspectC++"}),"\n",(0,s.jsx)(n.li,{children:"Aspect.Net"}),"\n",(0,s.jsx)(n.li,{children:"AspectL(Lisp)"}),"\n",(0,s.jsx)(n.li,{children:"AspectPHP"}),"\n",(0,s.jsx)(n.li,{children:"......"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"JAVA\u4e2dAOP"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"\u52a8\u6001\u4ee3\u7406"}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u5728\u8fd0\u884c\u671f\u95f4\uff0c\u4e3a\u76f8\u5e94\u7684\u63a5\u53e3\u52a8\u6001\u751f\u6210\u5bf9\u5e94\u7684\u4ee3\u7406\u5bf9\u8c61\uff0c\u5c06\u6a2a\u5207\u5173\u6ce8\u70b9\u903b\u8f91\u5c01\u88c5\u5230\u52a8\u6001\u4ee3\u7406\u7684InvocationHandler\u4e2d\uff0c\u7136\u540e\u5728\u7cfb\u7edf\u8fd0\u884c\u671f\u95f4\uff0c\u6839\u636e\u6a2a\u5207\u5173\u6ce8\u70b9\u9700\u8981\u7ec7\u5165\u7684\u6a21\u5757\u4f4d\u7f6e\uff0c\u5c06\u6a2a\u5207\u903b\u8f91\u7ec7\u5165\u5230\u76f8\u5e94\u7684\u4ee3\u7406\u7c7b\u4e2d\u3002"}),"\n"]}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsx)(n.li,{children:"\u52a8\u6001\u5b57\u8282\u7801\u589e\u5f3a"}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u4f7f\u7528ASM\u6216\u8005CGLIB\u7b49Java\u5de5\u5177\u5e93\uff0c\u5728\u7a0b\u5e8f\u8fd0\u884c\u671f\u95f4\uff0c\u52a8\u6001\u6784\u5efa\u5b57\u8282\u7801\u7684class\u6587\u4ef6\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u5728\u8fd0\u884c\u671f\u95f4\u901a\u8fc7\u52a8\u6001\u5b57\u8282\u7801\u589e\u5f3a\u6280\u672f\u7ec7\u5165\u6a2a\u5207\u903b\u8f91\uff0c\u4e3a\u8fd9\u4e9b\u7cfb\u7edf\u6a21\u5757\u7c7b\u751f\u6210\u76f8\u5e94\u7684\u5b50\u7c7b\uff0c\u800c\u5c06\u6a2a\u5207\u903b\u8f91\u52a0\u5230\u8fd9\u4e9b\u5b50\u7c7b\u4e2d\uff0c\u8ba9\u5e94\u7528\u7a0b\u5e8f\u7684\u6267\u884c\u671f\u95f4\u4f7f\u7528\u7684\u662f\u8fd9\u4e9b\u52a8\u6001\u751f\u6210\u7684\u5b50\u7c7b\uff0c\u4ece\u800c\u8fbe\u5230\u5c06\u6a2a\u5207\u903b\u8f91\u7ec7\u5165\u7cfb\u7edf\u7684\u76ee\u7684\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u5982\u679c\u9700\u8981\u6269\u5c55\u7684\u7c7b\u4ee5\u53ca\u7c7b\u4e2d\u7684\u5b9e\u4f8b\u65b9\u6cd5\u7b49\u58f0\u660e\u4e3afinal\u7684\u8bdd\uff0c\u5219\u65e0\u6cd5\u5bf9\u5176\u8fdb\u884c\u5b50\u7c7b\u5316\u7684\u6269\u5c55\u3002Spring AOP\u5728\u65e0\u6cd5\u4f7f\u7528\u52a8\u6001\u4ee3\u7406\u673a\u5236\u8fdb\u884cAOP\u529f\u80fd\u7684\u6269\u5c55\u7684\u65f6\u5019\uff0c\u4f1a\u4f7f\u7528CGLIB\u5e93\u7684\u52a8\u6001\u5b57\u8282\u7801\u589e\u5f3a\u6280\u672f\u6765\u5b9e\u73b0AOP\u7684\u6269\u5c55\u3002"}),"\n"]}),"\n",(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsx)(n.li,{children:"java\u4ee3\u7801\u751f\u6210"}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"EJB\u5bb9\u5668\u6839\u636e\u90e8\u7f72\u63cf\u8ff0\u7b26\u6587\u4ef6\u63d0\u4f9b\u4e86\u7ec7\u5165\u4fe1\u606f\uff0c\u4f1a\u4e3a\u76f8\u5e94\u7684\u529f\u80fd\u6a21\u5757\u7c7b\u6839\u636e\u63cf\u8ff0\u7b26\u6240\u63d0\u4f9b\u7684\u4fe1\u606f\u751f\u6210\u5bf9\u5e94\u7684java\u4ee3\u7801\uff0c\u7136\u540e\u901a\u8fc7\u90e8\u7f72\u5de5\u5177\u6216\u8005\u90e8\u7f72\u63a5\u53e3\u7f16\u8bd1java\u4ee3\u7801\u751f\u6210\u5bf9\u5e94\u7684java\u7c7b\u3002\u4e4b\u540e\u90e8\u7f72\u5230EJB\u5bb9\u5668\u7684\u529f\u80fd\u6a21\u5757\u7c7b\u5c31\u53ef\u4ee5\u6b63\u5e38\u5de5\u4f5c\u4e86\u3002"}),"\n"]}),"\n",(0,s.jsxs)(n.ol,{start:"4",children:["\n",(0,s.jsx)(n.li,{children:"\u81ea\u5b9a\u4e49\u7c7b\u52a0\u8f7d\u5668"}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u6240\u6709\u7684java\u7a0b\u5e8f\u7684class\u90fd\u8981\u901a\u8fc7\u76f8\u5e94\u7684\u7c7b\u52a0\u8f7d\u5668(Classloader)\u52a0\u8f7d\u5230Java\u865a\u62df\u673a\u4e4b\u540e\u624d\u53ef\u4ee5\u8fd0\u884c\u3002\u9ed8\u8ba4\u7684\u7c7b\u52a0\u8f7d\u5668\u4f1a\u8bfb\u53d6class\u5b57\u8282\u7801\u6587\u4ef6\uff0c\u7136\u540e\u6309\u7167class\u5b57\u8282\u7801\u89c4\u8303\uff0c\u89e3\u6790\u5e76\u52a0\u8f7d\u8fd9\u4e9bclass\n\u6587\u4ef6\u5230\u865a\u62df\u673a\u8fd0\u884c\u3002\u5982\u679c\u6211\u80fd\u591f\u5728\u8fd9\u4e2aclass\u52a0\u8f7d\u5230\u865a\u62df\u673a\u8fd0\u884c\u671f\u95f4\uff0c\u5c06\u6a2a\u5207\u903b\u8f91\u7ec7\u5165\u5230class\u6587\u4ef6\u7684\u8bdd\uff0c\u662f\u4e0d\u662f\u5c31\u5b8c\u6210\u4e86AOP\u548cOPP\u7684\u878d\u5408\u5462\uff1f"}),"\n",(0,s.jsx)(n.li,{children:"\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u81ea\u5b9a\u4e49\u7c7b\u52a0\u8f7d\u5668\u7684\u65b9\u5f0f\u5b8c\u6210\u6a2a\u5207\u903b\u8f91\u5230\u7cfb\u7edf\u7684\u7ec7\u5165\uff0c\u81ea\u5b9a\u4e49\u7c7b\u52a0\u8f7d\u5668\u901a\u8fc7\u8bfb\u53d6\u5916\u90e8\u6587\u4ef6\u89c4\u5b9a\u7684\u7ec7\u5165\u89c4\u5219\u548c\u5fc5\u8981\u4fe1\u606f\uff0c\u5728\u52a0\u8f7dclass\u6587\u4ef6\u671f\u95f4\u5c31\u53ef\u4ee5\u5c06\u6a2a\u5207\u903b\u8f91\u6dfb\u52a0\u5230\u7cfb\u7edf\u6a21\u5757\u7c7b\u7684\u73b0\u6709\u903b\u8f91\u4e2d\uff0c\u7136\u540e\u5c06\u6539\u52a8\u540e\u7684class\u4ea4\u7ed9java\n\u865a\u62df\u673a\u8fd0\u884c\u3002\u901a\u8fc7\u7c7b\u52a0\u8f7d\u5668\uff0c\u6211\u4eec\u57fa\u672c\u53ef\u4ee5\u5bf9\u5927\u90e8\u5206\u7c7b\u4ee5\u53ca\u76f8\u5e94\u7684\u5b9e\u4f8b\u8fdb\u884c\u7ec7\u5165\uff0c\u529f\u80fd\u4e8e\u4e4b\u524d\u7684\u51e0\u79cd\u65b9\u5f0f\u76f8\u6bd4\u5f53\u7136\u5f3a\u5927\u5f88\u591a\u3002\u4e0d\u8fc7\u8fd9\u79cd\u65b9\u5f0f\u6700\u5927\u7684\u95ee\u9898\u5c31\u662f\u7c7b\u52a0\u8f7d\u5668\u672c\u8eab\u7684\u4f7f\u7528\u3002\u67d0\u4e9b\u5e94\u7528\u670d\u52a1\u5668\u4f1a\u63a7\u5236\u6574\u4e2a\u7684\u7c7b\u52a0\u8f7d\u4f53\u7cfb\uff0c\u6240\u4ee5\uff0c\u5728\u8fd9\u6837\u7684\u573a\u666f\u4e0b\u4f1a\u9020\u6210\u4e00\u5b9a\u7684\u95ee\u9898\u3002"}),"\n",(0,s.jsx)(n.li,{children:"Jboss AOP \u548c\u5df2\u7ecf\u5e76\u5165AspectJ\u9879\u76ee\u7684AspectWerkz\u6846\u67b6\u90fd\u662f\u91c7\u7528\u81ea\u5b9a\u4e49\u7c7b\u52a0\u8f7d\u5668\u7684\u65b9\u5f0f\u5b9e\u73b0\u3002"}),"\n"]}),"\n",(0,s.jsxs)(n.ol,{start:"5",children:["\n",(0,s.jsx)(n.li,{children:"AOL\u6269\u5c55"}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"AOL\u6269\u5c55\u662f\u6700\u5f3a\u5927\u3001\u4e5f\u662f\u6700\u96be\u638c\u63e1\u7684\u4e00\u79cd\u65b9\u5f0f\uff0c\u6211\u4eec\u4e4b\u524d\u63d0\u5230AspectJ\u5c31\u5c5e\u4e8e\u8fd9\u79cd\u65b9\u5f0f\u3002\u5728\u8fd9\u79cd\u65b9\u5f0f\u4e2d\uff0cAOP\u7684\u5404\u79cd\u6982\u5ff5\u5728AOL\u4e2d\u5927\u90fd\u6709\u4e00\u4e00\u5bf9\u5e94\u7684\u5b9e\u4f53\u3002\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u6269\u5c55\u8fc7\u7684AOL\uff0c\u5b9e\u73b0\u4efb\u4f55AOP\u6982\u5ff5\u5b9e\u4f53\u751a\u81f3OPP\n\u6982\u5ff5\u5b9e\u4f53\uff0c\u6bd4\u5982Aspect\u4ee5\u53caClass\u3002\u6240\u6709\u7684AOP\u6982\u5ff5\u5728AOL\u4e2d\u5f97\u5230\u4e86\u6700\u5b8c\u7f8e\u7684\u8868\u8fbe\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u91c7\u7528\u6269\u5c55\u7684AOL\uff0c\u5728AOP\u6982\u5ff5\u7684\u8868\u8fbe\u4e0a\u9887\u5177\u5b9e\u4f8b\uff0c\u4f7f\u5f97AOP\u6d89\u53ca\u7684\u6240\u6709\u6a2a\u5207\u5173\u6ce8\u70b9\u903b\u8f91\u5728\u8fdb\u884c\u7ec7\u5165\u4e4b\u524d\uff0c\u53ef\u4ee5\u81ea\u7531\u81ea\u5728\u5730\u5b58\u6d3b\u5728\u81ea\u5df1\u7684\u201c\u56fd\u5ea6\u4e2d\u201d\u3002\u800c\u50cf\u201c\u7f16\u8bd1\u5230\u9759\u6001\u7c7b\u53ef\u4ee5\u63d0\u5347\u7cfb\u7edf\u8fd0\u884c\u6027\u80fd\u201d\uff0c\u201cjava\n\u865a\u62df\u673a\u53ef\u4ee5\u50cf\u52a0\u8f7d\u5e73\u5e38\u7c7b\u90a3\u79cd\uff0c\u52a0\u8f7d\u5df2\u7ecf\u7ec7\u5165\u76f8\u5e94\u903b\u8f91\u7684AO\u7ec4\u4ef6\u6240\u5728\u7684\u6587\u4ef6\u5e76\u8fd0\u884c\u201d\u7b49\u7279\u70b9\u3002\u4f7f\u7528\u8fd9\u79cd\u65b9\u5f0f\uff0c\u9700\u8981\u5b66\u4e60\u4e00\u95e8\u6269\u5c55\u7684AOL\u8bed\u8a00\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://s2.loli.net/2023/07/15/lArHhiuGkVqd4Nm.png",alt:""})}),"\n",(0,s.jsx)(n.h2,{id:"joinpoint",children:"Joinpoint"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Joinpoint \u5207\u70b9"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Pointcut \u5207\u70b9\u8868\u8fbe\u5f0f"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u76f4\u63a5\u6307\u5b9aJoinpoint\u6240\u5728\u7684\u65b9\u6cd5\u540d\u79f0"}),"\n",(0,s.jsx)(n.li,{children:"\u6b63\u5219\u8868\u8fbe\u5f0f\uff1aJboss\u3001Spring AOP\u3001AspectWerkz\u7b49\u5747\u652f\u6301"}),"\n",(0,s.jsx)(n.li,{children:"\u4f7f\u7528\u7279\u5b9a\u7684Pointcut\u8868\u8fbe\u8bed\u8a00\uff1aSpring 2.0\u4ee5\u540e\uff0c\u501f\u52a9\u4e8eAspectJ\u7684Pointcut\u8868\u8ff0\u8bed\u8a00\u89e3\u91ca\u5668\uff0c\u652f\u6301\u4f7f\u7528AspectJ\u7684Pointcut\u8868\u8ff0\u8bed\u8a00\u6765\u6307\u5b9aPointcut\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://s2.loli.net/2023/07/15/ZeYxB1TENhjXPRt.png",alt:""})}),"\n",(0,s.jsx)(n.h3,{id:"\u9759\u6001\u4ee3\u7406",children:"\u9759\u6001\u4ee3\u7406"}),"\n",(0,s.jsxs)(r,{children:[(0,s.jsx)("summary",{children:"IRequestable"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"package org.springframework.mylearntest.aop.staticproxy;\n\npublic interface IRequestable {\n    void request();\n}\n"})}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'package org.springframework.mylearntest.aop.staticproxy;\n\npublic class RequestableImpl implements IRequestable{\n    @Override\n    public void request() {\n        System.out.println(" request process in RequestableImpl");\n    }\n}\n'})})]}),"\n",(0,s.jsxs)(r,{children:[(0,s.jsx)("summary",{children:"ServiceControlRequestableProxy"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'package org.springframework.mylearntest.aop.staticproxy;\n\nimport org.slf4j.Logger;\nimport org.slf4j.LoggerFactory;\n\npublic class ServiceControlRequestableProxy implements IRequestable{\n    private static final Logger logger = LoggerFactory.getLogger(ServiceControlRequestableProxy.class);\n    private IRequestable requestable;\n\n    public ServiceControlRequestableProxy(IRequestable target) {\n        this.requestable = target;\n    }\n\n    @Override\n    public void request() {\n        System.out.println("request process in ServiceControlRequestableProxy");\n        requestable.request();\n    }\n\n    public static void main(String[] args) {\n        IRequestable target = new RequestableImpl();// \u9700\u8981\u88ab\u4ee3\u7406\u7684\u5bf9\u8c61\n        IRequestable proxy = new ServiceControlRequestableProxy(target); // \u4ee5\u6784\u9020\u65b9\u6cd5\u5f62\u5f0f\u5c06\u88ab\u4ee3\u7406\u5bf9\u8c61\u4f20\u5165\u4ee3\u7406\u8005\u4e2d\n        proxy.request();// \u8ba9\u4ee3\u7406\u8005\u53bb\u5904\u7406\u8bf7\u6c42\n    }\n}\n'})})]}),"\n",(0,s.jsx)(n.h3,{id:"\u52a8\u6001\u4ee3\u7406",children:"\u52a8\u6001\u4ee3\u7406"}),"\n",(0,s.jsx)(n.p,{children:"\u52a8\u6001\u4ee3\u7406\u673a\u5236\u4e3b\u8981\u7531\u4e00\u4e2a\u7c7b\u548c\u4e00\u4e2a\u63a5\u53e3\u7ec4\u6210\uff0c\u5373java.lang.reflect.Proxy\u7c7b\u548cjava.lang.reflect.InvocationHadler\u63a5\u53e3\u3002"}),"\n",(0,s.jsxs)(r,{children:[(0,s.jsx)("summary",{children:"RequestCtrlInvocationHandler"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'package org.springframework.mylearntest.aop.dynamicproxy;\n\nimport java.lang.reflect.InvocationHandler;\nimport java.lang.reflect.Method;\n\npublic class RequestCtrlInvocationHandler implements InvocationHandler {\n    private Object target;\n\n    public RequestCtrlInvocationHandler(Object target) {\n        this.target = target;\n    }\n\n    @Override\n    public Object invoke(Object proxy, Method method, Object[] args) throws Throwable {\n        System.out.println("reflect invoke before target method");\n        if ("request".equals(method.getName())) {\n            System.out.println("dynamic proxy target method");\n            return method.invoke(target, args);\n        }\n        return null;\n    }\n}\n'})})]}),"\n",(0,s.jsxs)(r,{children:[(0,s.jsx)("summary",{children:"Test4DynamicProxy"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'package org.springframework.mylearntest.aop.dynamicproxy;\n\nimport org.springframework.mylearntest.aop.staticproxy.IRequestable;\nimport org.springframework.mylearntest.aop.staticproxy.RequestableImpl;\n\nimport java.lang.reflect.Proxy;\n\n@SuppressWarnings("rawtypes")\npublic class Test4DynamicProxy {\n    public static void main(String[] args) {\n        // arg1:\u7c7b\u52a0\u8f7d\u5668 arg2:\u63a5\u53e3\u4fe1\u606f arg3:\u5b9e\u73b0InvocationHandler\u7684\u7c7b \u5e76\u4f20\u5165\u9700\u8981\u4ee3\u7406\u7684\u5bf9\u8c61\n        IRequestable requestable = (IRequestable) Proxy.newProxyInstance(\n                Test4DynamicProxy.class.getClassLoader(),\n                new Class[]{IRequestable.class},\n                new RequestCtrlInvocationHandler(new RequestableImpl()));\n        requestable.request();\n    }\n}\n'})})]}),"\n",(0,s.jsx)(n.p,{children:"\u5982\u679c\u60f3\u6df1\u5165\u4e86\u89e3\u52a8\u6001\u4ee3\u7406\uff0c\u8bf7\u9605\u8bfb\u300ajava reflect in action\u300b\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"cglib\u5b57\u8282\u7801\u751f\u6210",children:"CGLIB\u5b57\u8282\u7801\u751f\u6210"}),"\n",(0,s.jsx)(n.p,{children:"\u9700\u8981\u4f7f\u7528CGLIB\u6269\u5c55\u5b50\u7c7b\uff0c\u9996\u5148\u9700\u8981\u5b9e\u73b0\u4e00\u4e2anet.sf.cglib.proxy.Callback,\u4e0d\u8fc7\u66f4\u591a\u7684\u65f6\u5019\uff0c\u6211\u4eec\u4f1a\u76f4\u63a5\u4f7f\u7528net.sf.cglib.proxy.MethodInterceptor\u63a5\u53e3(MethodInterceptor\u6269\u5c55\u4e86Callback\u63a5\u53e3)\u3002"}),"\n",(0,s.jsxs)(r,{children:[(0,s.jsx)("summary",{children:"Requestable"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'package org.springframework.mylearntest.aop.CGLIBClassGenerate;\n\npublic class Requestable {\n    public void request(){\n        System.out.println("req in requestable without implement any interface");\n    }\n}\n'})})]}),"\n",(0,s.jsxs)(r,{children:[(0,s.jsx)("summary",{children:"RequestCtrlCallback"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'package org.springframework.mylearntest.aop.CGLIBClassGenerate;\n\nimport org.springframework.cglib.proxy.MethodInterceptor;\nimport org.springframework.cglib.proxy.MethodProxy;\n\nimport java.lang.reflect.Method;\n\npublic class RequestCtrlCallback implements MethodInterceptor {\n    @Override\n    public Object intercept(Object o, Method method, Object[] objects, MethodProxy methodProxy) throws Throwable {\n        if (method.getName().equals("request")) {\n            System.out.println("proxy generated by cglib intercept method request");\n            return methodProxy.invokeSuper(o, objects);\n        }\n        return null;\n    }\n}\n'})})]}),"\n",(0,s.jsxs)(r,{children:[(0,s.jsx)("summary",{children:"Test4CGLIB"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"package org.springframework.mylearntest.aop.CGLIBClassGenerate;\n\nimport org.springframework.cglib.proxy.Enhancer;\n\npublic class Test4CGLIB {\n    public static void main(String[] args) {\n        Enhancer enhancer = new Enhancer();\n        enhancer.setSuperclass(Requestable.class);\n        enhancer.setCallback(new RequestCtrlCallback());\n\n        Requestable proxy = (Requestable) enhancer.create();\n        proxy.request();\n    }\n}\n"})})]}),"\n",(0,s.jsx)(n.admonition,{title:"\u534f\u8bae",type:"tip",children:(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u672c\u4f5c\u54c1\u4ee3\u7801\u90e8\u5206\u91c7\u7528 ",(0,s.jsx)(n.a,{href:"https://www.apache.org/licenses/LICENSE-2.0",children:"Apache 2.0\u534f\u8bae"}),"\u8fdb\u884c\u8bb8\u53ef\u3002\u9075\u5faa\u8bb8\u53ef\u7684\u524d\u63d0\u4e0b\uff0c\u4f60\u53ef\u4ee5\u81ea\u7531\u5730\u5bf9\u4ee3\u7801\u8fdb\u884c\u4fee\u6539\uff0c\u518d\u53d1\u5e03\uff0c\u53ef\u4ee5\u5c06\u4ee3\u7801\u7528\u4f5c\u5546\u4e1a\u7528\u9014\u3002\u4f46\u8981\u6c42\u4f60\uff1a"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\u7f72\u540d"}),"\uff1a\u5728\u539f\u6709\u4ee3\u7801\u548c\u884d\u751f\u4ee3\u7801\u4e2d\uff0c\u4fdd\u7559\u539f\u4f5c\u8005\u7f72\u540d\u53ca\u4ee3\u7801\u6765\u6e90\u4fe1\u606f\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\u4fdd\u7559\u8bb8\u53ef\u8bc1"}),"\uff1a\u5728\u539f\u6709\u4ee3\u7801\u548c\u884d\u751f\u4ee3\u7801\u4e2d\uff0c\u4fdd\u7559Apache 2.0\u534f\u8bae\u6587\u4ef6\u3002"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u672c\u4f5c\u54c1\u6587\u6863\u90e8\u5206\u91c7\u7528",(0,s.jsx)(n.a,{href:"http://creativecommons.org/licenses/by/4.0/",children:"\u77e5\u8bc6\u5171\u4eab\u7f72\u540d 4.0 \u56fd\u9645\u8bb8\u53ef\u534f\u8bae"}),"\u8fdb\u884c\u8bb8\u53ef\u3002 \u9075\u5faa\u8bb8\u53ef\u7684\u524d\u63d0\u4e0b\uff0c\u4f60\u53ef\u4ee5\u81ea\u7531\u5730\u5171\u4eab\uff0c\u5305\u62ec\u5728\u4efb\u4f55\u5a92\u4ecb\u4e0a\u4ee5\u4efb\u4f55\u5f62\u5f0f\u590d\u5236\u3001\u53d1\u884c\u672c\u4f5c\u54c1\uff0c\u4ea6\u53ef\u4ee5\u81ea\u7531\u5730\u6f14\u7ece\u3001\u4fee\u6539\u3001\u8f6c\u6362\u6216\u4ee5\u672c\u4f5c\u54c1\u4e3a\u57fa\u7840\u8fdb\u884c\u4e8c\u6b21\u521b\u4f5c\u3002\u4f46\u8981\u6c42\u4f60\uff1a"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\u7f72\u540d"}),"\uff1a\u5e94\u5728\u4f7f\u7528\u672c\u6587\u6863\u7684\u5168\u90e8\u6216\u90e8\u5206\u5185\u5bb9\u65f6\u5019\uff0c\u6ce8\u660e\u539f\u4f5c\u8005\u53ca\u6765\u6e90\u4fe1\u606f\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\u975e\u5546\u4e1a\u6027\u4f7f\u7528"}),"\uff1a\u4e0d\u5f97\u7528\u4e8e\u5546\u4e1a\u51fa\u7248\u6216\u5176\u4ed6\u4efb\u4f55\u5e26\u6709\u5546\u4e1a\u6027\u8d28\u7684\u884c\u4e3a\u3002\u5982\u9700\u5546\u4e1a\u4f7f\u7528\uff0c\u8bf7\u8054\u7cfb\u4f5c\u8005\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\u76f8\u540c\u65b9\u5f0f\u5171\u4eab\u7684\u6761\u4ef6"}),"\uff1a\u5728\u672c\u6587\u6863\u57fa\u7840\u4e0a\u6f14\u7ece\u3001\u4fee\u6539\u7684\u4f5c\u54c1\uff0c\u5e94\u5f53\u7ee7\u7eed\u4ee5\u77e5\u8bc6\u5171\u4eab\u7f72\u540d 4.0\u56fd\u9645\u8bb8\u53ef\u534f\u8bae\u8fdb\u884c\u8bb8\u53ef\u3002"]}),"\n"]}),"\n"]}),"\n"]})})]})}function d(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>a,a:()=>l});var s=r(7294);const t={},i=s.createContext(t);function l(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);