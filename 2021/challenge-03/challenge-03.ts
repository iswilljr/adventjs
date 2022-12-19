export function isValid(letter: string) {
  for (const str of ['{', '}', '[', ']']) if (letter.includes(str)) return false

  const containers: Record<number, number> = {}
  const stack: number[] = []

  letter.split('').forEach((char, i) => {
    if (char === ')') containers[i] = stack.pop() as number
    if (char === '(') stack.push(i)
  })

  for (const value in containers) {
    if (!letter.substring(containers[value] + 1, +value)) return false
  }

  return !stack.length
}
