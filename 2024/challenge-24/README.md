# Challenge #24: 🪞 Check if trees are magical mirrors

Santa Claus is checking his magic mirrors 🪞. These mirrors show a binary tree, but reflected.

Your task is to write a function that receives two binary trees and returns `true` if they are mirror images of each other, and `false` otherwise.

Two binary trees are mirror images of each other if:

1. Their roots have the same value.
2. The left child of the first tree is a mirror image of the right child of the second tree.
3. The right child of the first tree is a mirror image of the left child of the second tree.

```javascript
const tree1 = {
  value: '🍎',
  left: { value: '🍐' },
  right: { value: '🍊' },
}

const tree2 = {
  value: '🍎',
  left: { value: '🍊' },
  right: { value: '🍐' },
}

isMirror(tree1, tree2) // true

const tree3 = {
  value: '🍎',
  left: { value: '🍐' },
  right: { value: '🍊' },
}

const tree4 = {
  value: '🍎',
  left: { value: '🍐' },
  right: { value: '🍊' },
}

isMirror(tree3, tree4) // false (they are identical, but not mirrored)
```
