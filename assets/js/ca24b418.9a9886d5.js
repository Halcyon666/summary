"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1217],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>y});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=s(n),d=a,y=c["".concat(p,".").concat(d)]||c[d]||m[d]||o;return n?r.createElement(y,l(l({ref:t},u),{},{components:n})):r.createElement(y,l({ref:t},u))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},340:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={title:"jQuery \u9009\u62e9\u5668",hidemeta:!0},l=void 0,i={unversionedId:"FrontEnd/JQuery-revese-selector",id:"FrontEnd/JQuery-revese-selector",title:"jQuery \u9009\u62e9\u5668",description:"JQuery\u9009\u62e9\u5668",source:"@site/docs/FrontEnd/JQuery-revese-selector.md",sourceDirName:"FrontEnd",slug:"/FrontEnd/JQuery-revese-selector",permalink:"/summary/docs/FrontEnd/JQuery-revese-selector",draft:!1,editUrl:"https://github.com/Halcyon666/summary/docs/FrontEnd/JQuery-revese-selector.md",tags:[],version:"current",frontMatter:{title:"jQuery \u9009\u62e9\u5668",hidemeta:!0},sidebar:"tutorialSidebar",previous:{title:"maven gradle\u914d\u7f6e",permalink:"/summary/docs/Develop-Tools/\u914d\u7f6egradle-maven"},next:{title:"Docusaurus github page",permalink:"/summary/docs/FrontEnd/github-page-blog"}},p={},s=[{value:"JQuery\u9009\u62e9\u5668",id:"jquery\u9009\u62e9\u5668",level:2},{value:"Input\u5143\u7d20\u4e2d \u5bf9name\u5c5e\u6027\u8fdb\u884c\u7b5b\u9009",id:"input\u5143\u7d20\u4e2d-\u5bf9name\u5c5e\u6027\u8fdb\u884c\u7b5b\u9009",level:3},{value:"\u9009\u62e9\u5c5e\u6027\u53d6\u53cd\u64cd\u4f5c",id:"\u9009\u62e9\u5c5e\u6027\u53d6\u53cd\u64cd\u4f5c",level:3}],u={toc:s},c="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"jquery\u9009\u62e9\u5668"},"JQuery\u9009\u62e9\u5668"),(0,a.kt)("h3",{id:"input\u5143\u7d20\u4e2d-\u5bf9name\u5c5e\u6027\u8fdb\u884c\u7b5b\u9009"},"Input\u5143\u7d20\u4e2d \u5bf9name\u5c5e\u6027\u8fdb\u884c\u7b5b\u9009"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://api.jquery.com/attribute-not-equal-selector/"},"Example From Here")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$( \"input[name!='newsletter']\" )")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},'$("input").not("[name=newsletter]")')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<!doctype html>\n<html lang="en">\n<head>\n  <meta charset="utf-8">\n  <title>attributeNotEqual demo</title>\n  <script src="https://code.jquery.com/jquery-3.5.0.js"><\/script>\n</head>\n<body>\n\n<div>\n  <input type="radio" name="newsletter" value="Hot Fuzz">\n  <span>name is newsletter</span>\n</div>\n<div>\n  <input type="radio" value="Cold Fusion">\n  <span>no name</span>\n</div>\n<div>\n  <input type="radio" name="accept" value="Evil Plans">\n  <span>name is accept</span>\n</div>\n\n<script>\n$( "input[name!=\'newsletter\']" ).next().append( "<b>; not newsletter</b>" );\n<\/script>\n\n</body>\n</html>\n')),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://s2.loli.net/2023/07/15/ogv7OYWx2DzkytS.png",alt:"image-20211102230352413"})),(0,a.kt)("h3",{id:"\u9009\u62e9\u5c5e\u6027\u53d6\u53cd\u64cd\u4f5c"},"\u9009\u62e9\u5c5e\u6027\u53d6\u53cd\u64cd\u4f5c"),(0,a.kt)("p",null,"\u9009\u53d6form\u8868\u5355\u4e2d\uff0cdiv\u5143\u7d20id\u503c\u4e0d\u4e3aa\u7684\u5b50\u5143\u7d20\u4e2d\u7684input"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},'$( "form div:not(#a) input" )')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$( \"form div:not([id='a']) input\" )")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="utf-8">\n  <title>attributeNotEqual demo</title>\n  <script src="https://code.jquery.com/jquery-3.5.0.js"><\/script>\n</head>\n<body>\n\n<form class="">\n    <div id="a" class="form-floating mb-3">\n      <input type="email" class="form-control rounded-4" id="floatingInput" placeholder="name@example.com">\n      <label for="floatingInput">Email address</label>\n    </div>\n    <div id="b" class="form-floating mb-3">\n      <input type="password" class="form-control rounded-4" id="floatingPassword" placeholder="Password">\n      <label for="floatingPassword">Password</label>\n    </div>\n\n</form>\n\n<script>\n    $( "form div:not(#a) input" ).css("background-color","pink");\n<\/script>\n\n</body>\n</html>\n')),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://s2.loli.net/2023/07/15/HsKBpjJUXtC2FwG.png",alt:"image-20211102231338241"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u66f4\u591a\u9009\u62e9\u5668\u7528\u6cd5\u8bf7 ",(0,a.kt)("a",{parentName:"p",href:"https://api.jquery.com/category/selectors/"},"\u770b\u8fd9\u91cc"))),(0,a.kt)("blockquote",null,(0,a.kt)("font",{color:"red"},"\u8f6c\u8f7d\u8bf7\u6ce8\u660e [\u539f\u6587\u5730\u5740](https://www.cnblogs.com/whalefall541/p/15501748.html)")))}m.isMDXComponent=!0}}]);