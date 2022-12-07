var isValid = function (s) {
  if (s == null || s.length % 2 === 1) {
    return false;
  }

  const stack = [];

  const map = new Map();
  map.set("(", ")");
  map.set("[", "]");
  map.set("{", "}");

  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      stack.push(s[i]);
    } else {
      if (map.get(stack.pop()) !== s[i]) {
        return false;
      }
    }
  }

  if (stack.length === 0) {
    return true;
  } else {
    return false;
  }
};
