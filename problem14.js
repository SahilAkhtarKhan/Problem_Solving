/** Chunked the given array into n size of subarrays.
 *
 * @param {Given array} array
 * @param {Size of chunks} n
 *
 * Empty variable for result.
 * For of loop on given array.
 * splice the element upto n size.
 * push into empty variable.
 */

function chunkedArray(array, n) {
  let temp = [];
  for (let i = 0; i < array.length; i++) {
    temp.push(array.splice(i, n));
  }
  if (array.length != 0) {
    temp.push(array);
  }
  // console.log("LN16", array);
  console.log(temp);
}
chunkedArray([1, 4, 12, 3, 2, 6, -9, 0, 56, 71, 80], 3);
