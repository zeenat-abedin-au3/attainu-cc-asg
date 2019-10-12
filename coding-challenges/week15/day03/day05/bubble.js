const fs = require('fs')


let data = fs.readFileSync('computers-datafile.csv', 'utf-8').split('\r\n').map(item => item.split(','))

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

console.log(bubblesort(data))