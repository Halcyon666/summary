"use strict";(self.webpackChunksummary=self.webpackChunksummary||[]).push([[1532],{3689:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>t});var l=i(6070),s=i(5710);const r={},a="HBASE",o={id:"AI And BD/HBASE",title:"HBASE",description:"\u6982\u8ff0",source:"@site/docs/11-AI And BD/HBASE.md",sourceDirName:"11-AI And BD",slug:"/AI And BD/HBASE",permalink:"/en/AI And BD/HBASE",draft:!1,unlisted:!1,editUrl:"https://github.com/Halcyon666/summary/edit/main/i18n/en/docusaurus-plugin-content-docs/current/11-AI And BD/HBASE.md",tags:[],version:"current",lastUpdatedAt:1723735693e3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"cnblogs-theme-silence",permalink:"/en/Others/CnblogsThemeConfiguration/cnblogs-theme-silence configure plain style theme"},next:{title:"flink",permalink:"/en/AI And BD/flink"}},c={},t=[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:2},{value:"HBase\u662fApache\u63d0\u4f9b\u7684\u4e00\u5957\u57fa\u4e8eHadoop\u7684\u3001\u5206\u5e03\u5f0f\u7684\u3001\u53ef\u6269\u5c55\u7684\u3001\u975e\u5173\u7cfb\u578b\u6570\u636e\u5e93 - \u4e0d\u652f\u6301SQL",id:"hbase\u662fapache\u63d0\u4f9b\u7684\u4e00\u5957\u57fa\u4e8ehadoop\u7684\u5206\u5e03\u5f0f\u7684\u53ef\u6269\u5c55\u7684\u975e\u5173\u7cfb\u578b\u6570\u636e\u5e93---\u4e0d\u652f\u6301sql",level:3},{value:"\u7279\u70b9",id:"\u7279\u70b9",level:2},{value:"HBase\u9002\u5408\u4e8e\u5b58\u50a8\u7a00\u758f\u6570\u636e - HBase\u53ef\u4ee5\u5b58\u50a8\u7ed3\u6784\u5316\u6570\u636e\u548c\u534a\u7ed3\u6784\u5316\u6570\u636e",id:"hbase\u9002\u5408\u4e8e\u5b58\u50a8\u7a00\u758f\u6570\u636e---hbase\u53ef\u4ee5\u5b58\u50a8\u7ed3\u6784\u5316\u6570\u636e\u548c\u534a\u7ed3\u6784\u5316\u6570\u636e",level:3},{value:"\u884c\u5065 - Rowkey",id:"\u884c\u5065---rowkey",level:3},{value:"\u5217\u65cf/\u5217\u7c07 - Column Family\uff1a",id:"\u5217\u65cf\u5217\u7c07---column-family",level:3},{value:"\u540d\u79f0\u7a7a\u95f4 - namespace",id:"\u540d\u79f0\u7a7a\u95f4---namespace",level:3},{value:"\u5355\u5143\u683c - Cell",id:"\u5355\u5143\u683c---cell",level:3},{value:"hbase.txt",id:"hbasetxt",level:3},{value:"\u673a\u5236",id:"\u673a\u5236",level:2},{value:"1. \u5c06\u8868\u4ece\u884c\u5065\u65b9\u5411\u4e0a\u6765\u8fdb\u884c\u5207\u5206\uff0c\u5207\u5206\u51fa\u6765\u7684\u6bcf\u4e00\u90e8\u5206\u662f\u4e00\u4e2aHRegion\u3002\u4e00\u4e2a\u8868\u4e2d\u81f3\u5c11\u5b58\u57281\u4e2aHRegion",id:"1-\u5c06\u8868\u4ece\u884c\u5065\u65b9\u5411\u4e0a\u6765\u8fdb\u884c\u5207\u5206\u5207\u5206\u51fa\u6765\u7684\u6bcf\u4e00\u90e8\u5206\u662f\u4e00\u4e2ahregion\u4e00\u4e2a\u8868\u4e2d\u81f3\u5c11\u5b58\u57281\u4e2ahregion",level:3},{value:"1. \u5f53HBase\u542f\u52a8\u7684\u65f6\u5019\uff0c\u4f1a\u5728Zookeeper\u4e0a\u6765\u6ce8\u518c\u4e00\u4e2a/hbase\u8282\u70b9",id:"1-\u5f53hbase\u542f\u52a8\u7684\u65f6\u5019\u4f1a\u5728zookeeper\u4e0a\u6765\u6ce8\u518c\u4e00\u4e2ahbase\u8282\u70b9",level:3},{value:"HMaster",id:"hmaster",level:3},{value:"HBase\u7b2c\u4e00\u6b21\u8bfb\u5199\u5982\u4f55\u786e\u5b9aHregion\u4f4d\u7f6e",id:"hbase\u7b2c\u4e00\u6b21\u8bfb\u5199\u5982\u4f55\u786e\u5b9ahregion\u4f4d\u7f6e",level:3},{value:"HregionServer",id:"hregionserver",level:3},{value:"Compaction\u673a\u5236",id:"compaction\u673a\u5236",level:3},{value:"\u5199\u6d41\u7a0b",id:"\u5199\u6d41\u7a0b",level:3},{value:"\u8bfb\u53d6\u6d41\u7a0b",id:"\u8bfb\u53d6\u6d41\u7a0b",level:3}];function d(e){const n={h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"hbase",children:"HBASE"})}),"\n",(0,l.jsx)(n.h2,{id:"\u6982\u8ff0",children:"\u6982\u8ff0"}),"\n",(0,l.jsx)(n.h3,{id:"hbase\u662fapache\u63d0\u4f9b\u7684\u4e00\u5957\u57fa\u4e8ehadoop\u7684\u5206\u5e03\u5f0f\u7684\u53ef\u6269\u5c55\u7684\u975e\u5173\u7cfb\u578b\u6570\u636e\u5e93---\u4e0d\u652f\u6301sql",children:"HBase\u662fApache\u63d0\u4f9b\u7684\u4e00\u5957\u57fa\u4e8eHadoop\u7684\u3001\u5206\u5e03\u5f0f\u7684\u3001\u53ef\u6269\u5c55\u7684\u3001\u975e\u5173\u7cfb\u578b\u6570\u636e\u5e93 - \u4e0d\u652f\u6301SQL"}),"\n",(0,l.jsx)(n.h2,{id:"\u7279\u70b9",children:"\u7279\u70b9"}),"\n",(0,l.jsx)(n.h3,{id:"hbase\u9002\u5408\u4e8e\u5b58\u50a8\u7a00\u758f\u6570\u636e---hbase\u53ef\u4ee5\u5b58\u50a8\u7ed3\u6784\u5316\u6570\u636e\u548c\u534a\u7ed3\u6784\u5316\u6570\u636e",children:"HBase\u9002\u5408\u4e8e\u5b58\u50a8\u7a00\u758f\u6570\u636e - HBase\u53ef\u4ee5\u5b58\u50a8\u7ed3\u6784\u5316\u6570\u636e\u548c\u534a\u7ed3\u6784\u5316\u6570\u636e"}),"\n",(0,l.jsx)(n.p,{children:'HBase\u4e2d\uff0c\u5982\u679c\u9700\u8981\u5220\u9664\u4e00\u5f20\u8868\uff0c\u90a3\u4e48\u9996\u5148\u9700\u8981\u5148\u7981\u7528\u8fd9\u5f20\u8868\n\u5728\u521b\u5efa\u8868\u7684\u65f6\u5019\uff0c\u5982\u679c\u4e0d\u6307\u5b9a\u540d\u79f0\u7a7a\u95f4\uff0c\u90a3\u4e48\u9ed8\u8ba4\u5728default\u4e0b\nHBase\u662f\u57fa\u4e8eHadoop\u5b58\u50a8\u7684\uff0c\u5373\u672c\u8d28\u4e0a\u662f\u57fa\u4e8eHDFS\u6765\u5b58\u50a8\u7684\u3002HDFS\u7684\u7279\u70b9\u662f\u4e00\u6b21\u5199\u5165\u591a\u6b21\u8bfb\u53d6\uff0c\u4e0d\u5141\u8bb8\u4fee\u6539\uff1bHBase\u63d0\u4f9b\u4e86\u5b8c\u6574\u7684\u589e\u5220\u6539\u67e5\u7684\u80fd\u529b\uff0c\u5176\u4e2d\u7684"\u6539"\u600e\u4e48\u5b9e\u73b0\u7684\uff1f - HBase\u7684"\u6539"\u5e76\u4e0d\u662f\u4fee\u6539\u4e4b\u524d\u7684\u6570\u636e\u800c\u662f\u5728\u6587\u4ef6\u5c3e\u90e8\u8ffd\u52a0\uff0c\u5728\u6dfb\u52a0\u6bcf\u4e00\u6761\u6570\u636e\u7684\u65f6\u5019\u90fd\u4f1a\u6dfb\u52a0\u4e00\u4e2a\u65f6\u95f4\u6233\uff0c\u5728\u8bfb\u53d6\u6570\u636e\u7684\u65f6\u5019\u53ea\u9700\u8981\u8fd4\u56de\u6700\u65b0\u7684\u6570\u636e\u5c31\u80fd\u5b9e\u73b0\u6539\u7684\u6548\u679c - \u65f6\u95f4\u6233\u79f0\u4e4b\u4e3a\u662f\u6570\u636e\u7684\u7248\u672c\u53f7 - VERSION\n\u5728\u4e0d\u6307\u5b9a\u7684\u60c5\u51b5\u4e0b\uff0c\u9ed8\u8ba4\u53ea\u8fd4\u56de\u6700\u540e\u4e00\u4e2a\u7248\u672c\u7684\u6570\u636e\uff1b\u5982\u679c\u9700\u8981\u83b7\u53d6\u591a\u4e2a\u7248\u672c\u7684\u6570\u636e\uff0c\u90a3\u4e48\u9700\u8981\u5728\u5efa\u8868\u7684\u65f6\u5019\u5c31\u6307\u5b9a\u4fdd\u7559\u7248\u672c'}),"\n",(0,l.jsx)(n.h3,{id:"\u884c\u5065---rowkey",children:"\u884c\u5065 - Rowkey"}),"\n",(0,l.jsx)(n.p,{children:"a. \u7b49\u4ef7\u4e8e\u5173\u7cfb\u578b\u6570\u636e\u5e93\u4e2d\u7684\u4e3b\u952e\nb. \u884c\u5065\u5728\u5efa\u8868\u7684\u65f6\u5019\u4e0d\u9700\u8981\u6307\u5b9a\uff0c\u800c\u662f\u5728\u6dfb\u52a0\u6570\u636e\u7684\u65f6\u5019\u52a8\u6001\u6307\u5b9a\nc. \u884c\u5065\u9ed8\u8ba4\u662f\u6309\u7167\u5b57\u5178\u5e8f\u6392\u5e8f"}),"\n",(0,l.jsx)(n.h3,{id:"\u5217\u65cf\u5217\u7c07---column-family",children:"\u5217\u65cf/\u5217\u7c07 - Column Family\uff1a"}),"\n",(0,l.jsx)(n.p,{children:"a. \u5728HBase\u4e2d\uff0c\u4e0d\u5173\u6ce8\u5217\uff0c\u5173\u6ce8\u7684\u662f\u5217\u65cf - \u5728\u5efa\u8868\u7684\u65f6\u5019\u9700\u8981\u6307\u5b9a\u5217\u65cf\u4f46\u662f\u4e0d\u9700\u8981\u6307\u5b9a\u5217\uff0c\u5217\u662f\u53ef\u4ee5\u52a8\u6001\u589e\u5220\u7684\nb. \u4e00\u4e2a\u5217\u65cf\u4e2d\u53ef\u4ee5\u5305\u542b0\u5230\u591a\u4e2a\u5217\nc. \u4e00\u4e2a\u5217\u65cf\u5c31\u7b49\u4ef7\u4e8e\u5173\u7cfb\u578b\u6570\u636e\u5e93\u4e2d\u7684\u4e00\u5f20\u8868\nd. \u6bcf\u4e00\u5f20\u8868\u4e2d\u81f3\u5c11\u5305\u542b1\u4e2a\u5217\u65cf\ncreate 'person','basic','expand' // person \u884c\u952e basic expand \u5217\u7c07"}),"\n",(0,l.jsx)(n.h3,{id:"\u540d\u79f0\u7a7a\u95f4---namespace",children:"\u540d\u79f0\u7a7a\u95f4 - namespace"}),"\n",(0,l.jsxs)(n.p,{children:["a. \u7b49\u4ef7\u4e8e\u5173\u7cfb\u578b\u6570\u636e\u5e93\u4e2d\u7684database\nb. \u5982\u679c\u4e0d\u6307\u5b9a\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u8868\u653e\u5728default\ncreate 'hbasedemo",":person","','basic','expand' //\u5728hbasedemo\u547d\u540d\u7a7a\u95f4\u4e2d\u7684person\u8868"]}),"\n",(0,l.jsx)(n.h3,{id:"\u5355\u5143\u683c---cell",children:"\u5355\u5143\u683c - Cell"}),"\n",(0,l.jsx)(n.p,{children:"a. \u884c\u5065+\u5217\u65cf+\u5217+\u65f6\u95f4\u6233/\u7248\u672c\u552f\u4e00\u9501\u5b9a\u4e00\u4e2acell\nb. \u6bcf\u4e00\u4e2acell\u4e2d\u5305\u542b\u4e00\u4e2a\u65f6\u95f4\u6233"}),"\n",(0,l.jsx)(n.h3,{id:"hbasetxt",children:"hbase.txt"}),"\n",(0,l.jsx)(n.h2,{id:"\u673a\u5236",children:"\u673a\u5236"}),"\n",(0,l.jsx)(n.h3,{id:"1-\u5c06\u8868\u4ece\u884c\u5065\u65b9\u5411\u4e0a\u6765\u8fdb\u884c\u5207\u5206\u5207\u5206\u51fa\u6765\u7684\u6bcf\u4e00\u90e8\u5206\u662f\u4e00\u4e2ahregion\u4e00\u4e2a\u8868\u4e2d\u81f3\u5c11\u5b58\u57281\u4e2ahregion",children:"1. \u5c06\u8868\u4ece\u884c\u5065\u65b9\u5411\u4e0a\u6765\u8fdb\u884c\u5207\u5206\uff0c\u5207\u5206\u51fa\u6765\u7684\u6bcf\u4e00\u90e8\u5206\u662f\u4e00\u4e2aHRegion\u3002\u4e00\u4e2a\u8868\u4e2d\u81f3\u5c11\u5b58\u57281\u4e2aHRegion"}),"\n",(0,l.jsxs)(n.ol,{start:"2",children:["\n",(0,l.jsx)(n.li,{children:"\u6bcf\u4e00\u4e2aHRegion\u4f1a\u5206\u914d\u67d0\u4e00\u4e2aHRegionServer\u6765\u8fdb\u884c\u7ba1\u7406"}),"\n",(0,l.jsx)(n.li,{children:"\u56e0\u4e3a\u884c\u952e\u662f\u6709\u5e8f\u7684\uff0c\u6240\u4ee5\u6bcf\u4e00\u4e2aHRegion\u4e4b\u95f4\u7684\u6570\u636e\u8303\u56f4\u662f\u4e0d\u4ea4\u53c9\u7684\uff0c\u4e5f\u56e0\u6b64\u4e0d\u540c\u7684\u884c\u5065\u53ef\u4ee5\u5230\u4e0d\u540c\u7684HRegionServer\u4e0a\u6765\u8fdb\u884c\u5904\u7406"}),"\n",(0,l.jsx)(n.li,{children:"HRegion\u4e0d\u5b58\u50a8\u6570\u636e\uff0c\u6570\u636e\u6700\u7ec8\u662f\u843d\u5730\u5230HDFS\u4e0a\uff0cHRegion\u662f\u7ba1\u7406\u6570\u636e"}),"\n",(0,l.jsx)(n.li,{children:"\u5f53HRegion\u7684\u5927\u5c0f\uff08HRegion\u7ba1\u7406\u7684\u6570\u636e\u7684\u5927\u5c0f\uff09\u8fbe\u5230\u4e00\u5b9a\u9650\u5ea6\uff08\u9ed8\u8ba4\u662f10G\uff09\u7684\u65f6\u5019\uff0cHRegion\u5c31\u4f1a\u5206\u88c2\u4e3a\u5747\u7b49\u4e24\u4e2aHRegion\uff0c\u5206\u88c2\u51fa\u6765\u7684\u5176\u4e2d\u4e00\u4e2aHRegion\u4f1a\u8f6c\u79fb\u7ed9\u53e6\u4e00\u4e2aHRegionServer\u6765\u7ba1\u7406\u3002\u6ce8\u610f\uff1a\u8fd9\u4e2a\u8fc7\u7a0b\u4e2d\u6570\u636e\u4e0d\u4f1a\u4ea7\u751f\u8f6c\u79fb"}),"\n",(0,l.jsx)(n.li,{children:"HRegionServer\u7ba1\u7406HRegion\uff0cHRegion\u7ba1\u7406\u6570\u636e"}),"\n",(0,l.jsx)(n.li,{children:"HRegion\u662fHBase\u8fdb\u884c\u5206\u5e03\u5f0f\u5b58\u50a8\u548c\u8d1f\u8f7d\u5747\u8861\u7684\u6700\u5c0f\u5355\u4f4d\uff0c\u4f46\u662f\u4e0d\u662f\u6570\u636e\u5b58\u50a8\u7684\u6700\u5c0f\u5355\u4f4d"}),"\n",(0,l.jsx)(n.li,{children:"HRegion\u7684\u7ed3\u6784\uff1a\na. \u6bcf\u4e00\u4e2aHRegion\u5305\u542b1\u4e2a\u5230\u591a\u4e2aHStore\uff0cHStore\u7684\u6570\u91cf\u7531\u5217\u65cf\u6570\u91cf\u51b3\u5b9a\nb. \u6bcf\u4e00\u4e2aHStore\u4e2d\u5305\u542b\u4e861\u4e2amemStore\uff08\u5199\u7f13\u5b58\uff09\u4ee5\u53ca0\u5230\u591a\u4e2aStoreFile/HFile\nc. HBase\u4e2d\u7684\u6570\u636e\u6700\u7ec8\u662f\u5b58\u50a8\u5230HFile\u4e2d\uff0cHFile\u6700\u7ec8\u4f1a\u843d\u5730\u5230HDFS\u4e0a"}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:""}),"\n",(0,l.jsx)(n.h3,{id:"1-\u5f53hbase\u542f\u52a8\u7684\u65f6\u5019\u4f1a\u5728zookeeper\u4e0a\u6765\u6ce8\u518c\u4e00\u4e2ahbase\u8282\u70b9",children:"1. \u5f53HBase\u542f\u52a8\u7684\u65f6\u5019\uff0c\u4f1a\u5728Zookeeper\u4e0a\u6765\u6ce8\u518c\u4e00\u4e2a/hbase\u8282\u70b9"}),"\n",(0,l.jsxs)(n.ol,{start:"2",children:["\n",(0,l.jsx)(n.li,{children:"\u5f53Active HMaster\u542f\u52a8\u7684\u65f6\u5019\uff0c\u4f1a\u5728Zookeeper\u7684/hbase\u8282\u70b9\u4e0b\u6765\u6ce8\u518c\u4e00\u4e2a\u4e34\u65f6\u5b50\u8282\u70b9/hbase/master - Active HMaster\u4f1a\u901a\u8fc7\u5fc3\u8df3\u53bb\u7ef4\u6301\u5728Zookeeper\u4e0a\u6ce8\u518c\u7684\u8fd9\u4e2a\u4e34\u65f6\u8282\u70b9\uff0c\u4e5f\u5c31\u610f\u5473\u7740\u4e00\u65e6HMaster\u5b95\u673a\uff0c\u5bf9\u5e94\u7684\u5fc3\u8df3\u6ca1\u4e86\uff0c\u90a3\u8fd9\u4e2a\u4e34\u65f6\u8282\u70b9\u4e5f\u5c31\u6d88\u5931\uff0cZookeeper\u5c31\u77e5\u9053\u9700\u8981\u4eceBackup HMasters\u91cd\u65b0\u627e\u4e00\u4e2a\u5207\u6362\u4e3aActive"}),"\n",(0,l.jsx)(n.li,{children:"\u5f53Backup HMaster\u542f\u52a8\u7684\u65f6\u5019\uff0c\u4f1a\u5728Zookeeper\u7684/hbase/backup-masters\u8282\u70b9\u4e0b\u6ce8\u518c\u4e34\u65f6\u7684\u5b50\u8282\u70b9\n4.\u5f53HRegionServer\u542f\u52a8\u7684\u65f6\u5019\uff0c\u4e5f\u4f1a\u5728Zookeeper\u7684/hbase/rs\u8282\u70b9\u4e0b\u6765\u6ce8\u518c\u5b50\u8282\u70b9"}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"hmaster",children:"HMaster"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"\u5728HBase\u4e2d\uff0cHMaster\u7684\u4e2a\u6570\u4e0d\u53d7\u9650\u5236\uff0c\u53ef\u4ee5\u542f\u52a8\u4efb\u610f\u591a\u4e2aHMaster\uff0c\u53ef\u4ee5\u901a\u8fc7\u547d\u4ee4\uff1ash hbase-daemon.sh start master"}),"\n",(0,l.jsx)(n.li,{children:"\u8c01\u5148\u542f\u52a8\u8c01\u5c31\u662fActive HMaster"}),"\n",(0,l.jsx)(n.li,{children:"Active HMaster\u4f1a\u76d1\u63a7Zookeeper\u4e0a\u7684\u8282\u70b9/hbase/backup-masters\uff0c\u76d1\u63a7\u8fd9\u4e2a\u8282\u70b9\u4e0b\u7684\u5b50\u8282\u70b9\u4e2a\u6570\u662f\u5426\u53d1\u751f\u53d8\u5316"}),"\n",(0,l.jsx)(n.li,{children:"Active HMaster\u6bcf\u6b21\u540c\u6b65\u6d88\u606f\u7684\u65f6\u5019\u90fd\u4f1a\u76d1\u63a7/hbase/backup-masters"}),"\n",(0,l.jsx)(n.li,{children:"\u5b9e\u9645\u8fc7\u7a0b\u4e2d\uff0cHMaster\u7684\u8282\u70b9\u4e2a\u6570\u4e00\u822c\u4e0d\u8d85\u8fc73\u4e2a\uff1a1A2B"}),"\n",(0,l.jsx)(n.li,{children:"HMaster\u7684\u4f5c\u7528/\u804c\u8d23\uff1a\na. \u7ba1\u7406HRegionServer\nb. \u8d1f\u8d23HBase\u4e2d\u8868\u7684ddl\uff08\u5bf9\u8868\u7ed3\u6784\u7684\u64cd\u4f5c\uff09\u64cd\u4f5c\uff0c\u5982\u679c\u662fdml\uff08\u5bf9\u8868\u4e2d\u6570\u636e\u7684\u64cd\u4f5c\uff09\u64cd\u4f5c\u4e0d\u7ecf\u8fc7HMaster"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"hbase\u7b2c\u4e00\u6b21\u8bfb\u5199\u5982\u4f55\u786e\u5b9ahregion\u4f4d\u7f6e",children:"HBase\u7b2c\u4e00\u6b21\u8bfb\u5199\u5982\u4f55\u786e\u5b9aHregion\u4f4d\u7f6e"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{}),"\n",(0,l.jsx)(n.li,{}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"a. \u5ba2\u6237\u7aef\u5728\u83b7\u53d6\u5230.meta.\u6587\u4ef6\u7684\u4f4d\u7f6e\u4e4b\u540e\u4f1a\u7f13\u5b58\u8fd9\u4e2a\u4f4d\u7f6e\nb. \u5ba2\u6237\u7aef\u5728\u8bfb\u53d6.meta.\u4e4b\u540e\uff0c\u4f1a\u7f13\u5b58.meta.\u6587\u4ef6\u4e2d\u7684\u5185\u5bb9\nc. \u5982\u679c\u5ba2\u6237\u7aef\u5b95\u673a\u6216\u8005\u4ea7\u751fHRegion\u7684\u8f6c\u79fb\uff0c\u6b64\u65f6\u7f13\u5b58\u5c31\u4f1a\u5931\u6548\uff0c\u9700\u8981\u4ece\u65b0\u5efa\u7acb"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"hregionserver",children:"HregionServer"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"HRegionServer\u7684\u4f5c\u7528\u662f\u7528\u4e8e\u7ba1\u7406HRegion\uff0c\u5b98\u65b9\u6587\u6863\u4e2d\u7ed9\u5b9a\uff1a\u6bcf\u4e00\u4e2aHRegionServer\u80fd\u591f\u7ba1\u74061000\u4e2aHRegion\uff0c\u6bcf\u4e00\u4e2aHRegion\u6700\u591a\u53ef\u4ee5\u7ba1\u740610G\u6570\u636e\n2.HRegionServer\u5305\u542b\u4e861\u4e2aWAL\uff0c1\u4e2aBlockCache\u4ee5\u53ca0\u5230\u591a\u4e2aHRegion"}),"\n",(0,l.jsx)(n.li,{children:"WAL - Write Ahead Log -> HLog - \u5199\u65e5\u5fd7\na. WAL\u662f\u843d\u5730\u5728HDFS\u4e0a\nb. \u5f53HRegionServer\u5728\u6536\u5230\u5199\u8bf7\u6c42\u4e4b\u540e\uff0c\u4f1a\u73b0\u5c06\u8bf7\u6c42\u8bb0\u5f55\u5230WAL\u4e2d\uff0c\u8bb0\u5f55\u6210\u529f\u4e4b\u540e\u518d\u5c06\u6570\u636e\u66f4\u65b0\u5230memStore\u4e2d\uff0c\u8fd9\u6837\u505a\u7684\u76ee\u7684\u662f\u4e3a\u4e86\u9632\u6b62\u6570\u636e\u4e22\u5931\nc. WAL\u8fbe\u5230\u4e00\u5b9a\u9650\u5ea6\u4e4b\u540e\uff0c\u4f1a\u4ea7\u751f\u4e00\u4e2a\u65b0\u7684WAL\uff0c\u540c\u65f6\u539f\u6765\u7684WAL\u4f1a\u53d8\u6210oldWAL\uff0c\u4f1a\u88ab\u5b9a\u65f6\u6e05\u7406\u6389\nd. \u5728HBase0.94\u4e4b\u524d\uff0cWAL\u662f\u53ea\u8fd0\u884c\u4e32\u884c\u5199\uff1b\u4eceHBase0.94\u5f00\u59cb\uff0c\u5f15\u5165\u4e86NIO\u7684\u901a\u9053\u673a\u5236\uff0c\u5141\u8bb8WAL\u7684\u5e76\u884c\u5199"}),"\n",(0,l.jsx)(n.li,{children:'BlockCache - \u5757\u7f13\u5b58\na. BlockCache\u672c\u8d28\u4e0a\u662f\u4e00\u4e2a\u8bfb\u7f13\u5b58\uff0c\u7ef4\u7cfb\u5728\u5185\u5b58\u4e2d\nb. BlockCache\u5728\u7f13\u5b58\u7684\u65f6\u5019\u9075\u5faa"\u5c40\u90e8\u6027"\u539f\u7406 - \u731c\uff1a\ni. \u65f6\u95f4\u5c40\u90e8\u6027\uff1a\u5982\u679c\u4e00\u6761\u6570\u636e\u88ab\u8bfb\u53d6\u8fc7\uff0c\u53ef\u4ee5\u8ba4\u4e3a\u8fd9\u6761\u6570\u636e\u88ab\u7b2c\u4e8c\u6b21\u8bfb\u53d6\u7684\u6982\u7387\u4f1a\u9ad8\u4e8e\u5176\u4ed6\u6570\u636e\uff0cHBase\u5c31\u5c06\u8fd9\u6761\u6570\u636e\u653e\u5165\u8bfb\u7f13\u5b58\u4e2d\nii. \u7a7a\u95f4\u5c40\u90e8\u6027\uff1a\u5982\u679c\u4e00\u6761\u6570\u636e\u88ab\u8bfb\u53d6\u8fc7\uff0c\u90a3\u4e48\u53ef\u4ee5\u8ba4\u4e3a\u4e0e\u8fd9\u6761\u6570\u636e\u76f8\u90bb\u7684\u6570\u636e\u88ab\u8bfb\u53d6\u7684\u6982\u7387\u8981\u9ad8\u4e8e\u5176\u4ed6\u6570\u636e\uff0c\u90a3\u4e48\u5c31\u5c06\u8fd9\u6761\u6570\u636e\u76f8\u90bb\u7684\u6570\u636e\u4e5f\u653e\u5165\u7f13\u5b58\u4e2d\nc. BlockCache\u7684\u9ed8\u8ba4\u5927\u5c0f\u662f128M\nd. BlockCache\u91c7\u53d6\u4e86LRU\u7b56\u7565\n\u5728\u5b9e\u9645\u8fc7\u7a0b\u4e2d\uff0c\u5982\u679cscan\u64cd\u4f5c\u504f\u591a\uff0c\u90a3\u4e48\u8fd9\u4e2a\u65f6\u5019\u5c31\u4f1a\u5173\u95ed\u8fd9\u4e2aBlockCache\uff1b\u5982\u679cget\u64cd\u4f5c\u504f\u591a\uff0c\u53ef\u4ee5\u8003\u8651\u4f7f\u7528BlockCache'}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.li,{}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"compaction\u673a\u5236",children:"Compaction\u673a\u5236"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"HBase\u63d0\u4f9b\u4e862\u79cd\u5408\u5e76\u673a\u5236\uff1a\na. minor compact\uff1a\u5c06\u4e00\u4e2aHRegion\u76f8\u90bb\u7684\u51e0\u4e2a\u5c0f\u7684HFile\u5408\u5e76\u6210\u4e00\u4e2a\u5927\u7684HFile\uff0c\u5408\u5e76\u5b8c\u6210\u4e4b\u540e\u4f9d\u7136\u4f1a\u5b58\u5728\u597d\u51e0\u4e2aHFile\nb. major compact\uff1a\u5c06\u4e00\u4e2aHRegion\u6240\u6709\u7684HFile\u5408\u5e76\u6210\u4e00\u4e2aHFile\uff0c\u5408\u5e76\u5b8c\u6210\u4e4b\u540e\u53ea\u67091\u4e2aHFile"}),"\n",(0,l.jsx)(n.li,{children:"minor compact\u7684\u6548\u7387\u76f8\u5bf9\u8f83\u9ad8\uff0c\u6240\u4ee5HBase\u4e2d\u9ed8\u8ba4\u4e5f\u662fminor compact\nHFile\u5728\u5408\u5e76\u8fc7\u7a0b\u4e2d\uff0c\u4f1a\u820d\u5f03\u6389\u88ab\u6807\u8bb0\u4e3a\u5220\u9664\u7684\u6570\u636e\u4ee5\u53ca\u8fc7\u65f6\u7684\u6570\u636e\uff08\u53ef\u4ee5\u4fdd\u7559\u6570\u636e\u7684\u591a\u4e2a\u7248\u672c\uff09"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"\u5199\u6d41\u7a0b",children:"\u5199\u6d41\u7a0b"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"\u5f53HBase\u63a5\u6536\u5230\u5199\u8bf7\u6c42(put/delete/deleteall)\u7684\u65f6\u5019\uff0c\u9996\u5148\u9700\u8981\u786e\u5b9a\u5c06\u6570\u636e\u5199\u5230\u54ea\u4e00\u4e2aHRegion\u4e2d"}),"\n",(0,l.jsx)(n.li,{children:"\u627e\u5230\u5bf9\u5e94\u7684HRegionServer\uff0c\u5c06\u8fd9\u4e2a\u5199\u8bf7\u6c42\u8bb0\u5f55\u5230WAL\u4e2d\uff0c\u7136\u540e\u5c06\u6570\u636e\u66f4\u65b0\u5230memStore\u4e2d"}),"\n",(0,l.jsx)(n.li,{children:"\u6570\u636e\u5728\u66f4\u65b0\u5230memStore\u4e2d\u4e4b\u540e\uff0c\u4f1a\u8fdb\u884c\u6392\u5e8f\uff1a\u884c\u5065\u5b57\u5178\u5e8f -> \u5217\u65cf\u540d\u5b57\u5178\u5e8f -> \u5217\u540d\u5b57\u5178\u5e8f -> \u65f6\u95f4\u6233\u5012\u5e8f"}),"\n",(0,l.jsx)(n.li,{children:"memStore\u7ef4\u7cfb\u5728\u5185\u5b58\u4e2d\uff0cmemStore\u7684\u5927\u5c0f\u662f128M"}),"\n",(0,l.jsx)(n.li,{children:"memStore\u8fbe\u5230\u4e00\u5b9a\u6761\u4ef6\u4e4b\u540e\u5c31\u4f1a\u51b2\u5237\u4ea7\u751f\u4e00\u4e2a\u65b0\u7684StoreFile/HFile - \u5355\u4e2aHFile\u662f\u6709\u5e8f\u7684\uff1b\u5982\u679c\u4ea7\u751f\u8fc7\u591a\u6b21\u51b2\u5237\uff0c\u90a3\u4e48\u6240\u6709\u7684HFile\u4e4b\u95f4\u662f\u5c40\u90e8\u6709\u5e8f"}),"\n",(0,l.jsx)(n.li,{children:"memStore\u7684\u51b2\u5237\u6761\u4ef6\uff1a\na. memStore\u7528\u6ee1\u4e4b\u540e\u4f1a\u81ea\u52a8\u51b2\u5237\nb. \u9ed8\u8ba4\u5f53WAL\u8fbe\u52301G\u7684\u65f6\u5019\uff0cmemStore\u4e5f\u4f1a\u51b2\u5237\uff0c\u5e76\u4e14\u4ea7\u751f\u4e00\u4e2a\u65b0\u7684WAL\nc. \u5f53\u4e00\u4e2aHRegionServer\u4e0a\u7684\u6240\u6709\u7684memStore\u6240\u5360\u7528\u7684\u5185\u5b58\u4e4b\u548c\u8fbe\u5230\u4e86\u7269\u7406\u5185\u5b58\u768435%\u7684\u65f6\u5019\uff0c\u5c31\u4f1a\u51b2\u5237\u6700\u5927\u7684memStore"}),"\n",(0,l.jsx)(n.li,{children:"HFile\u6700\u7ec8\u4f1a\u843d\u5730\u5230HDFS\u4e0a"}),"\n",(0,l.jsxs)(n.li,{children:["HFile\u7684\u7b2c\u4e00\u4e2a\u7248\u672c\u7684\u683c\u5f0f\uff1a\na. DataBlock\uff1a\u5b58\u50a8\u6570\u636e\ni. DataBlock\u662fHBase\u4e2d\u7684\u6700\u5c0f\u5b58\u50a8\u5355\u5143\nii. DataBlock\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u662f64KB\u3002\u5c0f\u7684DataBlock\u66f4\u5229\u4e8e\u67e5\u8be2\uff08get\uff09\uff1b\u5927\u7684DataBlock\u66f4\u5229\u4e8e\u904d\u5386\uff08scan\uff09\niii. \u8bfb\u7f13\u5b58\u7684\u7a7a\u95f4\u5c40\u90e8\u6027\u662f\u4ee5DataBlock\u4e3a\u5355\u4f4d\u7f13\u5b58\niv. \u6bcf\u4e00\u4e2aDataBlock\u7531\u4e00\u4e2aMagic\u548c\u591a\u4e2aKeyValue\u7ec4\u6210","\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"Magic\uff1a\u9b54\u6570\u3002\u672c\u8d28\u4e0a\u662f\u4e00\u4e2a\u968f\u673a\u6570\uff0c\u4f5c\u7528\u662f\u7528\u4e8e\u6821\u9a8c"}),"\n",(0,l.jsx)(n.li,{children:"KeyValue\uff1a\u952e\u503c\u5bf9\u3002\u7528\u4e8e\u771f\u6b63\u5b58\u50a8\u6570\u636e\nb. MetaBlock\uff1a\u5b58\u50a8\u5143\u6570\u636e\u3002\u53ea\u4f1a\u51fa\u73b0\u5728.meta.\u6587\u4ef6\u4e2d\nc. FileInfo\uff1a\u6587\u4ef6\u4fe1\u606f\u3002\u5bf9\u5f53\u524dHFile\u7684\u63cf\u8ff0\nd. DataIndex\uff1a\u8bb0\u5f55\u6bcf\u4e00\u4e2aDataBlock\u5728\u6587\u4ef6\u4e2d\u8d77\u59cb\u5b57\u8282\ne. MetaIndex\uff1a\u8bb0\u5f55\u6bcf\u4e00\u4e2aMetaBlock\u5728\u6587\u4ef6\u4e2d\u8d77\u59cb\u5b57\u8282\nf. Trailer\uff1a\u5728\u6587\u4ef6\u672b\u5c3e\uff0c\u56fa\u5b9a4\u4e2a\u5b57\u8282\uff0c\u524d2\u4e2a\u5b57\u8282\u8bb0\u5f55DataIndex\u7684\u4f4d\u7f6e\uff0c\u540e2\u4e2a\u5b57\u8282\u8bb0\u5f55MetaIndex\u7684\u4f4d\u7f6e"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.li,{children:"HFile\u7684\u7b2c\u4e8c\u4e2a\u7248\u672c\u4e2d\uff0c\u65b0\u6dfb\u4e86\u4e00\u4e2a\u5e03\u9686\u8fc7\u6ee4\u5668\uff1a"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"\u8bfb\u53d6\u6d41\u7a0b",children:"\u8bfb\u53d6\u6d41\u7a0b"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"\u5f53HBase\u6536\u5230\u8bfb\u53d6\u8bf7\u6c42\u7684\u65f6\u5019\uff0c\u4f1a\u5148\u9501\u5b9a\u552f\u4e00\u7684HRegion\uff0cHRegion\u4f1a\u7531\u67d0\u4e00\u4e2aHRegionServer\u7ba1\u7406\uff0c\u6240\u4ee5\u76f8\u5f53\u4e8e\u9501\u5b9a\u4e86\u552f\u4e00\u7684HRegionServer"}),"\n",(0,l.jsx)(n.li,{children:"\u5148\u8bd5\u56fe\u4eceBlockCache\u4e2d\u8bfb\u53d6\u6570\u636e\uff1b\u5982\u679c\u8bfb\u4e0d\u5230\uff0c\u90a3\u4e48\u8bd5\u56fe\u8bfb\u53d6memStore\uff1b\u5982\u679cmemStore\u4e5f\u6ca1\u6709\u8bfb\u5230\uff0c \u90a3\u4e48\u5c31\u5f97\u8bfb\u53d6HFile"}),"\n",(0,l.jsx)(n.li,{children:"\u5728\u8bfb\u53d6HFile\u7684\u65f6\u5019\uff0c\u4f1a\u5148\u6839\u636e\u884c\u5065\u8303\u56f4\u7b5b\u9009\u6389\u4e0d\u7b26\u5408\u8303\u56f4\u7684HFile\uff1b\u6839\u636e\u8303\u56f4\u7b5b\u9009\u5b8c\u6210\u4e4b\u540e\uff0c\u4f1a\u518d\u5229\u7528\u5e03\u9686\u8fc7\u6ee4\u5668\u6765\u8fdb\u884c\u4e8c\u6b21\u7b5b\u9009"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.li,{}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},5710:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>o});var l=i(758);const s={},r=l.createContext(s);function a(e){const n=l.useContext(r);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),l.createElement(r.Provider,{value:n},e.children)}}}]);