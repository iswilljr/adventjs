# Challenge #17: 💣 Grinch's bombs

The Grinch has been at it again! This time he has planted bombs in the North Pole gift toy factory.

We need to find where the bombs are to desactivate them. The bombs are in a 2D grid of booleans, where `true` means there is a bomb and `false` means there is no bomb.

Your task is to write a function that receives the grid and returns a new grid of the same size, where each cell contains the number of bombs in its 8 adjacent cells (horizontal, vertical, and diagonal).

```javascript
detectBombs([
  [true, false, false],
  [false, true, false],
  [false, false, false],
])
// [
//   [1, 2, 1],
//   [2, 1, 1],
//   [1, 1, 1]
// ]

detectBombs([
  [true, true],
  [true, true],
])
// [
//   [3, 3],
//   [3, 3]
// ]

detectBombs([
  [true, true],
  [false, false],
])
// [
//   [1, 1],
//   [2, 2]
// ]
```
