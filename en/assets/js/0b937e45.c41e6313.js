"use strict";(self.webpackChunksummary=self.webpackChunksummary||[]).push([[4985],{6521:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>t,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var l=r(1527),i=r(73);const s={title:"gradle \u548c maven \u914d\u7f6e",sidebar_label:"gradle \u548c maven \u914d\u7f6e",sidebar_position:2},t=void 0,o={id:"Develop-Tools/gradle-maven configuration",title:"gradle \u548c maven \u914d\u7f6e",description:"\u914d\u7f6emaven",source:"@site/docs/09-Develop-Tools/gradle-maven configuration.mdx",sourceDirName:"09-Develop-Tools",slug:"/Develop-Tools/gradle-maven configuration",permalink:"/en/Develop-Tools/gradle-maven configuration",draft:!1,unlisted:!1,editUrl:"https://github.com/Halcyon666/summary/edit/main/i18n/en/docusaurus-plugin-content-docs/current/09-Develop-Tools/gradle-maven configuration.mdx",tags:[],version:"current",lastUpdatedAt:1710340003,formattedLastUpdatedAt:"Mar 13, 2024",sidebarPosition:2,frontMatter:{title:"gradle \u548c maven \u914d\u7f6e",sidebar_label:"gradle \u548c maven \u914d\u7f6e",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u53f2\u4e0a\u6700\u5168git\u547d\u4ee4\u96c6",permalink:"/en/Develop-Tools/regex"},next:{title:"py replacement",permalink:"/en/Develop-Tools/python-replacement-script"}},a={},d=[{value:"\u914d\u7f6emaven",id:"\u914d\u7f6emaven",level:2},{value:"\u914d\u7f6egradle",id:"\u914d\u7f6egradle",level:2},{value:"\u5bfc\u5165\u6e90\u7801\u65f6gradle\u95ee\u9898\u5904\u7406",id:"\u5bfc\u5165\u6e90\u7801\u65f6gradle\u95ee\u9898\u5904\u7406",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"\u914d\u7f6emaven",children:"\u914d\u7f6emaven"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"\u914d\u7f6e\u672c\u5730\u4ed3\u5e93\u8def\u5f84"}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"<localRepository>d:/mvnrepository</localRepository>"})}),"\n",(0,l.jsxs)(n.ol,{start:"2",children:["\n",(0,l.jsx)(n.li,{children:"\u914d\u7f6e\u8fdc\u7a0b\u5e93\u5730\u5740"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-xml",children:"<mirror>  \n    <id>nexus-aliyun</id>  \n    <mirrorOf>central</mirrorOf>    \n    <name>Nexus aliyun</name>  \n    <url>https://maven.aliyun.com/repository/public</url>  \n</mirror>\n"})}),"\n",(0,l.jsxs)(n.ol,{start:"3",children:["\n",(0,l.jsx)(n.li,{children:"\u914d\u7f6eJDK\u4e3a1.8"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-xml",children:"<profile>\n    <id>jdk-1.8</id>\n    <activation>\n        <activeByDefault>true</activeByDefault>\n        <jdk>1.8</jdk>\n    </activation>\n\n    <properties>\n      <maven.compiler.source>1.8</maven.compiler.source>\n      <maven.compiler.target>1.8</maven.compiler.target>\n      <maven.compiler.compilerVersion>1.8</maven.compiler.compilerVersion>\n    </properties>\n  </profile>\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u914d\u7f6egradle",children:"\u914d\u7f6egradle"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\u5728",(0,l.jsx)(n.code,{children:"GRADLE_HOME"}),"\u4e0b\u7684init.d\u6587\u4ef6\u4e2d\uff0c\u521b\u5efa\u4e00\u4e2a",(0,l.jsx)(n.code,{children:"init.gradle"}),"\u914d\u7f6e\u6587\u4ef6:"]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json",children:'allprojects {\n    repositories {\n        maven { url \'file:///D:/mvnrepository\'}\n        mavenLocal()\n        maven { name "Alibaba" ; url "https://maven.aliyun.com/repository/public" }\n        maven { name "Bstek" ; url "http://nexus.bsdn.org/content/groups/public/" }\n        mavenCentral()\n    }\n\n    buildscript { \n        repositories { \n            maven { name "Alibaba" ; url \'https://maven.aliyun.com/repository/public\' }\n            maven { name "Bstek" ; url \'http://nexus.bsdn.org/content/groups/public/\' }\n            maven { name "M2" ; url \'https://plugins.gradle.org/m2/\' }\n        }\n    }\n}\n'})}),"\n",(0,l.jsxs)(n.ol,{start:"2",children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.a,{href:"https://www.cnblogs.com/mthoutai/p/7389140.html",children:"Gradle\u5f00\u542fDaemon\u539f\u6587\u5730\u5740"}),"\u5728\u7528\u6237\u76ee\u5f55\u4e0b\u521b\u5efa\u4e00\u4e2a",(0,l.jsx)(n.code,{children:"C:\\Users\\user\\.gradle\\gradle.properties"}),"\u6587\u4ef6\uff0c\u6587\u4ef6\u5185\u5bb9"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"org.gradle.daemon=true"})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:'(if not exist "%USERPROFILE%/.gradle" mkdir "%USERPROFILE%/.gradle") && (echo org.gradle.daemon=true >> "%USERPROFILE%/.gradle/gradle.properties")  \n'})}),"\n",(0,l.jsxs)(n.ol,{start:"3",children:["\n",(0,l.jsx)(n.li,{children:"idea\u914d\u7f6egradle\u672c\u5730\u4ed3\u5e93\u5730\u5740"}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{src:"https://s2.loli.net/2023/07/15/UKAVJTgs6lYP4Ci.png",alt:"image-20211212154508471"})}),"\n",(0,l.jsx)(n.h2,{id:"\u5bfc\u5165\u6e90\u7801\u65f6gradle\u95ee\u9898\u5904\u7406",children:"\u5bfc\u5165\u6e90\u7801\u65f6gradle\u95ee\u9898\u5904\u7406"}),"\n",(0,l.jsxs)(n.p,{children:["\u6211\u5bfc\u5165\u7684\u5206\u652f2.5.x\u7248\u672c\u4ee3\u7801\uff0c\u4f7f\u7528gradle Gradle 5.6.4\u5c31\u4f1a\u51fa\u95ee\u9898\u3002\u51fa\u95ee\u9898\u539f\u56e0\u56e0\u4e3a\u8001\u7248\u672c\u7684gradle\u7f3a\u5c11\u4e00\u4e9b\u7279\u6027\uff0c\u4f8b\u5982",(0,l.jsx)(n.code,{children:"OperationCompletionListener"}),", \u62a5\u9519\u5982\u4e0b\n",(0,l.jsx)(n.img,{src:"https://s2.loli.net/2023/07/15/m45ZutFhdGQf1zr.png",alt:""})]}),"\n",(0,l.jsxs)(n.p,{children:["\u4f7f\u7528wrapper gradle\u3002\u4e5f\u5c31\u662f\u5728\u9879\u76ee\u6839\u8def\u5f84 \u6267\u884c",(0,l.jsx)(n.code,{children:"./gradlew"}),",\u4f46\u662f\u8fd8\u662f\u62a5\u9519 ",(0,l.jsx)(n.code,{children:"failed: timeout"}),"\n",(0,l.jsx)(n.img,{src:"https://s2.loli.net/2023/07/15/HuKged2EVnWqSz8.png",alt:""})]}),"\n",(0,l.jsxs)(n.p,{children:["\u90a3\u4e48\u4f60\u9700\u8981\u6362\u4e2a\u547d\u4ee4\u6307\u5b9a\u8d85\u65f6\u65f6\u95f4\u957f\u4e00\u4e9b,\u547d\u4ee4\u5982\u4e0b\n",(0,l.jsx)(n.code,{children:"./gradlew -Dorg.gradle.internal.http.socketTimeout=60000 -Dorg.gradle.internal.http.connectionTimeout=60000 --daemon"})," ",(0,l.jsx)(n.a,{href:"https://baikangwang.gitbooks.io/workingnotes/content/how-to-increase-read-timeout.html",children:"\u547d\u4ee4\u6765\u81ea"})]}),"\n",(0,l.jsxs)(n.p,{children:["\u5f53\u7136\u53ef\u4ee5\u901a\u8fc7IDE\u8fdb\u884c\u8bbe\u7f6e\uff0c\u8fd9\u6837\u4e5f\u81ea\u52a8\u4f7f\u7528wrapper\u8fdb\u884cbuild\n",(0,l.jsx)(n.img,{src:"https://s2.loli.net/2023/07/15/Gwk7mLMACQVc6nl.png",alt:""})]}),"\n",(0,l.jsx)(n.admonition,{title:"\u534f\u8bae",type:"tip",children:(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["\u672c\u4f5c\u54c1\u4ee3\u7801\u90e8\u5206\u91c7\u7528 ",(0,l.jsx)(n.a,{href:"https://www.apache.org/licenses/LICENSE-2.0",children:"Apache 2.0\u534f\u8bae"}),"\u8fdb\u884c\u8bb8\u53ef\u3002\u9075\u5faa\u8bb8\u53ef\u7684\u524d\u63d0\u4e0b\uff0c\u4f60\u53ef\u4ee5\u81ea\u7531\u5730\u5bf9\u4ee3\u7801\u8fdb\u884c\u4fee\u6539\uff0c\u518d\u53d1\u5e03\uff0c\u53ef\u4ee5\u5c06\u4ee3\u7801\u7528\u4f5c\u5546\u4e1a\u7528\u9014\u3002\u4f46\u8981\u6c42\u4f60\uff1a"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"\u7f72\u540d"}),"\uff1a\u5728\u539f\u6709\u4ee3\u7801\u548c\u884d\u751f\u4ee3\u7801\u4e2d\uff0c\u4fdd\u7559\u539f\u4f5c\u8005\u7f72\u540d\u53ca\u4ee3\u7801\u6765\u6e90\u4fe1\u606f\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"\u4fdd\u7559\u8bb8\u53ef\u8bc1"}),"\uff1a\u5728\u539f\u6709\u4ee3\u7801\u548c\u884d\u751f\u4ee3\u7801\u4e2d\uff0c\u4fdd\u7559Apache 2.0\u534f\u8bae\u6587\u4ef6\u3002"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["\u672c\u4f5c\u54c1\u6587\u6863\u90e8\u5206\u91c7\u7528",(0,l.jsx)(n.a,{href:"http://creativecommons.org/licenses/by/4.0/",children:"\u77e5\u8bc6\u5171\u4eab\u7f72\u540d 4.0 \u56fd\u9645\u8bb8\u53ef\u534f\u8bae"}),"\u8fdb\u884c\u8bb8\u53ef\u3002 \u9075\u5faa\u8bb8\u53ef\u7684\u524d\u63d0\u4e0b\uff0c\u4f60\u53ef\u4ee5\u81ea\u7531\u5730\u5171\u4eab\uff0c\u5305\u62ec\u5728\u4efb\u4f55\u5a92\u4ecb\u4e0a\u4ee5\u4efb\u4f55\u5f62\u5f0f\u590d\u5236\u3001\u53d1\u884c\u672c\u4f5c\u54c1\uff0c\u4ea6\u53ef\u4ee5\u81ea\u7531\u5730\u6f14\u7ece\u3001\u4fee\u6539\u3001\u8f6c\u6362\u6216\u4ee5\u672c\u4f5c\u54c1\u4e3a\u57fa\u7840\u8fdb\u884c\u4e8c\u6b21\u521b\u4f5c\u3002\u4f46\u8981\u6c42\u4f60\uff1a"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"\u7f72\u540d"}),"\uff1a\u5e94\u5728\u4f7f\u7528\u672c\u6587\u6863\u7684\u5168\u90e8\u6216\u90e8\u5206\u5185\u5bb9\u65f6\u5019\uff0c\u6ce8\u660e\u539f\u4f5c\u8005\u53ca\u6765\u6e90\u4fe1\u606f\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"\u975e\u5546\u4e1a\u6027\u4f7f\u7528"}),"\uff1a\u4e0d\u5f97\u7528\u4e8e\u5546\u4e1a\u51fa\u7248\u6216\u5176\u4ed6\u4efb\u4f55\u5e26\u6709\u5546\u4e1a\u6027\u8d28\u7684\u884c\u4e3a\u3002\u5982\u9700\u5546\u4e1a\u4f7f\u7528\uff0c\u8bf7\u8054\u7cfb\u4f5c\u8005\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"\u76f8\u540c\u65b9\u5f0f\u5171\u4eab\u7684\u6761\u4ef6"}),"\uff1a\u5728\u672c\u6587\u6863\u57fa\u7840\u4e0a\u6f14\u7ece\u3001\u4fee\u6539\u7684\u4f5c\u54c1\uff0c\u5e94\u5f53\u7ee7\u7eed\u4ee5\u77e5\u8bc6\u5171\u4eab\u7f72\u540d 4.0\u56fd\u9645\u8bb8\u53ef\u534f\u8bae\u8fdb\u884c\u8bb8\u53ef\u3002"]}),"\n"]}),"\n"]}),"\n"]})})]})}function p(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},73:(e,n,r)=>{r.d(n,{Z:()=>o,a:()=>t});var l=r(959);const i={},s=l.createContext(i);function t(e){const n=l.useContext(s);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),l.createElement(s.Provider,{value:n},e.children)}}}]);