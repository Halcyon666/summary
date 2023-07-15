"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3725],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(n),p=a,m=u["".concat(s,".").concat(p)]||u[p]||k[p]||o;return n?r.createElement(m,l(l({ref:t},d),{},{components:n})):r.createElement(m,l({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},614:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>k,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={},l=void 0,i={unversionedId:"Container-Tech/kubernetes/CentOS8\u5b89\u88c5K8S",id:"Container-Tech/kubernetes/CentOS8\u5b89\u88c5K8S",title:"CentOS8\u5b89\u88c5K8S",description:"\u524d\u8a00",source:"@site/docs/Container-Tech/kubernetes/CentOS8\u5b89\u88c5K8S.mdx",sourceDirName:"Container-Tech/kubernetes",slug:"/Container-Tech/kubernetes/CentOS8\u5b89\u88c5K8S",permalink:"/summary/Container-Tech/kubernetes/CentOS8\u5b89\u88c5K8S",draft:!1,editUrl:"https://github.com/Halcyon666/summary/blob/main/docs/Container-Tech/kubernetes/CentOS8\u5b89\u88c5K8S.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"idea \u90e8\u7f72",permalink:"/summary/Container-Tech/docker/idea \u90e8\u7f72"},next:{title:"k8s\u5e38\u7528\u547d\u4ee4",permalink:"/summary/Container-Tech/kubernetes/k8s\u5e38\u7528\u547d\u4ee4"}},s={},c=[{value:"\u524d\u8a00",id:"\u524d\u8a00",level:2},{value:"\u8bbe\u5907\u51c6\u5907",id:"\u8bbe\u5907\u51c6\u5907",level:3},{value:"\u4e3b\u6d41\u7a0b",id:"\u4e3b\u6d41\u7a0b",level:2},{value:"docker\u5220\u9664",id:"docker\u5220\u9664",level:3},{value:"\u76f8\u5173\u6559\u7a0b",id:"\u76f8\u5173\u6559\u7a0b",level:3},{value:"<code>hostname</code> \u5904\u7406",id:"hostname-\u5904\u7406",level:3},{value:"\u5728\u6240\u6709\u673a\u5668\u4e0a \u5173\u95ed\u9632\u706b\u5899 \u7f51\u6865\u5904\u7406",id:"\u5728\u6240\u6709\u673a\u5668\u4e0a-\u5173\u95ed\u9632\u706b\u5899-\u7f51\u6865\u5904\u7406",level:3},{value:"\u5728\u6240\u6709\u673a\u5668\u4e0a\u5b89\u88c5 <code>Docker</code> \u5b89\u88c5",id:"\u5728\u6240\u6709\u673a\u5668\u4e0a\u5b89\u88c5-docker-\u5b89\u88c5",level:3},{value:"\u5728\u6240\u6709\u673a\u5668\u4e0a\u5b89\u88c5 <code>cri-dockerd</code> \u5b89\u88c5",id:"\u5728\u6240\u6709\u673a\u5668\u4e0a\u5b89\u88c5-cri-dockerd-\u5b89\u88c5",level:3},{value:"\u5728\u6240\u6709\u673a\u5668\u4e0a\u5b89\u88c5 <code>kubeadmin</code> \u5b89\u88c5",id:"\u5728\u6240\u6709\u673a\u5668\u4e0a\u5b89\u88c5-kubeadmin-\u5b89\u88c5",level:3},{value:"\u5728master\u4e0a\u914d\u7f6e <code>kubeadm</code> \u53ca\u521d\u59cb\u5316",id:"\u5728master\u4e0a\u914d\u7f6e-kubeadm-\u53ca\u521d\u59cb\u5316",level:3},{value:"node \u8282\u70b9 join",id:"node-\u8282\u70b9-join",level:3},{value:"\u5728master\u8282\u70b9 \u5bf9node tag",id:"\u5728master\u8282\u70b9-\u5bf9node-tag",level:3},{value:"\u5728master\u4e0a\u5b89\u88c5 calico \u7f51\u7edc\u7ec4\u4ef6",id:"\u5728master\u4e0a\u5b89\u88c5-calico-\u7f51\u7edc\u7ec4\u4ef6",level:3},{value:"\u62a5\u9519\u5904\u7406",id:"\u62a5\u9519\u5904\u7406",level:2},{value:"\u6267\u884c<code>yum -y update</code>\u62a5\u95191",id:"\u6267\u884cyum--y-update\u62a5\u95191",level:3},{value:"\u6267\u884c<code>yum -y update</code>\u62a5\u95192",id:"\u6267\u884cyum--y-update\u62a5\u95192",level:3},{value:"<code>kubeadm join</code>\u62a5\u9519",id:"kubeadm-join\u62a5\u9519",level:3},{value:"kubulet \u91cd\u542f\u673a\u5668\u540e \u542f\u52a8\u5931\u8d25",id:"kubulet-\u91cd\u542f\u673a\u5668\u540e-\u542f\u52a8\u5931\u8d25",level:3}],d={toc:c},u="wrapper";function k(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,a.kt)("h3",{id:"\u8bbe\u5907\u51c6\u5907"},"\u8bbe\u5907\u51c6\u5907"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u4e3b\u673a"),(0,a.kt)("th",{parentName:"tr",align:null},"IP"),(0,a.kt)("th",{parentName:"tr",align:null},"\u7cfb\u7edf"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"master"),(0,a.kt)("td",{parentName:"tr",align:null},"192.168.3.162"),(0,a.kt)("td",{parentName:"tr",align:null},"Centos 8 kernel 4.18.0-240.el8.x86_64")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"node-1"),(0,a.kt)("td",{parentName:"tr",align:null},"192.168.3.163"),(0,a.kt)("td",{parentName:"tr",align:null},"Centos 8 kernel 4.18.0-240.el8.x86_64")))),(0,a.kt)("p",null,"\u51c6\u5907\u5b89\u88c5\u7248\u672c"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"k8s\u7248\u672c"),(0,a.kt)("th",{parentName:"tr",align:null},"docker\u7248\u672c"),(0,a.kt)("th",{parentName:"tr",align:null}))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"1.27.0"),(0,a.kt)("td",{parentName:"tr",align:null},"20.10.6"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null})))),(0,a.kt)("h2",{id:"\u4e3b\u6d41\u7a0b"},"\u4e3b\u6d41\u7a0b"),(0,a.kt)("h3",{id:"docker\u5220\u9664"},(0,a.kt)("a",{parentName:"h3",href:"https://cloud.tencent.com/developer/article/2132469"},"docker\u5220\u9664")),(0,a.kt)("p",null,"\u6267\u884c\u5982\u4e0b\u547d\u4ee4"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"yum list installed|grep docker | gawk -F ' ' '{ print $1 }' | xargs yum remove -y")),(0,a.kt)("h3",{id:"\u76f8\u5173\u6559\u7a0b"},"\u76f8\u5173\u6559\u7a0b"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://blog.51cto.com/u_15287666/5780765"},"\u6559\u7a0b1.14")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://blog.csdn.net/weixin_45310323/article/details/130494823"},"\u6559\u7a0b1.27")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"NOTES: \u5b89\u88c5K8S 1.27\u7248\u672c \u53c2\u8003",(0,a.kt)("a",{parentName:"p",href:"https://blog.csdn.net/weixin_45310323/article/details/130494823"},"\u6559\u7a0b1.27")),(0,a.kt)("p",{parentName:"blockquote"},"\u53c2\u8003\u539f\u535a\u5ba2\u90e8\u5206\u5730\u65b9\u811a\u672c\u6709\u4fee\u6539 \u4f18\u5316")),(0,a.kt)("h3",{id:"hostname-\u5904\u7406"},(0,a.kt)("inlineCode",{parentName:"h3"},"hostname")," \u5904\u7406"),(0,a.kt)("p",null,"\u5206\u522b\u6267\u884c 162 master 163 node-1"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"hostnamectl set-hostname master-1 && bash\nhostnamectl set-hostname node-1 && bash\n")),(0,a.kt)("h3",{id:"\u5728\u6240\u6709\u673a\u5668\u4e0a-\u5173\u95ed\u9632\u706b\u5899-\u7f51\u6865\u5904\u7406"},"\u5728\u6240\u6709\u673a\u5668\u4e0a \u5173\u95ed\u9632\u706b\u5899 \u7f51\u6865\u5904\u7406"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"# \u5173\u95ed\u9632\u706b\u5899\nsystemctl disable firewalld --now\nsetenforce 0\nsed  -i -r 's/SELINUX=[ep].*/SELINUX=disabled/g' /etc/selinux/config\nswapoff -a\nsed -i '/swap/s/^\\(.*\\)$/#\\1/g' /etc/fstab\n\ncat  >> /etc/hosts << EOF\n192.168.3.162 master-1\n192.168.3.163 node-1\nEOF\n\nntpdate ntp1.aliyun.com\necho \"0 1 * * * ntpdate ntp1.aliyun.com\" >> /var/spool/cron/root\ncrontab -l\n\n# \u7f51\u6865\u76f8\u5173\ncat >> /etc/sysctl.d/kubernetes.conf <<EOF\nnet.bridge.bridge-nf-call-ip6tables = 1\nnet.bridge.bridge-nf-call-iptables = 1\nnet.ipv4.ip_forward = 1\nEOF\n\nsysctl -p /etc/sysctl.d/kubernetes.conf\ncat >> /etc/sysctl.d/kubernetes.conf <<EOF\nnet.bridge.bridge-nf-call-ip6tables = 1\nnet.bridge.bridge-nf-call-iptables = 1\nnet.ipv4.ip_forward = 1\nEOF\n\nsysctl -p /etc/sysctl.d/kubernetes.conf\n\n# \u914d\u7f6eipvs\u529f\u80fd\nyum -y install ipset ipvsadm\n\ncat > /etc/sysconfig/modules/ipvs.modules <<EOF\nmodprobe -- ip_vs\nmodprobe -- ip_vs_rr\nmodprobe -- ip_vs_wrr\nmodprobe -- ip_vs_sh\nmodprobe -- nf_conntrack_ipv4  \nEOF\n\nchmod +x /etc/sysconfig/modules/ipvs.modules \n/etc/sysconfig/modules/ipvs.modules\nlsmod | grep -e ip_vs -e nf_conntrack_ipv4\n")),(0,a.kt)("h3",{id:"\u5728\u6240\u6709\u673a\u5668\u4e0a\u5b89\u88c5-docker-\u5b89\u88c5"},"\u5728\u6240\u6709\u673a\u5668\u4e0a\u5b89\u88c5 ",(0,a.kt)("inlineCode",{parentName:"h3"},"Docker")," \u5b89\u88c5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shel"},'\n# \u5b89\u88c5Docker\u5bb9\u5668\u7ec4\u4ef6\nyum install -y yum-utils\nyum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo\nyum install docker-ce-20.10.6 docker-ce-cli-20.10.6 -y\n\n\ncat <<EOF >  /etc/docker/daemon.json\n{\n  "exec-opts": ["native.cgroupdriver=systemd"],\n  "log-driver": "json-file",\n  "log-opts": {\n    "max-size": "100m"\n  },\n  "storage-driver": "overlay2",\n  "storage-opts": [\n    "overlay2.override_kernel_check=true"\n  ],\n  "registry-mirrors": ["https://docker.mirrors.ustc.edu.cn","https://igq6a6t6.mirror.aliyuncs.com","https://hub-mirror.c.163.com/","https://reg-mirror.qiniu.com"],\n  "data-root": "/data/docker"\n}\nEOF\n \nsystemctl start docker && systemctl enable docker\nps -ef|grep docker\n')),(0,a.kt)("h3",{id:"\u5728\u6240\u6709\u673a\u5668\u4e0a\u5b89\u88c5-cri-dockerd-\u5b89\u88c5"},"\u5728\u6240\u6709\u673a\u5668\u4e0a\u5b89\u88c5 ",(0,a.kt)("inlineCode",{parentName:"h3"},"cri-dockerd")," \u5b89\u88c5"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u8fd9\u91cc\u662f\u4e0d\u662f\u53ea\u7528\u5b89\u88c5",(0,a.kt)("inlineCode",{parentName:"p"},"cri-dockerd"),"\u5c31\u53ef\u4ee5 1.24.0 \u5f7b\u5e95\u79fb\u9664",(0,a.kt)("inlineCode",{parentName:"p"},"containerd-shim"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"# cri-dockerd\u63d2\u4ef6\nmv /usr/lib/systemd/system/cri-docker.service{,.default}\ncat <<EOF > /usr/lib/systemd/system/cri-docker.service \n[Unit]\nDescription=CRI Interface for Docker Application Container Engine\nDocumentation=https://docs.mirantis.com\nAfter=network-online.target firewalld.service docker.service\nWants=network-online.target\nRequires=cri-docker.socket\n[Service]\nType=notify\nExecStart=/usr/bin/cri-dockerd --network-plugin=cni --pod-infra-container-image=registry.aliyuncs.com/google_containers/pause:3.7\nExecReload=/bin/kill -s HUP $MAINPID\nTimeoutSec=0\nRestartSec=2\nRestart=always\nStartLimitBurst=3\nStartLimitInterval=60s\nLimitNOFILE=infinity\nLimitNPROC=infinity\nLimitCORE=infinity\nTasksMax=infinity\nDelegate=yes\nKillMode=process\n[Install]\nWantedBy=multi-user.target\nEOF\n\nsystemctl daemon-reload\nsystemctl start cri-docker.service \n\nsystemctl daemon-reload ; systemctl enable cri-docker --now\nsystemctl is-active cri-docker\n")),(0,a.kt)("h3",{id:"\u5728\u6240\u6709\u673a\u5668\u4e0a\u5b89\u88c5-kubeadmin-\u5b89\u88c5"},"\u5728\u6240\u6709\u673a\u5668\u4e0a\u5b89\u88c5 ",(0,a.kt)("inlineCode",{parentName:"h3"},"kubeadmin")," \u5b89\u88c5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"# kubeadmin\ncat <<EOF > /etc/yum.repos.d/kubernetes.repo\n[kubernetes]\nname=Kubernetes\nbaseurl=https://mirrors.aliyun.com/kubernetes/yum/repos/kubernetes-el7-x86_64/\nenabled=1\ngpgcheck=0\nEOF\n\nyum install -y kubelet-1.27.0 kubeadm-1.27.0 kubectl-1.27.0\n\nsystemctl enable kubelet.service --now\n")),(0,a.kt)("h3",{id:"\u5728master\u4e0a\u914d\u7f6e-kubeadm-\u53ca\u521d\u59cb\u5316"},"\u5728master\u4e0a\u914d\u7f6e ",(0,a.kt)("inlineCode",{parentName:"h3"},"kubeadm")," \u53ca\u521d\u59cb\u5316"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kubeadm config print init-defaults > kubeadm.yaml\ncat <<EOF > kubeadm.yaml\napiVersion: kubeadm.k8s.io/v1beta3\nbootstrapTokens:\n- groups:\n  - system:bootstrappers:kubeadm:default-node-token\n  token: abcdef.0123456789abcdef\n  ttl: 24h0m0s\n  usages:\n  - signing\n  - authentication\nkind: InitConfiguration\nlocalAPIEndpoint:\n  advertiseAddress: 192.168.3.162\n  bindPort: 6443\nnodeRegistration:\n  criSocket: unix:///var/run/cri-dockerd.sock\n  imagePullPolicy: IfNotPresent\n  name: master-1\n  taints: null\n---\napiServer:\n  timeoutForControlPlane: 4m0s\napiVersion: kubeadm.k8s.io/v1beta3\ncertificatesDir: /etc/kubernetes/pki\nclusterName: kubernetes\ncontrollerManager: {}\ndns: {}\netcd:\n  local:\n    dataDir: /var/lib/etcd\nimageRepository: registry.cn-hangzhou.aliyuncs.com/google_containers\nkind: ClusterConfiguration\nkubernetesVersion: 1.27.0\nnetworking:\n  dnsDomain: cluster.local\n  podSubnet: 10.244.0.0/16\n  serviceSubnet: 10.96.0.0/12\nscheduler: {}\n---\napiVersion: kubeproxy.config.k8s.io/v1alpha1\nkind: KubeProxyConfiguration\nmode: ipvs\n---\napiVersion: kubelet.config.k8s.io/v1beta1\nkind: KubeletConfiguration\ncgroupDriver: systemd\nEOF\n# \u521d\u59cb\u5316k8s master\nkubeadm init --config=kubeadm.yaml --ignore-preflight-errors=SystemVerification\n")),(0,a.kt)("p",null,"\u521d\u59cb\u5316\u8f93\u51fa"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'Your Kubernetes control-plane has initialized successfully!\n\nTo start using your cluster, you need to run the following as a regular user:\n\n  mkdir -p $HOME/.kube\n  sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config\n  sudo chown $(id -u):$(id -g) $HOME/.kube/config\n\nAlternatively, if you are the root user, you can run:\n\n  export KUBECONFIG=/etc/kubernetes/admin.conf\n\nYou should now deploy a pod network to the cluster.\nRun "kubectl apply -f [podnetwork].yaml" with one of the options listed at:\n  https://kubernetes.io/docs/concepts/cluster-administration/addons/\n\nThen you can join any number of worker nodes by running the following on each as root:\n\nkubeadm join 192.168.3.162:6443 --token abcdef.0123456789abcdef \\\n        --discovery-token-ca-cert-hash sha256:b277982a3a0f71f4f7aa586dcaa635006eb329621d357dc752122a08b7d44a58\n\n')),(0,a.kt)("p",null,"\u521d\u59cb\u5316\u914d\u7f6e\u4fee\u6539"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"mkdir -p $HOME/.kube\nsudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config\nsudo chown $(id -u):$(id -g) $HOME/.kube/config\n# dosome check\nkubectl get nodes\n\n")),(0,a.kt)("h3",{id:"node-\u8282\u70b9-join"},"node \u8282\u70b9 join"),(0,a.kt)("p",null,"\u5728Master\u8282\u70b9\u6267\u884c"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"kubeadm token create --print-join-command"),"\u547d\u4ee4\u8f93\u51fa"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"[root@master-1 ~]# kubeadm token create --print-join-command\nkubeadm join 192.168.3.162:6443 --token fqaz46.n8agq16nwsfxwyrm --discovery-token-ca-cert-hash sha256:b277982a3a0f71f4f7aa586dcaa635006eb329621d357dc752122a08b7d44a58\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\u52a0\u4e0a: ",(0,a.kt)("inlineCode",{parentName:"p"},"--cri-socket=unix:///var/run/cri-dockerd.sock"))),(0,a.kt)("p",null,"\u5728Node\u8282\u70b9\u6267\u884c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kubeadm join 192.168.3.162:6443 --token fqaz46.n8agq16nwsfxwyrm --discovery-token-ca-cert-hash sha256:b277982a3a0f71f4f7aa586dcaa635006eb329621d357dc752122a08b7d44a58 --cri-socket=unix:///var/run/cri-dockerd.sock\n")),(0,a.kt)("h3",{id:"\u5728master\u8282\u70b9-\u5bf9node-tag"},"\u5728master\u8282\u70b9 \u5bf9node tag"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"kubectl label node node-1 node-role.kubernetes.io/worker=worker")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"[root@master-1 ~]# kubectl get nodes\nNAME       STATUS     ROLES           AGE   VERSION\nmaster-1   NotReady   control-plane   18m   v1.27.0\nnode-1     NotReady   <none>          12m   v1.27.0\n[root@master-1 ~]# kubectl label node node-1 node-role.kubernetes.io/worker=worker\nnode/node-1 labeled\n[root@master-1 ~]# kubectl get nodes\nNAME       STATUS     ROLES           AGE   VERSION\nmaster-1   NotReady   control-plane   20m   v1.27.0\nnode-1     NotReady   worker          14m   v1.27.0\n\n")),(0,a.kt)("h3",{id:"\u5728master\u4e0a\u5b89\u88c5-calico-\u7f51\u7edc\u7ec4\u4ef6"},"\u5728master\u4e0a\u5b89\u88c5 calico \u7f51\u7edc\u7ec4\u4ef6"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u76ee\u524d\u5931\u8d25")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://pan.baidu.com/s/1ethvBXllogBZq3mMrWr3gg?pwd=1111"},"calico.yaml")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-SHELL"},"\nkubectl apply -f  calico.yaml\nkubectl get nodes\n\n")),(0,a.kt)("h2",{id:"\u62a5\u9519\u5904\u7406"},"\u62a5\u9519\u5904\u7406"),(0,a.kt)("h3",{id:"\u6267\u884cyum--y-update\u62a5\u95191"},"\u6267\u884c",(0,a.kt)("inlineCode",{parentName:"h3"},"yum -y update"),"\u62a5\u95191"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"[root@localhost ~]# yum -y update\nCentOS Linux 8 - AppStream                                 62  B/s |  38  B     00:00\nError: Failed to download metadata for repo 'appstream': Cannot prepare internal mirrorlist: No URLs in mirrorlist\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://qiita.com/yamada-hakase/items/cb1b6124e11ca65e2a2b"},"\u89e3\u51b3\u65b9\u6848")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"sed -i -e 's/^mirrorlist/#mirrorlist/g' -e 's/^#baseurl=http:\\/\\/mirror/baseurl=http:\\/\\/vault/g' /etc/yum.repos.d/CentOS-*repo")),(0,a.kt)("h3",{id:"\u6267\u884cyum--y-update\u62a5\u95192"},"\u6267\u884c",(0,a.kt)("inlineCode",{parentName:"h3"},"yum -y update"),"\u62a5\u95192"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u4e0d\u66f4\u65b0kernel\u4e5f\u662f\u53ef\u4ee5\u7528\u7684")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"You can remove cached packages by executing 'yum clean packages'.\nError: Transaction test error:\n  installing package kernel-core-4.18.0-348.7.1.el8_5.x86_64 needs 35MB on the /boot filesystem\n\nError Summary\n-------------\nDisk Requirements:\n   At least 35MB more space needed on the /boot filesystem.\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://haydenjames.io/fix-least-xmb-space-needed-boot-filesystem/"},"\u89e3\u51b3\u65b9\u6848\u94fe\u63a5")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"dnf remove --oldinstallonly --setopt installonly_limit=2 kernel")),(0,a.kt)("h3",{id:"kubeadm-join\u62a5\u9519"},(0,a.kt)("inlineCode",{parentName:"h3"},"kubeadm join"),"\u62a5\u9519"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"[root@node-1 ~]# kubeadm join 192.168.3.162:6443 --token fqaz46.n8agq16nwsfxwyrm --discovery-token-ca-cert-hash sha256:b277982a3a0f71f4f7aa586dcaa635006eb329621d357dc752122a08b7d44a58 --cri-socket=unix:///var/run/cri-dockerd.sock\n[preflight] Running pre-flight checks\nerror execution phase preflight: [preflight] Some fatal errors occurred:\n        [ERROR FileAvailable--etc-kubernetes-kubelet.conf]: /etc/kubernetes/kubelet.conf already exists\n        [ERROR FileAvailable--etc-kubernetes-bootstrap-kubelet.conf]: /etc/kubernetes/bootstrap-kubelet.conf already exists\n        [ERROR Port-10250]: Port 10250 is in use\n        [ERROR FileAvailable--etc-kubernetes-pki-ca.crt]: /etc/kubernetes/pki/ca.crt already exists\n[preflight] If you know what you are doing, you can make a check non-fatal with `--ignore-preflight-errors=...`\nTo see the stack trace of this error execute with --v=5 or higher\n\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"rm -rf /etc/kubernetes/kubelet.conf /etc/kubernetes/pki/ca.crt /etc/kubernetes/bootstrap-kubelet.conf\nnetstat -plnt\nkill -9 ${PID}\n\n")),(0,a.kt)("h3",{id:"kubulet-\u91cd\u542f\u673a\u5668\u540e-\u542f\u52a8\u5931\u8d25"},"kubulet \u91cd\u542f\u673a\u5668\u540e \u542f\u52a8\u5931\u8d25"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"kubectl get pods -n kube-system -o wide")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"[root@master-1 ~]# kubectl get pods -n kube-system -o wide\nThe connection to the server 192.168.3.162:6443 was refused - did you specify the right host or port?\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"journalctl -xeu kubelet")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'[root@master-1 ~]# journalctl -xeu kubelet\nMay 17 23:06:14 master-1 kubelet[7341]: W0517 23:06:14.626983    7341 logging.go:59] [core] [Channel #1 SubChannel #2] grpc: addrConn.createTransport failed to connect to {\nMay 17 23:06:14 master-1 kubelet[7341]:   "Addr": "/var/run/cri-dockerd.sock",\nMay 17 23:06:14 master-1 kubelet[7341]:   "ServerName": "/var/run/cri-dockerd.sock",\nMay 17 23:06:14 master-1 kubelet[7341]:   "Attributes": null,\nMay 17 23:06:14 master-1 kubelet[7341]:   "BalancerAttributes": null,\nMay 17 23:06:14 master-1 kubelet[7341]:   "Type": 0,\nMay 17 23:06:14 master-1 kubelet[7341]:   "Metadata": null\nMay 17 23:06:14 master-1 kubelet[7341]: }. Err: connection error: desc = "transport: Error while dialing dial unix /var/run/cri-dockerd.sock: connect: no such file or directory"\nMay 17 23:06:14 master-1 kubelet[7341]: E0517 23:06:14.627217    7341 run.go:74] "command failed" err="failed to run Kubelet: validate service connection: validate CRI v1 runtime API >\nMay 17 23:06:14 master-1 systemd[1]: kubelet.service: Main process exited, code=exited, status=1/FAILURE\nMay 17 23:06:14 master-1 systemd[1]: kubelet.service: Failed with result \'exit-code\'.\n-- Subject: Unit failed\n-- Defined-By: systemd\n-- Support: https://access.redhat.com/support\n--\n-- The unit kubelet.service has entered the \'failed\' state with result \'exit-code\'.\nlines 467-507/\n')),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://blog.csdn.net/weixin_38007578/article/details/117586266"},"\u67e5\u770b\u65b9\u6cd5")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get pods -n kube-system -o wide\n\njournalctl -xeu kubelet\n\nsystemctl status cri-docker\n# \u53d1\u73b0  cri-docker \u6ca1\u6709\u542f\u52a8 \u6ce8\u610f \u6bcf\u53f0\u673a\u5668\u90fd\u53ef\u80fd\u6709\u95ee\u9898\n\nsystemctl start cri-docker.service \nsystemctl restart kubelet\n\n\n")))}k.isMDXComponent=!0}}]);