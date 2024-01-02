"use strict";(self.webpackChunksummary=self.webpackChunksummary||[]).push([[3167],{1411:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>t,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>d,toc:()=>l});var s=r(5893),c=r(1151);const i={title:"docker-compose\u4f7f\u7528",sidebar_label:"docker-compose\u4f7f\u7528",sidebar_position:3},o=void 0,d={id:"Container-Tech/docker/docker-compose-configure-redis-cluster-jenkins",title:"docker-compose\u4f7f\u7528",description:"set up redis cluster",source:"@site/docs/07-Container-Tech/docker/docker-compose-configure-redis-cluster-jenkins.mdx",sourceDirName:"07-Container-Tech/docker",slug:"/Container-Tech/docker/docker-compose-configure-redis-cluster-jenkins",permalink:"/Container-Tech/docker/docker-compose-configure-redis-cluster-jenkins",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"docker-compose\u4f7f\u7528",sidebar_label:"docker-compose\u4f7f\u7528",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\u57fa\u7840Docker\u547d\u4ee4",permalink:"/Container-Tech/docker/Docker-Command-and-Dockerfile"},next:{title:"idea\u4f7f\u7528docker\u90e8\u7f72",permalink:"/Container-Tech/docker/idea-\u90e8\u7f72"}},t={},l=[{value:"set up redis cluster",id:"set-up-redis-cluster",level:2},{value:"write config file for redis",id:"write-config-file-for-redis",level:3},{value:"script for create multiple",id:"script-for-create-multiple",level:3},{value:"create docker-compose file",id:"create-docker-compose-file",level:3},{value:"launch redis cluster",id:"launch-redis-cluster",level:3},{value:"arrange slots",id:"arrange-slots",level:3},{value:"connect redis",id:"connect-redis",level:3},{value:"jenkins in docker compose",id:"jenkins-in-docker-compose",level:2},{value:"docker-compose configuration",id:"docker-compose-configuration",level:3},{value:"run the docker compose",id:"run-the-docker-compose",level:3},{value:"get the initial admin pwd",id:"get-the-initial-admin-pwd",level:3},{value:"\u914d\u7f6eidea project-docker",id:"\u914d\u7f6eidea-project-docker",level:3},{value:"mysql docer-compose",id:"mysql-docer-compose",level:3}];function a(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"set-up-redis-cluster",children:"set up redis cluster"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://www.cnblogs.com/zhangrui153169/p/12835681.html",children:"reference article from here"})}),"\n",(0,s.jsx)(n.h3,{id:"write-config-file-for-redis",children:"write config file for redis"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",metastring:"script",children:"cd /docker/redis\n\ntee redis-cluster.tmpl <<- 'EOF'\n# redis\u7aef\u53e3\nport ${PORT}\n# \u5173\u95ed\u4fdd\u62a4\u6a21\u5f0f\nprotected-mode no\n# \u5f00\u542f\u96c6\u7fa4\ncluster-enabled yes\n# \u96c6\u7fa4\u8282\u70b9\u914d\u7f6e\ncluster-config-file nodes.conf\n# \u8d85\u65f6\ncluster-node-timeout 5000\n# \u96c6\u7fa4\u8282\u70b9IP host\u6a21\u5f0f\u4e3a\u5bbf\u4e3b\u673aIP\ncluster-announce-ip 192.168.3.162\n# \u96c6\u7fa4\u8282\u70b9\u7aef\u53e3 7001 - 7006\ncluster-announce-port ${PORT}\ncluster-announce-bus-port 1${PORT}\n# \u5f00\u542f appendonly \u5907\u4efd\u6a21\u5f0f\nappendonly yes\n# \u6bcf\u79d2\u949f\u5907\u4efd\nappendfsync everysec\n# \u5bf9aof\u6587\u4ef6\u8fdb\u884c\u538b\u7f29\u65f6\uff0c\u662f\u5426\u6267\u884c\u540c\u6b65\u64cd\u4f5c\nno-appendfsync-on-rewrite no\n# \u5f53\u76ee\u524daof\u6587\u4ef6\u5927\u5c0f\u8d85\u8fc7\u4e0a\u4e00\u6b21\u91cd\u5199\u65f6\u7684aof\u6587\u4ef6\u5927\u5c0f\u7684100%\u65f6\u4f1a\u518d\u6b21\u8fdb\u884c\u91cd\u5199\nauto-aof-rewrite-percentage 100\n# \u91cd\u5199\u524dAOF\u6587\u4ef6\u7684\u5927\u5c0f\u6700\u5c0f\u503c \u9ed8\u8ba4 64mb\nauto-aof-rewrite-min-size 64mb\nEOF\n"})}),"\n",(0,s.jsx)(n.h3,{id:"script-for-create-multiple",children:"script for create multiple"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",metastring:"script",children:"tee redis-cluster-config.sh <<- 'EOF'\nfor port in `seq 7001 7006`; do \\\n  mkdir -p ./redis-cluster/${port}/conf \\\n  && PORT=${port} envsubst < ./redis-cluster.tmpl > ./redis-cluster/${port}/conf/redis.conf \\\n  && mkdir -p ./redis-cluster/${port}/data; \\\ndone\n\nchmod 777 redis-cluster-config.sh\n./redis-cluster-config.sh\n"})}),"\n",(0,s.jsx)(n.h3,{id:"create-docker-compose-file",children:"create docker-compose file"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",metastring:"script",children:'tee docker-compose-redis-cluster.yml <<- \'EOF\'\n\nversion: \'3.7\'\n\nservices:\n  redis7001:\n    image: \'redis\'\n    container_name: redis7001\n    command:\n      ["redis-server", "/usr/local/etc/redis/redis.conf"]\n    volumes:\n      - ./redis-cluster/7001/conf/redis.conf:/usr/local/etc/redis/redis.conf\n      - ./redis-cluster/7001/data:/data\n    ports:\n      - "7001:7001"\n      - "17001:17001"\n    environment:\n      # \u8bbe\u7f6e\u65f6\u533a\u4e3a\u4e0a\u6d77\uff0c\u5426\u5219\u65f6\u95f4\u4f1a\u6709\u95ee\u9898\n      - TZ=Asia/Shanghai\n\n\n  redis7002:\n    image: \'redis\'\n    container_name: redis7002\n    command:\n      ["redis-server", "/usr/local/etc/redis/redis.conf"]\n    volumes:\n      - ./redis-cluster/7002/conf/redis.conf:/usr/local/etc/redis/redis.conf\n      - ./redis-cluster/7002/data:/data\n    ports:\n      - "7002:7002"\n      - "17002:17002"\n    environment:\n      # \u8bbe\u7f6e\u65f6\u533a\u4e3a\u4e0a\u6d77\uff0c\u5426\u5219\u65f6\u95f4\u4f1a\u6709\u95ee\u9898\n      - TZ=Asia/Shanghai\n\n\n  redis7003:\n    image: \'redis\'\n    container_name: redis7003\n    command:\n      ["redis-server", "/usr/local/etc/redis/redis.conf"]\n    volumes:\n      - ./redis-cluster/7003/conf/redis.conf:/usr/local/etc/redis/redis.conf\n      - ./redis-cluster/7003/data:/data\n    ports:\n      - "7003:7003"\n      - "17003:17003"\n    environment:\n      # \u8bbe\u7f6e\u65f6\u533a\u4e3a\u4e0a\u6d77\uff0c\u5426\u5219\u65f6\u95f4\u4f1a\u6709\u95ee\u9898\n      - TZ=Asia/Shanghai\n\n\n  redis7004:\n    image: \'redis\'\n    container_name: redis7004\n    command:\n      ["redis-server", "/usr/local/etc/redis/redis.conf"]\n    volumes:\n      - ./redis-cluster/7004/conf/redis.conf:/usr/local/etc/redis/redis.conf\n      - ./redis-cluster/7004/data:/data\n    ports:\n      - "7004:7004"\n      - "17004:17004"\n    environment:\n      # \u8bbe\u7f6e\u65f6\u533a\u4e3a\u4e0a\u6d77\uff0c\u5426\u5219\u65f6\u95f4\u4f1a\u6709\u95ee\u9898\n      - TZ=Asia/Shanghai\n\n\n  redis7005:\n    image: \'redis\'\n    container_name: redis7005\n    command:\n      ["redis-server", "/usr/local/etc/redis/redis.conf"]\n    volumes:\n      - ./redis-cluster/7005/conf/redis.conf:/usr/local/etc/redis/redis.conf\n      - ./redis-cluster/7005/data:/data\n    ports:\n      - "7005:7005"\n      - "17005:17005"\n    environment:\n      # \u8bbe\u7f6e\u65f6\u533a\u4e3a\u4e0a\u6d77\uff0c\u5426\u5219\u65f6\u95f4\u4f1a\u6709\u95ee\u9898\n      - TZ=Asia/Shanghai\n\n\n  redis7006:\n    image: \'redis\'\n    container_name: redis7006\n    command:\n      ["redis-server", "/usr/local/etc/redis/redis.conf"]\n    volumes:\n      - ./redis-cluster/7006/conf/redis.conf:/usr/local/etc/redis/redis.conf\n      - ./redis-cluster/7006/data:/data\n    ports:\n      - "7006:7006"\n      - "17006:17006"\n    environment:\n      # \u8bbe\u7f6e\u65f6\u533a\u4e3a\u4e0a\u6d77\uff0c\u5426\u5219\u65f6\u95f4\u4f1a\u6709\u95ee\u9898\n      - TZ=Asia/Shanghai\n'})}),"\n",(0,s.jsx)(n.h3,{id:"launch-redis-cluster",children:"launch redis cluster"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"docker-compose -f docker-compose-redis-cluster.yml up"})}),"\n",(0,s.jsx)(n.p,{children:"sotp to use this command down including Removing network rediscluster_default"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"docker-compose -f docker-compose-redis-cluster.yml down"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"docker-compose -f docker-compose-redis-cluster.yml stop"})}),"\n",(0,s.jsx)(n.h3,{id:"arrange-slots",children:"arrange slots"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"docker exec -it redis7001 redis-cli -p 7001 --cluster create 192.168.3.162:7001 192.168.3.162:7002 192.168.3.162:7003 192.168.3.162:7004 192.168.3.162:7005 192.168.3.162:7006 --cluster-replicas 1"})}),"\n",(0,s.jsx)(n.p,{children:"If slots not served\uff0chere some resolutions:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://blog.csdn.net/one312/article/details/104983140",children:"solve slots not served"})}),"\n",(0,s.jsx)(n.h3,{id:"connect-redis",children:"connect redis"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"docker exec -it redis7001 redis-cli -p 7001"})}),"\n",(0,s.jsx)(n.h2,{id:"jenkins-in-docker-compose",children:"jenkins in docker compose"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://adamtheautomator.com/jenkins-docker/#Running_Jenkins_in_Docker",children:"this article from here"})}),"\n",(0,s.jsx)(n.h3,{id:"docker-compose-configuration",children:"docker-compose configuration"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"tee docker-compose-jenkins.yml <<- 'EOF'\n# docker-compose.yml\nversion: '3.7'\nservices:\n  jenkins:\n    image: jenkins/jenkins:lts\n    privileged: true\n    user: root\n    ports:\n      - 8083:8080\n      - 50003:50000\n    container_name: my-jenkins-3\n    volumes:\n      - ~/data:/var/jenkins_home\n      - /var/run/docker.sock:/var/run/docker.sock\nEOF\n"})}),"\n",(0,s.jsx)(n.h3,{id:"run-the-docker-compose",children:"run the docker compose"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"docker-compose -f docker-compose-jenkins.yml up -d"})}),"\n",(0,s.jsx)(n.h3,{id:"get-the-initial-admin-pwd",children:"get the initial admin pwd"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"docker exec my-jenkins-3 cat /var/jenkins_home/secrets/initialAdminPassword"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u5982\u8f6c\u8f7d \u4e0d\u5f97\u5220\u9664\u539f\u6587\u5730\u5740\uff0c\u4e0d\u5f97\u5220\u9664\u6587\u4e2d\u5f15\u7528\u4ed6\u4eba\u535a\u5ba2\u7684\u5730\u5740\u3002\n",(0,s.jsx)(n.a,{href:"https://www.cnblogs.com/zhangrui153169/p/12835681.html",children:"\u53c2\u8003\u535a\u5ba2 redis cluster\u642d\u5efa"}),"\n",(0,s.jsx)(n.a,{href:"https://blog.csdn.net/one312/article/details/104983140",children:"\u53c2\u8003\u535a\u5ba2 slots not served"})]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"\u914d\u7f6eidea-project-docker",children:"\u914d\u7f6eidea project-docker"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yml",children:"version: '3.7'\nservices:\n  ideau:\n    image: 'jetbrains/projector-idea-u:2020.2-projector-v1.7.0'\n    container_name: ideau\n    volumes:\n      - /project:/home/projector-user\n      \n    ports:\n      - \"8887:8887\"\n    environment:\n      # \u8bbe\u7f6e\u65f6\u533a\u4e3a\u4e0a\u6d77\uff0c\u5426\u5219\u65f6\u95f4\u4f1a\u6709\u95ee\u9898\n      - TZ=Asia/Shanghai\n"})}),"\n",(0,s.jsx)(n.h3,{id:"mysql-docer-compose",children:"mysql docer-compose"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"mkdir -p /dockerlearn/docker-compose/mysql/{mydir,datadir,conf,source}\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:"tee my.cnf <<- 'EOF'\n[mysqld]\nskip_ssl\nuser=mysql\ndefault-storage-engine=INNODB\ncharacter-set-server=utf8\ncharacter-set-client-handshake=FALSE\ncollation-server=utf8_unicode_ci\ninit_connect='SET NAMES utf8'\n[client]\ndefault-character-set=utf8\n[mysql]\ndefault-character-set=utf8\nEOF\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yml",children:'tee docker-compose.yml <<- \'EOF\'\nversion: \'3\'\nservices:\n  mysql:\n    restart: always\n    image: mysql:latest\n    container_name: ai-dream\n    volumes:\n      - /dockerlearn/docker-compose/mysql/mydir:/mydir\n      - /dockerlearn/docker-compose/mysql/datadir:/var/lib/mysql\n      - /dockerlearn/docker-compose/mysql/conf/my.cnf:/etc/my.cnf\n      # \u6570\u636e\u5e93\u8fd8\u539f\u76ee\u5f55 \u53ef\u5c06\u9700\u8981\u8fd8\u539f\u7684sql\u6587\u4ef6\u653e\u5728\u8fd9\u91cc\n      - /apps/mysql/source:/docker-entrypoint-initdb.d\n    environment:\n      - "MYSQL_ROOT_PASSWORD=root"\n      - "MYSQL_DATABASE=ai-dream"\n      - "TZ=Asia/Shanghai"\n    ports:\n      # \u4f7f\u7528\u5bbf\u4e3b\u673a\u76843306\u7aef\u53e3\u6620\u5c04\u5230\u5bb9\u5668\u76843306\u7aef\u53e3\n      # \u5bbf\u4e3b\u673a\uff1a\u5bb9\u5668\n      - 3306:3306\nEOF\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://www.cnblogs.com/zengyu1234/p/16843338.html",children:"\u8fde\u63a5MySQL\u65f6\u62a5\u9519\uff1aPublic Key Retrieval is not allowed\u7684\u89e3\u51b3\u65b9\u6cd5"})}),"\n",(0,s.jsx)(n.p,{children:"\u89e3\u51b3\u65b9\u6cd5\uff1a\u8fde\u63a5\u8bbe\u7f6e\u2014\u2014\u9a71\u52a8\u5c5e\u6027\u2014\u2014allowPublicKeyRetrieval=false\uff08\u8fd9\u91cc\u7684\u8fd0\u8f93\u516c\u94a5\u68c0\u7d22\u662f\u9ed8\u8ba4\u5173\u95ed\u7684\uff0c\u9700\u8981\u628a\u5b83\u5f00\u542f\uff09\uff0c\u6539\u4e3aallowPublicKeyRetrieval=true\u5373\u53ef\u3002"}),"\n",(0,s.jsx)(n.admonition,{title:"\u534f\u8bae",type:"tip",children:(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u672c\u4f5c\u54c1\u4ee3\u7801\u90e8\u5206\u91c7\u7528 ",(0,s.jsx)(n.a,{href:"https://www.apache.org/licenses/LICENSE-2.0",children:"Apache 2.0\u534f\u8bae"}),"\u8fdb\u884c\u8bb8\u53ef\u3002\u9075\u5faa\u8bb8\u53ef\u7684\u524d\u63d0\u4e0b\uff0c\u4f60\u53ef\u4ee5\u81ea\u7531\u5730\u5bf9\u4ee3\u7801\u8fdb\u884c\u4fee\u6539\uff0c\u518d\u53d1\u5e03\uff0c\u53ef\u4ee5\u5c06\u4ee3\u7801\u7528\u4f5c\u5546\u4e1a\u7528\u9014\u3002\u4f46\u8981\u6c42\u4f60\uff1a"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\u7f72\u540d"}),"\uff1a\u5728\u539f\u6709\u4ee3\u7801\u548c\u884d\u751f\u4ee3\u7801\u4e2d\uff0c\u4fdd\u7559\u539f\u4f5c\u8005\u7f72\u540d\u53ca\u4ee3\u7801\u6765\u6e90\u4fe1\u606f\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\u4fdd\u7559\u8bb8\u53ef\u8bc1"}),"\uff1a\u5728\u539f\u6709\u4ee3\u7801\u548c\u884d\u751f\u4ee3\u7801\u4e2d\uff0c\u4fdd\u7559Apache 2.0\u534f\u8bae\u6587\u4ef6\u3002"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u672c\u4f5c\u54c1\u6587\u6863\u90e8\u5206\u91c7\u7528",(0,s.jsx)(n.a,{href:"http://creativecommons.org/licenses/by/4.0/",children:"\u77e5\u8bc6\u5171\u4eab\u7f72\u540d 4.0 \u56fd\u9645\u8bb8\u53ef\u534f\u8bae"}),"\u8fdb\u884c\u8bb8\u53ef\u3002 \u9075\u5faa\u8bb8\u53ef\u7684\u524d\u63d0\u4e0b\uff0c\u4f60\u53ef\u4ee5\u81ea\u7531\u5730\u5171\u4eab\uff0c\u5305\u62ec\u5728\u4efb\u4f55\u5a92\u4ecb\u4e0a\u4ee5\u4efb\u4f55\u5f62\u5f0f\u590d\u5236\u3001\u53d1\u884c\u672c\u4f5c\u54c1\uff0c\u4ea6\u53ef\u4ee5\u81ea\u7531\u5730\u6f14\u7ece\u3001\u4fee\u6539\u3001\u8f6c\u6362\u6216\u4ee5\u672c\u4f5c\u54c1\u4e3a\u57fa\u7840\u8fdb\u884c\u4e8c\u6b21\u521b\u4f5c\u3002\u4f46\u8981\u6c42\u4f60\uff1a"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\u7f72\u540d"}),"\uff1a\u5e94\u5728\u4f7f\u7528\u672c\u6587\u6863\u7684\u5168\u90e8\u6216\u90e8\u5206\u5185\u5bb9\u65f6\u5019\uff0c\u6ce8\u660e\u539f\u4f5c\u8005\u53ca\u6765\u6e90\u4fe1\u606f\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\u975e\u5546\u4e1a\u6027\u4f7f\u7528"}),"\uff1a\u4e0d\u5f97\u7528\u4e8e\u5546\u4e1a\u51fa\u7248\u6216\u5176\u4ed6\u4efb\u4f55\u5e26\u6709\u5546\u4e1a\u6027\u8d28\u7684\u884c\u4e3a\u3002\u5982\u9700\u5546\u4e1a\u4f7f\u7528\uff0c\u8bf7\u8054\u7cfb\u4f5c\u8005\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\u76f8\u540c\u65b9\u5f0f\u5171\u4eab\u7684\u6761\u4ef6"}),"\uff1a\u5728\u672c\u6587\u6863\u57fa\u7840\u4e0a\u6f14\u7ece\u3001\u4fee\u6539\u7684\u4f5c\u54c1\uff0c\u5e94\u5f53\u7ee7\u7eed\u4ee5\u77e5\u8bc6\u5171\u4eab\u7f72\u540d 4.0\u56fd\u9645\u8bb8\u53ef\u534f\u8bae\u8fdb\u884c\u8bb8\u53ef\u3002"]}),"\n"]}),"\n"]}),"\n"]})})]})}function m(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>d,a:()=>o});var s=r(7294);const c={},i=s.createContext(c);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);