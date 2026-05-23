/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  if (x < 2) return x;
  let l = 2;
  let r = Math.floor(x / 2);
  console.log(l, r);
  while (l <= r) {
    let m = l + Math.floor((r - l) / 2);
    console.log(l, r, m);
    if (x < m ** 2) {
      r = m - 1;
    }
    if (x > m ** 2) {
      l = m + 1;
    }
    if (x == m ** 2) {
      return m;
    }
  }
  return r;
};
// TC - O(log n) for binary search
// SC - O(1) for using constant space to store the left, right and middle pointers
