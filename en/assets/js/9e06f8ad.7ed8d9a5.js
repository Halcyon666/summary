"use strict";(self.webpackChunksummary=self.webpackChunksummary||[]).push([[693],{5655:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var t=i(5893),s=i(1151);const r={title:"\u53f2\u4e0a\u6700\u5168git\u547d\u4ee4\u96c6",sidebar_label:"\u53f2\u4e0a\u6700\u5168git\u547d\u4ee4\u96c6",sidebar_position:1},a=void 0,o={id:"Develop-Tools/Most used Git Commands",title:"\u53f2\u4e0a\u6700\u5168git\u547d\u4ee4\u96c6",description:"\u914d\u7f6e\u5316\u547d\u4ee4",source:"@site/docs/09-Develop-Tools/Most used Git Commands.mdx",sourceDirName:"09-Develop-Tools",slug:"/Develop-Tools/Most used Git Commands",permalink:"/summary/en/Develop-Tools/Most used Git Commands",draft:!1,unlisted:!1,editUrl:"https://github.com/Halcyon666/summary/blob/main/docs/09-Develop-Tools/Most used Git Commands.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"\u53f2\u4e0a\u6700\u5168git\u547d\u4ee4\u96c6",sidebar_label:"\u53f2\u4e0a\u6700\u5168git\u547d\u4ee4\u96c6",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Linux\u6269\u5c55\u78c1\u76d8\u7a7a\u95f4",permalink:"/summary/en/Linux/vmware-centos8 Expand or Shrink disk"},next:{title:"\u53f2\u4e0a\u6700\u5168git\u547d\u4ee4\u96c6",permalink:"/summary/en/Develop-Tools/regex"}},c={},l=[{value:"\u914d\u7f6e\u5316\u547d\u4ee4",id:"\u914d\u7f6e\u5316\u547d\u4ee4",level:2},{value:"\u914d\u7f6e\u5168\u5c40.gitignore",id:"\u914d\u7f6e\u5168\u5c40gitignore",level:2},{value:"\u67e5\u770b\u7c7b\u547d\u4ee4",id:"\u67e5\u770b\u7c7b\u547d\u4ee4",level:2},{value:"\u64a4\u9500\u7c7b\u547d\u4ee4",id:"\u64a4\u9500\u7c7b\u547d\u4ee4",level:2},{value:"\u521b\u5efa\u6216\u5220\u9664\u76f8\u5173\u547d\u4ee4",id:"\u521b\u5efa\u6216\u5220\u9664\u76f8\u5173\u547d\u4ee4",level:2},{value:"\u5408\u5e76\u7c7b\u547d\u4ee4",id:"\u5408\u5e76\u7c7b\u547d\u4ee4",level:2},{value:"\u6682\u5b58\u5185\u5bb9\u547d\u4ee4",id:"\u6682\u5b58\u5185\u5bb9\u547d\u4ee4",level:2},{value:"\u63d0\u4ea4\u76f8\u5173\u547d\u4ee4",id:"\u63d0\u4ea4\u76f8\u5173\u547d\u4ee4",level:2},{value:"\u6807\u7b7e\u7c7b\u547d\u4ee4",id:"\u6807\u7b7e\u7c7b\u547d\u4ee4",level:2},{value:"\u66f4\u65b0\u547d\u4ee4",id:"\u66f4\u65b0\u547d\u4ee4",level:2},{value:"\u5982\u4f55\u540c\u6b65github fork\u4ed3\u5e93",id:"\u5982\u4f55\u540c\u6b65github-fork\u4ed3\u5e93",level:2}];function d(n){const e={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h2,{id:"\u914d\u7f6e\u5316\u547d\u4ee4",children:"\u914d\u7f6e\u5316\u547d\u4ee4"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-shell",children:'ssh-keygen\ngit config --global user.name "whalefall541"\ngit config --global user.email "jackchen541@sina.com"\ngit config --global alias.ll "log --graph --pretty=format:\'%C(yellow)%h%Creset -%C(cyan)%d%Creset %s %Cgreen(%an, %cr)\' --abbrev-commit"\ngit config --global alias.a \'!git add -A && git commit -m\'\n'})}),"\n",(0,t.jsx)(e.h2,{id:"\u914d\u7f6e\u5168\u5c40gitignore",children:"\u914d\u7f6e\u5168\u5c40.gitignore"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-shell",children:"# \u8fd9\u91cc\u6700\u597d\u5199\u7edd\u5bf9\u8def\u5f84 \u6709\u65f6\u5019\u53ef\u80fd\u4e0d\u751f\u6548\ngit config --global core.excludesfile D:/project/.gitignore \n\n# .gitignore\u53ea\u80fd\u5ffd\u7565\u90a3\u4e9b\u539f\u6765\u6ca1\u6709\u88abtrack\u7684\u6587\u4ef6\uff0c\u5982\u679c\u67d0\u4e9b\u6587\u4ef6\u5df2\u7ecf\u88ab\u7eb3\u5165\u4e86\u7248\u672c\u7ba1\u7406\u4e2d\uff0c\u5219\u4fee\u6539.gitignore\u662f\u65e0\u6548\u7684\u3002\n# \u89e3\u51b3\u65b9\u6cd5\u5c31\u662f\u5148\u628a\u672c\u5730\u7f13\u5b58\u5220\u9664\uff08\u6539\u53d8\u6210\u672atrack\u72b6\u6001\uff09\uff0c\u7136\u540e\u518d\u63d0\u4ea4:\n\ngit rm -r --cached .\ngit add .\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u67e5\u770b\u7c7b\u547d\u4ee4",children:"\u67e5\u770b\u7c7b\u547d\u4ee4"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-shell",children:"# \u67e5\u770b \ngit log --graph --pretty=format:'%C(yellow)%h%Creset -%C(cyan)%d%Creset %s %Cgreen(%an, %cr)' --abbrev-commit\n# \u67e5\u770b xxx\u63d0\u4ea4\u7684\u5185\u5bb9\ngit show <commit-id>\n# \u67e5\u770b\u5f15\u7528\u8bb0\u5f55\ngit reflog\n# \u67e5\u770b\u6587\u4ef6\u5dee\u5f02\ngit diff filename\n\n# \u67e5\u770b\u5df2\u7ecfadd \u4f46\u662f\u672acommit \u7684\u5dee\u5f02\ngit diff --staged\ngit diff --cached\n# \u4ec5\u67e5\u770b\u6c47\u603b\u7edf\u8ba1\ngit diff --stat branch1 branch2\n\n# \u67e5\u770b\u4e24\u4e2a\u63d0\u4ea4\u4e4b\u95f4\u67d0\u4e2a\u6587\u4ef6\u7684\u5dee\u5f02 \u7b2c\u4e00\u4e2a\u4e3a\u5f00\u59cb\u7684hash\uff0c\u8981\u6bd4\u5f53\u524d\u67e5\u770b\u7684\u8fd8\u65e9\u4e00\u4e2a\ngit diff <commit> <commit> xxx.java\n# \u67e5\u770b\u4e24\u4e2a\u5206\u652f\u7684\u5177\u4f53\u5dee\u5f02\ngit diff dev st \n\n\n# \u4e00\u6b21diff\u51fa\u5168\u90e8modify\u7684\u6587\u4ef6\u5185\u5bb9 \u4e5f\u53ef\u4ee5\u81ea\u884c\u91cd\u5b9a\u5411\u5230\u67d0\u4e2a\u6587\u4ef6\u4e2d\ngit status | awk -F \"modified:\" '{if($2 != \"\") print $2}' | xargs git diff\n\n# \u67e5\u770b\u5df2\u7ecfcommit \u4f46\u662f\u672apush\u7684\u8bb0\u5f55\ngit cherry -v\n\n# \u67e5\u770b\u67d0\u884c\u6587\u4ef6\u4fee\u6539\u4eba\ngit blame -L 58,100 filename\ngit blame -L 57,+10 filename\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u64a4\u9500\u7c7b\u547d\u4ee4",children:"\u64a4\u9500\u7c7b\u547d\u4ee4"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-shell",children:"# \u4e00\u6b21\u64a4\u9500\u6240\u6709\u7684\u6587\u4ef6\ngit reset . \ngit checkout .\n\nr# \u64a4\u9500\u6389modify\u72b6\u6001\ngit checkout <filename>\n# \u64a4\u9500\u6389add\u7684\u6587\u4ef6(\u5982\u679c\u662f\u65b0\u6587\u4ef6\u5219\u662funtracked\u72b6\u6001 \u5426\u5219\u662fmodify\u72b6\u6001)\ngit restore --staged test.txt\ngit rm --cached test.txt\n\n# \u64a4\u9500 add commit modify(\u628acommit \u8bb0\u5f55\u5168\u5220\u6389 \u614e\u7528\uff09\ngit reset --hard <commit-id>\n# \u64a4\u9500add\u3001commit  (\u628acommit \u8bb0\u5f55\u53d8\u6210modify\u4e4b\u540e\uff09\ngit reset --mixed <commit-id>\n# \u4ec5\u64a4\u9500commit (\u628acommit \u8bb0\u5f55\u53d8\u6210add\u4e4b\u540e\uff09\ngit reset --soft <commit-id>\n\n# \u64a4\u9500\u4e00\u6b21\u63d0\u4ea4\u5185\u5bb9\ngit revert <commit-id>git\n\n# \u5220\u9664\u672c\u5730\u6240\u6709 untracked \u8bb0\u5f55\ngit clean -df\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u521b\u5efa\u6216\u5220\u9664\u76f8\u5173\u547d\u4ee4",children:"\u521b\u5efa\u6216\u5220\u9664\u76f8\u5173\u547d\u4ee4"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-shell",children:"# \u672c\u5730\u4ed3\u5e93\u5173\u8054\u5230\u8fdc\u7a0b\u4ed3\u5e93\ngit remote add origin git@github.com:whalefall541/rebase-learn.git\n# \u5220\u9664\u5173\u8054\ngit remote rm origin\n\n# \u5220\u9664\u8fdc\u7a0b \u5206\u652f\ngit push origin -d <branch-name>\n\n# \u521b\u5efa\u672c\u5730 \u5206\u652f\ngit branch <branch-name>\n# \u521b\u5efa\u5e76\u5207\u6362\ngit chekcout -b <branch-name>\n# \u5220\u9664\u672c\u5730 \u5206\u652f\ngit branch -D  <branch-name>\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u5408\u5e76\u7c7b\u547d\u4ee4",children:"\u5408\u5e76\u7c7b\u547d\u4ee4"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-shell",children:'# \u5173\u95ed\u81ea\u52a8\u5408\u5e76\ngit merge --no-ff -m "merge with no-ff" dev\n\n# \u81ea\u52a8\u53d8\u57fa \u5728\u5f53\u524d\u5206\u652f\u91cd\u653e\u53e6\u4e00\u4e2a\u5206\u652f \ngit rebase [<branch-name> | <commit-id> | <head~n>]\n\n# \u4ea4\u4e92\u5f0f\u53d8\u57fa\ngit rebase -i <commit-id> <commit-id> \n\n`\u4e00\u822c\u4f7f\u7528 p s\u7ec4\u6210 \u5c06\u591a\u6761commit \u5408\u5e76\u4e3a\u4e00\u6761` \n# \u6ce8\u610f rebase\u65f6commit id \u4e3a\u524d\u5f00\u533a\u95f4\uff0c\u540e\u95ed\u533a\u95f4\uff1b\n# \u5343\u4e07\u6ce8\u610frebase\u65f6\u540e\u9762\u7684id\u8981\u662f\u6700\u540e\u4e00\u4e2a\uff0c\u9664\u975e\u4f60\u4e0d\u60f3\u8981\u5728\u540e\u9762id\u4e4b\u540e\u7684\u63d0\u4ea4\u8bb0\u5f55\u5426\u5219\u5343\u4e07\u4e0d\u8981\u8fd9\u4e48\u5e72\uff0c\n# \u5982\u679c\u4e0d\u5c0f\u5fc3\u505a\u4e86\uff0c\u91cd\u65b0\u4ece\u8fdc\u7a0b\u62c9\u53d6\u628a\n\n# Commands:\n# p, pick <commit> = use commit\n# r, reword <commit> = use commit, but edit the commit message\n# e, edit <commit> = use commit, but stop for amending\n# s, squash <commit> = use commit, but meld into previous commit\n# f, fixup [-C | -c] <commit> = like "squash" but keep only the previous\n#                    commit\'s log message, unless -C is used, in which case\n#                    keep only this commit\'s message; -c is same as -C but\n#                    opens the editor\n\n\n# \u5c06base\u5206\u652f\u7684\u5185\u5bb9\u53d8\u57fa\u5230\u5f53\u524d\u5206\u652f rebase \u5c31\u662f\u79fb\u52a8HEAD\u6307\u9488\ngit rebase <base-branch> <current-branch>\n\n# rebase --onto \u53ef\u4ee5\u5c06\u4e00\u4e2a\u4f4d\u4e8e\u5b50\u5206\u652f\u7684\u5206\u652f\u53d8\u57fa\u5230\u4e3b\u5206\u652f\u4e0a\n# \u53d8\u57fa\u524d\uff1acurrent-upsteam-branch \u662fbase-branch\u7684\u4e00\u4e2a\u5b50\u5206\u652f \n# \u800c current-branch \u53c8\u662f current-upsteam-branch\u7684\u4e00\u4e2a\u5b50\u5206\u652f\n# \u53d8\u57fa\u540e current-upsteam-branch current-branch \u5404\u81ea\u4e3abase-branch \u7684\u5b50\u5206\u652f\ngit rebase --onto <base-branch> <current-upsteam-branch> <current-branch>\n\n# \u4ece\u5176\u4ed6\u5206\u652f\u590d\u5236\u67d0\u4e2a\u63d0\u4ea4\u5230\u53e6\u4e00\u4e2a\u5206\u652f\ngit cherry-pick <commit-id>\n'})}),"\n",(0,t.jsx)(e.h2,{id:"\u6682\u5b58\u5185\u5bb9\u547d\u4ee4",children:"\u6682\u5b58\u5185\u5bb9\u547d\u4ee4"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-shell",children:"git stash\ngit stash list\ngit pop\n\n# \u6682\u5b58\u90e8\u5206\u6587\u4ef6\ngit stash push filename\n\n# \u4ea4\u4e92\u5f0f\u6682\u5b58\u6587\u4ef6\ngit stash -p\n"})}),"\n",(0,t.jsxs)(e.p,{children:["\u5982\u4f55\u6682\u5b58\u90e8\u5206\u6587\u4ef6\u5462 ",(0,t.jsx)(e.a,{href:"https://www.jianshu.com/p/fe4d54cb6244",children:"stash part"})]}),"\n",(0,t.jsx)(e.h2,{id:"\u63d0\u4ea4\u76f8\u5173\u547d\u4ee4",children:"\u63d0\u4ea4\u76f8\u5173\u547d\u4ee4"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-shell",children:'echo "# 123" >> README.md\ngit init\ngit add README.md\ngit commit -m "first commit"\n# \u4fee\u6539\u4e00\u4e0bHEAD\u6307\u5411\u7684\u6ce8\u91ca; notes: Don\u2019t amend public commits\ngit commit --amend -m "an updated commit message" --no-edit\n\ngit branch -M main\ngit remote add origin git@github.com:whalefall541/123.git\ngit push -u origin main\n\n# \u76f4\u63a5\u5728dev\u5206\u652f \u63a8\u5230\u6240\u6709\u5176\u4ed6\u5206\u652f \u4ecebranch1\u5206\u652f\u63a8\u9001\u5230branch2\ngit push origin refs/heads/branch1:branch2\n'})}),"\n",(0,t.jsx)(e.h2,{id:"\u6807\u7b7e\u7c7b\u547d\u4ee4",children:"\u6807\u7b7e\u7c7b\u547d\u4ee4"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-shell",children:"# \u5728\u5f53\u524d\u5206\u652f\u5f53\u524d\u63d0\u4ea4\u4e0a\u6253\u6807\u7b7e\uff1a\ngit tag v1.0\n\n#\u5982\u679c\u60f3\u8981\u6253\u6807\u7b7e\u5728\u67d0\u4e2a\u6307\u5b9a\u5386\u53f2commit\u4e0a\uff1a\ngit tag v0.9 f52c633\n\n# \u53ef\u4ee5\u901a\u8fc7\u5982\u4e0b\u547d\u4ee4\u67e5\u770b\u4e00\u4e2atag\u4fe1\u606f\uff1a\ngit show v0.1\n\n# \u5982\u679c\u6807\u7b7e\u6253\u9519\u4e86\uff0c\u4e5f\u53ef\u4ee5\u5220\u9664\uff1a\ngit tag -d v0.1\n\n# \u5982\u679c\u8981\u63a8\u9001\u67d0\u4e2a\u6807\u7b7e\u5230\u8fdc\u7a0b\uff0c\u4f7f\u7528\u547d\u4ee4git push origin <tagname>\ngit push origin v1.0\n# \u6216\u8005\uff0c\u4e00\u6b21\u6027\u63a8\u9001\u5168\u90e8\u5c1a\u672a\u63a8\u9001\u5230\u8fdc\u7a0b\u7684\u672c\u5730\u6807\u7b7e\uff1a\ngit push origin --tags    \n# \u5982\u679c\u6807\u7b7e\u5df2\u7ecf\u63a8\u9001\u5230\u8fdc\u7a0b\uff0c\u8981\u5220\u9664\u8fdc\u7a0b\u6807\u7b7e\u5c31\u9ebb\u70e6\u4e00\u70b9\uff0c\u5148\u4ece\u672c\u5730\u5220\u9664\uff1a\ngit tag -d v0.9    \n# \u7136\u540e\uff0c\u4ece\u8fdc\u7a0b\u5220\u9664\u3002\u5220\u9664\u547d\u4ee4\u4e5f\u662fpush\uff0c\u4f46\u662f\u683c\u5f0f\u5982\u4e0b\uff1a\ngit push origin :refs/tags/v0.9\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u66f4\u65b0\u547d\u4ee4",children:"\u66f4\u65b0\u547d\u4ee4"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.a,{href:"https://cloud.tencent.com/developer/section/1138793",children:"\u53ef\u4ee5\u53c2\u8003\u8fd9\u4e2a\u7f51\u7ad9"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-shell",children:"# \u62c9\u53d6\u6240\u6709\u5206\u652f\ngit fetch --all\n# update\u67d0\u4e2a\u5206\u652f \u5982\u679c\u662f\u805a\u5408\u5de5\u7a0b\u9700\u8981\u52a0\u4e0a--recurse-submodules=no \ngit fetch origin main:main --progress --prune\n \n# \u62c9\u53d6\u4ee3\u7801\u65f6\u53d8\u57fa fetch and rebase \ngit pull -r origin main\n\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u5982\u4f55\u540c\u6b65github-fork\u4ed3\u5e93",children:"\u5982\u4f55\u540c\u6b65github fork\u4ed3\u5e93"}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsxs)(e.li,{children:["\u914d\u7f6eforked\u4ed3\u5e93\n",(0,t.jsx)(e.a,{href:"https://docs.github.com/en/github/collaborating-with-pull-requests/working-with-forks/configuring-a-remote-for-a-fork",children:"configuring-a-remote-for-a-fork"})]}),"\n",(0,t.jsxs)(e.li,{children:["Merging an upstream repository into your fork\n",(0,t.jsx)(e.a,{href:"https://docs.github.com/en/github/collaborating-with-pull-requests/working-with-forks/syncing-a-fork",children:"syncing-a-fork"})]}),"\n"]}),"\n",(0,t.jsx)(e.admonition,{title:"\u534f\u8bae",type:"tip",children:(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:["\u672c\u4f5c\u54c1\u4ee3\u7801\u90e8\u5206\u91c7\u7528 ",(0,t.jsx)(e.a,{href:"https://www.apache.org/licenses/LICENSE-2.0",children:"Apache 2.0\u534f\u8bae"}),"\u8fdb\u884c\u8bb8\u53ef\u3002\u9075\u5faa\u8bb8\u53ef\u7684\u524d\u63d0\u4e0b\uff0c\u4f60\u53ef\u4ee5\u81ea\u7531\u5730\u5bf9\u4ee3\u7801\u8fdb\u884c\u4fee\u6539\uff0c\u518d\u53d1\u5e03\uff0c\u53ef\u4ee5\u5c06\u4ee3\u7801\u7528\u4f5c\u5546\u4e1a\u7528\u9014\u3002\u4f46\u8981\u6c42\u4f60\uff1a"]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"\u7f72\u540d"}),"\uff1a\u5728\u539f\u6709\u4ee3\u7801\u548c\u884d\u751f\u4ee3\u7801\u4e2d\uff0c\u4fdd\u7559\u539f\u4f5c\u8005\u7f72\u540d\u53ca\u4ee3\u7801\u6765\u6e90\u4fe1\u606f\u3002"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"\u4fdd\u7559\u8bb8\u53ef\u8bc1"}),"\uff1a\u5728\u539f\u6709\u4ee3\u7801\u548c\u884d\u751f\u4ee3\u7801\u4e2d\uff0c\u4fdd\u7559Apache 2.0\u534f\u8bae\u6587\u4ef6\u3002"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:["\u672c\u4f5c\u54c1\u6587\u6863\u90e8\u5206\u91c7\u7528",(0,t.jsx)(e.a,{href:"http://creativecommons.org/licenses/by/4.0/",children:"\u77e5\u8bc6\u5171\u4eab\u7f72\u540d 4.0 \u56fd\u9645\u8bb8\u53ef\u534f\u8bae"}),"\u8fdb\u884c\u8bb8\u53ef\u3002 \u9075\u5faa\u8bb8\u53ef\u7684\u524d\u63d0\u4e0b\uff0c\u4f60\u53ef\u4ee5\u81ea\u7531\u5730\u5171\u4eab\uff0c\u5305\u62ec\u5728\u4efb\u4f55\u5a92\u4ecb\u4e0a\u4ee5\u4efb\u4f55\u5f62\u5f0f\u590d\u5236\u3001\u53d1\u884c\u672c\u4f5c\u54c1\uff0c\u4ea6\u53ef\u4ee5\u81ea\u7531\u5730\u6f14\u7ece\u3001\u4fee\u6539\u3001\u8f6c\u6362\u6216\u4ee5\u672c\u4f5c\u54c1\u4e3a\u57fa\u7840\u8fdb\u884c\u4e8c\u6b21\u521b\u4f5c\u3002\u4f46\u8981\u6c42\u4f60\uff1a"]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"\u7f72\u540d"}),"\uff1a\u5e94\u5728\u4f7f\u7528\u672c\u6587\u6863\u7684\u5168\u90e8\u6216\u90e8\u5206\u5185\u5bb9\u65f6\u5019\uff0c\u6ce8\u660e\u539f\u4f5c\u8005\u53ca\u6765\u6e90\u4fe1\u606f\u3002"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"\u975e\u5546\u4e1a\u6027\u4f7f\u7528"}),"\uff1a\u4e0d\u5f97\u7528\u4e8e\u5546\u4e1a\u51fa\u7248\u6216\u5176\u4ed6\u4efb\u4f55\u5e26\u6709\u5546\u4e1a\u6027\u8d28\u7684\u884c\u4e3a\u3002\u5982\u9700\u5546\u4e1a\u4f7f\u7528\uff0c\u8bf7\u8054\u7cfb\u4f5c\u8005\u3002"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"\u76f8\u540c\u65b9\u5f0f\u5171\u4eab\u7684\u6761\u4ef6"}),"\uff1a\u5728\u672c\u6587\u6863\u57fa\u7840\u4e0a\u6f14\u7ece\u3001\u4fee\u6539\u7684\u4f5c\u54c1\uff0c\u5e94\u5f53\u7ee7\u7eed\u4ee5\u77e5\u8bc6\u5171\u4eab\u7f72\u540d 4.0\u56fd\u9645\u8bb8\u53ef\u534f\u8bae\u8fdb\u884c\u8bb8\u53ef\u3002"]}),"\n"]}),"\n"]}),"\n"]})})]})}function m(n={}){const{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(d,{...n})}):d(n)}},1151:(n,e,i)=>{i.d(e,{Z:()=>o,a:()=>a});var t=i(7294);const s={},r=t.createContext(s);function a(n){const e=t.useContext(r);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:a(n.components),t.createElement(r.Provider,{value:e},n.children)}}}]);