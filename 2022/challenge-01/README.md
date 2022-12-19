# Challenge #1: Automating Christmas gift wrapping!

The elves bought a gift-wrapping machine this year. But it's not programmed! **We need to create an algorithm that helps it in the task**.

The machine receives an array of gifts. Each gift is a `string`. We need the machine to wrap each gift in wrapping paper and place it in an array of wrapped gifts.

The wrapping paper is the `*` symbol, and in order to wrap a gift, you need to place it surrounding the string. For example:

```js
const gifts = ['cat', 'game', 'socks']
const wrapped = wrapping(gifts)

console.log(wrapped)
/* [
  "*****\n*cat*\n*****",
  "******\n*game*\n******",
  "*******\n*socks*\n*******"
] */
```

As you can see, the wrapping paper wraps the string. On top and bottom, so as not to leave any gaps, the corners are also covered with wrapping paper.

**Note**: `\n` represents a line break.

**Watch out!** Make sure you put the right number of `*` symbols to wrap completely the string. But not too many! Just enough to cover the string.

Ah, **and do not mutate the original array!**
