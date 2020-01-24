// Complete the function that takes 3 numbers x, y and k (where x ≤ y), 
// and returns the number of integers within the range [x..y] (both ends included) that are divisible by k.

// More scientifically: { i : x ≤ i ≤ y, i mod k = 0 }

// Example
// Given x = 6, y = 11, k = 2 the function should return 3, because 
// there are three numbers divisible by 2 between 6 and 11: 6, 8, 10


// My Solution: this works, but it times out the server.

function divisibleCount(x, y, k) {
    let newArr = [];
    for (i = 0; i < y - x; i++){
        newArr.push(x + i)
    }
    return newArr.filter(e => e % k === 0).length
 }
 