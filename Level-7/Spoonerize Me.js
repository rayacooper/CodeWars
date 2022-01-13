// A spoonerism is a spoken phrase in which the first letters 
// of two of the words are swapped around, often with amusing results.

// In its most basic form a spoonerism is a two word phrase 
// in which only the first letters of each word are swapped:

// "not picking" --> "pot nicking"

// Your task is to create a function that takes a string of two words, 
// separated by a space: words and returns a spoonerism of those words in a string, as in the above example.

// NOTE: All input strings will contain only two words. 
// Spoonerisms can be more complex. For example, three-word phrases 
// in which the first letters of the first and last words are swapped: 
// "pack of lies" --> "lack of pies" or more than one letter from a word is swapped: 
// "flat battery --> "bat flattery" You are NOT expected to account for these, 
// or any other nuances involved in spoonerisms.

// Once you have completed this kata, a slightly more challenging take on the idea can be found here: 
// http://www.codewars.com/kata/56dbed3a13c2f61ae3000bcd



// My first solution:
// (It works btw)

function spoonerize(words) {   
    let answer = words.split(' ').map(e => e.split(''));
    let firstLetter = answer[0].splice(0, 1);
    let secondLetter = answer[1].splice(0, 1);
    return [[secondLetter, ...answer[0]].join(''), [firstLetter, ...answer[1]].join('')].join(' ')
}



console.log(spoonerize("nit picking"))

// Look at this beautiful solution! (From the website of course)

// function spoonerize(words) {
//     let word = words.split(' ')
//     return [word[1][0] + word[0].slice(1), word[0][0] + word[1].slice(1)].join(' ')
// }

// I really like this one too:

// function spoonerize(words) {
//     let [a, b] = words.split(" ");
//     [a, b] = [b[0] + a.slice(1), a[0] + b.slice(1)];
    
//     return [a, b].join(" ");
//   }

console.log(spoonerize("nit picking"))