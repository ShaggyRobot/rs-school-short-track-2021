/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    // this.element = element;
    this.stack = [];
  }

  push(element) {
    this.stack.push(element);
  }

  pop() {
    const el = this.stack.slice(-1)[0];
    this.stack = this.stack.slice(0, -1);
    return el;
  }

  peek() {
    return this.stack.slice(-1)[0];
  }
}

module.exports = Stack;

// const s = new Stack();
// s.push(1);
// s.push(3);
// console.log(s.peek());
// s.push(4);
// console.log(s.peek());
// console.log(s.pop())
// console.log(s.peek())
