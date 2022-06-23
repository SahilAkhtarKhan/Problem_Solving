// const arr = [4, 2, 0, 1, 2, 6, 8, 3, 2, 5];
// const num = 8;
// const output = [ [ 2, 2, 4 ], [ 1, 3, 4 ], [ 0, 2, 6 ], [ 1, 2, 5 ] ];

/**    Checking the multiple of 3 of pairs which is equal to 8.
 * By using 3 loops
 *
 * First loop will initialize from the 0th index value.
 * Second nested loop will initialize from the 1th index.
 * Third nested loop will initialize from the 2nd index.
 * Apply if condition & check the summ of i,j,k = 8.
 * If yes then collect the pairs inside another variable.
 *
 */

// function format() {
//   if (array[i] + array[j] + array[k] === 8) {
//     collect.push([array[i], array[j], array[k]]);
//   }
// }

// function checkPair(array, format) {
//   let collect = [];
//   for (let i = 0; i < array.length; i++) {
//     for (let j = 1; j < array.length; j++) {
//       for (let k = 2; k < array.length; k++) {
//         collect.push(format());
//       }
//     }
//   }
//   return collect;
// }
// console.log(checkPair([4, 2, 0, 1, 2, 6, 8, 3, 2, 5]), format);

// function checkPair(array) {
//   let collect = [];
//   for (let i = 0; i < array.length; i++) {
//     for (let j = 1; j < array.length; j++) {
//       for (let k = 2; k < array.length; k++) {
//         if (array[i] + array[j] + array[k] === 8) {
//           collect.push([array[i], array[j], array[k]]);
//           //   console.log(array[i], array[j], array[k]);
//         }
//       }
//     }
//   }
//   return collect;
// }
// console.log(checkPair([4, 2, 0, 1, 2, 6, 8, 3, 2, 5]));

function checkPair(array) {
  let collect = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = 1; j < array.length; j++) {}
  }
  return collect;
}
console.log(checkPair([4, 2, 0, 1, 2, 6, 8, 3, 2, 5]));
