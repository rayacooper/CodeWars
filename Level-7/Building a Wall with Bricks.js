// Scenario
// A construction master applies specific rules when creating walls. 
//But the construction master cannot calculate the exact number of bricks to be spent on the walls.

// For this reason, you are expected to write a method that calculates 
//the number of bricks that need to be spent for the wall whose width and height are clear.

// Rules
// Only 3 kinds of bricks can be used. Large Brick(60 cm), Medium Brick(40 cm) and Small Brick(20cm)
// The height of all bricks is 5 cm and wall height is always 5 cm and multiples.
// The Wall width is always 60 cm and multiples.
// The lowest row should be composed of only large bricks.
// After that, the first brick from the right of the next row must be the middle brick, 
//the first brick from the left is the small brick.
// Finally, The first brick from the right of the next row must be the small brick, 
//the first brick from the left is the medium brick.
// The first row after the series is completed again consists of large bricks and the cycle continues.
// The number of bricks used should return to the following format. "21L6M6S"
// If number of medium and small bricks is 0, then answer should be the following format. "21L"


// If the height is divisible by 3, take height / 3, times that by 7 for L, 2 for M and S.
// If height is divisible by 2 and not by 3, take height / 2, times width by 5 for L, 1 for M and S.
// If height isn't divisible by 2 or 3, only L.


// First Attempt:
// const calculateBricksCount=(width,height)=>{
//     const W = width / 60;
//     const H = height / 5;
//     let L = ""
//     let M = ""
//     let S = ""

//     if (H % 3 === 0){
//         L = `${W * H * 7}L`
//         M = `${W * H * 2}M`
//         S = `${W * H * 2}S`;
//     }

//     return `${L + M + S}`
// }


// Second Attempt:
// const calculateBricksCount=(width,height)=>{
//     // Establish 'wall' variable as outer array:
//     let wall = [];

//     // Push a new array into the master array for every basic unit of height:
//     for (i = 0; i < height / 5; i++){
//         wall.push([])
//     }

//     // Looping through every unit of height, and adding bricks dependant on the row before it and width:
//     for (j = 0; i < wall.length; i++){
//         if (j === 0){
//             for(k = 1; k <= width / 60; k++){

//             }
//         }
//     }

// }

const calculateBricksCount=(width,height)=>{
    let L = 0;
    let M = 0;
    let S = 0;

    for (i = 0; i < height / 5; i++){
        if (i === 0 || i % 3 === 0) {
            L += 1 * (width / 60);
        }else {
            M += 1;
            S += 1;
            L += 1 * ((width / 60) -1 )
        }
    }

    let ans = `${L}L`
    if (M > 0){
        ans += `${M}M${S}S`
    }

    return ans;
}

console.log(calculateBricksCount(60,5))

// Here's the "Best Practices" version. I gotta learn math or something.

// const calculateBricksCount = (width,height) => {
//     let rows = height / 5,
//         cols = width / 60,
//         c = Math.floor(rows * 2 / 3);
//     return Math.ceil(cols * rows - c) + "L" + (c ? `${c}M${c}S` : "");
//   }
