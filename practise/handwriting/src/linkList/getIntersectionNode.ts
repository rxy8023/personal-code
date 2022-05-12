/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 * @keyword leetcode160
 * @description https://leetcode-cn.com/problems/intersection-of-two-linked-lists/submissions/
 */
 var getIntersectionNode = function(headA, headB) {
// 分别遍历两个链表
  while(headA) {
      headA.flag = true
      headA = headA.next
  }
  while (headB) {
      if(headB.flag) return headB
      headB = headB.next
  }
  return null
};
var getIntersectionNode1 = function (headA, headB) {
  // 两个指针，先走完的为短链表，判断是否有相同节点，若有相同则是两链表相交，返回第一个相同节点 即可。否则返回 null ，两链表不相交。
  let pA = headA, pB = headB
  // 清除高度差
  while (pA || pB) {
    if (pA === pB) return pA
    if (!pA) {
      pA = headB
    } else {
      pA = pA.next
    }
    if (!pB) {
      pB = headA
    } else {
      pB = pB.next
    }
  }
  return null
}
