// function growingPlant(upSpeed, downSpeed, desiredHeight) {
//     return upSpeed > desiredHeight ? 1 : Math.floor(desiredHeight / (upSpeed - downSpeed));
//   }

 

// Test.assertEquals(growingPlant(100,10,910),10)

// Test.assertEquals(growingPlant(10,9,4),1)

function growingPlant(upSpeed, downSpeed, desiredHeight){
    let x = 0; 
    let ans;
    for (let i = 1; i < desiredHeight; i++){
        console.log(x)
        x += upSpeed
        console.log(x)
        if (x >= desiredHeight){
            ans = i;
            break;
        }else{
            x -= downSpeed;
        }
    }
    return ans;
}

console.log(growingPlant(10,9,4))

// Best Practices Version:

// function growingPlant(upSpeed, downSpeed, desiredHeight) {  
//     var i = 1;
//     for (var height = upSpeed; height < desiredHeight; height = height + upSpeed){
//       height = height - downSpeed;
//       i++;   
//     }
//     return i;
//   }

let a = "a"
console.log(a.charCodeAt(0))