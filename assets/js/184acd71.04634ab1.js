"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5870],{3905:(e,t,l)=>{l.d(t,{Zo:()=>u,kt:()=>h});var n=l(7294);function a(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function r(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function p(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?r(Object(l),!0).forEach((function(t){a(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):r(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function i(e,t){if(null==e)return{};var l,n,a=function(e,t){if(null==e)return{};var l,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)l=r[n],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)l=r[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var o=n.createContext({}),s=function(e){var t=n.useContext(o),l=t;return e&&(l="function"==typeof e?e(t):p(p({},t),e)),l},u=function(e){var t=s(e.components);return n.createElement(o.Provider,{value:t},e.children)},m="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var l=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=s(l),c=a,h=m["".concat(o,".").concat(c)]||m[c]||k[c]||r;return l?n.createElement(h,p(p({ref:t},u),{},{components:l})):n.createElement(h,p({ref:t},u))}));function h(e,t){var l=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=l.length,p=new Array(r);p[0]=c;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[m]="string"==typeof e?e:a,p[1]=i;for(var s=2;s<r;s++)p[s]=l[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,l)}c.displayName="MDXCreateElement"},7711:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>k,frontMatter:()=>r,metadata:()=>i,toc:()=>s});var n=l(7462),a=(l(7294),l(3905));const r={title:"JMM\u76f8\u5173\u5185\u5bb9",sidebar_position:3,sidebar_label:"JMM\u76f8\u5173\u5185\u5bb9"},p=void 0,i={unversionedId:"Tech/Java/ConcurrentAndJVM/JMM\u76f8\u5173\u5185\u5bb9",id:"Tech/Java/ConcurrentAndJVM/JMM\u76f8\u5173\u5185\u5bb9",title:"JMM\u76f8\u5173\u5185\u5bb9",description:"JMM\u76f8\u5173\u5185\u5bb9",source:"@site/docs/01-Tech/01-Java/05-ConcurrentAndJVM/JMM\u76f8\u5173\u5185\u5bb9.md",sourceDirName:"01-Tech/01-Java/05-ConcurrentAndJVM",slug:"/Tech/Java/ConcurrentAndJVM/JMM\u76f8\u5173\u5185\u5bb9",permalink:"/summary/Tech/Java/ConcurrentAndJVM/JMM\u76f8\u5173\u5185\u5bb9",draft:!1,editUrl:"https://github.com/Halcyon666/summary/blob/main/docs/01-Tech/01-Java/05-ConcurrentAndJVM/JMM\u76f8\u5173\u5185\u5bb9.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"JMM\u76f8\u5173\u5185\u5bb9",sidebar_position:3,sidebar_label:"JMM\u76f8\u5173\u5185\u5bb9"},sidebar:"tutorialSidebar",previous:{title:"final\u57df\u5185\u5b58\u77e5\u8bc6",permalink:"/summary/Tech/Java/ConcurrentAndJVM/final\u57df\u5185\u5b58\u77e5\u8bc6"},next:{title:"\u5904\u7406\u5668\u5185\u5b58\u6a21\u578b",permalink:"/summary/Tech/Java/ConcurrentAndJVM/\u5904\u7406\u5668\u5185\u5b58\u6a21\u578b"}},o={},s=[{value:"JMM\u76f8\u5173\u5185\u5bb9",id:"jmm\u76f8\u5173\u5185\u5bb9",level:2},{value:"\u5728x86\u67b6\u6784\u4e0b\u4ec5\u6709StoreLoad\u5c4f\u969c",id:"\u5728x86\u67b6\u6784\u4e0b\u4ec5\u6709storeload\u5c4f\u969c",level:2},{value:"JMM\u5185\u5b58\u6a21\u578b\u8bbe\u8ba1\u539f\u5219",id:"jmm\u5185\u5b58\u6a21\u578b\u8bbe\u8ba1\u539f\u5219",level:2},{value:"happens-before\u5173\u7cfb\u7684\u5b9a\u4e49",id:"happens-before\u5173\u7cfb\u7684\u5b9a\u4e49",level:2},{value:"happens-before \u548c as-if-serial \u5f02\u540c\u70b9",id:"happens-before-\u548c-as-if-serial-\u5f02\u540c\u70b9",level:2},{value:"happens-before\u89c4\u5219",id:"happens-before\u89c4\u5219",level:2},{value:"\u591a\u7ebf\u7a0b\u5e76\u53d1\u521d\u59cb\u5316\u5bf9\u8c61\u53ef\u80fd\u53d1\u751f\u6307\u4ee4\u91cd\u6392",id:"\u591a\u7ebf\u7a0b\u5e76\u53d1\u521d\u59cb\u5316\u5bf9\u8c61\u53ef\u80fd\u53d1\u751f\u6307\u4ee4\u91cd\u6392",level:2},{value:"\u5728\u9996\u6b21\u53d1\u751f\u4e0b\u5217\u4efb\u610f\u4e00\u79cd\u60c5\u51b5\u65f6\uff0c\u4e00\u4e2a\u7c7b\u6216\u63a5\u53e3\u7c7b\u578bT\u5c06\u88ab\u7acb\u5373\u521d\u59cb\u5316",id:"\u5728\u9996\u6b21\u53d1\u751f\u4e0b\u5217\u4efb\u610f\u4e00\u79cd\u60c5\u51b5\u65f6\u4e00\u4e2a\u7c7b\u6216\u63a5\u53e3\u7c7b\u578bt\u5c06\u88ab\u7acb\u5373\u521d\u59cb\u5316",level:2},{value:"\u7c7b\u521d\u59cb\u5316\u8fc7\u7a0b",id:"\u7c7b\u521d\u59cb\u5316\u8fc7\u7a0b",level:2}],u={toc:s},m="wrapper";function k(e){let{components:t,...l}=e;return(0,a.kt)(m,(0,n.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"jmm\u76f8\u5173\u5185\u5bb9"},"JMM\u76f8\u5173\u5185\u5bb9"),(0,a.kt)("h2",{id:"\u5728x86\u67b6\u6784\u4e0b\u4ec5\u6709storeload\u5c4f\u969c"},"\u5728x86\u67b6\u6784\u4e0b\u4ec5\u6709StoreLoad\u5c4f\u969c"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://zhuanlan.zhihu.com/p/81555436"},"\u8be6\u60c5\u8bf7\u89c1")),(0,a.kt)("h2",{id:"jmm\u5185\u5b58\u6a21\u578b\u8bbe\u8ba1\u539f\u5219"},"JMM\u5185\u5b58\u6a21\u578b\u8bbe\u8ba1\u539f\u5219"),(0,a.kt)("p",null,"\u5bf9\u4e8e\u4f1a\u6539\u53d8\u7a0b\u5e8f\u6267\u884c\u7ed3\u679c\u7684\u91cd\u6392\u5e8f\uff0cJMM\u8981\u6c42\u7f16\u8bd1\u5668\u548c\u5904\u7406\u5668\u5fc5\u987b\u7981\u6b62\u8fd9\u79cd\u91cd\u6392\u5e8f\u3002"),(0,a.kt)("p",null,"\u5bf9\u4e8e\u4e0d\u4f1a\u6539\u53d8\u7a0b\u5e8f\u6267\u884c\u7ed3\u679c\u7684\u91cd\u6392\u5e8f\uff0cJMM\u5bf9\u7f16\u8bd1\u5668\u548c\u5904\u7406\u5668\u4e0d\u505a\u8981\u6c42\uff08JMM\u5141\u8bb8\u8fd9\u79cd\u91cd\u6392\u5e8f\uff09\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://s2.loli.net/2023/07/15/8hkiCWZ7jDaoARU.png",alt:null})),(0,a.kt)("h2",{id:"happens-before\u5173\u7cfb\u7684\u5b9a\u4e49"},"happens-before\u5173\u7cfb\u7684\u5b9a\u4e49"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5982\u679c\u4e00\u4e2a\u64cd\u4f5chappens-before\u53e6\u4e00\u4e2a\u64cd\u4f5c\uff0c\u90a3\u4e48\u7b2c\u4e00\u4e2a\u64cd\u4f5c\u7684\u6267\u884c\u7ed3\u679c\u5c06\u5bf9\u7b2c\u4e8c\u4e2a\u64cd\u4f5c\u53ef\u89c1\uff0c\u800c\u4e14\u7b2c\u4e00\u4e2a\u64cd\u4f5c\u7684\u6267\u884c\u987a\u5e8f\u6392\u5728\u7b2c\u4e8c\u4e2a\u64cd\u4f5c\u4e4b\u524d\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u4e24\u4e2a\u64cd\u4f5c\u4e4b\u95f4\u5b58\u5728happens-before\u5173\u7cfb\uff0c\u5e76\u4e0d\u610f\u5473\u7740Java\u5e73\u53f0\u7684\u5177\u4f53\u5b9e\u73b0\u5fc5\u987b\u8981\u6309\u7167happens-before\u5173\u7cfb\u6307\u5b9a\u7684\u987a\u5e8f\u6765\u6267\u884c\u3002\u5982\u679c\u91cd\u6392\u5e8f\u4e4b\u540e\u7684\u6267\u884c\u7ed3\u679c\uff0c\u4e0e\u6309happens-before\n\u5173\u7cfb\u6765\u6267\u884c\u7684\u7ed3\u679c\u4e00\u81f4\uff0c\u90a3\u4e48\u8fd9\u79cd\u91cd\u6392\u5e8f\u5e76\u4e0d\u975e\u6cd5\uff08\u4e5f\u5c31\u662f\u8bf4\uff0cJMM\u5141\u8bb8\u8fd9\u79cd\u91cd\u6392\u5e8f\uff09\u3002"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4e0a\u9762\u76841.\u662fJMM\u5bf9\u7a0b\u5e8f\u5458\u7684\u627f\u8bfa\u3002\u4ece\u7a0b\u5e8f\u5458\u7684\u89d2\u5ea6\u6765\u8bf4\uff0c\u53ef\u4ee5\u8fd9\u6837\u7406\u89e3happens-before\u5173\u7cfb\uff1a\u5982\u679cA happens-before B\uff0c\u90a3\u4e48Java\u5185\u5b58\u6a21\u578b\u5c06\u5411\u7a0b\u5e8f\u5458\u4fdd\u8bc1\u2014\u2014A\u64cd\u4f5c\u7684\u7ed3\u679c\u5c06\u5bf9B\u53ef\u89c1\uff0c\u4e14A\u7684\u6267\u884c\u987a\u5e8f\u6392\u5728B\n\u4e4b\u524d\u3002\u6ce8\u610f\uff0c\u8fd9\u53ea\u662fJava\u5185\u5b58\u6a21\u578b\u5411\u7a0b\u5e8f\u5458\u505a\u51fa\u7684\u4fdd\u8bc1\uff01"),(0,a.kt)("li",{parentName:"ul"},"\u4e0a\u9762\u76842.\u662fJMM\u5bf9\u7f16\u8bd1\u5668\u548c\u5904\u7406\u5668\u91cd\u6392\u5e8f\u7684\u7ea6\u675f\u539f\u5219\u3002\u6b63\u5982\u524d\u9762\u6240\u8a00\uff0cJMM\u5176\u5b9e\u662f\u5728\u9075\u5faa\u4e00\u4e2a\u57fa\u672c\u539f\u5219\uff1a\u53ea\u8981\u4e0d\u6539\u53d8\u7a0b\u5e8f\u7684\u6267\u884c\u7ed3\u679c\uff08\u6307\u7684\u662f\u5355\u7ebf\u7a0b\u7a0b\u5e8f\u548c\u6b63\u786e\u540c\u6b65\u7684\u591a\u7ebf\u7a0b\u7a0b\u5e8f\uff09\uff0c\u7f16\u8bd1\u5668\u548c\u5904\u7406\u5668\u600e\u4e48\u4f18\u5316\u90fd\u884c\u3002JMM\n\u8fd9\u4e48\u505a\u7684\u539f\u56e0\u662f\uff1a\u7a0b\u5e8f\u5458\u5bf9\u4e8e\u8fd9\u4e24\u4e2a\u64cd\u4f5c\u662f\u5426\u771f\u7684\u88ab\u91cd\u6392\u5e8f\u5e76\u4e0d\u5173\u5fc3\uff0c\u7a0b\u5e8f\u5458\u5173\u5fc3\u7684\u662f\u7a0b\u5e8f\u6267\u884c\u65f6\u7684\u8bed\u4e49\u4e0d\u80fd\u88ab\u6539\u53d8\uff08\u5373\u6267\u884c\u7ed3\u679c\u4e0d\u80fd\u88ab\u6539\u53d8\uff09\u3002\u56e0\u6b64\uff0chappens-before\u5173\u7cfb\u672c\u8d28\u4e0a\u548cas-if-serial\u8bed\u4e49\u662f\u4e00\u56de\u4e8b\u3002")),(0,a.kt)("h2",{id:"happens-before-\u548c-as-if-serial-\u5f02\u540c\u70b9"},"happens-before \u548c as-if-serial \u5f02\u540c\u70b9"),(0,a.kt)("p",null,"\u76f8\u540c\u70b9\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"as-if-serial\u8bed\u4e49\u548chappens-before\u8fd9\u4e48\u505a\u7684\u76ee\u7684\uff0c\u90fd\u662f\u4e3a\u4e86\u5728\u4e0d\u6539\u53d8\u7a0b\u5e8f\u6267\u884c\u7ed3\u679c\u7684\u524d\u63d0\u4e0b\uff0c\u5c3d\u53ef\u80fd\u5730\u63d0\u9ad8\u7a0b\u5e8f\u6267\u884c\u7684\u5e76\u884c\u5ea6\u3002")),(0,a.kt)("p",null,"\u4e0d\u540c\u70b9\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"as-if-serial\u8bed\u4e49\u4fdd\u8bc1\u5355\u7ebf\u7a0b\u5185\u7a0b\u5e8f\u7684\u6267\u884c\u7ed3\u679c\u4e0d\u88ab\u6539\u53d8\uff0chappens-before\u5173\u7cfb\u4fdd\u8bc1\u6b63\u786e\u540c\u6b65\u7684\u591a\u7ebf\u7a0b\u7a0b\u5e8f\u7684\u6267\u884c\u7ed3\u679c\u4e0d\u88ab\u6539\u53d8\u3002"),(0,a.kt)("li",{parentName:"ul"},"as-if-serial\u8bed\u4e49\u7ed9\u7f16\u5199\u5355\u7ebf\u7a0b\u7a0b\u5e8f\u7684\u7a0b\u5e8f\u5458\u521b\u9020\u4e86\u4e00\u4e2a\u5e7b\u5883\uff1a\u5355\u7ebf\u7a0b\u7a0b\u5e8f\u662f\u6309\u7a0b\u5e8f\u7684\u987a\u5e8f\u6765\u6267\u884c\u7684\u3002happens-before\u5173\u7cfb\u7ed9\u7f16\u5199\u6b63\u786e\u540c\u6b65\u7684\u591a\u7ebf\u7a0b\u7a0b\u5e8f\u7684\u7a0b\u5e8f\u5458\u521b\u9020\u4e86\u4e00\u4e2a\u5e7b\u5883\uff1a\u6b63\u786e\u540c\u6b65\u7684\u591a\u7ebf\u7a0b\u7a0b\u5e8f\u662f\u6309happens\n-before\u6307\u5b9a\u7684\u987a\u5e8f\u6765\u6267\u884c\u7684\u3002")),(0,a.kt)("h2",{id:"happens-before\u89c4\u5219"},"happens-before\u89c4\u5219"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u7a0b\u5e8f\u987a\u5e8f\u89c4\u5219\uff1a\u4e00\u4e2a\u7ebf\u7a0b\u4e2d\u7684\u6bcf\u4e2a\u64cd\u4f5c\uff0chappens-before\u4e8e\u8be5\u7ebf\u7a0b\u4e2d\u7684\u4efb\u610f\u540e\u7eed\u64cd\u4f5c\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u76d1\u89c6\u5668\u9501\u89c4\u5219\uff1a\u5bf9\u4e00\u4e2a\u9501\u7684\u89e3\u9501\uff0chappens-before\u4e8e\u968f\u540e\u5bf9\u8fd9\u4e2a\u9501\u7684\u52a0\u9501\u3002"),(0,a.kt)("li",{parentName:"ol"},"volatile\u53d8\u91cf\u89c4\u5219\uff1a\u5bf9\u4e00\u4e2avolatile\u57df\u7684\u5199\uff0chappens-before\u4e8e\u4efb\u610f\u540e\u7eed\u5bf9\u8fd9\u4e2avolatile\u57df\u7684\u8bfb\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u4f20\u9012\u6027\uff1a\u5982\u679cA happens-before B\uff0c\u4e14B happens-before C\uff0c\u90a3\u4e48A happens-beforeC\u3002"),(0,a.kt)("li",{parentName:"ol"},"start()\u89c4\u5219\uff1a\u5982\u679c\u7ebf\u7a0bA\u6267\u884c\u64cd\u4f5cThreadB.start()\uff08\u542f\u52a8\u7ebf\u7a0bB\uff09\uff0c\u90a3\u4e48A\u7ebf\u7a0b\u7684ThreadB.start()\u64cd\u4f5chappens-before\u4e8e\u7ebf\u7a0bB\u4e2d\u7684\u4efb\u610f\u64cd\u4f5c\u3002"),(0,a.kt)("li",{parentName:"ol"},"join()\u89c4\u5219\uff1a\u5982\u679c\u7ebf\u7a0bA\u6267\u884c\u64cd\u4f5cThreadB. join()\u5e76\u6210\u529f\u8fd4\u56de\uff0c\u90a3\u4e48\u7ebf\u7a0bB\u4e2d\u7684\u4efb\u610f\u64cd\u4f5chappens-before\u4e8e\u7ebf\u7a0bA\u4eceThreadB. join()\u64cd\u4f5c\u6210\u529f\u8fd4\u56de\u3002")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://s2.loli.net/2023/07/15/rsJXG6e4DhLjVmW.png",alt:null})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"1 happens-before 2\u548c3 happens-before 4\u7531\u7a0b\u5e8f\u987a\u5e8f\u89c4\u5219\u4ea7\u751f\u3002\u7531\u4e8e\u7f16\u8bd1\u5668\u548c\u5904\u7406\u5668\u90fd\u8981\u9075\u5b88as-if-serial\u8bed\u4e49\uff0c\u4e5f\u5c31\u662f\u8bf4\uff0cas-if-serial\n\u8bed\u4e49\u4fdd\u8bc1\u4e86\u7a0b\u5e8f\u987a\u5e8f\u89c4\u5219\u3002\u56e0\u6b64\uff0c\u53ef\u4ee5\u628a\u7a0b\u5e8f\u987a\u5e8f\u89c4\u5219\u770b\u6210\u662f\u5bf9as-if-serial\u8bed\u4e49\u7684\u201c\u5c01\u88c5\u201d\u3002"),(0,a.kt)("li",{parentName:"ul"},"2 happens-before 3\u662f\u7531volatile\u89c4\u5219\u4ea7\u751f\u3002\u524d\u9762\u63d0\u5230\u8fc7\uff0c\u5bf9\u4e00\u4e2avolatile\u53d8\u91cf\u7684\u8bfb\uff0c\u603b\u662f\u80fd\u770b\u5230\uff08\u4efb\u610f\u7ebf\u7a0b\uff09\u4e4b\u524d\u5bf9\u8fd9\u4e2avolatile\u53d8\u91cf\u6700\u540e\u7684\u5199\u5165\u3002\u56e0\u6b64\uff0cvolatile\n\u7684\u8fd9\u4e2a\u7279\u6027\u53ef\u4ee5\u4fdd\u8bc1\u5b9e\u73b0volatile\u89c4\u5219\u3002"),(0,a.kt)("li",{parentName:"ul"},"1 happens-before 4\u662f\u7531\u4f20\u9012\u6027\u89c4\u5219\u4ea7\u751f\u7684\u3002\u8fd9\u91cc\u7684\u4f20\u9012\u6027\u662f\u7531volatile\u7684\u5185\u5b58\u5c4f\u969c\u63d2\u5165\u7b56\u7565\u548cvolatile\u7684\u7f16\u8bd1\u5668\u91cd\u6392\u5e8f\u89c4\u5219\u5171\u540c\u6765\u4fdd\u8bc1\u7684\u3002")),(0,a.kt)("h2",{id:"\u591a\u7ebf\u7a0b\u5e76\u53d1\u521d\u59cb\u5316\u5bf9\u8c61\u53ef\u80fd\u53d1\u751f\u6307\u4ee4\u91cd\u6392"},"\u591a\u7ebf\u7a0b\u5e76\u53d1\u521d\u59cb\u5316\u5bf9\u8c61\u53ef\u80fd\u53d1\u751f\u6307\u4ee4\u91cd\u6392"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://s2.loli.net/2023/07/15/mHqVA9pQaDjPr8Y.png",alt:null})),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://s2.loli.net/2023/07/15/639NJO2xdsTVtjl.png",alt:null})),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://s2.loli.net/2023/07/15/u1TI87E4Xj3ROeq.png",alt:null})),(0,a.kt)("p",null,"\u8fd9\u91ccA2\u548cA3\u867d\u7136\u91cd\u6392\u5e8f\u4e86\uff0c\u4f46Java\u5185\u5b58\u6a21\u578b\u7684intra-thread semantics\u5c06\u786e\u4fddA2\u4e00\u5b9a\u4f1a\u6392\u5728A4\u524d\u9762\u6267\u884c\u3002\u56e0\u6b64\uff0c\u7ebf\u7a0bA\u7684intra-thread semantics\u6ca1\u6709\u6539\u53d8\uff0c\u4f46A2\u548cA3\u7684\u91cd\u6392\u5e8f\uff0c\u5c06\u5bfc\u81f4\u7ebf\u7a0bB\u5728B1\u5904\u5224\u65ad\u51fainstance\u4e0d\u4e3a\u7a7a\uff0c\u7ebf\u7a0bB\u63a5\u4e0b\u6765\u5c06\u8bbf\u95eeinstance\u5f15\u7528\u7684\u5bf9\u8c61\u3002\u6b64\u65f6\uff0c\u7ebf\u7a0bB\u5c06\u4f1a\u8bbf\u95ee\u5230\u4e00\u4e2a\u8fd8\u672a\u521d\u59cb\u5316\u7684\u5bf9\u8c61\u3002"),(0,a.kt)("p",null,"\u5728\u77e5\u6653\u4e86\u95ee\u9898\u53d1\u751f\u7684\u6839\u6e90\u4e4b\u540e\uff0c\u6211\u4eec\u53ef\u4ee5\u60f3\u51fa\u4e24\u4e2a\u529e\u6cd5\u6765\u5b9e\u73b0\u7ebf\u7a0b\u5b89\u5168\u7684\u5ef6\u8fdf\u521d\u59cb\u5316\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u5141\u8bb82\u548c3\u91cd\u6392\u5e8f\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5141\u8bb82\u548c3\u91cd\u6392\u5e8f\uff0c\u4f46\u4e0d\u5141\u8bb8\u5176\u4ed6\u7ebf\u7a0b\u201c\u770b\u5230\u201d\u8fd9\u4e2a\u91cd\u6392\u5e8f\u3002")),(0,a.kt)("p",null,"\u57fa\u4e8evolatile\u7684\u89e3\u51b3\u65b9\u6848"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://s2.loli.net/2023/07/15/dM7BZy5VlzsCkhf.png",alt:null})),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://s2.loli.net/2023/07/15/z3orwgqmWOtPGvh.png",alt:null})),(0,a.kt)("p",null,"\u8fd9\u4e2a\u65b9\u6848\u672c\u8d28\u4e0a\u662f\u901a\u8fc7\u7981\u6b62\u56fe3-39\u4e2d\u76842\u548c3\u4e4b\u95f4\u7684\u91cd\u6392\u5e8f\uff0c\u6765\u4fdd\u8bc1\u7ebf\u7a0b\u5b89\u5168\u7684\u5ef6\u8fdf\u521d\u59cb\u5316"),(0,a.kt)("p",null,"\u57fa\u4e8e\u7c7b\u521d\u59cb\u5316\u7684\u89e3\u51b3\u65b9\u6848"),(0,a.kt)("p",null,"\u5728\u6267\u884c\u7c7b\u7684\u521d\u59cb\u5316\u671f\u95f4\uff0cJVM\u4f1a\u53bb\u83b7\u53d6\u4e00\u4e2a\u9501\u3002\u8fd9\u4e2a\u9501\u53ef\u4ee5\u540c\u6b65\u591a\u4e2a\u7ebf\u7a0b\u5bf9\u540c\u4e00\u4e2a\u7c7b\u7684\u521d\u59cb\u5316\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://s2.loli.net/2023/07/15/zY19HbjsKWfNayV.png",alt:null})),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://s2.loli.net/2023/07/15/sCIdV7nUM9xitWr.png",alt:null})),(0,a.kt)("h2",{id:"\u5728\u9996\u6b21\u53d1\u751f\u4e0b\u5217\u4efb\u610f\u4e00\u79cd\u60c5\u51b5\u65f6\u4e00\u4e2a\u7c7b\u6216\u63a5\u53e3\u7c7b\u578bt\u5c06\u88ab\u7acb\u5373\u521d\u59cb\u5316"},"\u5728\u9996\u6b21\u53d1\u751f\u4e0b\u5217\u4efb\u610f\u4e00\u79cd\u60c5\u51b5\u65f6\uff0c\u4e00\u4e2a\u7c7b\u6216\u63a5\u53e3\u7c7b\u578bT\u5c06\u88ab\u7acb\u5373\u521d\u59cb\u5316"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"T\u662f\u4e00\u4e2a\u7c7b\uff0c\u800c\u4e14\u4e00\u4e2aT\u7c7b\u578b\u7684\u5b9e\u4f8b\u88ab\u521b\u5efa\u3002"),(0,a.kt)("li",{parentName:"ul"},"T\u662f\u4e00\u4e2a\u7c7b\uff0c\u4e14T\u4e2d\u58f0\u660e\u7684\u4e00\u4e2a\u9759\u6001\u65b9\u6cd5\u88ab\u8c03\u7528\u3002"),(0,a.kt)("li",{parentName:"ul"},"T\u4e2d\u58f0\u660e\u7684\u4e00\u4e2a\u9759\u6001\u5b57\u6bb5\u88ab\u8d4b\u503c\u3002"),(0,a.kt)("li",{parentName:"ul"},"T\u4e2d\u58f0\u660e\u7684\u4e00\u4e2a\u9759\u6001\u5b57\u6bb5\u88ab\u4f7f\u7528\uff0c\u800c\u4e14\u8fd9\u4e2a\u5b57\u6bb5\u4e0d\u662f\u4e00\u4e2a\u5e38\u91cf\u5b57\u6bb5\u3002"),(0,a.kt)("li",{parentName:"ul"},"T\u662f\u4e00\u4e2a\u9876\u7ea7\u7c7b\uff08Top Level Class\uff0c\u89c1Java\u8bed\u8a00\u89c4\u8303\u7684\xa77.6\uff09\uff0c\u800c\u4e14\u4e00\u4e2a\u65ad\u8a00\u8bed\u53e5\u5d4c\u5957\u5728T\u5185\u90e8\u88ab\u6267\u884c\u3002")),(0,a.kt)("h2",{id:"\u7c7b\u521d\u59cb\u5316\u8fc7\u7a0b"},"\u7c7b\u521d\u59cb\u5316\u8fc7\u7a0b"),(0,a.kt)("p",null,"\u7b2c1\u9636\u6bb5\uff1a\u901a\u8fc7\u5728Class\u5bf9\u8c61\u4e0a\u540c\u6b65\uff08\u5373\u83b7\u53d6Class\u5bf9\u8c61\u7684\u521d\u59cb\u5316\u9501\uff09\uff0c\u6765\u63a7\u5236\u7c7b\u6216\u63a5\u53e3\u7684\u521d\u59cb\u5316\u3002\u8fd9\u4e2a\u83b7\u53d6\u9501\u7684\u7ebf\u7a0b\u4f1a\u4e00\u76f4\u7b49\u5f85\uff0c\u76f4\u5230\u5f53\u524d\u7ebf\u7a0b\u80fd\u591f\u83b7\u53d6\u5230\u8fd9\u4e2a\u521d\u59cb\u5316\u9501\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://s2.loli.net/2023/07/15/EOH2Yjmk5G9buqy.png",alt:null})),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://s2.loli.net/2023/07/15/6kCQf31gUr9vRLE.png",alt:null})),(0,a.kt)("p",null,"\u7b2c2\u9636\u6bb5\uff1a\u7ebf\u7a0bA\u6267\u884c\u7c7b\u7684\u521d\u59cb\u5316\uff0c\u540c\u65f6\u7ebf\u7a0bB\u5728\u521d\u59cb\u5316\u9501\u5bf9\u5e94\u7684condition\u4e0a\u7b49\u5f85\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://s2.loli.net/2023/07/15/pQNSUy7f6TRHa42.png",alt:null})),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://s2.loli.net/2023/07/15/dDaWkJe7LIwYEOs.png",alt:null})),(0,a.kt)("p",null,"\u7b2c3\u9636\u6bb5\uff1a\u7ebf\u7a0bA\u8bbe\u7f6estate=initialized\uff0c\u7136\u540e\u5524\u9192\u5728condition\u4e2d\u7b49\u5f85\u7684\u6240\u6709\u7ebf\u7a0b\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://s2.loli.net/2023/07/15/6DeqC9QUvHIzfkw.png",alt:null})),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://s2.loli.net/2023/07/15/kK7IjBDOGTr56co.png",alt:null})),(0,a.kt)("p",null,"\u7b2c4\u9636\u6bb5\uff1a\u7ebf\u7a0bB\u7ed3\u675f\u7c7b\u7684\u521d\u59cb\u5316\u5904\u7406\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://s2.loli.net/2023/07/15/hUYNfDTKIspRQOM.png",alt:null})),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://s2.loli.net/2023/07/15/B5ceYPOi2bCJ1GM.png",alt:null})),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://s2.loli.net/2023/07/15/ZyfwU7qXLEbdYG6.png",alt:null})),(0,a.kt)("p",null,"\u7ebf\u7a0bA\u5728\u7b2c2\u9636\u6bb5\u7684A1\u6267\u884c\u7c7b\u7684\u521d\u59cb\u5316\uff0c\u5e76\u5728\u7b2c3\u9636\u6bb5\u7684A4\u91ca\u653e\u521d\u59cb\u5316\u9501\uff1b\u7ebf\u7a0bB\u5728\u7b2c4\u9636\u6bb5\u7684B1\u83b7\u53d6\u540c\u4e00\u4e2a\u521d\u59cb\u5316\u9501\uff0c\u5e76\u5728\u7b2c4\u9636\u6bb5\u7684B4\u4e4b\u540e\u624d\u5f00\u59cb\u8bbf\u95ee\u8fd9\u4e2a\u7c7b\u3002\u6839\u636eJava\u5185\u5b58\u6a21\u578b\u89c4\u8303\u7684\u9501\u89c4\u5219\uff0c\u8fd9\u91cc\u5c06\u5b58\u5728\u5982\u4e0b\u7684happens-before\u5173\u7cfb\u3002\u8fd9\u4e2ahappens-before\u5173\u7cfb\u5c06\u4fdd\u8bc1\uff1a\u7ebf\u7a0bA\u6267\u884c\u7c7b\u7684\u521d\u59cb\u5316\u65f6\u7684\u5199\u5165\u64cd\u4f5c\uff08\u6267\u884c\u7c7b\u7684\u9759\u6001\u521d\u59cb\u5316\u548c\u521d\u59cb\u5316\u7c7b\u4e2d\u58f0\u660e\u7684\u9759\u6001\u5b57\u6bb5\uff09\uff0c\u7ebf\u7a0bB\u4e00\u5b9a\u80fd\u770b\u5230\u3002\n\u7b2c5\u9636\u6bb5\uff1a\u7ebf\u7a0bC\u6267\u884c\u7c7b\u7684\u521d\u59cb\u5316\u7684\u5904\u7406\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://s2.loli.net/2023/07/15/woPNqEJTh4durWi.png",alt:null})),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://s2.loli.net/2023/07/15/cW9SGadHkCsyOuv.png",alt:null})),(0,a.kt)("p",null,"\u5728\u7b2c3\u9636\u6bb5\u4e4b\u540e\uff0c\u7c7b\u5df2\u7ecf\u5b8c\u6210\u4e86\u521d\u59cb\u5316\u3002\u56e0\u6b64\u7ebf\u7a0bC\u5728\u7b2c5\u9636\u6bb5\u7684\u7c7b\u521d\u59cb\u5316\u5904\u7406\u8fc7\u7a0b\u76f8\u5bf9\u7b80\u5355\u4e00\u4e9b\uff08\u524d\u9762\u7684\u7ebf\u7a0bA\u548cB\u7684\u7c7b\u521d\u59cb\u5316\u5904\u7406\u8fc7\u7a0b\u90fd\u7ecf\u5386\u4e86\u4e24\u6b21\u9501\u83b7\u53d6-\u9501\u91ca\u653e\uff0c\u800c\u7ebf\u7a0bC\u7684\u7c7b\u521d\u59cb\u5316\u5904\u7406\u53ea\u9700\u8981\u7ecf\u5386\u4e00\u6b21\u9501\u83b7\u53d6-\u9501\u91ca\u653e\uff09\u3002\u7ebf\u7a0bA\u5728\u7b2c2\u9636\u6bb5\u7684A1\u6267\u884c\u7c7b\u7684\u521d\u59cb\u5316\uff0c\u5e76\u5728\u7b2c3\u9636\u6bb5\u7684A4\u91ca\u653e\u9501\uff1b\u7ebf\u7a0bC\u5728\u7b2c5\u9636\u6bb5\u7684C1\u83b7\u53d6\u540c\u4e00\u4e2a\u9501\uff0c\u5e76\u5728\u5728\u7b2c5\u9636\u6bb5\u7684C4\u4e4b\u540e\u624d\u5f00\u59cb\u8bbf\u95ee\u8fd9\u4e2a\u7c7b\u3002\u6839\u636eJava\u5185\u5b58\u6a21\u578b\u89c4\u8303\u7684\u9501\u89c4\u5219\uff0c\u5c06\u5b58\u5728\u5982\u4e0b\u7684happens-before\u5173\u7cfb\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://s2.loli.net/2023/07/15/uYt43fMHphDIbPd.png",alt:null})),(0,a.kt)("p",null,"\u901a\u8fc7\u5bf9\u6bd4\u57fa\u4e8evolatile\u7684\u53cc\u91cd\u68c0\u67e5\u9501\u5b9a\u7684\u65b9\u6848\u548c\u57fa\u4e8e\u7c7b\u521d\u59cb\u5316\u7684\u65b9\u6848\uff0c\u6211\u4eec\u4f1a\u53d1\u73b0\u57fa\u4e8e\u7c7b\u521d\u59cb\u5316\u7684\u65b9\u6848\u7684\u5b9e\u73b0\u4ee3\u7801\u66f4\u7b80\u6d01\u3002\u4f46\u57fa\u4e8evolatile\u7684\u53cc\u91cd\u68c0\u67e5\u9501\u5b9a\u7684\u65b9\u6848\u6709\u4e00\u4e2a\u989d\u5916\u7684\u4f18\u52bf\uff1a\u9664\u4e86\u53ef\u4ee5\u5bf9\u9759\u6001\u5b57\u6bb5\u5b9e\u73b0\u5ef6\u8fdf\u521d\u59cb\u5316\u5916\uff0c\u8fd8\u53ef\u4ee5\u5bf9\u5b9e\u4f8b\u5b57\u6bb5\u5b9e\u73b0\u5ef6\u8fdf\u521d\u59cb\u5316\u3002"),(0,a.kt)("p",null,"\u5b57\u6bb5\u5ef6\u8fdf\u521d\u59cb\u5316\u964d\u4f4e\u4e86\u521d\u59cb\u5316\u7c7b\u6216\u521b\u5efa\u5b9e\u4f8b\u7684\u5f00\u9500\uff0c\u4f46\u589e\u52a0\u4e86\u8bbf\u95ee\u88ab\u5ef6\u8fdf\u521d\u59cb\u5316\u7684\u5b57\u6bb5\u7684\u5f00\u9500\u3002\u5728\u5927\u591a\u6570\u65f6\u5019\uff0c\u6b63\u5e38\u7684\u521d\u59cb\u5316\u8981\u4f18\u4e8e\u5ef6\u8fdf\u521d\u59cb\u5316\u3002\u5982\u679c\u786e\u5b9e\u9700\u8981\u5bf9\u5b9e\u4f8b\u5b57\u6bb5\u4f7f\u7528\u7ebf\u7a0b\u5b89\u5168\u7684\u5ef6\u8fdf\u521d\u59cb\u5316\uff0c\u8bf7\u4f7f\u7528\u4e0a\u9762\u4ecb\u7ecd\u7684\u57fa\u4e8evolatile\u7684\u5ef6\u8fdf\u521d\u59cb\u5316\u7684\u65b9\u6848\uff1b\u5982\u679c\u786e\u5b9e\u9700\u8981\u5bf9\u9759\u6001\u5b57\u6bb5\u4f7f\u7528\u7ebf\u7a0b\u5b89\u5168\u7684\u5ef6\u8fdf\u521d\u59cb\u5316\uff0c\u8bf7\u4f7f\u7528\u4e0a\u9762\u4ecb\u7ecd\u7684\u57fa\u4e8e\u7c7b\u521d\u59cb\u5316\u7684\u65b9\u6848\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u53c2\u8003\u8d44\u6599"),(0,a.kt)("ol",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ol"},"\u4e66\u7c4d\u540d\u79f0\uff1a\u300ajava\u5e76\u53d1\u7f16\u7a0b\u7684\u827a\u672f\u300b \u4f5c\u8005\uff1a\u65b9\u817e\u98de \u9b4f\u9e4f \u7a0b\u6653\u660e"))),(0,a.kt)("admonition",{title:"\u534f\u8bae",type:"tip"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u672c\u4f5c\u54c1\u4ee3\u7801\u90e8\u5206\u91c7\u7528 ",(0,a.kt)("a",{parentName:"p",href:"https://www.apache.org/licenses/LICENSE-2.0"},"Apache 2.0\u534f\u8bae"),"\u8fdb\u884c\u8bb8\u53ef\u3002\u9075\u5faa\u8bb8\u53ef\u7684\u524d\u63d0\u4e0b\uff0c\u4f60\u53ef\u4ee5\u81ea\u7531\u5730\u5bf9\u4ee3\u7801\u8fdb\u884c\u4fee\u6539\uff0c\u518d\u53d1\u5e03\uff0c\u53ef\u4ee5\u5c06\u4ee3\u7801\u7528\u4f5c\u5546\u4e1a\u7528\u9014\u3002\u4f46\u8981\u6c42\u4f60\uff1a"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u7f72\u540d"),"\uff1a\u5728\u539f\u6709\u4ee3\u7801\u548c\u884d\u751f\u4ee3\u7801\u4e2d\uff0c\u4fdd\u7559\u539f\u4f5c\u8005\u7f72\u540d\u53ca\u4ee3\u7801\u6765\u6e90\u4fe1\u606f\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u4fdd\u7559\u8bb8\u53ef\u8bc1"),"\uff1a\u5728\u539f\u6709\u4ee3\u7801\u548c\u884d\u751f\u4ee3\u7801\u4e2d\uff0c\u4fdd\u7559Apache 2.0\u534f\u8bae\u6587\u4ef6\u3002"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u672c\u4f5c\u54c1\u6587\u6863\u90e8\u5206\u91c7\u7528",(0,a.kt)("a",{parentName:"p",href:"http://creativecommons.org/licenses/by/4.0/"},"\u77e5\u8bc6\u5171\u4eab\u7f72\u540d 4.0 \u56fd\u9645\u8bb8\u53ef\u534f\u8bae"),"\u8fdb\u884c\u8bb8\u53ef\u3002 \u9075\u5faa\u8bb8\u53ef\u7684\u524d\u63d0\u4e0b\uff0c\u4f60\u53ef\u4ee5\u81ea\u7531\u5730\u5171\u4eab\uff0c\u5305\u62ec\u5728\u4efb\u4f55\u5a92\u4ecb\u4e0a\u4ee5\u4efb\u4f55\u5f62\u5f0f\u590d\u5236\u3001\u53d1\u884c\u672c\u4f5c\u54c1\uff0c\u4ea6\u53ef\u4ee5\u81ea\u7531\u5730\u6f14\u7ece\u3001\u4fee\u6539\u3001\u8f6c\u6362\u6216\u4ee5\u672c\u4f5c\u54c1\u4e3a\u57fa\u7840\u8fdb\u884c\u4e8c\u6b21\u521b\u4f5c\u3002\u4f46\u8981\u6c42\u4f60\uff1a"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u7f72\u540d"),"\uff1a\u5e94\u5728\u4f7f\u7528\u672c\u6587\u6863\u7684\u5168\u90e8\u6216\u90e8\u5206\u5185\u5bb9\u65f6\u5019\uff0c\u6ce8\u660e\u539f\u4f5c\u8005\u53ca\u6765\u6e90\u4fe1\u606f\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u975e\u5546\u4e1a\u6027\u4f7f\u7528"),"\uff1a\u4e0d\u5f97\u7528\u4e8e\u5546\u4e1a\u51fa\u7248\u6216\u5176\u4ed6\u4efb\u4f55\u5e26\u6709\u5546\u4e1a\u6027\u8d28\u7684\u884c\u4e3a\u3002\u5982\u9700\u5546\u4e1a\u4f7f\u7528\uff0c\u8bf7\u8054\u7cfb\u4f5c\u8005\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u76f8\u540c\u65b9\u5f0f\u5171\u4eab\u7684\u6761\u4ef6"),"\uff1a\u5728\u672c\u6587\u6863\u57fa\u7840\u4e0a\u6f14\u7ece\u3001\u4fee\u6539\u7684\u4f5c\u54c1\uff0c\u5e94\u5f53\u7ee7\u7eed\u4ee5\u77e5\u8bc6\u5171\u4eab\u7f72\u540d 4.0\u56fd\u9645\u8bb8\u53ef\u534f\u8bae\u8fdb\u884c\u8bb8\u53ef\u3002"))))))}k.isMDXComponent=!0}}]);