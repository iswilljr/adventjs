export function executeCommands(commands: string[]) {
  const registers: number[] = Array(8).fill(0)

  const actions: Record<
    string,
    (first: number, second: number, command: string) => void
  > = {
    MOV: (fst, snd, command) => {
      const moveValue = command.slice(4).startsWith('V') ? registers[fst] : fst
      registers[snd] = moveValue
    },
    ADD: (fst, snd) =>
      (registers[fst] = (registers[fst] + registers[snd]) % 256),
    DEC: number => (registers[number] = (registers[number] - 1 + 256) % 256),
    INC: number => (registers[number] = (registers[number] + 1) % 256),
  }

  for (let i = 0; i < commands.length; i++) {
    const command = commands[i]
    const [commandName, args] = command.split(' ')
    const values = args.split(',').map(v => +v.replace(/V/g, '')) as [
      number,
      number,
    ]

    if (commandName === 'JMP' && registers[0] !== 0) i = values[0] - 1
    if (commandName !== 'JMP') actions[commandName](...values, command)
  }

  return registers
}
