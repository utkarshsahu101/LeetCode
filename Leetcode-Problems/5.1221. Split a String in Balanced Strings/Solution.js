/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
  let first = 0;
  let second = 1;
  let lc = 0;
  let rc = 0;
  const temp = [];
  while (first <= s.length && second <= s.length) {
    if (s[first] != s[second]) {
      if (rc == lc) {
        temp.push(s.substring(first, second + 1));
        rc = 0;
        lc = 0;
        first = second + 1;
        second = first + 1;
      } else {
        second++;
        if (rc > lc) {
          lc++;
        } else {
          rc++;
        }
      }
    } else {
      if (s[first] == "L") {
        second++;
        lc++;
      } else {
        second++;
        rc++;
      }
    }
  }
  return temp.length;
};

// TC - O(n)
// SC - O(n)

// 2nd Approach
var balancedStringSplit = function (s) {
  let lc = 0;
  let rc = 0;
  let balanceCount = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "L") {
      lc++;
    } else {
      rc++;
    }
    if (lc == rc) {
      balanceCount++;
      lc = 0;
      rc = 0;
    }
  }
  return balanceCount;
};
// TC - O(n)
// SC - O(1)

// 3rd Approach
var balancedStringSplit = function (s) {
  let temp = 0;
  let balanceCount = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "L") {
      temp++;
    } else {
      temp--;
    }
    if (temp == 0) {
      balanceCount++;
    }
  }
  return balanceCount;
};

// TC - O(n)
// SC - O(1)

// QUICK NOTE - when balance is there and options of balance are binary then we can use temp plus/minus
