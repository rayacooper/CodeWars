// Given three integers a ,b ,c, return the largest number obtained 
// after inserting the following operators and brackets: +, *, ().

// Consider an Example :
// With the numbers are 1, 2 and 3 , here are some ways of placing 
// signs and brackets:

// 1 * (2 + 3) = 5
// 1 * 2 * 3 = 6
// 1 + 2 * 3 = 7
// (1 + 2) * 3 = 9
// So the maximum value that you can obtain is 9.


// This didn't work:

function expressionMatter(a, b, c) {
    let arr = [];
    arr.push(a + b + c)
    arr.push(a * b * c)
    arr.push(a * (b + c))
    arr.push((a * b) + c)
    arr.push(a + b * c)
    arr.push(a * b + c)
    arr.push((a + b) * c)
    arr.push(a + (b * c))
    return arr.sort((a, b) => {b-a})[0]
  }

// This was the 'Best Practices' version:

// function expressionMatter(a, b, c) {
//     return Math.max(
//       a + b + c,
//       a * b * c,
//       a * (b + c),
//       (a + b) * c,
//       a + b * c,
//       a * b + c,
//     );
//   }