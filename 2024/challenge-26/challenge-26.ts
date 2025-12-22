export function getCompleted(timeWorked: string, totalTime: string): string {
  function timeToSeconds(time: string) {
    const [hours, minutes, seconds] = time.split(':').map(Number)
    return hours * 3600 + minutes * 60 + seconds
  }

  return `${Math.round(
    (timeToSeconds(timeWorked) / timeToSeconds(totalTime)) * 100,
  )}%`
}
