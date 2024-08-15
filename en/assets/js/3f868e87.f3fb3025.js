"use strict";(self.webpackChunksummary=self.webpackChunksummary||[]).push([[720],{7732:(n,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>k,frontMatter:()=>t,metadata:()=>c,toc:()=>l});var o=a(6070),r=a(5710);const t={title:"Kafka\u4f7f\u7528\u95ee\u9898",sidebar_label:"Kafka\u4f7f\u7528\u95ee\u9898",sidebar_position:1},i=void 0,c={id:"Java/middleware/Kafka",title:"Kafka\u4f7f\u7528\u95ee\u9898",description:"Kafka\u4f7f\u7528\u95ee\u9898",source:"@site/docs/01-Java/08-middleware/Kafka.mdx",sourceDirName:"01-Java/08-middleware",slug:"/Java/middleware/Kafka",permalink:"/en/Java/middleware/Kafka",draft:!1,unlisted:!1,editUrl:"https://github.com/Halcyon666/summary/edit/main/i18n/en/docusaurus-plugin-content-docs/current/01-Java/08-middleware/Kafka.mdx",tags:[],version:"current",lastUpdatedAt:1723735693e3,sidebarPosition:1,frontMatter:{title:"Kafka\u4f7f\u7528\u95ee\u9898",sidebar_label:"Kafka\u4f7f\u7528\u95ee\u9898",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u8bbe\u8ba1\u6a21\u5f0f",permalink:"/en/Java/DesignPattern/Design Pattern"},next:{title:"jQuery\u9009\u62e9\u5668",permalink:"/en/Frontend/JQuery-revese-selector"}},s={},l=[{value:"Kafka\u4f7f\u7528\u95ee\u9898",id:"kafka\u4f7f\u7528\u95ee\u9898",level:2},{value:"\u5982\u4f55\u4f7f\u7528Docker Compose\u90e8\u7f72Kafka",id:"\u5982\u4f55\u4f7f\u7528docker-compose\u90e8\u7f72kafka",level:3},{value:"\u62a5\u9519\u4e00",id:"\u62a5\u9519\u4e00",level:4},{value:"\u5982\u4f55\u4f7f\u7528\u547d\u4ee4\u884c\u64cd\u4f5c\u96c6\u7fa4",id:"\u5982\u4f55\u4f7f\u7528\u547d\u4ee4\u884c\u64cd\u4f5c\u96c6\u7fa4",level:3},{value:"\u5982\u4f55\u5728Spring Boot\u4e2d\u4f7f\u7528Kafka",id:"\u5982\u4f55\u5728spring-boot\u4e2d\u4f7f\u7528kafka",level:3}];function d(n){const e={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h2,{id:"kafka\u4f7f\u7528\u95ee\u9898",children:"Kafka\u4f7f\u7528\u95ee\u9898"}),"\n",(0,o.jsx)(e.h3,{id:"\u5982\u4f55\u4f7f\u7528docker-compose\u90e8\u7f72kafka",children:"\u5982\u4f55\u4f7f\u7528Docker Compose\u90e8\u7f72Kafka"}),"\n",(0,o.jsxs)(e.blockquote,{children:["\n",(0,o.jsxs)(e.p,{children:["\u501f\u9274github",(0,o.jsx)(e.a,{href:"https://github.com/conduktor/kafka-stack-docker-compose/tree/master",children:"\u4ed3\u5e93"})]}),"\n",(0,o.jsxs)(e.p,{children:["\u4e0b\u9762\u793a\u4f8b\u4f7f\u7528\u6700\u7b80\u5355\u7684 ",(0,o.jsx)(e.code,{children:"zk-single-kafka-single.yml"})]}),"\n"]}),"\n",(0,o.jsx)(e.p,{children:"\u4ee5\u4e0b\u4e3a\u6b63\u786e\u793a\u4f8b\uff1a"}),"\n",(0,o.jsx)(e.p,{children:"\u5bf9\u4ed3\u5e93\u4e2d\u7684\u6587\u4ef6\u4f5c\u4e86\u4e24\u5904\u8c03\u6574"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"\u8c03\u6574\u4e86\u5bf9\u94b1\u7684\u8fde\u63a5\u5730\u5740"}),"\n"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-diff",children:"-       KAFKA_ADVERTISED_LISTENERS: INTERNAL://kafka1:19092,EXTERNAL://${DOCKER_HOST_IP:-127.0.0.1}:9092,DOCKER://host.docker.internal:29092\n+      KAFKA_ADVERTISED_LISTENERS: INTERNAL://kafka1:19092,EXTERNAL://${DOCKER_HOST_IP:-192.168.3.163}:9092,DOCKER://host.docker.internal:29092\n"})}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"\u5728Zoo1\u548ckafka1\u4e2d\u90fd\u6dfb\u52a0\u4e86\u65f6\u533a\uff0c\u53ef\u4ee5\u89e3\u51b3\u65f6\u95f4\u4e0d\u5bf9\u7684\u95ee\u9898"}),"\n"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-diff",children:"+      TZ: Asia/Shanghai\n"})}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-yml",children:'version: \'2.1\'\n\nservices:\n  zoo1:\n    image: confluentinc/cp-zookeeper:7.3.2\n    hostname: zoo1\n    container_name: zoo1\n    ports:\n      - "2181:2181"\n    environment:\n      ZOOKEEPER_CLIENT_PORT: 2181\n      ZOOKEEPER_SERVER_ID: 1\n      ZOOKEEPER_SERVERS: zoo1:2888:3888\n      TZ: Asia/Shanghai\n\n  kafka1:\n    image: confluentinc/cp-kafka:7.3.2\n    hostname: kafka1\n    container_name: kafka1\n    ports:\n      - "9092:9092"\n      - "29092:29092"\n      - "9999:9999"\n    environment:\n      KAFKA_ADVERTISED_LISTENERS: INTERNAL://kafka1:19092,EXTERNAL://${DOCKER_HOST_IP:-192.168.3.163}:9092,DOCKER://host.docker.internal:29092\n      KAFKA_LISTENER_SECURITY_PROTOCOL_MAP: INTERNAL:PLAINTEXT,EXTERNAL:PLAINTEXT,DOCKER:PLAINTEXT\n      KAFKA_INTER_BROKER_LISTENER_NAME: INTERNAL\n      KAFKA_ZOOKEEPER_CONNECT: "zoo1:2181"\n      KAFKA_BROKER_ID: 1\n      KAFKA_LOG4J_LOGGERS: "kafka.controller=INFO,kafka.producer.async.DefaultEventHandler=INFO,state.change.logger=INFO"\n      KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR: 1\n      KAFKA_TRANSACTION_STATE_LOG_REPLICATION_FACTOR: 1\n      KAFKA_TRANSACTION_STATE_LOG_MIN_ISR: 1\n      KAFKA_JMX_PORT: 9999\n      KAFKA_JMX_HOSTNAME: ${DOCKER_HOST_IP:-127.0.0.1}\n      KAFKA_AUTHORIZER_CLASS_NAME: kafka.security.authorizer.AclAuthorizer\n      KAFKA_ALLOW_EVERYONE_IF_NO_ACL_FOUND: "true"\n      TZ: Asia/Shanghai\n    depends_on:\n      - zoo1\n'})}),"\n",(0,o.jsx)(e.h4,{id:"\u62a5\u9519\u4e00",children:"\u62a5\u9519\u4e00"}),"\n",(0,o.jsx)(e.p,{children:"\u8c03\u6574\u5916\u90e8\u8fde\u63a5\u5730\u5740\u5373\u53ef\u89e3\u51b3\u95ee\u9898"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-log",children:"[| adminclient-1] org.apache.kafka.clients.NetworkClient : [AdminClient clientId=adminclient-1] Connection to node 1 (/127.0.0.1:9092) could not be established. Broker may not be available.\n"})}),"\n",(0,o.jsx)(e.h3,{id:"\u5982\u4f55\u4f7f\u7528\u547d\u4ee4\u884c\u64cd\u4f5c\u96c6\u7fa4",children:"\u5982\u4f55\u4f7f\u7528\u547d\u4ee4\u884c\u64cd\u4f5c\u96c6\u7fa4"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-shell",children:"# \u521b\u5efatopic\ndocker run --rm --network=host \\\n           confluentinc/cp-kafka:7.3.2 \\\n           kafka-topics --bootstrap-server=127.0.0.1:9092 \\\n                        --create \\\n                        --topic=my-topic \\\n                        --partitions=3 \\\n                        --replication-factor=1\n# \u751f\u4ea7\u6d88\u606f\ndocker run --tty --interactive \\\n           --rm \\\n           --network=host \\\n           confluentinc/cp-kafka:7.3.2 \\\n           kafka-console-producer --broker-list=127.0.0.1:9092 --topic=my-topic\n           \n# \u6d88\u8d39\u6d88\u606f  \ndocker run --tty --interactive \\\n           --rm \\\n           --network=host \\\n           confluentinc/cp-kafka:7.3.2 \\\n           kafka-console-consumer --bootstrap-server=127.0.0.1:9092 --topic=my-topic\n\t\t   \n"})}),"\n",(0,o.jsx)(e.h3,{id:"\u5982\u4f55\u5728spring-boot\u4e2d\u4f7f\u7528kafka",children:"\u5982\u4f55\u5728Spring Boot\u4e2d\u4f7f\u7528Kafka"}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.a,{href:"https://www.baeldung.com/spring-kafka",children:"\u53c2\u8003\u8d44\u6599"})}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.a,{href:"https://github.com/Halcyon666/kafka-learn",children:"\u53c2\u8003\u4ed3\u5e93\u4ee3\u7801"})}),"\n",(0,o.jsx)(e.p,{children:"\u4ed3\u5e93\u4ee3\u7801\u7b80\u5355\u4ecb\u7ecd\u4e86 Kafka\u521b\u5efa\u5b57\u7b26\u4e32\u6d88\u606f\u548cPojo\u6d88\u606f\uff0c\u53d1\u9001\u6d88\u606f\u7684\u793a\u4f8b\u3002"}),"\n",(0,o.jsx)(e.p,{children:"\u53c2\u8003\u8d44\u6599\u6d89\u53ca\u591a\u79cd\u7c7b\u578b\u6d88\u606f\u6df7\u5408\u751f\u4ea7\u548c\u6d88\u8d39\u3002\u503c\u5f97\u5b66\u4e60\u548c\u501f\u9274\u3002"})]})}function k(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(d,{...n})}):d(n)}},5710:(n,e,a)=>{a.d(e,{R:()=>i,x:()=>c});var o=a(758);const r={},t=o.createContext(r);function i(n){const e=o.useContext(t);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:i(n.components),o.createElement(t.Provider,{value:e},n.children)}}}]);