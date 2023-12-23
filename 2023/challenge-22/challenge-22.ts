export function compile(code: string) {
  let counter = 0
  let stack = -1

  for (let i = 0; i < code.length; i++) {
    const instruction = code[i]

    if (instruction === '+') counter++
    else if (instruction === '-') counter--
    else if (instruction === '*') counter *= 2
    else if (instruction === '%') stack = i
    else if (instruction === '<') {
      if (stack !== -1) {
        i = stack
        stack = -1
      }
    } else if (instruction === '¿') {
      if (counter <= 0) {
        i = code.indexOf('?', i)
      }
    }
  }

  return counter
}
