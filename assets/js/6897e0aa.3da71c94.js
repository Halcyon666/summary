"use strict";(self.webpackChunksummary=self.webpackChunksummary||[]).push([[7550],{7905:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=t(5893),s=t(1151);const i={title:"jQuery\u9009\u62e9\u5668",sidebar_label:"jQuery\u9009\u62e9\u5668",sidebar_position:1},l=void 0,o={id:"Frontend/JQuery-revese-selector",title:"jQuery\u9009\u62e9\u5668",description:"JQuery\u9009\u62e9\u5668",source:"@site/docs/02-Frontend/JQuery-revese-selector.mdx",sourceDirName:"02-Frontend",slug:"/Frontend/JQuery-revese-selector",permalink:"/Frontend/JQuery-revese-selector",draft:!1,unlisted:!1,editUrl:"https://github.com/Halcyon666/summary/blob/main/docs/02-Frontend/JQuery-revese-selector.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"jQuery\u9009\u62e9\u5668",sidebar_label:"jQuery\u9009\u62e9\u5668",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u8bbe\u8ba1\u6a21\u5f0f",permalink:"/Java/DesignPattern/\u8bbe\u8ba1\u6a21\u5f0f"},next:{title:"Vue \u57fa\u78401",permalink:"/Frontend/vue-grammer-one"}},a={},c=[{value:"JQuery\u9009\u62e9\u5668",id:"jquery\u9009\u62e9\u5668",level:2},{value:"Input\u5143\u7d20\u4e2d \u5bf9name\u5c5e\u6027\u8fdb\u884c\u7b5b\u9009",id:"input\u5143\u7d20\u4e2d-\u5bf9name\u5c5e\u6027\u8fdb\u884c\u7b5b\u9009",level:3},{value:"\u9009\u62e9\u5c5e\u6027\u53d6\u53cd\u64cd\u4f5c",id:"\u9009\u62e9\u5c5e\u6027\u53d6\u53cd\u64cd\u4f5c",level:3}];function d(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"jquery\u9009\u62e9\u5668",children:"JQuery\u9009\u62e9\u5668"}),"\n",(0,r.jsx)(n.h3,{id:"input\u5143\u7d20\u4e2d-\u5bf9name\u5c5e\u6027\u8fdb\u884c\u7b5b\u9009",children:"Input\u5143\u7d20\u4e2d \u5bf9name\u5c5e\u6027\u8fdb\u884c\u7b5b\u9009"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://api.jquery.com/attribute-not-equal-selector/",children:"Example From Here"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"$( \"input[name!='newsletter']\" )"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:'$("input").not("[name=newsletter]")'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:'<!doctype html>\n<html lang="en">\n<head>\n  <meta charset="utf-8">\n  <title>attributeNotEqual demo</title>\n  <script src="https://code.jquery.com/jquery-3.5.0.js"><\/script>\n</head>\n<body>\n\n<div>\n  <input type="radio" name="newsletter" value="Hot Fuzz">\n  <span>name is newsletter</span>\n</div>\n<div>\n  <input type="radio" value="Cold Fusion">\n  <span>no name</span>\n</div>\n<div>\n  <input type="radio" name="accept" value="Evil Plans">\n  <span>name is accept</span>\n</div>\n\n<script>\n$( "input[name!=\'newsletter\']" ).next().append( "<b>; not newsletter</b>" );\n<\/script>\n\n</body>\n</html>\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://s2.loli.net/2023/07/15/ogv7OYWx2DzkytS.png",alt:"image-20211102230352413"})}),"\n",(0,r.jsx)(n.h3,{id:"\u9009\u62e9\u5c5e\u6027\u53d6\u53cd\u64cd\u4f5c",children:"\u9009\u62e9\u5c5e\u6027\u53d6\u53cd\u64cd\u4f5c"}),"\n",(0,r.jsx)(n.p,{children:"\u9009\u53d6form\u8868\u5355\u4e2d\uff0cdiv\u5143\u7d20id\u503c\u4e0d\u4e3aa\u7684\u5b50\u5143\u7d20\u4e2d\u7684input"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:'$( "form div:not(#a) input" )'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"$( \"form div:not([id='a']) input\" )"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:'<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="utf-8">\n  <title>attributeNotEqual demo</title>\n  <script src="https://code.jquery.com/jquery-3.5.0.js"><\/script>\n</head>\n<body>\n\n<form class="">\n    <div id="a" class="form-floating mb-3">\n      <input type="email" class="form-control rounded-4" id="floatingInput" placeholder="name@example.com">\n      <label for="floatingInput">Email address</label>\n    </div>\n    <div id="b" class="form-floating mb-3">\n      <input type="password" class="form-control rounded-4" id="floatingPassword" placeholder="Password">\n      <label for="floatingPassword">Password</label>\n    </div>\n\n</form>\n\n<script>\n    $( "form div:not(#a) input" ).css("background-color","pink");\n<\/script>\n\n</body>\n</html>\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://s2.loli.net/2023/07/15/HsKBpjJUXtC2FwG.png",alt:"image-20211102231338241"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u66f4\u591a\u9009\u62e9\u5668\u7528\u6cd5\u8bf7 ",(0,r.jsx)(n.a,{href:"https://api.jquery.com/category/selectors/",children:"\u770b\u8fd9\u91cc"})]}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{title:"\u534f\u8bae",type:"tip",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u672c\u4f5c\u54c1\u4ee3\u7801\u90e8\u5206\u91c7\u7528 ",(0,r.jsx)(n.a,{href:"https://www.apache.org/licenses/LICENSE-2.0",children:"Apache 2.0\u534f\u8bae"}),"\u8fdb\u884c\u8bb8\u53ef\u3002\u9075\u5faa\u8bb8\u53ef\u7684\u524d\u63d0\u4e0b\uff0c\u4f60\u53ef\u4ee5\u81ea\u7531\u5730\u5bf9\u4ee3\u7801\u8fdb\u884c\u4fee\u6539\uff0c\u518d\u53d1\u5e03\uff0c\u53ef\u4ee5\u5c06\u4ee3\u7801\u7528\u4f5c\u5546\u4e1a\u7528\u9014\u3002\u4f46\u8981\u6c42\u4f60\uff1a"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"\u7f72\u540d"}),"\uff1a\u5728\u539f\u6709\u4ee3\u7801\u548c\u884d\u751f\u4ee3\u7801\u4e2d\uff0c\u4fdd\u7559\u539f\u4f5c\u8005\u7f72\u540d\u53ca\u4ee3\u7801\u6765\u6e90\u4fe1\u606f\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"\u4fdd\u7559\u8bb8\u53ef\u8bc1"}),"\uff1a\u5728\u539f\u6709\u4ee3\u7801\u548c\u884d\u751f\u4ee3\u7801\u4e2d\uff0c\u4fdd\u7559Apache 2.0\u534f\u8bae\u6587\u4ef6\u3002"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u672c\u4f5c\u54c1\u6587\u6863\u90e8\u5206\u91c7\u7528",(0,r.jsx)(n.a,{href:"http://creativecommons.org/licenses/by/4.0/",children:"\u77e5\u8bc6\u5171\u4eab\u7f72\u540d 4.0 \u56fd\u9645\u8bb8\u53ef\u534f\u8bae"}),"\u8fdb\u884c\u8bb8\u53ef\u3002 \u9075\u5faa\u8bb8\u53ef\u7684\u524d\u63d0\u4e0b\uff0c\u4f60\u53ef\u4ee5\u81ea\u7531\u5730\u5171\u4eab\uff0c\u5305\u62ec\u5728\u4efb\u4f55\u5a92\u4ecb\u4e0a\u4ee5\u4efb\u4f55\u5f62\u5f0f\u590d\u5236\u3001\u53d1\u884c\u672c\u4f5c\u54c1\uff0c\u4ea6\u53ef\u4ee5\u81ea\u7531\u5730\u6f14\u7ece\u3001\u4fee\u6539\u3001\u8f6c\u6362\u6216\u4ee5\u672c\u4f5c\u54c1\u4e3a\u57fa\u7840\u8fdb\u884c\u4e8c\u6b21\u521b\u4f5c\u3002\u4f46\u8981\u6c42\u4f60\uff1a"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"\u7f72\u540d"}),"\uff1a\u5e94\u5728\u4f7f\u7528\u672c\u6587\u6863\u7684\u5168\u90e8\u6216\u90e8\u5206\u5185\u5bb9\u65f6\u5019\uff0c\u6ce8\u660e\u539f\u4f5c\u8005\u53ca\u6765\u6e90\u4fe1\u606f\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"\u975e\u5546\u4e1a\u6027\u4f7f\u7528"}),"\uff1a\u4e0d\u5f97\u7528\u4e8e\u5546\u4e1a\u51fa\u7248\u6216\u5176\u4ed6\u4efb\u4f55\u5e26\u6709\u5546\u4e1a\u6027\u8d28\u7684\u884c\u4e3a\u3002\u5982\u9700\u5546\u4e1a\u4f7f\u7528\uff0c\u8bf7\u8054\u7cfb\u4f5c\u8005\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"\u76f8\u540c\u65b9\u5f0f\u5171\u4eab\u7684\u6761\u4ef6"}),"\uff1a\u5728\u672c\u6587\u6863\u57fa\u7840\u4e0a\u6f14\u7ece\u3001\u4fee\u6539\u7684\u4f5c\u54c1\uff0c\u5e94\u5f53\u7ee7\u7eed\u4ee5\u77e5\u8bc6\u5171\u4eab\u7f72\u540d 4.0\u56fd\u9645\u8bb8\u53ef\u534f\u8bae\u8fdb\u884c\u8bb8\u53ef\u3002"]}),"\n"]}),"\n"]}),"\n"]})})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>l});var r=t(7294);const s={},i=r.createContext(s);function l(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);