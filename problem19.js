// Given an integer array and another integer element. The task is to find if the given element is present in array or not.

function searchInt(arr, X) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == X) {
      console.log(i);
    }
  }
  return;
}
searchInt([1, 2, 3, 4], 3);
