/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  let stack = [];

  const map = {
    "+": (a, b) => b + a,
    "-": (a, b) => b - a,
    "*": (a, b) => b * a,
    "/": (a, b) => Math.trunc(b / a),
  };

  for (let i = 0; i < tokens.length; i++) {
    if (map[tokens[i]]) {
      let last1 = stack.pop();
      let last2 = stack.pop();
      // stack.push(Math.trunc(eval(`${last2} ${tokens[i]} ${last1}`)))
      let ans = map[tokens[i]](Number(last1), Number(last2));
      stack.push(ans);
    } else {
      stack.push(tokens[i]);
    }
  }
  return Number(stack.pop());
};
// TC - O(n) where n is the number of tokens
// SC - O(n) for stack
