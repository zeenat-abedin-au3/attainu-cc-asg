function quickSort(arr) {
    if (arr.length <= 1) return arr;

    var pivot = arr[arr.length - 1];
    var left = [];
    var right = [];

    for (var i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i])
        }
        else right.push(arr[i])
    }
    return [...quickSort(left), pivot, ...quickSort(right)]
}


console.log(quickSort([6, 2, 4, 5, 1, 4, 6, 2, 3, 9]))