# Challenge #18: 🎄 Lights in line with diagonals

The Christmas lights panel 🎄✨ in the workshop has been a total success. But the elves want to go one step further: now they want to detect whether there is a line of 4 lights of the same color also on a diagonal.

The panel is still a matrix where each cell can be:

- `.` → light off
- `R` → red light
- `G` → green light

Now your function must return `true` if there is a line of 4 lights of the same color that are on and aligned, whether horizontally ↔, vertically ↕ or diagonally ↘↙.

## Examples

```typescript
hasFourInARow([
  ['R', '.', '.', '.'],
  ['.', 'R', '.', '.'],
  ['.', '.', 'R', '.'],
  ['.', '.', '.', 'R'],
]) // true → there are 4 red lights in a ↘ diagonal

hasFourInARow([
  ['.', '.', '.', 'G'],
  ['.', '.', 'G', '.'],
  ['.', 'G', '.', '.'],
  ['G', '.', '.', '.'],
]) // true → there are 4 green lights in a ↙ diagonal

hasFourInARow([
  ['R', 'R', 'R', 'R'],
  ['G', 'G', '.', '.'],
  ['.', '.', '.', '.'],
  ['.', '.', '.', '.'],
]) // true → there are 4 red lights in a horizontal line

hasFourInARow([
  ['R', 'G', 'R'],
  ['G', 'R', 'G'],
  ['G', 'R', 'G'],
]) // false → there are no 4 consecutive lights of the same color
```

Note: The board can be any size.
