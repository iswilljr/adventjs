export function getIndexsForPalindrome(word: string) {
  const _letters = [...word]
  const palindrome = word === [..._letters].reverse().join('')

  let initial: number[] | null = [null, []][+palindrome]
  let index = 0
  let aux = 1

  const letters = [_letters, []][+palindrome]
  let auxLetters = letters.slice(1)

  for (const letter of letters) {
    for (const auxLetter of auxLetters) {
      const w = [...letters]
      w[index] = auxLetter
      w[aux] = letter

      const isPalindrome = w.join('') === w.reverse().join('')
      const values = [initial, initial, initial, [index, aux]]

      initial = values[+(initial == null) + +(index !== aux) + +isPalindrome]
      aux++
    }

    index++
    aux = 1
    auxLetters = [[], auxLetters][+(initial == null)]
  }

  return initial
}
