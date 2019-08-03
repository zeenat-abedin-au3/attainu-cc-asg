//"http://localhost:3000/add?num1=5&num2=3"

function params(url) {

    var readKeys
    var readValues
    var keyStart, keyEnd
    var valueStart, valueEnd
    var valuesArray = []
    var keysArray = []
    var paramsobj = {}

    for (var i = 0; i < url.length; i++) {
        var char = url[i]; // storing the current character
        //checks for keys
        if(char == '?' || char == '&' || readKeys == true) { //clues
            if(readKeys == false) {
               readKeys = true
               keyStart = i + 1
            }
            if(char == '=') { // key ends
                keyEnd = i
                keysArray.push( url.substring(keyStart, keyEnd)) //doesn't include the ending index
                readKeys = false
            }
        }

    }

    return keysArray
}
console.log(params("http://localhost:3000/add?num1=5&num2=3"))