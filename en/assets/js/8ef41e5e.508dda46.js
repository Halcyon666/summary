"use strict";(self.webpackChunksummary=self.webpackChunksummary||[]).push([[7846],{4535:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>a});var s=t(5893),o=t(1151);const i={title:"Lock",sidebar_position:5,sidebar_label:"Lock"},r=void 0,c={id:"Java/ConcurrentAndJVM/lock",title:"Lock",description:"locklock",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/01-Java/05-ConcurrentAndJVM/lock.mdx",sourceDirName:"01-Java/05-ConcurrentAndJVM",slug:"/Java/ConcurrentAndJVM/lock",permalink:"/en/Java/ConcurrentAndJVM/lock",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Lock",sidebar_position:5,sidebar_label:"Lock"},sidebar:"tutorialSidebar",previous:{title:"\u5904\u7406\u5668\u5185\u5b58\u6a21\u578b",permalink:"/en/Java/ConcurrentAndJVM/CPU memory domain"},next:{title:"JAVA\u865a\u62df\u673a",permalink:"/en/Java/ConcurrentAndJVM/JAVA Virtual Machine"}},l={},a=[{value:"locklock",id:"locklock",level:2},{value:"Distinction between lock and synchronizer AQS",id:"distinction-between-lock-and-synchronizer-aqs",level:2}];function d(e){const n={blockquote:"blockquote",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"locklock",children:"locklock"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://s2.loli.net/2023/07/15/T2tYREiaSpo3eyx.png",alt:""})}),"\n",(0,s.jsx)(n.h2,{id:"distinction-between-lock-and-synchronizer-aqs",children:"Distinction between lock and synchronizer AQS"}),"\n",(0,s.jsx)(n.p,{children:"Lock is user-oriented, defines the interface between the user and the locker (for example, allow access in parallel between two threads, hide the details of delivery;"}),"\n",(0,s.jsx)(n.p,{children:"The synchronizer targets the implementer of the lock, which simplifies how to implement the lock, blocking the operation of the bottom layer of the synchronization state, the queue of the thread, waiting and wakeup.Locks and Synchronizers are a good way to isolate areas of concern to users and implementers"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://s2.loli.net/2023/07/15/VABC2cpNlRky3eG.png",alt:""})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://s2.loli.net/2023/07/15/XMl6UmZ3GkwvAyO.png",alt:""})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://s2.loli.net/2023/07/15/e3fV7UgrLNY46ZP.png",alt:""})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://s2.loli.net/2023/07/15/do1wcpmjDu49I3s.png",alt:""})}),"\n",(0,s.jsx)(n.p,{children:'The syncer therefore offers a CAS-based setting endpoint method\uff1acompareAndSetTail(Node expect), which needs to pass on the end and current node of the current thread "think" and only after setting has the current node formally associated with the previous endnode.'}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://s2.loli.net/2023/07/15/BXPAhpak3iQdKe.png",alt:""})}),"\n",(0,s.jsx)(n.p,{children:"Sync queue follows FIFO, first nodes are successful for syncing. The first node's threads will wake the next node when the sync is released, and the next node will set itself as the first node when the synchronization is successful, as shown below"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://s2.loli.net/2023/07/15/cIp73PN1Ym8Cf2o.png",alt:""})}),"\n",(0,s.jsx)(n.p,{children:"Sets the first node to be completed by getting the synchronized status thread. Since only one thread can successfully get synced state, the first node does not need to use CAS to ensure that it is set as a successor to the original first node and discharges the original first node."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://s2.loli.net/2023/07/15/kSXlBVHZn1AW6zi.png",alt:""})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"References"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:'Book name\uff1a"Java Parallel Programming" Author\uff1a'}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>r});var s=t(7294);const o={},i=s.createContext(o);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);