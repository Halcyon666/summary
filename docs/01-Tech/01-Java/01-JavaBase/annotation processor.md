---
title: APT 使用
sidebar_label: APT 使用
sidebar_position: 2
---
## the module of annotation-processor

JAVA APT base annotation processor, in this project, just print some message in the processors

## Write a processor 

[example file](https://github.com/Halcyon666/learn-cases/blob/main/annotation-processor/src/main/java/com/whalefall/apt/MyAnnotationProcessor.java)

If you want to know more about program a processor, you can refer the book of Core-Java-Vol.-II-Advanced-Features-12th-Edition-Cay-S.-Horstmann.

## how to use the processor jar in other project

### maven

```xml

<!--...-->
<plugin>
    <groupId>org.apache.maven.plugins</groupId>
    <artifactId>maven-compiler-plugin</artifactId>
    <version>3.11.0</version>
    <configuration>
        <source>1.8</source>
        <target>1.8</target>
        <annotationProcessorPaths>
            <path>
                <groupId>com.whalefall</groupId>
                <artifactId>annotation-processor</artifactId>
                <version>0.0.1-SNAPSHOT</version>
            </path>
            <path>
                <groupId>org.projectlombok</groupId>
                <artifactId>lombok</artifactId>
                <version>1.18.26</version>
            </path>
        </annotationProcessorPaths>
        <showWarnings>true</showWarnings>
    </configuration>
</plugin>
        <!--...-->
```

Here are include lombok, thus I use the plugin.

### gradle

```groovy
dependencies {
    //    ...
    annotationProcessor 'com.whalefall:annotation-processor:0.0.1-SNAPSHOT'
    testAnnotationProcessor 'com.whalefall:annotation-processor:0.0.1-SNAPSHOT'
    // if you are using processor in test code
    
    // if you use this in other module of the aggregation project 
    annotationProcessor project(':annotation-processor')
}
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

