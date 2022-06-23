/** Find the pair of largest no. from given array
 * Problem :- [1,5,8,20,10]
 *
 * Assign variable to the given array.
 * Declare two array & assigned with 0th index of given array.
 * Apply two for loops one will be nested loop on the given array.
 * In the nested loop, check value is greater than max1.
 * Push the max value in max1 and remove (shift) the initial value.
 * max1 will end up with 1st highest value.
 * Then will start the outer loop & start checking value is greater than max2.
 * Push the max value in max2 and remove (shift) the initial value.
 * max1 will end up with 2nd highest value.
 */

let a = [1, 5, 8, 20, 10];
let max1 = [a[0]];
let max2 = [a[0]];
for (let i = 1; i < a.length; i++) {
  for (let j = 1; j < a.length; j++) {
    if (a[j] > max1) {
      max1.shift(max1.push(a[j]));
    }
  }
  if (a[i] > max2 && a[i] < max1) {
    max2.shift(max2.push(a[i]));
  }
}
console.log("Pair of two max values :", max1, max2);
