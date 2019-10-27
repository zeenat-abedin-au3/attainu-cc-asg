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

    delete(root, value) {
        if (root == null)
            return null;
        if (root.data > value) {
            //left 

            root.left = this.delete(root.left, value);
        }
        else if (root.data < value) {
            //right
            root.right = this.delete(root.right, value);
        }
        else {
            console.log("root: ", root.data);
            //case 1 : having 0 children 
            if (root.left == null && root.right == null) {
                root = null;
            }
            //case 2: having 1 children 
            else if (root.left === null) {
                root = root.right;
            }
            else if (root.right == null) {
                root = root.left;
                console.log("root: ", root.data);
            }
            else {
                let minNode = this.findMin(root.right);
                root.data = minNode.data;


                root.right = this.delete(root.right, minNode.data);
            }
        }
        return root;
    }

    findMin(node) {
        if (node == null)
            return;
        while (node.left) {
            node = node.left;
        }
        return node;
    }

    findElement(data) {
    }

    preorder(node) {
        if (node !== null) {
            console.log("val: ", node.data);
            this.preorder(node.left);
            this.preorder(node.right);
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
bstObj.preorder(bstObj.root)
bstObj.root = bstObj.delete(bstObj.root, 50);
console.log('------')
bstObj.preorder(bstObj.root)
