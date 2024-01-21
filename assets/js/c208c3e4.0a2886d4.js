"use strict";(self.webpackChunksummary=self.webpackChunksummary||[]).push([[2165],{5727:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var t=r(1527),i=r(8672);const o={title:"Spring AOP\u4e2d\u7684Advice",sidebar_label:"Spring AOP\u4e2d\u7684Advice",sidebar_position:9},c=void 0,s={id:"Java/Spring/Spring AOP Advice",title:"Spring AOP\u4e2d\u7684Advice",description:"\u672c\u6587\u76f8\u5173\u4ee3\u7801(\u6765\u81ea\u5b98\u65b9\u6e90\u7801spring-test\u6a21\u5757)\u8bf7\u53c2\u89c1spring-framework org.springframework.mylearntest\u5305\u4e0b\u3002",source:"@site/docs/01-Java/02-Spring/Spring AOP Advice.mdx",sourceDirName:"01-Java/02-Spring",slug:"/Java/Spring/Spring AOP Advice",permalink:"/summary/Java/Spring/Spring AOP Advice",draft:!1,unlisted:!1,editUrl:"https://github.com/Halcyon666/summary/edit/main/docs/01-Java/02-Spring/Spring AOP Advice.mdx",tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"Spring AOP\u4e2d\u7684Advice",sidebar_label:"Spring AOP\u4e2d\u7684Advice",sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Spring AOP\u4e2d\u7684Pointcut",permalink:"/summary/Java/Spring/Spring AOP Pointcut"},next:{title:"Spring AOP\u4e2d\u7684Aspect",permalink:"/summary/Java/Spring/Spring AOP Aspect"}},a={},d=[{value:"Introduction",id:"introduction",level:2},{value:"per-class",id:"per-class",level:3},{value:"BeforeAdvice",id:"beforeadvice",level:4},{value:"ThrowsAdvice",id:"throwsadvice",level:4},{value:"AfterReturningAdvice",id:"afterreturningadvice",level:4},{value:"Around Advice",id:"around-advice",level:4},{value:"per-instance",id:"per-instance",level:3},{value:"DelegatingIntroductionInterceptor",id:"delegatingintroductioninterceptor",level:4},{value:"DelegatePerTargetObjectIntroductionInterceptor",id:"delegatepertargetobjectintroductioninterceptor",level:4},{value:"\u6269\u5c55DelegatingIntroductionInterceptor",id:"\u6269\u5c55delegatingintroductioninterceptor",level:4}];function l(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components},{Details:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["\u672c\u6587\u76f8\u5173\u4ee3\u7801(\u6765\u81ea",(0,t.jsx)(n.a,{href:"https://github.com/spring-projects/spring-framework.git",title:"\u5b98\u65b9\u6e90\u7801",children:"\u5b98\u65b9\u6e90\u7801"}),"spring-test\u6a21\u5757)\u8bf7\u53c2\u89c1",(0,t.jsx)(n.a,{href:"https://github.com/Halcyon666/spring-framework-modified/tree/main/spring-test",children:"spring-framework"})," org.springframework.mylearntest\u5305\u4e0b\u3002"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Before Advice"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"After Advice"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"After returning"}),"\n",(0,t.jsx)(n.p,{children:"After throwing"}),"\n",(0,t.jsx)(n.p,{children:"After Advice(finally)"}),"\n"]}),"\n",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsx)(n.li,{children:"After Around"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://s2.loli.net/2023/07/15/jhWAx2tqe6EzoNU.png",alt:""})}),"\n",(0,t.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,t.jsx)(n.p,{children:"\u5728AspectJ\u4e2d\u79f0Inter-Type Declaration\uff0c\u5728JBoss AOP\u4e2d\u79f0Mix-in\uff0c\u90fd\u662f\u6307\u8fd9\u540c\u4e00\u79cd\u7c7b\u578b\u7684Advice\u3002\u4e0e\u4e4b\u524d\u7684\u51e0\u79cdAdvice\u7c7b\u578b\u4e0d\u540c\uff0cIntroduction\u4e0d\u662f\u6839\u636e\u6a2a\u5207\u903b\u8f91\u5728Joinpoint\u5904\u7684\u6267\u884c\u65f6\u673a\u6765\u533a\u5206\u7684\uff0c\u800c\u662f\u6839\u636e\u5b83\u53ef\u4ee5\u5b8c\u6210\u7684\u529f\u80fd\u800c\u533a\u522b\u4e8e\u5176\u4ed6Advice\u7c7b\u578b\u3002"}),"\n",(0,t.jsx)(n.p,{children:"AspectJ\u91c7\u7528\u9759\u6001\u7ec7\u5165\u7684\u5f62\u5f0f\uff0c\u90a3\u4e48\u5bf9\u8c61\u5728\u4f7f\u7528\u7684\u65f6\u5019\uff0cIntroduction\u903b\u8f91\u5df2\u7ecf\u662f\u7f16\u8bd1\u7ec7\u5165\u5b8c\u6210\u7684\u3002\u6240\u4ee5\u7406\u8bba\u4e0a\u6765\u8bf4\uff0cAspectJ\u63d0\u4f9b\u7684Introduction\u7c7b\u578b\u7684Advice\uff0c\u5728\u73b0\u6709Java\u5e73\u53f0\u4e0a\u7684AOP\u5b9e\u73b0\u4e2d\u662f\u6027\u80fd\u6700\u597d\u7684\uff1b\u800c\u50cfJBosss AOP\u6216\u8005Spring AOP\u7b49\u91c7\u7528\u52a8\u6001\u7ec7\u5165\u7684AOP\u5b9e\u73b0\uff0cIntroduction\u7684\u6027\u80fd\u8981\u7a0d\u900a\u4e00\u7b79\u3002"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://s2.loli.net/2023/07/15/xVSYeWcNrbk3aqg.png",alt:""})}),"\n",(0,t.jsxs)(n.p,{children:["\u5728Spring\u4e2d\uff0cAdvice\u6309\u7167\u5176\u81ea\u8eab\u5b9e\u4f8b\u80fd\u5426\u5728\u76ee\u6807\u5bf9\u8c61\u7c7b\u7684\u6240\u6709\u5b9e\u4f8b\u4e2d\u5171\u4eab\u8fd9\u4e00\u6807\u51c6\uff0c\u53ef\u4ee5\u5212\u5206\u4e3a\u4e24\u5927\u7c7b\uff0c",(0,t.jsx)("font",{style:{color:"green"},children:"\u5373per-class\u7c7b\u578b\u7684Advice\u548cper-instance\u7c7b\u578b\u7684Advice"}),"\u3002"]}),"\n",(0,t.jsx)(n.h3,{id:"per-class",children:"per-class"}),"\n",(0,t.jsx)(n.p,{children:"per-class\u7684Advice\u662f\u6307\uff0c\u8be5\u7c7b\u578b\u7684Advice\u7684\u5b9e\u4f8b\u53ef\u4ee5\u5728\u76ee\u6807\u5bf9\u8c61\u7c7b\u7684\u6240\u6709\u5b9e\u4f8b\u4e4b\u95f4\u5171\u4eab\u3002\u8fd9\u79cd\u7c7b\u578b\u7684Advice\u901a\u5e38\u53ea\u662f\u63d0\u4f9b\u65b9\u6cd5\u7684\u62e6\u622a\u529f\u80fd\uff0c\u4e0d\u4f1a\u5bf9\u76ee\u6807\u5bf9\u8c61\u7c7b\u4fdd\u5b58\u4efb\u4f55\u72b6\u6001\u6216\u8005\u6dfb\u52a0\u65b0\u7684\u7279\u6027\u3002"}),"\n",(0,t.jsx)(n.h4,{id:"beforeadvice",children:"BeforeAdvice"}),"\n",(0,t.jsxs)(r,{children:[(0,t.jsx)("summary",{children:"ResourceSetupBeforeAdvice"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"package org.springframework.mylearntest.aop.advice;\n\nimport org.apache.commons.io.FileUtils;\nimport org.springframework.aop.MethodBeforeAdvice;\nimport org.springframework.core.io.Resource;\n\nimport java.lang.reflect.Method;\n\npublic class ResourceSetupBeforeAdvice implements MethodBeforeAdvice {\n    private Resource resource;\n\n    public ResourceSetupBeforeAdvice(Resource resource) {\n        this.resource = resource;\n    }\n\n    @Override\n    public void before(Method method, Object[] args, Object target) throws Throwable {\n        if (!resource.exists()) {\n            FileUtils.forceMkdir(resource.getFile());\n        }\n    }\n}\n"})})]}),"\n",(0,t.jsx)(n.h4,{id:"throwsadvice",children:"ThrowsAdvice"}),"\n",(0,t.jsxs)(r,{children:[(0,t.jsx)("summary",{children:"ExceptionBarrierThrowsAdvice"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"package org.springframework.mylearntest.aop.advice;\n\nimport org.omg.CORBA.portable.ApplicationException;\nimport org.springframework.aop.ThrowsAdvice;\n\nimport java.lang.reflect.Method;\n\npublic class ExceptionBarrierThrowsAdvice implements ThrowsAdvice {\n    public void afterThrowing(Throwable t) {\n        // \u666e\u901a\u5f02\u5e38\u5904\u7406\n    }\n\n    public void afterThrowing(RuntimeException t) {\n        // \u8fd0\u884c\u65f6\u5f02\u5e38\u5904\u7406\n    }\n\n    public void afterThrowing(Method m, Object[] args, Object target, ApplicationException e) {\n        // \u5904\u7406\u5e94\u7528\u7a0b\u5e8f\u751f\u6210\u7684\u5f02\u5e38\n    }\n}\n"})})]}),"\n",(0,t.jsx)(n.h4,{id:"afterreturningadvice",children:"AfterReturningAdvice"}),"\n",(0,t.jsx)(n.p,{children:"\u6b64Advice\u53ef\u4ee5\u8bbf\u95ee\u5230\u5f53\u524dJoinpoint\u7684\u65b9\u6cd5\u8fd4\u56de\u503c\u3001\u65b9\u6cd5\u3001\u65b9\u6cd5\u53c2\u6570\u4ee5\u53ca\u6240\u5728\u7684\u76ee\u6807\u5bf9\u8c61\uff0c\u4f46\u662f\u4e0d\u80fd\u66f4\u6539\u8fd4\u56de\u503c\uff0c\u53ef\u4ee5\u4f7f\u7528Around Advice\u6765\u66f4\u6539\u8fd4\u56de\u503c\u3002"}),"\n",(0,t.jsx)(n.h4,{id:"around-advice",children:"Around Advice"}),"\n",(0,t.jsx)(n.p,{children:"Spring\u4e2d\u6ca1\u6709\u5b9a\u4e49Around Advice \uff0c\u800c\u662f\u76f4\u63a5\u4f7f\u7528AOP Alliance\u7684\u6807\u51c6\u63a5\u53e3\uff0c\u5b9e\u73b0 MethodInterceptor\u5373\u53ef\u3002"}),"\n",(0,t.jsx)(n.h3,{id:"per-instance",children:"per-instance"}),"\n",(0,t.jsx)(n.p,{children:"per-instance\u7c7b\u578b\u7684Advice\u4e0d\u4f1a\u5728\u76ee\u6807\u7c7b\u6240\u6709\u5bf9\u8c61\u5b9e\u4f8b\u4e4b\u95f4\u5171\u4eab\uff0c\u800c\u662f\u4f1a\u4e3a\u4e0d\u540c\u7684\u5b9e\u4f8b\u5bf9\u8c61\u4fdd\u5b58\u5b83\u4eec\u5404\u81ea\u7684\u72b6\u6001\u4ee5\u53ca\u76f8\u5173\u903b\u8f91\u3002\u5728Spring\u4e2dIntroduction\u5c31\u662f\u552f\u4e00\u7684\u4e00\u79cdper-instance\u578bAdvice\u3002"}),"\n",(0,t.jsx)(n.p,{children:"Introduction \u53ef\u4ee5\u5728\u4e0d\u6539\u52a8\u76ee\u6807\u7c7b\u5b9a\u4e49\u7684\u60c5\u51b5\u4e0b\uff0c\u4e3a\u76ee\u6807\u7c7b\u6dfb\u52a0\u65b0\u7684\u5c5e\u6027\u4ee5\u53ca\u884c\u4e3a\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u5728Spring\u4e2d\uff0c\u4e3a\u76ee\u6807\u5bf9\u8c61\u6dfb\u52a0\u65b0\u7684\u5c5e\u6027\u548c\u884c\u4e3a\u5fc5\u987b\u58f0\u660e\u76f8\u5e94\u7684\u63a5\u53e3\u4ee5\u53ca\u76f8\u5e94\u7684\u5b9e\u73b0\u3002\u8fd9\u6837\uff0c\u518d\u901a\u8fc7\u7279\u5b9a\u7684\u62e6\u622a\u5668\u5c06\u65b0\u7684\u63a5\u53e3\u5b9a\u4e49\u4ee5\u53ca\u5b9e\u73b0\u7c7b\u4e2d\u7684\u903b\u8f91\u9644\u52a0\u5230\u76ee\u6807\u5bf9\u8c61\u4e4b\u4e0a\u3002\u4e4b\u540e\uff0c\u76ee\u6807\u5bf9\u8c61\u5c31\u62e5\u6709\u4e86\u65b0\u7684\u72b6\u6001\u548c\u884c\u4e3a\u3002\u8fd9\u4e2a\u7279\u5b9a\u7684\u62e6\u622a\u5668\u662forg.springframework.aop.IntroductionInterceptor\u3002"}),"\n",(0,t.jsx)(n.p,{children:"Introduction\u7ee7\u627f\u4e86MethodInterceptor\u4ee5\u53caDynamicIntroductionAdvice\uff0c\u901a\u8fc7DynamicIntroductionAdvice\uff0c\u6211\u4eec\u53ef\u4ee5\u754c\u5b9a\u5f53\u524d\u7684IntroductionInterceptor\u4e3a\u54ea\u4e9b\u63a5\u53e3\u7c7b\u63d0\u4f9b\u76f8\u5e94\u7684\u62e6\u622a\u529f\u80fd\u3002\u901a\u8fc7MethodInterceptor,IntroductionInterceptor\u5c31\u53ef\u4ee5\u5904\u7406\u65b0\u6dfb\u52a0\u7684\u63a5\u53e3\u4e0a\u7684\u65b9\u6cd5\u8c03\u7528\u4e86\u3002\u901a\u5e38\u60c5\u51b5\u4e0b\uff0c\u5bf9\u4e8eIntroductionInterceptor\u6765\u8bf4\uff0c\u5982\u679c\u662f\u65b0\u589e\u52a0\u7684\u63a5\u53e3\u4e0a\u7684\u65b9\u6cd5\u8c03\u7528\uff0c\u4e0d\u5fc5\u53bb\u8c03\u7528MethodInterceptor\u7684proceed()\u65b9\u6cd5\u3002\u5f53\u524d\u88ab\u62e6\u622a\u7684\u65b9\u6cd5\u5b9e\u9645\u4e0a\u662f\u6574\u4e2a\u8c03\u7528\u94fe\u4e2d\u8981\u6700\u7ec8\u6267\u884c\u7684\u552f\u4e00\u65b9\u6cd5\u3002"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://s2.loli.net/2023/07/15/64GVq9mJlEk7wMc.png",alt:"Introduction\u76f8\u5173\u7c7b\u56fe",title:"Introduction\u76f8\u5173\u7c7b\u56fe"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Introduction\u578b\u7684Advice\u4e24\u6761\u5206\u652f\uff0c\u5373\u4ee5DynamicIntroductionAdvice\u4e3a\u9996\u7684\u52a8\u6001\u5206\u652f(\u4e0d\u5171\u4eab)\u548c\u4ee5IntroductionInfo\u4e3a\u9996\u7684\u9759\u6001(\u5171\u4eab)\u3002"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"DynamicIntroductionAdvice\u4e0d\u7528\u9884\u5148\u8bbe\u5b9a\u76ee\u6807\u63a5\u53e3\u7c7b\u578b\uff1b\u800cIntroductionInfo\u5219\u5b8c\u5168\u76f8\u53cd\uff0c\u5b9e\u73b0\u7c7b\u5fc5\u987b\u8fd4\u56de\u9884\u5b9a\u76ee\u6807\u63a5\u53e3\u7684\u7c7b\u578b\u3002"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(r,{children:[(0,t.jsx)("summary",{children:"IntroductionInfo"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"public interface IntroductionInfo {\n    Class[] getInterfaces();\n}\n"})})]}),"\n",(0,t.jsx)(n.p,{children:"\u5982\u679c\u9700\u8981\u5bf9\u76ee\u6807\u5bf9\u8c61\u62e6\u622a\u5e76\u6dfb\u52a0Introduction\u903b\u8f91\uff0c\u53ef\u4ee5\u4f7f\u7528\u73b0\u6709\u4e24\u4e2a\u5b9e\u73b0\u7c7b\u5373\u53efDelegatingIntroductionInterceptor,DelegatePerTargetObjectIntroductionInterceptor\u3002"}),"\n",(0,t.jsx)(n.h4,{id:"delegatingintroductioninterceptor",children:"DelegatingIntroductionInterceptor"}),"\n",(0,t.jsx)(n.p,{children:"DelegatingIntroductionInterceptor\u4e0d\u4f1a\u81ea\u5df1\u5b9e\u73b0\u5c06\u8981\u6dfb\u52a0\u5230\u76ee\u6807\u5bf9\u8c61\u4e0a\u7684\u65b0\u903b\u8f91\u884c\u4e3a\uff0c\u800c\u662f\u59d4\u6d3e\u7ed9\u5176\u4ed6\u7684\u5b9e\u73b0\u7c7b\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u4f7f\u7528DelegatingIntroductionInterceptor\u589e\u5f3aDeveloper\u3002\u63a5\u53e3\u7701\u7565\u3002"}),"\n",(0,t.jsxs)(r,{children:[(0,t.jsx)("summary",{children:"Developer"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'package org.springframework.mylearntest.aop.advice.perinstance.delegatingIntroductionInterceptor;\n\npublic class Developer implements IDeveloper{\n    @Override\n    public void developSoftware() {\n        System.out.println(" do some developing ...");\n    }\n}\n'})})]}),"\n",(0,t.jsx)(n.p,{children:"\u4e3a\u65b0\u7684\u72b6\u6001\u548c\u884c\u4e3a\u5b9a\u4e49\u63a5\u53e3\u3002\u6211\u4eec\u8981\u4e3a\u5b9e\u73b0\u7c7b\u6dfb\u52a0\u589e\u5f3a\u7684\u529f\u80fd\uff0c\u9996\u5148\u9700\u8981\u5c06\u9700\u6c42\u7684\u804c\u80fd\u4ee5\u63a5\u53e3\u5b9a\u4e49\u7684\u5f62\u5f0f\u58f0\u660e\u3002"}),"\n",(0,t.jsxs)(r,{children:[(0,t.jsx)("summary",{children:"ITtester"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"package org.springframework.mylearntest.aop.advice.perinstance.delegatingIntroductionInterceptor;\n\npublic interface ITester {\n    boolean isBusyAsTester();\n    void testSoftware();\n}\n"})})]}),"\n",(0,t.jsx)(n.p,{children:"\u7ed9\u51fa\u65b0\u7684\u63a5\u53e3\u7684\u5b9e\u73b0\u7c7b\u3002\u63a5\u53e3\u5b9e\u73b0\u7c7b\u7ed9\u51fa\u5c06\u8981\u6dfb\u52a0\u5230\u76ee\u6807\u5bf9\u8c61\u7684\u5177\u4f53\u903b\u8f91\u3002\u5f53\u76ee\u6807\u5bf9\u8c61\u8981\u884c\u4f7f\u65b0\u7684\u804c\u80fd\u7684\u65f6\u5019\uff0c\u4f1a\u901a\u8fc7\u8be5\u5b9e\u73b0\u7c7b\u5bfb\u6c42\u5e2e\u5fd9\u3002"}),"\n",(0,t.jsxs)(r,{children:[(0,t.jsx)("summary",{children:"Tester"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'package org.springframework.mylearntest.aop.advice.perinstance.delegatingIntroductionInterceptor;\n\npublic class Tester implements ITester{\n    private  boolean busyAsTester;\n\n    public void setBusyAsTester(boolean busyAsTester) {\n        this.busyAsTester = busyAsTester;\n    }\n\n    @Override\n    public boolean isBusyAsTester() {\n        return busyAsTester;\n    }\n\n    @Override\n    public void testSoftware() {\n        System.out.println("do some developing and test ...");\n    }\n}\n'})})]}),"\n",(0,t.jsx)(n.p,{children:"\u901a\u8fc7DelegatingIntroductionInterceptor\u8fdb\u884cIntroduction\u62e6\u622a\u3002\u6709\u4e86\u65b0\u589e\u52a0\u7684\u804c\u80fd\u7684\u63a5\u53e3\u4ee5\u53ca\u76f8\u5e94\u7684\u5b9e\u73b0\u7c7b\uff0c\u4f7f\u7528DelegatingIntroductionInterceptor\uff0c\u6211\u4eec\u53ef\u4ee5\u628a\u5177\u4f53\u7684Introduction\u62e6\u622a\u59d4\u6258\u7ed9\u5177\u4f53\u7684\u5b9e\u73b0\u7c7b\u6765\u5b8c\u6210\u3002"}),"\n",(0,t.jsxs)(r,{children:[(0,t.jsx)("summary",{children:"\u5982\u4f55\u7ec7\u5165"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"ITester delegator = new Tester();\nDelegatingIntroductionInterceptor interceptor = new DelegatingIntroductionInterceptor(delegator);\n\n// \u8fdb\u884c\u7ec7\u5165\nITester tester = (ITester)weaver.weave(developer).with(interceptor).getProxy();\ntester.testSoftware();\n"})})]}),"\n",(0,t.jsx)(n.p,{children:'\u867d\u7136\uff0cDelegatingIntroductionInterceptor\u662fIntroduction\u578bAdvice\u7684\u4e00\u4e2a\u5b9e\u73b0\uff0c\u4f46\u5b83\u7684\u5b9e\u73b0\u6839\u672c\u5c31\u6709\u5151\u73b0Introduction\u4f5c\u4e3aper-instance\n\u578b\u7684\u627f\u8bfa\u3002\u5b9e\u9645\u4e0aDelegatingIntroductionInterceptor\u4f1a\u4f7f\u7528\u5b83\u6240\u6301\u6709\u7684\u540c\u4e00\u4e2a"delegate" \u63a5\u53e3\u5b9e\u4f8b\uff0c\u4f9b\u540c\u4e00\u76ee\u6807\u7c7b\u7684\u6240\u6709\u5b9e\u4f8b\u5171\u4eab\u4f7f\u7528\u3002\u5982\u679c\u8981\u60f3\u4e25\u683c\u8fbe\u5230Introduction\u578bAdvice\u7684\u6548\u679c\uff0c\u6211\u4eec\u5e94\u8be5\u4f7f\u7528DelegatePerTargetObjectIntroductionInterceptor\u3002'}),"\n",(0,t.jsx)(n.h4,{id:"delegatepertargetobjectintroductioninterceptor",children:"DelegatePerTargetObjectIntroductionInterceptor"}),"\n",(0,t.jsx)(n.p,{children:"\u4e0eDelegatingIntroductionInterceptor\u4e0d\u540c\uff0cDelegatePerTargetObjectIntroductionInterceptor\u4f1a\u5728\u5185\u90e8\u6301\u6709\u4e00\u4e2a\u76ee\u6807\u5bf9\u8c61\u4e0e\u76f8\u5e94Introduction\u903b\u8f91\u5b9e\u73b0\u7c7b\u4e4b\u95f4\u7684\u6620\u5c04\u5173\u7cfb\u3002\u5f53\u6bcf\u4e2a\u5bf9\u8c61\u4e0a\u7684\u65b0\u5b9a\u4e49\u7684\u63a5\u53e3\u65b9\u6cd5\u88ab\u8c03\u7528\u7684\u65f6\u5019\uff0cDelegatePerTargetObjectIntroductionInterceptor\u4f1a\u62e6\u622a\u8fd9\u4e9b\u8c03\u7528\uff0c\u7136\u540e\u4ee5\u76ee\u6807\u5bf9\u8c61\u5b9e\u4f8b\u4f5c\u4e3a\u952e\uff0c\u5230\u5b83\u6301\u6709\u7684\u90a3\u4e2a\u6620\u5c04\u5173\u7cfb\u4e2d\u53d6\u5f97\u5bf9\u5e94\u5f53\u524d\u76ee\u6807\u5bf9\u8c61\u5b9e\u4f8b\u7684Introduction\u5b9e\u73b0\u5b9e\u4f8b\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"DelegatePerTargetObjectIntroductionInterceptor interceptor1 =\n                new DelegatePerTargetObjectIntroductionInterceptor(Tester.class,ITester.class);\n"})}),"\n",(0,t.jsx)(n.h4,{id:"\u6269\u5c55delegatingintroductioninterceptor",children:"\u6269\u5c55DelegatingIntroductionInterceptor"}),"\n",(0,t.jsxs)(r,{children:[(0,t.jsx)("summary",{children:"TesterFeatureIntroductionInterceptor"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'package org.springframework.mylearntest.aop.advice.perinstance;\n\nimport org.aopalliance.intercept.MethodInvocation;\nimport org.apache.commons.lang3.StringUtils;\nimport org.springframework.aop.support.DelegatingIntroductionInterceptor;\n\npublic class TesterFeatureIntroductionInterceptor extends DelegatingIntroductionInterceptor implements ITester {\n\n    public static final long serialVersionUID = -3387097489523045796L;\n    private boolean busyAsTester;\n\n    @Override\n    public Object invoke(MethodInvocation mi) throws Throwable {\n        if (isBusyAsTester() && StringUtils.contains(mi.getMethod().getName(), "developSoftware")) {\n            throw new RuntimeException("I\'am so tired");\n        }\n        return super.invoke(mi);\n    }\n\n    @Override\n    public boolean isBusyAsTester() {\n        return busyAsTester;\n    }\n\n    public void setBusyAsTester(boolean busyAsTester) {\n        this.busyAsTester = busyAsTester;\n    }\n\n    @Override\n    public void testSoftware() {\n        System.out.println("I will ensure the quality");\n    }\n}\n'})})]})]})}function p(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},8672:(e,n,r)=>{r.d(n,{Z:()=>s,a:()=>c});var t=r(959);const i={},o=t.createContext(i);function c(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);