/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// 1st approach
var isAnagram = function (s, t) {
  let stemp = makeObj(s);
  let ttemp = makeObj(t);
  return isEqual(stemp, ttemp);
};

const makeObj = (s) => {
  let stemp = {};
  for (let i = 0; i < s.length; i++) {
    if (stemp[s[i]]) stemp[s[i]]++;
    else stemp[s[i]] = 1;
  }
  return stemp;
};

const isEqual = (s, t) => {
  return (
    Object.keys(s).length === Object.keys(t).length &&
    Object.keys(s).every((key) => s[key] === t[key])
  );
};

// TC - O(n)
// SC - O(1) since there can be at max 26 characters

// 2nd approach - Using 2 maps
var isAnagram = function (s, t) {
  let sMap = makeMap(s);
  let tMap = makeMap(t);
  return isEqual(sMap, tMap);
};

const makeMap = (s) => {
  const sMap = new Map();
  for (let i = 0; i < s.length; i++) {
    if (sMap.has(s[i])) sMap.set(s[i], sMap.get(s[i]) + 1);
    else sMap.set(s[i], 1);
  }
  return sMap;
};

// TC - O(n)
// SC - O(1)

// 3rd approach - Using 1 map
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  let sMap = makeMap(s);
  for (let i = 0; i < t.length; i++) {
    if (!sMap.has(t[i]) || sMap.get(t[i]) <= 0) {
      return false;
    } else {
      let temp = sMap.get(t[i]);
      sMap.set(t[i], --temp);
    }
  }
  return true;
};

// TC - O(n)
// SC - O(1)

// 3rd approach - Using built in functions
var isAnagram = function (s, t) {
  return s.split("").sort().join("") === t.split("").sort().join("");
};

// TC - O(nlogn) because of sorting
// SC - O(n) because strings are immutable in js
