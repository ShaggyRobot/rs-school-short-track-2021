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
function deleteDigit(n) {
  let res = 0;
  for (let i = 0; i < String(n).length; i++) {
    const narr = String(n).split('');
    narr[i] = '';
    if (res <= Number(narr.join(''))) {
      res = Number(narr.join(''));
    }
  }
  return res;
}

module.exports = deleteDigit;
