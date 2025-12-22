# Challenge #10: 📨 Depth of Christmas magic

At the North Pole, Santa Claus is reviewing the magical letters 📩✨ he receives from children all over the world. These letters use an ancient Christmas language in which the brackets `[` and `]` represent the intensity of the wish.

The deeper the nesting of the brackets, the stronger the wish. Your mission is to find out the maximum depth at which the `[]` are nested.

But be careful! Some letters may be poorly written. If the brackets are not properly balanced (if one closes before it opens, there are extra closing brackets, or closing brackets are missing), the letter is invalid and you must return `-1`.

## Examples

```typescript
maxDepth('[]') // -> 1
maxDepth('()') // -> 0
maxDepth('[][') // -> -1
maxDepth('[[[[]]][]]') // -> 4
maxDepth('[]][[]') // -> -1
```
