"use strict";(self.webpackChunksummary=self.webpackChunksummary||[]).push([[3529],{7799:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>o});var t=s(5893),r=s(1151);const i={title:"K8S\u5e38\u7528\u547d\u4ee4",sidebar_label:"K8S\u5e38\u7528\u547d\u4ee4",sidebar_position:2},l=void 0,c={id:"Container-Tech/kubernetes/k8s\u5e38\u7528\u547d\u4ee4",title:"K8S\u5e38\u7528\u547d\u4ee4",description:"\u72b6\u6001\u68c0\u67e5",source:"@site/docs/07-Container-Tech/kubernetes/k8s\u5e38\u7528\u547d\u4ee4.mdx",sourceDirName:"07-Container-Tech/kubernetes",slug:"/Container-Tech/kubernetes/k8s\u5e38\u7528\u547d\u4ee4",permalink:"/summary/Container-Tech/kubernetes/k8s\u5e38\u7528\u547d\u4ee4",draft:!1,unlisted:!1,editUrl:"https://github.com/Halcyon666/summary/blob/main/docs/07-Container-Tech/kubernetes/k8s\u5e38\u7528\u547d\u4ee4.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"K8S\u5e38\u7528\u547d\u4ee4",sidebar_label:"K8S\u5e38\u7528\u547d\u4ee4",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Centos8 \u5b89\u88c5K8S",permalink:"/summary/Container-Tech/kubernetes/CentOS8\u5b89\u88c5K8S"},next:{title:"shell\u57fa\u7840\u547d\u4ee4",permalink:"/summary/Linux/Common-Shell-Command"}},a={},o=[{value:"\u72b6\u6001\u68c0\u67e5",id:"\u72b6\u6001\u68c0\u67e5",level:3},{value:"\u91cd\u542f\u547d\u4ee4",id:"\u91cd\u542f\u547d\u4ee4",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h3,{id:"\u72b6\u6001\u68c0\u67e5",children:(0,t.jsx)(n.a,{href:"https://blog.csdn.net/weixin_38007578/article/details/117586266",children:"\u72b6\u6001\u68c0\u67e5"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"# \u68c0\u67e5 docker \u72b6\u6001\nsystemctl status docker.service\n# \u68c0\u67e5 kubelet \u72b6\u6001\nsystemctl status kubelet.service\n# \u68c0\u67e5 kubelet \u7aef\u53e3\nnetstat -antp| grep 6443\nnetstat -pnlt | grep 6443\n# \u67e5\u770b\u7cfb\u7edf\u65e5\u5fd7\ntail -200f /var/log/messages\n#  \nkubectl get cs\n\n"})}),"\n",(0,t.jsx)(n.h3,{id:"\u91cd\u542f\u547d\u4ee4",children:"\u91cd\u542f\u547d\u4ee4"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"systemctl restart docker.service\nsystemctl restart kubelet.service\nsystemctl restart kubelet\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",children:"[root@master01 ~]# wget https://docs.projectcalico.org/v3.14/manifests/calico.yaml --no-check-certificate\n\u8f93\u51fa\u2026.\n [root@master01 ~]# ls\nanaconda-ks.cfg  calico.yaml\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://www.51cto.com/article/696675.html",children:"\u6e05\u7406\u547d\u4ee4"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell"})}),"\n",(0,t.jsx)(n.admonition,{title:"\u534f\u8bae",type:"tip",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["\u672c\u4f5c\u54c1\u4ee3\u7801\u90e8\u5206\u91c7\u7528 ",(0,t.jsx)(n.a,{href:"https://www.apache.org/licenses/LICENSE-2.0",children:"Apache 2.0\u534f\u8bae"}),"\u8fdb\u884c\u8bb8\u53ef\u3002\u9075\u5faa\u8bb8\u53ef\u7684\u524d\u63d0\u4e0b\uff0c\u4f60\u53ef\u4ee5\u81ea\u7531\u5730\u5bf9\u4ee3\u7801\u8fdb\u884c\u4fee\u6539\uff0c\u518d\u53d1\u5e03\uff0c\u53ef\u4ee5\u5c06\u4ee3\u7801\u7528\u4f5c\u5546\u4e1a\u7528\u9014\u3002\u4f46\u8981\u6c42\u4f60\uff1a"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"\u7f72\u540d"}),"\uff1a\u5728\u539f\u6709\u4ee3\u7801\u548c\u884d\u751f\u4ee3\u7801\u4e2d\uff0c\u4fdd\u7559\u539f\u4f5c\u8005\u7f72\u540d\u53ca\u4ee3\u7801\u6765\u6e90\u4fe1\u606f\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"\u4fdd\u7559\u8bb8\u53ef\u8bc1"}),"\uff1a\u5728\u539f\u6709\u4ee3\u7801\u548c\u884d\u751f\u4ee3\u7801\u4e2d\uff0c\u4fdd\u7559Apache 2.0\u534f\u8bae\u6587\u4ef6\u3002"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["\u672c\u4f5c\u54c1\u6587\u6863\u90e8\u5206\u91c7\u7528",(0,t.jsx)(n.a,{href:"http://creativecommons.org/licenses/by/4.0/",children:"\u77e5\u8bc6\u5171\u4eab\u7f72\u540d 4.0 \u56fd\u9645\u8bb8\u53ef\u534f\u8bae"}),"\u8fdb\u884c\u8bb8\u53ef\u3002 \u9075\u5faa\u8bb8\u53ef\u7684\u524d\u63d0\u4e0b\uff0c\u4f60\u53ef\u4ee5\u81ea\u7531\u5730\u5171\u4eab\uff0c\u5305\u62ec\u5728\u4efb\u4f55\u5a92\u4ecb\u4e0a\u4ee5\u4efb\u4f55\u5f62\u5f0f\u590d\u5236\u3001\u53d1\u884c\u672c\u4f5c\u54c1\uff0c\u4ea6\u53ef\u4ee5\u81ea\u7531\u5730\u6f14\u7ece\u3001\u4fee\u6539\u3001\u8f6c\u6362\u6216\u4ee5\u672c\u4f5c\u54c1\u4e3a\u57fa\u7840\u8fdb\u884c\u4e8c\u6b21\u521b\u4f5c\u3002\u4f46\u8981\u6c42\u4f60\uff1a"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"\u7f72\u540d"}),"\uff1a\u5e94\u5728\u4f7f\u7528\u672c\u6587\u6863\u7684\u5168\u90e8\u6216\u90e8\u5206\u5185\u5bb9\u65f6\u5019\uff0c\u6ce8\u660e\u539f\u4f5c\u8005\u53ca\u6765\u6e90\u4fe1\u606f\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"\u975e\u5546\u4e1a\u6027\u4f7f\u7528"}),"\uff1a\u4e0d\u5f97\u7528\u4e8e\u5546\u4e1a\u51fa\u7248\u6216\u5176\u4ed6\u4efb\u4f55\u5e26\u6709\u5546\u4e1a\u6027\u8d28\u7684\u884c\u4e3a\u3002\u5982\u9700\u5546\u4e1a\u4f7f\u7528\uff0c\u8bf7\u8054\u7cfb\u4f5c\u8005\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"\u76f8\u540c\u65b9\u5f0f\u5171\u4eab\u7684\u6761\u4ef6"}),"\uff1a\u5728\u672c\u6587\u6863\u57fa\u7840\u4e0a\u6f14\u7ece\u3001\u4fee\u6539\u7684\u4f5c\u54c1\uff0c\u5e94\u5f53\u7ee7\u7eed\u4ee5\u77e5\u8bc6\u5171\u4eab\u7f72\u540d 4.0\u56fd\u9645\u8bb8\u53ef\u534f\u8bae\u8fdb\u884c\u8bb8\u53ef\u3002"]}),"\n"]}),"\n"]}),"\n"]})})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>c,a:()=>l});var t=s(7294);const r={},i=t.createContext(r);function l(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);