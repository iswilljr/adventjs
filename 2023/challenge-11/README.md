# Challenge #11: The studious elves

In Santa's workshop, the elves love puzzles 🧠. This year, they have created a special one: a challenge to form a Christmas palindrome.

**A palindrome is a word that reads the same forwards and backwards.** The elves want to know if it is possible to form a palindrome by making, at most, one exchange of letters.

Create a function `getIndexsForPalindrome` that receives a string and returns:

- **If it is already a palindrome, an empty array.**
- **If it is not possible, null.**
- **If a palindrome can be formed with one change, an array with the two positions (indexes) that must be swapped to create it.**

For example:

```js
getIndexsForPalindrome('anna') // []
getIndexsForPalindrome('abab') // [0, 1]
getIndexsForPalindrome('abac') // null
getIndexsForPalindrome('aaaaaaaa') // []
getIndexsForPalindrome('aaababa') // [1, 3]
getIndexsForPalindrome('caababa') // null
```

If the palindrome can be formed with different swaps, **always return the first one found.**
