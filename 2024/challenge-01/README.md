# Challenge #1: First gift repeated

**Santa Claus** 🎅 has received a list of magical numbers representing gifts 🎁, but some of them are duplicated and must be removed to avoid confusion. Additionally, **the gifts must be sorted in ascending order before being delivered to the elves.**

Your task is to write a function that receives a list of integers (which may include duplicates) and returns a new list without duplicates, sorted in ascending order.

```js
const gifts1 = [3, 1, 2, 3, 4, 2, 5]
const preparedGifts1 = prepareGifts(gifts1)
console.log(preparedGifts1) // [1, 2, 3, 4, 5]

const gifts2 = [6, 5, 5, 5, 5]
const preparedGifts2 = prepareGifts(gifts2)
console.log(preparedGifts2) // [5, 6]

const gifts3 = []
const preparedGifts3 = prepareGifts(gifts3)
console.log(preparedGifts3) // []
// There are no gifts, the list remains empty
```
