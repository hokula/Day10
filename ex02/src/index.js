var myClothes = {
  hat: "Fedora",
  shirt: "Nike",
  shoes: "Converse",
};
function myFunction(myObj) {
  var hatValue = myClothes.hat;
  var shirtValue = myClothes.shirt;
  var shoesValue = myClothes.shoes;
  return myObj;
}
console.log(myFunction(myClothes.hat));
console.log(myFunction(myClothes.shirt));
console.log(myFunction(myClothes.shoes));

module.exports = myFunction(myClothes);
