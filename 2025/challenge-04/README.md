# Challenge #4: 🧮 Decipher the Santa PIN

The elves have found the **encrypted code** that protects the door to Santa’s workshop 🔐. The PIN has **4 digits**, and it is hidden inside blocks like these:

`[1++][2-][3+][<]`

Write a function that deciphers the PIN from the code. The code is made up of blocks between brackets `[...]` and each block generates one digit of the PIN.

A normal block has the form `[nOP...]`, where `n` is a number (0-9) and after it there can be a list of (optional) operations.

The operations are applied in order to the number and are:

- `+`: adds 1
- `-`: subtracts 1

If an operation produces a result greater than 9, it becomes 9. If it’s less than 0, it becomes 0.

There’s a special block `[<]` which generates a digit equal to **the last digit calculated so far**. So, if the PIN so far is `1`, `[<]` adds another `1`.

If the code contains blocks that are not `[<]` but have less than 4 digits at the end of the process, it returns `null`. But if the code only contains `[<]` and there are no previous digits, it’s also an invalid PIN and `null` is returned.

## Examples

```typescript
decodeSantaPin('[1++][2-][3+][<]') // "3144"
// [1++] -> 1 + 1 + 1 = 3
// [2-] -> 2 - 1 = 1
// [3+] -> 3 + 1 = 4
// [<] -> 4

decodeSantaPin('[1[2+]]') // null
decodeSantaPin('[1-2+]') // null
decodeSantaPin('[1][2][3][4]') // "1234"
decodeSantaPin('[1][2][3]') // null
decodeSantaPin('[<][1][2][3]') // null
```
