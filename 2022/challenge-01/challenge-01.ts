// score: 131
export function wrapping(gifts: string[]) {
  return gifts.map(g => {
    const wrapper = '*'.repeat(g.length + 2)
    return `${wrapper}\n*${g}*\n${wrapper}`
  })
}
