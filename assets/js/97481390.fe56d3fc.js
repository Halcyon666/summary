"use strict";(self.webpackChunksummary=self.webpackChunksummary||[]).push([[6754],{8266:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>h,frontMatter:()=>d,metadata:()=>i,toc:()=>l});var t=r(5893),c=r(1151);const d={title:"\u57fa\u7840Docker\u547d\u4ee4",sidebar_label:"\u57fa\u7840Docker\u547d\u4ee4",sidebar_position:2},s=void 0,i={id:"Container-Tech/docker/Docker-Command-and-Dockerfile",title:"\u57fa\u7840Docker\u547d\u4ee4",description:"\u955c\u50cf\u76f8\u5173\u547d\u4ee4",source:"@site/docs/07-Container-Tech/docker/Docker-Command-and-Dockerfile.mdx",sourceDirName:"07-Container-Tech/docker",slug:"/Container-Tech/docker/Docker-Command-and-Dockerfile",permalink:"/summary/Container-Tech/docker/Docker-Command-and-Dockerfile",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"\u57fa\u7840Docker\u547d\u4ee4",sidebar_label:"\u57fa\u7840Docker\u547d\u4ee4",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"docker-\u914d\u7f6e\u56fd\u5185\u955c\u50cf\u5730\u5740",permalink:"/summary/Container-Tech/docker/docker-\u914d\u7f6e\u56fd\u5185\u955c\u50cf\u5730\u5740"},next:{title:"docker-compose\u4f7f\u7528",permalink:"/summary/Container-Tech/docker/docker-compose-configure-redis-cluster-jenkins"}},o={},l=[{value:"\u955c\u50cf\u76f8\u5173\u547d\u4ee4",id:"\u955c\u50cf\u76f8\u5173\u547d\u4ee4",level:2},{value:"\u5bb9\u5668\u76f8\u5173\u7684\u547d\u4ee4",id:"\u5bb9\u5668\u76f8\u5173\u7684\u547d\u4ee4",level:2},{value:"Dockerfile",id:"dockerfile",level:2},{value:"Understand how CMD and ENTRYPOINT interact",id:"understand-how-cmd-and-entrypoint-interact",level:3},{value:"\u4e00\u4e2a\u7b80\u5355\u7684\u6848\u4f8b",id:"\u4e00\u4e2a\u7b80\u5355\u7684\u6848\u4f8b",level:3}];function a(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"\u955c\u50cf\u76f8\u5173\u547d\u4ee4",children:"\u955c\u50cf\u76f8\u5173\u547d\u4ee4"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",metastring:"script",children:"# \u4e0b\u8f7d\u955c\u50cf\ndocker pull xxx\n# \u641c\u7d20\u955c\u50cf\ndocker search xxx\n# \u67e5\u770b\u5df2\u7ecf\u4e0b\u8f7d\u4e86\u54ea\u4e9b\u955c\u50cf\ndocker images\n# \u67e5\u770b\u5df2\u4e0b\u8f7d\u955c\u50cf\u7684id\ndocker images -q \n\n# \u5220\u9664\u955c\u50cf \ndocker rmi containerId/SOURCE_IMAGE[:TAG]\n#\u5220\u9664\u6240\u6709\u955c\u50cf\ndocker rmi $(docker images -q)\ndocker images -q | xargs docker rmi \n\n# \u5220\u9664tag\u4e3a<none>\u7684\u955c\u50cf\ndocker rmi | xargs docker images | awk '{if ($2 == \"<none>\" )print $3}' | xargs docker rmi -f\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u5bb9\u5668\u76f8\u5173\u7684\u547d\u4ee4",children:"\u5bb9\u5668\u76f8\u5173\u7684\u547d\u4ee4"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",metastring:"script",children:"# \u8f7d\u5165\u4e00\u4e2a\u672c\u5730\u955c\u50cf \ndocker load -i tomcat-8.0-jre.tar\n# \u542f\u52a8\u4e00\u4e2a\u5bb9\u5668 \ndocker run -dp 8080:8080 tomcat-8.0-jre --name tomcat \n\ndocker run -p 8887:8887 -it  --name myideac jetbrains/projector-idea-c\ndocker start myideac\n\n# \u8fdb\u5165\u4ea4\u4e92\u6a21\u62df\ndocker run -it debian /bin/bash\n# \u67e5\u770b\u6b63\u5728\u8fd0\u884c\u7684\u5bb9\u5668\ndocker ps\n# \u67e5\u770b\u5168\u90e8\u5bb9\u5668\u7684id\ndocker ps -q\n# \u67e5\u770b\u5168\u90e8\u5bb9\u5668\ndocker ps -a \n#\u8fd0\u884c \u91cd\u542f \u505c\u6b62 \u6740\u6389\u5bb9\u5668\ndocker start/restart/stop/kill containerId/name\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",metastring:"script",children:"# \u5220\u9664\u5df2\u521b\u5efa\u7684\u5bb9\u5668\ndocker rm containerId/name:tag\ndocker rm $(docker ps -q)\n# \u505c\u6b62\u5bb9\u5668 \ndocker stop $(docker ps -a | grep \"Exited\" | awk '{print $1 }')    \n# \u5220\u9664\u5bb9\u5668  \ndocker rm $(docker ps -a | grep \"Exited\" | awk '{print $1 }')      \n# \u5220\u9664\u955c\u50cf    \ndocker rmi $(docker images | grep \"none\" | awk '{print $3}')    \n\n# \u67e5\u770b\u65e5\u5fd7\ndocker logs containerId/name\n# \u5b9e\u65f6\u663e\u793a\u65e5\u5fd7\ndocker logs -tf containerId/name\n# \u884c\u9996\u6dfb\u52a0\u65f6\u95f4 \u7684\u65e5\u5fd7\ndocker logs -tail  5 containerId/name\n\n# \u67e5\u770b\u5bb9\u5668\u8d44\u6e90\u60c5\u51b5\ndocker top containerId\n# \u8fdb\u5165\u5bb9\u5668\u7684\u4ea4\u4e92\u6a21\u5f0f\ndocker exec -it containerId bash\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",metastring:"script",children:'# \u590d\u5236 \u5bb9\u5668\u4e2d\u7684\u6587\u4ef6\u3001\u76ee\u5f55\u5230 \u5bbf\u4e3b\u673a\ndocker cp containerId:/root/test.txt /root/\n\n# \u590d\u5236 \u5bbf\u4e3b\u673a\u7684\u6587\u4ef6\u3001\u76ee\u5f55\u5230 \u5bb9\u5668\u4e2d\ndocker cp a.txt containerId:/root/\n\n# \u6253\u5305\u4e00\u4e2a\u955c\u50cf\ndocker commit -m "description xx" -a "author" containerId SOURCE_IMAGE[:TAG]\ndocker save redis:latest -o redis-cluster.tar\n\n# \u4e0a\u4f20\u5230docker hub\u4ed3\u5e93\ndocker tag redis:latest docker.io/whalefall541/redis:0.01\ndocker push docker.io/whalefall541/redis:0.01\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",metastring:"script",children:"# \u67e5\u770bdocker \u7f51\u7edc\u914d\u7f6e\ndocker network ls\n\n# \u521b\u5efa\u81ea\u5b9a\u4e49\u7f51\u6865\ndocker mynetwork create mynetwork\n# \u5c06\u5bb9\u5668\u6307\u5b9a\u5230 \u521b\u5efa\u7684\u7f51\u6865\u4e0a\ndocker run -dp 80:80 --network mynetwork redis\n# \u5220\u9664\u7f51\u6865\ndocker newnetwork rm mynetwork\n# \u67e5\u770b\u7f51\u6865\ndocker inpsect mynetwork\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",metastring:"script",children:"# \u6570\u636e\u5377\u6307\u5b9a\n# docker run -dp 80:80 tomcat -v /root/webapps:/root/webapps\ndocker run -dp 80:80 tomcat -v aa:/root/webapps\n# \u6570\u636e\u5377\u521b\u5efa\ndocker volume create volume_1\n# \u5220\u9664\u6240\u6709\u672a\u4f7f\u7528\u7684\u5377\ndocker volume prune \ndocker rm volume_1\n# \u67e5\u770b\u6570\u636e\u5377\ndocker inspect volume_1\n\n# \u91cd\u542fdocker \nsudo systemctl daemon-reload \nsudo systemctl restart docker\nsudo systemctl status docker\n"})}),"\n",(0,t.jsx)(n.h2,{id:"dockerfile",children:"Dockerfile"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"ADD"}),"\n",(0,t.jsx)(n.li,{children:"COPY"}),"\n",(0,t.jsx)(n.li,{children:"ENV"}),"\n",(0,t.jsx)(n.li,{children:"EXPOSE"}),"\n",(0,t.jsx)(n.li,{children:"FROM"}),"\n",(0,t.jsx)(n.li,{children:"LABEL"}),"\n",(0,t.jsx)(n.li,{children:"STOPSIGNAL"}),"\n",(0,t.jsx)(n.li,{children:"USER"}),"\n",(0,t.jsx)(n.li,{children:"VOLUME"}),"\n",(0,t.jsx)(n.li,{children:"WORKDIR"}),"\n",(0,t.jsx)(n.li,{children:"ONBUILD (when combined with one of the supported instructions above)"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["\u8be6\u7ec6\u6559\u7a0b\u8bf7\u770b\u5b98\u7f51 ",(0,t.jsx)(n.a,{href:"https://docs.docker.com/engine/reference/builder/",children:"Dockerfile"})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://docs.docker.com/engine/reference/builder/#understand-how-cmd-and-entrypoint-interact",children:"how-cmd-and-entrypoint-interact"})}),"\n",(0,t.jsx)(n.h3,{id:"understand-how-cmd-and-entrypoint-interact",children:"Understand how CMD and ENTRYPOINT interact"}),"\n",(0,t.jsxs)(n.p,{children:["Both ",(0,t.jsx)(n.code,{children:"CMD"})," and ",(0,t.jsx)(n.code,{children:"ENTRYPOINT"})," instructions define what command gets executed when running a container.\nThere are few rules that describe their co-operation."]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Dockerfile should specify at least one of ",(0,t.jsx)(n.code,{children:"CMD"})," or ",(0,t.jsx)(n.code,{children:"ENTRYPOINT"})," commands."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"ENTRYPOINT"})," should be defined when using the container as an executable."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"CMD"})," should be used as a way of defining default arguments for an ",(0,t.jsx)(n.code,{children:"ENTRYPOINT"})," command\nor for executing an ad-hoc command in a container."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"CMD"})," will be overridden when running the container with alternative arguments."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["The table below shows what command is executed for different ",(0,t.jsx)(n.code,{children:"ENTRYPOINT"})," / ",(0,t.jsx)(n.code,{children:"CMD"})," combinations:"]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{style:{textAlign:"left"}}),(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"No ENTRYPOINT"}),(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"ENTRYPOINT exec_entry p1_entry"}),(0,t.jsx)(n.th,{style:{textAlign:"left"},children:'ENTRYPOINT ["exec_entry", "p1_entry"]'})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.strong,{children:"No CMD"})}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.em,{children:"error, not allowed"})}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"/bin/sh -c exec_entry p1_entry"}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"exec_entry p1_entry"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.strong,{children:'CMD ["exec_cmd", "p1_cmd"]'})}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"exec_cmd p1_cmd"}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"/bin/sh -c exec_entry p1_entry"}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"exec_entry p1_entry exec_cmd p1_cmd"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.strong,{children:'CMD ["p1_cmd", "p2_cmd"]'})}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"p1_cmd p2_cmd"}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"/bin/sh -c exec_entry p1_entry"}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"exec_entry p1_entry p1_cmd p2_cmd"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.strong,{children:"CMD exec_cmd p1_cmd"})}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"/bin/sh -c exec_cmd p1_cmd"}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"/bin/sh -c exec_entry p1_entry"}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"exec_entry p1_entry /bin/sh -c exec_cmd p1_cmd"})]})]})]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Note"})}),"\n",(0,t.jsxs)(n.p,{children:["If ",(0,t.jsx)(n.code,{children:"CMD"})," is defined from the base image, setting ",(0,t.jsx)(n.code,{children:"ENTRYPOINT"})," will\nreset ",(0,t.jsx)(n.code,{children:"CMD"})," to an empty value. In this scenario, ",(0,t.jsx)(n.code,{children:"CMD"})," must be defined in the\ncurrent image to have a value."]}),"\n",(0,t.jsx)(n.p,{children:"You can override the ENTRYPOINT setting using --entrypoint,\nbut this can only set the binary to exec (no sh -c will be used)."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"\u4e00\u4e2a\u7b80\u5355\u7684\u6848\u4f8b",children:"\u4e00\u4e2a\u7b80\u5355\u7684\u6848\u4f8b"}),"\n",(0,t.jsx)(n.p,{children:"\u62f7\u8d1dspringboot\u6587\u4ef6\u5230 \u5bb9\u5668\u5e76 \u6307\u5b9aspring\u914d\u7f6e\u6587\u4ef6\u8fd0\u884c"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-dockerfile",children:'FROM java\nENV JARNAME="demo-0.0.1-SNAPSHOT.jar"\nWORKDIR /root/app\nRUN /bin/bash -c "echo \'aaaa\' >> 1.txt"\nEXPOSE 80\nVOLUME ["/root/app"]\nENTRYPOINT ["java","-jar","demo-0.0.1-SNAPSHOT.jar", "-Dspring.config.location"]\nCMD ["application.yml"]\n\n#ENTRYPOINT ["echo","/root"]\n#CMD ["/root/app"]\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",metastring:"script",children:"docker build -t springboot:0.01 .\ndocker run -v /dockerlearn/dockerfilelearn:/root/app -p 80:80 --network rediscluster_default --rm springboot:0.01\n\ndocker run -p 8080:800 --rm learncase:latest\n"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Note"})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\u5982\u679c ",(0,t.jsx)(n.code,{children:'ENTRYPOINT ["exec_entry", "p1_entry"] '})," \u540e\u9762\u8fd8\u6709\n",(0,t.jsx)(n.code,{children:' CMD ["p1_cmd", "p2_cmd"]'})," \u90a3\u4e48CMD\u4e2d\u7684\u53c2\u6570\u5c06\u5168\u90e8\u8ffd\u52a0\u5230 ENTRYPOINT\n\u5f53",(0,t.jsx)(n.code,{children:"docker run"})," \u540e\u9762\u8ddf\u53c2\u6570\u65f6\u4f1a\u8986\u76d6\u6389CMD\u4e2d\u7684\u53c2\u6570"]}),"\n",(0,t.jsxs)(n.li,{children:["CMD ENTRYPOINT \u6570\u7ec4\u5f62\u5f0f \u90fd\u662fexec\u6a21\u5f0f\uff0c\u4e0d\u652f\u6301\u89e3\u6790\u672c\u5730\u53d8\u91cf\n\u5982\u679c\u60f3\u89e3\u6790 \u4f7f\u7528\u8fd9\u4e2a\u547d\u4ee4 ",(0,t.jsx)(n.code,{children:'ENTRYPOINT ["sh","-c","java -jar $JARNAME"]'})]}),"\n",(0,t.jsxs)(n.li,{children:["\u5982\u679c\u4f7f\u7528\u4e86",(0,t.jsx)(n.code,{children:'ENTRYPOINT ["sh","-c",..]'})," \u6216\u8005\u76f4\u63a5\u4f7f\u7528 ",(0,t.jsx)(n.code,{children:'ENTRYPOINT "echo Hello world"'}),"\n\u90a3\u4e48\u76f4\u63a5\u5c31\u65e0\u6cd5\u8986\u76d6\u53c2\u6570\u4e86"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"\u53c2\u8003\u6587\u732e"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://docs.docker.com/engine/reference/builder/",children:"Dockerfile"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://docs.docker.com/engine/reference/builder/#understand-how-cmd-and-entrypoint-interact",children:"how-cmd-and-entrypoint-interact"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{title:"\u534f\u8bae",type:"tip",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["\u672c\u4f5c\u54c1\u4ee3\u7801\u90e8\u5206\u91c7\u7528 ",(0,t.jsx)(n.a,{href:"https://www.apache.org/licenses/LICENSE-2.0",children:"Apache 2.0\u534f\u8bae"}),"\u8fdb\u884c\u8bb8\u53ef\u3002\u9075\u5faa\u8bb8\u53ef\u7684\u524d\u63d0\u4e0b\uff0c\u4f60\u53ef\u4ee5\u81ea\u7531\u5730\u5bf9\u4ee3\u7801\u8fdb\u884c\u4fee\u6539\uff0c\u518d\u53d1\u5e03\uff0c\u53ef\u4ee5\u5c06\u4ee3\u7801\u7528\u4f5c\u5546\u4e1a\u7528\u9014\u3002\u4f46\u8981\u6c42\u4f60\uff1a"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"\u7f72\u540d"}),"\uff1a\u5728\u539f\u6709\u4ee3\u7801\u548c\u884d\u751f\u4ee3\u7801\u4e2d\uff0c\u4fdd\u7559\u539f\u4f5c\u8005\u7f72\u540d\u53ca\u4ee3\u7801\u6765\u6e90\u4fe1\u606f\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"\u4fdd\u7559\u8bb8\u53ef\u8bc1"}),"\uff1a\u5728\u539f\u6709\u4ee3\u7801\u548c\u884d\u751f\u4ee3\u7801\u4e2d\uff0c\u4fdd\u7559Apache 2.0\u534f\u8bae\u6587\u4ef6\u3002"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["\u672c\u4f5c\u54c1\u6587\u6863\u90e8\u5206\u91c7\u7528",(0,t.jsx)(n.a,{href:"http://creativecommons.org/licenses/by/4.0/",children:"\u77e5\u8bc6\u5171\u4eab\u7f72\u540d 4.0 \u56fd\u9645\u8bb8\u53ef\u534f\u8bae"}),"\u8fdb\u884c\u8bb8\u53ef\u3002 \u9075\u5faa\u8bb8\u53ef\u7684\u524d\u63d0\u4e0b\uff0c\u4f60\u53ef\u4ee5\u81ea\u7531\u5730\u5171\u4eab\uff0c\u5305\u62ec\u5728\u4efb\u4f55\u5a92\u4ecb\u4e0a\u4ee5\u4efb\u4f55\u5f62\u5f0f\u590d\u5236\u3001\u53d1\u884c\u672c\u4f5c\u54c1\uff0c\u4ea6\u53ef\u4ee5\u81ea\u7531\u5730\u6f14\u7ece\u3001\u4fee\u6539\u3001\u8f6c\u6362\u6216\u4ee5\u672c\u4f5c\u54c1\u4e3a\u57fa\u7840\u8fdb\u884c\u4e8c\u6b21\u521b\u4f5c\u3002\u4f46\u8981\u6c42\u4f60\uff1a"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"\u7f72\u540d"}),"\uff1a\u5e94\u5728\u4f7f\u7528\u672c\u6587\u6863\u7684\u5168\u90e8\u6216\u90e8\u5206\u5185\u5bb9\u65f6\u5019\uff0c\u6ce8\u660e\u539f\u4f5c\u8005\u53ca\u6765\u6e90\u4fe1\u606f\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"\u975e\u5546\u4e1a\u6027\u4f7f\u7528"}),"\uff1a\u4e0d\u5f97\u7528\u4e8e\u5546\u4e1a\u51fa\u7248\u6216\u5176\u4ed6\u4efb\u4f55\u5e26\u6709\u5546\u4e1a\u6027\u8d28\u7684\u884c\u4e3a\u3002\u5982\u9700\u5546\u4e1a\u4f7f\u7528\uff0c\u8bf7\u8054\u7cfb\u4f5c\u8005\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"\u76f8\u540c\u65b9\u5f0f\u5171\u4eab\u7684\u6761\u4ef6"}),"\uff1a\u5728\u672c\u6587\u6863\u57fa\u7840\u4e0a\u6f14\u7ece\u3001\u4fee\u6539\u7684\u4f5c\u54c1\uff0c\u5e94\u5f53\u7ee7\u7eed\u4ee5\u77e5\u8bc6\u5171\u4eab\u7f72\u540d 4.0\u56fd\u9645\u8bb8\u53ef\u534f\u8bae\u8fdb\u884c\u8bb8\u53ef\u3002"]}),"\n"]}),"\n"]}),"\n"]})})]})}function h(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>i,a:()=>s});var t=r(7294);const c={},d=t.createContext(c);function s(e){const n=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:s(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);