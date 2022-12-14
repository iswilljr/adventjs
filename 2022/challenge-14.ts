export function getOptimalPath(path: number[][]) {
  return path.reduceRight((previous, current) =>
    current.map(
      (value, index) => value + Math.min(previous[index], previous[index + 1])
    )
  )[0]
}
