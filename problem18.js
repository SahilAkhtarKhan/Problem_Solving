// find the maximum & minimum no. from the given array.

function minMaxNumber(array) {
  let min = array[0];
  let max = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    } else if (array[i] > max) {
      max = array[i];
    }
  }
  console.log(min, max);
}
minMaxNumber([3, 0, 1, -56, -10000, 167]);
