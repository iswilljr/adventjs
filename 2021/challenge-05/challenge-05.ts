export function daysToXmas(date: Date) {
  const getDays = (time: number) => Math.floor(time / 1000 / 60 / 60 / 24)

  const xmasDays = getDays(new Date('Dec 25, 2021').getTime())
  const dateDaya = getDays((date.setHours(0), date.getTime()))

  return xmasDays - dateDaya
}
