export function canCarry(capacity: number, trip: number[][]) {
  const path: number[] = []
  const sum = (arr: number[]) => arr.reduce((acc, n) => acc + n, 0)

  return trip.every(([gifts, point, place]) => {
    path[point] = gifts + (path[point] || 0)
    path[place] = -gifts

    const prevPointGifts = path.slice(0, point + 1)

    return gifts <= capacity && sum(prevPointGifts) <= capacity
  })
}
