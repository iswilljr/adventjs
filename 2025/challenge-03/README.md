# Challenge #3: 👶 Help the intern

In Santa’s workshop there’s an intern elf who is learning to wrap gifts 🎁.

They’ve asked the elf to wrap boxes using only text… and they do it **more or less** correctly.

They are given two parameters:

- `size`: the size of the square gift
- `symbol`: the character the elf uses to make the border

The gift must meet these requirements:

- It must be a `size x size` square.
- The inside is always empty (filled with spaces).
- If `size < 2`, return an empty string.
- The final result must be a string with newline characters `\n`.

## Examples

```typescript
drawGift(4, '+')
/*
++++
+  +
+  +
++++
*/

drawGift(5, '*')
/*
 *****
 *   *
 *   *
 *   *
 *****
 */

drawGift(1, '^')
// ''
```
