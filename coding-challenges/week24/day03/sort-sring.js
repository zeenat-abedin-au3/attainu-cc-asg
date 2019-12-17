const sortString = string => {
    const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
    let result = [];
    string = string.split(" ");
    for (let num of numbers) {
        for (let str of string) {
            if (str.includes(num)) {
                result.push(str);
            } else {
                continue;
            }
        }
    }
    result = result.join(" ");
    return result;
};
console.log(sortString("is2 Thi1s T4est 3a")); // "Thi1s is2 3a T4est"
console.log(sortString("4of Fo1r pe6ople g3ood th5e the2")); // "Fo1r the2 g3ood 4of th5e pe6ople"