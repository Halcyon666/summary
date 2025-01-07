"use strict";(self.webpackChunksummary=self.webpackChunksummary||[]).push([[4220],{4247:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"Frontend/JQuery-revese-selector","title":"jQuery\u9009\u62e9\u5668","description":"JQuery\u9009\u62e9\u5668","source":"@site/docs/02-Frontend/JQuery-revese-selector.mdx","sourceDirName":"02-Frontend","slug":"/Frontend/JQuery-revese-selector","permalink":"/summary/en/Frontend/JQuery-revese-selector","draft":false,"unlisted":false,"editUrl":"https://github.com/Halcyon666/summary/edit/main/i18n/en/docusaurus-plugin-content-docs/current/02-Frontend/JQuery-revese-selector.mdx","tags":[],"version":"current","lastUpdatedAt":1736260505000,"sidebarPosition":1,"frontMatter":{"title":"jQuery\u9009\u62e9\u5668","sidebar_label":"jQuery\u9009\u62e9\u5668","sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"Kafka\u4f7f\u7528\u95ee\u9898","permalink":"/summary/en/Java/middleware/Kafka"},"next":{"title":"Vue \u57fa\u78401","permalink":"/summary/en/Frontend/vue-grammer-one"}}');var s=t(6070),a=t(5248);const i={title:"jQuery\u9009\u62e9\u5668",sidebar_label:"jQuery\u9009\u62e9\u5668",sidebar_position:1},o=void 0,l={},d=[{value:"JQuery\u9009\u62e9\u5668",id:"jquery\u9009\u62e9\u5668",level:2},{value:"Input\u5143\u7d20\u4e2d \u5bf9name\u5c5e\u6027\u8fdb\u884c\u7b5b\u9009",id:"input\u5143\u7d20\u4e2d-\u5bf9name\u5c5e\u6027\u8fdb\u884c\u7b5b\u9009",level:3},{value:"\u9009\u62e9\u5c5e\u6027\u53d6\u53cd\u64cd\u4f5c",id:"\u9009\u62e9\u5c5e\u6027\u53d6\u53cd\u64cd\u4f5c",level:3}];function c(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"jquery\u9009\u62e9\u5668",children:"JQuery\u9009\u62e9\u5668"}),"\n",(0,s.jsx)(n.h3,{id:"input\u5143\u7d20\u4e2d-\u5bf9name\u5c5e\u6027\u8fdb\u884c\u7b5b\u9009",children:"Input\u5143\u7d20\u4e2d \u5bf9name\u5c5e\u6027\u8fdb\u884c\u7b5b\u9009"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://api.jquery.com/attribute-not-equal-selector/",children:"Example From Here"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"$( \"input[name!='newsletter']\" )"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:'$("input").not("[name=newsletter]")'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:'<!doctype html>\n<html lang="en">\n<head>\n  <meta charset="utf-8">\n  <title>attributeNotEqual demo</title>\n  <script src="https://code.jquery.com/jquery-3.5.0.js"><\/script>\n</head>\n<body>\n\n<div>\n  <input type="radio" name="newsletter" value="Hot Fuzz">\n  <span>name is newsletter</span>\n</div>\n<div>\n  <input type="radio" value="Cold Fusion">\n  <span>no name</span>\n</div>\n<div>\n  <input type="radio" name="accept" value="Evil Plans">\n  <span>name is accept</span>\n</div>\n\n<script>\n$( "input[name!=\'newsletter\']" ).next().append( "<b>; not newsletter</b>" );\n<\/script>\n\n</body>\n</html>\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://s2.loli.net/2023/07/15/ogv7OYWx2DzkytS.png",alt:"image-20211102230352413"})}),"\n",(0,s.jsx)(n.h3,{id:"\u9009\u62e9\u5c5e\u6027\u53d6\u53cd\u64cd\u4f5c",children:"\u9009\u62e9\u5c5e\u6027\u53d6\u53cd\u64cd\u4f5c"}),"\n",(0,s.jsx)(n.p,{children:"\u9009\u53d6form\u8868\u5355\u4e2d\uff0cdiv\u5143\u7d20id\u503c\u4e0d\u4e3aa\u7684\u5b50\u5143\u7d20\u4e2d\u7684input"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:'$( "form div:not(#a) input" )'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"$( \"form div:not([id='a']) input\" )"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:'<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="utf-8">\n  <title>attributeNotEqual demo</title>\n  <script src="https://code.jquery.com/jquery-3.5.0.js"><\/script>\n</head>\n<body>\n\n<form class="">\n    <div id="a" class="form-floating mb-3">\n      <input type="email" class="form-control rounded-4" id="floatingInput" placeholder="name@example.com">\n      <label for="floatingInput">Email address</label>\n    </div>\n    <div id="b" class="form-floating mb-3">\n      <input type="password" class="form-control rounded-4" id="floatingPassword" placeholder="Password">\n      <label for="floatingPassword">Password</label>\n    </div>\n\n</form>\n\n<script>\n    $( "form div:not(#a) input" ).css("background-color","pink");\n<\/script>\n\n</body>\n</html>\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://s2.loli.net/2023/07/15/HsKBpjJUXtC2FwG.png",alt:"image-20211102231338241"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u66f4\u591a\u9009\u62e9\u5668\u7528\u6cd5\u8bf7 ",(0,s.jsx)(n.a,{href:"https://api.jquery.com/category/selectors/",children:"\u770b\u8fd9\u91cc"})]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},5248:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>o});var r=t(758);const s={},a=r.createContext(s);function i(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);