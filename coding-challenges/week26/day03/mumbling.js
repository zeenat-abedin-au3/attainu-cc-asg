// This time no story, no theory. The examples below show you how to write function accum:

// Examples:

// accum("abcd");    ==>  "A-Bb-Ccc-Dddd"
// accum("RqaEzty"); ==>  "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt");    ==>  "C-Ww-Aaa-Tttt"

const accum = (str) => {
    let count = 1;
    let resultStr = "";

    for (let i = 0; i < str.length; i++) {
        resultStr += str[i].toUpperCase();
        for (let j = 1; j < count; j++) {
            resultStr += str[i].toLowerCase();
        }
        count++;
        if (i != (str.length - 1)) {
            resultStr += '-';
        }
    }
    return resultStr;
}

console.log(accum("abcd"));    //==>  "A-Bb-Ccc-Dddd"
console.log(accum("RqaEzty")); //==>  "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
console.log(accum("cwAt"));    //==>  "C-Ww-Aaa-Tttt"