// Egg Talk.

// Insert an "egg" after each consonant. If there are no consonants, there will be no eggs. 
// Argument will consist of a string with only alphabetic characters and possibly some spaces.

// eg:

// hello => heggeleggleggo

// eggs => egegggeggsegg

// FUN KATA => FeggUNegg KeggATeggA


// My Solution:
// Actually, I had to look at other solutions to realize what I was doing wrong
// (I initially forgot the parenthesis () )

function heggeleggleggo(word){
    return word.replace(/([^aeiou ])/gi,'$1egg')
  }