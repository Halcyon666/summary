"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9581],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>k});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(t),d=r,k=m["".concat(p,".").concat(d)]||m[d]||u[d]||i;return t?a.createElement(k,o(o({ref:n},c),{},{components:t})):a.createElement(k,o({ref:n},c))}));function k(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[m]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},4489:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=t(7462),r=(t(7294),t(3905));const i={title:"Sping Core",sidebar_label:"Sping Core",sidebar_position:1},o=void 0,l={unversionedId:"Tech/Java/Spring/Spring-Core",id:"Tech/Java/Spring/Spring-Core",title:"Sping Core",description:"\u5728\u751f\u547d\u5468\u671f\u957f\u7684Bean\u4e2d\u6307\u5b9a\u4e00\u4e2a\u77ed\u7684",source:"@site/docs/01-Tech/01-Java/02-Spring/Spring-Core.md",sourceDirName:"01-Tech/01-Java/02-Spring",slug:"/Tech/Java/Spring/Spring-Core",permalink:"/summary/Tech/Java/Spring/Spring-Core",draft:!1,editUrl:"https://github.com/Halcyon666/summary/blob/main/docs/01-Tech/01-Java/02-Spring/Spring-Core.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Sping Core",sidebar_label:"Sping Core",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"APT \u4f7f\u7528",permalink:"/summary/Tech/Java/JavaBase/annotation processor"},next:{title:"Spring IoC\u6df1\u5ea6\u89e3\u67901",permalink:"/summary/Tech/Java/Spring/\u6df1\u5165\u7406\u89e3Spring-IoC1"}},p={},s=[{value:"\u5728\u751f\u547d\u5468\u671f\u957f\u7684Bean\u4e2d\u6307\u5b9a\u4e00\u4e2a\u77ed\u7684",id:"\u5728\u751f\u547d\u5468\u671f\u957f\u7684bean\u4e2d\u6307\u5b9a\u4e00\u4e2a\u77ed\u7684",level:2},{value:"\u5355\u4f8bBean\u4e2d\u7684\u6709\u539f\u578bbean",id:"\u5355\u4f8bbean\u4e2d\u7684\u6709\u539f\u578bbean",level:2},{value:"<code>@Autowired</code> field\u5e95\u5c42\u5b9e\u73b0",id:"autowired-field\u5e95\u5c42\u5b9e\u73b0",level:2},{value:"<code>@Autowired</code>\u6216\u8005<code>@Resource</code>\u6307\u5b9a\u5b9e\u73b0\u7c7b",id:"autowired\u6216\u8005resource\u6307\u5b9a\u5b9e\u73b0\u7c7b",level:2},{value:"\u6784\u9020\u5668\u6ce8\u5165",id:"\u6784\u9020\u5668\u6ce8\u5165",level:2},{value:"\u4f7f\u7528AspectJ\u6ce8\u89e3\u8fdb\u884cAOP\u914d\u7f6e\u597d\u8fd8\u662fxml",id:"\u4f7f\u7528aspectj\u6ce8\u89e3\u8fdb\u884caop\u914d\u7f6e\u597d\u8fd8\u662fxml",level:2},{value:"\u95ed\u5305 \u548c \u56de\u8c03",id:"\u95ed\u5305-\u548c-\u56de\u8c03",level:2},{value:"<code>@Configurable</code> <code>@Configuration</code>",id:"configurable-configuration",level:2},{value:"Spring Boot\u81ea\u5b9a\u4e49\u4e00\u4e2aEvent\u53d1\u5e03",id:"spring-boot\u81ea\u5b9a\u4e49\u4e00\u4e2aevent\u53d1\u5e03",level:2}],c={toc:s},m="wrapper";function u(e){let{components:n,...t}=e;return(0,r.kt)(m,(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u5728\u751f\u547d\u5468\u671f\u957f\u7684bean\u4e2d\u6307\u5b9a\u4e00\u4e2a\u77ed\u7684"},"\u5728\u751f\u547d\u5468\u671f\u957f\u7684Bean\u4e2d\u6307\u5b9a\u4e00\u4e2a\u77ed\u7684"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"xml\u914d\u7f6e\u65b9\u5f0f"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"proxy-target-class")," ",(0,r.kt)("inlineCode",{parentName:"p"},"default=true"),"\u4f7f\u7528CGlib\u8fdb\u884c\u4ee3\u7406; ",(0,r.kt)("inlineCode",{parentName:"p"},"default=false")," \u65f6\u4f7f\u7528JDK\u52a8\u6001\u4ee3\u7406;"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"xml\u914d\u7f6e"),(0,r.kt)("p",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'\x3c!-- DefaultUserPreferences implements the UserPreferences interface --\x3e\n<bean id="userPreferences" class="com.stuff.DefaultUserPreferences" scope="session">\n    <aop:scoped-proxy proxy-target-class="false"/>\n</bean>\n<bean id="userManager" class="com.stuff.UserManager">\n    <property name="userPreferences" ref="userPreferences"/>\n</bean>\n')))),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"\u6ce8\u89e3\u65b9\u5f0f")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},' // CGLIB \u65b9\u5f0f\n @Scope(value="request", proxyMode = ScopedProxyMode.TARGET_CLASS)\n\n // JDK\u52a8\u6001\u4ee3\u7406 \u65b9\u5f0f\n @Scope(value="request", proxyMode = ScopedProxyMode.INTERFACES)\n')),(0,r.kt)("h2",{id:"\u5355\u4f8bbean\u4e2d\u7684\u6709\u539f\u578bbean"},"\u5355\u4f8bBean\u4e2d\u7684\u6709\u539f\u578bbean"),(0,r.kt)("p",null," \u65b9\u6cd5\u4e00\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"lookup"),",\u901a\u8fc7lookup\u4f1a\u81ea\u52a8\u53bb\u67e5\u627e\u7c7b\u578b\u4e00\u6837\u7684bean\u8fdb\u884c\u6ce8\u5165\uff1b\u6ce8\u610f\u4f7f\u7528lookup\u7684\u65b9\u6cd5\u5fc5\u987b\u4e3a\u62bd\u8c61\u65b9\u6cd5\uff1b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'@Component("AAA")\n@Scope(value = "prototype")\npublic class AAA {\n    @Bean\n    public AAA createAAA(A a,B b) {\n        return this;\n    }\n}\n\n@Component\npublic abstract class ControllerManager {\n\n    private AAA aaa;\n\n    @Lookup\n    public abstract AAA createAAA() ;\n\n    public void test() {\n        this.aaa = createAAA();\n    }\n}\n')),(0,r.kt)("p",null," \u65b9\u6cd5\u4e8c\uff1a\u5b9e\u73b0",(0,r.kt)("inlineCode",{parentName:"p"},"ApplicationContextAware"),"\u62ff\u5230",(0,r.kt)("inlineCode",{parentName:"p"},"beanFactory"),"\u5bf9\u8c61\uff0c\u6bcf\u6b21\u65b9\u6cd5\u8c03\u7528\u7684\u65f6\u5019\u90fd\u4f1a\u83b7\u53d6\u5230\u4e00\u4e2a\u65b0\u7684\u5355\u4f8bbean"),(0,r.kt)("h2",{id:"autowired-field\u5e95\u5c42\u5b9e\u73b0"},(0,r.kt)("inlineCode",{parentName:"h2"},"@Autowired")," field\u5e95\u5c42\u5b9e\u73b0"),(0,r.kt)("p",null," ",(0,r.kt)("inlineCode",{parentName:"p"},"@Autowired"),"\u5148\u4f1a\u6309\u7c7b\u578b\u6ce8\u5165\uff0c\u5982\u679c\u6709\u591a\u4e2a\u7c7b\u578b\uff0c\u5219\u6309\u7167\u540d\u5b57\u6ce8\u5165\uff1b\u5728\u6e90\u7801\u4e2d\u8bbe\u7f6e\u503c\u662f\u901a\u8fc7\u53cd\u5c04\u5b9e\u73b0",(0,r.kt)("inlineCode",{parentName:"p"},"org.springframework.beans.DirectFieldAccessor.FieldPropertyHandler#setValue")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'@Override\npublic void setValue(@Nullable Object value) throws Exception {\n    try {\n        ReflectionUtils.makeAccessible(this.field);\n        this.field.set(getWrappedInstance(), value);\n    } catch (IllegalAccessException ex) {\n        throw new InvalidPropertyException(getWrappedClass(), this.field.getName(),\n                "Field is not accessible", ex);\n    }\n}\n')),(0,r.kt)("h2",{id:"autowired\u6216\u8005resource\u6307\u5b9a\u5b9e\u73b0\u7c7b"},(0,r.kt)("inlineCode",{parentName:"h2"},"@Autowired"),"\u6216\u8005",(0,r.kt)("inlineCode",{parentName:"h2"},"@Resource"),"\u6307\u5b9a\u5b9e\u73b0\u7c7b"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5728\u67d0\u4e00\u4e2a\u5b50\u5b9e\u73b0\u7c7b\u4e0a\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"@Primary"),"\u6307\u5b9a\u8981\u6ce8\u5165\u7684Bean\u4e3a\u5f53\u524d\u7684bean, \u4ee5\u4e0b\u6ce8\u5165\u65b9\u5f0f\u4e8c\u9009\u4e00"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},"@Primary\n@Component\npublic class ProtoBeanImpl implements ProtoBean{\n}\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},"@Primary\n@Bean\npublic ProtoBeanImpl protoBean(){\n    return new ProtoBeanImpl();\n}\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},'@Qulifier("xxx")'),"\u6ce8\u89e3 \u6307\u5b9a\u8981\u6ce8\u5165\u7684bean\u7684\u7c7b\u578b"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},'@Qualifier("protoBeanImpl2")\n@Autowired\nprivate ProtoBean bean;\n')),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},'@Autowired\npublic SingleBean(@Qualifier("protoBeanImpl2") ProtoBean proto) {\n    this.protoBeanImpl2 = (ProtoBeanImpl2) proto;\n}\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"@Resource")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},'@Resource(name="protoBeanImpl2")\nprivate ProtoBean protoBean;\n// \u548c\u4e0b\u9762\u5199\u6cd5\u7b49\u540c\uff0c\u4e0d\u6307\u5b9aname\uff0c\u9ed8\u8ba4\u4e3a\u53d8\u91cf\u540d\n@Resource\nprivate ProtoBean protoBeanImpl2;\n')))),(0,r.kt)("h2",{id:"\u6784\u9020\u5668\u6ce8\u5165"},"\u6784\u9020\u5668\u6ce8\u5165"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"using constructor inject,do not need other annotation if all the properties is base type ,using\n",(0,r.kt)("inlineCode",{parentName:"p"},'@ConstrutorProperties({"xxx","xxx",...})')," to inject the value")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"if just one constructor here, need' not ",(0,r.kt)("inlineCode",{parentName:"p"},"@Autowired"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"only one multi-argument constructor can be set ",(0,r.kt)("inlineCode",{parentName:"p"},"@Autowired(required = true)"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"if one more constructor are annotationed with ",(0,r.kt)("inlineCode",{parentName:"p"}," @Autowired(required = false)"),"\nThe constructor with the greatest number of dependencies that can be satisfied\nby matching beans in the Spring container will be chosen")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"@Autowired"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"@Inject"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"@Value"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"@Resource")," annotations are handled by Spring\nBeanPostProcessor implementations"))),(0,r.kt)("h2",{id:"\u4f7f\u7528aspectj\u6ce8\u89e3\u8fdb\u884caop\u914d\u7f6e\u597d\u8fd8\u662fxml"},"\u4f7f\u7528AspectJ\u6ce8\u89e3\u8fdb\u884cAOP\u914d\u7f6e\u597d\u8fd8\u662fxml"),(0,r.kt)("p",null," \u4f7f\u7528xml\u914d\u7f6e\u65f6\uff0c\u5c06AOP\u914d\u7f6e\u5206\u6563\u4e86\uff0c\u4e00\u90e8\u5206\u5728xml\u4e2d\uff0c\u4e00\u90e8\u5206\u5728\u540e\u53f0\u7684class\u7c7b\u4e2d\u3002\u4e0d\u7b26\u5408DRY\u539f\u5219\u3002"),(0,r.kt)("p",null," \u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"@AspectJ"),"\uff0c\u5219\u5c06\u6574\u4e2aAOP\u7684\u914d\u7f6e\u653e\u5728\u4e00\u4e2a\u914d\u7f6e\u7c7b\u4e2d\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"@AspectJ"),"\u652f\u6301\u989d\u5916\u7684\u5b9e\u4f8b\u6a21\u578b\u66f4\u4e30\u5bcc\u7684\u7ec4\u5408\uff0c\u662f\u6bcf\u4e2a\u5207\u9762\u6210\u4e3a\u4e00\u4e2a\u6a21\u578b\u5355\u5143\u3002\n\u540c\u65f6\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"@AspectJ")," \u80fd\u88ab Spring AOP \u548cAspectJ \u89e3\u6790\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528AspectJ\u7684\u8bed\u6cd5\u53bb\u5b9e\u73b0\u66f4\u52a0\u590d\u6742\u7684\u5207\u9762\u903b\u8f91"),(0,r.kt)("h2",{id:"\u95ed\u5305-\u548c-\u56de\u8c03"},"\u95ed\u5305 \u548c \u56de\u8c03"),(0,r.kt)("p",null," \u95ed\u5305:\u95ed\u5305\u548c\u533f\u540d\u51fd\u6570\u7ecf\u5e38\u88ab\u7528\u4f5c\u540c\u4e49\u8bcd\u3002\u4f46\u4e25\u683c\u6765\u8bf4\uff0c\u533f\u540d\u51fd\u6570\u5c31\u662f\u5b57\u9762\u610f\u4e49\u4e0a\u6ca1\u6709\u88ab\u8d4b\u4e88\u540d\u79f0\u7684\u51fd\u6570\uff0c\u800c\u95ed\u5305\u5219\u5b9e\u9645\u4e0a\u662f\u4e00\u4e2a\u51fd\u6570\u7684\u5b9e\u4f8b\uff0c\u4e5f\u5c31\u662f\u8bf4\u662f\u5b58\u5728\u4e8e\u5185\u5b58\u91cc\u7684\u67d0\u4e2a\u7ed3\u6784\u4f53\u3002\u5982\u679c\u4ece\u5b9e\u73b0\u4e0a\u6765\u770b\u7684\u8bdd\uff0c\u533f\u540d\u51fd\u6570\u5982\u679c\u6ca1\u6709\u6355\u6349\u81ea\u7531\u53d8\u91cf\uff0c\u90a3\u4e48\u5b83\u5176\u5b9e\u53ef\u4ee5\u88ab\u5b9e\u73b0\u4e3a\u4e00\u4e2a",(0,r.kt)("strong",{parentName:"p"},"\u51fd\u6570\u6307\u9488"),"\uff0c\u6216\u8005\u76f4\u63a5\u5185\u8054\u5230\u8c03\u70b9\uff0c\u5982\u679c\u5b83\u6355\u6349\u4e86\u81ea\u7531\u53d8\u91cf\u90a3\u4e48\u5b83\u5c06\u662f\u4e00\u4e2a\u95ed\u5305\uff1b\u800c\u95ed\u5305\u5219\u610f\u5473\u7740\u540c\u65f6\u5305\u62ec\u51fd\u6570\u6307\u9488\u548c\u73af\u5883\u4e24\u4e2a\u5173\u952e\u5143\u7d20\u3002",(0,r.kt)("a",{parentName:"p",href:"https://zh.wikipedia.org/wiki/%E9%97%AD%E5%8C%85_(%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%A7%91%E5%AD%A6)"},"\u53c2\u8003\u51fa\u5904"),"\n",(0,r.kt)("a",{parentName:"p",href:"https://zh.wikipedia.org/wiki/%E9%97%AD%E5%8C%85_(%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%A7%91%E5%AD%A6)"},"Closure Sample")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public interface Adder {\n    int add(int x);\n}\n\npublic static Adder makeAdder(final int n) {\n    return new Adder() {\n        public int add(int x) {\n            return x + n;\n        }\n    };\n}\n")),(0,r.kt)("p",null," \u56de\u8c03\uff1a\u5728\u8ba1\u7b97\u673a\u7a0b\u5e8f\u8bbe\u8ba1\u4e2d\uff0c\u56de\u8c03\u51fd\u6570\uff0c\u6216\u7b80\u79f0\u56de\u8c03\uff08Callback \u5373call then back \u88ab\u4e3b\u51fd\u6570\u8c03\u7528\u8fd0\u7b97\u540e\u4f1a\u8fd4\u56de\u4e3b\u51fd\u6570\uff09\uff0c\u662f\u6307\u901a\u8fc7\u53c2\u6570\u5c06\u51fd\u6570\u4f20\u9012\u5230\u5b83\u4ee3\u7801\u7684\uff0c\u67d0\u4e00\u5757\u53ef\u6267\u884c\u4ee3\u7801\u7684\u5f15\u7528",(0,r.kt)("a",{parentName:"p",href:"https://zh.wikipedia.org/wiki/%E5%9B%9E%E8%B0%83%E5%87%BD%E6%95%B0"},"\u53c2\u8003\u51fa\u5904"),"\n",(0,r.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/19405421/what-is-a-callback-method-in-java-term-seems-to-be-used-loosely"},"Callback Sample")," "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"class RemoteClass {\n\n    private OnChangeListener mOnChangeListener;\n\n    void makeSomeChanges() {\n        /*\n        .. do something here and call callback\n        */\n        mOnChangeListener.onChanged(this, 1);\n    }\n\n    public void setOnChangeListener(OnChangeListener listener) {\n        mOnChangeListener = listener;\n    }\n\n    public interface OnChangeListener {\n        void onChanged(RemoteClass remoteClass, int test);\n    }\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'class Test {\n\n    public static void main(String[] args) {    \n        RemoteClass obj = new RemoteClass();\n        obj.setOnChangeListener(demoChanged);\n        obj.makeSomeChanges();\n    }\n    // this case remind me of spring framework lots of anonymous ObjectFactory call back\n    private static RemoteClass.OnChangeListener demoChanged = new RemoteClass.OnChangeListener() {\n        @Override\n        public void onChanged(RemoteClass remoteClass, int incoming) {\n            switch (incoming) {\n                case 1:\n                    System.out.println("I will take appropriate action!");\n                    break;\n                default:\n                    break;\n            }\n        }\n    };\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// callback in springframework 4.3.x \n// @see org.springframework.beans.factory.support.AbstractBeanFactory#doGetBean\n// Create bean instance.\nif (mbd.isSingleton()) {\n    sharedInstance = getSingleton(beanName, new ObjectFactory<Object>() {\n        @Override\n        public Object getObject() throws BeansException {\n            try {\n                return createBean(beanName, mbd, args);\n            }\n            catch (BeansException ex) {\n                // Explicitly remove instance from singleton cache: It might have been put there\n                // eagerly by the creation process, to allow for circular reference resolution.\n                // Also remove any beans that received a temporary reference to the bean.\n                destroySingleton(beanName);\n                throw ex;\n            }\n        }\n    });\n    bean = getObjectForBeanInstance(sharedInstance, name, beanName, mbd);\n}\n")),(0,r.kt)("h2",{id:"configurable-configuration"},(0,r.kt)("inlineCode",{parentName:"h2"},"@Configurable")," ",(0,r.kt)("inlineCode",{parentName:"h2"},"@Configuration")),(0,r.kt)("p",null," ",(0,r.kt)("inlineCode",{parentName:"p"},"@Configuration")," \u662f\u914d\u7f6e\u7c7b"),(0,r.kt)("p",null," ",(0,r.kt)("inlineCode",{parentName:"p"},"@Configurable")," \u5b83\u662f\u4e00\u4e2abean\u6240\u4f9d\u8d56\u7684Aspect,\u5e76\u4e14\u4e0d\u88abSpring\u7ba1\u7406\uff0c\u4f46\u662f\u53ef\u4ee5\u81ea\u52a8\u6ce8\u5165"),(0,r.kt)("h2",{id:"spring-boot\u81ea\u5b9a\u4e49\u4e00\u4e2aevent\u53d1\u5e03"},"Spring Boot\u81ea\u5b9a\u4e49\u4e00\u4e2aEvent\u53d1\u5e03"),(0,r.kt)("p",null," ",(0,r.kt)("em",{parentName:"p"},"\u672c\u6848\u4f8b\u4f7f\u7528\u5230\u4e86",(0,r.kt)("inlineCode",{parentName:"em"},"SpEL"),"(Spring Express Language)\u8868\u8fbe\u5f0f")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5b9a\u4e49\u81ea\u5df1\u7684\u4e8b\u4ef6",(0,r.kt)("inlineCode",{parentName:"li"},"MyEvent"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * @Author: WhaleFall541\n * @Date: 2021/7/12 21:38\n */\npublic class MyEvent extends ApplicationEvent {\n    private final String address;\n    private final String content;\n    public MyEvent(Object source, String address, String content) {\n        super(source);\n        this.address = address;\n        this.content = content;\n    }\n    // getter and setter omit\n    @Override\n    public String toString() {\n        return \"MyEvent{\" +\n                \"address='\" + address + '\\'' +\n                \", content='\" + content + '\\'' +\n                '}';\n    }\n}\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"\u81ea\u5b9a\u4e49\u4e8b\u4ef6\u53d1\u5e03\u7c7b",(0,r.kt)("inlineCode",{parentName:"li"},"MyEventPublish"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'/**\n * @Author: WhaleFall541\n * @Date: 2021/7/12 21:41\n */\n@Component\npublic class MyEventPublish implements ApplicationEventPublisherAware {\n    private ApplicationEventPublisher publisher;\n\n    @Override\n    public void setApplicationEventPublisher(ApplicationEventPublisher applicationEventPublisher) {\n        this.publisher = applicationEventPublisher;\n    }\n\n    public void publish(String address, String content) {\n        if ("aaa".equals(address)) {\n            publisher.publishEvent(new MyEvent(this, address, content));\n            return;\n        }\n    }\n}\n')),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"\u7f16\u5199\u4e8b\u4ef6\u76d1\u542c\u7c7b")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'/**\n * @Author: WhaleFall541\n * @Date: 2021/7/12 21:38\n */\n@Component\npublic class MyListener implements ApplicationEventPublisherAware {\n    private Log log = LogFactory.getLog(MyListener.class);\n\n    // SpEL #a0 \u4ee3\u8868\u7b2c\u4e00\u4e2a\u5165\u53c2\n    // @EventListener(condition = "#a0.content == \'foo\'")\n    \n    // SpEL #event  \u4ee3\u8868\u540d\u79f0\u76f8\u540c\u7684\u53c2\u6570\n    // @EventListener(condition = "#event.content == \'foo\'")\n    \n    // \u5982\u679c\u8981\u8868\u793a\u4e00\u4e2a\u5bf9\u8c61\u8981\u4f7f\u7528@XXX testMethod\u4e3a\u5bb9\u5668\u4e2dbean\u7684\u540d\u5b57\n    @EventListener(condition = "@testMethod.test().equals(#a0.content)")\n    \n    // @EventListener({ContextStartedEvent.class, ContextRefreshedEvent.class})\n    public void process(MyEvent event) {\n        System.err.println("event test is ok " + event);\n    }\n}\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"TestMethod")," \u7c7b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},' @Component\n public class TestMethod {\n     public List<String> test() {\n         List<String> al = new ArrayList();\n         al.add("foo");\n         al.add("fool");\n         return al;\n     }\n }\n')),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u6d4b\u8bd5\u7c7b"),(0,r.kt)("p",{parentName:"li"},"\u6ce8\u610f\u8981\u5f15\u5165\u4f9d\u8d56,\u6b64\u5904\u5217\u4e3e",(0,r.kt)("inlineCode",{parentName:"p"},"gradle"),"\u4f9d\u8d56\u914d\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"testImplementation 'org.springframework.boot:spring-boot-starter-test'")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'@SpringBootTest\nclass Charter1Tests implements ApplicationContextAware {\n@Test\n void testApplicationEvent() {\n     MyEventPublish bean = context.getBean(MyEventPublish.class);\n     bean.publish("aaa", "foo");\n }\n}\n')),(0,r.kt)("admonition",{title:"\u534f\u8bae",type:"tip"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u672c\u4f5c\u54c1\u4ee3\u7801\u90e8\u5206\u91c7\u7528 ",(0,r.kt)("a",{parentName:"p",href:"https://www.apache.org/licenses/LICENSE-2.0"},"Apache 2.0\u534f\u8bae"),"\u8fdb\u884c\u8bb8\u53ef\u3002\u9075\u5faa\u8bb8\u53ef\u7684\u524d\u63d0\u4e0b\uff0c\u4f60\u53ef\u4ee5\u81ea\u7531\u5730\u5bf9\u4ee3\u7801\u8fdb\u884c\u4fee\u6539\uff0c\u518d\u53d1\u5e03\uff0c\u53ef\u4ee5\u5c06\u4ee3\u7801\u7528\u4f5c\u5546\u4e1a\u7528\u9014\u3002\u4f46\u8981\u6c42\u4f60\uff1a"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u7f72\u540d"),"\uff1a\u5728\u539f\u6709\u4ee3\u7801\u548c\u884d\u751f\u4ee3\u7801\u4e2d\uff0c\u4fdd\u7559\u539f\u4f5c\u8005\u7f72\u540d\u53ca\u4ee3\u7801\u6765\u6e90\u4fe1\u606f\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u4fdd\u7559\u8bb8\u53ef\u8bc1"),"\uff1a\u5728\u539f\u6709\u4ee3\u7801\u548c\u884d\u751f\u4ee3\u7801\u4e2d\uff0c\u4fdd\u7559Apache 2.0\u534f\u8bae\u6587\u4ef6\u3002"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u672c\u4f5c\u54c1\u6587\u6863\u90e8\u5206\u91c7\u7528",(0,r.kt)("a",{parentName:"p",href:"http://creativecommons.org/licenses/by/4.0/"},"\u77e5\u8bc6\u5171\u4eab\u7f72\u540d 4.0 \u56fd\u9645\u8bb8\u53ef\u534f\u8bae"),"\u8fdb\u884c\u8bb8\u53ef\u3002 \u9075\u5faa\u8bb8\u53ef\u7684\u524d\u63d0\u4e0b\uff0c\u4f60\u53ef\u4ee5\u81ea\u7531\u5730\u5171\u4eab\uff0c\u5305\u62ec\u5728\u4efb\u4f55\u5a92\u4ecb\u4e0a\u4ee5\u4efb\u4f55\u5f62\u5f0f\u590d\u5236\u3001\u53d1\u884c\u672c\u4f5c\u54c1\uff0c\u4ea6\u53ef\u4ee5\u81ea\u7531\u5730\u6f14\u7ece\u3001\u4fee\u6539\u3001\u8f6c\u6362\u6216\u4ee5\u672c\u4f5c\u54c1\u4e3a\u57fa\u7840\u8fdb\u884c\u4e8c\u6b21\u521b\u4f5c\u3002\u4f46\u8981\u6c42\u4f60\uff1a"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u7f72\u540d"),"\uff1a\u5e94\u5728\u4f7f\u7528\u672c\u6587\u6863\u7684\u5168\u90e8\u6216\u90e8\u5206\u5185\u5bb9\u65f6\u5019\uff0c\u6ce8\u660e\u539f\u4f5c\u8005\u53ca\u6765\u6e90\u4fe1\u606f\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u975e\u5546\u4e1a\u6027\u4f7f\u7528"),"\uff1a\u4e0d\u5f97\u7528\u4e8e\u5546\u4e1a\u51fa\u7248\u6216\u5176\u4ed6\u4efb\u4f55\u5e26\u6709\u5546\u4e1a\u6027\u8d28\u7684\u884c\u4e3a\u3002\u5982\u9700\u5546\u4e1a\u4f7f\u7528\uff0c\u8bf7\u8054\u7cfb\u4f5c\u8005\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u76f8\u540c\u65b9\u5f0f\u5171\u4eab\u7684\u6761\u4ef6"),"\uff1a\u5728\u672c\u6587\u6863\u57fa\u7840\u4e0a\u6f14\u7ece\u3001\u4fee\u6539\u7684\u4f5c\u54c1\uff0c\u5e94\u5f53\u7ee7\u7eed\u4ee5\u77e5\u8bc6\u5171\u4eab\u7f72\u540d 4.0\u56fd\u9645\u8bb8\u53ef\u534f\u8bae\u8fdb\u884c\u8bb8\u53ef\u3002"))))))}u.isMDXComponent=!0}}]);