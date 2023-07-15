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



> <font color="red" >转载请注明 [原文地址](https://www.cnblogs.com/whalefall541/p/14826519.html)</font>