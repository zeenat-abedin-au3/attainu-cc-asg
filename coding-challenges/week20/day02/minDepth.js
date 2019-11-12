class Node {
    constructor(data) {
        this.data = data
        this.left = null
        this.right = null
    }
}

const minDepth = function (root) {
    if (root === null) return 0
    if (root.left === null) return minDepth(root.right) + 1
    if (root.right === null) return minDepth(root.left) + 1
    return Math.min(minDepth(root.left), minDepth(root.right)) + 1
}

const root = new Node(1)
root.left = new Node(2)
root.right = new Node(3)
root.left.left = new Node(4)
root.left.right = new Node(5)

console.log(minDepth(root))




