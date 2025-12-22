# Challenge #21: 🤖 The cleaning robot

Santa’s vertical warehouse has been modernized! Now, in addition to stacking gifts, there’s a robot 🤖 in the warehouse that picks up the gifts if there is a complete row.

The warehouse is a matrix with `#` gifts and `.` empty spaces. You must create a `clearGifts` function that receives the state of the warehouse and an array with the columns where the gifts are dropped.

## Drop rules:

- The gift falls down the indicated column from the top.
- It is placed in the lowest empty cell (`.`) of that column.
- If the column is full, the gift is ignored.

## Cleaning robot rule:

- If when placing a gift, a row becomes completely filled with gifts (`#`), that row disappears.
- All the rows that were above the removed row move down one position.
- When a row is removed, a new empty row (`.`) appears at the top to keep the warehouse size.

## Examples

```typescript
clearGifts(
  [
    ['.', '.', '.'],
    ['.', '.', '.'],
    ['#', '.', '#'],
  ],
  [1],
)
/*
1. The gift falls in column 1
2. Row 2 becomes [# # #].
3. Row 2 is complete, the robot clears it.
4. Result: [ ['.', '.', '.'], ['.', '.', '.'], ['.', '.', '.'] ]
*/

clearGifts(
  [
    ['.', '.', '#'],
    ['#', '.', '#'],
    ['#', '.', '#'],
  ],
  [0, 1, 2],
)
/*
1. The gift falls in column 0
2. The gift falls in column 1 -> Row 2 becomes [# # #] and is cleared.
3. The gift falls in column 2
Result:
[
  ['.', '.', '#'],
  ['#', '.', '#'],
  ['#', '.', '#']
]
*/
```
