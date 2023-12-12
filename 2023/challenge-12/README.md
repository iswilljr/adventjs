# Challenge #12: Is it a valid copy?

At the North Pole, **they still use paper photocopiers.** The elves use them to copy the letters that children send to Santa so they can send them to all the gift departments.

However, **they are very old and don’t work very well.** Every time they make a copy, the quality of the copy slightly decreases, a phenomenon known as generational loss.

**You need to detect if one letter is a copy of another.** The letters are very long and you can’t read them, but you can compare them with an algorithm.

There’s a big **probability** that a character would degrade in each copy (it doesn't always happen!). And when it does, the rule it follows is:

- **The characters from `A` to `Z` degrade from uppercase to lowercase (`A-Z` ⇒ `a-z`)**
- **Letters degrade in a series of characters in this order: `a-z` ⇒ `#` ⇒ `+` ⇒ `:` ⇒ `.` ⇒ ` `**
- **Characters that are not letters (like digits) do not degrade.**

Knowing this and receiving the original letter and the copy, you must determine if the copy is a copy of the original.

```js
checkIsValidCopy('Santa Claus is coming', 'sa#ta cl#us is comin#') // true
checkIsValidCopy('Santa Claus is coming', 'p#nt: cla#s #s c+min#') // false (for the initial p)
checkIsValidCopy('Santa Claus', 's#+:. c:. s') // true
checkIsValidCopy('Santa Claus', 's#+:.#c:. s') // false (there is a # where it should not be)
```

To understand how photocopies work and their degradation, look at this example:

```js
original:  'Santa Claus'
1st copy:  'santa cla#s'
2nd copy:  'sa#t# cl#+s'
3rd copy:  'sa+## c#+:s'
4th copy:  's#++. c+:.s'
5th copy:  's#+:. c:. s'
```

Therefore `s#+:. c+:++` is a valid copy of `Santa Claus`. And, as you can see, the degradation of the letters does not occur in a specific order, it is random.

Based on the CodeWars challenge Photocopy decay
