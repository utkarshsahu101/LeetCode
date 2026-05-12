# 1021. Remove Outermost Parentheses

## Problem

A valid parentheses string is either:

- An empty string `""`
- `"(" + A + ")"`
- `A + B`

Here, `A` and `B` are valid parentheses strings, and `+` represents string concatenation.

For example, `""`, `"()"`, `"(())()"`, and `"(()(()))"` are all valid parentheses strings.

A valid parentheses string `s` is **primitive** if it is nonempty, and there does not exist a way to split it into:

```text
s = A + B
```

where `A` and `B` are nonempty valid parentheses strings.

Given a valid parentheses string `s`, consider its primitive decomposition:

```text
s = P1 + P2 + ... + Pk
```

where each `Pi` is a primitive valid parentheses string.

Return `s` after removing the outermost parentheses of every primitive string in the primitive decomposition of `s`.

## Examples

### Example 1

```text
Input: s = "(()())(())"
Output: "()()()"
```

**Explanation:**  
The input string is `"(()())(())"`, with primitive decomposition `"(()())" + "(())"`.  
After removing the outer parentheses of each part, this becomes `"()()" + "()" = "()()()"`.

### Example 2

```text
Input: s = "(()())(())(()(()))"
Output: "()()()()(())"
```

**Explanation:**  
The input string is `"(()())(())(()(()))"`, with primitive decomposition `"(()())" + "(())" + "(()(()))"`.  
After removing the outer parentheses of each part, this becomes `"()()" + "()" + "()(())" = "()()()()(())"`.

### Example 3

```text
Input: s = "()()"
Output: ""
```

**Explanation:**  
The input string is `"()()"`, with primitive decomposition `"()" + "()"`.  
After removing the outer parentheses of each part, this becomes `"" + "" = ""`.

## Constraints

- `1 <= s.length <= 10^5`
- `s[i]` is either `'('` or `')'`
- `s` is a valid parentheses string
