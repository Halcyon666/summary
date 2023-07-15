

# 冒泡排序

**算法思维**：第一层for循环控制趟数，第二层for循环从j=0和j=1开始比较
如果发现前面比后面大则互换位置
**优化**：当第一趟下来 没有元素交换，说明该数组已经有序了不需要排序

```java
package simpleAlgorithm;

/**
 * @Author: WhaleFall541
 * @Date: 2021/6/12 23:22
 * 算法思维：第一层for循环控制趟数，第二层for循环从j=0和j=1开始比较
 * 如果发现前面比后面大则互换位置
 * 优化：当第一趟下来 没有元素交换，说明该数组已经有序了不需要排序
 */
public class BubbleSort {
    public static void main(String[] args) throws InterruptedException {
        int[] arr = {-1111, 20, -3, -10, 100, -255};
        bubble(arr);
        StringBuilder sb = new StringBuilder();
        for (int i : arr)
            sb.append(i).append(" ");
        System.out.println("sb = " + sb);

    }

    // 冒泡排序
    private static void bubble(int[] arr) {

        for (int i = 0; i < arr.length; i++) {
            boolean f = false;
            for (int j = i + 1; j < arr.length; j++) {
                if (arr[j - 1] > arr[j]) {
                    swap(arr, j - 1, j);
                    f = true;
                }
            }
            if (!f) return;
        }

    }

    private static void swap(int[] arr, int a, int b) {
        int tmp = arr[a];
        arr[a] = arr[b];
        arr[b] = tmp;
    }
}
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