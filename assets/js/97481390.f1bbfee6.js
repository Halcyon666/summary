"use strict";(self.webpackChunksummary=self.webpackChunksummary||[]).push([[4436],{6005:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"Container-Tech/docker/Docker-Command-and-Dockerfile","title":"\u57fa\u7840Docker\u547d\u4ee4","description":"\u955c\u50cf\u76f8\u5173\u547d\u4ee4","source":"@site/docs/07-Container-Tech/docker/Docker-Command-and-Dockerfile.mdx","sourceDirName":"07-Container-Tech/docker","slug":"/Container-Tech/docker/Docker-Command-and-Dockerfile","permalink":"/summary/Container-Tech/docker/Docker-Command-and-Dockerfile","draft":false,"unlisted":false,"editUrl":"https://github.com/Halcyon666/summary/edit/main/docs/07-Container-Tech/docker/Docker-Command-and-Dockerfile.mdx","tags":[],"version":"current","lastUpdatedAt":1736260505000,"sidebarPosition":2,"frontMatter":{"title":"\u57fa\u7840Docker\u547d\u4ee4","sidebar_label":"\u57fa\u7840Docker\u547d\u4ee4","sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"docker-\u914d\u7f6e\u56fd\u5185\u955c\u50cf\u5730\u5740","permalink":"/summary/Container-Tech/docker/docker-chinese register mirror address"},"next":{"title":"docker-compose\u4f7f\u7528","permalink":"/summary/Container-Tech/docker/docker-compose-configure-redis-cluster-jenkins"}}');var c=r(6070),d=r(5248);const s={title:"\u57fa\u7840Docker\u547d\u4ee4",sidebar_label:"\u57fa\u7840Docker\u547d\u4ee4",sidebar_position:2},i=void 0,o={},l=[{value:"\u955c\u50cf\u76f8\u5173\u547d\u4ee4",id:"\u955c\u50cf\u76f8\u5173\u547d\u4ee4",level:2},{value:"\u5bb9\u5668\u76f8\u5173\u7684\u547d\u4ee4",id:"\u5bb9\u5668\u76f8\u5173\u7684\u547d\u4ee4",level:2},{value:"Dockerfile",id:"dockerfile",level:2},{value:"Understand how CMD and ENTRYPOINT interact",id:"understand-how-cmd-and-entrypoint-interact",level:3},{value:"\u4e00\u4e2a\u7b80\u5355\u7684\u6848\u4f8b",id:"\u4e00\u4e2a\u7b80\u5355\u7684\u6848\u4f8b",level:3}];function a(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h2,{id:"\u955c\u50cf\u76f8\u5173\u547d\u4ee4",children:"\u955c\u50cf\u76f8\u5173\u547d\u4ee4"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-shell",metastring:"script",children:"# \u4e0b\u8f7d\u955c\u50cf\ndocker pull xxx\n# \u641c\u7d20\u955c\u50cf\ndocker search xxx\n# \u67e5\u770b\u5df2\u7ecf\u4e0b\u8f7d\u4e86\u54ea\u4e9b\u955c\u50cf\ndocker images\n# \u67e5\u770b\u5df2\u4e0b\u8f7d\u955c\u50cf\u7684id\ndocker images -q \n\n# \u5220\u9664\u955c\u50cf \ndocker rmi containerId/SOURCE_IMAGE[:TAG]\n#\u5220\u9664\u6240\u6709\u955c\u50cf\ndocker rmi $(docker images -q)\ndocker images -q | xargs docker rmi \n\n# \u5220\u9664tag\u4e3a<none>\u7684\u955c\u50cf\ndocker rmi | xargs docker images | awk '{if ($2 == \"<none>\" )print $3}' | xargs docker rmi -f\n"})}),"\n",(0,c.jsx)(n.h2,{id:"\u5bb9\u5668\u76f8\u5173\u7684\u547d\u4ee4",children:"\u5bb9\u5668\u76f8\u5173\u7684\u547d\u4ee4"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-shell",metastring:"script",children:"# \u8f7d\u5165\u4e00\u4e2a\u672c\u5730\u955c\u50cf \ndocker load -i tomcat-8.0-jre.tar\n# \u542f\u52a8\u4e00\u4e2a\u5bb9\u5668 \ndocker run -dp 8080:8080 tomcat-8.0-jre --name tomcat \n\ndocker run -p 8887:8887 -it  --name myideac jetbrains/projector-idea-c\ndocker start myideac\n\n# \u8fdb\u5165\u4ea4\u4e92\u6a21\u62df\ndocker run -it debian /bin/bash\n# \u67e5\u770b\u6b63\u5728\u8fd0\u884c\u7684\u5bb9\u5668\ndocker ps\n# \u67e5\u770b\u5168\u90e8\u5bb9\u5668\u7684id\ndocker ps -q\n# \u67e5\u770b\u5168\u90e8\u5bb9\u5668\ndocker ps -a \n#\u8fd0\u884c \u91cd\u542f \u505c\u6b62 \u6740\u6389\u5bb9\u5668\ndocker start/restart/stop/kill containerId/name\n"})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-shell",metastring:"script",children:"# \u5220\u9664\u5df2\u521b\u5efa\u7684\u5bb9\u5668\ndocker rm containerId/name:tag\ndocker rm $(docker ps -q)\n# \u505c\u6b62\u5bb9\u5668 \ndocker stop $(docker ps -a | grep \"Exited\" | awk '{print $1 }')    \n# \u5220\u9664\u5bb9\u5668  \ndocker rm $(docker ps -a | grep \"Exited\" | awk '{print $1 }')      \n# \u5220\u9664\u955c\u50cf    \ndocker rmi $(docker images | grep \"none\" | awk '{print $3}')    \n\n# \u67e5\u770b\u65e5\u5fd7\ndocker logs containerId/name\n# \u5b9e\u65f6\u663e\u793a\u65e5\u5fd7\ndocker logs -tf containerId/name\n# \u884c\u9996\u6dfb\u52a0\u65f6\u95f4 \u7684\u65e5\u5fd7\ndocker logs -tail  5 containerId/name\n\n# \u67e5\u770b\u5bb9\u5668\u8d44\u6e90\u60c5\u51b5\ndocker top containerId\n# \u8fdb\u5165\u5bb9\u5668\u7684\u4ea4\u4e92\u6a21\u5f0f\ndocker exec -it containerId bash\n"})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-shell",metastring:"script",children:'# \u590d\u5236 \u5bb9\u5668\u4e2d\u7684\u6587\u4ef6\u3001\u76ee\u5f55\u5230 \u5bbf\u4e3b\u673a\ndocker cp containerId:/root/test.txt /root/\n\n# \u590d\u5236 \u5bbf\u4e3b\u673a\u7684\u6587\u4ef6\u3001\u76ee\u5f55\u5230 \u5bb9\u5668\u4e2d\ndocker cp a.txt containerId:/root/\n\n# \u6253\u5305\u4e00\u4e2a\u955c\u50cf\ndocker commit -m "description xx" -a "author" containerId SOURCE_IMAGE[:TAG]\ndocker save redis:latest -o redis-cluster.tar\n\n# \u4e0a\u4f20\u5230docker hub\u4ed3\u5e93\ndocker tag redis:latest docker.io/whalefall541/redis:0.01\ndocker push docker.io/whalefall541/redis:0.01\n'})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-shell",metastring:"script",children:"# \u67e5\u770bdocker \u7f51\u7edc\u914d\u7f6e\ndocker network ls\n\n# \u521b\u5efa\u81ea\u5b9a\u4e49\u7f51\u6865\ndocker mynetwork create mynetwork\n# \u5c06\u5bb9\u5668\u6307\u5b9a\u5230 \u521b\u5efa\u7684\u7f51\u6865\u4e0a\ndocker run -dp 80:80 --network mynetwork redis\n# \u5220\u9664\u7f51\u6865\ndocker newnetwork rm mynetwork\n# \u67e5\u770b\u7f51\u6865\ndocker inpsect mynetwork\n"})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-shell",metastring:"script",children:"# \u6570\u636e\u5377\u6307\u5b9a\n# docker run -dp 80:80 tomcat -v /root/webapps:/root/webapps\ndocker run -dp 80:80 tomcat -v aa:/root/webapps\n# \u6570\u636e\u5377\u521b\u5efa\ndocker volume create volume_1\n# \u5220\u9664\u6240\u6709\u672a\u4f7f\u7528\u7684\u5377\ndocker volume prune \ndocker rm volume_1\n# \u67e5\u770b\u6570\u636e\u5377\ndocker inspect volume_1\n\n# \u91cd\u542fdocker \nsudo systemctl daemon-reload \nsudo systemctl restart docker\nsudo systemctl status docker\n"})}),"\n",(0,c.jsx)(n.h2,{id:"dockerfile",children:"Dockerfile"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"ADD"}),"\n",(0,c.jsx)(n.li,{children:"COPY"}),"\n",(0,c.jsx)(n.li,{children:"ENV"}),"\n",(0,c.jsx)(n.li,{children:"EXPOSE"}),"\n",(0,c.jsx)(n.li,{children:"FROM"}),"\n",(0,c.jsx)(n.li,{children:"LABEL"}),"\n",(0,c.jsx)(n.li,{children:"STOPSIGNAL"}),"\n",(0,c.jsx)(n.li,{children:"USER"}),"\n",(0,c.jsx)(n.li,{children:"VOLUME"}),"\n",(0,c.jsx)(n.li,{children:"WORKDIR"}),"\n",(0,c.jsx)(n.li,{children:"ONBUILD (when combined with one of the supported instructions above)"}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:["\u8be6\u7ec6\u6559\u7a0b\u8bf7\u770b\u5b98\u7f51 ",(0,c.jsx)(n.a,{href:"https://docs.docker.com/engine/reference/builder/",children:"Dockerfile"})]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.a,{href:"https://docs.docker.com/engine/reference/builder/#understand-how-cmd-and-entrypoint-interact",children:"how-cmd-and-entrypoint-interact"})}),"\n",(0,c.jsx)(n.h3,{id:"understand-how-cmd-and-entrypoint-interact",children:"Understand how CMD and ENTRYPOINT interact"}),"\n",(0,c.jsxs)(n.p,{children:["Both ",(0,c.jsx)(n.code,{children:"CMD"})," and ",(0,c.jsx)(n.code,{children:"ENTRYPOINT"})," instructions define what command gets executed when running a container.\nThere are few rules that describe their co-operation."]}),"\n",(0,c.jsxs)(n.ol,{children:["\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:["Dockerfile should specify at least one of ",(0,c.jsx)(n.code,{children:"CMD"})," or ",(0,c.jsx)(n.code,{children:"ENTRYPOINT"})," commands."]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"ENTRYPOINT"})," should be defined when using the container as an executable."]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"CMD"})," should be used as a way of defining default arguments for an ",(0,c.jsx)(n.code,{children:"ENTRYPOINT"})," command\nor for executing an ad-hoc command in a container."]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"CMD"})," will be overridden when running the container with alternative arguments."]}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:["The table below shows what command is executed for different ",(0,c.jsx)(n.code,{children:"ENTRYPOINT"})," / ",(0,c.jsx)(n.code,{children:"CMD"})," combinations:"]}),"\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{style:{textAlign:"left"}}),(0,c.jsx)(n.th,{style:{textAlign:"left"},children:"No ENTRYPOINT"}),(0,c.jsx)(n.th,{style:{textAlign:"left"},children:"ENTRYPOINT exec_entry p1_entry"}),(0,c.jsx)(n.th,{style:{textAlign:"left"},children:'ENTRYPOINT ["exec_entry", "p1_entry"]'})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{style:{textAlign:"left"},children:(0,c.jsx)(n.strong,{children:"No CMD"})}),(0,c.jsx)(n.td,{style:{textAlign:"left"},children:(0,c.jsx)(n.em,{children:"error, not allowed"})}),(0,c.jsx)(n.td,{style:{textAlign:"left"},children:"/bin/sh -c exec_entry p1_entry"}),(0,c.jsx)(n.td,{style:{textAlign:"left"},children:"exec_entry p1_entry"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{style:{textAlign:"left"},children:(0,c.jsx)(n.strong,{children:'CMD ["exec_cmd", "p1_cmd"]'})}),(0,c.jsx)(n.td,{style:{textAlign:"left"},children:"exec_cmd p1_cmd"}),(0,c.jsx)(n.td,{style:{textAlign:"left"},children:"/bin/sh -c exec_entry p1_entry"}),(0,c.jsx)(n.td,{style:{textAlign:"left"},children:"exec_entry p1_entry exec_cmd p1_cmd"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{style:{textAlign:"left"},children:(0,c.jsx)(n.strong,{children:'CMD ["p1_cmd", "p2_cmd"]'})}),(0,c.jsx)(n.td,{style:{textAlign:"left"},children:"p1_cmd p2_cmd"}),(0,c.jsx)(n.td,{style:{textAlign:"left"},children:"/bin/sh -c exec_entry p1_entry"}),(0,c.jsx)(n.td,{style:{textAlign:"left"},children:"exec_entry p1_entry p1_cmd p2_cmd"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{style:{textAlign:"left"},children:(0,c.jsx)(n.strong,{children:"CMD exec_cmd p1_cmd"})}),(0,c.jsx)(n.td,{style:{textAlign:"left"},children:"/bin/sh -c exec_cmd p1_cmd"}),(0,c.jsx)(n.td,{style:{textAlign:"left"},children:"/bin/sh -c exec_entry p1_entry"}),(0,c.jsx)(n.td,{style:{textAlign:"left"},children:"exec_entry p1_entry /bin/sh -c exec_cmd p1_cmd"})]})]})]}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"Note"})}),"\n",(0,c.jsxs)(n.p,{children:["If ",(0,c.jsx)(n.code,{children:"CMD"})," is defined from the base image, setting ",(0,c.jsx)(n.code,{children:"ENTRYPOINT"})," will\nreset ",(0,c.jsx)(n.code,{children:"CMD"})," to an empty value. In this scenario, ",(0,c.jsx)(n.code,{children:"CMD"})," must be defined in the\ncurrent image to have a value."]}),"\n",(0,c.jsx)(n.p,{children:"You can override the ENTRYPOINT setting using --entrypoint,\nbut this can only set the binary to exec (no sh -c will be used)."}),"\n"]}),"\n",(0,c.jsx)(n.h3,{id:"\u4e00\u4e2a\u7b80\u5355\u7684\u6848\u4f8b",children:"\u4e00\u4e2a\u7b80\u5355\u7684\u6848\u4f8b"}),"\n",(0,c.jsx)(n.p,{children:"\u62f7\u8d1dspringboot\u6587\u4ef6\u5230 \u5bb9\u5668\u5e76 \u6307\u5b9aspring\u914d\u7f6e\u6587\u4ef6\u8fd0\u884c"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-dockerfile",children:'FROM java\nENV JARNAME="demo-0.0.1-SNAPSHOT.jar"\nWORKDIR /root/app\nRUN /bin/bash -c "echo \'aaaa\' >> 1.txt"\nEXPOSE 80\nVOLUME ["/root/app"]\nENTRYPOINT ["java","-jar","demo-0.0.1-SNAPSHOT.jar", "-Dspring.config.location"]\nCMD ["application.yml"]\n\n#ENTRYPOINT ["echo","/root"]\n#CMD ["/root/app"]\n'})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-shell",metastring:"script",children:"docker build -t springboot:0.01 .\ndocker run -v /dockerlearn/dockerfilelearn:/root/app -p 80:80 --network rediscluster_default --rm springboot:0.01\n\ndocker run -p 8080:800 --rm learncase:latest\n"})}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"Note"})}),"\n",(0,c.jsxs)(n.ol,{children:["\n",(0,c.jsxs)(n.li,{children:["\u5982\u679c ",(0,c.jsx)(n.code,{children:'ENTRYPOINT ["exec_entry", "p1_entry"] '})," \u540e\u9762\u8fd8\u6709\n",(0,c.jsx)(n.code,{children:' CMD ["p1_cmd", "p2_cmd"]'})," \u90a3\u4e48CMD\u4e2d\u7684\u53c2\u6570\u5c06\u5168\u90e8\u8ffd\u52a0\u5230 ENTRYPOINT\n\u5f53",(0,c.jsx)(n.code,{children:"docker run"})," \u540e\u9762\u8ddf\u53c2\u6570\u65f6\u4f1a\u8986\u76d6\u6389CMD\u4e2d\u7684\u53c2\u6570"]}),"\n",(0,c.jsxs)(n.li,{children:["CMD ENTRYPOINT \u6570\u7ec4\u5f62\u5f0f \u90fd\u662fexec\u6a21\u5f0f\uff0c\u4e0d\u652f\u6301\u89e3\u6790\u672c\u5730\u53d8\u91cf\n\u5982\u679c\u60f3\u89e3\u6790 \u4f7f\u7528\u8fd9\u4e2a\u547d\u4ee4 ",(0,c.jsx)(n.code,{children:'ENTRYPOINT ["sh","-c","java -jar $JARNAME"]'})]}),"\n",(0,c.jsxs)(n.li,{children:["\u5982\u679c\u4f7f\u7528\u4e86",(0,c.jsx)(n.code,{children:'ENTRYPOINT ["sh","-c",..]'})," \u6216\u8005\u76f4\u63a5\u4f7f\u7528 ",(0,c.jsx)(n.code,{children:'ENTRYPOINT "echo Hello world"'}),"\n\u90a3\u4e48\u76f4\u63a5\u5c31\u65e0\u6cd5\u8986\u76d6\u53c2\u6570\u4e86"]}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsx)(n.p,{children:"\u53c2\u8003\u6587\u732e"}),"\n",(0,c.jsxs)(n.ol,{children:["\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.a,{href:"https://docs.docker.com/engine/reference/builder/",children:"Dockerfile"})}),"\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.a,{href:"https://docs.docker.com/engine/reference/builder/#understand-how-cmd-and-entrypoint-interact",children:"how-cmd-and-entrypoint-interact"})}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(a,{...e})}):a(e)}},5248:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>i});var t=r(758);const c={},d=t.createContext(c);function s(e){const n=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:s(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);