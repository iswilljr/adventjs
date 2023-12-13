export function checkIsValidCopy(original: string, copy: string) {
  let index = 0
  let isValidCopy = true
  const symbolSequence = '#+:. '

  for (const letter of original) {
    const copyLetter = copy[index++]
    const symbolIndex = symbolSequence.indexOf(letter)

    const symbols = [
      symbolSequence,
      symbolSequence.slice(symbolIndex, symbolSequence.length),
    ][+(symbolIndex !== -1)]

    const isValidLetter = `${letter}${letter.toLowerCase()}${symbols}`.includes(
      copyLetter,
    )

    const isLetterBlankSpace = letter === ' '
    const isCopyLetterBlankSpace = copyLetter === ' '

    const isValidCharacter = [isValidLetter, isCopyLetterBlankSpace][
      +isLetterBlankSpace
    ]

    isValidCopy = [isValidCopy, isValidCharacter][+isValidCopy]
  }

  return isValidCopy
}
