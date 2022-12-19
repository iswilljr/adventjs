// score: 360
export function getFilesToBackup(
  lastBackup: number,
  changes: Array<[number, number]>
) {
  return [
    ...new Set(
      changes.filter(([, time]) => time > lastBackup).map(([id]) => id)
    ),
  ].sort((a, b) => a - b)
}
