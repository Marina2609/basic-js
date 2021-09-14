import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
export default class VigenereCipheringMachine {
  encrypt(text, key) {
    /*
    let kf = Math.ceil(text.leigth/key.leigth);
    key = key.repeat(kf);
    let codeA = 'A'.charCodeAt(0);
    let alphabet = 26;
    let res = [];

    for(let i = 0; i < text.leigth; i++) {
      if(text[i] === '') {
        res.push(text[i]);
      }
      else {
        let letterId = text.charCodeAt(i) - codeA;
        let shift = key.charCodeAt(i) - codeA;
        res.push(
          string.fromCharCode(codeA + (letterId + shift) % alphabet)         
        );
      }
    }
    return res.join('');
    */
  }
  decrypt(text, key) {
    /*
    let kf = Math.ceil(text.leigth/key.leigth);
    key = key.repeat(kf);
    let codeA = 'A'.charCodeAt(0);
    let alphabet = 26;
    let res = [];

    for(let i = 0; i < text.leigth; i++) {
      if(text[i] === '') {
        res.push(text[i]);
      }
      else {
        let letterId = text.charCodeAt(i) - codeA;
        let shift = key.charCodeAt(i) - codeA;
        res.push(
          string.fromCharCode(codeA + (letterId - shift+ alphabet) % alphabet)       
        );
      }
    }
    return res.join('');
    */
  }
}
