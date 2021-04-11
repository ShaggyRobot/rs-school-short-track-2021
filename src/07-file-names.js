/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */

function count(n, arr) {
  let cnt = 0;
  for (let i = 0; i < arr.length; i++) {
    cnt = arr[i] === n ? cnt + 1 : cnt;
  }
  return cnt;
}

function renameFiles(names) {
  const reslist = [];
  for (let i = 0; i < names.length; i++) {
    reslist[i] = `${names[i]}(${count(names[i], names.slice(0, i)) + count(names[i], reslist)})`;
  }
  for (let i = 0; i < reslist.length; i++) {
    if (reslist[i].slice(-3) === '(0)') {
      reslist[i] = reslist[i].slice(0, -3);
    }
  }
  return reslist;
}

module.exports = renameFiles;
