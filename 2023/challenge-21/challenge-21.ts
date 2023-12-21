export function findBalancedSegment(message: number[]) {
  const segment = [0, 0]

  for (const [i, binary] of message.entries()) {
    let ones = binary
    let zeros = +(binary === 0)
    const currentSegment = [i, i]

    for (const [j, number] of message.slice(i + 1).entries()) {
      ones += number
      zeros += +(number === 0)

      if (ones === zeros) {
        currentSegment[1] = j + i + 1
      }
    }

    if (currentSegment[1] - currentSegment[0] > segment[1] - segment[0]) {
      segment[0] = currentSegment[0]
      segment[1] = currentSegment[1]
    }
  }

  if (segment[1] === 0) return []

  return segment
}
