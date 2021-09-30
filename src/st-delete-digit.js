import { NotImplementedError } from '../extensions/index.js';

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
export default function deleteDigit(n) {

  for (let i = 0; i < 1; i++) {
    let result = 0;
    let j = 1;

    while (parseInt(n / j) > 0) {
      var temp = parseInt(n / (j * 10)) * j + (n % j);
      j = j * 10;
      result = Math.max(result, temp);
    }
    n = result;
  }
  return n;
}
