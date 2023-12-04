export function decode(message: string) {
  const regexp = /\(([^()]*)\)/g
  const replacer = (_: string, r: string) => [...r].reverse().join('')
  return message.replace(regexp, replacer).replace(regexp, replacer)
}
