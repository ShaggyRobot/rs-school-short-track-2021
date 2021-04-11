/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let start = 0;
  let finish = array.length - 1;
  while (start <= finish) {
    const mid = Math.floor((finish + start) / 2);
    if (array[mid] === value) {
      return mid;
    }
    if (array[mid] > value) {
      finish = mid - 1;
    } else start = mid + 1;
  }
  return null;
}

module.exports = findIndex;

// const array = [1, 2, 8, 100, 3, 97, 4, 5, 6]
// const item = 3

// console.log(findIndex(array, item))
