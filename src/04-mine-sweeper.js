/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const minefield = [];
  for (let i = 0; i < matrix.length; i++) {
    minefield[i] = [];
    for (let j = 0; j < matrix[i].length; j++) {
      minefield[i][j] = 0;
      for (let k = -1; k <= 1; k++) {
        for (let n = -1; n <= 1; n++) {
          if (matrix[i][j]) minefield[i][j] = 1;
          if (matrix[i + k] && matrix[i + k][j + n] && !matrix[i][j]) {
            minefield[i][j]++;
          }
        }
      }
    }
  }
  return minefield;
}

module.exports = minesweeper;
