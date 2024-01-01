"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[597],{1072:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>a,default:()=>o,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var s=t(5893),i=t(1151);const r={title:"Vue \u57fa\u78401",sidebar_label:"Vue \u57fa\u78401",sidebar_position:2},a=void 0,l={id:"FrontEnd/vue-grammer-one",title:"Vue \u57fa\u78401",description:"\u672c\u6587\u6240\u6709\u5185\u5bb9\u5747\u6765\u81ea \u4e66\u7c4d\u300avue.js\u5b9e\u6218\u300b",source:"@site/docs/02-FrontEnd/vue-grammer-one.mdx",sourceDirName:"02-FrontEnd",slug:"/FrontEnd/vue-grammer-one",permalink:"/summary/FrontEnd/vue-grammer-one",draft:!1,unlisted:!1,editUrl:"https://github.com/Halcyon666/summary/blob/main/docs/02-FrontEnd/vue-grammer-one.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Vue \u57fa\u78401",sidebar_label:"Vue \u57fa\u78401",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"jQuery\u9009\u62e9\u5668",permalink:"/summary/FrontEnd/JQuery-revese-selector"},next:{title:"Vue \u57fa\u78402",permalink:"/summary/FrontEnd/vue-grammer-two"}},c={},d=[{value:"v-model",id:"v-model",level:2},{value:"v-html \u3001v-pre",id:"v-html-v-pre",level:2},{value:"\u4e09\u5143\u8fd0\u7b97\u7b26\uff0c\u56db\u5219\u8fd0\u7b97",id:"\u4e09\u5143\u8fd0\u7b97\u7b26\u56db\u5219\u8fd0\u7b97",level:2},{value:"\u8fc7\u6ee4\u5668",id:"\u8fc7\u6ee4\u5668",level:2},{value:"v-bind",id:"v-bind",level:2},{value:"v-on",id:"v-on",level:2},{value:"computed\u5c5e\u6027\u7528\u6cd5",id:"computed\u5c5e\u6027\u7528\u6cd5",level:2},{value:"setter getter",id:"setter-getter",level:2},{value:"\u8ba1\u7b97\u7f13\u5b58",id:"\u8ba1\u7b97\u7f13\u5b58",level:2},{value:"\u4f7f\u7528 v-bind\u5207\u6362class\u5c5e\u6027",id:"\u4f7f\u7528-v-bind\u5207\u6362class\u5c5e\u6027",level:2},{value:"\u6570\u7ec4\u8bed\u6cd5",id:"\u6570\u7ec4\u8bed\u6cd5",level:2},{value:"\u7ed1\u5b9astyle",id:"\u7ed1\u5b9astyle",level:2},{value:"v-cloak",id:"v-cloak",level:2},{value:"v-once",id:"v-once",level:2},{value:"v-if v-else-if v-else",id:"v-if-v-else-if-v-else",level:2},{value:"template \u590d\u7528\u5143\u7d20",id:"template-\u590d\u7528\u5143\u7d20",level:2},{value:"v-show",id:"v-show",level:2},{value:"v-for",id:"v-for",level:2}];function p(n){const e={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:(0,s.jsx)("font",{color:"red",children:"\u672c\u6587\u6240\u6709\u5185\u5bb9\u5747\u6765\u81ea \u4e66\u7c4d\u300avue.js\u5b9e\u6218\u300b"})})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:(0,s.jsx)(e.a,{href:"https://github.com/whalefall541/vue-learn",children:(0,s.jsx)("font",{color:"red",children:"\u5b8c\u6574\u4ee3\u7801\u8bf7\u67e5\u770bgithub"})})})}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"v-model",children:"v-model"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-html",children:'<!DOCTYPE html>\n<html>\n<head>\n\t<meta charset="utf-8">\n\t<title>Hello world</title>\n</head>\n<body>\n\t<div id="app">\n\t\t<input type="text" v-model="name" placeholder="your name">\n\t\t<h1>Hello,{{ name }}</h1>\n\t</div>\n\t<script src="https://unpkg.com/vue/dist/vue.min.js"><\/script>\n\t<script>\n\t\tvar app = new Vue({\n\t\t\x3c!-- #app\u4e3a\u67d0\u4e2a\u5143\u7d20\u7684id --\x3e\n\t\t\tel:\'#app\',\n\t\t\tdata: {\n\t\t\t\tname: \'\'\n\t\t\t}\n\t\t})\n\t<\/script>\n</body>\n</html>\n'})}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsx)(e.p,{children:"\u4e3a\u7f29\u51cf\u7bc7\u5e45\uff0c\u672c\u6587\u540e\u9762\u6240\u6709\u4ee3\u7801 \u90fd\u53ea\u7ed9\u51fabody\u6807\u7b7e\u5185\u7684\u5185\u5bb9"}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"v-html-v-pre",children:"v-html \u3001v-pre"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-html",children:'<div id="app">\n    <span v-html="link"></span>\n</div>\n<script src="https://unpkg.com/vue/dist/vue.min.js"><\/script>\n<script>\n    var app = new Vue({\n        el:\'#app\',\n        data: {\n            link: \'<a href="#">\u8fd9\u662f\u4e00\u4e2a\u94fe\u63a5</a>\'\n        }\n    })\n<\/script>\n'})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-html",children:"<div id=\"app\">\n    <span v-pre>{{\u53ea\u4e3a\u663e\u793a\u53cc\u5927\u62ec\u53f7}}</span>\n</div>\n<script src=\"https://unpkg.com/vue/dist/vue.min.js\"><\/script>\n<script>\n    var app = new Vue({\n        el:'#app',\n        data: ''\n    })\n<\/script>\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u4e09\u5143\u8fd0\u7b97\u7b26\u56db\u5219\u8fd0\u7b97",children:"\u4e09\u5143\u8fd0\u7b97\u7b26\uff0c\u56db\u5219\u8fd0\u7b97"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-html",children:"<div id=\"app\">\n    \x3c!-- Vue .js \u53ea\u652f\u6301\u5355\u4e2a\u8868\u8fbe\u5f0f\uff0c\u4e0d\u652f\u6301\u8bed\u53e5\u548c\u6d41\u63a7\u5236 --\x3e\n    {{ number / 10 }}\n    {{ isOK ? 'Y' : 'N' }}\n    {{ text.split(',').reverse().join(',') }}\n</div>\n<script src=\"https://unpkg.com/vue/dist/vue.min.js\"><\/script>\n<script>\n    var app = new Vue({\n        el:'#app',\n        data: {\n            number: 100,\n            isOK: false,\n            text: '123,456'\n        }\n    })\n<\/script>\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u8fc7\u6ee4\u5668",children:"\u8fc7\u6ee4\u5668"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-html",children:"<div id=\"app\">\n    {{ date | formatDate}}\x3c!-- \u4f7f\u7528\u8fc7\u6ee4\u5668\u683c\u5f0f\u5316\u65f6\u95f4 --\x3e\n</div>\n<script src=\"https://unpkg.com/vue/dist/vue.min.js\"><\/script>\n<script>\n    var padDate = function(value) {\n        return value < 10 ? '0' + value : value \n    };\n    var app = new Vue({\n        el:'#app',\n        data: {\n            date : new Date()\n        },\n        filters: {\n            formatDate: function(value) {\n                var date = new Date(value);\n                var year = date.getFullYear();\n                var month = padDate(date.getMonth()+1);\n                var day = padDate(date.getDate());\n                var hours = padDate(date.getHours());\n                var minutes = padDate(date.getMinutes());\n                var seconds = padDate(date.getSeconds());\n                return year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds\n            }\n        },\n        mounted: function() {\n            var _this = this;// \u58f0\u660e\u4e00\u4e2a\u53d8\u91cf\u6307\u5411Vue\u5b9e\u4f8bthis,\u4fdd\u8bc1\u4f5c\u7528\u57df\u4e00\u81f4\n            this.timer = setInterval(function() {\n                _this.date = new Date(); // \u4fee\u6539\u6570\u636e\n            }, 1000);\n        },\n        beforeDestroy: function() {\n            if(this.timer) {\n                clearInterval(this.timer);\n            }\n        }\n    })\n<\/script>\n"})}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsx)(e.p,{children:"\u8fc7\u6ee4\u5668\u5e94\u5f53\u7528\u4e8e\u5904\u7406\u7b80\u5355\u7684\u6587\u672c\u8f6c\u6362\uff0c\u5982\u679c\u8981\u5b9e\u73b0\u66f4\u4e3a\u590d\u6742\u7684\u6570\u636e\u53d8\u6362\uff0c\u5e94\u8be5\u4f7f\u7528\u8ba1\u7b97\u5c5e\u6027"}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"v-bind",children:"v-bind"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-html",children:'<div id="app">\n    <a v-bind:href="url">\u94fe\u63a5</a>\n    <img v-bind:src="imgUrl">\n</div>\n<script src="https://unpkg.com/vue/dist/vue.min.js"><\/script>\n<script>\n    var app = new Vue({\n        el:\'#app\',\n        data: {\n            url : \'https://www.github.com\',\n            imgUrl : \'https://gitee.com/jack541/repo-for-pic-go/raw/master/img/image-20220102162032176.png\'\n        }\n    })\t\n<\/script>\n'})}),"\n",(0,s.jsx)(e.p,{children:"\u4ee5\u4e0b\u4e24\u53e5\u7b49\u6548\uff1a"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.code,{children:'<a v-bind:href="url">\u94fe\u63a5</a>'})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.code,{children:'<a :href="url">\u94fe\u63a5</a>'})}),"\n",(0,s.jsx)(e.h2,{id:"v-on",children:"v-on"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-html",children:'<div id="app">\n    <p v-if="show">\u8fd9\u662f\u4e00\u6bb5\u6587\u672c</p>\n    <button v-on:click="handleClose">\u70b9\u51fb\u9690\u85cf</button>\n</div>\n<script src="https://unpkg.com/vue/dist/vue.min.js"><\/script>\n<script>\n    var app = new Vue({\n        el:\'#app\',\n        data: {\n            show : true\n        },\n        methods: {\n            handleClose: function(){\n                if (this.show == true)\n                    this.show = false;\n                else \n                    this.show = true;\n            }\n        }\n    })\t\n<\/script>\n'})}),"\n",(0,s.jsx)(e.p,{children:"\u4ee5\u4e0b\u4e24\u53e5\u7b49\u6548\uff1a"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.code,{children:'<button v-on:click="handleClose">\u70b9\u51fb\u9690\u85cf</button>'})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.code,{children:'<button @click="handleClose">\u70b9\u51fb\u9690\u85cf</button>'})}),"\n",(0,s.jsx)(e.h2,{id:"computed\u5c5e\u6027\u7528\u6cd5",children:"computed\u5c5e\u6027\u7528\u6cd5"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-html",children:"<div id=\"app\">\n    {{ reversedText }}\n</div>\n<script src=\"https://unpkg.com/vue/dist/vue.min.js\"><\/script>\n<script>\n    var app = new Vue({\n        el:'#app',\n        data: {\n            text: '123,456'\n        },\n        computed: {\n            reversedText: function() {\n                return this.text.split(',').reverse().join(',');\n            }\n        }\n    })\t\n<\/script>\n"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-html",children:"<div id=\"app\">\n    \u603b\u4ef7:{{ prices }}\n</div>\n<script src=\"https://unpkg.com/vue/dist/vue.min.js\"><\/script>\n<script>\n    var app = new Vue({\n        el:'#app',\n        data: {\n            package1: [\n                {\n                    name: 'iPhone 13 128G',\n                    price: 5999,\n                    count: 3\n                },{\n                    name: 'iPad mini6',\n                    price: 3799,\n                    count: 5\n                }\n            ],\n            package2: [\n                {\n                    name: 'iPhone 13 pro 256G',\n                    price: 8999,\n                    count: 3\n                },{\n                    name: 'Mac Pro intel i9 1TB SDD 32G RAM',\n                    price: 21999,\n                    count: 1\n                }\n            ]\n        },\n        computed: {\n            prices : function() {\n                var prices = 0;\n                for (var i = 0; i < this.package1.length; i++) {\n                    prices += this.package1[i].price * this.package1[i].count;\n                }\n                for (var i = 0; i < this.package2.length; i++) {\n                    prices += this.package2[i].price * this.package2[i].count;\n                }\n                return prices;\n            }\n        }\n    })\t\n<\/script>\n"})}),"\n",(0,s.jsx)(e.h2,{id:"setter-getter",children:"setter getter"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-html",children:"<div id=\"app\">\n    \u59d3\u540d:{{ fullName }}\n</div>\n<script src=\"https://unpkg.com/vue/dist/vue.min.js\"><\/script>\n<script>\n    var app = new Vue({\n        el:'#app',\n        data: {\n            firstName: 'jack',\n            lastName: 'green'\n        },\n        computed: {\n            fullName: {\n                //getter \u7528\u4e8e\u8bfb\u53d6\n                get: function () {\n                    return this.firstName + ' ' + this.lastName;\n                },\n                // setter \u5199\u5165\u65f6\u51fa\u53d1\n                set: function (newValue) {\n                    var names = newValue.split(' ');\n                    this.firstName = names[0];\n                    this.lastName = names[names.length - 1];\n                } \n            }\n        }\n    })\t\n<\/script>\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u8ba1\u7b97\u7f13\u5b58",children:"\u8ba1\u7b97\u7f13\u5b58"}),"\n",(0,s.jsx)(e.p,{children:"\u8ba1\u7b97\u5c5e\u6027\u662f\u57fa\u4e8e\u5b83\u7684\u4f9d\u8d56\u7f13\u5b58\u7684\u3002 \u4e00\u4e2a\u8ba1\u7b97\u5c5e\u6027\u6240\u4f9d\u8d56\u7684\u6570\u636e\u53d1\u751f\u53d8\u5316\u65f6\uff0c\u5b83\u624d\u4f1a\u91cd\u65b0\u53d6\u503c\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-html",children:"<div id=\"app\">\n    \x3c!-- \u6ce8\u610f\uff0c\u8fd9\u91cc\u7684 reversedText\u662f\u65b9\u6cd5\uff0c\u6240\u4ee5\u8981\u5e26()--\x3e\n    {{ reversedText() }}\n</div>\n<script src=\"https://unpkg.com/vue/dist/vue.min.js\"><\/script>\n<script>\n    var app = new Vue({\n        el:'#app',\n        data: {\n            text: '123,456'\n        },\n        methods: {\n            reversedText: function() {\n                return this.text.split(',').reverse().join(',');\n            }\n        }\n    })\t\n<\/script>\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u4f7f\u7528-v-bind\u5207\u6362class\u5c5e\u6027",children:"\u4f7f\u7528 v-bind\u5207\u6362class\u5c5e\u6027"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-html",children:"<div id=\"app\">\n    <div :class=\"{ 'active': isActive, 'error': isError }\"></div>\n</div>\n<script src=\"https://unpkg.com/vue/dist/vue.min.js\"><\/script>\n<script>\n    var app = new Vue({\n        el:'#app',\n        data: {\n            isActive: true,\n            isError: false\n        }\n    })\t\n<\/script>\n"})}),"\n",(0,s.jsxs)(e.p,{children:["\u5f53",(0,s.jsx)(e.code,{children:":class "}),"\u7684\u8868\u8fbe\u5f0f\u8fc7\u957f\u6216\u903b\u8f91\u590d\u6742\u65f6\uff0c\u8fd8\u53ef\u4ee5\u7ed1\u5b9a\u4e00\u4e2a\u8ba1\u7b97\u5c5e\u6027\uff0c\u8fd9\u662f\u4e00\u79cd\u5f88\u53cb\u597d\u548c\u5e38\u89c1\u7684\u7528\u6cd5\uff0c\u4e00\u822c\u5f53\u6761\u4ef6\u591a\u4e8e\u4e24\u4e2a\u65f6\uff0c\u90fd\u53ef\u4ee5\u4f7f\u7528data \u6216computed\u3002"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-html",children:"<div id=\"app\">\n    AA<div :class=\"classes\"></div>\n</div>\n<script src=\"https://unpkg.com/vue/dist/vue.min.js\"><\/script>\n<script>\n    var app = new Vue({\n        el:'#app',\n        data: {\n            isActive: true,\n            error: null\n        },\n        computed: {\n            classes: function() {\n                return {\n                    active: this.isActive && !this.error,\n                    'text-fail': this.error && this.error.type === 'fail'\n                }\n            }\n        }\n    })\t\n<\/script>\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u6570\u7ec4\u8bed\u6cd5",children:"\u6570\u7ec4\u8bed\u6cd5"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"data \u5b9a\u4e49"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-html",children:"<div id=\"app\">\n    <div :class=\"[{ 'active' : isActive }, errorCls]\"></div>\n</div>\n<script src=\"https://unpkg.com/vue/dist/vue.min.js\"><\/script>\n<script>\n    var app = new Vue({\n        el:'#app',\n        data: {\n            isActive: true,\n            errorCls: 'error'\n        },\n    })\t\n<\/script>\n"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"computed\u5b9a\u4e49"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-html",children:"<div id=\"app\">\n    <button :class=\"classes\"></button>\n</div>\n<script src=\"https://unpkg.com/vue/dist/vue.min.js\"><\/script>\n<script>\n    var app = new Vue({\n        el:'#app',\n        data: {\n            size: 'large',\n            disabled: true\n        },\n        computed: {\n            classes: function() {\n                return [\n                    'btn',\n                    {\n                    // \u5b9a\u4e49btn\u5927\u5c0f\uff0c\u4e0d\u4e3a\u7a7a\u7684\u65f6\u5019\u5c31\u4e3asize\u7684\u5c3a\u5bf8\n                        ['btn-' + this.size]: this.size != '',\n                    // \u5b9a\u4e49button\u662f\u5426\u53ef\u7528\n                        ['btn-disabled']: this.disabled\n                    }\n                ]\n            }\n        }\n    })\t\n<\/script>\n"})}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsx)(e.p,{children:"NOTES: \u4f7f\u7528\u8ba1\u7b97\u5c5e\u6027\u7ed9\u5143\u7d20\u52a8\u6001\u8bbe\u7f6e\u7c7b\u540d\uff0c\u5728\u4e1a\u52a1\u4e2d\u7ecf\u5e38\u7528\u5230\uff0c\u5c24\u5176\u662f\u5728\u5199\u590d\u7528\u7684\u7ec4\u4ef6\u65f6\uff0c\u6240\u4ee5\u5728\u5f00\u53d1\u8fc7\u7a0b\u4e2d\uff0c\u5982\u679c\u8868\u8fbe\u5f0f\u8f83\u957f\u6216\u903b\u8f91\u590d\u6742\uff0c\u5e94\u8be5\u5c3d\u53ef\u80fd\u5730\u4f18\u5148\u4f7f\u7528\u8ba1\u7b97\u5c5e\u6027\u3002"}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u7ed1\u5b9astyle",children:"\u7ed1\u5b9astyle"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-html",children:'<div id="app">\n    <div :style="styles">\u6587\u672c</div>\n    \x3c!-- \u5e94\u5bf9\u591a\u4e2a\u5bf9\u8c61\u65f6\u53ef\u4ee5\u4f7f\u7528\u6570\u7ec4\u8bed\u6cd5 styleA\u76f8\u5f53\u4e8e\u4e00\u4e2adata\u4e2d\u7684styles\u5143\u7d20 --\x3e\n    \x3c!-- <div :style="[styleA, styleB] " >\u6587\u672c</d iv> --\x3e\n</div>\n<script src="https://unpkg.com/vue/dist/vue.min.js"><\/script>\n<script>\n    var app = new Vue({\n        el:\'#app\',\n        data: {\n            styles :{\n                color: \'red\',\n                fontSize: 14+\'px\'\n            }\n        }\n    })\t\n<\/script>\n'})}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsx)(e.p,{children:"\u5728\u5b9e\u9645\u4e1a\u52a1\u4e2d\uff0c\uff1a style \u7684\u6570\u7ec4\u8bed\u6cd5\u5e76\u4e0d\u5e38\u7528\uff0c\u56e0\u4e3a\u5f80\u5f80\u53ef\u4ee5\u5199\u5728\u4e00\u4e2a\u5bf9\u8c61\u91cc\u9762\uff1b\u800c\u8f83\u4e3a\u5e38\u7528\u7684\u5e94\u5f53\u662f\u8ba1\u7b97\u5c5e\u6027\u3002"}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"v-cloak",children:"v-cloak"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-html",children:"<div id=\"app\" v-cloak>\n    {{ message }}\n</div>\n<script src=\"https://unpkg.com/vue/dist/vue.min.js\"><\/script>\n<script>\n    var app = new Vue({\n        el:'#app',\n        data: {\n            message: '\u9875\u9762\u6b63\u5728\u52a0\u8f7d\u4e2d\u2026\u2026'\n        }\n    });\n\n<\/script>\n"})}),"\n",(0,s.jsx)(e.h2,{id:"v-once",children:"v-once"}),"\n",(0,s.jsx)(e.p,{children:"\u4f5c\u7528\u662f\u5b9a\u4e49\u5b83\u7684\u5143\u7d20\u6216\u7ec4\u4ef6\u53ea\u6e32\u67d3\u4e00\u6b21\uff0c\u5305\u62ec\u5143\u7d20\u6216\u7ec4\u4ef6\u7684\u6240\u6709\u5b50\u8282\u70b9\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-html",children:"<div id=\"app\">\n    <span v-once> {{ message }}</span>\n    <div v-once>\n        <span> {{ message }} </span>\n    </div>\n</div>\n<script src=\"https://unpkg.com/vue/dist/vue.min.js\"><\/script>\n<script>\n    var app = new Vue({\n        el:'#app',\n        data: {\n            message: '\u8fd9\u662f\u4e00\u6bb5\u6587\u672c'\n        }\n    })\n<\/script>\n"})}),"\n",(0,s.jsx)(e.h2,{id:"v-if-v-else-if-v-else",children:"v-if v-else-if v-else"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-html",children:'<div id="app">\n    <p v-if="status === 1"> \u5f53status\u4e3a1\u65f6\u663e\u793a\u8be5\u884c</p>\n    <p v-else-if="status === 2"> \u5f53status\u4e3a2\u65f6\u663e\u793a\u8be5\u884c</p>\n    <p v-else>\u5426\u5219\u663e\u793a\u8be5\u884c</p>\n</div>\n<script src="https://unpkg.com/vue/dist/vue.min.js"><\/script>\n<script>\n    var app = new Vue({\n        el:\'#app\',\n        data: {\n            status: 1\n        }\n    })\n<\/script>\n'})}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsx)(e.p,{children:"v-else-if \u8981\u7d27\u8ddfv-if, v-else \u8981\u7d27\u8ddfv-else-if \u6216v-if, \u8868\u8fbe\u5f0f\u7684\u503c\u4e3a\u771f\u65f6\uff0c\u5f53\u524d\u5143\u7d20\uff0f\u7ec4\u4ef6\u53ca\u6240\n\u6709\u5b50\u8282\u70b9\u5c06\u88ab\u6e32\u67d3\uff0c\u4e3a\u5047\u65f6\u88ab\u79fb\u9664"}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"template-\u590d\u7528\u5143\u7d20",children:"template \u590d\u7528\u5143\u7d20"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-html",children:"<div id=\"app\">\n    <template v-if=\"type === 'name'\">\n        <label>\u7528\u6237\u540d\uff1a</label>\n        <input placeholder=\"\u8f93\u5165\u7528\u6237\u540d\">\n    </template>\n    <template v-else>\n        <label>\u90ae\u7bb1\uff1a</label>\n        <input placeholder=\"\u8f93\u5165\u90ae\u7bb1\">\n    </template> \n    <button @click=\"handleToggleClick\">\u5207\u6362\u8f93\u5165\u7c7b\u578b</button>\n</div>\n<script src=\"https://unpkg.com/vue/dist/vue.min.js\"><\/script>\n<script>\n    var app = new Vue({\n        el:'#app',\n        data: {\n            type: 'name'\n        },\n        methods: {\n            handleToggleClick: function () {\n                this.type = this.type === 'name' ? 'mail' : 'name';\n            }\n        }\n    })\n<\/script>\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u5982\u679c\u4e0d\u5e0c\u671b\u590d\u7528input\u6846\uff0c\u53ef\u4ee5\u4f7f\u7528Vue.js \u63d0\u4f9b\u7684key \u5c5e\u6027\uff0c\u5b83\u53ef\u4ee5\u8ba9\u4f60\u81ea\u5df1\u51b3\u5b9a\u662f\u5426\u8981\u590d\u7528\u5143\u7d20\uff0c key \u7684\u503c\u5fc5\u987b\u662f\u552f\u4e00\u7684\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-html",children:'<template v-if="type === \'name\'">\n    <label>\u7528\u6237\u540d\uff1a</label>\n    <input placeholder="\u8f93\u5165\u7528\u6237\u540d" key="name-input">\n</template>\n<template v-else>\n    <label>\u90ae\u7bb1\uff1a</label>\n    <input placeholder="\u8f93\u5165\u90ae\u7bb1" key="mail-input">\n</template>\n'})}),"\n",(0,s.jsx)(e.h2,{id:"v-show",children:"v-show"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-html",children:'<div id="app">\n    <p v-show="status === 1">\u5f53status\u4e3a1\u65f6\u663e\u793a\u8be5\u884c</p>\n</div>\n<script src="https://unpkg.com/vue/dist/vue.min.js"><\/script>\n<script>\n    var app = new Vue({\n        el:\'#app\',\n        data: {\n            status: 2\n        }\n    })\n<\/script>\n'})}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsxs)(e.p,{children:["v-show \u4e0d\u80fd\u5728",(0,s.jsx)(e.code,{children:"<template>"}),"\u4e0a\u4f7f\u7528\u3002"]}),"\n",(0,s.jsxs)(e.p,{children:["\u82e5\u8868\u8fbe\u5f0f",(0,s.jsx)(e.code,{children:"v-if"}),"\u521d\u59cb\u503c\u4e3afalse, \u5219\u4e00\u5f00\u59cb\u5143\u7d20\uff0f\u7ec4\u4ef6\u5e76\u4e0d\u4f1a\u6e32\u67d3\uff0c\u53ea\u6709\u5f53\u6761\u4ef6\u7b2c\u4e00\u6b21\u53d8\u4e3a\u771f\u65f6\u624d\u5f00\u59cb\u7f16\u8bd1\u3002\u800c",(0,s.jsx)(e.code,{children:"v-show "}),"\u53ea\u662f\u7b80\u5355\u7684CSS\u5c5e\u6027\u5207\u6362\uff0c\u65e0\u8bba\u6761\u4ef6\u771f\u4e0e\u5426\uff0c\u90fd\u4f1a\u88ab\u7f16\u8bd1\u3002\u76f8\u6bd4\u4e4b\u4e0b\uff0c ",(0,s.jsx)(e.code,{children:"v-if "}),"\u66f4\u9002\u5408\u6761\u4ef6\u4e0d\u7ecf\u5e38\u6539\u53d8\u7684\u573a\u666f\uff0c\u56e0\u4e3a\u5b83\u5207\u6362\u5f00\u9500\u76f8\u5bf9\u8f83\u5927\uff0c \u800cv-show \u9002\u7528\u5343\u9891\u7e41\u5207\u6362\u6761\u4ef6\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"v-for",children:"v-for"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-html",children:"<div id=\"app\">\n    <ul>\n        <li v-for=\"book in books\">{{ book.name }}</li>\n        \x3c!-- <li v-for=\"book of books\">{{ book.name }}</li> --\x3e\n    </ul>\n</div>\n<script src=\"https://unpkg.com/vue/dist/vue.min.js\"><\/script>\n<script>\n    new Vue({\n        el: '#app',\n        data: {\n            books: [\n                {name : '\u300aVue.js\u5b9e\u6218\u300b'},\n                {name : '\u300aJavaScript \u8bed\u8a00\u7cbe\u7cb9\u300b'},\n                {name : '\u300aJavaScript \u9ad8\u7ea7\u7a0b\u5e8f\u8bbe\u8ba1\u300b'}\n            ]\n        }\n    })\n<\/script>\n\n"})}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsxs)(e.p,{children:["\u53c2\u8003\u6587\u732e\uff1a",(0,s.jsx)(e.strong,{children:(0,s.jsx)("font",{color:"red",children:"\u4e66\u7c4d\u300avue.js\u5b9e\u6218\u300b"})})]}),"\n"]}),"\n",(0,s.jsx)(e.admonition,{title:"\u534f\u8bae",type:"tip",children:(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["\u672c\u4f5c\u54c1\u4ee3\u7801\u90e8\u5206\u91c7\u7528 ",(0,s.jsx)(e.a,{href:"https://www.apache.org/licenses/LICENSE-2.0",children:"Apache 2.0\u534f\u8bae"}),"\u8fdb\u884c\u8bb8\u53ef\u3002\u9075\u5faa\u8bb8\u53ef\u7684\u524d\u63d0\u4e0b\uff0c\u4f60\u53ef\u4ee5\u81ea\u7531\u5730\u5bf9\u4ee3\u7801\u8fdb\u884c\u4fee\u6539\uff0c\u518d\u53d1\u5e03\uff0c\u53ef\u4ee5\u5c06\u4ee3\u7801\u7528\u4f5c\u5546\u4e1a\u7528\u9014\u3002\u4f46\u8981\u6c42\u4f60\uff1a"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"\u7f72\u540d"}),"\uff1a\u5728\u539f\u6709\u4ee3\u7801\u548c\u884d\u751f\u4ee3\u7801\u4e2d\uff0c\u4fdd\u7559\u539f\u4f5c\u8005\u7f72\u540d\u53ca\u4ee3\u7801\u6765\u6e90\u4fe1\u606f\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"\u4fdd\u7559\u8bb8\u53ef\u8bc1"}),"\uff1a\u5728\u539f\u6709\u4ee3\u7801\u548c\u884d\u751f\u4ee3\u7801\u4e2d\uff0c\u4fdd\u7559Apache 2.0\u534f\u8bae\u6587\u4ef6\u3002"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["\u672c\u4f5c\u54c1\u6587\u6863\u90e8\u5206\u91c7\u7528",(0,s.jsx)(e.a,{href:"http://creativecommons.org/licenses/by/4.0/",children:"\u77e5\u8bc6\u5171\u4eab\u7f72\u540d 4.0 \u56fd\u9645\u8bb8\u53ef\u534f\u8bae"}),"\u8fdb\u884c\u8bb8\u53ef\u3002 \u9075\u5faa\u8bb8\u53ef\u7684\u524d\u63d0\u4e0b\uff0c\u4f60\u53ef\u4ee5\u81ea\u7531\u5730\u5171\u4eab\uff0c\u5305\u62ec\u5728\u4efb\u4f55\u5a92\u4ecb\u4e0a\u4ee5\u4efb\u4f55\u5f62\u5f0f\u590d\u5236\u3001\u53d1\u884c\u672c\u4f5c\u54c1\uff0c\u4ea6\u53ef\u4ee5\u81ea\u7531\u5730\u6f14\u7ece\u3001\u4fee\u6539\u3001\u8f6c\u6362\u6216\u4ee5\u672c\u4f5c\u54c1\u4e3a\u57fa\u7840\u8fdb\u884c\u4e8c\u6b21\u521b\u4f5c\u3002\u4f46\u8981\u6c42\u4f60\uff1a"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"\u7f72\u540d"}),"\uff1a\u5e94\u5728\u4f7f\u7528\u672c\u6587\u6863\u7684\u5168\u90e8\u6216\u90e8\u5206\u5185\u5bb9\u65f6\u5019\uff0c\u6ce8\u660e\u539f\u4f5c\u8005\u53ca\u6765\u6e90\u4fe1\u606f\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"\u975e\u5546\u4e1a\u6027\u4f7f\u7528"}),"\uff1a\u4e0d\u5f97\u7528\u4e8e\u5546\u4e1a\u51fa\u7248\u6216\u5176\u4ed6\u4efb\u4f55\u5e26\u6709\u5546\u4e1a\u6027\u8d28\u7684\u884c\u4e3a\u3002\u5982\u9700\u5546\u4e1a\u4f7f\u7528\uff0c\u8bf7\u8054\u7cfb\u4f5c\u8005\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"\u76f8\u540c\u65b9\u5f0f\u5171\u4eab\u7684\u6761\u4ef6"}),"\uff1a\u5728\u672c\u6587\u6863\u57fa\u7840\u4e0a\u6f14\u7ece\u3001\u4fee\u6539\u7684\u4f5c\u54c1\uff0c\u5e94\u5f53\u7ee7\u7eed\u4ee5\u77e5\u8bc6\u5171\u4eab\u7f72\u540d 4.0\u56fd\u9645\u8bb8\u53ef\u534f\u8bae\u8fdb\u884c\u8bb8\u53ef\u3002"]}),"\n"]}),"\n"]}),"\n"]})})]})}function o(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(p,{...n})}):p(n)}},1151:(n,e,t)=>{t.d(e,{Z:()=>l,a:()=>a});var s=t(7294);const i={},r=s.createContext(i);function a(n){const e=s.useContext(r);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:a(n.components),s.createElement(r.Provider,{value:e},n.children)}}}]);