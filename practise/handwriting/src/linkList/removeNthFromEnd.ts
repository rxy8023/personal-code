/**
 * @name  删除链表的倒数第 N 个结点
 * @description https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/
 * @param head
 * @param n
 * 双指针，快指针快一步，快指针走到n，慢指针为n-1 指向 n+1
 */
let removeNthFromEnd = function(head, n) {
  if (!head || !head.next) return head
  let slow = head
  let fast = head
  // 快指针先走n步
  while (--n) {
    fast = fast.next
  }
  if(!fast.next) return head.next

  return head
}
