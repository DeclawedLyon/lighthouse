const args = process.argv;
let phrase = args.slice(2, args.length);

const pigLatin = function(words) {
  let tempWord = '';
  let newPhrase = '';
  for (let i = 0; i < words.length; i++) {
    let temp = words[i].slice(0, 1);
    for (let j = 0; j <= words[i].length; j++)
      if (j > 0 && j < words[i].length) {
        tempWord += words[i][j];
      } else if (j === words[i].length) {
        tempWord = tempWord + temp + 'ay ';
        newPhrase += tempWord;
        tempWord = '';
      }
  }
  return newPhrase;
};

console.log(pigLatin(phrase));