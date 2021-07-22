const args = process.argv.slice(2);
let rollArray = [];
let min = 1;
let max = 6;

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

const rollDice = function(rolls) {
  for (let i = 0; i < rolls; i++) {
    let roll = getRandomInt(1, 7);
    rollArray.push(roll);
  }
  return rollArray.join(', ');;
}

console.log(rollDice(args));