const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = '';
  let subStr = '';
  let counter = 1;
  for(let i=0; i < str.length; i++){
    if(str[i] === str[i+1]){
      counter++;
    } else {
        if(counter === 1){
        subStr = `${str[i]}`;
        } else {
          subStr = `${counter}${str[i]}`;
        }
      result += `${subStr}`;
      counter = 1;
      subStr = '';
    }
  }
  return result;
}

module.exports = {
  encodeLine
};
