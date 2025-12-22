# Challenge #22: 🎄 The sleigh maze

Santa Claus 🎅 is testing a new sleigh simulator inside a maze in the workshop. The maze is represented as a matrix of characters.

Your task is to implement a function that determines if it is possible to reach the exit (`E`) starting from the initial position (`S`).

## Maze rules:

- `S`: Santa's initial position.
- `E`: Maze exit.
- `.`: Free path.
- `#`: Wall (blocks the path).
- Allowed movements: up, down, left, and right.
- There is only one `S` and one `E`.

## Result

- Return `true` if it's possible to reach the exit.
- Return `false` if it's not possible.

## Examples

```typescript
canEscape([
  ['S', '.', '#', '.'],
  ['#', '.', '#', '.'],
  ['.', '.', '.', '.'],
  ['#', '#', '#', 'E'],
]) // → true

canEscape([
  ['S', '#', '#'],
  ['.', '#', '.'],
  ['.', '#', 'E'],
]) // → false

canEscape([['S', 'E']]) // → true

canEscape([
  ['S', '.', '.', '.', '.'],
  ['#', '#', '#', '#', '.'],
  ['.', '.', '.', '.', '.'],
  ['.', '#', '#', '#', '#'],
  ['.', '.', '.', '.', 'E'],
]) // → true

canEscape([
  ['S', '.', '.'],
  ['.', '.', '.'],
  ['#', '#', '#'],
  ['.', '.', 'E'],
]) // → false
```

Note: Santa cannot leave the boundaries of the maze.
