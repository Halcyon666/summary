#!/bin/bash
for file in `find ./docs/* -type f -print`  # 指定要遍历的目录
do
    if [ -f "$file" ]; then  # 检查是否为文件
        mv "$file" "$file"x # 打印文件名或执行其他操作
    fi
done

