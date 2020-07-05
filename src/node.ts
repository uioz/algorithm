
export class Node<T>{

  private item: T;
  private next: Node<T>;

  constructor(item: T = null, next: Node<T> = null) {
    this.next = next;
    this.item = item;
  }

  setNext(nextNode: Node<T>) {
    this.next = nextNode;
    return this;
  }

  setItem(nextItem: T) {
    this.item = nextItem;
    return this;
  }

  getNext() {
    return this.next;
  }

  getItem() {
    return this.item;
  }

}

export function test() {
  const Node1 = new Node('string');
  const Node2 = new Node('hello');

  Node1.setNext(Node2);

  console.log(Node1);
  console.log(Node2);
}
