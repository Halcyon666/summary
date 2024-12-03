"use strict";(self.webpackChunksummary=self.webpackChunksummary||[]).push([[4192],{6658:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"Java/Spring/ApplicationContext","title":"ApplicationContext","description":"\u672c\u6587\u76f8\u5173\u4ee3\u7801(\u6765\u81ea\u5b98\u65b9\u6e90\u7801spring-test\u6a21\u5757)\u8bf7\u53c2\u89c1spring-framework org.springframework.mylearntest\u5305\u4e0b\u3002","source":"@site/docs/01-Java/02-Spring/ApplicationContext.mdx","sourceDirName":"01-Java/02-Spring","slug":"/Java/Spring/ApplicationContext","permalink":"/Java/Spring/ApplicationContext","draft":false,"unlisted":false,"editUrl":"https://github.com/Halcyon666/summary/edit/main/docs/01-Java/02-Spring/ApplicationContext.mdx","tags":[],"version":"current","lastUpdatedAt":1733238424000,"sidebarPosition":6,"frontMatter":{"title":"ApplicationContext","sidebar_label":"ApplicationContext","sidebar_position":6},"sidebar":"tutorialSidebar","previous":{"title":"Bean\u7684\u6784\u9020\u8fc7\u7a0b","permalink":"/Java/Spring/Bean Creating Process"},"next":{"title":"Joinpoint","permalink":"/Java/Spring/Joinpoint"}}');var i=t(6070),r=t(5658);const o={title:"ApplicationContext",sidebar_label:"ApplicationContext",sidebar_position:6},a=void 0,c={},l=[{value:"\u7edf\u4e00\u8d44\u6e90\u52a0\u8f7d\u7b56\u7565",id:"\u7edf\u4e00\u8d44\u6e90\u52a0\u8f7d\u7b56\u7565",level:2},{value:"\u56db\u79cd\u52a0\u8f7d\u65b9\u5f0f",id:"\u56db\u79cd\u52a0\u8f7d\u65b9\u5f0f",level:2},{value:"\u4f7f\u7528\u4ee5ResourceLoader\u8eab\u4efd\u767b\u573a\u7684ApplicationContext",id:"\u4f7f\u7528\u4ee5resourceloader\u8eab\u4efd\u767b\u573a\u7684applicationcontext",level:3},{value:"ResourceLoader\u7c7b\u578b\u7684\u6ce8\u5165",id:"resourceloader\u7c7b\u578b\u7684\u6ce8\u5165",level:3},{value:"\u56fd\u9645\u5316\u4fe1\u606f\u652f\u6301(i18n MessageSource)",id:"\u56fd\u9645\u5316\u4fe1\u606f\u652f\u6301i18n-messagesource",level:2},{value:"\u5bb9\u5668\u5185\u90e8\u4e8b\u4ef6\u53d1\u5e03",id:"\u5bb9\u5668\u5185\u90e8\u4e8b\u4ef6\u53d1\u5e03",level:2},{value:"IoC\u76f8\u5173\u6ce8\u89e3",id:"ioc\u76f8\u5173\u6ce8\u89e3",level:2}];function p(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["\u672c\u6587\u76f8\u5173\u4ee3\u7801(\u6765\u81ea",(0,i.jsx)(n.a,{href:"https://github.com/spring-projects/spring-framework.git",title:"\u5b98\u65b9\u6e90\u7801",children:"\u5b98\u65b9\u6e90\u7801"}),"spring-test\u6a21\u5757)\u8bf7\u53c2\u89c1",(0,i.jsx)(n.a,{href:"https://github.com/Halcyon666/spring-framework-modified/tree/main/spring-test",children:"spring-framework"})," org.springframework.mylearntest\u5305\u4e0b\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"\u7edf\u4e00\u8d44\u6e90\u52a0\u8f7d\u7b56\u7565",children:"\u7edf\u4e00\u8d44\u6e90\u52a0\u8f7d\u7b56\u7565"}),"\n",(0,i.jsx)(n.p,{children:"Spring\u63d0\u51fa\u4e86\u4e00\u5957\u57fa\u4e8eorg.springframework.core.io.Resource\u548corg.springframework.core.io.ResourceLoader\u63a5\u53e3\u7684\u8d44\u6e90\u62bd\u8c61\u548c\u52a0\u8f7d\u7b56\u7565\u3002"}),"\n",(0,i.jsx)(n.p,{children:"Resource: \u63a5\u53e3\u53ef\u4ee5\u6839\u636e\u8d44\u6e90\u7684\u4e0d\u540c\u7c7b\u578b\uff0c\u6216\u8005\u8d44\u6e90\u6240\u5904\u7684\u4e0d\u540c\u573a\u5408\uff0c\u7ed9\u51fa\u76f8\u5e94\u7684\u5177\u4f53\u5b9e\u73b0\u3002\u53ef\u4ee5\u5e2e\u52a9\u6211\u4eec\u67e5\u8be2\u8d44\u6e90\u72b6\u6001\u3001\u8bbf\u95ee\u8d44\u6e90\u5185\u5bb9\uff0c\u751a\u81f3\u6839\u636e\u5f53\u524d\u8d44\u6e90\u521b\u5efa\u65b0\u7684\u76f8\u5bf9\u8d44\u6e90\u3002\u6211\u4eec\u53ef\u4ee5\u7ee7\u627forg.springframework.core.io.AbstractResource\u62bd\u8c61\u7c7b\u3002"}),"\n",(0,i.jsx)(n.p,{children:"ResourceLoader: \u4f46\u5982\u4f55\u53bb\u67e5\u627e\u548c\u5b9a\u4f4d\u8fd9\u4e9b\u8d44\u6e90\uff0c\u5219\u5e94\u8be5\u662fResourceLoader\u7684\u804c\u8d23\u6240\u5728\u4e86\u3002org.springframework.core.io.ResourceLoader\u63a5\u53e3\u662f\u8d44\u6e90\u67e5\u627e\u5b9a\u4f4d\u7b56\u7565\u7684\u7edf\u4e00\u62bd\u8c61\uff0c\u5177\u4f53\u7684\u8d44\u6e90\u67e5\u627e\u5b9a\u4f4d\u7b56\u7565\u5219\u7531\u76f8\u5e94\u7684ResourceLoader\u5b9e\u73b0\u7c7b\u7ed9\u51fa\u3002"}),"\n",(0,i.jsx)(n.p,{children:"DefaultResourceLoader: ResourceLoader\u6709\u4e00\u4e2a\u9ed8\u8ba4\u7684\u5b9e\u73b0\u7c7b\uff0c\u5373org.springframework.core.io.DefaultResourceLoader\uff0c\u8be5\u7c7b\u9ed8\u8ba4\u7684\u8d44\u6e90\u67e5\u627e\u5904\u7406\u903b\u8f91\u5982\u4e0b\u3002"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u9996\u5148\u68c0\u67e5\u8d44\u6e90\u8def\u5f84\u662f\u5426\u4ee5classpath:\u524d\u7f00\u6253\u5934\uff0c\u5982\u679c\u662f\uff0c\u5219\u5c1d\u8bd5\u6784\u9020ClassPathResource\u7c7b\u578b\u8d44\u6e90\u5e76\u8fd4\u56de\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u5426\u5219\uff0c(a) \u5c1d\u8bd5\u901a\u8fc7URL\uff0c\u6839\u636e\u8d44\u6e90\u8def\u5f84\u6765\u5b9a\u4f4d\u8d44\u6e90\uff0c\u5982\u679c\u6ca1\u6709\u629b\u51faMalformedURLException\uff0c\u6709\u5219\u4f1a\u6784\u9020UrlResource\u7c7b\u578b\u7684\u8d44\u6e90\u5e76\u8fd4\u56de\uff1b(b)\u5982\u679c\u8fd8\u662f\u65e0\u6cd5\u6839\u636e\u8d44\u6e90\u8def\u5f84\u5b9a\u4f4d\u6307\u5b9a\u7684\u8d44\u6e90\uff0c\u5219\u59d4\u6d3egetResourceByPath(String) \u65b9 \u6cd5 \u6765 \u5b9a \u4f4d \uff0c DefaultResourceLoader \u7684getResourceByPath(String)\u65b9\u6cd5\u9ed8\u8ba4\u5b9e\u73b0\u903b\u8f91\u662f\uff0c\u6784\u9020ClassPathResource\u7c7b\u578b\u7684\u8d44\u6e90\u5e76\u8fd4\u56de\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://s2.loli.net/2023/07/15/3S4uLnEjAsDTgJa.png",alt:""})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://s2.loli.net/2023/07/15/gXVo8SKvnThpwZm.png",alt:""})}),"\n",(0,i.jsx)(n.h2,{id:"\u56db\u79cd\u52a0\u8f7d\u65b9\u5f0f",children:"\u56db\u79cd\u52a0\u8f7d\u65b9\u5f0f"}),"\n",(0,i.jsx)(n.h3,{id:"\u4f7f\u7528\u4ee5resourceloader\u8eab\u4efd\u767b\u573a\u7684applicationcontext",children:"\u4f7f\u7528\u4ee5ResourceLoader\u8eab\u4efd\u767b\u573a\u7684ApplicationContext"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:'ResourceLoader resourceLoader = new ClassPathXmlApplicationContext("\u914d\u7f6e\u6587\u4ef6\u8def\u5f84");'})}),"\n",(0,i.jsx)(n.h3,{id:"resourceloader\u7c7b\u578b\u7684\u6ce8\u5165",children:"ResourceLoader\u7c7b\u578b\u7684\u6ce8\u5165"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"\u4f9d\u8d56\u4e8eResourceLoader"}),"\n"]}),"\n",(0,i.jsxs)(t,{children:[(0,i.jsx)("summary",{children:"resourceloader.xml "}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-XML",children:'<?xml version="1.0" encoding="UTF-8"?>\n<beans xmlns="http://www.springframework.org/schema/beans"\n       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n       xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd">\n\t<bean id="resourceLoader" class="org.springframework.core.io.DefaultResourceLoader">\n\t</bean>\n\n\t<bean id="fooBar" class="org.springframework.mylearntest.ioc.resourceloader.FooBar">\n\t\t<property name="resourceLoader" ref="resourceLoader"/>\n\t</bean>\n</beans>\n'})})]}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsx)(n.li,{children:"\u5b9e\u73b0\u4e86ResourceLoaderAware\u6216\u8005ApplicationContextAware\u63a5\u53e3\u7684\u5b9e\u4f8b\u7c7b"}),"\n"]}),"\n",(0,i.jsxs)(t,{children:[(0,i.jsx)("summary",{children:"resourceloader4ContextBoo.xml"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-XML",children:'<?xml version="1.0" encoding="UTF-8"?>\n<beans xmlns="http://www.springframework.org/schema/beans"\n       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n       xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd">\n\n\t<bean id="fooBar" class="org.springframework.mylearntest.ioc.resourceloader.FooBarImplApplicationContextAware">\n\t</bean>\n</beans>\n'})})]}),"\n",(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsx)(n.li,{children:"Resource\u7c7b\u578b\u7684\u6ce8\u5165"}),"\n"]}),"\n",(0,i.jsxs)(t,{children:[(0,i.jsx)("summary",{children:"xmailer.xml"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-XML",children:'<?xml version="1.0" encoding="UTF-8"?>\n<beans xmlns="http://www.springframework.org/schema/beans"\n       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n       xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd">\n\n\t<bean id="xMailer" class="org.springframework.mylearntest.ioc.resourceloader.XMailer">\n\t\t<property name="template" value="resourceloader/resources.default_template.vm"/>\n\t</bean>\n</beans>\n'})})]}),"\n",(0,i.jsxs)(n.ol,{start:"4",children:["\n",(0,i.jsx)(n.li,{children:"ApplicationContext\u7684Resource\u52a0\u8f7d\u884c\u4e3a\n\u5f53ClassPathXmlApplicationContext\u5728\u5b9e\u4f8b\u5316\u7684\u65f6\u5019\uff0c\u5373\u4f7f\u6ca1\u6709\u6307\u660eclasspath:\u6216\u8005classpath*:\u7b49\u524d\u7f00\uff0c\u5b83\u4f1a\u9ed8\u8ba4\u4ececlasspath\u4e2d\u52a0\u8f7dbean\u5b9a\u4e49\u914d\u7f6e\u6587\u4ef6\uff0c\u800cFileSystemXmlApplicationContext\u5219\u6709\u4e9b\u540c \uff0c\u5982\u679c\u6211\u4eec\u50cf\u5982\u4e0b\u4ee3\u7801\u90a3\u6837\u6307\u5b9aconf/appContext.xml\uff0c\u5b83\u4f1a\u5c1d\u8bd5\u4ece\u6587\u4ef6\u7cfb\u7edf\u4e2d\u52a0\u8f7dbean\u5b9a\u4e49\u6587\u4ef6"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u56fd\u9645\u5316\u4fe1\u606f\u652f\u6301i18n-messagesource",children:"\u56fd\u9645\u5316\u4fe1\u606f\u652f\u6301(i18n MessageSource)"}),"\n",(0,i.jsx)(n.p,{children:"Java SE \u63d0\u4f9b\u7684\u56fd\u9645\u5316\u652f\u6301"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Locale"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u4e0d\u540c\u7684Locale\u4ee3\u8868\u4e0d\u540c\u7684\u56fd\u5bb6\u548c\u5730\u533a\uff0c\u6bcf\u4e2a\u56fd\u5bb6\u548c\u5730\u533a\u5728Locale\u8fd9\u91cc\u90fd\u6709\u76f8\u5e94\u7684\u7b80\u5199\u4ee3\u7801\u8868\u793a\uff0c\u5305\u62ec\u8bed\u8a00\u4ee3\u7801\u4ee5\u53ca\u56fd\u5bb6\u4ee3\u7801\uff0c\u8fd9\u4e9b\u4ee3\u7801\u662fISO\u6807\u51c6\u4ee3\u7801\u3002\u5982\uff0cLocale.CHINA\u4ee3\u8868\u4e2d\u56fd\u3002"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"ResourceBundle"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"ResourceBundle\u7528\u6765\u4fdd\u5b58\u7279\u5b9a\u4e8e\u67d0\u4e2aLocale\u7684\u4fe1\u606f\uff08\u53ef\u4ee5\u662fString\u7c7b\u578b\u4fe1\u606f\uff0c\u4e5f\u53ef\u4ee5\u662f\u4efb\u4f55\u7c7b\u578b\u7684\u5bf9\u8c61\uff09\u3002\u901a\u5e38ResourceBundle\u7ba1\u7406\u4e00\u7ec4\u4fe1\u606f\u5e8f\u5217\uff0c\u6240\u6709\u7684\u4fe1\u606f\u5e8f\u5217\u6709\u7edf\u4e00\u7684\u4e00\u4e2abasename\uff0c\u7136\u540e\u7279\u5b9a\u7684Locale\u7684\u4fe1\u606f\uff0c\u53ef\u4ee5\u6839\u636ebasename\u540e\u8ffd\u52a0\u7684\u8bed\u8a00\u6216\u8005\u5730\u533a\u4ee3\u7801\u6765\u533a\u5206\u3002\u6bd4\u5982\uff0c\u6211\u4eec\u7528\u4e00\u7ec4properties\u6587\u4ef6\u6765\u5206\u522b\u4fdd\u5b58\u4e0d\u540c\u56fd\u5bb6\u5730\u533a\u7684\u4fe1\u606f\uff0c\u53ef\u4ee5\u50cf\u4e0b\u9762\u8fd9\u6837\u6765\u547d\u540d\u76f8\u5e94\u7684properties\u6587\u4ef6\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"messages.properties\nmessages_zh.properties\nmessages_zh_CN.properties\nmessages_en.properties\nmessages_en_US.properties\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u5176\u4e2d\uff0c\u6587\u4ef6\u540d\u4e2d\u7684messages\u90e8\u5206\u79f0\u4f5cResourceBundle\u5c06\u52a0\u8f7d\u7684\u8d44\u6e90\u7684basename\uff0c\u5176\u4ed6\u8bed\u8a00\u6216\u5730\u533a\u7684\u8d44\u6e90\u5728basename\u7684\u57fa\u7840\u4e0a\u8ffd\u52a0Locale\u7279\u5b9a\u4ee3\u7801\u3002"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://s2.loli.net/2023/07/15/8Y4A7NIqHhxa6Qb.png",alt:""})}),"\n",(0,i.jsx)(n.p,{children:"\u5982\u679c\u67d0\u4e2a\u4e1a\u52a1\u5bf9\u8c61\u9700\u8981\u56fd\u9645\u5316\u7684\u4fe1\u606f\u652f\u6301\uff0c\u90a3\u4e48\u6700\u7b80\u5355\u7684\u529e\u6cd5\u5c31\u662f\u8ba9\u5b83\u5b9e\u73b0MessageSourceAware\u63a5\u53e3\uff0c\u7136\u540e\u6ce8\u518c\u5230ApplicationContext\u5bb9\u5668\u3002\u4e0d\u8fc7\u8fd9\u6837\u4e00\u6765\uff0c\u8be5\u4e1a\u52a1\u5bf9\u8c61\u5bf9ApplicationContext\u5bb9\u5668\u7684\u4f9d\u8d56\u6027\u5c31\u592a\u5f3a\u4e86\uff0c\u663e\u5f97\u5bb9\u5668\u5177\u6709\u8f83\u5f3a\u7684\u4fb5\u5165\u6027\u3002\u800c\u5b9e\u9645\u4e0a\uff0c \u5982\u679c\u771f\u7684\u67d0\u4e2a\u4e1a\u52a1\u5bf9\u8c61\u9700\u8981\u4f9d\u8d56\u4e8eMessageSource\u7684\u8bdd\uff0c\u76f4\u63a5\u901a\u8fc7\u6784\u9020\u65b9\u6cd5\u6ce8\u5165\u6216\u8005setter\u65b9\u6cd5\u6ce8\u5165\u7684\u65b9\u5f0f\u58f0\u660e\u4f9d\u8d56\u5c31\u53ef\u4ee5\u4e86\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u5bb9\u5668\u5185\u90e8\u4e8b\u4ef6\u53d1\u5e03",children:"\u5bb9\u5668\u5185\u90e8\u4e8b\u4ef6\u53d1\u5e03"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"\u81ea\u5b9a\u4e49\u4e8b\u4ef6\u53d1\u5e03\n\u7ed9\u51fa\u81ea\u5b9a\u4e49\u4e8b\u4ef6\u7c7b\u578b\uff08 define your own event object\uff09\u3002 \u4e3a\u4e86\u9488\u5bf9\u5177\u4f53\u573a\u666f\u53ef\u4ee5\u533a\u5206\u5177\u4f53\u7684\u4e8b\u4ef6\u7c7b\u578b\uff0c \u6211\u4eec\u9700\u8981\u7ed9\u51fa\u81ea\u5df1\u7684\u4e8b\u4ef6\u7c7b\u578b\u7684\u5b9a\u4e49\uff0c\u901a\u5e38\u505a\u6cd5\u662f\u6269\u5c55java.util.EventObject\u7c7b\u6765\u5b9e\u73b0\u81ea\u5b9a\u4e49\u7684\u4e8b\u4ef6\u7c7b\u578b\u3002"}),"\n"]}),"\n",(0,i.jsxs)(t,{children:[(0,i.jsx)("summary",{children:"\u5b9a\u4e49\u4e8b\u4ef6\u7c7b\u578b"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"package org.springframework.mylearntest.ioc.eventpublication.applicationevent;\n\nimport org.springframework.context.ApplicationEvent;\nimport org.springframework.mylearntest.ioc.eventpublication.event.MethodExecutionStatus;\n\npublic class MethodExecutionEvent extends ApplicationEvent {\n\tprivate static final long serialVersionUID = -71960369269303337L;\n\tprivate String methodName;\n\tprivate MethodExecutionStatus methodExecutionStatus;\n\n\tpublic MethodExecutionEvent(Object source) {\n\t\tsuper(source);\n\t}\n\t\n\tpublic MethodExecutionEvent(Object source, String methodName, MethodExecutionStatus methodExecutionStatus) {\n\t\tsuper(source);\n\t\tthis.methodName = methodName;\n\t\tthis.methodExecutionStatus = methodExecutionStatus;\n\t}\n\t\n\tpublic String getMethodName() {\n\t\treturn methodName;\n\t}\n\t\n\tpublic void setMethodName(String methodName) {\n\t\tthis.methodName = methodName;\n\t}\n\t\n\tpublic MethodExecutionStatus getMethodExecutionStatus() {\n\t\treturn methodExecutionStatus;\n\t}\n\t\n\tpublic void setMethodExecutionStatus(MethodExecutionStatus methodExecutionStatus) {\n\t\tthis.methodExecutionStatus = methodExecutionStatus;\n\t}\n}\n"})})]}),"\n",(0,i.jsxs)(t,{children:[(0,i.jsx)("summary",{children:"\u5b9a\u4e49\u4e8b\u4ef6\u76d1\u542c\u5668\u63a5\u53e3"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"package org.springframework.mylearntest.ioc.eventpublication.event;\n\n\nimport java.util.EventListener;\n\n/**\n * \u81ea\u5b9a\u4e49\u4e8b\u4ef6\u76d1\u542c\u5668\n */\npublic interface MethodExecutionEventListener extends EventListener {\n\t/**\n\t * \u5904\u7406\u65b9\u6cd5\u5f00\u59cb\u6267\u884c\u7684\u65f6\u5019\u53d1\u5e03\u7684MethodExecutionEvent\u4e8b\u4ef6\n\t */\n\tvoid onMethodBegin(MethodExecutionEvent evt);\n\t/**\n\t * \u5904\u7406\u65b9\u6cd5\u6267\u884c\u5c06\u7ed3\u675f\u65f6\u5019\u53d1\u5e03\u7684MethodExecutionEvent\u4e8b\u4ef6\n\t */\n\tvoid onMethodEnd(MethodExecutionEvent evt);\n}\n\n"})})]}),"\n",(0,i.jsxs)(t,{children:[(0,i.jsx)("summary",{children:"\u81ea\u5b9a\u4e49\u4e8b\u4ef6\u76d1\u542c\u5668\u5b9e\u73b0"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'package org.springframework.mylearntest.ioc.eventpublication.event;\n\n/**\n * \u81ea\u5b9a\u4e49\u4e8b\u4ef6\u76d1\u542c\u5668\u5b9e\u73b0\n */\npublic class SimpleMethodExecutionEventListener implements MethodExecutionEventListener {\n\n\tpublic void onMethodBegin(MethodExecutionEvent evt) {\n\t\tString methodName = evt.getMethodName();\n\t\tSystem.out.println("start to execute the method[" + methodName + "].");\n\t}\n\n\tpublic void onMethodEnd(MethodExecutionEvent evt) {\n\t\tString methodName = evt.getMethodName();\n\t\tSystem.out.println("finished to execute the method[" + methodName + "].");\n\t}\n}\n'})})]}),"\n",(0,i.jsxs)(t,{children:[(0,i.jsx)("summary",{children:"\u5b9a\u4e49\u4e8b\u72b6\u6001\u679a\u4e3e\u7c7b\u4ee5\u53ca\u4e8b\u4ef6\u53d1\u5e03\u8005"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"package org.springframework.mylearntest.ioc.eventpublication.event;\n\npublic enum MethodExecutionStatus {\n\tBEGIN,END\n}\n"})})]}),"\n",(0,i.jsxs)(t,{children:[(0,i.jsx)("summary",{children:"\u4e8b\u4ef6\u53d1\u5e03\u7c7b"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'package org.springframework.mylearntest.ioc.eventpublication.event;\n\nimport java.util.ArrayList;\nimport java.util.List;\n\npublic class MethodExecutionEventPublisher {\n\tprivate List<MethodExecutionEventListener> listeners = new ArrayList<>();\n\n\tpublic void methodToMonitor() {\n\t\tMethodExecutionEvent event2Publish = new MethodExecutionEvent(this, "methodToMonitor");\n\t\tpublishEvent(MethodExecutionStatus.BEGIN, event2Publish);\n\t\t// \u6267\u884c\u5b9e\u9645\u7684\u65b9\u6cd5\u903b\u8f91\n\t\t// ...\n\t\tpublishEvent(MethodExecutionStatus.END, event2Publish);\n\t}\n\n\t// \u4e3a\u4e86\u907f\u514d\u4e8b\u4ef6\u5904\u7406\u671f\u95f4\u4e8b\u4ef6\u76d1\u542c\u5668\u7684\u6ce8\u518c\u6216\u79fb\u9664\u64cd\u4f5c\u5f71\u54cd\u5904\u7406\u8fc7\u7a0b\uff0c\u6211\u4eec\u5bf9\u4e8b\u4ef6\u53d1\u5e03\u65f6\u70b9\u7684\u76d1\u542c\u5668\u5217\u8868\u8fdb\u884c\u4e86\u4e00\u4e2a\u5b89\u5168\u590d\u5236\uff08 safe-copy\uff09\n\tprotected void publishEvent(MethodExecutionStatus status, MethodExecutionEvent methodExecutionEvent) {\n\t\tList<MethodExecutionEventListener> copyListeners = new ArrayList<>(listeners);\n\t\tfor (MethodExecutionEventListener listener : copyListeners) {\n\t\t\tif (MethodExecutionStatus.BEGIN.equals(status)) {\n\t\t\t\tlistener.onMethodBegin(methodExecutionEvent);\n\t\t\t} else {\n\t\t\t\tlistener.onMethodEnd(methodExecutionEvent);\n\t\t\t}\n\t\t}\n\t}\n\n\tpublic void addMethodExecutionEventListener(MethodExecutionEventListener listener) {\n\t\tthis.listeners.add(listener);\n\t}\n\n\tpublic void removeListener(MethodExecutionEventListener listener) {\n\t\tthis.listeners.remove(listener);\n\t}\n\n\tpublic void removeAllListeners() {\n\t\tthis.listeners.clear();\n\t}\n\n}\n'})})]}),"\n",(0,i.jsxs)(t,{children:[(0,i.jsx)("summary",{children:"\u6d4b\u8bd5\u7c7b"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"package org.springframework.mylearntest.ioc.eventpublication.event;\n\npublic class Test4Event {\n\tpublic static void main(String[] args) {\n\t\tMethodExecutionEventPublisher eventPublisher = new MethodExecutionEventPublisher();\n\t\teventPublisher.addMethodExecutionEventListener(new SimpleMethodExecutionEventListener());\n\t\teventPublisher.methodToMonitor();\n\t\teventPublisher.removeAllListeners();\n\t}\n}\n"})})]}),"\n",(0,i.jsx)(n.p,{children:"\u5728\u5b9e\u73b0\u4e2d\uff0c\u9700\u8981\u6ce8\u610f\u5230\uff0c\u4e3a\u4e86\u907f\u514d\u4e8b\u4ef6\u5904\u7406\u671f\u95f4\u4e8b\u4ef6\u76d1\u542c\u5668\u7684\u6ce8\u518c\u6216\u79fb\u9664\u64cd\u4f5c\u5f71\u54cd\u5904\u7406\u8fc7\u7a0b\uff0c\u6211\u4eec\u5bf9\u4e8b\u4ef6\u53d1\u5e03\u65f6\u70b9\u7684\u76d1\u542c\u5668\u5217\u8868\u8fdb\u884c\u4e86\u4e00\u4e2a\u5b89\u5168\u590d\u5236\uff08 safe-copy\uff09\u3002\u53e6\u5916\uff0c\u4e8b\u4ef6\u7684\u53d1\u5e03\u662f\u987a\u5e8f\u6267\u884c\uff0c\u6240\u4ee5\u4e3a\u4e86\u80fd\u591f\u4e0d\u5f71\u54cd\u5904\u7406\u6027\u80fd\uff0c\u4e8b\u4ef6\u76d1\u542c\u5668\u7684\u5904\u7406\u903b\u8f91\u5e94\u8be5\u5c3d\u91cf\u7b80\u77ed\u3002"}),"\n",(0,i.jsx)("img",{src:"https://s2.loli.net/2023/07/15/Qmwxcpa4qDJGMYu.png"}),"\n",(0,i.jsx)(n.p,{children:"Spring \u7684\u5bb9\u5668\u5185\u4e8b\u4ef6\u53d1\u5e03\u7c7b\u7ed3\u6784\u5206\u6790"}),"\n",(0,i.jsx)(n.p,{children:"Spring\u7684ApplicationContext\u5bb9\u5668\u5185\u90e8\u5141\u8bb8\u4ee5org.springframework.context.ApplicationEvent\u7684\u5f62\u5f0f\u53d1\u5e03\u4e8b\u4ef6\uff0c\u5bb9\u5668\u5185\u6ce8\u518c\u7684org.springframework.context.ApplicationListener\u7c7b\u578b\u7684bean\u5b9a\u4e49\u4f1a\u88abApplicationContext\u5bb9\u5668\u81ea\u52a8\u8bc6\u522b\uff0c\u5b83\u4eec\u8d1f\u8d23\u76d1\u542c\u5bb9\u5668\u5185\u53d1\u5e03\u7684\u6240\u6709ApplicationEvent\u7c7b\u578b\u7684\u4e8b\u4ef6\u3002"}),"\n",(0,i.jsx)(n.p,{children:"ApplicationEvent: Spring\u5bb9\u5668\u5185\u81ea\u5b9a\u4e49\u4e8b\u4ef6\u7c7b\u578b\uff0c\u7ee7\u627f\u81eajava.util.EventObject\uff0c\u5b83\u662f\u4e00\u4e2a\u62bd\u8c61\u7c7b\uff0c\u9700\u8981\u6839\u636e\u60c5\u51b5\u63d0\u4f9b\u76f8\u5e94\u5b50\u7c7b\u4ee5\u533a\u5206\u4e0d\u540c\u60c5\u51b5\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c Spring\u63d0\u4f9b\u4e86\u4e09\u4e2a\u5b9e\u73b0\u3002"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"ContextClosedEvent\uff1a ApplicationContext\u5bb9\u5668\u5728\u5373\u5c06\u5173\u95ed\u7684\u65f6\u5019\u53d1\u5e03\u7684\u4e8b\u4ef6\u7c7b\u578b\u3002"}),"\n",(0,i.jsx)(n.li,{children:"ContextRefreshedEvent\uff1a ApplicationContext\u5bb9\u5668\u5728\u521d\u59cb\u5316\u6216\u8005\u5237\u65b0\u7684\u65f6\u5019\u53d1\u5e03\u7684\u4e8b\u4ef6\u7c7b\n\u578b\u3002"}),"\n",(0,i.jsx)(n.li,{children:"RequestHandledEvent\uff1a Web\u8bf7\u6c42\u5904\u7406\u540e\u53d1\u5e03\u7684\u4e8b\u4ef6\uff0c\u5176\u6709\u4e00\u5b50\u7c7bServletRequestHandledEvent\u63d0\u4f9b\u7279\u5b9a\u4e8eJava EE\u7684Servlet\u76f8\u5173\u4e8b\u4ef6\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"ApplicationListener: ApplicationContext\u5bb9\u5668\u5185\u4f7f\u7528\u7684\u81ea\u5b9a\u4e49\u4e8b\u4ef6\u76d1\u542c\u5668\u63a5\u53e3\u5b9a\u4e49\uff0c\u7ee7\u627f\u81eajava.util.EventListener\u3002"}),"\n",(0,i.jsx)(n.p,{children:"ApplicationContext: \u5bb9\u5668\u5728\u542f\u52a8\u65f6\uff0c\u4f1a\u81ea\u52a8\u8bc6\u522b\u5e76\u52a0\u8f7dEventListener\u7c7b\u578bbean\u5b9a\u4e49\uff0c\u4e00\u65e6\u5bb9\u5668\u5185\u6709\u4e8b\u4ef6\u53d1\u5e03\uff0c\u5c06\u901a\u77e5\u8fd9\u4e9b\u6ce8\u518c\u5230\u5bb9\u5668\u7684EventListener\u3002"}),"\n",(0,i.jsxs)(t,{children:[(0,i.jsx)("summary",{children:"MethodExecutionEventListener"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'package org.springframework.mylearntest.eventpublication.applicationevent;\n\n\nimport org.springframework.context.ApplicationEvent;\nimport org.springframework.context.ApplicationListener;\n\n@SuppressWarnings("rawtypes")\npublic class MethodExecutionEventListener implements ApplicationListener {\n    public void onApplicationEvent(ApplicationEvent evt) {\n        if (evt instanceof MethodExecutionEvent) {\n            // \u6267\u884c\u5904\u7406\u903b\u8f91\n        }\n    }\n}\n'})})]}),"\n",(0,i.jsx)(n.p,{children:"ApplicationContext: \u8fd8\u8bb0\u5f97ApplicationContext\u7684\u5b9a\u4e49\u5427\uff1f\u9664\u4e86\u4e4b\u524d\u7684ResourceLoader\u548cMessageSource\uff0cApplicationContext\u63a5\u53e3\u5b9a\u4e49\u8fd8\u7ee7\u627f\u4e86ApplicationEventPublisher\u63a5\u53e3\uff0c\u8be5\u63a5\u53e3\u63d0\u4f9b\u4e86void publishEvent(ApplicationEvent event)\u65b9\u6cd5\u5b9a\u4e49\u3002\u4e0d\u96be\u770b\u51fa\uff0c ApplicationContext\u5bb9\u5668\u73b0\u5728\u62c5\u5f53\u7684\u5c31\u662f\u4e8b\u4ef6\u53d1\u5e03\u8005\u7684\u89d2\u8272\u3002ApplicationContext\u5bb9\u5668\u7684\u5177\u4f53\u5b9e\u73b0\u7c7b\u5728\u5b9e\u73b0\u4e8b\u4ef6\u7684\u53d1\u5e03\u548c\u4e8b\u4ef6\u76d1\u542c\u5668\u7684\u6ce8\u518c\u65b9\u9762\uff0c\u5e76\u6ca1\u4e8b\u5fc5\u8eac\u4eb2\uff0c\u800c\u662f\u628a\u8fd9\u4e9b\u6d3b\u513f\u8f6c\u5305\u7ed9\u4e86\u4e00\u4e2a\u79f0\u4f5corg.springframework.context.event.ApplicationEventMulticaster\u7684\u63a5\u53e3\u3002"}),"\n",(0,i.jsxs)(t,{children:[(0,i.jsx)("summary",{children:"MethodExeuctionEventPublisher"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'package org.springframework.mylearntest.eventpublication.applicationevent;\n\nimport org.springframework.context.ApplicationEventPublisher;\nimport org.springframework.context.ApplicationEventPublisherAware;\nimport org.springframework.mylearntest.eventpublication.event.MethodExecutionStatus;\n\npublic class MethodExeuctionEventPublisher implements ApplicationEventPublisherAware {\n    private ApplicationEventPublisher eventPublisher;\n\n    public void methodToMonitor() {\n        MethodExecutionEvent beginEvt = new\n                MethodExecutionEvent(this, "methodToMonitor", MethodExecutionStatus.BEGIN);\n        this.eventPublisher.publishEvent(beginEvt);\n        // \u6267\u884c\u5b9e\u9645\u65b9\u6cd5\u903b\u8f91\n        // ...\n        MethodExecutionEvent endEvt = new\n                MethodExecutionEvent(this, "methodToMonitor", MethodExecutionStatus.END);\n        this.eventPublisher.publishEvent(endEvt);\n    }\n\n    public void setApplicationEventPublisher(ApplicationEventPublisher appCtx) {\n        this.eventPublisher = appCtx;\n    }\n}\n'})})]}),"\n",(0,i.jsxs)(t,{children:[(0,i.jsx)("summary",{children:"applicationevent.xml"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-xml",children:'<?xml version="1.0" encoding="UTF-8"?>\n<beans xmlns="http://www.springframework.org/schema/beans"\n       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n       xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd">\n\n    <bean id="methodExecListener" class="org.springframework.mylearntest.eventpublication.applicationevent.MethodExecutionEventListener">\n    </bean>\n    <bean id="evtPublisher" class="org.springframework.mylearntest.eventpublication.applicationevent.MethodExeuctionEventPublisher">\n    </bean>\n\n</beans>\n'})})]}),"\n",(0,i.jsxs)(t,{children:[(0,i.jsx)("summary",{children:"Test4AppEvent"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'package org.springframework.mylearntest.eventpublication.applicationevent;\n\nimport org.springframework.context.ApplicationContext;\nimport org.springframework.context.support.ClassPathXmlApplicationContext;\n\npublic class Test4AppEvent {\n    public static void main(String[] args) {\n        ApplicationContext context = new ClassPathXmlApplicationContext("eventpublication/applicationevent.xml");\n        MethodExeuctionEventPublisher evtPublisher = (MethodExeuctionEventPublisher) context.getBean("evtPublisher");\n        evtPublisher.methodToMonitor();\n    }\n}\n'})})]}),"\n",(0,i.jsx)(n.p,{children:"ApplicationEventMulticaster\u6709\u4e00\u62bd\u8c61\u5b9e\u73b0\u7c7b\u2014\u2014org.springframework.context.event.AbstractApplicationEventMulticaster\uff0c\u5b83\u5b9e\u73b0\u4e86\u4e8b\u4ef6\u76d1\u542c\u5668\u7684\u7ba1\u7406\u529f\u80fd\u3002\u4e8b\u4ef6\u7684\u53d1\u5e03\u529f\u80fd\u5219\u59d4\u6258\u7ed9\u4e86\u5176\u5b50\u7c7b\u3002 org.springframework.context.event.SimpleApplicationEventMulticaster\u3002\u5176\u9ed8\u8ba4\u4f7f\u7528\u4e86SyncTaskExecutor\u8fdb\u884c\u4e8b\u4ef6\u7684\u53d1\u5e03\u3002\u4e3a\u4e86\u907f\u514d\u8fd9\u79cd\u65b9\u5f0f\u53ef\u80fd\u5b58\u5728\u7684\u6027\u80fd\u95ee\u9898\uff0c\u6211\u4eec\u53ef\u4ee5\u4e3a\u5176\u63d0\u4f9b\u5176\u4ed6\u7c7b\u578b\u7684TaskExecutor\u5b9e\u73b0\u7c7b\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u5bb9\u5668\u542f\u52a8\u5f00\u59cb\uff0c\u5c31\u4f1a\u68c0\u67e5\u5bb9\u5668\u5185\u662f\u5426\u5b58\u5728\u540d\u79f0\u4e3aapplicationEventMulticaster\u7684ApplicationEventMulticaster\u5bf9\u8c61\u5b9e\u4f8b\u3002\u6709\u7684\u8bdd\u5c31\u4f7f\u7528\u63d0\u4f9b\u7684\u5b9e\u73b0\uff0c\u6ca1\u6709\u5219\u9ed8\u8ba4\u521d\u59cb\u5316\u4e00\u4e2aSimpleApplicationEventMulticaster\u4f5c\u4e3a\u5c06\u4f1a\u4f7f\u7528\u7684ApplicationEventMulticaster\u3002"}),"\n",(0,i.jsx)("img",{src:"https://s2.loli.net/2023/07/15/TvPHprcI9eL4DSz.png"}),"\n",(0,i.jsx)(n.h2,{id:"ioc\u76f8\u5173\u6ce8\u89e3",children:"IoC\u76f8\u5173\u6ce8\u89e3"}),"\n",(0,i.jsx)(n.p,{children:"\u770b\u7740\u4f9d\u8d56\u6ce8\u5165\u76f8\u5173\u7684\u4fe1\u606f\uff0c\u4e00\u534a\u5206\u6563\u5728Java\u6e90\u4ee3\u7801\u4e2d\uff08 @Autowired\u6807\u6ce8\u7684\u4fe1\u606f\uff09\uff0c\u4e00\u534a\u4f9d\u7136\u7559\u5728XML\u914d\u7f6e\u6587\u4ef6\u91cc\uff0c\u6709\u5f88\u591abean\u6807\u7b7e\u4f9d\u7136\u5b58\u5728\u3002\n\u5f53\u4f7f\u7528@Autoware\u6ce8\u89e3\u80fd\u591f\u540c\u65f6\u627e\u5230\u4e24\u4e2a\u6216\u8005\u591a\u4e2a\u540c\u4e00\u7c7b\u578b\u7684\u5bf9\u8c61\u5b9e\u4f8b\uff0c\u53ef\u4ee5\u4f7f\u7528@Qualifier\u5bf9\u4f9d\u8d56\u6ce8\u5165\u7684\u6761\u4ef6\u505a\u8fdb\u4e00\u6b65\u9650\u5b9a\uff0c\u6307\u5b9a\u5177\u4f53\u662f\u54ea\u4e2aid\u3002"}),"\n",(0,i.jsxs)(t,{children:[(0,i.jsx)("summary",{children:"xml\u65b9\u5f0f"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-xml",children:'<beans>\n    <bean class="org.springframework.beans.factory.annotation.AutowiredAnnotationBeanPostProcessor"/>\n    <bean id="newsProvider" class="..FXNewsProvider"/>\n    <bean id="djNewsListener" class="..DowJonesNewsListener"/>\n    <bean id="reutersNewsListner" class="..ReutersNewsListener"/>\n    <bean id="djNewsPersister" class="..DowJonesNewsPersister"/>\n</beans>\n'})})]}),"\n",(0,i.jsxs)(t,{children:[(0,i.jsx)("summary",{children:"@Qualifier\u4f4d\u4e8e\u5c5e\u6027\u4e0a"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'public class FXNewsProvider {\n    @Autowired\n    @Qualifier("reutersNewsListner")// \u6b64\u65f6\u6ce8\u5165id=reutersNewsListner\n    private IFXNewsListener newsListener;\n    @Autowired\n    private IFXNewsPersister newPersistener;\n    //...\n}\n'})})]}),"\n",(0,i.jsxs)(t,{children:[(0,i.jsx)("summary",{children:"@Qualifier\u6ce8\u89e3\u4f4d\u4e8e\u53c2\u6570\u4e0a"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'// @Qualifier\u6ce8\u89e3\u4f4d\u4e8e\u53c2\u6570\u4e0a\npublic class FXNewsProvider{\n    // ...\n    @Autowired\n    public void setUp(@Qualifier("reutersNewsListner") IFXNewsListener newsListener,IFXNewsPersister newPersistener) {\n        this.newsListener = newsListener;\n        this.newPersistener = newPersistener;\n    }\n    // ...\n}\n'})})]}),"\n",(0,i.jsx)(n.p,{children:"@Resource\u4e0e@Autowired\u4e0d\u540c\uff0c\u5b83\u9075\u5faa\u7684\u662fbyName\u81ea\u52a8\u7ed1\u5b9a\u5f62\u5f0f\u7684\u884c\u4e3a\u51c6\u5219\uff0c\u4e5f\u5c31\u662f\u8bf4\uff0c IoC\u5bb9\u5668\u5c06\u6839\u636e@Resource\u6240\u6307\u5b9a\u7684\u540d\u79f0\uff0c\u5230\u5bb9\u5668\u4e2d\u67e5\u627ebeanName\n\u4e0e\u4e4b\u5bf9\u5e94\u7684\u5b9e\u4f8b\uff0c\u7136\u540e\u5c06\u67e5\u627e\u5230\u7684\u5bf9\u8c61\u5b9e\u4f8b\u6ce8\u5165\u7ed9@Resource\u6240\u6807\u6ce8\u7684\u5bf9\u8c61\u3002"}),"\n",(0,i.jsx)(n.p,{children:"@PostConstruct\u548c@PreDestroy\u4e0d\u662f\u670d\u52a1\u4e8e\u4f9d\u8d56\u6ce8\u5165\u7684\uff0c\u5b83\u4eec\u4e3b\u8981\u7528\u4e8e\u6807\u6ce8\u5bf9\u8c61\u751f\u547d\u5468\u671f\u7ba1\u7406\u76f8\u5173\u65b9\u6cd5\uff0c\u8fd9\u4e0eSpring\u7684InitializingBean\u548cDisposableBean\u63a5\u53e3\uff0c\u4ee5\u53ca\u914d\u7f6e\u9879\u4e2d\u7684init\n-method\u548cdestroy-method\u8d77\u5230\u7c7b\u4f3c\u7684\u4f5c\u7528\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u5c31\u50cf@Autowired\u9700\u8981AutowiredAnnotationBeanPostProcessor\u4e3a\u5b83\u4e0eIoC\u5bb9\u5668\u7275\u7ebf\u642d\u6865\u4e00\u6837\uff0cJSR250\u7684\u8fd9\u4e9b\u6ce8\u89e3\u4e5f\u540c\u6837\u9700\u8981\u4e00\u4e2aBeanPostProcessor\u5e2e\u52a9\u5b83\u4eec\u5b9e\u73b0\u81ea\u8eab\u7684\u4ef7\u503c\u3002\u8fd9\u4e2aBeanPostProcessor\u5c31\u662forg.springframework.context.annotation.CommonAnnotationBeanPostProcessor\uff0c\u53ea\u6709\u5c06CommonAnnotationBeanPostProcessor\u6dfb\u52a0\u5230\u5bb9\u5668\uff0c JSR250\u7684\u76f8\u5173\u6ce8\u89e3\u624d\u80fd\u53d1\u6325\u4f5c\u7528\u3002"}),"\n",(0,i.jsxs)(t,{children:[(0,i.jsx)("summary",{children:"XML\u914d\u7f6e"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-xml",children:'<beans>\n    <bean class="org.springframework.context.annotation.CommonAnnotationBeanPostProcessor"/>\n    <bean id="newsProvider" class="..FXNewsProvider"/>\n    <bean id="djNewsListener" class="..DowJonesNewsListener"/>\n    <bean id="djNewsPersister" class="..DowJonesNewsPersister"/>\n</beans>\n'})})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"<context:annotation-config> "}),"\u4e0d \u4f46 \u5e2e \u6211 \u4eec \u628a AutowiredAnnotationBeanPostProcessor \u548c CommonAnnotationBeanPostProcessor \u6ce8\u518c\u5230\u5bb9\u5668\uff0c\u540c\u65f6\u8fd8\u4f1a\u628a PersistenceAnnotationBeanPostProcessor \u548c RequiredAnnotationBeanPostProcessor \u4e00\u5e76\u8fdb\u884c\u6ce8\u518c\uff0c\u53ef\u8c13\u4e00\u4e3e\u56db\u5f97\u554a\uff01"]}),"\n",(0,i.jsx)(n.p,{children:"\u4f7f\u7528\u76f8\u5e94\u7684\u6ce8\u89e3\u5bf9\u7ec4\u6210\u5e94\u7528\u7a0b\u5e8f\u7684\u76f8\u5173\u7c7b\u8fdb\u884c\u6807\u6ce8\u4e4b\u540e\uff0c classpath-scanning\u529f\u80fd\u53ef\u4ee5\u4ece\u67d0\u4e00\u9876\u5c42\u5305\uff08base package\uff09\u5f00\u59cb\u626b\u63cf\u3002\u5f53\u626b\u63cf\u5230\u67d0\u4e2a\u7c7b\u6807\u6ce8\u4e86\u76f8\u5e94\u7684\u6ce8\u89e3\u4e4b\u540e\uff0c\u5c31\u4f1a\u63d0\u53d6\u8be5\u7c7b\u7684\u76f8\u5173\u4fe1\u606f\uff0c\u6784\u5efa\u5bf9\u5e94\u7684BeanDefinition\uff0c\u7136\u540e\u628a\u6784\u5efa\u5b8c\u7684BeanDefinition\u6ce8\u518c\u5230\u5bb9\u5668\u3002"}),"\n",(0,i.jsxs)(t,{children:[(0,i.jsx)("summary",{children:"XML\u914d\u7f6e"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-xml",children:'<beans xmlns="http://www.springframework.org/schema/beans"\nxmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\nxmlns:context="http://www.springframework.org/schema/context"\nxsi:schemaLocation="http://www.springframework.org/schema/beans\nhttp://www.springframework.org/schema/beans/spring-beans-2.5.xsd\nhttp://www.springframework.org/schema/context\nhttp://www.springframework.org/schema/context/spring-context-2.5.xsd">\n    <context:component-scan base-package="org.spring21"/>\n</beans>\n'})})]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"\u53c2\u8003\u8d44\u6599"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"\u4e66\u7c4d\u540d\u79f0\uff1aSpring\u63ed\u79d8 \u4f5c\u8005\uff1a\u738b\u798f\u5f3a"}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},5658:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var s=t(758);const i={},r=s.createContext(i);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);