export function drawRace(indices: number[], length: number): string {
  const OPTIONS = 'r~'
  const emptyLane = '~'.repeat(length)
  let raceTrack = ''
  let numLane = 1
  for (const i of indices) {
    const space = ' '.repeat(indices.length - numLane)
    const flag = ` /${numLane++}`
    const lane =
      space +
      emptyLane.slice(0, i) +
      OPTIONS[+(i === 0)] +
      emptyLane.slice(i, -1) +
      flag
    raceTrack += lane + '\n'
  }
  return raceTrack.slice(0, -1)
}
