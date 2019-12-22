
const checkValidBraces = string => {
    const obj = {
        ")": "(",
        "}": "{",
        "]": "["
    }
    const stack = [];
    for (let item of string) {
        if (item === "(" || item === "{" || item === "[") {
            stack.push(item)
        }
        else {
            if (stack[stack.length - 1] === obj[item]) {
                stack.pop()
            }
            else {
                return false
            }
        }
    }

    return stack.length === 0 ? true : false
}


console.log(checkValidBraces("(){}[]"))

console.log(checkValidBraces("[({})](]"))