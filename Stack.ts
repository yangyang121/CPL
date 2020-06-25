class Stack<T> {
  private topOfStack: number;
  private items: T[];
  private EmptyTOS = -1;

  constructor() {
    this.topOfStack = this.EmptyTOS;
    this.items = [];
  }

  isEmpty(): boolean {
    return this.topOfStack === this.EmptyTOS;
  }

  makeEmpty() {
    this.topOfStack = this.EmptyTOS;
  }

  push(element: T) {
    this.items[++this.topOfStack] = element;
  }

  top(): T {
    if (!this.isEmpty()) return this.items[this.topOfStack];
    throw new Error("stack is empty");
  }

  pop() {
    if (!this.isEmpty) this.topOfStack--;
  }

  topAndPop(): T {
    if (!this.isEmpty()) return this.items[this.topOfStack--];
    throw new Error("stack is empty");
  }

  toString(): string {
    let index = 0;
    let string = "";
    while (index <= this.topOfStack) {
      string += ` ${this.items[index++]}`;
    }
    return string;
  }
}
