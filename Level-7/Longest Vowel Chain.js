// The vowel substrings in the word codewarriors are o,e,a,io. 
// The longest of these has a length of 2. Given a lowercase string 
// that has alphabetic characters only and no spaces, return the length of the longest vowel substring.

// Good luck!

function solve(s){
    let arr = s.toLowerCase().split('b' || 'c '|| 'd' || 'f' || 'g' || 'h' || 'j' || 'k' || 'l' || 'm' || 'n' || 'p' || 'q' || 'r' || 's' || 't' || 'v' || 'w' || 'x' || 'y' || 'z')
    console.log(arr)
    return arr.sort(function (a, b) { return b.length - a.length; })[0];
}

console.log(solve('codewarriors'))
// Test.assertEquals(solve("codewarriors"),2);
// Test.assertEquals(solve("suoidea"),3);
// Test.assertEquals(solve("ultrarevolutionariees"),3);
// Test.assertEquals(solve("strengthlessnesses"),1);
// Test.assertEquals(solve("cuboideonavicuare"),2);
// Test.assertEquals(solve("chrononhotonthuooaos"),5);
// Test.assertEquals(solve("iiihoovaeaaaoougjyaw"),8);