const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater (str, options) {
  if(options.separator === undefined){
    options.separator = `+`;
  }
  if(options.additionSeparator === undefined){
    options.additionSeparator = `|`;
  }
  function repeatAddition(){
    if(options.addition !== undefined){
    let result = [String(str)];
    console.log(result);
    if(options.additionRepeatTimes === undefined){
      result.push(`${String(options.addition)}`);
    } else {
      let i = 0;
      while(i < options.additionRepeatTimes){
        if(i === options.additionRepeatTimes - 1){
          result.push(`${String(options.addition)}`);
        } else {
          result.push(`${String(options.addition)}${options.additionSeparator}`);
        }
        i++;
      }
    }
    str = result.join('');
    }
  return str;
}

if(options.repeatTimes !== undefined){
  let i = 0;
  let endResult = [];
  str = repeatAddition();
  while(i < options.repeatTimes){
    if(i === options.repeatTimes - 1){
      endResult.push(`${str}`);
    } else {
      endResult.push(`${str}${options.separator}`);
    }
    i++;
  }
  str = endResult.join('');
  } else {
    str = repeatAddition();
  }
  return str;
}

module.exports = {
  repeater
};
