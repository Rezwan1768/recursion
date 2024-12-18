function fibsIterative(n) {
    let fibValues = [];
    for (let i = 0; i < n; ++i) {
        if (i === 0) fibValues.push(i);
        else if (i === 1) fibValues.push(i);
        else fibValues.push(fibValues[i - 1] + fibValues[i - 2]);
    }
    return fibValues;
}

function fibsRecursive(n, fibValues = [0, 1]) {
    let len = fibValues.length;
    if (len >= n) return fibValues.slice(0, n);
    // Push the next value int to the array
    fibValues.push(fibValues[len - 1] + fibValues[len - 2])
    return fibsRecursive(n, fibValues)
}

console.log(fibsRecursive(8));
