"use strict";(self.webpackChunksummary=self.webpackChunksummary||[]).push([[2318],{4957:(n,e,a)=>{a.r(e),a.d(e,{assets:()=>c,contentTitle:()=>s,default:()=>l,frontMatter:()=>o,metadata:()=>i,toc:()=>m});var t=a(1527),r=a(8672);const o={},s=void 0,i={id:"AI And BD/flink",title:"flink",description:"",source:"@site/docs/11-AI And BD/flink.md",sourceDirName:"11-AI And BD",slug:"/AI And BD/flink",permalink:"/en/AI And BD/flink",draft:!1,unlisted:!1,editUrl:"https://github.com/Halcyon666/summary/edit/main/i18n/en/docusaurus-plugin-content-docs/current/11-AI And BD/flink.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"HBASE",permalink:"/en/AI And BD/HBASE"},next:{title:"hadoop",permalink:"/en/AI And BD/hadoop"}},c={},m=[];function d(n){const e={code:"code",pre:"pre",...(0,r.a)(),...n.components};return(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-shell",children:'tee flink.yml <<- \'EOF\'\n\nversion: "2.2"\nservices:\n  jobmanager:\n    image: flink:1.15.4-scala_2.12\n    ports:\n      - "8081:8081"\n    command: jobmanager\n    environment:\n      - |\n        FLINK_PROPERTIES=\n        jobmanager.rpc.address: jobmanager        \n\n  taskmanager:\n    image: flink:1.15.4-scala_2.12\n    depends_on:\n      - jobmanager\n    command: taskmanager\n    scale: 1\n    environment:\n      - |\n        FLINK_PROPERTIES=\n        jobmanager.rpc.address: jobmanager\n        taskmanager.numberOfTaskSlots: 2        \n  sql-client:\n    image: flink:1.15.4-scala_2.12\n    command: bin/sql-client.sh\n    depends_on:\n      - jobmanager\n    environment:\n      - |\n        FLINK_PROPERTIES=\n        jobmanager.rpc.address: jobmanager        \nEOF\n'})})}function l(n={}){const{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(d,{...n})}):d(n)}},8672:(n,e,a)=>{a.d(e,{Z:()=>i,a:()=>s});var t=a(959);const r={},o=t.createContext(r);function s(n){const e=t.useContext(o);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:s(n.components),t.createElement(o.Provider,{value:e},n.children)}}}]);