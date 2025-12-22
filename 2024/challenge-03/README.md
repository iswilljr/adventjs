# Challenge #3: 🏗️ Organizing the inventory

Santa Claus 🎅 is checking his workshop inventory to prepare gift delivery. The elves have recorded the toys in an array of objects, but the information is a bit disorganized.

You need to help Santa organize the inventory. You will receive an array of objects, where each object represents a toy and has the properties:

- `name`: the name of the toy (string).
- `quantity`: the available quantity of that toy (integer).
- `category`: the category to which the toy belongs (string).

Write a function that processes this array and returns an object that organizes the toys as follows:

- The keys of the object will be the categories of toys.
- The values will be objects that have the toy names as keys and the total quantities of each toy in that category as values.

If there are toys with the same name in the same category, you must sum their quantities.

If the array is empty, the function should return an empty object `{}`.

```javascript
const inventory = [
  { name: 'doll', quantity: 5, category: 'toys' },
  { name: 'car', quantity: 3, category: 'toys' },
  { name: 'ball', quantity: 2, category: 'sports' },
  { name: 'car', quantity: 2, category: 'toys' },
  { name: 'racket', quantity: 4, category: 'sports' },
]

organizeInventory(inventory)

// Expected result:
// {
//   toys: {
//     doll: 5,
//     car: 5
//   },
//   sports: {
//     ball: 2,
//     racket: 4
//   }
// }

const inventory2 = [
  { name: 'book', quantity: 10, category: 'education' },
  { name: 'book', quantity: 5, category: 'education' },
  { name: 'paint', quantity: 3, category: 'art' },
]

organizeInventory(inventory2)

// Expected result:
// {
//   education: {
//     book: 15
//   },
//   art: {
//     paint: 3
//   }
// }
```
