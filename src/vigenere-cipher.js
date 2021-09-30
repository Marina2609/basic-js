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
  constructor(mode = true){
    this.mode = mode;
    return this.mode;
}

  encrypt(text, key) {
    if (!(text && key)) {
      throw new Error('Incorrect arguments!');
    }
    text = text.toUpperCase();
    const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    let code = [],
        keys = key.toUpperCase(),
        j=0;

    if(!this.mode) {
      text = text.split("").reverse();
    }
    for(let i = 0; i < text.length; i++){
          if(alphabet.includes(text[i])){
                let index = ((alphabet.indexOf(text[i])+alphabet.indexOf(keys[j]))%26);
                let tmp = alphabet[index];
                code.push(tmp);
                j++;
                if (j == keys.length) {
                  j = 0;
                }
          } else {
            code.push(text[i]);
          }
}
    return code.join('');
  }

  decrypt(text, key) {
    if (!(text && key)) {
      throw new Error('Incorrect arguments!');
    }
    text = text.toUpperCase();
      const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
      let code = [],
          keys = key.toUpperCase(),
          j = 0;

      if(!this.mode) {
        text = text.split("").reverse();
      }
      
      for(let i = 0; i < text.length; i++){
              if(alphabet.includes(text[i])){
                let index = (((alphabet.indexOf(text[i])-alphabet.indexOf(keys[j]))+26)%26);
                let tmp = alphabet[index];
                code.push(tmp);
                  j++;
                  if(j == keys.length) {
                    j = 0;
                  }
              } else {
                code.push(text[i]);      
              }
      }
              return code.join("");
  }
}
