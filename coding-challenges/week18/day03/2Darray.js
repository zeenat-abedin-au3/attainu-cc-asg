const findMaxIndex = (arr) => {
    const length = arr.length
    let row = 0;
    let j = length - 1;
    for (let i = 0; i < length; i++) {
        while (arr[i][j] == 1 && j >= 0) {
            row = i;
            j--;
        }
    }
    return row
}


const arr = [
    [0, 1, 1, 1],
    [0, 0, 1, 1],
    [1, 1, 1, 1],
    [0, 0, 0, 0]
]
console.log(findMaxIndex(arr))