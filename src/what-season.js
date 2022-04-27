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
  if ((!(date instanceof Date) || Object.getOwnPropertyNames(date).length > 0) && arguments.length > 0){
    throw new Error(`Invalid date!`);
  }
  if(arguments.length === 0){
    return `Unable to determine the time of year!`;
  }else{
      let season = date.getMonth();
      if(season <= 1 || season === 11){
        season = `winter`;
      }else if(season <= 4){
        season = `spring`;
      }else if(season <=7){
        season = `summer`;
      }else if(season <= 10){
        season = `autumn`;
      }
      return season;
      }
  }

module.exports = {
  getSeason
};
