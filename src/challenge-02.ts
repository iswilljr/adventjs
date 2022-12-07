// score: 121
export function countHours(year: number, holidays: string[]) {
  return holidays.filter((holiday) => ![0, 6].includes(new Date(`${holiday}/${year}`).getDay())).length * 2;
}
