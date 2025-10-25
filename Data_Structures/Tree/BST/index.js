// Binary Search Tree

// Node Class
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// Binary Search Tree Class
class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    // Insert a value into the BST

    insert(value) {

        const newNode = new Node(value);
        if (!this.root) {
            this.root = newNode;
            return this;
        }

        let current = this.root;
        while (true) {
            if (value === current.value) return this;
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

    // Find a node in the BST

    find(value) {

        if (!this.root) return undefined;
        let current = this.root;

        while (current) {
            if (value === current.value) return current;
            current = value < current.value ? current.left : current.right;
        }
        return undefined;
    }

    // Remove a node from the BST

    remove(value) {

        const removeNode = (node, value) => {
            if (!node) return null;

            if (value < node.value) {
                node.left = removeNode(node.left, value);
                return node;
            } else if (value > node.value) {
                node.right = removeNode(node.right, value);
                return node;
            } else {
                // Node found
                if (!node.left && !node.right) return null; // no children
                if (!node.left) return node.right; // one child (right)
                if (!node.right) return node.left; // one child (left)

                // Two children: find inorder successor
                let minRight = node.right;
                while (minRight.left) {
                    minRight = minRight.left;
                }
                node.value = minRight.value;
                node.right = removeNode(node.right, minRight.value);
                return node;
            }
        };

        this.root = removeNode(this.root, value);
        return this;
    }

    // Find second largest value

    findSecondLargest() {

        if (!this.root || (!this.root.left && !this.root.right)) return undefined;

        let current = this.root;
        let parent = null;

        while (current.right) {
            parent = current;
            current = current.right;
        }

        if (current.left) {
            current = current.left;
            while (current.right) {
                current = current.right;
            }
            return current.value;
        }

        return parent ? parent.value : undefined;
    }

    // Check if the tree is balanced

    isBalanced() {

        const checkBalance = (node) => {
            if (!node) return 0;

            const leftHeight = checkBalance(node.left);
            if (leftHeight === -1) return -1;

            const rightHeight = checkBalance(node.right);
            if (rightHeight === -1) return -1;

            if (Math.abs(leftHeight - rightHeight) > 1) return -1;

            return Math.max(leftHeight, rightHeight) + 1;
        };

        return checkBalance(this.root) !== -1;
    }

    // 🧠 Find Min value
    findMin(node = this.root) {
        if (!node) return undefined;
        while (node.left) node = node.left;
        return node.value;
    }

    // 🧠 Find Max value
    findMax(node = this.root) {
        if (!node) return undefined;
        while (node.right) node = node.right;
        return node.value;
    }
}



const bst = new BinarySearchTree();

bst.insert(15)
    .insert(20)
    .insert(10)
    .insert(12)
    .insert(1)
    .insert(5)
    .insert(50);


console.log("🔍 Find 12:", bst.find(12));
console.log("🧠 Min:", bst.findMin());
console.log("🧠 Max:", bst.findMax());
console.log("⚖️ Balanced?", bst.isBalanced());
console.log("2️⃣ Second Largest:", bst.findSecondLargest());
