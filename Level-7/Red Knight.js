// Red Knight is chasing two pawns. Which pawn will be caught, and where?

// Input / Output
// Input will be two integers:

// N vertical position of Red Knight (0 or 1).
// P horizontal position of two pawns (between 2 and 1000000).
// Output has to be a tuple (python, haskell), an array (javascript), or a structure (C) with:

// "Black" or "White" - which pawn was caught
// Where it was caught (horizontal position)

function redKnight(N, P) {
    let KHP = 0;
    let ans;
    for(i = 0; i < 1000000; i++){
        if (KHP < P){
            KHP += 2;
            if (N === 0){
                N = 1;
            }else{
                N = 0;
            }
            P++;
        }else if (KHP = P){
            if (N === 0){
                ans = 'White'
            }else{
                ans = "Black"
            }
        }
    }
    return [ans, P]
  }