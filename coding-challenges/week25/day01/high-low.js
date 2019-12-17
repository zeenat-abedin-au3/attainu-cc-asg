
const highAndLow = string => {
    string = string.split(" "); // ["1", "2", "3", "4", "5"]
    const minValue = Math.min(...string);
    const maxValue = Math.max(...string);
    return `${maxValue} ${minValue}`;
};

console.log(highAndLow("1 2 3 4 5")); // "5 1"
console.log(highAndLow("1 9 3 4 -5")); // "9 -5"
