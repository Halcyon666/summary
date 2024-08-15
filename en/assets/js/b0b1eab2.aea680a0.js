"use strict";(self.webpackChunksummary=self.webpackChunksummary||[]).push([[3059],{8569:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var o=t(1527),r=t(73);const i={title:"\u57fa\u4e8eSchema\u7684AOPA\u914d\u7f6e",sidebar_label:"\u57fa\u4e8eSchema\u7684AOPA\u914d\u7f6e",sidebar_position:14},a=void 0,c={id:"Java/Spring/AOP Configuration of Schema",title:"\u57fa\u4e8eSchema\u7684AOPA\u914d\u7f6e",description:"\u672c\u6587\u76f8\u5173\u4ee3\u7801(\u6765\u81ea\u5b98\u65b9\u6e90\u7801spring-test\u6a21\u5757)\u8bf7\u53c2\u89c1spring-framework org.springframework.mylearntest\u5305\u4e0b\u3002",source:"@site/docs/01-Java/02-Spring/AOP Configuration of Schema.mdx",sourceDirName:"01-Java/02-Spring",slug:"/Java/Spring/AOP Configuration of Schema",permalink:"/en/Java/Spring/AOP Configuration of Schema",draft:!1,unlisted:!1,editUrl:"https://github.com/Halcyon666/summary/edit/main/i18n/en/docusaurus-plugin-content-docs/current/01-Java/02-Spring/AOP Configuration of Schema.mdx",tags:[],version:"current",lastUpdatedAt:1723734192e3,sidebarPosition:14,frontMatter:{title:"\u57fa\u4e8eSchema\u7684AOPA\u914d\u7f6e",sidebar_label:"\u57fa\u4e8eSchema\u7684AOPA\u914d\u7f6e",sidebar_position:14},sidebar:"tutorialSidebar",previous:{title:"AspectJ\u5f62\u5f0fAOP\u4f7f\u7528",permalink:"/en/Java/Spring/AspectJ AOP"},next:{title:"Oracle\u76f8\u5173\u95ee\u9898\u5904\u7406",permalink:"/en/Java/ProblemSummary/Oracle"}},s={},l=[{value:"\u57fa\u4e8eSchema\u7684AOP\u914d\u7f6e",id:"\u57fa\u4e8eschema\u7684aop\u914d\u7f6e",level:2},{value:"\u57fa\u4e8eSchema\u7684AOP\u914d\u7f6e\u6982\u89c8",id:"\u57fa\u4e8eschema\u7684aop\u914d\u7f6e\u6982\u89c8",level:3},{value:"\u5411\u57fa\u4e8eSchema\u7684AOP\u8fc1\u79fb",id:"\u5411\u57fa\u4e8eschema\u7684aop\u8fc1\u79fb",level:3},{value:"@AspectJ\u5230\u201c\u57fa\u4e8eSchema\u7684AOP\u8fc1\u79fb\u201d",id:"aspectj\u5230\u57fa\u4e8eschema\u7684aop\u8fc1\u79fb",level:3},{value:"AOP\u4f7f\u7528\u573a\u666f",id:"aop\u4f7f\u7528\u573a\u666f",level:2},{value:"Spring AOP \u6269\u5c55",id:"spring-aop-\u6269\u5c55",level:2},{value:"\u95ee\u9898\u7684\u73b0\u8c61",id:"\u95ee\u9898\u7684\u73b0\u8c61",level:3},{value:"\u539f\u56e0\u5206\u6790",id:"\u539f\u56e0\u5206\u6790",level:3}];function p(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["\u672c\u6587\u76f8\u5173\u4ee3\u7801(\u6765\u81ea",(0,o.jsx)(n.a,{href:"https://github.com/spring-projects/spring-framework.git",children:"\u5b98\u65b9\u6e90\u7801"}),"spring-test\u6a21\u5757)\u8bf7\u53c2\u89c1",(0,o.jsx)(n.a,{href:"https://github.com/Halcyon666/spring-framework-modified/tree/main/spring-test",children:"spring-framework"})," org.springframework.mylearntest\u5305\u4e0b\u3002"]}),"\n",(0,o.jsx)(n.h2,{id:"\u57fa\u4e8eschema\u7684aop\u914d\u7f6e",children:"\u57fa\u4e8eSchema\u7684AOP\u914d\u7f6e"}),"\n",(0,o.jsx)(n.p,{children:"\u57fa\u4e8eSchema\u7684AOP\u662fSpring2.0\u53d1\u5e03\u4e4b\u540e\u65b0\u589e\u52a0\u7684\u4e00\u79cdAOP\u4f7f\u7528\u65b9\u5f0f\u3002\u53ef\u4ee5\u4ece\u5982\u4e0b\u4e24\u4e2a\u89d2\u5ea6\u6765\u770b\u5f85\u57fa\u4e8eSchema\u7684AOP\u3002"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"\u914d\u7f6e\u65b9\u5f0f\u7684\u6539\u53d8 \uff1a Spring\u6846\u67b6\u4ece1.x\u7248\u672c\u5347\u7ea7\u52302.x\u7248\u672c\u4e4b\u540e\uff0c\u63d0\u5021\u5bb9\u5668\u914d\u7f6e\u65b9\u5f0f\u4ece\u57fa\u4e8eDTD\u7684xml\u8f6c\u5411\u4e86\u57fa\u4e8eSchema\u7684xml\uff0c\u8fdb\u4e00\u6b65\u63d0\u9ad8\u4e86\u914d\u7f6e\u65b9\u5f0f\u7684\u7075\u6d3b\u6027\u548c\u53ef\u6269\u5c55\u578b\u3002\u540c\u65f6\uff0c\u65b0\u7684Schema\u7684\u914d\u7f6e\u65b9\u5f0f\u4e3aSpring\u7684AOP\u529f\u80fd\u4e13\u95e8\u63d0\u4f9b\u4e86\u72ec\u6709\u7684\u547d\u540d\u7a7a\u95f4\u3002\u539f\u67651.x\u4e2d\u57fa\u4e8eDTD\u7684AOP\u914d\u7f6e\u65b9\u5f0f\uff0c\u53ef\u4ee5\u7a0d\u5fae\u8f6c\u6362\u4e00\u4e0b\u914d\u7f6e\u65b9\u5f0f\u5c31\u79fb\u690d\u5230\u57fa\u4e8eSchema\u7684AOP\uff0c\u6240\u4ee5\u4ece\u8fd9\u4e00\u70b9\u6765\u8bf4\uff0c\u57fa\u4e8eSchema\u7684AOP\u53ea\u662f\u914d\u7f6e\u65b9\u5f0f\u7684\u6539\u53d8\u3002"}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"@AspectJ\u5f62\u5f0fAOP\u7684\u6298\u4e2d\uff1a \u8981\u4f7f\u7528@AspectJ\u5f62\u5f0f\u7684AOP\uff0c\u5fc5\u987b\u8981\u6c42\u4f7f\u7528Java 5\u6216\u8005\u66f4\u9ad8\u7248\u672c\u7684JDK\u6216\u8005JRE\uff0c\u56e0\u4e3a\u6ce8\u89e3\u662fJava 5\u53d1\u5e03\u4e4b\u540e\u624d\u5f15\u5165\u7684\u7279\u6027\u3002\u5982\u679c\u6211\u4eec\u4e0d\u5f97\u4e0d\u4f7f\u7528Java 5\u4e4b\u524d\u7684\u7248\u672c\uff0c\u800c\u53c8\u60f3\u4f7f\u7528\u57fa\u4e8ePOJO\u7684Aspect\u58f0\u660e\u65b9\u5f0f\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u57fa\u4e8eSchema\u7684Spring AOP\u3002\u4f7f\u7528\u57fa\u4e8eSchema\u7684AOP\uff0c\u6211\u4eec\u4f9d\u7136\u53ef\u4ee5\u4f7f\u7528POJO\u58f0\u660eAspect\u4ee5\u53ca\u76f8\u5173\u7684Advice\u3002\u4e0d\u8fc7\u4e0d\u9700\u8981\u6ce8\u89e3\u6807\u8bb0\u4e86\uff0c\u76f4\u63a5\u901a\u8fc7Schema\u7684\u914d\u7f6e\u6587\u4ef6\u8fdb\u884c\u914d\u7f6e\u5c31\u53ef\u4ee5\uff0c@AspectJ\u5f62\u5f0f\u7684Pointcut\u8868\u8fbe\u5f0f\u4e5f\u5168\u90fd\u53ef\u4ee5\u914d\u7f6e\u5230\u57fa\u4e8eSchema\u7684\u914d\u7f6e\u6587\u4ef6\u4e2d\u3002"}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"\u57fa\u4e8eschema\u7684aop\u914d\u7f6e\u6982\u89c8",children:"\u57fa\u4e8eSchema\u7684AOP\u914d\u7f6e\u6982\u89c8"}),"\n",(0,o.jsxs)(n.p,{children:["\u65b0\u7684\u57fa\u4e8eSchema\u7684AOP\u914d\u7f6e\u65b9\u5f0f\uff0c\u9488\u5bf9Pointcut\u3001Advisor\u4ee5\u53caAspect\u7b49\u6982\u5ff5\u63d0\u4f9b\u4e86\u72ec\u7acb\u7684\u914d\u7f6e\u5143\u7d20\uff0c\u6240\u6709\u8fd9\u4e9b\u914d\u7f6e\u5143\u7d20\u90fd\u5305\u542b\u5728\u7edf\u4e00\u7684\u914d\u7f6e\u5143\u7d20\u4e2d\uff0c\u5373",(0,o.jsx)(n.code,{children:"<aop:config/>"}),"\u5b83\u53ea\u6709\u4e00\u4e2a\u5c5e\u6027\uff0cproxy-target-class\uff0c\u5bf9\u5e94ProxyConfig\u4e2d\u7684proxyTargetClass\u5c5e\u6027\uff0c\u901a\u8fc7\u8be5\u5c5e\u6027\uff0c\u6211\u4eec\u53ef\u4ee5\u63a7\u5236\u662f\u4f7f\u7528\u57fa\u4e8e\u63a5\u53e3\u7684\u4ee3\u7406\u8fd8\u662f\u57fa\u4e8e\u7c7b\u7684\u4ee3\u7406\u3002\u5b83\u5185\u90e8\u53ef\u4ee5\u6709\u4e09\u4e2a\u5b50\u5143\u7d20\uff0c\u5206\u522b\u662f",(0,o.jsx)(n.code,{children:"<aop:pointcut>\u3001<aop:advisor>\u3001<aop:aspect>"}),"\uff0c\u5fc5\u987b\u6309\u987a\u5e8f\u8fdb\u884c\u914d\u7f6e\u3002"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:"https://s2.loli.net/2023/07/15/eRbMPO3Cwx1XEyL.png",alt:""})}),"\n",(0,o.jsxs)(n.p,{children:["\u5bf9\u4e8e",(0,o.jsx)(n.code,{children:"<aop:config>"}),"\u6765\u8bf4\uff0c\u5e95\u5c42\u57fa\u672c\u4e0a\u662f\u4f7f\u75281.x\u4e2d\u7684\u81ea\u52a8\u4ee3\u7406\u673a\u5236\u5b9e\u73b0\u7684\u3002\u76f8\u5e94\u7684\u81ea\u52a8\u4ee3\u7406\u5b9e\u73b0\u7c7b\uff0c\u4f1a\u6839\u636e\u5143\u7d20\u5185\u90e8\u5bf9\u5e94\u7684Pointcut\u3001Advisor\u4ee5\u53caAspect\u7684\u5b50\u5143\u7d20\u53d6\u5f97\u5fc5\u8981\u7684\u7ec7\u5165\u4fe1\u606f\uff0c\u7136\u540e\u4e3a\u5bb9\u5668\u5185\u6ce8\u518c\u7684bean\u8fdb\u884c\u81ea\u52a8\u4ee3\u7406\u3002\u6240\u4ee5\uff0c\u5982\u679c\u613f\u610f\u4e0d\u7528",(0,o.jsx)(n.code,{children:"<aop:config>"}),"\uff0c\u800c\u4f9d\u7136\u4f7f\u7528AutoProxyCreator\u5b9e\u73b0\u7c7b\u7684\u65b9\u5f0f\u4e5f\u662f\u53ef\u4ee5\u7684\u3002"]}),"\n",(0,o.jsx)(n.h3,{id:"\u5411\u57fa\u4e8eschema\u7684aop\u8fc1\u79fb",children:"\u5411\u57fa\u4e8eSchema\u7684AOP\u8fc1\u79fb"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"\u5355\u7eaf\u7684\u8fc1\u79fb"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"1.x\u7248\u672c\u7684Spring AOP\u901aAdvisor\u7684\u6982\u5ff5\u5bf9\u6a2a\u5207\u5173\u6ce8\u70b9\u8fdb\u884c\u5c01\u88c5\u5f53\u628a\u76f8\u5e94\u7684Pointcut\u5b9a\u4e49\u548cAdvice\u5b9a\u4e49\u6ce8\u518c\u5230\u5bb9\u5668\u4e4b\u540e(\u901a\u5e38\u662f\u5728\u57fa\u4e8eDTD\u7684XML\u914d\u7f6e\u6587\u4ef6\u4e2d)\uff0c\u901a\u8fc7\u58f0\u660e\u76f8\u5e94\u7684Advisor\u5b9e\u73b0\uff0c\u5c06\u8fd9\u4e9bPointcut\n\u4ee5\u53caAdvisor\u5b9a\u4e49\u88c5\u914d\u5230\u4e00\u8d77\uff0c\u6700\u540e\u901a\u8fc7\u67d0\u4e2aAutoProxyCreator\u8fdb\u884c\u6700\u540e\u7684\u7ec7\u5165\u3002"}),"\n",(0,o.jsxs)(n.p,{children:["\u5728\u8f6c\u54112.x\u7248\u672c\u57fa\u4e8eSchema\u7684\u914d\u7f6e\u65b9\u5f0f\u4e4b\u540e\uff0c\u8fd9\u4e9b\u6982\u5ff5\u5b9e\u9645\u4e0a\u662f\u76f8\u540c\u7684\uff0c\u552f\u4e00\u9700\u8981\u6539\u53d8\u7684\u662f\u5177\u4f53\u914d\u7f6e\u65b9\u5f0f\u7684\u6539\u53d8\u3002\u73b0\u5728\u4f7f\u7528",(0,o.jsx)(n.code,{children:"<aop:advisor>"}),"\u66ff\u4ee3\u5404\u79cd\u5177\u4f53\u7684Advisor\u5b9e\u73b0\u7c7b\u7684bean\u5b9a\u4e49\u58f0\u660e\uff0c\n\u4f7f\u7528",(0,o.jsx)(n.code,{children:"<aop:config>"}),"\u53d6\u4ee3\u5404\u79cdAutoProxyCreator\u3002"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:"https://s2.loli.net/2023/07/15/HgJbXV8t4Ple9qZ.png",alt:""})}),"\n",(0,o.jsxs)(n.p,{children:["\u5728",(0,o.jsx)(n.code,{children:"<aop:config>"}),"\u4e2d\u4f7f\u7528",(0,o.jsx)(n.code,{children:"<aop:advisor>"}),"\u914d\u7f6e\u76f8\u5e94\u7684Advisor\uff0c\u4e5f\u5c31\u662f\u7279\u5b9a\u4e8eSpring AOP\u7684Aspect\u3002"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"id\uff1a\u6307\u5b9a\u5f53\u524dAdvisor\u5b9a\u4e49\u7684\u6807\u5fd7id"}),"\n",(0,o.jsx)(n.li,{children:"pointcut-ref\uff1a\u901a\u8fc7\u8fd9\u4e2a\u5c5e\u6027\u6307\u5b9a\u5f53\u524dAdvisor\u6240\u5bf9\u5e94\u7684Pointcut\u5b9a\u4e49\u662f\u4ec0\u4e48\uff0c\u9700\u8981\u6307\u5b9a\u5bb9\u5668\u4e2d\u6ce8\u518c\u7684\u5177\u4f53\u7684Pointcut\u5bf9\u8c61\u5f15\u7528"}),"\n",(0,o.jsx)(n.li,{children:"advice-ref\uff1a\u6307\u5b9a\u5f53\u524dAdvisor\u5bf9\u5e94\u7684Advice\u5bf9\u8c61\u5f15\u7528"}),"\n",(0,o.jsx)(n.li,{children:"order\uff1a\u6307\u5b9a\u5f53\u524dAdvisor\u7684\u987a\u5e8f\u53f7\uff0c\u56e0\u4e3a\u57fa\u672c\u4e0a\u6240\u6709\u7684Advisor\u5b9e\u73b0\u90fd\u5b9e\u73b0\u4e86Ordered\u63a5\u53e3"}),"\n"]}),"\n",(0,o.jsxs)(n.ol,{start:"2",children:["\n",(0,o.jsxs)(n.li,{children:["\u6df1\u5165\u6316\u6398",(0,o.jsx)(n.code,{children:"<aop:advisor>"})]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:"https://s2.loli.net/2023/07/15/ICXHBAMW3c7z61Y.png",alt:""})}),"\n",(0,o.jsx)(n.h3,{id:"aspectj\u5230\u57fa\u4e8eschema\u7684aop\u8fc1\u79fb",children:"@AspectJ\u5230\u201c\u57fa\u4e8eSchema\u7684AOP\u8fc1\u79fb\u201d"}),"\n",(0,o.jsx)(n.p,{children:"\u9664Introduction\u4e4b\u5916\u57fa\u4e8eSchema\u7684Advice\u58f0\u660e\u4ee5\u53caPointcut\u58f0\u660e"}),"\n",(0,o.jsxs)(t,{children:[(0,o.jsx)("summary",{children:"SchemaBasedAspect"}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:'package org.springframework.mylearntest.aop2.schemaapsect;\n\nimport org.apache.commons.lang3.exception.ExceptionUtils;\nimport org.apache.commons.logging.Log;\nimport org.apache.commons.logging.LogFactory;\nimport org.aspectj.lang.JoinPoint;\nimport org.aspectj.lang.ProceedingJoinPoint;\nimport org.springframework.util.StopWatch;\n\n/**\n * @Author: WhaleFall541\n * @Date: 2020/8/12 21:33\n */\npublic class SchemaBasedAspect {\n\tpublic void method1() {}\n\tpublic void method2() {}\n\n\tprivate  final Log logger = LogFactory.getLog(SchemaBasedAspect.class);\n\n\tpublic void doBefore(JoinPoint jp) {\n\t\tif (logger.isInfoEnabled()) {\n\t\t\tlogger.info("before method {" + jp.getSignature().getName()+"} execution");\n\t\t}\n\t}\n\n\tpublic void doAfterReturning(JoinPoint jp, Object retValue) {\n\t\tif (logger.isInfoEnabled()) {\n\t\t\tlogger.info("before method {" + jp.getSignature().getName()+"} execution");\n\t\t\tlogger.info("with return value: " + retValue);\n\t\t}\n\t}\n\n\tpublic void doAfterThrowing(RuntimeException e) {\n\t\tlogger.error(ExceptionUtils.getStackTrace(e));\n\t}\n\n\tpublic void doAfter() {\n\t\tlogger.warn("release system resources ,etc.");\n\t}\n\n\t// NOTE\uff1a\u7b2c\u4e00\u4e2a\u53c2\u6570\u5fc5\u987b\u4e3aProceedingJoinPoint\n\tpublic Object doAround(ProceedingJoinPoint pjp) throws Throwable {\n\t\tStopWatch watch = new StopWatch();\n\t\ttry {\n\t\t\twatch.start();\n\t\t\treturn pjp.proceed();\n\t\t} finally {\n\t\t\twatch.stop();\n\t\t\tif (logger.isInfoEnabled()) {\n\t\t\t\tlogger.info(watch);\n\t\t\t}\n\t\t}\n\t}\n}\n'})})]}),"\n",(0,o.jsxs)(t,{children:[(0,o.jsx)("summary",{children:"schemaaspect.xml"}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-xml",children:'<?xml version="1.0" encoding="UTF-8"?>\n<beans xmlns="http://www.springframework.org/schema/beans"\n\t   xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n\t   xmlns:aop="http://www.springframework.org/schema/aop"\n\t   xsi:schemaLocation=\n\t\t\t   "http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans-2.0.xsd\n\n              \t  http://www.springframework.org/schema/aop https://www.springframework.org/schema/aop/spring-aop.xsd">\n\n\t<aop:config>\n\t\t<aop:aspect id="myAspect" ref="schemaBasedAspect" order="2">\n\t\t\t<aop:pointcut id="privatePointcut" expression="execution(public void *.doSth())"/>\n\t\t\t<aop:before pointcut-ref="privatePointcut" method="doBefore"/>\n\t\t\t<aop:after-returning pointcut-ref="privatePointcut" method="doAfterReturning" returning="retValue"/>\n\t\t\t<aop:after-throwing pointcut-ref="privatePointcut" method="doAfterThrowing" throwing="e"/>\n\t\t\t<aop:after pointcut-ref="privatePointcut" method="doAfter"/>\n\t\t\t<aop:around pointcut-ref="privatePointcut" method="doAround"/>\n\n\t\t\t\x3c!--\t\t\tintroduction\n\t\t\ttypes-matching \u8868\u793a\u54ea\u4e9b\u76ee\u6807\u5bf9\u8c61\u8fdb\u884cIntroduction\u903b\u8f91\u7ec7\u5165\n\t\t\timplement-interface \u6307\u5b9a\u65b0\u589e\u52a0\u7684Introduction\u884c\u4e3a\u7684\u63a5\u53e3\u5b9a\u4e49\u7c7b\u578b\n\t\t\tdefault-impl \u6307\u5b9a\u65b0\u589e\u52a0\u7684Introduction\u884c\u4e3a\u7684\u63a5\u53e3\u5b9a\u4e49\u7684\u9ed8\u8ba4\u5b9e\u73b0\u7c7b--\x3e\n\t\t\t<aop:declare-parents types-matching="org.springframework.mylearntest.aop1.weaver.baseoninterface.MockTask"\n\t\t\t\t\t\t\t\t implement-interface="org.springframework.mylearntest.aop1.weaver.proxyfactorybean.ICounter"\n\t\t\t\t\t\t\t\t default-impl="org.springframework.mylearntest.aop1.weaver.proxyfactorybean.CounterImpl"/>\n\t\t</aop:aspect>\n\t</aop:config>\n\n\n    <bean id="schemaBasedAspect" class="org.springframework.mylearntest.aop2.schemaapsect.SchemaBasedAspect"/>\n\n\n</beans>\n'})})]}),"\n",(0,o.jsx)(n.h2,{id:"aop\u4f7f\u7528\u573a\u666f",children:"AOP\u4f7f\u7528\u573a\u666f"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"\u5f02\u5e38\u5904\u7406"}),"\n"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"unchecked exception: java.lang.Error\u3001java.lang.RuntimeException\u4ee5\u53ca\u5176\u5b50\u7c7b\u3002\u7f16\u8bd1\u5668\u4e0d\u4f1a\u5728\u7f16\u8bd1\u671f\u5bf9\u8fd9\u4e9b\u7c7b\u578b\u8fdb\u884c\u68c0\u67e5\u3002"}),"\n",(0,o.jsx)(n.li,{children:"checked exception: java.lang.Exception\u53ca\u5176\u5b50\u7c7b\uff0c\u4f46\u662f\u9664\u53bbRuntimeException\u5206\u652f\u3002\u5fc5\u987b\u5bf9\u8fd9\u4e9b\u5f02\u5e38\u5904\u7406\uff0c\u5e76\u4e14\u7f16\u8bd1\u5668\u4f1a\u5728\u7f16\u8bd1\u671f\u5bf9\u8fd9\u4e9b\u5f02\u5e38\u7c7b\u578b\u8fdb\u884c\u68c0\u67e5"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:"https://s2.loli.net/2023/07/15/bXHyAk8ZaFerdfB.png",alt:""})}),"\n",(0,o.jsx)(n.p,{children:"\u5f53\u7cfb\u7edf\u4e2d\u591a\u4e2a\u5730\u65b9\u90fd\u53ef\u80fd\u629b\u51faunchecked exception\u7684\u65f6\u5019\uff0c\u6211\u4eec\u53ef\u4ee5\u5728\u8c03\u7528\u7684\u6700\u9876\u5c42\uff0c\u5206\u522b\u6dfb\u52a0\u5f02\u5e38\u5904\u7406\u903b\u8f91\u5bf9\u5176\u8fdb\u884c\u5904\u7406(\u8bb0\u5f55\u65e5\u5fd7\uff0c\u901a\u77e5\u76f8\u5e94\u4eba\u5458)\u3002\u6211\u4eec\u53ef\u4ee5\u5b9e\u73b0\u4e00\u4e2a\u5bf9\u5e94Fault\u5904\u7406\u7684Aspect\uff0c\u8ba9\u5176\u5bf9\u7cfb\u7edf\u4e2d\u6240\u6709\u53ef\u80fd\u7684Fault\u60c5\u51b5\u8fdb\u884c\u7edf\u4e00\u7684\u5904\u7406\u3002\u8fd9\u4e2a\u4e13\u804c\u7684Aspect\uff0c\u6211\u4eec\u79f0\u4e4b\u4e3aFault Barrier\u3002"}),"\n",(0,o.jsxs)(n.ol,{start:"2",children:["\n",(0,o.jsx)(n.li,{children:"\u5b89\u5168\u68c0\u67e5"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Acegi \u6846\u67b6\u6700\u521d\u72ec\u7acb\u4e8eSpring\u5f00\u53d1\uff0c\u73b0\u5728\u5df2\u7ecf\u5e76\u5165Spring Portfolio\uff0c\u66f4\u540d\u4e3aSpring Security\u3002"}),"\n",(0,o.jsxs)(n.ol,{start:"3",children:["\n",(0,o.jsx)(n.li,{children:"\u7f13\u5b58"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"\u4e3a\u4e86\u907f\u514d\u9700\u8981\u6dfb\u52a0\u7684\u7f13\u5b58\u5b9e\u73b0\u903b\u8f91\u5f71\u54cd\u4e1a\u52a1\u903b\u8f91\u7684\u5b9e\u73b0\uff0c\u6211\u4eec\u53ef\u4ee5\u8ba9\u7f13\u5b58\u7684\u5b9e\u73b0\u72ec\u7acb\u4e8e\u4e1a\u52a1\u5bf9\u8c61\u7684\u5b9e\u73b0\u4e4b\u5916\uff0c\u5c06\u7cfb\u7edf\u4e2d\u7684\u7f13\u5b58\u9700\u6c42\u901a\u8fc7AOP\u7684Aspect\u8fdb\u884c\u5c01\u88c5\uff0c\u53ea\u5728\u7cfb\u7edf\u4e2d\u67d0\u4e2a\u70b9\u786e\u5207\u9700\u8981\u7f13\u5b58\u652f\u6301\u7684\u60c5\u51b5\u4e0b\uff0c\u624d\u4e3a\u5176\u7ec7\u5165\u3002"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:"https://s2.loli.net/2023/07/15/dVmx8W5NDYSGL4g.png",alt:""})}),"\n",(0,o.jsx)(n.p,{children:"\u73b0\u6210\u7684Caching\u4ea7\u54c1\u5b9e\u73b0\u6709EhCache\u3001JBossCache\u7b49\uff1bSpring Modules\u9879\u76ee\u63d0\u4f9b\u4e86\u5bf9\u73b0\u6709Caching\u4ea7\u54c1\u7684\u96c6\u6210\uff0c\u8fd9\u6837\u5c31\u53ef\u4ee5\u901a\u8fc7\u5916\u90e8\u58f0\u660e\u7684\u65b9\u5f0f\u4e3a\u7cfb\u7edf\u4e2d\u7684Joinpoint\u6dfb\u52a0Caching\u652f\u6301\u3002"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://www.infoworld.com/article/2072722/extending-declarative-caching-services-for-spring.html",children:"\u76f8\u5173\u6848\u4f8b"})}),"\n",(0,o.jsx)(n.h2,{id:"spring-aop-\u6269\u5c55",children:"Spring AOP \u6269\u5c55"}),"\n",(0,o.jsx)(n.h3,{id:"\u95ee\u9898\u7684\u73b0\u8c61",children:"\u95ee\u9898\u7684\u73b0\u8c61"}),"\n",(0,o.jsx)(n.p,{children:"\u5b58\u5728\u4e00\u4e2a\u81ea\u8eab\u5d4c\u5957\u65b9\u6cd5\u8c03\u7528\u7684\u7c7b"}),"\n",(0,o.jsxs)(t,{children:[(0,o.jsx)("summary",{children:"NestableInvocationBO"}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:'public class NestableInvocationBO {\n    public void method1() {\n        method2();\n        System.out.println("method1 executed");\n    }\n\n    public void method2() {\n        System.out.println("method2 executed");\n    }\n}\n'})})]}),"\n",(0,o.jsx)(n.p,{children:"\u5b9a\u4e49\u4e00\u4e2a\u7528\u4e8e\u6027\u80fd\u68c0\u67e5\u7684AspectJ"}),"\n",(0,o.jsxs)(t,{children:[(0,o.jsx)("summary",{children:"PerformanceTraceAspect1"}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:'@Aspect\npublic class PerformanceTraceAspect1 {\n    private final Log logger = LogFactory.getLog(PerformanceTraceAspect1.class);\n\n    @Pointcut("execution(public void *.method1())")\n    public void method1() {}\n\n    @Pointcut("execution(public void *.method2())")\n    public void method2() {}\n\n    @Pointcut("method1() || method2()")\n    public void compositePointcut() {}\n\n    @Around("compositePointcut()")\n    public Object performanceTrace(ProceedingJoinPoint pjp) throws Throwable {\n        StopWatch watch = new StopWatch();\n        try {\n            watch.start();\n            return pjp.proceed();\n        } finally {\n            watch.stop();\n            System.out.println("PT in method" + pjp.getSignature().getName() + "]>>>>>" + watch.toString());\n            if (logger.isInfoEnabled()) {\n                logger.info("PT in method" + pjp.getSignature().getName() + "]>>>>>" + watch.toString());\n            }\n        }\n    }\n}\n'})})]}),"\n",(0,o.jsx)(n.p,{children:"\u6211\u4eec\u7684Around Advice\u5b9a\u4e49\u4f1a\u62e6\u622acompositePointcut()\u6240\u6307\u5b9a\u7684Joinpoint\uff0c\u5373\u5339\u914dmethod1\u6216\u8005method2\u7684\u6267\u884c\u3002"}),"\n",(0,o.jsxs)(t,{children:[(0,o.jsx)("summary",{children:"Test4NestableInvocationBO"}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:"public class Test4NestableInvocationBO {\n    public static void main(String[] args) {\n        AspectJProxyFactory weaver = new AspectJProxyFactory(new NestableInvocationBO());\n        weaver.setProxyTargetClass(true);\n        weaver.addAspect(PerformanceTraceAspect1.class);\n        Object proxy = weaver.getProxy();\n        ((NestableInvocationBO)proxy).method2();\n        ((NestableInvocationBO)proxy).method1();\n    }\n}\n"})})]}),"\n",(0,o.jsx)(n.h3,{id:"\u539f\u56e0\u5206\u6790",children:"\u539f\u56e0\u5206\u6790"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-log",children:"method2 executed\nPT in methodmethod2]>>>>>StopWatch '': running time = 9203600 ns; [] took 9203600 ns = 100%\nmethod2 executed\nmethod1 executed\nPT in methodmethod1]>>>>>StopWatch '': running time = 65800 ns; [] took 65800 ns = 100%\n"})}),"\n",(0,o.jsx)(n.p,{children:"\u8f93\u51fa\u7ed3\u679c\u8868\u660e\uff1a"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"\u7b2c\u4e00\u6b21\u8c03\u7528method2\uff0c\u88ab\u62e6\u622a\u540e\u6267\u884c\u6210\u529f"}),"\n",(0,o.jsx)(n.li,{children:"\u7b2c\u4e8c\u6b21\u8c03\u7528method1\uff0c\u5374\u53ea\u6709method1\u65b9\u6cd5\u7684\u6267\u884c\u62e6\u622a\u6210\u529f\uff0c\u800cmethod1\u65b9\u6cd5\u5185\u90e8\u7684method2\u65b9\u6cd5\u5374\u6ca1\u6709\u88ab\u62e6\u622a"}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["\u65b9\u6cd5\u8c03\u7528\u65f6\u5e8f\u56fe\n",(0,o.jsx)(n.img,{src:"https://s2.loli.net/2023/07/15/pqer2USxgj7CTnL.png",alt:""})]}),"\n",(0,o.jsxs)(n.p,{children:["\u540c\u4e00\u5bf9\u8c61\u5185\u90e8\u65b9\u6cd5\u5d4c\u5957\u8c03\u7528\u793a\u610f\u56fe\n",(0,o.jsx)(n.img,{src:"https://s2.loli.net/2023/07/15/dXsEeAV9ofqGQH8.png",alt:""}),"\n\u5f53method1\u8c03\u7528method2\u65f6\uff0c\u5b83\u8c03\u7528\u7684\u662fTargetObject\u4e0a\u7684method2\uff0c\u800c\u4e0d\u662fProxyObject\u4e0a\u7684method2\u3002\u8981\u9488\u5bf9met\u6d3b\u52a8\u7684\u6a2a\u5207\u903b\u8f91\uff0c\u53ea\u7ec7\u5165\u5230\u4e86ProxyObject\u4e0a\u7684method2\u65b9\u6cd5\u4e2d\uff0c\u6240\u4ee5\u5728method1\u6240\u8c03\u7528\u7684method2\u6ca1\u6709\u80fd\u591f\u88ab\u6210\u529f\u62e6\u622a\u3002"]}),"\n",(0,o.jsxs)(n.ol,{start:"3",children:["\n",(0,o.jsx)(n.li,{children:"\u89e3\u51b3\u65b9\u6848"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"\u5f53\u76ee\u6807\u5bf9\u8c61\u4f9d\u8d56\u4e8e\u81ea\u8eab\u65f6\uff0c\u6211\u4eec\u4e5f\u53ef\u4ee5\u5c1d\u8bd5\u5c06\u76ee\u6807\u5bf9\u8c61\u7684\u4ee3\u7406\u5bf9\u8c61\u516c\u5f00\u7ed9\u5b83\uff0c\u53ea\u8981\u8ba9\u76ee\u6807\u5bf9\u8c61\u8c03\u7528\u81ea\u8eab\u4ee3\u7406\u5bf9\u8c61\u4e0a\u7684\u76f8\u5e94\u65b9\u6cd5\uff0c\u5c31\u53ef\u4ee5\u89e3\u51b3\u5185\u90e8\u8c03\u7528\u7684\u65b9\u6cd5\u6ca1\u6709\u88ab\u62e6\u622a\u7684\u95ee\u9898\u3002"}),"\n",(0,o.jsxs)(n.p,{children:["Spring AOP \u63d0\u4f9b\u4e86AopContext\u6765\u516c\u5f00\u5f53\u524d\u76ee\u6807\u5bf9\u8c61\u7684\u4ee3\u7406\u5bf9\u8c61\uff0c\u6211\u4eec\u53ea\u8981\u5728\u76ee\u6807\u5bf9\u8c61\u4e2d\u4f7f\u7528",(0,o.jsx)(n.code,{children:"AopContext.currentProxy()"}),"\u5c31\u53ef\u4ee5\u83b7\u53d6\u5f53\u524d\u76ee\u6807\u5bf9\u8c61\u6240\u5bf9\u5e94\u7684\u4ee3\u7406\u5bf9\u8c61\u3002\u5e76\u5728\u6d4b\u8bd5\u7c7b\u4e2d\u8bbe\u7f6e",(0,o.jsx)(n.code,{children:"weaver.setExposeProxy(true);"}),"\u5373\u53ef\u3002"]}),"\n",(0,o.jsxs)(t,{children:[(0,o.jsx)("summary",{children:"NestableInvocationBO\u4f18\u5316\u540e"}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:'package org.springframework.mylearntest.aop2.aopextends;\n\nimport org.springframework.aop.framework.AopContext;\n\n/**\n * @Author: WhaleFall541\n * @Date: 2020/8/14 0:03\n * \u7edf\u4e00\u5bf9\u8c61\u5185\u65b9\u6cd5\u5d4c\u5957\u8c03\u7528\u7684\u76ee\u6807\u5bf9\u8c61\u793a\u4f8b\n */\npublic class NestableInvocationBO {\n    public void method1() {\n        // method2(); // \u4f18\u5316\u524d\n        ((NestableInvocationBO)AopContext.currentProxy()).method2();//\u4f18\u5316\u540e\n        System.out.println("method1 executed");\n    }\n\n    public void method2() {\n        System.out.println("method2 executed");\n    }\n}\n'})})]}),"\n",(0,o.jsxs)(t,{children:[(0,o.jsx)("summary",{children:"Test4NestableInvocationBO\u4f18\u5316\u540e"}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:"package org.springframework.mylearntest.aop2.aopextends;\n\nimport org.springframework.aop.aspectj.annotation.AspectJProxyFactory;\n\n/**\n * @Author: WhaleFall541\n * @Date: 2020/8/14 0:24\n */\npublic class Test4NestableInvocationBO {\n    public static void main(String[] args) {\n        AspectJProxyFactory weaver = new AspectJProxyFactory(new NestableInvocationBO());\n        weaver.setProxyTargetClass(true);\n        // \u8981\u4f7fAopContext.currentProxy()\u751f\u6548 \u9700\u8981\u8bbe\u7f6eexposeProxy\u5c5e\u6027\u4e3atrue\n        weaver.setExposeProxy(true);\n        weaver.addAspect(PerformanceTraceAspect1.class);\n        Object proxy = weaver.getProxy();\n        ((NestableInvocationBO)proxy).method2();\n        ((NestableInvocationBO)proxy).method1();\n    }\n\n}\n"})})]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-log",children:"method2 executed\nPT in methodmethod2]>>>>>StopWatch '': running time = 9457200 ns; [] took 9457200 ns = 100%\nmethod2 executed\nPT in methodmethod2]>>>>>StopWatch '': running time = 19500 ns; [] took 19500 ns = 100%\nmethod1 executed\nPT in methodmethod1]>>>>>StopWatch '': running time = 121900 ns; [] took 121900 ns = 100%\n"})}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"\u53c2\u8003\u8d44\u6599\uff1a"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"\u4e66\u7c4d \u738b\u798f\u5f3a-Spring\u63ed\u79d8"}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},73:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>a});var o=t(959);const r={},i=o.createContext(r);function a(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);