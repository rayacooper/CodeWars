// Write a function loopArr that loops array in a specified direction by some number of steps.

// By "looping array" it means removing elements from start and adding them to end of array one-by-one 
//(if direction is "left") or removing from end and adding them to start one by-one (if direction is "right").

// Function should accept three arguments:

// array - non-empty array of elements of any type;
// direction - 'left' or 'right' - tells how to loop array;
// steps - number of steps to loop array (less or equal to array size);
// Examples:

// loopArr([1, 5, 87, 45, 8, 8], 'left', 2);
// should produce result: [87, 45, 8, 8, 1, 5]

// loopArr([1, 5, 87, 45, 8, 8], 'right', 2);
// should produce result: [8, 8, 1, 5, 87, 45]

// function loopArr(arr, direction, steps) {
//     let startIndex = direction === left ? 0 : arr.length - 1;
//     let endIndex = 0
//     let tempArr = arr.splice(startIndex, endIndex);
// }

function loopArr(arr, direction, steps) {
    let temp;
    if(direction === 'left'){
        for(let i = 0; i < steps; i++){
            temp = arr.splice(0, 1);
            arr = [...arr, ...temp];
        }
    }else{
        for(let i = 0; i < steps; i++){
            temp = arr.splice(arr.length - 1, 1);
            arr = [...temp, ...arr];
        }
    }
    
    return arr;
}