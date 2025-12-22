# Challenge #14: 🦌 Weaving the reno

The reindeer need to be placed in unique stables. You are given two arrays: `reindeer` and `stables`, both containing integers representing their positions.

Your task is to calculate the minimum number of moves to move each reindeer to a unique stable. Each reindeer can move to any stable, and each stable can only accommodate one reindeer.

The number of moves to move a reindeer from position `x` to position `y` is `abs(x - y)`.

```javascript
minMovesToStables([2, 6, 9], [3, 8, 5]) // -> 3
// Explained:
// Reindeer at positions: 2, 6, 9
// Stables at positions: 3, 8, 5
// 2 -> 3 (1 move)
// 6 -> 5 (1 move)
// 9 -> 8 (1 move)
// Total moves: 1 + 1 + 1 = 3

minMovesToStables([1, 1, 3], [1, 8, 4]) // -> 8
// Explained:
// Reindeer at positions: 1, 1, 3
// Stables at positions: 1, 8, 4
// 1 -> 1 (0 moves)
// 1 -> 4 (3 moves)
// 3 -> 8 (5 moves)
// Total moves: 0 + 3 + 5 = 8
```
