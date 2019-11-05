const minSubArrayLen = (nums, S) => {
    let total = 0
    let end = 0
    let minLen = Infinity
    let i = 0
    let length = nums.length

    while (i < length) {
        if (total < S && end < length) {
            total += nums[end]
            end++
        }
        else if (total >= S) {
            minLen = Math.min(minLen, end - i)
            total -= nums[i]
            i++
        }
        else break

    }
    if (minLen === Infinity) return 0
    return minLen
}

console.log(minSubArrayLen([2, 1, 5, 2, 3, 2], 7))
console.log(minSubArrayLen([2, 1, 5, 2, 8], 7))