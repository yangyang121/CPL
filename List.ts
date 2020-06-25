class ListNode<T> {
  element: T;
  next: ListNode<T> | null;
  constructor(element: T) {
    this.element = element;
    this.next = null;
  }
}

class List<T> {
  private head: ListNode<T>;
  constructor(value: T) {
    this.head = new ListNode(value);
  }

  makeEmpty() {
    this.head.next = null;
  }

  isEmpty(): boolean {
    return this.head.next === null;
  }

  find(element: T): number {
    let index = -1;
    let current = this.head;
    while (current.next !== null) {
      index++;
      if (current.next.element === element) return index;
      current = current.next;
    }
    return -1;
  }

  removeAt(position: number) {
    let previous = this.head;
    let current = previous.next;
    let index = -1;
    if (current !== null) {
      while (++index < position && current.next !== null) {
        previous = current;
        current = current.next;
      }
      if (index === position) previous.next = current.next;
    }
  }

  delete(element: T) {
    const index = this.find(element);
    this.removeAt(index);
  }

  insert(element: T) {
    const node = new ListNode(element);
    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = node;
  }

  toString(): string {
    let current = this.head;
    let string = `head ${current.element} list`;
    while (current.next !== null) {
      string += ` ${current.next.element}`;
      current = current.next;
    }
    return string;
  }
}
