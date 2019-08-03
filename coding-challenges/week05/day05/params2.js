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
        //check for Keys
        if(char == '?' || char == '&' || readKeys == true) { //clues
            if(readKeys == false) { //key starts
               readKeys = true
               keyStart = i + 1
            }
            if(char == '=') { // key ends
                keyEnd = i
                keysArray.push( url.substring(keyStart, keyEnd)) //doesn't include the ending index
                readKeys = false
            }
        }

    return keysArray

        //check for Values
        if(char == '=' || readValues == true) { //clues
            if(readValues== false) { //value starts
               readValues = true
               valueStart = i + 1
            }
            if(char == '&') { // value ends
                valueEnd = i
                valuesArray.push( url.substring(valueStart, valueEnd)) //doesn't include the ending index
                readValues = false
            }else if(i == url.length - 1)
                valueEnd = i + 1
                valuesArray.push( url.substring(valueStart, valueEnd)) //doesn't include the ending index
                readValues = false
            }
        
        }
        
    }

    for(var i = 0; i < keysArray.length; i++){
        paramsObj[keysArray[i]] = valuesArray[i] //creating the object
    }
    return paramsObj
}

console.log(params("http://localhost:3000/add?num1=5&num2=3"))