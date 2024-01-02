"use strict";(self.webpackChunksummary=self.webpackChunksummary||[]).push([[7853],{99:(n,e,a)=>{a.r(e),a.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>t,metadata:()=>l,toc:()=>d});var r=a(5893),s=a(1151);const t={title:"lambda \u4f7f\u7528",sidebar_label:"lambda \u4f7f\u7528",sidebar_position:1},i=void 0,l={id:"Java/JavaBase/lambda",title:"lambda \u4f7f\u7528",description:"Java 8\u51fd\u6570\u5f0f\u7f16\u7a0b",source:"@site/docs/01-Java/01-JavaBase/lambda.mdx",sourceDirName:"01-Java/01-JavaBase",slug:"/Java/JavaBase/lambda",permalink:"/summary/Java/JavaBase/lambda",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"lambda \u4f7f\u7528",sidebar_label:"lambda \u4f7f\u7528",sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"APT \u4f7f\u7528",permalink:"/summary/Java/JavaBase/annotation processor"}},c={},d=[{value:"Java 8\u51fd\u6570\u5f0f\u7f16\u7a0b",id:"java-8\u51fd\u6570\u5f0f\u7f16\u7a0b",level:2},{value:"\u91cd\u6784\u9057\u7559\u4ee3\u7801",id:"\u91cd\u6784\u9057\u7559\u4ee3\u7801",level:3},{value:"\u51fd\u6570\u65b9\u6cd5\u53c2\u6570\u91cd\u8f7d",id:"\u51fd\u6570\u65b9\u6cd5\u53c2\u6570\u91cd\u8f7d",level:3},{value:"\u63a5\u53e3\u591a\u7ee7\u627f",id:"\u63a5\u53e3\u591a\u7ee7\u627f",level:3},{value:"\u5b50\u6536\u96c6\u5668<code>groupingBy</code>",id:"\u5b50\u6536\u96c6\u5668groupingby",level:3},{value:"\u91cd\u6784\u9886\u57df\u65b9\u6cd5",id:"\u91cd\u6784\u9886\u57df\u65b9\u6cd5",level:3},{value:"\u5c0f\u6280\u5de7",id:"\u5c0f\u6280\u5de7",level:3}];function o(n){const e={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h2,{id:"java-8\u51fd\u6570\u5f0f\u7f16\u7a0b",children:"Java 8\u51fd\u6570\u5f0f\u7f16\u7a0b"}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:"NOTES: \u6240\u6709\u5185\u5bb9\u6458\u81ea Java 8\u51fd\u6570\u5f0f\u7f16\u7a0b"}),"\n"]}),"\n",(0,r.jsx)(e.h3,{id:"\u91cd\u6784\u9057\u7559\u4ee3\u7801",children:"\u91cd\u6784\u9057\u7559\u4ee3\u7801"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-java",children:"public Set<String> findLongTracks(List<Album> albums) {\n    Set<String> trackNames=new HashSet<>();\n    for(Album album : albums) {\n        for (Track track : album.getTrackList()) {\n            if (track.getLength() > 60) {\n                String name=track.getName();\n                trackNames.add(name);\n            }\n        }\n    }\n    return trackNames;\n}\n"})}),"\n",(0,r.jsxs)(e.p,{children:["\u91cd\u67841 ",(0,r.jsx)(e.code,{children:"for"})," \u53d8\u6210 ",(0,r.jsx)(e.code,{children:"forEach"})]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-java",children:"public Set<String> findLongTracks(List<Album> albums) {\n    Set<String> trackNames=new HashSet<>();\n    albums.stream()\n        .forEach(album-> {\n            album.getTracks()\n                .forEach(track-> {\n                    if (track.getLength() > 60) {\n                        String name=track.getName();\n                        trackNames.add(name);\n                    }\n                });\n        });\n    return trackNames;\n}\n"})}),"\n",(0,r.jsxs)(e.p,{children:["\u91cd\u67842 ",(0,r.jsx)(e.code,{children:"if"})," \u53d8\u6210 ",(0,r.jsx)(e.code,{children:"filter"})]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-java",children:"public Set<String> findLongTracks(List<Album> albums) {\n    Set<String> trackNames=new HashSet<>();\n    albums.stream()\n        .forEach(album-> {\n            album.getTracks()\n                .filter(track-> track.getLength() > 60)\n                .map(track-> track.getName())\n                .forEach(name-> trackNames.add(name));\n        });\n    return trackNames;\n}\n"})}),"\n",(0,r.jsxs)(e.p,{children:["\u91cd\u67843 \u6700\u5916\u5c42",(0,r.jsx)(e.code,{children:"forEach"})," \u53d8\u6210 ",(0,r.jsx)(e.code,{children:"faltMap"})]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-java",children:"public Set<String> findLongTracks(List<Album> albums) {\n    Set<String> trackNames=new HashSet<>();\n    albums.stream()\n        .flatMap(album-> album.getTracks())\n        .filter(track-> track.getLength() > 60)\n        .map(track-> track.getName())\n        .forEach(name-> trackNames.add(name));\n    return trackNames;\n}\n"})}),"\n",(0,r.jsxs)(e.p,{children:["\u91cd\u67844 ",(0,r.jsx)(e.code,{children:"forEach"})," \u6dfb\u52a0\u5143\u7d20\u53d8\u6210 ",(0,r.jsx)(e.code,{children:"collect"})," \u8fdb\u884c\u6536\u96c6"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-java",children:"public Set<String> findLongTracks(List<Album> albums) {\n    return albums.stream()\n        .flatMap(album-> album.getTracks())\n        .filter(track-> track.getLength() > 60)\n        .map(track-> track.getName())\n        .collect(toSet());\n}\n"})}),"\n",(0,r.jsx)(e.h3,{id:"\u51fd\u6570\u65b9\u6cd5\u53c2\u6570\u91cd\u8f7d",children:"\u51fd\u6570\u65b9\u6cd5\u53c2\u6570\u91cd\u8f7d"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-java",children:'overloadedMethod((x, y)-> x+y);\n\nprivate interface IntegerBiFunction extends BinaryOperator<Integer> {\n}\nprivate void overloadedMethod(BinaryOperator<Integer> Lambda) {\n    System.out.print("BinaryOperator");\n}\nprivate void overloadedMethod(IntegerBiFunction Lambda) {\n    System.out.print("IntegerBinaryOperator");\n}\n'})}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsxs)(e.p,{children:["\u5206\u522b\u63a5\u53d7",(0,r.jsx)(e.code,{children:"BinaryOperator"}),"\u548c\u8be5\u63a5\u53e3\u7684\u4e00\u4e2a\u5b50\u7c7b\u4f5c\u4e3a\u53c2\u6570\u3002\u8c03\u7528\u8fd9\u4e9b\u65b9\u6cd5\u65f6\uff0cJava\u63a8\u5bfc\u51fa\u7684Lambda\u8868\u8fbe\u5f0f\u7684\u7c7b\u578b\u6b63\u662f\u6700\u5177\u4f53\u7684\u51fd\u6570\u63a5\u53e3\u7684\u7c7b\u578b\u3002\u6bd4\u5982\uff0c\u4f8b4-7\u5728\u4f8b4-8\u7684\u4e24\u4e2a\u65b9\u6cd5\u4e2d\u9009\u62e9\u65f6\uff0c\u8f93\u51fa\u7684\u662f",(0,r.jsx)(e.code,{children:"IntegerBinaryOperator"}),"\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"\u603b\u4f53\u539f\u5219"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u5982\u679c\u53ea\u6709\u4e00\u4e2a\u53ef\u80fd\u7684\u76ee\u6807\u7c7b\u578b\uff0c\u7531\u76f8\u5e94\u51fd\u6570\u63a5\u53e3\u91cc\u7684\u53c2\u6570\u7c7b\u578b\u63a8\u5bfc\u5f97\u51fa\uff1b"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u5982\u679c\u6709\u591a\u4e2a\u53ef\u80fd\u7684\u76ee\u6807\u7c7b\u578b\uff0c\u7531\u6700\u5177\u4f53\u7684\u7c7b\u578b\u63a8\u5bfc\u5f97\u51fa\uff1b"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u5982\u679c\u6709\u591a\u4e2a\u53ef\u80fd\u7684\u76ee\u6807\u7c7b\u578b\u4e14\u6700\u5177\u4f53\u7684\u7c7b\u578b\u4e0d\u660e\u786e\uff0c\u5219\u9700\u4eba\u4e3a\u6307\u5b9a\u7c7b\u578b\u3002"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.h3,{id:"\u63a5\u53e3\u591a\u7ee7\u627f",children:"\u63a5\u53e3\u591a\u7ee7\u627f"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-java",children:'public interface Jukebox {\n    public default String rock() {\n        return "... all over the world! ";\n    }\n}\n\npublic interface Carriage {\n    public default String rock() {\n        return "... from side to side";\n    }\n}\n\npublic class MusicalCarriage implements Carriage, Jukebox {\n}\n'})}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"javac"}),"\u5e76\u4e0d\u660e\u786e\u5e94\u8be5\u7ee7\u627f\u54ea\u4e2a\u63a5\u53e3\u4e2d\u7684\u65b9\u6cd5\uff0c\u56e0\u6b64\u7f16\u8bd1\u5668\u4f1a\u62a5\u9519\uff1aclass Musical Carriage inherits unrelated defaults for rock() from types Carriage and Jukebox\u3002"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-java",children:"public class MusicalCarriage\n    implements Carriage, Jukebox {\n    @Override\n    public String rock() {\n        return Carriage.super.rock();\n    }\n}\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u603b\u4f53\u539f\u5219"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u7c7b\u80dc\u4e8e\u63a5\u53e3\u3002\u5982\u679c\u5728\u7ee7\u627f\u94fe\u4e2d\u6709\u65b9\u6cd5\u4f53\u6216\u62bd\u8c61\u7684\u65b9\u6cd5\u58f0\u660e\uff0c\u90a3\u4e48\u5c31\u53ef\u4ee5\u5ffd\u7565\u63a5\u53e3\u4e2d\u5b9a\u4e49\u7684\u65b9\u6cd5\u3002"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u5b50\u7c7b\u80dc\u4e8e\u7236\u7c7b\u3002\u5982\u679c\u4e00\u4e2a\u63a5\u53e3\u7ee7\u627f\u4e86\u53e6\u4e00\u4e2a\u63a5\u53e3\uff0c\u4e14\u4e24\u4e2a\u63a5\u53e3\u90fd\u5b9a\u4e49\u4e86\u4e00\u4e2a\u9ed8\u8ba4\u65b9\u6cd5\uff0c\u90a3\u4e48\u5b50\u7c7b\u4e2d\u5b9a\u4e49\u7684\u65b9\u6cd5\u80dc\u51fa\u3002"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u6ca1\u6709\u89c4\u5219\u4e09\u3002\u5982\u679c\u4e0a\u9762\u4e24\u6761\u89c4\u5219\u4e0d\u9002\u7528\uff0c\u5b50\u7c7b\u8981\u4e48\u9700\u8981\u5b9e\u73b0\u8be5\u65b9\u6cd5\uff0c\u8981\u4e48\u5c06\u8be5\u65b9\u6cd5\u58f0\u660e\u4e3a\u62bd\u8c61\u65b9\u6cd5\u3002"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.ol,{start:"5",children:["\n",(0,r.jsxs)(e.li,{children:["\u6bd4\u5982\u4f7f\u7528\u5e76\u884c\u6d41\u65f6\uff0c",(0,r.jsx)(e.code,{children:"forEach"}),"\u65b9\u6cd5\u4e0d\u80fd\u4fdd\u8bc1\u5143\u7d20\u662f\u6309\u987a\u5e8f\u5904\u7406\u7684\u3002\u5982\u679c\u9700\u8981\u4fdd\u8bc1\u6309\u987a\u5e8f\u5904\u7406\uff0c\u5e94\u8be5\u4f7f\u7528",(0,r.jsx)(e.code,{children:"forEachOrdered"}),"\u65b9\u6cd5\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(e.h3,{id:"\u5b50\u6536\u96c6\u5668groupingby",children:["\u5b50\u6536\u96c6\u5668",(0,r.jsx)(e.code,{children:"groupingBy"})]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-java",children:"public Map<Artist, List<String>> nameOfAlbums(Stream<Album> albums) {\n    return albums.collect(groupingBy(Album::getMainMusician, mapping(Album::getName, toList())));\n}\n"})}),"\n",(0,r.jsxs)(e.p,{children:["mapping\u5141\u8bb8\u5728\u6536\u96c6\u5668\u7684\u5bb9\u5668\u4e0a\u6267\u884c\u7c7b\u4f3cmap\u7684\u64cd\u4f5c\u3002\u4f46\u662f\u9700\u8981\u6307\u660e\u4f7f\u7528\u4ec0\u4e48\u6837\u7684\u96c6\u5408\u7c7b\u5b58\u50a8\u7ed3\u679c,\u6bd4\u5982",(0,r.jsx)(e.code,{children:"toList"}),"\u3002"]}),"\n",(0,r.jsx)(e.h3,{id:"\u91cd\u6784\u9886\u57df\u65b9\u6cd5",children:"\u91cd\u6784\u9886\u57df\u65b9\u6cd5"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-java",children:"public long countFeature(ToLongFunction<Album> function) {\n    return albums.stream()\n        .mapToLong(function)\n        .sum();\n}\npublic long countTracks() {\n    return countFeature(album-> album.getTracks().count());\n}\npublic long countRunningTime() {\n    return countFeature(album-> album.getTracks()\n                        .mapToLong(track-> track.getLength())\n                        .sum());\n}\npublic long countMusicians() {\n    return countFeature(album-> album.getMusicians().count());\n}\n"})}),"\n",(0,r.jsx)(e.h3,{id:"\u5c0f\u6280\u5de7",children:"\u5c0f\u6280\u5de7"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u5224\u65ad\u4e00\u4e2a\u64cd\u4f5c\u662f\u60f0\u6027\u6c42\u503c\u8fd8\u662f\u53ca\u65e9\u6c42\u503c\u5f88\u7b80\u5355\uff1a\u53ea\u9700\u770b\u5b83\u7684\u8fd4\u56de\u503c\u3002\u5982\u679c\u8fd4\u56de\u503c\u662fStream\uff0c\u90a3\u4e48\u662f\u60f0\u6027\u6c42\u503c\uff1b\u5982\u679c\u8fd4\u56de\u503c\u662f\u53e6\u4e00\u4e2a\u503c\u6216\u4e3a\u7a7a\uff0c\u90a3\u4e48\u5c31\u662f\u53ca\u65e9\u6c42\u503c."}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u628alambda\u7684\u7684\u903b\u8f91\u62bd\u53d6\u6210\u4e00\u4e2a\u65b9\u6cd5\u540e\uff0c\u5c31\u53ef\u4ee5\u6d4b\u8bd5\u8be5\u65b9\u6cd5\uff0c\u628a\u6240\u6709\u7684\u8fb9\u754c\u60c5\u51b5\u90fd\u8986\u76d6\u5230"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u4f7f\u7528peek\u65b9\u6cd5\u89c2\u5bdflambda\u4e2d\u95f4\u503c"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-java",children:'Set<String> nationalities = album.getMusicians()\n    .filter(artist-> artist.getName().startsWith("The"))\n    .map(artist-> artist.getNationality())\n    .peek(nation-> System.out.println("Found nationality: "+nation))\n    .collect(Collectors.<String>toSet());\n'})}),"\n",(0,r.jsx)(e.admonition,{title:"\u534f\u8bae",type:"tip",children:(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["\u672c\u4f5c\u54c1\u4ee3\u7801\u90e8\u5206\u91c7\u7528 ",(0,r.jsx)(e.a,{href:"https://www.apache.org/licenses/LICENSE-2.0",children:"Apache 2.0\u534f\u8bae"}),"\u8fdb\u884c\u8bb8\u53ef\u3002\u9075\u5faa\u8bb8\u53ef\u7684\u524d\u63d0\u4e0b\uff0c\u4f60\u53ef\u4ee5\u81ea\u7531\u5730\u5bf9\u4ee3\u7801\u8fdb\u884c\u4fee\u6539\uff0c\u518d\u53d1\u5e03\uff0c\u53ef\u4ee5\u5c06\u4ee3\u7801\u7528\u4f5c\u5546\u4e1a\u7528\u9014\u3002\u4f46\u8981\u6c42\u4f60\uff1a"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"\u7f72\u540d"}),"\uff1a\u5728\u539f\u6709\u4ee3\u7801\u548c\u884d\u751f\u4ee3\u7801\u4e2d\uff0c\u4fdd\u7559\u539f\u4f5c\u8005\u7f72\u540d\u53ca\u4ee3\u7801\u6765\u6e90\u4fe1\u606f\u3002"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"\u4fdd\u7559\u8bb8\u53ef\u8bc1"}),"\uff1a\u5728\u539f\u6709\u4ee3\u7801\u548c\u884d\u751f\u4ee3\u7801\u4e2d\uff0c\u4fdd\u7559Apache 2.0\u534f\u8bae\u6587\u4ef6\u3002"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["\u672c\u4f5c\u54c1\u6587\u6863\u90e8\u5206\u91c7\u7528",(0,r.jsx)(e.a,{href:"http://creativecommons.org/licenses/by/4.0/",children:"\u77e5\u8bc6\u5171\u4eab\u7f72\u540d 4.0 \u56fd\u9645\u8bb8\u53ef\u534f\u8bae"}),"\u8fdb\u884c\u8bb8\u53ef\u3002 \u9075\u5faa\u8bb8\u53ef\u7684\u524d\u63d0\u4e0b\uff0c\u4f60\u53ef\u4ee5\u81ea\u7531\u5730\u5171\u4eab\uff0c\u5305\u62ec\u5728\u4efb\u4f55\u5a92\u4ecb\u4e0a\u4ee5\u4efb\u4f55\u5f62\u5f0f\u590d\u5236\u3001\u53d1\u884c\u672c\u4f5c\u54c1\uff0c\u4ea6\u53ef\u4ee5\u81ea\u7531\u5730\u6f14\u7ece\u3001\u4fee\u6539\u3001\u8f6c\u6362\u6216\u4ee5\u672c\u4f5c\u54c1\u4e3a\u57fa\u7840\u8fdb\u884c\u4e8c\u6b21\u521b\u4f5c\u3002\u4f46\u8981\u6c42\u4f60\uff1a"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"\u7f72\u540d"}),"\uff1a\u5e94\u5728\u4f7f\u7528\u672c\u6587\u6863\u7684\u5168\u90e8\u6216\u90e8\u5206\u5185\u5bb9\u65f6\u5019\uff0c\u6ce8\u660e\u539f\u4f5c\u8005\u53ca\u6765\u6e90\u4fe1\u606f\u3002"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"\u975e\u5546\u4e1a\u6027\u4f7f\u7528"}),"\uff1a\u4e0d\u5f97\u7528\u4e8e\u5546\u4e1a\u51fa\u7248\u6216\u5176\u4ed6\u4efb\u4f55\u5e26\u6709\u5546\u4e1a\u6027\u8d28\u7684\u884c\u4e3a\u3002\u5982\u9700\u5546\u4e1a\u4f7f\u7528\uff0c\u8bf7\u8054\u7cfb\u4f5c\u8005\u3002"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"\u76f8\u540c\u65b9\u5f0f\u5171\u4eab\u7684\u6761\u4ef6"}),"\uff1a\u5728\u672c\u6587\u6863\u57fa\u7840\u4e0a\u6f14\u7ece\u3001\u4fee\u6539\u7684\u4f5c\u54c1\uff0c\u5e94\u5f53\u7ee7\u7eed\u4ee5\u77e5\u8bc6\u5171\u4eab\u7f72\u540d 4.0\u56fd\u9645\u8bb8\u53ef\u534f\u8bae\u8fdb\u884c\u8bb8\u53ef\u3002"]}),"\n"]}),"\n"]}),"\n"]})})]})}function u(n={}){const{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(o,{...n})}):o(n)}},1151:(n,e,a)=>{a.d(e,{Z:()=>l,a:()=>i});var r=a(7294);const s={},t=r.createContext(s);function i(n){const e=r.useContext(t);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:i(n.components),r.createElement(t.Provider,{value:e},n.children)}}}]);