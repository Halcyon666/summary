"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4369],{7029:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>a});var s=r(5893),t=r(1151);const i={title:"Centos8 \u5b89\u88c5K8S",sidebar_label:"Centos8 \u5b89\u88c5K8S",sidebar_position:1},c=void 0,o={id:"Container-Tech/kubernetes/CentOS8\u5b89\u88c5K8S",title:"Centos8 \u5b89\u88c5K8S",description:"\u524d\u8a00",source:"@site/docs/07-Container-Tech/kubernetes/CentOS8\u5b89\u88c5K8S.mdx",sourceDirName:"07-Container-Tech/kubernetes",slug:"/Container-Tech/kubernetes/CentOS8\u5b89\u88c5K8S",permalink:"/summary/Container-Tech/kubernetes/CentOS8\u5b89\u88c5K8S",draft:!1,unlisted:!1,editUrl:"https://github.com/Halcyon666/summary/blob/main/docs/07-Container-Tech/kubernetes/CentOS8\u5b89\u88c5K8S.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Centos8 \u5b89\u88c5K8S",sidebar_label:"Centos8 \u5b89\u88c5K8S",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"idea\u4f7f\u7528docker\u90e8\u7f72",permalink:"/summary/Container-Tech/docker/idea \u90e8\u7f72"},next:{title:"K8S\u5e38\u7528\u547d\u4ee4",permalink:"/summary/Container-Tech/kubernetes/k8s\u5e38\u7528\u547d\u4ee4"}},l={},a=[{value:"\u524d\u8a00",id:"\u524d\u8a00",level:2},{value:"\u8bbe\u5907\u51c6\u5907",id:"\u8bbe\u5907\u51c6\u5907",level:3},{value:"\u4e3b\u6d41\u7a0b",id:"\u4e3b\u6d41\u7a0b",level:2},{value:"docker\u5220\u9664",id:"docker\u5220\u9664",level:3},{value:"\u76f8\u5173\u6559\u7a0b",id:"\u76f8\u5173\u6559\u7a0b",level:3},{value:"<code>hostname</code> \u5904\u7406",id:"hostname-\u5904\u7406",level:3},{value:"\u5728\u6240\u6709\u673a\u5668\u4e0a \u5173\u95ed\u9632\u706b\u5899 \u7f51\u6865\u5904\u7406",id:"\u5728\u6240\u6709\u673a\u5668\u4e0a-\u5173\u95ed\u9632\u706b\u5899-\u7f51\u6865\u5904\u7406",level:3},{value:"\u5728\u6240\u6709\u673a\u5668\u4e0a\u5b89\u88c5 <code>Docker</code> \u5b89\u88c5",id:"\u5728\u6240\u6709\u673a\u5668\u4e0a\u5b89\u88c5-docker-\u5b89\u88c5",level:3},{value:"\u5728\u6240\u6709\u673a\u5668\u4e0a\u5b89\u88c5 <code>cri-dockerd</code> \u5b89\u88c5",id:"\u5728\u6240\u6709\u673a\u5668\u4e0a\u5b89\u88c5-cri-dockerd-\u5b89\u88c5",level:3},{value:"\u5728\u6240\u6709\u673a\u5668\u4e0a\u5b89\u88c5 <code>kubeadmin</code> \u5b89\u88c5",id:"\u5728\u6240\u6709\u673a\u5668\u4e0a\u5b89\u88c5-kubeadmin-\u5b89\u88c5",level:3},{value:"\u5728master\u4e0a\u914d\u7f6e <code>kubeadm</code> \u53ca\u521d\u59cb\u5316",id:"\u5728master\u4e0a\u914d\u7f6e-kubeadm-\u53ca\u521d\u59cb\u5316",level:3},{value:"node \u8282\u70b9 join",id:"node-\u8282\u70b9-join",level:3},{value:"\u5728master\u8282\u70b9 \u5bf9node tag",id:"\u5728master\u8282\u70b9-\u5bf9node-tag",level:3},{value:"\u5728master\u4e0a\u5b89\u88c5 calico \u7f51\u7edc\u7ec4\u4ef6",id:"\u5728master\u4e0a\u5b89\u88c5-calico-\u7f51\u7edc\u7ec4\u4ef6",level:3},{value:"\u62a5\u9519\u5904\u7406",id:"\u62a5\u9519\u5904\u7406",level:2},{value:"\u6267\u884c<code>yum -y update</code>\u62a5\u95191",id:"\u6267\u884cyum--y-update\u62a5\u95191",level:3},{value:"\u6267\u884c<code>yum -y update</code>\u62a5\u95192",id:"\u6267\u884cyum--y-update\u62a5\u95192",level:3},{value:"<code>kubeadm join</code>\u62a5\u9519",id:"kubeadm-join\u62a5\u9519",level:3},{value:"kubulet \u91cd\u542f\u673a\u5668\u540e \u542f\u52a8\u5931\u8d25",id:"kubulet-\u91cd\u542f\u673a\u5668\u540e-\u542f\u52a8\u5931\u8d25",level:3}];function d(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"\u524d\u8a00",children:"\u524d\u8a00"}),"\n",(0,s.jsx)(n.h3,{id:"\u8bbe\u5907\u51c6\u5907",children:"\u8bbe\u5907\u51c6\u5907"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\u4e3b\u673a"}),(0,s.jsx)(n.th,{children:"IP"}),(0,s.jsx)(n.th,{children:"\u7cfb\u7edf"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"master"}),(0,s.jsx)(n.td,{children:"192.168.3.162"}),(0,s.jsx)(n.td,{children:"Centos 8 kernel 4.18.0-240.el8.x86_64"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"node-1"}),(0,s.jsx)(n.td,{children:"192.168.3.163"}),(0,s.jsx)(n.td,{children:"Centos 8 kernel 4.18.0-240.el8.x86_64"})]})]})]}),"\n",(0,s.jsx)(n.p,{children:"\u51c6\u5907\u5b89\u88c5\u7248\u672c"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"k8s\u7248\u672c"}),(0,s.jsx)(n.th,{children:"docker\u7248\u672c"}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"1.27.0"}),(0,s.jsx)(n.td,{children:"20.10.6"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"\u4e3b\u6d41\u7a0b",children:"\u4e3b\u6d41\u7a0b"}),"\n",(0,s.jsx)(n.h3,{id:"docker\u5220\u9664",children:(0,s.jsx)(n.a,{href:"https://cloud.tencent.com/developer/article/2132469",children:"docker\u5220\u9664"})}),"\n",(0,s.jsx)(n.p,{children:"\u6267\u884c\u5982\u4e0b\u547d\u4ee4"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"yum list installed|grep docker | gawk -F ' ' '{ print $1 }' | xargs yum remove -y"})}),"\n",(0,s.jsx)(n.h3,{id:"\u76f8\u5173\u6559\u7a0b",children:"\u76f8\u5173\u6559\u7a0b"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://blog.51cto.com/u_15287666/5780765",children:"\u6559\u7a0b1.14"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://blog.csdn.net/weixin_45310323/article/details/130494823",children:"\u6559\u7a0b1.27"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["NOTES: \u5b89\u88c5K8S 1.27\u7248\u672c \u53c2\u8003",(0,s.jsx)(n.a,{href:"https://blog.csdn.net/weixin_45310323/article/details/130494823",children:"\u6559\u7a0b1.27"})]}),"\n",(0,s.jsx)(n.p,{children:"\u53c2\u8003\u539f\u535a\u5ba2\u90e8\u5206\u5730\u65b9\u811a\u672c\u6709\u4fee\u6539 \u4f18\u5316"}),"\n"]}),"\n",(0,s.jsxs)(n.h3,{id:"hostname-\u5904\u7406",children:[(0,s.jsx)(n.code,{children:"hostname"})," \u5904\u7406"]}),"\n",(0,s.jsx)(n.p,{children:"\u5206\u522b\u6267\u884c 162 master 163 node-1"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"hostnamectl set-hostname master-1 && bash\nhostnamectl set-hostname node-1 && bash\n"})}),"\n",(0,s.jsx)(n.h3,{id:"\u5728\u6240\u6709\u673a\u5668\u4e0a-\u5173\u95ed\u9632\u706b\u5899-\u7f51\u6865\u5904\u7406",children:"\u5728\u6240\u6709\u673a\u5668\u4e0a \u5173\u95ed\u9632\u706b\u5899 \u7f51\u6865\u5904\u7406"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"# \u5173\u95ed\u9632\u706b\u5899\nsystemctl disable firewalld --now\nsetenforce 0\nsed  -i -r 's/SELINUX=[ep].*/SELINUX=disabled/g' /etc/selinux/config\nswapoff -a\nsed -i '/swap/s/^\\(.*\\)$/#\\1/g' /etc/fstab\n\ncat  >> /etc/hosts << EOF\n192.168.3.162 master-1\n192.168.3.163 node-1\nEOF\n\nntpdate ntp1.aliyun.com\necho \"0 1 * * * ntpdate ntp1.aliyun.com\" >> /var/spool/cron/root\ncrontab -l\n\n# \u7f51\u6865\u76f8\u5173\ncat >> /etc/sysctl.d/kubernetes.conf <<EOF\nnet.bridge.bridge-nf-call-ip6tables = 1\nnet.bridge.bridge-nf-call-iptables = 1\nnet.ipv4.ip_forward = 1\nEOF\n\nsysctl -p /etc/sysctl.d/kubernetes.conf\ncat >> /etc/sysctl.d/kubernetes.conf <<EOF\nnet.bridge.bridge-nf-call-ip6tables = 1\nnet.bridge.bridge-nf-call-iptables = 1\nnet.ipv4.ip_forward = 1\nEOF\n\nsysctl -p /etc/sysctl.d/kubernetes.conf\n\n# \u914d\u7f6eipvs\u529f\u80fd\nyum -y install ipset ipvsadm\n\ncat > /etc/sysconfig/modules/ipvs.modules <<EOF\nmodprobe -- ip_vs\nmodprobe -- ip_vs_rr\nmodprobe -- ip_vs_wrr\nmodprobe -- ip_vs_sh\nmodprobe -- nf_conntrack_ipv4  \nEOF\n\nchmod +x /etc/sysconfig/modules/ipvs.modules \n/etc/sysconfig/modules/ipvs.modules\nlsmod | grep -e ip_vs -e nf_conntrack_ipv4\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"\u5728\u6240\u6709\u673a\u5668\u4e0a\u5b89\u88c5-docker-\u5b89\u88c5",children:["\u5728\u6240\u6709\u673a\u5668\u4e0a\u5b89\u88c5 ",(0,s.jsx)(n.code,{children:"Docker"})," \u5b89\u88c5"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shel",children:'\n# \u5b89\u88c5Docker\u5bb9\u5668\u7ec4\u4ef6\nyum install -y yum-utils\nyum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo\nyum install docker-ce-20.10.6 docker-ce-cli-20.10.6 -y\n\n\ncat <<EOF >  /etc/docker/daemon.json\n{\n  "exec-opts": ["native.cgroupdriver=systemd"],\n  "log-driver": "json-file",\n  "log-opts": {\n    "max-size": "100m"\n  },\n  "storage-driver": "overlay2",\n  "storage-opts": [\n    "overlay2.override_kernel_check=true"\n  ],\n  "registry-mirrors": ["https://docker.mirrors.ustc.edu.cn","https://igq6a6t6.mirror.aliyuncs.com","https://hub-mirror.c.163.com/","https://reg-mirror.qiniu.com"],\n  "data-root": "/data/docker"\n}\nEOF\n \nsystemctl start docker && systemctl enable docker\nps -ef|grep docker\n'})}),"\n",(0,s.jsxs)(n.h3,{id:"\u5728\u6240\u6709\u673a\u5668\u4e0a\u5b89\u88c5-cri-dockerd-\u5b89\u88c5",children:["\u5728\u6240\u6709\u673a\u5668\u4e0a\u5b89\u88c5 ",(0,s.jsx)(n.code,{children:"cri-dockerd"})," \u5b89\u88c5"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u8fd9\u91cc\u662f\u4e0d\u662f\u53ea\u7528\u5b89\u88c5",(0,s.jsx)(n.code,{children:"cri-dockerd"}),"\u5c31\u53ef\u4ee5 1.24.0 \u5f7b\u5e95\u79fb\u9664",(0,s.jsx)(n.code,{children:"containerd-shim"})]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"# cri-dockerd\u63d2\u4ef6\nmv /usr/lib/systemd/system/cri-docker.service{,.default}\ncat <<EOF > /usr/lib/systemd/system/cri-docker.service \n[Unit]\nDescription=CRI Interface for Docker Application Container Engine\nDocumentation=https://docs.mirantis.com\nAfter=network-online.target firewalld.service docker.service\nWants=network-online.target\nRequires=cri-docker.socket\n[Service]\nType=notify\nExecStart=/usr/bin/cri-dockerd --network-plugin=cni --pod-infra-container-image=registry.aliyuncs.com/google_containers/pause:3.7\nExecReload=/bin/kill -s HUP $MAINPID\nTimeoutSec=0\nRestartSec=2\nRestart=always\nStartLimitBurst=3\nStartLimitInterval=60s\nLimitNOFILE=infinity\nLimitNPROC=infinity\nLimitCORE=infinity\nTasksMax=infinity\nDelegate=yes\nKillMode=process\n[Install]\nWantedBy=multi-user.target\nEOF\n\nsystemctl daemon-reload\nsystemctl start cri-docker.service \n\nsystemctl daemon-reload ; systemctl enable cri-docker --now\nsystemctl is-active cri-docker\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"\u5728\u6240\u6709\u673a\u5668\u4e0a\u5b89\u88c5-kubeadmin-\u5b89\u88c5",children:["\u5728\u6240\u6709\u673a\u5668\u4e0a\u5b89\u88c5 ",(0,s.jsx)(n.code,{children:"kubeadmin"})," \u5b89\u88c5"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"# kubeadmin\ncat <<EOF > /etc/yum.repos.d/kubernetes.repo\n[kubernetes]\nname=Kubernetes\nbaseurl=https://mirrors.aliyun.com/kubernetes/yum/repos/kubernetes-el7-x86_64/\nenabled=1\ngpgcheck=0\nEOF\n\nyum install -y kubelet-1.27.0 kubeadm-1.27.0 kubectl-1.27.0\n\nsystemctl enable kubelet.service --now\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"\u5728master\u4e0a\u914d\u7f6e-kubeadm-\u53ca\u521d\u59cb\u5316",children:["\u5728master\u4e0a\u914d\u7f6e ",(0,s.jsx)(n.code,{children:"kubeadm"})," \u53ca\u521d\u59cb\u5316"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"kubeadm config print init-defaults > kubeadm.yaml\ncat <<EOF > kubeadm.yaml\napiVersion: kubeadm.k8s.io/v1beta3\nbootstrapTokens:\n- groups:\n  - system:bootstrappers:kubeadm:default-node-token\n  token: abcdef.0123456789abcdef\n  ttl: 24h0m0s\n  usages:\n  - signing\n  - authentication\nkind: InitConfiguration\nlocalAPIEndpoint:\n  advertiseAddress: 192.168.3.162\n  bindPort: 6443\nnodeRegistration:\n  criSocket: unix:///var/run/cri-dockerd.sock\n  imagePullPolicy: IfNotPresent\n  name: master-1\n  taints: null\n---\napiServer:\n  timeoutForControlPlane: 4m0s\napiVersion: kubeadm.k8s.io/v1beta3\ncertificatesDir: /etc/kubernetes/pki\nclusterName: kubernetes\ncontrollerManager: {}\ndns: {}\netcd:\n  local:\n    dataDir: /var/lib/etcd\nimageRepository: registry.cn-hangzhou.aliyuncs.com/google_containers\nkind: ClusterConfiguration\nkubernetesVersion: 1.27.0\nnetworking:\n  dnsDomain: cluster.local\n  podSubnet: 10.244.0.0/16\n  serviceSubnet: 10.96.0.0/12\nscheduler: {}\n---\napiVersion: kubeproxy.config.k8s.io/v1alpha1\nkind: KubeProxyConfiguration\nmode: ipvs\n---\napiVersion: kubelet.config.k8s.io/v1beta1\nkind: KubeletConfiguration\ncgroupDriver: systemd\nEOF\n# \u521d\u59cb\u5316k8s master\nkubeadm init --config=kubeadm.yaml --ignore-preflight-errors=SystemVerification\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u521d\u59cb\u5316\u8f93\u51fa"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'Your Kubernetes control-plane has initialized successfully!\n\nTo start using your cluster, you need to run the following as a regular user:\n\n  mkdir -p $HOME/.kube\n  sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config\n  sudo chown $(id -u):$(id -g) $HOME/.kube/config\n\nAlternatively, if you are the root user, you can run:\n\n  export KUBECONFIG=/etc/kubernetes/admin.conf\n\nYou should now deploy a pod network to the cluster.\nRun "kubectl apply -f [podnetwork].yaml" with one of the options listed at:\n  https://kubernetes.io/docs/concepts/cluster-administration/addons/\n\nThen you can join any number of worker nodes by running the following on each as root:\n\nkubeadm join 192.168.3.162:6443 --token abcdef.0123456789abcdef \\\n        --discovery-token-ca-cert-hash sha256:b277982a3a0f71f4f7aa586dcaa635006eb329621d357dc752122a08b7d44a58\n\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u521d\u59cb\u5316\u914d\u7f6e\u4fee\u6539"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"mkdir -p $HOME/.kube\nsudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config\nsudo chown $(id -u):$(id -g) $HOME/.kube/config\n# dosome check\nkubectl get nodes\n\n"})}),"\n",(0,s.jsx)(n.h3,{id:"node-\u8282\u70b9-join",children:"node \u8282\u70b9 join"}),"\n",(0,s.jsx)(n.p,{children:"\u5728Master\u8282\u70b9\u6267\u884c"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"kubeadm token create --print-join-command"}),"\u547d\u4ee4\u8f93\u51fa"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"[root@master-1 ~]# kubeadm token create --print-join-command\nkubeadm join 192.168.3.162:6443 --token fqaz46.n8agq16nwsfxwyrm --discovery-token-ca-cert-hash sha256:b277982a3a0f71f4f7aa586dcaa635006eb329621d357dc752122a08b7d44a58\n"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u6ce8\u610f\u52a0\u4e0a: ",(0,s.jsx)(n.code,{children:"--cri-socket=unix:///var/run/cri-dockerd.sock"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u5728Node\u8282\u70b9\u6267\u884c"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"kubeadm join 192.168.3.162:6443 --token fqaz46.n8agq16nwsfxwyrm --discovery-token-ca-cert-hash sha256:b277982a3a0f71f4f7aa586dcaa635006eb329621d357dc752122a08b7d44a58 --cri-socket=unix:///var/run/cri-dockerd.sock\n"})}),"\n",(0,s.jsx)(n.h3,{id:"\u5728master\u8282\u70b9-\u5bf9node-tag",children:"\u5728master\u8282\u70b9 \u5bf9node tag"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"kubectl label node node-1 node-role.kubernetes.io/worker=worker"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"[root@master-1 ~]# kubectl get nodes\nNAME       STATUS     ROLES           AGE   VERSION\nmaster-1   NotReady   control-plane   18m   v1.27.0\nnode-1     NotReady   <none>          12m   v1.27.0\n[root@master-1 ~]# kubectl label node node-1 node-role.kubernetes.io/worker=worker\nnode/node-1 labeled\n[root@master-1 ~]# kubectl get nodes\nNAME       STATUS     ROLES           AGE   VERSION\nmaster-1   NotReady   control-plane   20m   v1.27.0\nnode-1     NotReady   worker          14m   v1.27.0\n\n"})}),"\n",(0,s.jsx)(n.h3,{id:"\u5728master\u4e0a\u5b89\u88c5-calico-\u7f51\u7edc\u7ec4\u4ef6",children:"\u5728master\u4e0a\u5b89\u88c5 calico \u7f51\u7edc\u7ec4\u4ef6"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"\u76ee\u524d\u5931\u8d25"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://pan.baidu.com/s/1ethvBXllogBZq3mMrWr3gg?pwd=1111",children:"calico.yaml"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SHELL",children:"\nkubectl apply -f  calico.yaml\nkubectl get nodes\n\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u62a5\u9519\u5904\u7406",children:"\u62a5\u9519\u5904\u7406"}),"\n",(0,s.jsxs)(n.h3,{id:"\u6267\u884cyum--y-update\u62a5\u95191",children:["\u6267\u884c",(0,s.jsx)(n.code,{children:"yum -y update"}),"\u62a5\u95191"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"[root@localhost ~]# yum -y update\nCentOS Linux 8 - AppStream                                 62  B/s |  38  B     00:00\nError: Failed to download metadata for repo 'appstream': Cannot prepare internal mirrorlist: No URLs in mirrorlist\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://qiita.com/yamada-hakase/items/cb1b6124e11ca65e2a2b",children:"\u89e3\u51b3\u65b9\u6848"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"sed -i -e 's/^mirrorlist/#mirrorlist/g' -e 's/^#baseurl=http:\\/\\/mirror/baseurl=http:\\/\\/vault/g' /etc/yum.repos.d/CentOS-*repo"})}),"\n",(0,s.jsxs)(n.h3,{id:"\u6267\u884cyum--y-update\u62a5\u95192",children:["\u6267\u884c",(0,s.jsx)(n.code,{children:"yum -y update"}),"\u62a5\u95192"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"\u4e0d\u66f4\u65b0kernel\u4e5f\u662f\u53ef\u4ee5\u7528\u7684"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"You can remove cached packages by executing 'yum clean packages'.\nError: Transaction test error:\n  installing package kernel-core-4.18.0-348.7.1.el8_5.x86_64 needs 35MB on the /boot filesystem\n\nError Summary\n-------------\nDisk Requirements:\n   At least 35MB more space needed on the /boot filesystem.\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://haydenjames.io/fix-least-xmb-space-needed-boot-filesystem/",children:"\u89e3\u51b3\u65b9\u6848\u94fe\u63a5"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"dnf remove --oldinstallonly --setopt installonly_limit=2 kernel"})}),"\n",(0,s.jsxs)(n.h3,{id:"kubeadm-join\u62a5\u9519",children:[(0,s.jsx)(n.code,{children:"kubeadm join"}),"\u62a5\u9519"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"[root@node-1 ~]# kubeadm join 192.168.3.162:6443 --token fqaz46.n8agq16nwsfxwyrm --discovery-token-ca-cert-hash sha256:b277982a3a0f71f4f7aa586dcaa635006eb329621d357dc752122a08b7d44a58 --cri-socket=unix:///var/run/cri-dockerd.sock\n[preflight] Running pre-flight checks\nerror execution phase preflight: [preflight] Some fatal errors occurred:\n        [ERROR FileAvailable--etc-kubernetes-kubelet.conf]: /etc/kubernetes/kubelet.conf already exists\n        [ERROR FileAvailable--etc-kubernetes-bootstrap-kubelet.conf]: /etc/kubernetes/bootstrap-kubelet.conf already exists\n        [ERROR Port-10250]: Port 10250 is in use\n        [ERROR FileAvailable--etc-kubernetes-pki-ca.crt]: /etc/kubernetes/pki/ca.crt already exists\n[preflight] If you know what you are doing, you can make a check non-fatal with `--ignore-preflight-errors=...`\nTo see the stack trace of this error execute with --v=5 or higher\n\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"rm -rf /etc/kubernetes/kubelet.conf /etc/kubernetes/pki/ca.crt /etc/kubernetes/bootstrap-kubelet.conf\nnetstat -plnt\nkill -9 ${PID}\n\n"})}),"\n",(0,s.jsx)(n.h3,{id:"kubulet-\u91cd\u542f\u673a\u5668\u540e-\u542f\u52a8\u5931\u8d25",children:"kubulet \u91cd\u542f\u673a\u5668\u540e \u542f\u52a8\u5931\u8d25"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"kubectl get pods -n kube-system -o wide"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"[root@master-1 ~]# kubectl get pods -n kube-system -o wide\nThe connection to the server 192.168.3.162:6443 was refused - did you specify the right host or port?\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"journalctl -xeu kubelet"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'[root@master-1 ~]# journalctl -xeu kubelet\nMay 17 23:06:14 master-1 kubelet[7341]: W0517 23:06:14.626983    7341 logging.go:59] [core] [Channel #1 SubChannel #2] grpc: addrConn.createTransport failed to connect to {\nMay 17 23:06:14 master-1 kubelet[7341]:   "Addr": "/var/run/cri-dockerd.sock",\nMay 17 23:06:14 master-1 kubelet[7341]:   "ServerName": "/var/run/cri-dockerd.sock",\nMay 17 23:06:14 master-1 kubelet[7341]:   "Attributes": null,\nMay 17 23:06:14 master-1 kubelet[7341]:   "BalancerAttributes": null,\nMay 17 23:06:14 master-1 kubelet[7341]:   "Type": 0,\nMay 17 23:06:14 master-1 kubelet[7341]:   "Metadata": null\nMay 17 23:06:14 master-1 kubelet[7341]: }. Err: connection error: desc = "transport: Error while dialing dial unix /var/run/cri-dockerd.sock: connect: no such file or directory"\nMay 17 23:06:14 master-1 kubelet[7341]: E0517 23:06:14.627217    7341 run.go:74] "command failed" err="failed to run Kubelet: validate service connection: validate CRI v1 runtime API >\nMay 17 23:06:14 master-1 systemd[1]: kubelet.service: Main process exited, code=exited, status=1/FAILURE\nMay 17 23:06:14 master-1 systemd[1]: kubelet.service: Failed with result \'exit-code\'.\n-- Subject: Unit failed\n-- Defined-By: systemd\n-- Support: https://access.redhat.com/support\n--\n-- The unit kubelet.service has entered the \'failed\' state with result \'exit-code\'.\nlines 467-507/\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://blog.csdn.net/weixin_38007578/article/details/117586266",children:"\u67e5\u770b\u65b9\u6cd5"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"kubectl get pods -n kube-system -o wide\n\njournalctl -xeu kubelet\n\nsystemctl status cri-docker\n# \u53d1\u73b0  cri-docker \u6ca1\u6709\u542f\u52a8 \u6ce8\u610f \u6bcf\u53f0\u673a\u5668\u90fd\u53ef\u80fd\u6709\u95ee\u9898\n\nsystemctl start cri-docker.service \nsystemctl restart kubelet\n\n\n"})}),"\n",(0,s.jsx)(n.admonition,{title:"\u534f\u8bae",type:"tip",children:(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u672c\u4f5c\u54c1\u4ee3\u7801\u90e8\u5206\u91c7\u7528 ",(0,s.jsx)(n.a,{href:"https://www.apache.org/licenses/LICENSE-2.0",children:"Apache 2.0\u534f\u8bae"}),"\u8fdb\u884c\u8bb8\u53ef\u3002\u9075\u5faa\u8bb8\u53ef\u7684\u524d\u63d0\u4e0b\uff0c\u4f60\u53ef\u4ee5\u81ea\u7531\u5730\u5bf9\u4ee3\u7801\u8fdb\u884c\u4fee\u6539\uff0c\u518d\u53d1\u5e03\uff0c\u53ef\u4ee5\u5c06\u4ee3\u7801\u7528\u4f5c\u5546\u4e1a\u7528\u9014\u3002\u4f46\u8981\u6c42\u4f60\uff1a"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\u7f72\u540d"}),"\uff1a\u5728\u539f\u6709\u4ee3\u7801\u548c\u884d\u751f\u4ee3\u7801\u4e2d\uff0c\u4fdd\u7559\u539f\u4f5c\u8005\u7f72\u540d\u53ca\u4ee3\u7801\u6765\u6e90\u4fe1\u606f\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\u4fdd\u7559\u8bb8\u53ef\u8bc1"}),"\uff1a\u5728\u539f\u6709\u4ee3\u7801\u548c\u884d\u751f\u4ee3\u7801\u4e2d\uff0c\u4fdd\u7559Apache 2.0\u534f\u8bae\u6587\u4ef6\u3002"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u672c\u4f5c\u54c1\u6587\u6863\u90e8\u5206\u91c7\u7528",(0,s.jsx)(n.a,{href:"http://creativecommons.org/licenses/by/4.0/",children:"\u77e5\u8bc6\u5171\u4eab\u7f72\u540d 4.0 \u56fd\u9645\u8bb8\u53ef\u534f\u8bae"}),"\u8fdb\u884c\u8bb8\u53ef\u3002 \u9075\u5faa\u8bb8\u53ef\u7684\u524d\u63d0\u4e0b\uff0c\u4f60\u53ef\u4ee5\u81ea\u7531\u5730\u5171\u4eab\uff0c\u5305\u62ec\u5728\u4efb\u4f55\u5a92\u4ecb\u4e0a\u4ee5\u4efb\u4f55\u5f62\u5f0f\u590d\u5236\u3001\u53d1\u884c\u672c\u4f5c\u54c1\uff0c\u4ea6\u53ef\u4ee5\u81ea\u7531\u5730\u6f14\u7ece\u3001\u4fee\u6539\u3001\u8f6c\u6362\u6216\u4ee5\u672c\u4f5c\u54c1\u4e3a\u57fa\u7840\u8fdb\u884c\u4e8c\u6b21\u521b\u4f5c\u3002\u4f46\u8981\u6c42\u4f60\uff1a"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\u7f72\u540d"}),"\uff1a\u5e94\u5728\u4f7f\u7528\u672c\u6587\u6863\u7684\u5168\u90e8\u6216\u90e8\u5206\u5185\u5bb9\u65f6\u5019\uff0c\u6ce8\u660e\u539f\u4f5c\u8005\u53ca\u6765\u6e90\u4fe1\u606f\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\u975e\u5546\u4e1a\u6027\u4f7f\u7528"}),"\uff1a\u4e0d\u5f97\u7528\u4e8e\u5546\u4e1a\u51fa\u7248\u6216\u5176\u4ed6\u4efb\u4f55\u5e26\u6709\u5546\u4e1a\u6027\u8d28\u7684\u884c\u4e3a\u3002\u5982\u9700\u5546\u4e1a\u4f7f\u7528\uff0c\u8bf7\u8054\u7cfb\u4f5c\u8005\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\u76f8\u540c\u65b9\u5f0f\u5171\u4eab\u7684\u6761\u4ef6"}),"\uff1a\u5728\u672c\u6587\u6863\u57fa\u7840\u4e0a\u6f14\u7ece\u3001\u4fee\u6539\u7684\u4f5c\u54c1\uff0c\u5e94\u5f53\u7ee7\u7eed\u4ee5\u77e5\u8bc6\u5171\u4eab\u7f72\u540d 4.0\u56fd\u9645\u8bb8\u53ef\u534f\u8bae\u8fdb\u884c\u8bb8\u53ef\u3002"]}),"\n"]}),"\n"]}),"\n"]})})]})}function u(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>o,a:()=>c});var s=r(7294);const t={},i=s.createContext(t);function c(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);