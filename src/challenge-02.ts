// score: 121
export function countHours(year: number, holidays: string[]) {
  return holidays
    .slice(0, Math.ceil(holidays.length / 2))
    .reduce(
      (hours, holiday, i) => (
        !/0|6/.test(`${new Date(`${holiday}/${year}`).getDay()}`) &&
          (hours += 2),
        !/0|6/.test(
          `${new Date(`${holidays[holidays.length - i - 1]}/${year}`).getDay()}`
        ) && (hours += 2),
        hours
      ),
      0
    )
}
