"use strict";(self.webpackChunksummary=self.webpackChunksummary||[]).push([[8874],{9219:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>t,metadata:()=>o,toc:()=>l});var s=r(1527),a=r(8672);const t={title:"IoC\u6ce8\u5165\u65b9\u5f0f2",sidebar_label:"IoC\u6ce8\u5165\u65b9\u5f0f2",sidebar_position:3},i=void 0,o={id:"Java/Spring/IoC Inject2",title:"IoC\u6ce8\u5165\u65b9\u5f0f2",description:"\u672c\u6587\u76f8\u5173\u4ee3\u7801(\u6765\u81ea\u5b98\u65b9\u6e90\u7801spring-test\u6a21\u5757)\u8bf7\u53c2\u89c1spring-framework org.springframework.mylearntest\u5305\u4e0b\u3002",source:"@site/docs/01-Java/02-Spring/IoC Inject2.mdx",sourceDirName:"01-Java/02-Spring",slug:"/Java/Spring/IoC Inject2",permalink:"/Java/Spring/IoC Inject2",draft:!1,unlisted:!1,editUrl:"https://github.com/Halcyon666/summary/edit/main/docs/01-Java/02-Spring/IoC Inject2.mdx",tags:[],version:"current",lastUpdatedAt:1706843147,formattedLastUpdatedAt:"2024\u5e742\u67082\u65e5",sidebarPosition:3,frontMatter:{title:"IoC\u6ce8\u5165\u65b9\u5f0f2",sidebar_label:"IoC\u6ce8\u5165\u65b9\u5f0f2",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"IoC\u6ce8\u5165\u65b9\u5f0f1",permalink:"/Java/Spring/IoC Inject 1"},next:{title:"BeanFactoryPostProcessor",permalink:"/Java/Spring/BeanFactoryPostProcessor"}},c={},l=[{value:"\u81ea\u52a8\u7ed1\u5b9a\u548c\u624b\u52a8\u7ed1\u5b9a\u7684\u533a\u522b",id:"\u81ea\u52a8\u7ed1\u5b9a\u548c\u624b\u52a8\u7ed1\u5b9a\u7684\u533a\u522b",level:2},{value:"\u61d2\u52a0\u8f7d\u914d\u7f6e\u4e86\u662f\u5426\u4e00\u5b9a\u4f1a\u751f\u6548",id:"\u61d2\u52a0\u8f7d\u914d\u7f6e\u4e86\u662f\u5426\u4e00\u5b9a\u4f1a\u751f\u6548",level:2},{value:"abstract\u5c5e\u6027\u7684\u4f7f\u7528",id:"abstract\u5c5e\u6027\u7684\u4f7f\u7528",level:2},{value:"scope",id:"scope",level:2},{value:"\u5077\u6881\u6362\u67f1\u4e4b\u672f",id:"\u5077\u6881\u6362\u67f1\u4e4b\u672f",level:2},{value:"\u65b9\u6cd5\u6ce8\u5165",id:"\u65b9\u6cd5\u6ce8\u5165",level:4},{value:"\u901a\u8fc7\u5b9e\u73b0BeanFactoryAware",id:"\u901a\u8fc7\u5b9e\u73b0beanfactoryaware",level:4},{value:"\u901a\u8fc7ObjectFactory",id:"\u901a\u8fc7objectfactory",level:4},{value:"\u65b9\u6cd5\u66ff\u6362",id:"\u65b9\u6cd5\u66ff\u6362",level:4}];function p(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components},{Details:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["\u672c\u6587\u76f8\u5173\u4ee3\u7801(\u6765\u81ea",(0,s.jsx)(n.a,{href:"https://github.com/spring-projects/spring-framework.git",title:"\u5b98\u65b9\u6e90\u7801",children:"\u5b98\u65b9\u6e90\u7801"}),"spring-test\u6a21\u5757)\u8bf7\u53c2\u89c1",(0,s.jsx)(n.a,{href:"https://github.com/Halcyon666/spring-framework-modified/tree/main/spring-test",children:"spring-framework"})," org.springframework.mylearntest\u5305\u4e0b\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u81ea\u52a8\u7ed1\u5b9a\u548c\u624b\u52a8\u7ed1\u5b9a\u7684\u533a\u522b",children:"\u81ea\u52a8\u7ed1\u5b9a\u548c\u624b\u52a8\u7ed1\u5b9a\u7684\u533a\u522b"}),"\n",(0,s.jsx)(n.p,{children:"\u81ea\u52a8\u7ed1\u5b9a\u548c\u624b\u52a8\u660e\u786e\u7ed1\u5b9a\u5404\u6709\u5229\u5f0a\u3002\u81ea\u52a8\u7ed1\u5b9a\u7684\u4f18\u70b9\u6709\u5982\u4e0b\u4e24\u70b9\u3002"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u67d0\u79cd\u7a0b\u5ea6\u4e0a\u53ef\u4ee5\u6709\u6548\u51cf\u5c11\u624b\u52a8\u6572\u5165\u914d\u7f6e\u4fe1\u606f\u7684\u5de5\u4f5c\u91cf\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u67d0\u4e9b\u60c5\u51b5\u4e0b\uff0c\u5373\u4f7f\u4e3a\u5f53\u524d\u5bf9\u8c61\u589e\u52a0\u4e86\u65b0\u7684\u4f9d\u8d56\u5173\u7cfb\uff0c\u4f46\u53ea\u8981\u5bb9\u5668\u4e2d\u5b58\u5728\u76f8\u5e94\u7684\u4f9d\u8d56\u5bf9\u8c61\uff0c\u5c31\u4e0d\u9700\u8981\u66f4\u6539\u4efb\u4f55\u914d\u7f6e\u4fe1\u606f\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u81ea\u52a8\u7ed1\u5b9a\u7684\u7f3a\u70b9\u6709\u5982\u4e0b\u51e0\u70b9\u3002"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u81ea\u52a8\u7ed1\u5b9a\u4e0d\u5982\u660e\u786e\u4f9d\u8d56\u5173\u7cfb\u4e00\u76ee\u4e86\u7136\u3002\u6211\u4eec\u53ef\u4ee5\u6839\u636e\u660e\u786e\u7684\u4f9d\u8d56\u5173\u7cfb\u5bf9\u6574\u4e2a\u7cfb\u7edf\u6709\u4e00\u4e2a\u660e\u786e\u7684\u8ba4\u8bc6\uff0c\u4f46\u4f7f\u7528\u81ea\u52a8\u7ed1\u5b9a\u7684\u8bdd\uff0c\u5c31\u53ef\u80fd\u9700\u8981\u5728\u7c7b\u5b9a\u4e49\u4ee5\u53ca\u914d\u7f6e\u6587\u4ef6\u4e4b\u95f4\uff0c\u751a\u81f3\u5404\u4e2a\u914d\u7f6e\u6587\u4ef6\u4e4b\u95f4\u6765\u56de\u8f6c\u6362\u4ee5\u53d6\u5f97\u76f8\u5e94\u7684\u4fe1\u606f\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u67d0\u4e9b\u60c5\u51b5\u4e0b\uff0c\u81ea\u52a8\u7ed1\u5b9a\u65e0\u6cd5\u6ee1\u8db3\u7cfb\u7edf\u9700\u8981\uff0c\u751a\u81f3\u5bfc\u81f4\u7cfb\u7edf\u884c\u4e3a\u5f02\u5e38\u6216\u8005\u4e0d\u53ef\u9884\u77e5\u3002\u6839\u636e\u7c7b\u578b\uff08 byType\uff09\u5339\u914d\u8fdb\u884c\u7684\u81ea\u52a8\u7ed1\u5b9a\uff0c\u5982\u679c\u7cfb\u7edf\u4e2d\u589e\u52a0\u4e86\u53e6\u4e00\u4e2a\u76f8\u540c\u7c7b\u578b\u7684bean\u5b9a\u4e49\uff0c\u90a3\u4e48\u6574\u4e2a\u7cfb\u7edf\u5c31\u4f1a\u5d29\u6e83\uff1b\u6839\u636e\u540d\u5b57\uff08byName\uff09\u5339\u914d\u8fdb\u884c\u7684\u81ea\u52a8\u7ed1\u5b9a\uff0c\u5982\u679c\u628a\u539f\u6765\u7cfb\u7edf\u4e2d\u76f8\u540c\u540d\u79f0\u7684bean\u5b9a\u4e49\u7c7b\u578b\u7ed9\u6362\u6389\uff0c\u5c31\u4f1a\u9020\u6210\u95ee\u9898\uff0c\u800c\u8fd9\u4e9b\u53ef\u80fd\u90fd\u662f\u5728\u4e0d\u7ecf\u610f\u95f4\u53d1\u751f\u7684\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u4f7f\u7528\u81ea\u52a8\u7ed1\u5b9a\uff0c\u6211\u4eec\u53ef\u80fd\u65e0\u6cd5\u83b7\u5f97\u67d0\u4e9b\u5de5\u5177\u7684\u826f\u597d\u652f\u6301\uff0c\u6bd4\u5982Spring IDE\u3002\u4e0eBeanFactory\u4e0d\u540c\uff0c ApplicationContext\u5728\u5bb9\u5668\u542f\u52a8\u7684\u65f6\u5019\uff0c\u5c31\u4f1a\u9a6c\u4e0a\u5bf9\u6240\u6709\u7684\u201c singleton\u7684bean\u5b9a\u4e49\u201d \u8fdb\u884c\u5b9e\u4f8b\u5316\u64cd\u4f5c"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u61d2\u52a0\u8f7d\u914d\u7f6e\u4e86\u662f\u5426\u4e00\u5b9a\u4f1a\u751f\u6548",children:"\u61d2\u52a0\u8f7d\u914d\u7f6e\u4e86\u662f\u5426\u4e00\u5b9a\u4f1a\u751f\u6548"}),"\n",(0,s.jsx)(n.p,{children:"\u4ec5\u6307\u5b9alazy-init-bean\u7684lazy-init\u4e3atrue\uff0c\u5e76\u4e0d\u610f\u5473\u7740\u5bb9\u5668\u5c31\u4e00\u5b9a\u4f1a\u5ef6\u8fdf\u521d\u59cb\u5316\u8be5bean\u7684\u5b9e\u4f8b\u3002\u5982\u679c\u67d0\u4e2a\u975e\u5ef6\u8fdf\u521d\u59cb\u5316\u7684bean\u5b9a\u4e49\u4f9d\u8d56\u4e8elazy-init-bean\uff0c\u90a3\u4e48\u6beb\u65e0\u7591\u95ee\uff0c\u6309\u7167\u4f9d\u8d56\u51b3\u8ba1\u7684\u987a\u5e8f\uff0c\u5bb9\u5668\u8fd8\u662f\u4f1a\u9996\u5148\u5b9e\u4f8b\u5316lazy-init-bean\uff0c\u7136\u540e\u518d\u5b9e\u4f8b\u5316\u540e\u8005\uff0c\u5982\u4e0b\u4ee3\u7801\u6f14\u793a\u4e86\u8fd9\u79cd\u76f8\u4e92\u7275\u8fde\u5bfc\u81f4\u5ef6\u8fdf\u521d\u59cb\u5316\u5931\u8d25\u7684\u60c5\u51b5\uff1a"}),"\n",(0,s.jsxs)(r,{children:[(0,s.jsx)("summary",{children:"\u61d2\u52a0\u8f7d\u914d\u7f6e\u5931\u6548\u60c5\u51b5"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-xml",children:'\x3c!--\u975e\u61d2\u52a0\u8f7dbean\u4f9d\u8d56\u4e00\u4e2a\u61d2\u52a0\u8f7d\u7684bean \u7531\u4e8e\u8981\u521d\u59cb\u5316\u975e\u61d2\u52a0\u8f7d\u7684bean\u56e0\u6b64\u4f9d\u8d56\u7684\u61d2\u52a0\u8f7d\u7684bean\u5fc5\u987b\u5b9e\u4f8b\u5316--\x3e\n<beans>\n    <bean id="lazy-init-bean" class="..." lazy-init="true"/> \n    <bean id="not-lazy-init-bean" class="...">\n        <property name="propName">\n            <ref bean="lazy-init-bean"/> \n        </property>\n    </bean>\n</beans>\n'})})]}),"\n",(0,s.jsx)(n.h2,{id:"abstract\u5c5e\u6027\u7684\u4f7f\u7528",children:"abstract\u5c5e\u6027\u7684\u4f7f\u7528"}),"\n",(0,s.jsx)(n.p,{children:"\u5982\u679c\u4f60\u4e0d\u60f3\u5bb9\u5668\u5728\u521d\u59cb\u5316\u7684\u65f6\u5019\u5b9e\u4f8b\u5316\u67d0\u4e9b\u5bf9\u8c61\uff0c\u90a3\u4e48\u53ef\u4ee5\u5c06\u5176abstract\u5c5e\u6027\u8d4b\u503ctrue\uff0c\u4ee5\u907f\u514d\u5bb9\u5668\u5c06\u5176\u5b9e\u4f8b\u5316\u3002\u5bf9\u4e8eApplicationContext\u5bb9\u5668\u5c24\u5176\u5982\u6b64\uff0c\u56e0\u4e3a\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c ApplicationContext\u4f1a\u5728\u5bb9\u5668\u542f\u52a8\u7684\u65f6\u5019\u5c31\u5bf9\u5176\u7ba1\u7406\u7684\u6240\u6709bean\u8fdb\u884c\u5b9e\u4f8b\u5316\uff0c\u53ea\u6709\u6807\u5fd7\u4e3aabstract\u7684bean\u9664\u5916\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"scope",children:"scope"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"scope\u7528\u6765\u58f0\u660e\u5bb9\u5668\u4e2d\u7684\u5bf9\u8c61\u6240\u5e94\u8be5\u5904\u7684\u9650\u5b9a\u573a\u666f\u6216\u8005\u8bf4\u8be5\u5bf9\u8c61\u7684\u5b58\u6d3b\u65f6\u95f4\uff0c\u5373\u5bb9\u5668\u5728\u5bf9\u8c61\u8fdb\u5165\u5176\u76f8\u5e94\u7684scope\u4e4b\u524d\uff0c\u751f\u6210\u5e76\u88c5\u914d\u8fd9\u4e9b\u5bf9\u8c61\uff0c\u5728\u8be5\u5bf9\u8c61\u4e0d\u518d\u5904\u4e8e\u8fd9\u4e9bscope\u7684\u9650\u5b9a\u4e4b\u540e\uff0c\u5bb9\u5668\u901a\u5e38\u4f1a\u9500\u6bc1\u8fd9\u4e9b\u5bf9\u8c61\u3002"}),"\n",(0,s.jsx)(n.li,{children:"Spring\u5bb9\u5668\u6700\u521d\u63d0\u4f9b\u4e86\u4e24\u79cdbean\u7684scope\u7c7b\u578b\uff1asingleton\u548cprototype\uff0c\u4f46\u53d1\u5e032.0\u4e4b\u540e\uff0c\u53c8\u5f15\u5165\u4e86\u53e6\u5916\u4e09\u79cdscope\u7c7b\u578b\uff0c\u5373request\u3001 session\u548cglobal session\u7c7b\u578b\u3002\u4e0d\u8fc7\u8fd9\u4e09\u79cd\u7c7b\u578b\u6709\u6240\u9650\u5236\uff0c\u53ea\u80fd\u5728Web\u5e94\u7528\u4e2d\u4f7f\u7528\u3002\u4e5f\u5c31\u662f\u8bf4\uff0c\u53ea\u6709\u5728\u652f\u6301Web\u5e94\u7528\u7684ApplicationContext\u4e2d\u4f7f\u7528\u8fd9\u4e09\u4e2ascope\u624d\u662f\u5408\u7406\u7684\u3002"}),"\n",(0,s.jsx)(n.li,{children:"global session\u53ea\u6709\u5e94\u7528\u5728\u57fa\u4e8eportlet\u7684Web\u5e94\u7528\u7a0b\u5e8f\u4e2d\u624d\u6709\u610f\u4e49\uff0c\u5b83\u6620\u5c04\u5230portlet\u7684global\u8303\u56f4\u7684 session\u3002\u5982\u679c\u5728\u666e\u901a\u7684\u57fa\u4e8eservlet\u7684Web\u5e94\u7528\u4e2d\u4f7f\u7528\u4e86\u8fd9\u4e2a\u7c7bscope\n\uff0c\u5bb9\u5668\u4f1a\u5c06\u5176\u4f5c\u4e3a\u666e\u901a\u7684session\u7c7b\u578b\u7684scope\u5bf9\u5f85\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u5077\u6881\u6362\u67f1\u4e4b\u672f",children:"\u5077\u6881\u6362\u67f1\u4e4b\u672f"}),"\n",(0,s.jsx)(n.h4,{id:"\u65b9\u6cd5\u6ce8\u5165",children:"\u65b9\u6cd5\u6ce8\u5165"}),"\n",(0,s.jsx)(n.p,{children:"Spring\u5bb9\u5668\u63d0\u51fa\u4e86\u4e00\u79cd\u53eb\u505a\u65b9\u6cd5\u6ce8\u5165\uff08Method Injection\uff09\u7684\u65b9\u5f0f\uff0c\u53ef\u4ee5\u5e2e\u52a9\u6211\u4eec\u89e3\u51b3\u4e0a\u8ff0\u95ee\u9898\u3002\u6211\u4eec\u6240\u8981\u505a\u7684\u5f88\u7b80\u5355\uff0c\u53ea\u8981\u8ba9getNewsBean\u65b9\u6cd5\u58f0\u660e\u7b26\u5408\u89c4\u5b9a\u7684\u683c\u5f0f\uff0c\u5e76\u5728\u914d\u7f6e\u6587\u4ef6\u4e2d\u901a\u77e5\u5bb9\u5668\uff0c\u5f53\u8be5\u65b9\u6cd5\u88ab\u8c03\u7528\u7684\u65f6\u5019\uff0c\u6bcf\u6b21\u8fd4\u56de\u6307\u5b9a\u7c7b\u578b\u7684\u5bf9\u8c61\u5b9e\u4f8b\u5373\u53ef\u3002"}),"\n",(0,s.jsxs)(r,{children:[(0,s.jsx)("summary",{children:"\u914d\u7f6e\u9879XML"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-xml",children:'<?xml version="1.0" encoding="UTF-8"?>\n<beans xmlns="http://www.springframework.org/schema/beans"\n    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n    xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd">\n    <bean id="newsBean" class="org.springframework.mylearntest.directcode.FXNewsBean" scope="prototype">\n    </bean>\n    <bean id="mockPersister" class="org.springframework.mylearntest.mthdinject.MockNewsPersister">\n        <property name="newsBean">\n            <ref bean="newsBean"/>\n        </property>\n    </bean>\n</beans>\n'})})]}),"\n",(0,s.jsxs)(r,{children:[(0,s.jsx)("summary",{children:"MockNewsPersister"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'package org.springframework.mylearntest.mthdinject;\n    \nimport org.springframework.mylearntest.directcode.FXNewsBean;\nimport org.springframework.mylearntest.directcode.IFXNewsPersister;\n\npublic class MockNewsPersister implements IFXNewsPersister {\n    private FXNewsBean newsBean;\n    public void persistNews(FXNewsBean bean) {\n        persistNews();\n    }\n    public void persistNews() {\n        System.out.println("persist bean:"+getNewsBean());\n    }\n    public FXNewsBean getNewsBean() {\n        return newsBean;\n    }\n\n    public void setNewsBean(FXNewsBean newsBean) {\n        this.newsBean = newsBean;\n    }\n\n}\n'})})]}),"\n",(0,s.jsxs)(r,{children:[(0,s.jsx)("summary",{children:"\u6d4b\u8bd5\u7c7b"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'package org.springframework.mylearntest.mthdinject;\n\nimport org.springframework.beans.factory.BeanFactory;\nimport org.springframework.context.support.ClassPathXmlApplicationContext;\n\npublic class Test4MockNewsPersister {\n    public static void main(String[] args) {\n        BeanFactory container = new ClassPathXmlApplicationContext("mthdinject.xml");\n        MockNewsPersister persister = (MockNewsPersister)container.getBean("mockPersister");\n        persister.persistNews();\n        persister.persistNews();\n        // persist bean:org.springframework.mylearntest.directcode.FXNewsBean@5be6e01c\n        // persist bean:org.springframework.mylearntest.directcode.FXNewsBean@5be6e01c\n    }\n}\n'})})]}),"\n",(0,s.jsxs)(r,{children:[(0,s.jsx)("summary",{children:"\u65b9\u6cd5\u6ce8\u5165\u914d\u7f6e"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-xml",children:'<beans>\n    <bean id="newsBean" class="..domain.FXNewsBean" singleton="prototype">\n    </bean>\n    <bean id="mockPersister" class="..impl.MockNewsPersister">\n    \x3c!--\u901a\u8fc7<lookup-method>\u7684name\u5c5e\u6027\u6307\u5b9a\u9700\u8981\u6ce8\u5165\u7684\u65b9\u6cd5\u540d\uff0c bean\u5c5e\u6027\u6307\u5b9a\u9700\u8981\u6ce8\u5165\u7684\u5bf9\u8c61\uff0c\n    \u5f53getNewsBean\u65b9\u6cd5\u88ab\u8c03\u7528\u7684\u65f6\u5019\uff0c\u5bb9\u5668\u53ef\u4ee5\u6bcf\u6b21\u8fd4\u56de\u4e00\u4e2a\u65b0\u7684FXNewsBean\u7c7b\u578b\u7684\u5b9e\u4f8b\u3002--\x3e\n        <lookup-method name="getNewsBean" bean="newsBean"/>\n    </bean>\n</beans>\n'})})]}),"\n",(0,s.jsx)(n.h4,{id:"\u901a\u8fc7\u5b9e\u73b0beanfactoryaware",children:"\u901a\u8fc7\u5b9e\u73b0BeanFactoryAware"}),"\n",(0,s.jsxs)(n.p,{children:["\u53ea\u8981\u5728\u5b9e\u73b0getNewsBean()\u65b9\u6cd5\u7684\u65f6\u5019\uff0c\u80fd\u591f\u4fdd\u8bc1\u6bcf\u6b21\u8c03\u7528BeanFactory\u7684",(0,s.jsx)(n.code,{children:'getBean("newsBean")'}),"\uff0c\u5c31\u540c\u6837\u53ef\u4ee5\u6bcf\u6b21\u90fd\u53d6\u5f97\u65b0\u7684FXNewsBean\u5bf9\u8c61\u5b9e\u4f8b\u3002"]}),"\n",(0,s.jsxs)(r,{children:[(0,s.jsx)("summary",{children:"MockNewsPersister1"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'package org.springframework.mylearntest.beanfactorywareinject;\n\nimport org.springframework.beans.BeansException;\nimport org.springframework.beans.factory.BeanFactory;\nimport org.springframework.beans.factory.BeanFactoryAware;\nimport org.springframework.mylearntest.directcode.FXNewsBean;\nimport org.springframework.mylearntest.directcode.IFXNewsPersister;\n\npublic class MockNewsPersister1 implements IFXNewsPersister, BeanFactoryAware {\n    private BeanFactory beanFactory;\n\n    public void setBeanFactory(BeanFactory bf) throws BeansException {\n        this.beanFactory = bf;\n    }\n\n    public void persistNews(FXNewsBean bean) {\n        persistNews();\n    }\n\n    public void persistNews() {\n        System.out.println("persist bean:" + getNewsBean());\n    }\n\n    public FXNewsBean getNewsBean() {\n        return (FXNewsBean) beanFactory.getBean("newsBean");\n    }\n}\n'})})]}),"\n",(0,s.jsxs)(r,{children:[(0,s.jsx)("summary",{children:"XML\u914d\u7f6e"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-xml",children:'<?xml version="1.0" encoding="UTF-8"?>\n<beans xmlns="http://www.springframework.org/schema/beans"\n       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n       xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd">\n\n    <bean id="newsBean" class="org.springframework.mylearntest.directcode.FXNewsBean" scope="prototype">\n    </bean>\n    <bean id="mockPersister1" class="org.springframework.mylearntest.beanfactorywareinject.MockNewsPersister1">\n    </bean>\n\n</beans>\n'})})]}),"\n",(0,s.jsxs)(r,{children:[(0,s.jsx)("summary",{children:"Test4MockNewsPersister1\u6d4b\u8bd5\u7c7b"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'package org.springframework.mylearntest.beanfactorywareinject;\n\n\nimport org.springframework.beans.factory.BeanFactory;\nimport org.springframework.context.support.ClassPathXmlApplicationContext;\nimport org.springframework.mylearntest.mthdinject.MockNewsPersister;\n\npublic class Test4MockNewsPersister1 {\n    public static void main(String[] args) {\n        BeanFactory container = new ClassPathXmlApplicationContext("beanfactoryawareinject.xml");\n        MockNewsPersister1 persister = (MockNewsPersister1)container.getBean("mockPersister1");\n        persister.persistNews();\n        persister.persistNews();\n    }\n}\n'})})]}),"\n",(0,s.jsx)(n.h4,{id:"\u901a\u8fc7objectfactory",children:"\u901a\u8fc7ObjectFactory"}),"\n",(0,s.jsx)(n.p,{children:"ObjectFactoryCreatingFactoryBean\u662f Spring \u63d0\u4f9b\u7684\u4e00\u4e2aFactoryBean\u5b9e\u73b0\uff0c\u5b83\u8fd4\u56de\u4e00\u4e2aObjectFactory\u5b9e\u4f8b\u3002ObjectFactoryCreatingFactoryBean\u8fd4\u56de\u7684\u8fd9\u4e2aObjectFactory\u5b9e\u4f8b\u53ef\u4ee5\u4e3a\u6211\u4eec\u8fd4\u56de\u5bb9\u5668\u7ba1\u7406\u7684\u76f8\u5173\u5bf9\u8c61\u3002\u5b9e\u9645\u4e0a\uff0cObjectFactoryCreatingFactoryBean\u5b9e\u73b0BeanFactoryAware\u63a5\u53e3\uff0c\u5b83\u8fd4\u56deObjectFactory\u5b9e\u4f8b\u53ea\u662f\u7279\u5b9a\u4e8e\u4e0eSpring\u5bb9\u5668\u8fdb\u884c\u4ea4\u4e92\u7684\u4e00\u4e2a\u5b9e\u73b0\u800c\u5df2\u3002\u4f7f\u7528\u5b83\u7684\u597d\u5904\u5c31\u662f\uff0c\u9694\u79bb\u4e86\u5ba2\u6237\u7aef\u5bf9\u8c61\u5bf9BeanFactory\u7684\u76f4\u63a5\u5f15\u7528\u3002"}),"\n",(0,s.jsxs)(r,{children:[(0,s.jsx)("summary",{children:"MockNewsPersister2"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'package org.springframework.mylearntest.objectfactoryinj;\n\nimport org.springframework.beans.factory.ObjectFactory;\nimport org.springframework.mylearntest.directcode.FXNewsBean;\nimport org.springframework.mylearntest.directcode.IFXNewsPersister;\n\n@SuppressWarnings({"rawtypes" })\npublic class MockNewsPersister2 implements IFXNewsPersister {\n    private ObjectFactory newsBeanFactory;\n    public void persistNews(FXNewsBean bean) {\n        persistNews();\n    }\n    public void persistNews() {\n        System.out.println("persist bean:"+getNewsBean());\n    }\n    public FXNewsBean getNewsBean() {\n        return (FXNewsBean) newsBeanFactory.getObject();\n    }\n    public void setNewsBeanFactory(ObjectFactory newsBeanFactory) {\n        this.newsBeanFactory = newsBeanFactory;\n    }\n}\n'})})]}),"\n",(0,s.jsxs)(r,{children:[(0,s.jsx)("summary",{children:"XML\u914d\u7f6e"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-XML",children:'<?xml version="1.0" encoding="UTF-8"?>\n<beans xmlns="http://www.springframework.org/schema/beans"\n       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n       xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd">\n\n    <bean id="newsBean" class="org.springframework.mylearntest.directcode.FXNewsBean" scope="prototype">\n    </bean>\n    <bean id="newsBeanFactory" class="org.springframework.beans.factory.config.ObjectFactoryCreatingFactoryBean">\n        <property name="targetBeanName">\n            <idref bean="newsBean"/>\n        </property>\n    </bean>\n\n    <bean id="mockPersister2" class="org.springframework.mylearntest.objectfactoryinj.MockNewsPersister2">\n        <property name="newsBeanFactory">\n            <ref bean="newsBeanFactory"/>\n        </property>\n    </bean>\n</beans>\n'})})]}),"\n",(0,s.jsxs)(r,{children:[(0,s.jsx)("summary",{children:"\u6d4b\u8bd5\u7c7b"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'package org.springframework.mylearntest.objectfactoryinj;\n\n\nimport org.springframework.beans.factory.BeanFactory;\nimport org.springframework.context.support.ClassPathXmlApplicationContext;\n\npublic class Test4MockNewsPersister2 {\n    public static void main(String[] args) {\n        BeanFactory container = new ClassPathXmlApplicationContext("objectfactoryinj.xml");\n        MockNewsPersister2 persister = (MockNewsPersister2)container.getBean("mockPersister2");\n        persister.persistNews();\n        persister.persistNews();\n    }\n}\n'})})]}),"\n",(0,s.jsx)(n.h4,{id:"\u65b9\u6cd5\u66ff\u6362",children:"\u65b9\u6cd5\u66ff\u6362"}),"\n",(0,s.jsx)(n.p,{children:"\u4f7f\u7528FXNewsProviderMethodReplacer\u66ff\u6362FXNewsProvider\u4e2d\u7684getAndPersistNews()\u65b9\u6cd5"}),"\n",(0,s.jsxs)(r,{children:[(0,s.jsx)("summary",{children:"FXNewsProviderMethodReplacer"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'package org.springframework.mylearntest.methodreplacer;\n\nimport org.apache.commons.logging.Log;\nimport org.apache.commons.logging.LogFactory;\nimport org.springframework.beans.factory.support.MethodReplacer;\n\nimport java.lang.reflect.Method;\n\npublic class FXNewsProviderMethodReplacer implements MethodReplacer {\n\n    private static final transient Log logger =\n            LogFactory.getLog(FXNewsProviderMethodReplacer.class);\n\n    public Object reimplement(Object target, Method method, Object[] args)\n            throws Throwable {\n        logger.info("before executing method["+method.getName()+\n                "] on Object["+target.getClass().getName()+"].");\n        System.out.println("sorry,We will do nothing this time.");\n        logger.info("end of executing method["+method.getName()+\n                "] on Object["+target.getClass().getName()+"].");\n        return null;\n    }\n}\n'})})]}),"\n",(0,s.jsxs)(r,{children:[(0,s.jsx)("summary",{children:"XML"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-XML",children:'<?xml version="1.0" encoding="UTF-8"?>\n<beans xmlns="http://www.springframework.org/schema/beans"\n       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n       xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd">\n\n\t<bean id="FXNewsProvider" class="org.springframework.mylearntest.ioc.propconfig.FXNewsProvider">\n\t\t<constructor-arg index="0" ref="djNewsListener"/>\n\t\t<constructor-arg index="1" ref="djNewsPersister"/>\n\t\t<replaced-method name="getAndPersistNews" replacer="providerReplacer">\n\t\t</replaced-method>\n\t</bean>\n\n\t<bean id="djNewsListener" class="org.springframework.mylearntest.ioc.propconfig.DjNewsListener"/>\n\t<bean id="djNewsPersister" class="org.springframework.mylearntest.ioc.propconfig.DjNewsPersister"/>\n\t<bean id="providerReplacer"\n\t\t  class="org.springframework.mylearntest.ioc.methodreplacer.FXNewsProviderMethodReplacer"/>\n</beans>\n'})})]}),"\n",(0,s.jsxs)(r,{children:[(0,s.jsx)("summary",{children:"\u6d4b\u8bd5\u7c7b"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'package org.springframework.mylearntest.methodreplacer;\n\n\nimport org.springframework.beans.factory.BeanFactory;\nimport org.springframework.context.support.ClassPathXmlApplicationContext;\nimport org.springframework.mylearntest.propconfig.FXNewsProvider;\n\npublic class Test4FXNewsProviderMethodReplacer {\n    public static void main(String[] args) {\n        BeanFactory container = new ClassPathXmlApplicationContext("methodreplacer.xml");\n        FXNewsProvider fxNewsProvider = (FXNewsProvider)container.getBean("FXNewsProvider");\n        fxNewsProvider.getAndPersistNews();\n    }\n}\n'})})]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"\u53c2\u8003\u8d44\u6599"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"\u4e66\u7c4d\u540d\u79f0\uff1aSpring\u63ed\u79d8 \u4f5c\u8005\uff1a\u738b\u798f\u5f3a"}),"\n"]}),"\n"]})]})}function m(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},8672:(e,n,r)=>{r.d(n,{Z:()=>o,a:()=>i});var s=r(959);const a={},t=s.createContext(a);function i(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);