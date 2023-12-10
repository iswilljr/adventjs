# Challenge #10: Create your owm Christmas tree

What an idea Sam Elfman has had! He wants to offer a service that creates a **customized Christmas tree** 🎄 in a matter of seconds.

To create it, we are given a **string to form the tree** and a **number that indicates its height.**

Each character of the string represents an ornament of the tree, and we use them **cyclically** until we reach the indicated height. **At least, they will always pass us one.**

We must return a multiline **string** with the Christmas tree made with the ornaments, the indicated height **plus a final line with the trunk formed by the character `|`** in the center and, finally, a newline `\n`.

For example, if we receive the string `"123"` and the number `4` as height, we would have to build this tree:

```js
    1
   2 3
  1 2 3
1 2 3 1 2
    |
```

If we receive the string `*@o` and the number `3`, the tree we should return is:

```js
    1
   2 3
  1 2 3
1 2 3 1 2
    |
```

Note:

- **The tree should always be centered, for that reason add blank spaces to the left of each line.**
- **Create spaces only to the left of each line of the tree. Do not leave blank spaces to the right.**
- **The ornaments have a white space between them for separation.**
