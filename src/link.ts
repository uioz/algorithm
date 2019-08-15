
class Item{

}


class Node {

  private item:Item;
  private next:Node;

  constructor(next:Node,item:Item = null){
    this.next = next;
    this.item = item;
  }


}

