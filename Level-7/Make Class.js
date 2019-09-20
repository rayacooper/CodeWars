// I don't like writing classes like this:

// function Animal(name,species,age,health,weight,color) {
//   this.name = name;
//   this.species = species;
//   this.age = age;
//   this.health = health;
//   this.weight = weight;
//   this.color = color;
// }
// Give me the power to create a similar class like this:

// const Animal = makeClass("name","species","age","health","weight","color") 


// I had to look at the solution for this one:

function makeClass(...properties) {
  return class {
    constructor(...props) {
      properties.forEach((prop, index) => {
        this[prop] = props[index]
      })
    }
  }
}

// the function returns a class, which has a constructor that takes in ...props.
// It takes properties and for each, it gives it a value from whatever is passed
// in into the constructor. Cool.