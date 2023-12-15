# Challenge #15: Autonomous robot

We are programming some **robots** called giftbot 🤖🎁 that autonomously navigate gift warehouses.

We are creating a function to which we pass: the warehouse 🏬 they must navigate and the movements ↔️ they can make.

The warehouse is represented as an **array of text strings**, where:

- `.` means there is a clear path.
- `*` means there is an obstacle.
- `!` is the robot's initial position.

The movements are an **array of text strings**, where:

- `R` moves the robot one position to the right.
- `L` moves the robot one position to the left.
- `U` moves the robot one position upwards.
- `D` moves the robot one position downwards.

It must be taken into account that **the robot cannot overcome obstacles or the warehouse boundaries.**

Given a warehouse and the movements, we need to return the array with the robot's final position.

```js
const store = ['..!....', '...*.*.']

const movements = ['R', 'R', 'D', 'L']
const result = autonomousDrive(store, movements)
console.log(result)
/*
[
  ".......",
  "...*!*."
]
*/

// The last movement is to the left, but it cannot move because there is an obstacle.
```

Keep in mind that the `store` is **an array that can have a number of rows ranging from 1 to 100**, as we have warehouses of all sizes.

Also note that the robot **might end up in its initial position** if it can't move or if it's going around in circles.
