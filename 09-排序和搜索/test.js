const useState = (() => {
  let res = [];
  return (val) => {
    const setObj = (val) => {
      res.shift();
      res.unshift(val);
    };
    res.push(val, setObj);
    return res;
  };
})();
const arr = useState(1);
console.log(arr);
arr[1](2);
console.log(arr);
