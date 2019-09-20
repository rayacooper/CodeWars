// Can you compute a cube as a sum?

// In this Kata, you will be given a number n (where n >= 1) 
// and your task is to find n consecutive odd numbers whose sum is exactly the cube of n.

// Mathematically:
// cube = n ** 3 
// sum = a1 + a2 + a3 + ..... + an
// sum == cube
// a2 == a1 + 2, a3 == a2 + 2, .......

// For example:

// findSummands(3) = [7,9,11] // because 7 + 9 + 11 = 27, the cube of 3. Note that there are only n = 3 elements in the array.
// Write function findSummands(n) which will return an array of n consecutive odd numbers 
// with the sum equal to the cube of n (n*n*n).

//Process:
    //Make a new variable for an empty array
    //Make a new variable 'cubed' for the value of n^3
    //Make an array of all the odd numbers up to and equalling 'cubed'
    //3 for loops? Each successive one has an iterator that is +1 than the for loop before it
    //If the sum of those three things === 'cubed', then put them into the new empty array
    //Return that array

function findSummands(n){
    let ans = [];
    const cubed = Math.pow(n, 3);
    let odds = [];

    for (i = 1; i <= cubed; i++){
        if(i % 2 !== 0){
            odds.push(i)
        }
    }

    for(j = 0; j < odds.length; j++){
        for(k = j+1; k < odds.length; k++){
            for(l = k+1; l < odds.length; l++){
                if (odds[j] + odds[k] === cubed){
                    ans = odds.filter((e, i) => {
                        return i === j ? e : i === k ? e : null
                    })
                }
                else if (odds[j] + odds[k] + odds[l] === cubed){
                    ans = odds.filter((e, i) => {
                        return i === j ? e : i === k ? e: i === l ? e : null
                    })
                }
            }
        }
    }
    if(n === 1){ans = [1]}
    return ans
  }

  console.log(findSummands(1))


  // I gave up on this one, couldn't figure it out. Here's several best practices:

//   function findSummands(n){
//     let n1 = n * n - n + 1
//     return Array.from({length: n}).map((x, i) => n1 + i * 2);
//   }



//   const findSummands = (n) => {
//     return Array(n)
//       .fill(0)
//       .map(x=>Math.pow(n, 2))
//       .map((x,i)=>x+(-(n-1)+(2*i)))
//   }



// function findSummands(n) {
//     let start = n * n - n + 1;
//     return Array.from({length: n}, (_, i) => start + i * 2);
// }