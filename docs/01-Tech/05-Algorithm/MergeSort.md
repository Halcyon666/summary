---
title: 归并排序
sidebar_label: 归并排序
sidebar_position: 10
---
 
 
 * [视频链接](https://www.bilibili.com/video/BV1Ax411U7Xx?from=search&seid=2724712095992885035) 
 * 算法思路：将两个局部有序的数组归并为一个有序的数组
 * 归并过程：i,j两个指针指向两个数组，分别比较该位置上值的大小
 * 小的先放入原数组；
 * 分治法：针对整体都无序的数组则需要分治法来处理，将数组不断一分为二
 * 进行归并排序，直到长度为1(指针重合的时候)排序完成

```java
package simpleAlgorithm;

/**
 * @Author: WhaleFall541
 * @Date: 2021/6/11 20:40
 * [视频链接](https://www.bilibili.com/video/BV1Ax411U7Xx?from=search&seid=2724712095992885035)
 * 算法思路：将两个局部有序的数组归并为一个有序的数组
 * 归并过程：i,j两个指针指向两个数组，分别比较该位置上值的大小
 * 小的先放入原数组；
 * 分治法：针对整体都无序的数组则需要分治法来处理，将数组不断一分为二
 * 进行归并排序，直到长度为1(指针重合的时候)排序完成
 */
public class MergeSort {

    public static void main(String[] args) {
        int[] arr = new int[]{10, 4, 6, 8, 2, 3, 9, 1};
        mergeSort(arr, 0, arr.length-1);
        StringBuilder sb = new StringBuilder();
        for (int i : arr)
            sb.append(i).append(" ");
        System.out.println("sb = " + sb);
    }

    private static void mergeSort(int[] arr, int l, int r) {
        // 归并排序只有一个元素时结束递归
        if (l == r)
            return;
        // 规定mid为分界线右边的第一个元素
        int mid = (l + r) / 2+1;
        mergeSort(arr, l, mid-1);
        mergeSort(arr, mid, r);
        merge(arr, l, mid, r);
    }

    private static void merge(int[] arr, int l, int mid, int r) {
        int m = mid - l, n = r - mid + 1;

        // 规定mid为分界线右边的第一个元素
        int[] left = new int[m];
        int[] right = new int[n];

        for (int i = l; i < mid; i++)
            left[i - l] = arr[i];
        // NOTE: 注意这里的r表示右边界 i<=r 等号掉了就悲剧了
        // 错误输出为 0 0 0 0 0 0 0 10
        for (int i = mid; i <= r; i++)
            right[i - mid] = arr[i];

        //do merge
        int k = l, i = 0, j = 0;
        while (i < n && j < m) {
            if (left[i] > right[j])
                // 把小的数放回到数组中从k开始放
                arr[k++] = right[j++];
            else
                arr[k++] = left[i++];
        }

        // 如果一个数组为空了，放入另一个数组所有元素
        while (i < n)
            arr[k++] = left[i++];
        while (j < m)
            arr[k++] = right[j++];
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