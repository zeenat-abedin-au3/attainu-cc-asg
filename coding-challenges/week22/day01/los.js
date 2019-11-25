class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
        this.next = null;
    }
}
const connect = root => {
    root.next = root.left;
    function setNextRight(root) {
        if (!root || !root.left) return;
        root.left.next = root.right;
        root.right.next = root.next ? root.next.left : null;

        setNextRight(root.left);
        setNextRight(root.right);
    }
    setNextRight(root);
};
let binaryTree = new Node(1);
binaryTree.left = new Node(2);
binaryTree.right = new Node(3);

binaryTree.left.left = new Node(4);
binaryTree.left.right = new Node(5);

binaryTree.right.left = new Node(6);
binaryTree.right.right = new Node(7);

connect(binaryTree);
console.log(binaryTree);

