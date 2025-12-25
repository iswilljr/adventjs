/* eslint-disable @typescript-eslint/no-non-null-assertion */

export function execute(code: string): number {
  let value = 0
  let ip = 0

  const loopEnd: Record<number, number> = {}
  const condEnd: Record<number, number> = {}

  const stackLoop: number[] = []
  const stackCond: number[] = []

  // --- Preprocesamiento ---
  for (let i = 0; i < code.length; i++) {
    if (code[i] === '[') stackLoop.push(i)
    if (code[i] === ']') {
      const open = stackLoop.pop()!
      loopEnd[open] = i
      loopEnd[i] = open
    }

    if (code[i] === '{') stackCond.push(i)
    if (code[i] === '}') {
      const open = stackCond.pop()!
      condEnd[open] = i
    }
  }

  // --- Ejecución ---
  while (ip < code.length) {
    const instr = code[ip]

    value += +(instr === '+')
    value -= +(instr === '-')

    if (instr === '[') {
      if (value === 0) {
        ip = loopEnd[ip]
      }
    } else if (instr === ']') {
      if (value !== 0) {
        ip = loopEnd[ip]
      }
    } else if (instr === '{') {
      if (value === 0) {
        ip = condEnd[ip]
      }
    }

    ip++
  }

  return value
}
