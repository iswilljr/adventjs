# Challenge #22: Programming language

In Santa's toy factory, **the elves are developing a programming language called Santa.js** 👨‍💻👩‍💻 based on symbols to control their toy machines 🚂.

They have created a simple instruction system and need your help to build a **compiler that interprets these symbols**.

The compiler works with a counter that initially has a value of `0`. **The instructions will modify the value of this counter**.

Elves' language instructions based on symbols:

- **`+`: Increments the counter value by `1`.**
- **`*`: Multiplies the counter value by `2`.**
- **`-`: Subtracts `1` from the counter value.**
- **`%`: Mark a return point. Does not modify the counter.**
- **`<`: Go back once to the last instruction with the % symbol it has seen. If there is no previous %, it does nothing.**
- **`¿`: Starts a conditional block that executes if the counter is greater than 0.**
- **`?`: Ends a conditional block.**

Create a `compile` function that receives a string with the language instructions and returns the result of executing them. Here are some examples:

```js
compile('++*-') // 3
// (1 + 1) * 2 - 1 = 3

compile('++%++<') // 6
// 1 + 1 + 1 + 1 + 1 + 1 = 6

compile('++<--') // 0
// 1 + 1 - 1 - 1 = 0

compile('++¿+?') // 3
// 1 + 1 + 1 = 3

compile('--¿+++?') // -2
// - 1 - 1 = -2
```
