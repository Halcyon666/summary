
本文相关代码(来自[官方源码](https://github.com/spring-projects/spring-framework.git "官方源码")spring-test模块)请参见[spring-demysify](https://github.com/whalefall541/spring-demysify) org.springframework.mylearntest包下。

## IoC三种注入方式

### 构造方法注入

```
public FXNewsProvider(IFXNewsListener newsListner,IFXNewsPersister newsPersister) {
    this.newsListener = newsListner;
    this.newPersistener = newsPersister;
}
```

* 优点：对象在构造完成之后，即已进入就绪状态，可以马上使用。
* 缺点: 当依赖对象比较多的时候，构造方法的参数列表会比较长。而通过反射构造对象的时候，对相同类型的参数的处理会比较困难，维护和使用上也比较麻烦。而且在Java中，构造方法无法被继承，无法设置默认值。对于非必须的依赖处理，可能需要引入多个构造方法，而参数数量的变动可能造成维护上的不便。

### setter 方法注入

```java
public class FXNewsProvider {
    private IFXNewsListener newsListener;
    private IFXNewsPersister newPersistener;

    public IFXNewsListener getNewsListener() {
    return newsListener;
    }
    public void setNewsListener(IFXNewsListener newsListener) {
    this.newsListener = newsListener;
    }

    public IFXNewsPersister getNewPersistener() {
    return newPersistener;
    }
    public void setNewPersistener(IFXNewsPersister newPersistener) {
    this.newPersistener = newPersistener;
    }
}
```

* 优点：因为方法可以命名， 所以setter方法注入在描述性上要比构造方法注入好一些。 另外， setter方法可以被继承，允许设置默认值，而且有良好的IDE支持。
* 缺点：当然就是对象无法在构造完成后马上进入就绪状态。

### 接口注入

FXNewsProvider为了让IoC Service Provider为其注入所依赖的IFXNewsListener，首先需要实现IFXNewsListenerCallable接口，这个接口会声明一个injectNewsListner方法（方法名随意），该方法的参数，就是所依赖对象的类型。这样， InjectionServiceContainer对象，即对应的IoCService Provider就可以通过这个接口方法将依赖对象注入到被注入对象FXNewsProvider当中。
![](https://s2.loli.net/2023/07/15/SNQgVDHi5ruUso3.png)

* 缺点接口注入是现在不甚提倡的一种方式，基本处于“退役状态”。因为它强制被注入对象实现不必要的接口，带有侵入性。而构造方法注入和setter方法注入则不需要如此。

## IoC Service Provider

IoC Service Provider的职责是什么？

* 业务对象的构建管理：在IoC场景中，业务对象无需关心所依赖对象如何构建如何获得，但这部分工作始终需要有人来做。所以，IoC Service Provider需要将对象的构建逻辑从客户端那里剥离出来，以免这部分逻辑污染业务对象的实现。
  业务对象间的依赖绑定：
* 业务对象的依赖管理：IoC Service Provider 通过结合之前构建和管理的所有业务对象，以及各个业务对象间可以识别依赖关系，将这些对象所依赖的对象注绑定，从而保证每个业务对象在使用的时候，可以处于就绪状态。

如何记录对象之间的依赖关系？

* 它可以通过最基本的文本文件来记录被注入对象和其依赖对象之间的对应关系；
* 它也可以通过描述性较强的XML文件格式来记录对应信息；
* 它还可以通过编写代码的方式来注册这些对应信息；

### 管理依赖的三种方式

1. 直接编码式
* 当前大部分的IoC容器都应该支持直接编码方式，比如PicoContainer、 Spring、 Avalon等。
  
  ```
  IoContainer container = ...;
  container.register(FXNewsProvider.class,new FXNewsProvider());
  container.register(IFXNewsListener.class,new DowJonesNewsListener());
  ...
  container.bind(IFXNewsListenerCallable.class, container.get(IFXNewsListener.class));
  ...
  FXNewsProvider newsProvider = (FXNewsProvider)container.get(FXNewsProvider.class);
  newProvider.getAndPersistNews();
  ```

通过bind方法将“被注入对象”（由IFXNewsListenerCallable接口添加标志）所依赖的对象，绑定为容器中注册过的IFXNewsListener类型的对象实例。容器在返回FXNewsProvider
对象实例之前，会根据这个绑定信息，将IFXNewsListener注册到容器中的对象实例注入到“被注入对象”——FXNewsProvider中，并最终返回已经组装完毕的FXNewsProvider对象。

2. 配置文件方式

```xml
<beans>
    <bean id="newsProvider" class="..FXNewsProvider">
    <property name="newsListener">
    <ref bean="djNewsListener"/>
    </property>
    <property name="newPersistener">
    <ref bean="djNewsPersister"/>
    </property>
    </bean>

    <bean id="djNewsListener"
    class="..impl.DowJonesNewsListener">
    </bean>

    <bean id="djNewsPersister"
    class="..impl.DowJonesNewsPersister">
    </bean>
</beans>
```

3. 元数据方式(使用Guice)

```java
public class FXNewsProvider { 
    private IFXNewsListener newsListener;
    private IFXNewsPersister newPersistener;

    @Inject
    public FXNewsProvider(IFXNewsListener listener,IFXNewsPersister persister) {
    this.newsListener = listener;
    this.newPersistener = persister;
    } 
    //...
}
```

通过@Inject，我们指明需要IoC Service Provider通过构造方法注入方式，为FXNewsProvider注入其所依赖的对象。至于余下的依赖相关信息，在Guice中是由相应的Module来提供的，代码清单3-7给出了FXNewsProvider所使用的Module实现。

```java
public class NewsBindingModule extends AbstractModule {
    @Override
    protected void configure() {
    bind(IFXNewsListener.class).to(DowJonesNewsListener.class).in(Scopes.SINGLETON);
    bind(IFXNewsPersister.class).to(DowJonesNewsPersister.class).in(Scopes.SINGLETON);
    } 
}
```

通过Module指定进一步的依赖注入相关信息之后，我们就可以直接从Guice那里取得最终已经注入完毕，并直接可用的对象了。

```
Injector injector = Guice.createInjector(new NewsBindingModule());
FXNewsProvider newsProvider = injector.getInstance(FXNewsProvider.class);
newsProvider.getAndPersistNews();
```

### Spring IoC容器 和 IoC Service Provider之间的关系

Spring的IoC容器是一个IoC Service Provider，但是，这只是它被冠以IoC之名的部分原因，我们不能忽略的是“容器”。 Spring的IoC容器是一个提供IoC支持的轻量级容器，除了基本的IoC支持，它作为轻量级容器还提供了IoC之外的支持。如在Spring的IoC容器之上， Spring还提供了相应的AOP框架支持、企业级服务集成等服务。

![IoC容器和Provider的 关系](https://s2.loli.net/2023/07/15/WX5mDwzVoFylCJZ.png "IoC容器和Provider的 关系")

### Spring提供了BeanFactory 和 ApplicationContext

* BeanFactory: 基础类型IoC容器，提供完整的IoC服务支持。如果没有特殊指定，默认采用延迟初始化策略（ lazy-load
    ）。只有当客户端对象需要访问容器中的某个受管对象的时候，才对该受管对象进行初始化以及依赖注入操作。所以，相对来说，容器启动初期速度较快，所需要的资源有限。对于资源有限，并且功能要求不是很严格的场景， BeanFactory是比较合适的IoC容器选择。

* ApplicationContext: ApplicationContext在BeanFactory的基础上构建，是相对比较高级的容器实现，除了拥有BeanFactory的所有支持， ApplicationContext
  还提供了其他高级特性，比如事件发布、国际化信息支持等，这些会在后面详述。 ApplicationContext所管理的对象，在该类型容器启动之后，默认全部初始化并绑定完成。所以，相对于BeanFactory来说， ApplicationContext要求更多的系统资源，同时，因为在启动时就完成所有初始化，容器启动时间较之BeanFactory也会长一些。在那些系统资源充足，并且要求更多功能的场景中，ApplicationContext类型的容器是比较合适的选择。

* 作为Spring提供的基本的IoC容器，BeanFactory可以完成作为IoC Service Provider的所有职责，包括业务对象的注册和对象间依赖关系的绑定。*

```java
public interface BeanFactory {

    String FACTORY_BEAN_PREFIX = "&";

    Object getBean(String name) throws BeansException;

    <T> T getBean(String name, Class<T> requiredType) throws BeansException;

    Object getBean(String name, Object... args) throws BeansException;

    <T> T getBean(Class<T> requiredType) throws BeansException;

    <T> T getBean(Class<T> requiredType, Object... args) throws BeansException;

    <T> ObjectProvider<T> getBeanProvider(Class<T> requiredType);

    <T> ObjectProvider<T> getBeanProvider(ResolvableType requiredType);

    boolean containsBean(String name);

    boolean isSingleton(String name) throws NoSuchBeanDefinitionException;

    boolean isPrototype(String name) throws NoSuchBeanDefinitionException;

    boolean isTypeMatch(String name, ResolvableType typeToMatch) throws NoSuchBeanDefinitionException;

    boolean isTypeMatch(String name, Class<?> typeToMatch) throws NoSuchBeanDefinitionException;

    @Nullable
    Class<?> getType(String name) throws NoSuchBeanDefinitionException;

    @Nullable
    Class<?> getType(String name, boolean allowFactoryBeanInit) throws NoSuchBeanDefinitionException;

    String[] getAliases(String name);

}
```

## BeanFactory的对象注册与依赖绑定方式

```java
// 1-设计FXNewsProvider类用于普遍的新闻处理
public class FXNewsProvider{
//...
}
// 2-设计IFXNewsListener接口抽象各个新闻社不同的新闻获取方式，并给出相应实现类
public interface IFXNewsListener{
//...
}
// 以及
public class DowJonesNewsListener implements IFXNewsListener {
//...
}
// 3-设计IFXNewsPersister接口抽象不同数据访问方式，并实现相应的实现类
public interface IFXNewsPersister {
//...
} 
// 以及
public class DowJonesNewsPersister implements IFXNewsPersister { 
//...
}
```

### 直接编码方式

1. 通过编码方式使用BeanFactory实现FX新闻相关类的注册及绑定

```java
package org.springframework.mylearntest.beanf;

import org.springframework.beans.MutablePropertyValues;
import org.springframework.beans.PropertyValue;
import org.springframework.beans.factory.BeanFactory;
import org.springframework.beans.factory.support.AbstractBeanDefinition;
import org.springframework.beans.factory.support.BeanDefinitionRegistry;
import org.springframework.beans.factory.support.DefaultListableBeanFactory;
import org.springframework.beans.factory.support.RootBeanDefinition;
import org.springframework.mylearntest.before.FXNewsProvider;

public class BeanFactoryFX {
    public static void main(String[] args) {
        DefaultListableBeanFactory beanRegistry = new DefaultListableBeanFactory();
        BeanFactory container = bindViaCode(beanRegistry);
        FXNewsProvider newsProvider = (FXNewsProvider)container.getBean("djNewsProvider");
        newsProvider.getAndPersistNews();
    }

    // 因为传入的DefaultListableBeanFactory同
    // 时实现了BeanFactory和BeanDefinitionRegistry接口，所以，这样做强制类型转换不会出
    // 现问题。但需要注意的是，单纯的BeanDefinitionRegistry是无法强制转换到BeanFactory
    // 类型的！
    public static BeanFactory bindViaCode(BeanDefinitionRegistry registry) {
        AbstractBeanDefinition newsProvider = new RootBeanDefinition(FXNewsProvider.class, 0, true);
        AbstractBeanDefinition newsListener = new RootBeanDefinition(DowJonesNewsListener.class,0, true);
        AbstractBeanDefinition newsPersister = new RootBeanDefinition(DowJonesNewsPersister.class, 0,true);
        // 1.将bean定义注册到容器中
        registry.registerBeanDefinition("djNewsProvider", newsProvider);
        registry.registerBeanDefinition("djListener", newsListener);
        registry.registerBeanDefinition("djPersister", newsPersister);
        // 2.0 指定依赖关系
        // 2.1 可以通过构造方法注入方式
        /*ConstructorArgumentValues argValues = new ConstructorArgumentValues();
        argValues.addIndexedArgumentValue(0, newsListener);
        argValues.addIndexedArgumentValue(1, newsPersister);
        newsProvider.setConstructorArgumentValues(argValues);*/
        // 2.2 或者通过setter方法注入方式
        // 使newsListener newPersistener绑定到newsProvider上
        MutablePropertyValues propertyValues = new MutablePropertyValues();
        propertyValues.addPropertyValue(new PropertyValue("newsListener",newsListener));
        propertyValues.addPropertyValue(new PropertyValue("newPersistener",newsPersister));
        newsProvider.setPropertyValues(propertyValues);
        // 3.0 绑定完成 
        return (BeanFactory)registry;
    }
}
```

2. 设计IFXNewsListener接口抽象各个新闻社不同的新闻获取方式，并给出相应实现类

```java
package org.springframework.mylearntest.before;

public interface IFXNewsListener {
    String[] getAvailableNewsIds();

    FXNewsBean getNewsByPK(String newsId);

    void postProcessIfNecessary(String newsId);
}
```

```java
package org.springframework.mylearntest.beanf;

import org.springframework.mylearntest.before.FXNewsBean;
import org.springframework.mylearntest.before.IFXNewsListener;

public class DowJonesNewsListener implements IFXNewsListener {
    @Override
    public String[] getAvailableNewsIds() {
        return new String[0];
    }

    @Override
    public FXNewsBean getNewsByPK(String newsId) {
        return null;
    }

    @Override
    public void postProcessIfNecessary(String newsId) {

    }
}
```

3. 设计IFXNewsPersister接口抽象不同数据访问方式，并实现相应的实现类

```java
package org.springframework.mylearntest.before;

public interface IFXNewsPersister {
    void persistNews(FXNewsBean newsBean);
}
```

```java
package org.springframework.mylearntest.beanf;

import org.springframework.mylearntest.before.FXNewsBean;
import org.springframework.mylearntest.before.IFXNewsPersister;

public class DowJonesNewsPersister implements IFXNewsPersister {
    @Override
    public void persistNews(FXNewsBean newsBean) {

    }
}
```

4. 设计新闻提供类依赖于新闻监听和持久化类

```java
package org.springframework.mylearntest.before;

import org.apache.commons.lang3.ArrayUtils;


public class FXNewsProvider {
    private IFXNewsListener newsListener;
    private IFXNewsPersister newPersistener;
    public FXNewsProvider(IFXNewsListener newsListner,IFXNewsPersister newsPersister) {
        this.newsListener = newsListner;
        this.newPersistener = newsPersister;
    }

    public IFXNewsListener getNewsListener() {
        return newsListener;
    }

    public void setNewsListener(IFXNewsListener newsListener) {
        this.newsListener = newsListener;
    }

    public IFXNewsPersister getNewPersistener() {
        return newPersistener;
    }

    public void setNewPersistener(IFXNewsPersister newPersistener) {
        this.newPersistener = newPersistener;
    }

    public FXNewsProvider() {
    }

    public void getAndPersistNews() {
        String[] newsIds = newsListener.getAvailableNewsIds();
        if (ArrayUtils.isEmpty(newsIds)) {
            return;
        }
        for (String newsId : newsIds) {
            FXNewsBean newsBean = newsListener.getNewsByPK(newsId);
            newPersistener.persistNews(newsBean);
            newsListener.postProcessIfNecessary(newsId);
        }
    }
}
```

5. 设置新闻类

```java
package org.springframework.mylearntest.before;

public class FXNewsBean {
}
```

![](https://s2.loli.net/2023/07/15/KenXQ6NIYd45irD.png)

### 外部配置文件方式

通常情况下，需要根据不同的外部配置文件格式，给出相应的BeanDefinitionReader实现类，由BeanDefinitionReader的相应实现类负责将相应的配置文件内容读取并映射到BeanDefinition，然后将映射后的BeanDefinition注册到一个BeanDefinitionRegistry，之后， BeanDefinitionRegistry即完成Bean的注册和加载。
大部分工作，包括解析文件格式、装配BeanDefinition之类的工作，都是由BeanDefinitionReader的相应实现类来做的， BeanDefinitionRegistry只不过负责保管而已。

#### properties配置文件方式

```properties
djNewsProvider.(class)=org.springframework.mylearntest.ioc.directcode.FXNewsProvider
djNewsProvider.$0(ref)=djListener
djNewsProvider.$1(ref)=djPersister
# djNewsProvider.newsListener(ref)=djListener
# djNewsProvider.newPersistener(ref)=djPersister
djListener.(class)=org.springframework.mylearntest.ioc.propconfig.DjNewsListener
djPersister.(class)=org.springframework.mylearntest.ioc.propconfig.DjNewsPersister
```

```java
package org.springframework.mylearntest.directcode;

import org.springframework.beans.factory.BeanFactory;
import org.springframework.beans.factory.support.BeanDefinitionRegistry;
import org.springframework.beans.factory.support.DefaultListableBeanFactory;
import org.springframework.beans.factory.support.PropertiesBeanDefinitionReader;

public class PropConfigTest {
    public static void main(String[] args) {
        // todo Caused by: java.lang.IllegalStateException: No bean class specified on bean definition
        DefaultListableBeanFactory beanRegistry = new DefaultListableBeanFactory();
        BeanFactory container = bindViaPropertiesFile(beanRegistry);
        FXNewsProvider newsProvider =
                (FXNewsProvider)container.getBean("djNewsProvider");
        newsProvider.getAndPersistNews();
    }

    public static BeanFactory bindViaPropertiesFile(BeanDefinitionRegistry registry) {
        PropertiesBeanDefinitionReader reader =
                new PropertiesBeanDefinitionReader(registry);
        reader.loadBeanDefinitions("classpath:binding-config.properties");
        return (BeanFactory)registry;
    }
}
```

#### xml

省略

### local parent 和 bean的区别

local、 parent和bean的区别在于：

* local只能指定与当前配置的对象在同一个配置文件的对象定义的名称（可以获得XML解析器的id约束验证支持）；

* parent则只能指定位于当前容器的父容器中定义的对象引用；

* bean则基本上通吃，所以，通常情况下，直接使用bean来指定对象引用就可以了

* 使用idref，容器在解析配置的时候就可以帮你检查这个beanName到底是否存在，而不用等到运行时才发现这个beanName
  对应的对象实例不存在。

```xml
<property name="newsListenerBeanName">
<idref bean="djNewsListener"/>
</property>
```

### byType byName No Autodetect

* no: 容器默认的自动绑定模式，也就是不采用任何形式的自动绑定，完全依赖手工明确配置各个bean之间的依赖关系，以下代码演示的两种配置是等效的：
  
  ```xml
  <beans>
    <bean id="beanName" class="..."/>`
    <!--或者 -->
    <bean id="beanName" class="..." autowire="no"/>
  </beans>
  ```

* byName: 按照类中声明的实例变量的名称，与XML配置文件中声明的bean定义的beanName的值进行匹配，相匹配的bean定义将被自动绑定到当前实例变量上。这种方式对类定义和配置的bean定义有一定的限制。假设我们有如下所示的类定义：
  
  ```java
  public class Foo{
  private Bar emphasisAttribute;
  //...
  // 相应的setter方法定义
  }
  ```

```java
public class Bar{
  //...
}
```

那么应该使用如下代码所演示的自动绑定定义，才能达到预期的目的：

```xml
<beans>
    <bean id="fooBean" class="...Foo" autowire="byName">
    </bean>
    <bean id="emphasisAttribute" class="...Bar">
    </bean>
</beans>
```

* byType: 如果指定当前bean定义的autowire模式为byType，那么，容器会根据当前bean定义类型，分析其相应的依赖对象类型，然后到容器所管理的所有bean定义中寻找与依赖对象类型相同的bean定义，然后将找到的符合条件的bean自动绑定到当前bean定义。

* autodetect: 这种模式是byType和constructor模式的结合体，如果对象拥有默认无参数的构造方法，容器会优先考虑byType的自动绑定模式。否则，会使用constructor
  模式。当然，如果通过构造方法注入绑定后还有其他属性没有绑定，容器也会使用byType对剩余的对象属性进行自动绑定。

* autoWire: 先按类byType匹配bean，匹配不到则按byName匹配，也可以指定autoWire=‘byType'或者autoWire=‘byName'

### 自动绑定和手动绑定的区别

自动绑定和手动明确绑定各有利弊。自动绑定的优点有如下两点。

* 某种程度上可以有效减少手动敲入配置信息的工作量。
* 某些情况下，即使为当前对象增加了新的依赖关系，但只要容器中存在相应的依赖对象，就不需要更改任何配置信息。

自动绑定的缺点有如下几点。

* 自动绑定不如明确依赖关系一目了然。我们可以根据明确的依赖关系对整个系统有一个明确的认识，但使用自动绑定的话，就可能需要在类定义以及配置文件之间，甚至各个配置文件之间来回转换以取得相应的信息。
* 某些情况下，自动绑定无法满足系统需要，甚至导致系统行为异常或者不可预知。根据类型（ byType）匹配进行的自动绑定，如果系统中增加了另一个相同类型的bean定义，那么整个系统就会崩溃；根据名字（ byName
  ）匹配进行的自动绑定，如果把原来系统中相同名称的bean定义类型给换掉，就会造成问题，而这些可能都是在不经意间发生的。
* 使用自动绑定，我们可能无法获得某些工具的良好支持，比如Spring IDE。与BeanFactory不同， ApplicationContext在容器启动的时候，就会马上对所有的“ singleton的bean定义” 进行实例化操作

### 懒加载配置了是否一定会生效

仅指定lazy-init-bean的lazy-init为true，并不意味着容器就一定会延迟初始化该bean的实例。如果某个非延迟初始化的bean定义依赖于lazy-init-bean，那么毫无疑问，按照依赖决计的顺序，容器还是会首先实例化lazy-init-bean，然后再实例化后者，如下代码演示了这种相互牵连导致延迟初始化失败的情况：

```xml
<!--非懒加载bean依赖一个懒加载的bean 由于要初始化非懒加载的bean因此依赖的懒加载的bean必须实例化-->
<beans>
    <bean id="lazy-init-bean" class="..." lazy-init="true"/> 
    <bean id="not-lazy-init-bean" class="...">
    <property name="propName">
    <ref bean="lazy-init-bean"/> 
    </property>
    </bean>
</beans>
```

### 如何简化xml配置中property属性的编写

使用模板化配置形式配置FXNewsProvider和SpecificFXNewsProvider 

```xml
<beans>
    <bean id="newsProviderTemplate" abstract="true">
    <property name="newPersistener">
    <ref bean="djNewsPersister"/> 
    </property>
    </bean>
    <bean id="superNewsProvider" parent="newsProviderTemplate" 
    class="..FXNewsProvider">
    <property name="newsListener">
    </property> <ref bean="djNewsListener"/> 7
    </bean>
    <bean id="subNewsProvider" parent="newsProviderTemplate" 
    class="..SpecificFXNewsProvider">
    <property name="newsListener">
    <ref bean="specificNewsListener"/>
    </property> 
    </bean>
</beans>
```

### abstract属性的使用

如果你不想容器在初始化的时候实例化某些对象，那么可以将其abstract属性赋值true，以避免容器将其实例化。对于ApplicationContext容器尤其如此，因为默认情况下， ApplicationContext会在容器启动的时候就对其管理的所有bean进行实例化，只有标志为abstract的bean除外。

### scope

* scope用来声明容器中的对象所应该处的限定场景或者说该对象的存活时间，即容器在对象进入其相应的scope之前，生成并装配这些对象，在该对象不再处于这些scope的限定之后，容器通常会销毁这些对象。
* Spring容器最初提供了两种bean的scope类型： singleton和prototype，但发布2.0之后，又引入了另外三种scope类型，即request、 session和global session
  类型。不过这三种类型有所限制，只能在Web应用中使用。也就是说，只有在支持Web应用的ApplicationContext中使用这三个scope才是合理的。
* global session只有应用在基于portlet的Web应用程序中才有意义，它映射到portlet的global范围的 session。如果在普通的基于servlet的Web应用中使用了这个类scope
  ，容器会将其作为普通的session类型的scope对待。

### 偷梁换柱之术

#### 方法注入

Spring容器提出了一种叫做方法注入（ Method Injection）的方式，可以帮助我们解决上述问题。我们所要做的很简单，只要让getNewsBean方法声明符合规定的格式，并在配置文件中通知容器，当该方法被调用的时候，每次返回指定类型的对象实例即可。

* 配置文件
  
  ```xml
  <?xml version="1.0" encoding="UTF-8"?>
  <beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd">
    <bean id="newsBean" class="org.springframework.mylearntest.directcode.FXNewsBean" scope="prototype">
    </bean>
    <bean id="mockPersister" class="org.springframework.mylearntest.mthdinject.MockNewsPersister">
        <property name="newsBean">
            <ref bean="newsBean"/>
        </property>
    </bean>
  </beans>
  ```

* 新闻持久化类的定义
  
  ```java
    package org.springframework.mylearntest.mthdinject;
    
  
  import org.springframework.mylearntest.directcode.FXNewsBean;
  import org.springframework.mylearntest.directcode.IFXNewsPersister;
  
  public class MockNewsPersister implements IFXNewsPersister {
      private FXNewsBean newsBean;
      public void persistNews(FXNewsBean bean) {
          persistNews();
      }
      public void persistNews() {
          System.out.println("persist bean:"+getNewsBean());
      }
      public FXNewsBean getNewsBean() {
          return newsBean;
      }
  
      public void setNewsBean(FXNewsBean newsBean) {
          this.newsBean = newsBean;
      }
  
  }
  ```
  
  

```java

* 测试类(使用方法注入前)
```java
package org.springframework.mylearntest.mthdinject;


import org.springframework.beans.factory.BeanFactory;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Test4MockNewsPersister {
    public static void main(String[] args) {
        BeanFactory container = new ClassPathXmlApplicationContext("mthdinject.xml");
        MockNewsPersister persister = (MockNewsPersister)container.getBean("mockPersister");
        persister.persistNews();
        persister.persistNews();
        // persist bean:org.springframework.mylearntest.directcode.FXNewsBean@5be6e01c
        // persist bean:org.springframework.mylearntest.directcode.FXNewsBean@5be6e01c
    }
}
```

* 配置类(使用方法注入后)
  
  ```xml
  <beans>
    <bean id="newsBean" class="..domain.FXNewsBean" singleton="prototype">
    </bean>
    <bean id="mockPersister" class="..impl.MockNewsPersister">
    <!--通过<lookup-method>的name属性指定需要注入的方法名， bean属性指定需要注入的对象，
    当getNewsBean方法被调用的时候，容器可以每次返回一个新的FXNewsBean类型的实例。-->
    <lookup-method name="getNewsBean" bean="newsBean"/>
    </bean>
  </beans>
  ```

#### 通过实现BeanFactoryAware

只要在实现getNewsBean()方法的时候，能够保证每次调用BeanFactory的getBean("newsBean")，就同样可以每次都取得新的FXNewsBean对象实例。

```java
package org.springframework.mylearntest.beanfactorywareinject;

import org.springframework.beans.BeansException;
import org.springframework.beans.factory.BeanFactory;
import org.springframework.beans.factory.BeanFactoryAware;
import org.springframework.mylearntest.directcode.FXNewsBean;
import org.springframework.mylearntest.directcode.IFXNewsPersister;

public class MockNewsPersister1 implements IFXNewsPersister, BeanFactoryAware {
    private BeanFactory beanFactory;

    public void setBeanFactory(BeanFactory bf) throws BeansException {
        this.beanFactory = bf;
    }

    public void persistNews(FXNewsBean bean) {
        persistNews();
    }

    public void persistNews() {
        System.out.println("persist bean:" + getNewsBean());
    }

    public FXNewsBean getNewsBean() {
        return (FXNewsBean) beanFactory.getBean("newsBean");
    }
}
```

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd">

    <bean id="newsBean" class="org.springframework.mylearntest.directcode.FXNewsBean" scope="prototype">
    </bean>
    <bean id="mockPersister1" class="org.springframework.mylearntest.beanfactorywareinject.MockNewsPersister1">
    </bean>

</beans>
```

```java
package org.springframework.mylearntest.beanfactorywareinject;


import org.springframework.beans.factory.BeanFactory;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.mylearntest.mthdinject.MockNewsPersister;

public class Test4MockNewsPersister1 {
    public static void main(String[] args) {
        BeanFactory container = new ClassPathXmlApplicationContext("beanfactoryawareinject.xml");
        MockNewsPersister1 persister = (MockNewsPersister1)container.getBean("mockPersister1");
        persister.persistNews();
        persister.persistNews();
    }
}
```

#### 通过ObjectFactory

ObjectFactoryCreatingFactoryBean是 Spring 提供的一个FactoryBean实现，它返回一个ObjectFactory实例。ObjectFactoryCreatingFactoryBean返回的这个ObjectFactory实例可以为我们返回容器管理的相关对象。实际上，ObjectFactoryCreatingFactoryBean实现BeanFactoryAware接口，它返回ObjectFactory实例只是特定于与Spring容器进行交互的一个实现而已。使用它的好处就是，隔离了客户端对象对BeanFactory的直接引用。

```java
package org.springframework.mylearntest.objectfactoryinj;

import org.springframework.beans.factory.ObjectFactory;
import org.springframework.mylearntest.directcode.FXNewsBean;
import org.springframework.mylearntest.directcode.IFXNewsPersister;

@SuppressWarnings({"rawtypes" })
public class MockNewsPersister2 implements IFXNewsPersister {
    private ObjectFactory newsBeanFactory;
    public void persistNews(FXNewsBean bean) {
        persistNews();
    }
    public void persistNews() {
        System.out.println("persist bean:"+getNewsBean());
    }
    public FXNewsBean getNewsBean() {
        return (FXNewsBean) newsBeanFactory.getObject();
    }
    public void setNewsBeanFactory(ObjectFactory newsBeanFactory) {
        this.newsBeanFactory = newsBeanFactory;
    }
}
```

```XML
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd">

    <bean id="newsBean" class="org.springframework.mylearntest.directcode.FXNewsBean" scope="prototype">
    </bean>
    <bean id="newsBeanFactory" class="org.springframework.beans.factory.config.ObjectFactoryCreatingFactoryBean">
        <property name="targetBeanName">
            <idref bean="newsBean"/>
        </property>
    </bean>

    <bean id="mockPersister2" class="org.springframework.mylearntest.objectfactoryinj.MockNewsPersister2">
        <property name="newsBeanFactory">
            <ref bean="newsBeanFactory"/>
        </property>
    </bean>
</beans>
```

```java
package org.springframework.mylearntest.objectfactoryinj;


import org.springframework.beans.factory.BeanFactory;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Test4MockNewsPersister2 {
    public static void main(String[] args) {
        BeanFactory container = new ClassPathXmlApplicationContext("objectfactoryinj.xml");
        MockNewsPersister2 persister = (MockNewsPersister2)container.getBean("mockPersister2");
        persister.persistNews();
        persister.persistNews();
    }
}
```

#### 方法替换

使用FXNewsProviderMethodReplacer替换FXNewsProvider中的getAndPersistNews()方法

```java
package org.springframework.mylearntest.methodreplacer;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.support.MethodReplacer;

import java.lang.reflect.Method;

public class FXNewsProviderMethodReplacer implements MethodReplacer {

    private static final transient Log logger =
            LogFactory.getLog(FXNewsProviderMethodReplacer.class);

    public Object reimplement(Object target, Method method, Object[] args)
            throws Throwable {
        logger.info("before executing method["+method.getName()+
                "] on Object["+target.getClass().getName()+"].");
        System.out.println("sorry,We will do nothing this time.");
        logger.info("end of executing method["+method.getName()+
                "] on Object["+target.getClass().getName()+"].");
        return null;
    }
}
```

```XML
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd">

    <bean id="FXNewsProvider" class="org.springframework.mylearntest.propconfig.FXNewsProvider">
        <constructor-arg index="0">
            <ref bean="djNewsListener"/>
        </constructor-arg>
        <constructor-arg index="1">
            <ref bean="djNewsPersister"/>
        </constructor-arg>
        <replaced-method name="getAndPersistNews" replacer="providerReplacer">
        </replaced-method>
    </bean>

    <bean id="djNewsListener" class="org.springframework.mylearntest.propconfig.DjNewsListener"/>
    <bean id="djNewsPersister" class="org.springframework.mylearntest.propconfig.DjNewsPersister"/>
    <bean id="providerReplacer" class="org.springframework.mylearntest.methodreplacer.FXNewsProviderMethodReplacer">
    </bean>
</beans>
```

```java
package org.springframework.mylearntest.methodreplacer;


import org.springframework.beans.factory.BeanFactory;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.mylearntest.propconfig.FXNewsProvider;

public class Test4FXNewsProviderMethodReplacer {
    public static void main(String[] args) {
        BeanFactory container = new ClassPathXmlApplicationContext("methodreplacer.xml");
        FXNewsProvider fxNewsProvider = (FXNewsProvider)container.getBean("FXNewsProvider");
        fxNewsProvider.getAndPersistNews();
    }
}
```

### IoC容器背后的秘密

容器启动阶段

* 容器启动开始，首先会通过某种途径加载Configuration MetaData。除了代码方式比较直接，在大部分情况下，容器需要依赖某些工具类（BeanDefinitionReader
  ）对加载的Configuration MetaData进行解析和分析，并将分析后的信息编组为相应的BeanDefinition，最后把这些保存了bean定义必要信息的BeanDefinition，注册到相应的BeanDefinitionRegistry，这样容器启动工作就完成了。

Bean实例化阶段

* 第一阶段: 现在所有的bean定义信息都通过BeanDefinition的方式注册到了BeanDefinitionRegistry中。

* 第二阶段: 当某个请求方通过容器的getBean方法明确地请求某个对象时，或者因依赖关系容器需要隐式地调用getBean方法时。该阶段，容器会首先检查所请求的对象之前是否已经初始化。如果没有，则会根据注册的BeanDefinition
  所提供的信息实例化被请求对象，并为其注入依赖。如果该对象实现了某些回调接口，也会根据回调接口的要求来装配它。当该对象装配完毕之后，容器会立即将其返回请求方使用。

### BeanFactoryPostProcessor

Spring提供了一种叫做BeanFactoryPostProcessor的容器扩展机制。该机制允许我们在容器实例化相应对象之前，对注册到容器的BeanDefinition所保存的信息做相应的修改。这就相当于在容器实现的第一阶段最后加入一道工序，让我们对最终BeanDefinition做一些额外的操作，比如修改其中bean定义的某些属性，为bean定义增加其他信息等。

如果要自定义实现BeanFactoryPostProcessor，通常我们需要实现org.springframework.beans.factory.config.BeanFactoryPostProcessor接口。这个时候可能需要实现类同时实现Spring的org.springframework.core.Ordered接口，以保证各个BeanFactoryPostProcessor可以按照预先设定的顺序执行（如果顺序紧要的话）。

其中,org.springframework.beans.factory.config.PropertyPlaceholderConfigurer和org.springframework.beans.factory.config.Property OverrideConfigurer是两个比较常用的BeanFactoryPostProcessor。

#### PropertyPlaceholderConfigurer

```XML
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd">
    <!--    使用的BeanFactoryPostProcessor-->
    <bean class="org.springframework.beans.factory.config.PropertyPlaceholderConfigurer">
        <property name="locations">
            <list>
                <value>conf/jdbc.properties</value>
                <value>conf/mail.properties</value>
            </list>
        </property>
    </bean>

    <!--    使用占位符的数据源配置-->
    <bean id="dataSource" class="org.apache.commons.dbcp2.BasicDataSource" destroy-method="close">
        <property name="url">
            <value>${jdbc.url}</value>
        </property>
        <property name="driverClassName">
            <value>${jdbc.driver}</value>
        </property>
        <property name="username">
            <value>${jdbc.username}</value>
        </property>
        <property name="password">
            <value>${jdbc.password}</value>
        </property>
        <property name="testOnBorrow">
            <value>true</value>
        </property>
        <property name="testOnReturn">
            <value>true</value>
        </property>
        <property name="testWhileIdle">
            <value>true</value>
        </property>
        <property name="minEvictableIdleTimeMillis">
            <value>180000</value>
        </property>
        <property name="timeBetweenEvictionRunsMillis">
            <value>360000</value>
        </property>
        <property name="validationQuery">
            <value>SELECT 1</value>
        </property>
        <property name="maxOpenPreparedStatements">
            <value>100</value>
        </property>
    </bean>
</beans>
```

```properties
jdbc.url=jdbc:mysql://server/MAIN?useUnicode=true&characterEncoding=ms932&failOverReadOnly=false&roundRobinLoadBalance=true
jdbc.driver=com.mysql.jdbc.Driver
jdbc.username=root
jdbc.password=root
```

如果org.apache.commons.dbcp2.BasicDataSource报错
`compile(group: 'org.apache.commons', name: 'commons-dbcp2', version: '2.1.1')`

当BeanFactory在第一阶段加载完成所有配置信息时， BeanFactory中保存的对象的属性信息还只是以占位符的形式存在，如${jdbc.url}、 ${jdbc.driver}。当PropertyPlaceholderConfigurer作为BeanFactoryPostProcessor被应用时，它会使用properties配置文件中的配置信息来替换相应BeanDefinition中占位符所表示的属性值。这样，当进入容器实现的第二阶段实例化bean时， bean定义中的属性值就是最终替换完成的了。

* PropertyPlaceholderConfigurer不单会从其配置的properties文件中加载配置项，同时还会检查Java的System类中的Properties，可以通过setSystemPropertiesMode
  ()或者setSystemPropertiesModeName()来控制是否加载或者覆盖System相应Properties的行为。
* PropertyPlaceholderConfigurer提供了SYSTEM_PROPERTIES_MODE_FALLBACK、 SYSTEM_PROPERTIES_MODE_NEVER
  和SYSTEM_PROPERTIES_MODE_OVERRIDE三种模式。默认采用的是SYSTEM_PROPERTIES_ MODE_FALLBACK，果properties文件中找不到相应配置项，则到System的Properties中查找，我们还可以选择不检查System的Properties或者覆盖它。

#### PropertyOverrideConfigurer

配置在properties文件中的信息通常都以
明文表示，PropertyOverrideConfigurer的父类PropertyResourceConfigurer提供了一个protected类型的方法convertPropertyValue，允许子类覆盖这个方法对相应的置项进行转换，如对加密后的字符串解密之后再覆盖到相应的bean定义中。当然，既然PropertyPlaceholderConfigurer也同样继承了PropertyResourceConfigurer，我们也可以针对PropertyPlaceholderConfigurer应用类似的功能。

```XML
<bean class="org.springframework.beans.factory.config.PropertyOverrideConfigurer">
<property name="location" value="pool-adjustment.properties"/>
</bean>
```

```properties
dataSource.minEvictableIdleTimeMillis=1000
dataSource.maxOpenPreparedStatements=50
```

#### CustomEditorConfigurer

CustomEditorConfigurer是另一种类型的BeanFactoryPostProcessor实现，它只是辅助性地将后期会用到的信息注册到容器，对BeanDefinition没有做任何变动。

Spring提供的部分PropertyEditor: StringArrayPropertyEditor。该PropertyEditor会将符合CSV格式的字符串转换成String
[]数组的形式，默认是以逗号（，）分隔的字符串，但可以指定自定义的字符串分隔符。ByteArrayPropertyEditor、CharArrayPropertyEditor等都属于类似功能的PropertyEditor，参照Javadoc可以取得相应的详细信息。

* ClassEditor。根据String类型的class名称，直接将其转换成相应的Class对象，相当于通过Class.forName(String)完成的功效。可以通过String
  []数组的形式传入需转换的值，以达到与提供ClassArrayEditor同样的目的。
* FileEditor。 Spring提供的对应java.io.File类型的PropertyEditor。同属于对资源进行定位的PropertyEditor还有InputStreamEditor、 URLEditor等。
* LocaleEditor。针对java.util.Locale类型的PropertyEditor，格式可以参照LocaleEditor和Locale的Javadoc说明。
* PatternEditor。针对Java SE 1.4之后才引入的java.util.regex.Pattern的PropertyEditor，格式可以参照java.util.regex.Pattern类的Javadoc。

以上这些PropertyEditor，容器通常会默认加载使用，所以，即使我们不告诉容器应该如何对这些类型进行转换，容器同样可以正确地完成工作。但当我们需要指定的类型没有包含在以上所提到PropertyEditor之列的时候，就需要给出针对这种类型的PropertyEditor实现，并通过CustomEditorConfigurer告知容器，以便容器在适当的时机使用到适当的PropertyEditor。

* 自定义PropertyEditor

对于Date类型，不同的Locale、不同的系统在表现形式上存在不同的需求。如系统这个部分需要以yyyy-MM-dd的形式表现日期，系统那个部分可能又需要以yyyyMMdd的形式对日期进行转换。

```java
package org.springframework.mylearntest.beanfactorypostprocessor;

import java.beans.PropertyEditorSupport;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

public class DatePropertyEditor extends PropertyEditorSupport {
    private String datePattern;

    @Override
    public void setAsText(String text) throws IllegalArgumentException {
        DateTimeFormatter dateTimeFormatter = DateTimeFormatter.ofPattern(getDatePattern());
        LocalDate dateValue = LocalDate.parse(text,dateTimeFormatter);
        setValue(dateValue);
    }

    @Override
    public String getAsText() {
        return super.getAsText();
    }

    public String getDatePattern() {
        return datePattern;
    }

    public void setDatePattern(String datePattern) {
        this.datePattern = datePattern;
    }
}
```

如果仅仅是支持单向的从String到相应对象类型的转换，只要覆写方法setAsText(String)即可。如果想支持双向转换，需要同时考虑getAsText()方法的覆写。

```java
package org.springframework.mylearntest.beanfactorypostprocessor;

import org.springframework.beans.PropertyEditorRegistrar;
import org.springframework.beans.PropertyEditorRegistry;

import java.beans.PropertyEditor;

public class DatePropertyEditorRegistrar implements PropertyEditorRegistrar {
    private PropertyEditor propertyEditor;

    public PropertyEditor getPropertyEditor() {
        return propertyEditor;
    }

    public void setPropertyEditor(PropertyEditor propertyEditor) {
        this.propertyEditor = propertyEditor;
    }

    @Override
    public void registerCustomEditors(PropertyEditorRegistry registry) {
        registry.registerCustomEditor(java.util.Date.class,getPropertyEditor());
    }
}
```

```XML
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd"
       xmlns:aop="http://www.springframework.org/schema/aop">

    <bean class="org.springframework.beans.factory.config.CustomEditorConfigurer">
        <property name="propertyEditorRegistrars">
            <list>
                <ref bean="datePropertyEditorRegistrar"/>
            </list>
        </property>
    </bean>

    <bean id="datePropertyEditorRegistrar" class="org.springframework.mylearntest.beanfactorypostprocessor.DatePropertyEditorRegistrar">
        <property name="propertyEditor">
            <ref bean="datePropertyEditor"/>
        </property>
    </bean>

    <bean id="datePropertyEditor" class="org.springframework.mylearntest.beanfactorypostprocessor.DatePropertyEditor">
        <property name="datePattern">
            <value>yyyy/MM/dd</value>
        </property>
    </bean>
</beans>
```

```java
package org.springframework.mylearntest.beanfactorypostprocessor;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Test4DateProp {
    public static void main(String[] args) {
        // applicationContext
        ApplicationContext context = new ClassPathXmlApplicationContext("datepropertyeditor2.xml");
        DatePropertyEditor datePropertyEditor = (DatePropertyEditor) context.getBean("datePropertyEditor");
        datePropertyEditor.setAsText("2020/06/21");
    }
}
```

#### bean的构造

容器启动之后，并不会马上就实例化相应的bean定义。我们知道，容器现在仅仅拥有所有对象的BeanDefinition来保存实例化阶段将要用的必要信息。只有当请求方通过BeanFactory的getBean()方法来请求某个对象实例的时候，才有可能触发Bean实例化阶段的活动。 BeanFactory的getBe法可以被客户端对象显式调用，也可以在容器内部隐式地被调用。隐式调用有如下两种情况。

* 对于BeanFactory来说，对象实例化默认采用延迟初始化。通常情况下，当对象A被请求而需要第一次实例化的时候，如果它所依赖的对象B之前同样没有被实例化，那么容器会先实例化对象A所依赖的对象。这时容器内部就会首先实例化对象B
  ，以及对象A依赖的其他还没有实例化的对象。这种情况是容器内部调用getBean()，对于本次请求的请求方是隐式的。
* ApplicationContext启动之后会实例化所有的bean定义，这个特性在本书中已经多次提到。但ApplicationContext在实现的过程中依然遵循Spring
  容器实现流程的两个阶段，只不过它会在启动阶段的活动完成之后，紧接着调用注册到该容器的所有bean定义的实例化方法getBean()。这就是为什么当你得到ApplicationContext类型的容器引用时，容器内所有对象已经被全部实例化完成。不信你查一下类org.AbstractApplicationContext的refresh()方法。

![](https://s2.loli.net/2023/07/15/wGtkiR4ULcpFfQj.png)

* Bean的实例化与BeanWrapper

第一步：获取BeanWrapper

* 容器在内部实现的时候，采用“策略模式（Strategy Pattern）”来决定采用何种方式初始化bean实例。通常，可以通过反射或者CGLIB动态字节码生成来初始化相应的bean实例或者动态生成其子类。org
  .springframework.beans.factory.support.InstantiationStrategy定义是实例化策略的抽象接口，其直接子类SimpleInstantiationStrategy实现了简单的对象实例化功能，可以通过反射来实例化对象实例，但不支持方法注入方式的对象实例化。 CglibSubclassingInstantiationStrategy继承了SimpleInstantiationStrategy的以反射方式实例化对象的功能，并且通过CGLIB的动态字节码生成功能，该策略实现类可以动态生成某个类的子类，进而满足了方法注入所需的对象实例化求。默认情况下，容器内部采用的是CglibSubclassingInstantiationStrategy。
* 容器只要根据相应bean定义的BeanDefintion取得实例化信息，结合CglibSubclassingInstantiationStrategy以及不同的bean
  定义类型，就可以返回实例化完成的对象实例。但是，返回方式上有些“点缀”。不是直接返回构造完成的对象实例，而是以BeanWrapper对构造完成的对象实例进行包裹，返回相应的BeanWrapper实例。

第二部：设置Bean的相应属性

* BeanWrapper接口通常在Spring框架内部使用，它有一个实现类org.springframework.beans.BeanWrapperImpl。其作用是对某个bean进行“包裹”，然后对这个“包裹”的bean
  进行操作，比如设置或者获取bean的相应属性值。而在第一步结束后返回BeanWrapper实例而不是原先的对象实例，就是为了第二步“设置对象属性”。
* BeanWrapper定义继承了org.springframework.beans.PropertyAccessor接口，可以以统一的方式对对象属性进行访问； BeanWrapper
  定义同时又直接或者间接继承了PropertyEditorRegistry和TypeConverter接口。不知你是否还记得CustomEditorConfigurer？当把各种PropertyEditor注册给容器时，知道后面谁用到这些PropertyEditor吗？对，就是BeanWrapper！在第一步构造完成对象之后， Spring会根据对象实例构造一个BeanWrapperImpl实例，然后将之前CustomEditorConfigurer注册的PropertyEditor复制一份给BeanWrapperImpl例（这就是BeanWrapper同时又是PropertyEditorRegistry的原因）。这样，当BeanWrapper转换类型、设置对象属性值时，就不会无从下手了。

```
// 使用BeanWrapper操作对象
Object provider = Class.forName("package.name.FXNewsProvider").newInstance(); 
Object listener = Class.forName("package.name.DowJonesNewsListener").newInstance();
Object persister = Class.forName("package.name.DowJonesNewsPersister").newInstance();
BeanWrapper newsProvider = new BeanWrapperImpl(provider); 
newsProvider.setPropertyValue("newsListener", listener);
newsProvider.setPropertyValue("newPersistener", persister);

assertTrue(newsProvider.getWrappedInstance() instanceof FXNewsProvider);
assertSame(provider, newsProvider.getWrappedInstance());
assertSame(listener, newsProvider.getPropertyValue("newsListener"));
assertSame(persister, newsProvider.getPropertyValue("newPersistener"));
```

```
// 使用Java反射API操作对象
Object provider = Class.forName("package.name.FXNewsProvider").newInstance();
Object listener = Class.forName("package.name.DowJonesNewsListener").newInstance();
Object persister = Class.forName("package.name.DowJonesNewsPersister").newInstance();

Class providerClazz = provider.getClass();
Field listenerField = providerClazz.getField("newsListener");
listenerField.set(provider, listener);
Field persisterField = providerClazz.getField("newsListener");
persisterField.set(provider, persister);
assertSame(listener, listenerField.get(provider));
assertSame(persister, persisterField.get(provider));
```

* 各种Aware接口

当对象实例化完成并且相关属性以及依赖设置完成之后， Spring容器会检查当前对象实例是否实现了一系列的以Aware命名结尾的接口定义。如果是，则将这些Aware接口定义中规定的依赖注入给当前对象实例。这些Aware接口为如下几个。
针对BeanFactory容器而言

* org.springframework.beans.factory.BeanNameAware。如果Spring容器检测到当前对象实例实现了该接口，会将该对象实例的bean定义对应的beanName设置到当前对象实例。
* org.springframework.beans.factory.BeanClassLoaderAware。如果容器检测到当前对象实例实现了该接口，会将对应加载当前bean的Classloader
  注入当前对象实例。默认会使用加载org.springframework.util.ClassUtils类的Classloader。
* org.springframework.beans.factory.BeanFactoryAware。在介绍方法注入的时候，我们提到过使用该接口以便每次获取prototype类型bean
  的不同实例。如果对象声明实现了BeanFactoryAware接口， BeanFactory容器会将自身设置到当前对象实例。这样，当前对象实例就拥有了一个BeanFactory容器的引用，并且可以对这个容器内允许访问的对象按照需要进行访问。

对于ApplicationContext类型容器，使用BeanPostProcessor处理

* org.springframework.context.ResourceLoaderAware 。 ApplicationContext 实现了Spring的ResourceLoader
  接口（后面会提及详细信息）。当容器检测到当前对象实例实现了ResourceLoaderAware接口之后，会将当前ApplicationContext自身设置到对象实例，这样当前对象实例就拥有了其所在ApplicationContext容器的一个引用。

* org.springframework.context.ApplicationEventPublisherAware。 ApplicationContext作为一个容器，同时还实现了ApplicationEventPublisher
  接口，这样，它就可以作为ApplicationEventPublisher来使用。所以，当前ApplicationContext容器如果检测到当前实例化的对象实例声明了ApplicationEventPublisherAware接口，则会将自身注入当前对象。

* org.springframework.context.MessageSourceAware。 ApplicationContext通过MessageSource接口提供国际化的信息支持，即I18n
  （ Internationalization）。它自身就实现了MessageSource接口，所以当检测到当前对象实例实现了MessageSourceAware接口，则会将自身注入当前对象实例。

* org.springframework.context.ApplicationContextAware。 如果ApplicationContext容器检测到当前对象实现了ApplicationContextAware
  接口，则会将自身注入当前对象实例。

* BeanPostProcessor

只要记住BeanPostProcessor是存在于对象实例化阶段，而BeanFactoryPostProcessor则是存在于容器启动阶段。

```java
package org.springframework.beans.factory.config;

import org.springframework.beans.BeansException;
import org.springframework.lang.Nullable;

public interface BeanPostProcessor {

    @Nullable
    default Object postProcessBeforeInitialization(Object bean, String beanName) throws BeansException {
        return bean;
    }

    @Nullable
    default Object postProcessAfterInitialization(Object bean, String beanName) throws BeansException {
        return bean;
    }

}
```

* 自定义BeanPostProcessor

假设系统中所有的IFXNewsListener实现类需要从某个位置取得相应的服务器连接密码，而且系统中保存的密码是加密的，那么在IFXNewsListener发送这个密码给新闻服务器进行连接验证的时候，首先需要对系统中取得的密码进行解密，然后才能发送。

1. 标注需要进行解密的实现类
* 为了能够识别那些需要对服务器连接密码进行解密的IFXNewsListener实现，我们声明了接口PasswordDecodable，并要求相关IFXNewsListener实现类实现该接口。 

```java
package org.springframework.mylearntest.beanpostprocessor;


public interface PasswordDecodable {
    String getEncodedPassword();
    void setDecodedPassword(String password);
}
```

```java
package org.springframework.mylearntest.beanpostprocessor;

import org.springframework.mylearntest.directcode.FXNewsBean;
import org.springframework.mylearntest.directcode.IFXNewsListener;

public class DowJonesNewsListener implements IFXNewsListener,PasswordDecodable {
    private String password;
    public String[] getAvailableNewsIds() {
        // 省略
        return new String[0];
    }
    public FXNewsBean getNewsByPK(String newsId) {
        // 省略
        return null;
    }
    public void postProcessIfNecessary(String newsId) {
        // 省略
    }
    public String getEncodedPassword() {
        return this.password;
    }
    public void setDecodedPassword(String password) {
        this.password = password;
    }
}
```

2. 实现相应的BeanPostProcessor对符合条件的Bean实例进行处理
* 我们通过PasswordDecodable接口声明来区分将要处理的对象实例，当检查到当前对象实例实现了该接口之后，就会从当前对象实例取得加密后的密码，并对其解密。然后将解密后的密码设置回当前对象实例。

```java
package org.springframework.mylearntest.beanpostprocessor;

import org.springframework.beans.BeansException;
import org.springframework.beans.factory.config.BeanPostProcessor;

public class PasswordDecodePostProcessor implements BeanPostProcessor {
    public Object postProcessAfterInitialization(Object object, String beanName)
            throws BeansException {
        return object;
    }
    public Object postProcessBeforeInitialization(Object object, String beanName)
            throws BeansException {
        if(object instanceof PasswordDecodable){
            String encodedPassword = ((PasswordDecodable)object).getEncodedPassword();
            String decodedPassword = decodePassword(encodedPassword);
            ((PasswordDecodable)object).setDecodedPassword(decodedPassword);
        }
        return object;
    }
    private String decodePassword(String encodedPassword) {
        // 实现解码逻辑
        encodedPassword = encodedPassword + "2mingwen";
        return encodedPassword;
    }
}
```

3. 将自定义的BeanPostProcessor注册到容器

将PasswordDecodePostProcessor注入到容器中

```XML
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd"
       xmlns:aop="http://www.springframework.org/schema/aop">
    <bean id="dowJonesNewsListener" class="org.springframework.mylearntest.beanpostprocessor.DowJonesNewsListener">
        <property name="decodedPassword" value="123sjfg@LL"></property>
    </bean>

    <bean id="passwordDecodePostProcessor" class="org.springframework.mylearntest.beanpostprocessor.PasswordDecodePostProcessor">
    </bean>
</beans>
```

4. 测试类
   
   ```java
   package org.springframework.mylearntest.beanpostprocessor;
     
   
   import org.springframework.context.ApplicationContext;
   import org.springframework.context.support.ClassPathXmlApplicationContext;
   
   public class Test4BeanPostProcessor {
       public static void main(String[] args) {
           ApplicationContext beanFactory = new ClassPathXmlApplicationContext("beanpostprocessor/beanpostprocessor.xml");
           DowJonesNewsListener dowJonesNewsListener = (DowJonesNewsListener) beanFactory.getBean("dowJonesNewsListener");
           String encodedPassword = dowJonesNewsListener.getEncodedPassword();
           System.out.println("encodedPassword = " + encodedPassword);// encodedPassword = 123sjfg@LL2mingwen
       }
   }
   ```
   
   


```
实际上，有一种特殊类型的BeanPostProcessor我们没有提到，它的执行时机与通常的BeanPostProcessor不同。org.springframework.beans.factory.config.InstantiationAwareBeanPostProcessor接口可以在对象的实例化过程中导致某种类似于电路“短路”的效果。实际上，并非所有注册到Spring容器内的bean定义都是按照图4-10
的流程实例化的。在所有的步骤之前，也就是实例化bean对象步骤之前，容器会首先检查容器中是否注册有InstantiationAwareBeanPostProcessor类型的BeanPostProcessor
。如果有，首先使用相应的InstantiationAwareBeanPostProcessor来构造对象实例。构造成功后直接返回造完成的对象实例，而不会按照“正规的流程”继续执行。这就是它可能造成“短路”的原因。**

* InitializingBean 和 init-method

org.springframework.beans.factory.InitializingBean是容器内部广泛使用的一个对象生命周期标识接口。

```java
public interface InitializingBean {
void afterPropertiesSet() throws Exception;
}
```

其作用在于，在对象实例化过程调用过“BeanPostProcessor的前置处理”之后，会接着检测当前对象是否实现了InitializingBean接口，如果是，则会调用其afterPropertiesSet()方法进一步调整对象实例的状态。比如，在有些情况下，某个业务对象实例化完成后，还不能处于可以使用状态。这个时候就可以让该业务对象实现该接口，并在方法afterPropertiesSet()中完成对该业务对象的后续处理。

如果系统开发过程中规定：所有业务对象的自定义初始化操作都必须以init()命名，为了省去挨个`<bean>`的设置init-method这样的烦琐，我们还可以通过最顶层的`<beans>`的default-init-method统一指定这一init()方法名。

## ApplicationContext

### 统一资源加载策略

Spring提出了一套基于org.springframework.core.io.Resource和org.springframework.core.io.ResourceLoader接口的资源抽象和加载策略。

Resource: 接口可以根据资源的不同类型，或者资源所处的不同场合，给出相应的具体实现。可以帮助我们查询资源状态、访问资源内容，甚至根据当前资源创建新的相对资源。我们可以继承org.springframework.core.io
.AbstractResource抽象类。

ResourceLoader: 但如何去查找和定位这些资源，则应该是ResourceLoader的职责所在了。 org.springframework.core.io.ResourceLoader接口是资源查找定位策略的统一抽象，具体的资源查找定位策略则由相应的ResourceLoader实现类给出。

DefaultResourceLoader: ResourceLoader有一个默认的实现类，即org.springframework.core.io.DefaultResourceLoader，该类默认的资源查找处理逻辑如下。

* 首先检查资源路径是否以classpath:前缀打头，如果是，则尝试构造ClassPathResource类型资源并返回。
* 否则， (a) 尝试通过URL，根据资源路径来定位资源，如果没有抛出MalformedURLException，有则会构造UrlResource类型的资源并返回； (b
  )如果还是无法根据资源路径定位指定的资源，则委派getResourceByPath(String) 方 法 来 定 位 ， DefaultResourceLoader 的getResourceByPath(String)方法默认实现逻辑是，构造ClassPathResource类型的资源并返回。

![](https://s2.loli.net/2023/07/15/3S4uLnEjAsDTgJa.png)

![](https://s2.loli.net/2023/07/15/gXVo8SKvnThpwZm.png)

### 四种加载方式

#### 使用以ResourceLoader身份登场的ApplicationContext

`ResourceLoader resourceLoader = new ClassPathXmlApplicationContext("配置文件路径");`

#### ResourceLoader类型的注入

1. 依赖于ResourceLoader
   
   ```XML
   <?xml version="1.0" encoding="UTF-8"?>
   <beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd">
    <bean id="resourceLoader" class="org.springframework.core.io.DefaultResourceLoader">
    </bean>
   
    <bean id="fooBar" class="org.springframework.mylearntest.resourceloader.FooBar">
        <property name="resourceLoader">
            <ref bean="resourceLoader"/>
        </property>
    </bean>
   </beans>
   ```

2. 实现了ResourceLoaderAware或者ApplicationContextAware接口的实例类
   
   ```XML
   <?xml version="1.0" encoding="UTF-8"?>
   <beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd">
   
    <bean id="fooBar" class="org.springframework.mylearntest.resourceloader.FooBarImplApplicationContextAware">
    </bean>
   </beans>
   ```

3. Resource类型的注入
   
   ```XML
   <?xml version="1.0" encoding="UTF-8"?>
   <beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd">
   
    <bean id="xMailer" class="org.springframework.mylearntest.resourceloader.XMailer">
        <property name="template" value="resourceloader/resources.default_template.vm"/>
    </bean>
   </beans>
   ```

4. ApplicationContext的Resource加载行为
   当ClassPathXmlApplicationContext在实例化的时候，即使没有指明classpath:或者classpath*:等前缀，它会默认从classpath中加载bean定义配置文件，
   而FileSystemXmlApplicationContext则有些 不同 ，如果 我们 像如下 代码 那样指 定conf/appContext.xml，它会尝试从文件系统中加载bean定义文件

### 国际化信息支持(i18n MessageSource)

#### Java SE 提供的国际化支持

* Locale
  不同的Locale代表不同的国家和地区，每个国家和地区在Locale这里都有相应的简写代码表示，包括语言代码以及国家代码，这些代码是ISO标准代码。如，Locale.CHINA代表中国。

* ResourceBundle

* ResourceBundle用来保存特定于某个Locale的信息（可以是String类型信息，也可以是任何类型的对象）。通常， ResourceBundle管理一组信息序列，所有的信息序列有统一的一个basename
  ，然后特定的Locale的信息，可以根据basename后追加的语言或者地区代码来区分。比如，我们用一组properties文件来分别保存不同国家地区的信息，可以像下面这样来命名相应的properties文件：

```
messages.properties
messages_zh.properties
messages_zh_CN.properties
messages_en.properties
messages_en_US.properties
```

其中，文件名中的messages部分称作ResourceBundle将加载的资源的basename，其他语言或地区的资源在basename的基础上追加Locale特定代码。

![](https://s2.loli.net/2023/07/15/8Y4A7NIqHhxa6Qb.png)

如果某个业务对象需要国际化的信息支持，那么最简单的办法就是让它实现MessageSourceAware接口，然后注册到ApplicationContext容器。不过这样一来，该业务对象对ApplicationContext容器的依赖性就太强了，显得容器具有较强的侵入性。而实际上， 如果真的某个业务对象需要依赖于MessageSource的话，直接通过构造方法注入或者setter方法注入的方式声明依赖就可以了。

* 容器内部事件发布
1. 自定义事件发布
   给出自定义事件类型（ define your own event object）。 为了针对具体场景可以区分具体的事件类型， 我们需要给出自己的事件类型的定义，通常做法是扩展java.util.EventObject类来实现自定义的事件类型。
* 定义事件类型
  
  ```java
  package org.springframework.mylearntest.eventpublication.event;
    
  
  import java.util.EventObject;
  
  /**
    * 自定义事件类型
    */
    public class MethodExecutionEvent extends EventObject {
     private static final long serialVersionUID = -71960369269303337L;
     private String methodName;
    
     public MethodExecutionEvent(Object source) {
    
         super(source);
    
     }
    
     public MethodExecutionEvent(Object source, String methodName) {
    
         super(source);
         this.methodName = methodName;
    
     }
    
     public String getMethodName() {
    
         return methodName;
    
     }
    
     public void setMethodName(String methodName) {
    
         this.methodName = methodName;
    
     }
    }
  
  ```
  * 定义事件监听器接口以及实现类
  ```java
  package org.springframework.mylearntest.eventpublication.event;
  import java.util.EventListener;
  
  /**
    * 自定义事件监听器
    */
    public interface MethodExecutionEventListener extends EventListener {
     /**
      * 处理方法开始执行的时候发布的MethodExecutionEvent事件
      */
      void onMethodBegin(MethodExecutionEvent evt);
        
      /**
      * 处理方法执行将结束时候发布的MethodExecutionEvent事件
      */
      void onMethodEnd(MethodExecutionEvent evt);
      }
    
  ```
  
    
  
* 自定义事件监听器实现
  
  ```java
  package org.springframework.mylearntest.eventpublication.event;
    
  
  public class SimpleMethodExecutionEventListener implements MethodExecutionEventListener {
  
      public void onMethodBegin(MethodExecutionEvent evt) {
          String methodName = evt.getMethodName();
          System.out.println("start to execute the method[" + methodName + "].");
      }
      
      public void onMethodEnd(MethodExecutionEvent evt) {
          String methodName = evt.getMethodName();
          System.out.println("finished to execute the method[" + methodName + "].");
      }
  
  }


```java
* 定义事状态枚举类以及事件发布者
```java
package org.springframework.mylearntest.eventpublication.event;

public enum MethodExecutionStatus {
    BEGIN,END
}
```

* 事件发布类

```java
package org.springframework.mylearntest.ioc.eventpublication.event;

import java.util.ArrayList;
import java.util.List;

public class MethodExeuctionEventPublisher {
	private List<MethodExecutionEventListener> listeners = new
			ArrayList<MethodExecutionEventListener>();

	public void methodToMonitor() {
		MethodExecutionEvent event2Publish =
				new MethodExecutionEvent(this, "methodToMonitor");
		publishEvent(MethodExecutionStatus.BEGIN, event2Publish);
		// 执行实际的方法逻辑
		// ...
		publishEvent(MethodExecutionStatus.END, event2Publish);
	}

	// 为了避免事件处理期间事件监听器的注册或移除操作影响处理过程，我们对事件发布时点的监听器列表进行了一个安全复制（ safe-copy）
	protected void publishEvent(MethodExecutionStatus status,
								MethodExecutionEvent methodExecutionEvent) {
		List<MethodExecutionEventListener> copyListeners =
				new ArrayList<MethodExecutionEventListener>(listeners);
		for (MethodExecutionEventListener listener : copyListeners) {
			if (MethodExecutionStatus.BEGIN.equals(status))
				listener.onMethodBegin(methodExecutionEvent);
			else
				listener.onMethodEnd(methodExecutionEvent);
		}
	}

	public void addMethodExecutionEventListener(MethodExecutionEventListener listener) {
		this.listeners.add(listener);
	}

	public void removeListener(MethodExecutionEventListener listener) {
		if (this.listeners.contains(listener))
			this.listeners.remove(listener);
	}

	public void removeAllListeners() {
		this.listeners.clear();
	}

}
```

* 测试类

```java
package org.springframework.mylearntest.eventpublication.event;

public class Test4Event {
    public static void main(String[] args) {
        MethodExeuctionEventPublisher eventPublisher =
                new MethodExeuctionEventPublisher();
        eventPublisher.addMethodExecutionEventListener(new
                SimpleMethodExecutionEventListener());
        eventPublisher.methodToMonitor();
        eventPublisher.removeAllListeners();
    }
}
```



在实现中，需要注意到，为了避免事件处理期间事件监听器的注册或移除操作影响处理过程，我们对事件发布时点的监听器列表进行了一个安全复制（ safe-copy）。另外，事件的发布是顺序执行，所以为了能够不影响处理性能，事件监听器的处理逻辑应该尽量简短。

![](https://s2.loli.net/2023/07/15/Qmwxcpa4qDJGMYu.png)

* Spring 的容器内事件发布类结构分析
Spring 的 ApplicationContext 容 器 内 部 允 许 以 org.springframework.context.ApplicationEvent的形式发布事件 ，容器内注册的org.springframework.context.ApplicationListener类型的bean定义会被ApplicationContext容器自动识别，它们负责监听容器内发布的所有ApplicationEvent类型的事件。

ApplicationEvent: Spring容器内自定义事件类型，继承自java.util.EventObject，它是一个抽象类，需要根据情况提供相应子类以区分不同情况。默认情况下， Spring提供了三个实现。 

* ContextClosedEvent： ApplicationContext容器在即将关闭的时候发布的事件类型。
* ContextRefreshedEvent： ApplicationContext容器在初始化或者刷新的时候发布的事件类
型。
* RequestHandledEvent： Web请求处理后发布的事件，其有一子类ServletRequestHandledEvent提供特定于Java EE的Servlet相关事件。

```java
```java
package org.springframework.mylearntest.eventpublication.applicationevent;

import org.springframework.context.ApplicationEvent;
import org.springframework.mylearntest.eventpublication.event.MethodExecutionStatus;

public class MethodExecutionEvent extends ApplicationEvent {
    private static final long serialVersionUID = -71960369269303337L;
    private String methodName;
    private MethodExecutionStatus methodExecutionStatus;

    public MethodExecutionEvent(Object source) {
        super(source);
    }

    public MethodExecutionEvent(Object source, String methodName,
                                MethodExecutionStatus methodExecutionStatus) {
        super(source);
        this.methodName = methodName;
        this.methodExecutionStatus = methodExecutionStatus;
    }

    public String getMethodName() {
        return methodName;
    }

    public void setMethodName(String methodName) {
        this.methodName = methodName;
    }

    public MethodExecutionStatus getMethodExecutionStatus() {
        return methodExecutionStatus;
    }

    public void setMethodExecutionStatus(MethodExecutionStatus methodExecutionStatus) {
        this.methodExecutionStatus = methodExecutionStatus;
    }
}
```



ApplicationListener: ApplicationContext容器内使用的自定义事件监听器接口定义，继承自java.util.EventListener。 

ApplicationContext: 容器在启动时，会自动识别并加载EventListener类型bean定义，一旦容器内有事件发布，将通知这些注册到容器的EventListener。

```java
package org.springframework.mylearntest.eventpublication.applicationevent;


import org.springframework.context.ApplicationEvent;
import org.springframework.context.ApplicationListener;

@SuppressWarnings("rawtypes")
public class MethodExecutionEventListener implements ApplicationListener {
    public void onApplicationEvent(ApplicationEvent evt) {
        if (evt instanceof MethodExecutionEvent) {
            // 执行处理逻辑
        }
    }
}
```

ApplicationContext: 还记得ApplicationContext的定义吧？除了之前的ResourceLoader和MessageSource， ApplicationContext接口定义还继承了ApplicationEventPublisher接口，该接口提供了void publishEvent(ApplicationEvent event)方法定义。不难看出， ApplicationContext容器现在担当的就是事件发布者的角色。ApplicationContext容器的具体实现类在实现事件的发布和事件监听器的注册方面，并没事必躬亲，而是把这些活儿转包给了一个称作org.springframework.context.event.ApplicationEventMulticaster的接口。

```java
package org.springframework.mylearntest.eventpublication.applicationevent;

import org.springframework.context.ApplicationEventPublisher;
import org.springframework.context.ApplicationEventPublisherAware;
import org.springframework.mylearntest.eventpublication.event.MethodExecutionStatus;

public class MethodExeuctionEventPublisher implements ApplicationEventPublisherAware {
    private ApplicationEventPublisher eventPublisher;

    public void methodToMonitor() {
        MethodExecutionEvent beginEvt = new
                MethodExecutionEvent(this, "methodToMonitor", MethodExecutionStatus.BEGIN);
        this.eventPublisher.publishEvent(beginEvt);
        // 执行实际方法逻辑
        // ...
        MethodExecutionEvent endEvt = new
                MethodExecutionEvent(this, "methodToMonitor", MethodExecutionStatus.END);
        this.eventPublisher.publishEvent(endEvt);
    }

    public void setApplicationEventPublisher(ApplicationEventPublisher appCtx) {
        this.eventPublisher = appCtx;
    }
}
```

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd">

    <bean id="methodExecListener" class="org.springframework.mylearntest.eventpublication.applicationevent.MethodExecutionEventListener">
    </bean>
    <bean id="evtPublisher" class="org.springframework.mylearntest.eventpublication.applicationevent.MethodExeuctionEventPublisher">
    </bean>

</beans>
```

```java
package org.springframework.mylearntest.eventpublication.applicationevent;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Test4AppEvent {
    public static void main(String[] args) {
        ApplicationContext context = new ClassPathXmlApplicationContext("eventpublication/applicationevent.xml");
        MethodExeuctionEventPublisher evtPublisher = (MethodExeuctionEventPublisher) context.getBean("evtPublisher");
        evtPublisher.methodToMonitor();
    }
}
```

ApplicationEventMulticaster有一抽象实现类——org.springframework.context.event.AbstractApplicationEventMulticaster，它实现了事件监听器的管理功能。事件的发布功能则委托给了其子类。 org.springframework.context.event.SimpleApplicationEventMulticaster。其默认使用了SyncTaskExecutor进行事件的发布。为了避免这种方式可能存在的性能问题，我们可以为其提供其他类型的TaskExecutor实现类。

容器启动开始，就会检查容器内是否存在名称为applicationEventMulticaster的ApplicationEventMulticaster对象实例。有的话就使用提供的实现，没有则默认初始化一个SimpleApplicationEventMulticaster作为将会使用的ApplicationEventMulticaster。

<img src="https://s2.loli.net/2023/07/15/TvPHprcI9eL4DSz.png"  />

## Spring IoC容器扩展

### IoC相关注解

看着依赖注入相关的信息，一半分散在Java源代码中（ @Autowired标注的信息），一半依然留在XML配置文件里，有很多bean标签依然存在。
当使用@Autoware注解能够同时找到两个或者多个同一类型的对象实例，可以使用@Qualifier对依赖注入的条件做进一步限定，指定具体是哪个id。

```xml
<beans>
<bean class="org.springframework.beans.factory.annotation. ➥
AutowiredAnnotationBeanPostProcessor"/>
<bean id="newsProvider" class="..FXNewsProvider"/>
<bean id="djNewsListener" class="..DowJonesNewsListener"/>
<bean id="reutersNewsListner" class="..ReutersNewsListener"/>
<bean id="djNewsPersister" class="..DowJonesNewsPersister"/>
</beans>
```

```java
public class FXNewsProvider {
    @Autowired
    @Qualifier("reutersNewsListner")// 此时注入id=reutersNewsListner
    private IFXNewsListener newsListener;
    @Autowired
    private IFXNewsPersister newPersistener;
    //...
}
```

```java
// @Qualifier注解位于参数上
public class FXNewsProvider{
    // ...
    @Autowired
    public void setUp(@Qualifier("reutersNewsListner") IFXNewsListener newsListener,IFXNewsPersister newPersistener) {
        this.newsListener = newsListener;
        this.newPersistener = newPersistener;
    }
    // ...
}
```

@Resource与@Autowired不同，它遵循的是byName自动绑定形式的行为准则，也就是说， IoC容器将根据@Resource所指定的名称，到容器中查找beanName
与之对应的实例，然后将查找到的对象实例注入给@Resource所标注的对象。

@PostConstruct和@PreDestroy不是服务于依赖注入的，它们主要用于标注对象生命周期管理相关方法，这与Spring的InitializingBean和DisposableBean接口，以及配置项中的init
-method和destroy-method起到类似的作用。

就像@Autowired需要AutowiredAnnotationBeanPostProcessor为它与IoC容器牵线搭桥一样，JSR250的这些注解也同样需要一个BeanPostProcessor帮助它们实现自身的价值。这个BeanPostProcessor就是org.springframework.context.annotation.CommonAnnotationBeanPostProcessor，只有将CommonAnnotationBeanPostProcessor添加到容器， JSR250的相关注解才能发挥作用。

```xml
<beans>
<bean class="org.springframework.context.annotation.CommonAnnotationBeanPostProcessor"/>
<bean id="newsProvider" class="..FXNewsProvider"/>
<bean id="djNewsListener" class="..DowJonesNewsListener"/>
<bean id="djNewsPersister" class="..DowJonesNewsPersister"/>
</beans>
```

`<context:annotation-config> `不 但 帮 我 们 把 AutowiredAnnotationBeanPostProcessor 和CommonAnnotationBeanPostProcessor注册到容器，同时还会把PersistenceAnnotationBeanPostProcessor和RequiredAnnotationBeanPostProcessor一并进行注册，可谓一举四得啊！

使用相应的注解对组成应用程序的相关类进行标注之后， classpath-scanning功能可以从某一顶层包（ base package）开始扫描。当扫描到某个类标注了相应的注解之后，就会提取该类的相关信息，构建对应的BeanDefinition，然后把构建完的BeanDefinition注册到容器。

```xml
<beans xmlns="http://www.springframework.org/schema/beans"
xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
xmlns:context="http://www.springframework.org/schema/context"
xsi:schemaLocation="http://www.springframework.org/schema/beans
http://www.springframework.org/schema/beans/spring-beans-2.5.xsd
http://www.springframework.org/schema/context
http://www.springframework.org/schema/context/spring-context-2.5.xsd">
<context:component-scan base-package="org.spring21"/>
</beans>
```

`<context:component-scan>`它同时将AutowiredAnnotationBeanPostProcessor和CommonAnnotationBeanPostProcessor一并注册到了容器中，所以，依赖注入的需求得以满足。

> 参考资料
> 
> 1. 书籍名称：Spring揭秘 作者：王福强
> 2. [https://github.com/spring-projects/spring-framework.git](https://github.com/spring-projects/spring-framework.git)


:::tip 协议

- 本作品代码部分采用 [Apache 2.0协议](https://www.apache.org/licenses/LICENSE-2.0)进行许可。遵循许可的前提下，你可以自由地对代码进行修改，再发布，可以将代码用作商业用途。但要求你：
  - **署名**：在原有代码和衍生代码中，保留原作者署名及代码来源信息。
  - **保留许可证**：在原有代码和衍生代码中，保留Apache 2.0协议文件。

- 本作品文档部分采用[知识共享署名 4.0 国际许可协议](http://creativecommons.org/licenses/by/4.0/)进行许可。 遵循许可的前提下，你可以自由地共享，包括在任何媒介上以任何形式复制、发行本作品，亦可以自由地演绎、修改、转换或以本作品为基础进行二次创作。但要求你：
  - **署名**：应在使用本文档的全部或部分内容时候，注明原作者及来源信息。
  - **非商业性使用**：不得用于商业出版或其他任何带有商业性质的行为。如需商业使用，请联系作者。
  - **相同方式共享的条件**：在本文档基础上演绎、修改的作品，应当继续以知识共享署名 4.0国际许可协议进行许可。

:::