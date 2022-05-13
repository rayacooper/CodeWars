// You walk in a maze. You need to reach the exit through many rooms. These rooms are in a straight line.

// You can only walk in the dark. Otherwise, you will be caught by the enemy.

// Your trouble is that some rooms have light bulbs. 
// If the light bulb is bright when you enter the room. You were caught by the enemy.

// Fortunately, the status of these bulbs (on/off) is aoto-switched every minute. 
// So you have a chance to go through the maze.

// Task
// Let's us use a string map to represent these rooms， like this: "xo oxox".

// "x" means there is a bulb in the room, and its initial status is off;

// "o" means there is a bulb in the room, and its initial status is on;

// " "(space) means a room without bulb, it's always dark.

// Your task is to determine if you can go through the maze. Return true if you can, false otherwise.

// Note
// Your initial position is the most left, the exit position is the most right.

// Your moving speed is 1 minute per step. You can not stop before you start your moving until you reach the exit.

// Examples
// For map = "xo oxox". The output should be true.


// This is my initial solution, and it worked!

function bulbMaze(maze){
    let ans = true;
    for(let i = 0; i < maze.length; i++){
        if(i%2 === 0){
            if(maze[i] === 'o'){
                ans = false;
                break;
            }
        }else{
            if(maze[i] === 'x'){
                ans = false;
                break;
            }
        } 
    }
    return ans;
  }


// Interesting solutions I saw on the site:

// function bulbMaze(map){
//     const pos = ['x', 'o']
//     const arr = [...map]
//     const result = arr.map((el, i) => el === ' ' || el === pos[i % 2])
//     return result.every(el => el === true)
//   }

// I saw the 'every()' function in several solutions, learn what that does!