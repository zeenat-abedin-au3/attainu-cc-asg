function common(arr1, arr2) {
    let arrMap = {};
    for (let i = 0; i < arr1.length; i++) {
        if (!arrMap[arr1[i]]) {
            arrMap[arr1[i]] = 1
        }
    }

    let out = []

    for (let i = 0; i < arr2.length; i++) {
        if (arrMap[arr2[i]]) {
            out.push(arr2[i])
        }
    }
    return out
}

console.log(common([5, 2, 8, 9, 4], [3, 2, 9, 5]))
