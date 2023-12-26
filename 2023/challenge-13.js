function calculateTime(deliveries) {
  let seconds = -7 * 3600
  const padStart = ['', '0']

  for (const delivery of deliveries) {
    seconds +=
      +delivery.slice(0, 2) * 3600 +
      +delivery.slice(3, 5) * 60 +
      +delivery.slice(6, 8)
  }

  const isNegative = +(seconds < 0)
  const sign = ['', '-'][isNegative]

  seconds = [seconds, -seconds][isNegative]

  const hours = (seconds / 3600) | 0
  const minutes = ((seconds % 3600) / 60) | 0

  seconds %= 60

  return (
    sign +
    padStart[+(hours < 9)] +
    hours +
    ':' +
    padStart[+(minutes < 9)] +
    minutes +
    ':' +
    padStart[+(seconds < 9)] +
    seconds
  )
}
