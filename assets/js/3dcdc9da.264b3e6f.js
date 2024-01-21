"use strict";(self.webpackChunksummary=self.webpackChunksummary||[]).push([[3958],{8187:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>o});var i=t(1527),s=t(8672);const r={title:"Vue \u57fa\u78402",sidebar_label:"Vue \u57fa\u78402",sidebar_position:3},a=void 0,l={id:"Frontend/vue-grammer-two",title:"Vue \u57fa\u78402",description:"\u672c\u6587\u6240\u6709\u5185\u5bb9\u5747\u6765\u81ea \u4e66\u7c4d\u300avue.js\u5b9e\u6218\u300b",source:"@site/docs/02-Frontend/vue-grammer-two.mdx",sourceDirName:"02-Frontend",slug:"/Frontend/vue-grammer-two",permalink:"/summary/Frontend/vue-grammer-two",draft:!1,unlisted:!1,editUrl:"https://github.com/Halcyon666/summary/edit/main/docs/02-Frontend/vue-grammer-two.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Vue \u57fa\u78402",sidebar_label:"Vue \u57fa\u78402",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Vue \u57fa\u78401",permalink:"/summary/Frontend/vue-grammer-one"},next:{title:"Docusaurus github page",permalink:"/summary/Frontend/github-page-blog"}},c={},o=[{value:"v- for \u5176\u4ed6\u7528\u6cd5",id:"v--for-\u5176\u4ed6\u7528\u6cd5",level:2},{value:"filter() push()\u65b9\u6cd5\u7684\u4f7f\u7528",id:"filter-push\u65b9\u6cd5\u7684\u4f7f\u7528",level:2},{value:"computed\u4e2d\u7684 filter sort",id:"computed\u4e2d\u7684-filter-sort",level:2},{value:"click",id:"click",level:2},{value:"<code>$event</code>",id:"event",level:2},{value:"\u4fee\u9970\u7b26<code>@click.stop.prevent</code>",id:"\u4fee\u9970\u7b26clickstopprevent",level:2},{value:"textarea v-model",id:"textarea-v-model",level:2},{value:"@input",id:"input",level:2},{value:"v-model \u5355\u9009\u4e92\u65a5\u6848\u4f8b",id:"v-model-\u5355\u9009\u4e92\u65a5\u6848\u4f8b",level:3}];function p(n){const e={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:(0,i.jsx)("font",{color:"red",children:"\u672c\u6587\u6240\u6709\u5185\u5bb9\u5747\u6765\u81ea \u4e66\u7c4d\u300avue.js\u5b9e\u6218\u300b"})})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:(0,i.jsx)(e.a,{href:"https://github.com/whalefall541/vue-learn",children:(0,i.jsx)("font",{color:"red",children:"\u5b8c\u6574\u4ee3\u7801\u8bf7\u67e5\u770bgithub"})})})}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"v--for-\u5176\u4ed6\u7528\u6cd5",children:"v- for \u5176\u4ed6\u7528\u6cd5"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u5217\u8868\u5185\u5bb9\u6dfb\u52a0\u7d22\u5f15"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-html",children:"<div id=\"app\">\n    <ul>\n        <li v-for=\"(book, index) in books\">{{ index }} - {{ book.name }}</li>\n    </ul>\n</div>\n<script src=\"https://unpkg.com/vue/dist/vue.min.js\"><\/script>\n<script>\n    new Vue({\n        el: '#app',\n        data: {\n            books: [\n                {name : '\u300aVue.js\u5b9e\u6218\u300b'},\n                {name : '\u300aJavaScript \u8bed\u8a00\u7cbe\u7cb9\u300b'},\n                {name : '\u300aJavaScript \u9ad8\u7ea7\u7a0b\u5e8f\u8bbe\u8ba1\u300b'}\n            ]\n        }\n    })\n<\/script>\n"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7528\u4e8etemplate\u4e0a"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-html",children:"<div id=\"app\">\n    <ul>\n        <template v-for=\"book in books\">\n            <li>\u4e66\u540d\uff1a{{ book.name }}</li>\n            <li>\u4f5c\u8005\uff1a{{ book.author }}</li>\n        </template>\n    </ul>\n</div>\n<script src=\"https://unpkg.com/vue/dist/vue.min.js\"><\/script>\n<script>\n    new Vue({\n        el: '#app',\n        data: {\n            books: [\n                {name : '\u300aVue.js\u5b9e\u6218\u300b', author: '\u6881\u704f'},\n                {name : '\u300aJavaScript \u8bed\u8a00\u7cbe\u7cb9\u300b', author: 'Douglas Crockford'},\n                {name : '\u300aJavaScript \u9ad8\u7ea7\u7a0b\u5e8f\u8bbe\u8ba1\u300b', author: 'Nicholas C.Zakas'}\n            ]\n        }\n    })\n<\/script>\n"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7528\u4e8e\u904d\u5386\u5bf9\u8c61\u7684\u5c5e\u6027"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"<div id=\"app\">\n    <span v-for=\"value in user\"> {{ value }}</span>\n</div>\n<script src=\"https://unpkg.com/vue/dist/vue.min.js\"><\/script>\n<script>\n    new Vue({\n        el: '#app',\n        data: {\n            user: {\n                name: 'Aresn',\n                gender: 'male',\n                age: 26\n            }\n        }\n    })\n<\/script>\n"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u904d\u5386\u5bf9\u8c61\u5c5e\u6027\u65f6 \u4f7f\u7528\u952e\u540d\u548c\u7d22\u5f15"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-html",children:"<div id=\"app\">\n    <ul>\n        <li v-for=\"(value, key ,index) in user\">\n            {{ index }} - {{ key }} : {{ value }}\n        </li>\n    </ul>\n</div>\n<script src=\"https://unpkg.com/vue/dist/vue.min.js\"><\/script>\n<script>\n    new Vue({\n        el: '#app',\n        data: {\n            user: {\n                name: 'Aresn',\n                gender: 'male',\n                age: 26\n            }\n        }\n    })\n<\/script>\n"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u904d\u5386\u6574\u6570"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-html",children:'<div id="app">\n    <ul>\n        <span v-for="n in 10"> {{ n }}</span>\n    </ul>\n</div>\n<script src="https://unpkg.com/vue/dist/vue.min.js"><\/script>\n<script>\n    new Vue({\n        el: \'#app\'\n    })\n<\/script>\n'})}),"\n",(0,i.jsx)(e.h2,{id:"filter-push\u65b9\u6cd5\u7684\u4f7f\u7528",children:"filter() push()\u65b9\u6cd5\u7684\u4f7f\u7528"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-html",children:"<div id=\"app\">\n    <ul>\n        <template v-for=\"book in books\">\n            <li>\u4e66\u540d\uff1a{{ book.name }}</li>\n            <li>\u4f5c\u8005\uff1a{{ book.author }}</li>\n        </template>\n    </ul>\n</div>\n<script src=\"https://unpkg.com/vue/dist/vue.min.js\"><\/script>\n<script>\n    var app = new Vue({\n        el: '#app',\n        data: {\n            books: [\n                {name : '\u300aVue.js\u5b9e\u6218\u300b', author: '\u6881\u704f'},\n                {name : '\u300aJavaScript \u8bed\u8a00\u7cbe\u7cb9\u300b', author: 'Douglas Crockford'},\n                {name : '\u300aJavaScript \u9ad8\u7ea7\u7a0b\u5e8f\u8bbe\u8ba1\u300b', author: 'Nicholas C.Zakas'}\n            ]\n        }\n    });\n    app.books.push({\n        name: '\u300aCSS \u63ed\u79d8\u300b',\n        author:'[\u5e0c] Lea Verou'\n    });\n    app.books = app.books.filter( function (item) {\n        return item.name.match(/JavaScript/);\n    });\n<\/script>\n"})}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsx)(e.p,{children:"Vue \u5305\u542b\u4e86\u4e00\u7ec4\u89c2\u5bdf\u6570\u7ec4\u53d8\u5f02\u7684\u65b9\u6cd5\uff0c\u4f7f\u7528\u5b83\u4eec\u6539\u53d8\u6570\u7ec4\u4e5f\u4f1a\u89e6\u53d1\u89c6\u56fe\u66f4\u65b0\uff1a"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"\u8fd9\u4e9b\u65b9\u6cd5\u4f1a\u6539\u53d8\u89c6\u56fe"})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.code,{children:"push pop shift unshift splice sort reverse"})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"\u8fd9\u4e9b\u65b9\u6cd5\u4e0d\u4f1a\u6539\u53d8\u89c6\u56fe"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.code,{children:"filter concat slice "})}),"\n",(0,i.jsxs)(e.li,{children:["\u901a\u8fc7\u7d22\u5f15\u76f4\u63a5\u8bbe\u7f6e\u9879 ",(0,i.jsx)(e.code,{children:"app.books[3]={...}"})]}),"\n",(0,i.jsxs)(e.li,{children:["\u4fee\u6539\u6570\u7ec4\u957f\u5ea6 ",(0,i.jsx)(e.code,{children:"app.books.length=1"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"Vue set\u65b9\u6cd5\u6539\u53d8\u6570\u7ec4\u5143\u7d20\u7684\u5185\u5bb9"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-html",children:"<div id=\"app\">\n    <ul>\n        <template v-for=\"book in books\">\n            <li>\u4e66\u540d\uff1a{{ book.name }}</li>\n            <li>\u4f5c\u8005\uff1a{{ book.author }}</li>\n        </template>\n    </ul>\n</div>\n<script src=\"https://unpkg.com/vue/dist/vue.min.js\"><\/script>\n<script>\n    var app = new Vue({\n        el: '#app',\n        data: {\n            books: [\n                {name : '\u300aVue.js\u5b9e\u6218\u300b', author: '\u6881\u704f'},\n                {name : '\u300aJavaScript \u8bed\u8a00\u7cbe\u7cb9\u300b', author: 'Douglas Crockford'},\n                {name : '\u300aJavaScript \u9ad8\u7ea7\u7a0b\u5e8f\u8bbe\u8ba1\u300b', author: 'Nicholas C.Zakas'}\n            ]\n        }\n    });\n\n    // Vue.set(app.books, 3, {\n    // \tname: '\u300aCSS \u63ed\u79d8\u300b',\n    // \tauthor: '[\u5e0c] Lea Verou'\n    // });\n\n    // app.$set(app.books, 3, {\n    // \tname: '\u300aCSS \u63ed\u79d8\u300b',\n    // \tauthor: '[\u5e0c] Lea Verou'\n    // });\n\n    // splice(index, len, [item])\n    // app.books.splice(3, 1, {\n    // \tname: '\u300aCSS \u63ed\u79d8\u300b',\n    // \tauthor: '[\u5e0c] Lea Verou'\n    // });\n\n    app.books.splice(1);\n<\/script>\n"})}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsx)(e.p,{children:"\u5982\u679c\u662f\u5728webpack \u4e2d\u4f7f\u7528\u7ec4\u4ef6\u5316\u7684\u65b9\u5f0f\uff08\u8fdb\u9636\u7bc7\u4e2d\u5c06\u4ecb\u7ecd\uff09\uff0c\u9ed8\u8ba4\u662f\u6ca1\u6709\u5bfc\u5165Vue \u7684\uff0c\u8fd9\u65f6\n\u53ef\u4ee5\u4f7f\u7528$set"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-html",children:"this.$set(app.books, 3, {\n    name: '\u300aCSS \u63ed\u79d8\u300b',\n    author: '[\u5e0c] Lea Verou'\n});\n"})}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"computed\u4e2d\u7684-filter-sort",children:"computed\u4e2d\u7684 filter sort"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-html",children:"<div id=\"app\">\n    <ul>\n        <template v-for=\"book in filterBooks\">\n            <li>\u4e66\u540d\uff1a{{ book.name }}</li>\n            <li>\u4f5c\u8005\uff1a{{ book.author }}</li>\n        </template>\n    </ul>\n\n    <ul>\n        <template v-for=\"book in sortedBooks\">\n            <li>\u4e66\u540d\uff1a{{ book.name }}</li>\n            <li>\u4f5c\u8005\uff1a{{ book.author }}</li>\n        </template>\n    </ul>\n</div>\n<script src=\"https://unpkg.com/vue/dist/vue.min.js\"><\/script>\n<script>\n    var app = new Vue({\n        el: '#app',\n        data: {\n            books: [\n                {name : '\u300aVue.js\u5b9e\u6218\u300b', author: '\u6881\u704f'},\n                {name : '\u300aJavaScript \u8bed\u8a00\u7cbe\u7cb9\u300b', author: 'Douglas Crockford'},\n                {name : '\u300aJavaScript \u9ad8\u7ea7\u7a0b\u5e8f\u8bbe\u8ba1\u300b', author: 'Nicholas C.Zakas'}\n            ]\n        },\n        computed: {\n            filterBooks: function (){\n                return this.books.filter(function (book) {\n                    return book.name.match(/JavaScript/);\n                });\n            },\n            // a.name.length - b.name.length \u4ece\u77ed\u5230\u957f\n            sortedBooks: function(){\n                return this.books.sort(function(a, b) {\n                    return b.name.length - a.name.length;\n                });\t\n            }\n        }\n    });\n\n<\/script>\n"})}),"\n",(0,i.jsx)(e.h2,{id:"click",children:"click"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-html",children:'<div id="app">\n    \u70b9\u51fb\u6b21\u6570:{{ counter }}\n    <button @click="counter++">\u52a0\u4e00</button>\n</div>\n<script src="https://unpkg.com/vue/dist/vue.min.js"><\/script>\n<script>\n    var app = new Vue({\n        el: \'#app\',\n        data: {\n            counter: 0\n        }\n    });\n\n<\/script>\n\n'})}),"\n",(0,i.jsx)(e.h2,{id:"event",children:(0,i.jsx)(e.code,{children:"$event"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-html",children:'<div id="app">\n    <a href="http://www.apple.com" @click="handleClick(\'forbid open\', $event)">\u6253\u5f00\u94fe\u63a5</a>\n</div>\n<script src="https://unpkg.com/vue/dist/vue.min.js"><\/script>\n<script>\n    var app = new Vue({\n        el: \'#app\',\n        methods: {\n            handleClick: function (message, event) {\n                event.preventDefault();\n                window.alert(message);\n            }\n        }\n    });\n\n<\/script>\n'})}),"\n",(0,i.jsxs)(e.h2,{id:"\u4fee\u9970\u7b26clickstopprevent",children:["\u4fee\u9970\u7b26",(0,i.jsx)(e.code,{children:"@click.stop.prevent"})]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-html",children:'<div id="app">\n    \x3c!-- stop\u963b\u6b62\u5355\u51fb\u4e8b\u4ef6\u5192\u6ce1 --\x3e\n    <a href="http://www.apple.com" @click.prevent.stop="handle">\u6253\u5f00\u94fe\u63a5</a>\n    <button @submit.prevent="handle">\u63d0\u4ea4\u8868\u5355</button>\n</div>\n<script src="https://unpkg.com/vue/dist/vue.min.js"><\/script>\n<script>\n    var app = new Vue({\n        el: \'#app\',\n        methods: {\n            handle: function () {\n            }\n        }\n    });\n\n<\/script>\n'})}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-html",children:'\x3c!-- \u6dfb\u52a0\u4e8b\u4ef6\u4fa6\u542c\u5668\u65f6\u4f7f\u7528\u4e8b\u4ef6\u6355\u83b7\u6a21\u5f0f--\x3e\n<div @click.capture="handle"> ... </div>\n\x3c!--  \u53ea\u5f53\u4e8b\u4ef6\u5728\u8be5\u5143\u7d20\u672c\u8eab\uff08\u800c\u4e0d\u662f\u5b50\u5143\u7d20\uff09\u89e6\u53d1\u65f6\u89e6\u53d1\u56de\u8c03--\x3e\n<div @click.se1f="handle"> ... </div>\n\x3c!-- \u53ea\u89e6\u53d1\u4e00\u6b21\uff0c\u7ec4\u4ef6\u540c\u6837\u9002\u7528--\x3e\n<div @click.once="handle"> ... </div>\n\x3c!-- \u53ea\u6709\u5728keyCode \u662f13 \u65f6\u8c03\u7528vm.submit() --\x3e\n<input @keyup.13="submit">\n'})}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{src:"https://s2.loli.net/2023/07/15/5QHql3KiCsp4h9D.png",alt:"image-20220104220828923"})}),"\n",(0,i.jsx)(e.h2,{id:"textarea-v-model",children:"textarea v-model"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-html",children:'<div id="app">\n    \x3c!-- \u6b64\u65f6\u8f93\u5165\u662f\u62fc\u97f3\u7684\u5b57\u6bcd\u4e0d\u4f1a\u89e6\u53d1\u66f4\u65b0 --\x3e\n    <textarea v-model="text" placeholder="\u8f93\u5165...">aa</textarea>\n    <p>\u8f93\u5165\u7684\u5185\u5bb9\u662f\uff1a</p>\n    \x3c!-- https://www.cnblogs.com/qianlegeqian/p/3987235.html white-space pre\u53c2\u8003\u6587\u7ae0 --\x3e\n    <p style="white-space: pre">{{ text }}</p>\n</div>\n<script src="https://unpkg.com/vue/dist/vue.min.js"><\/script>\n<script>\n    var app = new Vue({\n        el:\'#app\',\n        data: {\n            text: \'\'\n        }\n    })\n<\/script>\n'})}),"\n",(0,i.jsx)(e.h2,{id:"input",children:"@input"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-html",children:'<div id="app">\n    \x3c!-- @input\u53ef\u4ee5\u89e6\u53d1\u5b9e\u65f6\u66f4\u65b0 --\x3e\n    <input type="text" @input="handleInput" placeholder="\u8f93\u5165...">\n    <p>\u8f93\u5165\u7684\u5185\u5bb9\u662f\uff1a{{ message }}</p>\n</div>\n<script src="https://unpkg.com/vue/dist/vue.min.js"><\/script>\n<script>\n    var app = new Vue({\n        el:\'#app\',\n        data: {\n            message: \'\'\n        },\n        methods: {\n            handleInput: function (e) {\n                this.message = e.target.value;\n            }\n        }\n    })\n<\/script>\n'})}),"\n",(0,i.jsx)(e.h3,{id:"v-model-\u5355\u9009\u4e92\u65a5\u6848\u4f8b",children:"v-model \u5355\u9009\u4e92\u65a5\u6848\u4f8b"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-html",children:'<div id="app">\n    <input type="radio" v-model="picked" value="html" id="html">\n    <label for="html">HTML</label>\n    <br>\n    <input type="radio" v-model="picked" value="js" id="js">\n    <label for="js">JavaScript</label>\n    <br>\n    <input type="radio" v-model="picked" value="css" id="css">\n    <label for="css">CSS</label>\n    <br>\n    <p>\u9009\u62e9\u7684\u9009\u9879\u662f\uff1a{{ picked }}</p>\n</div>\n<script src="https://unpkg.com/vue/dist/vue.min.js"><\/script>\n<script>\n    var app = new Vue({\n        el:\'#app\',\n        data: {\n            picked: js\n        }\n    })\n<\/script>\n'})}),"\n",(0,i.jsx)(e.h3,{id:""}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsxs)(e.p,{children:["\u53c2\u8003\u6587\u732e\uff1a",(0,i.jsx)(e.strong,{children:(0,i.jsx)("font",{color:"red",children:"\u4e66\u7c4d\u300avue.js\u5b9e\u6218\u300b"})})]}),"\n"]})]})}function d(n={}){const{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(p,{...n})}):p(n)}},8672:(n,e,t)=>{t.d(e,{Z:()=>l,a:()=>a});var i=t(959);const s={},r=i.createContext(s);function a(n){const e=i.useContext(r);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:a(n.components),i.createElement(r.Provider,{value:e},n.children)}}}]);