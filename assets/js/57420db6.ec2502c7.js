"use strict";(self.webpackChunksummary=self.webpackChunksummary||[]).push([[7412],{7286:(n,e,E)=>{E.r(e),E.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>O,frontMatter:()=>s,metadata:()=>d,toc:()=>a});var r=E(1527),l=E(73);const s={title:"Oracle\u5b58\u50a8\u8fc7\u7a0b",sidebar_label:"Oracle\u5b58\u50a8\u8fc7\u7a0b",sidebar_position:1},i=void 0,d={id:"Java/DateBase/Oracle Procedure",title:"Oracle\u5b58\u50a8\u8fc7\u7a0b",description:"ORACLE \u5b58\u50a8\u8fc7\u7a0b\u8bed\u6cd5",source:"@site/docs/01-Java/06-DateBase/Oracle Procedure.mdx",sourceDirName:"01-Java/06-DateBase",slug:"/Java/DateBase/Oracle Procedure",permalink:"/Java/DateBase/Oracle Procedure",draft:!1,unlisted:!1,editUrl:"https://github.com/Halcyon666/summary/edit/main/docs/01-Java/06-DateBase/Oracle Procedure.mdx",tags:[],version:"current",lastUpdatedAt:1723734192e3,sidebarPosition:1,frontMatter:{title:"Oracle\u5b58\u50a8\u8fc7\u7a0b",sidebar_label:"Oracle\u5b58\u50a8\u8fc7\u7a0b",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"JAVA\u865a\u62df\u673a",permalink:"/Java/ConcurrentAndJVM/JAVA Virtual Machine"},next:{title:"mysql\u5b58\u50a8\u8fc7\u7a0b",permalink:"/Java/DateBase/mysql Procedure"}},c={},a=[{value:"ORACLE \u5b58\u50a8\u8fc7\u7a0b\u8bed\u6cd5",id:"oracle-\u5b58\u50a8\u8fc7\u7a0b\u8bed\u6cd5",level:2},{value:"\u6267\u884c\u65e0\u53c2\u6570\u7684\u5b58\u50a8\u8fc7\u7a0b",id:"\u6267\u884c\u65e0\u53c2\u6570\u7684\u5b58\u50a8\u8fc7\u7a0b",level:2},{value:"\u6267\u884c\u6709\u53c2\u6570\u7684\u5b58\u50a8\u8fc7\u7a0b",id:"\u6267\u884c\u6709\u53c2\u6570\u7684\u5b58\u50a8\u8fc7\u7a0b",level:2},{value:"\u5982\u679c\u5b58\u50a8\u8fc7\u7a0b\u4e2d\u6709\u8f93\u51fa\u8bed\u53e5\uff0c\u9700\u8981\u8bbe\u7f6eSERVEROUTPUT\u7684\u8f93\u51fa\u72b6\u6001",id:"\u5982\u679c\u5b58\u50a8\u8fc7\u7a0b\u4e2d\u6709\u8f93\u51fa\u8bed\u53e5\u9700\u8981\u8bbe\u7f6eserveroutput\u7684\u8f93\u51fa\u72b6\u6001",level:2},{value:"\u521b\u5efa\u65e0\u53c2\u6570\u7684\u5b58\u50a8\u8fc7\u7a0b",id:"\u521b\u5efa\u65e0\u53c2\u6570\u7684\u5b58\u50a8\u8fc7\u7a0b",level:2},{value:"\u5728\u5b58\u50a8\u8fc7\u7a0b\u4e2d\u4f7f\u7528\u6e38\u6807",id:"\u5728\u5b58\u50a8\u8fc7\u7a0b\u4e2d\u4f7f\u7528\u6e38\u6807",level:2},{value:"\u5728\u5b58\u50a8\u8fc7\u7a0b\u4e2d\u521b\u5efa\u8868",id:"\u5728\u5b58\u50a8\u8fc7\u7a0b\u4e2d\u521b\u5efa\u8868",level:2},{value:"\u5e26\u6709\u53c2\u6570\u7684\u5b58\u50a8\u8fc7\u7a0b",id:"\u5e26\u6709\u53c2\u6570\u7684\u5b58\u50a8\u8fc7\u7a0b",level:2},{value:"\u5e26\u6709\u8f93\u51fa\u53c2\u6570\u7684\u5b58\u50a8\u8fc7\u7a0b\u7684\u8c03\u7528",id:"\u5e26\u6709\u8f93\u51fa\u53c2\u6570\u7684\u5b58\u50a8\u8fc7\u7a0b\u7684\u8c03\u7528",level:2},{value:"\u67e5\u770b\u5b58\u50a8\u8fc7\u7a0b",id:"\u67e5\u770b\u5b58\u50a8\u8fc7\u7a0b",level:2},{value:"\u67e5\u770b\u5b58\u50a8\u8fc7\u7a0b\u7684\u9519\u8bef",id:"\u67e5\u770b\u5b58\u50a8\u8fc7\u7a0b\u7684\u9519\u8bef",level:2},{value:"\u5b58\u50a8\u8fc7\u7a0b\u7684\u4fee\u6539",id:"\u5b58\u50a8\u8fc7\u7a0b\u7684\u4fee\u6539",level:2},{value:"\u5b58\u50a8\u8fc7\u7a0b\u7684\u91cd\u65b0\u7f16\u8bd1",id:"\u5b58\u50a8\u8fc7\u7a0b\u7684\u91cd\u65b0\u7f16\u8bd1",level:2},{value:"\u5220\u9664\u5b58\u50a8\u8fc7\u7a0b",id:"\u5220\u9664\u5b58\u50a8\u8fc7\u7a0b",level:2},{value:"\u51fd\u6570\u7684\u521b\u5efa\u8bed\u6cd5\u7ed3\u6784",id:"\u51fd\u6570\u7684\u521b\u5efa\u8bed\u6cd5\u7ed3\u6784",level:2},{value:"\u521b\u5efa\u65e0\u53c2\u6570\u51fd\u6570",id:"\u521b\u5efa\u65e0\u53c2\u6570\u51fd\u6570",level:2},{value:"\u521b\u5efa\u6709\u53c2\u6570\u51fd\u6570",id:"\u521b\u5efa\u6709\u53c2\u6570\u51fd\u6570",level:2},{value:"\u4fee\u6539\u51fd\u6570",id:"\u4fee\u6539\u51fd\u6570",level:2},{value:"\u91cd\u65b0\u3001\u5220\u9664\u7f16\u8bd1\u51fd\u6570",id:"\u91cd\u65b0\u5220\u9664\u7f16\u8bd1\u51fd\u6570",level:2},{value:"ORACLE \u5faa\u73af\u7ed3\u6784 IF WHILE FOR",id:"oracle-\u5faa\u73af\u7ed3\u6784-if-while-for",level:2},{value:"begin end\u5199\u6cd5",id:"begin-end\u5199\u6cd5",level:2},{value:"\u67e5\u8be2\u8868\u662f\u5426\u5b58\u5728\uff0c\u6216\u8005\u5217\u662f\u5426\u5b58\u5728",id:"\u67e5\u8be2\u8868\u662f\u5426\u5b58\u5728\u6216\u8005\u5217\u662f\u5426\u5b58\u5728",level:2},{value:"\u50a8\u5b58\u8fc7\u7a0b\u81ea\u52a8\u7f16\u8bd1\u6240\u6709\u65e0\u6548\u5b58\u50a8\u8fc7\u7a0b",id:"\u50a8\u5b58\u8fc7\u7a0b\u81ea\u52a8\u7f16\u8bd1\u6240\u6709\u65e0\u6548\u5b58\u50a8\u8fc7\u7a0b",level:2},{value:"\u67e5\u8be2oracle \u6570\u636e\u5e93\u4e2d\u6307\u5b9a\u7528\u6237\u4e0b \u7684\u5b58\u50a8\u8fc7\u7a0b",id:"\u67e5\u8be2oracle-\u6570\u636e\u5e93\u4e2d\u6307\u5b9a\u7528\u6237\u4e0b-\u7684\u5b58\u50a8\u8fc7\u7a0b",level:2},{value:"SQL \u9519\u8bef [17041] [99999]: \u7d22\u5f15\u4e2d\u4e22\u5931  IN \u6216 OUT \u53c2\u6570",id:"sql-\u9519\u8bef-17041-99999-\u7d22\u5f15\u4e2d\u4e22\u5931--in-\u6216-out-\u53c2\u6570",level:2},{value:"\u91cd\u7f6eOracle\u6570\u636e\u5e93\u5bc6\u7801",id:"\u91cd\u7f6eoracle\u6570\u636e\u5e93\u5bc6\u7801",level:2},{value:"\u53c2\u8003\u8d44\u6599\uff1a",id:"\u53c2\u8003\u8d44\u6599",level:2}];function R(n){const e={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h2,{id:"oracle-\u5b58\u50a8\u8fc7\u7a0b\u8bed\u6cd5",children:"ORACLE \u5b58\u50a8\u8fc7\u7a0b\u8bed\u6cd5"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"CREATE [OR REPLACE] PROCEDURE [schema.] procedure_name \n[parameter_name] [[IN] datatype [{:=|DEFAULT} expression] \n| {OUT | IN OUT} [NOCOPY] datatype][,...]{IS | AS} BODY;\n"})}),"\n",(0,r.jsx)(e.h2,{id:"\u6267\u884c\u65e0\u53c2\u6570\u7684\u5b58\u50a8\u8fc7\u7a0b",children:"\u6267\u884c\u65e0\u53c2\u6570\u7684\u5b58\u50a8\u8fc7\u7a0b"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.code,{children:"EXEC procedure_name;"})}),"\n",(0,r.jsx)(e.h2,{id:"\u6267\u884c\u6709\u53c2\u6570\u7684\u5b58\u50a8\u8fc7\u7a0b",children:"\u6267\u884c\u6709\u53c2\u6570\u7684\u5b58\u50a8\u8fc7\u7a0b"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.code,{children:"EXEC procedure_name(parameters);"})}),"\n",(0,r.jsx)(e.h2,{id:"\u5982\u679c\u5b58\u50a8\u8fc7\u7a0b\u4e2d\u6709\u8f93\u51fa\u8bed\u53e5\u9700\u8981\u8bbe\u7f6eserveroutput\u7684\u8f93\u51fa\u72b6\u6001",children:"\u5982\u679c\u5b58\u50a8\u8fc7\u7a0b\u4e2d\u6709\u8f93\u51fa\u8bed\u53e5\uff0c\u9700\u8981\u8bbe\u7f6eSERVEROUTPUT\u7684\u8f93\u51fa\u72b6\u6001"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"SHOW SERVEROUTPUT -- \u67e5\u770b\nSET SERVEROUTPUT ON -- \u5f00\u542f\n"})}),"\n",(0,r.jsx)(e.h2,{id:"\u521b\u5efa\u65e0\u53c2\u6570\u7684\u5b58\u50a8\u8fc7\u7a0b",children:"\u521b\u5efa\u65e0\u53c2\u6570\u7684\u5b58\u50a8\u8fc7\u7a0b"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u4fee\u6539READERINFO2\u8868\u4e2dBOOKCOUNT\u7684\u6570\u636e\uff0c\u4e3a\u8ba1\u7b97\u673a\u7cfb\u53ef\u501f\u4e66\u7684\u6570\u76ee\u589e\u52a01"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"CREATE PROCEDURE PRO_READER\nAS\nBEGIN\nUPDATE READERINFO2 SET BOOKCOUNT = BOOKCOUNT+1\nWHERE UNIT = '\u8ba1\u7b97\u673a\u7cfb';\nEND;\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"\u5728\u5b58\u50a8\u8fc7\u7a0b\u4e2d\u4f7f\u7528\u6e38\u6807",children:"\u5728\u5b58\u50a8\u8fc7\u7a0b\u4e2d\u4f7f\u7528\u6e38\u6807"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u641c\u7d22READERINFO2\u8868\u4e2d\u6240\u6709\u81ea\u52a8\u5316\u7cfb\u548c\u751f\u7269\u7cfb\u7684\u6570\u636e\uff0c\u5e76\u5224\u65ad\u5f53\u501f\u4e66\u7684\u6570\u636e\uff08BOOKCOUNT\uff09\u5c0f\u4e8e3\u65f6\uff0c\u4e3a\u5176\u589e\u52a01"}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"\nCREATE PROCEDURE PRO_READER_COT\nAS\n    v_readerinfo READERINFO2%ROWTYPE;-- \u58f0\u660e\u6807\u53d8\u91cfv_readerinfo\uff0c\u5176\u6570\u636e\u7c7b\u578b\u4e3aREADERINFO2\u884c\u8bb0\u5f55\u7c7b\u578b\n    -- \u4e5f\u53ef\u58f0\u660e\u4e3a\u5217\u7c7b\u578b READERINFO2.bookcount%TYPE\n\n    CURSOR cursor_readerinfo\n    IS \n    SELECT *\n    FROM READERINFO2\n    WHER UNIT IN('\u81ea\u52a8\u5316\u7cfb','\u751f\u7269\u7cfb')\n    ORDER BY UNIT;-- \u8868\u793a\u58f0\u660e\u521b\u5efa\u6e38\u6807cursor_readerinfo\n\n    BEGIN\n        OPE cursor_readerinfo; --\u6253\u5f00\u6e38\u6807\n        LOOP\n            FETCH cursor_readerinfo INTO v_readerinfo; -- \u4ece\u6e38\u6807\u4e2d\u63d0\u53d6\u6307\u9488\u6307\u5411\u5f53\u524d\u884c\u6570\u636e\uff0c\u5e76\u5b58\u5165\u6807\u91cfv_readerinfo\n            EXIT WHEN cursor_readerinfo%NOTFOUND; -- \u8868\u793a\u8fdb\u884c\u5224\u65ad\uff0c\u5f53\u6e38\u6807\u6307\u9488\u5230\u5c3e\u90e8\u65f6\uff0c\u5c06\u7ed3\u675f\u5faa\u73af\n            IF v_readerinfo.bookcount < 3 THEN\n                UPDATE READERINFO2 SET BOOKCOUNT = BOOKCOUNT+1\n                WHERE READERID = v_readerinfo.readerid;\n            END IF;\n        END LOOP;\n    END;\n"})}),"\n",(0,r.jsx)(e.h2,{id:"\u5728\u5b58\u50a8\u8fc7\u7a0b\u4e2d\u521b\u5efa\u8868",children:"\u5728\u5b58\u50a8\u8fc7\u7a0b\u4e2d\u521b\u5efa\u8868"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u8981\u6c42\u5728\u5b58\u50a8\u8fc7\u7a0b\u4e2d\u521b\u5efa\u4e00\u4e2a\u8868\u7528\u4e8e\u5b58\u50a8\u4e34\u65f6\u6570\u636e"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"CREATE PROCEDURE PRO_CRTTAB\nAS\ntabeexists VARCHAR2(2); -- \u58f0\u660e\u53d8\u91cf\nmy_createtab VARCHAR2(400);\nBEGIN \n    SELECT COUNT(1) INTO tabeexists\n    FROM ALL_TABLES\n    WHERE TABLE_NAME = 'MY_TEST_TAB';-- \u4eceALL_TABLES\u6570\u636e\u5b57\u5178\u4e2d\u67e5\u8be2\u662f\u5426\u5df2\u7ecf\u5b58\u5728\u4e34\u65f6\u8868MY_TEST_TAB,\u5e76\u628a\u7ed3\u679c\u8d4b\u503c\u7ed9\u53d8\u91cftabeexists\n    my_createtab := 'CREATE GLOBAL TEMPORARY TABLE MY_TEST_TAB\n (TEST VARCHAR2(20) not null)\n  ON Commit Preserve Rows';-- \u8868\u793a\u53d8\u91cfmy_createtab\u8d4b\u503c\u521b\u5efa\u4e34\u65f6\u8868\u7684\u8bed\u53e5\n\nIF tabeexists = 0 THEN \n    EXECUTE IMMEDIATE my_createtab;\n    DBMS_OUTPUT.PUT_LINE('\u4e34\u65f6\u8868\u521b\u5efa\u6210\u529f...');\nELSE\n    EXECUTE IMMEDIATE 'DELETE FROM MY_TEST_TAB';\n    DBMS_OUTPUT.PUT_LINE('\u8bb0\u5f55\u5df2\u7ecf\u5220\u9664...');\nEND IF;\nEND;\n"})}),"\n",(0,r.jsxs)(e.p,{children:["\u4f7f\u7528",(0,r.jsx)(e.code,{children:"GRANT CREATE ANY TABLE TO USER"}),"\u4e3a\u7528\u6237\u8d4b\u4e88\u6743\u9650"]}),"\n",(0,r.jsx)(e.h2,{id:"\u5e26\u6709\u53c2\u6570\u7684\u5b58\u50a8\u8fc7\u7a0b",children:"\u5e26\u6709\u53c2\u6570\u7684\u5b58\u50a8\u8fc7\u7a0b"}),"\n",(0,r.jsx)(e.p,{children:"\u5728\u8c03\u7528\u65f6\uff0c\u901a\u8fc7\u5236\u5b9a\u6240\u9700\u8981\u7684\u53c2\u6570\u503c\uff0c\u5b9e\u73b0\u7279\u5b9a\u7684\u529f\u80fd\u3002\u5728\u521b\u5efa\u65f6\uff0c\u8fd8\u53ef\u4ee5\u4e3a\u53c2\u6570\u5236\u5b9a\u9ed8\u8ba4\u503c\u3002\u5b58\u50a8\u8fc7\u7a0b\u4e00\u65e6\u4f7f\u7528\u4e86\u53c2\u6570\uff0c\u90a3\u4e48\u5728\u6267\u884c\u5b58\u50a8\u8fc7\u7a0b\u65f6\u5219\u8981\u6c42\u5fc5\u987b\u4e3a\u5176\u5236\u5b9a\u53c2\u6570\uff0c\u53c2\u6570\u5141\u8bb8\u662f\u5e38\u91cf\u3001\u53d8\u91cf\u3001\u8868\u8fbe\u5f0f\u7b49\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u5b58\u50a8\u8fc7\u7a0b\u7684\u53c2\u6570\u6709\u8f93\u5165\u3001\u8f93\u51fa\u3001\u8f93\u5165\u8f93\u51fa3\u4e2d\u7c7b\u578b\u3002\u5176\u4e2d\u8f93\u5165\u53c2\u6570\u4e5f\u662f\u9ed8\u8ba4\u7684\u53c2\u6570\uff0c\u4e5f\u53ebIN\u7c7b\u578b\u53c2\u6570\u3002"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u8981\u6c42\u521b\u5efa\u4e00\u4e2a\u5b58\u50a8\u8fc7\u7a0b\uff0c\u7528\u4e8e\u67e5\u8be2READERINFO\u8868\u4e2d\u6240\u6709READERID\u3001READENAME\u3001UNIT\u3001BOOKCOUNT\uff0c\u4ee5\u53ca\u5176\u5728BOOKINFO\u8868\u4e2d\u501f\u9605\u7684\u56fe\u4e66\u6570\u76ee\u3002\u901a\u8fc7\u8bbe\u7f6e\u8f93\u5165\u53c2\u6570\uff0c\u4f7f\u5f97\u5b58\u50a8\u8fc7\u7a0b\u80fd\u591f\u7075\u6d3b\u5730\u9009\u62e9\u8981\u67e5\u8be2\u7684\u8bfb\u8005\u5355\u4f4d\uff0c\u4ee5\u53ca\u80fd\u591f\u501f\u9605\u7684\u6700\u5c11\u8bfb\u4e66\u6570\u76ee\uff0c\u5e76\u8f93\u51fa\u5230\u5c4f\u5e55\u3002"}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"CREATE PROCEDURE \n    PRO_READERLIST_SE(unit IN VARCHAR2, minbookcount IN NUMBER)-- \u4e24\u4e2a\u8f93\u5165\u578b\u53c2\u6570 unit minbookcount\nAS \n\nTYPE reader_book_rc IS RECORD\n(\n    v_readerid READERINFO.READERID%TYPE,\n    v_readername READERINFO.READERNAME%TYPE,\n    v_unit READERINFO.UNIT%TYPE,\n    v_bookcount READERINFO.BOOKCOUNT%TYPE,\n    v_count_reader NUMBER(8)\n);                      -- \u58f0\u660e\u4e00\u4e2a\u8bb0\u5f55\u7c7b\u578b\u7684\u6570\u636e\u7c7b\u578b\n\nv_readebook_rc reader_book_rc;-- \u58f0\u660e\u53d8\u91cf \u8be5\u53d8\u91cf\u4e3a\u8bb0\u5f55\u7c7b\u578b\n\nCURSOR cur_readebook\nIS \nSELECT R.readerid, R.readername, R.unit, R.bookcount, Count(B.reader)borrowedbooks\n    FROM ReaderInfo R\n    LEFT OUTER JOIN BookInfo B \n    ON R.readerid=B.reader\n    WHERE R.unit like unit\n    AND R.bookcount >= minbookcount\n    GROUP BY R.readerid, R.readerid, R.readername, R.unit, R.bookcount\n    ORDER BY R.bookcount;-- \u521b\u5efa\u6e38\u6807\uff0c\u8be5\u6e38\u6807\u5173\u8054\u7684\u67e5\u8be2\u8bed\u53e5\u6709\u6761\u4ef6\uff0c\u8be5\u6761\u4ef6\u6765\u81ea\u4e8e\u8be5\u5b58\u50a8\u8fc7\u7a0b\u7684\u8f93\u5165\u7c7b\u578b\u53c2\u6570\n\nBEGIN \nOPEN cur_readebook;\n\n    LOOP\n        FETCH cur_readebook INTO v_readebook_rc;\n        EXIT WHEN cur_readebook %NOTFOUND;\n        DBMS_OUTPUT.PUT_LINE(v_readebook_rc.v_readerid \n        ||'-'|| v_readebook_rc.v_readername\n        ||'-'|| v_readebook_rc v_unit\n        ||'-'|| v_readebook_rc v_bookcount\n        ||'-'|| v_readebook_rc v_count_reader);\n    END LOOP; -- \u5229\u7528\u5faa\u73af\u904d\u5386\u6e38\u6807\uff0c\u628a\u53d8\u91cf\u4e2d\u7684\u6570\u636e\u53d6\u51fa\u5e76\u8f93\u51fa\u5230\u5c4f\u5e55\nCLOSE cur_readebook;\nend;\n"})}),"\n",(0,r.jsxs)(e.p,{children:["\u8c03\u7528\u5b58\u50a8\u8fc7\u7a0b\n",(0,r.jsx)(e.code,{children:"EXEC PRO_READERLIST_SE('%', 3)"})]}),"\n",(0,r.jsx)(e.p,{children:"\u4e3aminbookcount\u8bbe\u5b9a\u9ed8\u8ba4\u503c"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"CREATE PROCEDURE \n    PRO_READERLIST_SE(unit IN VARCHAR2, minbookcount IN NUMBER DEFAULT 2)\n--\u540e\u9762\u7684\u7701\u7565 \u540c\u4e0a\u811a\u672c\n"})}),"\n",(0,r.jsx)(e.h2,{id:"\u5e26\u6709\u8f93\u51fa\u53c2\u6570\u7684\u5b58\u50a8\u8fc7\u7a0b\u7684\u8c03\u7528",children:"\u5e26\u6709\u8f93\u51fa\u53c2\u6570\u7684\u5b58\u50a8\u8fc7\u7a0b\u7684\u8c03\u7528"}),"\n",(0,r.jsx)(e.p,{children:"\u7b80\u5355\u5b9e\u7528\u6848\u4f8b"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"-- create PROCEDURE\ncreate or replace procedure out_value(param1 in out VARCHAR2)\nas\nbegin\n  param1 := param1;\nend;\n/\n\n-- CALL\ndeclare\n  param1 VARCHAR2(1000) := sys_guid(); \nBEGIN\n  out_value(param1);\n  dbms_output.put_line('param1='||param1);\nEND;\n/\n"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u8981\u6c42\u521b\u5efa\u4e00\u4e2a\u5e26\u6709\u8f93\u51fa\u53c2\u6570\u7684\u5b58\u50a8\u8fc7\u7a0b\uff0c\u7136\u540e\u8c03\u7528\u5b83\u4e3a\u53d8\u91cf\u8d4b\u503c\u3002"}),"\n"]}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsx)(e.li,{children:"\u521b\u5efa\u5e26\u6709\u8f93\u51fa\u53c2\u6570\u7684\u5b58\u50a8\u8fc7\u7a0b\u3002\u8bbe\u7f6e\u5b58\u50a8\u8fc7\u7a0b PRO_OUT_ELT\uff0c\u8be5\u5b58\u50a8\u8fc7\u7a0b\u7535\u90ae\u4e00\u4e2a\u8f93\u51fa\u53c2\u6570\uff0c\u5b83\u7684\u529f\u80fd\u662f\u8fd4\u56de\u8f93\u51fa\u53c2\u6570\u7684\u503c\u3002"}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"CREATE PROCEDURE PRO_OUT_ELT(parm_out OUT VARCHAR2)\nAS \nBEGIN\n    parm_out := '\u8ba1\u7b97\u673a\u7cfb';\nEND;\n/\n"})}),"\n",(0,r.jsxs)(e.ol,{start:"2",children:["\n",(0,r.jsx)(e.li,{children:"\u8c03\u7528PRO_OUT_ELT\u5b58\u50a8\u8fc7\u7a0b\u4e3a\u53d8\u91cf\u8d4b\u503c\u3002\u521b\u5efa\u5b58\u50a8\u8fc7\u7a0b PRO_READER_CLOSE\uff0c\u5728\u8be5\u5b58\u50a8\u8fc7\u7a0b\u4e2d\u8c03\u7528PRO_OUT_ELT\u4e3a\u53d8\u91cf\u8d4b\u503c\u3002"}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"CREATE PROCEDURE PRO_READER_CLOSE\nAS \n    v_readerinfo READERINFO2%ROWTYPE;\n    v_elmts varchar2(30);\n\n    CURSOR cursor_readerinfose\n    IS \n    SELECT * FROM READERINFO2\n    WHERE UNIT = v_elmts\n    ORDER BY UNIT; -- \u58f0\u660e\u6e38\u6807\u548c\u5173\u8054\u6761\u4ef6\uff0c\u67e5\u8be2\u6761\u4ef6\u4e2d\u4f7f\u7528\u4e86\u53d8\u91cfv_elmts\n\nBEGIN \nPRO_OUT_ELT(v_elmts); -- \u8c03\u7528\u5b58\u50a8\u8fc7\u7a0bPRO_OUT_ELT\uff0c\u4e3av_elmts\u8d4b\u503c\n\nOPEN cursor_readerinfose;\n    LOOP\n        FETCH cursor_readerinfose INTO v_readerinfo;\n        EXIT WHEN cursor_readerinfose%NOTFOUND;\n        IF V_readerinfo.bookcount < 3 THEN \n            UPDATE READERINFO2 SET BOOKCOUNT = BOOKCOUNT+1\n            WHERE READERID = v_readerinfo.readerid;\n            DBMS_OUTPUT.PUT_LINE('\u6570\u636e\u4fee\u6539\u5b8c\u6bd5...');\n        END IF;\n    END LOOP;\nEND;\n/\n"})}),"\n",(0,r.jsxs)(e.ol,{start:"3",children:["\n",(0,r.jsx)(e.li,{children:"\u521b\u5efaPRO_OUT_EL, PRO_READER_CLOSE \u5229\u7528EXEC\u547d\u4ee4 PRO_READER_CLOSE"}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"TIPS"})}),"\n",(0,r.jsx)(e.p,{children:"\u8c03\u7528OUT\u7c7b\u578b\u53c2\u6570\u5f97\u5b58\u50a8\u8fc7\u7a0b\u65f6\uff0c\u9700\u8981\u7528\u53d8\u91cf\u586b\u5145\uff0c\u800c\u4e0d\u80fd\u7528\u5e38\u91cf\u8868\u8fbe\u5f0f\u586b\u5145\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u5728\u8c03\u7528\u5b58\u50a8\u8fc7\u7a0b\u4e2d\uff0c\u5982\u679c\u56e0\u53d1\u751f\u672a\u5904\u7406\u7684\u5f02\u5e38\u800c\u4e2d\u65ad\uff0c\u90a3\u4e48\u8c03\u7528\u8005\u4e00\u822c\u4e0d\u4f1a\u5f97\u5230\u4efb\u4f55OUT\u53c2\u6570\u7684\u503c\uff0c\u800c\u5728\u5f02\u5e38\u88ab\u5904\u7406\u7684\u60c5\u51b5\u4e0b\u63a8\u51fa\uff0c\u5728\u53d1\u751f\u4e00\u6b21\u822a\u4e4b\u524d\u6240\u83b7\u53d6\u7684OUT\u53c2\u6570\u503c\u5c06\u88ab\u8c03\u7528\u8005\u83b7\u5f97\u3002"}),"\n",(0,r.jsxs)(e.p,{children:["\u5728\u5b58\u50a8\u8fc7\u7a0b\u4e2d\u67d0\u4e2a\u53c2\u6570\u65e2\u53ef\u4ee5\u662f\u8f93\u5165\u53c2\u6570\u4e5f\u53ef\u4ee5\u662f\u8f93\u51fa\u53c2\u6570\u7c7b\u578b\u7684\u53c2\u6570\uff0c\u5b83\u65e2\u53ef\u4ee5\u63a5\u6536\u6570\u636e\uff0c\u4e5f\u53ef\u4ee5\u8fd4\u56de\u6570\u636e\u3002\n",(0,r.jsx)(e.code,{children:"parameter IN OUT datatype"})]}),"\n",(0,r.jsx)(e.h2,{id:"\u67e5\u770b\u5b58\u50a8\u8fc7\u7a0b",children:"\u67e5\u770b\u5b58\u50a8\u8fc7\u7a0b"}),"\n",(0,r.jsx)(e.p,{children:"\u5728Oracle\u7684\u6570\u636e\u5b57\u5178 USER_SOURCE \u4e2d\u8bb0\u5f55\u7528\u6237\u5b9a\u4e49\u7684\u5b58\u50a8\u8fc7\u7a0b\u7684\u5143\u6570\u636e"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u4ece USER_SOURCE \u4e2d\u67e5\u8be2\u5f53\u524d\u7528\u6237\u7684\u6240\u6709\u5b58\u50a8\u8fc7\u7a0b\u540d\u79f0"}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"SELECT DISTINCT NAME FROM USER_SOURCE \nWHERE TYPE = 'PROCEDURE'\n"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"-- \u53ea\u67e5\u770b\u5f53\u524d\u7528\u6237\u6240\u6709\u7684\u5b58\u50a8\u8fc7\u7a0b\uff0c\u4e0d\u67e5\u770b\u5177\u4f53\u7684\u811a\u672c\nSELECT * FORM USER_OBJECTS WHERE object_type = 'PROCEDURE';\n"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u67e5\u8be2\u5b58\u50a8\u8fc7\u7a0b\u7684\u521b\u5efa\u811a\u672c"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"SELECT NAME, LINE, TEXT, FROM USER_SOURCE-- line\u4e3a\u811a\u672c\u7f16\u53f7 text\u91cc\u9762\u5b58\u653e\u4e86\u5b58\u50a8\u8fc7\u7a0b\u7684\u76f8\u5173\u811a\u672c\nWHERE TYPE = 'PROCEDURE' AND NAME = 'PRO_READER'\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"\u67e5\u770b\u5b58\u50a8\u8fc7\u7a0b\u7684\u9519\u8bef",children:"\u67e5\u770b\u5b58\u50a8\u8fc7\u7a0b\u7684\u9519\u8bef"}),"\n",(0,r.jsxs)(e.p,{children:["\u9519\u8bef\u63d0\u793a\u8bed\u53e5\u7684\u7ed3\u6784\n",(0,r.jsx)(e.code,{children:"select * from SYS.USER_ERRORS where NAME = upper('procedure_name'); "}),"\n\u67e5\u8be2\u4e0d\u5230\u8bf7\u7528\u8fd9\u4e2aSQL\n",(0,r.jsx)(e.code,{children:"select * from SYS.ALL_ERRORS where NAME = upper('procedure_name'); "})]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"-- \u8be5\u811a\u672c\u6709\u9519\u8bef \u7f16\u8bd1\u9519\u8bef '\u8ba1\u7b97\u673a\u7cfb'\u540e\u9762\u5c11\u4e86\u5206\u53f7\nCREATE PROCEDURE PRO_READER2\nAS \n\nBEGIN\n    UPDATE READERINFO2 SET BOOKCOUNT = BOOKCOUNT+1\n    WHERE UNIT = '\u8ba1\u7b97\u673a\u7cfb'\n\nEND;\n/\n"})}),"\n",(0,r.jsx)(e.h2,{id:"\u5b58\u50a8\u8fc7\u7a0b\u7684\u4fee\u6539",children:"\u5b58\u50a8\u8fc7\u7a0b\u7684\u4fee\u6539"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"CREATE [OR REPLACE] PROCEDURE [schema.] procedure_name \n[parameter_name] [[IN] datatype [{:=|DEFAULT} expression] \n| {OUT | IN OUT} [NOCOPY] datatype][,...]{IS | AS} BODY;\n"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"[OR REPLACE] \u9879\u662f\u53ef\u9009\u90e8\u5206\uff0c\u5f53\u7701\u7565\u65f6\u8868\u793a\u5168\u65b0\u7684\u521b\u5efa\uff0c\u5426\u5219\u8868\u793a\u8986\u76d6\u539f\u6709\u7684\u5b58\u50a8\u8fc7\u7a0b\u3002\u901a\u5e38\u5e26\u7740\u8be5\u9009\u9879\uff0c\u8fd9\u6837\u65b9\u4fbf\u4fee\u6539\u5b58\u50a8\u8fc7\u7a0b\u3002"}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"\u5b58\u50a8\u8fc7\u7a0b\u7684\u91cd\u65b0\u7f16\u8bd1",children:"\u5b58\u50a8\u8fc7\u7a0b\u7684\u91cd\u65b0\u7f16\u8bd1"}),"\n",(0,r.jsxs)(e.p,{children:["\u5f53\u5b58\u50a8\u8fc7\u7a0b\u7684\u5f15\u7528\u5bf9\u8c61\u5931\u6548\u65f6\u8c03\u7528\u8005\u5c31\u4f1a\u51fa\u73b0\u5931\u6548\u7684\u60c5\u51b5\uff0c\u5f53\u8fd9\u79cd\u60c5\u51b5\u51fa\u73b0\u65f6\uff0c\u53ea\u8981\u4e0d\u662f\u811a\u672c\u51fa\u73b0\u95ee\u9898\uff0c\u53ea\u9700\u8981\u91cd\u65b0\u7f16\u8bd1\u5c31\u53ef\u4ee5\u6b63\u5e38\u4f7f\u7528\u4e86\u3002\n",(0,r.jsx)(e.code,{children:"ALTER PROCEDURE procedure_name COMPILE;"})]}),"\n",(0,r.jsx)(e.h2,{id:"\u5220\u9664\u5b58\u50a8\u8fc7\u7a0b",children:"\u5220\u9664\u5b58\u50a8\u8fc7\u7a0b"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.code,{children:"DROP PROCEDURE [ schema. ] procedure_name"})}),"\n",(0,r.jsx)(e.h2,{id:"\u51fd\u6570\u7684\u521b\u5efa\u8bed\u6cd5\u7ed3\u6784",children:"\u51fd\u6570\u7684\u521b\u5efa\u8bed\u6cd5\u7ed3\u6784"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"CREATE FUNCTION [ schema. ] function_name\n    [\n    (paramter_declaration [, paramter_declaration])\n    ]\n    RETURN datatype\n    {IS | AS}\n    [declare_selection]\n\n    BEGIN \n        statement [ statement | pagma ]...\n            [EXCEPTION exception_handler [ exception_handler] ... ]\n    END [name];\n/\n"})}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"\u4f7f\u7528\u81ea\u5b9a\u4e49\u51fd\u6570\u6ce8\u610f"})}),"\n",(0,r.jsx)(e.p,{children:"\u81ea\u5b9a\u4e49\u51fd\u6570\u5c3d\u91cf\u4e0d\u8981\u64cd\u4f5c\u6570\u636e\u5e93\u6570\u636e"}),"\n",(0,r.jsx)(e.p,{children:"\u5982\u679c\u5728\u6807\u51c6SQL\u8c03\u7528\u81ea\u5b9a\u4e49\u51fd\u6570\uff0c\u90a3\u4e48\u88ab\u8c03\u7528\u51fd\u6570\u4e0d\u5141\u8bb8\u6709\u8f93\u51fa\u7c7b\u578b\u7684\u53c2\u6570\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u5982\u679c\u5728\u6807\u51c6SQL\u4e2d\u8c03\u7528\u81ea\u5b9a\u4e49\u51fd\u6570\uff0c\u90a3\u4e48\u88ab\u8c03\u7528\u51fd\u6570\u5c06\u4e0d\u80fd\u6709\u4e8b\u52a1\u64cd\u4f5c\u8bed\u53e5\u548cDDL\u8bed\u53e5\u7b49\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u67e5\u8be2\u6216\u589e\u52a0\u3001\u4fee\u6539\u3001\u5220\u9664\u64cd\u4f5c\u6240\u8c03\u7528\u7684\u51fd\u6570\u964d\u4e0d\u5141\u8bb8\u64cd\u4f5c\u4efb\u4f55\u6570\u636e\u8868"}),"\n",(0,r.jsx)(e.h2,{id:"\u521b\u5efa\u65e0\u53c2\u6570\u51fd\u6570",children:"\u521b\u5efa\u65e0\u53c2\u6570\u51fd\u6570"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u8981\u6c42\u521b\u5efa\u51fd\u6570\uff0c\u8be5\u51fd\u6570\u53ef\u4ee5\u8fd4\u56de\u5f53\u524d\u7684\u767b\u5f55\u7528\u6237"}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"CREATE FUNCTION MYUSER\nRETURN VARCHAR2\nIS \n    v_qnty VARCHAR2(20); --\u8868\u793a\u58f0\u660e\u51fd\u6570\u5185\u90e8\u7684\u53d8\u91cf\uff0c\u4e3aVARCHAR2\u7c7b\u578b\n\nBEGIN\n    SELECT SYS.LOGIN_USER INTO v_qnty\n    FROM DUAL;\n    RETURN v_qnty;\nEND;\n/\n"})}),"\n",(0,r.jsx)(e.h2,{id:"\u521b\u5efa\u6709\u53c2\u6570\u51fd\u6570",children:"\u521b\u5efa\u6709\u53c2\u6570\u51fd\u6570"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"CREATE FUNCTION GETUNIT(in_readerid IN VARCHAR2) --\u521b\u5efa\u51fd\u6570GETUNIT\uff0c\u5e26\u6709\u4e00\u4e2a\u8f93\u5165\u7c7b\u578b\u7684\u53c2\u6570\nRETURN VARCHAR2 IS \n    v_readerid VARCHAR2(20);\nBEGIN\n    SELECT UNIT INTO v_readerid FROM READERINFO2 WHERE\n    READERID = inreaderid;\n    RETURN v_readerid;\nEND;\n/\n"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"var v_unit VARCHAR2(10);\nEXEC :v_unit := GETUNIT('9702')\n"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u8981\u6c42\u521b\u5efa\u51fd\u6570\uff0c\u8be5\u51fd\u6570\u5e26\u6709\u4e24\u4e2a\u8f93\u51fa\u53c2\u6570\uff0c\u5728\u6839\u636eBOOKID\u67e5\u8be2BOOKINFO\u8868\u65f6\uff0c\u80fd\u591f\u8fd4\u56de\u56fe\u4e66\u540d\u79f0\u3001\u51fa\u7248\u793e\u53ca\u4f5c\u8005"}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"CREATE FUNCTION GETBOOKINFO(in_bookid IN NUMBER, out_pulish OUT VARCHAR2, out_author OUT VARCHAR2)\nRETURN VARCHAR2\nIS \n    v_bookname VARCHAR2(20);\n    v_out_publish VARCHAR2(50);\n    v_out_author VARCHAR2(50);\n\nBEGIN\n    SELECT BOOKNAME. PUBLISH, AUTHOR INTO \n    v_bookname, v_out_publish, v_author\n    FROM BOOKID = in_bookid;\n    out_publish := v_out_publish;\n    out_author := v_out_author;\n    RETURN v_bookname;\nEND;\n/\n"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u5728\u4e0d\u589e\u52a0\u51fd\u6570\u53c2\u6570\u7684\u57fa\u7840\u4e0a\uff0c\u8fd4\u56de\u56fe\u4e66\u7684\u4ef7\u683c"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"CREATE FUNCTION GETBOOKINFO(in_bookid IN OUT NUMBER, out_pulish OUT VARCHAR2, out_author OUT VARCHAR2)\nRETURN VARCHAR2\nIS \n  v_bookname VARCHAR2(20);\n  v_out_publish VARCHAR2(50);\n  v_out_author VARCHAR2(50);\n  v_out_price NUMBER(8);\nBEGIN\n    SELECT BOOKNAME. PUBLISH, AUTHOR, PRICE INTO \n    v_bookname, v_out_publish, v_author, v_out_price\n    FROM BOOKID = in_bookid;\n    out_publish := v_out_publish;\n    out_author := v_out_author;\n    in_bookid := v_out_price;\n    RETURN v_bookname;\nEND;\n/\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"## \u67e5\u770b\u51fd\u6570\n\n```sql\n-- \u67e5\u770b\u51fd\u6570\u5217\u8868\nSELECT OBJECT_NAEM, OBJECT_ID, STATUS FROM USER_OBJECTS WHERE OBJECT_TYPE = 'FUNCTION';/\n-- \u67e5\u770b\u51fd\u6570\u76f8\u5173\u811a\u672c\nSELECT * FROM USER_SOURCE WHERE TYPE = 'FUNCTION' AND NAME = 'MYUSER' ORDER BY LINE;/\n"})}),"\n",(0,r.jsx)(e.h2,{id:"\u4fee\u6539\u51fd\u6570",children:"\u4fee\u6539\u51fd\u6570"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"CREATE OR REPLACE FUNCTION MYUSER\nRETURN VARCHAR2\nIS \n    v_qnty VARCHAR2(20); --\u8868\u793a\u58f0\u660e\u51fd\u6570\u5185\u90e8\u7684\u53d8\u91cf\uff0c\u4e3aVARCHAR2\u7c7b\u578b\n\nBEGIN\n    SELECT SYS.LOGIN_USER INTO v_qnty\n    FROM DUAL;\n    RETURN v_qnty;\nEND;\n/\n"})}),"\n",(0,r.jsx)(e.h2,{id:"\u91cd\u65b0\u5220\u9664\u7f16\u8bd1\u51fd\u6570",children:"\u91cd\u65b0\u3001\u5220\u9664\u7f16\u8bd1\u51fd\u6570"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"ALTER FUNCTION function_name COMILE;\nDROP FUNCTION function_name;\n"})}),"\n",(0,r.jsx)(e.h2,{id:"oracle-\u5faa\u73af\u7ed3\u6784-if-while-for",children:"ORACLE \u5faa\u73af\u7ed3\u6784 IF WHILE FOR"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.a,{href:"https://www.cnblogs.com/wraith/articles/2564519.html",children:"\u5e7b\u5f7111 ORACLE\u4e2d\u7684\u5faa\u73af\u603b\u7ed3"})}),"\n",(0,r.jsx)(e.h2,{id:"begin-end\u5199\u6cd5",children:"begin end\u5199\u6cd5"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"DECLARE \n        v_currenttime timestamp;\n  BEGIN\n        v_currenttime := SYSDATE();\n    UPDATE test\n       SET COMPLETE   = 'Y',\n         UPDATETIME = v_currenttime\n     WHERE STEPCODE = 10;\n  EXCEPTION\n    WHEN OTHERS THEN\n        dbms_output.put_line('code:' || sqlcode);\n        dbms_output.put_line('errm:' || sqlerrm);\n        dbms_output.put_line('lineno:' || dbms_utility.format_error_backtrace);\n      ROLLBACK;\n      RETURN;\n  END;\n"})}),"\n",(0,r.jsx)(e.h2,{id:"\u67e5\u8be2\u8868\u662f\u5426\u5b58\u5728\u6216\u8005\u5217\u662f\u5426\u5b58\u5728",children:"\u67e5\u8be2\u8868\u662f\u5426\u5b58\u5728\uff0c\u6216\u8005\u5217\u662f\u5426\u5b58\u5728"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"SELECT * FROM USER_TAB_COLS WHERE TABLE_NAME = 'TEST1' AND COLUMN_NAME = 'PWD'; \nSELECT * FROM ALL_TABLES WHERE TABLE_NAME = 'TEST1';\nALTER PROCEDURE JC.INSERT2TEST1 COMPILE;\n"})}),"\n",(0,r.jsx)(e.h2,{id:"\u50a8\u5b58\u8fc7\u7a0b\u81ea\u52a8\u7f16\u8bd1\u6240\u6709\u65e0\u6548\u5b58\u50a8\u8fc7\u7a0b",children:"\u50a8\u5b58\u8fc7\u7a0b\u81ea\u52a8\u7f16\u8bd1\u6240\u6709\u65e0\u6548\u5b58\u50a8\u8fc7\u7a0b"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsx)(e.li,{children:"begin end \u7248\u672c"}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"DECLARE\n    V_OBJECT_NAME ALL_OBJECTS.OBJECT_NAME%TYPE;-- \u5b9a\u4e49\u5b57\u6bb5\u7c7b\u578b\u4e3aALL_OBJECTS\u8868\u4e2dOBJECT_NAME\u5217\u7c7b\u578b\n    V_SQL VARCHAR(1024);\n    V_CNT NUMBER(5);\nCURSOR CURSOR_OBJECTNAME IS \n    SELECT OBJECT_NAME FROM ALL_OBJECTS WHERE \n            OWNER = 'JC' AND OBJECT_TYPE = 'PROCEDURE' AND STATUS = 'INVALID';\nBEGIN\n    SELECT COUNT(1) INTO V_CNT  FROM ALL_OBJECTS WHERE OWNER = 'JC' AND \n            OBJECT_TYPE = 'PROCEDURE' AND STATUS = 'INVALID';\n    OPEN CURSOR_OBJECTNAME;\n    LOOP \n        BEGIN \n            FETCH CURSOR_OBJECTNAME INTO V_OBJECT_NAME;\n            EXIT WHEN CURSOR_OBJECTNAME%NOTFOUND;\n            -- \u6ce8\u610f\u62fc\u63a5\u65f6\u9700\u8981\u52a0\u7a7a\u683c\n            V_SQL := 'ALTER PROCEDURE '|| V_OBJECT_NAME ||' COMPILE';\n            --DBMS_OUTPUT.PUT_LINE(V_SQL);\n            EXECUTE IMMEDIATE V_SQL;\n            DBMS_OUTPUT.PUT_LINE(V_OBJECT_NAME || ' finished complied ');\n        EXCEPTION\n        WHEN OTHERS THEN\n            DBMS_OUTPUT.PUT_LINE('code:' || SQLCODE);\n            DBMS_OUTPUT.PUT_LINE('errm:' || SQLERRM);\n            DBMS_OUTPUT.PUT_LINE('lineno:' || DBMS_UTILITY.FORMAT_ERROR_BACKTRACE);\n        END;\n    END LOOP;\n    DBMS_OUTPUT.PUT_LINE('total compiled ' || V_CNT || ' !');\nEND;\n"})}),"\n",(0,r.jsxs)(e.ol,{start:"2",children:["\n",(0,r.jsx)(e.li,{children:"\u5b58\u50a8\u8fc7\u7a0b\u7248\u672c"}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"CREATE OR REPLACE PROCEDURE JC.compile_invalid_procedure\nAS\n    V_OBJECT_NAME ALL_OBJECTS.OBJECT_NAME%TYPE;\n    V_SQL VARCHAR(1024);\n    V_CNT NUMBER(5);\nCURSOR CURSOR_OBJECTNAME IS \n    SELECT OBJECT_NAME FROM ALL_OBJECTS WHERE \n            OWNER = 'JC' AND OBJECT_TYPE = 'PROCEDURE' AND STATUS = 'INVALID';\nBEGIN\n    SELECT COUNT(1) INTO V_CNT  FROM ALL_OBJECTS WHERE OWNER = 'JC' AND \n            OBJECT_TYPE = 'PROCEDURE' AND STATUS = 'INVALID';\n    OPEN CURSOR_OBJECTNAME;\n    LOOP \n        BEGIN \n            FETCH CURSOR_OBJECTNAME INTO V_OBJECT_NAME;\n            EXIT WHEN CURSOR_OBJECTNAME%NOTFOUND;\n            V_SQL := 'ALTER PROCEDURE '|| V_OBJECT_NAME ||' COMPILE';\n            EXECUTE IMMEDIATE V_SQL;\n            DBMS_OUTPUT.PUT_LINE(V_OBJECT_NAME || ' finished complied ');\n        EXCEPTION\n        WHEN OTHERS THEN\n            DBMS_OUTPUT.PUT_LINE('code:' || SQLCODE);\n            DBMS_OUTPUT.PUT_LINE('errm:' || SQLERRM);\n            DBMS_OUTPUT.PUT_LINE('lineno:' || DBMS_UTILITY.FORMAT_ERROR_BACKTRACE);\n        END;\n    END LOOP;\n    DBMS_OUTPUT.PUT_LINE('total compiled ' || V_CNT || ' !');\nEND;\n"})}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:"NOTE: \u5982\u679c\u4f7f\u7528dbeaver \u521b\u5efa\u5b58\u50a8\u8fc7\u7a0b\uff0c\u5728sql\u7a97\u53e3\u4e2d\u6267\u884c\u65f6\uff0c\u4f7f\u7528crl+end \u628a\u6574\u4e2a\u811a\u672c\u4f5c\u4e3a\u4e00\u4e2asql\u6267\u884c;"}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"\u67e5\u8be2oracle-\u6570\u636e\u5e93\u4e2d\u6307\u5b9a\u7528\u6237\u4e0b-\u7684\u5b58\u50a8\u8fc7\u7a0b",children:"\u67e5\u8be2oracle \u6570\u636e\u5e93\u4e2d\u6307\u5b9a\u7528\u6237\u4e0b \u7684\u5b58\u50a8\u8fc7\u7a0b"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"SELECT OBJECT_NAME ,LAST_DDL_TIME ,STATUS FROM ALL_OBJECTS \n    WHERE \n        OWNER = 'JC' AND \n        OBJECT_TYPE = 'PROCEDURE' AND \n        TO_CHAR(LAST_DDL_TIME,'yyyy-mm-dd') < '2022-12-20';\n"})}),"\n",(0,r.jsx)(e.h2,{id:"sql-\u9519\u8bef-17041-99999-\u7d22\u5f15\u4e2d\u4e22\u5931--in-\u6216-out-\u53c2\u6570",children:"SQL \u9519\u8bef [17041] [99999]: \u7d22\u5f15\u4e2d\u4e22\u5931  IN \u6216 OUT \u53c2\u6570"}),"\n",(0,r.jsx)(e.p,{children:"\u53ef\u80fd\u539f\u56e0\uff1a\u5728\u8c03\u7528\u50a8\u5b58\u8fc7\u7a0b\u65f6\uff0cCALL XXX ();"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)("font",{style:{color:"red"},children:"\u50a8\u5b58\u8fc7\u7a0b\u540d\u79f0\u540e\u9762\u4e0d\u80fd\u6709\u7a7a\u683c"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u5165\u53c2\u4e0d\u8981\u4f7f\u7528?\u4f5c\u4e3a\u5c55\u4f4d\u7b26\u53f7\uff0c\u5982\u679c\u4e3a\u7a7a\u76f4\u63a5\u4f7f\u7528'' \u6216\u8005 null\u5373\u53ef"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"\u91cd\u7f6eoracle\u6570\u636e\u5e93\u5bc6\u7801",children:"\u91cd\u7f6eOracle\u6570\u636e\u5e93\u5bc6\u7801"}),"\n",(0,r.jsxs)(e.p,{children:["Shell \u7a97\u53e3\u6267\u884c",(0,r.jsx)(e.code,{children:"sqlplus / as sysdba"})," \u62a5\u9519\uff1a",(0,r.jsx)(e.code,{children:"-bash: connect: command not found"}),"\uff0c\u6b64\u65f6 \u9700\u8981\u5207\u6362\u5230oracle\u7528\u6237"]}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:"NOTE:"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\u6ce8\u610f\u4f7f\u7528",(0,r.jsx)(e.code,{children:"su - oracle"}),"\uff0c\u8fd9\u6837\u73af\u5883\u53d8\u91cf\u624d\u4e0d\u4f1a\u5931\u6548"]}),"\n",(0,r.jsxs)(e.li,{children:["\u6216\u8005\u4f7f\u7528 ",(0,r.jsx)(e.code,{children:"su oracle"})," \u53ea\u4e0d\u8fc7\u8981\u6267\u884c\u4e00\u4e0b\u547d\u4ee4",(0,r.jsx)(e.code,{children:"source ~/.bash_profile"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"Oracle \u521b\u5efa\u7528\u6237\u6388\u6743\u767b\u64cd\u4f5c"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.code,{children:"alter user system identified by 123456;"})}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.a,{href:"https://www.cnblogs.com/zbh355376/p/14273464.html",children:"\u5176\u4ed6dba\u64cd\u4f5c \u53c2\u8003\u6b64\u535a\u6587"})}),"\n",(0,r.jsx)(e.h2,{id:"\u53c2\u8003\u8d44\u6599",children:"\u53c2\u8003\u8d44\u6599\uff1a"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsx)(e.li,{children:"\u4e66\u7c4d ORCACLE PL/SQL\u5b9d\u5178"}),"\n",(0,r.jsxs)(e.li,{children:["\u5f15\u7528\u535a\u5ba2 ",(0,r.jsx)(e.a,{href:"https://www.cnblogs.com/wraith/articles/2564519.html",children:"\u5e7b\u5f7111 ORACLE\u4e2d\u7684\u5faa\u73af\u603b\u7ed3"})]}),"\n",(0,r.jsxs)(e.li,{children:["DBA\u64cd\u4f5c ",(0,r.jsx)(e.a,{href:"https://www.cnblogs.com/zbh355376/p/14273464.html",children:"\u5176\u4ed6dba\u64cd\u4f5c \u53c2\u8003\u6b64\u535a\u6587"})]}),"\n"]}),"\n",(0,r.jsx)(e.admonition,{title:"\u534f\u8bae",type:"tip",children:(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["\u672c\u4f5c\u54c1\u4ee3\u7801\u90e8\u5206\u91c7\u7528 ",(0,r.jsx)(e.a,{href:"https://www.apache.org/licenses/LICENSE-2.0",children:"Apache 2.0\u534f\u8bae"}),"\u8fdb\u884c\u8bb8\u53ef\u3002\u9075\u5faa\u8bb8\u53ef\u7684\u524d\u63d0\u4e0b\uff0c\u4f60\u53ef\u4ee5\u81ea\u7531\u5730\u5bf9\u4ee3\u7801\u8fdb\u884c\u4fee\u6539\uff0c\u518d\u53d1\u5e03\uff0c\u53ef\u4ee5\u5c06\u4ee3\u7801\u7528\u4f5c\u5546\u4e1a\u7528\u9014\u3002\u4f46\u8981\u6c42\u4f60\uff1a"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"\u7f72\u540d"}),"\uff1a\u5728\u539f\u6709\u4ee3\u7801\u548c\u884d\u751f\u4ee3\u7801\u4e2d\uff0c\u4fdd\u7559\u539f\u4f5c\u8005\u7f72\u540d\u53ca\u4ee3\u7801\u6765\u6e90\u4fe1\u606f\u3002"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"\u4fdd\u7559\u8bb8\u53ef\u8bc1"}),"\uff1a\u5728\u539f\u6709\u4ee3\u7801\u548c\u884d\u751f\u4ee3\u7801\u4e2d\uff0c\u4fdd\u7559Apache 2.0\u534f\u8bae\u6587\u4ef6\u3002"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["\u672c\u4f5c\u54c1\u6587\u6863\u90e8\u5206\u91c7\u7528",(0,r.jsx)(e.a,{href:"http://creativecommons.org/licenses/by/4.0/",children:"\u77e5\u8bc6\u5171\u4eab\u7f72\u540d 4.0 \u56fd\u9645\u8bb8\u53ef\u534f\u8bae"}),"\u8fdb\u884c\u8bb8\u53ef\u3002 \u9075\u5faa\u8bb8\u53ef\u7684\u524d\u63d0\u4e0b\uff0c\u4f60\u53ef\u4ee5\u81ea\u7531\u5730\u5171\u4eab\uff0c\u5305\u62ec\u5728\u4efb\u4f55\u5a92\u4ecb\u4e0a\u4ee5\u4efb\u4f55\u5f62\u5f0f\u590d\u5236\u3001\u53d1\u884c\u672c\u4f5c\u54c1\uff0c\u4ea6\u53ef\u4ee5\u81ea\u7531\u5730\u6f14\u7ece\u3001\u4fee\u6539\u3001\u8f6c\u6362\u6216\u4ee5\u672c\u4f5c\u54c1\u4e3a\u57fa\u7840\u8fdb\u884c\u4e8c\u6b21\u521b\u4f5c\u3002\u4f46\u8981\u6c42\u4f60\uff1a"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"\u7f72\u540d"}),"\uff1a\u5e94\u5728\u4f7f\u7528\u672c\u6587\u6863\u7684\u5168\u90e8\u6216\u90e8\u5206\u5185\u5bb9\u65f6\u5019\uff0c\u6ce8\u660e\u539f\u4f5c\u8005\u53ca\u6765\u6e90\u4fe1\u606f\u3002"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"\u975e\u5546\u4e1a\u6027\u4f7f\u7528"}),"\uff1a\u4e0d\u5f97\u7528\u4e8e\u5546\u4e1a\u51fa\u7248\u6216\u5176\u4ed6\u4efb\u4f55\u5e26\u6709\u5546\u4e1a\u6027\u8d28\u7684\u884c\u4e3a\u3002\u5982\u9700\u5546\u4e1a\u4f7f\u7528\uff0c\u8bf7\u8054\u7cfb\u4f5c\u8005\u3002"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"\u76f8\u540c\u65b9\u5f0f\u5171\u4eab\u7684\u6761\u4ef6"}),"\uff1a\u5728\u672c\u6587\u6863\u57fa\u7840\u4e0a\u6f14\u7ece\u3001\u4fee\u6539\u7684\u4f5c\u54c1\uff0c\u5e94\u5f53\u7ee7\u7eed\u4ee5\u77e5\u8bc6\u5171\u4eab\u7f72\u540d 4.0\u56fd\u9645\u8bb8\u53ef\u534f\u8bae\u8fdb\u884c\u8bb8\u53ef\u3002"]}),"\n"]}),"\n"]}),"\n"]})})]})}function O(n={}){const{wrapper:e}={...(0,l.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(R,{...n})}):R(n)}},73:(n,e,E)=>{E.d(e,{Z:()=>d,a:()=>i});var r=E(959);const l={},s=r.createContext(l);function i(n){const e=r.useContext(s);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:i(n.components),r.createElement(s.Provider,{value:e},n.children)}}}]);