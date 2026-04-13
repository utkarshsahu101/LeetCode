/**
 * @param {string} s
 * @return {number}
 */

// 1st Approach
var maxFreqSum = function (s) {
  const sObj = {};
  for (let i = 0; i < s.length; i++) {
    // O(n)
    if (sObj[s[i]]) sObj[s[i]]++;
    else sObj[s[i]] = 1;
  }
  let keys = Object.keys(sObj);
  const vowels = ["a", "e", "i", "o", "u"];
  let maxVCount = 0;
  let maxCCount = 0;
  for (let i = 0; i < keys.length; i++) {
    // O(1) - only 26 characters
    if (vowels.includes(keys[i]) && maxVCount < sObj[keys[i]]) {
      //O(1) - includes check only 5 vowels
      maxVCount = sObj[keys[i]];
    } else if (!vowels.includes(keys[i]) && maxCCount < sObj[keys[i]]) {
      maxCCount = sObj[keys[i]];
    }
  }
  return maxVCount + maxCCount;
};

// TC - O(n)
// SC - O(1) - only 26 characters in the object

// 2nd Approach
var maxFreqSum = function (s) {
  const sObj = {};
  for (let i = 0; i < s.length; i++) {
    if (sObj[s[i]]) sObj[s[i]]++;
    else sObj[s[i]] = 1;
  }
  const vowels = ["a", "e", "i", "o", "u"];
  let maxVCount = 0;
  let maxCCount = 0;
  for (let i = 0; i < s.length; i++) {
    if (vowels.includes(s[i])) {
      maxVCount = Math.max(maxVCount, sObj[s[i]]);
    } else {
      maxCCount = Math.max(maxCCount, sObj[s[i]]);
    }
  }
  return maxVCount + maxCCount;
};
