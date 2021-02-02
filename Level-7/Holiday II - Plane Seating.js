// Finding your seat on a plane is never fun, particularly for a long haul flight... 
// You arrive, realise again just how little leg room you get, and sort of 
//climb into the seat covered in a pile of your own stuff.

// To help confuse matters (although they claim in an effort to do the opposite) 
//many airlines omit the letters 'I' and 'J' from their seat naming system.

// the naming system consists of a number (in this case between 1-60) that denotes 
//the section of the plane where the seat is (1-20 = front, 21-40 = middle, 40+ = back). 
//This number is followed by a letter, A-K with the exclusions mentioned above.

// Letters A-C denote seats on the left cluster, D-F the middle and G-K the right.

// Given a seat number, your task is to return the seat location in the following format:

// '2B' would return 'Front-Left'.

// If the number is over 60, or the letter is not valid, return 'No Seat!!'.



// Here is my solution that passed the tests:

function planeSeat(a){
    a = a.split('')
    let lettr = a.slice(-1).join('');
    a.pop();
    a = a.join('')
    return (a > 60 || lettr === "I" || lettr === "J") ? 'No Seat!!' : 
      (a < 21 ? "Front" : a < 41 ? "Middle" : "Back") + '-' +
      (lettr.charCodeAt(0) < 68 ? "Left" : lettr.charCodeAt(0) < 71 ? "Middle" : "Right");
  }


// Here's someone else's solution I saw and I thought was so brilliant:

const planeSeat = a =>
  parseInt(a) > 60 || !`ABCDEFGHK`.includes(a.slice(-1)) ? `No Seat!!` :
    `${[`Front`, `Middle`, `Back`][(parseInt(a) - 1) / 20 ^ 0]}-${[`Left`, `Middle`, `Right`][`ADGBEHCFK`.indexOf(a.slice(-1)) % 3]}`;