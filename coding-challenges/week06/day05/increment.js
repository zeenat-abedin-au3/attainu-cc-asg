//definition

function incr(string) {
    var newStr = ''
    var letters = 'abcdefghijklmnopqrstuvwxyz'
    for (var i= 0; i < string.length; i++) {
        var char = string.charAt(i);
        if(char ==='z'){
            newStr = newStr + 'a'
        } else { //what to do when the char is something other than 'z'
           newStr = newStr + letters.charAt(letters.indexOf(char) + 1)
          //newStr = newStr + String.fromCharCode(char.charCodeAt() + 1)
        }

    }
    return newStr
}

//function call
console.log(incr("uvwxyz"))