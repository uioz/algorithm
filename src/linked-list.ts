import { Node } from "./node";

/**
 * 单向链表的基础实现, 规范来自于
 * https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/linked-list
 */
export class List<T> implements Iterable<T>{

  protected head: Node<T> = null;
  protected tail: Node<T> = null;
  protected sizeInner: number = 0;

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

    this.sizeInner++;

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

    this.sizeInner++;

    return this;

  }

  /**
   * 判断给定的数据是否存在于链表中
   * @param value 搜索的内容
   * @param head 搜索的起点节点
   */
  contains(value: T, head: Node<T> = this.head) {

    // node 存在便进入循环
    for (let node = head; node !== null; node = node.getNext()) {
      if (node.getItem() === value) {
        return true;
      }
    }
    // node 迭代完成也没有找到内容
    return false;

  }

  /**
   * 从链表中移除给定的数据
   * @param value 搜索的内容
   * @param head 搜索的起点节点
   */
  remove(value: T, head: Node<T> = this.head) {

    if (!this.head) {
      return false;
    }

    // 首先判断第一个节点的值
    if (this.head.getItem() === value) {
      this.head = this.head.getNext();
      this.sizeInner--;
      return true;
    }

    let beforeNode = head;
    let nextNode = head.getNext();

    // 循环第一个节点后的每一个节点
    while (nextNode !== null) {

      if (nextNode.getItem() === value) {
        beforeNode.setNext(nextNode.getNext());
        this.sizeInner--;
        return true;
      }

      beforeNode = nextNode;
      nextNode = nextNode.getNext();

    }

    // 遍历所有节点后未找到对于的值
    return false;

  }

  /**
   * 实现迭代器接口来替换规范中的迭代实现
   */
  [Symbol.iterator]() {

    let head = this.head;

    return {
      next: () => {

        if (head) {
          let cache = head;
          head = head.getNext();
          return {
            value: cache.getItem(),
            done: false
          }
        } else {
          return {
            value: undefined,
            done: true
          }
        }
      }

    }

  }

  size() {
    return this.sizeInner;
  }


}

export function test() {

  const list = new List<string>();

  list.add('world');
  list.prepend('hello');
  console.log(list.size());
  console.log(list.contains('hello'));
  console.log(list.contains('world'));
  console.log(list.contains('game'));

  for (const item of list) {
    console.log(item);
  }

}
