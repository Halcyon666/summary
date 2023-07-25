"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8276],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>k});var a=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=a.createContext({}),i=function(e){var r=a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):p(p({},r),e)),t},c=function(e){var r=i(e.components);return a.createElement(l.Provider,{value:r},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},m=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=i(t),m=n,k=u["".concat(l,".").concat(m)]||u[m]||g[m]||o;return t?a.createElement(k,p(p({ref:r},c),{},{components:t})):a.createElement(k,p({ref:r},c))}));function k(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,p=new Array(o);p[0]=m;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s[u]="string"==typeof e?e:n,p[1]=s;for(var i=2;i<o;i++)p[i]=t[i];return a.createElement.apply(null,p)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9774:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>p,default:()=>g,frontMatter:()=>o,metadata:()=>s,toc:()=>i});var a=t(7462),n=(t(7294),t(3905));const o={title:"Spring AOP\u7684\u7ec7\u51652",sidebar_label:"Spring AOP\u7684\u7ec7\u51652",sidebar_position:12},p=void 0,s={unversionedId:"Tech/Java/Spring/Spring AOP\u4e2d\u7684\u7ec7\u51652",id:"Tech/Java/Spring/Spring AOP\u4e2d\u7684\u7ec7\u51652",title:"Spring AOP\u7684\u7ec7\u51652",description:"\u672c\u6587\u76f8\u5173\u4ee3\u7801(\u6765\u81ea\u5b98\u65b9\u6e90\u7801spring-test\u6a21\u5757)\u8bf7\u53c2\u89c1spring-framework org.springframework.mylearntest\u5305\u4e0b\u3002",source:"@site/docs/01-Tech/01-Java/02-Spring/Spring AOP\u4e2d\u7684\u7ec7\u51652.md",sourceDirName:"01-Tech/01-Java/02-Spring",slug:"/Tech/Java/Spring/Spring AOP\u4e2d\u7684\u7ec7\u51652",permalink:"/summary/Tech/Java/Spring/Spring AOP\u4e2d\u7684\u7ec7\u51652",draft:!1,editUrl:"https://github.com/Halcyon666/summary/blob/main/docs/01-Tech/01-Java/02-Spring/Spring AOP\u4e2d\u7684\u7ec7\u51652.md",tags:[],version:"current",sidebarPosition:12,frontMatter:{title:"Spring AOP\u7684\u7ec7\u51652",sidebar_label:"Spring AOP\u7684\u7ec7\u51652",sidebar_position:12},sidebar:"tutorialSidebar",previous:{title:"Spring AOP\u7684\u7ec7\u51651",permalink:"/summary/Tech/Java/Spring/Spring AOP\u4e2d\u7684\u7ec7\u51651"},next:{title:"AspectJ\u5f62\u5f0fAOP\u4f7f\u7528",permalink:"/summary/Tech/Java/Spring/AspectJ\u5f62\u5f0fAOP\u4f7f\u7528"}},l={},i=[{value:"\u52a0\u901f\u7ec7\u5165\u81ea\u52a8\u5316\u8fdb\u7a0b",id:"\u52a0\u901f\u7ec7\u5165\u81ea\u52a8\u5316\u8fdb\u7a0b",level:2},{value:"Spring\u4e2d\u53ef\u7528\u7684\u81ea\u52a8\u4ee3\u7406\u7c7b",id:"spring\u4e2d\u53ef\u7528\u7684\u81ea\u52a8\u4ee3\u7406\u7c7b",level:2},{value:"BeanNameAutoProxyCreator",id:"beannameautoproxycreator",level:3},{value:"DefaultAdvisorAutoProxyCreator",id:"defaultadvisorautoproxycreator",level:3},{value:"\u6269\u5c55AutoProxyCreator",id:"\u6269\u5c55autoproxycreator",level:3},{value:"TargetSource\u5b9e\u73b0\u7c7b",id:"targetsource\u5b9e\u73b0\u7c7b",level:2},{value:"SingletonTargetSource",id:"singletontargetsource",level:3},{value:"PrototypeTargetSource",id:"prototypetargetsource",level:3},{value:"HotSwappableTargetSource",id:"hotswappabletargetsource",level:3},{value:"CommonsPoolTargetSource",id:"commonspooltargetsource",level:3},{value:"ThreadLocalTargetSource",id:"threadlocaltargetsource",level:3},{value:"\u81ea\u5b9a\u4e49TargetSource",id:"\u81ea\u5b9a\u4e49targetsource",level:3}],c={toc:i},u="wrapper";function g(e){let{components:r,...t}=e;return(0,n.kt)(u,(0,a.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u672c\u6587\u76f8\u5173\u4ee3\u7801(\u6765\u81ea",(0,n.kt)("a",{parentName:"p",href:"https://github.com/spring-projects/spring-framework.git",title:"\u5b98\u65b9\u6e90\u7801"},"\u5b98\u65b9\u6e90\u7801"),"spring-test\u6a21\u5757)\u8bf7\u53c2\u89c1",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Halcyon666/spring-framework-modified/tree/main/spring-test"},"spring-framework")," org.springframework.mylearntest\u5305\u4e0b\u3002"),(0,n.kt)("h2",{id:"\u52a0\u901f\u7ec7\u5165\u81ea\u52a8\u5316\u8fdb\u7a0b"},"\u52a0\u901f\u7ec7\u5165\u81ea\u52a8\u5316\u8fdb\u7a0b"),(0,n.kt)("p",null,"Spring AOP\u81ea\u52a8\u4ee3\u7406\u7684\u5b9e\u73b0\u5efa\u7acb\u5728IoC\u5bb9\u5668\u7684BeanPostProcessor\u6982\u5ff5\u4e4b\u4e0a\uff0c\u4f7f\u7528\u4e00\u4e2aBeanPostProcessor\uff0c\u7136\u540e\u5728BeanPostProcessor\u5185\u90e8\u5b9e\u73b0\u8fd9\u6837\u7684\u903b\u8f91\uff0c\u5373\u5f53\u5bf9\u8c61\u5b9e\u4f8b\u5316\u7684\u65f6\u5019\uff0c\u4e3a\u5176\u751f\u6210\u4ee3\u7406\u5bf9\u8c61\u5e76\u8fd4\u56de\uff0c\u800c\u4e0d\u662f\u5b9e\u4f8b\u5316\u540e\u7684\u76ee\u6807\u5bf9\u8c61\u672c\u8eab\uff0c\u4ece\u800c\u8fbe\u5230\u81ea\u52a8\u4ee3\u7406\u7684\u76ee\u7684\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"for(bean in IoC container){\n    // \u68c0\u67e5\u5f53\u524dbean\u5b9a\u4e49\u662f\u5426\u6ee1\u8db3\u62e6\u622a\u6761\u4ef6\uff0c\u662f\u5219\u62e6\u622a\n    if(isAssistentStatement){\n        Object proxy = createProxyFor(bean);\n        return proxy;\n    } else {\n        Object instance = createInstance(bean);\n        return instance;\n    }\n}\n")),(0,n.kt)("p",null,"\u62e6\u622a\u6761\u4ef6"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u901a\u8fc7\u5916\u90e8\u914d\u7f6e\u6587\u4ef6\u4f20\u5165\u8fd9\u4e9b\u62e6\u622a\u6761\u4ef6\u4fe1\u606f\uff0c\u6bd4\u5982\u6211\u4eec\u5728\u5bb9\u5668\u7684\u914d\u7f6e\u6587\u4ef6\u4e2d\u6ce8\u518c\u7684\u6709\u5173Pointcut\u4ee5\u53caAdvisor\u7b49\u5c31\u5305\u62ec\u8fd9\u4e9b\u4fe1\u606f\uff1b")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u8fd8\u53ef\u4ee5\u5728\u5177\u4f53\u7c7b\u7684\u5b9a\u4e49\u6587\u4ef6\u4e2d\uff0c\u901a\u8fc7\u5143\u6570\u636e\u6765\u77e5\u540d\u5177\u4f53\u7684\u62e6\u622a\u6761\u4ef6\u662f\u4ec0\u4e48\uff0c\u6bd4\u5982\u53ef\u4ee5\u901a\u8fc7Jakarta Commons Atrributes\u6216\u8005Java5\u7684\u6ce8\u89e3\uff0c\u76f4\u63a5\u5728\u4ee3\u7801\u7c7b\u4e2d\u6807\u6ce8Pointcut\u7b49\u62e6\u622a\u4fe1\u606f\u3002"))),(0,n.kt)("h2",{id:"spring\u4e2d\u53ef\u7528\u7684\u81ea\u52a8\u4ee3\u7406\u7c7b"},"Spring\u4e2d\u53ef\u7528\u7684\u81ea\u52a8\u4ee3\u7406\u7c7b"),(0,n.kt)("p",null,"Spring AOP\u5728org.springframework.aop.framework.autoproxy\u5305\u4e0b\u63d0\u4f9b\u4e86\u4e24\u4e2a\u5e38\u7528\u7684AutoProxyCreator\uff0c\u5373BeanNameAutoProxyCreator\u548cDefaultAdvisorAutoProxyCreator\u3002"),(0,n.kt)("h3",{id:"beannameautoproxycreator"},"BeanNameAutoProxyCreator"),(0,n.kt)("p",null,"\u4f7f\u7528BeanNameAutoProxyCreator\u53ef\u4ee5\u901a\u8fc7\u6307\u5b9a\u4e00\u7ec4\u5bb9\u5668\u5185\u7684\u76ee\u6807\u5bf9\u8c61\u5bf9\u5e94\u7684BeanName\uff0c\u5c06\u6307\u5b9a\u7684\u4e00\u7ec4\u62e6\u622a\u5668\u5e94\u7528\u5230\u8fd9\u4e9b\u76ee\u6807\u5bf9\u8c61\u4e4b\u4e0a\u3002"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"XML\u914d\u7f6e\u6848\u4f8b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},'<beans>\n    <bean id="target1" class="..."/>\n    <bean id="target2" class="..."/>\n\n    <bean id="mockTask" class="..."/>\n    <bean id="fakeTask" class="..."/>\n\n    <bean id="taskThrowsAdvice" class="...TaskThrowsAdvice"/>\n    <bean id="performanceInterceptor" class="...PerformanceInterceptor">\n\n    <bean class="org.springframework.aop.framework.autoproxy.BeanNameAutoProxyCreator">\n        \x3c!--\u6307\u5b9a\u54ea\u4e9bbean\u81ea\u52a8\u751f\u6210\u4ee3\u7406\u5bf9\u8c61--\x3e\n        <property name="beanNames">\n            <list>\n                <value>target1</value>\n                <value>target2</value>\n            </list>\n        </property>\n\n        \x3c!--\u6307\u5b9a\u5c06\u8981\u5e94\u7528\u5230\u76ee\u6807\u5bf9\u8c61\u7684\u62e6\u622a\u5668\u3001Advice\u6216\u8005Advisor\u7b49--\x3e\n        <property name="interceptorNames">\n            <list>\n                <value>taskThrowsAdvice</value>\n            </list>\n        </property>\n    </bean>\n\n    <bean class="org.springframework.aop.framework.autoproxy.BeanNameAutoProxyCreator">\n        <property name="beanNames">\n            \x3c!--\u4f7f\u7528*\u53f7\u8fdb\u884c\u901a\u914d--\x3e\n            <list>\n                <value>mockTask*</value>\n                <value>fakeTask*</value>\n            </list>\n        </property>\n        <property name="interceptorNames">\n            <list>\n                <value>performanceInterceptor</value>\n            </list>\n        </property>\n    </bean>\n\n    <bean class="org.springframework.aop.framework.autoproxy.BeanNameAutoProxyCreator">\n        <property name="beanNames">\n            \x3c!--\u5bf9\u4e8e*\u901a\u914d\u7b26\u7684\u60c5\u51b5\u4e0b\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528\u9017\u53f7\u9694\u5f00--\x3e\n            <list>\n                <value>target*,*Task,*service</value>\n            </list>\n        </property>\n        <property name="interceptorNames">\n            <list>\n                <value>performanceInterceptor</value>\n            </list>\n        </property>\n    </bean>\n</beans>\n'))),(0,n.kt)("h3",{id:"defaultadvisorautoproxycreator"},"DefaultAdvisorAutoProxyCreator"),(0,n.kt)("p",null,"\u53ea\u9700\u8981\u5728ApplicationContext\u4e2d\u6ce8\u518cBean\u5373\u53ef\uff0c\u5269\u4e0b\u7684\u4efb\u52a1\u4f1a\u7531DefaultAdvisorAutoProxyCreator\u5b8c\u6210\u3002\u5c06\u5176\u6ce8\u5165\u5bb9\u5668\u4e4b\u540e\uff0c\u5c06\u4f1a\u81ea\u52a8\u641c\u5bfb\u5bb9\u5668\u5185\u7684\u6240\u6709Advisor\uff0c\u7136\u540e\u6839\u636e\u5404\u4e2aAdvisor\u6240\u63d0\u4f9b\u7684\u62e6\u622a\u4fe1\u606f\uff0c\u4e3a\u7b26\u5408\u6761\u4ef6\u7684\u5bb9\u5668\u4e2d\u7684\u76ee\u6807\u5bf9\u8c61\u751f\u6210\u76f8\u5e94\u7684\u4ee3\u7406\u5bf9\u8c61\u3002"),(0,n.kt)("p",null,"DefaultAdvisorAutoProxyCreator\u53ea\u5bf9Advisor\u6709\u6548\uff0c\u56e0\u4e3a\u53ea\u6709Advisor\u624d\u65e2\u6709Pointcut\u4fe1\u606f\u6355\u6349\u7b26\u5408\u6761\u4ef6\u7684\u76ee\u6807\u5bf9\u8c61\uff0c\u53c8\u6709\u76f8\u5e94\u7684Advice\u3002"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"XML\u914d\u7f6e\u6848\u4f8b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},'<beans>\n    <bean class="org.springframework.aop.framework.autoproxy.DefaultAdvisorAutoProxyCreator">\n        \x3c!--\u8bbe\u7f6e\u5bf9\u8c61\u4f7f\u7528\u57fa\u4e8e\u7c7b\u7684\u4ee3\u7406--\x3e\n        <property name="proxyTargetClass">\n            <value>true</value>\n        </property>\n    </bean>\n\n    <bean id="target1" class="..."/>\n    <bean id="target2" class="..."/>\n\n    <bean id="mockTask" class="..."/>\n    <bean id="fakeTask" class="..."/>\n\n    <bean id="logAdvisor" class="org.springframework.aop.support.DefaultPointcutAdvisor">\n        <property name="pointcut">\n            ...\n        </property>\n        <property name="advice">\n            <bean id="performanceInterceptor"\n                  class="org.springframework.mylearntest.aop.advice.perclass.PerformanceMethodInterceptor"></bean>\n        </property>\n    </bean>\n\n    <bean id="logAdvisor" class="org.springframework.aop.support.DefaultPointcutAdvisor">\n        <property name="pointcut">\n            ...\n        </property>\n        <property name="advice">\n            <bean id="taskThrowsAdvice" class="...TaskThrowsAdvice"></bean>\n\n        </property>\n    </bean>\n</beans>\n'))),(0,n.kt)("h3",{id:"\u6269\u5c55autoproxycreator"},"\u6269\u5c55AutoProxyCreator"),(0,n.kt)("p",null,"\u53ef\u4ee5\u5728Spring AOP\u63d0\u4f9b\u7684AbstractAutoProxyCreator\u6216\u8005AbstractAdvisorAutoProxyCreator\u57fa\u7840\u4e4b\u4e0a\uff0c\u5b9e\u73b0\u76f8\u5e94\u7684\u5b50\u7c7b\u3002"),(0,n.kt)("p",null,"Sprig AOP\u6846\u67b6\u4e2d\u6709\u5173\u81ea\u52a8\u4ee3\u7406\u7684\u5b9e\u73b0\u67b6\u6784"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u6240\u6709\u7684AutoProxyCreator\u90fd\u662fInstantiationAwareBeanPostProcessor\uff0c\u8fd9\u79cd\u7c7b\u578b\u7684BeanPostProcessor\u4e0e\u666e\u901a\u7684BeanPostProcessor\u6709\u6240\u4e0d\u540c\u3002\u5f53Spring IoC\n\u5bb9\u5668\u68c0\u6d4b\u5230\u6709InstantiationAwareBeanPostProcessor\u7c7b\u578b\u7684BeanPostProcessor\u7684\u65f6\u5019\uff0c\u4f1a\u76f4\u63a5\u901a\u8fc7InstantiationAwareBeanPostProcessor\u4e2d\u7684\u903b\u8f91\u6784\u9020\u5bf9\u8c61\u5b9e\u4f8b\u8fd4\u56de\uff0c\u800c\u4e0d\u4f1a\u8d70\u6b63\u5e38\u7684\u5bf9\u8c61\u5b9e\u4f8b\u5316\u6d41\u7a0b\u3002\u4e5f\u5c31\u662f\u201c\u77ed\u8def\u201d\u3002\u8fd9\u6837AutoProxyCreator\u4f1a\u76f4\u63a5\u6784\u9020\u76ee\u6807\u5bf9\u8c61\u7684\u4ee3\u7406\u5bf9\u8c61\u8fd4\u56de\uff0c\u800c\u4e0d\u662f\u539f\u6765\u7684\u76ee\u6807\u5bf9\u8c61\u3002")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://s2.loli.net/2023/07/15/cFmOoXVuqKtrklU.png",alt:null})),(0,n.kt)("p",null,"AspectJAwareAdvisorAutoProxyCreator\u662fSpring 2.0\u4e4b\u540e\u7684AutoProxyCreator\u5b9e\u73b0\uff0c\u4e5f\u7b97\u662f\u4e00\u4e2aAutoProxyCreator\u7684\u81ea\u5b9a\u4e49\u5b9e\u73b0\u3002\u5b83\u8fd8\u6709\u4e00\u4e2a\u5b50\u7c7bAnnotationAwareAspectJAutoProxyCreator\uff0c\u53ef\u4ee5\u6839\u636eJava5\u7684\u6ce8\u89e3\u6355\u83b7\u4fe1\u606f\u4ee5\u5b8c\u6210\u81ea\u52a8\u4ee3\u7406\u3002"),(0,n.kt)("p",null,"Spring AOP\u8fd8\u652f\u6301\u57fa\u4e8eJakarta Commons Atrributes\u7684\u5143\u6570\u636e\u7684\u81ea\u52a8\u4ee3\u7406\u673a\u5236\uff0c\u6765\u63d0\u4f9b\u62e6\u622a\u4fe1\u606f\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://s2.loli.net/2023/07/15/1qdrvGiXQxtuZA2.png",alt:null})),(0,n.kt)("p",null,"TargetSource\u7684\u4f5c\u7528"),(0,n.kt)("p",null,"TargetSource\u5b83\u662f\u76ee\u6807\u5bf9\u8c61\u7684\u5bb9\u5668\uff0c\u5f53\u6bcf\u4e2a\u9488\u5bf9\u76ee\u6807\u5bf9\u8c61\u7684\u65b9\u6cd5\u8c03\u7528\u7ecf\u8fc7\u5c42\u5c42\u62e6\u622a\u800c\u5230\u8fbe\u8c03\u7528\u94fe\u7684\u7ec8\u70b9\u7684\u65f6\u5019\uff0c\u5c31\u8be5\u8c03\u7528\u76ee\u6807\u5bf9\u8c61\u4e0a\u5b9a\u4e49\u7684\u65b9\u6cd5\u4e86\uff0c\u8fd9\u65f6\u5019\u4e0d\u662f\u76f4\u63a5\u8c03\u7528\u8fd9\u4e2a\u76ee\u6807\u5bf9\u8c61\u4e0a\u7684\u65b9\u6cd5\uff0c\u800c\u662f\u901a\u8fc7\u67d0\u4e2aTargetSource\u4e0e\u5b9e\u9645\u76ee\u6807\u5bf9\u8c61\u4e4b\u95f4\u4ea4\u4e92\uff0c\u7136\u540e\u518d\u8c03\u7528\u4eceTargetSource\u4e2d\u53d6\u5f97\u7684\u76ee\u6807\u5bf9\u8c61\u4e0a\u7684\u76f8\u5e94\u7684\u65b9\u6cd5\u3002"),(0,n.kt)("p",null,"TargetSource\u7684\u7279\u6027"),(0,n.kt)("p",null,"\u6bcf\u6b21\u65b9\u6cd5\u8c03\u7528\u90fd\u4f1a\u89e6\u53d1TargetSource\u7684getTarget()\u65b9\u6cd5\uff0cgetTarget()\u65b9\u6cd5\u5c06\u4ece\u76f8\u5e94\u7684TargetSource\u5b9e\u73b0\u7c7b\u4e2d\u53d6\u5f97\u5177\u4f53\u7684\u76ee\u6807\u5bf9\u8c61\uff0c\u8fd9\u6837\uff0c\u6211\u4eec\u5c31\u53ef\u4ee5\u63a7\u5236\u6bcf\u6b21\u65b9\u6cd5\u8c03\u7528\u4f5c\u7528\u5230\u7684\u5177\u4f53\u5bf9\u8c61\u5b9e\u4f8b\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u63d0\u4f9b\u4e00\u4e2a\u76ee\u6807\u5bf9\u8c61\u6c60\uff0c\u6bcf\u6b21\u4eceTargetSource\u53d6\u5f97\u7684\u76ee\u6807\u5bf9\u8c61\u90fd\u4ece\u8fd9\u4e2a\u76ee\u6807\u5bf9\u8c61\u6c60\u4e2d\u53d6\u5f97\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u8ba9\u4e00\u4e2aTargetSource\u5b9e\u73b0\u7c7b\u6301\u6709\u591a\u4e2a\u76ee\u6807\u5bf9\u8c61\u7684\u5b9e\u4f8b\uff0c\u7136\u540e\u6309\u7167\u67d0\u79cd\u89c4\u5219\uff0c\u5728\u6bcf\u6b21\u65b9\u6cd5\u8c03\u7528\u65f6\uff0c\u8fd4\u56de\u76f8\u5e94\u7684\u76ee\u6807\u5bf9\u8c61\u5b9e\u4f8b\u3002")),(0,n.kt)("p",null,"\u8fd8\u53ef\u4ee5\u8ba9TargetSource\u53ea\u6301\u6709\u4e00\u4e2a\u76ee\u6807\u5bf9\u8c61\uff0c\u901a\u5e38ProxyFactory\u6216\u8005ProyxFactoryBean\u5904\u7406\u76ee\u6807\u5bf9\u8c61\u7684\u65b9\u5f0f\u4e5f\u662f\u5982\u6b64\uff0c\u5b83\u4eec\u5185\u90e8\u4f1a\u6784\u9020\u4e00\u4e2aorg.springframework.aop.target\n.SingletonTargetSource\u5b9e\u4f8b\uff0c\u800cSingletonTargetSource\u5219\u4f1a\u9488\u5bf9\u6bcf\u6b21\u65b9\u6cd5\u8c03\u7528\u8fd4\u56de\u540c\u4e00\u4e2a\u76ee\u6807\u5bf9\u8c61\u7684\u5b9e\u4f8b\u5f15\u7528\u3002"),(0,n.kt)("h2",{id:"targetsource\u5b9e\u73b0\u7c7b"},"TargetSource\u5b9e\u73b0\u7c7b"),(0,n.kt)("h3",{id:"singletontargetsource"},"SingletonTargetSource"),(0,n.kt)("p",null,"org.springframework.aop.target.SingletonTargetSource\u662f\u4f7f\u7528\u6700\u591a\u7684TargetSource\u5b9e\u73b0\u7c7b\uff0c\u867d\u7136\u6211\u4eec\u53ef\u80fd\u5e76\u4e0d\u77e5\u9053\u3002\u56e0\u4e3a\u901a\u8fc7ProxyFactory\u7684setTarget()\u8bbe\u7f6e\u5b8c\u76ee\u6807\u5bf9\u8c61\u4e4b\u540e\uff0cProxyFactory\u5185\u90e8\u4f1a\u81ea\u884c\u4f7f\u7528\u4e00\u4e2aSingletonTargetSource\u5bf9\u8bbe\u7f6e\u7684\u76ee\u6807\u5bf9\u8c61\u8fdb\u884c\u5c01\u88c5\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://s2.loli.net/2023/07/15/fhJjrdlpYBCIxMX.png",alt:null})),(0,n.kt)("h3",{id:"prototypetargetsource"},"PrototypeTargetSource"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"PrototypeTargetSource\u4f7f\u7528"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},'<beans>\n    <bean id="target" class="org.springframework.mylearntest.aop.weaver.baseoninterface.MockTask"\n          scope="prototype"/>\n\n    <bean id="prototypeTargetSource" class="org.springframework.aop.target.PrototypeTargetSource">\n        <property name="targetBeanName">\n            <value>target</value>\n        </property>\n    </bean>\n\n    <bean id="targetProxy" class="org.springframework.aop.framework.ProxyFactoryBean">\n        <property name="targetSource">\n            <ref bean="prototypeTargetSource"/>\n        </property>\n        <property name="interceptorNames">\n            <list>\n                <value>anyInterceptor</value>\n            </list>\n        </property>\n    </bean>\n</beans>\n'))),(0,n.kt)("p",null,"\u76ee\u6807\u5bf9\u8c61\u7684bean\u5b9a\u4e49\u58f0\u660e\u5fc5\u987b\u4e3aprototype\u3002\u901a\u8fc7targetBeanName\u5c5e\u6027\u6307\u5b9a\u76ee\u6807\u5bf9\u8c61\u7684bean\u5b9a\u4e49\u540d\u79f0\uff0c\u800c\u4e0d\u662f\u5f15\u7528\u3002"),(0,n.kt)("h3",{id:"hotswappabletargetsource"},"HotSwappableTargetSource"),(0,n.kt)("p",null,"\u4f7f\u7528HotSwappableTargetSource\u5c01\u5b58\u76ee\u6807\u5bf9\u8c61\uff0c\u53ef\u4ee5\u8ba9\u6211\u4eec\u5728\u5e94\u7528\u7a0b\u5e8f\u8fd0\u884c\u7684\u65f6\u5019\uff0c\u6839\u636e\u67d0\u79cd\u7279\u5b9a\u6761\u4ef6\uff0c\u52a8\u6001\u5730\u66ff\u6362\u76ee\u6807\u5bf9\u8c61\u7c7b\u7684\u5177\u4f53\u5b9e\u73b0\uff0c\u6bd4\u5982\uff0cIService\u6709\u591a\u4e2a\u5b9e\u73b0\u7c7b\uff0c\u5982\u679c\u7a0b\u5e8f\u542f\u52a8\u4e4b\u540e\uff0c\u9ed8\u8ba4\u7684IService\u5b9e\u73b0\u7c7b\u51fa\u73b0\u4e86\u95ee\u9898\uff0c\u6211\u4eec\u53ef\u4ee5\u9a6c\u4e0a\u5207\u6362\u5230Iservice\u7684\u53e6\u4e00\u4e2a\u5b9e\u73b0\u4e0a\uff0c\u800c\u6240\u6709\u8fd9\u4e9b\u5bf9\u4e8e\u8c03\u7528\u8005\u6765\u8bf4\u90fd\u662f\u900f\u660e\u7684\u3002"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"xml\u914d\u7f6e"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="UTF-8"?>\n<beans xmlns="http://www.springframework.org/schema/beans"\n       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n       xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd">\n\n    <bean id="task" class="org.springframework.mylearntest.aop.weaver.baseoninterface.MockTask">\n\n    </bean>\n\n    <bean id="hotSwapTargetSource" class="org.springframework.aop.target.HotSwappableTargetSource">\n        <constructor-arg>\n            <ref bean="task"/>\n        </constructor-arg>\n    </bean>\n\n    <bean id="taskProxy" class="org.springframework.aop.framework.ProxyFactoryBean">\n        <property name="targetSource" ref="hotSwapTargetSource"/>\n        <property name="interceptorNames">\n            <list>\n                <value>performanceMethodInterceptor</value>\n            </list>\n        </property>\n    </bean>\n\n    <bean id="performanceMethodInterceptor"\n          class="org.springframework.mylearntest.aop.advice.perclass.PerformanceMethodInterceptor"/>\n\n</beans>\n'))),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Test4HotSwappableTargetSource"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'package org.springframework.mylearntest.aop.weaver.hotswaptargetsource;\n\nimport org.junit.Assert;\nimport org.springframework.aop.framework.Advised;\nimport org.springframework.aop.target.HotSwappableTargetSource;\nimport org.springframework.context.ApplicationContext;\nimport org.springframework.context.support.ClassPathXmlApplicationContext;\nimport org.springframework.mylearntest.aop.weaver.baseoninterface.ITask;\n\nimport java.util.Date;\n\n/**\n * @Author: whalefall\n * @Date: 2020/7/26 19:47\n */\npublic class Test4HotSwappableTargetSource {\n    public static void main(String[] args) throws Exception {\n        ApplicationContext context = new ClassPathXmlApplicationContext("hotswappabletargetsource\\\\hotSwappableTargetSource.xml");\n        Object proxy = context.getBean("taskProxy");\n        Object initTarget = ((Advised)proxy).getTargetSource().getTarget();\n\n        HotSwappableTargetSource hotSwappableTargetSource = (HotSwappableTargetSource)context.getBean(\n                "hotSwapTargetSource");\n        Object oldTarget = hotSwappableTargetSource.swap(new ITask() {\n            @Override\n            public void execute(Date date) {\n                System.out.println("old target generated by hotSwapTargetSource");\n            }\n        });\n\n        Object newTarget = ((Advised)proxy).getTargetSource().getTarget();\n\n        // initTarget = org.springframework.mylearntest.aop.weaver.baseoninterface.MockTask@72967906\n        // oldTarget = org.springframework.mylearntest.aop.weaver.baseoninterface.MockTask@72967906\n        // newTarget = org.springframework.mylearntest.aop.weaver.hotswaptargetsource\n        // .Test4HotSwappableTargetSource$1@5b8dfcc1\n\n        Assert.assertSame(initTarget, oldTarget);\n        Assert.assertNotSame(initTarget, newTarget);\n    }\n}\n'))),(0,n.kt)("h3",{id:"commonspooltargetsource"},"CommonsPoolTargetSource"),(0,n.kt)("p",null,"\u67d0\u4e9b\u65f6\u5019\uff0c\u6211\u4eec\u53ef\u80fd\u60f3\u8fd4\u56de\u6709\u9650\u6570\u76ee\u7684\u76ee\u6807\u5bf9\u8c61\u5b9e\u4f8b\uff0c\u8fd9\u4e9b\u76ee\u6807\u5bf9\u8c61\u5b9e\u4f8b\u7684\u5730\u4f4d\u662f\u5e73\u7b49\u7684\uff0c\u5c31\u597d\u50cf\u6570\u636e\u5e93\u8fde\u63a5\u6c60\u4e2d\u7684\u90a3\u4e9bConnection\u4e00\u6837\uff0c\u6211\u4eec\u53ef\u4ee5\u63d0\u4f9b\u4e00\u4e2a\u76ee\u6807\u5bf9\u8c61\u7684\u5bf9\u8c61\u6c60\uff0c\u7136\u540e\u8ba9\u67d0\u4e2aTargetSource\u5b9e\u73b0\u6bcf\u6b21\u90fd\u4ece\u8fd9\u4e2a\u5bf9\u8c61\u6c60\u4e2d\u53d6\u5f97\u76ee\u6807\u5bf9\u8c61\u3002"),(0,n.kt)("p",null,"\u5982\u679c\u4e0d\u80fd\u4f7f\u7528Jakarta Commons Pool\uff0c\u90a3\u4e48\u4e5f\u53ef\u4ee5\u901a\u8fc7\u6269\u5c55org.springframework.aop.target.AbstractPoolingTargetSource\u7c7b\uff0c\u5b9e\u73b0\u76f8\u5e94\u7684\u63d0\u4f9b\u5bf9\u8c61\u6c60\u5316\u7684\u529f\u80fd\u7684TargetSource\u3002"),(0,n.kt)("h3",{id:"threadlocaltargetsource"},"ThreadLocalTargetSource"),(0,n.kt)("p",null,"\u5982\u679c\u60f3\u4e3a\u4e0d\u540c\u7684\u7ebf\u7a0b\u8c03\u7528\u63d0\u4f9b\u4e0d\u540c\u7684\u76ee\u6807\u5bf9\u8c61\uff0c\u90a3\u4e48\u53ef\u4ee5\u4f7f\u7528org.springframework.aop.target.ThreadLocalTargetSource\u3002\u5b83\u53ef\u4ee5\u4fdd\u8bc1\u5404\u81ea\u7ebf\u7a0b\u4e0a\u76ee\u6807\u5bf9\u8c61\u7684\u8c03\u7528\uff0c\u53ef\u4ee5\u88ab\u5206\u914d\u5230\u5f53\u524d\u7ebf\u7a0b\u5bf9\u5e94\u7684\u90a3\u4e2a\u76ee\u6807\u5bf9\u8c61\u7684\u5b9e\u4f8b\u4e0a\u3002\u5176\u5b9e\uff0cThreadLocalTargetSource\u65e0\u975e\u5c31\u662f\u5bf9JDK\u6807\u51c6\u7684ThreadLocal\u8fdb\u884c\u4e86\u7b80\u5355\u7684\u5c01\u88c5\u800c\u5df2\u3002"),(0,n.kt)("h3",{id:"\u81ea\u5b9a\u4e49targetsource"},"\u81ea\u5b9a\u4e49TargetSource"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"AlternativeTargetSource"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'package org.springframework.mylearntest.aop.weaver.selfdefinetargetsource;\n\nimport org.springframework.aop.TargetSource;\nimport org.springframework.mylearntest.aop.weaver.baseoninterface.ITask;\n\n/**\n * @Author: whalefall\n * @Date: 2020/7/27 22:27\n */\n@SuppressWarnings("rawtypes")\npublic class AlternativeTargetSource implements TargetSource {\n    private ITask alternativeTask1;\n    private ITask alternativeTask2;\n\n    private int counter;\n\n    public AlternativeTargetSource(ITask task1, ITask task2) {\n        this.alternativeTask1 = task1;\n        this.alternativeTask2 = task2;\n    }\n\n    @Override\n    public Object getTarget() throws Exception {\n        try {\n            if (counter % 2 == 0)\n                return alternativeTask2;\n            else\n                return alternativeTask1;\n        } finally {\n            counter ++;\n        }\n    }\n\n    @Override\n    public  Class getTargetClass() {\n        return ITask.class;\n    }\n\n    @Override\n    public boolean isStatic() {\n        return false;\n    }\n\n    @Override\n    public void releaseTarget(Object arg0) throws Exception {\n\n    }\n}\n'))),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Test4AlternativeTargetSource"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'package org.springframework.mylearntest.aop.weaver.selfdefinetargetsource;\n\nimport org.springframework.aop.TargetSource;\nimport org.springframework.aop.framework.ProxyFactory;\nimport org.springframework.mylearntest.aop.weaver.baseoninterface.ITask;\n\nimport java.util.Date;\n\n/**\n * @Author: whalefall\n * @Date: 2020/7/27 22:33\n */\npublic class Test4AlternativeTargetSource {\n    public static void main(String[] args) {\n        ITask task1 = new ITask() {\n            @Override\n            public void execute(Date date) {\n                System.out.println("execute in Task1");\n            }\n        };\n\n        ITask task2 = new ITask() {\n            @Override\n            public void execute(Date date) {\n                System.out.println("execute in Task2");\n            }\n        };\n\n        ProxyFactory pf = new ProxyFactory();\n        TargetSource targetSource = new AlternativeTargetSource(task1, task2);\n        pf.setTargetSource(targetSource);\n        Object proxy = pf.getProxy();\n        for (int i = 0; i < 100; i++) {\n            ((ITask)proxy).execute(new Date());\n        }\n    }\n}\n'))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u53c2\u8003\u8d44\u6599"),(0,n.kt)("ol",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ol"},"\u4e66\u7c4d\u540d\u79f0\uff1aSpring\u63ed\u79d8 \u4f5c\u8005\uff1a\u738b\u798f\u5f3a"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/spring-projects/spring-framework.git"},"https://github.com/spring-projects/spring-framework.git")))),(0,n.kt)("admonition",{title:"\u534f\u8bae",type:"tip"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u672c\u4f5c\u54c1\u4ee3\u7801\u90e8\u5206\u91c7\u7528 ",(0,n.kt)("a",{parentName:"p",href:"https://www.apache.org/licenses/LICENSE-2.0"},"Apache 2.0\u534f\u8bae"),"\u8fdb\u884c\u8bb8\u53ef\u3002\u9075\u5faa\u8bb8\u53ef\u7684\u524d\u63d0\u4e0b\uff0c\u4f60\u53ef\u4ee5\u81ea\u7531\u5730\u5bf9\u4ee3\u7801\u8fdb\u884c\u4fee\u6539\uff0c\u518d\u53d1\u5e03\uff0c\u53ef\u4ee5\u5c06\u4ee3\u7801\u7528\u4f5c\u5546\u4e1a\u7528\u9014\u3002\u4f46\u8981\u6c42\u4f60\uff1a"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u7f72\u540d"),"\uff1a\u5728\u539f\u6709\u4ee3\u7801\u548c\u884d\u751f\u4ee3\u7801\u4e2d\uff0c\u4fdd\u7559\u539f\u4f5c\u8005\u7f72\u540d\u53ca\u4ee3\u7801\u6765\u6e90\u4fe1\u606f\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u4fdd\u7559\u8bb8\u53ef\u8bc1"),"\uff1a\u5728\u539f\u6709\u4ee3\u7801\u548c\u884d\u751f\u4ee3\u7801\u4e2d\uff0c\u4fdd\u7559Apache 2.0\u534f\u8bae\u6587\u4ef6\u3002"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u672c\u4f5c\u54c1\u6587\u6863\u90e8\u5206\u91c7\u7528",(0,n.kt)("a",{parentName:"p",href:"http://creativecommons.org/licenses/by/4.0/"},"\u77e5\u8bc6\u5171\u4eab\u7f72\u540d 4.0 \u56fd\u9645\u8bb8\u53ef\u534f\u8bae"),"\u8fdb\u884c\u8bb8\u53ef\u3002 \u9075\u5faa\u8bb8\u53ef\u7684\u524d\u63d0\u4e0b\uff0c\u4f60\u53ef\u4ee5\u81ea\u7531\u5730\u5171\u4eab\uff0c\u5305\u62ec\u5728\u4efb\u4f55\u5a92\u4ecb\u4e0a\u4ee5\u4efb\u4f55\u5f62\u5f0f\u590d\u5236\u3001\u53d1\u884c\u672c\u4f5c\u54c1\uff0c\u4ea6\u53ef\u4ee5\u81ea\u7531\u5730\u6f14\u7ece\u3001\u4fee\u6539\u3001\u8f6c\u6362\u6216\u4ee5\u672c\u4f5c\u54c1\u4e3a\u57fa\u7840\u8fdb\u884c\u4e8c\u6b21\u521b\u4f5c\u3002\u4f46\u8981\u6c42\u4f60\uff1a"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u7f72\u540d"),"\uff1a\u5e94\u5728\u4f7f\u7528\u672c\u6587\u6863\u7684\u5168\u90e8\u6216\u90e8\u5206\u5185\u5bb9\u65f6\u5019\uff0c\u6ce8\u660e\u539f\u4f5c\u8005\u53ca\u6765\u6e90\u4fe1\u606f\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u975e\u5546\u4e1a\u6027\u4f7f\u7528"),"\uff1a\u4e0d\u5f97\u7528\u4e8e\u5546\u4e1a\u51fa\u7248\u6216\u5176\u4ed6\u4efb\u4f55\u5e26\u6709\u5546\u4e1a\u6027\u8d28\u7684\u884c\u4e3a\u3002\u5982\u9700\u5546\u4e1a\u4f7f\u7528\uff0c\u8bf7\u8054\u7cfb\u4f5c\u8005\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u76f8\u540c\u65b9\u5f0f\u5171\u4eab\u7684\u6761\u4ef6"),"\uff1a\u5728\u672c\u6587\u6863\u57fa\u7840\u4e0a\u6f14\u7ece\u3001\u4fee\u6539\u7684\u4f5c\u54c1\uff0c\u5e94\u5f53\u7ee7\u7eed\u4ee5\u77e5\u8bc6\u5171\u4eab\u7f72\u540d 4.0\u56fd\u9645\u8bb8\u53ef\u534f\u8bae\u8fdb\u884c\u8bb8\u53ef\u3002"))))))}g.isMDXComponent=!0}}]);