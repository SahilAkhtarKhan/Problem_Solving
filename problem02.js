// Print all the -ve values from the given array.

/**
 * First assign the given array in variable.
 * Declare one variable "outputArr" and assigned with 0.
 * Apply loop at given array.
 * Assigned 0th index value from loop to the "outputArr" variable.
 * Compare every value with 0.
 */

let arr = [8, -9, 7, -6, -4];
let outputArr = 0;
for (let i = 0; i < arr.length; i++) {
  outputArr = arr[i];
  if (outputArr < 0) {
    console.log(outputArr);
  }
}
