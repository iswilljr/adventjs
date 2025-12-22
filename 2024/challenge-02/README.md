# Challenge #2: 🖼️ Framing Names

**Santa Claus** 🎅 wants to frame the names of the good children to decorate his workshop 🖼️, but the frame must follow specific rules. Your task is to help the elves generate this magical frame.

**Rules:**

- Given an array of names, you must create a rectangular frame that contains all of them.
- Each name must be on a line, aligned to the left.
- The frame is built with \* and has a border one line thick.
- The width of the frame automatically adapts to the longest name plus a margin of 1 space on each side.

Example of how it works:

```js
createFrame(['midu', 'madeval', 'educalvolpz'])

// Expected result:
***************
* midu        *
* madeval     *
* educalvolpz *
***************

createFrame(['midu'])

// Expected result:
********
* midu *
********

createFrame(['a', 'bb', 'ccc'])

// Expected result:
*******
* a   *
* bb  *
* ccc *
*******

createFrame(['a', 'bb', 'ccc', 'dddd'])
```
