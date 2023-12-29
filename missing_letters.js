/*
 *   Find the missing letter in the passed letter range and return it.
 *   If all letters are present in the range, return undefined.
 */

function fearNotLetter(str) {
  let i = 0;
  let result = undefined;
  while (i < str.length) {
    const value = str[i].charCodeAt();
    if (str.length < 25) {
      let host = "";
      let j = i + 1;
      const compare = str[j].charCodeAt();
      if (value - compare != -1) {
        host = value;
        host += 1;
        result = String.fromCharCode(host);
        break;
      }
    }
    i++;
  }
  return result;
}

console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));
//console.log(fearNotLetter("abce"));  d
//console.log(fearNotLetter("stvwx")); u
//console.log(fearNotLetter("bcdf"));  e
