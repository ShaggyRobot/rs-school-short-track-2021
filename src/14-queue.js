const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor() {
    this.node = null;
  }

  get size() {
    let currentNode = this.node;
    let cnt = 0;
    while (currentNode !== null) {
      cnt++;
      currentNode = currentNode.next;
    }
    return cnt;
  }

  enqueue(element) {
    const newNode = new ListNode();
    newNode.value = element;
    const currentNode = this.node;
    if (!this.node) {
      this.node = newNode;
    }
    newNode.next = currentNode;
    this.node = newNode;
  }

  dequeue() {
    let currentNode = this.node;
    if (currentNode) {
      if (!currentNode.next) {
        const lastval = currentNode.value;
        this.node = null;
        return lastval;
      }
      while (currentNode.next) {
        if (!currentNode.next.next) {
          const val = currentNode.next.value;
          currentNode.next = null;
          return val;
        }
        currentNode = currentNode.next;
      }
    }
    return null;
  }
}

module.exports = Queue;
