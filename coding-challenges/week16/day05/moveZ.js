function pushZerosToEnd(arr) {

    let count = 0;
    const length = arr.length;

    for (let i = 0; i < length; i++)
        if (arr[i] !== 0) {
            arr[count] = arr[i]
            count++
        }
    while (count < length) {
        arr[count] = 0;
        count++
    }
    return arr
}

const myArr = [1, 9, 8, 4, 0, 0, 2, 7, 0, 6, 0, 9]
console.log(pushZerosToEnd(myArr))

