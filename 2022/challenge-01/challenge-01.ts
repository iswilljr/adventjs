// score: 131
export function wrapping(gifts: string[]) {
  return gifts.map(g => {
    const w = '*'.repeat(g.length + 2)
    return `${w}\n*${g}*\n${w}`
  })
}
