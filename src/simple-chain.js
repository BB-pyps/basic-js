const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    this.chain.length;
    return this;
  },
  addLink(value) {
    if(!(arguments.length) && value !== null){
    this.chain.push(`'(  )'`);
      return this;
    } else {
      this.chain.push(`( ${value} )`);
      return this;
    }
  },
  removeLink(position) {
    if(typeof position !== 'number' || !(Number.isInteger(position)) || position <= 0 || position > this.chain.length - 1){
      this.chain = [];
      throw new Error(`You can't remove incorrect link!`);
    }else{
    this.chain.splice(position-1, 1);
    return this;
    }
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let result = this.chain.join('~~')
    this.chain = [];
    return result;
  }
};

module.exports = {
  chainMaker
};
