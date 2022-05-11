const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arr = String(n).split('');
  let biggestNumber = arr[0];
  let biggestNumberIndex = 0;
  for(let i=0; i < arr.length; i++){
    if(biggestNumber <= arr[i]){
      biggestNumber = arr[i];
      biggestNumberIndex = i;
    }
  }
  if(arr[biggestNumberIndex - 1]){
    delete arr[biggestNumberIndex - 1];
  }else{
    let smallestNumber = arr[0];
    let smallestNumberIndex = 0;
  for(let j=0; j < arr.length; j++){
    if(smallestNumber >= arr[j]){
      smallestNumber = arr[j];
      smallestNumberIndex = j;
    }
  }
  delete arr[smallestNumberIndex];
  }
  return +arr.join('');
}

module.exports = {
  deleteDigit
};
