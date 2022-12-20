// score: 121
export function countHours(year: number, holidays: string[]) {
  return holidays.filter(d => new Date(`${year}/${d}`).getDay() % 6).length * 2
}
