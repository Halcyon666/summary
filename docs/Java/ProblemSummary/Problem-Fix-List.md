
# The Problems of Development

## ORACLE 11G R2安装

### 安装步骤

[安装步骤地址](https://www.cnblogs.com/lightnear/archive/2012/10/07/2714247.html)

### 报错处理一

```
ORA-01078: failure in processing system parameters
LRM-00109: could not open parameter file '/data/oracle/product/11.2.0/db_1/dbs/initorcl.ora
```

[处理方案](https://blog.csdn.net/yanjian_0809/article/details/85060706)

### 报错处理二

```
ORA-00205: error in identifying control file, check alert log for more info
```

[处理方案](https://dbatricksworld.com/ora-00205-error-in-identifying-control-file-check-alert-log-for-more-info/)

具体操作步骤：

* 使用命令dbca创建数据库jc中，去/usr/oracle/app中执行如下命令：即可拿到control_files路径。
  `find . -name control0*`
* 在SQL>窗口中执行如下命令，看control_files的路径如查找到的是否一致

```
show parameter control_files
alter system set control_files='/usr/oracle/app/oradata/jc/control01.ctl'  scope=spfile;
alter system set control_files='/usr/oracle/app/flash_recovery_area/jc/control02.ctl'  scope=spfile;
```

### Oralce数据库配置文件

[.bash_profile](https://github.com/whalefall541/my-spring-cloud/blob/master/config4oracle/.bash_profile)
[initjc.ora](https://github.com/whalefall541/my-spring-cloud/blob/master/config4oracle/initjc.ora)

### linux 版 ORACLE自启

[参见博客](https://www.cnblogs.com/shujuyr/p/13089147.html)

### Oracle数据库 字符集中文乱码

[参见博客](https://blog.csdn.net/chengjj2001/article/details/50075815/)



## java开发类报错

### Springboot启动时报错 org.springframework.boot不存在

***建议采用方法二在终端中输入`mvn idea:idea`，方法一在Spring Boot 项目中，运行其他Main方法测试类的时候会重新启动SpringBoot 工程，如果你还从ApplicationContext中获取，那么将会收到报错容器已经关闭。***
[参见博客](https://blog.csdn.net/qq_35456400/article/details/107190640)

### spring boot源码运行SpringApplication时报错

Could not find artifact lifecycle-mapping:lifecycle-mapping:jar:sources:1.0.0
[参见博客](https://blog.csdn.net/awecoder/article/details/101159870)

### 处理Maven远程仓库下载不到jar包问题

*先去[Maven Repository](https://mvnrepository.com/)找到对应的依赖，并下载。*

*去下载目录下执行如下命令，注意替换掉-DgroupId，-DartifactId，-Dversion，-Dfile*
```mvn install:install-file -DgroupId=io.confluent -DartifactId=kafka-schema-registry-client -Dversion=4.1.0 -Dpackaging=jar  -Dfile=kafka-schema-registry-client-4.1.0.jar```

### SQL查询时 null值封装回int类型报 UncategorizedSQLException

将BO属性从int改为Integer类型

```
rg.springframework.jdbc.UncategorizedSQLException: SqlMapClient operation; uncategorized SQLException for SQL []; SQL state [null]; error code [0];
```

[参见博客](https://www.huaweicloud.com/articles/11968406.html)


### SQL查询返回集合类型时时null还是空集合？

- 如果查询结果集为空，则返回空集合；
- 如果结果集外还套一层分组函数`select nvl(sum(a.xxx),default_value) from (select xxx from table_name);`那么一定回返回带一条数据的集合



## 使用Tomcat启动服务出现依赖冲突问题

1. 解决方案 查看报错信息 根据提示找到冲突的类，定位到对应的jar中（直接搜索类名就行了 including no-project items）
2. 去tomcat lib目下查看相关jar；去项目导入的依赖中找到jar。
3. 首先要确定 jar的版本 与当前工程相关的东西是否匹配，如果匹配，则可以进行去除一边的jar包进行测验。一般都能解决问题

## jasper后台，如果打印的模板需要动态区太多，以前封装的框架不够用，怎么办？

这个时候重写框架 ，可能太令人f**k了。当然你也可以找新的版本的POI框架 看看有没有相应的扩展点。

此处不讨论新POI框架的内容；采取只修改jasper文件的方案：

1. 选择文本框一定要是`text field` 不能是`static text`
   ![](https://s2.loli.net/2023/07/15/NkCXDGsSVzqTUMm.png)
2. 在框内写上三元表达式，然后勾选上`remove line when blank` and `blank when null`
   ![](https://s2.loli.net/2023/07/15/vK4etqMGoj2zh69.png)
3. 预览效果 此处是表达式为`1==2?"a":null`的效果图
   ![](https://s2.loli.net/2023/07/15/dMH1Velm5DrwOYg.png)

## 如何配置生成日志文件
```xml
 <!--日志文件主目录：这里${user.home}为当前服务器用户主目录-->
    <property name="LOG_HOME" value="log"/>


    <!--配置日志文件(File)-->
    <appender name="rollingFile" class="ch.qos.logback.core.rolling.RollingFileAppender">
        <!--设置策略-->
        <rollingPolicy class="ch.qos.logback.core.rolling.SizeAndTimeBasedRollingPolicy">
            <!--日志文件路径：这里%d{yyyyMMdd}表示按天分类日志-->
            <FileNamePattern>${LOG_HOME}/%d{yyyyMMdd}.%i.log</FileNamePattern>
            <maxFileSize>30MB</maxFileSize>
            <!--<maxHistory>100</maxHistory>-->
            <!--<totalSizeCap>5GB</totalSizeCap>-->
        </rollingPolicy>
        <!--设置格式-->
        <encoder class="ch.qos.logback.classic.encoder.PatternLayoutEncoder">
            <!--格式化输出：%d表示日期，%thread表示线程名，%-5level：级别从左显示5个字符宽度%msg：日志消息，%n是换行符-->
            <pattern>%d{yyyy-MM-dd HH:mm:ss.SSS} [%thread] %-5level %logger{50} - %msg%n</pattern>
            <!-- 或者使用默认配置 -->
            <!--<pattern>${FILE_LOG_PATTERN}</pattern>-->
            <charset>utf8</charset>
        </encoder>

        <!--日志文件最大的大小-->
        <!--<triggeringPolicy class="ch.qos.logback.core.rolling.SizeBasedTriggeringPolicy">-->
            <!--<MaxFileSize>1KB</MaxFileSize>-->
        <!--</triggeringPolicy>-->
    </appender>
    <root level="info">
        <appender-ref ref="rollingFile" />
    </root>
```

## idea terminal 中文乱码问题

[参考文章](https://blog.csdn.net/xgw1010/article/details/108583796)

```bash
# solve idea terminal Chinese garbled
export LANG="zh_CN.UTF-8"
export LC_ALL="zh_CN.UTF-8"
```

## unable to find main class
方法1. 替换插件
```xml
<!--<plugin>
				<groupId>org.springframework.boot</groupId>
				<artifactId>spring-boot-maven-plugin</artifactId>
				<configuration>
					<mainClass>none</mainClass>     &lt;!&ndash; 取消查找本项目下的Main方法：为了解决Unable to find main class的问题 &ndash;&gt;
					<classifier>execute</classifier>    &lt;!&ndash; 为了解决依赖模块找不到此模块中的类或属性 &ndash;&gt;
				</configuration>
				<executions>
					<execution>
						<goals>
							<goal>repackage</goal>
						</goals>
					</execution>
				</executions>
			</plugin>-->
			<plugin>
				<groupId>org.apache.maven.plugins</groupId>
				<artifactId>maven-source-plugin</artifactId>
				<version>3.0.1</version>
				<executions>
					<execution>
						<id>attach-sources</id>
						<goals>
							<goal>jar</goal>
						</goals>
					</execution>
				</executions>
			</plugin>
```

方法2: 去掉spring-boot parent，再使用spring boot plugin 打包

##  Some Enforcer rules have failed. 

```log
Failed to execute goal org.apache.maven.plugins:maven-enforcer-plugin:1.4.1:enforce
(enforce-versions) on project SIMI: Some Enforcer rules have failed. Look above for
specific messages explaining why the rule failed. -> [Help 1]
```

[not solved! stackoverflow  website](https://stackoverflow.com/questions/45337558/failed-to-execute-goal-org-apache-maven-pluginsmaven-enforcer-plugin?newreg=4546ba2b3da24e02908324ea31452cb8)

To skip enforcer (not always working)

```vbnet
mvn clean install -Denforcer.skip=true
```

To continue the build if error

```bash
mvn clean install -Denforcer.fail=false
```

```bash
./mvnw clean install -DskipDistribution=true  -Denforcer.skip=true
```




:::tip 协议

- 本作品代码部分采用 [Apache 2.0协议](https://www.apache.org/licenses/LICENSE-2.0)进行许可。遵循许可的前提下，你可以自由地对代码进行修改，再发布，可以将代码用作商业用途。但要求你：
  - **署名**：在原有代码和衍生代码中，保留原作者署名及代码来源信息。
  - **保留许可证**：在原有代码和衍生代码中，保留Apache 2.0协议文件。

- 本作品文档部分采用[知识共享署名 4.0 国际许可协议](http://creativecommons.org/licenses/by/4.0/)进行许可。 遵循许可的前提下，你可以自由地共享，包括在任何媒介上以任何形式复制、发行本作品，亦可以自由地演绎、修改、转换或以本作品为基础进行二次创作。但要求你：
  - **署名**：应在使用本文档的全部或部分内容时候，注明原作者及来源信息。
  - **非商业性使用**：不得用于商业出版或其他任何带有商业性质的行为。如需商业使用，请联系作者。
  - **相同方式共享的条件**：在本文档基础上演绎、修改的作品，应当继续以知识共享署名 4.0国际许可协议进行许可。

:::