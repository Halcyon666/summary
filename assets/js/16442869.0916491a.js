"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6065],{3905:(e,n,r)=>{r.d(n,{Zo:()=>p,kt:()=>d});var t=r(7294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=t.createContext({}),s=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},p=function(e){var n=s(e.components);return t.createElement(c.Provider,{value:n},e.children)},v="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),v=s(r),m=o,d=v["".concat(c,".").concat(m)]||v[m]||u[m]||a;return r?t.createElement(d,i(i({ref:n},p),{},{components:r})):t.createElement(d,i({ref:n},p))}));function d(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[v]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4473:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var t=r(7462),o=(r(7294),r(3905));const a={title:"\u8bbe\u8ba1\u6a21\u5f0f",sidebar_label:"\u8bbe\u8ba1\u6a21\u5f0f",sidebar_position:1},i=void 0,l={unversionedId:"Tech/Java/DesignPattern/\u8bbe\u8ba1\u6a21\u5f0f",id:"Tech/Java/DesignPattern/\u8bbe\u8ba1\u6a21\u5f0f",title:"\u8bbe\u8ba1\u6a21\u5f0f",description:"\u5f02\u5e38\u5904\u7406 \u65b9\u6cd5",source:"@site/docs/01-Tech/01-Java/07-DesignPattern/\u8bbe\u8ba1\u6a21\u5f0f.md",sourceDirName:"01-Tech/01-Java/07-DesignPattern",slug:"/Tech/Java/DesignPattern/\u8bbe\u8ba1\u6a21\u5f0f",permalink:"/summary/Tech/Java/DesignPattern/\u8bbe\u8ba1\u6a21\u5f0f",draft:!1,editUrl:"https://github.com/Halcyon666/summary/blob/main/docs/01-Tech/01-Java/07-DesignPattern/\u8bbe\u8ba1\u6a21\u5f0f.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"\u8bbe\u8ba1\u6a21\u5f0f",sidebar_label:"\u8bbe\u8ba1\u6a21\u5f0f",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Mybatis Plus\u5feb\u901f\u5f00\u59cb",permalink:"/summary/Tech/Java/DateBase/Mybatis-Plus\u5feb\u901f\u5f00\u59cb"},next:{title:"\u53f2\u4e0a\u6700\u5168git\u547d\u4ee4\u96c6",permalink:"/summary/Tech/Develop-Tools/\u53f2\u4e0a\u6700\u5168git\u547d\u4ee4\u96c6"}},c={},s=[{value:"\u5f02\u5e38\u5904\u7406 \u65b9\u6cd5",id:"\u5f02\u5e38\u5904\u7406-\u65b9\u6cd5",level:2},{value:"\u57fa\u4e8e\u63a5\u53e3\u8bbe\u8ba1",id:"\u57fa\u4e8e\u63a5\u53e3\u8bbe\u8ba1",level:2},{value:"DDD",id:"ddd",level:2}],p={toc:s},v="wrapper";function u(e){let{components:n,...r}=e;return(0,o.kt)(v,(0,t.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u5f02\u5e38\u5904\u7406-\u65b9\u6cd5"},"\u5f02\u5e38\u5904\u7406 \u65b9\u6cd5"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'package com.whalefall.learncases.exception;\n\nimport lombok.extern.slf4j.Slf4j;\nimport org.springframework.web.bind.annotation.ControllerAdvice;\nimport org.springframework.web.bind.annotation.ExceptionHandler;\nimport org.springframework.web.servlet.ModelAndView;\n\nimport javax.servlet.http.HttpServletRequest;\nimport java.sql.SQLException;\n\n/**\n * @author WhaleFall\n * @create 2022-05-28 10:41\n * codes copy from => https://spring.io/blog/2013/11/01/exception-handling-in-spring-mvc\n */\n@Slf4j\n@ControllerAdvice// \u6307\u5b9a\u4e3a\u5168\u5c40\u5f02\u5e38\u5904\u7406\npublic class ExceptionHandlingController {\n\n    // Specify name of a specific view that will be used to display the error:\n    @ExceptionHandler(SQLException.class)\n    public String databaseError() {\n        // Nothing to do.  Returns the logical view name of an error page, passed\n        // to the view-resolver(s) in usual way.\n        // Note that the exception is NOT available to this view (it is not added\n        // to the model) but see "Extending ExceptionHandlerExceptionResolver"\n        // below.\n        return "databaseError";\n    }\n\n    // Total control - setup a model and return the view name yourself. Or\n    // consider subclassing ExceptionHandlerExceptionResolver (see below).\n    @ExceptionHandler(Exception.class)\n    public ModelAndView handleError(HttpServletRequest req, Exception ex) {\n        log.error("Request: " + req.getRequestURL() + " raised " + ex);\n\n        ModelAndView mav = new ModelAndView();\n        mav.addObject("exception", ex);\n        mav.addObject("url", req.getRequestURL());\n        mav.setViewName("error");\n        return mav;\n    }\n\n}\n\n')),(0,o.kt)("h2",{id:"\u57fa\u4e8e\u63a5\u53e3\u8bbe\u8ba1"},"\u57fa\u4e8e\u63a5\u53e3\u8bbe\u8ba1"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u63a5\u53e3\u7c7b")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"package com.whalefall.learncases.design;\n\n/**\n * @author WhaleFall\n * @create 2022-07-25 19:21\n */\npublic interface IService {\n    boolean doService();\n\n    boolean doServiceBefore();\n\n    boolean doServiceAfter();\n\n    void doLog();\n}\n\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"\u63a5\u53e3\u5b9e\u73b0\u7c7b")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'package com.whalefall.learncases.design;\n\nimport lombok.extern.slf4j.Slf4j;\nimport org.springframework.stereotype.Component;\n\n/**\n * @author WhaleFall\n * @create 2022-07-24 6:34\n */\n@Slf4j\n@Component\npublic class AService implements IService {\n    @Override\n    public boolean doService() {\n        log.info("do A service");\n        if (true)\n            throw new RuntimeException("Exception msg1");\n        return true;\n    }\n\n    @Override\n    public boolean doServiceBefore() {\n        return false;\n    }\n\n    @Override\n    public boolean doServiceAfter() {\n        return false;\n    }\n\n    @Override\n    public void doLog() {\n        if (true)\n            throw new RuntimeException("Exception msg2");\n        log.error("A1 do log");\n    }\n}\n')),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"\u6838\u5fc3\u6d41\u7a0b\u5c01\u88c5 ",(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"\u53ef\u4ee5\u4f7f\u7528\u5355\u4f8b\u8bbe\u8ba1\u6a21\u5f0f ")))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u65b9\u6cd51\u5355\u4f8b\u8bbe\u8ba1\u6a21\u5f0f")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'package com.whalefall.learncases.design;\n\nimport lombok.extern.slf4j.Slf4j;\n\nimport javax.validation.constraints.NotNull;\nimport java.util.function.Consumer;\n\n/**\n * @author WhaleFall\n * @create 2022-07-24 6:26\n */\n@Slf4j\npublic class SProcessService {\n    private SProcessService() {\n\n    }\n\n    private static class SProcessServiceHolder {\n        private static final SProcessService INSTANCE = new SProcessService();\n    }\n    \n    public static SProcessService getInstance() {\n        return SProcessServiceHolder.INSTANCE;\n    } \n    \n    public boolean handle(IService service, Consumer<Exception> exceptionConsumer) {\n        serviceBefore(service);\n        service(service, exceptionConsumer);\n        serviceAfter(service);\n        log(service, exceptionConsumer);\n        return true;\n    }\n\n    private void serviceAfter(@NotNull IService service) {\n        service.doServiceAfter();\n    }\n\n    private void serviceBefore(@NotNull IService service) {\n        service.doServiceBefore();\n    }\n\n    private void service(@NotNull IService service, Consumer<Exception> exceptionConsumer) {\n        try {\n            service.doService();\n        } catch (Exception e1) {\n            exceptionConsumer.accept(e1);\n            throw e1;\n        }\n    }\n\n    private void log(@NotNull IService service, Consumer<Exception> exceptionConsumer) {\n        try {\n            service.doLog();\n        } catch (Exception e2) {\n            log.error("failed do log");\n            exceptionConsumer.accept(e2);\n        }\n    }\n}\n\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u65b9\u6cd52 \u6ce8\u5165\u5bb9\u5668\u4e2d")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'package com.whalefall.learncases.design;\n\nimport lombok.extern.slf4j.Slf4j;\nimport org.springframework.stereotype.Component;\n\nimport javax.validation.constraints.NotNull;\nimport java.util.function.Consumer;\n\n/**\n * @author WhaleFall\n * @create 2022-07-24 6:26\n */\n@Component\n@Slf4j\npublic class ProcessService {\n    \n    public boolean handle(IService service, Consumer<Exception> exceptionConsumer) {\n        serviceBefore(service);\n        service(service, exceptionConsumer);\n        serviceAfter(service);\n        log(service, exceptionConsumer);\n        return true;\n    }\n\n    private void serviceAfter(@NotNull IService service) {\n        service.doServiceAfter();\n    }\n\n    private void serviceBefore(@NotNull IService service) {\n        service.doServiceBefore();\n    }\n\n    private void service(@NotNull IService service, Consumer<Exception> exceptionConsumer) {\n        try {\n            service.doService();\n        } catch (Exception e1) {\n            exceptionConsumer.accept(e1);\n            throw e1;\n        }\n    }\n\n    private void log(@NotNull IService service, Consumer<Exception> exceptionConsumer) {\n        try {\n            service.doLog();\n        } catch (Exception e2) {\n            log.error("failed do log");\n            exceptionConsumer.accept(e2);\n        }\n    }\n}\n\n\n')),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"\u8c03\u7528\u6848\u4f8b")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'\npackage com.whalefall.learncases.design;\n\nimport lombok.extern.slf4j.Slf4j;\nimport org.springframework.web.bind.annotation.GetMapping;\nimport org.springframework.web.bind.annotation.RestController;\n\n/**\n * @author WhaleFall\n * @create 2022-07-24 6:37\n */\n@RestController\n@Slf4j\npublic class ControllerA {\n\n    private IService service;\n\n    private ProcessService processService;\n\n    public ControllerA(IService service, ProcessService processService) {\n        this.service = service;\n        this.processService = processService;\n    }\n\n    @GetMapping("/testA")\n    public boolean getA(){\n       return processService.handle(service, e -> log.error(e.getMessage(), e));\n    }\n}\n')),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/Halcyon666/learn-cases/tree/main/learncases/src/main/java/com/whalefall/learncases/design"},"\u5b8c\u6574\u4ee3\u7801")),(0,o.kt)("h2",{id:"ddd"},"DDD"),(0,o.kt)("p",null,"\u5b9e\u4f53\u5bf9\u8c61\u4e0d\u80fd\u76f4\u63a5\u8d4b\u503c\uff0c\u9886\u57df\u5bf9\u8c61\u4e0d\u80fd\u76f4\u63a5new\u51fa\u6765\uff0c\u5e94\u8be5\u4f7f\u7528\u5de5\u5382\u65b9\u6cd5\uff0c\u5efa\u9020\u8005\u6a21\u5f0f\u6765\u5b9e\u73b0\u3002"),(0,o.kt)("admonition",{title:"\u534f\u8bae",type:"tip"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u672c\u4f5c\u54c1\u4ee3\u7801\u90e8\u5206\u91c7\u7528 ",(0,o.kt)("a",{parentName:"p",href:"https://www.apache.org/licenses/LICENSE-2.0"},"Apache 2.0\u534f\u8bae"),"\u8fdb\u884c\u8bb8\u53ef\u3002\u9075\u5faa\u8bb8\u53ef\u7684\u524d\u63d0\u4e0b\uff0c\u4f60\u53ef\u4ee5\u81ea\u7531\u5730\u5bf9\u4ee3\u7801\u8fdb\u884c\u4fee\u6539\uff0c\u518d\u53d1\u5e03\uff0c\u53ef\u4ee5\u5c06\u4ee3\u7801\u7528\u4f5c\u5546\u4e1a\u7528\u9014\u3002\u4f46\u8981\u6c42\u4f60\uff1a"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\u7f72\u540d"),"\uff1a\u5728\u539f\u6709\u4ee3\u7801\u548c\u884d\u751f\u4ee3\u7801\u4e2d\uff0c\u4fdd\u7559\u539f\u4f5c\u8005\u7f72\u540d\u53ca\u4ee3\u7801\u6765\u6e90\u4fe1\u606f\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\u4fdd\u7559\u8bb8\u53ef\u8bc1"),"\uff1a\u5728\u539f\u6709\u4ee3\u7801\u548c\u884d\u751f\u4ee3\u7801\u4e2d\uff0c\u4fdd\u7559Apache 2.0\u534f\u8bae\u6587\u4ef6\u3002"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u672c\u4f5c\u54c1\u6587\u6863\u90e8\u5206\u91c7\u7528",(0,o.kt)("a",{parentName:"p",href:"http://creativecommons.org/licenses/by/4.0/"},"\u77e5\u8bc6\u5171\u4eab\u7f72\u540d 4.0 \u56fd\u9645\u8bb8\u53ef\u534f\u8bae"),"\u8fdb\u884c\u8bb8\u53ef\u3002 \u9075\u5faa\u8bb8\u53ef\u7684\u524d\u63d0\u4e0b\uff0c\u4f60\u53ef\u4ee5\u81ea\u7531\u5730\u5171\u4eab\uff0c\u5305\u62ec\u5728\u4efb\u4f55\u5a92\u4ecb\u4e0a\u4ee5\u4efb\u4f55\u5f62\u5f0f\u590d\u5236\u3001\u53d1\u884c\u672c\u4f5c\u54c1\uff0c\u4ea6\u53ef\u4ee5\u81ea\u7531\u5730\u6f14\u7ece\u3001\u4fee\u6539\u3001\u8f6c\u6362\u6216\u4ee5\u672c\u4f5c\u54c1\u4e3a\u57fa\u7840\u8fdb\u884c\u4e8c\u6b21\u521b\u4f5c\u3002\u4f46\u8981\u6c42\u4f60\uff1a"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\u7f72\u540d"),"\uff1a\u5e94\u5728\u4f7f\u7528\u672c\u6587\u6863\u7684\u5168\u90e8\u6216\u90e8\u5206\u5185\u5bb9\u65f6\u5019\uff0c\u6ce8\u660e\u539f\u4f5c\u8005\u53ca\u6765\u6e90\u4fe1\u606f\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\u975e\u5546\u4e1a\u6027\u4f7f\u7528"),"\uff1a\u4e0d\u5f97\u7528\u4e8e\u5546\u4e1a\u51fa\u7248\u6216\u5176\u4ed6\u4efb\u4f55\u5e26\u6709\u5546\u4e1a\u6027\u8d28\u7684\u884c\u4e3a\u3002\u5982\u9700\u5546\u4e1a\u4f7f\u7528\uff0c\u8bf7\u8054\u7cfb\u4f5c\u8005\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\u76f8\u540c\u65b9\u5f0f\u5171\u4eab\u7684\u6761\u4ef6"),"\uff1a\u5728\u672c\u6587\u6863\u57fa\u7840\u4e0a\u6f14\u7ece\u3001\u4fee\u6539\u7684\u4f5c\u54c1\uff0c\u5e94\u5f53\u7ee7\u7eed\u4ee5\u77e5\u8bc6\u5171\u4eab\u7f72\u540d 4.0\u56fd\u9645\u8bb8\u53ef\u534f\u8bae\u8fdb\u884c\u8bb8\u53ef\u3002"))))))}u.isMDXComponent=!0}}]);