var myPet = {
  species: "Kangal",
  name: "Zevs",
  legs: 4,
  friends: ["Hektor", "Rambo"]
};

function myFunction(myObj) {
  return myObj;
}
myFunction();
console.log(myFunction(myPet.species));
console.log(myFunction(myPet.name));
console.log(myFunction(myPet.legs));
console.log(myFunction(myPet.friends));

module.exports = { myPet, myFunction };
