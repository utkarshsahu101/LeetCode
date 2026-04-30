/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// 1st approach - Using 2 maps
var isIsomorphic = function (s, t) {
  let ans = common(s, t);
  if (!ans) return ans;
  ans = common(t, s);
  return ans;
};

const common = (s, t) => {
  const sMap = new Map();
  for (let i = 0; i < s.length; i++) {
    if (sMap.has(s[i])) {
      let temp = sMap.get(s[i]);
      if (temp !== t[i]) {
        return false;
      }
    } else {
      sMap.set(s[i], t[i]);
    }
  }
  return true;
};

// TC - O(n)
// SC - O(1)

// 2nd approach - Using 2 maps but in single loop
var isIsomorphic = function (s, t) {
  const s2t = new Map();
  const t2s = new Map();
  for (let i = 0; i < s.length; i++) {
    if (!s2t.has(s[i]) && !t2s.has(t[i])) {
      s2t.set(s[i], t[i]);
      t2s.set(t[i], s[i]);
    } else if (s2t.get(s[i]) !== t[i] || t2s.get(t[i]) !== s[i]) {
      return false;
    }
  }
  return true;
};
// TC - O(n)
// SC - O(1)
