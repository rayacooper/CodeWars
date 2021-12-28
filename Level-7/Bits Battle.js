// The odd and even numbers are fighting against each other!

// You are given a list of positive integers. 
// The odd numbers from the list will fight using their 1 bits from their binary representation, 
// while the even numbers will fight using their 0 bits. If present in the list, number 0 will be neutral, 
// hence not fight for either side.

// You should return:

// odds win if number of 1s from odd numbers is larger than 0s from even numbers
// evens win if number of 1s from odd numbers is smaller than 0s from even numbers
// tie if equal, including if list is empty
// Please note that any prefix that might appear in the binary representation, e.g. 0b, should not be counted towards the battle.

// Example:
// For an input list of [5, 3, 14]:

// odds: 5 and 3 => 101 and 11 => four 1s
// evens: 14 => 1110 => one 0
// Result: odds win the battle with 4-1

function bitsBattle(numbers) {
    let odds = [];
    let evens = []
    for(let i = 0; i < numbers.length; i++){
        if (numbers[i] % 2 === 0){
            evens.push(numbers[i].toString(2))
        }else{
            odds.push(numbers[i].toString(2))
        }
    }
    console.log(evens)
    console.log(odds)
  }

  bitsBattle([5, 3, 14])

//   function bitsBattle(numbers) {
//     let odds = 0;
//     let evens = 0;
//     numbers.map(e => {
//         if (e !== 0){
//             if (e % 2 === 0){
//                 evens += e.toString(2).split().reduce((accumulator, element) => Number(element) === 0 ? accumulator ++ : accumulator , 0)
//             }else{
//                 odds += e.toString(2).split().reduce((accumulator, element) => Number(element) === 1 ? accumulator ++ : accumulator , 0)
//             }
//         }
//     })
//     console.log(odds)
//     console.log(evens)
//     return odds > evens ? 'odds win' : odds === evens ? 'tie' : 'evens win'
//   }