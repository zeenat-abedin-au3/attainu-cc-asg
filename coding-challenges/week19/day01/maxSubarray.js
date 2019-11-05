function maxSum(arr, k) {
    let sumArray = []
    for (let i = 0; i <= arr.length - k; i++) {
        sumArray[i] = 0;
        let j = 0;
        while (j < k) {
            sumArray[i] = sumArray[i] + arr[i + j]
            j++
        }
    }
    return Math.max(...sumArray);
}

console.log(maxSum([2, 3, 4, 1, 5], 2))