/*
Max-Heap: The stones are stored in a max-heap.
The loop continues until there is 1 or no stone left.
The 2 heaviest stones are popped from the heap, and if they are not equal, the difference is pushed back into the heap.
Return the weight of the last remaining stone or 0 if no stones are left.
*/


/**
 * @param {number[]} stones
 * @return {number}


 Time - O(nlogn)  Space - O(n)
 */
var lastStoneWeight = function (stones) {
    let pq = new MaxPriorityQueue();
    for (let i = 0; i < stones.length; i++) {
        pq.enqueue(stones[i]);
    }

    while (pq.size() > 1) {
        let y = pq.dequeue();
        let x = pq.dequeue();

        if (y - x > 0) {
            pq.enqueue(y - x);
        }
    }

    return pq.dequeue() || 0;
};
