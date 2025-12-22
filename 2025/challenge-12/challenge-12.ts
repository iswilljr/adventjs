type Result = 0 | 1 | 2

export function elfBattle(elf1: string, elf2: string): Result {
  let elf1points = 3
  let elf2points = 3

  const Attacks: Record<string, Record<string, number>> = {
    A: { A: 1, B: 0, F: 1 },
    B: { A: 0, B: 0, F: 0 },
    F: { A: 2, B: 2, F: 2 },
  }

  const len = Math.min(elf1.length, elf2.length)

  for (let i = 0; i < len; i++) {
    const elf1move = elf1[i]
    const elf2move = elf2[i]

    elf1points -= Attacks[elf2move][elf1move]
    elf2points -= Attacks[elf1move][elf2move]

    if (elf1points === 0 && elf2points === 0) return 0
    if (elf1points <= 0) return 2
    if (elf2points <= 0) return 1
  }

  if (elf1points === elf2points) return 0

  return elf1points < elf2points ? 2 : 1
}
