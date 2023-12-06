export function maxDistance(movements: string) {
  let maxLeft = 0
  let maxRight = 0

  for (const movement of movements) {
    const rightPoint = +(movement === '>')
    const leftPoint = +(movement === '<')
    const extraPoint = +(movement === '*')

    maxRight += rightPoint - leftPoint + extraPoint
    maxLeft += leftPoint - rightPoint + extraPoint
  }

  return Math.max(maxLeft, maxRight)
}
