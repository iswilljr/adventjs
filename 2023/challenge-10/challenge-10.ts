export function createChristmasTree(ornaments: string, height: number) {
  let result = ''
  const spaces = ' '.repeat(height - 1)

  const ornamentsArray = [...ornaments.repeat(height)].join(' ')
  let currentPosition = 0

  for (const index of new Array(height).keys()) {
    const length = index + 1
    const total = currentPosition + length

    result +=
      spaces.slice(index) +
      ornamentsArray.slice(currentPosition * 2, total * 2 - 1) +
      '\n'

    currentPosition = total % ornaments.length
  }

  return result + spaces + '|\n'
}
