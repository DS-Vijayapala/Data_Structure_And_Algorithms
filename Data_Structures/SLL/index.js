class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // Add to end
    push(val) {
        const newNode = new Node(val);
        if (!this.head) {
            this.head = this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    // Remove from end
    pop() {
        if (!this.head) return undefined;

        let current = this.head;
        let newTail = current;

        while (current.next) {
            newTail = current;
            current = current.next;
        }

        this.tail = newTail;
        this.tail.next = null;
        this.length--;

        if (this.length === 0) {
            this.head = this.tail = null;
        }

        return current;
    }

    // Remove from start
    shift() {
        if (!this.head) return undefined;

        const removed = this.head;
        this.head = this.head.next;
        this.length--;

        if (this.length === 0) {
            this.tail = null;
        }

        removed.next = null;
        return removed;
    }

    // Add to start
    unshift(val) {
        const newNode = new Node(val);

        if (!this.head) {
            this.head = this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }

        this.length++;
        return this;
    }

    // Get node by index
    get(index) {
        if (index < 0 || index >= this.length) return null;

        let current = this.head;
        let count = 0;

        while (count < index) {
            current = current.next;
            count++;
        }

        return current;
    }

    // Set value at index
    set(index, val) {
        const node = this.get(index);
        if (!node) return false;
        node.val = val;
        return true;
    }

    // Insert at index
    insert(index, val) {
        if (index < 0 || index > this.length) return false;

        if (index === 0) return !!this.unshift(val);
        if (index === this.length) return !!this.push(val);

        const newNode = new Node(val);
        const prev = this.get(index - 1);
        newNode.next = prev.next;
        prev.next = newNode;

        this.length++;
        return true;
    }

    // Remove at index
    remove(index) {
        if (index < 0 || index >= this.length) return undefined;

        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();

        const prev = this.get(index - 1);
        const removed = prev.next;
        prev.next = removed.next;
        removed.next = null;

        this.length--;
        return removed;
    }

    // Rotate by n positions
    rotate(n) {
        if (!this.head || n === 0) return this;

        n = n % this.length;
        if (n < 0) n += this.length;

        for (let i = 0; i < n; i++) {
            this.push(this.shift().val);
        }

        return this;
    }

    // Reverse the list
    reverse() {
        let prev = null;
        let current = this.head;
        let next;

        this.tail = this.head;

        while (current) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }

        this.head = prev;
        return this;
    }

    // Print list (for debugging)
    print() {
        const arr = [];
        let current = this.head;
        while (current) {
            arr.push(current.val);
            current = current.next;
        }
        console.log(arr.join(" -> "));
    }
}


let sll = new SinglyLinkedList();

sll.push(5).push(10).push(15).push(20);
sll.print(); // 5 -> 10 -> 15 -> 20

sll.pop();
sll.print(); // 5 -> 10 -> 15

sll.shift();
sll.print(); // 10 -> 15

sll.unshift(1);
sll.print(); // 1 -> 10 -> 15

sll.insert(1, 7);
sll.print(); // 1 -> 7 -> 10 -> 15

sll.remove(2);
sll.print(); // 1 -> 7 -> 15

sll.set(1, 8);
sll.print(); // 1 -> 8 -> 15

sll.reverse();
sll.print(); // 15 -> 8 -> 1

sll.rotate(1);
sll.print(); // 8 -> 1 -> 15
