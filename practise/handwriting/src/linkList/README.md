# 链表
链表相对于数组来说，首先，链表不需要连续的内存空间，它是由一组零散的内存块透过指针连接而成，所以，每一个块中必须包含当前节点内容以及后继指针。最常见的链表类型有单链表、双链表以及循环链表。

数组读取的时间复杂度位 O(1)，删除写入为O(n)，链表删除写入位O（1），读取为O（n），数组擅长读取，链表擅长写入，因为链表写入的时候只需要移动指针就可以，数组写入需要重新分配空间，后面的元素全部都要移位

## 单链表
单链表的数据结构
``` typescript
class LinkedNode <N> {
  /** 元素对象本身的值 */
  element:N = null
  /** 指向前一项 */
  previous:LinkedNode<N> = null
  /** 指向下一项 */
  next:LinkedNode<N> = null
  constructor(element:N) {
    this.element = element
  }
}

export default class LinkedList<T> {

  /** 头节点 */
  public head:LinkedNode<T> = null
  /** 链表的长度 */
  public length:number = 0
  constructor (element: T) {
    this.head = new LinkedNode(element)
    this.length = 1
    this.head.next = null
    this.head.previous = null
  }
  /** 将数组转化为链表 */
  static form<L>(arr: Array<L>):LinkedList<L> {
    const { length } = arr;
    const linkedList = new LinkedList(arr.shift())
    linkedList.length = length;
    arr.reduce((previous, current) => {
      previous.next = new LinkedNode(current)
      previous.next.previous = previous
      return previous.next
    }, linkedList.head)
    return linkedList
  }
  /** 获取列表 */
  public getList():LinkedNode<T> {
    return this.head
  }
  /** 追加元素 */
  public append(newElement:T) {
    let node = new LinkedNode(newElement)
    let p = this.head
    if (!this.head) {
      this.head = node
    } else {
      while(p) {
        p = p.next
      }
      p.next = node
    }
    length += 1
  }
  public search (element:T ):LinkedNode<T> {
    if (!this.head) return null
    let p = this.head.next
    // while(index++ < length) {
    while(p) {
      if (p.element === element ) return p
      p = p.next
    }
    return null
  }
  /**
   * @description 在指定节点插入元素
   * @param newElement 插入元素
   * @param node 被插入节点
   */
  public insert (position:, node:T):LinkedNode<T> {
    let newNode = new LinkedNode(newElement)
    let previousNode = this.search(node)
    if (previousNode) {
      // TODO 特殊处理 head
      const rawNextNode = previousNode.next
      previousNode.next = newNode
      newNode.previous = previousNode
      newNode.next = rawNextNode
      rawNextNode.previous = newNode
      this.length++
      return newNode
    }
    return null
  }
  /**
   * @description 在指定节点删除元素
   * @param element 被插入节点
   */
  public delete (node:T) {
    let deleteNode = this.search(node)
    let previousNode = deleteNode.previous
    let nextNode = deleteNode.next
    if (deleteNode) {
      if (this.head === deleteNode) {
        this.head = deleteNode.next;
      }
      previousNode.next = nextNode
      nextNode.previous = previousNode
      this.length --
    }
  }
}
```
## 双链表
顾名思义，单链表只有一个方向，从头节点到尾节点，那么双链表就有两个方向，从尾节点到头节点：

<img src="https://camo.githubusercontent.com/44f12b5df164c3c4607801f78dcf1efaf176ae7fa092b7b83b696ecbab170939/687474703a2f2f7265736f757263652e6d757969792e636e2f696d6167652f32303230303332363233303934372e706e67"/>

## 循环单链表
循环单链表是一种特殊的单链表，它和单链表的唯一区别是：单链表的尾节点指向的是 NULL，而循环单链表的尾节点指向的是头节点，这就形成了一个首尾相连的环：

<img src="https://camo.githubusercontent.com/7d28d7ec13beb1ba526ed6d7088c336ceed7d88c2caee1a6674881cafff836b8/68747470733a2f2f63646e2e6e6c61726b2e636f6d2f79757175652f302f323032302f706e672f3237333530362f313538343139343133323631352d30333861333633632d326338362d343463382d623539612d3133336464353166656337322e706e67"/>
