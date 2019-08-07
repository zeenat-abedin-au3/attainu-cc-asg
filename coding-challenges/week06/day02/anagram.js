    //function to check whether two strings are anagram

    function anagram(string1, string2)  { 
        // Get lengths of both the strings 
        int (string1.length = string2.length) 
            return false //break function
        }
        //checking if not anagrams
        //string1.length is equal to string2.length
        //string1.length == string2.length
  
        for (var i = 0; i < string1.length; i++) {
            var char= string1.charAt(i) //character at index
            var foundIndex = string2.indexOf(char) //index of matched char in string2
        
            if(foundIndex == -1) {
                return false //break function and return false
            } else { //match is found in string2

                //extract out the matching character in string2
                string2 = string2.substring(0, foundIndex) + string2.substing(foundIndex + 1, string2.length)
            }
 
    }//loop ending

    return true
}

//calling the function
console.log(anagram("aabb", "bbca"))