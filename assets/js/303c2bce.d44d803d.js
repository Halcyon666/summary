"use strict";(self.webpackChunksummary=self.webpackChunksummary||[]).push([[5077],{6527:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var o=e(1527),i=e(8672);const a={title:"Spring AOP\u4e2d\u7684Pointcut",sidebar_label:"Spring AOP\u4e2d\u7684Pointcut",sidebar_position:8},r=void 0,c={id:"Java/Spring/Spring AOP Pointcut",title:"Spring AOP\u4e2d\u7684Pointcut",description:"\u672c\u6587\u76f8\u5173\u4ee3\u7801(\u6765\u81ea\u5b98\u65b9\u6e90\u7801spring-test\u6a21\u5757)\u8bf7\u53c2\u89c1spring-framework org.springframework.mylearntest\u5305\u4e0b\u3002",source:"@site/docs/01-Java/02-Spring/Spring AOP Pointcut.mdx",sourceDirName:"01-Java/02-Spring",slug:"/Java/Spring/Spring AOP Pointcut",permalink:"/summary/Java/Spring/Spring AOP Pointcut",draft:!1,unlisted:!1,editUrl:"https://github.com/Halcyon666/summary/blob/main/01-Java/02-Spring/Spring AOP Pointcut.mdx",tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"Spring AOP\u4e2d\u7684Pointcut",sidebar_label:"Spring AOP\u4e2d\u7684Pointcut",sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Joinpoint",permalink:"/summary/Java/Spring/Joinpoint"},next:{title:"Spring AOP\u4e2d\u7684Advice",permalink:"/summary/Java/Spring/Spring AOP Advice"}},s={},l=[{value:"NameMatchMethodPointcut",id:"namematchmethodpointcut",level:2},{value:"JdkRegexpMethodPointcut\u548cPerl5RegexpMethodPointcut",id:"jdkregexpmethodpointcut\u548cperl5regexpmethodpointcut",level:2},{value:"AnnotationMatchingPointcut",id:"annotationmatchingpointcut",level:2},{value:"ComposablePointcut",id:"composablepointcut",level:2},{value:"ControlFlowPointcut",id:"controlflowpointcut",level:2}];function p(n){const t={a:"a",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...n.components},{Details:e}=t;return e||function(n,t){throw new Error("Expected "+(t?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:["\u672c\u6587\u76f8\u5173\u4ee3\u7801(\u6765\u81ea",(0,o.jsx)(t.a,{href:"https://github.com/spring-projects/spring-framework.git",title:"\u5b98\u65b9\u6e90\u7801",children:"\u5b98\u65b9\u6e90\u7801"}),"spring-test\u6a21\u5757)\u8bf7\u53c2\u89c1",(0,o.jsx)(t.a,{href:"https://github.com/Halcyon666/spring-framework-modified/tree/main/spring-test",children:"spring-framework"})," org.springframework.mylearntest\u5305\u4e0b\u3002"]}),"\n",(0,o.jsx)(t.p,{children:"\u5982\u679cPointcut\u7c7b\u578b\u4e3aTruePointcut\uff0c\u9ed8\u8ba4\u4f1a\u5bf9\u7cfb\u7edf\u4e2d\u7684\u6240\u6709\u5bf9\u8c61\uff0c\u4ee5\u53ca\u5bf9\u8c61\u4e0a\u6240\u6709\u88ab\u652f\u6301\u7684Joinpoint\u8fdb\u884c\u5339\u914d\u3002"}),"\n",(0,o.jsxs)(e,{children:[(0,o.jsx)("summary",{children:"Pointcut"}),(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-java",children:"package org.springframework.aop;\n\npublic interface Pointcut {\n\n    ClassFilter getClassFilter();\n\n    MethodMatcher getMethodMatcher();\n\n    Pointcut TRUE = TruePointcut.INSTANCE;\n\n}\n"})})]}),"\n",(0,o.jsxs)(e,{children:[(0,o.jsx)("summary",{children:"TruePointcut"}),(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-java",children:'package org.springframework.aop;\n\nimport java.io.Serializable;\n\n@SuppressWarnings("serial")\nfinal class TruePointcut implements Pointcut, Serializable {\n\n    public static final TruePointcut INSTANCE = new TruePointcut();\n\n    private TruePointcut() {\n    }\n\n    @Override\n    public ClassFilter getClassFilter() {\n        return ClassFilter.TRUE;\n    }\n\n    @Override\n    public MethodMatcher getMethodMatcher() {\n        return MethodMatcher.TRUE;\n    }\n\n    private Object readResolve() {\n        return INSTANCE;\n    }\n\n    @Override\n    public String toString() {\n        return "Pointcut.TRUE";\n    }\n\n}\n'})})]}),"\n",(0,o.jsx)(t.p,{children:"ClassFilter\u548cMethodMatcher\u5206\u522b\u7528\u4e8e\u5339\u914d\u5c06\u88ab\u6267\u884c\u7ec7\u5165\u64cd\u4f5c\u7684\u5bf9\u8c61\u4ee5\u53ca\u76f8\u5e94\u7684\u65b9\u6cd5\u3002\u4e4b\u6240\u4ee5\u5c06\u7c7b\u578b\u5339\u914d\u548c\u65b9\u6cd5\u5339\u914d\u5206\u5f00\u5b9a\u4e49\uff0c\u662f\u56e0\u4e3a\u53ef\u4ee5\u91cd\u7528\u4e0d\u540c\u7ea7\u522b\u7684\u5339\u914d\u5b9a\u4e49\uff0c\u5e76\u4e14\u53ef\u4ee5\u5728\u4e0d\u540c\u7ea7\u522b\u6216\u8005\u76f8\u540c\u7ea7\u522b\u4e0a\u8fdb\u884c\u7ec4\u5408\u64cd\u4f5c\uff0c\u6216\u8005\u5f3a\u5236\u8ba9\u67d0\u4e2a\u5b50\u7c7b\u53ea\u8986\u76d6(Override)\u76f8\u5e94\u65b9\u6cd5\u5b9a\u4e49\u7b49\u3002"}),"\n",(0,o.jsxs)(e,{children:[(0,o.jsx)("summary",{children:"ClassFilter"}),(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-java",children:"package org.springframework.aop;\n\n@FunctionalInterface\npublic interface ClassFilter {\n\n    boolean matches(Class<?> clazz);\n\n    ClassFilter TRUE = TrueClassFilter.INSTANCE;\n\n}\n"})})]}),"\n",(0,o.jsxs)(e,{children:[(0,o.jsx)("summary",{children:"MethodMatcher"}),(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-java",children:"package org.springframework.aop;\n\nimport java.lang.reflect.Method;\n\npublic interface MethodMatcher {\n\n    boolean matches(Method method, Class<?> targetClass);\n\n    boolean isRuntime();\n\n    boolean matches(Method method, Class<?> targetClass, Object... args);\n\n    MethodMatcher TRUE = TrueMethodMatcher.INSTANCE;\n\n}\n"})})]}),"\n",(0,o.jsx)(t.p,{children:"\u5f53isRuntime\u8fd4\u56defalse\u65f6\uff0c\u8868\u793a\u4e0d\u4f1a\u8003\u8651\u5177\u4f53Joinpoint\u7684\u65b9\u6cd5\u53c2\u6570\uff0c\u8fd9\u79cd\u7c7b\u578b\u7684MethodMatcher\u79f0\u4e4b\u4e3astaticMethodMatcher\u3002\u56e0\u4e3a\u4e0d\u7528\u6bcf\u6b21\u90fd\u68c0\u67e5\u53c2\u6570\uff0c\u90a3\u4e48\u5bf9\u4e8e\u540c\u6837\u7c7b\u578b\u7684\u65b9\u6cd5\u5339\u914d\u7ed3\u679c\uff0c\u5c31\u53ef\u4ee5\u5728\u6846\u67b6\u5185\u90e8\u7f13\u5b58\u4ee5\u63d0\u9ad8\u6027\u80fd\u3002"}),"\n",(0,o.jsx)(t.p,{children:"\u5f53isRuntime\u8fd4\u56detrue\u65f6\uff0c\u8868\u660eMethodMatcher\u5c06\u4f1a\u6bcf\u6b21\u90fd\u5bf9\u65b9\u6cd5\u8c03\u7528\u7684\u53c2\u6570\u8fdb\u884c\u5339\u914d\u68c0\u67e5\uff0c\u8fd9\u79cd\u7c7b\u578b\u7684MethodMatcher\u79f0\u4e4b\u4e3aDynamicMethodMatcher\u3002\u56e0\u4e3a\u6bcf\u6b21\u90fd\u8981\u5bf9\u65b9\u6cd5\u53c2\u6570\u8fdb\u884c\u68c0\u67e5\uff0c\u65e0\u6cd5\u5bf9\u5339\u914d\u7684\u7ed3\u679c\u8fdb\u884c\u7f13\u5b58\uff0c\u6240\u4ee5\uff0c\u5339\u914d\u6548\u7387\u76f8\u5bf9\u4e8eStaticMethodMatcher\u6765\u8bf4\u8981\u5dee\u3002\u800c\u4e14\u5927\u90e8\u95e8\u60c5\u51b5\u4e0b\uff0cstaticMethodMatcher\u5df2\u7ecf\u53ef\u4ee5\u6ee1\u8db3\u9700\u8981\u3002\u6700\u597d\u907f\u514d\u4f7f\u7528DynamicMethodMatcher\u7c7b\u578b\u3002"}),"\n",(0,o.jsxs)(t.p,{children:["\u5982\u679c",(0,o.jsx)(t.code,{children:"boolean matches(Method method, Class<?> targetClass);"}),"\u8fd4\u56detrue\u65f6\uff0c\u4e09\u4e2a\u53c2\u6570\u7684matches\u5c06\u4f1a\u88ab\u6267\u884c\uff0c\u4ee5\u8fdb\u4e00\u6b65\u68c0\u67e5\u5339\u914d\u6761\u4ef6\uff1b\u5982\u679c",(0,o.jsx)(t.code,{children:"boolean matches(Method method, Class<?> targetClass);"}),"\u8fd4\u56defalse\uff0c\u90a3\u4e48\u4e0d\u7ba1\u8fd9\u4e2aMethodMatcher\u662fstaticMethodMatcher\u8fd8\u662fDynamicMethodMatcher\uff0c\u8be5\u7ed3\u679c\u5df2\u7ecf\u662f\u6700\u7ec8\u7ed3\u679c\uff0c\u4e09\u4e2a\u53c2\u6570\u7684\u65b9\u6cd5\u80af\u5b9a\u4e0d\u4f1a\u88ab\u6267\u884c\u4e86\u3002"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:"https://s2.loli.net/2023/07/15/joCBcvwn5NIWsVP.png",alt:""})}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:"https://s2.loli.net/2023/07/15/3TktmhvxbHauZI2.png",alt:"\u5e38\u89c1pointcut",title:"\u5e38\u89c1pointcut"})}),"\n",(0,o.jsx)(t.h2,{id:"namematchmethodpointcut",children:"NameMatchMethodPointcut"}),"\n",(0,o.jsx)(t.p,{children:"\u6700\u7b80\u5355\u7684Pointcut\u5b9e\u73b0\uff0c\u5c5e\u4e8eStaticMethodMatcherPointcut\u7684\u5b50\u7c7b\uff0c\u53ef\u4ee5\u6839\u636e\u81ea\u8eab\u6307\u5b9a\u4e00\u7ec4\u65b9\u6cd5\u540d\u79f0\u4e0eJoinpoint\u5904\u7684\u65b9\u6cd5\u7684\u65b9\u6cd5\u540d\u79f0\u8fdb\u884c\u5339\u914d\u3002"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:'NameMatchMethodPointcut pointcut = new NameMatchMethodPointcut();\npointcut.setMappedName("matches");\n// \u6216\u8005\u4f20\u5165\u591a\u4e2a\u65b9\u6cd5\u540d\npointcut.setMappedNames(new String[]{"matches", "isRuntime"});\n// \u7b80\u5355\u6a21\u7cca\u5339\u914d\npointcut.setMappedNames(new String[]{"match*", "matches", "mat*es" });\n'})}),"\n",(0,o.jsx)(t.p,{children:"\u6b64\u65b9\u6cd5\u65e0\u6cd5\u5bf9\u91cd\u8f7d\u7684\u65b9\u6cd5\u540d\u8fdb\u884c\u5339\u914d\uff0c\u56e0\u4e3a\u5b83\u4ec5\u5bf9\u65b9\u6cd5\u540d\u8fdb\u884c\u5339\u914d\uff0c\u4e0d\u4f1a\u8003\u8651\u53c2\u6570\u76f8\u5173\u4fe1\u606f\uff0c\u800c\u4e14\u4e5f\u6ca1\u6709\u63d0\u4f9b\u53ef\u4ee5\u6307\u5b9a\u53c2\u6570\u5339\u914d\u4fe1\u606f\u7684\u9014\u5f84\u3002"}),"\n",(0,o.jsx)(t.h2,{id:"jdkregexpmethodpointcut\u548cperl5regexpmethodpointcut",children:"JdkRegexpMethodPointcut\u548cPerl5RegexpMethodPointcut"}),"\n",(0,o.jsx)(t.p,{children:"StaticMethodMatcherPointcut\u7684\u5b50\u7c7b\u6709\u4e00\u4e2a\u4e13\u95e8\u63d0\u4f9b\u57fa\u4e8e\u6b63\u5219\u8868\u8fbe\u5f0f\u7684\u5b9e\u73b0\u5206\u652f\uff0c\u4ee5\u62bd\u8c61\u7c7bAbstractRegexpMethodPointcut\u4e3a\u7edf\u5e05\uff0c\u58f0\u660e\u4e86pattern \u548c patterns\u5c5e\u6027\uff0c\u53ef\u4ee5\u6307\u5b9a\u4e00\u4e2a\u6216\u8005\u548c\u591a\u4e2a\u6b63\u5219\u8868\u8fbe\u5f0f\u7684\u5339\u914d\u6a21\u5f0f\u3002\u5176\u4e0b\u8bbeJdkRegexpMethodPointcut\u548cPerl5RegexpMethodPointcut\u4e24\u79cd\u5177\u4f53\u5b9e\u73b0\u3002"}),"\n",(0,o.jsx)(t.p,{children:"JdkRegexpMethodPointcut\u662f\u5728JDK 1.4\u4e4b\u540e\u5f15\u5165JDK\u6807\u51c6\u6b63\u5219\u8868\u8fbe\u5f0f\u3002"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:'JdkRegexpMethodPointcut pointcut = new JdkRegexpMethodPointcut();\npointcut.setPattern(".*match.*");\npointcut.setPatterns(new String[]{".*match.", ".*matches"});\n'})}),"\n",(0,o.jsx)(t.p,{children:"\u6ce8\u610f\u6b63\u5219\u8868\u8fbe\u5f0f\u5339\u914d\u6a21\u5f0f\u5fc5\u987b\u5339\u914d\u6574\u4e2a\u65b9\u6cd5\u7b7e\u540d(Method signature)\u7684\u5f62\u5f0f\u6307\u5b9a\uff0c\u800c\u4e0d\u80fd\u50cfNameMatchMethodPointcut\u90a3\u6837\u4ec5\u7ed9\u51fa\u5339\u914d\u7684\u65b9\u6cd5\u540d\u79f0\u3002"}),"\n",(0,o.jsxs)(t.p,{children:["Perl5RegexpMethodPointcut\u5b9e\u73b0\u4f7f\u7528",(0,o.jsx)(t.a,{href:"https://jakarta.apache.org/oro/",children:"Jakarta ORO"}),"\u63d0\u4f9b\u6b63\u5219\u8868\u8fbe\u5f0f\u652f\u6301"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"\u53ef\u4ee5\u901a\u8fc7pattern\u6216\u8005patterns\u5bf9\u8c61\u5c5e\u6027\u6307\u5b9a\u4e00\u4e2a\u6216\u8005\u591a\u4e2a\u6b63\u5219\u8868\u8fbe\u5f0f"}),"\n",(0,o.jsx)(t.li,{children:"\u6307\u5b9a\u6b63\u5219\u8868\u8fbe\u5f0f\u5339\u914d\u6a21\u5f0f\u5e94\u8be5\u8986\u76d6\u5339\u914d\u6574\u4e2a\u65b9\u6cd5\u7b7e\u540d\uff0c\u800c\u4e0d\u662f\u53ea\u6307\u5b9a\u5230\u65b9\u6cd5\u540d\u79f0\u90e8\u5206\u3002"}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"annotationmatchingpointcut",children:"AnnotationMatchingPointcut"}),"\n",(0,o.jsxs)(e,{children:[(0,o.jsx)("summary",{children:"ClassLevelAnnotation"}),(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-java",children:"package org.springframework.mylearntest.aop.annotationmatchingpointcut;\n\nimport java.lang.annotation.ElementType;\nimport java.lang.annotation.Retention;\nimport java.lang.annotation.RetentionPolicy;\nimport java.lang.annotation.Target;\n\n@Retention(RetentionPolicy.RUNTIME)\n@Target(ElementType.TYPE)\npublic @interface ClassLevelAnnotation {\n}\n"})})]}),"\n",(0,o.jsxs)(e,{children:[(0,o.jsx)("summary",{children:"MethodLevelAnnotation"}),(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-java",children:"package org.springframework.mylearntest.aop.annotationmatchingpointcut;\n\nimport java.lang.annotation.ElementType;\nimport java.lang.annotation.Retention;\nimport java.lang.annotation.RetentionPolicy;\nimport java.lang.annotation.Target;\n\n@Retention(RetentionPolicy.RUNTIME)\n@Target(ElementType.METHOD)\npublic @interface MethodLevelAnnotation {\n}\n"})})]}),"\n",(0,o.jsxs)(e,{children:[(0,o.jsx)("summary",{children:"GenericTargetObject"}),(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-java",children:'package org.springframework.mylearntest.aop.annotationmatchingpointcut;\n\n@ClassLevelAnnotation\npublic class GenericTargetObject {\n\n    @MethodLevelAnnotation\n    public void getMethod1() {\n        System.out.println("getMethod1");\n    }\n\n    public void getMethod2() {\n        System.out.println("getMethod2");\n    }\n}\n'})})]}),"\n",(0,o.jsxs)(e,{children:[(0,o.jsx)("summary",{children:"\u5982\u4f55\u6307\u5b9aPointcut"}),(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-java",children:"AnnotationMatchingPointcut pointcut = new AnnotationMatchingPointcut(ClassLevelAnnotation.class);\n// \u4e5f\u53ef\u4ee5\u901a\u8fc7\u9759\u6001\u65b9\u6cd5\nAnnotationMatchingPointcut pointcut1 = AnnotationMatchingPointcut.forClassAnnotation(MethodLevelAnnotation.class);\n// \u540c\u65f6\u9650\u5b9a\nAnnotationMatchingPointcut pointcut2 = AnnotationMatchingPointcut.forClassAnnotation(ClassLevelAnnotation.class);\n"})})]}),"\n",(0,o.jsx)(t.h2,{id:"composablepointcut",children:"ComposablePointcut"}),"\n",(0,o.jsx)(t.p,{children:"Spring AOP\u63d0\u4f9bPointcut\u903b\u8f91\u8fd0\u7b97\u7684Pointcut\u5b9e\u73b0\u3002\u5b83\u53ef\u4ee5\u8fdb\u884cPointcut\u4e4b\u95f4\u7684\u201c\u5e76\u201d\u4ee5\u53ca\u201c\u4ea4\u201d\u8fd0\u7b97\u3002"}),"\n",(0,o.jsxs)(e,{children:[(0,o.jsx)("summary",{children:"Test4ComposablePointcut"}),(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-java",children:"package org.springframework.mylearntest.aop.pointcut.composablePointcut;\n\nimport org.junit.Assert;\nimport org.springframework.aop.ClassFilter;\nimport org.springframework.aop.MethodMatcher;\nimport org.springframework.aop.Pointcut;\nimport org.springframework.aop.support.ComposablePointcut;\nimport org.springframework.aop.support.Pointcuts;\n\npublic class Test4ComposablePointcut {\n\n    public static void main(String[] args) {\n        ComposablePointcut pointcut1 = new ComposablePointcut(new ClassFilter() {\n            @Override\n            public boolean matches(Class<?> clazz) {\n                return false;\n            }\n        }, MethodMatcher.TRUE);\n\n        ComposablePointcut pointcut2 = new ComposablePointcut(new ClassFilter() {\n            @Override\n            public boolean matches(Class<?> clazz) {\n                return false;\n            }\n        }, MethodMatcher.TRUE);\n\n        // union intersection\n        ComposablePointcut union = pointcut1.union(pointcut2);\n        ComposablePointcut intersection = pointcut1.intersection(union);\n\n        Assert.assertEquals(pointcut1,intersection);\n\n        // combine classFilter with methodMatcher\n        pointcut2.union(new ClassFilter() {\n            @Override\n            public boolean matches(Class<?> clazz) {\n                return false;\n            }\n        }).intersection(MethodMatcher.TRUE);\n\n        // just compute between pointcut, use org.springframework.aop.support.Pointcuts\n        Pointcut pointcut3 = new Pointcut() {\n            @Override\n            public ClassFilter getClassFilter() {\n                return null;\n            }\n\n            @Override\n            public MethodMatcher getMethodMatcher() {\n                return null;\n            }\n        };\n\n        Pointcut pointcut4 = new Pointcut() {\n            @Override\n            public ClassFilter getClassFilter() {\n                return null;\n            }\n\n            @Override\n            public MethodMatcher getMethodMatcher() {\n                return null;\n            }\n        };\n        \n        Pointcut union1 = Pointcuts.union(pointcut3, pointcut4);\n        Pointcut intersection1 = Pointcuts.intersection(pointcut3, pointcut4);\n\n    }\n}\n"})})]}),"\n",(0,o.jsx)(t.h2,{id:"controlflowpointcut",children:"ControlFlowPointcut"}),"\n",(0,o.jsx)(t.p,{children:"ControlFlowPointcut\u5339\u914d\u7a0b\u5e8f\u7684\u8c03\u7528\u6d41\u7a0b\uff0c\u4e0d\u662f\u5bf9\u67d0\u4e2a\u65b9\u6cd5\u6267\u884c\u6240\u5728Joinpoint\u5904\u7684\u5355\u4e00\u7279\u5f81\u8fdb\u884c\u5339\u914d\uff0c\u800c\u662f\u8981\u88ab\u7279\u5b9a\u7684\u7c7b\u6267\u884c\u65f6\uff0c\u624d\u4f1a\u8fdb\u884c\u65b9\u6cd5\u62e6\u622a\u3002\n\u56e0\u4e3aControlFlowPointcut\u7c7b\u578b\u7684Pointcut\u9700\u8981\u5728\u8fd0\u884c\u671f\u95f4\u68c0\u67e5\u7a0b\u5e8f\u7684\u8c03\u7528\u6808\uff0c\u800c\u4e14\u6bcf\u6b21\u65b9\u6cd5\u8c03\u7528\u90fd\u9700\u8981\u68c0\u67e5\uff0c\u6240\u4ee5\u6027\u80fd\u6bd4\u8f83\u5dee\u3002"})]})}function u(n={}){const{wrapper:t}={...(0,i.a)(),...n.components};return t?(0,o.jsx)(t,{...n,children:(0,o.jsx)(p,{...n})}):p(n)}},8672:(n,t,e)=>{e.d(t,{Z:()=>c,a:()=>r});var o=e(959);const i={},a=o.createContext(i);function r(n){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof n?n(t):{...t,...n}}),[t,n])}function c(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:r(n.components),o.createElement(a.Provider,{value:t},n.children)}}}]);