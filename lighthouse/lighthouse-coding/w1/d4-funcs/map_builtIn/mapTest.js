const lighthouses = ["Gibraltar Point", "Peggy's Point", "Cove Island", "Discovery Island", "Cape Scott", "Point Clark", "Kincardine"];

// write code here to use map
const map = function(toMap) {
  newArray = toMap.map(item => item.length)
  return newArray;
}

console.log(map(lighthouses));
// It should output: [ 15, 13, 11, 16, 10, 11, 10 ]