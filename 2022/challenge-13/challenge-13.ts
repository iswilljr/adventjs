// score: 360
export function getFilesToBackup(
  lastBackup: number,
  changes: Array<[number, number]>,
) {
  const ids = changes.filter(([, time]) => time > lastBackup).map(([id]) => id)
  const uniqueIds = [...new Set(ids)]

  return uniqueIds.sort((a, b) => a - b)
}
