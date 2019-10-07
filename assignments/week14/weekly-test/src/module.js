export const sortArray = arr => {
    return arr.sort((x, y) => x - y)
};

export const filterArray = arr => {
    return arr.filter(item => item.age < 30)
};

export const avgAge = arr => {
    const length = arr.length;
    const avg = arr.reduce((sum, item) => sum + item.age, 0) / length
    return avg.toFixed(2)
}
