/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let cnt = 1;
  let res = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      cnt++;
    } else {
      res += cnt === 1 ? str[i] : cnt + str[i];
      cnt = 1;
    }
  }
  return res;
}

module.exports = encodeLine;

// const a = 'aabbbbcaccb';
// console.log(encodeLine(a));
