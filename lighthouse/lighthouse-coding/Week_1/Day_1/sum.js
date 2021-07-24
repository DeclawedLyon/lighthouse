const args = process.argv;
const sum = function(args) {
  let argsArray = args.slice(2, 4);
  let x = Number(argsArray[0]);
  let y = Number(argsArray[1]);
  let answer =  x + y;
  return answer;
};

console.log(sum(args));