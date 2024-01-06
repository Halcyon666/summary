"use strict";(self.webpackChunksummary=self.webpackChunksummary||[]).push([[2480],{5944:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var s=r(5893),a=r(1151);const o={title:"Bean\u7684\u6784\u9020\u8fc7\u7a0b",sidebar_label:"Bean\u7684\u6784\u9020\u8fc7\u7a0b",sidebar_position:5},t=void 0,i={id:"Java/Spring/Bean Creating Process",title:"Bean\u7684\u6784\u9020\u8fc7\u7a0b",description:"\u672c\u6587\u76f8\u5173\u4ee3\u7801(\u6765\u81ea\u5b98\u65b9\u6e90\u7801spring-test\u6a21\u5757)\u8bf7\u53c2\u89c1spring-framework org.springframework.mylearntest\u5305\u4e0b\u3002",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/01-Java/02-Spring/Bean Creating Process.mdx",sourceDirName:"01-Java/02-Spring",slug:"/Java/Spring/Bean Creating Process",permalink:"/en/Java/Spring/Bean Creating Process",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Bean\u7684\u6784\u9020\u8fc7\u7a0b",sidebar_label:"Bean\u7684\u6784\u9020\u8fc7\u7a0b",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"BeanFactoryPostProcessor",permalink:"/en/Java/Spring/BeanFactoryPostProcessor"},next:{title:"ApplicationContext",permalink:"/en/Java/Spring/ApplicationContext"}},c={},l=[{value:"Bean\u7684\u5b9e\u4f8b\u5316\u4e0eBeanWrapper",id:"bean\u7684\u5b9e\u4f8b\u5316\u4e0ebeanwrapper",level:2},{value:"\u83b7\u53d6BeanWrapper",id:"\u83b7\u53d6beanwrapper",level:3},{value:"\u8bbe\u7f6eBean\u7684\u76f8\u5e94\u5c5e\u6027",id:"\u8bbe\u7f6ebean\u7684\u76f8\u5e94\u5c5e\u6027",level:3},{value:"\u5404\u79cdAware\u63a5\u53e3",id:"\u5404\u79cdaware\u63a5\u53e3",level:3},{value:"BeanPostProcessor",id:"beanpostprocessor",level:3},{value:"\u81ea\u5b9a\u4e49BeanPostProcessor",id:"\u81ea\u5b9a\u4e49beanpostprocessor",level:4},{value:"InitializingBean \u548c init-method",id:"initializingbean-\u548c-init-method",level:3}];function p(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components},{Details:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["\u672c\u6587\u76f8\u5173\u4ee3\u7801(\u6765\u81ea",(0,s.jsx)(n.a,{href:"https://github.com/spring-projects/spring-framework.git",title:"\u5b98\u65b9\u6e90\u7801",children:"\u5b98\u65b9\u6e90\u7801"}),"spring-test\u6a21\u5757)\u8bf7\u53c2\u89c1",(0,s.jsx)(n.a,{href:"https://github.com/Halcyon666/spring-framework-modified/tree/main/spring-test",children:"spring-framework"})," org.springframework.mylearntest\u5305\u4e0b\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u5bb9\u5668\u542f\u52a8\u4e4b\u540e\uff0c\u5e76\u4e0d\u4f1a\u9a6c\u4e0a\u5c31\u5b9e\u4f8b\u5316\u76f8\u5e94\u7684bean\u5b9a\u4e49\u3002\u6211\u4eec\u77e5\u9053\uff0c\u5bb9\u5668\u73b0\u5728\u4ec5\u4ec5\u62e5\u6709\u6240\u6709\u5bf9\u8c61\u7684BeanDefinition\u6765\u4fdd\u5b58\u5b9e\u4f8b\u5316\u9636\u6bb5\u5c06\u8981\u7528\u7684\u5fc5\u8981\u4fe1\u606f\u3002\u53ea\u6709\u5f53\u8bf7\u6c42\u65b9\u901a\u8fc7BeanFactory\u7684getBean()\u65b9\u6cd5\u6765\u8bf7\u6c42\u67d0\u4e2a\u5bf9\u8c61\u5b9e\u4f8b\u7684\u65f6\u5019\uff0c\u624d\u6709\u53ef\u80fd\u89e6\u53d1Bean\u5b9e\u4f8b\u5316\u9636\u6bb5\u7684\u6d3b\u52a8\u3002 BeanFactory\u7684getBean()\u6cd5\u53ef\u4ee5\u88ab\u5ba2\u6237\u7aef\u5bf9\u8c61\u663e\u5f0f\u8c03\u7528\uff0c\u4e5f\u53ef\u4ee5\u5728\u5bb9\u5668\u5185\u90e8\u9690\u5f0f\u5730\u88ab\u8c03\u7528\u3002\u9690\u5f0f\u8c03\u7528\u6709\u5982\u4e0b\u4e24\u79cd\u60c5\u51b5\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u5bf9\u4e8eBeanFactory\u6765\u8bf4\uff0c\u5bf9\u8c61\u5b9e\u4f8b\u5316\u9ed8\u8ba4\u91c7\u7528\u5ef6\u8fdf\u521d\u59cb\u5316\u3002\u901a\u5e38\u60c5\u51b5\u4e0b\uff0c\u5f53\u5bf9\u8c61A\u88ab\u8bf7\u6c42\u800c\u9700\u8981\u7b2c\u4e00\u6b21\u5b9e\u4f8b\u5316\u7684\u65f6\u5019\uff0c\u5982\u679c\u5b83\u6240\u4f9d\u8d56\u7684\u5bf9\u8c61B\u4e4b\u524d\u540c\u6837\u6ca1\u6709\u88ab\u5b9e\u4f8b\u5316\uff0c\u90a3\u4e48\u5bb9\u5668\u4f1a\u5148\u5b9e\u4f8b\u5316\u5bf9\u8c61A\u6240\u4f9d\u8d56\u7684\u5bf9\u8c61\u3002\u8fd9\u65f6\u5bb9\u5668\u5185\u90e8\u5c31\u4f1a\u9996\u5148\u5b9e\u4f8b\u5316\u5bf9\u8c61B\n\uff0c\u4ee5\u53ca\u5bf9\u8c61A\u4f9d\u8d56\u7684\u5176\u4ed6\u8fd8\u6ca1\u6709\u5b9e\u4f8b\u5316\u7684\u5bf9\u8c61\u3002\u8fd9\u79cd\u60c5\u51b5\u662f\u5bb9\u5668\u5185\u90e8\u8c03\u7528getBean()\uff0c\u5bf9\u4e8e\u672c\u6b21\u8bf7\u6c42\u7684\u8bf7\u6c42\u65b9\u662f\u9690\u5f0f\u7684\u3002"}),"\n",(0,s.jsx)(n.p,{children:"ApplicationContext\u542f\u52a8\u4e4b\u540e\u4f1a\u5b9e\u4f8b\u5316\u6240\u6709\u7684bean\u5b9a\u4e49\uff0c\u8fd9\u4e2a\u7279\u6027\u5728\u672c\u4e66\u4e2d\u5df2\u7ecf\u591a\u6b21\u63d0\u5230\u3002\u4f46ApplicationContext\u5728\u5b9e\u73b0\u7684\u8fc7\u7a0b\u4e2d\u4f9d\u7136\u9075\u5faaSpring\n\u5bb9\u5668\u5b9e\u73b0\u6d41\u7a0b\u7684\u4e24\u4e2a\u9636\u6bb5\uff0c\u53ea\u4e0d\u8fc7\u5b83\u4f1a\u5728\u542f\u52a8\u9636\u6bb5\u7684\u6d3b\u52a8\u5b8c\u6210\u4e4b\u540e\uff0c\u7d27\u63a5\u7740\u8c03\u7528\u6ce8\u518c\u5230\u8be5\u5bb9\u5668\u7684\u6240\u6709bean\u5b9a\u4e49\u7684\u5b9e\u4f8b\u5316\u65b9\u6cd5getBean()\u3002\u8fd9\u5c31\u662f\u4e3a\u4ec0\u4e48\u5f53\u4f60\u5f97\u5230ApplicationContext\u7c7b\u578b\u7684\u5bb9\u5668\u5f15\u7528\u65f6\uff0c\u5bb9\u5668\u5185\u6240\u6709\u5bf9\u8c61\u5df2\u7ecf\u88ab\u5168\u90e8\u5b9e\u4f8b\u5316\u5b8c\u6210\u3002\u4e0d\u4fe1\u4f60\u67e5\u4e00\u4e0b\u7c7borg.AbstractApplicationContext\u7684refresh()\u65b9\u6cd5\u3002"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://s2.loli.net/2023/07/15/wGtkiR4ULcpFfQj.png",alt:""})}),"\n",(0,s.jsx)(n.h2,{id:"bean\u7684\u5b9e\u4f8b\u5316\u4e0ebeanwrapper",children:"Bean\u7684\u5b9e\u4f8b\u5316\u4e0eBeanWrapper"}),"\n",(0,s.jsx)(n.h3,{id:"\u83b7\u53d6beanwrapper",children:"\u83b7\u53d6BeanWrapper"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u5bb9\u5668\u5728\u5185\u90e8\u5b9e\u73b0\u7684\u65f6\u5019\uff0c\u91c7\u7528\u201c\u7b56\u7565\u6a21\u5f0f\uff08Strategy Pattern\uff09\u201d\u6765\u51b3\u5b9a\u91c7\u7528\u4f55\u79cd\u65b9\u5f0f\u521d\u59cb\u5316bean\u5b9e\u4f8b\u3002\u901a\u5e38\uff0c\u53ef\u4ee5\u901a\u8fc7\u53cd\u5c04\u6216\u8005CGLIB\u52a8\u6001\u5b57\u8282\u7801\u751f\u6210\u6765\u521d\u59cb\u5316\u76f8\u5e94\u7684bean\u5b9e\u4f8b\u6216\u8005\u52a8\u6001\u751f\u6210\u5176\u5b50\u7c7b\u3002",(0,s.jsx)(n.code,{children:"org.springframework.beans.factory.support.InstantiationStrategy"}),"\u5b9a\u4e49\u662f\u5b9e\u4f8b\u5316\u7b56\u7565\u7684\u62bd\u8c61\u63a5\u53e3\uff0c\u5176\u76f4\u63a5\u5b50\u7c7bSimpleInstantiationStrategy\u5b9e\u73b0\u4e86\u7b80\u5355\u7684\u5bf9\u8c61\u5b9e\u4f8b\u5316\u529f\u80fd\uff0c\u53ef\u4ee5\u901a\u8fc7\u53cd\u5c04\u6765\u5b9e\u4f8b\u5316\u5bf9\u8c61\u5b9e\u4f8b\uff0c\u4f46\u4e0d\u652f\u6301\u65b9\u6cd5\u6ce8\u5165\u65b9\u5f0f\u7684\u5bf9\u8c61\u5b9e\u4f8b\u5316\u3002"]}),"\n",(0,s.jsx)(n.li,{children:"CglibSubclassingInstantiationStrategy\u7ee7\u627f\u4e86SimpleInstantiationStrategy\u7684\u4ee5\u53cd\u5c04\u65b9\u5f0f\u5b9e\u4f8b\u5316\u5bf9\u8c61\u7684\u529f\u80fd\uff0c\u5e76\u4e14\u901a\u8fc7CGLIB\u7684\u52a8\u6001\u5b57\u8282\u7801\u751f\u6210\u529f\u80fd\uff0c\u8be5\u7b56\u7565\u5b9e\u73b0\u7c7b\u53ef\u4ee5\u52a8\u6001\u751f\u6210\u67d0\u4e2a\u7c7b\u7684\u5b50\u7c7b\uff0c\u8fdb\u800c\u6ee1\u8db3\u4e86\u65b9\u6cd5\u6ce8\u5165\u6240\u9700\u7684\u5bf9\u8c61\u5b9e\u4f8b\u5316\u6c42\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5bb9\u5668\u5185\u90e8\u91c7\u7528\u7684CglibSubclassingInstantiationStrategy\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u5bb9\u5668\u53ea\u8981\u6839\u636e\u76f8\u5e94bean\u5b9a\u4e49\u7684BeanDefintion\u53d6\u5f97\u5b9e\u4f8b\u5316\u4fe1\u606f\uff0c\u7ed3\u5408CglibSubclassingInstantiationStrategy\u4ee5\u53ca\u4e0d\u540c\u7684bean\n\u5b9a\u4e49\u7c7b\u578b\uff0c\u5c31\u53ef\u4ee5\u8fd4\u56de\u5b9e\u4f8b\u5316\u5b8c\u6210\u7684\u5bf9\u8c61\u5b9e\u4f8b\u3002\u4f46\u662f\uff0c\u8fd4\u56de\u65b9\u5f0f\u4e0a\u6709\u4e9b\u201c\u70b9\u7f00\u201d\u3002\u4e0d\u662f\u76f4\u63a5\u8fd4\u56de\u6784\u9020\u5b8c\u6210\u7684\u5bf9\u8c61\u5b9e\u4f8b\uff0c\u800c\u662f\u4ee5BeanWrapper\u5bf9\u6784\u9020\u5b8c\u6210\u7684\u5bf9\u8c61\u5b9e\u4f8b\u8fdb\u884c\u5305\u88f9\uff0c\u8fd4\u56de\u76f8\u5e94\u7684BeanWrapper\u5b9e\u4f8b\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"\u8bbe\u7f6ebean\u7684\u76f8\u5e94\u5c5e\u6027",children:"\u8bbe\u7f6eBean\u7684\u76f8\u5e94\u5c5e\u6027"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"BeanWrapper\u63a5\u53e3\u901a\u5e38\u5728Spring\u6846\u67b6\u5185\u90e8\u4f7f\u7528\uff0c\u5b83\u6709\u4e00\u4e2a\u5b9e\u73b0\u7c7borg.springframework.beans.BeanWrapperImpl\u3002\u5176\u4f5c\u7528\u662f\u5bf9\u67d0\u4e2abean\u8fdb\u884c\u201c\u5305\u88f9\u201d\uff0c\u7136\u540e\u5bf9\u8fd9\u4e2a\u201c\u5305\u88f9\u201d\u7684bean\u8fdb\u884c\u64cd\u4f5c\uff0c\u6bd4\u5982\u8bbe\u7f6e\u6216\u8005\u83b7\u53d6bean\u7684\u76f8\u5e94\u5c5e\u6027\u503c\u3002\u800c\u5728\u7b2c\u4e00\u6b65\u7ed3\u675f\u540e\u8fd4\u56deBeanWrapper\u5b9e\u4f8b\u800c\u4e0d\u662f\u539f\u5148\u7684\u5bf9\u8c61\u5b9e\u4f8b\uff0c\u5c31\u662f\u4e3a\u4e86\u7b2c\u4e8c\u6b65\u201c\u8bbe\u7f6e\u5bf9\u8c61\u5c5e\u6027\u201d\u3002"}),"\n",(0,s.jsx)(n.li,{children:"BeanWrapper\u5b9a\u4e49\u7ee7\u627f\u4e86org.springframework.beans.PropertyAccessor\u63a5\u53e3\uff0c\u53ef\u4ee5\u4ee5\u7edf\u4e00\u7684\u65b9\u5f0f\u5bf9\u5bf9\u8c61\u5c5e\u6027\u8fdb\u884c\u8bbf\u95ee\uff1b BeanWrapper\n\u5b9a\u4e49\u540c\u65f6\u53c8\u76f4\u63a5\u6216\u8005\u95f4\u63a5\u7ee7\u627f\u4e86PropertyEditorRegistry\u548cTypeConverter\u63a5\u53e3\u3002\u4e0d\u77e5\u4f60\u662f\u5426\u8fd8\u8bb0\u5f97CustomEditorConfigurer\uff1f\u5f53\u628a\u5404\u79cdPropertyEditor\u6ce8\u518c\u7ed9\u5bb9\u5668\u65f6\uff0c\u77e5\u9053\u540e\u9762\u8c01\u7528\u5230\u8fd9\u4e9bPropertyEditor\u5417\uff1f\u5bf9\uff0c\u5c31\u662fBeanWrapper\uff01\u5728\u7b2c\u4e00\u6b65\u6784\u9020\u5b8c\u6210\u5bf9\u8c61\u4e4b\u540e\uff0c Spring\u4f1a\u6839\u636e\u5bf9\u8c61\u5b9e\u4f8b\u6784\u9020\u4e00\u4e2aBeanWrapperImpl\u5b9e\u4f8b\uff0c\u7136\u540e\u5c06\u4e4b\u524dCustomEditorConfigurer\u6ce8\u518c\u7684PropertyEditor\u590d\u5236\u4e00\u4efd\u7ed9BeanWrapperImpl\u4f8b\uff08\u8fd9\u5c31\u662fBeanWrapper\u540c\u65f6\u53c8\u662fPropertyEditorRegistry\u7684\u539f\u56e0\uff09\u3002\u8fd9\u6837\uff0c\u5f53BeanWrapper\u8f6c\u6362\u7c7b\u578b\u3001\u8bbe\u7f6e\u5bf9\u8c61\u5c5e\u6027\u503c\u65f6\uff0c\u5c31\u4e0d\u4f1a\u65e0\u4ece\u4e0b\u624b\u4e86\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://s2.loli.net/2023/07/22/Bm7DhsKjL9uAY2v.png",alt:"image-20230722171819091"})}),"\n",(0,s.jsxs)(r,{children:[(0,s.jsx)("summary",{children:"\u4f7f\u7528BeanWrapper\u64cd\u4f5c\u5bf9\u8c61"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'Object provider = Class.forName("package.name.FXNewsProvider").newInstance(); \nObject listener = Class.forName("package.name.DowJonesNewsListener").newInstance();\nObject persister = Class.forName("package.name.DowJonesNewsPersister").newInstance();\nBeanWrapper newsProvider = new BeanWrapperImpl(provider); \nnewsProvider.setPropertyValue("newsListener", listener);\nnewsProvider.setPropertyValue("newPersistener", persister);\n\nassertTrue(newsProvider.getWrappedInstance() instanceof FXNewsProvider);\nassertSame(provider, newsProvider.getWrappedInstance());\nassertSame(listener, newsProvider.getPropertyValue("newsListener"));\nassertSame(persister, newsProvider.getPropertyValue("newPersistener"));\n'})})]}),"\n",(0,s.jsxs)(r,{children:[(0,s.jsx)("summary",{children:"\u4f7f\u7528Java\u53cd\u5c04API\u64cd\u4f5c\u5bf9\u8c61"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'Object provider = Class.forName("package.name.FXNewsProvider").newInstance();\nObject listener = Class.forName("package.name.DowJonesNewsListener").newInstance();\nObject persister = Class.forName("package.name.DowJonesNewsPersister").newInstance();\n\nClass providerClazz = provider.getClass();\nField listenerField = providerClazz.getField("newsListener");\nlistenerField.set(provider, listener);\nField persisterField = providerClazz.getField("newsListener");\npersisterField.set(provider, persister);\nassertSame(listener, listenerField.get(provider));\nassertSame(persister, persisterField.get(provider));\n'})})]}),"\n",(0,s.jsx)(n.h3,{id:"\u5404\u79cdaware\u63a5\u53e3",children:"\u5404\u79cdAware\u63a5\u53e3"}),"\n",(0,s.jsx)(n.p,{children:"\u5f53\u5bf9\u8c61\u5b9e\u4f8b\u5316\u5b8c\u6210\u5e76\u4e14\u76f8\u5173\u5c5e\u6027\u4ee5\u53ca\u4f9d\u8d56\u8bbe\u7f6e\u5b8c\u6210\u4e4b\u540e\uff0c Spring\u5bb9\u5668\u4f1a\u68c0\u67e5\u5f53\u524d\u5bf9\u8c61\u5b9e\u4f8b\u662f\u5426\u5b9e\u73b0\u4e86\u4e00\u7cfb\u5217\u7684\u4ee5Aware\u547d\u540d\u7ed3\u5c3e\u7684\u63a5\u53e3\u5b9a\u4e49\u3002\u5982\u679c\u662f\uff0c\u5219\u5c06\u8fd9\u4e9bAware\u63a5\u53e3\u5b9a\u4e49\u4e2d\u89c4\u5b9a\u7684\u4f9d\u8d56\u6ce8\u5165\u7ed9\u5f53\u524d\u5bf9\u8c61\u5b9e\u4f8b\u3002\u8fd9\u4e9bAware\u63a5\u53e3\u4e3a\u5982\u4e0b\u51e0\u4e2a\u3002\n\u9488\u5bf9BeanFactory\u5bb9\u5668\u800c\u8a00"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"org.springframework.beans.factory.BeanNameAware\u3002\u5982\u679cSpring\u5bb9\u5668\u68c0\u6d4b\u5230\u5f53\u524d\u5bf9\u8c61\u5b9e\u4f8b\u5b9e\u73b0\u4e86\u8be5\u63a5\u53e3\uff0c\u4f1a\u5c06\u8be5\u5bf9\u8c61\u5b9e\u4f8b\u7684bean\u5b9a\u4e49\u5bf9\u5e94\u7684beanName\u8bbe\u7f6e\u5230\u5f53\u524d\u5bf9\u8c61\u5b9e\u4f8b\u3002"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"org.springframework.beans.factory.BeanClassLoaderAware\u3002\u5982\u679c\u5bb9\u5668\u68c0\u6d4b\u5230\u5f53\u524d\u5bf9\u8c61\u5b9e\u4f8b\u5b9e\u73b0\u4e86\u8be5\u63a5\u53e3\uff0c\u4f1a\u5c06\u5bf9\u5e94\u52a0\u8f7d\u5f53\u524dbean\u7684Classloader\n\u6ce8\u5165\u5f53\u524d\u5bf9\u8c61\u5b9e\u4f8b\u3002\u9ed8\u8ba4\u4f1a\u4f7f\u7528\u52a0\u8f7dorg.springframework.util.ClassUtils\u7c7b\u7684Classloader\u3002"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"org.springframework.beans.factory.BeanFactoryAware\u3002\u5728\u4ecb\u7ecd\u65b9\u6cd5\u6ce8\u5165\u7684\u65f6\u5019\uff0c\u6211\u4eec\u63d0\u5230\u8fc7\u4f7f\u7528\u8be5\u63a5\u53e3\u4ee5\u4fbf\u6bcf\u6b21\u83b7\u53d6prototype\u7c7b\u578bbean\n\u7684\u4e0d\u540c\u5b9e\u4f8b\u3002\u5982\u679c\u5bf9\u8c61\u58f0\u660e\u5b9e\u73b0\u4e86BeanFactoryAware\u63a5\u53e3\uff0c BeanFactory\u5bb9\u5668\u4f1a\u5c06\u81ea\u8eab\u8bbe\u7f6e\u5230\u5f53\u524d\u5bf9\u8c61\u5b9e\u4f8b\u3002\u8fd9\u6837\uff0c\u5f53\u524d\u5bf9\u8c61\u5b9e\u4f8b\u5c31\u62e5\u6709\u4e86\u4e00\u4e2aBeanFactory\u5bb9\u5668\u7684\u5f15\u7528\uff0c\u5e76\u4e14\u53ef\u4ee5\u5bf9\u8fd9\u4e2a\u5bb9\u5668\u5185\u5141\u8bb8\u8bbf\u95ee\u7684\u5bf9\u8c61\u6309\u7167\u9700\u8981\u8fdb\u884c\u8bbf\u95ee\u3002"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"org.springframework.context.ResourceLoaderAware \u3002 ApplicationContext \u5b9e\u73b0\u4e86Spring\u7684ResourceLoader\n\u63a5\u53e3\uff08\u540e\u9762\u4f1a\u63d0\u53ca\u8be6\u7ec6\u4fe1\u606f\uff09\u3002\u5f53\u5bb9\u5668\u68c0\u6d4b\u5230\u5f53\u524d\u5bf9\u8c61\u5b9e\u4f8b\u5b9e\u73b0\u4e86ResourceLoaderAware\u63a5\u53e3\u4e4b\u540e\uff0c\u4f1a\u5c06\u5f53\u524dApplicationContext\u81ea\u8eab\u8bbe\u7f6e\u5230\u5bf9\u8c61\u5b9e\u4f8b\uff0c\u8fd9\u6837\u5f53\u524d\u5bf9\u8c61\u5b9e\u4f8b\u5c31\u62e5\u6709\u4e86\u5176\u6240\u5728ApplicationContext\u5bb9\u5668\u7684\u4e00\u4e2a\u5f15\u7528\u3002"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"org.springframework.context.ApplicationEventPublisherAware\u3002 ApplicationContext\u4f5c\u4e3a\u4e00\u4e2a\u5bb9\u5668\uff0c\u540c\u65f6\u8fd8\u5b9e\u73b0\u4e86ApplicationEventPublisher\n\u63a5\u53e3\uff0c\u8fd9\u6837\uff0c\u5b83\u5c31\u53ef\u4ee5\u4f5c\u4e3aApplicationEventPublisher\u6765\u4f7f\u7528\u3002\u6240\u4ee5\uff0c\u5f53\u524dApplicationContext\u5bb9\u5668\u5982\u679c\u68c0\u6d4b\u5230\u5f53\u524d\u5b9e\u4f8b\u5316\u7684\u5bf9\u8c61\u5b9e\u4f8b\u58f0\u660e\u4e86ApplicationEventPublisherAware\u63a5\u53e3\uff0c\u5219\u4f1a\u5c06\u81ea\u8eab\u6ce8\u5165\u5f53\u524d\u5bf9\u8c61\u3002"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"org.springframework.context.MessageSourceAware\u3002 ApplicationContext\u901a\u8fc7MessageSource\u63a5\u53e3\u63d0\u4f9b\u56fd\u9645\u5316\u7684\u4fe1\u606f\u652f\u6301\uff0c\u5373I18n\n\uff08 Internationalization\uff09\u3002\u5b83\u81ea\u8eab\u5c31\u5b9e\u73b0\u4e86MessageSource\u63a5\u53e3\uff0c\u6240\u4ee5\u5f53\u68c0\u6d4b\u5230\u5f53\u524d\u5bf9\u8c61\u5b9e\u4f8b\u5b9e\u73b0\u4e86MessageSourceAware\u63a5\u53e3\uff0c\u5219\u4f1a\u5c06\u81ea\u8eab\u6ce8\u5165\u5f53\u524d\u5bf9\u8c61\u5b9e\u4f8b\u3002"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"org.springframework.context.ApplicationContextAware\u3002 \u5982\u679cApplicationContext\u5bb9\u5668\u68c0\u6d4b\u5230\u5f53\u524d\u5bf9\u8c61\u5b9e\u73b0\u4e86ApplicationContextAware\n\u63a5\u53e3\uff0c\u5219\u4f1a\u5c06\u81ea\u8eab\u6ce8\u5165\u5f53\u524d\u5bf9\u8c61\u5b9e\u4f8b\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"beanpostprocessor",children:"BeanPostProcessor"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["BeanPostProcessor ",(0,s.jsx)(n.strong,{children:"\u53ea\u8981\u8bb0\u4f4fBeanPostProcessor\u662f\u5b58\u5728\u4e8e\u5bf9\u8c61\u5b9e\u4f8b\u5316\u9636\u6bb5\uff0c\u800cBeanFactoryPostProcessor\u5219\u662f\u5b58\u5728\u4e8e\u5bb9\u5668\u542f\u52a8\u9636\u6bb5\u3002"})]}),"\n"]}),"\n",(0,s.jsxs)(r,{children:[(0,s.jsx)("summary",{children:"BeanPostProcessor"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"package org.springframework.beans.factory.config;\n\nimport org.springframework.beans.BeansException;\nimport org.springframework.lang.Nullable;\n\npublic interface BeanPostProcessor {\n\n    @Nullable\n    default Object postProcessBeforeInitialization(Object bean, String beanName) throws BeansException {\n        return bean;\n    }\n\n    @Nullable\n    default Object postProcessAfterInitialization(Object bean, String beanName) throws BeansException {\n        return bean;\n    }\n\n}\n"})})]}),"\n",(0,s.jsx)(n.h4,{id:"\u81ea\u5b9a\u4e49beanpostprocessor",children:"\u81ea\u5b9a\u4e49BeanPostProcessor"}),"\n",(0,s.jsx)(n.p,{children:"\u5047\u8bbe\u7cfb\u7edf\u4e2d\u6240\u6709\u7684IFXNewsListener\u5b9e\u73b0\u7c7b\u9700\u8981\u4ece\u67d0\u4e2a\u4f4d\u7f6e\u53d6\u5f97\u76f8\u5e94\u7684\u670d\u52a1\u5668\u8fde\u63a5\u5bc6\u7801\uff0c\u800c\u4e14\u7cfb\u7edf\u4e2d\u4fdd\u5b58\u7684\u5bc6\u7801\u662f\u52a0\u5bc6\u7684\uff0c\u90a3\u4e48\u5728IFXNewsListener\u53d1\u9001\u8fd9\u4e2a\u5bc6\u7801\u7ed9\u65b0\u95fb\u670d\u52a1\u5668\u8fdb\u884c\u8fde\u63a5\u9a8c\u8bc1\u7684\u65f6\u5019\uff0c\u9996\u5148\u9700\u8981\u5bf9\u7cfb\u7edf\u4e2d\u53d6\u5f97\u7684\u5bc6\u7801\u8fdb\u884c\u89e3\u5bc6\uff0c\u7136\u540e\u624d\u80fd\u53d1\u9001\u3002"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"\u6807\u6ce8\u9700\u8981\u8fdb\u884c\u89e3\u5bc6\u7684\u5b9e\u73b0\u7c7b"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u4e3a\u4e86\u80fd\u591f\u8bc6\u522b\u90a3\u4e9b\u9700\u8981\u5bf9\u670d\u52a1\u5668\u8fde\u63a5\u5bc6\u7801\u8fdb\u884c\u89e3\u5bc6\u7684IFXNewsListener\u5b9e\u73b0\uff0c\u6211\u4eec\u58f0\u660e\u4e86\u63a5\u53e3PasswordDecodable\uff0c\u5e76\u8981\u6c42\u76f8\u5173IFXNewsListener\u5b9e\u73b0\u7c7b\u5b9e\u73b0\u8be5\u63a5\u53e3\u3002"}),"\n",(0,s.jsxs)(r,{children:[(0,s.jsx)("summary",{children:"PasswordDecpdeable"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"package org.springframework.mylearntest.beanpostprocessor;\n\npublic interface PasswordDecodable {\n    String getEncodedPassword();\n    void setDecodedPassword(String password);\n}\n"})})]}),"\n",(0,s.jsxs)(r,{children:[(0,s.jsx)("summary",{children:"DowJonesNewsListener"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"package org.springframework.mylearntest.beanpostprocessor;\n\nimport org.springframework.mylearntest.directcode.FXNewsBean;\nimport org.springframework.mylearntest.directcode.IFXNewsListener;\n\npublic class DowJonesNewsListener implements IFXNewsListener,PasswordDecodable {\n    private String password;\n    public String[] getAvailableNewsIds() {\n        // \u7701\u7565\n        return new String[0];\n    }\n    public FXNewsBean getNewsByPK(String newsId) {\n        // \u7701\u7565\n        return null;\n    }\n    public void postProcessIfNecessary(String newsId) {\n        // \u7701\u7565\n    }\n    public String getEncodedPassword() {\n        return this.password;\n    }\n    public void setDecodedPassword(String password) {\n        this.password = password;\n    }\n}\n"})})]}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsx)(n.li,{children:"\u5b9e\u73b0\u76f8\u5e94\u7684BeanPostProcessor\u5bf9\u7b26\u5408\u6761\u4ef6\u7684Bean\u5b9e\u4f8b\u8fdb\u884c\u5904\u7406"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u6211\u4eec\u901a\u8fc7PasswordDecodable\u63a5\u53e3\u58f0\u660e\u6765\u533a\u5206\u5c06\u8981\u5904\u7406\u7684\u5bf9\u8c61\u5b9e\u4f8b\uff0c\u5f53\u68c0\u67e5\u5230\u5f53\u524d\u5bf9\u8c61\u5b9e\u4f8b\u5b9e\u73b0\u4e86\u8be5\u63a5\u53e3\u4e4b\u540e\uff0c\u5c31\u4f1a\u4ece\u5f53\u524d\u5bf9\u8c61\u5b9e\u4f8b\u53d6\u5f97\u52a0\u5bc6\u540e\u7684\u5bc6\u7801\uff0c\u5e76\u5bf9\u5176\u89e3\u5bc6\u3002\u7136\u540e\u5c06\u89e3\u5bc6\u540e\u7684\u5bc6\u7801\u8bbe\u7f6e\u56de\u5f53\u524d\u5bf9\u8c61\u5b9e\u4f8b\u3002"}),"\n",(0,s.jsxs)(r,{children:[(0,s.jsx)("summary",{children:"PasswordDecodePostProcessor"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'package org.springframework.mylearntest.beanpostprocessor;\n\nimport org.springframework.beans.BeansException;\nimport org.springframework.beans.factory.config.BeanPostProcessor;\n\npublic class PasswordDecodePostProcessor implements BeanPostProcessor {\n    public Object postProcessAfterInitialization(Object object, String beanName)\n            throws BeansException {\n        return object;\n    }\n    public Object postProcessBeforeInitialization(Object object, String beanName)\n            throws BeansException {\n        if(object instanceof PasswordDecodable){\n            String encodedPassword = ((PasswordDecodable)object).getEncodedPassword();\n            String decodedPassword = decodePassword(encodedPassword);\n            ((PasswordDecodable)object).setDecodedPassword(decodedPassword);\n        }\n        return object;\n    }\n    private String decodePassword(String encodedPassword) {\n        // \u5b9e\u73b0\u89e3\u7801\u903b\u8f91\n        encodedPassword = encodedPassword + "2mingwen";\n        return encodedPassword;\n    }\n}\n'})})]}),"\n",(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsx)(n.li,{children:"\u5c06\u81ea\u5b9a\u4e49\u7684BeanPostProcessor\u6ce8\u518c\u5230\u5bb9\u5668"}),"\n"]}),"\n",(0,s.jsxs)(r,{children:[(0,s.jsx)("summary",{children:"XML\u914d\u7f6e"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-XML",children:'<?xml version="1.0" encoding="UTF-8"?>\n<beans xmlns="http://www.springframework.org/schema/beans"\n       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n       xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd"\n       xmlns:aop="http://www.springframework.org/schema/aop">\n    <bean id="dowJonesNewsListener" class="org.springframework.mylearntest.beanpostprocessor.DowJonesNewsListener">\n        <property name="decodedPassword" value="123sjfg@LL"></property>\n    </bean>\n\n    <bean id="passwordDecodePostProcessor" class="org.springframework.mylearntest.beanpostprocessor.PasswordDecodePostProcessor">\n    </bean>\n</beans>\n'})})]}),"\n",(0,s.jsxs)(n.ol,{start:"4",children:["\n",(0,s.jsx)(n.li,{children:"\u6d4b\u8bd5\u7c7b"}),"\n"]}),"\n",(0,s.jsxs)(r,{children:[(0,s.jsx)("summary",{children:"Test4BeanPostProcessor"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'package org.springframework.mylearntest.beanpostprocessor;\n  \n\nimport org.springframework.context.ApplicationContext;\nimport org.springframework.context.support.ClassPathXmlApplicationContext;\n\npublic class Test4BeanPostProcessor {\n    public static void main(String[] args) {\n        ApplicationContext beanFactory = new ClassPathXmlApplicationContext("beanpostprocessor/beanpostprocessor.xml");\n        DowJonesNewsListener dowJonesNewsListener = (DowJonesNewsListener) beanFactory.getBean("dowJonesNewsListener");\n        String encodedPassword = dowJonesNewsListener.getEncodedPassword();\n        System.out.println("encodedPassword = " + encodedPassword);// encodedPassword = 123sjfg@LL2mingwen\n    }\n}\n'})})]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u5b9e\u9645\u4e0a\uff0c\u6709\u4e00\u79cd\u7279\u6b8a\u7c7b\u578b\u7684BeanPostProcessor\u6211\u4eec\u6ca1\u6709\u63d0\u5230\uff0c\u5b83\u7684\u6267\u884c\u65f6\u673a\u4e0e\u901a\u5e38\u7684BeanPostProcessor\u4e0d\u540c\u3002",(0,s.jsx)(n.code,{children:"org.springframework.beans.factory.config.InstantiationAwareBeanPostProcessor"}),"\u63a5\u53e3\u53ef\u4ee5\u5728\u5bf9\u8c61\u7684\u5b9e\u4f8b\u5316\u8fc7\u7a0b\u4e2d\u5bfc\u81f4\u67d0\u79cd\u7c7b\u4f3c\u4e8e\u7535\u8def\u201c\u77ed\u8def\u201d\u7684\u6548\u679c\u3002\u5b9e\u9645\u4e0a\uff0c\u5e76\u975e\u6240\u6709\u6ce8\u518c\u5230Spring\u5bb9\u5668\u5185\u7684bean\u5b9a\u4e49\u90fd\u662f\u6309\u7167\u56fe4-10\u7684\u6d41\u7a0b\u5b9e\u4f8b\u5316\u7684\u3002\u5728\u6240\u6709\u7684\u6b65\u9aa4\u4e4b\u524d\uff0c\u4e5f\u5c31\u662f\u5b9e\u4f8b\u5316bean\u5bf9\u8c61\u6b65\u9aa4\u4e4b\u524d\uff0c\u5bb9\u5668\u4f1a\u9996\u5148\u68c0\u67e5\u5bb9\u5668\u4e2d\u662f\u5426\u6ce8\u518c\u6709InstantiationAwareBeanPostProcessor\u7c7b\u578b\u7684BeanPostProcessor\u3002"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"\u5982\u679c\u6709\uff0c\u9996\u5148\u4f7f\u7528\u76f8\u5e94\u7684InstantiationAwareBeanPostProcessor\u6765\u6784\u9020\u5bf9\u8c61\u5b9e\u4f8b\u3002\u6784\u9020\u6210\u529f\u540e\u76f4\u63a5\u8fd4\u56de\u9020\u5b8c\u6210\u7684\u5bf9\u8c61\u5b9e\u4f8b\uff0c\u800c\u4e0d\u4f1a\u6309\u7167\u201c\u6b63\u89c4\u7684\u6d41\u7a0b\u201d\u7ee7\u7eed\u6267\u884c\u3002\u8fd9\u5c31\u662f\u5b83\u53ef\u80fd\u9020\u6210\u201c\u77ed\u8def\u201d\u7684\u539f\u56e0\u3002"})})}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"initializingbean-\u548c-init-method",children:"InitializingBean \u548c init-method"}),"\n",(0,s.jsx)(n.p,{children:"org.springframework.beans.factory.InitializingBean\u662f\u5bb9\u5668\u5185\u90e8\u5e7f\u6cdb\u4f7f\u7528\u7684\u4e00\u4e2a\u5bf9\u8c61\u751f\u547d\u5468\u671f\u6807\u8bc6\u63a5\u53e3\u3002"}),"\n",(0,s.jsxs)(r,{children:[(0,s.jsx)("summary",{children:"InitializingBean"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"public interface InitializingBean {\n\tvoid afterPropertiesSet() throws Exception;\n}\n"})})]}),"\n",(0,s.jsx)(n.p,{children:'\u5176\u4f5c\u7528\u5728\u4e8e\uff0c\u5728\u5bf9\u8c61\u5b9e\u4f8b\u5316\u8fc7\u7a0b\u8c03\u7528\u8fc7"BeanPostProcessor\u7684\u524d\u7f6e\u5904\u7406"\u4e4b\u540e\uff0c\u4f1a\u63a5\u7740\u68c0\u6d4b\u5f53\u524d\u5bf9\u8c61\u662f\u5426\u5b9e\u73b0\u4e86InitializingBean\u63a5\u53e3\uff0c\u5982\u679c\u662f\uff0c\u5219\u4f1a\u8c03\u7528\u5176afterPropertiesSet()\u65b9\u6cd5\u8fdb\u4e00\u6b65\u8c03\u6574\u5bf9\u8c61\u5b9e\u4f8b\u7684\u72b6\u6001\u3002\u6bd4\u5982\uff0c\u5728\u6709\u4e9b\u60c5\u51b5\u4e0b\uff0c\u67d0\u4e2a\u4e1a\u52a1\u5bf9\u8c61\u5b9e\u4f8b\u5316\u5b8c\u6210\u540e\uff0c\u8fd8\u4e0d\u80fd\u5904\u4e8e\u53ef\u4ee5\u4f7f\u7528\u72b6\u6001\u3002\u8fd9\u4e2a\u65f6\u5019\u5c31\u53ef\u4ee5\u8ba9\u8be5\u4e1a\u52a1\u5bf9\u8c61\u5b9e\u73b0\u8be5\u63a5\u53e3\uff0c\u5e76\u5728\u65b9\u6cd5afterPropertiesSet()\u4e2d\u5b8c\u6210\u5bf9\u8be5\u4e1a\u52a1\u5bf9\u8c61\u7684\u540e\u7eed\u5904\u7406\u3002'}),"\n",(0,s.jsxs)(n.p,{children:["\u5982\u679c\u7cfb\u7edf\u5f00\u53d1\u8fc7\u7a0b\u4e2d\u89c4\u5b9a\uff1a\u6240\u6709\u4e1a\u52a1\u5bf9\u8c61\u7684\u81ea\u5b9a\u4e49\u521d\u59cb\u5316\u64cd\u4f5c\u90fd\u5fc5\u987b\u4ee5init()\u547d\u540d\uff0c\u4e3a\u4e86\u7701\u53bb\u6328\u4e2a",(0,s.jsx)(n.code,{children:"<bean>"}),"\u7684\u8bbe\u7f6einit-method\u8fd9\u6837\u7684\u70e6\u7410\uff0c\u6211\u4eec\u8fd8\u53ef\u4ee5\u901a\u8fc7\u6700\u9876\u5c42\u7684",(0,s.jsx)(n.code,{children:"<beans>"}),"\u7684default-init-method\u7edf\u4e00\u6307\u5b9a\u8fd9\u4e00init()\u65b9\u6cd5\u540d\u3002"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"\u53c2\u8003\u8d44\u6599"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"\u4e66\u7c4d\u540d\u79f0\uff1aSpring\u63ed\u79d8 \u4f5c\u8005\uff1a\u738b\u798f\u5f3a"}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>i,a:()=>t});var s=r(7294);const a={},o=s.createContext(a);function t(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:t(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);