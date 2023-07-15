---
title: 返回两个正序数组中位数
sidebar_label: 返回两个正序数组中位数
sidebar_position: 9
---

**[代码来自](https://leetcode-cn.com/problems/median-of-two-sorted-arrays/solution/xun-zhao-liang-ge-you-xu-shu-zu-de-zhong-wei-s-114/)**
此代码为二分查找，时间复杂度为log2(m+n) 
- [ ] todo  此题第k小解法待完成 求第k小的数即可求个 中位数

```
/**
 * @Author: WhaleFall541
 * @Date: 2021/6/8 20:23
 * 给定两个大小分别为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。请你找出并返回这两个正序数组的 中位数
 * @see <a href="https://leetcode-cn.com/problems/median-of-two-sorted-arrays/">https://leetcode-cn.com/problems/median-of-two-sorted-arrays/</a>
 */
public class FindMedianSortedArrays {
    public static void main(String[] args) {
        int[] a1 = {1};
        int[] a2 = {1, 2, 2, 3};
        double res = findMedianSortedArrays(a1, a2);
        System.out.println("res = " + res);
    }

    public static double findMedianSortedArrays(int[] nums1, int[] nums2) {
        if (nums1.length > nums2.length) {
            int[] temp = nums1;
            nums1 = nums2;
            nums2 = temp;
        }

        int m = nums1.length;
        int n = nums2.length;

        // 分割线左边的所有元素需要满足的个数
        int totalLeft = (m + n + 1) / 2;

        // 在 nums1 的区间 [0, m] 里查找恰当的分割线，
        // 使得 nums1[i - 1] <= nums2[j] && nums2[j - 1] <= nums1[i]
        int left = 0;
        // NOTE: 这里的m 如果你当指针写成m-1 当短的数组长度为1时 right = m-1 = 0;
        int right = m;


        while (left < right) {
            // NOTE: right - left + 1 此处+1是为避免一种情况
            // 当left =1，right =2 时 left + (right - left) / 2=1;
            // 设if条件走了else分支 left又被赋值为1了 然后就没玩没了次循环了
            int i = left + (right - left + 1) / 2;
            int j = totalLeft - i;
            if (nums1[i - 1] > nums2[j]) {
                // 下一轮搜索的区间 [left, i - 1]
                right = i - 1;
            } else {
                // 下一轮搜索的区间 [i, right]
                left = i;
            }
        }

        int i = left;
        int j = totalLeft - i;

        // NOTE: i 表示 分界线有右边的第一个元素 当i为0时说明数组左边越界处理为一个极小的值
        int nums1LeftMax = i == 0 ? Integer.MIN_VALUE : nums1[i - 1];
        // NOTE: 角标为m、n时数组已经右边越界 此时处理为一个很大的值
        int nums1RightMin = i == m ? Integer.MAX_VALUE : nums1[i];
        int nums2LeftMax = j == 0 ? Integer.MIN_VALUE : nums2[j - 1];
        int nums2RightMin = j == n ? Integer.MAX_VALUE : nums2[j];

        if (((m + n) % 2) == 1) {
            return Math.max(nums1LeftMax, nums2LeftMax);
        } else {
            return (double) ((Math.max(nums1LeftMax, nums2LeftMax) + Math.min(nums1RightMin, nums2RightMin))) / 2;
        }
    }
}
```

### 参考资料
1. LEETCODE[视频地址](https://leetcode-cn.com/problems/median-of-two-sorted-arrays/solution/xun-zhao-liang-ge-you-xu-shu-zu-de-zhong-wei-s-114/)


:::tip 协议

- 本作品代码部分采用 [Apache 2.0协议](https://www.apache.org/licenses/LICENSE-2.0)进行许可。遵循许可的前提下，你可以自由地对代码进行修改，再发布，可以将代码用作商业用途。但要求你：
  - **署名**：在原有代码和衍生代码中，保留原作者署名及代码来源信息。
  - **保留许可证**：在原有代码和衍生代码中，保留Apache 2.0协议文件。

- 本作品文档部分采用[知识共享署名 4.0 国际许可协议](http://creativecommons.org/licenses/by/4.0/)进行许可。 遵循许可的前提下，你可以自由地共享，包括在任何媒介上以任何形式复制、发行本作品，亦可以自由地演绎、修改、转换或以本作品为基础进行二次创作。但要求你：
  - **署名**：应在使用本文档的全部或部分内容时候，注明原作者及来源信息。
  - **非商业性使用**：不得用于商业出版或其他任何带有商业性质的行为。如需商业使用，请联系作者。
  - **相同方式共享的条件**：在本文档基础上演绎、修改的作品，应当继续以知识共享署名 4.0国际许可协议进行许可。

:::