/**
 * [5,3,7] --> [8,7] --> [15]
 * current element should be grater than next element.
 * if yes then add.
 * remove the two elements which added & replace it with new sum.
 */

let givenArr = (input) => {
  let arrayLength = input.length;
  let sum = 0;
  if (arrayLength > 1 && Array.isArray(input)) {
    for (let i = 0; i < arrayLength; i++) {
      if (input[i] > input[i + 1]) {
        sum = input[i] + input[i + 1];
        input.splice(i, 2, sum);
        i -= 1;
        continue;
      }
      return "LN19", input;
    }
  } else {
    console.log("Enter valid input");
  }
  return input;
};
let a = givenArr([6, 7, 8, 2]);
console.log("LN28", a);
