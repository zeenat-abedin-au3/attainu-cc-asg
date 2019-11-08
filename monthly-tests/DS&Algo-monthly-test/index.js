// Helper function
const flatten = oldArr => {
    let newArr = [];
    for (let i = 0; i < oldArr.length; i++) {
        if (Array.isArray(oldArr[i])) {
            newArr = newArr.concat(flatten(oldArr[i]));
        } else {
            newArr.push(oldArr[i]);
        }
    }
    return newArr;
};

// 1.
const longSubStr = str => {
    let result = 0,
        tmpCheck = [];
    for (let char of str) {
        const idx = tmpCheck.indexOf(char);
        if (idx !== -1) {
            tmpCheck = tmpCheck.slice(idx + 1);
        }
        tmpCheck.push(char);
        if (tmpCheck.length > result) {
            result = tmpCheck.length;
        }
    }
    return result;
};

console.log(longSubStr("aabccbb")); // 3
console.log(longSubStr("abbbb")); // 2

// 2.
const swap = (array, idx1, idx2) =>
    ([array[idx1], array[idx2]] = [array[idx2], array[idx1]]);

const dutchSolve = array => {
    let low = 0,
        mid = 0,
        high = array.length - 1;

    while (mid <= high) {
        if (!array[mid]) swap(array, low++, mid++);
        else if (array[mid] === 2) swap(array, mid, high--);
        else mid++;
    }
    return array;
};

console.log(dutchSolve([1, 0, 2, 1, 0])); // [0, 0, 1, 1, 2]

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }

    insert(data) {
        if (data < this.data && this.left) {
            this.left.insert(data);
        } else if (data < this.data) {
            this.left = new Node(data);
        } else if (data > this.data && this.right) {
            this.right.insert(data);
        } else if (data > this.data) {
            this.right = new Node(data);
        }
    }
}

// 3.
const zigzagTra = rNode => {
    const result = [];
    const recFunc = (node, level) => {
        if (!node) return;
        if (result.length <= level) {
            result.push([]);
        }
        if (level % 2 === 0) {
            result[level].push(node.data);
        } else {
            result[level].splice(0, 0, node.data);
        }

        recFunc(node.left, level + 1);
        recFunc(node.right, level + 1);
    };
    recFunc(rNode, 0);
    return flatten(result)
};
const zBst = new Node(1);
zBst.insert(2);
zBst.insert(3);
zBst.insert(7);
zBst.insert(6);
zBst.insert(5);
zBst.insert(4);

console.log(zigzagTra(zBst)); // [1, 2, 3, 7,6, 5, 4]

// 4.
const checkSeq = (root, arr, n = arr.length, index = 0) => {
    if (!root) return n === 0;

    if (
        root.left === null &&
        root.right === null &&
        root.data === arr[index] &&
        index === n - 1
    ) {
        return true;
    }

    return (
        index < n &&
        root.data === arr[index] &&
        (checkSeq(root.left, arr, n, index + 1) ||
            checkSeq(root.right, arr, n, index + 1))
    );
};

const arr = [5, 8, 6, 7];
const bst = new Node(5);
bst.insert(3);
bst.insert(8);
bst.insert(2);
bst.insert(4);
bst.insert(1);
bst.insert(6);
bst.insert(7);

console.log(checkSeq(bst, arr)); // true

// 5.
const jumpNumberCount = nums => {
    if (nums.length <= 1) return nums[0];

    let currentIdx = nums.length - 1;

    for (let index = nums.length - 2; index >= 0; index--) {
        let maxIndex = index + nums[index];
        if (maxIndex >= currentIdx) currentIdx = index;
    }

    return nums[0] >= currentIdx ? nums[0] : null;
};

console.log(jumpNumberCount([2, 3, 1, 1, 4])); // 2
