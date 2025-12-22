export function compile(instructions: string[]): number | undefined {
  const compiler: Record<string, number> = {}

  for (let i = 0; i < instructions.length; i++) {
    const [command, x, y] = instructions[i].split(' ')
    const value = compiler[x] || +x || 0

    compiler[y] ??= 0
    compiler[x] ??= 0

    compiler[x] += +(command === 'INC')
    compiler[x] -= +(command === 'DEC')

    if (command === 'MOV') {
      compiler[y] += value
    }

    if (command === 'JMP' && value === 0) {
      i = +y - 1
    }
  }

  console.log(compiler)

  return compiler.A
}
