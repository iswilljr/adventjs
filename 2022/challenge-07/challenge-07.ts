// score: 400
export function getGiftsToRefill(a1: string[], a2: string[], a3: string[]) {
  return [...new Set(a1.concat(a2, a3))].filter(
    g => (a1.includes(g) as any) + a2.includes(g) + a3.includes(g) === 1,
  )
}
