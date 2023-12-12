export function checkIsValidCopy(original: string, copy: string) {
  let index = 0
  let isValidCopy = true

  for (const letter of original) {
    const copyLetter = copy[index++]

    const isValidLetter = [
      letter.toLowerCase(),
      '#',
      '+',
      ':',
      '.',
      ' ',
    ].includes(copyLetter)

    const isBlankSpace = +(letter === ' ')
    const isValidCharacter = [isValidLetter, copyLetter === ' '][isBlankSpace]

    isValidCopy = [isValidCopy, isValidCharacter][+isValidCopy]
  }

  return isValidCopy
}
