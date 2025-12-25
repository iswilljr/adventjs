# Challenge #24: 🪞 Check if trees are magical mirrors

At the North Pole, the elves have two magical binary trees that generate energy 🌲🌲 to keep the Christmas star ⭐️ shining. However, for them to work properly, the trees must be in perfect sync like mirrors 🪞.

Two binary trees are mirrors if:

- The roots of both trees have the same value.
- Each node of the first tree must have its corresponding node in the opposite position in the second tree.

And the tree is represented with three properties `value`, `left`, and `right`. The latter two display the remaining branches (if any).

Santa needs your help to verify if the trees are synchronized so that the star can keep shining. You must return an array where the first position indicates if the trees are synchronized and the second position returns the value of the root of the first tree.

## Examples

```typescript
const tree1 = { value: '🎄', left: { value: '⭐' }, right: { value: '🎅' } }
const tree2 = { value: '🎄', left: { value: '🎅' }, right: { value: '⭐' } }

isTreesSynchronized(tree1, tree2) // [true, '🎄']
/*
  tree1          tree2
   🎄              🎄
  /  \            /  \
 ⭐   🎅          🎅   ⭐
*/

const tree3 = { value: '🎄', left: { value: '🎅' }, right: { value: '🎁' } }
isTreesSynchronized(tree1, tree3) // [false, '🎄']

const tree4 = { value: '🎄', left: { value: '⭐' }, right: { value: '🎅' } }
isTreesSynchronized(tree1, tree4) // [false, '🎄']

isTreesSynchronized({ value: '🎅' }, { value: '🧑‍🎄' }) // [false, '🎅']
```
