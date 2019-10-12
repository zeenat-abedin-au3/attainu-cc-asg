//1. factorial
function factorial(n) {
    if (n < 0) return 0;
    if (n <= 1) return 1;

    return n * factorial(n - 1);
}

console.log(factorial(5));

//2. merge sort
function merge(arr1, arr2) {
    let i = 0;
    let j = 0;
    let result = [];
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++;
        }
    }
    while (j < arr2.length) {
        result.push(arr2[j]);
        j++;
    }
    while (i < arr1.length) {
        result.push(arr1[i]);
        i++;
    }
    return result;
}

function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
}

console.log(mergeSort([3, 6, 8, 9, 2, 4, 7]));
