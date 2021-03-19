// Write a program to determine if a string contains only unique characters. 
// Return true if it does and false otherwise.

// The string may contain any of the 128 ASCII characters. 
// Characters are case-sensitive, e.g. 'a' and 'A' are considered different characters.


// I originally tried to solve this with a regex, but this didn't work:

// function hasUniqueChars(str){
//     return /(.).*?\1/g.test(str)
//   }


// This solution is my substitute, and it works:

function hasUniqueChars(str) {
    let ans = true;
    for (i = 0; i < str.length; i++){
        if (str.includes(str[i], (i + 1))){
            ans = false;
        }
    }
    return ans;
}


// After that passed, I looked for solutions that used a regex expression.
// I found this one! So close to mine, just flipped boolean (because of the '!')
// I had that same problem with the first one I wrote, false/true case confused.

// function hasUniqueChars(str) {
//     return !/(.).*\1/.test(str);
//   }