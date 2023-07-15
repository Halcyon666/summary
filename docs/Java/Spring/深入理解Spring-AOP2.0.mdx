---
title: "SPRING AOP 2.0"
hidemeta: true
---
***本文相关代码(来自[官方源码](https://github.com/spring-projects/spring-framework.git "官方源码")spring-test模块)请参见[spring-demysify](https://github.com/whalefall541/spring-demysify) org.springframework.mylearntest包下。***

## @AspectJ形式AOP使用

无需像1.0那样实现相应的接口，唯一要做的就是在这个Aspect类上加一个@Aspect注解。这样就可以判断ClassPath中哪些类是我们要找的Aspect定义。通过@Pointcut定义Pointcut，通过Around等注解来指定哪些方法定义了相应的Advice逻辑。

[PerformanceTraceAspect.java](https://github.com/whalefall541/spring-demysify/blob/master/src/main/java/org/springframework/mylearntest/aop2/aspectj/PerformanceTraceAspect.java)

假如我们有一个目标对象Foo，有两种方式将Aspect定义织入这个目标对象类，，实现对其符合Pointcut定义的joinpoint进行拦截。

```java
public class Foo {
	public void method1() {
		System.out.println("method1 executed");
	}

	public void method2() {
		System.out.println("method2 executed");
	}
}
```

两种方法如下：

1. 编程方式织入

* 通过AspectJProxyFactory实现

```java
public class Test4AspectJProxyFactory {
	public static void main(String[] args) {
		AspectJProxyFactory weaver = new AspectJProxyFactory();
		weaver.setProxyTargetClass(true);
		weaver.setTarget(new Foo());
		weaver.addAspect(PerformanceTraceAspect.class);
		Object proxy = weaver.getProxy();
		((Foo)proxy).method1();
		((Foo)proxy).method2();
	}
}
```

2. 通过自动代理织入

* 针对@AspectJ风格的AOP，Spring AOP专门提供了一个AutoProxyCreator实现类进行自动代理，以免去过多的编码和配置工作，它是在AbstractAdvisorAutoProxyCreator基础上的一个扩展类。
* 与AutoProxyCreator一样，我们需要在IoC容器的配置文件中注册一下AnnotationAwareAspectJAutoProxyCreator就可以了。

![](https://s2.loli.net/2023/07/15/hrGdFWtgxbfa78l.png)

[annotationawareaspectJautoproxycreatorxsd.xml](https://github.com/whalefall541/spring-demysify/blob/master/src/main/resources/annotationawareaspectJautoproxycreator/annotationawareaspectJautoproxycreatorxsd.xml)

```xml
<aop:aspectj-autoproxy proxy-target-class="true"/>
	<!--	等同于上面一行-->
	<!--<bean class="org.springframework.aop.aspectj.annotation.AnnotationAwareAspectJAutoProxyCreator">
		<property name="proxyTargetClass" value="true"/>
	</bean>-->

	<bean id="performanceAspect" class="org.springframework.mylearntest.aop2.aspectj.PerformanceTraceAspect"/>

	<bean id="target" class="org.springframework.mylearntest.aop2.aspectj.Foo"/>
```

```java
public class Test4AutoAspectJ {
	public static void main(String[] args) {
		ApplicationContext context = new ClassPathXmlApplicationContext("annotationawareaspectJautoproxycreator\\annotationawareaspectJautoproxycreator.xml");
		Object proxy = context.getBean("target");
		((Foo)proxy).method1();
		((Foo)proxy).method2();
	}
}
```

* 如果把target作为依赖对象注入其他的bean定义，那么依赖的主体对象在持有的也是被代理过的目标对象。
* Tip:在使用@AspectJ形式的AOP的时候，应该尽量使用容器内的自动代理支持，通常，只有处于测试目的才会使用编程的方式直接织入操作，在使用过程中，你会发现，实际上这两种方式是有差异的，一些行为并不统一。
* 使用@Aspect形式的AOP，需要引入aspectjweaver.jar和aspectjrt.jar。

### @AspectJ形式的Pointcut

在Spring框架发布 2.0 版本之前，Spring AOP没有像AspectJ那样的正式的Pointcut描述语言，而且也只支持方法级别的拦截。所以通常情况下，简单的方法名指定以及正则表达式两种，基本上可以很好地达到目的。

在Spring发布 2.0 版本之后，Spring AOP 框架集成了AspectJ的部分功能，这其中就包括AspectJ的Pointcut语言支持。从DTD过渡到XSD时代。

1. @AspectJ形式Pointcut声明方式

@AspectJ形式的Pointcut声明，依附在@ApectJ，通过使用org.aspectj.lang.annotation.Pointcut这个注解，指定AspectJ形式的Pointcut
表达式之后，将这个指定了相应表达式的注解标注到Aspect定义类的某个方法上即可。

```java
@Aspect
public class YourAspect {
    @Pointcut("aspect style pointcut expression")
    public void pointcutMethod1() {}
    
    @Pointcut("aspect style pointcut expression")
    public void pointcutMethod2() {}
    
    // ...
}
```

@AspectJ形式的Pointcut声明包含如下两个部分。

* Pointcut Expression

*Pointcut Expression的载体为@Pointcut，该注解是方法级别的注解，所以Pointcut Expression不能脱离某个方法单独声明*

表达式由两部分组成，分别是Pointcut标识符，和表达式匹配模式。

* Pointcut Signature

它是一个方法的定义，作为Pointcut Expression的载体。Pointcut Signature所在的方法定义，除了返回类型必须是void之外，没有其他的限制。方法修饰符所起到的作用于java语言中语义相同，public型的Pointcut Signature可以在其他Aspect定义中引用，private则只能在当前Aspect定义中引用。可以将Pointcut Signature作为相应Pointcut Expression的标识符，在Pointcut Expression的定义中取代重复的Pointcut表达式定义。

```java
@Aspect
public class YourAspect {
    @Pointcut("execution(void method1())")
    public void method1Execution() {}
    
    @Pointcut("method1Execution()")
    private void stillMethod1Execution() {}

    // ...
}
```

2. AspectJ形式Pointcut表达式的标识符

* execution

使用它将帮助我们匹配拥有指定方法签名的Joinpoint，使用格式如下

`execution(modifiers-pattern ? ret-type-pattern declaring-type-pattern ? name-pattern(param-pattern) throws-pattern?)`

其中方法的返回类型、方法名、以及参数部分匹配模式时必须指定的，其他部分的匹配模式可以省略。

*example*

```java
public class Foo {
    public void doSomething(String arg) {
        // ...
}
}
```

那么可以指定如下Pointcut表达式来匹配Foo的doSomething方法

```
execition(public void Foo.doSomething(String))

execition(void Foo.doSomething(String))
```

* \*可以用于任何部分的匹配模式中，可以匹配相邻的多个字符*

```
execution(* *(String))

execution(* *(*))
```

* ..通配符可以在两个位置使用*

① declaring-type-pattern处使用指定多个层次的类型声明

```
execution(void cn.spring21.*.doSomething(*) // 只能定位到cn.spring21这一层下的所有类型

execution(void cn.spring21..*.doSomething(*) // 可以匹配到所有的cn.spring21包下的包括子孙包
```

② 用于方法列表匹配位置，则表示该方法可以有0到多个参数，参数类型不限。如果..换成*，则只能匹配一个参数。

```
execution(void *.doSomething(..))

execution(void doSomething(String,*)) // 表示第一个参数为String,第二个参数为任意类型

execution(void doSomething(..,String)) // 表示不限参数格式，不限类型，但是最后一个参数类型必须是String
```

* within

within标识符只接受类类型的声明，它将会匹配指定类型下所有的Joinpoint方法。

*example1 within切点表达式写法*

```
within(cn.spring21.aop.target.MockTarget)

within(cn.spring21.aop.target.*) // 匹配target包下所有类内部的方法级别的Joinpoint

within(cn.spring21.aop..*) // 匹配aop包下以及子孙包下所有类内部方法级别的Joinpoint
```

*example2 within切点表达式使用*

```java
@Retention(RetentionPolicy.RUNTIME)
@Target({ElementType.METHOD,ElementType.TYPE})
public @interface AnyJoinpointAnnotation {}
```

```java
@AnyJoinpointAnnotation
public class Foo{
    public void method1(){}
    public void method2(){}
}
```

当使用`@within(AnyJoinpointAnnotation)`的Pointcut表达式时，Foo类中method1、method2等方法将全部被Pointcu表达式所匹配。因为该类标注了@AnyJoinpointAnnotation，其他类如果也标注了该注解，也会被匹配到。

*注意@within==只接受注解类型==，并对被指定注解类型所标注的类生效*

* this和target

在AspectJ中，this指代调用方法一方所在的对象，target指代被调用方法所在的对象，这样通常可以同时使用这两个标识符限定方法的调用关系。比如，如果Object1、Object2都会调用Object3
对象的某个方法，那么，Pointcut表达式定义this(Object2) && target(Object3) 只会当Object2调用Object3上的方法的时候才会匹配，而Object1调用Object3上的方法的时候不会被匹配。

在Spring AOP中的this和target表示语义不同于AspectJ中，this指代的是目标对象的代理对象，而target是目标对象。

不论使用基于接口的代理方式还是基于类的代理方式，this(ProxyInterface) 和 target(ProxyInterface)起到的效果差不多。

如果指定具体类型this(TargetFoo)和target(TargetFoo)，target(TargetFoo)匹配到目标对象中所有的Joinpoint，因为目标对象确实是TargetFoo类型，而this(TargetFoo)则不可以。

this和target标识符都是在Pointcut表达式中与其他标识符结合使用，以进一步加强匹配的限定规则

```
execution(void cn.spring21.*.doSomething(*)) && this(TargetFoo)

execution(void cn.spring21.*.doSomething(*)) && targe(ProxyInterface)

// 匹配 同时实现ProxyInterface 和 ProxyInterface2
this(ProxyInterface) && target(proxyInterface2)
```

在Spring AOP中 @within 和 @target没有太大的区别。只不过@within属于静态匹配，而@target则是在运行时动态匹配Joinpoint。

* args

该标识符的作用是，帮助我们捕捉拥有指定参数类型、指定参数数据量的方法级Joinpoint，而不管该方法在什么类型中被声明。例如，args(cn.spring21.unveilspring.domain.User)那么下面方法签名都会被匹配到

```java
public class Foo {
    public boolean login(User user) {
        // ...
    }
}

public class Bar {
    public boolean isLogin(User user) {
        // ...
    }
}
```

要想捕捉`public boolean login(Object user)` 使用类似于`execution(* *(User))`这样的表达式无法捕捉到(因为它是静态的Pointcut)，需要使用args的标识符。

使用@args标识符的Pointcut表达式会检查当前方法级的Joinpoint的方法参数类型，如果该次传入的参数类型拥有@args所制定的注解，当前Joinpoint将被匹配。

![](https://s2.loli.net/2023/07/15/hvlZ4iRWjtozqS3.png)

*@args会尝试对系统中所有对象的每次方法执行的参数，都进行指定的注解动态检查。只要参数的类型标注有@args指定的注解类型，当前方法执行就将匹配。只接受注解类型声明*

* annotation

使用annotation标识符的Pointcut表达式，将会尝试检查系统中所有对象的所有方法级别Joinpoint。如果被检测的方法标注有@annotation标识符所指定的注解类型，那么当前方法所在的Joinpoint将被Pointcut表达式所匹配。

想要下面方法支持事务机制，只需要在相应的方法上一个注解@Transactional，然后使用Pointcut表达式指定`@annotation(org.springframework.transaction.annotation.Transactional)`注意@Transactional注解被定义为`@Target(ElementType.METHOD)`。

**即使在Spring AOP 中可以使用AspectJ中的Pointcut表达式标识符，它们的语义跟AspectJ中的最终语义会有差别。所以，与其说Spring AOP现在可以使用AspectJ的Pointcut表达语言，不如说Spring AOP 借用了AspectJ的Pointcut表达语言的“外衣”，而实际上底层的语义和最终匹配，却还是沿用Spring AOP最初的机制。另外Spring AOP还可能在原来表达式的基础上增加新的标志符，如bean(..)。AspectJ扩展了Java语言，现在Spring AOP的Pointcut表达式则要扩展AspectJ的Pointcut。**

3. @AspectJ形式的Pointcut在Spring AOP中的真实面目

实际上，@AspectJ形式声明的所有Pointcut表达式，在Spring AOP内部都会通过解析，转化为具体的Pointcut对象。因为Spring AOP有自己的Pointcut定义结构，所以@AspectJ形式声明这些Pointcut表达式，最终会转化为一个专门面向AspectJ的Pointcut实现。

org.springframework.aop.aspectj.AspectJExpressionPointcut代表Spring AOP中面向AspectJ的Pointcut具体实现。虽然它使用AspectJ
的相应支持，但是依然遵循Spring AOP的Pointcut定义。

![](https://s2.loli.net/2023/07/15/QXc4awHlyRibeIj.png)

定义ExpressionPointcut和AbstractExpressionPointcut主要为了以后的扩展性。如果还有AspectJ的Pointcut描述语言之外的形式，我们可以在这两个基础上进行集成。

在AspectJProxyFactory或者AnnotationAwareAspectJAutoProxyCreator通过反射获取了AspectJ中的@Pointcut定义的AspectJ形式的定义之后，在Spring AOP框架内部都会构造一个对应的AspectJExpressionPointcut对象实例。AspectJExpressionPointcut内部持有的通过反射获得的Pointcut表达式。

![](https://s2.loli.net/2023/07/15/SlIhfBd7UZtmqEC.png)

AspectJExpressionPointcut 属于Spring AOP的Pointcut定义之一，Spring AOP框架内部处理Pointcut匹配的逻辑不需要改变，依然使用原来的匹配机制，即通过ClassFilter和MethodMatcher进行具体Joinpoint的匹配工作。不过，AspectJExpressionPointcut在实现ClassFilter和MethodMatcher相应的方法逻辑的时候，会委托AspectJ类库的相关类做具体的工作。AspectJExpressionJoinpoint会委托AspectJ类库中的PointcutParser来对它所持有的AspectJ形式的Pointcut表达式进行解析。PointcutParser解析完成之后会返回一个PointcutExpression对象(依然是AspectJ类库中的类)，之后匹配与否就直接委托这个PointcutExpression对象的相关方法进行处理了。

AspectJExpressionPointcut属于面向AspectJ的Pointcut实现，我们可以像Spring AOP中其他各种Pointcut实现类那样来使用它。只不过，构造完成后，不为它设置方法名或者正则表达式，而是如下所示设置@AspectJ形式的Pointcut

```
AspectJExpressionPointcut pointcut = new AspectJExpressionPointcut();
pointcut.setExpression("execution( * someMethodName(..))");
```

### @AspectJ形式的Advice

@AspectJ形式的定义，实际上就是使用@AspectJ标注的AspectJ定义类中的普通方法，只不过这些方法需要针对不同的Advice类型对应的注解进行标注。

1. 使用 Pointcut 设置 BeforeAdvice

```java
/**
 * 使用AspectJ形式
 */
@Aspect
public class ResourceSetupAspectJ {
    private Resource resource;
    
    @Before("execution(boolean *.execute())")
    public void setupResourcesBefore() throws Throwable {
        if(!getResource().exists())
            FileUtils.forceMkdir(getResource().getFile());
    }
    // 省略getter setter
}
```

使用Pointcut Signature引用Pointcut 

[ResourceSetupAspectJ.java](https://github.com/whalefall541/spring-demysify/blob/master/src/main/java/org/springframework/mylearntest/aop2/aspectj/ResourceSetupAspectJ.java)

2. Advice中参数传递

某些情况下，我们可能需要在Advice定义中访问Joinpoint处的方法参数，在1.x的Spring AOP中，我们可以通过MethodBeforeAdvice方法传入的Object数组，访问相应的方法参数。现在有两种方法可以达到相同的目的。

* 通过org.aspectj.lang.JoinPoint。在@AspectJ形式的Aspect中，定义Before Advice的方法可以将第一个参数声明为org.aspectj.lang.JoinPoint类型，通过Joinpoint我们可以借助它的getArgs()方法，访问相应的Joinpoint方法的参数值，另外我们可以使用getThis()获取当前代理对象，getTarget()取得目标对象。

* 通过args标志符绑定。前面已经介绍过了args标志符，我们可以通过为其制定相应的对象类型，来进一步限定Pointcut定义。当args标识符接受的不是具体的对象类型，而是某个参数名称的时候它会将这个参数名称对应的参数值绑定到对Advice方法的调用。

注意args指定的参数名称必须与Advice定义所在方法的参数名称相同。在这里args指定的值和setupResourceBefore方法的参数名都是taskName。如果Advice引用的是独立的Pointcut定义，使用args绑定的形式也是大同小异的。

```java
@Pointcut("execution(boolean *.execute(String,..)) && args(taskName)")
private void resourceSetupJoinpoints(string taskName) {}

@Before(value="resourceSetupJoinpoints(taskName)")
public void setupResourcesBefore(String taskName) throws Throwable{}
```

同时使用JoinPoint以及使用args参数名称绑定功能。

```java
@Before(value="execution(boolean *.execute(String,..)) && args(taskName)")
public void setupResourcesBefore1(JoinPoint joinpoint,String taskName) throws Throwable {
    // ...
}
```

**针对Before Advice访问方法参数的两种方式**

**在AspectJ形式的Advice声明方式中，不只Before Advice方法第一个参数可以声明为org.aspectj.lang.JoinPoint类型，实际上，除了Around Advice和Introduction不可以用之外，剩余的Advice类型的方法声明都遵循这个规则**

**不只可以使用args标识符来绑定参数声明到方法，实际上Pointcut标识符中，除了execution标识符不会直接指定对象类型之外，其他像this、target、@within、@target、@annotation、@args等原本都是指定对象类型的。他们与args一样，在这样的场合下，如果它们的指定的是参数名称**

3. Spring 2.0 基于XSD各种Advice的配声明方式

[AspectAdvice.java](https://github.com/whalefall541/spring-demysify/blob/master/src/main/java/org/springframework/mylearntest/aop2/schemaapsect/AspectAdvice.java)

* Introduction 

在Spring中，Introduction的实现是通过将需要添加的新的行为逻辑，以新的接口定义的增加到目标对象上。要以@AspectJ形式声明Introduction，我们需要在Aspect中声明一个示例变量，它的类型对应的就是新增加的接口类型，然后使用org.aspectj.lang.annotatioin.DeclareParents对其进行标注。通过@DeclareParents指定新接口定义的实现类以及将要加诸其上的目标对象。

```java
package org.springframework.mylearntest.aop2.introduction;

import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.DeclareParents;
import org.springframework.mylearntest.aop1.weaver.proxyfactorybean.CounterImpl;
import org.springframework.mylearntest.aop1.weaver.proxyfactorybean.ICounter;

/**
 * @Author: WhaleFall541
 * @Date: 2020/8/9 16:50
 * 将ICounter行为introduce附加到ITask之上
 */
@Aspect
public class IntroductionAspect {
	// value属性指定将要应用到的一个对象，也可以某个包下所有类value="cn.spring21.unveilspring.service.*"
	// 通过defaultImpl指定新增加的接口定义的实现类，在这里ICounter的实现类为org.springframework.mylearntest.aop1.weaver.proxyfactorybean.CounterImpl
	@DeclareParents(value = "org.springframework.mylearntest.aop1.weaver.baseoninterface.MockTask", defaultImpl =
			CounterImpl.class)
	public ICounter counter;// ICounter即为将要为目标对象鞥家的对象类型
}
```

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
	   xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	   xmlns:context="http://www.springframework.org/schema/context"
	   xsi:schemaLocation=
			   "http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans-2.0.xsd
				http://www.springframework.org/schema/context http://www.springframework.org/schema/context/spring-context-3.2.xsd
              	  http://www.springframework.org/schema/aop https://www.springframework.org/schema/aop/spring-aop.xsd"
	   xmlns:aop="http://www.springframework.org/schema/aop">

	<aop:aspectj-autoproxy proxy-target-class="true"/>

	<bean id="task" class="org.springframework.mylearntest.aop1.weaver.baseoninterface.MockTask" scope="prototype"/>

	<bean id="counterIntroduction" class="org.springframework.mylearntest.aop2.introduction.IntroductionAspect"/>
</beans>
```

```java
package org.springframework.mylearntest.aop2.introduction;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.mylearntest.aop1.weaver.proxyfactorybean.ICounter;

/**
 * @Author: WhaleFall541
 * @Date: 2020/8/9 17:10
 */
public class Test4IntroductionAspect {
	public static void main(String[] args) {
		ApplicationContext context = new ClassPathXmlApplicationContext("introductionaspect/introductionaspect.xml");
		Object task1 = context.getBean("task");
		Object task2 = context.getBean("task");

		System.out.println(((ICounter)task1).getCounter()); // 1
		System.out.println(((ICounter)task1).getCounter()); // 2
		System.out.println(((ICounter)task2).getCounter()); // 1
	}
}
```

***注意 Introduction属于per-instance类型的Advice，所以不要忘记目标对象的scope通常情况下应该设置为prototype***

#### Advice的执行顺序

如果匹配同一个Joinpoint的多个Advice都声明在同一个Aspect定义中，那么这些Advice执行顺序，由他们在Aspect中的声明顺序决定。最先声明的Advice拥有最高的优先级。对于Before Advice来说，拥有最高优先级的最先运行，而对于AfterReturningAdvice，拥有最高优先级的则是最后运行。

[MultiAdviceAspect.java](https://github.com/whalefall541/spring-demysify/blob/master/src/main/java/org/springframework/mylearntest/aop2/priorityofadvice/MultiAdviceAspect.java)

当这些Advice声明在不同的Aspect内的时候。如果多个Advice声明所对应的Pointcut定义匹配同一个Joinpoint，但它们又不是声明在同一个Aspect内的话。我们需要用到Spring的org.springframework.core.Ordered 接口，只需要让相应的Aspect定义实现Ordered接口即可，否则Advice执行顺序是不确定的。

![](https://s2.loli.net/2023/07/15/NoimsEaDcIgdwMp.png)

**Note: 如果通过编程方式来使用这些Aspect，Aspect内的Advice执行顺序完全由添加到AspectJProxyFactory的顺序决定，而不是Ordered接口所规定的顺序。，如果采用了如下代码的顺序的话，那么AnotherAspect内的Advice要比MultiAdviceAspect内的Advice优先执行。**

![](https://s2.loli.net/2023/07/15/aXrGAu1x6KwJgBj.png)

### Aspect的实例化模式

对于注册到容器的各个Aspect，它默认的实例化模式采用的是singleton，在容器中会实例化并持有每个Aspect定义的单一实例(行为上恰好与容器singleton型scope的行为相吻合)

除了实例化模式，AspectJ还支持perthis、pertarget、percflow、percflowbelow以及perwithin等实例化模式，不过Spring2.0之后AOP只支持默认的singleton、perthis和pertarget三种实例化模式。

要想指定相应的Aspect的实例化模式，可以通过@Aspect指定perthis或者pertarget语句。如果想让MultiAdviceAspect的实例化模式从默认的singleton变成perthis。可以如下指定

```java
@Aspect("perthis(execution(boolean *.execute(String, ..)))")
public class MultiAdviceAspect {

    @Pointcut("execution(boolean *.execute(String, ..))")
    public void taskExecution(){}
    
    // ..

}
```

在perthis指定的Pointcut定义匹配之后，会为相应的代理对象实例化各自的Aspect实例。对于pertarget来说，则是为了匹配的单独目标对象实例化相应的Aspect。不过，使用了perthis或者pertarget指定了Aspect实例化模式之后，将这些Aspect注册到容器时，不能为其bean定义指定singleton的scope，否则会出现异常。

## 基于Schema的AOP配置

基于Schema的AOP是Spring2.0发布之后新增加的一种AOP使用方式。可以从如下两个角度来看待基于Schema的AOP。

* 配置方式的改变 ： Spring框架从1.x版本升级到2.x版本之后，提倡容器配置方式从基于DTD的xml转向了基于Schema的xml，进一步提高了配置方式的灵活性和可扩展型。同时，新的Schema的配置方式为Spring的AOP功能专门提供了独有的命名空间。原来1.x中基于DTD的AOP配置方式，可以稍微转换一下配置方式就移植到基于Schema的AOP，所以从这一点来说，基于Schema的AOP只是配置方式的改变。

* @AspectJ形式AOP的折中： 要使用@AspectJ形式的AOP，必须要求使用Java 5或者更高版本的JDK或者JRE，因为注解是Java 5发布之后才引入的特性。如果我们不得不使用Java 5之前的版本，而又想使用基于POJO的Aspect声明方式，我们可以使用基于Schema的Spring AOP。使用基于Schema的AOP，我们依然可以使用POJO声明Aspect以及相关的Advice。不过不需要注解标记了，直接通过Schema的配置文件进行配置就可以，@AspectJ形式的Pointcut表达式也全都可以配置到基于Schema的配置文件中。

### 基于Schema的AOP配置概览

新的基于Schema的AOP配置方式，针对Pointcut、Advisor以及Aspect等概念提供了独立的配置元素，所有这些配置元素都包含在统一的配置元素中，即`<aop:config/>`它只有一个属性，proxy-target-class，对应ProxyConfig中的proxyTargetClass属性，通过该属性，我们可以控制是使用基于接口的代理还是基于类的代理。它内部可以有三个子元素，分别是`<aop:pointcut>、<aop:advisor>、<aop:aspect>`，必须按顺序进行配置。

![](https://s2.loli.net/2023/07/15/eRbMPO3Cwx1XEyL.png)

对于`<aop:config>`来说，底层基本上是使用1.x中的自动代理机制实现的。相应的自动代理实现类，会根据元素内部对应的Pointcut、Advisor以及Aspect的子元素取得必要的织入信息，然后为容器内注册的bean进行自动代理。所以，如果愿意不用`<aop:config>`，而依然使用AutoProxyCreator实现类的方式也是可以的。

### 向基于Schema的AOP迁移

1. 单纯的迁移

1.x版本的Spring AOP通Advisor的概念对横切关注点进行封装当把相应的Pointcut定义和Advice定义注册到容器之后(通常是在基于DTD的XML配置文件中)，通过声明相应的Advisor实现，将这些Pointcut
以及Advisor定义装配到一起，最后通过某个AutoProxyCreator进行最后的织入。

在转向2.x版本基于Schema的配置方式之后，这些概念实际上是相同的，唯一需要改变的是具体配置方式的改变。现在使用`<aop:advisor>`替代各种具体的Advisor实现类的bean定义声明，
使用`<aop:config>`取代各种AutoProxyCreator。

![](https://s2.loli.net/2023/07/15/HgJbXV8t4Ple9qZ.png)

在`<aop:config>`中使用`<aop:advisor>`配置相应的Advisor，也就是特定于Spring AOP的Aspect。

* id：指定当前Advisor定义的标志id
* advice-ref：通过这个属性指定当前Advisor所对应的Pointcut定义是什么，需要指定容器中注册的具体的Pointcut对象引用
* advice-ref：指定当前Advisor对应的Advice对象引用
* order：指定当前Advisor的顺序号，因为基本上所有的Advisor实现都实现了Ordered接口

2. 深入挖掘`<aop:advisor>`

![](https://s2.loli.net/2023/07/15/ICXHBAMW3c7z61Y.png)

### @AspectJ到“基于Schema的AOP迁移”

除Introduction之外基于Schema的Advice声明以及Pointcut声明

[***java类***](https://github.com/whalefall541/spring-demysify/blob/master/src/main/java/org/springframework/mylearntest/aop2/schemaapsect/SchemaBasedAspect.java)

[***xml配置文件***](https://github.com/whalefall541/spring-demysify/blob/master/src/main/resources/schemaaspect/schemaaspect.xml)

## AOP使用场景

1. 异常处理

* unchecked exception: java.lang.Error、java.lang.RuntimeException以及其子类。编译器不会在编译期对这些类型进行检查。
* checked exception: java.lang.Exception及其子类，但是除去RuntimeException分支。必须对这些异常处理，并且编译器会在编译期对这些异常类型进行检查

![](https://s2.loli.net/2023/07/15/bXHyAk8ZaFerdfB.png)

当系统中多个地方都可能抛出unchecked exception的时候，我们可以在调用的最顶层，分别添加异常处理逻辑对其进行处理(记录日志，通知相应人员)。我们可以实现一个对应Fault处理的Aspect，让其对系统中所有可能的Fault情况进行统一的处理。这个专职的Aspect，我们称之为Fault Barrier。

2. 安全检查

Acegi 框架最初独立于Spring开发，现在已经并入Spring Portfolio，更名为Spring Security。

3. 缓存

为了避免需要添加的缓存实现逻辑影响业务逻辑的实现，我们可以让缓存的实现独立于业务对象的实现之外，将系统中的缓存需求通过AOP的Aspect进行封装，只在系统中某个点确切需要缓存支持的情况下，才为其织入。

![](https://s2.loli.net/2023/07/15/dVmx8W5NDYSGL4g.png)

现成的Caching产品实现有EhCache、JBossCache等；Spring Modules项目提供了对现有Caching产品的集成，这样就可以通过外部声明的方式为系统中的Joinpoint添加Caching支持。

[相关案例](https://www.infoworld.com/article/2072722/extending-declarative-caching-services-for-spring.html)

## Spring AOP 扩展

1. 问题的现象

存在一个自身嵌套方法调用的类

```java
public class NestableInvocationBO {
    public void method1() {
        method2();
        System.out.println("method1 executed");
    }

    public void method2() {
        System.out.println("method2 executed");
    }
}
```

定义一个用于性能检查的AspectJ

```java
@Aspect
public class PerformanceTraceAspect1 {
    private final Log logger = LogFactory.getLog(PerformanceTraceAspect1.class);

    @Pointcut("execution(public void *.method1())")
    public void method1() {}

    @Pointcut("execution(public void *.method2())")
    public void method2() {}

    @Pointcut("method1() || method2()")
    public void compositePointcut() {}

    @Around("compositePointcut()")
    public Object performanceTrace(ProceedingJoinPoint pjp) throws Throwable {
        StopWatch watch = new StopWatch();
        try {
            watch.start();
            return pjp.proceed();
        } finally {
            watch.stop();
            System.out.println("PT in method" + pjp.getSignature().getName() + "]>>>>>" + watch.toString());
            if (logger.isInfoEnabled()) {
                logger.info("PT in method" + pjp.getSignature().getName() + "]>>>>>" + watch.toString());
            }
        }
    }
}
```

我们的Around Advice定义会拦截compositePointcut()所指定的Joinpoint，即匹配method1或者method2的执行。

```java
public class Test4NestableInvocationBO {
    public static void main(String[] args) {
        AspectJProxyFactory weaver = new AspectJProxyFactory(new NestableInvocationBO());
        weaver.setProxyTargetClass(true);
        weaver.addAspect(PerformanceTraceAspect1.class);
        Object proxy = weaver.getProxy();
        ((NestableInvocationBO)proxy).method2();
        ((NestableInvocationBO)proxy).method1();
    }
}
```

2. 原因分析

* method2 executed
* PT in methodmethod2]>>>>>StopWatch '': running time = 9203600 ns; [] took 9203600 ns = 100%
* method2 executed
* method1 executed
* PT in methodmethod1]>>>>>StopWatch '': running time = 65800 ns; [] took 65800 ns = 100%

输出结果表明：

* 第一次调用method2，被拦截后执行成功
* 第二次调用method1，却只有method1方法的执行拦截成功，而method1方法内部的method2方法却没有被拦截

方法调用时序图
![](https://s2.loli.net/2023/07/15/pqer2USxgj7CTnL.png)

同一对象内部方法嵌套调用示意图
![](https://s2.loli.net/2023/07/15/dXsEeAV9ofqGQH8.png)
当method1调用method2时，它调用的是TargetObject上的method2，而不是ProxyObject上的method2。要针对met活动的横切逻辑，只织入到了ProxyObject上的method2方法中，所以在method1所调用的method2没有能够被成功拦截。

3. 解决方案

当目标对象依赖于自身时，我们也可以尝试将目标对象的代理对象公开给它，只要让目标对象调用自身代理对象上的相应方法，就可以解决内部调用的方法没有被拦截的问题。

Spring AOP 提供了AopContext来公开当前目标对象的代理对象，我们只要在目标对象[NestableInvocationBO.java](https://github.com/whalefall541/spring-demysify/blob/master/src/main/java/org/springframework/mylearntest/aop2/aopextends/NestableInvocationBO.java)中使用`AopContext.currentProxy()`就可以获取当前目标对象所对应的代理对象。并在测试类中[Test4NestableInvocationBO](https://github.com/whalefall541/spring-demysify/blob/master/src/main/java/org/springframework/mylearntest/aop2/aopextends/Test4NestableInvocationBO.java)设置`weaver.setExposeProxy(true);`即可。

* method2 executed
* PT in methodmethod2]>>>>>StopWatch '': running time = 9457200 ns; [] took 9457200 ns = 100%
* method2 executed
* PT in methodmethod2]>>>>>StopWatch '': running time = 19500 ns; [] took 19500 ns = 100%
* method1 executed
* PT in methodmethod1]>>>>>StopWatch '': running time = 121900 ns; [] took 121900 ns = 100%

> 参考资料：
>
> 1. 书籍 王福强-Spring揭秘
> 2. [https://github.com/spring-projects/spring-framework.git](https://github.com/spring-projects/spring-framework.git)



> <font color="red" >转载请注明 [原文地址](https://www.cnblogs.com/whalefall541/p/13499921.html)</font>