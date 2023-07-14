"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8097],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>k});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),i=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=i(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=i(r),d=a,k=p["".concat(l,".").concat(d)]||p[d]||m[d]||o;return r?n.createElement(k,c(c({ref:t},u),{},{components:r})):n.createElement(k,c({ref:t},u))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,c[1]=s;for(var i=2;i<o;i++)c[i]=r[i];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6957:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>i});var n=r(7462),a=(r(7294),r(3905));const o={},c=void 0,s={unversionedId:"Container-Tech/kubernetes/k8s\u5e38\u7528\u547d\u4ee4",id:"Container-Tech/kubernetes/k8s\u5e38\u7528\u547d\u4ee4",title:"k8s\u5e38\u7528\u547d\u4ee4",description:"\u72b6\u6001\u68c0\u67e5",source:"@site/docs/Container-Tech/kubernetes/k8s\u5e38\u7528\u547d\u4ee4.md",sourceDirName:"Container-Tech/kubernetes",slug:"/Container-Tech/kubernetes/k8s\u5e38\u7528\u547d\u4ee4",permalink:"/summary/docs/Container-Tech/kubernetes/k8s\u5e38\u7528\u547d\u4ee4",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Container-Tech/kubernetes/k8s\u5e38\u7528\u547d\u4ee4.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"CentOS8\u5b89\u88c5K8S",permalink:"/summary/docs/Container-Tech/kubernetes/CentOS8\u5b89\u88c5K8S"},next:{title:"kubernetes-one",permalink:"/summary/docs/Container-Tech/kubernetes/kubernetes-one"}},l={},i=[{value:"\u72b6\u6001\u68c0\u67e5",id:"\u72b6\u6001\u68c0\u67e5",level:3},{value:"\u91cd\u542f\u547d\u4ee4",id:"\u91cd\u542f\u547d\u4ee4",level:3}],u={toc:i},p="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"\u72b6\u6001\u68c0\u67e5"},(0,a.kt)("a",{parentName:"h3",href:"https://blog.csdn.net/weixin_38007578/article/details/117586266"},"\u72b6\u6001\u68c0\u67e5")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"# \u68c0\u67e5 docker \u72b6\u6001\nsystemctl status docker.service\n# \u68c0\u67e5 kubelet \u72b6\u6001\nsystemctl status kubelet.service\n# \u68c0\u67e5 kubelet \u7aef\u53e3\nnetstat -antp| grep 6443\nnetstat -pnlt | grep 6443\n# \u67e5\u770b\u7cfb\u7edf\u65e5\u5fd7\ntail -200f /var/log/messages\n#  \nkubectl get cs\n\n")),(0,a.kt)("h3",{id:"\u91cd\u542f\u547d\u4ee4"},"\u91cd\u542f\u547d\u4ee4"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl restart docker.service\nsystemctl restart kubelet.service\nsystemctl restart kubelet\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"[root@master01 ~]# wget https://docs.projectcalico.org/v3.14/manifests/calico.yaml --no-check-certificate\n\u8f93\u51fa\u2026.\n [root@master01 ~]# ls\nanaconda-ks.cfg  calico.yaml\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.51cto.com/article/696675.html"},"\u6e05\u7406\u547d\u4ee4")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"")))}m.isMDXComponent=!0}}]);