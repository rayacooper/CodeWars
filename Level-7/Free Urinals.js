// How many urinals are free?
// In men's public toilets with urinals, their is this unwritten rule 
// that you leave at least one urinal free between you and the next 
// person peeing. For example if their are 3 urinals and one person is 
// // already peeing in the left one, you will choose the urinal on the 
// // right and not the one in the middle. That means that a maximum of 
// // 3 people can pee at the same time on public toilets with 5 urinals 
// // when following this rule (Only 2 if the first person pees into urinal 2 or 4).

// Your task:
// You need to write a function that returns the maximum of free urinals 
// as an integer according to the unwritten rule.

// Input
// A String containing 1s and 0s (Example: 10001) (1 <= Length <= 20)
// A one stands for a taken urinal and a zero for a free one.

// Examples
// 10001 returns 1 (10101)
// 1001 returns 0 (1001)
// 00000 returns 3 (10101)
// 0000 returns 2 (1001)
// 01000 returns 1 (01010 or 01001)

// Note
// When their is already a mistake in the input string (for example 011), then return -1

// Have fun and don't pee into the wrong urinal ;)

// First Attempt:

// function getFreeUrinals(urinals){
//     let counter = 0;
//     console.log(urinals.split('1'))
//     urinals.split('1').forEach(e => {
//       console.log(e)
//       if(e.length > 2){
//         counter += Math.floor(e.length / 2)
//       }
//     })
//     return urinals.length > 1 ? counter : 1;
    
//   }

// I gave up and got this solution:

function getFreeUrinals(urinals) {
    if ( urinals.includes("11") )
      return -1;
    else
      return ( urinals.match( /(^|0)0(?!1)/g ) || [] ).length;
  }