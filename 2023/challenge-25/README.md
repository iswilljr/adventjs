# Challenge #25: Calculating distances

**Santa Claus 🎅 has already delivered all the gifts** to the children but they want to see if they can improve for next year.

The elves want to know **how many moves Santa Claus made 🛷** to deliver all the gifts. For this, they give you a map of the city with the location of each child and Santa.

The map is a multiline text string where each character represents a square. The children are represented by numbers from `1` to `9` and Santa Claus by the letter `S`. The rest of the squares are `.`

Santa Claus can only move up, down, left, or right, and each move counts as 1 km. In addition, he always starts at the `S` position and must deliver the gifts in order, from `1` to `9`.

```js
const map = `.....1....
..S.......
..........
....3.....
......2...`

const result = travelDistance(map)
console.log(result) // -> 12 km
/*
From S to kid 1: 4 moves
From kid 1 to 2: 5 moves
From kid 2 to 3: 3 moves
Total: 12 moves
*/

const result2 = travelDistance(`..S.1...`)
console.log(result2) // -> 2
```

Write a `travelDistance` function that receives a map and returns the total distance Santa Claus has traveled according to the position of the children.

Take into account that:

- **The map doesn't have to be square.**
- **The map will always have at least one child.**
- **The map will always have an initial position for Santa Claus.**
- **The numbers of the kids never repeat.**
