/**
 * 一个拥有自动扩容的泛型栈(LIFO),
 * 来自 <算法>(第四版) p82
 * 原书中的代码使用 Java 编写, 我在内部使用了一个固定长度的数组来模拟静态类型语言中的固定长度的数组.
 * 当元素的个数到达数组的上限, 则二倍原有的元素的数量进行扩容
 * 当元素的个数小于数组的四分之一, 则数组长度缩小到原有的二分之一
 */
class Stack<T>{

  private stackInner: Array<T>;
  private itemCount: number = 0;

  /**
   * @param stackLength 栈的初始容量
   */
  constructor(stackLength = 100) {
    this.stackInner = new Array(stackLength);
  }
  
  /**
   * 调整内部数组的容量
   * @param newStackLength 内部数组的容量大小
   */
  private resize(newStackLength: number) {

    const newInnerStack: Array<T> = new Array(newStackLength);

    let i = 0;

    while (i < newStackLength) {
      newInnerStack[i] = this.stackInner[i];
      i++
    }

    this.stackInner = newInnerStack;

  }
  
  /**
   * 获取元素的个数
   */
  public size() {
    return this.itemCount;
  }

  /**
   * 将一个元素压入栈中
   * @param item 压入的元素
   */
  public push(item: T) {
    if (this.itemCount === this.stackInner.length) {
      this.resize(this.itemCount * 2);
    }
    this.stackInner[this.itemCount++] = item;
  }

  /**
   * 弹出栈中第一个元素, 如果没有内容则返回 null
   */
  public pop() {

    if (this.itemCount === 0) {
      return;
    }

    const item = this.stackInner[--this.itemCount];
    this.stackInner[this.itemCount] = null;

    if (this.itemCount <= this.stackInner.length / 4) {
      this.resize(Math.floor(this.stackInner.length / 2));
    }

    return item;
  }

}


function Test() {

  const stack = new Stack<string>();

  stack.push('hello');
  stack.push('world');
  stack.push('game');
  stack.push('over');
  console.log(stack.size());
  console.log(stack.pop());
  console.log(stack.pop());
  console.log(stack.pop());
  console.log(stack.pop());
  console.log(stack.size());

}

Test();