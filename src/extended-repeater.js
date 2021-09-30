import { NotImplementedError } from '../extensions/index.js';

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
export default function repeater(str, options) {
  let res = '';
  let add = '';
  if (options.additionRepeatTimes == undefined) options.additionRepeatTimes = 1;
  if (options.repeatTimes == undefined) options.repeatTimes = 1;
  if (options.addition === undefined) options.addition = '';

  for (let x = 1; x <= options.additionRepeatTimes; x++) {
      add += `${String(options.addition)}${x == (options.additionRepeatTimes ? options.additionRepeatTimes : 0) ? '' : options.additionSeparator ? options.additionSeparator : '|'}`;
  }

  for (let i = 1; i <= options.repeatTimes; i++) {

      res += `${String(str)}${add}${i == options.repeatTimes ? '' : options.separator ? options.separator : '+'}`;
  }

  return res;
}
