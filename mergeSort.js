function merge(a, b) {
    let c = [];
    let aIndex = 0;
    let bIndex = 0;
    // let cIndex = 0;
    while (aIndex < a.length && bIndex < b.length) {
        if (a[aIndex] <= b[bIndex]) {
            c.push(a[aIndex]);
            ++aIndex;
        } else {
            c.push(b[bIndex]);
            ++bIndex;
        }
    }

    while (aIndex < a.length) {
        c.push(a[aIndex]);
        ++aIndex;
    }
    while (bIndex < b.length) {
        c.push(b[bIndex]);
        ++bIndex;
    }

    // return c.concat(a.slice(aIndex)).concat(b.slice(bIndex));
    return c;
}

function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid)); // Mid isn't included
    let right = mergeSort(arr.slice(mid));

    return merge(left, right);
}


console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]))
console.log(mergeSort([105, 79, 100, 110]))