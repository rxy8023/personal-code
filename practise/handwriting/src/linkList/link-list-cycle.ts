/* https://leetcode-cn.com/problems/linked-list-cycle/
/* 判断单链表是否有环
/* 链表，双指针
/* 解法一：Set，插入Set判断Length/设置标志位
/* 解法二 双指针，快指针有没有遇到满指针，如果遇到则有环
/* 解法三 利用stringify，双指针不符合对象定义，会报错
*/

function linkListCycle (head) {
  // if (!head || !head.next) {
  //   return false
  // }
  // let slow = head.next
  // let fast = head.next.next
  // while (slow !== fast) {
  //   if (!fast || !fast.next) return false
  //   fast = fast.next.next
  //   slow = slow.next
  // }
  // return true
  if (!head || !head.next) return false
  let slow = head
  let fast = head.next
  while (slow !==fast) {
    if (!fast || fast.next) return false
    fast = fast.next.next
    slow = slow.next
  }
  return true
}

function linkListCycle1 (head) {
  try{
      JSON.stringify(head);
      return false;
  }
  catch(err){
      return true;
  }
};
