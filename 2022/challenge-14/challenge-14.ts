// score: 400
export function getOptimalPath(path: number[][]) {
  return path.reduceRight((previous, current) => {
    return current.map((value, index) => {
      return value + Math.min(previous[index], previous[index + 1])
    })
  })[0]
}
