/* eslint-disable @typescript-eslint/no-non-null-assertion */

export function distributeWeight(weight: number): string {
  const boxRepresentations: Record<number, string[]> = {
    1: [' _ ', '|_|'],
    2: [' ___ ', '|___|'],
    5: [' _____ ', '|     |', '|_____|'],
    10: [' _________ ', '|         |', '|_________|'],
  }

  const r: string[] = []

  while (weight > 0) {
    const num = Object.keys(boxRepresentations)
      .map(Number)
      .toReversed()
      .find(x => x <= weight)

    const rn = (r[0] ?? '').split('')
    for (let i = 0; i < boxRepresentations[num!].at(-1)!.length; i++) {
      rn[i] = boxRepresentations[num!].at(-1)![i]
    }
    r[0] = rn.join('').trim()
    r.unshift(...boxRepresentations[num!].slice(0, -1))

    weight -= num!
  }

  return r.join('\n')
}
