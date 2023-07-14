
本文相关代码(来自[官方源码](https://github.com/spring-projects/spring-framework.git "官方源码")spring-test模块)请参见[spring-demysify](https://github.com/whalefall541/spring-demysify) org.springframework.mylearntest包下。

## AOP语言

统称能够实现AOP的语言为AOL，即(Aspect-Oriented Language)，其他Aspectj

* AspectC
* AspectC++
* Aspect.Net
* AspectL(Lisp)
* AspectPHP
* ......

### JAVA中AOP实现方式

1. 动态代理
* 在运行期间，为相应的接口动态生成对应的代理对象，将横切关注点逻辑封装到动态代理的InvocationHandler中，然后在系统运行期间，根据横切关注点需要织入的模块位置，将横切逻辑织入到相应的代理类中。
2. 动态字节码增强
* 使用ASM或者CGLIB等Java工具库，在程序运行期间，动态构建字节码的class文件。
* 在运行期间通过动态字节码增强技术织入横切逻辑，为这些系统模块类生成相应的子类，而将横切逻辑加到这些子类中，让应用程序的执行期间使用的是这些动态生成的子类，从而达到将横切逻辑织入系统的目的。
* 如果需要扩展的类以及类中的实例方法等声明为final的话，则无法对其进行子类化的扩展。Spring AOP在无法使用动态代理机制进行AOP功能的扩展的时候，会使用CGLIB库的动态字节码增强技术来实现AOP的扩展。
3. java代码生成
* EJB容器根据部署描述符文件提供了织入信息，会为相应的功能模块类根据描述符所提供的信息生成对应的java代码，然后通过部署工具或者部署接口编译java代码生成对应的java类。之后部署到EJB容器的功能模块类就可以正常工作了。
4. 自定义类加载器
* 所有的java程序的class都要通过相应的类加载器(Classloader)加载到Java虚拟机之后才可以运行。默认的类加载器会读取class字节码文件，然后按照class字节码规范，解析并加载这些class
  文件到虚拟机运行。如果我能够在这个class加载到虚拟机运行期间，将横切逻辑织入到class文件的话，是不是就完成了AOP和OPP的融合呢？
* 我们可以通过自定义类加载器的方式完成横切逻辑到系统的织入，自定义类加载器通过读取外部文件规定的织入规则和必要信息，在加载class文件期间就可以将横切逻辑添加到系统模块类的现有逻辑中，然后将改动后的class交给java
  虚拟机运行。通过类加载器，我们基本可以对大部分类以及相应的实例进行织入，功能于之前的几种方式相比当然强大很多。不过这种方式最大的问题就是类加载器本身的使用。某些应用服务器会控制整个的类加载体系，所以，在这样的场景下会造成一定的问题。
* Jboss AOP 和已经并入AspectJ项目的AspectWerkz框架都是采用自定义类加载器的方式实现。
5. AOL扩展
* AOL扩展是最强大、也是最难掌握的一种方式，我们之前提到AspectJ就属于这种方式。在这种方式中，AOP的各种概念在AOL中大都有一一对应的实体。我们可以使用扩展过的AOL，实现任何AOP概念实体甚至OPP
  概念实体，比如Aspect以及Class。所有的AOP概念在AOL中得到了最完美的表达。
* 采用扩展的AOL，在AOP概念的表达上颇具实例，使得AOP涉及的所有横切关注点逻辑在进行织入之前，可以自由自在地存活在自己的“国度中”。而像“编译到静态类可以提升系统运行性能”，“java
  虚拟机可以像加载平常类那种，加载已经织入相应逻辑的AO组件所在的文件并运行”等特点。使用这种方式，需要学习一门扩展的AOL语言。

![](https://oscimg.oschina.net/oscnet/up-8b44413c3499ab8c5aaf6884bdd28946b6d.png)

## Joinpoint

* Joinpoint 切点

* Pointcut 切点表达式 
  
  * 直接指定Joinpoint所在的方法名称
  * 正则表达式：Jboss、Spring AOP、AspectWerkz等均支持
  * 使用特定的Pointcut表达语言：Spring 2.0以后，借助于AspectJ的Pointcut表述语言解释器，支持使用AspectJ的Pointcut表述语言来指定Pointcut。

![](https://oscimg.oschina.net/oscnet/up-1b5e31d34b8e44dfa4475d758149d2a363c.png)

### 静态代理

```java
package org.springframework.mylearntest.aop.staticproxy;

public interface IRequestable {
    void request();
}
```

```java
package org.springframework.mylearntest.aop.staticproxy;

public class RequestableImpl implements IRequestable{
    @Override
    public void request() {
        System.out.println(" request process in RequestableImpl");
    }
}
```

```java
package org.springframework.mylearntest.aop.staticproxy;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class ServiceControlRequestableProxy implements IRequestable{
    private static final Logger logger = LoggerFactory.getLogger(ServiceControlRequestableProxy.class);
    private IRequestable requestable;

    public ServiceControlRequestableProxy(IRequestable target) {
        this.requestable = target;
    }

    @Override
    public void request() {
        System.out.println("request process in ServiceControlRequestableProxy");
        requestable.request();
    }

    public static void main(String[] args) {
        IRequestable target = new RequestableImpl();// 需要被代理的对象
        IRequestable proxy = new ServiceControlRequestableProxy(target); // 以构造方法形式将被代理对象传入代理者中
        proxy.request();// 让代理者去处理请求
    }
}
```

### 动态代理

- 动态代理机制主要由一个类和一个接口组成，即java.lang.reflect.Proxy类和java.lang.reflect.InvocationHadler接口。

```java
package org.springframework.mylearntest.aop.dynamicproxy;

import java.lang.reflect.InvocationHandler;
import java.lang.reflect.Method;

public class RequestCtrlInvocationHandler implements InvocationHandler {
    private Object target;

    public RequestCtrlInvocationHandler(Object target) {
        this.target = target;
    }

    @Override
    public Object invoke(Object proxy, Method method, Object[] args) throws Throwable {
        System.out.println("reflect invoke before target method");
        if ("request".equals(method.getName())) {
            System.out.println("dynamic proxy target method");
            return method.invoke(target, args);
        }
        return null;
    }
}
```

```java
package org.springframework.mylearntest.aop.dynamicproxy;

import org.springframework.mylearntest.aop.staticproxy.IRequestable;
import org.springframework.mylearntest.aop.staticproxy.RequestableImpl;

import java.lang.reflect.Proxy;

@SuppressWarnings("rawtypes")
public class Test4DynamicProxy {
    public static void main(String[] args) {
        // arg1:类加载器 arg2:接口信息 arg3:实现InvocationHandler的类 并传入需要代理的对象
        IRequestable requestable = (IRequestable) Proxy.newProxyInstance(
                Test4DynamicProxy.class.getClassLoader(),
                new Class[]{IRequestable.class},
                new RequestCtrlInvocationHandler(new RequestableImpl()));
        requestable.request();
    }
}
```

如果想深入了解动态代理，请阅读《java reflect in action》。

### CGLIB字节码生成

需要使用CGLIB扩展子类，首先需要实现一个net.sf.cglib.proxy.Callback,不过更多的时候，我们会直接使用net.sf.cglib.proxy.MethodInterceptor接口(MethodInterceptor扩展了Callback接口)。

```java
package org.springframework.mylearntest.aop.CGLIBClassGenerate;

public class Requestable {
    public void request(){
        System.out.println("req in requestable without implement any interface");
    }
}
```

```java
package org.springframework.mylearntest.aop.CGLIBClassGenerate;

import org.springframework.cglib.proxy.MethodInterceptor;
import org.springframework.cglib.proxy.MethodProxy;

import java.lang.reflect.Method;

public class RequestCtrlCallback implements MethodInterceptor {
    @Override
    public Object intercept(Object o, Method method, Object[] objects, MethodProxy methodProxy) throws Throwable {
        if (method.getName().equals("request")) {
            System.out.println("proxy generated by cglib intercept method request");
            return methodProxy.invokeSuper(o, objects);
        }
        return null;
    }
}
```

```java
package org.springframework.mylearntest.aop.CGLIBClassGenerate;

import org.springframework.cglib.proxy.Enhancer;

public class Test4CGLIB {
    public static void main(String[] args) {
        Enhancer enhancer = new Enhancer();
        enhancer.setSuperclass(Requestable.class);
        enhancer.setCallback(new RequestCtrlCallback());

        Requestable proxy = (Requestable) enhancer.create();
        proxy.request();
    }
}
```

## Spring AOP中的Pointcut

如果Pointcut类型为TruePointcut，默认会对系统中的所有对象，以及对象上所有被支持的Joinpoint进行匹配。
Pointcut 源码

```java
package org.springframework.aop;

public interface Pointcut {

    ClassFilter getClassFilter();

    MethodMatcher getMethodMatcher();

    Pointcut TRUE = TruePointcut.INSTANCE;

}
```

TruePointcut 源码

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

ClassFilter和MethodMatcher分别用于匹配将被执行织入操作的对象以及相应的方法。之所以将类型匹配和方法匹配分开定义，是因为可以重用不同级别的匹配定义，并且可以在不同级别或者相同级别上进行组合操作，或者强制让某个子类只覆盖(Override)相应方法定义等。

```java
package org.springframework.aop;

@FunctionalInterface
public interface ClassFilter {

    boolean matches(Class<?> clazz);

    ClassFilter TRUE = TrueClassFilter.INSTANCE;

}
```

MethodMatcher 源码

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

当isRuntime返回false时，表示不会考虑具体Joinpoint的方法参数，这种类型的MethodMatcher称之为staticMethodMatcher。因为不用每次都检查参数，那么对于同样类型的方法匹配结果，就可以在框架内部缓存以提高性能。

当isRuntime返回true时，表明MethodMatcher将会每次都对方法调用的参数进行匹配检查，这种类型的MethodMatcher称之为DynamicMethodMatcher。因为每次都要对方法参数进行检查，无法对匹配的结果进行缓存，所以，匹配效率相对于StaticMethodMatcher来说要差。而且大部门情况下，staticMethodMatcher已经可以满足需要。最好避免使用DynamicMethodMatcher类型。

如果boolean matches(Method method, Class<?> targetClass);返回true时，三个参数的matches将会被执行，以进一步检查匹配条件；如果boolean matches(Method method, Class<?> targetClass);返回false，那么不管这个MethodMatcher是staticMethodMatcher还是DynamicMethodMatcher，该结果已经是最终结果，三个参数的方法肯定不会被执行了。

![](https://oscimg.oschina.net/oscnet/up-56c82a867727a95b1dad667aae23f35016f.png)

![常见pointcut](https://oscimg.oschina.net/oscnet/up-e2d8234131d2a7bcda1159c35d298a64d3e.png "常见pointcut")

### NameMatchMethodPointcut

最简单的Pointcut实现，属于StaticMethodMatcherPointcut的子类，可以根据自身指定一组方法名称与Joinpoint处的方法的方法名称进行匹配。

```
NameMatchMethodPointcut pointcut = new NameMatchMethodPointcut();
pointcut.setMappedName("matches");
// 或者传入多个方法名
pointcut.setMappedNames(new String[]{"matches", "isRuntime"});
// 简单模糊匹配
pointcut.setMappedNames(new String[]{"match*", "matches", "mat*es" });
```

- 此方法无法对重载的方法名进行匹配，因为它仅对方法名进行匹配，不会考虑参数相关信息，而且也没有提供可以指定参数匹配信息的途径。

### JdkRegexpMethodPointcut和Perl5RegexpMethodPointcut

StaticMethodMatcherPointcut的子类有一个专门提供基于正则表达式的实现分支，以抽象类AbstractRegexpMethodPointcut为统帅，声明了pattern 和 patterns属性，可以指定一个或者和多个正则表达式的匹配模式。其下设JdkRegexpMethodPointcut和Perl5RegexpMethodPointcut两种具体实现。JdkRegexpMethodPointcut是在JDK 1.4之后引入JDK标准正则表达式。

```
JdkRegexpMethodPointcut pointcut = new JdkRegexpMethodPointcut();
pointcut.setPattern(".*match.*");
pointcut.setPatterns(new String[]{".*match.", ".*matches"});
```

注意正则表达式匹配模式必须匹配整个方法签名(Method signature)的形式指定，而不能像NameMatchMethodPointcut那样仅给出匹配的方法名称。

Perl5RegexpMethodPointcut实现使用jakarta ORO提供正则表达式支持

1. 可以通过pattern或者patterns对象属性指定一个或者多个正则表达式
2. 指定正则表达式匹配模式应该覆盖匹配整个方法签名，而不是只指定到方法名称部分。

### AnnotationMatchingPointcut

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

```
    AnnotationMatchingPointcut pointcut = new AnnotationMatchingPointcut(ClassLevelAnnotation.class);
    // 也可以通过静态方法
    AnnotationMatchingPointcut pointcut1 = AnnotationMatchingPointcut.forClassAnnotation(MethodLevelAnnotation.class);
    // 同时限定
    AnnotationMatchingPointcut pointcut2 = AnnotationMatchingPointcut.forClassAnnotation(ClassLevelAnnotation.class);
```

### ComposablePointcut

Spring AOP提供Pointcut逻辑运算的Pointcut实现。它可以进行Pointcut之间的“并”以及“交”运算。

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

### ControlFlowPointcut

ControlFlowPointcut匹配程序的调用流程，不是对某个方法执行所在Joinpoint处的单一特征进行匹配，而是要被特定的类执行时，才会进行方法拦截。
因为ControlFlowPointcut类型的Pointcut 需要在运行期间检查程序的调用栈，而且每次方法调用都需要检查，所以性能比较差。

## Spring AOP中的Advice

1. Before Advice

2. After Advice
* After returning

* After throwing

* After Advice(finally)
3. After Around

![](https://oscimg.oschina.net/oscnet/up-6dde3692e0b345a926714217b05fc1844f1.png)

4. Introduction
* 在AspectJ中称Inter-Type Declaration，在JBoss AOP 中称Mix-in，都是指这同一种类型的Advice。与之前的几种Advice类型不同，Introduction
  不是根据横切逻辑在Joinpoint处的执行时机来区分的，而是根据它可以完成的功能而区别于其他Advice类型。
* AspectJ采用静态织入的形式，那么对象在使用的时候，Introduction逻辑已经是编译织入完成的。所以理论上来说，AspectJ提供的Introduction类型的Advice，在现有Java平台上的AOP
  实现中是性能最好的；而像JBosss AOP或者Spring AOP等采用动态织入的AOP实现，Introduction的性能要稍逊一筹。

![](https://oscimg.oschina.net/oscnet/up-22bd58e5adaa1b4d81cedc603cd6a3a4675.png)

在Spring中，Advice按照其自身实例能否在目标对象类的所有实例中共享这一标准，可以划分为两大类，即per-calss类型的Advice 和 per-instance类型的Advice。

### per-class

per-class的Advice是指，该类型的Advice的实例可以在目标对象类的所有实例之间共享。这种类型的Advice通常只是提供方法的拦截功能，不会对目标对象类保存任何状态或者添加新的特性。

#### BeforeAdvice

```java
package org.springframework.mylearntest.aop.advice;

import org.apache.commons.io.FileUtils;
import org.springframework.aop.MethodBeforeAdvice;
import org.springframework.core.io.Resource;

import java.lang.reflect.Method;

public class ResourceSetupBeforeAdvice implements MethodBeforeAdvice {
    private Resource resource;

    public ResourceSetupBeforeAdvice(Resource resource) {
        this.resource = resource;
    }

    @Override
    public void before(Method method, Object[] args, Object target) throws Throwable {
        if (!resource.exists()) {
            FileUtils.forceMkdir(resource.getFile());
        }
    }
}
```

#### ThrowsAdvice

```java
package org.springframework.mylearntest.aop.advice;

import org.omg.CORBA.portable.ApplicationException;
import org.springframework.aop.ThrowsAdvice;

import java.lang.reflect.Method;

public class ExceptionBarrierThrowsAdvice implements ThrowsAdvice {
    public void afterThrowing(Throwable t) {
        // 普通异常处理
    }

    public void afterThrowing(RuntimeException t) {
        // 运行时异常处理
    }

    public void afterThrowing(Method m, Object[] args, Object target, ApplicationException e) {
        // 处理应用程序生成的异常
    }
}
```

#### AfterReturningAdvice

此Advice可以访问到当前Joinpoint的方法返回值、方法、方法参数以及所在的目标对象，但是不能更改返回值，可以使用Around Advice来更改返回值。

#### Around Advice

Spring中没有定义Around Advice ，而是直接使用AOP Alliance的标准接口，实现 MethodInterceptor即可。

### per-instance

per-instance类型的Advice不会在目标类所有对象实例之间共享，而是会为不同的实例对象保存它们各自的状态以及相关逻辑。在Spring中Introduction就是唯一的一种per-instance型Advice。

Introduction 可以在不改动目标类定义的情况下，为目标类添加新的属性以及行为。

在Spring中，为目标对象添加新的属性和行为必须声明相应的接口以及相应的实现。这样，再通过特定的拦截器将新的接口定义以及实现类中的逻辑附加到目标对象之上。之后，目标对象就拥有了新的状态和行为。这个特定的拦截器是org.springframework.aop.IntroductionInterceptor。

Introduction继承了MethodInterceptor以及DynamicIntroductionAdvice，通过DynamicIntroductionAdvice，我们可以界定当前的IntroductionInterceptor为哪些接口类提供相应的拦截功能。通过MethodInterceptor,IntroductionInterceptor就可以处理新添加的接口上的方法调用了。通常情况下，对于IntroductionInterceptor来说，如果是新增加的接口上的方法调用，不必去调用MethodInterceptor的proceed（）方法。当前被拦截的方法实际上是整个调用链中要最终执行的唯一方法。

![Introduction相关类图](https://oscimg.oschina.net/oscnet/up-dab617d645b217c3618bf51c07bdfdca5d8.png "Introduction相关类图")

* Introduction型的Advice两条分支，即以DynamicIntroductionAdvice为首的动态分支(不共享)和以IntroductionInfo为首的静态(共享)。

* DynamicIntroductionAdvice不用预先设定目标接口类型；而IntroductionInfo则完全相反，实现类必须返回预定目标接口的类型。

```java
public interface IntroductionInfo {
    Class[] getInterfaces();
}
```

如果需要对目标对象拦截并添加Introduction逻辑，可以使用现有两个实现类即可

> DelegatingIntroductionInterceptor
> DelegatePerTargetObjectIntroductionInterceptor

#### DelegatingIntroductionInterceptor

DelegatingIntroductionInterceptor不会自己实现将要添加到目标对象上的新逻辑行为，而是委派给其他的实现类。

使用DelegatingIntroductionInterceptor增强Developer。接口省略。

```java
package org.springframework.mylearntest.aop.advice.perinstance.delegatingIntroductionInterceptor;

public class Developer implements IDeveloper{
    @Override
    public void developSoftware() {
        System.out.println(" do some developing ...");
    }
}
```

* 为新的状态和行为定义接口。我们要为实现类添加增强的功能，首先需要将需求的职能以接口定义的形式声明。

```java
package org.springframework.mylearntest.aop.advice.perinstance.delegatingIntroductionInterceptor;

public interface ITester {
    boolean isBusyAsTester();
    void testSoftware();
}
```

* 给出新的接口的实现类。接口实现类给出将要添加到目标对象的具体逻辑。当目标对象要行使新的职能的时候，会通过该实现类寻求帮忙。

```java
package org.springframework.mylearntest.aop.advice.perinstance.delegatingIntroductionInterceptor;

public class Tester implements ITester{
    private  boolean busyAsTester;

    public void setBusyAsTester(boolean busyAsTester) {
        this.busyAsTester = busyAsTester;
    }

    @Override
    public boolean isBusyAsTester() {
        return busyAsTester;
    }

    @Override
    public void testSoftware() {
        System.out.println("do some developing and test ...");
    }
}
```

* 通过DelegatingIntroductionInterceptor进行Introduction拦截。有了新增加的职能的接口以及相应的实现类，使用DelegatingIntroductionInterceptor
  ，我们可以把具体的Introduction拦截委托给具体的实现类来完成。

```
ITester delegator = new Tester();
DelegatingIntroductionInterceptor interceptor = new DelegatingIntroductionInterceptor(delegator);

// 进行织入
ITester tester = (ITester)weaver.weave(developer).with(interceptor).getProxy();
tester.testSoftware();
```

* 虽然，DelegatingIntroductionInterceptor是Introduction型Advice的一个实现，但它的实现根本就有兑现Introduction作为per-instance
  型的承诺。实际上DelegatingIntroductionInterceptor会使用它所持有的同一个"delegate" 接口实例，供同一目标类的所有实例共享使用。如果要想严格达到Introduction型Advice的效果，我们应该使用DelegatePerTargetObjectIntroductionInterceptor。

#### DelegatePerTargetObjectIntroductionInterceptor

与DelegatingIntroductionInterceptor不同，DelegatePerTargetObjectIntroductionInterceptor会在内部持有一个目标对象与相应Introduction逻辑实现类之间的映射关系。当每个对象上的新定义的接口方法被调用的时候，DelegatePerTargetObjectIntroductionInterceptor会拦截这些调用，然后以目标对象实例作为键，到它持有的那个映射关系中取得对应当前目标对象实例的Introduction实现实例。

```
DelegatePerTargetObjectIntroductionInterceptor interceptor1 =
                new DelegatePerTargetObjectIntroductionInterceptor(Tester.class,ITester.class);
```

#### 扩展DelegatingIntroductionInterceptor

```java
package org.springframework.mylearntest.aop.advice.perinstance;

import org.aopalliance.intercept.MethodInvocation;
import org.apache.commons.lang3.StringUtils;
import org.springframework.aop.support.DelegatingIntroductionInterceptor;

public class TesterFeatureIntroductionInterceptor extends DelegatingIntroductionInterceptor implements ITester {

    public static final long serialVersionUID = -3387097489523045796L;
    private boolean busyAsTester;

    @Override
    public Object invoke(MethodInvocation mi) throws Throwable {
        if (isBusyAsTester() && StringUtils.contains(mi.getMethod().getName(), "developSoftware")) {
            throw new RuntimeException("I'am so tired");
        }
        return super.invoke(mi);
    }

    @Override
    public boolean isBusyAsTester() {
        return busyAsTester;
    }

    public void setBusyAsTester(boolean busyAsTester) {
        this.busyAsTester = busyAsTester;
    }

    @Override
    public void testSoftware() {
        System.out.println("I will ensure the quality");
    }
}
```

## Spring AOP中的Aspect

Aspect是对系统中的横切关注点逻辑进行模块化封装的AOP的概念实体。通常情况下，Aspect可以包含多个Pointcut以及相关Advice定义。

![](https://oscimg.oschina.net/oscnet/up-54403168dcfb0ec2d3084e5f49d0e678cc1.png)

Advisor代表Spring中的Aspect，但是与正常的Aspect不同，Advisor通常只持有一个Pointcut和一个Advice。而理论上，Aspect定义中可以有多个Pointcut和多个Advice，所以Advisor是一种特殊的Aspect。

### PointcutAdvisor

![](https://oscimg.oschina.net/oscnet/up-a07fb97fa23007ab71c566724aef6d68b6f.png)

***

![](https://oscimg.oschina.net/oscnet/up-58fd138fecf5bb12603ff296eb439e0360c.png)

实际上，org.springframework.aop.PointcutAdvisor才是真正定义的有一个Pointcut和一个Advice的Advisor，大部分的Advisor实现全部是在PointcutAdvisor下的。

#### DefaultPointcutAdvisor

```xml
<beans>
    <bean id="pointcut"
      class="org.springframework.mylearntest.aop.pointcut.selfdefinepointcut.QueryMethodPointcut"/>
    <bean id="advice" class="org.springframework.mylearntest.aop.advice.perclass.DiscountMethodInterceptor"/>

    <bean id="advisor" class="org.springframework.aop.support.DefaultPointcutAdvisor">
        <property name="pointcut" ref="pointcut"/>
        <property name="advice" ref="advice"/>
    </bean>
</beans>
```

#### NameMatchMethodPointcutAdvisor

- 此类内部持有一个NameMatchMethodPointcut类型的Pointcut实例。当通过NameMatchMethodPointcutAdvisor公开的setMappedName和setMappedNames方法设置将要被拦截的方法名的时候，实际上是在操作NameMatchMethodPointcutAdvisor内部的NameMatchMethodPointcut实例。

```
Advice advice = new DiscountMethodInterceptor();
NameMatchMethodPointcutAdvisor advisor = new NameMatchMethodPointcutAdvisor(advice);
advisor.setMappedName("invoke");
```

##### RegexpMethodPointcutAdvisor

只能通过正则表达式为其设置相应的Pointcut，内部持有一个AbstractRegexpMethodPointcut的实例。AbstractRegexpMethodPointcut有两个实现类，Perl5RegexpMethodPointcutAdvisor和JdkRegexpMethodPointcut。默认使用JdkRegexpMethodPointcut，如果强制使用Perl5RegexpMethodPointcutAdvisor,那么可以通过RegexpMethodPointcutAdvisor的setPerl5(boolean)实现。

#### DefaultBeanFactoryPointcutAdvisor

DefaultBeanFactoryPointcutAdvisor自身绑定到了BeanFactory,要使用DefaultBeanFactoryPointcutAdvisor，要绑定到Spring IoC容器。通过容器中的Advice注册的beanName来关联对应的Advice。只有当对应的Pointcut匹配成功之后，采取实例化对应的Advice，减少了容器启动初期Advisor和Advice之间的耦合性。

#### IntroductionAdvisor

IntroductionAdvisor只能应用于类级别的拦截，只能使用Introduction型的Advice，而不能像PointcutAdvisor那样，可以使用任意类型的Pointcut，以及差不多任何类型的Advice。

![IntroductionAdvisor类结构图](https://oscimg.oschina.net/oscnet/up-b0477a82d62b94dceeda67d6a8c23eed154.png "IntroductionAdvisor类结构图")

#### Order

大多数时候，会有多个关注横切点，那么，系统实现中就会有多个Advisor存在。当其中的某些Advisor的Pointcut匹配了同一个Joinpoint的时候，就会在这同一个Joinpoint处执行多个Advice的横切逻辑。一旦这几个需要在同一个Joinpoint处执行的Advice逻辑存在优先顺序依赖的话，就需要我们来干预了。

![](https://oscimg.oschina.net/oscnet/up-306d297c19ff1032402f86643854b045754.png)

Spring在处理同一Joinpoint处的多个Advisor的时候，会按照指定的顺序有优先级来执行他们。顺序号越小，优先级越高，优先级越高的，越先被执行。(默认情况下，Spring会按照它们的声明顺序来应用它们，最先声明的顺序号最小但优先级最大，其次次之)

![](https://oscimg.oschina.net/oscnet/up-8e8112c31c3e7884c079675a98f834e4df9.png)

各个Advisor实现类，其实已经实现了Order接口。在使用的时候我们可以直接指定即可

```xml
<beans>
    <bean id="permissionAuthAdvisor" class="...PermissionAuthAdvisor">
        <property name="order" value="1"/>
        ...
    </bean>

    <bean id="exceptionBarrierAdvisor" class="...ExceptionBarrierAdvisor">
        <property name="order" value="0"/>
        ...
    </bean>
</beans>
```

## Spring AOP的织入

AspectJ采用ajc编译器作为它的织入器；JBoss AOP使用自定义的ClassLoader作为它的织入器；而在Spring AOP中，使用类org.springframework.aop.framework.ProxyFactory作为织入器。

使用方法:

1. 传入需要织入的对象 
   ```ProxyFactory weaver = new ProxyFactory(target);```

2. 将要应用到目标对象的Advisor绑定到织入器上
   
   * 如果不是Introduction的Advice类型，Proxy内部就会为这些Advice构造相应的Advisor，只不过在为它们构造Advisor中使用的Pointcut为Pointcut.TRUE。
   * 如果是Introduction类型，则会根据该Introduction具体类型进行区分；如果是Introduction的子类实现，框架内部会为其构造一个DefaultIntroductionAdvisor
     ；如果是DynamicIntroductionAdvice的子实现类，框架内部将抛出AOPConfigException异常(因为无法从DynamicIntroductionAdvice取得必要的目标对象信息)
   * `weaver.addAdvisor(advisor);`

3. 获取代理对象
   `Object proxyObject =  weaver.getProxy();`

### 基于接口的代理

```java
package org.springframework.mylearntest.aop.weaver;

import org.springframework.aop.framework.ProxyFactory;
import org.springframework.aop.support.NameMatchMethodPointcutAdvisor;

import java.util.Date;

/**
 * @Author: whalefall
 * @Date: 2020/7/15 22:53
 */

@SuppressWarnings({"rawtypes", "Deprecated"})
public class Test4ProxyFactory {
    public static void main(String[] args) {
        /*// 1. 传入需要织入的对象
        ProxyFactory weaver = new ProxyFactory(new Tester());
        // weaver.setTarget(new Tester());

        // 2. 将要应用到目标对象的Advisor绑定到织入器上
        ApplicationContext context = new ClassPathXmlApplicationContext("advisor/defaultadvisor/defaultadvisor.xml");
        Advisor advisor = (Advisor) context.getBean("advisor");
        weaver.addAdvisor(advisor);

        Object proxyObject =  weaver.getProxy();
        System.out.println(proxyObject.getClass());
        // out: class org.springframework.mylearntest.aop.advice.perinstance.Tester$$EnhancerBySpringCGLIB$$8e739b5b
        */

        // 目标类有实现接口的用法
        // 只要不将ProxyFactory的optimize和proxyTargetClass设置为true
        // 那么ProxyFactory都会按照面向接口进行代理
        MockTask task = new MockTask();
        ProxyFactory weaver = new ProxyFactory(task);
        // weaver.setInterfaces(new Class[]{ITask.class});
        NameMatchMethodPointcutAdvisor advisor = new NameMatchMethodPointcutAdvisor();
        advisor.setMappedNames("execute");
        advisor.setAdvice(new PerformanceMethodInterceptor());
        weaver.addAdvisor(advisor);
        ITask proxyObj = (ITask)weaver.getProxy();
        // com.sun.proxy.$Proxy0
        // System.out.println(proxyObj.getClass());
        // 只能强制转化为接口类型，不能转化为实现类类型 否则会抛出ClassCastException
        // ITask proxyObj = (MockTask)weaver.getProxy();
        proxyObj.execute(new Date());

        // 目标类没有实现接口的用法


    }
}
```

### 基于类代理

```java
package org.springframework.mylearntest.aop.weaver.baseonclass;

import org.springframework.aop.framework.ProxyFactory;
import org.springframework.aop.support.NameMatchMethodPointcutAdvisor;
import org.springframework.mylearntest.aop.advice.perclass.PerformanceMethodInterceptor;

/**
 * @Author: whalefall
 * @Date: 2020/7/17 23:31
 */
public class Test4CGLib {
    public static void main(String[] args) {
        ProxyFactory weaver = new ProxyFactory(new Executable());
        NameMatchMethodPointcutAdvisor advisor = new NameMatchMethodPointcutAdvisor();

        advisor.addMethodName("execute");
        advisor.setAdvice(new PerformanceMethodInterceptor());
        weaver.addAdvisor(advisor);

        Executable proxyObject = (Executable)weaver.getProxy();
        proxyObject.execute();
        // org.springframework.mylearntest.aop.weaver.baseonclass.Executable$$EnhancerBySpringCGLIB$$37e40619
        System.out.println("proxyObject class: " + proxyObject.getClass());
    }
}
```

如果目标类没有实现任何接口，不管proxyTargetClass的属性是什么，ProxyFactoy会采用基于类的代理

如果ProxyFactoy的proxyTargetClass属性值被设置为true，ProxyFactoy会采用基于类的代理

如果ProxyFactoy的optimize属性被设置为true，ProxyFactory会采用基于类的代理。

### Introduction的织入

Introduction可以为已经存在的对象类型添加新的行为，只能应用于对象级别的拦截，而不是通常Advice的方法级别的拦截，所以在Introduction的织入过程中，不需要指定Pointcut,而只需要指定目标接口类型。

Spring的Introduction支持只能通过接口定义为当前对象添加新的行为。所以，我们需要在织入的时机，指定新织入的接口类型。

```java
package org.springframework.mylearntest.aop.weaver.introduction;

import org.springframework.aop.framework.ProxyFactory;
import org.springframework.mylearntest.aop.advice.perinstance.Developer;
import org.springframework.mylearntest.aop.advice.perinstance.IDeveloper;
import org.springframework.mylearntest.aop.advice.perinstance.ITester;
import org.springframework.mylearntest.aop.advice.perinstance.TesterFeatureIntroductionInterceptor;

/**
 * @Author: whalefall
 * @Date: 2020/7/19 0:02
 */

@SuppressWarnings("rawtypes")
public class Test4Introduction {
    public static void main(String[] args) {
        ProxyFactory weaver = new ProxyFactory(new Developer());
        weaver.setInterfaces(new Class[]{IDeveloper.class, ITester.class});
        TesterFeatureIntroductionInterceptor advice = new TesterFeatureIntroductionInterceptor();
        weaver.addAdvice(advice);
        // DefaultIntroductionAdvisor advisor = new DefaultIntroductionAdvisor(advice,advice);
        // weaver.addAdvisor(advisor);

        Object proxy = weaver.getProxy();
        ((ITester)proxy).testSoftware();
        ((IDeveloper)proxy).developSoftware();
        System.out.println("proxy = " + proxy);

    }
}
```

### ProxyFactory本质

![](https://img2020.cnblogs.com/blog/2023890/202007/2023890-20200720221906281-1367694573.png)

Spring AOP框架内使用AopProxy对使用的不用的代理实现机制进行了适度的抽象，主要有针对JDK动态代理和CGLIB两种机制的AopProxy两种实现，分别是Cglib2AopProxy和JdkDynamicAopProxy两种实现。动态代理需要通过InvocationHandler提供调用拦截，所以JdkDynamicAopProxy同时实现了InvocationHandler接口。采用抽象工厂模式，通过org.springframework.aop.framework.AopProxyFactory进行。

```java
public interface AopProxyFactory {
    AopProxy createAopProxy(AdvisedSupport config) throws AopConfigException;
}
```

AopProxyFactory根据传入的AdvisedSupport实例提供的相关信息，来决定生成什么类型的AopProxy，具体的工作由AopProxyFactory具体的实现类来完成。即org.springframework.aop.framework.DefaultAopProxyFactory。

```java
package org.springframework.aop.framework;

import java.io.Serializable;
import java.lang.reflect.Proxy;

import org.springframework.aop.SpringProxy;

@SuppressWarnings("serial")
public class DefaultAopProxyFactory implements AopProxyFactory, Serializable {

    @Override
    public AopProxy createAopProxy(AdvisedSupport config) throws AopConfigException {
        // 如果传入的AdvisedSupport实例的isOptimize或者isProxyTargetClass方法返回true，
        // 或者目标对象没有实现任何接口，则采用CGLIB生成代理对象，否则使用动态代理。
        if (config.isOptimize() || config.isProxyTargetClass() || hasNoUserSuppliedProxyInterfaces(config)) {
            Class<?> targetClass = config.getTargetClass();
            if (targetClass == null) {
                throw new AopConfigException("TargetSource cannot determine target class: " +
                        "Either an interface or a target is required for proxy creation.");
            }
            if (targetClass.isInterface() || Proxy.isProxyClass(targetClass)) {
                return new JdkDynamicAopProxy(config);
            }
            return new ObjenesisCglibAopProxy(config);
        }
        else {
            return new JdkDynamicAopProxy(config);
        }
    }

    private boolean hasNoUserSuppliedProxyInterfaces(AdvisedSupport config) {
        Class<?>[] ifcs = config.getProxiedInterfaces();
        return (ifcs.length == 0 || (ifcs.length == 1 && SpringProxy.class.isAssignableFrom(ifcs[0])));
    }

}
```

![](https://img2020.cnblogs.com/blog/2023890/202007/2023890-20200720233704438-203646049.png)

AdvisedSupport是一个生成代理对象所需要的信息的载体。

* 一类以org.springframework.aop.framework.ProxyConfig为首的，记载生成代理对象的控制信息；
* 一类以org.springframework.aop.framework.Advised为首，承载生成代理对象的所需要的必要信息，比如相关目标类、Advice、Advisor等。

ProxyConfig就是普通的JavaBean，定义了五个boolean型的属性，分别控制在生成代理代理对象的时候，应该采取哪些措施。

* ProxyTargetClass：如果这个属性设置如true，则ProxyFactory将会使用CGLIB对目标对象进行代理。默认值为false。
* optimize：该属性主要用于告知代理对象是否需要采取进一步的优化措施。如果代理对象生成之后，即使为其添加或者移除了相应的人Advice，代理对象也可以忽略这种变动。如果这个属性设置如true，则ProxyFactory
  将会使用CGLIB对目标对象进行代理。默认值为false。
* opaque：该属性用于控制生成的代理对象是否可以强制转化为Advised，默认值为false，表示任何生成的代理对象都可以强制转型为Advised，我们可以通过Advised查询代理对象的一些状态。
* exposeProxy：设置exposeProxy，可以让Spring AOP框架在生成代理对象时，将当前代理对象绑定到ThreadLocal。如果目标对象需要访问当前代理对象，可以通过AopContext
  .currentProxy()拿到代理对象。出于性能方面考虑，该属性默认为false。
* frozen：如果将frozen设置为true，那么一旦针对dialing对象生成的各项信息配置完成，则不容许更改。比如ProxyFactory的设置完毕，并且frozen为true，则不能对Advice
  进行任何变动，这样可以优化代理对象的性能，默认情况下为false。

要生成代理对象，只有ProxyConfig提供的信息还不够，我们还需要生成代理对象的一些具体信息，比如，要针对哪些目标类生成代理对象，要为代理对象加入何种横切逻辑等，这些信息可以通过org.springframework.aop.framework.Advised设置或者拆线呢。默认情况下Spring AOP框架返回的代理对象都可以强制转型为Advised，已查询代理对象的相关信息。

我们可以使用Advised接口访问相应代理对象所有持有的Advisor，进行添加Advisor、一处Advisor等相关动作。即使代理对象已经生成完毕，也可对其进行操作，直接操作Advised，更多时候用于测试场景，可以帮助我们检查生成的代理对象是否如所期望的那样。

![](https://img2020.cnblogs.com/blog/2023890/202007/2023890-20200720233626519-1408969049.png)

ProxyFactory集AopProxy和AdvisedSupport于一身，可以通过AdvisedSupport设置生成代理对象所需要的相关信息，可以通过AopProxy生成代理对象。为了重用相关逻辑，Spring AOP框架在实现的时候，将一些公用的逻辑抽取到了org.springframework.aop.frameworkx.ProxyCreatorSupport中，自身继承了AdvisedSupport，所以就能具有设置生成代理对象所需要的相关信息。

为了简化生成不同类型AopProxy的工作，ProxyCreatorSupport内部持有一个AopProxyFactory实例，默认采用的是DefaultAopProxyFactory。

![](https://img2020.cnblogs.com/blog/2023890/202007/2023890-20200720233603959-1746364099.png)

### ProxyFactoryBean

ProxyFactoryBean的本质

* ProxyFactoryBean本质上是一个用来产生Proxy的FactoryBean，FactoryBean的作用 -- 如果某个对象持有某个FactoryBean的引用，它取得的不是FactoryBean
  本身，而是FactoryBean的getObject()方法返回的对象。所以，如果容器中某个对象依赖于ProxyFactoryBean，那么它将会使用到ProxyFactoryBean的getObject()方法返回的代理对象。

* 要让ProxyFactoryBean的getObject()方法返回相应目标对象的代理对象其实很简单。因为ProxyFactoryBean继承了ProxyFactory共有的父类ProxyCreatorSupport
  ，而ProxyCreatorSupport基本上已经把要做的事情(设置目标对象、配置其他部件、生成对应的AopProxy等)全部完成了。我们只用在ProxyFactoryBean的getObject()方法中通过父类的createAopProxy()拿到代理对象，然后`return AopProxy.getObject()`即可。

```
public Object getObject() throws BeansException {
        initializeAdvisorChain();
        if (isSingleton()) {
            return getSingletonInstance();
        }
        else {
            if (this.targetName == null) {
                logger.info("Using non-singleton proxies with singleton targets is often undesirable. " +
                        "Enable prototype proxies by setting the 'targetName' property.");
            }
            return newPrototypeInstance();
        }
    }
```

ProxyBean定义中要求表明返回的对象是以singleton的scope返回，还是prototype的scope返回。针对这两种情况返回不同的代理对象，以满足FactoryBean的isSingleton()方法的语义。

如果将ProxyFactoryBean的singleton属性设置为true，则ProxyFactoryBean在第一次生成代理对象之后，会通过内部实例变量singletonInstance(Object类型)缓存生成的代理对象。之后所有的请求都返回这一缓存实例，从而满足singleton的语义。反之，如果将ProxyFactoryBean的singleton属性设置为false，那么，ProxyFactoryBean每次都会重新检测各项设置，并为当前调用准备一套新的环境，然后再根据最新的环境数据，返回一个新的代理对象。因此，如果singleton属性为false，在生成代理对象的性能上存在损失。

#### ProxyFactoryBean的使用

与ProxyFactory一样，通过ProxyFactoryBean，我们可以在生成目标对象的代理对象的时候，指定使用基于接口的代理还是基于类的代理方式，而且，因为它们全部继承自同一个父类，大部分设置项目都相同。ProxyFactoryBean在继承了ProxyCreatorSupport的所有配置属性之外还添加了自己独有的：

proxyInterfaces：如果我们要采用基于接口的代理方式，那莪需要通过该属性配置相应的接口类型，通过Collection对象传入配置元素的接口信息。ProxyFactoryBean
有一个autodetectInterfaces属性，该属性默认为true，如果没有明确指定要代理的接口类型，ProxyFactoryBean会自动检测目标对象实现的接口类型并进行代理。

interceptorNames：通过该属性，我们可以指定多个将要织入到目标对象的Advice、拦截器以及Advisor，而再也不通过ProxyFactory那样的addAdvice或者addAdvisor
方法添加，通常我们会使用配置元素`<list>`添加需要的拦截器名称。

* 如果没有设置目标对象，那么可以在interceptorNames的最后一个元素的位置，放置对象的Bean定义名称。建议直接定义目标对象，不采用前面的方法。
* 通过指定的interceptorNames某个元素名称之后添加*通配符，可以让ProxyFactoryBean在容器中搜索符合条件的所有Advisro并应用到目标对象。

使用通配符的范例

```xml
<beans>
    <bean id="proxy" class="org.springframework.aop.framework.ProxyFactoryBean">
        <property name="target" ref="..."/>
        <property name="interceptorNames">
            <list>
                <value>global*</value>
            </list>
        </property>
    </bean>

    <bean id="global_debug" class="org.springframework.aop.interceptor.DebugInterceptor"/>
    <bean id="global_performance" class="org.springframework.aop.interceptor.PerformanceMonitorInterceptor">
</beans>
```

singleton：ProxyFactoryBean本质上是一个FactoryBean，所以我们可以通过singleton属性，指定getObject调用是返回同一个代理对象还是新的。

使用ProxyFactoryBean生成代理对象案例

* 配置文件

```xml
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xmlns:context="http://www.springframework.org/schema/context"
       xsi:schemaLocation="http://www.springframework.org/schema/beans
        http://www.springframework.org/schema/beans/spring-beans-2.5.xsd
        http://www.springframework.org/schema/context
        http://www.springframework.org/schema/context/spring-context-2.5.xsd">

    <!--    目标对象的Bean定义-->
    <bean id="task"
          class="org.springframework.mylearntest.aop.weaver.baseoninterface.MockTask" scope="prototype"/>

    <!--    ProxyFactoryBean定义-->
    <bean id="introducedTask" class="org.springframework.aop.framework.ProxyFactoryBean" scope="prototype">
        <property name="targetName">
            <value>task</value>
        </property>
        <property name="proxyInterfaces">
            <list>
                <value>org.springframework.mylearntest.aop.weaver.baseoninterface.ITask</value>
                <value>org.springframework.mylearntest.aop.weaver.proxyfactorybean.ICounter</value>
            </list>
        </property>
        <property name="interceptorNames">
            <list>
                <value>introductionInterceptor</value>
            </list>
        </property>
    </bean>

    <!--    introductionInterceptor定义-->
    <bean id="introductionInterceptor"
          class="org.springframework.aop.support.DelegatingIntroductionInterceptor" scope="prototype">
        <constructor-arg>
            <bean class="org.springframework.mylearntest.aop.weaver.proxyfactorybean.CounterImpl"/>
        </constructor-arg>
    </bean>

</beans>
```

* java类

```java
package org.springframework.mylearntest.aop.weaver.proxyfactorybean;

/**
 * @Author: whalefall
 * @Date: 2020/7/22 23:34
 */
public interface ICounter {
    void resetCounter();
    int getCounter();
}
```

```java
package org.springframework.mylearntest.aop.weaver.proxyfactorybean;

/**
 * @Author: whalefall
 * @Date: 2020/7/22 23:35
 */
public class CounterImpl implements ICounter{
    private int counter;

    @Override
    public void resetCounter() {
        counter = 0;
    }

    @Override
    public int getCounter() {
        counter ++;
        return counter;
    }
}
```

```java
package org.springframework.mylearntest.aop.weaver.proxyfactorybean;

import org.springframework.aop.support.DelegatingIntroductionInterceptor;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

/**
 * @Author: whalefall
 * @Date: 2020/7/22 23:51
 * @see DelegatingIntroductionInterceptor
 */
public class Test4ProxyFactoryBean {
    public static void main(String[] args) {
        ApplicationContext context = new ClassPathXmlApplicationContext("proxyfactorybean\\proxyfactorybean.xml");
        Object proxy1 = context.getBean("introducedTask");
        Object proxy2 = context.getBean("introducedTask");

        System.out.println(((ICounter)proxy1).getCounter());//1
        System.out.println(((ICounter)proxy1).getCounter());//2
        System.out.println(((ICounter)proxy2).getCounter());//1
    }
}
```

### 加速织入自动化进程

Spring AOP自动代理的实现建立在IoC容器的BeanPostProcessor概念之上，使用一个BeanPostProcessor，然后在BeanPostProcessor内部实现这样的逻辑，即当对象实例化的时候，为其生成代理对象并返回，而不是实例化后的目标对象本身，从而达到自动代理的目的。

```
    for(bean in IoC container){
        // 检查当前bean定义是否满足拦截条件，是则拦截
        if(isAssistentStatement){
            Object proxy = createProxyFor(bean);
            return proxy;
        } else {
            Object instance = createInstance(bean);
            return instance;
        }
    }
```

拦截条件

* 通过外部配置文件传入这些拦截条件信息，比如我们在容器的配置文件中注册的有关Pointcut以及Advisor等就包括这些信息；

* 还可以在具体类的定义文件中，通过元数据来知名具体的拦截条件是什么，比如可以通过Jakarta Commons Atrributes或者Java5的注解，直接在代码类中标注Pointcut等拦截信息。

#### Spring中可用的自动代理类

Spring AOP在org.springframework.aop.framework.autoproxy包下提供了两个常用的AutoProxyCreator，即BeanNameAutoProxyCreator和DefaultAdvisorAutoProxyCreator。

1. BeanNameAutoProxyCreator

使用BeanNameAutoProxyCreator可以通过指定一组容器内的目标对象对应的BeanName，将指定的一组拦截器应用到这些目标对象之上。

* 配置案例

```xml
<beans>
    <bean id="target1" class="..."/>
    <bean id="target2" class="..."/>

    <bean id="mockTask" class="..."/>
    <bean id="fakeTask" class="..."/>

    <bean id="taskThrowsAdvice" class="...TaskThrowsAdvice"/>
    <bean id="performanceInterceptor" class="...PerformanceInterceptor">

    <bean class="org.springframework.aop.framework.autoproxy.BeanNameAutoProxyCreator">
        <!--指定哪些bean自动生成代理对象-->
        <property name="beanNames">
            <list>
                <value>target1</value>
                <value>target2</value>
            </list>
        </property>

        <!--指定将要应用到目标对象的拦截器、Advice或者Advisor等-->
        <property name="interceptorNames">
            <list>
                <value>taskThrowsAdvice</value>
            </list>
        </property>
    </bean>

    <bean class="org.springframework.aop.framework.autoproxy.BeanNameAutoProxyCreator">
        <property name="beanNames">
            <!--使用*号进行通配-->
            <list>
                <value>mockTask*</value>
                <value>fakeTask*</value>
            </list>
        </property>
        <property name="interceptorNames">
            <list>
                <value>performanceInterceptor</value>
            </list>
        </property>
    </bean>

    <bean class="org.springframework.aop.framework.autoproxy.BeanNameAutoProxyCreator">
        <property name="beanNames">
            <!--对于*通配符的情况下，也可以使用逗号隔开-->
            <list>
                <value>target*,*Task,*service</value>
            </list>
        </property>
        <property name="interceptorNames">
            <list>
                <value>performanceInterceptor</value>
            </list>
        </property>
    </bean>
</beans>
```

2. DefaultAdvisorAutoProxyCreator

只需要在ApplicationContext中注册Bean即可，剩下的任务会由DefaultAdvisorAutoProxyCreator完成。将其注入容器之后，将会自动搜寻容器内的所有Advisor，然后根据各个Advisor所提供的拦截信息，为符合条件的容器中的目标对象生成相应的代理对象。DefaultAdvisorAutoProxyCreator只对Advisor有效，因为只有Advisor才既有Pointcut信息捕捉符合条件的目标对象，又有相应的Advice。

```xml
<beans>
    <bean class="org.springframework.aop.framework.autoproxy.DefaultAdvisorAutoProxyCreator">
        <!--设置对象使用基于类的代理-->
        <property name="proxyTargetClass">
            <value>true</value>
        </property>
    </bean>

    <bean id="target1" class="..."/>
    <bean id="target2" class="..."/>

    <bean id="mockTask" class="..."/>
    <bean id="fakeTask" class="..."/>

    <bean id="logAdvisor" class="org.springframework.aop.support.DefaultPointcutAdvisor">
        <property name="pointcut">
            ...
        </property>
        <property name="advice">
            <bean id="performanceInterceptor"
                  class="org.springframework.mylearntest.aop.advice.perclass.PerformanceMethodInterceptor"></bean>
        </property>
    </bean>

    <bean id="logAdvisor" class="org.springframework.aop.support.DefaultPointcutAdvisor">
        <property name="pointcut">
            ...
        </property>
        <property name="advice">
            <bean id="taskThrowsAdvice" class="...TaskThrowsAdvice"></bean>

        </property>
    </bean>
</beans>
```

3. 扩展AutoProxyCreator

可以在Spring AOP提供的AbstractAutoProxyCreator或者AbstractAdvisorAutoProxyCreator基础之上，实现相应的子类。

Sprig AOP框架中有关自动代理的实现架构

* 所有的AutoProxyCreator都是InstantiationAwareBeanPostProcessor，这种类型的BeanPostProcessor与普通的BeanPostProcessor有所不同。当Spring IoC
  容器检测到有InstantiationAwareBeanPostProcessor类型的BeanPostProcessor的时候，会直接通过InstantiationAwareBeanPostProcessor中的逻辑构造对象实例返回，而不会走正常的对象实例化流程。也就是“短路”。这样AutoProxyCreator会直接构造目标对象的代理对象返回，而不是原来的目标对象。

![](https://img2020.cnblogs.com/blog/2023890/202007/2023890-20200723232128763-918015187.png)

AspectJAwareAdvisorAutoProxyCreator是Spring 2.0之后的AutoProxyCreator实现，也算是一个AutoProxyCreator的自定义实现。它还有一个子类AnnotationAwareAspectJAutoProxyCreator，可以根据Java5的注解捕获信息以完成自动代理。

Spring AOP还支持基于Jakarta Commons Atrributes的元数据的自动代理机制，来提供拦截信息。

## TargetSource

![](https://img2020.cnblogs.com/blog/2023890/202007/2023890-20200727230047191-1011428346.png)

TargetSource的作用：TargetSource它是目标对象的容器，当每个针对目标对象的方法调用经过层层拦截而到达调用链的终点的时候，就该调用目标对象上定义的方法了，这时候不是直接调用这个目标对象上的方法，而是通过某个TargetSource与实际目标对象之间交互，然后再调用从TargetSource中取得的目标对象上的相应的方法。

TargetSource的特性

每次方法调用都会触发TargetSource的getTarget()方法，getTarget()方法将从相应的TargetSource实现类中取得具体的目标对象，这样，我们就可以控制每次方法调用作用到的具体对象实例。

* 提供一个目标对象池，每次从TargetSource取得的目标对象都从这个目标对象池中取得。
* 让一个TargetSource实现类持有多个目标对象的实例，然后按照某种规则，在每次方法调用时，返回相应的目标对象实例。

还可以让TargetSource只持有一个目标对象，通常ProxyFactory或者ProyxFactoryBean处理目标对象的方式也是如此，它们内部会构造一个org.springframework.aop.target
.SingletonTargetSource实例，而SingletonTargetSource则会针对每次方法调用返回同一个目标对象的实例引用。

### TargetSource实现类

#### SingletonTargetSource

org.springframework.aop.target.SingletonTargetSource是使用最多的TargetSource实现类，虽然我们可能并不知道。因为通过ProxyFactory的setTarget()设置完目标对象之后，ProxyFactory内部会自行使用一个SingletonTargetSource对设置的目标对象进行封装。

![](https://img2020.cnblogs.com/blog/2023890/202007/2023890-20200727225806720-1621121446.png)

#### PrototypeTargetSource

```xml
<beans>
    <bean id="target" class="org.springframework.mylearntest.aop.weaver.baseoninterface.MockTask"
          scope="prototype"/>

    <bean id="prototypeTargetSource" class="org.springframework.aop.target.PrototypeTargetSource">
        <property name="targetBeanName">
            <value>target</value>
        </property>
    </bean>

    <bean id="targetProxy" class="org.springframework.aop.framework.ProxyFactoryBean">
        <property name="targetSource">
            <ref bean="prototypeTargetSource"/>
        </property>
        <property name="interceptorNames">
            <list>
                <value>anyInterceptor</value>
            </list>
        </property>
    </bean>
</beans>
```

目标对象的bean定义声明必须为prototype。
通过targetBeanName属性指定目标对象的bean定义名称，而不是引用。

#### HotSwappableTargetSource

使用HotSwappableTargetSource封存目标对象，可以让我们在应用程序运行的时候，根据某种特定条件，动态地替换目标对象类的具体实现，比如，IService有多个实现类，如果程序启动之后，默认的IService实现类出现了问题，我们可以马上切换到Iservice的另一个实现上，而所有这些对于调用者来说都是透明的。

使用方法

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd">

    <bean id="task" class="org.springframework.mylearntest.aop.weaver.baseoninterface.MockTask">

    </bean>

    <bean id="hotSwapTargetSource" class="org.springframework.aop.target.HotSwappableTargetSource">
        <constructor-arg>
            <ref bean="task"/>
        </constructor-arg>
    </bean>

    <bean id="taskProxy" class="org.springframework.aop.framework.ProxyFactoryBean">
        <property name="targetSource" ref="hotSwapTargetSource"/>
        <property name="interceptorNames">
            <list>
                <value>performanceMethodInterceptor</value>
            </list>
        </property>
    </bean>

    <bean id="performanceMethodInterceptor"
          class="org.springframework.mylearntest.aop.advice.perclass.PerformanceMethodInterceptor"/>

</beans>
```

```java
package org.springframework.mylearntest.aop.weaver.hotswaptargetsource;

import org.junit.Assert;
import org.springframework.aop.framework.Advised;
import org.springframework.aop.target.HotSwappableTargetSource;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.mylearntest.aop.weaver.baseoninterface.ITask;

import java.util.Date;

/**
 * @Author: whalefall
 * @Date: 2020/7/26 19:47
 */
public class Test4HotSwappableTargetSource {
    public static void main(String[] args) throws Exception {
        ApplicationContext context = new ClassPathXmlApplicationContext("hotswappabletargetsource\\hotSwappableTargetSource.xml");
        Object proxy = context.getBean("taskProxy");
        Object initTarget = ((Advised)proxy).getTargetSource().getTarget();

        HotSwappableTargetSource hotSwappableTargetSource = (HotSwappableTargetSource)context.getBean(
                "hotSwapTargetSource");
        Object oldTarget = hotSwappableTargetSource.swap(new ITask() {
            @Override
            public void execute(Date date) {
                System.out.println("old target generated by hotSwapTargetSource");
            }
        });

        Object newTarget = ((Advised)proxy).getTargetSource().getTarget();

        // initTarget = org.springframework.mylearntest.aop.weaver.baseoninterface.MockTask@72967906
        // oldTarget = org.springframework.mylearntest.aop.weaver.baseoninterface.MockTask@72967906
        // newTarget = org.springframework.mylearntest.aop.weaver.hotswaptargetsource
        // .Test4HotSwappableTargetSource$1@5b8dfcc1

        Assert.assertSame(initTarget,oldTarget);
        Assert.assertNotSame(initTarget,newTarget);
    }
}
```

#### CommonsPoolTargetSource

某些时候，我们可能想返回有限数目的目标对象实例，这些目标对象实例的地位是平等的，就好像数据库连接池中的那些Connection一样，我们可以提供一个目标对象的对象池，然后让某个TargetSource实现每次都从这个对象池中取得目标对象。

如果不能使用Jakarta Commons Pool，那么也可以通过扩展org.springframework.aop.target.AbstractPoolingTargetSource类，实现相应的提供对象池化的功能的TargetSource。

#### ThreadLocalTargetSource

如果想为不同的线程调用提供不同的目标对象，那么可以使用org.springframework.aop.target.ThreadLocalTargetSource。它可以保证各自线程上目标对象的调用，可以被分配到当前线程对应的那个目标对象的实例上。其实，ThreadLocalTargetSource无非就是对JDK标准的ThreadLocal进行了简单的封装而已。

#### 自定义TargetSource

```java
package org.springframework.mylearntest.aop.weaver.selfdefinetargetsource;

import org.springframework.aop.TargetSource;
import org.springframework.mylearntest.aop.weaver.baseoninterface.ITask;

/**
 * @Author: whalefall
 * @Date: 2020/7/27 22:27
 */
@SuppressWarnings("rawtypes")
public class AlternativeTargetSource implements TargetSource {
    private ITask alternativeTask1;
    private ITask alternativeTask2;

    private int counter;

    public AlternativeTargetSource(ITask task1, ITask task2) {
        this.alternativeTask1 = task1;
        this.alternativeTask2 = task2;
    }

    @Override
    public Object getTarget() throws Exception {
        try {
            if (counter % 2 == 0)
                return alternativeTask2;
            else
                return alternativeTask1;
        } finally {
            counter ++;
        }
    }

    @Override
    public  Class getTargetClass() {
        return ITask.class;
    }

    @Override
    public boolean isStatic() {
        return false;
    }

    @Override
    public void releaseTarget(Object arg0) throws Exception {

    }
}
```

```java
package org.springframework.mylearntest.aop.weaver.selfdefinetargetsource;

import org.springframework.aop.TargetSource;
import org.springframework.aop.framework.ProxyFactory;
import org.springframework.mylearntest.aop.weaver.baseoninterface.ITask;

import java.util.Date;

/**
 * @Author: whalefall
 * @Date: 2020/7/27 22:33
 */
public class Test4AlternativeTargetSource {
    public static void main(String[] args) {
        ITask task1 = new ITask() {
            @Override
            public void execute(Date date) {
                System.out.println("execute in Task1");
            }
        };

        ITask task2 = new ITask() {
            @Override
            public void execute(Date date) {
                System.out.println("execute in Task2");
            }
        };

        ProxyFactory pf = new ProxyFactory();
        TargetSource targetSource = new AlternativeTargetSource(task1,task2);
        pf.setTargetSource(targetSource);
        Object proxy = pf.getProxy();
        for (int i = 0; i < 100; i++) {
            ((ITask)proxy).execute(new Date());
        }
    }
}
```

> 参考资料
> 
> 1. 书籍名称：Spring揭秘 作者：王福强
> 2. [https://github.com/spring-projects/spring-framework.git](https://github.com/spring-projects/spring-framework.git)

> <font color="red" >转载请注明 [原文地址](https://www.cnblogs.com/whalefall541/p/13388295.html)</font>