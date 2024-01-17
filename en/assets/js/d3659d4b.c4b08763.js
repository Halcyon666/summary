"use strict";(self.webpackChunksummary=self.webpackChunksummary||[]).push([[6224],{4929:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>t,contentTitle:()=>l,default:()=>h,frontMatter:()=>c,metadata:()=>o,toc:()=>d});var i=s(5893),r=s(1151);const c={title:"\u4e8b\u52a1\u5904\u7406",sidebar_label:"\u4e8b\u52a1\u5904\u7406",sidebar_position:3},l=void 0,o={id:"Java/DateBase/Transaction Process",title:"\u4e8b\u52a1\u5904\u7406",description:"\u672c\u6587\u6458\u81ea \u5468\u5fd7\u660e \u51e4\u51f0\u67b6\u6784\uff1a\u6784\u5efa\u53ef\u9760\u7684\u5927\u578b\u5206\u5e03\u5f0f\u7cfb\u7edf",source:"@site/docs/01-Java/06-DateBase/Transaction Process.mdx",sourceDirName:"01-Java/06-DateBase",slug:"/Java/DateBase/Transaction Process",permalink:"/summary/en/Java/DateBase/Transaction Process",draft:!1,unlisted:!1,editUrl:"https://github.com/Halcyon666/summary/blob/main/docs/01-Java/06-DateBase/Transaction Process.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"\u4e8b\u52a1\u5904\u7406",sidebar_label:"\u4e8b\u52a1\u5904\u7406",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"mysql\u5b58\u50a8\u8fc7\u7a0b",permalink:"/summary/en/Java/DateBase/mysql Procedure"},next:{title:"\u5206\u5e03\u5f0f\u95ee\u9898",permalink:"/summary/en/Java/DateBase/Java-Case-Distribution"}},t={},d=[{value:"\u672c\u5730\u4e8b\u52a1",id:"\u672c\u5730\u4e8b\u52a1",level:2},{value:"\u539f\u5b50\u6027\u548c\u6301\u4e45\u6027",id:"\u539f\u5b50\u6027\u548c\u6301\u4e45\u6027",level:3},{value:"\u9694\u79bb\u6027",id:"\u9694\u79bb\u6027",level:3}];function a(n){const e={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("font",{color:"red",children:[(0,i.jsx)(e.strong,{children:"\u672c\u6587\u6458\u81ea \u5468\u5fd7\u660e"})," ",(0,i.jsx)(e.a,{href:"https://icyfenix.cn/introduction/about-book.html",children:"\u51e4\u51f0\u67b6\u6784\uff1a\u6784\u5efa\u53ef\u9760\u7684\u5927\u578b\u5206\u5e03\u5f0f\u7cfb\u7edf"})]}),"\n",(0,i.jsx)(e.h2,{id:"\u672c\u5730\u4e8b\u52a1",children:"\u672c\u5730\u4e8b\u52a1"}),"\n",(0,i.jsx)(e.h3,{id:"\u539f\u5b50\u6027\u548c\u6301\u4e45\u6027",children:"\u539f\u5b50\u6027\u548c\u6301\u4e45\u6027"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"\u672c\u5730\u4e8b\u52a1\u5b9a\u4e49"}),"\uff1a\u53ea\u9002\u7528\u4e8e\u5355\u4e2a\u670d\u52a1\u4f7f\u7528\u5355\u4e2a\u6570\u636e\u6e90"]}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"\u672c\u5730\u4e8b\u52a1\u5b9e\u73b0\u673a\u5236"}),"\uff1a\u540c\u65f6\u6ee1\u8db3\u539f\u5b50\u6027\u548c\u6301\u4e45\u6027\u3002\u5728\u53d1\u751f\u5954\u6e83\u65f6\uff0c\u7cfb\u7edf\u80fd\u901a\u8fc7",(0,i.jsx)(e.code,{children:"Commit Logging"})," \u8fdb\u884c\u6062\u590d\uff0c\u6216\u8005\u4f7f\u7528",(0,i.jsx)(e.code,{children:"Shadow Paging"})," \u8fdb\u884c\u672c\u5730\u4e8b\u52a1\uff1b"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Commit Logging \u901a\u8fc7\u91cd\u505a\u65e5\u5fd7(Redo Log)\u5c06\u5df2\u7ecf\u63d0\u4ea4\u4f46\u662f\u672a\u5b8c\u5168\u6301\u4e45\u5316\u7684\u6570\u636e\uff0c\u6839\u636e\u65e5\u5fd7\u8fdb\u884c\u91cd\u653e\uff1b"}),"\n",(0,i.jsx)(e.li,{children:"Commit Logging \u901a\u8fc7\u56de\u6eda\u65e5\u5fd7(Undo Log)\u5c06\u5df2\u7ecf\u5199\u5165\u6570\u636e\u6539\u56de\u56de\u53bb"}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"\u9694\u79bb\u6027",children:"\u9694\u79bb\u6027"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u5199\u9501"}),"\uff08Write Lock\uff0c\u4e5f\u53eb\u4f5c\u6392\u4ed6\u9501\uff0ceXclusive Lock\uff0c\u7b80\u5199\u4e3a X-Lock\uff09\uff1a\u5982\u679c\u6570\u636e\u6709\u52a0\u5199\u9501\uff0c\u5c31\u53ea\u6709\u6301\u6709\u5199\u9501\u7684\u4e8b\u52a1\u624d\u80fd\u5bf9\u6570\u636e\u8fdb\u884c\u5199\u5165\u64cd\u4f5c\uff0c\u6570\u636e\u52a0\u6301\u7740\u5199\u9501\u65f6\uff0c\u5176\u4ed6\u4e8b\u52a1\u4e0d\u80fd\u5199\u5165\u6570\u636e\uff0c\u4e5f\u4e0d\u80fd\u65bd\u52a0\u8bfb\u9501\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u8bfb\u9501"}),"\uff08Read Lock\uff0c\u4e5f\u53eb\u4f5c\u5171\u4eab\u9501\uff0cShared Lock\uff0c\u7b80\u5199\u4e3a S-Lock\uff09\uff1a\u591a\u4e2a\u4e8b\u52a1\u53ef\u4ee5\u5bf9\u540c\u4e00\u4e2a\u6570\u636e\u6dfb\u52a0\u591a\u4e2a\u8bfb\u9501\uff0c\u6570\u636e\u88ab\u52a0\u4e0a\u8bfb\u9501\u540e\u5c31\u4e0d\u80fd\u518d\u88ab\u52a0\u4e0a\u5199\u9501\uff0c\u6240\u4ee5\u5176\u4ed6\u4e8b\u52a1\u4e0d\u80fd\u5bf9\u8be5\u6570\u636e\u8fdb\u884c\u5199\u5165\uff0c\u4f46\u4ecd\u7136\u53ef\u4ee5\u8bfb\u53d6\u3002\u5bf9\u4e8e\u6301\u6709\u8bfb\u9501\u7684\u4e8b\u52a1\uff0c\u5982\u679c\u8be5\u6570\u636e\u53ea\u6709\u5b83\u81ea\u5df1\u4e00\u4e2a\u4e8b\u52a1\u52a0\u4e86\u8bfb\u9501\uff0c\u5141\u8bb8\u76f4\u63a5\u5c06\u5176\u5347\u7ea7\u4e3a\u5199\u9501\uff0c\u7136\u540e\u5199\u5165\u6570\u636e\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u8303\u56f4\u9501"}),"\uff08Range Lock\uff09\uff1a\u5bf9\u4e8e\u67d0\u4e2a\u8303\u56f4\u76f4\u63a5\u52a0\u6392\u4ed6\u9501\uff0c\u5728\u8fd9\u4e2a\u8303\u56f4\u5185\u7684\u6570\u636e\u4e0d\u80fd\u88ab\u5199\u5165\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsx)(e.p,{children:"\u52a0\u4e86\u8303\u56f4\u9501\u540e\uff0c\u4e0d\u4ec5\u65e0\u6cd5\u4fee\u6539\u8be5\u8303\u56f4\u5185\u5df2\u6709\u7684\u6570\u636e\uff0c\u4e5f\u4e0d\u80fd\u5728\u8be5\u8303\u56f4\u5185\u65b0\u589e\u6216\u5220\u9664\u4efb\u4f55\u6570\u636e"}),"\n",(0,i.jsxs)(e.p,{children:["\u8303\u56f4\u9501\u5199\u6cd5 ",(0,i.jsx)(e.code,{children:"SELECT * FROM books WHERE price < 100 FOR UPDATE;"})]}),"\n"]}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"\u53ef\u4e32\u884c\u5316"}),"\uff08Serializable\uff09\u5bf9\u4e8b\u52a1\u6240\u6709\u8bfb\u3001\u5199\u7684\u6570\u636e\u5168\u90fd\u52a0\u4e0a\u8bfb\u9501\u3001\u5199\u9501\u548c\u8303\u56f4\u9501\uff1b"]}),"\n",(0,i.jsx)(e.p,{children:"**\u95ee\u9898 **\u5e76\u53d1\u5dee\u3002"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"\u53ef\u91cd\u590d\u8bfb"}),"\uff08Repeatable Read\uff09\u5bf9\u4e8b\u52a1\u6240\u6d89\u53ca\u7684\u6570\u636e\u52a0\u8bfb\u9501\u548c\u5199\u9501\uff0c\u4e14\u4e00\u76f4\u6301\u6709\u81f3\u4e8b\u52a1\u7ed3\u675f\uff0c\u4f46\u4e0d\u518d\u52a0\u8303\u56f4\u9501\uff1b"]}),"\n",(0,i.jsxs)(e.p,{children:["**\u95ee\u9898 **",(0,i.jsx)(e.code,{children:"\u5e7b\u8bfb"}),"\uff0c\u539f\u56e0\u662f",(0,i.jsx)(e.code,{children:"\u53ef\u91cd\u590d\u8bfb"}),"\u6ca1\u6709\u8303\u56f4\u9501\u6765\u7981\u6b62\u5728\u8be5\u8303\u56f4\u5185\u63d2\u5165\u65b0\u7684\u6570\u636e\u3002"]}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"\u8bfb\u5df2\u63d0\u4ea4"}),"\uff08Read Committed\uff09\u5bf9\u4e8b\u52a1\u6d89\u53ca\u7684\u6570\u636e\u52a0\u7684\u5199\u9501\u4f1a\u4e00\u76f4\u6301\u7eed\u5230\u4e8b\u52a1\u7ed3\u675f\uff0c\u4f46\u52a0\u7684\u8bfb\u9501\u5728\u67e5\u8be2\u64cd\u4f5c\u5b8c\u6210\u540e\u5c31\u9a6c\u4e0a\u4f1a\u91ca\u653e\u3002",(0,i.jsx)(e.code,{children:"\u8bfb\u5df2\u63d0\u4ea4"}),"\u7ea7\u522b\u662f\u8981\u6c42\u5148\u52a0\u8bfb\u9501\u540e\u8bfb\u6570\u636e\u7684"]}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"\u95ee\u9898"})," ",(0,i.jsx)(e.code,{children:"\u4e0d\u53ef\u91cd\u590d\u8bfb"})," \u4e24\u6b21\u67e5\u8be2\u53ef\u80fd\u4f1a\u5f97\u5230\u4e0d\u4e00\u6837\u7684\u7ed3\u679c,\u539f\u56e0\u662f",(0,i.jsx)(e.code,{children:"\u8bfb\u5df2\u63d0\u4ea4"}),"\u7684\u9694\u79bb\u7ea7\u522b\u7f3a\u4e4f\u8d2f\u7a7f\u6574\u4e2a\u4e8b\u52a1\u5468\u671f\u7684\u8bfb\u9501\uff0c\u65e0\u6cd5\u7981\u6b62\u8bfb\u53d6\u8fc7\u7684\u6570\u636e\u53d1\u751f\u53d8\u5316(\u6ca1\u6709\u8bfb\u9501\u5c31\u662f\u53ef\u4ee5\u52a0\u5199\u9501\uff0c\u6240\u4ee5\u6570\u636e\u53d8\u4e86)"]}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"\u8bfb\u672a\u63d0\u4ea4"}),"\uff08Read Uncommitted\uff09\u5bf9\u4e8b\u52a1\u6d89\u53ca\u7684\u6570\u636e\u53ea\u52a0\u5199\u9501\uff0c\u4f1a\u4e00\u76f4\u6301\u7eed\u5230\u4e8b\u52a1\u7ed3\u675f\uff0c\u4f46\u5b8c\u5168\u4e0d\u52a0\u8bfb\u9501\u3002",(0,i.jsx)(e.code,{children:"\u8bfb\u672a\u63d0\u4ea4"}),"\u7ea7\u522b\u662f\u53ef\u4ee5\u4e0d\u52a0\u8bfb\u9501\u8bfb\u53d6\u6570\u636e"]}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"\u95ee\u9898"})," ",(0,i.jsx)(e.code,{children:"\u810f\u8bfb"}),"\u539f\u56e0\u662f",(0,i.jsx)(e.code,{children:"\u8bfb\u672a\u63d0\u4ea4"}),"\u5728\u6570\u636e\u4e0a\u5b8c\u5168\u4e0d\u52a0\u8bfb\u9501\uff0c\u8fd9\u53cd\u800c\u4ee4\u5b83\u80fd\u8bfb\u5230\u5176\u4ed6\u4e8b\u52a1\u52a0\u4e86\u5199\u9501\u7684\u6570\u636e"]}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsx)(e.p,{children:"\u5171\u540c\u70b9 :"}),"\n",(0,i.jsxs)(e.p,{children:["\u5c31\u662f\u5e7b\u8bfb\u3001\u4e0d\u53ef\u91cd\u590d\u8bfb\u3001\u810f\u8bfb\u7b49\u95ee\u9898\u90fd\u662f\u7531\u4e8e\u4e00\u4e2a\u4e8b\u52a1\u5728\u8bfb\u6570\u636e\u8fc7\u7a0b\u4e2d\uff0c\u53d7\u53e6\u5916\u4e00\u4e2a\u5199\u6570\u636e\u7684\u4e8b\u52a1\u5f71\u54cd\u800c\u7834\u574f\u4e86\u9694\u79bb\u6027\uff0c\u9488\u5bf9\u8fd9\u79cd\u201c\u4e00\u4e2a\u4e8b\u52a1\u8bfb+\u53e6\u4e00\u4e2a\u4e8b\u52a1\u5199\u201d\u7684\u9694\u79bb\u95ee\u9898\uff0c\u8fd1\u5e74\u6765\u6709\u4e00\u79cd\u540d\u4e3a\u201c",(0,i.jsx)(e.a,{href:"https://en.wikipedia.org/wiki/Multiversion_concurrency_control",children:"\u591a\u7248\u672c\u5e76\u53d1\u63a7\u5236"}),"\u201d\uff08Multi-Version Concurrency Control\uff0cMVCC\uff09\u7684\u65e0\u9501\u4f18\u5316\u65b9\u6848\u88ab\u4e3b\u6d41\u7684\u5546\u4e1a\u6570\u636e\u5e93\u5e7f\u6cdb\u91c7\u7528"]}),"\n",(0,i.jsx)(e.p,{children:"\u6839\u636e\u4ee5\u4e0b\u89c4\u5219\u5199\u5165\u6570\u636e"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u63d2\u5165\u6570\u636e\u65f6\uff1aCREATE_VERSION \u8bb0\u5f55\u63d2\u5165\u6570\u636e\u7684\u4e8b\u52a1 ID\uff0cDELETE_VERSION \u4e3a\u7a7a\u3002"}),"\n",(0,i.jsx)(e.li,{children:"\u5220\u9664\u6570\u636e\u65f6\uff1aDELETE_VERSION \u8bb0\u5f55\u5220\u9664\u6570\u636e\u7684\u4e8b\u52a1 ID\uff0cCREATE_VERSION \u4e3a\u7a7a\u3002"}),"\n",(0,i.jsx)(e.li,{children:"\u4fee\u6539\u6570\u636e\u65f6\uff1a\u5c06\u4fee\u6539\u6570\u636e\u89c6\u4e3a\u201c\u5220\u9664\u65e7\u6570\u636e\uff0c\u63d2\u5165\u65b0\u6570\u636e\u201d\u7684\u7ec4\u5408\uff0c\u5373\u5148\u5c06\u539f\u6709\u6570\u636e\u590d\u5236\u4e00\u4efd\uff0c\u539f\u6709\u6570\u636e\u7684 DELETE_VERSION \u8bb0\u5f55\u4fee\u6539\u6570\u636e\u7684\u4e8b\u52a1 ID\uff0cCREATE_VERSION \u4e3a\u7a7a\u3002\u590d\u5236\u51fa\u6765\u7684\u65b0\u6570\u636e\u7684 CREATE_VERSION \u8bb0\u5f55\u4fee\u6539\u6570\u636e\u7684\u4e8b\u52a1 ID\uff0cDELETE_VERSION \u4e3a\u7a7a\u3002"}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"\u6b64\u65f6\uff0c\u5982\u6709\u53e6\u5916\u4e00\u4e2a\u4e8b\u52a1\u8981\u8bfb\u53d6\u8fd9\u4e9b\u53d1\u751f\u4e86\u53d8\u5316\u7684\u6570\u636e\uff0c\u5c06\u6839\u636e\u9694\u79bb\u7ea7\u522b\u6765\u51b3\u5b9a\u5230\u5e95\u5e94\u8be5\u8bfb\u53d6\u54ea\u4e2a\u7248\u672c\u7684\u6570\u636e\u3002"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\u9694\u79bb\u7ea7\u522b\u662f",(0,i.jsx)(e.code,{children:"\u53ef\u91cd\u590d\u8bfb"}),"\uff1a\u603b\u662f\u8bfb\u53d6 CREATE_VERSION \u5c0f\u4e8e\u6216\u7b49\u4e8e\u5f53\u524d\u4e8b\u52a1 ID \u7684\u8bb0\u5f55\uff0c\u5728\u8fd9\u4e2a\u524d\u63d0\u4e0b\uff0c\u5982\u679c\u6570\u636e\u4ecd\u6709\u591a\u4e2a\u7248\u672c\uff0c\u5219\u53d6\u6700\u65b0\uff08\u4e8b\u52a1 ID \u6700\u5927\uff09\u7684\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:["\u9694\u79bb\u7ea7\u522b\u662f",(0,i.jsx)(e.code,{children:"\u8bfb\u5df2\u63d0\u4ea4"}),"\uff1a\u603b\u662f\u53d6\u6700\u65b0\u7684\u7248\u672c\u5373\u53ef\uff0c\u5373\u6700\u8fd1\u88ab Commit \u7684\u90a3\u4e2a\u7248\u672c\u7684\u6570\u636e\u8bb0\u5f55\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.admonition,{title:"\u534f\u8bae",type:"tip",children:(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["\u672c\u4f5c\u54c1\u4ee3\u7801\u90e8\u5206\u91c7\u7528 ",(0,i.jsx)(e.a,{href:"https://www.apache.org/licenses/LICENSE-2.0",children:"Apache 2.0\u534f\u8bae"}),"\u8fdb\u884c\u8bb8\u53ef\u3002\u9075\u5faa\u8bb8\u53ef\u7684\u524d\u63d0\u4e0b\uff0c\u4f60\u53ef\u4ee5\u81ea\u7531\u5730\u5bf9\u4ee3\u7801\u8fdb\u884c\u4fee\u6539\uff0c\u518d\u53d1\u5e03\uff0c\u53ef\u4ee5\u5c06\u4ee3\u7801\u7528\u4f5c\u5546\u4e1a\u7528\u9014\u3002\u4f46\u8981\u6c42\u4f60\uff1a"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u7f72\u540d"}),"\uff1a\u5728\u539f\u6709\u4ee3\u7801\u548c\u884d\u751f\u4ee3\u7801\u4e2d\uff0c\u4fdd\u7559\u539f\u4f5c\u8005\u7f72\u540d\u53ca\u4ee3\u7801\u6765\u6e90\u4fe1\u606f\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u4fdd\u7559\u8bb8\u53ef\u8bc1"}),"\uff1a\u5728\u539f\u6709\u4ee3\u7801\u548c\u884d\u751f\u4ee3\u7801\u4e2d\uff0c\u4fdd\u7559Apache 2.0\u534f\u8bae\u6587\u4ef6\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["\u672c\u4f5c\u54c1\u6587\u6863\u90e8\u5206\u91c7\u7528",(0,i.jsx)(e.a,{href:"http://creativecommons.org/licenses/by/4.0/",children:"\u77e5\u8bc6\u5171\u4eab\u7f72\u540d 4.0 \u56fd\u9645\u8bb8\u53ef\u534f\u8bae"}),"\u8fdb\u884c\u8bb8\u53ef\u3002 \u9075\u5faa\u8bb8\u53ef\u7684\u524d\u63d0\u4e0b\uff0c\u4f60\u53ef\u4ee5\u81ea\u7531\u5730\u5171\u4eab\uff0c\u5305\u62ec\u5728\u4efb\u4f55\u5a92\u4ecb\u4e0a\u4ee5\u4efb\u4f55\u5f62\u5f0f\u590d\u5236\u3001\u53d1\u884c\u672c\u4f5c\u54c1\uff0c\u4ea6\u53ef\u4ee5\u81ea\u7531\u5730\u6f14\u7ece\u3001\u4fee\u6539\u3001\u8f6c\u6362\u6216\u4ee5\u672c\u4f5c\u54c1\u4e3a\u57fa\u7840\u8fdb\u884c\u4e8c\u6b21\u521b\u4f5c\u3002\u4f46\u8981\u6c42\u4f60\uff1a"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u7f72\u540d"}),"\uff1a\u5e94\u5728\u4f7f\u7528\u672c\u6587\u6863\u7684\u5168\u90e8\u6216\u90e8\u5206\u5185\u5bb9\u65f6\u5019\uff0c\u6ce8\u660e\u539f\u4f5c\u8005\u53ca\u6765\u6e90\u4fe1\u606f\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u975e\u5546\u4e1a\u6027\u4f7f\u7528"}),"\uff1a\u4e0d\u5f97\u7528\u4e8e\u5546\u4e1a\u51fa\u7248\u6216\u5176\u4ed6\u4efb\u4f55\u5e26\u6709\u5546\u4e1a\u6027\u8d28\u7684\u884c\u4e3a\u3002\u5982\u9700\u5546\u4e1a\u4f7f\u7528\uff0c\u8bf7\u8054\u7cfb\u4f5c\u8005\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u76f8\u540c\u65b9\u5f0f\u5171\u4eab\u7684\u6761\u4ef6"}),"\uff1a\u5728\u672c\u6587\u6863\u57fa\u7840\u4e0a\u6f14\u7ece\u3001\u4fee\u6539\u7684\u4f5c\u54c1\uff0c\u5e94\u5f53\u7ee7\u7eed\u4ee5\u77e5\u8bc6\u5171\u4eab\u7f72\u540d 4.0\u56fd\u9645\u8bb8\u53ef\u534f\u8bae\u8fdb\u884c\u8bb8\u53ef\u3002"]}),"\n"]}),"\n"]}),"\n"]})})]})}function h(n={}){const{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(a,{...n})}):a(n)}},1151:(n,e,s)=>{s.d(e,{Z:()=>o,a:()=>l});var i=s(7294);const r={},c=i.createContext(r);function l(n){const e=i.useContext(c);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:l(n.components),i.createElement(c.Provider,{value:e},n.children)}}}]);