var sortArray = function(arr) {
    if(arr.length <= 1) return arr; // not required to sort
    let mid = Math.floor(arr.length / 2);
    let left = sortArray(arr.slice(0,mid));
    let right = sortArray(arr.slice(mid));
    return merge(left, right);
};

function merge(left, right) {
    const res = [];
    let i = 0;
    let j = 0;
    while(i < left.length && j < right.length) {
        if(left[i] < right[j]) {
            res.push(left[i]);
            i++;
        } else {
            res.push(right[j]);
            j++;
        }
    }
    return [...res, ...left.slice(i), ...right.slice(j)];
}
