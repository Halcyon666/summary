"use strict";(self.webpackChunksummary=self.webpackChunksummary||[]).push([[7466],{4194:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>t,metadata:()=>c,toc:()=>a});var i=r(1527),o=r(8672);const t={title:"\u8bbe\u8ba1\u6a21\u5f0f",sidebar_label:"\u8bbe\u8ba1\u6a21\u5f0f",sidebar_position:1},s=void 0,c={id:"Java/DesignPattern/Design Pattern",title:"\u8bbe\u8ba1\u6a21\u5f0f",description:"\u5f02\u5e38\u5904\u7406 \u65b9\u6cd5",source:"@site/docs/01-Java/07-DesignPattern/Design Pattern.mdx",sourceDirName:"01-Java/07-DesignPattern",slug:"/Java/DesignPattern/Design Pattern",permalink:"/en/Java/DesignPattern/Design Pattern",draft:!1,unlisted:!1,editUrl:"https://github.com/Halcyon666/summary/edit/main/i18n/en/docusaurus-plugin-content-docs/current/01-Java/07-DesignPattern/Design Pattern.mdx",tags:[],version:"current",lastUpdatedAt:1706843147,formattedLastUpdatedAt:"Feb 2, 2024",sidebarPosition:1,frontMatter:{title:"\u8bbe\u8ba1\u6a21\u5f0f",sidebar_label:"\u8bbe\u8ba1\u6a21\u5f0f",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Mybatis Plus\u5feb\u901f\u5f00\u59cb",permalink:"/en/Java/DateBase/Mybatis-Plus quick start"},next:{title:"jQuery\u9009\u62e9\u5668",permalink:"/en/Frontend/JQuery-revese-selector"}},l={},a=[{value:"\u5f02\u5e38\u5904\u7406 \u65b9\u6cd5",id:"\u5f02\u5e38\u5904\u7406-\u65b9\u6cd5",level:2},{value:"\u57fa\u4e8e\u63a5\u53e3\u8bbe\u8ba1",id:"\u57fa\u4e8e\u63a5\u53e3\u8bbe\u8ba1",level:2},{value:"DDD",id:"ddd",level:2}];function d(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"\u5f02\u5e38\u5904\u7406-\u65b9\u6cd5",children:"\u5f02\u5e38\u5904\u7406 \u65b9\u6cd5"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'package com.whalefall.learncases.exception;\n\nimport lombok.extern.slf4j.Slf4j;\nimport org.springframework.web.bind.annotation.ControllerAdvice;\nimport org.springframework.web.bind.annotation.ExceptionHandler;\nimport org.springframework.web.servlet.ModelAndView;\n\nimport javax.servlet.http.HttpServletRequest;\nimport java.sql.SQLException;\n\n/**\n * @author WhaleFall\n * @create 2022-05-28 10:41\n * codes copy from => https://spring.io/blog/2013/11/01/exception-handling-in-spring-mvc\n */\n@Slf4j\n@ControllerAdvice// \u6307\u5b9a\u4e3a\u5168\u5c40\u5f02\u5e38\u5904\u7406\npublic class ExceptionHandlingController {\n\n    // Specify name of a specific view that will be used to display the error:\n    @ExceptionHandler(SQLException.class)\n    public String databaseError() {\n        // Nothing to do.  Returns the logical view name of an error page, passed\n        // to the view-resolver(s) in usual way.\n        // Note that the exception is NOT available to this view (it is not added\n        // to the model) but see "Extending ExceptionHandlerExceptionResolver"\n        // below.\n        return "databaseError";\n    }\n\n    // Total control - setup a model and return the view name yourself. Or\n    // consider subclassing ExceptionHandlerExceptionResolver (see below).\n    @ExceptionHandler(Exception.class)\n    public ModelAndView handleError(HttpServletRequest req, Exception ex) {\n        log.error("Request: " + req.getRequestURL() + " raised " + ex);\n\n        ModelAndView mav = new ModelAndView();\n        mav.addObject("exception", ex);\n        mav.addObject("url", req.getRequestURL());\n        mav.setViewName("error");\n        return mav;\n    }\n\n}\n\n'})}),"\n",(0,i.jsx)(n.h2,{id:"\u57fa\u4e8e\u63a5\u53e3\u8bbe\u8ba1",children:"\u57fa\u4e8e\u63a5\u53e3\u8bbe\u8ba1"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"\u63a5\u53e3\u7c7b"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"package com.whalefall.learncases.design;\n\n/**\n * @author WhaleFall\n * @create 2022-07-25 19:21\n */\npublic interface IService {\n    boolean doService();\n\n    boolean doServiceBefore();\n\n    boolean doServiceAfter();\n\n    void doLog();\n}\n\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsx)(n.li,{children:"\u63a5\u53e3\u5b9e\u73b0\u7c7b"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'package com.whalefall.learncases.design;\n\nimport lombok.extern.slf4j.Slf4j;\nimport org.springframework.stereotype.Component;\n\n/**\n * @author WhaleFall\n * @create 2022-07-24 6:34\n */\n@Slf4j\n@Component\npublic class AService implements IService {\n    @Override\n    public boolean doService() {\n        log.info("do A service");\n        if (true)\n            throw new RuntimeException("Exception msg1");\n        return true;\n    }\n\n    @Override\n    public boolean doServiceBefore() {\n        return false;\n    }\n\n    @Override\n    public boolean doServiceAfter() {\n        return false;\n    }\n\n    @Override\n    public void doLog() {\n        if (true)\n            throw new RuntimeException("Exception msg2");\n        log.error("A1 do log");\n    }\n}\n'})}),"\n",(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsx)(n.li,{children:"\u6838\u5fc3\u6d41\u7a0b\u5c01\u88c5"}),"\n"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"\u53ef\u4ee5\u4f7f\u7528\u5355\u4f8b\u8bbe\u8ba1\u6a21\u5f0f"}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u65b9\u6cd51\u5355\u4f8b\u8bbe\u8ba1\u6a21\u5f0f"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'package com.whalefall.learncases.design;\n\nimport lombok.extern.slf4j.Slf4j;\n\nimport javax.validation.constraints.NotNull;\nimport java.util.function.Consumer;\n\n/**\n * @author WhaleFall\n * @create 2022-07-24 6:26\n */\n@Slf4j\npublic class SProcessService {\n    private SProcessService() {\n\n    }\n\n    private static class SProcessServiceHolder {\n        private static final SProcessService INSTANCE = new SProcessService();\n    }\n    \n    public static SProcessService getInstance() {\n        return SProcessServiceHolder.INSTANCE;\n    } \n    \n    public boolean handle(IService service, Consumer<Exception> exceptionConsumer) {\n        serviceBefore(service);\n        service(service, exceptionConsumer);\n        serviceAfter(service);\n        log(service, exceptionConsumer);\n        return true;\n    }\n\n    private void serviceAfter(@NotNull IService service) {\n        service.doServiceAfter();\n    }\n\n    private void serviceBefore(@NotNull IService service) {\n        service.doServiceBefore();\n    }\n\n    private void service(@NotNull IService service, Consumer<Exception> exceptionConsumer) {\n        try {\n            service.doService();\n        } catch (Exception e1) {\n            exceptionConsumer.accept(e1);\n            throw e1;\n        }\n    }\n\n    private void log(@NotNull IService service, Consumer<Exception> exceptionConsumer) {\n        try {\n            service.doLog();\n        } catch (Exception e2) {\n            log.error("failed do log");\n            exceptionConsumer.accept(e2);\n        }\n    }\n}\n\n'})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u65b9\u6cd52 \u6ce8\u5165\u5bb9\u5668\u4e2d"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'package com.whalefall.learncases.design;\n\nimport lombok.extern.slf4j.Slf4j;\nimport org.springframework.stereotype.Component;\n\nimport javax.validation.constraints.NotNull;\nimport java.util.function.Consumer;\n\n/**\n * @author WhaleFall\n * @create 2022-07-24 6:26\n */\n@Component\n@Slf4j\npublic class ProcessService {\n    \n    public boolean handle(IService service, Consumer<Exception> exceptionConsumer) {\n        serviceBefore(service);\n        service(service, exceptionConsumer);\n        serviceAfter(service);\n        log(service, exceptionConsumer);\n        return true;\n    }\n\n    private void serviceAfter(@NotNull IService service) {\n        service.doServiceAfter();\n    }\n\n    private void serviceBefore(@NotNull IService service) {\n        service.doServiceBefore();\n    }\n\n    private void service(@NotNull IService service, Consumer<Exception> exceptionConsumer) {\n        try {\n            service.doService();\n        } catch (Exception e1) {\n            exceptionConsumer.accept(e1);\n            throw e1;\n        }\n    }\n\n    private void log(@NotNull IService service, Consumer<Exception> exceptionConsumer) {\n        try {\n            service.doLog();\n        } catch (Exception e2) {\n            log.error("failed do log");\n            exceptionConsumer.accept(e2);\n        }\n    }\n}\n\n\n'})}),"\n",(0,i.jsxs)(n.ol,{start:"4",children:["\n",(0,i.jsx)(n.li,{children:"\u8c03\u7528\u6848\u4f8b"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'\npackage com.whalefall.learncases.design;\n\nimport lombok.extern.slf4j.Slf4j;\nimport org.springframework.web.bind.annotation.GetMapping;\nimport org.springframework.web.bind.annotation.RestController;\n\n/**\n * @author WhaleFall\n * @create 2022-07-24 6:37\n */\n@RestController\n@Slf4j\npublic class ControllerA {\n\n    private IService service;\n\n    private ProcessService processService;\n\n    public ControllerA(IService service, ProcessService processService) {\n        this.service = service;\n        this.processService = processService;\n    }\n\n    @GetMapping("/testA")\n    public boolean getA(){\n       return processService.handle(service, e -> log.error(e.getMessage(), e));\n    }\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/Halcyon666/learn-cases/tree/main/learncases/src/main/java/com/whalefall/learncases/design",children:"\u5b8c\u6574\u4ee3\u7801"})}),"\n",(0,i.jsx)(n.h2,{id:"ddd",children:"DDD"}),"\n",(0,i.jsx)(n.p,{children:"\u5b9e\u4f53\u5bf9\u8c61\u4e0d\u80fd\u76f4\u63a5\u8d4b\u503c\uff0c\u9886\u57df\u5bf9\u8c61\u4e0d\u80fd\u76f4\u63a5new\u51fa\u6765\uff0c\u5e94\u8be5\u4f7f\u7528\u5de5\u5382\u65b9\u6cd5\uff0c\u5efa\u9020\u8005\u6a21\u5f0f\u6765\u5b9e\u73b0\u3002"}),"\n",(0,i.jsx)(n.admonition,{title:"\u534f\u8bae",type:"tip",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u672c\u4f5c\u54c1\u4ee3\u7801\u90e8\u5206\u91c7\u7528 ",(0,i.jsx)(n.a,{href:"https://www.apache.org/licenses/LICENSE-2.0",children:"Apache 2.0\u534f\u8bae"}),"\u8fdb\u884c\u8bb8\u53ef\u3002\u9075\u5faa\u8bb8\u53ef\u7684\u524d\u63d0\u4e0b\uff0c\u4f60\u53ef\u4ee5\u81ea\u7531\u5730\u5bf9\u4ee3\u7801\u8fdb\u884c\u4fee\u6539\uff0c\u518d\u53d1\u5e03\uff0c\u53ef\u4ee5\u5c06\u4ee3\u7801\u7528\u4f5c\u5546\u4e1a\u7528\u9014\u3002\u4f46\u8981\u6c42\u4f60\uff1a"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u7f72\u540d"}),"\uff1a\u5728\u539f\u6709\u4ee3\u7801\u548c\u884d\u751f\u4ee3\u7801\u4e2d\uff0c\u4fdd\u7559\u539f\u4f5c\u8005\u7f72\u540d\u53ca\u4ee3\u7801\u6765\u6e90\u4fe1\u606f\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u4fdd\u7559\u8bb8\u53ef\u8bc1"}),"\uff1a\u5728\u539f\u6709\u4ee3\u7801\u548c\u884d\u751f\u4ee3\u7801\u4e2d\uff0c\u4fdd\u7559Apache 2.0\u534f\u8bae\u6587\u4ef6\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u672c\u4f5c\u54c1\u6587\u6863\u90e8\u5206\u91c7\u7528",(0,i.jsx)(n.a,{href:"http://creativecommons.org/licenses/by/4.0/",children:"\u77e5\u8bc6\u5171\u4eab\u7f72\u540d 4.0 \u56fd\u9645\u8bb8\u53ef\u534f\u8bae"}),"\u8fdb\u884c\u8bb8\u53ef\u3002 \u9075\u5faa\u8bb8\u53ef\u7684\u524d\u63d0\u4e0b\uff0c\u4f60\u53ef\u4ee5\u81ea\u7531\u5730\u5171\u4eab\uff0c\u5305\u62ec\u5728\u4efb\u4f55\u5a92\u4ecb\u4e0a\u4ee5\u4efb\u4f55\u5f62\u5f0f\u590d\u5236\u3001\u53d1\u884c\u672c\u4f5c\u54c1\uff0c\u4ea6\u53ef\u4ee5\u81ea\u7531\u5730\u6f14\u7ece\u3001\u4fee\u6539\u3001\u8f6c\u6362\u6216\u4ee5\u672c\u4f5c\u54c1\u4e3a\u57fa\u7840\u8fdb\u884c\u4e8c\u6b21\u521b\u4f5c\u3002\u4f46\u8981\u6c42\u4f60\uff1a"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u7f72\u540d"}),"\uff1a\u5e94\u5728\u4f7f\u7528\u672c\u6587\u6863\u7684\u5168\u90e8\u6216\u90e8\u5206\u5185\u5bb9\u65f6\u5019\uff0c\u6ce8\u660e\u539f\u4f5c\u8005\u53ca\u6765\u6e90\u4fe1\u606f\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u975e\u5546\u4e1a\u6027\u4f7f\u7528"}),"\uff1a\u4e0d\u5f97\u7528\u4e8e\u5546\u4e1a\u51fa\u7248\u6216\u5176\u4ed6\u4efb\u4f55\u5e26\u6709\u5546\u4e1a\u6027\u8d28\u7684\u884c\u4e3a\u3002\u5982\u9700\u5546\u4e1a\u4f7f\u7528\uff0c\u8bf7\u8054\u7cfb\u4f5c\u8005\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u76f8\u540c\u65b9\u5f0f\u5171\u4eab\u7684\u6761\u4ef6"}),"\uff1a\u5728\u672c\u6587\u6863\u57fa\u7840\u4e0a\u6f14\u7ece\u3001\u4fee\u6539\u7684\u4f5c\u54c1\uff0c\u5e94\u5f53\u7ee7\u7eed\u4ee5\u77e5\u8bc6\u5171\u4eab\u7f72\u540d 4.0\u56fd\u9645\u8bb8\u53ef\u534f\u8bae\u8fdb\u884c\u8bb8\u53ef\u3002"]}),"\n"]}),"\n"]}),"\n"]})})]})}function p(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8672:(e,n,r)=>{r.d(n,{Z:()=>c,a:()=>s});var i=r(959);const o={},t=i.createContext(o);function s(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);