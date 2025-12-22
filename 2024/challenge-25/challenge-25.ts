export function execute(code: string): number {
  let score = 0
  for (let i = 0; i <= code.length; i++) {
    if (code[i] === '>') {
      continue
    }

    if (code[i] === '[') {
      score = 0
      i = code.indexOf(']', i)
      continue
    }

    if (code[i] === '{' && score === 0) {
      i = code.indexOf('}', i)
      continue
    }

    score += +(code[i] === '+')
    score -= +(code[i] === '-')
  }

  return score
}
