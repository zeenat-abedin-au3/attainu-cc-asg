const totalFruit = tree => {
    // Edge cases
    if (!tree) return 0;
    if (tree.length === 1) return 1;
    let startStreak = 0;
    let endStreak = 1;
    let maxValue = 1;
    let basket = {};
    // add first value
    basket[tree[0]] = 0;
    while (endStreak < tree.length) {
        if (Object.keys(basket).length === 2 && !basket[tree[endStreak]]) {
            startStreak = Math.min(...Object.values(basket)) + 1;
            basket = {};
            basket[tree[startStreak]] = endStreak - 1;
        }
        basket[tree[endStreak]] = endStreak;
        maxValue = Math.max(maxValue, endStreak - startStreak + 1);
        endStreak++;
    }
    return maxValue;
};
console.log(totalFruit(["A", "B", "C", "A", "C"]));
console.log(totalFruit(["A", "B", "C", "B", "B", "C"]));