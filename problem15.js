// Reverse an integer

let revNum = (input) => {
  input = String(input);
  let reversed = "";
  for (let i of input) {
    reversed = i + reversed;
  }
  return parseInt(reversed);
};
console.log(revNum(123));
