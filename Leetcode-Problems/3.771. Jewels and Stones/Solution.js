/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */

// 1st Approach
var numJewelsInStones = function (jewels, stones) {
  let count = 0;
  for (let i = 0; i < stones.length; i++) {
    for (let j = 0; j < jewels.length; j++) {
      if (jewels[j] === stones[i]) {
        count++;
        break;
      }
    }
  }
  return count;
};

// TC - O(n*m)
// SC - O(1)

// 2nd Approach
/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
  let count = 0;
  const jSet = new Set();
  for (let i = 0; i < jewels.length; i++) {
    jSet.add(jewels[i]);
  }
  for (let i = 0; i < stones.length; i++) {
    if (jSet.has(stones[i])) {
      // O(1)
      count++;
    }
  }
  return count;
};

// TC - O(n)
// SC - O(1)
