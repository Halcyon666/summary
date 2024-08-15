"use strict";(self.webpackChunksummary=self.webpackChunksummary||[]).push([[3984],{4391:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var t=n(1527),r=n(73),o=n(7415),s=n(9338);const i={title:"APT \u4f7f\u7528",sidebar_label:"APT \u4f7f\u7528",sidebar_position:2,description:"How to write a annotation processor and use in Java Project",keywords:["APT","annotation usage","Java","APT used in Maven","APT used in Gradle","write a annotation processor","use in Java Project"]},l=void 0,u={id:"Java/JavaBase/annotation processor",title:"APT \u4f7f\u7528",description:"How to write a annotation processor and use in Java Project",source:"@site/docs/01-Java/01-JavaBase/annotation processor.mdx",sourceDirName:"01-Java/01-JavaBase",slug:"/Java/JavaBase/annotation processor",permalink:"/Java/JavaBase/annotation processor",draft:!1,unlisted:!1,editUrl:"https://github.com/Halcyon666/summary/edit/main/docs/01-Java/01-JavaBase/annotation processor.mdx",tags:[],version:"current",lastUpdatedAt:1723734192e3,sidebarPosition:2,frontMatter:{title:"APT \u4f7f\u7528",sidebar_label:"APT \u4f7f\u7528",sidebar_position:2,description:"How to write a annotation processor and use in Java Project",keywords:["APT","annotation usage","Java","APT used in Maven","APT used in Gradle","write a annotation processor","use in Java Project"]},sidebar:"tutorialSidebar",previous:{title:"lambda \u4f7f\u7528",permalink:"/Java/JavaBase/lambda"},next:{title:"Java\u4e0a\u4f20\u6587\u4ef6",permalink:"/Java/JavaBase/file upload"}},c={},d=[{value:"annotation-processor\u6a21\u5757",id:"annotation-processor\u6a21\u5757",level:2},{value:"\u5199\u4e00\u4e2aprocessor",id:"\u5199\u4e00\u4e2aprocessor",level:2},{value:"\u5982\u679c\u5728\u5176\u5b83\u5de5\u7a0b\u4f7f\u7528Processor jar\u5305",id:"\u5982\u679c\u5728\u5176\u5b83\u5de5\u7a0b\u4f7f\u7528processor-jar\u5305",level:2}];function p(e){const a={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.h2,{id:"annotation-processor\u6a21\u5757",children:"annotation-processor\u6a21\u5757"}),"\n",(0,t.jsx)(a.p,{children:"JAVA APT \u57fa\u4e8e\u6ce8\u89e3\u5904\u7406\u5668\uff0c\u672c\u5de5\u7a0b\u6848\u4f8b\u53ea\u662f\u8f93\u51fa\u4e00\u4e9b\u6253\u5370\u5185\u5bb9\u3002"}),"\n",(0,t.jsx)(a.h2,{id:"\u5199\u4e00\u4e2aprocessor",children:"\u5199\u4e00\u4e2aprocessor"}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.a,{href:"https://github.com/Halcyon666/learn-cases/blob/main/annotation-processor/src/main/java/com/whalefall/apt/MyAnnotationProcessor.java",children:"example file"})}),"\n",(0,t.jsx)(a.p,{children:"\u5982\u679c\u60f3\u4e86\u89e3\u66f4\u591a\u6ce8\u89e3\u5904\u7406\u5668\u76f8\u5173\u7684\u77e5\u8bc6\uff0c\u8bf7\u9605\u8bfb Core-Java-Vol.-II-Advanced-Features-12th-Edition-Cay-S.-Horstmann."}),"\n",(0,t.jsx)(a.h2,{id:"\u5982\u679c\u5728\u5176\u5b83\u5de5\u7a0b\u4f7f\u7528processor-jar\u5305",children:"\u5982\u679c\u5728\u5176\u5b83\u5de5\u7a0b\u4f7f\u7528Processor jar\u5305"}),"\n","\n",(0,t.jsxs)(o.Z,{children:[(0,t.jsx)(s.Z,{value:"maven",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-xml",children:"\n\x3c!--...--\x3e\n<plugin>\n    <groupId>org.apache.maven.plugins</groupId>\n    <artifactId>maven-compiler-plugin</artifactId>\n    <version>3.11.0</version>\n    <configuration>\n        <source>1.8</source>\n        <target>1.8</target>\n        <annotationProcessorPaths>\n            <path>\n                <groupId>com.whalefall</groupId>\n                <artifactId>annotation-processor</artifactId>\n                <version>0.0.1-SNAPSHOT</version>\n            </path>\n            <path>\n                <groupId>org.projectlombok</groupId>\n                <artifactId>lombok</artifactId>\n                <version>1.18.26</version>\n            </path>\n        </annotationProcessorPaths>\n        <showWarnings>true</showWarnings>\n    </configuration>\n</plugin>\n\x3c!--...Here are include lombok, thus I use the plugin.--\x3e\n"})})}),(0,t.jsx)(s.Z,{value:"gradle",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-groovy",children:"dependencies {\n    //    ...\n    annotationProcessor 'com.whalefall:annotation-processor:0.0.1-SNAPSHOT'\n    testAnnotationProcessor 'com.whalefall:annotation-processor:0.0.1-SNAPSHOT'\n    // if you are using processor in test code\n    \n    // if you use this in other module of the aggregation project \n    annotationProcessor project(':annotation-processor')\n}\n"})})})]})]})}function h(e={}){const{wrapper:a}={...(0,r.a)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},9338:(e,a,n)=>{n.d(a,{Z:()=>s});n(959);var t=n(6259);const r={tabItem:"tabItem_SmpC"};var o=n(1527);function s(e){let{children:a,hidden:n,className:s}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,t.Z)(r.tabItem,s),hidden:n,children:a})}},7415:(e,a,n)=>{n.d(a,{Z:()=>y});var t=n(959),r=n(6259),o=n(4998),s=n(8903),i=n(5107),l=n(486),u=n(8801),c=n(2138);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:a,children:n}=e;return(0,t.useMemo)((()=>{const e=a??function(e){return d(e).map((e=>{let{props:{value:a,label:n,attributes:t,default:r}}=e;return{value:a,label:n,attributes:t,default:r}}))}(n);return function(e){const a=(0,u.l)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,n])}function h(e){let{value:a,tabValues:n}=e;return n.some((e=>e.value===a))}function v(e){let{queryString:a=!1,groupId:n}=e;const r=(0,s.k6)(),o=function(e){let{queryString:a=!1,groupId:n}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:a,groupId:n});return[(0,l._X)(o),(0,t.useCallback)((e=>{if(!o)return;const a=new URLSearchParams(r.location.search);a.set(o,e),r.replace({...r.location,search:a.toString()})}),[o,r])]}function m(e){const{defaultValue:a,queryString:n=!1,groupId:r}=e,o=p(e),[s,l]=(0,t.useState)((()=>function(e){let{defaultValue:a,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!h({value:a,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const t=n.find((e=>e.default))??n[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:a,tabValues:o}))),[u,d]=v({queryString:n,groupId:r}),[m,f]=function(e){let{groupId:a}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(a),[r,o]=(0,c.Nk)(n);return[r,(0,t.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),b=(()=>{const e=u??m;return h({value:e,tabValues:o})?e:null})();(0,i.Z)((()=>{b&&l(b)}),[b]);return{selectedValue:s,selectValue:(0,t.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),f(e)}),[d,f,o]),tabValues:o}}var f=n(8224);const b={tabList:"tabList_ox2A",tabItem:"tabItem_Lc1i"};var g=n(1527);function x(e){let{className:a,block:n,selectedValue:t,selectValue:s,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.o5)(),c=e=>{const a=e.currentTarget,n=l.indexOf(a),r=i[n].value;r!==t&&(u(a),s(r))},d=e=>{let a=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;a=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;a=l[n]??l[l.length-1];break}}a?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},a),children:i.map((e=>{let{value:a,label:n,attributes:o}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:t===a?0:-1,"aria-selected":t===a,ref:e=>l.push(e),onKeyDown:d,onClick:c,...o,className:(0,r.Z)("tabs__item",b.tabItem,o?.className,{"tabs__item--active":t===a}),children:n??a},a)}))})}function j(e){let{lazy:a,children:n,selectedValue:r}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(a){const e=o.find((e=>e.props.value===r));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:o.map(((e,a)=>(0,t.cloneElement)(e,{key:a,hidden:e.props.value!==r})))})}function w(e){const a=m(e);return(0,g.jsxs)("div",{className:(0,r.Z)("tabs-container",b.tabList),children:[(0,g.jsx)(x,{...e,...a}),(0,g.jsx)(j,{...e,...a})]})}function y(e){const a=(0,f.Z)();return(0,g.jsx)(w,{...e,children:d(e.children)},String(a))}},73:(e,a,n)=>{n.d(a,{Z:()=>i,a:()=>s});var t=n(959);const r={},o=t.createContext(r);function s(e){const a=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(o.Provider,{value:a},e.children)}}}]);