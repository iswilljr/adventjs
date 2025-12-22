# Challenge #20: 🎁 Vertical warehouse

In Santa's workshop, the elves are storing gifts 🎁 in a vertical warehouse. The gifts are dropped one by one through a column and start stacking up.

The warehouse is a matrix with `#` gifts and `.` empty spaces. You must create a `dropGifts` function that receives the warehouse state and an array with the columns where the gifts are dropped.

## Falling rules:

- The gift falls through the indicated column from the top.
- It is placed in the lowest empty cell (`.`) of that column.
- If the column is full, the gift is ignored.

## Example

```typescript
dropGifts(
  [
    ['.', '.', '.'],
    ['.', '#', '.'],
    ['#', '#', '.'],
  ],
  [0],
)
/*
[
  ['.', '.', '.'],
  ['#', '#', '.'],
  ['#', '#', '.']
]
*/

dropGifts(
  [
    ['.', '.', '.'],
    ['#', '#', '.'],
    ['#', '#', '#'],
  ],
  [0, 2],
)
/*
[
  ['#', '.', '.'],
  ['#', '#', '#'],
  ['#', '#', '#']
]
*/
```
