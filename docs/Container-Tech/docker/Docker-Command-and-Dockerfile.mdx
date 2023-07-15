

---
title: "Docker Command 和 Docker File"
hidemeta: true
---

## 镜像相关命令

```shell script
# 下载镜像
docker pull xxx
# 搜素镜像
docker search xxx
# 查看已经下载了哪些镜像
docker images
# 查看已下载镜像的id
docker images -q 

# 删除镜像 
docker rmi containerId/SOURCE_IMAGE[:TAG]
#删除所有镜像
docker rmi $(docker images -q)
docker images -q | xargs docker rmi 

# 删除tag为<none>的镜像
docker rmi | xargs docker images | awk '{if ($2 == "<none>" )print $3}' | xargs docker rmi -f
```

## 容器相关的命令

```shell script
# 载入一个本地镜像 
docker load -i tomcat-8.0-jre.tar
# 启动一个容器 
docker run -dp 8080:8080 tomcat-8.0-jre --name tomcat 

docker run -p 8887:8887 -it  --name myideac jetbrains/projector-idea-c
docker start myideac

# 进入交互模拟
docker run -it debian /bin/bash
# 查看正在运行的容器
docker ps
# 查看全部容器的id
docker ps -q
# 查看全部容器
docker ps -a 
#运行 重启 停止 杀掉容器
docker start/restart/stop/kill containerId/name
```

```shell script
# 删除已创建的容器
docker rm containerId/name:tag
docker rm $(docker ps -q)
# 停止容器 
docker stop $(docker ps -a | grep "Exited" | awk '{print $1 }')    
# 删除容器  
docker rm $(docker ps -a | grep "Exited" | awk '{print $1 }')      
# 删除镜像    
docker rmi $(docker images | grep "none" | awk '{print $3}')    

# 查看日志
docker logs containerId/name
# 实时显示日志
docker logs -tf containerId/name
# 行首添加时间 的日志
docker logs -tail  5 containerId/name

# 查看容器资源情况
docker top containerId
# 进入容器的交互模式
docker exec -it containerId bash
```

```shell script
# 复制 容器中的文件、目录到 宿主机
docker cp containerId:/root/test.txt /root/

# 复制 宿主机的文件、目录到 容器中
docker cp a.txt containerId:/root/

# 打包一个镜像
docker commit -m "description xx" -a "author" containerId SOURCE_IMAGE[:TAG]
docker save redis:latest -o redis-cluster.tar

# 上传到docker hub仓库
docker tag redis:latest docker.io/whalefall541/redis:0.01
docker push docker.io/whalefall541/redis:0.01
```

```shell script
# 查看docker 网络配置
docker network ls

# 创建自定义网桥
docker mynetwork create mynetwork
# 将容器指定到 创建的网桥上
docker run -dp 80:80 --network mynetwork redis
# 删除网桥
docker newnetwork rm mynetwork
# 查看网桥
docker inpsect mynetwork
```

```shell script
# 数据卷指定
# docker run -dp 80:80 tomcat -v /root/webapps:/root/webapps
docker run -dp 80:80 tomcat -v aa:/root/webapps
# 数据卷创建
docker volume create volume_1
# 删除所有未使用的卷
docker volume prune 
docker rm volume_1
# 查看数据卷
docker inspect volume_1

# 重启docker 
sudo systemctl daemon-reload 
sudo systemctl restart docker
sudo systemctl status docker
```

## Dockerfile

- ADD
- COPY
- ENV
- EXPOSE
- FROM
- LABEL
- STOPSIGNAL
- USER
- VOLUME
- WORKDIR
- ONBUILD (when combined with one of the supported instructions above)

详细教程请看官网 [Dockerfile](https://docs.docker.com/engine/reference/builder/)

[how-cmd-and-entrypoint-interact](https://docs.docker.com/engine/reference/builder/#understand-how-cmd-and-entrypoint-interact)

### Understand how CMD and ENTRYPOINT interact

Both `CMD` and `ENTRYPOINT` instructions define what command gets executed when running a container.
There are few rules that describe their co-operation.

1. Dockerfile should specify at least one of `CMD` or `ENTRYPOINT` commands.

2. `ENTRYPOINT` should be defined when using the container as an executable.

3. `CMD` should be used as a way of defining default arguments for an `ENTRYPOINT` command
   or for executing an ad-hoc command in a container.

4. `CMD` will be overridden when running the container with alternative arguments.

The table below shows what command is executed for different `ENTRYPOINT` / `CMD` combinations:

|                                | No ENTRYPOINT              | ENTRYPOINT exec_entry p1_entry | ENTRYPOINT ["exec_entry", "p1_entry"]          |
| :----------------------------- | :------------------------- | :----------------------------- | :--------------------------------------------- |
| **No CMD**                     | *error, not allowed*       | /bin/sh -c exec_entry p1_entry | exec_entry p1_entry                            |
| **CMD ["exec_cmd", "p1_cmd"]** | exec_cmd p1_cmd            | /bin/sh -c exec_entry p1_entry | exec_entry p1_entry exec_cmd p1_cmd            |
| **CMD ["p1_cmd", "p2_cmd"]**   | p1_cmd p2_cmd              | /bin/sh -c exec_entry p1_entry | exec_entry p1_entry p1_cmd p2_cmd              |
| **CMD exec_cmd p1_cmd**        | /bin/sh -c exec_cmd p1_cmd | /bin/sh -c exec_entry p1_entry | exec_entry p1_entry /bin/sh -c exec_cmd p1_cmd |

> **Note**
>
> If `CMD` is defined from the base image, setting `ENTRYPOINT` will
> reset `CMD` to an empty value. In this scenario, `CMD` must be defined in the
> current image to have a value.
>
> You can override the ENTRYPOINT setting using --entrypoint, 
> but this can only set the binary to exec (no sh -c will be used).

### 一个简单的案例

拷贝springboot文件到 容器并 指定spring配置文件运行

```dockerfile
FROM java
ENV JARNAME="demo-0.0.1-SNAPSHOT.jar"
WORKDIR /root/app
RUN /bin/bash -c "echo 'aaaa' >> 1.txt"
EXPOSE 80
VOLUME ["/root/app"]
ENTRYPOINT ["java","-jar","demo-0.0.1-SNAPSHOT.jar", "-Dspring.config.location"]
CMD ["application.yml"]

#ENTRYPOINT ["echo","/root"]
#CMD ["/root/app"]
```

```shell script
docker build -t springboot:0.01 .
docker run -v /dockerlearn/dockerfilelearn:/root/app -p 80:80 --network rediscluster_default --rm springboot:0.01

docker run -p 8080:800 --rm learncase:latest
```



> **Note**
>
> 1. 如果 `ENTRYPOINT ["exec_entry", "p1_entry"] ` 后面还有
>    ` CMD ["p1_cmd", "p2_cmd"]` 那么CMD中的参数将全部追加到 ENTRYPOINT
>    当`docker run` 后面跟参数时会覆盖掉CMD中的参数
> 2. CMD ENTRYPOINT 数组形式 都是exec模式，不支持解析本地变量 
>    如果想解析 使用这个命令 `ENTRYPOINT ["sh","-c","java -jar $JARNAME"]`
> 3. 如果使用了`ENTRYPOINT ["sh","-c",..]` 或者直接使用 `ENTRYPOINT "echo Hello world"`
>    那么直接就无法覆盖参数了

> 参考文献
>
> 1. [Dockerfile](https://docs.docker.com/engine/reference/builder/)
> 2. [how-cmd-and-entrypoint-interact](https://docs.docker.com/engine/reference/builder/#understand-how-cmd-and-entrypoint-interact)



> <font color="red" >转载请注明 [原文地址](https://www.cnblogs.com/whalefall541/p/15318270.html)</font>