---
title: lambda 使用
sidebar_label: lambda 使用
sidebar_position: 1
---

## Java 8函数式编程

> NOTES: 所有内容摘自 Java 8函数式编程

### 重构遗留代码

```java
public Set<String> findLongTracks(List<Album> albums) {
    Set<String> trackNames=new HashSet<>();
    for(Album album : albums) {
        for (Track track : album.getTrackList()) {
            if (track.getLength() > 60) {
                String name=track.getName();
                trackNames.add(name);
            }
        }
    }
    return trackNames;
}
```

重构1 `for` 变成 `forEach`

```java
public Set<String> findLongTracks(List<Album> albums) {
    Set<String> trackNames=new HashSet<>();
    albums.stream()
        .forEach(album-> {
            album.getTracks()
                .forEach(track-> {
                    if (track.getLength() > 60) {
                        String name=track.getName();
                        trackNames.add(name);
                    }
                });
        });
    return trackNames;
}
```

重构2 `if` 变成 `filter`

```java
public Set<String> findLongTracks(List<Album> albums) {
    Set<String> trackNames=new HashSet<>();
    albums.stream()
        .forEach(album-> {
            album.getTracks()
                .filter(track-> track.getLength() > 60)
                .map(track-> track.getName())
                .forEach(name-> trackNames.add(name));
        });
    return trackNames;
}
```

重构3 最外层`forEach` 变成 `faltMap`

```java
public Set<String> findLongTracks(List<Album> albums) {
    Set<String> trackNames=new HashSet<>();
    albums.stream()
        .flatMap(album-> album.getTracks())
        .filter(track-> track.getLength() > 60)
        .map(track-> track.getName())
        .forEach(name-> trackNames.add(name));
    return trackNames;
}
```

重构4 `forEach` 添加元素变成 `collect` 进行收集

```java
public Set<String> findLongTracks(List<Album> albums) {
    return albums.stream()
        .flatMap(album-> album.getTracks())
        .filter(track-> track.getLength() > 60)
        .map(track-> track.getName())
        .collect(toSet());
}
```

### 函数方法参数重载

```java
overloadedMethod((x, y)-> x+y);

private interface IntegerBiFunction extends BinaryOperator<Integer> {
}
private void overloadedMethod(BinaryOperator<Integer> Lambda) {
    System.out.print("BinaryOperator");
}
private void overloadedMethod(IntegerBiFunction Lambda) {
    System.out.print("IntegerBinaryOperator");
}
```

> 分别接受`BinaryOperator`和该接口的一个子类作为参数。调用这些方法时，Java推导出的Lambda表达式的类型正是最具体的函数接口的类型。比如，例4-7在例4-8的两个方法中选择时，输出的是`IntegerBinaryOperator`。

总体原则

- 如果只有一个可能的目标类型，由相应函数接口里的参数类型推导得出；

- 如果有多个可能的目标类型，由最具体的类型推导得出；

- 如果有多个可能的目标类型且最具体的类型不明确，则需人为指定类型。

### 接口多继承

```java 
public interface Jukebox {
    public default String rock() {
        return "... all over the world! ";
    }
}

public interface Carriage {
    public default String rock() {
        return "... from side to side";
    }
}

public class MusicalCarriage implements Carriage, Jukebox {
}
```

`javac`并不明确应该继承哪个接口中的方法，因此编译器会报错：class Musical Carriage inherits unrelated defaults for rock() from types Carriage and Jukebox。

```java
public class MusicalCarriage
    implements Carriage, Jukebox {
    @Override
    public String rock() {
        return Carriage.super.rock();
    }
}
```

总体原则

- 类胜于接口。如果在继承链中有方法体或抽象的方法声明，那么就可以忽略接口中定义的方法。

- 子类胜于父类。如果一个接口继承了另一个接口，且两个接口都定义了一个默认方法，那么子类中定义的方法胜出。

- 没有规则三。如果上面两条规则不适用，子类要么需要实现该方法，要么将该方法声明为抽象方法。

5. 比如使用并行流时，`forEach`方法不能保证元素是按顺序处理的。如果需要保证按顺序处理，应该使用`forEachOrdered`方法。

### 子收集器`groupingBy`

```java
public Map<Artist, List<String>> nameOfAlbums(Stream<Album> albums) {
    return albums.collect(groupingBy(Album::getMainMusician, mapping(Album::getName, toList())));
}
```

mapping允许在收集器的容器上执行类似map的操作。但是需要指明使用什么样的集合类存储结果,比如`toList`。

### 重构领域方法

```java
public long countFeature(ToLongFunction<Album> function) {
    return albums.stream()
        .mapToLong(function)
        .sum();
}
public long countTracks() {
    return countFeature(album-> album.getTracks().count());
}
public long countRunningTime() {
    return countFeature(album-> album.getTracks()
                        .mapToLong(track-> track.getLength())
                        .sum());
}
public long countMusicians() {
    return countFeature(album-> album.getMusicians().count());
}
```

### 小技巧

- 判断一个操作是惰性求值还是及早求值很简单：只需看它的返回值。如果返回值是Stream，那么是惰性求值；如果返回值是另一个值或为空，那么就是及早求值.

- 把lambda的的逻辑抽取成一个方法后，就可以测试该方法，把所有的边界情况都覆盖到

- 使用peek方法观察lambda中间值

```java
Set<String> nationalities = album.getMusicians()
    .filter(artist-> artist.getName().startsWith("The"))
    .map(artist-> artist.getNationality())
    .peek(nation-> System.out.println("Found nationality: "+nation))
    .collect(Collectors.<String>toSet());
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