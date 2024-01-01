---
title: 堆排序
sidebar_label: 堆排序
sidebar_position: 4
---


[代码来自该视频](https://www.bilibili.com/video/BV1Eb41147dK?t=1590)
[github仓库](https://github.com/whalefall541/learn4Algorithm.git)
**算法思维**：先初始化堆（从最大的非叶子节点开始，往前不断进行树化成大根堆）
再把头结点和最后一个节点互换位置，然后重新树化头结点，如此往复，每次排好一个
元素最差的情况需要走(n-1)趟互换。

如何树化树化i节点成大根堆呢？

- 比较树化节点i和其叶子节点的大小，如果发现有比i节点还大的则互换位置
- 然后去调整互换后的位置的节点直至到达叶子节点位置
- PS：互换之后，MAX值所在的根堆被破坏 需要进一步调整

```java
/**
 * @Author: WhaleFall541
 * @Date: 2021/6/12 16:43
 * @see <a href="https://www.bilibili.com/video/BV1Eb41147dK?t=1590">https://www.bilibili.com/video/BV1Eb41147dK?t=1590</a>
 */
public class HeapSort {

    public static void main(String[] args) {

        int[] arr = new int[]{4, 10, 3, 5, 1, 2};
        heapSort(arr);
        StringBuilder sb = new StringBuilder();
        for (int i : arr)
            sb.append(i).append(" ");
        System.out.println("sb = " + sb);
    }

    private static void heapSort(int[] arr) {
        int n = arr.length;


        // 初始化堆 从最大的非叶子节点开始树化到头节点
        // last_node = n-1
        // 又 parent = (i-1)/2
        for (int i = (n - 2) / 2; i >= 0; i--)
            heapAdjust(arr, n, i);

        // 将大根堆中 根节点和最后一个节点互换位置
        for (int j = n - 1; j >= 0; j--) {
            swap(arr, j, 0);
            // 对剩下的堆 j个元素进行树化
            heapAdjust(arr, j, 0);
        }
    }

    /**
     * 对第i个节点所在的树进行树化,生成大根堆
     *
     * @param arr 需要树化的数组
     * @param n   树化时数的长度
     * @param i   当前树化的位置
     */
    private static void heapAdjust(int[] arr, int n, int i) {

        if (i >= n) return;
        int left = i * 2 + 1;
        int right = i * 2 + 2;
        int max = i;
        if (left < n && arr[left] > arr[max])
            max = left;
        if (right < n && arr[right] > arr[max])
            max = right;
        if (max != i) {
            swap(arr, max, i);
            // 树化交换后max的位置,直到叶子节点或者没有交换情况为止
            heapAdjust(arr, n, max);
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