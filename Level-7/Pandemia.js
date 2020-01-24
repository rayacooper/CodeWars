// The world is in quarantine! There is a new pandemia that struggles mankind. 
// Each continent is isolated from each other but infected people have spread before the warning. ⚠️

// 🗺️ You would be given a map of the world in a type of string:

// s = "01000000X000X011X0X"

// "0" : uninfected

// "1" : infected

// "X" : ocean
// ⚫ The virus can't spread in the other side of the ocean.

// ⚫ If one person is infected every person in this continent gets infected too.

// ⚫ Your task is to find the percentage of human population that got infected in the end.

// ☑️ Return the percentage % of the total population that got infected.



// function infected(string) {
//     let arr = string.split('X')
//     console.log(arr)
//     // let newArr = [];
//     // for(i = 0; i < arr.length; i++){
//     //     if (arr[i] !== ''){
//     //         newArr.push(arr[i])
//     //     }
//     // }
//     arr = arr.filter((e) => e !== '')



//     for(i = 0; i < arr.length; i++){
//       if(arr[i].includes('1')){
//         arr[i] = arr[i].split('').map((e) => {
//           return e = '1'
//         }).join('')
//       }
//     }

//     let total = arr.reduce((accumulator, element) => {
//       return accumulator += element.length;
//     },0)

//     let ones = arr.filter((e) =>{
//         return e.split('').includes('1')
//     })

//     let onesCount = ones.reduce((accumulator, element) => {
//         return accumulator += element.length;
//       },0)
    
//     return arr.length > 0 ? (onesCount / total) * 100 : 0; 
//   }

  console.log(infected("XXXX") )
  
//   73.33333333333333

// Retry to clean things up:

function infected(string) {
    let arr = string.split('X').filter((e) => e !== '')

    // arr.forEach((e) => e.includes('1') ? e.replace(/0/g, '1') : e).join(''))

    for(i = 0; i < arr.length; i++){
      if(arr[i].includes('1')){
        arr[i] = arr[i].split('').map((e) => {
          return e = '1'
        }).join('')
      }
    }

    let total = arr.reduce((accumulator, element) => {
      return accumulator += element.length;
    },0)

    let ones = arr.filter((e) =>{
        return e.split('').includes('1')
    })

    let onesCount = ones.reduce((accumulator, element) => {
        return accumulator += element.length;
      },0)
    
    return arr.length > 0 ? (onesCount / total) * 100 : 0; 
  }