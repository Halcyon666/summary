"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5157],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>f});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),l=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},p=function(e){var r=l(e.components);return n.createElement(s.Provider,{value:r},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,c=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=l(t),m=o,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||c;return t?n.createElement(f,a(a({ref:r},p),{},{components:t})):n.createElement(f,a({ref:r},p))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var c=t.length,a=new Array(c);a[0]=m;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i[d]="string"==typeof e?e:o,a[1]=i;for(var l=2;l<c;l++)a[l]=t[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9966:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>c,metadata:()=>i,toc:()=>l});var n=t(7462),o=(t(7294),t(3905));const c={title:"docker \u914d\u7f6e\u56fd\u5185\u955c\u50cf\u5730\u5740",hidemeta:!0},a=void 0,i={unversionedId:"Container-Tech/docker/docker-\u914d\u7f6e\u56fd\u5185\u955c\u50cf\u5730\u5740",id:"Container-Tech/docker/docker-\u914d\u7f6e\u56fd\u5185\u955c\u50cf\u5730\u5740",title:"docker \u914d\u7f6e\u56fd\u5185\u955c\u50cf\u5730\u5740",description:"\u8f6c\u8f7d\u8bf7\u6ce8\u660e \u539f\u6587\u5730\u5740",source:"@site/docs/Container-Tech/docker/docker-\u914d\u7f6e\u56fd\u5185\u955c\u50cf\u5730\u5740.md",sourceDirName:"Container-Tech/docker",slug:"/Container-Tech/docker/docker-\u914d\u7f6e\u56fd\u5185\u955c\u50cf\u5730\u5740",permalink:"/summary/docs/Container-Tech/docker/docker-\u914d\u7f6e\u56fd\u5185\u955c\u50cf\u5730\u5740",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Container-Tech/docker/docker-\u914d\u7f6e\u56fd\u5185\u955c\u50cf\u5730\u5740.md",tags:[],version:"current",frontMatter:{title:"docker \u914d\u7f6e\u56fd\u5185\u955c\u50cf\u5730\u5740",hidemeta:!0},sidebar:"tutorialSidebar",previous:{title:"Docker Compose",permalink:"/summary/docs/Container-Tech/docker/docker-compose\u914d\u7f6eredis-cluster-jenkins"},next:{title:"idea \u90e8\u7f72",permalink:"/summary/docs/Container-Tech/docker/idea \u90e8\u7f72"}},s={},l=[],p={toc:l},d="wrapper";function u(e){let{components:r,...t}=e;return(0,o.kt)(d,(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"cd /etc/docker/\nrm -f daemon.json \n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},'tee daemon.json <<- \'EOF\' \n{\n  "exec-opts": ["native.cgroupdriver=systemd"],\n  "log-driver": "json-file",\n  "log-opts": {\n    "max-size": "100m"\n  },\n  "storage-driver": "overlay2",\n  "storage-opts": [\n    "overlay2.override_kernel_check=true"\n  ],\n  "registry-mirrors": ["https://docker.mirrors.ustc.edu.cn","https://igq6a6t6.mirror.aliyuncs.com","https://hub-mirror.c.163.com/","https://reg-mirror.qiniu.com"],\n  "data-root": "/data/docker"\n}\nEOF \n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"# \u4f7f\u914d\u7f6e\u751f\u6548\n sudo kill -SIGHUP $(pidof dockerd)\n \n")),(0,o.kt)("blockquote",null,(0,o.kt)("font",{color:"red"},"\u8f6c\u8f7d\u8bf7\u6ce8\u660e [\u539f\u6587\u5730\u5740](https://www.cnblogs.com/whalefall541/p/15311477.html)")))}u.isMDXComponent=!0}}]);