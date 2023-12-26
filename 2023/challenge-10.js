function createChristmasTree(ornaments, height) {
  let index = 0
  let result = ''
  let currentPosition = 0
  const spaces = ' '.repeat(height - 1)
  const ornamentsArray = [...ornaments.repeat(height)].join(' ')

  for (const _i of ornamentsArray.slice(0, height)) {
    const total = currentPosition + index + 1

    result +=
      spaces.slice(index++) +
      ornamentsArray.slice(currentPosition * 2, total * 2 - 1) +
      '\n'

    currentPosition = total % ornaments.length
  }

  return result + spaces + '|\n'
}
