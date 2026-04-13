# Find Most Frequent Vowel and Consonant

You are given a string `s` consisting of lowercase English letters (`'a'` to `'z'`).

## Task

- Find the vowel (one of `'a'`, `'e'`, `'i'`, `'o'`, or `'u'`) with the maximum frequency.
- Find the consonant (all other letters excluding vowels) with the maximum frequency.
- Return the sum of the two frequencies.

> Note: If multiple vowels or consonants have the same maximum frequency, you may choose any one of them. If there are no vowels or no consonants in the string, consider their frequency as `0`.

The frequency of a letter `x` is the number of times it occurs in the string.

## Example 1

```txt
Input: s = "successes"
Output: 6
```

### Explanation

- Vowels: `'u'` (frequency `1`), `'e'` (frequency `2`)
- Maximum vowel frequency = `2`
- Consonants: `'s'` (frequency `4`), `'c'` (frequency `2`)
- Maximum consonant frequency = `4`
- Result: `2 + 4 = 6`

## Example 2

```txt
Input: s = "aeiaeia"
Output: 3
```

### Explanation

- Vowels: `'a'` (frequency `3`), `'e'` (frequency `2`), `'i'` (frequency `2`)
- Maximum vowel frequency = `3`
- There are no consonants in `s`, so maximum consonant frequency = `0`
- Result: `3 + 0 = 3`

## Constraints

- `1 <= s.length <= 100`
- `s` consists of lowercase English letters only
