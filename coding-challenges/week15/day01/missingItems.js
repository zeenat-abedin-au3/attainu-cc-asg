function missingItems(arr) {
    let allArray = []
    const maxNum = Math.max(...arr)
    for (let i = 1; i <= maxNum; i++) {
        allArray.push(i)
    }

    return allArray.filter(item => arr.indexOf(item) === -1)
}
console.log(missingItems([1, 2, 5, 7, 9, 12, 13, 14, 15]))
