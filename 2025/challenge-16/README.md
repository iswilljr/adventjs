# Challenge #16: 🎁 Packing gifts for Santa

Santa wants to distribute gifts in the most efficient way possible 🎁. He has a list of gifts, each with a weight, and a sleigh that can only carry up to a maximum weight.

The gifts are delivered in order, and Santa cannot change that order. When a gift doesn’t fit in the current sleigh, Santa sends the sleigh and prepares a new one.

Your task is to write a function that calculates the minimum number of sleighs needed to deliver all the gifts.

However, keep in mind that sometimes there is a gift that doesn’t fit in the sleigh at all, in which case you must return `null` because that sleigh capacity doesn’t work for that set of gifts.

## Examples

```typescript
packGifts([2, 3, 4, 1], 5) // 2 sleighs
// Sleigh 1: 2 + 3 = 5
// Sleigh 2: 4 + 1 = 5

packGifts([3, 3, 2, 1], 3) // 3 sleighs
// Sleigh 1: 3
// Sleigh 2: 3
// Sleigh 3: 2 + 1 = 3

packGifts([1, 1, 1, 1], 2) // 2 sleighs
// Sleigh 1: 1 + 1 = 2
// Sleigh 2: 1 + 1 = 2

packGifts([5, 6, 1], 5) // null
// There is a gift weighing 6 that doesn’t fit

packGifts([], 10) // 0 sleighs
// There are no gifts to deliver
```
