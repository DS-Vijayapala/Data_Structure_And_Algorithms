// Max Binary Heap Implementation
class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }

    // Insert new value (O(log n))

    insert(value) {
        this.values.push(value);
        this.heapifyUp();
        return this;
    }

    //  Move last element up until heap property is restored

    heapifyUp() {
        let index = this.values.length - 1;
        const element = this.values[index];

        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            let parent = this.values[parentIndex];

            if (element <= parent) break;

            // Swap
            this.values[parentIndex] = element;
            this.values[index] = parent;
            index = parentIndex;
        }
    }

    //  Extract maximum element (O(log n))

    extractMax() {
        if (this.values.length === 0) return undefined;
        if (this.values.length === 1) return this.values.pop();

        const max = this.values[0];
        const end = this.values.pop();
        this.values[0] = end;
        this.heapifyDown();
        return max;
    }

    //  Move root element down until heap property is restored

    heapifyDown() {
        let index = 0;
        const length = this.values.length;
        const element = this.values[0];

        while (true) {
            let leftChildIdx = 2 * index + 1;
            let rightChildIdx = 2 * index + 2;
            let leftChild, rightChild;
            let swap = null;

            if (leftChildIdx < length) {
                leftChild = this.values[leftChildIdx];
                if (leftChild > element) {
                    swap = leftChildIdx;
                }
            }

            if (rightChildIdx < length) {
                rightChild = this.values[rightChildIdx];
                if (
                    (swap === null && rightChild > element) ||
                    (swap !== null && rightChild > leftChild)
                ) {
                    swap = rightChildIdx;
                }
            }

            if (swap === null) break;

            this.values[index] = this.values[swap];
            this.values[swap] = element;
            index = swap;
        }
    }

    // Peek at the maximum value (O(1))

    peek() {
        return this.values.length > 0 ? this.values[0] : undefined;
    }

    //  Get heap size

    size() {
        return this.values.length;
    }

    //  Check if heap is empty

    isEmpty() {
        return this.values.length === 0;
    }

    // Build heap from an array (O(n))

    buildHeap(array) {

        this.values = array;
        for (let i = Math.floor(this.values.length / 2); i >= 0; i--) {
            this._heapifyDownFromIndex(i);
        }
        return this;
    }

    // Internal helper for buildHeap

    _heapifyDownFromIndex(index) {
        const length = this.values.length;
        const element = this.values[index];

        while (true) {
            let leftIdx = 2 * index + 1;
            let rightIdx = 2 * index + 2;
            let leftChild, rightChild;
            let swap = null;

            if (leftIdx < length) {
                leftChild = this.values[leftIdx];
                if (leftChild > element) swap = leftIdx;
            }

            if (rightIdx < length) {
                rightChild = this.values[rightIdx];
                if (
                    (swap === null && rightChild > element) ||
                    (swap !== null && rightChild > leftChild)
                )
                    swap = rightIdx;
            }

            if (swap === null) break;

            this.values[index] = this.values[swap];
            this.values[swap] = element;
            index = swap;
        }
    }

    // Display heap as tree-like structure

    print() {
        console.log("Heap Tree:", this.values);
    }
}

// -------------------------------
// 🧠 Example Usage
// -------------------------------

const heap = new MaxBinaryHeap();

heap.insert(10).insert(5).insert(20).insert(1).insert(15);

console.log("Initial Heap:", heap.values); // [20, 15, 10, 1, 5]
console.log("Peek:", heap.peek());         // 20
console.log("Size:", heap.size());         // 5

console.log("Extract Max:", heap.extractMax()); // 20
console.log("After Extract:", heap.values);     // [15, 5, 10, 1]

heap.insert(25);
console.log("After Insert 25:", heap.values);   // [25, 15, 10, 1, 5]

console.log("Is Empty?", heap.isEmpty()); // false

// Build heap from array
heap.buildHeap([3, 9, 2, 1, 4, 7]);
heap.print(); // [9, 4, 7, 1, 3, 2]
