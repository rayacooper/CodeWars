// Write a simple parser that will parse and run Deadfish.

// Deadfish has 4 commands, each 1 character long:

// i increments the value (initially 0)
// d decrements the value
// s squares the value
// o outputs the value into the return array
// Invalid characters should be ignored.

// parse("iiisdoso") => [ 8, 64 ]


// This was my first attempt which worked
// (I initially had the 'filter' statement say .filter(e => e)
// but that didn't account for zeroes, which needed to be included)

function parse( data )
{
  let current = 0;
  return data.split('')
    .map((e) => {
      switch (e){
          case 'i':
          current = current + 1;
          break;
          case 'd':
          current = current - 1;
          break;
          case 's':
          current = Math.pow(current,2);
          break;
          case 'o':
          return current;
          break;
          default:
          break;
      }
    })
      .filter(e => e !== undefined) 
}


// This was a neat solution that was created by multiple users:


// function parse(data) {
//     let res = [];
  
//     data.split('').reduce((cur, s) => {
//       if (s === 'i') cur++;
//       if (s === 'd') cur--;
//       if (s === 's') cur = Math.pow(cur, 2);
//       if (s === 'o') res.push(cur);
      
//       return cur;
//     }, 0);
    
//     return res;
//   }