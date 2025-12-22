export function timeUntilTakeOff(
  fromTime: string,
  takeOffTime: string,
): number {
  const fromDate = new Date(
    fromTime
      .replaceAll('*', '/')
      .replaceAll('|', ':')
      .replaceAll('@', ' ')
      .replace(' NP', ''),
  )
  const takeOffDate = new Date(
    takeOffTime
      .replaceAll('*', '/')
      .replaceAll('|', ':')
      .replaceAll('@', ' ')
      .replace(' NP', ''),
  )

  return Math.floor((takeOffDate.getTime() - fromDate.getTime()) / 1000)
}
