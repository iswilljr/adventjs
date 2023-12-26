function compile(code) {
  let counter = 0
  let checkpoint = -1
  let len = code.length

  for (let i = 0; i < len; i++) {
    const instruction = code[i]

    if (instruction === '+') {
      counter++
    } else if (instruction === '-') {
      counter--
    } else if (instruction === '*') {
      counter *= 2
    } else if (instruction === '%') {
      checkpoint = i
    } else if ((instruction === '<') * (checkpoint != -1)) {
      i = checkpoint
      checkpoint = -1
    } else if ((instruction === '¿') * (counter < 1)) {
      i = code.indexOf('?', i)
    }
  }

  return counter
}
