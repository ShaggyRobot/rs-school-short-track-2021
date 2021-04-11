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
function getDNSStats(domains) {
  const d = {};
  for (let i = 0; i < domains.length; i++) {
    const a = domains[i].split('.').reverse();
    let c = '';
    for (let j = 0; j < a.length; j++) {
      c += `.${a[j]}`;
      d[c] = d[c] ? d[c] + 1 : 1;
    }
  }
  return d;
}

module.exports = getDNSStats;

// domains = ['code.yandex.ru', 'music.yandex.ru', 'yandex.ru'];

// console.log(getDNSStats(domains));
