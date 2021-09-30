import { NotImplementedError } from '../extensions/index.js';

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
export default function isMAC48Address(n) {
  const reg = new RegExp('^([0-9]|[A-F]|-)+$');
  if (!reg.test(n) || n.length != 17) {
    return false;
  }

  const array = n.split('-');
  if (array.length != 6) {
    return false;
  }

  for (let i of array) {
      if (i.length != 2) {
        return false;
      }
  }
  return true;
}