# 二分插入

[代码来自改视频改写](https://www.bilibili.com/video/BV1nJ411V7bd?p=161)

* 算法思维：该算法是在插入排序的基础上优化的
* 插入元素下标`i`，从`0 ~ i-1`找插入该元素的位置，
* 现在不是一个个的比较，而是进行二分查找`left<=right`
* 不满足的时候，`right+1`即为当前`i`元素要插入的位置
* 
* 当然插入之前 还是要移动一下元素的，从`right+1 ~ i-1`
* 位置整体后移

```
/**
 * @Author: WhaleFall541
 * @Date: 2021/6/9 22:05
 */
public class BinaryInsertion {
    public static void main(String[] args) {
        int[] arr = {-1, 20, -3, -10, 100, -255};
        int[] ints = binaryInsertion(arr);
        StringBuilder sb = new StringBuilder();
        for (int i : ints)
            sb.append(i).append(" ");
        System.out.println("sb = " + sb);
    }

    public static int[] binaryInsertion(int[] arr) {
        int n = arr.length;
        // 3 -1 2
        for (int i = 1; i < n; i++) {
            int x = arr[i];// 表示要排序的数值
            int left = 0, right = i - 1;
            while (left <= right) {
                int mid = (left + right) / 2;
                if (x > arr[mid])
                    left = mid + 1;
                else
                    right = mid - 1;
            }
            // 将从 right+1 到 i-1位置的元素后移一位
            for (int j = i - 1; j >= right + 1; j--)
                arr[j + 1] = arr[j];

            // 退出循环是high+1就是x要插入的位置
            arr[right + 1] = x;
        }
        return arr;
    }
}
```

### 参考资料

1. [B站王卓老师的视频](https://www.bilibili.com/video/BV1Eb4y1R7zd?)


:::tip 协议

- 本作品代码部分采用 [Apache 2.0协议](https://www.apache.org/licenses/LICENSE-2.0)进行许可。遵循许可的前提下，你可以自由地对代码进行修改，再发布，可以将代码用作商业用途。但要求你：
  - **署名**：在原有代码和衍生代码中，保留原作者署名及代码来源信息。
  - **保留许可证**：在原有代码和衍生代码中，保留Apache 2.0协议文件。

- 本作品文档部分采用[知识共享署名 4.0 国际许可协议](http://creativecommons.org/licenses/by/4.0/)进行许可。 遵循许可的前提下，你可以自由地共享，包括在任何媒介上以任何形式复制、发行本作品，亦可以自由地演绎、修改、转换或以本作品为基础进行二次创作。但要求你：
  - **署名**：应在使用本文档的全部或部分内容时候，注明原作者及来源信息。
  - **非商业性使用**：不得用于商业出版或其他任何带有商业性质的行为。如需商业使用，请联系作者。
  - **相同方式共享的条件**：在本文档基础上演绎、修改的作品，应当继续以知识共享署名 4.0国际许可协议进行许可。

:::