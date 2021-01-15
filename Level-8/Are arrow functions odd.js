// Time to test your basic knowledge in functions! Return the odds from a list

function odds(values){
    // arrow it
    return values.filter((e, i, arr) => {
        return e % 2 !== 0
    });
  }