/**
 * TS 版本的双向循环链表实现
 */

/**
* 节点类型
*/

export class LinkedNode <N> {
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

export class LinkedList<T> {

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
    // 循环链表需要调整查找条件
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
  public insert (newElement:T, node:T):LinkedNode<T> {
    let newNode = new LinkedNode(newElement)
    let previousNode = this.search(node)
    if (previousNode) {
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
