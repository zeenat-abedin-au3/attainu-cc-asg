//Part 1

function binarySearchOccurrence(array, element, fSearch) {
    let startIndex = 0;
    let endIndex = array.length - 1;
    let occurence = -1;

    while (startIndex <= endIndex) {
        let middle = Math.floor((startIndex + endIndex) / 2);

        if (array[middle] == element) {
            occurence = middle;
            if (fSearch == "last") {
                startIndex = middle + 1;
            } else {
                endIndex = middle - 1;
            }
        } else {
            if (arr[middle] > element) {
                endIndex = middle - 1;
            } else {
                startIndex = middle + 1;
            }
        }
    }

    return occurence;
}

function countOccurence(arr, key) {
    if (binarySearchOccurrence(arr, key, "first") === -1) return 0;
    let occurence = (binarySearchOccurrence(arr, key, "last") - binarySearchOccurrence(arr, key,
        "first")) + 1;

    return occurence;
}
let arr = [0, 1, 2, 3, 4, 4, 4, 4, 5, 6, 7, 8, 9];
console.log(countOccurence(arr, 10)); // 0
console.log(countOccurence(arr, 4)); // 4


// Part 2

let bubblesort = arr => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = arr.length - 1; j > i; j--) {
            if (arr[j][1] > arr[j - 1][1]) {
                [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]]
            }
        }
    }
    return arr
}

let sum = (tArr, sArr, k) => {
    let sortTime = bubblesort(tArr); // [2,3,4,5,9]
    let sortScore = bubblesort(sArr) // [3,5,6,7,11]

    let sum = 0;
    for (let i = k - 1; i < sortTime.length; i++) {
        sum += sortTime[i]
    }
    return sum;
}


console.log(sum([2, 3, 9, 4, 5], [3, 5, 11, 6, 7], 3))
// 18



// Part 3

function merge(arr1, arr2) {
    let out = []
    while (arr1.length && arr2.length) {
        let min
        if (arr1[0].length === arr2[0].length) {
            min = arr1.shift()
        }
        else if (arr1[0].length < arr2[0].length)
            min = arr1.shift()
        else
            min = arr2.shift()
        out.push(min)
    }
    if (arr1.length) out = out.concat(arr1)
    if (arr2.length) out = out.concat(arr2)
    return out
}
const mergeSort = (array) => {
    if (array.length <= 1) return array;
    const middle = array.length / 2;
    const left = array.slice(0, middle);
    const right = array.slice(middle, array.length);
    return merge(mergeSort(left), mergeSort(right));
}

console.log(mergeSort(["ab", "cd", "e", "j", "asd", "ljffg", "df"]))
/*
Output: ["e" "j" "ab" "cd" "df" "asd" "ljffg"]
*/



// Part 4

function quickSort(arr) {
    if (arr.length <= 1) return arr;

    var pivot = arr[arr.length - 1];
    var left = [];
    var right = [];

    for (var i = 0; i < arr.length - 1; i++) {
        if (arr[i].length === pivot.length) {
            left.push(arr[i])
        }
        else if (arr[i].length < pivot.length) {
            left.push(arr[i])
        }
        else right.push(arr[i])
    }
    return [...quickSort(left), pivot, ...quickSort(right)]
}

console.log(quickSort(["ab", "cd", "e", "j", "asd", "ljffg", "df"]))
/*
Output: ["e" "j" "ab" "cd" "df" "asd" "ljffg"]
*/