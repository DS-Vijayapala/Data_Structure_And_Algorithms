// Node class

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// Binary Search Tree class

class TreeTravesal {
    constructor() {
        this.root = null;
    }

    // Insert a new value into the BST

    insert(value) {

        const newNode = new Node(value);

        if (!this.root) {
            this.root = newNode;
            return this;
        }

        let current = this.root;

        while (true) {
            if (value === current.value) return undefined; // avoid duplicates
            if (value < current.value) {
                if (!current.left) {
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if (!current.right) {
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            }
        }
    }

    // -------------------------------
    // Breadth First Search (BFS)
    // -------------------------------

    breadthFirstSearch() {

        const data = [];
        const queue = [];
        let node = this.root;
        if (!node) return data;

        queue.push(node);
        while (queue.length) {
            node = queue.shift();
            data.push(node.value);

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        return data;

    }

    // -------------------------------
    // Depth First Search - PreOrder
    // -------------------------------

    DFSPreOrder() {

        const data = [];
        function traverse(node) {
            data.push(node.value);
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
        }
        if (this.root) traverse(this.root);
        return data;
    }

    // -------------------------------
    // Depth First Search - InOrder
    // -------------------------------

    DFSInOrder() {

        const data = [];
        function traverse(node) {
            if (node.left) traverse(node.left);
            data.push(node.value);
            if (node.right) traverse(node.right);
        }
        if (this.root) traverse(this.root);
        return data;
    }

    // -------------------------------
    // Depth First Search - PostOrder
    // -------------------------------

    DFSPostOrder() {

        const data = [];
        function traverse(node) {
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
            data.push(node.value);
        }
        if (this.root) traverse(this.root);
        return data;

    }

    // -------------------------------
    // Find Minimum Value
    // -------------------------------

    findMin() {

        let current = this.root;
        if (!current) return null;
        while (current.left) {
            current = current.left;
        }
        return current.value;

    }

    // -------------------------------
    //  Find Maximum Value
    // -------------------------------

    findMax() {

        let current = this.root;

        if (!current) return null;
        while (current.right) {
            current = current.right;
        }
        return current.value;
    }

    // -------------------------------
    // 🔍Search for a specific value
    // -------------------------------

    contains(value) {
        let current = this.root;
        while (current) {
            if (value === current.value) return true;
            if (value < current.value) current = current.left;
            else current = current.right;
        }
        return false;
    }
}

// -------------------------------
// Example Usage
// -------------------------------

const tree = new BinarySearchTree();

tree.insert(15).insert(20).insert(10).insert(12).insert(1).insert(5).insert(50);

console.log("🌐 BFS:", tree.breadthFirstSearch());
console.log("🌲 DFS PreOrder:", tree.DFSPreOrder());
console.log("🌿 DFS InOrder:", tree.DFSInOrder());
console.log("🍂 DFS PostOrder:", tree.DFSPostOrder());
console.log("🔍 Contains 12:", tree.contains(12));
console.log("📏 Min Value:", tree.findMin());
console.log("📏 Max Value:", tree.findMax());

//                   15
//                  /  \
//                10    20
//               / \      \
//              1   12     50
//               \
//                5