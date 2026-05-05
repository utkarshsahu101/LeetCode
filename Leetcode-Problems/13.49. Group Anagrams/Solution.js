/**
 * @param {string[]} strs
 * @return {string[][]}
 */
// 1st approach - Using in built functions
var groupAnagrams = function (strs) {
  let temp = new Map();
  for (let i = 0; i < strs.length; i++) {
    let sortI = strs[i].split("").sort().join("");
    if (temp.has(sortI)) {
      temp.get(sortI).push(strs[i]);
    } else {
      temp.set(sortI, [strs[i]]);
    }
  }
  let ans = [];
  for (let [key, value] of temp) {
    ans.push(value);
  }
  return ans;
};
// TC - O(n * k log k) where n is the number of strings and k is the length of the longest string
// SC - O(n * k) since in worst case all strings can be different and we are storing all of them in the map

// 2nd approach - Using 1 map and creating key using frequency of characters
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const oMap = new Map();
  for (let i = 0; i < strs.length; i++) {
    let tempMap = createMap(strs[i]);

    let key = createKey(tempMap);

    if (oMap.has(key)) {
      oMap.get(key).push(strs[i]);
    } else {
      oMap.set(key, [strs[i]]);
    }
  }

  let ans = [];
  for (let [key, val] of oMap) {
    ans.push(val);
  }
  return ans;
};

const createKey = (map) => {
  let key = "";
  let temp = "a";
  let i = temp.charCodeAt(0);
  while (i <= "z".charCodeAt(0)) {
    key = key + String.fromCharCode(i) + map.get(String.fromCharCode(i)) ?? 0;
    i++;
  }
  return key;
};

const createMap = (s) => {
  const map = new Map();
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      map.set(s[i], map.get(s[i]) + 1);
    } else {
      map.set(s[i], 1);
    }
  }
  return map;
};

// TC - O(n * k) where n is the number of strings and k is the length of the longest string
// SC - O(n * k) since in worst case all strings can be different and we are storing all of them in the map

// 3rd approach - Using 1 map and creating key using frequency of characters but using array instead of map to store frequency
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let map = {};
  for (let i = 0; i < strs.length; i++) {
    let freqArr = new Array(26).fill(0);
    let s = strs[i];

    for (let j = 0; j < s.length; j++) {
      let index = s[j].charCodeAt() - "a".charCodeAt();
      ++freqArr[index];
    }

    let key = "";
    for (let k = 0; k < 26; k++) {
      key = key + String.fromCharCode(k + 97) + freqArr[k];
    }

    if (map[key]) {
      map[key].push(s);
    } else {
      map[key] = [s];
    }
  }

  return [...Object.values(map)];
};
// TC - O(n * k) where n is the number of strings and k is the length of the longest string
// SC - O(n * k) since in worst case all strings can be different and we are storing all of them in the map
