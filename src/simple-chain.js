import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
export default {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (typeof (position) == 'number' && position ^ 0 == position) {
      if (0 < position && position <= this.chain.length) {
        this.chain.splice(position - 1, 1);
        return this;
      }
    }
    this.chain.length = 0;
    throw Error("You can't remove incorrect link!");
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let result = this.chain.join('~~');
    this.chain.length = 0;
    return result;
  }
};