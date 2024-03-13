"use strict";(self.webpackChunksummary=self.webpackChunksummary||[]).push([[6083],{7275:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var r=t(1527),s=t(7701);const a={title:"Sping Core",sidebar_label:"Sping Core",sidebar_position:1},i=void 0,o={id:"Java/Spring/Spring-Core",title:"Sping Core",description:"\u5728\u751f\u547d\u5468\u671f\u957f\u7684Bean\u4e2d\u6307\u5b9a\u4e00\u4e2a\u77ed\u7684",source:"@site/docs/01-Java/02-Spring/Spring-Core.mdx",sourceDirName:"01-Java/02-Spring",slug:"/Java/Spring/Spring-Core",permalink:"/en/Java/Spring/Spring-Core",draft:!1,unlisted:!1,editUrl:"https://github.com/Halcyon666/summary/edit/main/i18n/en/docusaurus-plugin-content-docs/current/01-Java/02-Spring/Spring-Core.mdx",tags:[],version:"current",lastUpdatedAt:1710339597,formattedLastUpdatedAt:"Mar 13, 2024",sidebarPosition:1,frontMatter:{title:"Sping Core",sidebar_label:"Sping Core",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Java\u4e0a\u4f20\u6587\u4ef6",permalink:"/en/Java/JavaBase/file upload"},next:{title:"IoC\u6ce8\u5165\u65b9\u5f0f1",permalink:"/en/Java/Spring/IoC Inject 1"}},l={},c=[{value:"\u5728\u751f\u547d\u5468\u671f\u957f\u7684Bean\u4e2d\u6307\u5b9a\u4e00\u4e2a\u77ed\u7684",id:"\u5728\u751f\u547d\u5468\u671f\u957f\u7684bean\u4e2d\u6307\u5b9a\u4e00\u4e2a\u77ed\u7684",level:2},{value:"\u5355\u4f8bBean\u4e2d\u7684\u6709\u539f\u578bbean",id:"\u5355\u4f8bbean\u4e2d\u7684\u6709\u539f\u578bbean",level:2},{value:"<code>@Autowired</code> field\u5e95\u5c42\u5b9e\u73b0",id:"autowired-field\u5e95\u5c42\u5b9e\u73b0",level:2},{value:"<code>@Autowired</code>\u6216\u8005<code>@Resource</code>\u6307\u5b9a\u5b9e\u73b0\u7c7b",id:"autowired\u6216\u8005resource\u6307\u5b9a\u5b9e\u73b0\u7c7b",level:2},{value:"\u6784\u9020\u5668\u6ce8\u5165",id:"\u6784\u9020\u5668\u6ce8\u5165",level:2},{value:"\u4f7f\u7528AspectJ\u6ce8\u89e3\u8fdb\u884cAOP\u914d\u7f6e\u597d\u8fd8\u662fxml",id:"\u4f7f\u7528aspectj\u6ce8\u89e3\u8fdb\u884caop\u914d\u7f6e\u597d\u8fd8\u662fxml",level:2},{value:"\u95ed\u5305 \u548c \u56de\u8c03",id:"\u95ed\u5305-\u548c-\u56de\u8c03",level:2},{value:"<code>@Configurable</code> <code>@Configuration</code>",id:"configurable-configuration",level:2},{value:"Spring Boot\u81ea\u5b9a\u4e49\u4e00\u4e2aEvent\u53d1\u5e03",id:"spring-boot\u81ea\u5b9a\u4e49\u4e00\u4e2aevent\u53d1\u5e03",level:2}];function d(e){const n={a:"a",code:"code",em:"em",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"\u5728\u751f\u547d\u5468\u671f\u957f\u7684bean\u4e2d\u6307\u5b9a\u4e00\u4e2a\u77ed\u7684",children:"\u5728\u751f\u547d\u5468\u671f\u957f\u7684Bean\u4e2d\u6307\u5b9a\u4e00\u4e2a\u77ed\u7684"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"xml\u914d\u7f6e\u65b9\u5f0f"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"proxy-target-class"})," ",(0,r.jsx)(n.code,{children:"default=true"}),"\u4f7f\u7528CGlib\u8fdb\u884c\u4ee3\u7406; ",(0,r.jsx)(n.code,{children:"default=false"})," \u65f6\u4f7f\u7528JDK\u52a8\u6001\u4ee3\u7406;"]}),"\n",(0,r.jsxs)(t,{children:[(0,r.jsx)("summary",{children:"xml\u914d\u7f6e"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-xml",children:'\x3c!-- DefaultUserPreferences implements the UserPreferences interface --\x3e\n<bean id="userPreferences" class="com.stuff.DefaultUserPreferences" scope="session">\n\t<aop:scoped-proxy proxy-target-class="false"/>\n</bean>\n<bean id="userManager" class="com.stuff.UserManager">\n\t<property name="userPreferences" ref="userPreferences"/>\n</bean>\n'})})]}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsx)(n.li,{children:"\u6ce8\u89e3\u65b9\u5f0f"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:' // CGLIB \u65b9\u5f0f\n @Scope(value="request", proxyMode = ScopedProxyMode.TARGET_CLASS)\n\n // JDK\u52a8\u6001\u4ee3\u7406 \u65b9\u5f0f\n @Scope(value="request", proxyMode = ScopedProxyMode.INTERFACES)\n'})}),"\n",(0,r.jsx)(n.h2,{id:"\u5355\u4f8bbean\u4e2d\u7684\u6709\u539f\u578bbean",children:"\u5355\u4f8bBean\u4e2d\u7684\u6709\u539f\u578bbean"}),"\n",(0,r.jsxs)(n.p,{children:["\u65b9\u6cd5\u4e00\uff1a",(0,r.jsx)(n.code,{children:"lookup"}),",\u901a\u8fc7lookup\u4f1a\u81ea\u52a8\u53bb\u67e5\u627e\u7c7b\u578b\u4e00\u6837\u7684bean\u8fdb\u884c\u6ce8\u5165\uff1b\u6ce8\u610f\u4f7f\u7528lookup\u7684\u65b9\u6cd5\u5fc5\u987b\u4e3a\u62bd\u8c61\u65b9\u6cd5\uff1b"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'@Component("AAA")\n@Scope(value = "prototype")\npublic class AAA {\n    @Bean\n    public AAA createAAA(A a,B b) {\n        return this;\n    }\n}\n\n@Component\npublic abstract class ControllerManager {\n\n    private AAA aaa;\n\n    @Lookup\n    public abstract AAA createAAA() ;\n\n    public void test() {\n        this.aaa = createAAA();\n    }\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u65b9\u6cd5\u4e8c\uff1a\u5b9e\u73b0",(0,r.jsx)(n.code,{children:"ApplicationContextAware"}),"\u62ff\u5230",(0,r.jsx)(n.code,{children:"beanFactory"}),"\u5bf9\u8c61\uff0c\u6bcf\u6b21\u65b9\u6cd5\u8c03\u7528\u7684\u65f6\u5019\u90fd\u4f1a\u83b7\u53d6\u5230\u4e00\u4e2a\u65b0\u7684\u5355\u4f8bbean"]}),"\n",(0,r.jsxs)(n.h2,{id:"autowired-field\u5e95\u5c42\u5b9e\u73b0",children:[(0,r.jsx)(n.code,{children:"@Autowired"})," field\u5e95\u5c42\u5b9e\u73b0"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"@Autowired"}),"\u5148\u4f1a\u6309\u7c7b\u578b\u6ce8\u5165\uff0c\u5982\u679c\u6709\u591a\u4e2a\u7c7b\u578b\uff0c\u5219\u6309\u7167\u540d\u5b57\u6ce8\u5165\uff1b\u5728\u6e90\u7801\u4e2d\u8bbe\u7f6e\u503c\u662f\u901a\u8fc7\u53cd\u5c04\u5b9e\u73b0",(0,r.jsx)(n.code,{children:"org.springframework.beans.DirectFieldAccessor.FieldPropertyHandler#setValue"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'@Override\npublic void setValue(@Nullable Object value) throws Exception {\n\ttry {\n\t\tReflectionUtils.makeAccessible(this.field);\n\t\tthis.field.set(getWrappedInstance(), value);\n\t} catch (IllegalAccessException ex) {\n\t\tthrow new InvalidPropertyException(getWrappedClass(), this.field.getName(),\n\t\t\t\t"Field is not accessible", ex);\n\t}\n}\n'})}),"\n",(0,r.jsxs)(n.h2,{id:"autowired\u6216\u8005resource\u6307\u5b9a\u5b9e\u73b0\u7c7b",children:[(0,r.jsx)(n.code,{children:"@Autowired"}),"\u6216\u8005",(0,r.jsx)(n.code,{children:"@Resource"}),"\u6307\u5b9a\u5b9e\u73b0\u7c7b"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\u5728\u67d0\u4e00\u4e2a\u5b50\u5b9e\u73b0\u7c7b\u4e0a\u4f7f\u7528",(0,r.jsx)(n.code,{children:"@Primary"}),"\u6307\u5b9a\u8981\u6ce8\u5165\u7684Bean\u4e3a\u5f53\u524d\u7684bean, \u4ee5\u4e0b\u6ce8\u5165\u65b9\u5f0f\u4e8c\u9009\u4e00"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"@Primary\n@Component\npublic class ProtoBeanImpl implements ProtoBean{\n}\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"@Primary\n@Bean\npublic ProtoBeanImpl protoBean(){\n    return new ProtoBeanImpl();\n}\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsxs)(n.li,{children:["\u4f7f\u7528",(0,r.jsx)(n.code,{children:'@Qulifier("xxx")'}),"\u6ce8\u89e3 \u6307\u5b9a\u8981\u6ce8\u5165\u7684bean\u7684\u7c7b\u578b"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'@Qualifier("protoBeanImpl2")\n@Autowired\nprivate ProtoBean bean;\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'@Autowired\npublic SingleBean(@Qualifier("protoBeanImpl2") ProtoBean proto) {\n    this.protoBeanImpl2 = (ProtoBeanImpl2) proto;\n}\n'})}),"\n",(0,r.jsxs)(n.ol,{start:"3",children:["\n",(0,r.jsxs)(n.li,{children:["\u4f7f\u7528",(0,r.jsx)(n.code,{children:"@Resource"})]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'@Resource(name="protoBeanImpl2")\nprivate ProtoBean protoBean;\n// \u548c\u4e0b\u9762\u5199\u6cd5\u7b49\u540c\uff0c\u4e0d\u6307\u5b9aname\uff0c\u9ed8\u8ba4\u4e3a\u53d8\u91cf\u540d\n@Resource\nprivate ProtoBean protoBeanImpl2;\n'})}),"\n",(0,r.jsx)(n.h2,{id:"\u6784\u9020\u5668\u6ce8\u5165",children:"\u6784\u9020\u5668\u6ce8\u5165"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["using constructor inject,do not need other annotation if all the properties is base type ,using\n",(0,r.jsx)(n.code,{children:'@ConstrutorProperties({"xxx","xxx",...})'})," to inject the value"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["if just one constructor here, need' not ",(0,r.jsx)(n.code,{children:"@Autowired"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["only one multi-argument constructor can be set ",(0,r.jsx)(n.code,{children:"@Autowired(required = true)"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["if one more constructor are annotationed with ",(0,r.jsx)(n.code,{children:" @Autowired(required = false)"}),"\nThe constructor with the greatest number of dependencies that can be satisfied\nby matching beans in the Spring container will be chosen"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"@Autowired"}),", ",(0,r.jsx)(n.code,{children:"@Inject"}),", ",(0,r.jsx)(n.code,{children:"@Value"}),", and ",(0,r.jsx)(n.code,{children:"@Resource"})," annotations are handled by Spring\nBeanPostProcessor implementations"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u4f7f\u7528aspectj\u6ce8\u89e3\u8fdb\u884caop\u914d\u7f6e\u597d\u8fd8\u662fxml",children:"\u4f7f\u7528AspectJ\u6ce8\u89e3\u8fdb\u884cAOP\u914d\u7f6e\u597d\u8fd8\u662fxml"}),"\n",(0,r.jsx)(n.p,{children:"\u4f7f\u7528xml\u914d\u7f6e\u65f6\uff0c\u5c06AOP\u914d\u7f6e\u5206\u6563\u4e86\uff0c\u4e00\u90e8\u5206\u5728xml\u4e2d\uff0c\u4e00\u90e8\u5206\u5728\u540e\u53f0\u7684class\u7c7b\u4e2d\u3002\u4e0d\u7b26\u5408DRY\u539f\u5219\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["\u4f7f\u7528",(0,r.jsx)(n.code,{children:"@AspectJ"}),"\uff0c\u5219\u5c06\u6574\u4e2aAOP\u7684\u914d\u7f6e\u653e\u5728\u4e00\u4e2a\u914d\u7f6e\u7c7b\u4e2d\uff0c",(0,r.jsx)(n.code,{children:"@AspectJ"}),"\u652f\u6301\u989d\u5916\u7684\u5b9e\u4f8b\u6a21\u578b\u66f4\u4e30\u5bcc\u7684\u7ec4\u5408\uff0c\u662f\u6bcf\u4e2a\u5207\u9762\u6210\u4e3a\u4e00\u4e2a\u6a21\u578b\u5355\u5143\u3002\n\u540c\u65f6\uff0c",(0,r.jsx)(n.code,{children:"@AspectJ"})," \u80fd\u88ab Spring AOP \u548cAspectJ \u89e3\u6790\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528AspectJ\u7684\u8bed\u6cd5\u53bb\u5b9e\u73b0\u66f4\u52a0\u590d\u6742\u7684\u5207\u9762\u903b\u8f91"]}),"\n",(0,r.jsx)(n.h2,{id:"\u95ed\u5305-\u548c-\u56de\u8c03",children:"\u95ed\u5305 \u548c \u56de\u8c03"}),"\n",(0,r.jsxs)(n.p,{children:["\u95ed\u5305:\u95ed\u5305\u548c\u533f\u540d\u51fd\u6570\u7ecf\u5e38\u88ab\u7528\u4f5c\u540c\u4e49\u8bcd\u3002\u4f46\u4e25\u683c\u6765\u8bf4\uff0c\u533f\u540d\u51fd\u6570\u5c31\u662f\u5b57\u9762\u610f\u4e49\u4e0a\u6ca1\u6709\u88ab\u8d4b\u4e88\u540d\u79f0\u7684\u51fd\u6570\uff0c\u800c\u95ed\u5305\u5219\u5b9e\u9645\u4e0a\u662f\u4e00\u4e2a\u51fd\u6570\u7684\u5b9e\u4f8b\uff0c\u4e5f\u5c31\u662f\u8bf4\u662f\u5b58\u5728\u4e8e\u5185\u5b58\u91cc\u7684\u67d0\u4e2a\u7ed3\u6784\u4f53\u3002\u5982\u679c\u4ece\u5b9e\u73b0\u4e0a\u6765\u770b\u7684\u8bdd\uff0c\u533f\u540d\u51fd\u6570\u5982\u679c\u6ca1\u6709\u6355\u6349\u81ea\u7531\u53d8\u91cf\uff0c\u90a3\u4e48\u5b83\u5176\u5b9e\u53ef\u4ee5\u88ab\u5b9e\u73b0\u4e3a\u4e00\u4e2a",(0,r.jsx)(n.strong,{children:"\u51fd\u6570\u6307\u9488"}),"\uff0c\u6216\u8005\u76f4\u63a5\u5185\u8054\u5230\u8c03\u70b9\uff0c\u5982\u679c\u5b83\u6355\u6349\u4e86\u81ea\u7531\u53d8\u91cf\u90a3\u4e48\u5b83\u5c06\u662f\u4e00\u4e2a\u95ed\u5305\uff1b\u800c\u95ed\u5305\u5219\u610f\u5473\u7740\u540c\u65f6\u5305\u62ec\u51fd\u6570\u6307\u9488\u548c\u73af\u5883\u4e24\u4e2a\u5173\u952e\u5143\u7d20\u3002",(0,r.jsx)(n.a,{href:"https://zh.wikipedia.org/wiki/%E9%97%AD%E5%8C%85_(%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%A7%91%E5%AD%A6)",children:"\u53c2\u8003\u51fa\u5904"}),"\n",(0,r.jsx)(n.a,{href:"https://zh.wikipedia.org/wiki/%E9%97%AD%E5%8C%85_(%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%A7%91%E5%AD%A6)",children:"Closure Sample"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"public interface Adder {\n    int add(int x);\n}\n\npublic static Adder makeAdder(final int n) {\n    return new Adder() {\n        public int add(int x) {\n            return x + n;\n        }\n    };\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u56de\u8c03\uff1a\u5728\u8ba1\u7b97\u673a\u7a0b\u5e8f\u8bbe\u8ba1\u4e2d\uff0c\u56de\u8c03\u51fd\u6570\uff0c\u6216\u7b80\u79f0\u56de\u8c03\uff08Callback \u5373call then back \u88ab\u4e3b\u51fd\u6570\u8c03\u7528\u8fd0\u7b97\u540e\u4f1a\u8fd4\u56de\u4e3b\u51fd\u6570\uff09\uff0c\u662f\u6307\u901a\u8fc7\u53c2\u6570\u5c06\u51fd\u6570\u4f20\u9012\u5230\u5b83\u4ee3\u7801\u7684\uff0c\u67d0\u4e00\u5757\u53ef\u6267\u884c\u4ee3\u7801\u7684\u5f15\u7528",(0,r.jsx)(n.a,{href:"https://zh.wikipedia.org/wiki/%E5%9B%9E%E8%B0%83%E5%87%BD%E6%95%B0",children:"\u53c2\u8003\u51fa\u5904"}),"\n",(0,r.jsx)(n.a,{href:"https://stackoverflow.com/questions/19405421/what-is-a-callback-method-in-java-term-seems-to-be-used-loosely",children:"Callback Sample"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"class RemoteClass {\n\n    private OnChangeListener mOnChangeListener;\n\n    void makeSomeChanges() {\n        /*\n        .. do something here and call callback\n        */\n        mOnChangeListener.onChanged(this, 1);\n    }\n\n    public void setOnChangeListener(OnChangeListener listener) {\n        mOnChangeListener = listener;\n    }\n\n    public interface OnChangeListener {\n        void onChanged(RemoteClass remoteClass, int test);\n    }\n}\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'class Test {\n\n    public static void main(String[] args) {    \n        RemoteClass obj = new RemoteClass();\n        obj.setOnChangeListener(demoChanged);\n        obj.makeSomeChanges();\n    }\n\t// this case remind me of spring framework lots of anonymous ObjectFactory call back\n    private static RemoteClass.OnChangeListener demoChanged = new RemoteClass.OnChangeListener() {\n        @Override\n        public void onChanged(RemoteClass remoteClass, int incoming) {\n            switch (incoming) {\n                case 1:\n                    System.out.println("I will take appropriate action!");\n                    break;\n                default:\n                    break;\n            }\n        }\n    };\n}\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"// callback in springframework 4.3.x \n// @see org.springframework.beans.factory.support.AbstractBeanFactory#doGetBean\n// Create bean instance.\nif (mbd.isSingleton()) {\n\tsharedInstance = getSingleton(beanName, new ObjectFactory<Object>() {\n\t\t@Override\n\t\tpublic Object getObject() throws BeansException {\n\t\t\ttry {\n\t\t\t\treturn createBean(beanName, mbd, args);\n\t\t\t}\n\t\t\tcatch (BeansException ex) {\n\t\t\t\t// Explicitly remove instance from singleton cache: It might have been put there\n\t\t\t\t// eagerly by the creation process, to allow for circular reference resolution.\n\t\t\t\t// Also remove any beans that received a temporary reference to the bean.\n\t\t\t\tdestroySingleton(beanName);\n\t\t\t\tthrow ex;\n\t\t\t}\n\t\t}\n\t});\n\tbean = getObjectForBeanInstance(sharedInstance, name, beanName, mbd);\n}\n"})}),"\n",(0,r.jsxs)(n.h2,{id:"configurable-configuration",children:[(0,r.jsx)(n.code,{children:"@Configurable"})," ",(0,r.jsx)(n.code,{children:"@Configuration"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"@Configuration"})," \u662f\u914d\u7f6e\u7c7b"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"@Configurable"})," \u5b83\u662f\u4e00\u4e2abean\u6240\u4f9d\u8d56\u7684Aspect,\u5e76\u4e14\u4e0d\u88abSpring\u7ba1\u7406\uff0c\u4f46\u662f\u53ef\u4ee5\u81ea\u52a8\u6ce8\u5165"]}),"\n",(0,r.jsx)(n.h2,{id:"spring-boot\u81ea\u5b9a\u4e49\u4e00\u4e2aevent\u53d1\u5e03",children:"Spring Boot\u81ea\u5b9a\u4e49\u4e00\u4e2aEvent\u53d1\u5e03"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.em,{children:["\u672c\u6848\u4f8b\u4f7f\u7528\u5230\u4e86",(0,r.jsx)(n.code,{children:"SpEL"}),"(Spring Express Language)\u8868\u8fbe\u5f0f"]})}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\u5b9a\u4e49\u81ea\u5df1\u7684\u4e8b\u4ef6",(0,r.jsx)(n.code,{children:"MyEvent"})]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"/**\n * @Author: WhaleFall541\n * @Date: 2021/7/12 21:38\n */\npublic class MyEvent extends ApplicationEvent {\n    private final String address;\n    private final String content;\n    public MyEvent(Object source, String address, String content) {\n        super(source);\n        this.address = address;\n        this.content = content;\n    }\n    // getter and setter omit\n    @Override\n    public String toString() {\n        return \"MyEvent{\" +\n                \"address='\" + address + '\\'' +\n                \", content='\" + content + '\\'' +\n                '}';\n    }\n}\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsxs)(n.li,{children:["\u81ea\u5b9a\u4e49\u4e8b\u4ef6\u53d1\u5e03\u7c7b",(0,r.jsx)(n.code,{children:"MyEventPublish"})]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'/**\n * @Author: WhaleFall541\n * @Date: 2021/7/12 21:41\n */\n@Component\npublic class MyEventPublish implements ApplicationEventPublisherAware {\n    private ApplicationEventPublisher publisher;\n\n    @Override\n    public void setApplicationEventPublisher(ApplicationEventPublisher applicationEventPublisher) {\n        this.publisher = applicationEventPublisher;\n    }\n\n    public void publish(String address, String content) {\n        if ("aaa".equals(address)) {\n            publisher.publishEvent(new MyEvent(this, address, content));\n            return;\n        }\n    }\n}\n'})}),"\n",(0,r.jsxs)(n.ol,{start:"3",children:["\n",(0,r.jsx)(n.li,{children:"\u7f16\u5199\u4e8b\u4ef6\u76d1\u542c\u7c7b"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'/**\n * @Author: WhaleFall541\n * @Date: 2021/7/12 21:38\n */\n@Component\npublic class MyListener implements ApplicationEventPublisherAware {\n    private Log log = LogFactory.getLog(MyListener.class);\n\n    // SpEL #a0 \u4ee3\u8868\u7b2c\u4e00\u4e2a\u5165\u53c2\n    // @EventListener(condition = "#a0.content == \'foo\'")\n    \n    // SpEL #event  \u4ee3\u8868\u540d\u79f0\u76f8\u540c\u7684\u53c2\u6570\n    // @EventListener(condition = "#event.content == \'foo\'")\n    \n    // \u5982\u679c\u8981\u8868\u793a\u4e00\u4e2a\u5bf9\u8c61\u8981\u4f7f\u7528@XXX testMethod\u4e3a\u5bb9\u5668\u4e2dbean\u7684\u540d\u5b57\n    @EventListener(condition = "@testMethod.test().equals(#a0.content)")\n    \n    // @EventListener({ContextStartedEvent.class, ContextRefreshedEvent.class})\n    public void process(MyEvent event) {\n        System.err.println("event test is ok " + event);\n    }\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"TestMethod"})," \u7c7b"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:' @Component\n public class TestMethod {\n     public List<String> test() {\n         List<String> al = new ArrayList();\n         al.add("foo");\n         al.add("fool");\n         return al;\n     }\n }\n'})}),"\n",(0,r.jsxs)(n.ol,{start:"4",children:["\n",(0,r.jsx)(n.li,{children:"\u6d4b\u8bd5\u7c7b"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["\u6ce8\u610f\u8981\u5f15\u5165\u4f9d\u8d56,\u6b64\u5904\u5217\u4e3e",(0,r.jsx)(n.code,{children:"gradle"}),"\u4f9d\u8d56\u914d\u7f6e ",(0,r.jsx)(n.code,{children:"testImplementation 'org.springframework.boot:spring-boot-starter-test'"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'@SpringBootTest\nclass Charter1Tests implements ApplicationContextAware {\n@Test\n void testApplicationEvent() {\n     MyEventPublish bean = context.getBean(MyEventPublish.class);\n     bean.publish("aaa", "foo");\n }\n}\n'})})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},7701:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>i});var r=t(959);const s={},a=r.createContext(s);function i(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);