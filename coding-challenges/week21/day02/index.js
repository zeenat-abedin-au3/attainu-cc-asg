class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

const list = new Node(2);
list.next = new Node(4);
list.next.next = new Node(6);
list.next.next.next = new Node(4);
list.next.next.next.next = new Node(2);
list.next.next.next.next.next = new Node(2);

// Second half reverse approach
const isPalindrome = rootNode => {
    let fast = rootNode;
    let slow = rootNode;

    while (fast) {
        if (fast.next) {
            fast = fast.next.next;
        } else {
            fast = fast.next;
        }
        slow = slow.next;
    }


    let afterHalfNode = null;
    while (slow) {
        const next = slow.next;
        slow.next = afterHalfNode;
        afterHalfNode = slow;
        slow = next;
    }


    while (afterHalfNode) {
        if (rootNode.value !== afterHalfNode.value) return false;
        afterHalfNode = afterHalfNode.next;
        rootNode = rootNode.next;
    }

    return true;
};

console.log(isPalindrome(list));