// Modify the spacify function so that it returns the given string with spaces inserted between each character.

// spacify("hello world") // returns "h e l l o   w o r l d"

function spacify(str) {
    return str.split('').map((e, i) => i < (str.length - 1) ? e + ' ' : e).join('')
  }

console.log(spacify('heyo fren'))


// My function worked! Yay! But there was a more obvious solution:

// function spacify(str) {
//  return str.split("").join(" ");
//  }