# Split a String in Balanced Strings

Balanced strings are those that have an equal quantity of `'L'` and `'R'` characters.

Given a balanced string `s`, split it into some number of substrings such that:

- Each substring is balanced.
- Return the maximum number of balanced strings you can obtain.

## Example 1

```txt
Input: s = "RLRRLLRLRL"
Output: 4
```

### Explanation

`s` can be split into `"RL"`, `"RRLL"`, `"RL"`, `"RL"`, and each substring contains the same number of `'L'` and `'R'`.

## Example 2

```txt
Input: s = "RLRRRLLRLL"
Output: 2
```

### Explanation

`s` can be split into `"RL"` and `"RRRLLRLL"`, and each substring contains the same number of `'L'` and `'R'`.

> Note: `s` cannot be split into `"RL"`, `"RR"`, `"RL"`, `"LR"`, `"LL"` because the 2nd and 5th substrings are not balanced.

## Example 3

```txt
Input: s = "LLLLRRRR"
Output: 1
```

### Explanation

`s` can be split into `"LLLLRRRR"`.

## Constraints

- `2 <= s.length <= 1000`
- `s[i]` is either `'L'` or `'R'`
- `s` is a balanced string

## LeetCode Link

[Split a String in Balanced Strings](https://leetcode.com/problems/split-a-string-in-balanced-strings/description/)
