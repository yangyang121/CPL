class Queue<T> {
  private items: T[];
  constructor() {
    this.items = [];
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  enqueue(element: T) {
    this.items.push(element);
  }

  dequeue(): T {
    if (!this.isEmpty()) return this.items.shift()!;
    throw new Error("queue is empty");
  }

  size() {
    return this.items.length;
  }

  clear() {
    this.items = [];
  }
}
