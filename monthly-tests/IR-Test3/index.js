//cc #1
/* const letterCombinations = (number) => {
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
 */


// //CC #3
class Node {
    constructor(data, left, right) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

const insert = (root, data) => {
    if (!root) {
        return new Node(data)
    }
    if (data < root.data) {
        root.left = insert(root.left, data)
    }
    else if (data > root.data) {
        root.left = insert(root.right, data)
    }
    return root
}

const inorder = (node) => {
    if (node !== null) {
        inorder(node.left);
        console.log('Inorder', node.data)
        inorder(node.right);
    }
}

const leafDelete = (root) => {
    // console.log('root', root)
    if (!root) return null;
    if (!root.left && !root.right) return null
    root.left = leafDelete(root.left)
    root.right = leafDelete(root.right)

    return root
}

let root = null
root = insert(root, 20)
insert(root, 10)
insert(root, 5)
insert(root, 15)
insert(root, 30)
insert(root, 25)
insert(root, 35)
console.log(root)
inorder(root)
leafDelete(root)
console.log('------')
inorder(root)























