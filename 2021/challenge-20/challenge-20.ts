export function pangram(letter: string) {
  const alphabet = 'abcdefghijklmnñopqrstuvwxyz'.split('')
  const lowerLetter = letter.toLowerCase()
  return alphabet.every(letter => lowerLetter.includes(letter))
}
