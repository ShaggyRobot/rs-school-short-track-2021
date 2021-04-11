/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let t1 = s1;
  let t2 = s2;
  let accum = 0;
  if (t1.length < t2.length) {
    for (let i = 0; i < t1.length; i++) {
      accum += t2.includes(t1[i]) ? 1 : 0;
      t2 = t2.replace(t1[i], '');
    }
    return accum;
  }
  for (let i = 0; i < t2.length; i++) {
    accum += t1.includes(t2[i]) ? 1 : 0;
    t1 = t1.replace(t2[i], '');
  }
  return accum;
}

module.exports = getCommonCharacterCount;
