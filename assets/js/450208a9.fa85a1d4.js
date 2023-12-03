"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3933],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>b});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),s=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=s(r),d=n,b=p["".concat(u,".").concat(d)]||p[d]||m[d]||l;return r?a.createElement(b,o(o({ref:t},c),{},{components:r})):a.createElement(b,o({ref:t},c))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[p]="string"==typeof e?e:n,o[1]=i;for(var s=2;s<l;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5162:(e,t,r)=>{r.d(t,{Z:()=>o});var a=r(7294),n=r(6010);const l={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:r,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(l.tabItem,o),hidden:r},t)}},4866:(e,t,r)=>{r.d(t,{Z:()=>w});var a=r(7462),n=r(7294),l=r(6010),o=r(2466),i=r(6550),u=r(1980),s=r(7392),c=r(12);function p(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}function m(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??p(r);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function d(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:r}=e;const a=(0,i.k6)(),l=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,u._X)(l),(0,n.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function h(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,l=m(e),[o,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[u,s]=b({queryString:r,groupId:a}),[p,h]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,c.Nk)(r);return[a,(0,n.useCallback)((e=>{r&&l.set(e)}),[r,l])]}({groupId:a}),f=(()=>{const e=u??p;return d({value:e,tabValues:l})?e:null})();(0,n.useLayoutEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!d({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),s(e),h(e)}),[s,h,l]),tabValues:l}}var f=r(2389);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:t,block:r,selectedValue:i,selectValue:u,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),m=e=>{const t=e.currentTarget,r=c.indexOf(t),a=s[r].value;a!==i&&(p(t),u(a))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":r},t)},s.map((e=>{let{value:t,label:r,attributes:o}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:d,onClick:m},o,{className:(0,l.Z)("tabs__item",k.tabItem,o?.className,{"tabs__item--active":i===t})}),r??t)})))}function g(e){let{lazy:t,children:r,selectedValue:a}=e;const l=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function v(e){const t=h(e);return n.createElement("div",{className:(0,l.Z)("tabs-container",k.tabList)},n.createElement(y,(0,a.Z)({},e,t)),n.createElement(g,(0,a.Z)({},e,t)))}function w(e){const t=(0,f.Z)();return n.createElement(v,(0,a.Z)({key:String(t)},e))}},933:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>b,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=r(7462),n=(r(7294),r(3905)),l=r(4866),o=r(5162);const i={title:"\u6709\u7528\u7f51\u7ad9\u6536\u96c6",sidebar_label:"\u6709\u7528\u7f51\u7ad9\u6536\u96c6",sidebar_position:1},u=void 0,s={unversionedId:"CollectLinks/useful_links",id:"CollectLinks/useful_links",title:"\u6709\u7528\u7f51\u7ad9\u6536\u96c6",description:"this file notes all the useful website , once browser bookmarks dispatch, I can find back all the sites those I need.",source:"@site/docs/06-CollectLinks/useful_links.md",sourceDirName:"06-CollectLinks",slug:"/CollectLinks/useful_links",permalink:"/summary/CollectLinks/useful_links",draft:!1,editUrl:"https://github.com/Halcyon666/summary/blob/main/docs/06-CollectLinks/useful_links.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"\u6709\u7528\u7f51\u7ad9\u6536\u96c6",sidebar_label:"\u6709\u7528\u7f51\u7ad9\u6536\u96c6",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u5f00\u542f\u81ea\u6211\u6539\u53d8\u7684\u539f\u52a8\u529b",permalink:"/summary/ReadBook/Literature/\u5468\u5cad-\u8ba4\u77e5\u89c9\u9192-\u5f00\u542f\u81ea\u6211\u6539\u53d8\u7684\u539f\u52a8\u529b"},next:{title:"docker-\u914d\u7f6e\u56fd\u5185\u955c\u50cf\u5730\u5740",permalink:"/summary/Container-Tech/docker/docker-\u914d\u7f6e\u56fd\u5185\u955c\u50cf\u5730\u5740"}},c={},p=[{value:"links",id:"links",level:2},{value:"\u6df1\u5165\u7406\u89e3Apache Dubbo\u4e0e\u5b9e\u6218",id:"\u6df1\u5165\u7406\u89e3apache-dubbo\u4e0e\u5b9e\u6218",level:2},{value:"mermaid\u793a\u4f8b",id:"mermaid\u793a\u4f8b",level:2}],m={toc:p},d="wrapper";function b(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"this file notes all the useful website , once browser bookmarks dispatch, I can find back all the sites those I need.")),(0,n.kt)("h2",{id:"links"},"links"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://zhuanlan.zhihu.com/p/370550987"},"CircleCI \u81ea\u52a8\u5316\u90e8\u7f72")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.cnblogs.com/hongmaju/p/15598990.html"},"\u963f\u91cc\u4e91Docker\u5feb\u901f\u5b89\u88c5")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.cnblogs.com/lihw-study/p/16022277.html"},"Docker Compose\u5b89\u88c5")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://blog.csdn.net/hdm314/article/details/119947761"},"ssh: connect to host github.com port 22: Connection timed out")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://zhuanlan.zhihu.com/p/43680621"},"clion mingw\u73af\u5883\u914d\u7f6e")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/QYJLQN2XsI88Gh0xOxS4MA"},"Java\u4e2d18\u79cd\u9501")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/4QgQ1h9VSJZ4c2tFDm6log"},"Nacos\u539f\u7406")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/ZMIUXDc7yY64GDE70g3-kA"},"\u52a0\u901fSpring\u542f\u52a8\u901f\u5ea6")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.alibabacloud.com/blog/overall-technical-architecture-of-dubbo-mesh_600029"},"Overall Technical Architecture of Dubbo Mesh")),(0,n.kt)("p",null,"multiple deployment modes (SDK, Sidecar, and Agent)"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/cM8XUouYGnUVYwm1qgUqVQ"},"seata\u5206\u5e03\u5f0f\u4e8b\u52a1")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("inlineCode",{parentName:"p"},"Java"),"\u4e2d\u5982\u679c\u4e00\u4e2a\u6ca1\u6709\u88ab\u5bb9\u5668\u7ba1\u7406\u7684\u62bd\u8c61\u7c7b\u3001\u5b9e\u4f53\u7c7b\u88ab\u4e00\u4e2a\u5bb9\u5668\u7ba1\u7406\u7684\u5b9e\u4f53\u7c7b\u7ee7\u627f\uff0c\u90a3\u4e48\u62bd\u8c61\u7c7b\u4e5f\u4f1a\u81ea\u52a8\u4ea4\u7ed9\u5bb9\u5668\u7ba1\u7406\u3002")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7115631818736402440"},"Docusaurus\u5efa\u7ad9\uff082\uff09- \u90e8\u7f72\u5230GitHub Pages")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://blog.csdn.net/winterking3/article/details/114822929"},"@ConditionalOnProperty")),(0,n.kt)("h2",{id:"\u6df1\u5165\u7406\u89e3apache-dubbo\u4e0e\u5b9e\u6218"},"\u6df1\u5165\u7406\u89e3Apache Dubbo\u4e0e\u5b9e\u6218"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u7b2c\u4e09\u7ae0\nFailbackRegistry\u53c8\u7ee7\u627f\u4e86 AbstractRegistry,\u91cd\u5199\u4e86\u7236\u7c7b\u7684\u6ce8\u518c\u3001\u8ba2\u9605\u3001\u67e5\u8be2\u548c\u901a\u77e5\u7b49 \u65b9\u6cd5\uff0c\u5e76\u4e14\u6dfb\u52a0\u4e86\u91cd\u8bd5\u673a\u5236\u3002\u6b64\u5916\uff0c\u8fd8\u6dfb\u52a0\u4e86\u56db\u4e2a\u672a\u5b9e\u73b0\u7684\u62bd\u8c61\u6a21\u677f\u65b9\u6cd5\u3002")),(0,n.kt)("p",null,'\u867d\u7136\u6bcf\u79cd\u6ce8\u518c\u4e2d\u5fc3\u90fd\u6709\u81ea\u5df1\u5177\u4f53\u7684\u5de5\u5382\u7c7b\uff0c\u4f46\u662f\u5728\u4ec0\u4e48\u5730\u65b9\u5224\u65ad\uff0c\u5e94\u8be5\u8c03\u7528\u54ea\u4e2a\u5de5\u5382\u7c7b\u5b9e \u73b0\u5462?\u4ee3\u7801\u4e2d\u5e76\u6ca1\u6709\u770b\u5230\u663e\u5f0f\u7684\u5224\u65ad\u3002\u7b54\u6848\u5c31\u5728RegistryFactory\u63a5\u53e3\u4e2d\uff0c\u8be5\u63a5\u53e3\u91cc\u6709\u4e00\u4e2a Registry getRegistry(URL url)\u65b9\u6cd5\uff0c\u8be5\u65b9\u6cd5\u4e0a\u6709@Adaptive({"protocol"))\u6ce8\u89e3\u3002'),(0,n.kt)("p",null,"Dubbo\u826f\u597d\u7684\u6269\u5c55\u6027\u4e0e\u4e24\u4e2a\u65b9\u9762\u662f\u5bc6\u4e0d\u53ef\u5206\u7684\uff0c\u4e00\u662f\u6574\u4e2a\u6846\u67b6\u4e2d\u9488\u5bf9\u4e0d\u540c\u7684\u573a\u666f\uff0c\u6070\u5230\u597d \u5904\u5730\u4f7f\u7528\u4e86\u5404\u79cd\u8bbe\u8ba1\u6a21\u5f0f\uff0c\u4e8c\u5c31\u662f\u672c\u7ae0\u8981\u4ecb\u7ecd\u7684\u52a0\u8f7d\u673a\u5236\u3002"),(0,n.kt)("h2",{id:"mermaid\u793a\u4f8b"},"mermaid\u793a\u4f8b"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7038144693867118629"},"this code from"))),(0,n.kt)("h1",{id:"mermaid-in-tabs"},"Mermaid in tabs"),(0,n.kt)("mermaid",{value:"flowchart TD\n"}),(0,n.kt)(l.Z,{mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"tab-a",mdxType:"TabItem"},(0,n.kt)("mermaid",{value:"graph LR\n  a ---\x3e c(10)\n  b ---\x3e c(10)"})),(0,n.kt)(o.Z,{value:"tab-b",mdxType:"TabItem"},(0,n.kt)("mermaid",{value:"graph LR\n  d ---\x3e z(42)\n  e ---\x3e z(42)"}))),(0,n.kt)("admonition",{title:"\u534f\u8bae",type:"tip"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u672c\u4f5c\u54c1\u4ee3\u7801\u90e8\u5206\u91c7\u7528 ",(0,n.kt)("a",{parentName:"p",href:"https://www.apache.org/licenses/LICENSE-2.0"},"Apache 2.0\u534f\u8bae"),"\u8fdb\u884c\u8bb8\u53ef\u3002\u9075\u5faa\u8bb8\u53ef\u7684\u524d\u63d0\u4e0b\uff0c\u4f60\u53ef\u4ee5\u81ea\u7531\u5730\u5bf9\u4ee3\u7801\u8fdb\u884c\u4fee\u6539\uff0c\u518d\u53d1\u5e03\uff0c\u53ef\u4ee5\u5c06\u4ee3\u7801\u7528\u4f5c\u5546\u4e1a\u7528\u9014\u3002\u4f46\u8981\u6c42\u4f60\uff1a"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u7f72\u540d"),"\uff1a\u5728\u539f\u6709\u4ee3\u7801\u548c\u884d\u751f\u4ee3\u7801\u4e2d\uff0c\u4fdd\u7559\u539f\u4f5c\u8005\u7f72\u540d\u53ca\u4ee3\u7801\u6765\u6e90\u4fe1\u606f\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u4fdd\u7559\u8bb8\u53ef\u8bc1"),"\uff1a\u5728\u539f\u6709\u4ee3\u7801\u548c\u884d\u751f\u4ee3\u7801\u4e2d\uff0c\u4fdd\u7559Apache 2.0\u534f\u8bae\u6587\u4ef6\u3002"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u672c\u4f5c\u54c1\u6587\u6863\u90e8\u5206\u91c7\u7528",(0,n.kt)("a",{parentName:"p",href:"http://creativecommons.org/licenses/by/4.0/"},"\u77e5\u8bc6\u5171\u4eab\u7f72\u540d 4.0 \u56fd\u9645\u8bb8\u53ef\u534f\u8bae"),"\u8fdb\u884c\u8bb8\u53ef\u3002 \u9075\u5faa\u8bb8\u53ef\u7684\u524d\u63d0\u4e0b\uff0c\u4f60\u53ef\u4ee5\u81ea\u7531\u5730\u5171\u4eab\uff0c\u5305\u62ec\u5728\u4efb\u4f55\u5a92\u4ecb\u4e0a\u4ee5\u4efb\u4f55\u5f62\u5f0f\u590d\u5236\u3001\u53d1\u884c\u672c\u4f5c\u54c1\uff0c\u4ea6\u53ef\u4ee5\u81ea\u7531\u5730\u6f14\u7ece\u3001\u4fee\u6539\u3001\u8f6c\u6362\u6216\u4ee5\u672c\u4f5c\u54c1\u4e3a\u57fa\u7840\u8fdb\u884c\u4e8c\u6b21\u521b\u4f5c\u3002\u4f46\u8981\u6c42\u4f60\uff1a"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u7f72\u540d"),"\uff1a\u5e94\u5728\u4f7f\u7528\u672c\u6587\u6863\u7684\u5168\u90e8\u6216\u90e8\u5206\u5185\u5bb9\u65f6\u5019\uff0c\u6ce8\u660e\u539f\u4f5c\u8005\u53ca\u6765\u6e90\u4fe1\u606f\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u975e\u5546\u4e1a\u6027\u4f7f\u7528"),"\uff1a\u4e0d\u5f97\u7528\u4e8e\u5546\u4e1a\u51fa\u7248\u6216\u5176\u4ed6\u4efb\u4f55\u5e26\u6709\u5546\u4e1a\u6027\u8d28\u7684\u884c\u4e3a\u3002\u5982\u9700\u5546\u4e1a\u4f7f\u7528\uff0c\u8bf7\u8054\u7cfb\u4f5c\u8005\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u76f8\u540c\u65b9\u5f0f\u5171\u4eab\u7684\u6761\u4ef6"),"\uff1a\u5728\u672c\u6587\u6863\u57fa\u7840\u4e0a\u6f14\u7ece\u3001\u4fee\u6539\u7684\u4f5c\u54c1\uff0c\u5e94\u5f53\u7ee7\u7eed\u4ee5\u77e5\u8bc6\u5171\u4eab\u7f72\u540d 4.0\u56fd\u9645\u8bb8\u53ef\u534f\u8bae\u8fdb\u884c\u8bb8\u53ef\u3002"))))))}b.isMDXComponent=!0}}]);