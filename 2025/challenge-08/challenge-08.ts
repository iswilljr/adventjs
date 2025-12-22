export function findUniqueToy(toy: string): string {
  const map = new Map()

  for (const index of toy.split('').keys()) {
    const ll = toy[index].toLowerCase()
    map.set(ll, { unique: !map.has(ll), index })
  }

  for (const { unique, index } of map.values()) {
    if (unique) return toy[index]
  }

  return ''
}
