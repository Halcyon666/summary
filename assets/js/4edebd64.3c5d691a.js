"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9559],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>g});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),s=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=s(e.components);return n.createElement(l.Provider,{value:r},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=s(t),d=a,g=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return t?n.createElement(g,i(i({ref:r},c),{},{components:t})):n.createElement(g,i({ref:r},c))}));function g(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var p={};for(var l in r)hasOwnProperty.call(r,l)&&(p[l]=r[l]);p.originalType=e,p[m]="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2156:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var n=t(7462),a=(t(7294),t(3905));const o={title:"Spring IoC\u6df1\u5ea6\u89e3\u67903",sidebar_label:"Spring IoC\u6df1\u5ea6\u89e3\u67903",sidebar_position:4},i=void 0,p={unversionedId:"Tech/Java/Spring/\u6df1\u5165\u7406\u89e3Spring-IoC3",id:"Tech/Java/Spring/\u6df1\u5165\u7406\u89e3Spring-IoC3",title:"Spring IoC\u6df1\u5ea6\u89e3\u67903",description:"IoC\u5bb9\u5668\u80cc\u540e\u7684\u79d8\u5bc6",source:"@site/docs/01-Tech/01-Java/02-Spring/\u6df1\u5165\u7406\u89e3Spring-IoC3.md",sourceDirName:"01-Tech/01-Java/02-Spring",slug:"/Tech/Java/Spring/\u6df1\u5165\u7406\u89e3Spring-IoC3",permalink:"/summary/Tech/Java/Spring/\u6df1\u5165\u7406\u89e3Spring-IoC3",draft:!1,editUrl:"https://github.com/Halcyon666/summary/blob/main/docs/01-Tech/01-Java/02-Spring/\u6df1\u5165\u7406\u89e3Spring-IoC3.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Spring IoC\u6df1\u5ea6\u89e3\u67903",sidebar_label:"Spring IoC\u6df1\u5ea6\u89e3\u67903",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Spring IoC\u6df1\u5ea6\u89e3\u67902",permalink:"/summary/Tech/Java/Spring/\u6df1\u5165\u7406\u89e3Spring-IoC2"},next:{title:"Spring IoC\u6df1\u5ea6\u89e3\u67904",permalink:"/summary/Tech/Java/Spring/\u6df1\u5165\u7406\u89e3Spring-IoC4"}},l={},s=[{value:"IoC\u5bb9\u5668\u80cc\u540e\u7684\u79d8\u5bc6",id:"ioc\u5bb9\u5668\u80cc\u540e\u7684\u79d8\u5bc6",level:2},{value:"BeanFactoryPostProcessor",id:"beanfactorypostprocessor",level:2},{value:"PropertyPlaceholderConfigurer",id:"propertyplaceholderconfigurer",level:3},{value:"PropertyOverrideConfigurer",id:"propertyoverrideconfigurer",level:3},{value:"CustomEditorConfigurer",id:"customeditorconfigurer",level:3},{value:"\u81ea\u5b9a\u4e49PropertyEditor",id:"\u81ea\u5b9a\u4e49propertyeditor",level:4}],c={toc:s},m="wrapper";function u(e){let{components:r,...t}=e;return(0,a.kt)(m,(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"ioc\u5bb9\u5668\u80cc\u540e\u7684\u79d8\u5bc6"},"IoC\u5bb9\u5668\u80cc\u540e\u7684\u79d8\u5bc6"),(0,a.kt)("p",null,"\u5bb9\u5668\u542f\u52a8\u9636\u6bb5"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5bb9\u5668\u542f\u52a8\u5f00\u59cb\uff0c\u9996\u5148\u4f1a\u901a\u8fc7\u67d0\u79cd\u9014\u5f84\u52a0\u8f7dConfiguration MetaData\u3002\u9664\u4e86\u4ee3\u7801\u65b9\u5f0f\u6bd4\u8f83\u76f4\u63a5\uff0c\u5728\u5927\u90e8\u5206\u60c5\u51b5\u4e0b\uff0c\u5bb9\u5668\u9700\u8981\u4f9d\u8d56\u67d0\u4e9b\u5de5\u5177\u7c7b\uff08BeanDefinitionReader\uff09\u5bf9\u52a0\u8f7d\u7684Configuration MetaData\u8fdb\u884c\u89e3\u6790\u548c\u5206\u6790\uff0c\u5e76\u5c06\u5206\u6790\u540e\u7684\u4fe1\u606f\u7f16\u7ec4\u4e3a\u76f8\u5e94\u7684BeanDefinition\uff0c\u6700\u540e\u628a\u8fd9\u4e9b\u4fdd\u5b58\u4e86bean\u5b9a\u4e49\u5fc5\u8981\u4fe1\u606f\u7684BeanDefinition\uff0c\u6ce8\u518c\u5230\u76f8\u5e94\u7684BeanDefinitionRegistry\uff0c\u8fd9\u6837\u5bb9\u5668\u542f\u52a8\u5de5\u4f5c\u5c31\u5b8c\u6210\u4e86\u3002")),(0,a.kt)("p",null,"Bean\u5b9e\u4f8b\u5316\u9636\u6bb5"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u7b2c\u4e00\u9636\u6bb5: \u73b0\u5728\u6240\u6709\u7684bean\u5b9a\u4e49\u4fe1\u606f\u90fd\u901a\u8fc7BeanDefinition\u7684\u65b9\u5f0f\u6ce8\u518c\u5230\u4e86BeanDefinitionRegistry\u4e2d\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u7b2c\u4e8c\u9636\u6bb5: \u5f53\u67d0\u4e2a\u8bf7\u6c42\u65b9\u901a\u8fc7\u5bb9\u5668\u7684getBean\u65b9\u6cd5\u660e\u786e\u5730\u8bf7\u6c42\u67d0\u4e2a\u5bf9\u8c61\u65f6\uff0c\u6216\u8005\u56e0\u4f9d\u8d56\u5173\u7cfb\u5bb9\u5668\u9700\u8981\u9690\u5f0f\u5730\u8c03\u7528getBean\u65b9\u6cd5\u65f6\u3002\u8be5\u9636\u6bb5\uff0c\u5bb9\u5668\u4f1a\u9996\u5148\u68c0\u67e5\u6240\u8bf7\u6c42\u7684\u5bf9\u8c61\u4e4b\u524d\u662f\u5426\u5df2\u7ecf\u521d\u59cb\u5316\u3002\u5982\u679c\u6ca1\u6709\uff0c\u5219\u4f1a\u6839\u636e\u6ce8\u518c\u7684BeanDefinition\u6240\u63d0\u4f9b\u7684\u4fe1\u606f\u5b9e\u4f8b\u5316\u88ab\u8bf7\u6c42\u5bf9\u8c61\uff0c\u5e76\u4e3a\u5176\u6ce8\u5165\u4f9d\u8d56\u3002\u5982\u679c\u8be5\u5bf9\u8c61\u5b9e\u73b0\u4e86\u67d0\u4e9b\u56de\u8c03\u63a5\u53e3\uff0c\u4e5f\u4f1a\u6839\u636e\u56de\u8c03\u63a5\u53e3\u7684\u8981\u6c42\u6765\u88c5\u914d\u5b83\u3002\u5f53\u8be5\u5bf9\u8c61\u88c5\u914d\u5b8c\u6bd5\u4e4b\u540e\uff0c\u5bb9\u5668\u4f1a\u7acb\u5373\u5c06\u5176\u8fd4\u56de\u8bf7\u6c42\u65b9\u4f7f\u7528\u3002"))),(0,a.kt)("h2",{id:"beanfactorypostprocessor"},"BeanFactoryPostProcessor"),(0,a.kt)("p",null,"Spring\u63d0\u4f9b\u4e86\u4e00\u79cd\u53eb\u505aBeanFactoryPostProcessor\u7684\u5bb9\u5668\u6269\u5c55\u673a\u5236\u3002\u8be5\u673a\u5236\u5141\u8bb8\u6211\u4eec\u5728\u5bb9\u5668\u5b9e\u4f8b\u5316\u76f8\u5e94\u5bf9\u8c61\u4e4b\u524d\uff0c\u5bf9\u6ce8\u518c\u5230\u5bb9\u5668\u7684BeanDefinition\u6240\u4fdd\u5b58\u7684\u4fe1\u606f\u505a\u76f8\u5e94\u7684\u4fee\u6539\u3002\u8fd9\u5c31\u76f8\u5f53\u4e8e\u5728\u5bb9\u5668\u5b9e\u73b0\u7684\u7b2c\u4e00\u9636\u6bb5\u6700\u540e\u52a0\u5165\u4e00\u9053\u5de5\u5e8f\uff0c\u8ba9\u6211\u4eec\u5bf9\u6700\u7ec8BeanDefinition\u505a\u4e00\u4e9b\u989d\u5916\u7684\u64cd\u4f5c\uff0c\u6bd4\u5982\u4fee\u6539\u5176\u4e2dbean\u5b9a\u4e49\u7684\u67d0\u4e9b\u5c5e\u6027\uff0c\u4e3abean\u5b9a\u4e49\u589e\u52a0\u5176\u4ed6\u4fe1\u606f\u7b49\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u8981\u81ea\u5b9a\u4e49\u5b9e\u73b0BeanFactoryPostProcessor\uff0c\u901a\u5e38\u6211\u4eec\u9700\u8981\u5b9e\u73b0",(0,a.kt)("inlineCode",{parentName:"p"},"org.springframework.beans.factory.config.BeanFactoryPostProcessor"),"\u63a5\u53e3\u3002\u8fd9\u4e2a\u65f6\u5019\u53ef\u80fd\u9700\u8981\u5b9e\u73b0\u7c7b\u540c\u65f6\u5b9e\u73b0Spring\u7684org.springframework.core.Ordered\u63a5\u53e3\uff0c\u4ee5\u4fdd\u8bc1\u5404\u4e2aBeanFactoryPostProcessor\u53ef\u4ee5\u6309\u7167\u9884\u5148\u8bbe\u5b9a\u7684\u987a\u5e8f\u6267\u884c\uff08\u5982\u679c\u987a\u5e8f\u7d27\u8981\u7684\u8bdd\uff09\u3002"),(0,a.kt)("p",null,"\u5176\u4e2d,",(0,a.kt)("inlineCode",{parentName:"p"},"org.springframework.beans.factory.config.PropertyPlaceholderConfigurer"),"\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"org.springframework.beans.factory.config.PropertyOverrideConfigurer"),"\u662f\u4e24\u4e2a\u6bd4\u8f83\u5e38\u7528\u7684BeanFactoryPostProcessor\u3002"),(0,a.kt)("h3",{id:"propertyplaceholderconfigurer"},"PropertyPlaceholderConfigurer"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"xml\u914d\u7f6e"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-XML"},'<?xml version="1.0" encoding="UTF-8"?>\n<beans xmlns="http://www.springframework.org/schema/beans"\n       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n       xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd">\n    \x3c!--    \u4f7f\u7528\u7684BeanFactoryPostProcessor--\x3e\n    \x3c!--    \u4f7f\u7528PropertyPlaceholderConfigurer\u5360\u4f4d\u7b26\u7684\u6570\u636e\u6e90\u914d\u7f6e--\x3e\n    <bean class="org.springframework.beans.factory.config.PropertyPlaceholderConfigurer">\n        <property name="locations">\n            <list>\n                <value>../conf/jdbc.properties</value>\n                <value>../conf/mail.properties</value>\n            </list>\n        </property>\n    </bean>\n\n    <bean id="dataSource" class="org.apache.commons.dbcp2.BasicDataSource" destroy-method="close">\n        <property name="url" value="${jdbc.url}"/>\n        <property name="driverClassName" value="${jdbc.driver}"/>\n        <property name="username" value="${jdbc.username}"/>\n        <property name="password" value="${jdbc.password}"/>\n        <property name="testOnBorrow" value="true"/>\n        <property name="testOnReturn" value="true"/>\n        <property name="testWhileIdle" value="true"/>\n        <property name="minEvictableIdleTimeMillis" value="180000"/>\n        <property name="timeBetweenEvictionRunsMillis" value="360000"/>\n        <property name="validationQuery" value="SELECT 1"/>\n        <property name="maxOpenPreparedStatements" value="100"/>\n    </bean>\n\n    \x3c!--  \u4f7f\u7528PropertyOverrideConfigurer\u66ff\u6362PropertyPlaceholderConfigurer\u4e2d\u7684\u914d\u7f6e--\x3e\n    <bean class="org.springframework.beans.factory.config.PropertyOverrideConfigurer">\n        <property name="location" value="../conf/pool-adjustment.properties"/>\n    </bean>\n</beans>\n'))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"jdbc.properties"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-properties"},"jdbc.url=jdbc:mysql://server/MAIN?useUnicode=true&characterEncoding=ms932&failOverReadOnly=false&roundRobinLoadBalance=true\njdbc.driver=com.mysql.jdbc.Driver\njdbc.username=root\njdbc.password=root\n"))),(0,a.kt)("p",null,"\u5982\u679c",(0,a.kt)("inlineCode",{parentName:"p"},"org.apache.commons.dbcp2.BasicDataSource"),"\u62a5\u9519\uff0c\u5219\u9700\u8981\u5f15\u5165\u4f9d\u8d56",(0,a.kt)("inlineCode",{parentName:"p"},'api("org.apache.commons:commons-dbcp2:2.1.1")')),(0,a.kt)("p",null,"\u5f53BeanFactory\u5728\u7b2c\u4e00\u9636\u6bb5\u52a0\u8f7d\u5b8c\u6210\u6240\u6709\u914d\u7f6e\u4fe1\u606f\u65f6\uff0c BeanFactory\u4e2d\u4fdd\u5b58\u7684\u5bf9\u8c61\u7684\u5c5e\u6027\u4fe1\u606f\u8fd8\u53ea\u662f\u4ee5\u5360\u4f4d\u7b26\u7684\u5f62\u5f0f\u5b58\u5728\uff0c\u5982${jdbc.url}\u3001 ${jdbc.driver}\u3002\u5f53PropertyPlaceholderConfigurer\u4f5c\u4e3aBeanFactoryPostProcessor\u88ab\u5e94\u7528\u65f6\uff0c\u5b83\u4f1a\u4f7f\u7528properties\u914d\u7f6e\u6587\u4ef6\u4e2d\u7684\u914d\u7f6e\u4fe1\u606f\u6765\u66ff\u6362\u76f8\u5e94BeanDefinition\u4e2d\u5360\u4f4d\u7b26\u6240\u8868\u793a\u7684\u5c5e\u6027\u503c\u3002\u8fd9\u6837\uff0c\u5f53\u8fdb\u5165\u5bb9\u5668\u5b9e\u73b0\u7684\u7b2c\u4e8c\u9636\u6bb5\u5b9e\u4f8b\u5316bean\u65f6\uff0c bean\u5b9a\u4e49\u4e2d\u7684\u5c5e\u6027\u503c\u5c31\u662f\u6700\u7ec8\u66ff\u6362\u5b8c\u6210\u7684\u4e86\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"PropertyPlaceholderConfigurer\u4e0d\u5355\u4f1a\u4ece\u5176\u914d\u7f6e\u7684properties\u6587\u4ef6\u4e2d\u52a0\u8f7d\u914d\u7f6e\u9879\uff0c\u540c\u65f6\u8fd8\u4f1a\u68c0\u67e5Java\u7684System\u7c7b\u4e2d\u7684Properties\uff0c\u53ef\u4ee5\u901a\u8fc7",(0,a.kt)("inlineCode",{parentName:"li"},"setSystemPropertiesMode()"),"\u6216\u8005",(0,a.kt)("inlineCode",{parentName:"li"},"setSystemPropertiesModeName()"),"\u6765\u63a7\u5236\u662f\u5426\u52a0\u8f7d\u6216\u8005\u8986\u76d6System\u76f8\u5e94Properties\u7684\u884c\u4e3a\u3002"),(0,a.kt)("li",{parentName:"ul"},"PropertyPlaceholderConfigurer\u63d0\u4f9b\u4e86 SYSTEM",(0,a.kt)("em",{parentName:"li"},"PROPERTIES_MODE_FALLBACK\u3001 SYSTEM_PROPERTIES_MODE_NEVER \u548c SYSTEM_PROPERTIES_MODE_OVERRIDE \u4e09\u79cd\u6a21\u5f0f\u3002\u9ed8\u8ba4\u91c7\u7528\u7684\u662fSYSTEM_PROPERTIES")," MODE_FALLBACK\uff0c\u679cproperties\u6587\u4ef6\u4e2d\u627e\u4e0d\u5230\u76f8\u5e94\u914d\u7f6e\u9879\uff0c\u5219\u5230System\u7684Properties\u4e2d\u67e5\u627e\uff0c\u6211\u4eec\u8fd8\u53ef\u4ee5\u9009\u62e9\u4e0d\u68c0\u67e5System\u7684Properties\u6216\u8005\u8986\u76d6\u5b83\u3002")),(0,a.kt)("h3",{id:"propertyoverrideconfigurer"},"PropertyOverrideConfigurer"),(0,a.kt)("p",null,"\u914d\u7f6e\u5728properties\u6587\u4ef6\u4e2d\u7684\u4fe1\u606f\u901a\u5e38\u90fd\u4ee5\u660e\u6587\u8868\u793a\uff0cPropertyOverrideConfigurer \u7684\u7236\u7c7b PropertyResourceConfigurer \u63d0\u4f9b\u4e86\u4e00\u4e2aprotected\u7c7b\u578b\u7684\u65b9\u6cd5convertPropertyValue\uff0c\u5141\u8bb8\u5b50\u7c7b\u8986\u76d6\u8fd9\u4e2a\u65b9\u6cd5\u5bf9\u76f8\u5e94\u7684\u7f6e\u9879\u8fdb\u884c\u8f6c\u6362\uff0c\u5982\u5bf9\u52a0\u5bc6\u540e\u7684\u5b57\u7b26\u4e32\u89e3\u5bc6\u4e4b\u540e\u518d\u8986\u76d6\u5230\u76f8\u5e94\u7684bean\u5b9a\u4e49\u4e2d\u3002\u5f53\u7136\uff0c\u65e2\u7136PropertyPlaceholderConfigurer\u4e5f\u540c\u6837\u7ee7\u627f\u4e86 PropertyResourceConfigurer \uff0c\u6211\u4eec\u4e5f\u53ef\u4ee5\u9488\u5bf9PropertyPlaceholderConfigurer\u5e94\u7528\u7c7b\u4f3c\u7684\u529f\u80fd\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://s2.loli.net/2023/07/22/xJKIuHdQwa19on5.png",alt:"image-20230722162007693"})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-XML"},'<bean class="org.springframework.beans.factory.config.PropertyOverrideConfigurer">\n    <property name="location" value="pool-adjustment.properties"/>\n</bean>\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-properties"},"dataSource.minEvictableIdleTimeMillis=1000\ndataSource.maxOpenPreparedStatements=50\n")),(0,a.kt)("h3",{id:"customeditorconfigurer"},"CustomEditorConfigurer"),(0,a.kt)("p",null,"CustomEditorConfigurer\u662f\u53e6\u4e00\u79cd\u7c7b\u578b\u7684BeanFactoryPostProcessor\u5b9e\u73b0\uff0c\u5b83\u53ea\u662f\u8f85\u52a9\u6027\u5730\u5c06\u540e\u671f\u4f1a\u7528\u5230\u7684\u4fe1\u606f\u6ce8\u518c\u5230\u5bb9\u5668\uff0c\u5bf9BeanDefinition\u6ca1\u6709\u505a\u4efb\u4f55\u53d8\u52a8\u3002"),(0,a.kt)("p",null,"Spring\u63d0\u4f9b\u7684\u90e8\u5206",(0,a.kt)("inlineCode",{parentName:"p"},"PropertyEditor: StringArrayPropertyEditor"),"\u3002\u8be5PropertyEditor\u4f1a\u5c06\u7b26\u5408CSV\u683c\u5f0f\u7684\u5b57\u7b26\u4e32\u8f6c\u6362\u6210String[]\u6570\u7ec4\u7684\u5f62\u5f0f\uff0c\u9ed8\u8ba4\u662f\u4ee5\u9017\u53f7\uff08\uff0c\uff09\u5206\u9694\u7684\u5b57\u7b26\u4e32\uff0c\u4f46\u53ef\u4ee5\u6307\u5b9a\u81ea\u5b9a\u4e49\u7684\u5b57\u7b26\u4e32\u5206\u9694\u7b26\u3002ByteArrayPropertyEditor\u3001CharArrayPropertyEditor\u7b49\u90fd\u5c5e\u4e8e\u7c7b\u4f3c\u529f\u80fd\u7684PropertyEditor\uff0c\u53c2\u7167Javadoc\u53ef\u4ee5\u53d6\u5f97\u76f8\u5e94\u7684\u8be6\u7ec6\u4fe1\u606f\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"ClassEditor\u3002\u6839\u636eString\u7c7b\u578b\u7684class\u540d\u79f0\uff0c\u76f4\u63a5\u5c06\u5176\u8f6c\u6362\u6210\u76f8\u5e94\u7684Class\u5bf9\u8c61\uff0c\u76f8\u5f53\u4e8e\u901a\u8fc7Class.forName(String)\u5b8c\u6210\u7684\u529f\u6548\u3002\u53ef\u4ee5\u901a\u8fc7String[]\u6570\u7ec4\u7684\u5f62\u5f0f\u4f20\u5165\u9700\u8f6c\u6362\u7684\u503c\uff0c\u4ee5\u8fbe\u5230\u4e0e\u63d0\u4f9bClassArrayEditor\u540c\u6837\u7684\u76ee\u7684\u3002"),(0,a.kt)("li",{parentName:"ul"},"FileEditor\u3002 Spring\u63d0\u4f9b\u7684\u5bf9\u5e94java.io.File\u7c7b\u578b\u7684PropertyEditor\u3002\u540c\u5c5e\u4e8e\u5bf9\u8d44\u6e90\u8fdb\u884c\u5b9a\u4f4d\u7684PropertyEditor\u8fd8\u6709InputStreamEditor\u3001 URLEditor\u7b49\u3002"),(0,a.kt)("li",{parentName:"ul"},"LocaleEditor\u3002\u9488\u5bf9java.util.Locale\u7c7b\u578b\u7684PropertyEditor\uff0c\u683c\u5f0f\u53ef\u4ee5\u53c2\u7167LocaleEditor\u548cLocale\u7684Javadoc\u8bf4\u660e\u3002"),(0,a.kt)("li",{parentName:"ul"},"PatternEditor\u3002\u9488\u5bf9Java SE 1.4\u4e4b\u540e\u624d\u5f15\u5165\u7684java.util.regex.Pattern\u7684PropertyEditor\uff0c\u683c\u5f0f\u53ef\u4ee5\u53c2\u7167java.util.regex.Pattern\u7c7b\u7684Javadoc\u3002")),(0,a.kt)("p",null,"\u4ee5\u4e0a\u8fd9\u4e9bPropertyEditor\uff0c\u5bb9\u5668\u901a\u5e38\u4f1a\u9ed8\u8ba4\u52a0\u8f7d\u4f7f\u7528\uff0c\u6240\u4ee5\uff0c\u5373\u4f7f\u6211\u4eec\u4e0d\u544a\u8bc9\u5bb9\u5668\u5e94\u8be5\u5982\u4f55\u5bf9\u8fd9\u4e9b\u7c7b\u578b\u8fdb\u884c\u8f6c\u6362\uff0c\u5bb9\u5668\u540c\u6837\u53ef\u4ee5\u6b63\u786e\u5730\u5b8c\u6210\u5de5\u4f5c\u3002\u4f46\u5f53\u6211\u4eec\u9700\u8981\u6307\u5b9a\u7684\u7c7b\u578b\u6ca1\u6709\u5305\u542b\u5728\u4ee5\u4e0a\u6240\u63d0\u5230PropertyEditor\u4e4b\u5217\u7684\u65f6\u5019\uff0c\u5c31\u9700\u8981\u7ed9\u51fa\u9488\u5bf9\u8fd9\u79cd\u7c7b\u578b\u7684PropertyEditor\u5b9e\u73b0\uff0c\u5e76\u901a\u8fc7CustomEditorConfigurer\u544a\u77e5\u5bb9\u5668\uff0c\u4ee5\u4fbf\u5bb9\u5668\u5728\u9002\u5f53\u7684\u65f6\u673a\u4f7f\u7528\u5230\u9002\u5f53\u7684PropertyEditor\u3002"),(0,a.kt)("h4",{id:"\u81ea\u5b9a\u4e49propertyeditor"},"\u81ea\u5b9a\u4e49PropertyEditor"),(0,a.kt)("p",null,"\u5bf9\u4e8eDate\u7c7b\u578b\uff0c\u4e0d\u540c\u7684Locale\u3001\u4e0d\u540c\u7684\u7cfb\u7edf\u5728\u8868\u73b0\u5f62\u5f0f\u4e0a\u5b58\u5728\u4e0d\u540c\u7684\u9700\u6c42\u3002\u5982\u7cfb\u7edf\u8fd9\u4e2a\u90e8\u5206\u9700\u8981\u4ee5yyyy-MM-dd\u7684\u5f62\u5f0f\u8868\u73b0\u65e5\u671f\uff0c\u7cfb\u7edf\u90a3\u4e2a\u90e8\u5206\u53ef\u80fd\u53c8\u9700\u8981\u4ee5yyyyMMdd\u7684\u5f62\u5f0f\u5bf9\u65e5\u671f\u8fdb\u884c\u8f6c\u6362\u3002"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"DatePropertyEditor"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"package org.springframework.mylearntest.beanfactorypostprocessor;\n\nimport java.beans.PropertyEditorSupport;\nimport java.time.LocalDate;\nimport java.time.format.DateTimeFormatter;\n\npublic class DatePropertyEditor extends PropertyEditorSupport {\n    private String datePattern;\n\n    @Override\n    public void setAsText(String text) throws IllegalArgumentException {\n        DateTimeFormatter dateTimeFormatter = DateTimeFormatter.ofPattern(getDatePattern());\n        LocalDate dateValue = LocalDate.parse(text,dateTimeFormatter);\n        setValue(dateValue);\n    }\n\n    @Override\n    public String getAsText() {\n        return super.getAsText();\n    }\n\n    public String getDatePattern() {\n        return datePattern;\n    }\n\n    public void setDatePattern(String datePattern) {\n        this.datePattern = datePattern;\n    }\n}\n"))),(0,a.kt)("p",null,"\u5982\u679c\u4ec5\u4ec5\u662f\u652f\u6301\u5355\u5411\u7684\u4eceString\u5230\u76f8\u5e94\u5bf9\u8c61\u7c7b\u578b\u7684\u8f6c\u6362\uff0c\u53ea\u8981\u8986\u5199\u65b9\u6cd5setAsText(String)\u5373\u53ef\u3002\u5982\u679c\u60f3\u652f\u6301\u53cc\u5411\u8f6c\u6362\uff0c\u9700\u8981\u540c\u65f6\u8003\u8651getAsText()\u65b9\u6cd5\u7684\u8986\u5199\u3002"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"DatePropertyEditorRegistrar"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"package org.springframework.mylearntest.beanfactorypostprocessor;\n\nimport org.springframework.beans.PropertyEditorRegistrar;\nimport org.springframework.beans.PropertyEditorRegistry;\n\nimport java.beans.PropertyEditor;\n\npublic class DatePropertyEditorRegistrar implements PropertyEditorRegistrar {\n    private PropertyEditor propertyEditor;\n\n    public PropertyEditor getPropertyEditor() {\n        return propertyEditor;\n    }\n\n    public void setPropertyEditor(PropertyEditor propertyEditor) {\n        this.propertyEditor = propertyEditor;\n    }\n\n    @Override\n    public void registerCustomEditors(PropertyEditorRegistry registry) {\n        registry.registerCustomEditor(java.util.Date.class, getPropertyEditor());\n    }\n}\n"))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"xml\u914d\u7f6e"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-XML"},'<?xml version="1.0" encoding="UTF-8"?>\n<beans xmlns="http://www.springframework.org/schema/beans"\n       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n       xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd"\n       xmlns:aop="http://www.springframework.org/schema/aop">\n\n    <bean class="org.springframework.beans.factory.config.CustomEditorConfigurer">\n        <property name="propertyEditorRegistrars">\n            <list>\n                <ref bean="datePropertyEditorRegistrar"/>\n            </list>\n        </property>\n    </bean>\n\n    <bean id="datePropertyEditorRegistrar" class="org.springframework.mylearntest.beanfactorypostprocessor.DatePropertyEditorRegistrar">\n        <property name="propertyEditor">\n            <ref bean="datePropertyEditor"/>\n        </property>\n    </bean>\n\n    <bean id="datePropertyEditor" class="org.springframework.mylearntest.beanfactorypostprocessor.DatePropertyEditor">\n        <property name="datePattern">\n            <value>yyyy/MM/dd</value>\n        </property>\n    </bean>\n</beans>\n'))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"\u6d4b\u8bd5\u7c7b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'package org.springframework.mylearntest.beanfactorypostprocessor;\n\nimport org.springframework.context.ApplicationContext;\nimport org.springframework.context.support.ClassPathXmlApplicationContext;\n\npublic class Test4DateProp {\n    public static void main(String[] args) {\n        // applicationContext\n        ApplicationContext context = new ClassPathXmlApplicationContext("datepropertyeditor2.xml");\n        DatePropertyEditor datePropertyEditor = (DatePropertyEditor) context.getBean("datePropertyEditor");\n        datePropertyEditor.setAsText("2020/06/21");\n    }\n}\n'))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u53c2\u8003\u8d44\u6599"),(0,a.kt)("ol",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ol"},"\u4e66\u7c4d\u540d\u79f0\uff1aSpring\u63ed\u79d8 \u4f5c\u8005\uff1a\u738b\u798f\u5f3a"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/spring-projects/spring-framework.git"},"https://github.com/spring-projects/spring-framework.git")))),(0,a.kt)("admonition",{title:"\u534f\u8bae",type:"tip"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u672c\u4f5c\u54c1\u4ee3\u7801\u90e8\u5206\u91c7\u7528 ",(0,a.kt)("a",{parentName:"p",href:"https://www.apache.org/licenses/LICENSE-2.0"},"Apache 2.0\u534f\u8bae"),"\u8fdb\u884c\u8bb8\u53ef\u3002\u9075\u5faa\u8bb8\u53ef\u7684\u524d\u63d0\u4e0b\uff0c\u4f60\u53ef\u4ee5\u81ea\u7531\u5730\u5bf9\u4ee3\u7801\u8fdb\u884c\u4fee\u6539\uff0c\u518d\u53d1\u5e03\uff0c\u53ef\u4ee5\u5c06\u4ee3\u7801\u7528\u4f5c\u5546\u4e1a\u7528\u9014\u3002\u4f46\u8981\u6c42\u4f60\uff1a"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u7f72\u540d"),"\uff1a\u5728\u539f\u6709\u4ee3\u7801\u548c\u884d\u751f\u4ee3\u7801\u4e2d\uff0c\u4fdd\u7559\u539f\u4f5c\u8005\u7f72\u540d\u53ca\u4ee3\u7801\u6765\u6e90\u4fe1\u606f\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u4fdd\u7559\u8bb8\u53ef\u8bc1"),"\uff1a\u5728\u539f\u6709\u4ee3\u7801\u548c\u884d\u751f\u4ee3\u7801\u4e2d\uff0c\u4fdd\u7559Apache 2.0\u534f\u8bae\u6587\u4ef6\u3002"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u672c\u4f5c\u54c1\u6587\u6863\u90e8\u5206\u91c7\u7528",(0,a.kt)("a",{parentName:"p",href:"http://creativecommons.org/licenses/by/4.0/"},"\u77e5\u8bc6\u5171\u4eab\u7f72\u540d 4.0 \u56fd\u9645\u8bb8\u53ef\u534f\u8bae"),"\u8fdb\u884c\u8bb8\u53ef\u3002 \u9075\u5faa\u8bb8\u53ef\u7684\u524d\u63d0\u4e0b\uff0c\u4f60\u53ef\u4ee5\u81ea\u7531\u5730\u5171\u4eab\uff0c\u5305\u62ec\u5728\u4efb\u4f55\u5a92\u4ecb\u4e0a\u4ee5\u4efb\u4f55\u5f62\u5f0f\u590d\u5236\u3001\u53d1\u884c\u672c\u4f5c\u54c1\uff0c\u4ea6\u53ef\u4ee5\u81ea\u7531\u5730\u6f14\u7ece\u3001\u4fee\u6539\u3001\u8f6c\u6362\u6216\u4ee5\u672c\u4f5c\u54c1\u4e3a\u57fa\u7840\u8fdb\u884c\u4e8c\u6b21\u521b\u4f5c\u3002\u4f46\u8981\u6c42\u4f60\uff1a"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u7f72\u540d"),"\uff1a\u5e94\u5728\u4f7f\u7528\u672c\u6587\u6863\u7684\u5168\u90e8\u6216\u90e8\u5206\u5185\u5bb9\u65f6\u5019\uff0c\u6ce8\u660e\u539f\u4f5c\u8005\u53ca\u6765\u6e90\u4fe1\u606f\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u975e\u5546\u4e1a\u6027\u4f7f\u7528"),"\uff1a\u4e0d\u5f97\u7528\u4e8e\u5546\u4e1a\u51fa\u7248\u6216\u5176\u4ed6\u4efb\u4f55\u5e26\u6709\u5546\u4e1a\u6027\u8d28\u7684\u884c\u4e3a\u3002\u5982\u9700\u5546\u4e1a\u4f7f\u7528\uff0c\u8bf7\u8054\u7cfb\u4f5c\u8005\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u76f8\u540c\u65b9\u5f0f\u5171\u4eab\u7684\u6761\u4ef6"),"\uff1a\u5728\u672c\u6587\u6863\u57fa\u7840\u4e0a\u6f14\u7ece\u3001\u4fee\u6539\u7684\u4f5c\u54c1\uff0c\u5e94\u5f53\u7ee7\u7eed\u4ee5\u77e5\u8bc6\u5171\u4eab\u7f72\u540d 4.0\u56fd\u9645\u8bb8\u53ef\u534f\u8bae\u8fdb\u884c\u8bb8\u53ef\u3002"))))))}u.isMDXComponent=!0}}]);