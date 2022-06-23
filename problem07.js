/** Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.

----------------***************--------------------


 * Given input data.
 * Split to make array
 * Declare pair variable for comparision.
 * Make stack variable with emptt array.
 * Apply if condition to check the first & last brackets are closing and opening respectively.
 * Apply for loop at input & compare value with brackets.
 * Push the i values one by one inside stack array [].
 * Again apply if condition to check the input variable is empty or not.
 * If true then output will be true.
 * Else false.
 */

/**
 * Pushing opening braces to the stack.
 * Then compare the first closing bracket with the last pushed element.
 * If making any pair then pop and continue checking.
 * If not then return false.
 */

function validBrackets(input) {
  const stack = [];
  // console.log("ln32:", stack);
  for (let i = 0; i < input.length; i++) {
    if (["(", "{", "["].includes(input[i])) {
      stack.push(input[i]);
      continue;
    }
    if (")" === input[i] && stack.at(-1) === "(") {
      stack.pop();
      continue;
    }
    if ("]" === input[i] && stack.at(-1) === "[") {
      stack.pop();
      continue;
    }
    if ("}" === input[i] && stack.at(-1) === "{") {
      stack.pop();
      continue;
    }
    return false;
  }
  return stack.length === 0;
}

console.log(validBrackets("}[()]"));
