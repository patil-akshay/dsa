/**
Min Heap:
We can use a min heap to keep track of the k largest elements seen so far. 
We iterate over the array, and for each element, we insert it into the heap. If the size of the heap becomes larger than k, 
we remove the minimum element from the heap. At the end, the top element of the heap will be the kth largest element in the array.

 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// Time - O(nlogk) Space-O(k)
var findKthLargest = function (nums, k) {
    let pq = new MinPriorityQueue();
    for (let i = 0; i < nums.length; i++) {
        pq.push(nums[i]);
        if (pq.size() > k) {
            pq.pop();
        }
    }
    return pq.front();
};
