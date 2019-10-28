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
    reverse() {
        let prev = null
        let current = this.head
        while (current !== null) {
            let next = current.next
            current.next = prev
            prev = current
            current = next
        }
        this.head = prev
    }
    printList() {
        const array = [];
        let current = this.head;
        while (current) {
            array.push(current.data);
            current = current.next;
        }
        console.log(array);
    }
}
const list = new LL()
list.push(15);
list.push(19);
list.push(8);
list.printList(); // [ 8, 19, 15 ]
list.reverse();
list.printList(); // [ 15, 19, 8 ]


