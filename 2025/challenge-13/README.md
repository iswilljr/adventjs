# Challenge #13: 🏭 The assembly line

Simulate the path of a gift inside a factory and return how it ends. To do this, you must create a function `runFactory(factory)`.

`factory` is a `string[]` where each cell can be:

- `>`, `<`, `^`, `v`: movements
- `.`: correct exit

Keep in mind that all rows have the same length and that there will be no other symbols.
The gift always starts at position `(0,0)` (top left). At each step it reads the current cell and moves according to the direction. If it reaches a cell with a dot (`.`) it means it has correctly exited the factory.

## Result

Return one of these values:

- `completed` if it reaches a `.`
- `loop` if it visits a position twice
- `broken` if it goes outside the board

## Examples

```typescript
runFactory(['>>.']) // 'completed'
runFactory(['>>>']) // 'broken'
runFactory(['>><']) // 'loop'
runFactory(['>>v', '..<']) // 'completed'
runFactory(['>>v', '<<<']) // 'broken'
runFactory(['>v.', '^..']) // 'completed'
runFactory(['v.', '^.']) // 'loop'
```
