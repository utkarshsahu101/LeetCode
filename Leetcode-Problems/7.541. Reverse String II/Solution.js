/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
  s = s.split("");

  for (let x = 0; x < s.length; x = x + 2 * k) {
    let n = k;
    let mid = x + Math.floor(n / 2);
    for (let i = x; i < mid; i++) {
      // due to fixed k -> O(1)
      let temp = s[i];
      s[i] = s[n - 1 - i];
      s[n - 1 - i] = temp;
    }
  }

  return s.join("");
};

// TC - O(n)
// SC - O(n) (where language does not allows string mutability otherewise O(1))
