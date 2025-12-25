/* eslint-disable @typescript-eslint/no-non-null-assertion */

export function minStepsToDeliver(map: string[][]): number {
  const rows = map.length
  const cols = map[0].length

  const entrancePos = map
    .map(c => c.join(''))
    .join('')
    .indexOf('S')
  const startR = (entrancePos / cols) | 0
  const startC = entrancePos % cols

  const dist = Array.from({ length: rows }, () => Array(cols).fill(-1))

  const queue: Array<[number, number]> = [[startR, startC]]
  dist[startR][startC] = 0

  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ]

  while (queue.length) {
    const [r, c] = queue.shift()!

    for (const [dr, dc] of directions) {
      const nr = r + dr
      const nc = c + dc

      if (
        nr >= 0 &&
        nr < rows &&
        nc >= 0 &&
        nc < cols &&
        map[nr][nc] !== '#' &&
        dist[nr][nc] === -1
      ) {
        dist[nr][nc] = dist[r][c] + 1
        queue.push([nr, nc])
      }
    }
  }

  let total = 0

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (map[r][c] === 'G') {
        if (dist[r][c] === -1) return -1
        total += dist[r][c]
      }
    }
  }

  return total
}
