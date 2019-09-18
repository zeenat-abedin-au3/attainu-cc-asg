const frequency = function (arr) {
    var counts = {};
    for (var i = 0; i < arr.length; i++) {
        var num = arr[i];
        if (counts[num]) {
            counts[num] = counts[num] + 1;
        } else {
            counts[num] = 1;
        }
    }
    return counts;
};

console.log(frequency([2, 3, 2, 4, 3, 5, 3]));
