/* https://leetcode-cn.com/problems/reverse-linked-list/
迭代法
将单链表中的每个节点的后继指针指向它的前驱节点即可
反转链表**/
function reverseList (head) {
  if (!head || head.next) return head
  let current = head
  let preNode = null
  while (current) {
    // 暂存下一个节点
    let next = current.next
    // 改变指向 反转 curr 的后继指针
    current.next = preNode
    // 待反转节点指向下一个节点
    preNode = current
    // 指针后移
    current = next
  }
  head = preNode
  return head
}
/**
 *
 * @param head
 * 递归法，从后往前重建
 */
function reverseListRecursion (head) {
  if(!head || !head.next) return head
  var next = head.next
  var reverse = reverseListRecursion(next)
  next.next = head
  head.next = null
  return reverse
}
