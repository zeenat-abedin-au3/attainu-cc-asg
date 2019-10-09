
let findIndex = (arr, val) => {
    let start = 0
    end = arr.length - 1

    while (start <= end) {
        let midIndex = Math.floor((start + end) / 2);

        if (arr[midIndex] === val)
            return midIndex;
        else if (val > arr[midIndex]) start = midIndex + 1
        else end = midIndex - 1
    }
    return - 1
}

let myArr = [1, 3, 5, 7, 9, 11]

console.log(findIndex(myArr, 9))
console.log(findIndex(myArr, 12))