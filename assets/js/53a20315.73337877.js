"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6668],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),m=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=m(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=m(n),d=a,g=c["".concat(p,".").concat(d)]||c[d]||u[d]||l;return n?r.createElement(g,o(o({ref:t},s),{},{components:n})):r.createElement(g,o({ref:t},s))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:a,o[1]=i;for(var m=2;m<l;m++)o[m]=n[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6486:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>m});var r=n(7462),a=(n(7294),n(3905));const l={title:"maven gradle\u914d\u7f6e",hidemeta:!0},o=void 0,i={unversionedId:"Develop-Tools/\u914d\u7f6egradle-maven",id:"Develop-Tools/\u914d\u7f6egradle-maven",title:"maven gradle\u914d\u7f6e",description:"\u914d\u7f6emaven",source:"@site/docs/Develop-Tools/\u914d\u7f6egradle-maven.md",sourceDirName:"Develop-Tools",slug:"/Develop-Tools/\u914d\u7f6egradle-maven",permalink:"/summary/Develop-Tools/\u914d\u7f6egradle-maven",draft:!1,editUrl:"https://github.com/Halcyon666/summary/blob/main/docs/Develop-Tools/\u914d\u7f6egradle-maven.md",tags:[],version:"current",frontMatter:{title:"maven gradle\u914d\u7f6e",hidemeta:!0},sidebar:"tutorialSidebar",previous:{title:"\u53f2\u4e0a\u6700\u5168git\u547d\u4ee4\u96c6",permalink:"/summary/Develop-Tools/\u53f2\u4e0a\u6700\u5168git\u547d\u4ee4\u96c6"},next:{title:"jQuery \u9009\u62e9\u5668",permalink:"/summary/FrontEnd/JQuery-revese-selector"}},p={},m=[{value:"\u914d\u7f6emaven",id:"\u914d\u7f6emaven",level:2},{value:"\u914d\u7f6egradle",id:"\u914d\u7f6egradle",level:2},{value:"\u5bfc\u5165\u6e90\u7801\u65f6gradle\u95ee\u9898\u5904\u7406",id:"\u5bfc\u5165\u6e90\u7801\u65f6gradle\u95ee\u9898\u5904\u7406",level:2}],s={toc:m},c="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u914d\u7f6emaven"},"\u914d\u7f6emaven"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u914d\u7f6e\u672c\u5730\u4ed3\u5e93\u8def\u5f84")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"<localRepository>d:/mvnrepository</localRepository>")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"\u914d\u7f6e\u8fdc\u7a0b\u5e93\u5730\u5740")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<mirror>  \n    <id>nexus-aliyun</id>  \n    <mirrorOf>central</mirrorOf>    \n    <name>Nexus aliyun</name>  \n    <url>https://maven.aliyun.com/repository/public</url>  \n</mirror>\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"\u914d\u7f6eJDK\u4e3a1.8")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<profile>\n    <id>jdk-1.8</id>\n    <activation>\n        <activeByDefault>true</activeByDefault>\n        <jdk>1.8</jdk>\n    </activation>\n\n    <properties>\n      <maven.compiler.source>1.8</maven.compiler.source>\n      <maven.compiler.target>1.8</maven.compiler.target>\n      <maven.compiler.compilerVersion>1.8</maven.compiler.compilerVersion>\n    </properties>\n  </profile>\n")),(0,a.kt)("h2",{id:"\u914d\u7f6egradle"},"\u914d\u7f6egradle"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5728",(0,a.kt)("inlineCode",{parentName:"li"},"GRADLE_HOME"),"\u4e0b\u7684init.d\u6587\u4ef6\u4e2d\uff0c\u521b\u5efa\u4e00\u4e2a",(0,a.kt)("inlineCode",{parentName:"li"},"init.gradle"),"\u914d\u7f6e\u6587\u4ef6:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'allprojects {\n    repositories {\n        maven { url \'file:///D:/mvnrepository\'}\n        mavenLocal()\n        maven { name "Alibaba" ; url "https://maven.aliyun.com/repository/public" }\n        maven { name "Bstek" ; url "http://nexus.bsdn.org/content/groups/public/" }\n        mavenCentral()\n    }\n\n    buildscript { \n        repositories { \n            maven { name "Alibaba" ; url \'https://maven.aliyun.com/repository/public\' }\n            maven { name "Bstek" ; url \'http://nexus.bsdn.org/content/groups/public/\' }\n            maven { name "M2" ; url \'https://plugins.gradle.org/m2/\' }\n        }\n    }\n}\n')),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://www.cnblogs.com/mthoutai/p/7389140.html"},"Gradle\u5f00\u542fDaemon\u539f\u6587\u5730\u5740"),"\u5728\u7528\u6237\u76ee\u5f55\u4e0b\u521b\u5efa\u4e00\u4e2a",(0,a.kt)("inlineCode",{parentName:"p"},"C:\\Users\\user\\.gradle\\gradle.properties"),"\u6587\u4ef6\uff0c\u6587\u4ef6\u5185\u5bb9"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"org.gradle.daemon=true")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'(if not exist "%USERPROFILE%/.gradle" mkdir "%USERPROFILE%/.gradle") && (echo org.gradle.daemon=true >> "%USERPROFILE%/.gradle/gradle.properties")  \n')),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"idea\u914d\u7f6egradle\u672c\u5730\u4ed3\u5e93\u5730\u5740")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://s2.loli.net/2023/07/15/UKAVJTgs6lYP4Ci.png",alt:"image-20211212154508471"})),(0,a.kt)("h2",{id:"\u5bfc\u5165\u6e90\u7801\u65f6gradle\u95ee\u9898\u5904\u7406"},"\u5bfc\u5165\u6e90\u7801\u65f6gradle\u95ee\u9898\u5904\u7406"),(0,a.kt)("p",null,"\u6211\u5bfc\u5165\u7684\u5206\u652f2.5.x\u7248\u672c\u4ee3\u7801\uff0c\u4f7f\u7528gradle Gradle 5.6.4\u5c31\u4f1a\u51fa\u95ee\u9898\u3002\u51fa\u95ee\u9898\u539f\u56e0\u56e0\u4e3a\u8001\u7248\u672c\u7684gradle\u7f3a\u5c11\u4e00\u4e9b\u7279\u6027\uff0c\u4f8b\u5982",(0,a.kt)("inlineCode",{parentName:"p"},"OperationCompletionListener"),", \u62a5\u9519\u5982\u4e0b\n",(0,a.kt)("img",{parentName:"p",src:"https://s2.loli.net/2023/07/15/m45ZutFhdGQf1zr.png",alt:null})),(0,a.kt)("p",null,"\u4f7f\u7528wrapper gradle\u3002\u4e5f\u5c31\u662f\u5728\u9879\u76ee\u6839\u8def\u5f84 \u6267\u884c",(0,a.kt)("inlineCode",{parentName:"p"},"./gradlew"),",\u4f46\u662f\u8fd8\u662f\u62a5\u9519 ",(0,a.kt)("inlineCode",{parentName:"p"},"failed: timeout"),"\n",(0,a.kt)("img",{parentName:"p",src:"https://s2.loli.net/2023/07/15/HuKged2EVnWqSz8.png",alt:null})),(0,a.kt)("p",null,"\u90a3\u4e48\u4f60\u9700\u8981\u6362\u4e2a\u547d\u4ee4\u6307\u5b9a\u8d85\u65f6\u65f6\u95f4\u957f\u4e00\u4e9b,\u547d\u4ee4\u5982\u4e0b\n",(0,a.kt)("inlineCode",{parentName:"p"},"./gradlew -Dorg.gradle.internal.http.socketTimeout=60000 -Dorg.gradle.internal.http.connectionTimeout=60000 --daemon")," ",(0,a.kt)("a",{parentName:"p",href:"https://baikangwang.gitbooks.io/workingnotes/content/how-to-increase-read-timeout.html"},"\u547d\u4ee4\u6765\u81ea")),(0,a.kt)("p",null,"\u5f53\u7136\u53ef\u4ee5\u901a\u8fc7IDE\u8fdb\u884c\u8bbe\u7f6e\uff0c\u8fd9\u6837\u4e5f\u81ea\u52a8\u4f7f\u7528wrapper\u8fdb\u884cbuild\n",(0,a.kt)("img",{parentName:"p",src:"https://s2.loli.net/2023/07/15/Gwk7mLMACQVc6nl.png",alt:null})),(0,a.kt)("blockquote",null,(0,a.kt)("font",{color:"red"},"\u8f6c\u8f7d\u8bf7\u6ce8\u660e [\u539f\u6587\u5730\u5740](https://www.cnblogs.com/whalefall541/p/15678067.html)")))}u.isMDXComponent=!0}}]);