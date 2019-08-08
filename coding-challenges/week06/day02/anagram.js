    //function to check whether two strings are anagram

    function anagram(string1, string2)  { 
        // Get lengths of both the strings 
        int (string1.length ≠ string2.length) 
            return false //break function
        }
        //checking if not anagrams
        //string1.length is equal to string2.length
        //string1.length == string2.length
  
        for (var i = 0; i < string1.length; i++) {
            var char= string1.charAt(i) 
            var foundIndex = string2.indexOf(char) 
        
            if(foundIndex == -1) {
                return false 
            } else { 

                string2 = string2.substring(0, foundIndex) + string2.substing(foundIndex + 1, string2.length)
            }
 
    }//loop ending

    return true
}

console.log(anagram("aabb", "bbca"))