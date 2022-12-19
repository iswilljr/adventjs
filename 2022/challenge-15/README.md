# Challenge #15: Decorating the Christmas tree

A couple is putting up the Christmas tree. The boy loves Christmas decorations and wants it to be perfectly balanced. He has three types of decorations:

- Colored balls: `B`
- Small gifts: `R`
- Pine cones: `P`

The Christmas tree is a triangle that must be generated. They already have the base mounted, which would be the first row, and from there they have to **place the decorations upwards following a formula**.

```js
Place on top :    P     R     B     P
If below is  :   P P   B P   R P   B R
```

The combinations are also reversed. For example, if below is `B P`, above is `R`. But it will also be `R` if below is `P B`. Also if below you have repeated the letter, above you use the same letter. For example: if below is `B B`, above is `B`.

With these rules, we could see the tree that we would generate with the base `B P R P`:

```js
   R
  P B
 R B B
B P R P
```

Write a program that receives the string `B P R P` and returns an array with the representation of the tree.

```js
decorateTree('B P R P')
// [
// 'R',
// 'P B',
// 'R B B',
// 'B P R P'
// ]

decorateTree('B B') // ['B', 'B B']
```

Keep in mind that:

- The program always receives the text string that represents the base of the tree.
- The tree must be generated completely, that is, the base and the rows that are generated from it, until the top.
- You have to follow the formula to know which decoration to place in each position.
