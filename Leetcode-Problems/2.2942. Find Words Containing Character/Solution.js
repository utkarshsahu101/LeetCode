// 1st Approach - Using built in functions
var findWordsContaining = function (words, x) {
  return words.reduce((acc, curr, index) => {
    if (curr.includes(x)) {
      acc.push(index);
    }
    return acc;
  }, []);
};

// 2nd Approach - Using loop
var findWordsContaining = function (words, x) {
  let ans = [];
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words[i].length; j++) {
      if (x == words[i][j]) {
        ans.push(i);
        break;
      }
    }
  }
  return ans;
};

// TC - O(n*m)
// SC - O(1) - here array is used for save not for computational logic
