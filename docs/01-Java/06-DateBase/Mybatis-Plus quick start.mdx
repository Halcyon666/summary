---
title: Mybatis Plus快速开始
sidebar_label: Mybatis Plus快速开始
sidebar_position: 6
---
此文章借鉴[MyBatis官网](https://baomidou.com/pages/226c21/#%E5%88%9D%E5%A7%8B%E5%8C%96%E5%B7%A5%E7%A8%8B)，使用gradle构建项目，使用oracle数据库

本文代码地址见[github仓库](https://github.com/whalefall541/mybatis-plus)

**NOTES**：

*在测试这个案例时碰到一个坑，就是数据库表名 与 核心表名重复的时候，查询会报错 **找不到表名**。此处修改`user`表为`users`表了*

1. 在`build.gradle`文件中配置依赖

```groovy
dependencies {
    implementation 'org.springframework.boot:spring-boot-starter-web'
    implementation group: 'com.baomidou', name: 'mybatis-plus-boot-starter', version: '3.2.0'
    compileOnly 'org.projectlombok:lombok'
    runtimeOnly 'com.oracle.database.jdbc:ojdbc8'
    annotationProcessor 'org.projectlombok:lombok'
    testImplementation 'org.springframework.boot:spring-boot-starter-test'
}
```



2. 配置 `application.yml`

```yml
spring:
  datasource:
    url: jdbc:oracle:thin:@192.168.3.161:1521:jc
    username: jc
    password: 123456
    driver-class-name: oracle.jdbc.driver.OracleDriver
    maximum-pool-size: 30
```

3. 编写实体类

```java
@Data
public class Users {
    private Long id;
    private String name;
    private Integer age;
    private String email;
}
```

4. 编写Mapper类

```java
@Mapper
public interface UserMapper extends BaseMapper<Users> {
}
```

5. 编写测试类

```java
@SpringBootTest(classes = App.class)
public class SampleTest {

    @Autowired
    private UserMapper userMapper;

    @Test
    public void testSelect() {
        System.out.println(("----- selectAll method test ------"));
        List<Users> userList = userMapper.selectList(null);
        Assert.isTrue(userList.size()==5, "结果集不为5条");
        userList.forEach(System.out::println);
    }
}
```

项目结构：

![image-20211219223218948](https://s2.loli.net/2023/07/15/4m8UKMGd3Qts1C5.png)


:::tip 协议

- 本作品代码部分采用 [Apache 2.0协议](https://www.apache.org/licenses/LICENSE-2.0)进行许可。遵循许可的前提下，你可以自由地对代码进行修改，再发布，可以将代码用作商业用途。但要求你：
  - **署名**：在原有代码和衍生代码中，保留原作者署名及代码来源信息。
  - **保留许可证**：在原有代码和衍生代码中，保留Apache 2.0协议文件。

- 本作品文档部分采用[知识共享署名 4.0 国际许可协议](http://creativecommons.org/licenses/by/4.0/)进行许可。 遵循许可的前提下，你可以自由地共享，包括在任何媒介上以任何形式复制、发行本作品，亦可以自由地演绎、修改、转换或以本作品为基础进行二次创作。但要求你：
  - **署名**：应在使用本文档的全部或部分内容时候，注明原作者及来源信息。
  - **非商业性使用**：不得用于商业出版或其他任何带有商业性质的行为。如需商业使用，请联系作者。
  - **相同方式共享的条件**：在本文档基础上演绎、修改的作品，应当继续以知识共享署名 4.0国际许可协议进行许可。

:::