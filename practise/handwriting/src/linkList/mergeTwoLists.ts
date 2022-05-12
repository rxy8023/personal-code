/* https://leetcode-cn.com/problems/merge-two-sorted-lists/
合并两个有序单链表
递归
**/
import { LinkedNode } from './linkenList'
// 创建一个新链表
function mergeTwoLists(list1, list2) {
  let head = new LinkedNode(0)
  let p1 = list1.next
  let p2 = list2.next
  while(p1 || p2) {
    if (!p1) {
      head.next = p2
      p2 = p2.next
    } else if (!p2) {
      head.next = p1
      p1 = p1.next
    } else if (p1.val > p2.val) {

    }
  }
}
// 迭代
// 确定边界条件： 当递归到任意链表为 null ，直接将 next 指向另外的链表即可，不需要继续递归了

function mergeTwoListsRecursion(list1, list2 ) {
  if (!list1) return list2
  if (!list2) return list1
  if (list1.val < list2.val) {
    list1.next = mergeTwoListsRecursion(list1.next, list2)
    return list1
  } else {
    list2.next = mergeTwoListsRecursion(list2.next, list1)
    return list2
  }
}
