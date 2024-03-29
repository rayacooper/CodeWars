// You need to create a function that converts the input into this format, 
// with the output being the same string expect there is a pattern of uppercase and lowercase letters.

// Example:

// input:  "stop Making spongebob Memes!"
// output: "StOp mAkInG SpOnGeBoB MeMeS!"

function spongeMeme(sentence) {
  return sentence.split('').map((e, i) => i % 2 === 0 ? e.toUpperCase() : e.toLowerCase()).join('');
}

