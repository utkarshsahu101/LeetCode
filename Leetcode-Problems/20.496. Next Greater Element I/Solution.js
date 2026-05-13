// 1st approach - using map to store the elements of nums1 as key and the elements to the right of that element in nums2 as value and then iterating through the map to find the next greater element for each key and pushing it to answer array
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  const map = new Map();
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      if (nums1[i] === nums2[j]) {
        let lower;
        if (j + 1 < nums2.length) {
          lower = j + 1;
          map.set(nums1[i], nums2.slice(lower, nums2.length));
        } else {
          map.set(nums1[i], [-1]);
        }
      }
    }
  }
  const ans = [];
  for (const [key, val] of map) {
    let flag = false;
    for (let i = 0; i < val.length; i++) {
      if (val[i] > key) {
        flag = val[i];
        break;
      }
    }
    if (flag) {
      ans.push(flag);
    } else {
      ans.push(-1);
    }
  }
  return ans;
};
// TC - O(n^2) for iterating through nums1 and nums2 and then iterating through the map to find the next greater element for each key
// SC - O(n) for map and O(n) for answer array

// 2nd approach - using stack to store the elements of nums2 and map to store the next greater element for each element in nums2 and then iterating through the map to find the next greater element for each element in nums1 and pushing it to answer array
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  let stack = [];
  const map = {};

  map[nums2[nums2.length - 1]] = -1;
  stack.push(nums2[nums2.length - 1]);

  for (let i = nums2.length - 2; i >= 0; i--) {
    while (stack.length) {
      if (nums2[i] > stack[stack.length - 1]) {
        stack.pop();
      } else {
        map[nums2[i]] = stack[stack.length - 1];
        break;
      }
    }
    if (!stack.length) {
      map[nums2[i]] = -1;
    }
    stack.push(nums2[i]);
  }
  const ans = [];
  for (let i = 0; i < nums1.length; i++) {
    ans.push(map[nums1[i]]);
  }
  return ans;
};
// TC - O(n) for iterating through nums2 and then iterating through the map to find the next greater element for each element in nums1 and pushing it to answer array
// SC - O(n) for stack and O(n) for map and O(n) for answer array

// use stacks - for next greater, next smaller, previous greater, previous smaller problems - we can use stacks to store the elements and then iterate through the array to find the next greater/smaller element for each element in the array and push it to answer array
