export function calculateTime(deliveries: string[]) {
  let seconds = -(7 * 3600)

  for (const delivery of deliveries) {
    const [hours, minutes, secs] = delivery.split(':')
    seconds += +hours * 3600 + +minutes * 60 + +secs
  }

  const sign = seconds < 0 ? '-' : ''

  seconds = Math.abs(seconds)

  const hours = Math.floor(seconds / 3600)
    .toString()
    .padStart(2, '0')

  seconds %= 3600

  const minutes = Math.floor(seconds / 60)
    .toString()
    .padStart(2, '0')

  seconds %= 60

  const secs = seconds.toString().padStart(2, '0')

  return `${sign}${hours}:${minutes}:${secs}`
}
