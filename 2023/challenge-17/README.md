# Challenge #17: Optimizing the rental

In Rovaniemi, Finland 🇫🇮, sleds 🛷 are rented by time intervals. **Each interval is represented as an array of two elements**, where the first element is the start of the rental and the second one is the end.

For example, the array `[2, 7]` represents a rental that begins at hour `2` and ends at hour `7`. The problem is that sometimes the intervals overlap with each other, making it confusing to figure out from what time to what time the sled was rented.

We're asked to, in order to simplify the task of calculating the total rental time, **write a function that merges all overlapping intervals** and **returns an array of sorted intervals**:

```js
optimizeIntervals([
  [5, 8],
  [2, 7],
  [3, 4],
]) // [[2, 8]]

optimizeIntervals([
  [1, 3],
  [8, 10],
  [2, 6],
]) // [[1, 6], [8, 10]]

optimizeIntervals([
  [3, 4],
  [1, 2],
  [5, 6],
]) // [[1, 2], [3, 4], [5, 6]]
```

You can assume that **the first element of each interval is always less than or equal to the second element**. But **the intervals are not necessarily sorted.**

The hour numbers can go up to the figure `9999`.
