// min heap

// min heap

class MinHeap {
    constructor() { 
        this.heap = [5, 10, 20, 30];
    }

    getLeftChildIndex(i) { 
        return (2 * i) + 1;
    }

    getRightChildIndex(i) {
        return (2 * i) + 2;
    }

    getParentIndex(i) {
        return Math.floor((i - 1) / 2);
    }

    insert(val) { 
        // push new node at last
        this.heap.push(val);
        let lastIndex = this.heap.length - 1;
        this.heapify(lastIndex);
    }

    heapify(i) { 
        // find parent
        while (i > 0) { 
            let parentIndex = this.getParentIndex(i);

            if (this.heap[parentIndex] > this.heap[i]) {
                // swap with parent
                [this.heap[i], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[i]];
                i = parentIndex;
            } else { 
                break;
            }
        }
    }
}

let heap = new MinHeap();

heap.insert(1);

console.log(heap); // [1, 5, 10, 20, 30]


