"use strict";(self.webpackChunksummary=self.webpackChunksummary||[]).push([[1468],{6461:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>o,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var s=r(1527),t=r(8672);const a={title:"mysql\u5b58\u50a8\u8fc7\u7a0b",sidebar_label:"mysql\u5b58\u50a8\u8fc7\u7a0b",sidebar_position:2},i=void 0,c={id:"Java/DateBase/mysql Procedure",title:"mysql\u5b58\u50a8\u8fc7\u7a0b",description:"\u5efa\u8868SQL",source:"@site/docs/01-Java/06-DateBase/mysql Procedure.mdx",sourceDirName:"01-Java/06-DateBase",slug:"/Java/DateBase/mysql Procedure",permalink:"/Java/DateBase/mysql Procedure",draft:!1,unlisted:!1,editUrl:"https://github.com/Halcyon666/summary/edit/main/docs/01-Java/06-DateBase/mysql Procedure.mdx",tags:[],version:"current",lastUpdatedAt:1706843147,formattedLastUpdatedAt:"2024\u5e742\u67082\u65e5",sidebarPosition:2,frontMatter:{title:"mysql\u5b58\u50a8\u8fc7\u7a0b",sidebar_label:"mysql\u5b58\u50a8\u8fc7\u7a0b",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Oracle\u5b58\u50a8\u8fc7\u7a0b",permalink:"/Java/DateBase/Oracle Procedure"},next:{title:"\u4e8b\u52a1\u5904\u7406",permalink:"/Java/DateBase/Transaction Process"}},l={},u=[{value:"\u5efa\u8868SQL",id:"\u5efa\u8868sql",level:2},{value:"\u5b58\u50a8\u8fc7\u7a0b\u4e00",id:"\u5b58\u50a8\u8fc7\u7a0b\u4e00",level:2},{value:"\u5b58\u50a8\u8fc7\u7a0b\u4e8c",id:"\u5b58\u50a8\u8fc7\u7a0b\u4e8c",level:2},{value:"\u5b58\u50a8\u8fc7\u7a0b\u4e09",id:"\u5b58\u50a8\u8fc7\u7a0b\u4e09",level:2},{value:"mysql\u6e38\u6807\u4f7f\u7528",id:"mysql\u6e38\u6807\u4f7f\u7528",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"\u5efa\u8868sql",children:"\u5efa\u8868SQL"}),"\n",(0,s.jsx)(n.p,{children:"\u521b\u5efauser\u8868"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SET NAMES utf8mb4;\nSET FOREIGN_KEY_CHECKS = 0;\n\n-- ----------------------------\n-- Table structure for user\n-- ----------------------------\nDROP TABLE IF EXISTS `user`;\nCREATE TABLE `user`  (\n  `busiid` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,\n  `username` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '',\n  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '',\n  `partmnt` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,\n  `uuid` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL\n) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;\n\nSET FOREIGN_KEY_CHECKS = 1;\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u521b\u5efapartment\u8868"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SET NAMES utf8mb4;\nSET FOREIGN_KEY_CHECKS = 0;\n\n-- ----------------------------\n-- Table structure for partment\n-- ----------------------------\nDROP TABLE IF EXISTS `partment`;\nCREATE TABLE `partment`  (\n  `busiid` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,\n  `username` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',\n  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '',\n  `partmnt` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,\n  `uuid` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,\n  `numb` int(50) NULL DEFAULT NULL,\n  PRIMARY KEY (`busiid`) USING BTREE\n) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;\n\nSET FOREIGN_KEY_CHECKS = 1;\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u5b58\u50a8\u8fc7\u7a0b\u4e00",children:"\u5b58\u50a8\u8fc7\u7a0b\u4e00"}),"\n",(0,s.jsx)(n.p,{children:"\u5faa\u73af\u63d2\u5165num\u6761\u6570\u636e"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"drop procedure create4user;\n\ncreate procedure create4user(in busiid varchar(100),in num int(20))\nBEGIN\nwhile num>0 do\ninsert into user select busiid,concat(num,'a'),null,'hello' as partment,replace(uuid(),\"-\",\"\") as uuid;\nset num = num - 1;\nEND WHILE;\nend;\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u5b58\u50a8\u8fc7\u7a0b\u4e8c",children:"\u5b58\u50a8\u8fc7\u7a0b\u4e8c"}),"\n",(0,s.jsx)(n.p,{children:"\u63d2\u5165\u4e00\u6761\u5173\u8054\u5b58\u50a8\u8fc7\u7a0b\u4e00\u7684busiid\u7684\u6570\u636e\u5230partment\u8868"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"drop procedure create4partment;\n\ncreate procedure create4partment(in busi varchar(100))\nBEGIN\nDECLARE NUMB int(50);\ndeclare pwd varchar(255);\nDECLARE cnt_cursor cursor for select count(*) as numb,concat('000000000001',REPLACE(unix_timestamp(current_timestamp(3)),'.','')) AS pwd from user where `busiid` = busi ;\n\n\nOPEN cnt_cursor;\nFETCH cnt_cursor INTO NUMB,pwd;\n\ninsert into partment select busi as busiid,'jackson',pwd as `password`,'hello' as partment,replace(uuid(),\"-\",\"\") as uuid,numb;\nclose cnt_cursor;\nend;\n-- \u8fd9\u4e48\u4f7f\u7528\u7684\u539f\u56e0;\u5728Orcle\u6570\u636e\u5e93\u4e2dgroup by\u8bed\u53e5\u53ea\u80fd\u4e3agroup by\u7684\n-- \u5b57\u6bb5\u6216\u8005\u805a\u96c6\u51fd\u6570\u5f53\u6709\u5f88\u591a\u975e\u805a\u96c6\u7684\u5b57\u6bb5\u4e14\u4e0d\u9700\u51fa\u73b0\u5728group by \u4e2d\uff0c\u5219\u53ef\u4ee5\u4f7f\u7528\u5b58\u50a8\u8fc7\u7a0b\u5b9e\u73b0\n-- \u5c3d\u91cf\u4e0d\u8981\u4f7f\u5165\u53c2\u53d8\u91cf\u4e0e\u53d8\u91cf\u540d\u76f8\u540c\uff0c\u53ef\u80fd\u4f1a\u51fa\u73b0\u7ed3\u679c\u4e0e\u60f3\u8c61\u7684\u4e0d\u540c\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u5b58\u50a8\u8fc7\u7a0b\u4e09",children:"\u5b58\u50a8\u8fc7\u7a0b\u4e09"}),"\n",(0,s.jsx)(n.p,{children:"\u8c03\u7528\u5b58\u50a8\u8fc7\u7a0b\u4e00\u548c\u5b58\u50a8\u8fc7\u7a0b\u4e8c"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'drop procedure test4union;\n\ncreate procedure test4union(in num int(20))\nBEGIN\nDECLARE busiid varchar(36);\nset busiid = (select replace(uuid(),"-",""));\ncall create4user(busiid,num);\ncall create4partment(busiid);\nEND\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u8c03\u7528\u5b58\u50a8\u8fc7\u7a0b\u4e09\n",(0,s.jsx)(n.code,{children:"call test4union(1234567890)"})]}),"\n",(0,s.jsx)(n.h2,{id:"mysql\u6e38\u6807\u4f7f\u7528",children:"mysql\u6e38\u6807\u4f7f\u7528"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"DROP PROCEDURE CURSOR_OPERATE;\n\nCREATE PROCEDURE CURSOR_OPERATE(in num int(20))\nBEGIN \nDECLARE CURSOR_OP1 VARCHAR(50); -- \u5b9a\u4e49\u53d8\u91cf\nDECLARE CURSOR_OP CURSOR FOR SELECT BUSIID FROM partment WHERE PARTMNT = 'hello'; -- \u5b9a\u4e49\u6e38\u6807\n\nOPEN CURSOR_OP;\n\tLOOP\n\tFETCH CURSOR_OP into CURSOR_OP1;\n\tUPDATE partment set numb = num where busiid = CURSOR_OP1; -- \u4f7f\u7528LOOP\u5faa\u73af \u6839\u636e\u6e38\u6807\u7684\u7ed3\u679c\u96c6\u5bf9\u6307\u5b9a\u884c\u8fdb\u884c\u66f4\u65b0 \n\tEND LOOP;\nCLOSE CURSOR_OP;\nEND;\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"CALL CURSOR_OPERATE('123');\n"})}),"\n",(0,s.jsx)(n.admonition,{title:"\u534f\u8bae",type:"tip",children:(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u672c\u4f5c\u54c1\u4ee3\u7801\u90e8\u5206\u91c7\u7528 ",(0,s.jsx)(n.a,{href:"https://www.apache.org/licenses/LICENSE-2.0",children:"Apache 2.0\u534f\u8bae"}),"\u8fdb\u884c\u8bb8\u53ef\u3002\u9075\u5faa\u8bb8\u53ef\u7684\u524d\u63d0\u4e0b\uff0c\u4f60\u53ef\u4ee5\u81ea\u7531\u5730\u5bf9\u4ee3\u7801\u8fdb\u884c\u4fee\u6539\uff0c\u518d\u53d1\u5e03\uff0c\u53ef\u4ee5\u5c06\u4ee3\u7801\u7528\u4f5c\u5546\u4e1a\u7528\u9014\u3002\u4f46\u8981\u6c42\u4f60\uff1a"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\u7f72\u540d"}),"\uff1a\u5728\u539f\u6709\u4ee3\u7801\u548c\u884d\u751f\u4ee3\u7801\u4e2d\uff0c\u4fdd\u7559\u539f\u4f5c\u8005\u7f72\u540d\u53ca\u4ee3\u7801\u6765\u6e90\u4fe1\u606f\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\u4fdd\u7559\u8bb8\u53ef\u8bc1"}),"\uff1a\u5728\u539f\u6709\u4ee3\u7801\u548c\u884d\u751f\u4ee3\u7801\u4e2d\uff0c\u4fdd\u7559Apache 2.0\u534f\u8bae\u6587\u4ef6\u3002"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u672c\u4f5c\u54c1\u6587\u6863\u90e8\u5206\u91c7\u7528",(0,s.jsx)(n.a,{href:"http://creativecommons.org/licenses/by/4.0/",children:"\u77e5\u8bc6\u5171\u4eab\u7f72\u540d 4.0 \u56fd\u9645\u8bb8\u53ef\u534f\u8bae"}),"\u8fdb\u884c\u8bb8\u53ef\u3002 \u9075\u5faa\u8bb8\u53ef\u7684\u524d\u63d0\u4e0b\uff0c\u4f60\u53ef\u4ee5\u81ea\u7531\u5730\u5171\u4eab\uff0c\u5305\u62ec\u5728\u4efb\u4f55\u5a92\u4ecb\u4e0a\u4ee5\u4efb\u4f55\u5f62\u5f0f\u590d\u5236\u3001\u53d1\u884c\u672c\u4f5c\u54c1\uff0c\u4ea6\u53ef\u4ee5\u81ea\u7531\u5730\u6f14\u7ece\u3001\u4fee\u6539\u3001\u8f6c\u6362\u6216\u4ee5\u672c\u4f5c\u54c1\u4e3a\u57fa\u7840\u8fdb\u884c\u4e8c\u6b21\u521b\u4f5c\u3002\u4f46\u8981\u6c42\u4f60\uff1a"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\u7f72\u540d"}),"\uff1a\u5e94\u5728\u4f7f\u7528\u672c\u6587\u6863\u7684\u5168\u90e8\u6216\u90e8\u5206\u5185\u5bb9\u65f6\u5019\uff0c\u6ce8\u660e\u539f\u4f5c\u8005\u53ca\u6765\u6e90\u4fe1\u606f\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\u975e\u5546\u4e1a\u6027\u4f7f\u7528"}),"\uff1a\u4e0d\u5f97\u7528\u4e8e\u5546\u4e1a\u51fa\u7248\u6216\u5176\u4ed6\u4efb\u4f55\u5e26\u6709\u5546\u4e1a\u6027\u8d28\u7684\u884c\u4e3a\u3002\u5982\u9700\u5546\u4e1a\u4f7f\u7528\uff0c\u8bf7\u8054\u7cfb\u4f5c\u8005\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\u76f8\u540c\u65b9\u5f0f\u5171\u4eab\u7684\u6761\u4ef6"}),"\uff1a\u5728\u672c\u6587\u6863\u57fa\u7840\u4e0a\u6f14\u7ece\u3001\u4fee\u6539\u7684\u4f5c\u54c1\uff0c\u5e94\u5f53\u7ee7\u7eed\u4ee5\u77e5\u8bc6\u5171\u4eab\u7f72\u540d 4.0\u56fd\u9645\u8bb8\u53ef\u534f\u8bae\u8fdb\u884c\u8bb8\u53ef\u3002"]}),"\n"]}),"\n"]}),"\n"]})})]})}function o(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8672:(e,n,r)=>{r.d(n,{Z:()=>c,a:()=>i});var s=r(959);const t={},a=s.createContext(t);function i(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);