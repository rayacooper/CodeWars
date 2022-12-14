function sameCase(a, b){
    let arr = [a.charCodeAt(0), b.charCodeAt(0)];

    for (let i = 0; i < 2; i++){
        if (arr[i] > 64 && arr[i] < 91) {
            arr[i] = "upper";
        }else if ( arr[i] > 96 && arr[i] < 123) {
            arr[i] = "lower";
        }else{
            arr[i] = "not";
        }
    }

    return (arr[0] === 'not' || arr[1] === "not")? -1 : (arr[0] === arr[1]) ? 1 : 0;

  }

  console.log(sameCase("b", "Z"))

  console.log("b".charCodeAt(0))