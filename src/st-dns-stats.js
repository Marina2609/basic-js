import { NotImplementedError } from '../extensions/index.js';

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
export default function getDNSStats(domains) {
  const result = {};
  let domain = '';

  for (let i of domains) {
      const arr = i.split('.').reverse();
      for (let x = 0; x < arr.length; x++) {
        domain = domain + '.' + arr[x];
          result[domain] = result[domain] ? result[domain] += 1 : 1;
      }
      domain = '';
  }
  return result;
}
