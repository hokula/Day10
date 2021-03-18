var players = {
    7: "Muhamed Besic",
    10: "Miralem Pjanic",
    11: "Edin Dzeko"
};
function myFunction(myObj) {
    var playerNumber = players[10];
    var player = players.10;
    return myObj;
}
console.log(myFunction(players.10))
module.exports = { players, myFunction};