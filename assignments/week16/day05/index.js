class Heap {
    constructor() {
        this.heap = [27, 15, 24, 9, 13, 7, 3];
    }

    addToHeap(value) {
        this.heap.push(value);
        this.heapifyUp();
    }

    heapifyUp(index = this.heap.length - 1) {
        let currentIndex = index;
        while (currentIndex >= 0) {
            let parentIndex = Math.floor((currentIndex - 1) / 2);
            if (parentIndex >= 0 && this.heap[parentIndex] < this.heap[currentIndex]) {
                this.swap(currentIndex, parentIndex);
                currentIndex = parentIndex;
            }
            else {
                break;
            }
        }
    }

    heapifyDown(index = 0) {
        let currentIndex = index;
        let indexToSwap;
        while (currentIndex <= this.heap.length - 1) {
            let leftChildIndex = currentIndex * 2 + 1;
            let rightChildIndex = currentIndex * 2 + 2;
            if (leftChildIndex <= this.heap.length - 1)
                indexToSwap = leftChildIndex;
            if (rightChildIndex <= this.heap.length - 1 && this.heap[leftChildIndex] < this.heap[rightChildIndex])
                indexToSwap = rightChildIndex;
            if (indexToSwap && this.heap[currentIndex] < this.heap[indexToSwap])
                this.swap(currentIndex, indexToSwap);
            else
                break;
            currentIndex = indexToSwap;
        }
    }

    remove() {
        if (this.heap.length === 0)
            return null;
        if (this.heap.length === 1)
            return this.heap.pop();
        this.heap[0] = this.heap.pop();
        this.heapifyDown();
    }

    swap(i, j) {
        let temp = this.heap[i];
        this.heap[i] = this.heap[j];
        this.heap[j] = temp;
    }

}

const heap = new Heap();
console.log(heap);

heap.addToHeap(20);
heap.addToHeap(70);
heap.addToHeap(18);
heap.addToHeap(30);
console.log(heap)

heap.remove();
heap.remove();
heap.remove();
heap.remove();
console.log(heap)




