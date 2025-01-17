const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let arr = domains;
  for(let i = 0; i < arr.length; i++){
    arr[i] = arr[i].split('.').reverse();
  }
  let obj = {};
  for(let i = 0; i < arr.length; i++){
    let str = ``;
    for(let j = 0; j < arr[i].length; j++){
      str += `.${arr[i][j]}`;
      if(obj.hasOwnProperty(str)){
        obj[str] += 1;
      } else {
        obj[str] = 1;
      }
    }
  }
  return obj;
}

module.exports = {
  getDNSStats
};
