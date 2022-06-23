// Object
/*
- Write method findPath
- Should take two params:
    - object
    - keys separated by dots as string
- Return value if it exists at that path inside the object, else return undefined
*/

// console.log(findPath(obj, 'a.b.c')); // 12
// console.log(findPath(obj, 'a.b')); // {c: 12, j: false}
// console.log(findPath(obj, 'a.b.d')); // undefined
// console.log(findPath(obj, 'a.c')); // undefined
// console.log(findPath(obj, 'a.b.c.d')); // undefined
// console.log(findPath(obj, 'a.b.c.d.e')); // undefined
// console.log(findPath(obj, 'a.b.j')); //false
// console.log(findPath(obj, 'a.b.j.k')); //undefined
// console.log(findPath(obj, 'a.k')); //null

var obj = {
  a: {
    b: {
      c: 12,
      j: false,
    },
    k: null,
  },
};
function pathWay(obj, path) {
  res = path.split(".");
  for (let i = 0; i < res.length; i++) {
    // obj = obj[res[i]];
    if (obj[res[i]] !== undefined) {
      obj = obj?.[res[i]];
    } else {
      return;
    }
  }
  return obj;
}
console.log("ln37 :", pathWay(obj, "a.b.c"));
console.log("ln38 :", pathWay(obj, "a.b"));
console.log("ln39 :", pathWay(obj, "a.b.d"));
console.log("ln40 :", pathWay(obj, "a.c"));
console.log("ln41 :", pathWay(obj, "a.b.c.d"));
console.log("ln42 :", pathWay(obj, "a.b.c.d.e"));
console.log("ln43 :", pathWay(obj, "a.b.j"));
console.log("ln44 :", pathWay(obj, "a.b.j.k"));
console.log("ln45 :", pathWay(obj, "a.k"));
