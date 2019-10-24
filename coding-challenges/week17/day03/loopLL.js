class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LL {
    constructor() {
        this.head = null;
    }

    push(data) {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }

    checkLoop() {
        let slow = this.head;
        let fast = this.head;
        while (slow && fast && fast.next !== null) {
            slow = slow.next;
            fast = fast.next.next;

            if (slow === fast) {
                return true;
            }
        }
        return false;
    }
    print() {
        const resultArr = [];
        let head = this.head;
        while (head) {
            resultArr.push(head.data);
            head = head.next;
        }
        console.log(resultArr);
    }
}

const list = new LL();
list.push(5);
list.push(7);
list.push(8);
list.push(6);

list.print(); // [ 6, 8, 7, 5 ]

console.log(list.checkLoop()); // false

// make a loop for test
list.head.next.next.next.next = list.head;
console.log(list.checkLoop()); // true




