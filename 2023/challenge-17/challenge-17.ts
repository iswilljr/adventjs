export function optimizeIntervals(intervals: Array<[number, number]>) {
  intervals.sort((a, b) => a[0] - b[0])

  const result = [intervals[0]]

  for (const currentInterval of intervals) {
    const lastMergedInterval = result[result.length - 1]

    if (currentInterval[0] <= lastMergedInterval[1]) {
      lastMergedInterval[1] = Math.max(
        lastMergedInterval[1],
        currentInterval[1],
      )
    } else {
      result.push(currentInterval)
    }
  }

  return result
}
