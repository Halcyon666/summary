"use strict";(self.webpackChunksummary=self.webpackChunksummary||[]).push([[9043],{4242:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var o=t(1527),i=t(7701);const r={title:"py replacement",sidebar_label:"py replacement",sidebar_position:2},l="\u5728\u591a\u4e2a\u6587\u4ef6\u4e2d\u66ff\u6362\u591a\u4e2a\u76f8\u5e94\u7684\u5185\u5bb9",a={id:"Develop-Tools/python-replacement-script",title:"py replacement",description:"main.py",source:"@site/docs/09-Develop-Tools/python-replacement-script.md",sourceDirName:"09-Develop-Tools",slug:"/Develop-Tools/python-replacement-script",permalink:"/Develop-Tools/python-replacement-script",draft:!1,unlisted:!1,editUrl:"https://github.com/Halcyon666/summary/edit/main/docs/09-Develop-Tools/python-replacement-script.md",tags:[],version:"current",lastUpdatedAt:1710339597,formattedLastUpdatedAt:"2024\u5e743\u670813\u65e5",sidebarPosition:2,frontMatter:{title:"py replacement",sidebar_label:"py replacement",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"gradle \u548c maven \u914d\u7f6e",permalink:"/Develop-Tools/gradle-maven configuration"},next:{title:"Everything \u4f7f\u7528",permalink:"/Develop-Tools/Everything"}},s={},c=[{value:"<code>main.py</code>",id:"mainpy",level:3},{value:"<code>rules_module.py</code>",id:"rules_modulepy",level:3}];function p(e){const n={code:"code",h1:"h1",h3:"h3",pre:"pre",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"\u5728\u591a\u4e2a\u6587\u4ef6\u4e2d\u66ff\u6362\u591a\u4e2a\u76f8\u5e94\u7684\u5185\u5bb9",children:"\u5728\u591a\u4e2a\u6587\u4ef6\u4e2d\u66ff\u6362\u591a\u4e2a\u76f8\u5e94\u7684\u5185\u5bb9"}),"\n",(0,o.jsx)(n.h3,{id:"mainpy",children:(0,o.jsx)(n.code,{children:"main.py"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"# main.py\nfrom rules_module import rules\nimport re, os\n\ndef replace_content_in_file(file_path, replacement_rules):\n\n    # Read the original content from the file\n    with open(file_path, 'r', encoding='utf-8') as file:\n        content = file.read()\n\n    # Apply multiple replacement rules\n    modified_content = content\n    for rule_data in rules:\n        original_content = rule_data['original_content']\n        replacement = rule_data['replacement']\n        # print(original_content)\n        # print(replacement)\n\n        # \u4f7f\u7528 re.escape \u8f6c\u4e49\u539f\u59cb\u5185\u5bb9\n        escaped_content = re.escape(original_content)\n\n        # \u5b9a\u4e49\u6b63\u5219\u8868\u8fbe\u5f0f\u6a21\u5f0f\n        pattern = re.compile(escaped_content, re.DOTALL)\n\n        # \u4f7f\u7528 sub \u51fd\u6570\u8fdb\u884c\u66ff\u6362\n        modified_content = pattern.sub(replacement, modified_content)\n\n    return modified_content\n\ndef list_files_in_folder(folder_path):\n    \"\"\"\n    List all files in a folder.\n\n    Parameters:\n    - folder_path (str): Path to the folder.\n\n    Returns:\n    - list: List of file names.\n    \"\"\"\n    return [entry.name for entry in os.scandir(folder_path) if entry.is_file()]\n\n\nfolder_to_list = 'application'\ndirectory_prefix = 'st'\nfile_list = list_files_in_folder(folder_to_list)\n\nfor filename in file_list:\n\t# Specify the file to process\n    file_to_process = f\"{folder_to_list}/{filename}\"\n    print(f'{file_to_process} has processed!')\n\t# Replace content in the specified file using the defined rules\n    final_modified_content = replace_content_in_file(file_to_process, example_rules)\n\n\t# Write the final modified content back to the file\n    with open(f\"{file_prefix}/{filename}\", 'w+', encoding='utf-8') as output_file:\n        output_file.write(final_modified_content)\n"})}),"\n",(0,o.jsx)(n.h3,{id:"rules_modulepy",children:(0,o.jsx)(n.code,{children:"rules_module.py"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"# rules_module.py\nrules = [\n    {\n        'original_content': 'original_content1',\n        'replacement': 'replacement1'\n    },\n    {\n        'original_content': 'original_content2',\n        'replacement': 'replacement2'\n    },\n    # Add more rules as needed\n]\n\n"})})]})}function d(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},7701:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>l});var o=t(959);const i={},r=o.createContext(i);function l(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);