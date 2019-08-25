import { Node } from "./node";

export class List<T>{

  private head: Node<T> = null;
  private tail: Node<T> = null;
  private size: number = 0;

  /**
   * 向链表中追加一个内容
   * @param item 要被追加的内容
   */
  add(item: T) {

    const node = new Node(item);

    if (this.tail) // 只有链表为空的时候 tail 为 null
      // 添加完节点后移动最后节点的位置
      this.tail = this.tail.setNext(node);
    else
      // tail 为 null 说明链表是空的这里初始化链表
      this.head = this.tail = node;

    this.size++;

    return this;
  }

  /**
   * 向链表中第一个位置添加内容
   * @param item 要被设置为第一个节点的内容
   */
  prepend(item: T) {

    const node = new Node(item);

    if (this.head) // head 不为 null 说明 head 和 tail 都有值
      this.head = node.setNext(this.head);
    else // head 为 null 说明 tail 和 head 需要初始化
      this.tail = this.head = node;

    this.size++;

    return this;

  }

  contains(value: T, head: Node<T> = this.head) {

    // node 存在便进入循环
    for (let node = head; node !== null; node = head.getNext()) {
      if (node.getItem() === value) {
        return true;
      }
    }
    // node 迭代完成也没有找到内容
    return false;

  }

}


