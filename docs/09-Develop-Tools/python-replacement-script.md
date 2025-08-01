---
title: py replacement
sidebar_label: py replacement
sidebar_position: 2
---

# 在多个文件中替换多个相应的内容

### `main.py`

```python
# main.py
from rules_module import rules
import re, os

def replace_content_in_file(file_path, replacement_rules):

    # Read the original content from the file
    with open(file_path, 'r', encoding='utf-8') as file:
        content = file.read()

    # Apply multiple replacement rules
    modified_content = content
    for rule_data in rules:
        original_content = rule_data['original_content']
        replacement = rule_data['replacement']
        # print(original_content)
        # print(replacement)

        # 使用 re.escape 转义原始内容
        escaped_content = re.escape(original_content)

        # 定义正则表达式模式
        pattern = re.compile(escaped_content, re.DOTALL)

        # 使用 sub 函数进行替换
        modified_content = pattern.sub(replacement, modified_content)

    return modified_content

def list_files_in_folder(folder_path):
    """
    List all files in a folder.

    Parameters:
    - folder_path (str): Path to the folder.

    Returns:
    - list: List of file names.
    """
    return [entry.name for entry in os.scandir(folder_path) if entry.is_file()]


folder_to_list = 'application'
directory_prefix = 'st'
file_list = list_files_in_folder(folder_to_list)

for filename in file_list:
	# Specify the file to process
    file_to_process = f"{folder_to_list}/{filename}"
    print(f'{file_to_process} has processed!')
	# Replace content in the specified file using the defined rules
    final_modified_content = replace_content_in_file(file_to_process, example_rules)

	# Write the final modified content back to the file
    with open(f"{file_prefix}/{filename}", 'w+', encoding='utf-8') as output_file:
        output_file.write(final_modified_content)
```

### `rules_module.py`

```python
# rules_module.py
rules = [
    {
        'original_content': 'original_content1',
        'replacement': 'replacement1'
    },
    {
        'original_content': 'original_content2',
        'replacement': 'replacement2'
    },
    # Add more rules as needed
]

```

### 替换所有空行

`^\s*$\n+`

### 替换包含 ABC 的行为空行

`ABC(.*)\s*`
