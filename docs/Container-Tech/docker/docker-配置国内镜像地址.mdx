---
title: "docker 配置国内镜像地址"
hidemeta: true
---

```shell script
cd /etc/docker/
rm -f daemon.json 
```

```shell script
tee daemon.json <<- 'EOF' 
{
  "exec-opts": ["native.cgroupdriver=systemd"],
  "log-driver": "json-file",
  "log-opts": {
    "max-size": "100m"
  },
  "storage-driver": "overlay2",
  "storage-opts": [
    "overlay2.override_kernel_check=true"
  ],
  "registry-mirrors": ["https://docker.mirrors.ustc.edu.cn","https://igq6a6t6.mirror.aliyuncs.com","https://hub-mirror.c.163.com/","https://reg-mirror.qiniu.com"],
  "data-root": "/data/docker"
}
EOF 
```

```shell script 
# 使配置生效
 sudo kill -SIGHUP $(pidof dockerd)
 
```



> <font color="red" >转载请注明 [原文地址](https://www.cnblogs.com/whalefall541/p/15311477.html)</font>