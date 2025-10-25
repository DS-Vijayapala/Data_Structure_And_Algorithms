// Queue (FIFO)

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// Queue class

class Queue {

    constructor() {
        this.first = null; // front (head)
        this.last = null;  // rear (tail)
        this.size = 0;
    }

    // enqueue(value) - Add element to the end of the queue

    enqueue(value) {

        const newNode = new Node(value);

        if (!this.first) { // if queue is empty
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }

        this.size++;
        return this.size;

    }

    // dequeue() - Remove element from the front

    dequeue() {

        if (!this.first) return null;

        const temp = this.first;
        if (this.first === this.last) {
            this.last = null;
        }

        this.first = this.first.next;
        this.size--;
        return temp.value;
    }

    // peek() - See the element at the front without removing

    peek() {

        return this.first ? this.first.value : null;

    }

    // isEmpty() - Check if queue has no elements

    isEmpty() {
        return this.size === 0;
    }

    // clear() - Remove all elements from the queue

    clear() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    // print() - Display all elements in order

    print() {
        let current = this.first;
        const values = [];
        while (current) {
            values.push(current.value);
            current = current.next;
        }
        console.log("Queue (front -> rear):", values.join(" -> "));
    }

    // getSize() - Return the current queue size

    getSize() {
        return this.size;
    }

}

// ------------------ Example Usage ------------------

const queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.print(); // Queue (front -> rear): 10 -> 20 -> 30

console.log("Front:", queue.peek()); // 10
console.log("Dequeued:", queue.dequeue()); // 10
queue.print(); // Queue (front -> rear): 20 -> 30

console.log("Queue Size:", queue.getSize()); // 2
console.log("Is Empty?", queue.isEmpty()); // false

queue.clear();
console.log("After Clear - Is Empty?", queue.isEmpty()); // true
