// const mode = function(arr) {
//   let commonNum = {};
//   let most = 0;

//   for (i = 0; i < arr.length; i++) {
//     if (!commonNum[arr[i]]) {
//       commonNum[arr[i]] = 1;
//     } else {
//       commonNum[arr[i]]++
//     }
//     for (const item in commonNum) {
//       if (item[i] > most) {
//         console.log('item i is: ' + i + '\nvalue of item i is: ' + item[i] + '\nmost is: ');
//         //most = item;
//       }
//     }
//   }

//   return most;
// };

// console.log(mode([7,6,2,3,4,9,6,1,0,5]))

const round = function(number) {
  return Math.round(number * 100) / 100;
};

const stdev = function(arr) {
  let sum = 0;
  let count = 0;
  let average = 0;
  let deviations = 0;
  let variance = 0;
  let stdDeviation = 0;

// FIND THE AVERAGE (SUM/COUNT)

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    count++;
  }
  average = sum / count;
  
// FIND THE DEVIATIONS FOR EACH VALUE sum(x - populationMean)^2

  for (let x = 0; x < arr.length; x++){
    deviations += Math.abs(((arr[x] - average) ^ 2));
  }
  
  // FIND THE VARIANCE (sum((x - populationMean)^2)/numberOfValues)
  //                   (         deviation       ) /    count
  variance = deviations / average;

  // FIND THE STANDARD DEVIATION

  stdDeviation = Math.sqrt(variance);
  return round(stdDeviation);
  // average the numbers
  // divide the numbers
  // sqrt the numbers
};

console.log(stdev([2,4,4,4,5,5,7,9]), ' ?=== 2')