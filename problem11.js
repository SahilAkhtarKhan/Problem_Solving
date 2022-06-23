// Given 2 sorted arrays Ar1 and Ar2 of size N each. Merge the given arrays and find the sum of the two middle elements of the merged array.

// Example 1:

// Input:
// N = 5
// Ar1[] = {1, 2, 4, 6, 10}
// Ar2[] = {4, 5, 6, 9, 12}
// Output: 11
// Explanation: The merged array looks like {1,2,4,4,5,6,6,9,10,12}. Sum of middle elements is 11 (5 + 6).

/**
 * CODING APPROACH
 * @param {Given array 1 } Ar1
 * @param {Given array2 merge with 1st array in new variable} Ar2
 * Apply "arr001.sort(function (a, b) { return a - b })" to sort the final array because of repeated element.
 * Check the length of final array and apply condition to get the middle value by arr002 += arr001.length / 2;
 * Apply one more condition to get the another middle value by arr003 += arr001.length / 2 + 1;
 * Then add the both values.
 * @returns
 */

function arr(Ar1, Ar2) {
  let arr001 = [...Ar1, ...Ar2];
  let arr002 = 0;
  let arr003 = 0;
  // [1, 2, 4, 6, 10, 4, 5, 6, 9, 12]
  arr001.sort(function (a, b) {
    return a - b;
  });
  // console.log("ln22 :", arr001);
  arr002 += arr001.length / 2;
  // console.log("ln24 :", arr002);
  arr003 += arr001.length / 2 + 1;
  // console.log("ln26 :", arr003);
  return arr002 + arr003;
}
console.log(arr([1, 2, 4, 6, 10], [4, 5, 6, 9, 12]));

// __________________________________________________________;

// Example 2:

// Input:
// N = 5
// Ar1[] = {1, 12, 15, 26, 38}
// Ar2[] = {2, 13, 17, 30, 45}
// Output: 32
// Explanation: The merged array looks like
// {1, 2, 12, 13, 15, 17, 26, 30, 38, 45}
// sum of middle elements is 32 (15 + 17).

function res(ar1, ar2) {
  let rest = [...ar1, ...ar2];
  let rest001 = 0;
  let rest002 = 0;
  rest.sort(function (a, b) {
    return a - b;
  });
  console.log(rest);
  rest001 = rest.length / 2;
  console.log(rest001);
}
console.log(res([1, 12, 15, 26, 38], [2, 13, 17, 30, 45]));
