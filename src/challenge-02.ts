// score: 121
export function countHours(year: number, holidays: string[]) {
  return holidays.reduce(
    (hours, holiday) =>
      /0|6/.test(`${new Date(`${holiday}/${year}`).getDay()}`)
        ? hours
        : hours + 2,
    0
  )
}
