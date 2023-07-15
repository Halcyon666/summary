---
title: Oracle存储过程
sidebar_label: Oracle存储过程
sidebar_position: 1
---

## ORACLE 存储过程语法

```sql
CREATE [OR REPLACE] PROCEDURE [schema.] procedure_name 
[parameter_name] [[IN] datatype [{:=|DEFAULT} expression] 
| {OUT | IN OUT} [NOCOPY] datatype][,...]{IS | AS} BODY;
```

## 执行无参数的存储过程

`EXEC procedure_name;`

## 执行有参数的存储过程

`EXEC procedure_name(parameters);`

## 如果存储过程中有输出语句，需要设置SERVEROUTPUT的输出状态

```sql
SHOW SERVEROUTPUT -- 查看
SET SERVEROUTPUT ON -- 开启
```

## 创建无参数的存储过程

* 修改READERINFO2表中BOOKCOUNT的数据，为计算机系可借书的数目增加1
  
  ```sql
  CREATE PROCEDURE PRO_READER
  AS
  BEGIN
  UPDATE READERINFO2 SET BOOKCOUNT = BOOKCOUNT+1
  WHERE UNIT = '计算机系';
  END;
  ```

## 在存储过程中使用游标
* 搜索READERINFO2表中所有自动化系和生物系的数据，并判断当借书的数据（BOOKCOUNT）小于3时，为其增加1

```sql

CREATE PROCEDURE PRO_READER_COT
AS
    v_readerinfo READERINFO2%ROWTYPE;-- 声明标变量v_readerinfo，其数据类型为READERINFO2行记录类型
    -- 也可声明为列类型 READERINFO2.bookcount%TYPE

    CURSOR cursor_readerinfo
    IS 
    SELECT *
    FROM READERINFO2
    WHER UNIT IN('自动化系','生物系')
    ORDER BY UNIT;-- 表示声明创建游标cursor_readerinfo

    BEGIN
        OPE cursor_readerinfo; --打开游标
        LOOP
            FETCH cursor_readerinfo INTO v_readerinfo; -- 从游标中提取指针指向当前行数据，并存入标量v_readerinfo
            EXIT WHEN cursor_readerinfo%NOTFOUND; -- 表示进行判断，当游标指针到尾部时，将结束循环
            IF v_readerinfo.bookcount < 3 THEN
                UPDATE READERINFO2 SET BOOKCOUNT = BOOKCOUNT+1
                WHERE READERID = v_readerinfo.readerid;
            END IF;
        END LOOP;
    END;
```

## 在存储过程中创建表

* 要求在存储过程中创建一个表用于存储临时数据

  

```sql
CREATE PROCEDURE PRO_CRTTAB
AS
tabeexists VARCHAR2(2); -- 声明变量
my_createtab VARCHAR2(400);
BEGIN 
    SELECT COUNT(1) INTO tabeexists
    FROM ALL_TABLES
    WHERE TABLE_NAME = 'MY_TEST_TAB';-- 从ALL_TABLES数据字典中查询是否已经存在临时表MY_TEST_TAB,并把结果赋值给变量tabeexists
    my_createtab := 'CREATE GLOBAL TEMPORARY TABLE MY_TEST_TAB
 (TEST VARCHAR2(20) not null)
  ON Commit Preserve Rows';-- 表示变量my_createtab赋值创建临时表的语句

IF tabeexists = 0 THEN 
    EXECUTE IMMEDIATE my_createtab;
    DBMS_OUTPUT.PUT_LINE('临时表创建成功...');
ELSE
    EXECUTE IMMEDIATE 'DELETE FROM MY_TEST_TAB';
    DBMS_OUTPUT.PUT_LINE('记录已经删除...');
END IF;
END;
```

使用`GRANT CREATE ANY TABLE TO <USER>`为用户赋予权限

## 带有参数的存储过程
在调用时，通过制定所需要的参数值，实现特定的功能。在创建时，还可以为参数制定默认值。存储过程一旦使用了参数，那么在执行存储过程时则要求必须为其制定参数，参数允许是常量、变量、表达式等。

存储过程的参数有输入、输出、输入输出3中类型。其中输入参数也是默认的参数，也叫IN类型参数。

* 要求创建一个存储过程，用于查询READERINFO表中所有READERID、READENAME、UNIT、BOOKCOUNT，以及其在BOOKINFO表中借阅的图书数目。通过设置输入参数，使得存储过程能够灵活地选择要查询的读者单位，以及能够借阅的最少读书数目，并输出到屏幕。

```sql
CREATE PROCEDURE 
    PRO_READERLIST_SE(unit IN VARCHAR2, minbookcount IN NUMBER)-- 两个输入型参数 unit minbookcount
AS 

TYPE reader_book_rc IS RECORD
(
    v_readerid READERINFO.READERID%TYPE,
    v_readername READERINFO.READERNAME%TYPE,
    v_unit READERINFO.UNIT%TYPE,
    v_bookcount READERINFO.BOOKCOUNT%TYPE,
    v_count_reader NUMBER(8)
);                      -- 声明一个记录类型的数据类型

v_readebook_rc reader_book_rc;-- 声明变量 该变量为记录类型

CURSOR cur_readebook
IS 
SELECT R.readerid, R.readername, R.unit, R.bookcount, Count(B.reader)borrowedbooks
    FROM ReaderInfo R
    LEFT OUTER JOIN BookInfo B 
    ON R.readerid=B.reader
    WHERE R.unit like unit
    AND R.bookcount >= minbookcount
    GROUP BY R.readerid, R.readerid, R.readername, R.unit, R.bookcount
    ORDER BY R.bookcount;-- 创建游标，该游标关联的查询语句有条件，该条件来自于该存储过程的输入类型参数

BEGIN 
OPEN cur_readebook;

    LOOP
        FETCH cur_readebook INTO v_readebook_rc;
        EXIT WHEN cur_readebook %NOTFOUND;
        DBMS_OUTPUT.PUT_LINE(v_readebook_rc.v_readerid 
        ||'-'|| v_readebook_rc.v_readername
        ||'-'|| v_readebook_rc v_unit
        ||'-'|| v_readebook_rc v_bookcount
        ||'-'|| v_readebook_rc v_count_reader);
    END LOOP; -- 利用循环遍历游标，把变量中的数据取出并输出到屏幕
CLOSE cur_readebook;
end;
```

调用存储过程
`EXEC PRO_READERLIST_SE('%', 3)`

为minbookcount设定默认值

```sql
CREATE PROCEDURE 
    PRO_READERLIST_SE(unit IN VARCHAR2, minbookcount IN NUMBER DEFAULT 2)
--后面的省略 同上脚本
```

## 带有输出参数的存储过程的调用

简单实用案例

```sql
-- create PROCEDURE
create or replace procedure out_value(param1 in out VARCHAR2)
as
begin
  param1 := param1;
end;
/

-- CALL
declare
  param1 VARCHAR2(1000) := sys_guid(); 
BEGIN
  out_value(param1);
  dbms_output.put_line('param1='||param1);
END;
/
```

* 要求创建一个带有输出参数的存储过程，然后调用它为变量赋值。
1. 创建带有输出参数的存储过程。设置存储过程 PRO_OUT_ELT，该存储过程电邮一个输出参数，它的功能是返回输出参数的值。

```sql
CREATE PROCEDURE PRO_OUT_ELT(parm_out OUT VARCHAR2)
AS 
BEGIN
    parm_out := '计算机系';
END;
/
```

2. 调用PRO_OUT_ELT存储过程为变量赋值。创建存储过程 PRO_READER_CLOSE，在该存储过程中调用PRO_OUT_ELT为变量赋值。

```sql
CREATE PROCEDURE PRO_READER_CLOSE
AS 
    v_readerinfo READERINFO2%ROWTYPE;
    v_elmts varchar2(30);

    CURSOR cursor_readerinfose
    IS 
    SELECT * FROM READERINFO2
    WHERE UNIT = v_elmts
    ORDER BY UNIT; -- 声明游标和关联条件，查询条件中使用了变量v_elmts

BEGIN 
PRO_OUT_ELT(v_elmts); -- 调用存储过程PRO_OUT_ELT，为v_elmts赋值

OPEN cursor_readerinfose;
    LOOP
        FETCH cursor_readerinfose INTO v_readerinfo;
        EXIT WHEN cursor_readerinfose%NOTFOUND;
        IF V_readerinfo.bookcount < 3 THEN 
            UPDATE READERINFO2 SET BOOKCOUNT = BOOKCOUNT+1
            WHERE READERID = v_readerinfo.readerid;
            DBMS_OUTPUT.PUT_LINE('数据修改完毕...');
        END IF;
    END LOOP;
END;
/
```

3. 创建PRO_OUT_EL, PRO_READER_CLOSE 利用EXEC命令 PRO_READER_CLOSE

**TIPS**

调用OUT类型参数得存储过程时，需要用变量填充，而不能用常量表达式填充。

在调用存储过程中，如果因发生未处理的异常而中断，那么调用者一般不会得到任何OUT参数的值，而在异常被处理的情况下推出，在发生一次航之前所获取的OUT参数值将被调用者获得。

在存储过程中某个参数既可以是输入参数也可以是输出参数类型的参数，它既可以接收数据，也可以返回数据。
`parameter IN OUT datatype`

## 查看存储过程

在Oracle的数据字典 USER_SOURCE 中记录用户定义的存储过程的元数据

* 从 USER_SOURCE 中查询当前用户的所有存储过程名称

```sql
SELECT DISTINCT NAME FROM USER_SOURCE 
WHERE TYPE = 'PROCEDURE'
```

```sql
-- 只查看当前用户所有的存储过程，不查看具体的脚本
SELECT * FORM USER_OBJECTS WHERE object_type = 'PROCEDURE';
```

* 查询存储过程的创建脚本
  
  ```sql
  SELECT NAME, LINE, TEXT, FROM USER_SOURCE-- line为脚本编号 text里面存放了存储过程的相关脚本
  WHERE TYPE = 'PROCEDURE' AND NAME = 'PRO_READER'
  ```

## 查看存储过程的错误

错误提示语句的结构
`select * from SYS.USER_ERRORS where NAME = upper('procedure_name'); `
查询不到请用这个SQL
`select * from SYS.ALL_ERRORS where NAME = upper('procedure_name'); `

```sql
-- 该脚本有错误 编译错误 '计算机系'后面少了分号
CREATE PROCEDURE PRO_READER2
AS 

BEGIN
    UPDATE READERINFO2 SET BOOKCOUNT = BOOKCOUNT+1
    WHERE UNIT = '计算机系'

END;
/
```

## 存储过程的修改

```sql
CREATE [OR REPLACE] PROCEDURE [schema.] procedure_name 
[parameter_name] [[IN] datatype [{:=|DEFAULT} expression] 
| {OUT | IN OUT} [NOCOPY] datatype][,...]{IS | AS} BODY;
```

* [OR REPLACE] 项是可选部分，当省略时表示全新的创建，否则表示覆盖原有的存储过程。通常带着该选项，这样方便修改存储过程。

## 存储过程的重新编译

当存储过程的引用对象失效时调用者就会出现失效的情况，当这种情况出现时，只要不是脚本出现问题，只需要重新编译就可以正常使用了。
`ALTER PROCEDURE procedure_name COMPILE;`

## 删除存储过程

`DROP PROCEDURE [ schema. ] procedure_name`

## 函数的创建语法结构

```sql
CREATE FUNCTION [ schema. ] function_name
    [
    (paramter_declaration [, paramter_declaration])
    ]
    RETURN datatype
    {IS | AS}
    [declare_selection]

    BEGIN 
        statement [ statement | pagma ]...
            [EXCEPTION exception_handler [ exception_handler] ... ]
    END [name];
/
```

**使用自定义函数注意**

自定义函数尽量不要操作数据库数据

如果在标准SQL调用自定义函数，那么被调用函数不允许有输出类型的参数。

如果在标准SQL中调用自定义函数，那么被调用函数将不能有事务操作语句和DDL语句等。

查询或增加、修改、删除操作所调用的函数降不允许操作任何数据表

## 创建无参数函数

* 要求创建函数，该函数可以返回当前的登录用户

```sql
CREATE FUNCTION MYUSER
RETURN VARCHAR2
IS 
    v_qnty VARCHAR2(20); --表示声明函数内部的变量，为VARCHAR2类型

BEGIN
    SELECT SYS.LOGIN_USER INTO v_qnty
    FROM DUAL;
    RETURN v_qnty;
END;
/
```

## 创建有参数函数

```sql
CREATE FUNCTION GETUNIT(in_readerid IN VARCHAR2) --创建函数GETUNIT，带有一个输入类型的参数
RETURN VARCHAR2 IS 
    v_readerid VARCHAR2(20);
BEGIN
    SELECT UNIT INTO v_readerid FROM READERINFO2 WHERE
    READERID = inreaderid;
    RETURN v_readerid;
END;
/
```

```sql
var v_unit VARCHAR2(10);
EXEC :v_unit := GETUNIT('9702')
```

* 要求创建函数，该函数带有两个输出参数，在根据BOOKID查询BOOKINFO表时，能够返回图书名称、出版社及作者

```sql
CREATE FUNCTION GETBOOKINFO(in_bookid IN NUMBER, out_pulish OUT VARCHAR2, out_author OUT VARCHAR2)
RETURN VARCHAR2
IS 
    v_bookname VARCHAR2(20);
    v_out_publish VARCHAR2(50);
    v_out_author VARCHAR2(50);

BEGIN
    SELECT BOOKNAME. PUBLISH, AUTHOR INTO 
    v_bookname, v_out_publish, v_author
    FROM BOOKID = in_bookid;
    out_publish := v_out_publish;
    out_author := v_out_author;
    RETURN v_bookname;
END;
/
```

* 在不增加函数参数的基础上，返回图书的价格
  
  ```sql
  CREATE FUNCTION GETBOOKINFO(in_bookid IN OUT NUMBER, out_pulish OUT VARCHAR2, out_author OUT VARCHAR2)
  RETURN VARCHAR2
  IS 
    v_bookname VARCHAR2(20);
    v_out_publish VARCHAR2(50);
    v_out_author VARCHAR2(50);
    v_out_price NUMBER(8);
  BEGIN
      SELECT BOOKNAME. PUBLISH, AUTHOR, PRICE INTO 
      v_bookname, v_out_publish, v_author, v_out_price
      FROM BOOKID = in_bookid;
      out_publish := v_out_publish;
      out_author := v_out_author;
      in_bookid := v_out_price;
      RETURN v_bookname;
  END;
  /
  ```



```sql
## 查看函数

```sql
-- 查看函数列表
SELECT OBJECT_NAEM, OBJECT_ID, STATUS FROM USER_OBJECTS WHERE OBJECT_TYPE = 'FUNCTION';/
-- 查看函数相关脚本
SELECT * FROM USER_SOURCE WHERE TYPE = 'FUNCTION' AND NAME = 'MYUSER' ORDER BY LINE;/
```



## 修改函数

```sql
CREATE OR REPLACE FUNCTION MYUSER
RETURN VARCHAR2
IS 
    v_qnty VARCHAR2(20); --表示声明函数内部的变量，为VARCHAR2类型

BEGIN
    SELECT SYS.LOGIN_USER INTO v_qnty
    FROM DUAL;
    RETURN v_qnty;
END;
/
```

## 重新、删除编译函数

```sql
ALTER FUNCTION function_name COMILE;
DROP FUNCTION function_name;
```



## ORACLE 循环结构 IF WHILE FOR

[幻影11 ORACLE中的循环总结](https://www.cnblogs.com/wraith/articles/2564519.html)

## begin end写法

```sql
DECLARE 
        v_currenttime timestamp;
  BEGIN
        v_currenttime := SYSDATE();
    UPDATE test
       SET COMPLETE   = 'Y',
         UPDATETIME = v_currenttime
     WHERE STEPCODE = 10;
  EXCEPTION
    WHEN OTHERS THEN
        dbms_output.put_line('code:' || sqlcode);
        dbms_output.put_line('errm:' || sqlerrm);
        dbms_output.put_line('lineno:' || dbms_utility.format_error_backtrace);
      ROLLBACK;
      RETURN;
  END;
```

## 查询表是否存在，或者列是否存在

```sql
SELECT * FROM USER_TAB_COLS WHERE TABLE_NAME = 'TEST1' AND COLUMN_NAME = 'PWD'; 
SELECT * FROM ALL_TABLES WHERE TABLE_NAME = 'TEST1';
ALTER PROCEDURE JC.INSERT2TEST1 COMPILE;
```

## 储存过程自动编译所有无效存储过程

1. begin end 版本

```sql
DECLARE
    V_OBJECT_NAME ALL_OBJECTS.OBJECT_NAME%TYPE;-- 定义字段类型为ALL_OBJECTS表中OBJECT_NAME列类型
    V_SQL VARCHAR(1024);
    V_CNT NUMBER(5);
CURSOR CURSOR_OBJECTNAME IS 
    SELECT OBJECT_NAME FROM ALL_OBJECTS WHERE 
            OWNER = 'JC' AND OBJECT_TYPE = 'PROCEDURE' AND STATUS = 'INVALID';
BEGIN
    SELECT COUNT(1) INTO V_CNT  FROM ALL_OBJECTS WHERE OWNER = 'JC' AND 
            OBJECT_TYPE = 'PROCEDURE' AND STATUS = 'INVALID';
    OPEN CURSOR_OBJECTNAME;
    LOOP 
        BEGIN 
            FETCH CURSOR_OBJECTNAME INTO V_OBJECT_NAME;
            EXIT WHEN CURSOR_OBJECTNAME%NOTFOUND;
            -- 注意拼接时需要加空格
            V_SQL := 'ALTER PROCEDURE '|| V_OBJECT_NAME ||' COMPILE';
            --DBMS_OUTPUT.PUT_LINE(V_SQL);
            EXECUTE IMMEDIATE V_SQL;
            DBMS_OUTPUT.PUT_LINE(V_OBJECT_NAME || ' finished complied ');
        EXCEPTION
        WHEN OTHERS THEN
            DBMS_OUTPUT.PUT_LINE('code:' || SQLCODE);
            DBMS_OUTPUT.PUT_LINE('errm:' || SQLERRM);
            DBMS_OUTPUT.PUT_LINE('lineno:' || DBMS_UTILITY.FORMAT_ERROR_BACKTRACE);
        END;
    END LOOP;
    DBMS_OUTPUT.PUT_LINE('total compiled ' || V_CNT || ' !');
END;
```

2. 存储过程版本

```sql
CREATE OR REPLACE PROCEDURE JC.compile_invalid_procedure
AS
    V_OBJECT_NAME ALL_OBJECTS.OBJECT_NAME%TYPE;
    V_SQL VARCHAR(1024);
    V_CNT NUMBER(5);
CURSOR CURSOR_OBJECTNAME IS 
    SELECT OBJECT_NAME FROM ALL_OBJECTS WHERE 
            OWNER = 'JC' AND OBJECT_TYPE = 'PROCEDURE' AND STATUS = 'INVALID';
BEGIN
    SELECT COUNT(1) INTO V_CNT  FROM ALL_OBJECTS WHERE OWNER = 'JC' AND 
            OBJECT_TYPE = 'PROCEDURE' AND STATUS = 'INVALID';
    OPEN CURSOR_OBJECTNAME;
    LOOP 
        BEGIN 
            FETCH CURSOR_OBJECTNAME INTO V_OBJECT_NAME;
            EXIT WHEN CURSOR_OBJECTNAME%NOTFOUND;
            V_SQL := 'ALTER PROCEDURE '|| V_OBJECT_NAME ||' COMPILE';
            EXECUTE IMMEDIATE V_SQL;
            DBMS_OUTPUT.PUT_LINE(V_OBJECT_NAME || ' finished complied ');
        EXCEPTION
        WHEN OTHERS THEN
            DBMS_OUTPUT.PUT_LINE('code:' || SQLCODE);
            DBMS_OUTPUT.PUT_LINE('errm:' || SQLERRM);
            DBMS_OUTPUT.PUT_LINE('lineno:' || DBMS_UTILITY.FORMAT_ERROR_BACKTRACE);
        END;
    END LOOP;
    DBMS_OUTPUT.PUT_LINE('total compiled ' || V_CNT || ' !');
END;
```

> NOTE: 如果使用dbeaver 创建存储过程，在sql窗口中执行时，使用crl+end 把整个脚本作为一个sql执行;

## 查询oracle 数据库中指定用户下 的存储过程

```sql
SELECT OBJECT_NAME ,LAST_DDL_TIME ,STATUS FROM ALL_OBJECTS 
    WHERE 
        OWNER = 'JC' AND 
        OBJECT_TYPE = 'PROCEDURE' AND 
        TO_CHAR(LAST_DDL_TIME,'yyyy-mm-dd') < '2022-12-20';
```

## SQL 错误 [17041] [99999]: 索引中丢失  IN 或 OUT 参数

可能原因：在调用储存过程时，CALL XXX ();

1. <font style={{color: 'red'}}>储存过程名称后面不能有空格</font>

2. 入参不要使用?作为展位符号，如果为空直接使用'' 或者 null即可

## 重置Oracle数据库密码

Shell 窗口执行`sqlplus / as sysdba` 报错：`-bash: connect: command not found`，此时 需要切换到oracle用户

> NOTE:
> 
> - 注意使用`su - oracle`，这样环境变量才不会失效
> - 或者使用 `su oracle` 只不过要执行一下命令`source ~/.bash_profile`

Oracle 创建用户授权登操作

`alter user system identified by 123456;`

[其他dba操作 参考此博文](https://www.cnblogs.com/zbh355376/p/14273464.html)

## 参考资料：

1. 书籍 ORCACLE PL/SQL宝典
2. 引用博客 [幻影11 ORACLE中的循环总结](https://www.cnblogs.com/wraith/articles/2564519.html)
3. DBA操作 [其他dba操作 参考此博文](https://www.cnblogs.com/zbh355376/p/14273464.html)


:::tip 协议

- 本作品代码部分采用 [Apache 2.0协议](https://www.apache.org/licenses/LICENSE-2.0)进行许可。遵循许可的前提下，你可以自由地对代码进行修改，再发布，可以将代码用作商业用途。但要求你：
  - **署名**：在原有代码和衍生代码中，保留原作者署名及代码来源信息。
  - **保留许可证**：在原有代码和衍生代码中，保留Apache 2.0协议文件。

- 本作品文档部分采用[知识共享署名 4.0 国际许可协议](http://creativecommons.org/licenses/by/4.0/)进行许可。 遵循许可的前提下，你可以自由地共享，包括在任何媒介上以任何形式复制、发行本作品，亦可以自由地演绎、修改、转换或以本作品为基础进行二次创作。但要求你：
  - **署名**：应在使用本文档的全部或部分内容时候，注明原作者及来源信息。
  - **非商业性使用**：不得用于商业出版或其他任何带有商业性质的行为。如需商业使用，请联系作者。
  - **相同方式共享的条件**：在本文档基础上演绎、修改的作品，应当继续以知识共享署名 4.0国际许可协议进行许可。

:::