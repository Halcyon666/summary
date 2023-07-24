"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3905],{3905:(t,e,r)=>{r.d(e,{Zo:()=>l,kt:()=>m});var n=r(7294);function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){i(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t,e){if(null==t)return{};var r,n,i=function(t,e){if(null==t)return{};var r,n,i={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(i[r]=t[r]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}var c=n.createContext({}),s=function(t){var e=n.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):a(a({},e),t)),r},l=function(t){var e=s(t.components);return n.createElement(c.Provider,{value:e},t.children)},d="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},v=n.forwardRef((function(t,e){var r=t.components,i=t.mdxType,o=t.originalType,c=t.parentName,l=p(t,["components","mdxType","originalType","parentName"]),d=s(r),v=i,m=d["".concat(c,".").concat(v)]||d[v]||u[v]||o;return r?n.createElement(m,a(a({ref:e},l),{},{components:r})):n.createElement(m,a({ref:e},l))}));function m(t,e){var r=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var o=r.length,a=new Array(o);a[0]=v;var p={};for(var c in e)hasOwnProperty.call(e,c)&&(p[c]=e[c]);p.originalType=t,p[d]="string"==typeof t?t:i,a[1]=p;for(var s=2;s<o;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}v.displayName="MDXCreateElement"},7261:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var n=r(7462),i=(r(7294),r(3905));const o={title:"Spring AOP\u4e2d\u7684Aspect",sidebar_label:"Spring AOP\u4e2d\u7684Aspect",sidebar_position:10},a=void 0,p={unversionedId:"Tech/Java/Spring/Spring AOP\u4e2d\u7684Aspect",id:"Tech/Java/Spring/Spring AOP\u4e2d\u7684Aspect",title:"Spring AOP\u4e2d\u7684Aspect",description:"\u672c\u6587\u76f8\u5173\u4ee3\u7801(\u6765\u81ea\u5b98\u65b9\u6e90\u7801spring-test\u6a21\u5757)\u8bf7\u53c2\u89c1spring-framework org.springframework.mylearntest\u5305\u4e0b\u3002",source:"@site/docs/01-Tech/01-Java/02-Spring/Spring AOP\u4e2d\u7684Aspect.md",sourceDirName:"01-Tech/01-Java/02-Spring",slug:"/Tech/Java/Spring/Spring AOP\u4e2d\u7684Aspect",permalink:"/summary/Tech/Java/Spring/Spring AOP\u4e2d\u7684Aspect",draft:!1,editUrl:"https://github.com/Halcyon666/summary/blob/main/docs/01-Tech/01-Java/02-Spring/Spring AOP\u4e2d\u7684Aspect.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"Spring AOP\u4e2d\u7684Aspect",sidebar_label:"Spring AOP\u4e2d\u7684Aspect",sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Spring AOP\u4e2d\u7684Advice",permalink:"/summary/Tech/Java/Spring/Spring AOP\u4e2d\u7684Advice"},next:{title:"Spring AOP\u7684\u7ec7\u5165",permalink:"/summary/Tech/Java/Spring/Spring AOP\u7684\u7ec7\u5165"}},c={},s=[{value:"PointcutAdvisor",id:"pointcutadvisor",level:2},{value:"DefaultPointcutAdvisor",id:"defaultpointcutadvisor",level:3},{value:"NameMatchMethodPointcutAdvisor",id:"namematchmethodpointcutadvisor",level:3},{value:"RegexpMethodPointcutAdvisor",id:"regexpmethodpointcutadvisor",level:4},{value:"DefaultBeanFactoryPointcutAdvisor",id:"defaultbeanfactorypointcutadvisor",level:3},{value:"IntroductionAdvisor",id:"introductionadvisor",level:3},{value:"Order",id:"order",level:3}],l={toc:s},d="wrapper";function u(t){let{components:e,...r}=t;return(0,i.kt)(d,(0,n.Z)({},l,r,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u672c\u6587\u76f8\u5173\u4ee3\u7801(\u6765\u81ea",(0,i.kt)("a",{parentName:"p",href:"https://github.com/spring-projects/spring-framework.git",title:"\u5b98\u65b9\u6e90\u7801"},"\u5b98\u65b9\u6e90\u7801"),"spring-test\u6a21\u5757)\u8bf7\u53c2\u89c1",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Halcyon666/spring-framework-modified/tree/main/spring-test"},"spring-framework")," org.springframework.mylearntest\u5305\u4e0b\u3002"),(0,i.kt)("p",null,"Aspect\u662f\u5bf9\u7cfb\u7edf\u4e2d\u7684\u6a2a\u5207\u5173\u6ce8\u70b9\u903b\u8f91\u8fdb\u884c\u6a21\u5757\u5316\u5c01\u88c5\u7684AOP\u7684\u6982\u5ff5\u5b9e\u4f53\u3002\u901a\u5e38\u60c5\u51b5\u4e0b\uff0cAspect\u53ef\u4ee5\u5305\u542b\u591a\u4e2aPointcut\u4ee5\u53ca\u76f8\u5173Advice\u5b9a\u4e49\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://s2.loli.net/2023/07/15/9p6abQqSsHTxLFX.png",alt:null})),(0,i.kt)("p",null,"Advisor\u4ee3\u8868Spring\u4e2d\u7684Aspect\uff0c\u4f46\u662f\u4e0e\u6b63\u5e38\u7684Aspect\u4e0d\u540c\uff0cAdvisor\u901a\u5e38\u53ea\u6301\u6709\u4e00\u4e2aPointcut\u548c\u4e00\u4e2aAdvice\u3002\u800c\u7406\u8bba\u4e0a\uff0cAspect\u5b9a\u4e49\u4e2d\u53ef\u4ee5\u6709\u591a\u4e2aPointcut\u548c\u591a\u4e2aAdvice\uff0c\u6240\u4ee5Advisor\u662f\u4e00\u79cd\u7279\u6b8a\u7684Aspect\u3002"),(0,i.kt)("h2",{id:"pointcutadvisor"},"PointcutAdvisor"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://s2.loli.net/2023/07/15/Iy3GrnFvNWlB92k.png",alt:null})),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://s2.loli.net/2023/07/15/yqwr2TXstDvE4YM.png",alt:null})),(0,i.kt)("p",null,"\u5b9e\u9645\u4e0a\uff0corg.springframework.aop.PointcutAdvisor\u624d\u662f\u771f\u6b63\u5b9a\u4e49\u7684\u6709\u4e00\u4e2aPointcut\u548c\u4e00\u4e2aAdvice\u7684Advisor\uff0c\u5927\u90e8\u5206\u7684Advisor\u5b9e\u73b0\u5168\u90e8\u662f\u5728PointcutAdvisor\u4e0b\u7684\u3002"),(0,i.kt)("h3",{id:"defaultpointcutadvisor"},"DefaultPointcutAdvisor"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'<beans>\n    <bean id="pointcut"\n      class="org.springframework.mylearntest.aop.pointcut.selfdefinepointcut.QueryMethodPointcut"/>\n    <bean id="advice" class="org.springframework.mylearntest.aop.advice.perclass.DiscountMethodInterceptor"/>\n\n    <bean id="advisor" class="org.springframework.aop.support.DefaultPointcutAdvisor">\n        <property name="pointcut" ref="pointcut"/>\n        <property name="advice" ref="advice"/>\n    </bean>\n</beans>\n')),(0,i.kt)("h3",{id:"namematchmethodpointcutadvisor"},"NameMatchMethodPointcutAdvisor"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u6b64\u7c7b\u5185\u90e8\u6301\u6709\u4e00\u4e2aNameMatchMethodPointcut\u7c7b\u578b\u7684Pointcut\u5b9e\u4f8b\u3002\u5f53\u901a\u8fc7NameMatchMethodPointcutAdvisor\u516c\u5f00\u7684setMappedName\u548csetMappedNames\u65b9\u6cd5\u8bbe\u7f6e\u5c06\u8981\u88ab\u62e6\u622a\u7684\u65b9\u6cd5\u540d\u7684\u65f6\u5019\uff0c\u5b9e\u9645\u4e0a\u662f\u5728\u64cd\u4f5cNameMatchMethodPointcutAdvisor\u5185\u90e8\u7684NameMatchMethodPointcut\u5b9e\u4f8b\u3002")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'Advice advice = new DiscountMethodInterceptor();\nNameMatchMethodPointcutAdvisor advisor = new NameMatchMethodPointcutAdvisor(advice);\nadvisor.setMappedName("invoke");\n')),(0,i.kt)("h4",{id:"regexpmethodpointcutadvisor"},"RegexpMethodPointcutAdvisor"),(0,i.kt)("p",null,"\u53ea\u80fd\u901a\u8fc7\u6b63\u5219\u8868\u8fbe\u5f0f\u4e3a\u5176\u8bbe\u7f6e\u76f8\u5e94\u7684Pointcut\uff0c\u5185\u90e8\u6301\u6709\u4e00\u4e2aAbstractRegexpMethodPointcut\u7684\u5b9e\u4f8b\u3002AbstractRegexpMethodPointcut\u6709\u4e24\u4e2a\u5b9e\u73b0\u7c7b\uff0cPerl5RegexpMethodPointcutAdvisor\u548cJdkRegexpMethodPointcut\u3002\u9ed8\u8ba4\u4f7f\u7528JdkRegexpMethodPointcut\uff0c\u5982\u679c\u5f3a\u5236\u4f7f\u7528Perl5RegexpMethodPointcutAdvisor,\u90a3\u4e48\u53ef\u4ee5\u901a\u8fc7RegexpMethodPointcutAdvisor\u7684setPerl5(boolean)\u5b9e\u73b0\u3002"),(0,i.kt)("h3",{id:"defaultbeanfactorypointcutadvisor"},"DefaultBeanFactoryPointcutAdvisor"),(0,i.kt)("p",null,"DefaultBeanFactoryPointcutAdvisor\u81ea\u8eab\u7ed1\u5b9a\u5230\u4e86BeanFactory,\u8981\u4f7f\u7528DefaultBeanFactoryPointcutAdvisor\uff0c\u8981\u7ed1\u5b9a\u5230Spring IoC\u5bb9\u5668\u3002\u901a\u8fc7\u5bb9\u5668\u4e2d\u7684Advice\u6ce8\u518c\u7684beanName\u6765\u5173\u8054\u5bf9\u5e94\u7684Advice\u3002\u53ea\u6709\u5f53\u5bf9\u5e94\u7684Pointcut\u5339\u914d\u6210\u529f\u4e4b\u540e\uff0c\u91c7\u53d6\u5b9e\u4f8b\u5316\u5bf9\u5e94\u7684Advice\uff0c\u51cf\u5c11\u4e86\u5bb9\u5668\u542f\u52a8\u521d\u671fAdvisor\u548cAdvice\u4e4b\u95f4\u7684\u8026\u5408\u6027\u3002"),(0,i.kt)("h3",{id:"introductionadvisor"},"IntroductionAdvisor"),(0,i.kt)("p",null,"IntroductionAdvisor\u53ea\u80fd\u5e94\u7528\u4e8e\u7c7b\u7ea7\u522b\u7684\u62e6\u622a\uff0c\u53ea\u80fd\u4f7f\u7528Introduction\u578b\u7684Advice\uff0c\u800c\u4e0d\u80fd\u50cfPointcutAdvisor\u90a3\u6837\uff0c\u53ef\u4ee5\u4f7f\u7528\u4efb\u610f\u7c7b\u578b\u7684Pointcut\uff0c\u4ee5\u53ca\u5dee\u4e0d\u591a\u4efb\u4f55\u7c7b\u578b\u7684Advice\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://s2.loli.net/2023/07/15/8pNE2drJ1BfLn4D.png",alt:"IntroductionAdvisor\u7c7b\u7ed3\u6784\u56fe",title:"IntroductionAdvisor\u7c7b\u7ed3\u6784\u56fe"})),(0,i.kt)("h3",{id:"order"},"Order"),(0,i.kt)("p",null,"\u5927\u591a\u6570\u65f6\u5019\uff0c\u4f1a\u6709\u591a\u4e2a\u5173\u6ce8\u6a2a\u5207\u70b9\uff0c\u90a3\u4e48\uff0c\u7cfb\u7edf\u5b9e\u73b0\u4e2d\u5c31\u4f1a\u6709\u591a\u4e2aAdvisor\u5b58\u5728\u3002\u5f53\u5176\u4e2d\u7684\u67d0\u4e9bAdvisor\u7684Pointcut\u5339\u914d\u4e86\u540c\u4e00\u4e2aJoinpoint\u7684\u65f6\u5019\uff0c\u5c31\u4f1a\u5728\u8fd9\u540c\u4e00\u4e2aJoinpoint\u5904\u6267\u884c\u591a\u4e2aAdvice\u7684\u6a2a\u5207\u903b\u8f91\u3002\u4e00\u65e6\u8fd9\u51e0\u4e2a\u9700\u8981\u5728\u540c\u4e00\u4e2aJoinpoint\u5904\u6267\u884c\u7684Advice\u903b\u8f91\u5b58\u5728\u4f18\u5148\u987a\u5e8f\u4f9d\u8d56\u7684\u8bdd\uff0c\u5c31\u9700\u8981\u6211\u4eec\u6765\u5e72\u9884\u4e86\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://s2.loli.net/2023/07/15/87ohZirCFMmLq46.png",alt:null})),(0,i.kt)("p",null,"Spring\u5728\u5904\u7406\u540c\u4e00Joinpoint\u5904\u7684\u591a\u4e2aAdvisor\u7684\u65f6\u5019\uff0c\u4f1a\u6309\u7167\u6307\u5b9a\u7684\u987a\u5e8f\u6709\u4f18\u5148\u7ea7\u6765\u6267\u884c\u4ed6\u4eec\u3002\u987a\u5e8f\u53f7\u8d8a\u5c0f\uff0c\u4f18\u5148\u7ea7\u8d8a\u9ad8\uff0c\u4f18\u5148\u7ea7\u8d8a\u9ad8\u7684\uff0c\u8d8a\u5148\u88ab\u6267\u884c\u3002(\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cSpring\u4f1a\u6309\u7167\u5b83\u4eec\u7684\u58f0\u660e\u987a\u5e8f\u6765\u5e94\u7528\u5b83\u4eec\uff0c\u6700\u5148\u58f0\u660e\u7684\u987a\u5e8f\u53f7\u6700\u5c0f\u4f46\u4f18\u5148\u7ea7\u6700\u5927\uff0c\u5176\u6b21\u6b21\u4e4b)"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://s2.loli.net/2023/07/15/cnDqxbIEChpBNlz.png",alt:null})),(0,i.kt)("p",null,"\u5404\u4e2aAdvisor\u5b9e\u73b0\u7c7b\uff0c\u5176\u5b9e\u5df2\u7ecf\u5b9e\u73b0\u4e86Order\u63a5\u53e3\u3002\u5728\u4f7f\u7528\u7684\u65f6\u5019\u6211\u4eec\u53ef\u4ee5\u76f4\u63a5\u6307\u5b9a\u5373\u53ef"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'<beans>\n    <bean id="permissionAuthAdvisor" class="...PermissionAuthAdvisor">\n        <property name="order" value="1"/>\n        ...\n    </bean>\n\n    <bean id="exceptionBarrierAdvisor" class="...ExceptionBarrierAdvisor">\n        <property name="order" value="0"/>\n        ...\n    </bean>\n</beans>\n')))}u.isMDXComponent=!0}}]);