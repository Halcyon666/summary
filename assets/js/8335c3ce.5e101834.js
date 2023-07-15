"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5600],{3905:(e,o,r)=>{r.d(o,{Zo:()=>p,kt:()=>f});var t=r(7294);function n(e,o,r){return o in e?Object.defineProperty(e,o,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[o]=r,e}function a(e,o){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);o&&(t=t.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var o=1;o<arguments.length;o++){var r=null!=arguments[o]?arguments[o]:{};o%2?a(Object(r),!0).forEach((function(o){n(e,o,r[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(r,o))}))}return e}function i(e,o){if(null==e)return{};var r,t,n=function(e,o){if(null==e)return{};var r,t,n={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],o.indexOf(r)>=0||(n[r]=e[r]);return n}(e,o);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],o.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=t.createContext({}),l=function(e){var o=t.useContext(c),r=o;return e&&(r="function"==typeof e?e(o):s(s({},o),e)),r},p=function(e){var o=l(e.components);return t.createElement(c.Provider,{value:o},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var o=e.children;return t.createElement(t.Fragment,{},o)}},d=t.forwardRef((function(e,o){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(r),d=n,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||a;return r?t.createElement(f,s(s({ref:o},p),{},{components:r})):t.createElement(f,s({ref:o},p))}));function f(e,o){var r=arguments,n=o&&o.mdxType;if("string"==typeof e||n){var a=r.length,s=new Array(a);s[0]=d;var i={};for(var c in o)hasOwnProperty.call(o,c)&&(i[c]=o[c]);i.originalType=e,i[u]="string"==typeof e?e:n,s[1]=i;for(var l=2;l<a;l++)s[l]=r[l];return t.createElement.apply(null,s)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1433:(e,o,r)=>{r.r(o),r.d(o,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var t=r(7462),n=(r(7294),r(3905));const a={title:"APT \u4f7f\u7528",sidebar_label:"APT \u4f7f\u7528",sidebar_position:2},s=void 0,i={unversionedId:"Tech/Java/JavaBase/annotation processor",id:"Tech/Java/JavaBase/annotation processor",title:"APT \u4f7f\u7528",description:"the module of annotation-processor",source:"@site/docs/01-Tech/01-Java/JavaBase/annotation processor.md",sourceDirName:"01-Tech/01-Java/JavaBase",slug:"/Tech/Java/JavaBase/annotation processor",permalink:"/summary/Tech/Java/JavaBase/annotation processor",draft:!1,editUrl:"https://github.com/Halcyon666/summary/blob/main/docs/01-Tech/01-Java/JavaBase/annotation processor.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"APT \u4f7f\u7528",sidebar_label:"APT \u4f7f\u7528",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"lambda \u4f7f\u7528",permalink:"/summary/Tech/Java/JavaBase/lambda"},next:{title:"\u5e38\u89c1\u5f00\u53d1\u95ee\u9898\u6536\u96c6",permalink:"/summary/Tech/Java/ProblemSummary/Problem-Fix-List"}},c={},l=[{value:"the module of annotation-processor",id:"the-module-of-annotation-processor",level:2},{value:"Write a processor",id:"write-a-processor",level:2},{value:"how to use the processor jar in other project",id:"how-to-use-the-processor-jar-in-other-project",level:2},{value:"maven",id:"maven",level:3},{value:"gradle",id:"gradle",level:3}],p={toc:l},u="wrapper";function m(e){let{components:o,...r}=e;return(0,n.kt)(u,(0,t.Z)({},p,r,{components:o,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"the-module-of-annotation-processor"},"the module of annotation-processor"),(0,n.kt)("p",null,"JAVA APT base annotation processor, in this project, just print some message in the processors"),(0,n.kt)("h2",{id:"write-a-processor"},"Write a processor"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/Halcyon666/learn-cases/blob/main/annotation-processor/src/main/java/com/whalefall/apt/MyAnnotationProcessor.java"},"example file")),(0,n.kt)("p",null,"If you want to know more about program a processor, you can refer the book of Core-Java-Vol.-II-Advanced-Features-12th-Edition-Cay-S.-Horstmann."),(0,n.kt)("h2",{id:"how-to-use-the-processor-jar-in-other-project"},"how to use the processor jar in other project"),(0,n.kt)("h3",{id:"maven"},"maven"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},"\n\x3c!--...--\x3e\n<plugin>\n    <groupId>org.apache.maven.plugins</groupId>\n    <artifactId>maven-compiler-plugin</artifactId>\n    <version>3.11.0</version>\n    <configuration>\n        <source>1.8</source>\n        <target>1.8</target>\n        <annotationProcessorPaths>\n            <path>\n                <groupId>com.whalefall</groupId>\n                <artifactId>annotation-processor</artifactId>\n                <version>0.0.1-SNAPSHOT</version>\n            </path>\n            <path>\n                <groupId>org.projectlombok</groupId>\n                <artifactId>lombok</artifactId>\n                <version>1.18.26</version>\n            </path>\n        </annotationProcessorPaths>\n        <showWarnings>true</showWarnings>\n    </configuration>\n</plugin>\n        \x3c!--...--\x3e\n")),(0,n.kt)("p",null,"Here are include lombok, thus I use the plugin."),(0,n.kt)("h3",{id:"gradle"},"gradle"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-groovy"},"dependencies {\n    //    ...\n    annotationProcessor 'com.whalefall:annotation-processor:0.0.1-SNAPSHOT'\n    testAnnotationProcessor 'com.whalefall:annotation-processor:0.0.1-SNAPSHOT'\n    // if you are using processor in test code\n    \n    // if you use this in other module of the aggregation project \n    annotationProcessor project(':annotation-processor')\n}\n")))}m.isMDXComponent=!0}}]);