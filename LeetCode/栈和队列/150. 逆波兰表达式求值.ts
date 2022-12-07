function evalRPN(tokens: string[]): number {
  let nums: number[] = [];
  for (let i = 0; i < tokens.length; i++) {
    // console.log(nums);
    switch (tokens[i]) {
      case '+':
        let sum = nums.pop() + nums.pop();
        nums.push(sum);
        break;
      case '-':
        let minus = nums.pop() - nums.pop();
        nums.push(minus);
        break;
      case '*':
        let product = nums.pop() * nums.pop();
        nums.push(product);
        break;
      case '/':
        let nums1 = nums.pop();
        let nums2 = nums.pop();
        let consult = nums2 / nums1;
        nums.push(parseInt(String(consult)));
        break;
      default:
        nums.push(Number(tokens[i]));
        break;
    }
  }
  return nums[0];
}
let res = evalRPN(["10","6","9","3","+","-11","*","/","*","17","+","5","+"]);
console.log(res);