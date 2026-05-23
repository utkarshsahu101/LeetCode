/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
  let l = 1,
    r = n;
  while (l <= r) {
    let mid = l + Math.floor((r - l) / 2);
    let res = guess(mid);
    if (res == 1) l = mid + 1;
    else if (res == -1) r = mid - 1;
    else return mid;
  }
};
// TC - O(log n) for binary search
// SC - O(1) for using constant space to store the left, right and middle pointers
