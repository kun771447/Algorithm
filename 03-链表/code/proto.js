const instanceOf = (A, B) => {
  let p = A;
  while (p) {
    if (p === B.prototype) {
      return true;
    }
    p = p.__proto__;
  }
  return false;
};

// console.log(instanceOf([], ""));

var foo = {};
var F = function () {};

Object.prototype.a = "value a";
Function.prototype.b = "value b";

console.log(foo.a);
console.log(foo.b);

console.log(F.a);
console.log(F.b);

const json = {
  a: {
    b: {
      c: 1,
    },
  },
  d: {
    e: 2,
  },
};

const path = ["a", "b", "c"];

let p = json;

path.forEach((k) => {
  p = p[k];
});
console.log(p);
