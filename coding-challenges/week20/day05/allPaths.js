class Node {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

const pathSum = (rootNode, sum) => {
    const obj = { 0: 1 }
    let result = 0
    const dfs = (rootNode, prevSum) => {
        if (rootNode) {
            const currSum = prevSum + rootNode.val
            const oldSum = currSum - sum
            result += obj[oldSum] || 0
            obj[currSum] = (obj[currSum] || 0) + 1
            dfs(rootNode.left, currSum)
            dfs(rootNode.right, currSum)
            obj[currSum]--
        }
    }
    dfs(rootNode, 0)
    return result
}

let rootNode = new Node(1)
rootNode.left = new Node(7)
rootNode.right = new Node(9)

rootNode.left.left = new Node(6)
rootNode.left.right = new Node(5)

rootNode.right.left = new Node(2)
rootNode.right.right = new Node(3)


console.log(pathSum(rootNode, 12))
