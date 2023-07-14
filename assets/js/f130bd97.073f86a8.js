"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8209],{3905:(e,n,r)=>{r.d(n,{Zo:()=>d,kt:()=>k});var t=r(7294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function s(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?s(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},s=Object.keys(e);for(t=0;t<s.length;t++)r=s[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)r=s[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=t.createContext({}),l=function(e){var n=t.useContext(a),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},d=function(e){var n=l(e.components);return t.createElement(a.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,s=e.originalType,a=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=l(r),m=o,k=p["".concat(a,".").concat(m)]||p[m]||u[m]||s;return r?t.createElement(k,i(i({ref:n},d),{},{components:r})):t.createElement(k,i({ref:n},d))}));function k(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var s=r.length,i=new Array(s);i[0]=m;var c={};for(var a in n)hasOwnProperty.call(n,a)&&(c[a]=n[a]);c.originalType=e,c[p]="string"==typeof e?e:o,i[1]=c;for(var l=2;l<s;l++)i[l]=r[l];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1818:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var t=r(7462),o=(r(7294),r(3905));const s={title:"Docker Compose",hidemeta:!0},i=void 0,c={unversionedId:"Container-Tech/docker/docker-compose\u914d\u7f6eredis-cluster-jenkins",id:"Container-Tech/docker/docker-compose\u914d\u7f6eredis-cluster-jenkins",title:"Docker Compose",description:"set up redis cluster",source:"@site/docs/Container-Tech/docker/docker-compose\u914d\u7f6eredis-cluster-jenkins.md",sourceDirName:"Container-Tech/docker",slug:"/Container-Tech/docker/docker-compose\u914d\u7f6eredis-cluster-jenkins",permalink:"/summary/docs/Container-Tech/docker/docker-compose\u914d\u7f6eredis-cluster-jenkins",draft:!1,editUrl:"https://github.com/Halcyon666/summary/docs/Container-Tech/docker/docker-compose\u914d\u7f6eredis-cluster-jenkins.md",tags:[],version:"current",frontMatter:{title:"Docker Compose",hidemeta:!0},sidebar:"tutorialSidebar",previous:{title:"Docker-Command-and-Dockerfile",permalink:"/summary/docs/Container-Tech/docker/Docker-Command-and-Dockerfile"},next:{title:"docker \u914d\u7f6e\u56fd\u5185\u955c\u50cf\u5730\u5740",permalink:"/summary/docs/Container-Tech/docker/docker-\u914d\u7f6e\u56fd\u5185\u955c\u50cf\u5730\u5740"}},a={},l=[{value:"set up redis cluster",id:"set-up-redis-cluster",level:2},{value:"write config file for redis",id:"write-config-file-for-redis",level:3},{value:"script for create multiple",id:"script-for-create-multiple",level:3},{value:"create docker-compose file",id:"create-docker-compose-file",level:3},{value:"launch redis cluster",id:"launch-redis-cluster",level:3},{value:"arrange slots",id:"arrange-slots",level:3},{value:"connect redis",id:"connect-redis",level:3},{value:"jenkins in docker compose",id:"jenkins-in-docker-compose",level:2},{value:"docker-compose configuration",id:"docker-compose-configuration",level:3},{value:"run the docker compose",id:"run-the-docker-compose",level:3},{value:"get the initial admin pwd",id:"get-the-initial-admin-pwd",level:3},{value:"\u914d\u7f6eidea project-docker",id:"\u914d\u7f6eidea-project-docker",level:3}],d={toc:l},p="wrapper";function u(e){let{components:n,...r}=e;return(0,o.kt)(p,(0,t.Z)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"set-up-redis-cluster"},"set up redis cluster"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.cnblogs.com/zhangrui153169/p/12835681.html"},"reference article from here")),(0,o.kt)("h3",{id:"write-config-file-for-redis"},"write config file for redis"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"cd /docker/redis\n\ntee redis-cluster.tmpl <<- 'EOF'\n# redis\u7aef\u53e3\nport ${PORT}\n# \u5173\u95ed\u4fdd\u62a4\u6a21\u5f0f\nprotected-mode no\n# \u5f00\u542f\u96c6\u7fa4\ncluster-enabled yes\n# \u96c6\u7fa4\u8282\u70b9\u914d\u7f6e\ncluster-config-file nodes.conf\n# \u8d85\u65f6\ncluster-node-timeout 5000\n# \u96c6\u7fa4\u8282\u70b9IP host\u6a21\u5f0f\u4e3a\u5bbf\u4e3b\u673aIP\ncluster-announce-ip 192.168.3.162\n# \u96c6\u7fa4\u8282\u70b9\u7aef\u53e3 7001 - 7006\ncluster-announce-port ${PORT}\ncluster-announce-bus-port 1${PORT}\n# \u5f00\u542f appendonly \u5907\u4efd\u6a21\u5f0f\nappendonly yes\n# \u6bcf\u79d2\u949f\u5907\u4efd\nappendfsync everysec\n# \u5bf9aof\u6587\u4ef6\u8fdb\u884c\u538b\u7f29\u65f6\uff0c\u662f\u5426\u6267\u884c\u540c\u6b65\u64cd\u4f5c\nno-appendfsync-on-rewrite no\n# \u5f53\u76ee\u524daof\u6587\u4ef6\u5927\u5c0f\u8d85\u8fc7\u4e0a\u4e00\u6b21\u91cd\u5199\u65f6\u7684aof\u6587\u4ef6\u5927\u5c0f\u7684100%\u65f6\u4f1a\u518d\u6b21\u8fdb\u884c\u91cd\u5199\nauto-aof-rewrite-percentage 100\n# \u91cd\u5199\u524dAOF\u6587\u4ef6\u7684\u5927\u5c0f\u6700\u5c0f\u503c \u9ed8\u8ba4 64mb\nauto-aof-rewrite-min-size 64mb\nEOF\n")),(0,o.kt)("h3",{id:"script-for-create-multiple"},"script for create multiple"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"tee redis-cluster-config.sh <<- 'EOF'\nfor port in `seq 7001 7006`; do \\\n  mkdir -p ./redis-cluster/${port}/conf \\\n  && PORT=${port} envsubst < ./redis-cluster.tmpl > ./redis-cluster/${port}/conf/redis.conf \\\n  && mkdir -p ./redis-cluster/${port}/data; \\\ndone\n\nchmod 777 redis-cluster-config.sh\n./redis-cluster-config.sh\n")),(0,o.kt)("h3",{id:"create-docker-compose-file"},"create docker-compose file"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},'tee docker-compose-redis-cluster.yml <<- \'EOF\'\n\nversion: \'3.7\'\n\nservices:\n  redis7001:\n    image: \'redis\'\n    container_name: redis7001\n    command:\n      ["redis-server", "/usr/local/etc/redis/redis.conf"]\n    volumes:\n      - ./redis-cluster/7001/conf/redis.conf:/usr/local/etc/redis/redis.conf\n      - ./redis-cluster/7001/data:/data\n    ports:\n      - "7001:7001"\n      - "17001:17001"\n    environment:\n      # \u8bbe\u7f6e\u65f6\u533a\u4e3a\u4e0a\u6d77\uff0c\u5426\u5219\u65f6\u95f4\u4f1a\u6709\u95ee\u9898\n      - TZ=Asia/Shanghai\n\n\n  redis7002:\n    image: \'redis\'\n    container_name: redis7002\n    command:\n      ["redis-server", "/usr/local/etc/redis/redis.conf"]\n    volumes:\n      - ./redis-cluster/7002/conf/redis.conf:/usr/local/etc/redis/redis.conf\n      - ./redis-cluster/7002/data:/data\n    ports:\n      - "7002:7002"\n      - "17002:17002"\n    environment:\n      # \u8bbe\u7f6e\u65f6\u533a\u4e3a\u4e0a\u6d77\uff0c\u5426\u5219\u65f6\u95f4\u4f1a\u6709\u95ee\u9898\n      - TZ=Asia/Shanghai\n\n\n  redis7003:\n    image: \'redis\'\n    container_name: redis7003\n    command:\n      ["redis-server", "/usr/local/etc/redis/redis.conf"]\n    volumes:\n      - ./redis-cluster/7003/conf/redis.conf:/usr/local/etc/redis/redis.conf\n      - ./redis-cluster/7003/data:/data\n    ports:\n      - "7003:7003"\n      - "17003:17003"\n    environment:\n      # \u8bbe\u7f6e\u65f6\u533a\u4e3a\u4e0a\u6d77\uff0c\u5426\u5219\u65f6\u95f4\u4f1a\u6709\u95ee\u9898\n      - TZ=Asia/Shanghai\n\n\n  redis7004:\n    image: \'redis\'\n    container_name: redis7004\n    command:\n      ["redis-server", "/usr/local/etc/redis/redis.conf"]\n    volumes:\n      - ./redis-cluster/7004/conf/redis.conf:/usr/local/etc/redis/redis.conf\n      - ./redis-cluster/7004/data:/data\n    ports:\n      - "7004:7004"\n      - "17004:17004"\n    environment:\n      # \u8bbe\u7f6e\u65f6\u533a\u4e3a\u4e0a\u6d77\uff0c\u5426\u5219\u65f6\u95f4\u4f1a\u6709\u95ee\u9898\n      - TZ=Asia/Shanghai\n\n\n  redis7005:\n    image: \'redis\'\n    container_name: redis7005\n    command:\n      ["redis-server", "/usr/local/etc/redis/redis.conf"]\n    volumes:\n      - ./redis-cluster/7005/conf/redis.conf:/usr/local/etc/redis/redis.conf\n      - ./redis-cluster/7005/data:/data\n    ports:\n      - "7005:7005"\n      - "17005:17005"\n    environment:\n      # \u8bbe\u7f6e\u65f6\u533a\u4e3a\u4e0a\u6d77\uff0c\u5426\u5219\u65f6\u95f4\u4f1a\u6709\u95ee\u9898\n      - TZ=Asia/Shanghai\n\n\n  redis7006:\n    image: \'redis\'\n    container_name: redis7006\n    command:\n      ["redis-server", "/usr/local/etc/redis/redis.conf"]\n    volumes:\n      - ./redis-cluster/7006/conf/redis.conf:/usr/local/etc/redis/redis.conf\n      - ./redis-cluster/7006/data:/data\n    ports:\n      - "7006:7006"\n      - "17006:17006"\n    environment:\n      # \u8bbe\u7f6e\u65f6\u533a\u4e3a\u4e0a\u6d77\uff0c\u5426\u5219\u65f6\u95f4\u4f1a\u6709\u95ee\u9898\n      - TZ=Asia/Shanghai\n')),(0,o.kt)("h3",{id:"launch-redis-cluster"},"launch redis cluster"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose -f docker-compose-redis-cluster.yml up")),(0,o.kt)("p",null,"sotp to use this command down including Removing network rediscluster_default"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose -f docker-compose-redis-cluster.yml down")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose -f docker-compose-redis-cluster.yml stop")),(0,o.kt)("h3",{id:"arrange-slots"},"arrange slots"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"docker exec -it redis7001 redis-cli -p 7001 --cluster create 192.168.3.162:7001 192.168.3.162:7002 192.168.3.162:7003 192.168.3.162:7004 192.168.3.162:7005 192.168.3.162:7006 --cluster-replicas 1")),(0,o.kt)("p",null,"If slots not served\uff0chere some resolutions:"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://blog.csdn.net/one312/article/details/104983140"},"solve slots not served")),(0,o.kt)("h3",{id:"connect-redis"},"connect redis"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"docker exec -it redis7001 redis-cli -p 7001")),(0,o.kt)("h2",{id:"jenkins-in-docker-compose"},"jenkins in docker compose"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://adamtheautomator.com/jenkins-docker/#Running_Jenkins_in_Docker"},"this article from here")),(0,o.kt)("h3",{id:"docker-compose-configuration"},"docker-compose configuration"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"tee docker-compose-jenkins.yml <<- 'EOF'\n# docker-compose.yml\nversion: '3.7'\nservices:\n  jenkins:\n    image: jenkins/jenkins:lts\n    privileged: true\n    user: root\n    ports:\n      - 8083:8080\n      - 50003:50000\n    container_name: my-jenkins-3\n    volumes:\n      - ~/data:/var/jenkins_home\n      - /var/run/docker.sock:/var/run/docker.sock\nEOF\n")),(0,o.kt)("h3",{id:"run-the-docker-compose"},"run the docker compose"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose -f docker-compose-jenkins.yml up -d")),(0,o.kt)("h3",{id:"get-the-initial-admin-pwd"},"get the initial admin pwd"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"docker exec my-jenkins-3 cat /var/jenkins_home/secrets/initialAdminPassword")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u5982\u8f6c\u8f7d \u4e0d\u5f97\u5220\u9664\u539f\u6587\u5730\u5740\uff0c\u4e0d\u5f97\u5220\u9664\u6587\u4e2d\u5f15\u7528\u4ed6\u4eba\u535a\u5ba2\u7684\u5730\u5740\u3002\n",(0,o.kt)("a",{parentName:"p",href:"https://www.cnblogs.com/zhangrui153169/p/12835681.html"},"\u53c2\u8003\u535a\u5ba2 redis cluster\u642d\u5efa"),"\n",(0,o.kt)("a",{parentName:"p",href:"https://blog.csdn.net/one312/article/details/104983140"},"\u53c2\u8003\u535a\u5ba2 slots not served"))),(0,o.kt)("h3",{id:"\u914d\u7f6eidea-project-docker"},"\u914d\u7f6eidea project-docker"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml"},"version: '3.7'\nservices:\n  ideau:\n    image: 'jetbrains/projector-idea-u:2020.2-projector-v1.7.0'\n    container_name: ideau\n    volumes:\n      - /project:/home/projector-user\n      \n    ports:\n      - \"8887:8887\"\n    environment:\n      # \u8bbe\u7f6e\u65f6\u533a\u4e3a\u4e0a\u6d77\uff0c\u5426\u5219\u65f6\u95f4\u4f1a\u6709\u95ee\u9898\n      - TZ=Asia/Shanghai\n")),(0,o.kt)("blockquote",null,(0,o.kt)("font",{color:"red"},"\u8f6c\u8f7d\u8bf7\u6ce8\u660e [\u539f\u6587\u5730\u5740](https://www.cnblogs.com/whalefall541/p/15309122.html)")))}u.isMDXComponent=!0}}]);