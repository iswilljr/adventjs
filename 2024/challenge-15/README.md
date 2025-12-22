# Challenge #15: ✏️ Drawing tables

Alabaster Snowball is refining his inventory management skills and needs to draw a text-based table to display the contents of the gifts.

Write a function that receives an array of objects and returns a string with the table represented. Each object in the array represents a row of the table, and the keys of the objects represent the columns.

Keep in mind:

- The columns should adapt to the maximum length of the content in each column, including the headers.
- The headers should start with a capital letter.
- There should be a separator line between the header and the data.
- All rows should be separated by the vertical pipe `|`.
- There should be a space of padding on both sides of the content in each cell.

```javascript
drawTable([
  { name: 'Alice', city: 'London' },
  { name: 'Bob', city: 'Paris' },
  { name: 'Charlie', city: 'New York' },
])
// +---------+----------+
// | Name    | City     |
// +---------+----------+
// | Alice   | London   |
// | Bob     | Paris    |
// | Charlie | New York |
// +---------+----------+

drawTable([
  { gift: 'Doll', quantity: 10 },
  { gift: 'Book', quantity: 5 },
  { gift: 'Music Box', quantity: 1 },
])
// +-----------+----------+
// | Gift      | Quantity |
// +-----------+----------+
// | Doll      | 10       |
// | Book      | 5        |
// | Music Box | 1        |
// +-----------+----------+
```
