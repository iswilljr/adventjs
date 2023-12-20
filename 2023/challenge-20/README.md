# Challenge #20: Distribute the weight

We're having trouble loading the toys onto Santa's 🎅 sleigh 🛷! It seems like the toy distribution isn't quite right and **the sleigh can't take off**. Could you help us solve this problem?

To solve it we've decided to use a method similar to that of an image filter. At each position, we're going to **distribute the load of the toys based on the number of toys in the neighboring positions.**

A neighboring position is one that is above, below, to the left, or to the right of the current position. Therefore, **positions diagonally are not considered neighbors.**

Write a function `distributeGifts` that receives a matrix of numbers representing the toys in the sleigh and **returns another matrix of the same size and number of elements** but where each element is the average of its original value and **the values of its neighbors.**

Bear in mind that there are positions that are `null` and that won't count for the average as a neighbor **but will indeed be replaced by the average value of its neighbors.**

For example, let's look at a complete example:

<!-- prettier-ignore -->
```js
const input = [
  [4, 5, 1],
  [6, null, 3],
  [8, null, 4]
]

distributeGifts(input)

// Step by step result of the first few calculations:

// At position [0][0] we have the value 4
// Its neighbors are the values 5 and 6
// (4 + 5 + 6) / 3 = 5

// At position [0][1] we have the value 5
// Its neighbors are the values 4 and 1
// (5 + 4 + 1) / 3 = 3.33
// Math.round(3.33) = 3

// At position [0][2] we have the value 1
// Its neighbors are the values 5 and 3
// (1 + 5 + 3) / 3 = 3

// At position [1][0] we have the value 6
// Its neighbors are the values 4, 8
// (6 + 4 + 8 ) / 3 = 6

// At position [1][1] we have the value null
// Its neighbors are the values 5, 6 and 3
// (5 + 6 + 3) / 3 = 4.66
// Math.round(4.66) = 5
// ... and so on with the rest of the positions
[
  [(4 + 5 + 6) / 3, (5 + 4 + 1) / 3, (1 + 5 + 3) / 3],
  [(6 + 4 + 8) / 3, (5 + 6 + 3) / 3, (3 + 1 + 4) / 3],
  [(8 + 6) / 2, (8 + 4) / 2, (4 + 3) / 2]
]

// Final result after rounding with Math.round()
[
  [5, 3, 3],
  [6, 5, 3],
  [7, 6, 4]
]
```

**Please note:**

- **Matrices are not always square, they can have more rows than columns or vice versa.**
- **To round off the values, you should use the Math.round() function from JavaScript.**
- **Null values are not counted for calculating the average but they are replaced by the average value of their neighbors.**
- **The edges of the matrix have fewer possible neighbors than the rest of the positions.**
- **They are always positive integers.**
