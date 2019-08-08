//defining the function
function palin(string) {

    var startIndex = 0
    var lastIndex = string.length - 1

    //check validity whether the string is palindrome or not
    while(startIndex<lastIndex) {

        if( string.charAt(startIndex)) ≠ string.charAt(lastIndex)){

            return false 

        }

        startIndex++ 
        lastIndex--

    }//loop ends

    return true
}
console.log(palin("kayak"))
console.log(palin("kayaks"))