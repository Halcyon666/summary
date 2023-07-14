---
title: "Docker Compose"
hidemeta: true
---

## set up redis cluster 

[reference article from here][docker compose redis cluster]

### write config file for redis 

```shell script
cd /docker/redis

tee redis-cluster.tmpl <<- 'EOF'
# redis端口
port ${PORT}
# 关闭保护模式
protected-mode no
# 开启集群
cluster-enabled yes
# 集群节点配置
cluster-config-file nodes.conf
# 超时
cluster-node-timeout 5000
# 集群节点IP host模式为宿主机IP
cluster-announce-ip 192.168.3.162
# 集群节点端口 7001 - 7006
cluster-announce-port ${PORT}
cluster-announce-bus-port 1${PORT}
# 开启 appendonly 备份模式
appendonly yes
# 每秒钟备份
appendfsync everysec
# 对aof文件进行压缩时，是否执行同步操作
no-appendfsync-on-rewrite no
# 当目前aof文件大小超过上一次重写时的aof文件大小的100%时会再次进行重写
auto-aof-rewrite-percentage 100
# 重写前AOF文件的大小最小值 默认 64mb
auto-aof-rewrite-min-size 64mb
EOF
```

### script for create multiple

```shell script
tee redis-cluster-config.sh <<- 'EOF'
for port in `seq 7001 7006`; do \
  mkdir -p ./redis-cluster/${port}/conf \
  && PORT=${port} envsubst < ./redis-cluster.tmpl > ./redis-cluster/${port}/conf/redis.conf \
  && mkdir -p ./redis-cluster/${port}/data; \
done

chmod 777 redis-cluster-config.sh
./redis-cluster-config.sh
```


###  create docker-compose file 

```shell script
tee docker-compose-redis-cluster.yml <<- 'EOF'

version: '3.7'

services:
  redis7001:
    image: 'redis'
    container_name: redis7001
    command:
      ["redis-server", "/usr/local/etc/redis/redis.conf"]
    volumes:
      - ./redis-cluster/7001/conf/redis.conf:/usr/local/etc/redis/redis.conf
      - ./redis-cluster/7001/data:/data
    ports:
      - "7001:7001"
      - "17001:17001"
    environment:
      # 设置时区为上海，否则时间会有问题
      - TZ=Asia/Shanghai


  redis7002:
    image: 'redis'
    container_name: redis7002
    command:
      ["redis-server", "/usr/local/etc/redis/redis.conf"]
    volumes:
      - ./redis-cluster/7002/conf/redis.conf:/usr/local/etc/redis/redis.conf
      - ./redis-cluster/7002/data:/data
    ports:
      - "7002:7002"
      - "17002:17002"
    environment:
      # 设置时区为上海，否则时间会有问题
      - TZ=Asia/Shanghai


  redis7003:
    image: 'redis'
    container_name: redis7003
    command:
      ["redis-server", "/usr/local/etc/redis/redis.conf"]
    volumes:
      - ./redis-cluster/7003/conf/redis.conf:/usr/local/etc/redis/redis.conf
      - ./redis-cluster/7003/data:/data
    ports:
      - "7003:7003"
      - "17003:17003"
    environment:
      # 设置时区为上海，否则时间会有问题
      - TZ=Asia/Shanghai


  redis7004:
    image: 'redis'
    container_name: redis7004
    command:
      ["redis-server", "/usr/local/etc/redis/redis.conf"]
    volumes:
      - ./redis-cluster/7004/conf/redis.conf:/usr/local/etc/redis/redis.conf
      - ./redis-cluster/7004/data:/data
    ports:
      - "7004:7004"
      - "17004:17004"
    environment:
      # 设置时区为上海，否则时间会有问题
      - TZ=Asia/Shanghai


  redis7005:
    image: 'redis'
    container_name: redis7005
    command:
      ["redis-server", "/usr/local/etc/redis/redis.conf"]
    volumes:
      - ./redis-cluster/7005/conf/redis.conf:/usr/local/etc/redis/redis.conf
      - ./redis-cluster/7005/data:/data
    ports:
      - "7005:7005"
      - "17005:17005"
    environment:
      # 设置时区为上海，否则时间会有问题
      - TZ=Asia/Shanghai


  redis7006:
    image: 'redis'
    container_name: redis7006
    command:
      ["redis-server", "/usr/local/etc/redis/redis.conf"]
    volumes:
      - ./redis-cluster/7006/conf/redis.conf:/usr/local/etc/redis/redis.conf
      - ./redis-cluster/7006/data:/data
    ports:
      - "7006:7006"
      - "17006:17006"
    environment:
      # 设置时区为上海，否则时间会有问题
      - TZ=Asia/Shanghai
```

### launch redis cluster

`docker-compose -f docker-compose-redis-cluster.yml up`

sotp to use this command down including Removing network rediscluster_default

`docker-compose -f docker-compose-redis-cluster.yml down`

`docker-compose -f docker-compose-redis-cluster.yml stop`

### arrange slots

`docker exec -it redis7001 redis-cli -p 7001 --cluster create 192.168.3.162:7001 192.168.3.162:7002 192.168.3.162:7003 192.168.3.162:7004 192.168.3.162:7005 192.168.3.162:7006 --cluster-replicas 1`

If slots not served，here some resolutions:

[solve slots not served][slots not served]


### connect redis

`docker exec -it redis7001 redis-cli -p 7001`

[docker compose redis cluster]: https://www.cnblogs.com/zhangrui153169/p/12835681.html

[slots not served]: https://blog.csdn.net/one312/article/details/104983140

## jenkins in docker compose

[this article from here][docker compose jenkins]

### docker-compose configuration

```
tee docker-compose-jenkins.yml <<- 'EOF'
# docker-compose.yml
version: '3.7'
services:
  jenkins:
    image: jenkins/jenkins:lts
    privileged: true
    user: root
    ports:
      - 8083:8080
      - 50003:50000
    container_name: my-jenkins-3
    volumes:
      - ~/data:/var/jenkins_home
      - /var/run/docker.sock:/var/run/docker.sock
EOF
```

### run the docker compose

`docker-compose -f docker-compose-jenkins.yml up -d`

### get the initial admin pwd

`docker exec my-jenkins-3 cat /var/jenkins_home/secrets/initialAdminPassword`

[docker compose jenkins]: https://adamtheautomator.com/jenkins-docker/#Running_Jenkins_in_Docker

> 如转载 不得删除原文地址，不得删除文中引用他人博客的地址。
> [参考博客 redis cluster搭建][docker compose redis cluster]
> [参考博客 slots not served][slots not served]

### 配置idea project-docker

```yml
version: '3.7'
services:
  ideau:
    image: 'jetbrains/projector-idea-u:2020.2-projector-v1.7.0'
    container_name: ideau
    volumes:
      - /project:/home/projector-user
      
    ports:
      - "8887:8887"
    environment:
      # 设置时区为上海，否则时间会有问题
      - TZ=Asia/Shanghai
```



> <font color="red" >转载请注明 [原文地址](https://www.cnblogs.com/whalefall541/p/15309122.html)</font>