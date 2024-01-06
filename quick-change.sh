#!/bin/bash
for file in `find ./docs/* -type f -print`  # 指定要遍历的目录
do
    if [ -f "$file" ]; then  # 检查是否为文件
		# 重命名md->mdx
        #mv "$file" "$file"x 
		# 重命名mdx->md
		# mv "$file" "${file::-1}"
		
		# 删除 转载请注明 行
		# sed -i '/转载请注明/d' "$file"
		#sed -i '/:::tip 协议/,/:::/d' "$file"
		awk '/^:::tip 协议$/,/^:::$/ {next} 1' "$file" > temp_file && mv temp_file "$file"



		# 追加协议
# 		echo -n '
# :::tip 协议

# - 本作品代码部分采用 [Apache 2.0协议](https://www.apache.org/licenses/LICENSE-2.0)进行许可。遵循许可的前提下，你可以自由地对代码进行修改，再发布，可以将代码用作商业用途。但要求你：
#   - **署名**：在原有代码和衍生代码中，保留原作者署名及代码来源信息。
#   - **保留许可证**：在原有代码和衍生代码中，保留Apache 2.0协议文件。

# - 本作品文档部分采用[知识共享署名 4.0 国际许可协议](http://creativecommons.org/licenses/by/4.0/)进行许可。 遵循许可的前提下，你可以自由地共享，包括在任何媒介上以任何形式复制、发行本作品，亦可以自由地演绎、修改、转换或以本作品为基础进行二次创作。但要求你：
#   - **署名**：应在使用本文档的全部或部分内容时候，注明原作者及来源信息。
#   - **非商业性使用**：不得用于商业出版或其他任何带有商业性质的行为。如需商业使用，请联系作者。
#   - **相同方式共享的条件**：在本文档基础上演绎、修改的作品，应当继续以知识共享署名 4.0国际许可协议进行许可。

# :::' >> "$file"
    fi
done

