class Node {
    constructor(data) {
        this.data = data
        this.left = null
        this.right = null
    }
}

const levelOrderSuccessor = (rootNode, givenNode) => {
    // edge cases
    if (!rootNode) return null
    else if (rootNode === givenNode) {
        if (rootNode.left) return rootNode.left
        else if (rootNode.right) return rootNode.right
        else return null // if root has only one node
    }


    const queue = []
    queue.push(rootNode)
    while (queue.length !== 0) {
        rootNode = queue.shift()

        if (rootNode.left) {
            queue.push(rootNode.left)
        }

        if (rootNode.right) {
            queue.push(rootNode.right)
        }

        if (rootNode == givenNode) break;

    }
    return queue[0]
}





const rootNode = new Node(1)
rootNode.left = new Node(2)
rootNode.right = new Node(3)

rootNode.left.left = new Node(4)
rootNode.left.right = new Node(5)

console.log(levelOrderSuccessor(rootNode, rootNode.right).data)



