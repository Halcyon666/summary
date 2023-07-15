---
title: "AWK SED 简单使用"
hidemeta: true
---
# awk

```shell
# awk 
tee awk.txt <<-'EOF'
john wang male 30 02103213
ludc dasf fama 12 12311321
EOF

awk '{print $1,$4}' awk.txt
awk '{print NF}' awk.txt
# 打印最后一行 awk 默认以空位为分隔符 NF内部变量表示以分隔符划分后元素的个数
awk '{print $NF}' awk.txt
cat awk.txt  | awk '{print substr($1,1)}'
cat awk.txt  | awk   '{print length}'

cat awk.txt | awk 'BEGIN{total=0}{total+=$4}END{print total}'
cat awk.txt | awk 'BEGIN{total=0}{total+=$4}END{print total/NR}'
```

# sed

```shell
tee sed.txt <<-'EOF'  
this is line 1, this is First line
this is line 2, the Second line, Empty line followed

this is line 4, this is Third line
this is line 5, this is Fifth line
EOF
# 替换
sed 's/this/That/g ; s/line/LINE/g' sed.txt
# 删除第一行 
sed '1d' sed.txt
# 保存删除后文件
sed '1d' sed.txt > save_file
# 如果想直接修改源文件
sed -i '1d' save_file

# 删除指定范围 （第1-3行）
sed '1,3d' sed.txt

# 删除最后一行
sed '$d' sed.txt

# 清空文件
sed '1,$d' sed.txt

# 只保留第5行
sed '5!d' sed.txt

# 删除所有包含Empty的行
sed '/Empty/d' sed.txt 

# 删除空行
sed '/^$/d' sed.txt

# 替换每一行的第一个值
sed 's/line/LINE' sed.txt

sed 's/line/LINE/2' sed.txt
sed 's/line/LINE/g' sed.txt

# 替换开头的this 为 that
sed 's/^this/that/'
```


:::tip 协议

- 本作品代码部分采用 [Apache 2.0协议](https://www.apache.org/licenses/LICENSE-2.0)进行许可。遵循许可的前提下，你可以自由地对代码进行修改，再发布，可以将代码用作商业用途。但要求你：
  - **署名**：在原有代码和衍生代码中，保留原作者署名及代码来源信息。
  - **保留许可证**：在原有代码和衍生代码中，保留Apache 2.0协议文件。

- 本作品文档部分采用[知识共享署名 4.0 国际许可协议](http://creativecommons.org/licenses/by/4.0/)进行许可。 遵循许可的前提下，你可以自由地共享，包括在任何媒介上以任何形式复制、发行本作品，亦可以自由地演绎、修改、转换或以本作品为基础进行二次创作。但要求你：
  - **署名**：应在使用本文档的全部或部分内容时候，注明原作者及来源信息。
  - **非商业性使用**：不得用于商业出版或其他任何带有商业性质的行为。如需商业使用，请联系作者。
  - **相同方式共享的条件**：在本文档基础上演绎、修改的作品，应当继续以知识共享署名 4.0国际许可协议进行许可。

:::