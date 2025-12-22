# Challenge #15: ✏️ Drawing tables

ChatGPT has arrived at the North Pole and the elf Sam Elfman is working on a gift and children management application.

To improve the presentation, he wants to create a `drawTable` function that receives an array of objects and turns it into a text table.

The drawn table must have:

- A header with column letters (A, B, C…).
- The content of the table is the values of the objects.
- The values must be left-aligned.
- The fields always leave one space on the left.
- The fields leave on the right the space needed to align the box.

The function receives a second parameter `sortBy` that indicates the name of the field by which the rows must be sorted. The order will be ascending alphabetical if the values are strings and ascending numeric if they are numbers.

## Example

```typescript
drawTable(
  [
    { name: 'Charlie', city: 'New York' },
    { name: 'Alice', city: 'London' },
    { name: 'Bob', city: 'Paris' },
  ],
  'name',
)
/*
+---------+----------+
| A       | B        |
+---------+----------+
| Alice   | London   |
| Bob     | Paris    |
| Charlie | New York |
+---------+----------+
*/

drawTable(
  [
    { gift: 'Book', quantity: 5 },
    { gift: 'Music CD', quantity: 1 },
    { gift: 'Doll', quantity: 10 },
  ],
  'quantity',
)
/*
+----------+----+
| A        | B  |
+----------+----+
| Music CD | 1  |
| Book     | 5  |
| Doll     | 10 |
+----------+----+
*/
```
