const args = process.argv;
let len = args.length;
argsArr = [];
argsArr.push(args.slice(2, len));

const reverse = function(argsArr) {
  let argsArray = argsArr;
  let  finalPhrase = '';


  for (let i = 0; i < argsArray.length; i++) {
    // console.log(argsArray[i]);
    for (let j = 0; j < argsArray[i].length; j++) {
      //console.log(argsArray[i][j]);
      // for (const letter of argsArr[i][j]) {
      //   finalPhrase += letter;
      //   console.log(finalPhrase)
      //   console.log(letter);
      // }
      for (let l = argsArray[i][j].length - 1; l > 0 - 1; l--) {
        if (l === 0) {
          finalPhrase += argsArray[i][j][l] + ' ';
        } else {
        //console.log(argsArray[i][j].length)
        //console.log(argsArray[i][j][l]);
        //console.log(finalPhrase);
        finalPhrase += argsArray[i][j][l];
        }
        
        //console.log(finalPhrase);
      }
    }
  }
  console.log(finalPhrase);
};

console.log(reverse(argsArr));
