let letterCasePermutation = function (string) {
    let res = [string];
    for (let i = 0; i < string.length; ++i) {
        const code = string.charCodeAt(i);
        if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
            let length = res.length;
            for (let j = 0; j < length; ++j) {
                let str = res[j];
                let char = code <= 90 ? str[i].toLowerCase() : str[i].toUpperCase();
                let newStr = str.substring(0, i) + char + str.substring(i + 1);
                res.push(newStr);
            }
        }
    }

    return res;
};

console.log(letterCasePermutation("ad52"))