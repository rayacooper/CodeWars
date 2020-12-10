// A number is called Automorphic number if and only if its square ends in the same digits as the number itself.

// Task
// Given a number determine if it Automorphic or not.

// Original Attempt:

// function automorphic(n){
//     var squared = Math.pow(n,2).toString().split('');
//     return Number(squared.slice(n.length - 1)) === n ? "Automorphic" : "Not!!"
//   }

function automorphic(n){
    var squared = Math.pow(n,2).toString()
    var regexp = /n$/;
    return Number(squared.slice(squared.length - n.length)) === n ? "Automorphic" : "Not!!"
  }