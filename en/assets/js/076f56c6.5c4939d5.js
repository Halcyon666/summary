"use strict";(self.webpackChunksummary=self.webpackChunksummary||[]).push([[708],{4892:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var o=t(5893),n=t(1151);const i={title:"BeanFactoryPostProcessor",sidebar_label:"BeanFactoryPostProcessor",sidebar_position:4},a=void 0,s={id:"Java/Spring/BeanFactoryPostProcessor",title:"BeanFactoryPostProcessor",description:"For the relevant code fromOfficial Source, please see Spring-test org. Spring frame.mylearntest package.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/01-Java/02-Spring/BeanFactoryPostProcessor.mdx",sourceDirName:"01-Java/02-Spring",slug:"/Java/Spring/BeanFactoryPostProcessor",permalink:"/en/Java/Spring/BeanFactoryPostProcessor",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"BeanFactoryPostProcessor",sidebar_label:"BeanFactoryPostProcessor",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"IoC Injection Mode 2",permalink:"/en/Java/Spring/IoC Inject2"},next:{title:"Bean construction process",permalink:"/en/Java/Spring/Bean Creating Process"}},c={},d=[{value:"BeanFactoryPostProcessor",id:"beanfactorypostprocessor",level:2},{value:"PropertyPlaceholder Configurer",id:"propertyplaceholder-configurer",level:3},{value:"PropertyOverrideConfigurer",id:"propertyoverrideconfigurer",level:3},{value:"CustomEditorConfigurer",id:"customeditorconfigurer",level:3},{value:"Custom PropertyEditor",id:"custom-propertyeditor",level:4}];function l(e){const r={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,n.a)(),...e.components},{Details:t}=r;return t||function(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(r.p,{children:["For the relevant code from",(0,o.jsx)(r.a,{href:"https://github.com/spring-projects/spring-framework.git",children:"Official Source"}),", please see",(0,o.jsx)(r.a,{href:"https://github.com/Halcyon66/spring-frame-modified/tree/main/spring-test",children:" Spring-test"})," org. Spring frame.mylearntest package."]}),"\n",(0,o.jsx)(r.p,{children:"Container Start Stage"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsx)(r.li,{children:"The container starts starting with some way to load Configuration MetaData.Apart from the more direct method, in most cases the containers will have to rely on certain tool classes (Bean DefinititionReader) to parse and analyse the loaded configuration MetaData, and to group the analysed information into the corresponding BeanDefinitis, and finally register the BeanDefinitis, which keeps the necessary information on bean definition."}),"\n"]}),"\n",(0,o.jsx)(r.p,{children:"Bean Examination Stage"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:["\n",(0,o.jsx)(r.p,{children:"Phase 1: All bean definition information is now registered in BeanDefinitis by way of BeanDefinition."}),"\n"]}),"\n",(0,o.jsxs)(r.li,{children:["\n",(0,o.jsx)(r.p,{children:"Phase Two: When a requesting party explicitly requests an object through the container's getBean method, or when the getBean method is required to use the getBean method.At this stage, the container will first check if the requested object has been initialized.If not, the requested object will be instantiated and relied upon on on the information provided by registered BeanDefinition.If the object implements some callback interfaces it will also be configured in accordance with the callback interface.The container will return the object to the requesting party to use it immediately after it has been installed."}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(r.h2,{id:"beanfactorypostprocessor",children:"BeanFactoryPostProcessor"}),"\n",(0,o.jsx)(r.p,{children:"Spring provides a container extension called BeanFactoryPostProcessor.The mechanism allows us to modify the information kept by BeanDefinitis, registered to the container, before instantiating the corresponding object.This would amount to adding a process at the end of the first stage of implementation of the container, allowing us to make some additional actions with respect to the eventual BeanDefinitis, such as amending some of the attributes of the bean definition and adding additional information to the bean definition."}),"\n",(0,o.jsxs)(r.p,{children:["If you want to customize BeanFactoryPostProcessor, we usually need to implement the ",(0,o.jsx)(r.code,{children:"org.springframe.beans.factory.config.BeanFactoryPostProcessor"})," interface.This may require the implementation of simultaneous Springorg.springframe.core.Ordered interfaces to ensure that BeanFactoryPostProcessors can be executed in a predetermined sequence (if sequentially)."]}),"\n",(0,o.jsxs)(r.p,{children:["Of these, ",(0,o.jsx)(r.code,{children:"org.springframe.beans.factory.config.PropertyPlaceholderConfigurer"})," and ",(0,o.jsx)(r.code,{children:"org.springframe.beans.factory.config.PropertyOverrideConfigurer"})," are two more common BeanFactoryPostProcessor."]}),"\n",(0,o.jsx)(r.h3,{id:"propertyplaceholder-configurer",children:"PropertyPlaceholder Configurer"}),"\n",(0,o.jsxs)(t,{children:[(0,o.jsx)("summary",{children:"xml configuration"}),(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-XML",children:'<?xml version="1.0" encoding="UTF-8"?>\n<beans xmlns="http://www.springframework.org/schema/beans"\n\t   xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n\t   xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd">\n\t\x3c!--\t\u4f7f\u7528\u7684BeanFactoryPostProcessor--\x3e\n\t\x3c!--\t\u4f7f\u7528PropertyPlaceholderConfigurer\u5360\u4f4d\u7b26\u7684\u6570\u636e\u6e90\u914d\u7f6e--\x3e\n\t<bean class="org.springframework.beans.factory.config.PropertyPlaceholderConfigurer">\n\t\t<property name="locations">\n\t\t\t<list>\n\t\t\t\t<value>../conf/jdbc.properties</value>\n\t\t\t\t<value>../conf/mail.properties</value>\n\t\t\t</list>\n\t\t</property>\n\t</bean>\n\n\t<bean id="dataSource" class="org.apache.commons.dbcp2.BasicDataSource" destroy-method="close">\n\t\t<property name="url" value="${jdbc.url}"/>\n\t\t<property name="driverClassName" value="${jdbc.driver}"/>\n\t\t<property name="username" value="${jdbc.username}"/>\n\t\t<property name="password" value="${jdbc.password}"/>\n\t\t<property name="testOnBorrow" value="true"/>\n\t\t<property name="testOnReturn" value="true"/>\n\t\t<property name="testWhileIdle" value="true"/>\n\t\t<property name="minEvictableIdleTimeMillis" value="180000"/>\n\t\t<property name="timeBetweenEvictionRunsMillis" value="360000"/>\n\t\t<property name="validationQuery" value="SELECT 1"/>\n\t\t<property name="maxOpenPreparedStatements" value="100"/>\n\t</bean>\n\n\t\x3c!--  \u4f7f\u7528PropertyOverrideConfigurer\u66ff\u6362PropertyPlaceholderConfigurer\u4e2d\u7684\u914d\u7f6e--\x3e\n\t<bean class="org.springframework.beans.factory.config.PropertyOverrideConfigurer">\n\t\t<property name="location" value="../conf/pool-adjustment.properties"/>\n\t</bean>\n</beans>\n'})})]}),"\n",(0,o.jsxs)(t,{children:[(0,o.jsx)("summary",{children:"jdbc.properties"}),(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-properties",children:"jdbc.url=jdbc:mysql:/server/MAIN?useUnicode=true&charterEncoding=ms932&failOverReadOnly=false&roundRobinLoadBalance=true\njdbc.driver=com.mysql.jdbc.Driver\njdbc.username=root\njdbc.password=root\n"})})]}),"\n",(0,o.jsxs)(r.p,{children:["If ",(0,o.jsx)(r.code,{children:"org.apache.commons.dbcp2.BasicDataSource"})," is wrong, then ",(0,o.jsx)(r.code,{children:'api("org.apache.commons:commons-dbcp2:2.1.1")'})]}),"\n",(0,o.jsxs)(r.p,{children:["When BeanFactory loads all configuration information in the first phase, the attribute information of the object saved in BeanFactory only exists in the form of placeholders, such as ",(0,o.jsx)(r.code,{children:"${jdbc.url}"}),", ",(0,o.jsx)(r.code,{children:"${jdbc.driver}"}),".When the PropertyPlaceholder Configurer is applied as BeanFactoryPostProcesser, it uses configuration information in the properties configuration file to replace the property value expressed by the placeholder in BeanDefinition.Thus, when entering the second stage of the materialization of the container, the attribute value in the bean definition is the end of the replacement."]}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:["PropertyPlaceholderConfigurer will not only load config items from its configured properties, but will also check Properties in the Java System class to control whether to load or overwrite the System's corresponding Properties by ",(0,o.jsx)(r.code,{children:"setSystemPropertiesMode()"})," or ",(0,o.jsx)(r.code,{children:"setSystemPropertiesModeName()"}),"."]}),"\n",(0,o.jsx)(r.li,{children:"PropertyPlaceholderConfigurer offers SYSTEM_PROPERTION_MODE_FALLBACK, SYSTEM_PROPERTES_MODE_NEVER and SYSTEM_PROPERTIES_MODE_OVERRIDEBy default SYSTEM_PROPERTIES_MODE_FALLBACK that cannot be configured in the Fruit Properties file, and we can also choose not to check System's Properties or overwrite them."}),"\n"]}),"\n",(0,o.jsx)(r.h3,{id:"propertyoverrideconfigurer",children:"PropertyOverrideConfigurer"}),"\n",(0,o.jsx)(r.p,{children:"The information on the configuration in the properties files is usually explicitly stated and the PropertyOverride PropertyResourceConfigurer provides a protected type of method. Allows the child to override this method to convert the corresponding entry, such as decrypting encrypted strings before they are covered in the bean definition.Of course, now that PropertyPlaceholderConfigurer also inherits PropertyResourceConfigurer, we can apply similar features to the PropertyPlaceholder Configurer."}),"\n",(0,o.jsx)(r.p,{children:(0,o.jsx)(r.img,{src:"https://s2.loli.net/2023/07/22/xJKIuHdQwa19on5.png",alt:"image-20230722162007693"})}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-XML",children:'<bean class="org.springframework.beans.factory.config.PropertyOverrideConfigurer">\n    <property name="location" value="pool-adjustment.properties"/>\n</bean>\n'})}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-properties",children:"dataSource.minEvictableIdleTimeMillis=1000\ndataSource.maxOpenPreparedStatements=50\n"})}),"\n",(0,o.jsx)(r.h3,{id:"customeditorconfigurer",children:"CustomEditorConfigurer"}),"\n",(0,o.jsx)(r.p,{children:"CustomEditorConfigurer is another type of BeanFactoryPostProcessor which is only auxiliary to register the information to be used later in the container and makes no changes to BeanDefinition."}),"\n",(0,o.jsxs)(r.p,{children:["Some of the ",(0,o.jsx)(r.code,{children:"PropertyEditors: StringArrayPropertyEditor"}),".This PropertyEditor's will convert a string in CSV format to String[]Array, default is a string separated by comma (,) but can specify a custom string delimiter.ByteArrayPropertyEditor, CharArrayPropertyEditor, etc., are functionally similar and can be consulted by reference to Javadoc."]}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsx)(r.li,{children:"ClassEditor.Convert the String type to the corresponding Classobject based on the name of the class, which is equivalent to the function performed via Class.forName(String).The value to be converted can be passed through String[] arrayEditor, for the same purpose as providing ClassArrayEditor."}),"\n",(0,o.jsx)(r.li,{children:"FileEditor. PropertyEditor, of type java.io.File provided by Spring.The PropertyEditor, who is also a resource position, also includes InputStreamEditor, URLEditor, etc."}),"\n",(0,o.jsx)(r.li,{children:"LocaleEditor.For the property Editor, of the java.util.Locale type, the format may refer to the Javadocs description of LocaleEditor."}),"\n",(0,o.jsx)(r.li,{children:"PatternEditor.For Java SE 1.4, the PropertyEditor, which was introduced only after Java SE 1.4, may refer to Javadoc, class java.util.regex.Pattern."}),"\n"]}),"\n",(0,o.jsx)(r.p,{children:"These PropertyEditors, which are normally used by default to load by default, so even if we do not tell the containers how they should be converted to these types, they can do the job correctly.But when we need to specify a type that is not included in the list of PropertyEditors mentioned above, we need to give the PropertyEditor's implementation for this type and inform the container through CustomEditorConfigurer, so that the container can be used to the appropriate ProperEditor."}),"\n",(0,o.jsx)(r.h4,{id:"custom-propertyeditor",children:"Custom PropertyEditor"}),"\n",(0,o.jsx)(r.p,{children:"For type of Date, different Locale and different systems have different needs in their presentation.If this part of the system needs to be shown by yyyy-MM-dd, that part of the system may also require a conversion of dates in the form of yyyyMdd."}),"\n",(0,o.jsxs)(t,{children:[(0,o.jsx)("summary",{children:"DatePropertyEditor"}),(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-java",children:"package org.springframework.mylearntest.beanfactorypostprocessor;\n\nimport java.beans.PropertyEditorSupport;\nimport java.time.LocalDate;\nimport java.time.format.DateTimeFormatter;\n\npublic class DatePropertyEditor extends PropertyEditorSupport {\n    private String datePattern;\n\n    @Override\n    public void setAsText(String text) throws IllegalArgumentException {\n        DateTimeFormatter dateTimeFormatter = DateTimeFormatter.ofPattern(getDatePattern());\n        LocalDate dateValue = LocalDate.parse(text,dateTimeFormatter);\n        setValue(dateValue);\n    }\n\n    @Override\n    public String getAsText() {\n        return super.getAsText();\n    }\n\n    public String getDatePattern() {\n        return datePattern;\n    }\n\n    public void setDatePattern(String datePattern) {\n        this.datePattern = datePattern;\n    }\n}\n"})})]}),"\n",(0,o.jsx)(r.p,{children:"If only a one-way transition from String to the corresponding object type is supported as long as the overwriting method setAsText(String) is sufficient.If you want to support a two-way shift, you need to consider the overwriting of the getAsText() method."}),"\n",(0,o.jsxs)(t,{children:[(0,o.jsx)("summary",{children:"DatePropertyEditor"}),(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-java",children:"package org.springframework.mylearntest.beanfactorypostprocessor;\n\nimport org.springframework.beans.PropertyEditorRegistrar;\nimport org.springframework.beans.PropertyEditorRegistry;\n\nimport java.beans.PropertyEditor;\n\npublic class DatePropertyEditorRegistrar implements PropertyEditorRegistrar {\n    private PropertyEditor propertyEditor;\n\n    public PropertyEditor getPropertyEditor() {\n        return propertyEditor;\n    }\n\n    public void setPropertyEditor(PropertyEditor propertyEditor) {\n        this.propertyEditor = propertyEditor;\n    }\n\n    @Override\n    public void registerCustomEditors(PropertyEditorRegistry registry) {\n        registry.registerCustomEditor(java.util.Date.class, getPropertyEditor());\n    }\n}\n"})})]}),"\n",(0,o.jsxs)(t,{children:[(0,o.jsx)("summary",{children:"xml configuration"}),(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-XML",children:'<?xml version="1.0" encoding="UTF-8"?>\n<beans xmlns="http://www.springframework.org/schema/beans"\n       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n       xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd"\n       xmlns:aop="http://www.springframework.org/schema/aop">\n\n    <bean class="org.springframework.beans.factory.config.CustomEditorConfigurer">\n        <property name="propertyEditorRegistrars">\n            <list>\n                <ref bean="datePropertyEditorRegistrar"/>\n            </list>\n        </property>\n    </bean>\n\n    <bean id="datePropertyEditorRegistrar" class="org.springframework.mylearntest.beanfactorypostprocessor.DatePropertyEditorRegistrar">\n        <property name="propertyEditor">\n            <ref bean="datePropertyEditor"/>\n        </property>\n    </bean>\n\n    <bean id="datePropertyEditor" class="org.springframework.mylearntest.beanfactorypostprocessor.DatePropertyEditor">\n        <property name="datePattern">\n            <value>yyyy/MM/dd</value>\n        </property>\n    </bean>\n</beans>\n'})})]}),"\n",(0,o.jsxs)(t,{children:[(0,o.jsx)("summary",{children:"test class"}),(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-java",children:'package org.springframework.mylearntest.beanfactorypostprocessor;\n\nimport org.springframework.context.ApplicationContext;\nimport org.springframework.context.support.ClassPathXmlApplicationContext;\n\npublic class Test4DateProp {\n    public static void main(String[] args) {\n        // applicationContext\n        ApplicationContext context = new ClassPathXmlApplicationContext("datepropertyeditor2.xml");\n        DatePropertyEditor datePropertyEditor = (DatePropertyEditor) context.getBean("datePropertyEditor");\n        datePropertyEditor.setAsText("2020/06/21");\n    }\n}\n'})})]}),"\n",(0,o.jsxs)(r.blockquote,{children:["\n",(0,o.jsx)(r.p,{children:"References"}),"\n",(0,o.jsxs)(r.ol,{children:["\n",(0,o.jsx)(r.li,{children:"The book name\uff1aSpring revelator\uff1a"}),"\n"]}),"\n"]})]})}function p(e={}){const{wrapper:r}={...(0,n.a)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},1151:(e,r,t)=>{t.d(r,{Z:()=>s,a:()=>a});var o=t(7294);const n={},i=o.createContext(n);function a(e){const r=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),o.createElement(i.Provider,{value:r},e.children)}}}]);