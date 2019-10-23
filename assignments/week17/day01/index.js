// Build Max Heap 
class Heap {
    constructor() {
        this.heap = [];
    }

    // add function to add the elements to heap 
    add(value) {
        this.heap.push(value);
        this.heapifyUp();
    }

    heapifyUp() {
        let currentIndex = this.heap.length - 1;
        let parentIndex;
        while (currentIndex > 0) {
            parentIndex = Math.floor((currentIndex - 1) / 2);
            if (this.heap[currentIndex] > this.heap[parentIndex]) {
                this.swap(currentIndex, parentIndex);
            }
            else {
                break;
            }
            currentIndex = parentIndex;
        }
    }
    // [1] 
    remove(index = 0) {
        // remove only the root node 
        console.log("remove: ", this.heap[0]);
        if (this.heap.length === 0)
            return null;
        if (this.heap.length === 1)
            return this.heap.pop();
        // find index of value to remove  
        this.heap[index] = this.heap.pop();
        this.heapifyDown(index);
    }

    heapifyDown(index = 0) {
        let currentIndex = index;
        let indexToSwap;
        let heapLength = this.heap.length - 1;
        while (currentIndex < heapLength) {
            let leftChildIndex = 2 * currentIndex + 1;
            let rightChildIndex = 2 * currentIndex + 2;

            if (rightChildIndex <= heapLength && this.heap[leftChildIndex] < this.heap[rightChildIndex])
                indexToSwap = rightChildIndex;
            else if (leftChildIndex <= heapLength)
                indexToSwap = leftChildIndex;
            else
                break;
            if (this.heap[currentIndex] < this.heap[indexToSwap])
                this.swap(currentIndex, indexToSwap);
            else
                break;
            currentIndex = indexToSwap;
        }
    }

    removeEl(element) {
        const length = this.heap.length;

        for (let i = 0; i < length; i++) {
            if (this.heap[i] !== element) continue;

            let end = this.heap.pop();

            if (i === length - 1) break;

            this.heap[i] = end;
            this.heapifyDown(i)
            break;
        }
    }

    printHeap() {
        this.heap.forEach(val => console.log(val));
        console.log("done printing");
    }

    swap(i, j) {
        let temp = this.heap[i];
        this.heap[i] = this.heap[j];
        this.heap[j] = temp;
    }
}

let heapObj = new Heap();
heapObj.add(1);
heapObj.add(2);
heapObj.add(3);
heapObj.add(4);
heapObj.add(5);
heapObj.add(6);
heapObj.printHeap();
heapObj.remove();
heapObj.printHeap();
heapObj.removeEl(4);
heapObj.printHeap();
