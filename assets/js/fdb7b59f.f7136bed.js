"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4915],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>b});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(r),k=a,b=c["".concat(p,".").concat(k)]||c[k]||m[k]||o;return r?n.createElement(b,i(i({ref:t},u),{},{components:r})):n.createElement(b,i({ref:t},u))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=k;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},1151:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const o={},i=void 0,l={unversionedId:"Container-Tech/kubernetes/kubernetes-one",id:"Container-Tech/kubernetes/kubernetes-one",title:"kubernetes-one",description:"Kubernetes API",source:"@site/docs/Container-Tech/kubernetes/kubernetes-one.mdx",sourceDirName:"Container-Tech/kubernetes",slug:"/Container-Tech/kubernetes/kubernetes-one",permalink:"/summary/Container-Tech/kubernetes/kubernetes-one",draft:!1,editUrl:"https://github.com/Halcyon666/summary/blob/main/docs/Container-Tech/kubernetes/kubernetes-one.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"k8s\u5e38\u7528\u547d\u4ee4",permalink:"/summary/Container-Tech/kubernetes/k8s\u5e38\u7528\u547d\u4ee4"},next:{title:"Everything \u641c\u7d22\u4f7f\u7528",permalink:"/summary/Develop-Tools/Everything\u4f7f\u7528"}},p={},s=[{value:"Kubernetes API",id:"kubernetes-api",level:2},{value:"\u534f\u8bae",id:"\u534f\u8bae",level:2}],u={toc:s},c="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"kubernetes-api"},"Kubernetes API"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/zh/docs/concepts/overview/kubernetes-api/"},"HERE")),(0,a.kt)("p",null,"Kubernetes ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/zh/docs/reference/glossary/?all=true#term-control-plane"},"\u63a7\u5236\u9762")," \u7684\u6838\u5fc3\u662f ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/zh/docs/reference/command-line-tools-reference/kube-apiserver/"},"API \u670d\u52a1\u5668"),"\u3002 API \u670d\u52a1\u5668\u8d1f\u8d23\u63d0\u4f9b HTTP API\uff0c\u4ee5\u4f9b\u7528\u6237\u3001\u96c6\u7fa4\u4e2d\u7684\u4e0d\u540c\u90e8\u5206\u548c\u96c6\u7fa4\u5916\u90e8\u7ec4\u4ef6\u76f8\u4e92\u901a\u4fe1\u3002"),(0,a.kt)("p",null,"Kubernetes API \u4f7f\u4f60\u53ef\u4ee5\u67e5\u8be2\u548c\u64cd\u7eb5 Kubernetes API \u4e2d\u5bf9\u8c61\uff08\u4f8b\u5982\uff1aPod\u3001Namespace\u3001ConfigMap \u548c Event\uff09\u7684\u72b6\u6001\u3002"),(0,a.kt)("p",null,"\u5927\u90e8\u5206\u64cd\u4f5c\u90fd\u53ef\u4ee5\u901a\u8fc7 ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/zh/docs/reference/kubectl/overview/"},"kubectl")," \u547d\u4ee4\u884c\u63a5\u53e3\u6216 \u7c7b\u4f3c ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/zh/docs/reference/setup-tools/kubeadm/"},"kubeadm")," \u8fd9\u7c7b\u547d\u4ee4\u884c\u5de5\u5177\u6765\u6267\u884c\uff0c \u8fd9\u4e9b\u5de5\u5177\u5728\u80cc\u540e\u4e5f\u662f\u8c03\u7528 API\u3002\u4e0d\u8fc7\uff0c\u4f60\u4e5f\u53ef\u4ee5\u4f7f\u7528 REST \u8c03\u7528\u6765\u8bbf\u95ee\u8fd9\u4e9b API\u3002"),(0,a.kt)("h2",{id:"\u534f\u8bae"},"\u534f\u8bae"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u672c\u4f5c\u54c1\u4ee3\u7801\u90e8\u5206\u91c7\u7528 ",(0,a.kt)("a",{parentName:"p",href:"https://www.apache.org/licenses/LICENSE-2.0"},"Apache 2.0\u534f\u8bae"),"\u8fdb\u884c\u8bb8\u53ef\u3002\u9075\u5faa\u8bb8\u53ef\u7684\u524d\u63d0\u4e0b\uff0c\u4f60\u53ef\u4ee5\u81ea\u7531\u5730\u5bf9\u4ee3\u7801\u8fdb\u884c\u4fee\u6539\uff0c\u518d\u53d1\u5e03\uff0c\u53ef\u4ee5\u5c06\u4ee3\u7801\u7528\u4f5c\u5546\u4e1a\u7528\u9014\u3002\u4f46\u8981\u6c42\u4f60\uff1a"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u7f72\u540d"),"\uff1a\u5728\u539f\u6709\u4ee3\u7801\u548c\u884d\u751f\u4ee3\u7801\u4e2d\uff0c\u4fdd\u7559\u539f\u4f5c\u8005\u7f72\u540d\u53ca\u4ee3\u7801\u6765\u6e90\u4fe1\u606f\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u4fdd\u7559\u8bb8\u53ef\u8bc1"),"\uff1a\u5728\u539f\u6709\u4ee3\u7801\u548c\u884d\u751f\u4ee3\u7801\u4e2d\uff0c\u4fdd\u7559Apache 2.0\u534f\u8bae\u6587\u4ef6\u3002"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u672c\u4f5c\u54c1\u6587\u6863\u90e8\u5206\u91c7\u7528",(0,a.kt)("a",{parentName:"p",href:"http://creativecommons.org/licenses/by/4.0/"},"\u77e5\u8bc6\u5171\u4eab\u7f72\u540d 4.0 \u56fd\u9645\u8bb8\u53ef\u534f\u8bae"),"\u8fdb\u884c\u8bb8\u53ef\u3002 \u9075\u5faa\u8bb8\u53ef\u7684\u524d\u63d0\u4e0b\uff0c\u4f60\u53ef\u4ee5\u81ea\u7531\u5730\u5171\u4eab\uff0c\u5305\u62ec\u5728\u4efb\u4f55\u5a92\u4ecb\u4e0a\u4ee5\u4efb\u4f55\u5f62\u5f0f\u590d\u5236\u3001\u53d1\u884c\u672c\u4f5c\u54c1\uff0c\u4ea6\u53ef\u4ee5\u81ea\u7531\u5730\u6f14\u7ece\u3001\u4fee\u6539\u3001\u8f6c\u6362\u6216\u4ee5\u672c\u4f5c\u54c1\u4e3a\u57fa\u7840\u8fdb\u884c\u4e8c\u6b21\u521b\u4f5c\u3002\u4f46\u8981\u6c42\u4f60\uff1a"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u7f72\u540d"),"\uff1a\u5e94\u5728\u4f7f\u7528\u672c\u6587\u6863\u7684\u5168\u90e8\u6216\u90e8\u5206\u5185\u5bb9\u65f6\u5019\uff0c\u6ce8\u660e\u539f\u4f5c\u8005\u53ca\u6765\u6e90\u4fe1\u606f\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u975e\u5546\u4e1a\u6027\u4f7f\u7528"),"\uff1a\u4e0d\u5f97\u7528\u4e8e\u5546\u4e1a\u51fa\u7248\u6216\u5176\u4ed6\u4efb\u4f55\u5e26\u6709\u5546\u4e1a\u6027\u8d28\u7684\u884c\u4e3a\u3002\u5982\u9700\u5546\u4e1a\u4f7f\u7528\uff0c\u8bf7\u8054\u7cfb\u4f5c\u8005\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u76f8\u540c\u65b9\u5f0f\u5171\u4eab\u7684\u6761\u4ef6"),"\uff1a\u5728\u672c\u6587\u6863\u57fa\u7840\u4e0a\u6f14\u7ece\u3001\u4fee\u6539\u7684\u4f5c\u54c1\uff0c\u5e94\u5f53\u7ee7\u7eed\u4ee5\u77e5\u8bc6\u5171\u4eab\u7f72\u540d 4.0\u56fd\u9645\u8bb8\u53ef\u534f\u8bae\u8fdb\u884c\u8bb8\u53ef\u3002")))))}m.isMDXComponent=!0}}]);