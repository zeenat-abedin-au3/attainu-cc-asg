const createBase = base => {
    return function (number) {
        console.log(number + base)
    }
}
const addSix = createBase(6);
addSix(10) // return 16
addSix(11) // return 17

const add = (number1, number2) => {
    const calc = function (number2) {
        console.log(number1 + number2);
    };
    if (typeof number2 === 'undefined') {
        return calc;
    }
    return calc(number2)
}
add(3)(3)
add(3, 3)  // return 6

add(3)(8)
add(3, 8)  // return 11
