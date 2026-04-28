/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function (num) {
  let i = 0;
  let r = -1;
  while (i < num.length) {
    if (num[i] % 2 !== 0) {
      r = i;
    }
    i++;
  }
  i = 0;
  let temp = "";
  while (i <= r) {
    temp = temp + num[i];
    i++;
  }
  return temp;
};

// TC - O(n)
// SC - O(n)

// 2nd approach - Using substring
/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function (num) {
  let j = num.length - 1;
  while (j >= 0) {
    if (Number(num[j]) % 2 === 1) {
      return num.substring(0, j + 1);
    }
    --j;
  }
  return "";
};
// TC - O(n)
// SC - O(1)
