# Challenge #21: 🎄 Calculate the height of the Christmas tree

Santa Claus is decorating a magic tree 🎄! We need to calculate the height of the tree to know how many decorations we need.

The tree is represented as a binary tree, where each node has a `value`, a `left` child, and a `right` child.

Your task is to write a function that receives the root of the tree and returns its height. The height of a tree is the maximum number of nodes from the root to any leaf.

If the tree is empty (null), its height is 0.

```javascript
const tree = {
  value: '🎁',
  left: {
    value: '🎄',
    left: {
      value: '⭐',
      left: null,
      right: null,
    },
    right: {
      value: '🎅',
      left: null,
      right: null,
    },
  },
  right: {
    value: '❄️',
    left: null,
    right: {
      value: '🦌',
      left: null,
      right: null,
    },
  },
}

treeHeight(tree) // 3
```
