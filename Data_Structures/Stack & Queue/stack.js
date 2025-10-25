// Stack (LIFO)

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// Stack class

class Stack {

    constructor() {
        this.first = null; // Top of the stack
        this.last = null;  // Bottom of the stack
        this.size = 0;
    }

    // push() - Add item to top of stack

    push(value) {

        const newNode = new Node(value);

        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            newNode.next = this.first;
            this.first = newNode;
        }
        this.size++;
        return this.size;

    }

    // pop() - Remove item from top of stack

    pop() {

        if (!this.first) return null;
        const temp = this.first;
        if (this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;

    }

    // peek() - Return the top element without removing it

    peek() {
        if (!this.first) return null;
        return this.first.value;
    }

    // isEmpty() - Check if stack is empty

    isEmpty() {
        return this.size === 0;
    }

    // clear() - Remove all elements

    clear() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    // print() - Display all stack elements

    print() {

        let current = this.first;
        const values = [];
        while (current) {
            values.push(current.value);
            current = current.next;
        }
        console.log("Stack (top -> bottom):", values.join(" -> "));
    }

    // getSize() - Return number of elements

    getSize() {
        return this.size;
    }

}

// ------------------ Example Usage ------------------

const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);
stack.print(); // Stack (top -> bottom): 30 -> 20 -> 10

console.log("Top:", stack.peek()); // 30
console.log("Popped:", stack.pop()); // 30
stack.print(); // Stack (top -> bottom): 20 -> 10

console.log("Is Empty?", stack.isEmpty()); // false
stack.clear();
console.log("Is Empty after clear?", stack.isEmpty()); // true
