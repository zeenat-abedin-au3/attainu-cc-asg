//cc #1
const letterCombinations = (number) => {
    if (!number.length) return [];
    const arr = [null, null, 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];

    const result = [];
    const current = [];

    const press = (idx) => {
        if (idx === number.length) return result.push(current.join(''));
        for (const item of arr[number[idx]]) {
            current.push(item);
            press(idx + 1);
            current.pop();
        }
    }
    press(0);
    return result;
};

console.log(letterCombinations("23"))

//CC #2 (Two Pointer)
const maxArea = (array) => {
    let left = 0,
        right = array.length - 1,
        maxArea = 0;
    while (left < right) {
        let width = right - left;
        if (array[left] > array[right]) {
            maxArea = Math.max(maxArea, width * array[right]);
            right--;
        } else {
            maxArea = Math.max(maxArea, width * array[left]);
            left++;
        }
    }
    return maxArea;
};
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))



// //CC #3
class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
class BT {
    constructor() {
        this.root = null;
    }
    insert(data) {
        var newNode = new Node(data);
        if (this.root === null) this.root = newNode;
        else this.insertNode(this.root, newNode);
    }
    insertNode(node, newNode) {
        if (newNode.data < node.data) {
            if (node.left === null) node.left = newNode;
            else this.insertNode(node.left, newNode);
        } else {
            if (node.right === null) node.right = newNode;
            else this.insertNode(node.right, newNode);
        }
    }
    removeLeafNodes(node) {
        if (!node) {
            return null;
        }
        if (!node.left && !node.right) {
            return null;
        }
        node.left = this.removeLeafNodes(node.left);
        node.right = this.removeLeafNodes(node.right);
        return node;
    }
}
const BST = new BT();
BST.insert(20);
BST.insert(10);
BST.insert(30);
BST.insert(5);
BST.insert(15);
BST.insert(25);
BST.insert(35);
console.log(BST);
BST.removeLeafNodes(BST.root);
console.log(BST);



























