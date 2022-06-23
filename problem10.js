// Given an array of size N-1 such that it only contains distinct integers in the range of 1 to N. Find the missing element.

// Example 1:

// Input:
// N = 5
// A[] = {1,2,3,5}
// Output: 4

function MissingNumber(array, n) {
  let arr = 0;
  for (let i = 0; i < array.length; i++) {
    arr += array[i];
  }
  let arr01 = (n * (n + 1)) / 2;
  // console.log("ln23:", arr01);
  return arr01 - arr;
}
console.log(MissingNumber([1, 2, 3, 5], 5));

// Example 2:

// Input:
// N = 10
// A[] = {6,1,2,8,3,4,7,10,5}
// Output: 9

function missednumber(array, n) {
  let arr001 = 0;
  for (let i = 0; i < array.length; i++) {
    arr001 += array[i];
  }
  let arr002 = (n * (n + 1)) / 2;
  return arr002 - arr001;
}
console.log(missednumber([6, 1, 2, 8, 3, 4, 7, 10, 5], 10));
