// Sort the Vowels!
// In this kata, we want to sort the vowels in a special format.

// Task
// Write a function which takes a input string s and return a string in the following way:

   
//                   C|                          R|
//                   |O                          n|
//                   D|                          d|
//    "CODEWARS" =>  |E       "Rnd Te5T"  =>      |
//                   W|                          T|
//                   |A                          |e
//                   R|                          5|
//                   S|                          T|

// Notes:

// List all the Vowels on the right side of |
// List every character except Vowels on the left side of |
// Return every character in its original case
// Each line is seperated with \n
// Invalid input ( undefined / null / integer ) should return an empty string


// My fantastic solution!

function sortVowels(s){
    const vowels = ["A", "E", "I", "O", "U"];
    return s && typeof(s) !== 'number' 
        ? s.split('').map((e, i) => vowels.indexOf(e.toUpperCase()) > -1 ? `|${e}` : `${e}|`).join('\n') 
        : '';
  }

  // Another perfectly good solution I saw on the website:

//   function sortVowels(s){
//     const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
//     if (typeof s === "string") return [...s].map(letter => vowels.includes(letter) ? `|${letter}` : `${letter}|`).join('\n');
//     return '';
//   }