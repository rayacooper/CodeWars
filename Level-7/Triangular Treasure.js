// Triangular numbers are so called because of the equilateral 
// triangular shape that they occupy when laid out as dots. i.e.

// 1st (1)   2nd (3)    3rd (6)
// *          **        ***
//            *         **
//                      *
// You need to return the nth triangular number. You should return 0 for out of range values:

//   triangular(0)==0,
//   triangular(2)==3,
//   triangular(3)==6,
//   triangular(-10)==0

// Return the nth triangular number
function triangular( n ) {
    let ans;
    let counter = 1;
    if (n <=0){
        ans = 0;
    }else{
        ans = 0;
        for (i = 0; i < n; i++){
            ans += counter;
            counter++;
        }
    }
    return ans;
}