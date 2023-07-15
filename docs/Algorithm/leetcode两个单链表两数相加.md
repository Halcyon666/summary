---
title: "两个单链表相加"
hidemeta: true
---

[题目](https://leetcode-cn.com/problems/add-two-numbers/)
**NOTE**

1. 要点不要忘了最后的进位
2. 两个单链表可以长度任意
```java
package whale.leetcode.simple;

/**
 * @Author: WhaleFall541
 * @Date: 2021/5/29 20:30
 */
public class AddTwoSumLinkedList {
    public static class ListNode {
        int val;
        ListNode next;

        ListNode() {
        }

        ListNode(int val) {
            this.val = val;
        }

        ListNode(int val, ListNode next) {
            this.val = val;
            this.next = next;
        }
    }

    /*
    [9,9,9,9,9,9,9]
    [9,9,9,9]
     */
    public static void main(String[] args) {
        ListNode l1 = new ListNode(9, new ListNode(9, new ListNode(9,
                new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9)))))));
        ListNode l2 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))));
        ListNode result = addTwoNumbers(l1, l2);
        StringBuilder sb = new StringBuilder();
        while (result != null) {
            sb.append(result.val);
            result = result.next;
        }
        System.out.println("sb = " + sb);

    }

    public static ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        ListNode result;
        ListNode head = result = new ListNode();
        int temp = 0, value1, value2;

        while (l1 != null || l2 != null) {
            value1 = (l1 == null) ? 0 : l1.val;
            value2 = (l2 == null) ? 0 : l2.val;

            // 当前指针位值的值相加
            result.val = value1 + value2 + temp;
            temp = result.val / 10;// 记录进位的值
            result.val = result.val % 10;// 记录当前位的值

            // l1 l2 只要不为空则后移指针
            if (l1 != null)
                l1 = l1.next;
            if (l2 != null)
                l2 = l2.next;
            // l1 l2 只要其一不为空则结果集需要后延一位
            if (l1 != null || l2 != null)
                result = result.next = new ListNode();
        }

        // 处理最后一位进位的情况
        if (temp != 0)
            result.next = new ListNode(temp);
        return head;
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