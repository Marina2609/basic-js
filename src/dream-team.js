import { NotImplementedError } from '../extensions/index.js';

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
export default function createDreamTeam(members) {
  if (!members) {
    return false;
  }

  let secret_name = [];

  for (let i = 0; i < members.length; i++) {
    let current = members[i];

    if(typeof current === 'string') {
      current = current.split(' ').join('');
      secret_name.push(current[0]);
    }
  }

  return secret_name.map(i => i.toUpperCase()).sort().join('')
}
