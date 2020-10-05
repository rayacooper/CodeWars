// Write a function getDrinkByProfession/get_drink_by_profession() 
//that receives as input parameter a string, and produces outputs according to the following table:

// Input	Output
// "Jabroni"	"Patron Tequila"
// "School Counselor"	"Anything with Alcohol"
//  "Programmer"	 "Hipster Craft Beer"
//  "Bike Gang Member"	"Moonshine" 
//  "Politician"	"Your tax dollars" 
//  "Rapper"	"Cristal" 
//  *anything else*	"Beer" 

function getDrinkByProfession(param){
    const prof = ['jabroni', 'school counselor', "programmer", "bike gang member", "politician", "rapper"]
    const drinks = ['Patron Tequila', "Anything with Alcohol", "Hipster Craft Beer", "Moonshine", "Your tax dollars", "Cristal"]
    return prof.includes(param.toLowerCase()) ? drinks[prof.indexOf(param.toLowerCase())] : "Beer";
  }