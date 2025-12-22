# Challenge #9: 🦌 The reno robot aspirator

The elves have built a robot vacuum reindeer 🦌 (`@`) to tidy up the workshop a bit before Christmas.

The reindeer moves on a board to pick things up off the floor (`*`) and must avoid obstacles (`#`).

You will receive two parameters:

- `board`: a string that represents the board.
- `moves`: a string with the movements: 'L' (left), 'R' (right), 'U' (up), 'D' (down).

Movement rules:

- If the reindeer picks something up off the floor (`*`) during the moves → return `'success'`.
- If the reindeer goes off the board or crashes into an obstacle (`#`) → return `'crash'`.
- If the reindeer neither picks anything up nor crashes → return `'fail'`.

Keep in mind that if the reindeer picks something up off the floor, it is already `'success'`, regardless of whether in later moves it crashes into an obstacle or goes off the board.

Important: Keep in mind that in the board the first and last lines are blank and must be discarded.

## Example

```typescript
const board = `
  .....
  .*#.*
  .@...
  .....
`

moveReno(board, 'D') // ➞ 'fail'
moveReno(board, 'U') // ➞ 'success'
moveReno(board, 'RU') // ➞ 'crash'
moveReno(board, 'RRRUU') // ➞ 'success'
moveReno(board, 'DD') // ➞ 'crash'
```
