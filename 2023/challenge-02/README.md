# Challenge #2: We start the factory

In Santa's workshop, the elves have a **gift list** they wish to make and a limited set of materials.

Gifts are strings of text and materials are characters. Your task is to write a function that, given a list of gifts and the available materials, returns a **list of the gifts that can be made**.

A gift can be made if we have all the necessary materials to make it.

```js
const gifts = ['train', 'bear', 'ball']
const materials = 'tronesa'

manufacture(gifts, materials) // ["train", "bear"]

const gifts = ['game', 'puzzle']
const materials = 'jlepuz'

manufacture(gifts, materials) // ["puzzle"]

const gifts = ['book', 'ps5']
const materials = 'psli'

manufacture(gifts, materials) // []
```
