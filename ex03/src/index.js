var myFood = {
  vegetable: "carrot",
  fruit: "orange",
  drink: "water",
};
function myFunction(myObj) {
  var vegetableValue = myFood["vegetable"];
  var fruitValue = myFood["fruit"];
  var drinkValue = myFood["drink"];
  return myObj;
}
console.log(myFunction(myFood.vegetable));
console.log(myFunction(myFood.fruit));
console.log(myFunction(myFood.drink));
module.exports = myFunction(myFood);
