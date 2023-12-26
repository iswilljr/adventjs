function findBalancedSegment(message) {
  const segment = [0, 0]

  const IF = [true]

  let i = 0
  for (let binary of message) {
    let ones = binary
    let zeros = +(binary == 0)
    const currentSegment = [i, i]
    for (let j = i + 1; j < message.length; j++) {
      let n = message[j]
      ones += n
      zeros += n == 0
      IF[+(ones == zeros)] ??= ((currentSegment[1] = j), null)
    }

    let currentSegmentMax = currentSegment[1]
    let count = currentSegmentMax - currentSegment[0]

    IF[+(count > segment[1] - segment[0])] ??=
      ((segment[0] = currentSegment[0]),
      (segment[1] = currentSegmentMax),
      (IF[+(count >= message.length - currentSegmentMax + 1)] ??=
        (message.splice(0), null)),
      null)

    i++
  }

  return [segment, []][+(segment[1] == 0)]
}
