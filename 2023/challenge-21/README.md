# Challenge #21: Binary message

The elves are receiving strange binary messages from Mars 🪐. Are the aliens trying to communicate with them? 👽

**The message that arrives is an array of 0s and 1s**. It seems they have found a pattern… To make sure, they want to **find the longest segment of the string where the number of 0s and 1s is equal.**

```js
findBalancedSegment([1, 1, 0, 1, 1, 0, 1, 1])
//                         |________|
// position of segment:    [2, 5]
// longest balanced
// of 0s and 1s

findBalancedSegment([1, 1, 0])
//                      |__|
//                     [1, 2]

findBalancedSegment([1, 1, 1])
// no balanced segments: []
```

Keep in mind that if there is more than one balanced pattern, **you should return the longest and the first one you find from left to right.**

They say that if they find the pattern, they will be able to send a message back to Mars 🚀. It seems that they have to send it to `https://mars.codes`.
