# Challenge #6: 🧤 Matching gloves

In Santa's workshop, the elves have found a mountain of magical gloves in complete disarray. Each glove is described by two values:

- `hand`: indicates whether it is a left (L) or right (R) glove
- `color`: the color of the glove (string)

Your task is to help them match gloves: A valid pair is a left glove and a right glove of the same color.

You must return a list with the colors of all the pairs found. Keep in mind that there may be several pairs of the same color. The order is determined by whichever pair can be made first.

## Examples

```typescript
const gloves = [
  { hand: 'L', color: 'red' },
  { hand: 'R', color: 'red' },
  { hand: 'R', color: 'green' },
  { hand: 'L', color: 'blue' },
  { hand: 'L', color: 'green' },
]
matchGloves(gloves) // ["red", "green"]

const gloves2 = [
  { hand: 'L', color: 'gold' },
  { hand: 'R', color: 'gold' },
  { hand: 'L', color: 'gold' },
  { hand: 'L', color: 'gold' },
  { hand: 'R', color: 'gold' },
]
matchGloves(gloves2) // ["gold", "gold"]

const gloves3 = [
  { hand: 'L', color: 'red' },
  { hand: 'R', color: 'green' },
  { hand: 'L', color: 'blue' },
]
matchGloves(gloves3) // []
```
