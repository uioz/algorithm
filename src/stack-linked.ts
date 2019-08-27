import { List } from "./linked-list";

/**
 * 使用单向链表实现的下压栈.
 * 实现了 <算法>(第四版) p94 中提到的下压堆栈
 */
export class Stack<T> extends List<T> {

  /**
   * 向栈中压入元素
   * @param item 元素
   */
  push(item: T) {
    this.prepend(item);
    return this;
  }

  /**
   * 弹出栈中的元素
   */
  pop() {
    const head = this.head;
    if (head) {
      this.head = head.getNext();
      this.sizeInner--;
      return head.getItem();
    }
  }

}

export function test() {

  const stack = new Stack<string>();

  stack.push('hello').push('world');
  console.log(stack.size());
  console.log(stack.pop());
  console.log(stack.pop());
  console.log(stack.size());
}
