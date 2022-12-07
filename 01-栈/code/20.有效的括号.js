var isValid = function(s) {
    if (s == null || s.length % 2 === 1) {
        return false;
    }
    
    const stack = [];

    for(let i = 0; i < s.length; i++) {
        if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
            stack.push(s[i]);
        } else {
            if (s[i] === ')' && stack.pop() !== '(') {
                return false;
            } else if (s[i] === ']' && stack.pop() !== '[') {
                return false;
            } else if (stack.pop() !== '{'){
                return false;
            }
        }
    }

    console.log(stack.length);

    if (stack.length === 0) {
        return true;
    } else {
        return false;
    }
};

console.log(isValid('()'));