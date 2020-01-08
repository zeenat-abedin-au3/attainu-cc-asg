const removeSmallest = (array) => {
    const minIndex = array.indexOf(Math.min(...array))
    array.splice(minIndex, 1)
    console.log(array)
}

removeSmallest([1, 2, 3, 4, 5]) // [2,3,4,5]
removeSmallest([5, 3, 2, 4]) // [5,3,4]
removeSmallest([2, 2, 1, 2, 1]) // [2,2,2,1]