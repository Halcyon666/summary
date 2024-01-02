"use strict";(self.webpackChunksummary=self.webpackChunksummary||[]).push([[6201],{89:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var t=o(5893),r=o(1151);const i={title:"idea\u4f7f\u7528docker\u90e8\u7f72",sidebar_label:"idea\u4f7f\u7528docker\u90e8\u7f72",sidebar_position:4},s=void 0,a={id:"Container-Tech/docker/idea-\u90e8\u7f72",title:"idea\u4f7f\u7528docker\u90e8\u7f72",description:"linux\u4e2ddocker\u914d\u7f6e",source:"@site/docs/07-Container-Tech/docker/idea-\u90e8\u7f72.mdx",sourceDirName:"07-Container-Tech/docker",slug:"/Container-Tech/docker/idea-\u90e8\u7f72",permalink:"/Container-Tech/docker/idea-\u90e8\u7f72",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"idea\u4f7f\u7528docker\u90e8\u7f72",sidebar_label:"idea\u4f7f\u7528docker\u90e8\u7f72",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"docker-compose\u4f7f\u7528",permalink:"/Container-Tech/docker/docker-compose-configure-redis-cluster-jenkins"},next:{title:"Centos8 \u5b89\u88c5K8S",permalink:"/Container-Tech/kubernetes/CentOS8\u5b89\u88c5K8S"}},c={},l=[{value:"linux\u4e2ddocker\u914d\u7f6e",id:"linux\u4e2ddocker\u914d\u7f6e",level:3},{value:"IDEA \u914d\u7f6e\u622a\u56fe",id:"idea-\u914d\u7f6e\u622a\u56fe",level:3},{value:"DockerFile",id:"dockerfile",level:3},{value:"dockerfile.run.xml",id:"dockerfilerunxml",level:3},{value:"idea\u4f7f\u7528docker-compose\u90e8\u7f72",id:"idea\u4f7f\u7528docker-compose\u90e8\u7f72",level:2},{value:"docker-compose.yml",id:"docker-composeyml",level:3},{value:"\u4e0b\u8f7ddocker-compose",id:"\u4e0b\u8f7ddocker-compose",level:3},{value:"\u8bbf\u95ee",id:"\u8bbf\u95ee",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",hr:"hr",img:"img",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h3,{id:"linux\u4e2ddocker\u914d\u7f6e",children:"linux\u4e2ddocker\u914d\u7f6e"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"systemctl disable firewalld --now\nsetenforce 0\nsed  -i -r 's/SELINUX=[ep].*/SELINUX=disabled/g' /etc/selinux/config\nswapoff -a\nsed -i '/swap/s/^\\(.*\\)$/#\\1/g' /etc/fstab\n\ncat <<EOF > /usr/lib/systemd/system/docker.service\n[Unit]\nDescription=Docker Application Container Engine\nDocumentation=https://docs.docker.com\nAfter=network-online.target firewalld.service containerd.service\nWants=network-online.target\nRequires=docker.socket containerd.service\n\n[Service]\nType=notify\n# the default is not to use systemd for cgroups because the delegate issues still\n# exists and systemd currently does not support the cgroup feature set required\n# for containers run by docker\nExecStart=/usr/bin/dockerd -H fd:// -H tcp://0.0.0.0:2375 -H unix://var/run/docker.sock --containerd=/run/containerd/containerd.sock\nExecReload=/bin/kill -s HUP $MAINPID\nTimeoutSec=0\nRestartSec=2\nRestart=always\n\n# Note that StartLimit* options were moved from \"Service\" to \"Unit\" in systemd 229.\n# Both the old, and new location are accepted by systemd 229 and up, so using the old location\n# to make them work for either version of systemd.\nStartLimitBurst=3\n\n# Note that StartLimitInterval was renamed to StartLimitIntervalSec in systemd 230.\n# Both the old, and new name are accepted by systemd 230 and up, so using the old name to make\n# this option work for either version of systemd.\nStartLimitInterval=60s\n\n# Having non-zero Limit*s causes performance problems due to accounting overhead\n# in the kernel. We recommend using cgroups to do container-local accounting.\nLimitNOFILE=infinity\nLimitNPROC=infinity\nLimitCORE=infinity\n\n# Comment TasksMax if your systemd version does not support it.\n# Only systemd 226 and above support this option.\nTasksMax=infinity\n\n# set delegate yes so that systemd does not reset the cgroups of docker containers\nDelegate=yes\n\n# kill only the docker process, not all processes in the cgroup\nKillMode=process\nOOMScoreAdjust=-500\n\n[Install]\nWantedBy=multi-user.target\nEOF\n"})}),"\n",(0,t.jsx)(n.h3,{id:"idea-\u914d\u7f6e\u622a\u56fe",children:"IDEA \u914d\u7f6e\u622a\u56fe"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://s2.loli.net/2023/07/15/zYjAySuVTmbNCG1.png",alt:"image-20230519011746636"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://s2.loli.net/2023/07/15/MuEtIrFQCgDplvK.png",alt:"image-20230519011658616"})}),"\n",(0,t.jsx)(n.h3,{id:"dockerfile",children:"DockerFile"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-dockerfile",children:'FROM openjdk:8u342-jdk\n\nWORKDIR /deployment\n\n# \u5c06\u5f53\u524d\u76ee\u5f55\u4e0b\u7684jar\u5305\u590d\u5236\u5230docker\u5bb9\u5668\u7684/\u76ee\u5f55\u4e0b\nADD ./target/learncases-0.0.1-SNAPSHOT.jar app.jar\nRUN jar -xvf app.jar && rm -f app.jar\n# \u58f0\u660e\u670d\u52a1\u8fd0\u884c\u57288080\u7aef\u53e3\nEXPOSE 8080\n# \u6307\u5b9adocker\u5bb9\u5668\u542f\u52a8\u65f6\u8fd0\u884cjar\u5305\nENTRYPOINT ["java","-cp","/deployment","-DSpring.profiles.active=default","org.springframework.boot.loader.JarLauncher"]\n\n'})}),"\n",(0,t.jsx)(n.h3,{id:"dockerfilerunxml",children:"dockerfile.run.xml"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-xml",children:'\n<component name="ProjectRunConfigurationManager">\n  <configuration default="false" name="dockerfile" type="docker-deploy" factoryName="dockerfile" editBeforeRun="true" singleton="false" server-name="Docker">\n    <deployment type="dockerfile">\n      <settings>\n        <option name="imageTag" value="learncase" />\n        <option name="containerName" value="learncase" />\n        <option name="portBindings">\n          <list>\n            <DockerPortBindingImpl>\n              <option name="containerPort" value="8080" />\n              <option name="hostIp" value="192.168.3.163" />\n              <option name="hostPort" value="8080" />\n            </DockerPortBindingImpl>\n          </list>\n        </option>\n        <option name="sourceFilePath" value="dockerfile" />\n      </settings>\n    </deployment>\n    <method v="2">\n      <option name="Maven.BeforeRunTask" enabled="true" file="$PROJECT_DIR$/pom.xml" goal="clean package" />\n    </method>\n  </configuration>\n</component>\n'})}),"\n",(0,t.jsx)(n.h2,{id:"idea\u4f7f\u7528docker-compose\u90e8\u7f72",children:"idea\u4f7f\u7528docker-compose\u90e8\u7f72"}),"\n",(0,t.jsx)(n.h3,{id:"docker-composeyml",children:"docker-compose.yml"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yml",children:'version: \'2\'\nservices:\n  learn-cases1:\n    container_name: learn-cases1\n    build:\n      context: .\n      dockerfile: Dockerfile\n    image: learncase:latest\n    ports:\n      - "8080:8080"\n  learn-cases2:\n    container_name: learn-cases2\n    build:\n      context: .\n      dockerfile: Dockerfile\n    image: learncase:latest\n# \u5916\u90e8\u7aef\u53e38081 \u5bb9\u5668\u7aef\u53e38080\n    ports:\n      - "8081:8080"\n  learn-cases3:\n    container_name: learn-cases3\n    build:\n      context: .\n      dockerfile: Dockerfile\n    image: learncase:latest\n    ports:\n      - "8082:8080"\n\n'})}),"\n",(0,t.jsx)(n.h3,{id:"\u4e0b\u8f7ddocker-compose",children:"\u4e0b\u8f7ddocker-compose"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/docker/compose/releases",children:"\u4e0b\u8f7d\u5730\u5740"})}),"\n",(0,t.jsx)(n.p,{children:"\u914d\u7f6eDocker Compose executable \u5373\u53ef"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://s2.loli.net/2023/07/15/m1OAeNiE9ZsCqGX.png",alt:"image-20230519222216138"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://s2.loli.net/2023/07/15/BpjWZl64f2wHQyJ.png",alt:"image-20230520001747099"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"\u6ce8\u610f\u90e8\u7f72\u65f6\u76f4\u63a5run \u53ef\u80fd\u6ca1\u6709\u62c9\u8d77\u4e09\u4e2acontaner,\u8fd9\u4e2a\u65f6\u5019\u53ef\u4ee5\u5148down \u7136\u540e\u518ddeploy"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u8bbf\u95ee",children:"\u8bbf\u95ee"}),"\n",(0,t.jsx)(n.p,{children:"192.168.3.163:8080"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://s2.loli.net/2023/07/15/azqiL7VdEQXxYtC.png",alt:"image-20230705233312670"})})]})}function m(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1151:(e,n,o)=>{o.d(n,{Z:()=>a,a:()=>s});var t=o(7294);const r={},i=t.createContext(r);function s(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);