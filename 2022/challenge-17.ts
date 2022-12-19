export function carryGifts(gifts: string[], maxWeight: number) {
  return gifts
    .filter(g => g.length <= maxWeight)
    .reduce<string[]>(
      (b, g) => (
        b.length > 0 &&
        (b.at(-1) as string).replace(/\s/g, '').length + g.length <= maxWeight
          ? (b[b.length - 1] += ` ${g}`)
          : b.push(g),
        b
      ),
      []
    )
}
