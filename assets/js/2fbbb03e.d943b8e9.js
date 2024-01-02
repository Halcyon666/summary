"use strict";(self.webpackChunksummary=self.webpackChunksummary||[]).push([[3923],{8389:(r,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var o=n(5893),t=n(1151);const a={title:"Spring AOP\u7684\u7ec7\u51651",sidebar_label:"Spring AOP\u7684\u7ec7\u51651",sidebar_position:11},s=void 0,i={id:"Java/Spring/Spring AOP\u4e2d\u7684\u7ec7\u51651",title:"Spring AOP\u7684\u7ec7\u51651",description:"\u672c\u6587\u76f8\u5173\u4ee3\u7801(\u6765\u81ea\u5b98\u65b9\u6e90\u7801spring-test\u6a21\u5757)\u8bf7\u53c2\u89c1spring-framework org.springframework.mylearntest\u5305\u4e0b\u3002",source:"@site/docs/01-Java/02-Spring/Spring AOP\u4e2d\u7684\u7ec7\u51651.mdx",sourceDirName:"01-Java/02-Spring",slug:"/Java/Spring/Spring AOP\u4e2d\u7684\u7ec7\u51651",permalink:"/Java/Spring/Spring AOP\u4e2d\u7684\u7ec7\u51651",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:11,frontMatter:{title:"Spring AOP\u7684\u7ec7\u51651",sidebar_label:"Spring AOP\u7684\u7ec7\u51651",sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"Spring AOP\u4e2d\u7684Aspect",permalink:"/Java/Spring/Spring AOP\u4e2d\u7684Aspect"},next:{title:"Spring AOP\u7684\u7ec7\u51652",permalink:"/Java/Spring/Spring AOP\u4e2d\u7684\u7ec7\u51652"}},c={},p=[{value:"\u57fa\u4e8e\u63a5\u53e3\u7684\u4ee3\u7406",id:"\u57fa\u4e8e\u63a5\u53e3\u7684\u4ee3\u7406",level:2},{value:"\u57fa\u4e8e\u7c7b\u4ee3\u7406",id:"\u57fa\u4e8e\u7c7b\u4ee3\u7406",level:2},{value:"Introduction\u7684\u7ec7\u5165",id:"introduction\u7684\u7ec7\u5165",level:2},{value:"ProxyFactory\u672c\u8d28",id:"proxyfactory\u672c\u8d28",level:2},{value:"ProxyFactoryBean\u7684\u672c\u8d28",id:"proxyfactorybean\u7684\u672c\u8d28",level:2},{value:"ProxyFactoryBean\u7684\u4f7f\u7528",id:"proxyfactorybean\u7684\u4f7f\u7528",level:2},{value:"ProxyFactoryBean\u751f\u6210\u4ee3\u7406\u5bf9\u8c61\u6848\u4f8b",id:"proxyfactorybean\u751f\u6210\u4ee3\u7406\u5bf9\u8c61\u6848\u4f8b",level:2}];function l(r){const e={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...r.components},{Details:n}=e;return n||function(r,e){throw new Error("Expected "+(e?"component":"object")+" `"+r+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(e.p,{children:["\u672c\u6587\u76f8\u5173\u4ee3\u7801(\u6765\u81ea",(0,o.jsx)(e.a,{href:"https://github.com/spring-projects/spring-framework.git",title:"\u5b98\u65b9\u6e90\u7801",children:"\u5b98\u65b9\u6e90\u7801"}),"spring-test\u6a21\u5757)\u8bf7\u53c2\u89c1",(0,o.jsx)(e.a,{href:"https://github.com/Halcyon666/spring-framework-modified/tree/main/spring-test",children:"spring-framework"})," org.springframework.mylearntest\u5305\u4e0b\u3002"]}),"\n",(0,o.jsx)(e.p,{children:"AspectJ\u91c7\u7528ajc\u7f16\u8bd1\u5668\u4f5c\u4e3a\u5b83\u7684\u7ec7\u5165\u5668\uff1bJBoss AOP\u4f7f\u7528\u81ea\u5b9a\u4e49\u7684ClassLoader\u4f5c\u4e3a\u5b83\u7684\u7ec7\u5165\u5668\uff1b\u800c\u5728Spring AOP\u4e2d\uff0c\u4f7f\u7528\u7c7borg.springframework.aop.framework.ProxyFactory\u4f5c\u4e3a\u7ec7\u5165\u5668\u3002"}),"\n",(0,o.jsx)(e.p,{children:"\u4f7f\u7528\u65b9\u6cd5:"}),"\n",(0,o.jsxs)(e.ol,{children:["\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsxs)(e.p,{children:["\u4f20\u5165\u9700\u8981\u7ec7\u5165\u7684\u5bf9\u8c61\n",(0,o.jsx)(e.code,{children:"ProxyFactory weaver = new ProxyFactory(target);"})]}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsx)(e.p,{children:"\u5c06\u8981\u5e94\u7528\u5230\u76ee\u6807\u5bf9\u8c61\u7684Advisor\u7ed1\u5b9a\u5230\u7ec7\u5165\u5668\u4e0a"}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"\u5982\u679c\u4e0d\u662fIntroduction\u7684Advice\u7c7b\u578b\uff0cProxy\u5185\u90e8\u5c31\u4f1a\u4e3a\u8fd9\u4e9bAdvice\u6784\u9020\u76f8\u5e94\u7684Advisor\uff0c\u53ea\u4e0d\u8fc7\u5728\u4e3a\u5b83\u4eec\u6784\u9020Advisor\u4e2d\u4f7f\u7528\u7684Pointcut\u4e3aPointcut.TRUE\u3002"}),"\n",(0,o.jsx)(e.li,{children:"\u5982\u679c\u662fIntroduction\u7c7b\u578b\uff0c\u5219\u4f1a\u6839\u636e\u8be5Introduction\u5177\u4f53\u7c7b\u578b\u8fdb\u884c\u533a\u5206\uff1b\u5982\u679c\u662fIntroduction\u7684\u5b50\u7c7b\u5b9e\u73b0\uff0c\u6846\u67b6\u5185\u90e8\u4f1a\u4e3a\u5176\u6784\u9020\u4e00\u4e2aDefaultIntroductionAdvisor\n\uff1b\u5982\u679c\u662fDynamicIntroductionAdvice\u7684\u5b50\u5b9e\u73b0\u7c7b\uff0c\u6846\u67b6\u5185\u90e8\u5c06\u629b\u51faAOPConfigException\u5f02\u5e38(\u56e0\u4e3a\u65e0\u6cd5\u4eceDynamicIntroductionAdvice\u53d6\u5f97\u5fc5\u8981\u7684\u76ee\u6807\u5bf9\u8c61\u4fe1\u606f)"}),"\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.code,{children:"weaver.addAdvisor(advisor);"})}),"\n"]}),"\n",(0,o.jsxs)(e.ol,{start:"3",children:["\n",(0,o.jsxs)(e.li,{children:["\u83b7\u53d6\u4ee3\u7406\u5bf9\u8c61\n",(0,o.jsx)(e.code,{children:"Object proxyObject =  weaver.getProxy();"})]}),"\n"]}),"\n",(0,o.jsx)(e.h2,{id:"\u57fa\u4e8e\u63a5\u53e3\u7684\u4ee3\u7406",children:"\u57fa\u4e8e\u63a5\u53e3\u7684\u4ee3\u7406"}),"\n",(0,o.jsxs)(n,{children:[(0,o.jsx)("summary",{children:"Test4ProxyFactory"}),(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-java",children:'package org.springframework.mylearntest.aop.weaver;\n\nimport org.springframework.aop.framework.ProxyFactory;\nimport org.springframework.aop.support.NameMatchMethodPointcutAdvisor;\n\nimport java.util.Date;\n\n/**\n * @Author: whalefall\n * @Date: 2020/7/15 22:53\n */\n\n@SuppressWarnings({"rawtypes", "Deprecated"})\npublic class Test4ProxyFactory {\n    public static void main(String[] args) {\n        /*// 1. \u4f20\u5165\u9700\u8981\u7ec7\u5165\u7684\u5bf9\u8c61\n        ProxyFactory weaver = new ProxyFactory(new Tester());\n        // weaver.setTarget(new Tester());\n\n        // 2. \u5c06\u8981\u5e94\u7528\u5230\u76ee\u6807\u5bf9\u8c61\u7684Advisor\u7ed1\u5b9a\u5230\u7ec7\u5165\u5668\u4e0a\n        ApplicationContext context = new ClassPathXmlApplicationContext("advisor/defaultadvisor/defaultadvisor.xml");\n        Advisor advisor = (Advisor) context.getBean("advisor");\n        weaver.addAdvisor(advisor);\n\n        Object proxyObject =  weaver.getProxy();\n        System.out.println(proxyObject.getClass());\n        // out: class org.springframework.mylearntest.aop.advice.perinstance.Tester$$EnhancerBySpringCGLIB$$8e739b5b\n        */\n\n        // \u76ee\u6807\u7c7b\u6709\u5b9e\u73b0\u63a5\u53e3\u7684\u7528\u6cd5\n        // \u53ea\u8981\u4e0d\u5c06ProxyFactory\u7684optimize\u548cproxyTargetClass\u8bbe\u7f6e\u4e3atrue\n        // \u90a3\u4e48ProxyFactory\u90fd\u4f1a\u6309\u7167\u9762\u5411\u63a5\u53e3\u8fdb\u884c\u4ee3\u7406\n        MockTask task = new MockTask();\n        ProxyFactory weaver = new ProxyFactory(task);\n        // weaver.setInterfaces(new Class[]{ITask.class});\n        NameMatchMethodPointcutAdvisor advisor = new NameMatchMethodPointcutAdvisor();\n        advisor.setMappedNames("execute");\n        advisor.setAdvice(new PerformanceMethodInterceptor());\n        weaver.addAdvisor(advisor);\n        ITask proxyObj = (ITask)weaver.getProxy();\n        // com.sun.proxy.$Proxy0\n        // System.out.println(proxyObj.getClass());\n        // \u53ea\u80fd\u5f3a\u5236\u8f6c\u5316\u4e3a\u63a5\u53e3\u7c7b\u578b\uff0c\u4e0d\u80fd\u8f6c\u5316\u4e3a\u5b9e\u73b0\u7c7b\u7c7b\u578b \u5426\u5219\u4f1a\u629b\u51faClassCastException\n        // ITask proxyObj = (MockTask)weaver.getProxy();\n        proxyObj.execute(new Date());\n\n    }\n}\n'})})]}),"\n",(0,o.jsx)(e.h2,{id:"\u57fa\u4e8e\u7c7b\u4ee3\u7406",children:"\u57fa\u4e8e\u7c7b\u4ee3\u7406"}),"\n",(0,o.jsxs)(n,{children:[(0,o.jsx)("summary",{children:"TestCGLib"}),(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-java",children:'package org.springframework.mylearntest.aop.weaver.baseonclass;\n\nimport org.springframework.aop.framework.ProxyFactory;\nimport org.springframework.aop.support.NameMatchMethodPointcutAdvisor;\nimport org.springframework.mylearntest.aop.advice.perclass.PerformanceMethodInterceptor;\n\n/**\n * @Author: whalefall\n * @Date: 2020/7/17 23:31\n */\npublic class Test4CGLib {\n    public static void main(String[] args) {\n        ProxyFactory weaver = new ProxyFactory(new Executable());\n        NameMatchMethodPointcutAdvisor advisor = new NameMatchMethodPointcutAdvisor();\n\n        advisor.addMethodName("execute");\n        advisor.setAdvice(new PerformanceMethodInterceptor());\n        weaver.addAdvisor(advisor);\n\n        Executable proxyObject = (Executable)weaver.getProxy();\n        proxyObject.execute();\n        // org.springframework.mylearntest.aop.weaver.baseonclass.Executable$$EnhancerBySpringCGLIB$$37e40619\n        System.out.println("proxyObject class: " + proxyObject.getClass());\n    }\n}\n'})})]}),"\n",(0,o.jsx)(e.p,{children:"\u5982\u679c\u76ee\u6807\u7c7b\u6ca1\u6709\u5b9e\u73b0\u4efb\u4f55\u63a5\u53e3\uff0c\u4e0d\u7ba1proxyTargetClass\u7684\u5c5e\u6027\u662f\u4ec0\u4e48\uff0cProxyFactoy\u4f1a\u91c7\u7528\u57fa\u4e8e\u7c7b\u7684\u4ee3\u7406"}),"\n",(0,o.jsx)(e.p,{children:"\u5982\u679cProxyFactoy\u7684proxyTargetClass\u5c5e\u6027\u503c\u88ab\u8bbe\u7f6e\u4e3atrue\uff0cProxyFactoy\u4f1a\u91c7\u7528\u57fa\u4e8e\u7c7b\u7684\u4ee3\u7406"}),"\n",(0,o.jsx)(e.p,{children:"\u5982\u679cProxyFactoy\u7684optimize\u5c5e\u6027\u88ab\u8bbe\u7f6e\u4e3atrue\uff0cProxyFactory\u4f1a\u91c7\u7528\u57fa\u4e8e\u7c7b\u7684\u4ee3\u7406\u3002"}),"\n",(0,o.jsx)(e.h2,{id:"introduction\u7684\u7ec7\u5165",children:"Introduction\u7684\u7ec7\u5165"}),"\n",(0,o.jsx)(e.p,{children:"Introduction\u53ef\u4ee5\u4e3a\u5df2\u7ecf\u5b58\u5728\u7684\u5bf9\u8c61\u7c7b\u578b\u6dfb\u52a0\u65b0\u7684\u884c\u4e3a\uff0c\u53ea\u80fd\u5e94\u7528\u4e8e\u5bf9\u8c61\u7ea7\u522b\u7684\u62e6\u622a\uff0c\u800c\u4e0d\u662f\u901a\u5e38Advice\u7684\u65b9\u6cd5\u7ea7\u522b\u7684\u62e6\u622a\uff0c\u6240\u4ee5\u5728Introduction\u7684\u7ec7\u5165\u8fc7\u7a0b\u4e2d\uff0c\u4e0d\u9700\u8981\u6307\u5b9aPointcut,\u800c\u53ea\u9700\u8981\u6307\u5b9a\u76ee\u6807\u63a5\u53e3\u7c7b\u578b\u3002"}),"\n",(0,o.jsx)(e.p,{children:"Spring\u7684Introduction\u652f\u6301\u53ea\u80fd\u901a\u8fc7\u63a5\u53e3\u5b9a\u4e49\u4e3a\u5f53\u524d\u5bf9\u8c61\u6dfb\u52a0\u65b0\u7684\u884c\u4e3a\u3002\u6240\u4ee5\uff0c\u6211\u4eec\u9700\u8981\u5728\u7ec7\u5165\u7684\u65f6\u673a\uff0c\u6307\u5b9a\u65b0\u7ec7\u5165\u7684\u63a5\u53e3\u7c7b\u578b\u3002"}),"\n",(0,o.jsxs)(n,{children:[(0,o.jsx)("summary",{children:"Test4Introduction"}),(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-java",children:'package org.springframework.mylearntest.aop.weaver.introduction;\n\nimport org.springframework.aop.framework.ProxyFactory;\nimport org.springframework.mylearntest.aop.advice.perinstance.Developer;\nimport org.springframework.mylearntest.aop.advice.perinstance.IDeveloper;\nimport org.springframework.mylearntest.aop.advice.perinstance.ITester;\nimport org.springframework.mylearntest.aop.advice.perinstance.TesterFeatureIntroductionInterceptor;\n\n/**\n * @Author: whalefall\n * @Date: 2020/7/19 0:02\n */\n\n@SuppressWarnings("rawtypes")\npublic class Test4Introduction {\n    public static void main(String[] args) {\n        ProxyFactory weaver = new ProxyFactory(new Developer());\n        weaver.setInterfaces(new Class[]{IDeveloper.class, ITester.class});\n        TesterFeatureIntroductionInterceptor advice = new TesterFeatureIntroductionInterceptor();\n        weaver.addAdvice(advice);\n        // DefaultIntroductionAdvisor advisor = new DefaultIntroductionAdvisor(advice,advice);\n        // weaver.addAdvisor(advisor);\n\n        Object proxy = weaver.getProxy();\n        ((ITester)proxy).testSoftware();\n        ((IDeveloper)proxy).developSoftware();\n        System.out.println("proxy = " + proxy);\n\n    }\n}\n'})})]}),"\n",(0,o.jsx)(e.h2,{id:"proxyfactory\u672c\u8d28",children:"ProxyFactory\u672c\u8d28"}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.img,{src:"https://s2.loli.net/2023/07/15/PpJEQOIGl7dKtj3.png",alt:""})}),"\n",(0,o.jsx)(e.p,{children:"Spring AOP\u6846\u67b6\u5185\u4f7f\u7528AopProxy\u5bf9\u4f7f\u7528\u7684\u4e0d\u7528\u7684\u4ee3\u7406\u5b9e\u73b0\u673a\u5236\u8fdb\u884c\u4e86\u9002\u5ea6\u7684\u62bd\u8c61\uff0c\u4e3b\u8981\u6709\u9488\u5bf9JDK\u52a8\u6001\u4ee3\u7406\u548cCGLIB\u4e24\u79cd\u673a\u5236\u7684AopProxy\u4e24\u79cd\u5b9e\u73b0\uff0c\u5206\u522b\u662fCglib2AopProxy\u548cJdkDynamicAopProxy\u4e24\u79cd\u5b9e\u73b0\u3002\u52a8\u6001\u4ee3\u7406\u9700\u8981\u901a\u8fc7InvocationHandler\u63d0\u4f9b\u8c03\u7528\u62e6\u622a\uff0c\u6240\u4ee5JdkDynamicAopProxy\u540c\u65f6\u5b9e\u73b0\u4e86InvocationHandler\u63a5\u53e3\u3002\u91c7\u7528\u62bd\u8c61\u5de5\u5382\u6a21\u5f0f\uff0c\u901a\u8fc7org.springframework.aop.framework.AopProxyFactory\u8fdb\u884c\u3002"}),"\n",(0,o.jsxs)(n,{children:[(0,o.jsx)("summary",{children:"AopProxyFactory"}),(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-java",children:"public interface AopProxyFactory {\n    AopProxy createAopProxy(AdvisedSupport config) throws AopConfigException;\n}\n"})})]}),"\n",(0,o.jsx)(e.p,{children:"AopProxyFactory\u6839\u636e\u4f20\u5165\u7684AdvisedSupport\u5b9e\u4f8b\u63d0\u4f9b\u7684\u76f8\u5173\u4fe1\u606f\uff0c\u6765\u51b3\u5b9a\u751f\u6210\u4ec0\u4e48\u7c7b\u578b\u7684AopProxy\uff0c\u5177\u4f53\u7684\u5de5\u4f5c\u7531AopProxyFactory\u5177\u4f53\u7684\u5b9e\u73b0\u7c7b\u6765\u5b8c\u6210\u3002\u5373org.springframework.aop.framework.DefaultAopProxyFactory\u3002"}),"\n",(0,o.jsxs)(n,{children:[(0,o.jsx)("summary",{children:"DefaultAopProxyFactory"}),(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-java",children:'package org.springframework.aop.framework;\n\nimport java.io.Serializable;\nimport java.lang.reflect.Proxy;\n\nimport org.springframework.aop.SpringProxy;\n\n@SuppressWarnings("serial")\npublic class DefaultAopProxyFactory implements AopProxyFactory, Serializable {\n\n    @Override\n    public AopProxy createAopProxy(AdvisedSupport config) throws AopConfigException {\n        // \u5982\u679c\u4f20\u5165\u7684AdvisedSupport\u5b9e\u4f8b\u7684isOptimize\u6216\u8005isProxyTargetClass\u65b9\u6cd5\u8fd4\u56detrue\uff0c\n        // \u6216\u8005\u76ee\u6807\u5bf9\u8c61\u6ca1\u6709\u5b9e\u73b0\u4efb\u4f55\u63a5\u53e3\uff0c\u5219\u91c7\u7528CGLIB\u751f\u6210\u4ee3\u7406\u5bf9\u8c61\uff0c\u5426\u5219\u4f7f\u7528\u52a8\u6001\u4ee3\u7406\u3002\n        if (config.isOptimize() || config.isProxyTargetClass() || hasNoUserSuppliedProxyInterfaces(config)) {\n            Class<?> targetClass = config.getTargetClass();\n            if (targetClass == null) {\n                throw new AopConfigException("TargetSource cannot determine target class: " +\n                        "Either an interface or a target is required for proxy creation.");\n            }\n            if (targetClass.isInterface() || Proxy.isProxyClass(targetClass)) {\n                return new JdkDynamicAopProxy(config);\n            }\n            return new ObjenesisCglibAopProxy(config);\n        }\n        else {\n            return new JdkDynamicAopProxy(config);\n        }\n    }\n\n    private boolean hasNoUserSuppliedProxyInterfaces(AdvisedSupport config) {\n        Class<?>[] ifcs = config.getProxiedInterfaces();\n        return (ifcs.length == 0 || (ifcs.length == 1 && SpringProxy.class.isAssignableFrom(ifcs[0])));\n    }\n\n}\n'})})]}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.img,{src:"https://s2.loli.net/2023/07/15/pW1gjoys6k47dvm.png",alt:""})}),"\n",(0,o.jsx)(e.p,{children:"AdvisedSupport\u662f\u4e00\u4e2a\u751f\u6210\u4ee3\u7406\u5bf9\u8c61\u6240\u9700\u8981\u7684\u4fe1\u606f\u7684\u8f7d\u4f53\u3002"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"\u4e00\u7c7b\u4ee5org.springframework.aop.framework.ProxyConfig\u4e3a\u9996\u7684\uff0c\u8bb0\u8f7d\u751f\u6210\u4ee3\u7406\u5bf9\u8c61\u7684\u63a7\u5236\u4fe1\u606f\uff1b"}),"\n",(0,o.jsx)(e.li,{children:"\u4e00\u7c7b\u4ee5org.springframework.aop.framework.Advised\u4e3a\u9996\uff0c\u627f\u8f7d\u751f\u6210\u4ee3\u7406\u5bf9\u8c61\u7684\u6240\u9700\u8981\u7684\u5fc5\u8981\u4fe1\u606f\uff0c\u6bd4\u5982\u76f8\u5173\u76ee\u6807\u7c7b\u3001Advice\u3001Advisor\u7b49\u3002"}),"\n"]}),"\n",(0,o.jsx)(e.p,{children:"ProxyConfig\u5c31\u662f\u666e\u901a\u7684JavaBean\uff0c\u5b9a\u4e49\u4e86\u4e94\u4e2aboolean\u578b\u7684\u5c5e\u6027\uff0c\u5206\u522b\u63a7\u5236\u5728\u751f\u6210\u4ee3\u7406\u5bf9\u8c61\u7684\u65f6\u5019\uff0c\u5e94\u8be5\u91c7\u53d6\u54ea\u4e9b\u63aa\u65bd\u3002"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"ProxyTargetClass\uff1a\u5982\u679c\u8fd9\u4e2a\u5c5e\u6027\u8bbe\u7f6e\u5982true\uff0c\u5219ProxyFactory\u5c06\u4f1a\u4f7f\u7528CGLIB\u5bf9\u76ee\u6807\u5bf9\u8c61\u8fdb\u884c\u4ee3\u7406\u3002\u9ed8\u8ba4\u503c\u4e3afalse\u3002"}),"\n",(0,o.jsx)(e.li,{children:"optimize\uff1a\u8be5\u5c5e\u6027\u4e3b\u8981\u7528\u4e8e\u544a\u77e5\u4ee3\u7406\u5bf9\u8c61\u662f\u5426\u9700\u8981\u91c7\u53d6\u8fdb\u4e00\u6b65\u7684\u4f18\u5316\u63aa\u65bd\u3002\u5982\u679c\u4ee3\u7406\u5bf9\u8c61\u751f\u6210\u4e4b\u540e\uff0c\u5373\u4f7f\u4e3a\u5176\u6dfb\u52a0\u6216\u8005\u79fb\u9664\u4e86\u76f8\u5e94\u7684\u4ebaAdvice\uff0c\u4ee3\u7406\u5bf9\u8c61\u4e5f\u53ef\u4ee5\u5ffd\u7565\u8fd9\u79cd\u53d8\u52a8\u3002\u5982\u679c\u8fd9\u4e2a\u5c5e\u6027\u8bbe\u7f6e\u5982true\uff0c\u5219ProxyFactory\u5c06\u4f1a\u4f7f\u7528CGLIB\u5bf9\u76ee\u6807\u5bf9\u8c61\u8fdb\u884c\u4ee3\u7406\u3002\u9ed8\u8ba4\u503c\u4e3afalse\u3002"}),"\n",(0,o.jsx)(e.li,{children:"opaque\uff1a\u8be5\u5c5e\u6027\u7528\u4e8e\u63a7\u5236\u751f\u6210\u7684\u4ee3\u7406\u5bf9\u8c61\u662f\u5426\u53ef\u4ee5\u5f3a\u5236\u8f6c\u5316\u4e3aAdvised\uff0c\u9ed8\u8ba4\u503c\u4e3afalse\uff0c\u8868\u793a\u4efb\u4f55\u751f\u6210\u7684\u4ee3\u7406\u5bf9\u8c61\u90fd\u53ef\u4ee5\u5f3a\u5236\u8f6c\u578b\u4e3aAdvised\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7Advised\u67e5\u8be2\u4ee3\u7406\u5bf9\u8c61\u7684\u4e00\u4e9b\u72b6\u6001\u3002"}),"\n",(0,o.jsxs)(e.li,{children:["exposeProxy\uff1a\u8bbe\u7f6eexposeProxy\uff0c\u53ef\u4ee5\u8ba9Spring AOP\u6846\u67b6\u5728\u751f\u6210\u4ee3\u7406\u5bf9\u8c61\u65f6\uff0c\u5c06\u5f53\u524d\u4ee3\u7406\u5bf9\u8c61\u7ed1\u5b9a\u5230ThreadLocal\u3002\u5982\u679c\u76ee\u6807\u5bf9\u8c61\u9700\u8981\u8bbf\u95ee\u5f53\u524d\u4ee3\u7406\u5bf9\u8c61\uff0c\u53ef\u4ee5\u901a\u8fc7",(0,o.jsx)(e.code,{children:"AopContext.currentProxy()"}),"\u62ff\u5230\u4ee3\u7406\u5bf9\u8c61\u3002\u51fa\u4e8e\u6027\u80fd\u65b9\u9762\u8003\u8651\uff0c\u8be5\u5c5e\u6027\u9ed8\u8ba4\u4e3afalse\u3002"]}),"\n",(0,o.jsx)(e.li,{children:"frozen\uff1a\u5982\u679c\u5c06frozen\u8bbe\u7f6e\u4e3atrue\uff0c\u90a3\u4e48\u4e00\u65e6\u9488\u5bf9dialing\u5bf9\u8c61\u751f\u6210\u7684\u5404\u9879\u4fe1\u606f\u914d\u7f6e\u5b8c\u6210\uff0c\u5219\u4e0d\u5bb9\u8bb8\u66f4\u6539\u3002\u6bd4\u5982ProxyFactory\u7684\u8bbe\u7f6e\u5b8c\u6bd5\uff0c\u5e76\u4e14frozen\u4e3atrue\uff0c\u5219\u4e0d\u80fd\u5bf9Advice\u8fdb\u884c\u4efb\u4f55\u53d8\u52a8\uff0c\u8fd9\u6837\u53ef\u4ee5\u4f18\u5316\u4ee3\u7406\u5bf9\u8c61\u7684\u6027\u80fd\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u4e3afalse\u3002"}),"\n"]}),"\n",(0,o.jsx)(e.p,{children:"\u8981\u751f\u6210\u4ee3\u7406\u5bf9\u8c61\uff0c\u53ea\u6709ProxyConfig\u63d0\u4f9b\u7684\u4fe1\u606f\u8fd8\u4e0d\u591f\uff0c\u6211\u4eec\u8fd8\u9700\u8981\u751f\u6210\u4ee3\u7406\u5bf9\u8c61\u7684\u4e00\u4e9b\u5177\u4f53\u4fe1\u606f\uff0c\u6bd4\u5982\uff0c\u8981\u9488\u5bf9\u54ea\u4e9b\u76ee\u6807\u7c7b\u751f\u6210\u4ee3\u7406\u5bf9\u8c61\uff0c\u8981\u4e3a\u4ee3\u7406\u5bf9\u8c61\u52a0\u5165\u4f55\u79cd\u6a2a\u5207\u903b\u8f91\u7b49\uff0c\u8fd9\u4e9b\u4fe1\u606f\u53ef\u4ee5\u901a\u8fc7org.springframework.aop.framework.Advised\u8bbe\u7f6e\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0bSpring AOP\u6846\u67b6\u8fd4\u56de\u7684\u4ee3\u7406\u5bf9\u8c61\u90fd\u53ef\u4ee5\u5f3a\u5236\u8f6c\u578b\u4e3aAdvised\uff0c\u5df2\u67e5\u8be2\u4ee3\u7406\u5bf9\u8c61\u7684\u76f8\u5173\u4fe1\u606f\u3002"}),"\n",(0,o.jsx)(e.p,{children:"\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528Advised\u63a5\u53e3\u8bbf\u95ee\u76f8\u5e94\u4ee3\u7406\u5bf9\u8c61\u6240\u6709\u6301\u6709\u7684Advisor\uff0c\u8fdb\u884c\u6dfb\u52a0Advisor\u3001\u4e00\u5904Advisor\u7b49\u76f8\u5173\u52a8\u4f5c\u3002\u5373\u4f7f\u4ee3\u7406\u5bf9\u8c61\u5df2\u7ecf\u751f\u6210\u5b8c\u6bd5\uff0c\u4e5f\u53ef\u5bf9\u5176\u8fdb\u884c\u64cd\u4f5c\uff0c\u76f4\u63a5\u64cd\u4f5cAdvised\uff0c\u66f4\u591a\u65f6\u5019\u7528\u4e8e\u6d4b\u8bd5\u573a\u666f\uff0c\u53ef\u4ee5\u5e2e\u52a9\u6211\u4eec\u68c0\u67e5\u751f\u6210\u7684\u4ee3\u7406\u5bf9\u8c61\u662f\u5426\u5982\u6240\u671f\u671b\u7684\u90a3\u6837\u3002"}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.img,{src:"https://s2.loli.net/2023/07/15/hHNUgpVWqDFlZIw.png",alt:""})}),"\n",(0,o.jsx)(e.p,{children:"ProxyFactory\u96c6AopProxy\u548cAdvisedSupport\u4e8e\u4e00\u8eab\uff0c\u53ef\u4ee5\u901a\u8fc7AdvisedSupport\u8bbe\u7f6e\u751f\u6210\u4ee3\u7406\u5bf9\u8c61\u6240\u9700\u8981\u7684\u76f8\u5173\u4fe1\u606f\uff0c\u53ef\u4ee5\u901a\u8fc7AopProxy\u751f\u6210\u4ee3\u7406\u5bf9\u8c61\u3002\u4e3a\u4e86\u91cd\u7528\u76f8\u5173\u903b\u8f91\uff0cSpring AOP\u6846\u67b6\u5728\u5b9e\u73b0\u7684\u65f6\u5019\uff0c\u5c06\u4e00\u4e9b\u516c\u7528\u7684\u903b\u8f91\u62bd\u53d6\u5230\u4e86org.springframework.aop.frameworkx.ProxyCreatorSupport\u4e2d\uff0c\u81ea\u8eab\u7ee7\u627f\u4e86AdvisedSupport\uff0c\u6240\u4ee5\u5c31\u80fd\u5177\u6709\u8bbe\u7f6e\u751f\u6210\u4ee3\u7406\u5bf9\u8c61\u6240\u9700\u8981\u7684\u76f8\u5173\u4fe1\u606f\u3002"}),"\n",(0,o.jsx)(e.p,{children:"\u4e3a\u4e86\u7b80\u5316\u751f\u6210\u4e0d\u540c\u7c7b\u578bAopProxy\u7684\u5de5\u4f5c\uff0cProxyCreatorSupport\u5185\u90e8\u6301\u6709\u4e00\u4e2aAopProxyFactory\u5b9e\u4f8b\uff0c\u9ed8\u8ba4\u91c7\u7528\u7684\u662fDefaultAopProxyFactory\u3002"}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.img,{src:"https://s2.loli.net/2023/07/15/TYd9iNmCvOAUcjt.png",alt:""})}),"\n",(0,o.jsx)(e.h2,{id:"proxyfactorybean\u7684\u672c\u8d28",children:"ProxyFactoryBean\u7684\u672c\u8d28"}),"\n",(0,o.jsx)(e.p,{children:"ProxyFactoryBean\u672c\u8d28\u4e0a\u662f\u4e00\u4e2a\u7528\u6765\u4ea7\u751fProxy\u7684FactoryBean\uff0cFactoryBean\u7684\u4f5c\u7528"}),"\n",(0,o.jsx)(e.p,{children:"\u5982\u679c\u67d0\u4e2a\u5bf9\u8c61\u6301\u6709\u67d0\u4e2aFactoryBean\u7684\u5f15\u7528\uff0c\u5b83\u53d6\u5f97\u7684\u4e0d\u662fFactoryBean\u672c\u8eab\uff0c\u800c\u662fFactoryBean\u7684getObject()\u65b9\u6cd5\u8fd4\u56de\u7684\u5bf9\u8c61\u3002\u6240\u4ee5\uff0c\u5982\u679c\u5bb9\u5668\u4e2d\u67d0\u4e2a\u5bf9\u8c61\u4f9d\u8d56\u4e8eProxyFactoryBean\uff0c\u90a3\u4e48\u5b83\u5c06\u4f1a\u4f7f\u7528\u5230ProxyFactoryBean\u7684getObject()\u65b9\u6cd5\u8fd4\u56de\u7684\u4ee3\u7406\u5bf9\u8c61\u3002"}),"\n",(0,o.jsxs)(e.p,{children:["\u8981\u8ba9ProxyFactoryBean\u7684getObject()\u65b9\u6cd5\u8fd4\u56de\u76f8\u5e94\u76ee\u6807\u5bf9\u8c61\u7684\u4ee3\u7406\u5bf9\u8c61\u5176\u5b9e\u5f88\u7b80\u5355\u3002\u56e0\u4e3aProxyFactoryBean\u7ee7\u627f\u4e86ProxyFactory\u5171\u6709\u7684\u7236\u7c7bProxyCreatorSupport\uff0c\u800cProxyCreatorSupport\u57fa\u672c\u4e0a\u5df2\u7ecf\u628a\u8981\u505a\u7684\u4e8b\u60c5(\u8bbe\u7f6e\u76ee\u6807\u5bf9\u8c61\u3001\u914d\u7f6e\u5176\u4ed6\u90e8\u4ef6\u3001\u751f\u6210\u5bf9\u5e94\u7684AopProxy\u7b49)\u5168\u90e8\u5b8c\u6210\u4e86\u3002\u6211\u4eec\u53ea\u7528\u5728ProxyFactoryBean\u7684getObject()\u65b9\u6cd5\u4e2d\u901a\u8fc7\u7236\u7c7b\u7684createAopProxy()\u62ff\u5230\u4ee3\u7406\u5bf9\u8c61\uff0c\u7136\u540e",(0,o.jsx)(e.code,{children:"return AopProxy.getObject()"}),"\u5373\u53ef\u3002"]}),"\n",(0,o.jsxs)(n,{children:[(0,o.jsx)("summary",{children:"getObject()"}),(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-java",children:'public Object getObject() throws BeansException {\n        initializeAdvisorChain();\n        if (isSingleton()) {\n            return getSingletonInstance();\n        }\n        else {\n            if (this.targetName == null) {\n                logger.info("Using non-singleton proxies with singleton targets is often undesirable. " +\n                        "Enable prototype proxies by setting the \'targetName\' property.");\n            }\n            return newPrototypeInstance();\n        }\n    }\n'})})]}),"\n",(0,o.jsx)(e.p,{children:"ProxyBean\u5b9a\u4e49\u4e2d\u8981\u6c42\u8868\u660e\u8fd4\u56de\u7684\u5bf9\u8c61\u662f\u4ee5singleton\u7684scope\u8fd4\u56de\uff0c\u8fd8\u662fprototype\u7684scope\u8fd4\u56de\u3002\u9488\u5bf9\u8fd9\u4e24\u79cd\u60c5\u51b5\u8fd4\u56de\u4e0d\u540c\u7684\u4ee3\u7406\u5bf9\u8c61\uff0c\u4ee5\u6ee1\u8db3FactoryBean\u7684isSingleton()\u65b9\u6cd5\u7684\u8bed\u4e49\u3002"}),"\n",(0,o.jsx)(e.p,{children:"\u5982\u679c\u5c06ProxyFactoryBean\u7684singleton\u5c5e\u6027\u8bbe\u7f6e\u4e3atrue\uff0c\u5219ProxyFactoryBean\u5728\u7b2c\u4e00\u6b21\u751f\u6210\u4ee3\u7406\u5bf9\u8c61\u4e4b\u540e\uff0c\u4f1a\u901a\u8fc7\u5185\u90e8\u5b9e\u4f8b\u53d8\u91cfsingletonInstance(Object\u7c7b\u578b)\u7f13\u5b58\u751f\u6210\u7684\u4ee3\u7406\u5bf9\u8c61\u3002\u4e4b\u540e\u6240\u6709\u7684\u8bf7\u6c42\u90fd\u8fd4\u56de\u8fd9\u4e00\u7f13\u5b58\u5b9e\u4f8b\uff0c\u4ece\u800c\u6ee1\u8db3singleton\u7684\u8bed\u4e49\u3002\u53cd\u4e4b\uff0c\u5982\u679c\u5c06ProxyFactoryBean\u7684singleton\u5c5e\u6027\u8bbe\u7f6e\u4e3afalse\uff0c\u90a3\u4e48\uff0cProxyFactoryBean\u6bcf\u6b21\u90fd\u4f1a\u91cd\u65b0\u68c0\u6d4b\u5404\u9879\u8bbe\u7f6e\uff0c\u5e76\u4e3a\u5f53\u524d\u8c03\u7528\u51c6\u5907\u4e00\u5957\u65b0\u7684\u73af\u5883\uff0c\u7136\u540e\u518d\u6839\u636e\u6700\u65b0\u7684\u73af\u5883\u6570\u636e\uff0c\u8fd4\u56de\u4e00\u4e2a\u65b0\u7684\u4ee3\u7406\u5bf9\u8c61\u3002\u56e0\u6b64\uff0c\u5982\u679csingleton\u5c5e\u6027\u4e3afalse\uff0c\u5728\u751f\u6210\u4ee3\u7406\u5bf9\u8c61\u7684\u6027\u80fd\u4e0a\u5b58\u5728\u635f\u5931\u3002"}),"\n",(0,o.jsx)(e.h2,{id:"proxyfactorybean\u7684\u4f7f\u7528",children:"ProxyFactoryBean\u7684\u4f7f\u7528"}),"\n",(0,o.jsx)(e.p,{children:"\u4e0eProxyFactory\u4e00\u6837\uff0c\u901a\u8fc7ProxyFactoryBean\uff0c\u6211\u4eec\u53ef\u4ee5\u5728\u751f\u6210\u76ee\u6807\u5bf9\u8c61\u7684\u4ee3\u7406\u5bf9\u8c61\u7684\u65f6\u5019\uff0c\u6307\u5b9a\u4f7f\u7528\u57fa\u4e8e\u63a5\u53e3\u7684\u4ee3\u7406\u8fd8\u662f\u57fa\u4e8e\u7c7b\u7684\u4ee3\u7406\u65b9\u5f0f\uff0c\u800c\u4e14\uff0c\u56e0\u4e3a\u5b83\u4eec\u5168\u90e8\u7ee7\u627f\u81ea\u540c\u4e00\u4e2a\u7236\u7c7b\uff0c\u5927\u90e8\u5206\u8bbe\u7f6e\u9879\u76ee\u90fd\u76f8\u540c\u3002ProxyFactoryBean\u5728\u7ee7\u627f\u4e86ProxyCreatorSupport\u7684\u6240\u6709\u914d\u7f6e\u5c5e\u6027\u4e4b\u5916\u8fd8\u6dfb\u52a0\u4e86\u81ea\u5df1\u72ec\u6709\u7684\uff1a"}),"\n",(0,o.jsx)(e.p,{children:"proxyInterfaces\uff1a\u5982\u679c\u6211\u4eec\u8981\u91c7\u7528\u57fa\u4e8e\u63a5\u53e3\u7684\u4ee3\u7406\u65b9\u5f0f\uff0c\u90a3\u83aa\u9700\u8981\u901a\u8fc7\u8be5\u5c5e\u6027\u914d\u7f6e\u76f8\u5e94\u7684\u63a5\u53e3\u7c7b\u578b\uff0c\u901a\u8fc7Collection\u5bf9\u8c61\u4f20\u5165\u914d\u7f6e\u5143\u7d20\u7684\u63a5\u53e3\u4fe1\u606f\u3002ProxyFactoryBean\n\u6709\u4e00\u4e2aautodetectInterfaces\u5c5e\u6027\uff0c\u8be5\u5c5e\u6027\u9ed8\u8ba4\u4e3atrue\uff0c\u5982\u679c\u6ca1\u6709\u660e\u786e\u6307\u5b9a\u8981\u4ee3\u7406\u7684\u63a5\u53e3\u7c7b\u578b\uff0cProxyFactoryBean\u4f1a\u81ea\u52a8\u68c0\u6d4b\u76ee\u6807\u5bf9\u8c61\u5b9e\u73b0\u7684\u63a5\u53e3\u7c7b\u578b\u5e76\u8fdb\u884c\u4ee3\u7406\u3002"}),"\n",(0,o.jsxs)(e.p,{children:["interceptorNames\uff1a\u901a\u8fc7\u8be5\u5c5e\u6027\uff0c\u6211\u4eec\u53ef\u4ee5\u6307\u5b9a\u591a\u4e2a\u5c06\u8981\u7ec7\u5165\u5230\u76ee\u6807\u5bf9\u8c61\u7684Advice\u3001\u62e6\u622a\u5668\u4ee5\u53caAdvisor\uff0c\u800c\u518d\u4e5f\u4e0d\u901a\u8fc7ProxyFactory\u90a3\u6837\u7684addAdvice\u6216\u8005addAdvisor\n\u65b9\u6cd5\u6dfb\u52a0\uff0c\u901a\u5e38\u6211\u4eec\u4f1a\u4f7f\u7528\u914d\u7f6e\u5143\u7d20",(0,o.jsx)(e.code,{children:"<list>"}),"\u6dfb\u52a0\u9700\u8981\u7684\u62e6\u622a\u5668\u540d\u79f0\u3002"]}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"\u5982\u679c\u6ca1\u6709\u8bbe\u7f6e\u76ee\u6807\u5bf9\u8c61\uff0c\u90a3\u4e48\u53ef\u4ee5\u5728interceptorNames\u7684\u6700\u540e\u4e00\u4e2a\u5143\u7d20\u7684\u4f4d\u7f6e\uff0c\u653e\u7f6e\u5bf9\u8c61\u7684Bean\u5b9a\u4e49\u540d\u79f0\u3002\u5efa\u8bae\u76f4\u63a5\u5b9a\u4e49\u76ee\u6807\u5bf9\u8c61\u3002"}),"\n",(0,o.jsx)(e.li,{children:"\u901a\u8fc7\u6307\u5b9a\u7684interceptorNames\u67d0\u4e2a\u5143\u7d20\u540d\u79f0\u4e4b\u540e\u6dfb\u52a0*\u901a\u914d\u7b26\uff0c\u53ef\u4ee5\u8ba9ProxyFactoryBean\u5728\u5bb9\u5668\u4e2d\u641c\u7d22\u7b26\u5408\u6761\u4ef6\u7684\u6240\u6709Advisro\u5e76\u5e94\u7528\u5230\u76ee\u6807\u5bf9\u8c61\u3002"}),"\n"]}),"\n",(0,o.jsx)(e.p,{children:"\u4f7f\u7528\u901a\u914d\u7b26\u7684\u8303\u4f8b"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-xml",children:'<beans>\n    <bean id="proxy" class="org.springframework.aop.framework.ProxyFactoryBean">\n        <property name="target" ref="..."/>\n        <property name="interceptorNames">\n            <list>\n                <value>global*</value>\n            </list>\n        </property>\n    </bean>\n\n    <bean id="global_debug" class="org.springframework.aop.interceptor.DebugInterceptor"/>\n    <bean id="global_performance" class="org.springframework.aop.interceptor.PerformanceMonitorInterceptor">\n</beans>\n'})}),"\n",(0,o.jsx)(e.p,{children:"singleton\uff1aProxyFactoryBean\u672c\u8d28\u4e0a\u662f\u4e00\u4e2aFactoryBean\uff0c\u6240\u4ee5\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7singleton\u5c5e\u6027\uff0c\u6307\u5b9agetObject\u8c03\u7528\u662f\u8fd4\u56de\u540c\u4e00\u4e2a\u4ee3\u7406\u5bf9\u8c61\u8fd8\u662f\u65b0\u7684\u3002"}),"\n",(0,o.jsx)(e.h2,{id:"proxyfactorybean\u751f\u6210\u4ee3\u7406\u5bf9\u8c61\u6848\u4f8b",children:"ProxyFactoryBean\u751f\u6210\u4ee3\u7406\u5bf9\u8c61\u6848\u4f8b"}),"\n",(0,o.jsxs)(n,{children:[(0,o.jsx)("summary",{children:"\u914d\u7f6e\u6587\u4ef6"}),(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-xml",children:'<beans xmlns="http://www.springframework.org/schema/beans"\n       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n       xmlns:context="http://www.springframework.org/schema/context"\n       xsi:schemaLocation="http://www.springframework.org/schema/beans\n        http://www.springframework.org/schema/beans/spring-beans-2.5.xsd\n        http://www.springframework.org/schema/context\n        http://www.springframework.org/schema/context/spring-context-2.5.xsd">\n\n    \x3c!--    \u76ee\u6807\u5bf9\u8c61\u7684Bean\u5b9a\u4e49--\x3e\n    <bean id="task"\n          class="org.springframework.mylearntest.aop.weaver.baseoninterface.MockTask" scope="prototype"/>\n\n    \x3c!--    ProxyFactoryBean\u5b9a\u4e49--\x3e\n    <bean id="introducedTask" class="org.springframework.aop.framework.ProxyFactoryBean" scope="prototype">\n        <property name="targetName">\n            <value>task</value>\n        </property>\n        <property name="proxyInterfaces">\n            <list>\n                <value>org.springframework.mylearntest.aop.weaver.baseoninterface.ITask</value>\n                <value>org.springframework.mylearntest.aop.weaver.proxyfactorybean.ICounter</value>\n            </list>\n        </property>\n        <property name="interceptorNames">\n            <list>\n                <value>introductionInterceptor</value>\n            </list>\n        </property>\n    </bean>\n\n    \x3c!--    introductionInterceptor\u5b9a\u4e49--\x3e\n    <bean id="introductionInterceptor"\n          class="org.springframework.aop.support.DelegatingIntroductionInterceptor" scope="prototype">\n        <constructor-arg>\n            <bean class="org.springframework.mylearntest.aop.weaver.proxyfactorybean.CounterImpl"/>\n        </constructor-arg>\n    </bean>\n\n</beans>\n'})})]}),"\n",(0,o.jsxs)(n,{children:[(0,o.jsx)("summary",{children:"ICounter"}),(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-java",children:"package org.springframework.mylearntest.aop.weaver.proxyfactorybean;\n\n/**\n * @Author: whalefall\n * @Date: 2020/7/22 23:34\n */\npublic interface ICounter {\n    void resetCounter();\n    int getCounter();\n}\n"})})]}),"\n",(0,o.jsxs)(n,{children:[(0,o.jsx)("summary",{children:"CounterImpl"}),(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-java",children:"package org.springframework.mylearntest.aop.weaver.proxyfactorybean;\n\n/**\n * @Author: whalefall\n * @Date: 2020/7/22 23:35\n */\npublic class CounterImpl implements ICounter{\n    private int counter;\n\n    @Override\n    public void resetCounter() {\n        counter = 0;\n    }\n\n    @Override\n    public int getCounter() {\n        counter ++;\n        return counter;\n    }\n}\n"})})]}),"\n",(0,o.jsxs)(n,{children:[(0,o.jsx)("summary",{children:"TestProxyFactoryBean"}),(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-java",children:'package org.springframework.mylearntest.aop.weaver.proxyfactorybean;\n\nimport org.springframework.aop.support.DelegatingIntroductionInterceptor;\nimport org.springframework.context.ApplicationContext;\nimport org.springframework.context.support.ClassPathXmlApplicationContext;\n\n/**\n * @Author: whalefall\n * @Date: 2020/7/22 23:51\n * @see DelegatingIntroductionInterceptor\n */\npublic class Test4ProxyFactoryBean {\n    public static void main(String[] args) {\n        ApplicationContext context = new ClassPathXmlApplicationContext("proxyfactorybean\\\\proxyfactorybean.xml");\n        Object proxy1 = context.getBean("introducedTask");\n        Object proxy2 = context.getBean("introducedTask");\n\n        System.out.println(((ICounter)proxy1).getCounter());//1\n        System.out.println(((ICounter)proxy1).getCounter());//2\n        System.out.println(((ICounter)proxy2).getCounter());//1\n    }\n}\n'})})]}),"\n",(0,o.jsxs)(e.blockquote,{children:["\n",(0,o.jsx)(e.p,{children:"\u53c2\u8003\u8d44\u6599"}),"\n",(0,o.jsxs)(e.ol,{children:["\n",(0,o.jsx)(e.li,{children:"\u4e66\u7c4d\u540d\u79f0\uff1aSpring\u63ed\u79d8 \u4f5c\u8005\uff1a\u738b\u798f\u5f3a"}),"\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.a,{href:"https://github.com/spring-projects/spring-framework.git",children:"https://github.com/spring-projects/spring-framework.git"})}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(e.admonition,{title:"\u534f\u8bae",type:"tip",children:(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsxs)(e.p,{children:["\u672c\u4f5c\u54c1\u4ee3\u7801\u90e8\u5206\u91c7\u7528 ",(0,o.jsx)(e.a,{href:"https://www.apache.org/licenses/LICENSE-2.0",children:"Apache 2.0\u534f\u8bae"}),"\u8fdb\u884c\u8bb8\u53ef\u3002\u9075\u5faa\u8bb8\u53ef\u7684\u524d\u63d0\u4e0b\uff0c\u4f60\u53ef\u4ee5\u81ea\u7531\u5730\u5bf9\u4ee3\u7801\u8fdb\u884c\u4fee\u6539\uff0c\u518d\u53d1\u5e03\uff0c\u53ef\u4ee5\u5c06\u4ee3\u7801\u7528\u4f5c\u5546\u4e1a\u7528\u9014\u3002\u4f46\u8981\u6c42\u4f60\uff1a"]}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.strong,{children:"\u7f72\u540d"}),"\uff1a\u5728\u539f\u6709\u4ee3\u7801\u548c\u884d\u751f\u4ee3\u7801\u4e2d\uff0c\u4fdd\u7559\u539f\u4f5c\u8005\u7f72\u540d\u53ca\u4ee3\u7801\u6765\u6e90\u4fe1\u606f\u3002"]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.strong,{children:"\u4fdd\u7559\u8bb8\u53ef\u8bc1"}),"\uff1a\u5728\u539f\u6709\u4ee3\u7801\u548c\u884d\u751f\u4ee3\u7801\u4e2d\uff0c\u4fdd\u7559Apache 2.0\u534f\u8bae\u6587\u4ef6\u3002"]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsxs)(e.p,{children:["\u672c\u4f5c\u54c1\u6587\u6863\u90e8\u5206\u91c7\u7528",(0,o.jsx)(e.a,{href:"http://creativecommons.org/licenses/by/4.0/",children:"\u77e5\u8bc6\u5171\u4eab\u7f72\u540d 4.0 \u56fd\u9645\u8bb8\u53ef\u534f\u8bae"}),"\u8fdb\u884c\u8bb8\u53ef\u3002 \u9075\u5faa\u8bb8\u53ef\u7684\u524d\u63d0\u4e0b\uff0c\u4f60\u53ef\u4ee5\u81ea\u7531\u5730\u5171\u4eab\uff0c\u5305\u62ec\u5728\u4efb\u4f55\u5a92\u4ecb\u4e0a\u4ee5\u4efb\u4f55\u5f62\u5f0f\u590d\u5236\u3001\u53d1\u884c\u672c\u4f5c\u54c1\uff0c\u4ea6\u53ef\u4ee5\u81ea\u7531\u5730\u6f14\u7ece\u3001\u4fee\u6539\u3001\u8f6c\u6362\u6216\u4ee5\u672c\u4f5c\u54c1\u4e3a\u57fa\u7840\u8fdb\u884c\u4e8c\u6b21\u521b\u4f5c\u3002\u4f46\u8981\u6c42\u4f60\uff1a"]}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.strong,{children:"\u7f72\u540d"}),"\uff1a\u5e94\u5728\u4f7f\u7528\u672c\u6587\u6863\u7684\u5168\u90e8\u6216\u90e8\u5206\u5185\u5bb9\u65f6\u5019\uff0c\u6ce8\u660e\u539f\u4f5c\u8005\u53ca\u6765\u6e90\u4fe1\u606f\u3002"]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.strong,{children:"\u975e\u5546\u4e1a\u6027\u4f7f\u7528"}),"\uff1a\u4e0d\u5f97\u7528\u4e8e\u5546\u4e1a\u51fa\u7248\u6216\u5176\u4ed6\u4efb\u4f55\u5e26\u6709\u5546\u4e1a\u6027\u8d28\u7684\u884c\u4e3a\u3002\u5982\u9700\u5546\u4e1a\u4f7f\u7528\uff0c\u8bf7\u8054\u7cfb\u4f5c\u8005\u3002"]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.strong,{children:"\u76f8\u540c\u65b9\u5f0f\u5171\u4eab\u7684\u6761\u4ef6"}),"\uff1a\u5728\u672c\u6587\u6863\u57fa\u7840\u4e0a\u6f14\u7ece\u3001\u4fee\u6539\u7684\u4f5c\u54c1\uff0c\u5e94\u5f53\u7ee7\u7eed\u4ee5\u77e5\u8bc6\u5171\u4eab\u7f72\u540d 4.0\u56fd\u9645\u8bb8\u53ef\u534f\u8bae\u8fdb\u884c\u8bb8\u53ef\u3002"]}),"\n"]}),"\n"]}),"\n"]})})]})}function d(r={}){const{wrapper:e}={...(0,t.a)(),...r.components};return e?(0,o.jsx)(e,{...r,children:(0,o.jsx)(l,{...r})}):l(r)}},1151:(r,e,n)=>{n.d(e,{Z:()=>i,a:()=>s});var o=n(7294);const t={},a=o.createContext(t);function s(r){const e=o.useContext(a);return o.useMemo((function(){return"function"==typeof r?r(e):{...e,...r}}),[e,r])}function i(r){let e;return e=r.disableParentContext?"function"==typeof r.components?r.components(t):r.components||t:s(r.components),o.createElement(a.Provider,{value:e},r.children)}}}]);