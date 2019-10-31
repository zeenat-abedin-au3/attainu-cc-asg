class Node {
    constructor(data, left, right) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
class BST {
    constructor() {
        this.root = null;
    }
    insert(data) {
        let newNode = new Node(data);
        if (this.root === null)
            this.root = newNode;
        else {
            this.insertNewNode(this.root, newNode);
        }
    }
    insertNewNode(node, newNode) {
        if (node.data >= newNode.data) {
            // insert in lhs
            if (node.left == null)
                node.left = newNode;
            else
                this.insertNewNode(node.left, newNode);
        }
        else {
            // insert in rhs 
            if (node.right === null)
                node.right = newNode;
            else
                this.insertNewNode(node.right, newNode);
        }
    }
    BfsOrder() {
        let data = [],
            node = this.root,
            queue = [];

        queue.push(node);
        while (queue.length) {
            node = queue.shift();
            data.push(node.data);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        console.log(data)
    }

    DfsPreOrder() {
        let data = [];
        let current = this.root;
        function traverse(node) {
            data.push(node.data);

            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
        }
        traverse(current);
        console.log(data)
    }

    DfsPostOrder() {
        let data = [];
        let current = this.root;
        function traverse(node) {
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);

            data.push(node.data);
        }
        traverse(current);
        console.log(data)
    }

    DfsInOrder() {
        let data = [];
        let current = this.root;

        function traverse(node) {
            node.left && traverse(node.left);
            data.push(node.data);
            node.right && traverse(node.right);
        }
        traverse(current);
        console.log(data)
    }
}
let bstObj = new BST();
bstObj.insert(50);
bstObj.insert(60);
bstObj.insert(57);
bstObj.insert(70);
bstObj.insert(56);
bstObj.insert(59);
bstObj.insert(43);

bstObj.DfsInOrder(bstObj.root); // [ 43, 50, 56, 57, 59, 60, 70 ]
bstObj.DfsPostOrder(bstObj.root); // [ 43, 56, 59, 57, 70, 60, 50 ]
bstObj.DfsPreOrder(bstObj.root); // [ 50, 43, 60, 57, 56, 59, 70 ]
bstObj.BfsOrder(bstObj.root); // [ 50, 43, 60, 57, 70, 56, 59 ]




