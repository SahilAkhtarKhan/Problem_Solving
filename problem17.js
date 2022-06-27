//Solution-01

function findMax(arr, k) {
  let newArr = [];
  let max = 0;
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    count += 1;
    if (arr[i] > max) {
      max = arr[i];
    }
    if (count == k) {
      newArr.push(max);
      max = 0;
      count = 0;
      i = i - (k - 1);
    }
  }
  return newArr;
}
console.log(findMax([8, 5, 10, 7, 9, 4, 15, 12], 3));

//Solution-02

function max_of_subarrays(arr, n, k) {
  const result = [];
  let maxNumber = arr[0];
  for (let i = 0; i < n - (k - 1); i++) {
    const copy = [...arr];
    let chunk = copy.splice(i, k);
    // console.log({ chunk });
    result.push(Math.max(...chunk));
  }
  return result;
}
