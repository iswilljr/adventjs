# Challenge #25: 🪄 Execute the magical language

We have already distributed all the gifts! Back at the workshop, preparations for next year are already beginning.

A genius elf is creating a magical programming language 🪄 that will help streamline the delivery of gifts to children in 2025.

Programs always start with the value `0`, and the language is a string where each character represents an instruction:

- `>` Moves to the next instruction
- `+` Increments the current value by 1
- `-` Decrements the current value by 1
- `[` and `]`: Loop. If the current value is `0`, jump to the instruction after `]`. If it is not `0`, go back to the instruction after `[`
- `{` and `}`: Conditional. If the current value is `0`, jump to the instruction after `}`. If it is not `0`, continue to the instruction after `{`

You need to return the value of the program after executing all the instructions.

## Examples

```typescript
execute('+++') // 3
execute('+--') // -1
execute('>+++[-]') // 0
execute('>>>+{++}') // 3
execute('+{[-]+}+') // 2
execute('{+}{+}{+}') // 0
execute('------[+]++') // 2
execute('-[++{-}]+{++++}') // 5
```

Note: A conditional can have a loop inside, and a loop can also have a conditional inside. But two loops or two conditionals are never nested.
