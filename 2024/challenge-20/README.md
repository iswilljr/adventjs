# Challenge #20: 🎁 Find missing and duplicate gifts

Santa Claus 🎅 is reviewing the list of toys he must deliver this Christmas. However, some toys are missing, others are duplicated, and some are extra. He needs your help to solve the chaos.

You will receive two arrays:

- `received`: The list of toys that have been prepared.
- `expected`: The list of toys that should have been prepared.

Your task is to return an object with two properties:

- `missing`: An object where the keys are the names of the missing toys and the values are the quantities that are missing.
- `extra`: An object where the keys are the names of the extra toys and the values are the quantities that are extra.

Keep in mind:

- A toy is **missing** if it is in the `expected` list but not in the `received` list, or if it is in the `expected` list but the quantity prepared is less than expected.
- A toy is **extra** if it is in the `received` list but not in the `expected` list, or if it is in the `received` list but the quantity prepared is more than expected.
- If there are no missing or extra toys, the corresponding properties should be empty objects `{}`.

```javascript
fixGiftList(['puzzle', 'car', 'doll', 'car'], ['car', 'puzzle', 'doll', 'ball'])
// { missing: { ball: 1 }, extra: { car: 1 } }

fixGiftList(
  ['book', 'train', 'kite', 'train'],
  ['train', 'book', 'kite', 'chess'],
)
// { missing: { chess: 1 }, extra: { train: 1 } }

fixGiftList(['bear', 'bear', 'car'], ['bear', 'car', 'puzzle', 'puzzle', 'car'])
// { missing: { puzzle: 2, car: 1 }, extra: { bear: 1 } }

fixGiftList(['car', 'puzzle', 'car'], ['car', 'puzzle', 'car'])
// { missing: {}, extra: {} }
```
