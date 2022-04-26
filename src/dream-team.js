const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let newArr = [];
  let result = [];
  if(members == null){
    return false;
  }
  for (let i=0; i < members.length; i++){
    if(typeof members[i] == 'string'){
      newArr.push(members[i].toUpperCase().trim());
    }
  }

  newArr = newArr.sort();
  for(let i=0; i < newArr.length; i++){
    if(newArr[i][0] != ' '){
      result.push(newArr[i][0]);
    }
  }
  return result.join('');
}

module.exports = {
  createDreamTeam
};
