/**  arrange the given array in such a way that all the zeros will come at the end
 *
 *  [1,2,3,0,0,1,2,0,0,2,3]
 */

let newData = function (data) {
  let second = [];
  let length = data.length;
  for (let i = 0; i < data.length; i++) {
    if (data[i] === 0) {
      data.splice(i, 1);
      second.push(0);
      i--;
      length--;
    }
  }
  return data.concat(second);
};
console.log(newData([1, 2, 3, 0, 0, 1, 2, 0, 0, 2, 3]));
