const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if(date == null){
    return `Unable to determine the time of year!`;
  } else if(!isNaN(date.getTime())){
   return new Error ('Invalid date!');
  } else {
    return `Correct`;
  }
}
  // let myDate = new Date(date);
  // if (myDate.getFullYear() && myDate.getMonth() && myDate.getDate()) {
  //   console.log('корректна');
  // } else {
  //   console.log('некорректна');
  // }
  // if(Object.prototype.toString.call(date) === '[object Date]'){
  // let myDate = new Date(date);
  // let month = myDate.getMonth(); 
  // console.log(month);
  // return month;
  // } else {
  //   return `Invalid date!`;
  // }
  // if(month == 'Invalid Date'){
  //   return `Invalid date!`
  // }

module.exports = {
  getSeason
};
