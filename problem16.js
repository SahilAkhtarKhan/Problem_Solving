// To find longest word from a string using (for of Loop) means iterate by an elements not by indexing

/**
 *
 * @param {Given String} mainStr
 * split the given string.
 * declare one empty variable.
 * apply for of loop.
 * check the current string length with empty variable's length.
 * if greater, then add into empty variable.
 * @returns longest string
 */

function longestWord(mainStr) {
  let greater = "";
  mainStr = mainStr.split(" ");
  for (let word of mainStr) {
    if (word.length > greater.length) {
      greater = word;
    }
  }
  return `${greater} with ${greater.length} words`;
}
console.log(longestWord("engineer software am I mechanicalsss"));
console.log(longestWord("Engineering in mechanical stream"));
console.log(longestWord("Software Development life cycle"));
