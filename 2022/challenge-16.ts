// score: 300
export function fixLetter(letter: string) {
  return letter
    .trim()
    .replace(/([.,!])(.*)/g, '$1 $2')
    .replace(/([\s.,!?])(?=\1)/g, '')
    .replace(/\s+([.,!?])/g, '$1')
    .replace(/\b([.?!] \w)|(^\w)/g, str => str.toUpperCase())
    .replace(/^.*\w$/, str => `${str}.`)
    .replace(/santa claus/gi, 'Santa Claus')
}
