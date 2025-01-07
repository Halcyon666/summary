"use strict";(self.webpackChunksummary=self.webpackChunksummary||[]).push([[904],{8061:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"Java/Spring/IoC Inject 1","title":"IoC\u6ce8\u5165\u65b9\u5f0f1","description":"\u672c\u6587\u76f8\u5173\u4ee3\u7801(\u6765\u81ea\u5b98\u65b9\u6e90\u7801spring-test\u6a21\u5757)\u8bf7\u53c2\u89c1spring-framework org.springframework.mylearntest\u5305\u4e0b\u3002","source":"@site/docs/01-Java/02-Spring/IoC Inject 1.mdx","sourceDirName":"01-Java/02-Spring","slug":"/Java/Spring/IoC Inject 1","permalink":"/summary/Java/Spring/IoC Inject 1","draft":false,"unlisted":false,"editUrl":"https://github.com/Halcyon666/summary/edit/main/docs/01-Java/02-Spring/IoC Inject 1.mdx","tags":[],"version":"current","lastUpdatedAt":1736260505000,"sidebarPosition":2,"frontMatter":{"title":"IoC\u6ce8\u5165\u65b9\u5f0f1","sidebar_label":"IoC\u6ce8\u5165\u65b9\u5f0f1","sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"Sping Core","permalink":"/summary/Java/Spring/Spring-Core"},"next":{"title":"IoC\u6ce8\u5165\u65b9\u5f0f2","permalink":"/summary/Java/Spring/IoC Inject2"}}');var i=r(6070),t=r(5248);const a={title:"IoC\u6ce8\u5165\u65b9\u5f0f1",sidebar_label:"IoC\u6ce8\u5165\u65b9\u5f0f1",sidebar_position:2},o=void 0,l={},c=[{value:"\u6784\u9020\u65b9\u6cd5\u6ce8\u5165",id:"\u6784\u9020\u65b9\u6cd5\u6ce8\u5165",level:2},{value:"setter \u65b9\u6cd5\u6ce8\u5165",id:"setter-\u65b9\u6cd5\u6ce8\u5165",level:2},{value:"\u63a5\u53e3\u6ce8\u5165",id:"\u63a5\u53e3\u6ce8\u5165",level:2},{value:"IoC Service Provider",id:"ioc-service-provider",level:2},{value:"BeanFactory\u7684\u5bf9\u8c61\u6ce8\u518c\u4e0e\u4f9d\u8d56\u7ed1\u5b9a\u65b9\u5f0f",id:"beanfactory\u7684\u5bf9\u8c61\u6ce8\u518c\u4e0e\u4f9d\u8d56\u7ed1\u5b9a\u65b9\u5f0f",level:2},{value:"\u76f4\u63a5\u7f16\u7801\u65b9\u5f0f",id:"\u76f4\u63a5\u7f16\u7801\u65b9\u5f0f",level:3},{value:"\u5916\u90e8\u914d\u7f6e\u6587\u4ef6\u65b9\u5f0f",id:"\u5916\u90e8\u914d\u7f6e\u6587\u4ef6\u65b9\u5f0f",level:3}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components},{Details:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["\u672c\u6587\u76f8\u5173\u4ee3\u7801(\u6765\u81ea",(0,i.jsx)(n.a,{href:"https://github.com/spring-projects/spring-framework.git",title:"\u5b98\u65b9\u6e90\u7801",children:"\u5b98\u65b9\u6e90\u7801"}),"spring-test\u6a21\u5757)\u8bf7\u53c2\u89c1",(0,i.jsx)(n.a,{href:"https://github.com/Halcyon666/spring-framework-modified/tree/main/spring-test",children:"spring-framework"})," org.springframework.mylearntest\u5305\u4e0b\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"\u6784\u9020\u65b9\u6cd5\u6ce8\u5165",children:"\u6784\u9020\u65b9\u6cd5\u6ce8\u5165"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"public FXNewsProvider(IFXNewsListener newsListner,IFXNewsPersister newsPersister) {\n    this.newsListener = newsListner;\n    this.newPersistener = newsPersister;\n}\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u4f18\u70b9\uff1a\u5bf9\u8c61\u5728\u6784\u9020\u5b8c\u6210\u4e4b\u540e\uff0c\u5373\u5df2\u8fdb\u5165\u5c31\u7eea\u72b6\u6001\uff0c\u53ef\u4ee5\u9a6c\u4e0a\u4f7f\u7528\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u7f3a\u70b9: \u5f53\u4f9d\u8d56\u5bf9\u8c61\u6bd4\u8f83\u591a\u7684\u65f6\u5019\uff0c\u6784\u9020\u65b9\u6cd5\u7684\u53c2\u6570\u5217\u8868\u4f1a\u6bd4\u8f83\u957f\u3002\u800c\u901a\u8fc7\u53cd\u5c04\u6784\u9020\u5bf9\u8c61\u7684\u65f6\u5019\uff0c\u5bf9\u76f8\u540c\u7c7b\u578b\u7684\u53c2\u6570\u7684\u5904\u7406\u4f1a\u6bd4\u8f83\u56f0\u96be\uff0c\u7ef4\u62a4\u548c\u4f7f\u7528\u4e0a\u4e5f\u6bd4\u8f83\u9ebb\u70e6\u3002\u800c\u4e14\u5728Java\u4e2d\uff0c\u6784\u9020\u65b9\u6cd5\u65e0\u6cd5\u88ab\u7ee7\u627f\uff0c\u65e0\u6cd5\u8bbe\u7f6e\u9ed8\u8ba4\u503c\u3002\u5bf9\u4e8e\u975e\u5fc5\u987b\u7684\u4f9d\u8d56\u5904\u7406\uff0c\u53ef\u80fd\u9700\u8981\u5f15\u5165\u591a\u4e2a\u6784\u9020\u65b9\u6cd5\uff0c\u800c\u53c2\u6570\u6570\u91cf\u7684\u53d8\u52a8\u53ef\u80fd\u9020\u6210\u7ef4\u62a4\u4e0a\u7684\u4e0d\u4fbf\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"setter-\u65b9\u6cd5\u6ce8\u5165",children:"setter \u65b9\u6cd5\u6ce8\u5165"}),"\n",(0,i.jsxs)(r,{children:[(0,i.jsx)("summary",{children:"FXNewsProvider"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"public class FXNewsProvider {\n    private IFXNewsListener newsListener;\n    private IFXNewsPersister newPersistener;\n\n    public IFXNewsListener getNewsListener() {\n    \treturn newsListener;\n    }\n    public void setNewsListener(IFXNewsListener newsListener) {\n    \tthis.newsListener = newsListener;\n    }\n\n    public IFXNewsPersister getNewPersistener() {\n    \treturn newPersistener;\n    }\n    public void setNewPersistener(IFXNewsPersister newPersistener) {\n    \tthis.newPersistener = newPersistener;\n    }\n}\n"})})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u4f18\u70b9\uff1a\u56e0\u4e3a\u65b9\u6cd5\u53ef\u4ee5\u547d\u540d\uff0c \u6240\u4ee5setter\u65b9\u6cd5\u6ce8\u5165\u5728\u63cf\u8ff0\u6027\u4e0a\u8981\u6bd4\u6784\u9020\u65b9\u6cd5\u6ce8\u5165\u597d\u4e00\u4e9b\u3002 \u53e6\u5916\uff0c setter\u65b9\u6cd5\u53ef\u4ee5\u88ab\u7ee7\u627f\uff0c\u5141\u8bb8\u8bbe\u7f6e\u9ed8\u8ba4\u503c\uff0c\u800c\u4e14\u6709\u826f\u597d\u7684IDE\u652f\u6301\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u7f3a\u70b9\uff1a\u5f53\u7136\u5c31\u662f\u5bf9\u8c61\u65e0\u6cd5\u5728\u6784\u9020\u5b8c\u6210\u540e\u9a6c\u4e0a\u8fdb\u5165\u5c31\u7eea\u72b6\u6001\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u63a5\u53e3\u6ce8\u5165",children:"\u63a5\u53e3\u6ce8\u5165"}),"\n",(0,i.jsxs)(n.p,{children:["FXNewsProvider\u4e3a\u4e86\u8ba9IoC Service Provider\u4e3a\u5176\u6ce8\u5165\u6240\u4f9d\u8d56\u7684IFXNewsListener\uff0c\u9996\u5148\u9700\u8981\u5b9e\u73b0IFXNewsListenerCallable\u63a5\u53e3\uff0c\u8fd9\u4e2a\u63a5\u53e3\u4f1a\u58f0\u660e\u4e00\u4e2ainjectNewsListner\u65b9\u6cd5\uff08\u65b9\u6cd5\u540d\u968f\u610f\uff09\uff0c\u8be5\u65b9\u6cd5\u7684\u53c2\u6570\uff0c\u5c31\u662f\u6240\u4f9d\u8d56\u5bf9\u8c61\u7684\u7c7b\u578b\u3002\u8fd9\u6837\uff0c InjectionServiceContainer\u5bf9\u8c61\uff0c\u5373\u5bf9\u5e94\u7684IoCService Provider\u5c31\u53ef\u4ee5\u901a\u8fc7\u8fd9\u4e2a\u63a5\u53e3\u65b9\u6cd5\u5c06\u4f9d\u8d56\u5bf9\u8c61\u6ce8\u5165\u5230\u88ab\u6ce8\u5165\u5bf9\u8c61FXNewsProvider\u5f53\u4e2d\u3002\n",(0,i.jsx)(n.img,{src:"https://s2.loli.net/2023/07/15/SNQgVDHi5ruUso3.png",alt:""})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u7f3a\u70b9\u63a5\u53e3\u6ce8\u5165\u662f\u73b0\u5728\u4e0d\u751a\u63d0\u5021\u7684\u4e00\u79cd\u65b9\u5f0f\uff0c\u57fa\u672c\u5904\u4e8e\u201c\u9000\u5f79\u72b6\u6001\u201d\u3002\u56e0\u4e3a\u5b83\u5f3a\u5236\u88ab\u6ce8\u5165\u5bf9\u8c61\u5b9e\u73b0\u4e0d\u5fc5\u8981\u7684\u63a5\u53e3\uff0c\u5e26\u6709\u4fb5\u5165\u6027\u3002\u800c\u6784\u9020\u65b9\u6cd5\u6ce8\u5165\u548csetter\u65b9\u6cd5\u6ce8\u5165\u5219\u4e0d\u9700\u8981\u5982\u6b64\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"ioc-service-provider",children:"IoC Service Provider"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"IoC Service Provider\u7684\u804c\u8d23\u662f\u4ec0\u4e48\uff1f"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u4e1a\u52a1\u5bf9\u8c61\u7684\u6784\u5efa\u7ba1\u7406\uff1a\u5728IoC\u573a\u666f\u4e2d\uff0c\u4e1a\u52a1\u5bf9\u8c61\u65e0\u9700\u5173\u5fc3\u6240\u4f9d\u8d56\u5bf9\u8c61\u5982\u4f55\u6784\u5efa\u5982\u4f55\u83b7\u5f97\uff0c\u4f46\u8fd9\u90e8\u5206\u5de5\u4f5c\u59cb\u7ec8\u9700\u8981\u6709\u4eba\u6765\u505a\u3002\u6240\u4ee5\uff0cIoC Service Provider\u9700\u8981\u5c06\u5bf9\u8c61\u7684\u6784\u5efa\u903b\u8f91\u4ece\u5ba2\u6237\u7aef\u90a3\u91cc\u5265\u79bb\u51fa\u6765\uff0c\u4ee5\u514d\u8fd9\u90e8\u5206\u903b\u8f91\u6c61\u67d3\u4e1a\u52a1\u5bf9\u8c61\u7684\u5b9e\u73b0\u3002\n\u4e1a\u52a1\u5bf9\u8c61\u95f4\u7684\u4f9d\u8d56\u7ed1\u5b9a\uff1a"}),"\n",(0,i.jsx)(n.li,{children:"\u4e1a\u52a1\u5bf9\u8c61\u7684\u4f9d\u8d56\u7ba1\u7406\uff1aIoC Service Provider \u901a\u8fc7\u7ed3\u5408\u4e4b\u524d\u6784\u5efa\u548c\u7ba1\u7406\u7684\u6240\u6709\u4e1a\u52a1\u5bf9\u8c61\uff0c\u4ee5\u53ca\u5404\u4e2a\u4e1a\u52a1\u5bf9\u8c61\u95f4\u53ef\u4ee5\u8bc6\u522b\u4f9d\u8d56\u5173\u7cfb\uff0c\u5c06\u8fd9\u4e9b\u5bf9\u8c61\u6240\u4f9d\u8d56\u7684\u5bf9\u8c61\u6ce8\u7ed1\u5b9a\uff0c\u4ece\u800c\u4fdd\u8bc1\u6bcf\u4e2a\u4e1a\u52a1\u5bf9\u8c61\u5728\u4f7f\u7528\u7684\u65f6\u5019\uff0c\u53ef\u4ee5\u5904\u4e8e\u5c31\u7eea\u72b6\u6001\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u5982\u4f55\u8bb0\u5f55\u5bf9\u8c61\u4e4b\u95f4\u7684\u4f9d\u8d56\u5173\u7cfb\uff1f"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u5b83\u53ef\u4ee5\u901a\u8fc7\u6700\u57fa\u672c\u7684\u6587\u672c\u6587\u4ef6\u6765\u8bb0\u5f55\u88ab\u6ce8\u5165\u5bf9\u8c61\u548c\u5176\u4f9d\u8d56\u5bf9\u8c61\u4e4b\u95f4\u7684\u5bf9\u5e94\u5173\u7cfb\uff1b"}),"\n",(0,i.jsx)(n.li,{children:"\u5b83\u4e5f\u53ef\u4ee5\u901a\u8fc7\u63cf\u8ff0\u6027\u8f83\u5f3a\u7684XML\u6587\u4ef6\u683c\u5f0f\u6765\u8bb0\u5f55\u5bf9\u5e94\u4fe1\u606f\uff1b"}),"\n",(0,i.jsx)(n.li,{children:"\u5b83\u8fd8\u53ef\u4ee5\u901a\u8fc7\u7f16\u5199\u4ee3\u7801\u7684\u65b9\u5f0f\u6765\u6ce8\u518c\u8fd9\u4e9b\u5bf9\u5e94\u4fe1\u606f\uff1b"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Spring IoC\u5bb9\u5668 \u548c IoC Service Provider\u4e4b\u95f4\u7684\u5173\u7cfb"}),"\n",(0,i.jsx)(n.p,{children:"Spring\u7684IoC\u5bb9\u5668\u662f\u4e00\u4e2aIoC Service Provider\uff0c\u4f46\u662f\uff0c\u8fd9\u53ea\u662f\u5b83\u88ab\u51a0\u4ee5IoC\u4e4b\u540d\u7684\u90e8\u5206\u539f\u56e0\uff0c\u6211\u4eec\u4e0d\u80fd\u5ffd\u7565\u7684\u662f\u201c\u5bb9\u5668\u201d\u3002 Spring\u7684IoC\u5bb9\u5668\u662f\u4e00\u4e2a\u63d0\u4f9bIoC\u652f\u6301\u7684\u8f7b\u91cf\u7ea7\u5bb9\u5668\uff0c\u9664\u4e86\u57fa\u672c\u7684IoC\u652f\u6301\uff0c\u5b83\u4f5c\u4e3a\u8f7b\u91cf\u7ea7\u5bb9\u5668\u8fd8\u63d0\u4f9b\u4e86IoC\u4e4b\u5916\u7684\u652f\u6301\u3002\u5982\u5728Spring\u7684IoC\u5bb9\u5668\u4e4b\u4e0a\uff0c Spring\u8fd8\u63d0\u4f9b\u4e86\u76f8\u5e94\u7684AOP\u6846\u67b6\u652f\u6301\u3001\u4f01\u4e1a\u7ea7\u670d\u52a1\u96c6\u6210\u7b49\u670d\u52a1\u3002"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://s2.loli.net/2023/07/15/WX5mDwzVoFylCJZ.png",alt:"IoC\u5bb9\u5668\u548cProvider\u7684 \u5173\u7cfb",title:"IoC\u5bb9\u5668\u548cProvider\u7684 \u5173\u7cfb"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Spring\u63d0\u4f9b\u4e86BeanFactory \u548c ApplicationContext"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"BeanFactory: \u57fa\u7840\u7c7b\u578bIoC\u5bb9\u5668\uff0c\u63d0\u4f9b\u5b8c\u6574\u7684IoC\u670d\u52a1\u652f\u6301\u3002\u5982\u679c\u6ca1\u6709\u7279\u6b8a\u6307\u5b9a\uff0c\u9ed8\u8ba4\u91c7\u7528\u5ef6\u8fdf\u521d\u59cb\u5316\u7b56\u7565\uff08 lazy-load\n\uff09\u3002\u53ea\u6709\u5f53\u5ba2\u6237\u7aef\u5bf9\u8c61\u9700\u8981\u8bbf\u95ee\u5bb9\u5668\u4e2d\u7684\u67d0\u4e2a\u53d7\u7ba1\u5bf9\u8c61\u7684\u65f6\u5019\uff0c\u624d\u5bf9\u8be5\u53d7\u7ba1\u5bf9\u8c61\u8fdb\u884c\u521d\u59cb\u5316\u4ee5\u53ca\u4f9d\u8d56\u6ce8\u5165\u64cd\u4f5c\u3002\u6240\u4ee5\uff0c\u76f8\u5bf9\u6765\u8bf4\uff0c\u5bb9\u5668\u542f\u52a8\u521d\u671f\u901f\u5ea6\u8f83\u5feb\uff0c\u6240\u9700\u8981\u7684\u8d44\u6e90\u6709\u9650\u3002\u5bf9\u4e8e\u8d44\u6e90\u6709\u9650\uff0c\u5e76\u4e14\u529f\u80fd\u8981\u6c42\u4e0d\u662f\u5f88\u4e25\u683c\u7684\u573a\u666f\uff0c BeanFactory\u662f\u6bd4\u8f83\u5408\u9002\u7684IoC\u5bb9\u5668\u9009\u62e9\u3002"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"ApplicationContext: ApplicationContext\u5728BeanFactory\u7684\u57fa\u7840\u4e0a\u6784\u5efa\uff0c\u662f\u76f8\u5bf9\u6bd4\u8f83\u9ad8\u7ea7\u7684\u5bb9\u5668\u5b9e\u73b0\uff0c\u9664\u4e86\u62e5\u6709BeanFactory\u7684\u6240\u6709\u652f\u6301\uff0cApplicationContext\u8fd8\u63d0\u4f9b\u4e86\u5176\u4ed6\u9ad8\u7ea7\u7279\u6027\uff0c\u6bd4\u5982\u4e8b\u4ef6\u53d1\u5e03\u3001\u56fd\u9645\u5316\u4fe1\u606f\u652f\u6301\u7b49\uff0c\u8fd9\u4e9b\u4f1a\u5728\u540e\u9762\u8be6\u8ff0\u3002 ApplicationContext\u6240\u7ba1\u7406\u7684\u5bf9\u8c61\uff0c\u5728\u8be5\u7c7b\u578b\u5bb9\u5668\u542f\u52a8\u4e4b\u540e\uff0c\u9ed8\u8ba4\u5168\u90e8\u521d\u59cb\u5316\u5e76\u7ed1\u5b9a\u5b8c\u6210\u3002\u6240\u4ee5\uff0c\u76f8\u5bf9\u4e8eBeanFactory\u6765\u8bf4\uff0c ApplicationContext\u8981\u6c42\u66f4\u591a\u7684\u7cfb\u7edf\u8d44\u6e90\uff0c\u540c\u65f6\uff0c\u56e0\u4e3a\u5728\u542f\u52a8\u65f6\u5c31\u5b8c\u6210\u6240\u6709\u521d\u59cb\u5316\uff0c\u5bb9\u5668\u542f\u52a8\u65f6\u95f4\u8f83\u4e4bBeanFactory\u4e5f\u4f1a\u957f\u4e00\u4e9b\u3002\u5728\u90a3\u4e9b\u7cfb\u7edf\u8d44\u6e90\u5145\u8db3\uff0c\u5e76\u4e14\u8981\u6c42\u66f4\u591a\u529f\u80fd\u7684\u573a\u666f\u4e2d\uff0cApplicationContext\u7c7b\u578b\u7684\u5bb9\u5668\u662f\u6bd4\u8f83\u5408\u9002\u7684\u9009\u62e9\u3002"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u4f5c\u4e3aSpring\u63d0\u4f9b\u7684\u57fa\u672c\u7684IoC\u5bb9\u5668\uff0cBeanFactory\u53ef\u4ee5\u5b8c\u6210\u4f5c\u4e3aIoC Service Provider\u7684\u6240\u6709\u804c\u8d23\uff0c\u5305\u62ec\u4e1a\u52a1\u5bf9\u8c61\u7684\u6ce8\u518c\u548c\u5bf9\u8c61\u95f4\u4f9d\u8d56\u5173\u7cfb\u7684\u7ed1\u5b9a\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"beanfactory\u7684\u5bf9\u8c61\u6ce8\u518c\u4e0e\u4f9d\u8d56\u7ed1\u5b9a\u65b9\u5f0f",children:"BeanFactory\u7684\u5bf9\u8c61\u6ce8\u518c\u4e0e\u4f9d\u8d56\u7ed1\u5b9a\u65b9\u5f0f"}),"\n",(0,i.jsxs)(r,{children:[(0,i.jsx)("summary",{children:"\u6574\u4f53\u4f9d\u8d56\u8bbe\u8ba1"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"// 1-\u8bbe\u8ba1FXNewsProvider\u7c7b\u7528\u4e8e\u666e\u904d\u7684\u65b0\u95fb\u5904\u7406\npublic class FXNewsProvider{\n//...\n}\n// 2-\u8bbe\u8ba1IFXNewsListener\u63a5\u53e3\u62bd\u8c61\u5404\u4e2a\u65b0\u95fb\u793e\u4e0d\u540c\u7684\u65b0\u95fb\u83b7\u53d6\u65b9\u5f0f\uff0c\u5e76\u7ed9\u51fa\u76f8\u5e94\u5b9e\u73b0\u7c7b\npublic interface IFXNewsListener{\n//...\n}\n// \u4ee5\u53ca\npublic class DowJonesNewsListener implements IFXNewsListener {\n//...\n}\n// 3-\u8bbe\u8ba1IFXNewsPersister\u63a5\u53e3\u62bd\u8c61\u4e0d\u540c\u6570\u636e\u8bbf\u95ee\u65b9\u5f0f\uff0c\u5e76\u5b9e\u73b0\u76f8\u5e94\u7684\u5b9e\u73b0\u7c7b\npublic interface IFXNewsPersister {\n//...\n} \n// \u4ee5\u53ca\npublic class DowJonesNewsPersister implements IFXNewsPersister { \n//...\n}\n"})})]}),"\n",(0,i.jsx)(n.h3,{id:"\u76f4\u63a5\u7f16\u7801\u65b9\u5f0f",children:"\u76f4\u63a5\u7f16\u7801\u65b9\u5f0f"}),"\n",(0,i.jsxs)(r,{children:[(0,i.jsx)("summary",{children:"1. \u901a\u8fc7\u76f4\u63a5\u7f16\u7801\u65b9\u5f0f\u4f7f\u7528BeanFactory\u5b9e\u73b0FX\u65b0\u95fb\u76f8\u5173\u7c7b\u7684\u6ce8\u518c\u53ca\u7ed1\u5b9a"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'package org.springframework.mylearntest.beanf;\n\nimport org.springframework.beans.MutablePropertyValues;\nimport org.springframework.beans.PropertyValue;\nimport org.springframework.beans.factory.BeanFactory;\nimport org.springframework.beans.factory.support.AbstractBeanDefinition;\nimport org.springframework.beans.factory.support.BeanDefinitionRegistry;\nimport org.springframework.beans.factory.support.DefaultListableBeanFactory;\nimport org.springframework.beans.factory.support.RootBeanDefinition;\nimport org.springframework.mylearntest.before.FXNewsProvider;\n\npublic class BeanFactoryFX {\n    public static void main(String[] args) {\n        DefaultListableBeanFactory beanRegistry = new DefaultListableBeanFactory();\n        BeanFactory container = bindViaCode(beanRegistry);\n        FXNewsProvider newsProvider = (FXNewsProvider)container.getBean("djNewsProvider");\n        newsProvider.getAndPersistNews();\n    }\n\n    // \u56e0\u4e3a\u4f20\u5165\u7684DefaultListableBeanFactory\u540c\n    // \u65f6\u5b9e\u73b0\u4e86BeanFactory\u548cBeanDefinitionRegistry\u63a5\u53e3\uff0c\u6240\u4ee5\uff0c\u8fd9\u6837\u505a\u5f3a\u5236\u7c7b\u578b\u8f6c\u6362\u4e0d\u4f1a\u51fa\n    // \u73b0\u95ee\u9898\u3002\u4f46\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u5355\u7eaf\u7684BeanDefinitionRegistry\u662f\u65e0\u6cd5\u5f3a\u5236\u8f6c\u6362\u5230BeanFactory\n    // \u7c7b\u578b\u7684\uff01\n    public static BeanFactory bindViaCode(BeanDefinitionRegistry registry) {\n        AbstractBeanDefinition newsProvider = new RootBeanDefinition(FXNewsProvider.class, 0, true);\n        AbstractBeanDefinition newsListener = new RootBeanDefinition(DowJonesNewsListener.class,0, true);\n        AbstractBeanDefinition newsPersister = new RootBeanDefinition(DowJonesNewsPersister.class, 0,true);\n        // 1.\u5c06bean\u5b9a\u4e49\u6ce8\u518c\u5230\u5bb9\u5668\u4e2d\n        registry.registerBeanDefinition("djNewsProvider", newsProvider);\n        registry.registerBeanDefinition("djListener", newsListener);\n        registry.registerBeanDefinition("djPersister", newsPersister);\n        // 2.0 \u6307\u5b9a\u4f9d\u8d56\u5173\u7cfb\n        // 2.1 \u53ef\u4ee5\u901a\u8fc7\u6784\u9020\u65b9\u6cd5\u6ce8\u5165\u65b9\u5f0f\n        /*ConstructorArgumentValues argValues = new ConstructorArgumentValues();\n        argValues.addIndexedArgumentValue(0, newsListener);\n        argValues.addIndexedArgumentValue(1, newsPersister);\n        newsProvider.setConstructorArgumentValues(argValues);*/\n        // 2.2 \u6216\u8005\u901a\u8fc7setter\u65b9\u6cd5\u6ce8\u5165\u65b9\u5f0f\n        // \u4f7fnewsListener newPersistener\u7ed1\u5b9a\u5230newsProvider\u4e0a\n        MutablePropertyValues propertyValues = new MutablePropertyValues();\n        propertyValues.addPropertyValue(new PropertyValue("newsListener",newsListener));\n        propertyValues.addPropertyValue(new PropertyValue("newPersistener",newsPersister));\n        newsProvider.setPropertyValues(propertyValues);\n        // 3.0 \u7ed1\u5b9a\u5b8c\u6210 \n        return (BeanFactory)registry;\n    }\n}\n'})})]}),"\n",(0,i.jsxs)(r,{children:[(0,i.jsx)("summary",{children:"2. \u8bbe\u8ba1IFXNewsListener\u63a5\u53e3\u62bd\u8c61\u5404\u4e2a\u65b0\u95fb\u793e\u4e0d\u540c\u7684\u65b0\u95fb\u83b7\u53d6\u65b9\u5f0f\uff0c\u5e76\u7ed9\u51fa\u76f8\u5e94\u5b9e\u73b0\u7c7b"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"package org.springframework.mylearntest.before;\n\npublic interface IFXNewsListener {\n    String[] getAvailableNewsIds();\n\n    FXNewsBean getNewsByPK(String newsId);\n\n    void postProcessIfNecessary(String newsId);\n}\n"})}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"package org.springframework.mylearntest.beanf;\n\nimport org.springframework.mylearntest.before.FXNewsBean;\nimport org.springframework.mylearntest.before.IFXNewsListener;\n\npublic class DowJonesNewsListener implements IFXNewsListener {\n    @Override\n    public String[] getAvailableNewsIds() {\n        return new String[0];\n    }\n\n    @Override\n    public FXNewsBean getNewsByPK(String newsId) {\n        return null;\n    }\n\n    @Override\n    public void postProcessIfNecessary(String newsId) {\n\n    }\n}\n"})})]}),"\n",(0,i.jsxs)(r,{children:[(0,i.jsx)("summary",{children:"3. \u8bbe\u8ba1IFXNewsPersister\u63a5\u53e3\u62bd\u8c61\u4e0d\u540c\u6570\u636e\u8bbf\u95ee\u65b9\u5f0f\uff0c\u5e76\u5b9e\u73b0\u76f8\u5e94\u7684\u5b9e\u73b0\u7c7b"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"package org.springframework.mylearntest.before;\n\npublic interface IFXNewsPersister {\n    void persistNews(FXNewsBean newsBean);\n}\n"})}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"package org.springframework.mylearntest.beanf;\n\nimport org.springframework.mylearntest.before.FXNewsBean;\nimport org.springframework.mylearntest.before.IFXNewsPersister;\n\npublic class DowJonesNewsPersister implements IFXNewsPersister {\n    @Override\n    public void persistNews(FXNewsBean newsBean) {\n\n    }\n}\n"})})]}),"\n",(0,i.jsxs)(r,{children:[(0,i.jsx)("summary",{children:"4. \u8bbe\u8ba1\u65b0\u95fb\u63d0\u4f9b\u7c7b\u4f9d\u8d56\u4e8e\u65b0\u95fb\u76d1\u542c\u548c\u6301\u4e45\u5316\u7c7b"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"package org.springframework.mylearntest.before;\n\nimport org.apache.commons.lang3.ArrayUtils;\n\n\npublic class FXNewsProvider {\n    private IFXNewsListener newsListener;\n    private IFXNewsPersister newPersistener;\n    public FXNewsProvider(IFXNewsListener newsListner,IFXNewsPersister newsPersister) {\n        this.newsListener = newsListner;\n        this.newPersistener = newsPersister;\n    }\n\n    public IFXNewsListener getNewsListener() {\n        return newsListener;\n    }\n\n    public void setNewsListener(IFXNewsListener newsListener) {\n        this.newsListener = newsListener;\n    }\n\n    public IFXNewsPersister getNewPersistener() {\n        return newPersistener;\n    }\n\n    public void setNewPersistener(IFXNewsPersister newPersistener) {\n        this.newPersistener = newPersistener;\n    }\n\n    public FXNewsProvider() {\n    }\n\n    public void getAndPersistNews() {\n        String[] newsIds = newsListener.getAvailableNewsIds();\n        if (ArrayUtils.isEmpty(newsIds)) {\n            return;\n        }\n        for (String newsId : newsIds) {\n            FXNewsBean newsBean = newsListener.getNewsByPK(newsId);\n            newPersistener.persistNews(newsBean);\n            newsListener.postProcessIfNecessary(newsId);\n        }\n    }\n}\n"})})]}),"\n",(0,i.jsxs)(r,{children:[(0,i.jsx)("summary",{children:"5. \u8bbe\u7f6e\u65b0\u95fb\u7c7b"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"package org.springframework.mylearntest.before;\n\npublic class FXNewsBean {\n}\n"})})]}),"\n",(0,i.jsx)(n.h3,{id:"\u5916\u90e8\u914d\u7f6e\u6587\u4ef6\u65b9\u5f0f",children:"\u5916\u90e8\u914d\u7f6e\u6587\u4ef6\u65b9\u5f0f"}),"\n",(0,i.jsx)(n.p,{children:"\u901a\u5e38\u60c5\u51b5\u4e0b\uff0c\u9700\u8981\u6839\u636e\u4e0d\u540c\u7684\u5916\u90e8\u914d\u7f6e\u6587\u4ef6\u683c\u5f0f\uff0c\u7ed9\u51fa\u76f8\u5e94\u7684BeanDefinitionReader\u5b9e\u73b0\u7c7b\uff0c\u7531BeanDefinitionReader\u7684\u76f8\u5e94\u5b9e\u73b0\u7c7b\u8d1f\u8d23\u5c06\u76f8\u5e94\u7684\u914d\u7f6e\u6587\u4ef6\u5185\u5bb9\u8bfb\u53d6\u5e76\u6620\u5c04\u5230BeanDefinition\uff0c\u7136\u540e\u5c06\u6620\u5c04\u540e\u7684BeanDefinition\u6ce8\u518c\u5230\u4e00\u4e2aBeanDefinitionRegistry\uff0c\u4e4b\u540e\uff0c BeanDefinitionRegistry\u5373\u5b8c\u6210Bean\u7684\u6ce8\u518c\u548c\u52a0\u8f7d\u3002\u5927\u90e8\u5206\u5de5\u4f5c\uff0c\u5305\u62ec\u89e3\u6790\u6587\u4ef6\u683c\u5f0f\u3001\u88c5\u914dBeanDefinition\u4e4b\u7c7b\u7684\u5de5\u4f5c\uff0c\u90fd\u662f\u7531BeanDefinitionReader\u7684\u76f8\u5e94\u5b9e\u73b0\u7c7b\u6765\u505a\u7684\uff0c BeanDefinitionRegistry\u53ea\u4e0d\u8fc7\u8d1f\u8d23\u4fdd\u7ba1\u800c\u5df2\u3002"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"properties\u914d\u7f6e\u6587\u4ef6\u65b9\u5f0f"})}),"\n",(0,i.jsxs)(r,{children:[(0,i.jsx)("summary",{children:"binding-config.properties"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-properties",children:"djNewsProvider.(class)=org.springframework.mylearntest.ioc.directcode.FXNewsProvider\ndjNewsProvider.$0(ref)=djListener\ndjNewsProvider.$1(ref)=djPersister\n# djNewsProvider.newsListener(ref)=djListener\n# djNewsProvider.newPersistener(ref)=djPersister\ndjListener.(class)=org.springframework.mylearntest.ioc.propconfig.DjNewsListener\ndjPersister.(class)=org.springframework.mylearntest.ioc.propconfig.DjNewsPersister\n"})})]}),"\n",(0,i.jsxs)(r,{children:[(0,i.jsx)("summary",{children:"PropConfigTest"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'package org.springframework.mylearntest.directcode;\n\nimport org.springframework.beans.factory.BeanFactory;\nimport org.springframework.beans.factory.support.BeanDefinitionRegistry;\nimport org.springframework.beans.factory.support.DefaultListableBeanFactory;\nimport org.springframework.beans.factory.support.PropertiesBeanDefinitionReader;\n\npublic class PropConfigTest {\n    public static void main(String[] args) {\n        // todo Caused by: java.lang.IllegalStateException: No bean class specified on bean definition\n        DefaultListableBeanFactory beanRegistry = new DefaultListableBeanFactory();\n        BeanFactory container = bindViaPropertiesFile(beanRegistry);\n        FXNewsProvider newsProvider =\n                (FXNewsProvider)container.getBean("djNewsProvider");\n        newsProvider.getAndPersistNews();\n    }\n\n    public static BeanFactory bindViaPropertiesFile(BeanDefinitionRegistry registry) {\n        PropertiesBeanDefinitionReader reader =\n                new PropertiesBeanDefinitionReader(registry);\n        reader.loadBeanDefinitions("classpath:binding-config.properties");\n        return (BeanFactory)registry;\n    }\n}\n'})})]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"@deprecated as of 5.3, in favor of Spring's common bean definition formats"}),"\n"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"\u53c2\u8003\u8d44\u6599"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"\u4e66\u7c4d\u540d\u79f0\uff1aSpring\u63ed\u79d8 \u4f5c\u8005\uff1a\u738b\u798f\u5f3a"}),"\n"]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},5248:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>o});var s=r(758);const i={},t=s.createContext(i);function a(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);