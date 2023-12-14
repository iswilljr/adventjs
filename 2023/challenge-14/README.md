# Challenge #14: Avoid the alarm

With the rise of social media, Santa Claus **is terrified that children might wake up while he is delivering gifts in their homes**, use their phone to record him and go viral on TikTok.

He wants to avoid this at all costs. Each house on that street has a number of prepared gifts. However, **the houses have a security system connected between adjacent houses**, so **he can't leave gifts in two consecutive houses**, or the alarm will be triggered and alert the children.

Given an **array of non-negative integers gifts** that represents the number of gifts in each house, your task is to help Santa Claus determine the **maximum number of gifts he can deliver** in one night without setting off any alarms.

```js
maxGifts([2, 4, 2]) // 4 (4)
maxGifts([5, 1, 1, 5]) // 10 (5 + 5)
maxGifts([4, 1, 1, 4, 2, 1]) // 9 (4 + 4 + 1)
maxGifts([1, 3, 1, 3, 100]) // 103 (3 + 100)
```
