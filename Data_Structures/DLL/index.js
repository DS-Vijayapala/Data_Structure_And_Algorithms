class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
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
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    // Remove from end
    pop() {
        if (!this.tail) return undefined;

        const removed = this.tail;
        if (this.length === 1) {
            this.head = this.tail = null;
        } else {
            this.tail = removed.prev;
            this.tail.next = null;
            removed.prev = null;
        }

        this.length--;
        return removed;
    }

    // Remove from start
    shift() {
        if (!this.head) return undefined;

        const removed = this.head;
        if (this.length === 1) {
            this.head = this.tail = null;
        } else {
            this.head = removed.next;
            this.head.prev = null;
            removed.next = null;
        }

        this.length--;
        return removed;
    }

    // Add to start
    unshift(val) {
        const newNode = new Node(val);
        if (!this.head) {
            this.head = this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }

        this.length++;
        return this;
    }

    // Get node by index
    get(index) {
        if (index < 0 || index >= this.length) return null;

        let current;
        if (index <= this.length / 2) {
            current = this.head;
            let count = 0;
            while (count < index) {
                current = current.next;
                count++;
            }
        } else {
            current = this.tail;
            let count = this.length - 1;
            while (count > index) {
                current = current.prev;
                count--;
            }
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
        const before = this.get(index - 1);
        const after = before.next;

        before.next = newNode;
        newNode.prev = before;
        newNode.next = after;
        after.prev = newNode;

        this.length++;
        return true;
    }

    // Remove at index
    remove(index) {
        if (index < 0 || index >= this.length) return undefined;
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();

        const removed = this.get(index);
        const before = removed.prev;
        const after = removed.next;

        before.next = after;
        after.prev = before;

        removed.next = removed.prev = null;
        this.length--;
        return removed;
    }

    // Reverse the list
    reverse() {
        let current = this.head;
        let temp = null;

        this.tail = this.head;

        while (current) {
            temp = current.prev;
            current.prev = current.next;
            current.next = temp;
            current = current.prev;
        }

        if (temp) {
            this.head = temp.prev;
        }

        return this;
    }

    // Rotate list by n positions
    rotate(n) {
        if (!this.head || n === 0) return this;

        n = n % this.length;
        if (n < 0) n += this.length;

        for (let i = 0; i < n; i++) {
            this.push(this.shift().val);
        }

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
        console.log(arr.join(" <-> "));
    }
}


let dll = new DoublyLinkedList();

dll.push(5).push(10).push(15).push(20);
dll.print(); // 5 <-> 10 <-> 15 <-> 20

dll.pop();
dll.print(); // 5 <-> 10 <-> 15

dll.shift();
dll.print(); // 10 <-> 15

dll.unshift(1);
dll.print(); // 1 <-> 10 <-> 15

dll.insert(1, 7);
dll.print(); // 1 <-> 7 <-> 10 <-> 15

dll.remove(2);
dll.print(); // 1 <-> 7 <-> 15

dll.set(1, 8);
dll.print(); // 1 <-> 8 <-> 15

dll.reverse();
dll.print(); // 15 <-> 8 <-> 1

dll.rotate(1);
dll.print(); // 8 <-> 1 <-> 15
