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

    findMin(node) {
        if (node == null)
            return;
        while (node.left) {
            node = node.left;
        }
        return node;
    }


    inorder(node) {
        if (node !== null) {
            this.inorder(node.left);
            console.log("val: ", node.data);
            this.inorder(node.right);
        }
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
bstObj.inorder(bstObj.root);


console.log(bstObj.findMin(bstObj.root))
