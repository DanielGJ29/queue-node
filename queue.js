class Queue {
  constructor() {
    this.queue = [];
    this.limit = 10;
  }

  add(e) {
    if (this.queue.length < this.limit) {
      this.queue.push(e);
      return true;
    } else {
      return false;
    }
  }

  element() {
    if (this.queue.length > 0) {
      return this.queue[this.queue.length - 1];
    }
    throw new Error("this queue is empty");
  }

  offer1(e) {
    if (this.queue.push(e)) {
      return true;
    }
    return false;
  }

  offer2(e) {
    if (this.queue.length >= this.limit) {
      this.queue.pop();
      this.queue.push(e);
      return true;
    }
    return false;
  }

  peek() {
    if (this.limit == 0) {
      return none;
    }

    return this.queue[0];
  }

  poll() {
    if (this.queue.length === 0) {
      return none;
    }

    const aux = this.queue[0];
    this.queue.shift();
    return aux;
  }

  remove() {
    const aux = this.queue[0];
    this.queue.shift();
    return aux;
  }

  size() {
    return this.queue.length;
  }

  is_empty() {
    return this.queue.length == 0;
  }
}

const myQueue = new Queue();

console.log(myQueue.add(4));
console.log(myQueue.add(2));
console.log(myQueue.add(3));
console.log(myQueue.add(6));
console.log(myQueue.add(8));
console.log(myQueue.add(12));
console.log(myQueue.add(14));
console.log(myQueue.add(8));
console.log(myQueue.add(9));
console.log(myQueue.add(10));
// console.log(myQueue.add(4));
// console.log(myQueue.element());
// console.log(myQueue.offer2(19));
// console.log(myQueue.peek());
// console.log(myQueue.poll());
console.log(myQueue.remove());

console.log(myQueue);
