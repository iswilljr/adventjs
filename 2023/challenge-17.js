function optimizeIntervals(intervals) {
  intervals.sort((a, b) => a[0] - b[0])

  const result = [intervals[0]]
  let lastMergedInterval = result[0]

  for (const currentInterval of intervals) {
    let currentMaxInterval
    const lastMaxInterval = lastMergedInterval[1]
    const isLastMax = +(lastMaxInterval >= currentInterval[0])

    ;[true][isLastMax] ??
      ((currentMaxInterval = currentInterval[1]),
      (lastMergedInterval[1] = [currentMaxInterval, lastMaxInterval][
        +(lastMaxInterval > currentMaxInterval)
      ]))
    ;[true][isLastMax - 1] ??
      ((lastMergedInterval = currentInterval), result.push(currentInterval))
  }

  return result
}
