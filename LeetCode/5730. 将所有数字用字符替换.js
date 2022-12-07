/**
 * @param {string} s
 * @return {string}
 */
var replaceDigits = function (s) {
  let str = "";
  let english = "abcdefghijklmnopqrstuvwxyz";
  for (let i = 0; i < s.length; i++) {
    if (s[i] >= 0 && s[i] <= 9) {
      str += english[s[i - 1].charCodeAt() - 97 + Number(s[i])];
    } else {
      str += s[i];
    }
  }
  return str;
};

console.log(replaceDigits("a1b2c3d4e"));
console.log(replaceDigits("a1c1e1"));
