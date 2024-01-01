---
title: Spring AOP中的Pointcut
sidebar_label: Spring AOP中的Pointcut
sidebar_position: 8
---

本文相关代码(来自[官方源码](https://github.com/spring-projects/spring-framework.git "官方源码")spring-test模块)请参见[spring-framework](https://github.com/Halcyon666/spring-framework-modified/tree/main/spring-test) org.springframework.mylearntest包下。

如果Pointcut类型为TruePointcut，默认会对系统中的所有对象，以及对象上所有被支持的Joinpoint进行匹配。

<details>
	<summary>Pointcut</summary>

```java
package org.springframework.aop;

public interface Pointcut {

    ClassFilter getClassFilter();

    MethodMatcher getMethodMatcher();

    Pointcut TRUE = TruePointcut.INSTANCE;

}
```
</details>

<details>
	<summary>TruePointcut</summary>

```java
package org.springframework.aop;

import java.io.Serializable;

@SuppressWarnings("serial")
final class TruePointcut implements Pointcut, Serializable {

    public static final TruePointcut INSTANCE = new TruePointcut();

    private TruePointcut() {
    }

    @Override
    public ClassFilter getClassFilter() {
        return ClassFilter.TRUE;
    }

    @Override
    public MethodMatcher getMethodMatcher() {
        return MethodMatcher.TRUE;
    }

    private Object readResolve() {
        return INSTANCE;
    }

    @Override
    public String toString() {
        return "Pointcut.TRUE";
    }

}
```
</details>

ClassFilter和MethodMatcher分别用于匹配将被执行织入操作的对象以及相应的方法。之所以将类型匹配和方法匹配分开定义，是因为可以重用不同级别的匹配定义，并且可以在不同级别或者相同级别上进行组合操作，或者强制让某个子类只覆盖(Override)相应方法定义等。

<details>
	<summary>ClassFilter</summary>

```java
package org.springframework.aop;

@FunctionalInterface
public interface ClassFilter {

    boolean matches(Class<?> clazz);

    ClassFilter TRUE = TrueClassFilter.INSTANCE;

}
```
</details>

<details>
	<summary>MethodMatcher</summary>

```java
package org.springframework.aop;

import java.lang.reflect.Method;

public interface MethodMatcher {

    boolean matches(Method method, Class<?> targetClass);

    boolean isRuntime();

    boolean matches(Method method, Class<?> targetClass, Object... args);

    MethodMatcher TRUE = TrueMethodMatcher.INSTANCE;

}
```
</details>

当isRuntime返回false时，表示不会考虑具体Joinpoint的方法参数，这种类型的MethodMatcher称之为staticMethodMatcher。因为不用每次都检查参数，那么对于同样类型的方法匹配结果，就可以在框架内部缓存以提高性能。

当isRuntime返回true时，表明MethodMatcher将会每次都对方法调用的参数进行匹配检查，这种类型的MethodMatcher称之为DynamicMethodMatcher。因为每次都要对方法参数进行检查，无法对匹配的结果进行缓存，所以，匹配效率相对于StaticMethodMatcher来说要差。而且大部门情况下，staticMethodMatcher已经可以满足需要。最好避免使用DynamicMethodMatcher类型。

如果`boolean matches(Method method, Class<?> targetClass);`返回true时，三个参数的matches将会被执行，以进一步检查匹配条件；如果`boolean matches(Method method, Class<?> targetClass);`返回false，那么不管这个MethodMatcher是staticMethodMatcher还是DynamicMethodMatcher，该结果已经是最终结果，三个参数的方法肯定不会被执行了。

![](https://s2.loli.net/2023/07/15/joCBcvwn5NIWsVP.png)

![常见pointcut](https://s2.loli.net/2023/07/15/3TktmhvxbHauZI2.png "常见pointcut")

## NameMatchMethodPointcut

最简单的Pointcut实现，属于StaticMethodMatcherPointcut的子类，可以根据自身指定一组方法名称与Joinpoint处的方法的方法名称进行匹配。

```
NameMatchMethodPointcut pointcut = new NameMatchMethodPointcut();
pointcut.setMappedName("matches");
// 或者传入多个方法名
pointcut.setMappedNames(new String[]{"matches", "isRuntime"});
// 简单模糊匹配
pointcut.setMappedNames(new String[]{"match*", "matches", "mat*es" });
```

此方法无法对重载的方法名进行匹配，因为它仅对方法名进行匹配，不会考虑参数相关信息，而且也没有提供可以指定参数匹配信息的途径。

## JdkRegexpMethodPointcut和Perl5RegexpMethodPointcut

StaticMethodMatcherPointcut的子类有一个专门提供基于正则表达式的实现分支，以抽象类AbstractRegexpMethodPointcut为统帅，声明了pattern 和 patterns属性，可以指定一个或者和多个正则表达式的匹配模式。其下设JdkRegexpMethodPointcut和Perl5RegexpMethodPointcut两种具体实现。

JdkRegexpMethodPointcut是在JDK 1.4之后引入JDK标准正则表达式。

```
JdkRegexpMethodPointcut pointcut = new JdkRegexpMethodPointcut();
pointcut.setPattern(".*match.*");
pointcut.setPatterns(new String[]{".*match.", ".*matches"});
```

注意正则表达式匹配模式必须匹配整个方法签名(Method signature)的形式指定，而不能像NameMatchMethodPointcut那样仅给出匹配的方法名称。

Perl5RegexpMethodPointcut实现使用[Jakarta ORO](https://jakarta.apache.org/oro/)提供正则表达式支持

- 可以通过pattern或者patterns对象属性指定一个或者多个正则表达式
- 指定正则表达式匹配模式应该覆盖匹配整个方法签名，而不是只指定到方法名称部分。

## AnnotationMatchingPointcut

<details>
	<summary>ClassLevelAnnotation</summary>

```java
package org.springframework.mylearntest.aop.annotationmatchingpointcut;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.TYPE)
public @interface ClassLevelAnnotation {
}
```
</details>

<details>
	<summary>MethodLevelAnnotation</summary>

```java
package org.springframework.mylearntest.aop.annotationmatchingpointcut;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.METHOD)
public @interface MethodLevelAnnotation {
}
```
</details>

<details>
	<summary>GenericTargetObject</summary>

```java
package org.springframework.mylearntest.aop.annotationmatchingpointcut;

@ClassLevelAnnotation
public class GenericTargetObject {

    @MethodLevelAnnotation
    public void getMethod1() {
        System.out.println("getMethod1");
    }

    public void getMethod2() {
        System.out.println("getMethod2");
    }
}
```
</details>

<details>
	<summary>如何指定Pointcut</summary>

```java
AnnotationMatchingPointcut pointcut = new AnnotationMatchingPointcut(ClassLevelAnnotation.class);
// 也可以通过静态方法
AnnotationMatchingPointcut pointcut1 = AnnotationMatchingPointcut.forClassAnnotation(MethodLevelAnnotation.class);
// 同时限定
AnnotationMatchingPointcut pointcut2 = AnnotationMatchingPointcut.forClassAnnotation(ClassLevelAnnotation.class);
```
</details>

## ComposablePointcut

Spring AOP提供Pointcut逻辑运算的Pointcut实现。它可以进行Pointcut之间的“并”以及“交”运算。

<details>
	<summary>Test4ComposablePointcut</summary>

```java
package org.springframework.mylearntest.aop.pointcut.composablePointcut;

import org.junit.Assert;
import org.springframework.aop.ClassFilter;
import org.springframework.aop.MethodMatcher;
import org.springframework.aop.Pointcut;
import org.springframework.aop.support.ComposablePointcut;
import org.springframework.aop.support.Pointcuts;

public class Test4ComposablePointcut {

    public static void main(String[] args) {
        ComposablePointcut pointcut1 = new ComposablePointcut(new ClassFilter() {
            @Override
            public boolean matches(Class<?> clazz) {
                return false;
            }
        }, MethodMatcher.TRUE);

        ComposablePointcut pointcut2 = new ComposablePointcut(new ClassFilter() {
            @Override
            public boolean matches(Class<?> clazz) {
                return false;
            }
        }, MethodMatcher.TRUE);

        // union intersection
        ComposablePointcut union = pointcut1.union(pointcut2);
        ComposablePointcut intersection = pointcut1.intersection(union);

        Assert.assertEquals(pointcut1,intersection);

        // combine classFilter with methodMatcher
        pointcut2.union(new ClassFilter() {
            @Override
            public boolean matches(Class<?> clazz) {
                return false;
            }
        }).intersection(MethodMatcher.TRUE);

        // just compute between pointcut, use org.springframework.aop.support.Pointcuts
        Pointcut pointcut3 = new Pointcut() {
            @Override
            public ClassFilter getClassFilter() {
                return null;
            }

            @Override
            public MethodMatcher getMethodMatcher() {
                return null;
            }
        };

        Pointcut pointcut4 = new Pointcut() {
            @Override
            public ClassFilter getClassFilter() {
                return null;
            }

            @Override
            public MethodMatcher getMethodMatcher() {
                return null;
            }
        };
        
        Pointcut union1 = Pointcuts.union(pointcut3, pointcut4);
        Pointcut intersection1 = Pointcuts.intersection(pointcut3, pointcut4);

    }
}
```
</details>

## ControlFlowPointcut

ControlFlowPointcut匹配程序的调用流程，不是对某个方法执行所在Joinpoint处的单一特征进行匹配，而是要被特定的类执行时，才会进行方法拦截。
因为ControlFlowPointcut类型的Pointcut需要在运行期间检查程序的调用栈，而且每次方法调用都需要检查，所以性能比较差。

:::tip 协议

- 本作品代码部分采用 [Apache 2.0协议](https://www.apache.org/licenses/LICENSE-2.0)进行许可。遵循许可的前提下，你可以自由地对代码进行修改，再发布，可以将代码用作商业用途。但要求你：
  - **署名**：在原有代码和衍生代码中，保留原作者署名及代码来源信息。
  - **保留许可证**：在原有代码和衍生代码中，保留Apache 2.0协议文件。

- 本作品文档部分采用[知识共享署名 4.0 国际许可协议](http://creativecommons.org/licenses/by/4.0/)进行许可。 遵循许可的前提下，你可以自由地共享，包括在任何媒介上以任何形式复制、发行本作品，亦可以自由地演绎、修改、转换或以本作品为基础进行二次创作。但要求你：
  - **署名**：应在使用本文档的全部或部分内容时候，注明原作者及来源信息。
  - **非商业性使用**：不得用于商业出版或其他任何带有商业性质的行为。如需商业使用，请联系作者。
  - **相同方式共享的条件**：在本文档基础上演绎、修改的作品，应当继续以知识共享署名 4.0国际许可协议进行许可。

:::
