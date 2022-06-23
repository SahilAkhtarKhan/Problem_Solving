// N = 5
// arr = [0, 2, 1, 2, 0]
// Expected Output : {0 0 1 2 2}
/**
 * Apply loop in array and start checking tha minimum value first.
 * For finding the smallest value start with 0th index value and compare with another values.
 * Target 0th index value then check the minimum value from that.
 * After finding that value, pop that value from array and push that inside new array and then compare with other values.
 * If more similar equal values found then pop and push.
 * If not found then check another smallest value.
 */

let arr = [0, 2, 1, 2, 0];
let zero = [];
let one = [];
let two = [];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] == 0) {
    zero.push(arr[i]);
  } else if (arr[i] == 1) {
    one.push(arr[i]);
  } else {
    two.push(arr[i]);
  }
}
const result = [...zero, ...one, ...two];
for (let j = 0; j < result.length; j++) {
  arr[j] = result[j];
}
console.log(arr);
