"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8176],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=p(n),g=a,f=c["".concat(s,".").concat(g)]||c[g]||u[g]||i;return n?r.createElement(f,o(o({ref:t},m),{},{components:n})):r.createElement(f,o({ref:t},m))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},23:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={title:"Mybatis Plus \u4ee3\u7801\u751f\u6210",hidemeta:!0},o=void 0,l={unversionedId:"Java/DateBase/MyBatis-Plus\u4ee3\u7801\u751f\u6210",id:"Java/DateBase/MyBatis-Plus\u4ee3\u7801\u751f\u6210",title:"Mybatis Plus \u4ee3\u7801\u751f\u6210",description:"\u672c\u6587\u4ee3\u7801\u6765\u81eaMyBatis Plus\u5b98\u7f51",source:"@site/docs/Java/DateBase/MyBatis-Plus\u4ee3\u7801\u751f\u6210.md",sourceDirName:"Java/DateBase",slug:"/Java/DateBase/MyBatis-Plus\u4ee3\u7801\u751f\u6210",permalink:"/summary/Java/DateBase/MyBatis-Plus\u4ee3\u7801\u751f\u6210",draft:!1,editUrl:"https://github.com/Halcyon666/summary/blob/main/docs/Java/DateBase/MyBatis-Plus\u4ee3\u7801\u751f\u6210.md",tags:[],version:"current",frontMatter:{title:"Mybatis Plus \u4ee3\u7801\u751f\u6210",hidemeta:!0},sidebar:"tutorialSidebar",previous:{title:"\u5206\u5e03\u5f0f\u95ee\u9898",permalink:"/summary/Java/DateBase/Java-Case-Distribution"},next:{title:"Mybatis Plus\u5f00\u59cb",permalink:"/summary/Java/DateBase/Mybatis-Plus\u5feb\u901f\u5f00\u59cb"}},s={},p=[],m={toc:p},c="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://baomidou.com/pages/d357af/#%E4%BD%BF%E7%94%A8%E6%95%99%E7%A8%8B"},"\u672c\u6587\u4ee3\u7801\u6765\u81eaMyBatis Plus\u5b98\u7f51")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u914d\u7f6e\u4f9d\u8d56")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-groovy"},"dependencies {\n    implementation 'org.springframework.boot:spring-boot-starter-quartz'\n    implementation 'org.springframework.boot:spring-boot-starter-web'\n    implementation group: 'com.baomidou', name: 'mybatis-plus-boot-starter', version: '3.2.0'\n    implementation group: 'com.baomidou', name: 'mybatis-plus-generator', version: '3.2.0'\n    implementation group: 'freemarker', name: 'freemarker', version: '2.3.9'// \u4f4e\u4e8e\u8fd9\u4e2a\u7248\u672c\u4f1a\u62a5\u9519\n    \n    compileOnly 'org.projectlombok:lombok'\n    runtimeOnly 'com.oracle.database.jdbc:ojdbc8'\n    annotationProcessor 'org.projectlombok:lombok'\n    testImplementation 'org.springframework.boot:spring-boot-starter-test'\n}\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"\u7f16\u5199\u751f\u6210\u5668\u7c7b(\u65e7\u7248)")),(0,a.kt)("p",null,"\u6f14\u793a\u4f8b\u5b50\uff0c\u6267\u884c main \u65b9\u6cd5\u63a7\u5236\u53f0\u8f93\u5165 ",(0,a.kt)("strong",{parentName:"p"},"\u6a21\u5757\u540d")," ",(0,a.kt)("strong",{parentName:"p"},"\u8868\u540d")," \u56de\u8f66\u81ea\u52a8\u751f\u6210\u5bf9\u5e94\u9879\u76ee\u76ee\u5f55\u4e2d"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'public class CodeGenerator {\n\n    /**\n     * <p>\n     * \u8bfb\u53d6\u63a7\u5236\u53f0\u5185\u5bb9\n     * </p>\n     */\n    public static String scanner(String tip) {\n        Scanner scanner = new Scanner(System.in);\n        StringBuilder help = new StringBuilder();\n        help.append("\u8bf7\u8f93\u5165" + tip + "\uff1a");\n        System.out.println(help.toString());\n        if (scanner.hasNext()) {\n            String ipt = scanner.next();\n            if (StringUtils.isNotBlank(ipt)) {\n                return ipt;\n            }\n        }\n        throw new MybatisPlusException("\u8bf7\u8f93\u5165\u6b63\u786e\u7684" + tip + "\uff01");\n    }\n\n    public static void main(String[] args) {\n        // \u4ee3\u7801\u751f\u6210\u5668\n        AutoGenerator mpg = new AutoGenerator();\n\n        // \u5168\u5c40\u914d\u7f6e\n        GlobalConfig gc = new GlobalConfig();\n        String projectPath = System.getProperty("user.dir");\n        gc.setOutputDir(projectPath + "/src/main/java");\n        gc.setAuthor("jobob");\n        gc.setOpen(false);\n        // gc.setSwagger2(true); \u5b9e\u4f53\u5c5e\u6027 Swagger2 \u6ce8\u89e3\n        mpg.setGlobalConfig(gc);\n\n        // \u6570\u636e\u6e90\u914d\u7f6e\n        DataSourceConfig dsc = new DataSourceConfig();\n        dsc.setUrl("jdbc:oracle:thin:@192.168.3.161:1521:jc");\n        // dsc.setSchemaName("public");\n        dsc.setDriverName("oracle.jdbc.driver.OracleDriver");\n        dsc.setUsername("jc");\n        dsc.setPassword("123456");\n        mpg.setDataSource(dsc);\n\n        // \u5305\u914d\u7f6e\n        PackageConfig pc = new PackageConfig();\n        pc.setModuleName(scanner("\u6a21\u5757\u540d"));\n        pc.setParent("com.whalefall541.generator");\n        mpg.setPackageInfo(pc);\n\n        // \u81ea\u5b9a\u4e49\u914d\u7f6e\n        InjectionConfig cfg = new InjectionConfig() {\n            @Override\n            public void initMap() {\n                // to do nothing\n            }\n        };\n\n        // \u5982\u679c\u6a21\u677f\u5f15\u64ce\u662f freemarker\n        String templatePath = "/templates/mapper.xml.ftl";\n        // \u5982\u679c\u6a21\u677f\u5f15\u64ce\u662f velocity\n        // String templatePath = "/templates/mapper.xml.vm";\n\n        // \u81ea\u5b9a\u4e49\u8f93\u51fa\u914d\u7f6e\n        List<FileOutConfig> focList = new ArrayList<>();\n        // \u81ea\u5b9a\u4e49\u914d\u7f6e\u4f1a\u88ab\u4f18\u5148\u8f93\u51fa\n        focList.add(new FileOutConfig(templatePath) {\n            @Override\n            public String outputFile(TableInfo tableInfo) {\n                // \u81ea\u5b9a\u4e49\u8f93\u51fa\u6587\u4ef6\u540d \uff0c \u5982\u679c\u4f60 Entity \u8bbe\u7f6e\u4e86\u524d\u540e\u7f00\u3001\u6b64\u5904\u6ce8\u610f xml \u7684\u540d\u79f0\u4f1a\u8ddf\u7740\u53d1\u751f\u53d8\u5316\uff01\uff01\n                return projectPath + "/src/main/resources/mapper/" + pc.getModuleName()\n                        + "/" + tableInfo.getEntityName() + "Mapper" + StringPool.DOT_XML;\n            }\n        });\n        /*\n        cfg.setFileCreate(new IFileCreate() {\n            @Override\n            public boolean isCreate(ConfigBuilder configBuilder, FileType fileType, String filePath) {\n                // \u5224\u65ad\u81ea\u5b9a\u4e49\u6587\u4ef6\u5939\u662f\u5426\u9700\u8981\u521b\u5efa\n                checkDir("\u8c03\u7528\u9ed8\u8ba4\u65b9\u6cd5\u521b\u5efa\u7684\u76ee\u5f55\uff0c\u81ea\u5b9a\u4e49\u76ee\u5f55\u7528");\n                if (fileType == FileType.MAPPER) {\n                    // \u5df2\u7ecf\u751f\u6210 mapper \u6587\u4ef6\u5224\u65ad\u5b58\u5728\uff0c\u4e0d\u60f3\u91cd\u65b0\u751f\u6210\u8fd4\u56de false\n                    return !new File(filePath).exists();\n                }\n                // \u5141\u8bb8\u751f\u6210\u6a21\u677f\u6587\u4ef6\n                return true;\n            }\n        });\n        */\n        cfg.setFileOutConfigList(focList);\n        mpg.setCfg(cfg);\n\n        // \u914d\u7f6e\u6a21\u677f\n        TemplateConfig templateConfig = new TemplateConfig();\n\n        // \u914d\u7f6e\u81ea\u5b9a\u4e49\u8f93\u51fa\u6a21\u677f\n        //\u6307\u5b9a\u81ea\u5b9a\u4e49\u6a21\u677f\u8def\u5f84\uff0c\u6ce8\u610f\u4e0d\u8981\u5e26\u4e0a.ftl/.vm, \u4f1a\u6839\u636e\u4f7f\u7528\u7684\u6a21\u677f\u5f15\u64ce\u81ea\u52a8\u8bc6\u522b\n        // templateConfig.setEntity("templates/entity2.java");\n        // templateConfig.setService();\n        // templateConfig.setController();\n\n        templateConfig.setXml(null);\n        mpg.setTemplate(templateConfig);\n\n        // \u7b56\u7565\u914d\u7f6e\n        StrategyConfig strategy = new StrategyConfig();\n        strategy.setNaming(NamingStrategy.underline_to_camel);\n        strategy.setColumnNaming(NamingStrategy.underline_to_camel);\n        //strategy.setSuperEntityClass("\u4f60\u81ea\u5df1\u7684\u7236\u7c7b\u5b9e\u4f53,\u6ca1\u6709\u5c31\u4e0d\u7528\u8bbe\u7f6e!");\n        strategy.setEntityLombokModel(true);\n        strategy.setRestControllerStyle(true);\n        // \u516c\u5171\u7236\u7c7b\n        //strategy.setSuperControllerClass("\u4f60\u81ea\u5df1\u7684\u7236\u7c7b\u63a7\u5236\u5668,\u6ca1\u6709\u5c31\u4e0d\u7528\u8bbe\u7f6e!");\n        // \u5199\u4e8e\u7236\u7c7b\u4e2d\u7684\u516c\u5171\u5b57\u6bb5\n        strategy.setSuperEntityColumns("id");\n        strategy.setInclude(scanner("\u8868\u540d\uff0c\u591a\u4e2a\u82f1\u6587\u9017\u53f7\u5206\u5272").split(","));\n        strategy.setControllerMappingHyphenStyle(true);\n        strategy.setTablePrefix(pc.getModuleName() + "_");\n        mpg.setStrategy(strategy);\n        mpg.setTemplateEngine(new FreemarkerTemplateEngine());\n        mpg.execute();\n    }\n}\n')),(0,a.kt)("admonition",{title:"\u534f\u8bae",type:"tip"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u672c\u4f5c\u54c1\u4ee3\u7801\u90e8\u5206\u91c7\u7528 ",(0,a.kt)("a",{parentName:"p",href:"https://www.apache.org/licenses/LICENSE-2.0"},"Apache 2.0\u534f\u8bae"),"\u8fdb\u884c\u8bb8\u53ef\u3002\u9075\u5faa\u8bb8\u53ef\u7684\u524d\u63d0\u4e0b\uff0c\u4f60\u53ef\u4ee5\u81ea\u7531\u5730\u5bf9\u4ee3\u7801\u8fdb\u884c\u4fee\u6539\uff0c\u518d\u53d1\u5e03\uff0c\u53ef\u4ee5\u5c06\u4ee3\u7801\u7528\u4f5c\u5546\u4e1a\u7528\u9014\u3002\u4f46\u8981\u6c42\u4f60\uff1a"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u7f72\u540d"),"\uff1a\u5728\u539f\u6709\u4ee3\u7801\u548c\u884d\u751f\u4ee3\u7801\u4e2d\uff0c\u4fdd\u7559\u539f\u4f5c\u8005\u7f72\u540d\u53ca\u4ee3\u7801\u6765\u6e90\u4fe1\u606f\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u4fdd\u7559\u8bb8\u53ef\u8bc1"),"\uff1a\u5728\u539f\u6709\u4ee3\u7801\u548c\u884d\u751f\u4ee3\u7801\u4e2d\uff0c\u4fdd\u7559Apache 2.0\u534f\u8bae\u6587\u4ef6\u3002"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u672c\u4f5c\u54c1\u6587\u6863\u90e8\u5206\u91c7\u7528",(0,a.kt)("a",{parentName:"p",href:"http://creativecommons.org/licenses/by/4.0/"},"\u77e5\u8bc6\u5171\u4eab\u7f72\u540d 4.0 \u56fd\u9645\u8bb8\u53ef\u534f\u8bae"),"\u8fdb\u884c\u8bb8\u53ef\u3002 \u9075\u5faa\u8bb8\u53ef\u7684\u524d\u63d0\u4e0b\uff0c\u4f60\u53ef\u4ee5\u81ea\u7531\u5730\u5171\u4eab\uff0c\u5305\u62ec\u5728\u4efb\u4f55\u5a92\u4ecb\u4e0a\u4ee5\u4efb\u4f55\u5f62\u5f0f\u590d\u5236\u3001\u53d1\u884c\u672c\u4f5c\u54c1\uff0c\u4ea6\u53ef\u4ee5\u81ea\u7531\u5730\u6f14\u7ece\u3001\u4fee\u6539\u3001\u8f6c\u6362\u6216\u4ee5\u672c\u4f5c\u54c1\u4e3a\u57fa\u7840\u8fdb\u884c\u4e8c\u6b21\u521b\u4f5c\u3002\u4f46\u8981\u6c42\u4f60\uff1a"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u7f72\u540d"),"\uff1a\u5e94\u5728\u4f7f\u7528\u672c\u6587\u6863\u7684\u5168\u90e8\u6216\u90e8\u5206\u5185\u5bb9\u65f6\u5019\uff0c\u6ce8\u660e\u539f\u4f5c\u8005\u53ca\u6765\u6e90\u4fe1\u606f\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u975e\u5546\u4e1a\u6027\u4f7f\u7528"),"\uff1a\u4e0d\u5f97\u7528\u4e8e\u5546\u4e1a\u51fa\u7248\u6216\u5176\u4ed6\u4efb\u4f55\u5e26\u6709\u5546\u4e1a\u6027\u8d28\u7684\u884c\u4e3a\u3002\u5982\u9700\u5546\u4e1a\u4f7f\u7528\uff0c\u8bf7\u8054\u7cfb\u4f5c\u8005\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u76f8\u540c\u65b9\u5f0f\u5171\u4eab\u7684\u6761\u4ef6"),"\uff1a\u5728\u672c\u6587\u6863\u57fa\u7840\u4e0a\u6f14\u7ece\u3001\u4fee\u6539\u7684\u4f5c\u54c1\uff0c\u5e94\u5f53\u7ee7\u7eed\u4ee5\u77e5\u8bc6\u5171\u4eab\u7f72\u540d 4.0\u56fd\u9645\u8bb8\u53ef\u534f\u8bae\u8fdb\u884c\u8bb8\u53ef\u3002"))))))}u.isMDXComponent=!0}}]);