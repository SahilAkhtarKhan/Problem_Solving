/** Find Valid Paranthesis.
 *
 *
 * #01 : show given input.
 * #1.1 : create pair = ( ) for comparision.
 * #02 : create stack with empty array.
 * #2.1 : create a variable named as count = 0.
 * #03 : apply for loop at input.
 * #04 : store every element one by one inside the stack.
 * #4.1 : apply if condition to check next element making a pair like ().
 * #4.2 : if condition true then pop the pair and increase the count value by 2.
 * Given Que : ((((()())
 * Expected output : 6
 */

let input = "((((()())";
let pair = ["(", ")"];
let stack = [];
let count = 0;
for (let i = 0; i < input.length; i++) {
  stack.push(input[i]);
  //   console.log(stack);
  if (stack.includes(pair[0] && pair[1])) {
    count += 2;
    stack.pop(pair);
    // console.log(stack);
  }
}
console.log(count);
