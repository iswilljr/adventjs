// score: 121
export function countHours(year: number, holidays: string[]) {
  const daysOfWeek = holidays.filter(holiday => {
    const isDayOfWeek = new Date(`${year}/${holiday}`).getDay() % 6 !== 0
    return isDayOfWeek
  })

  return daysOfWeek.length * 2
}
