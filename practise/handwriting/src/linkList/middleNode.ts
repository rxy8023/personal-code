/**
 *
 * @param {ListNode} head
 * @return {ListNode}
 * @description https://leetcode-cn.com/problems/middle-of-the-linked-list/
 * @description 链表的中间节点
 * 解法一：双指针，快指针走两步，慢指针走一步，快指针走到头后慢指针为中间
 *
 */
function middleNode (head) {
    if (!head || !head.next ) return head
    let slow,fast
     fast = slow =  head
    while (fast && fast.next) {
      fast = fast.next.next
      slow = slow.next
    }
    return slow
}
