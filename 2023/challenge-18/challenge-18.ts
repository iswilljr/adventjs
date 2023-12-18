export function drawClock(time: string) {
  const clock: string[][] = [[], [], [], [], [], [], []]

  const full = ['*', '*', '*']
  const open = ['*', ' ', '*']
  const start = ['*', ' ', ' ']
  const end = [' ', ' ', '*']
  const spaces = [' ', ' ', ' ']
  const middle = [' ', '*', ' ']

  const numbers: Record<string, string[][]> = {
    0: [full, open, open, open, open, open, full],
    1: [end, end, end, end, end, end, end],
    2: [full, end, end, full, start, start, full],
    3: [full, end, end, full, end, end, full],
    4: [open, open, open, full, end, end, end],
    5: [full, start, start, full, end, end, full],
    6: [full, start, start, full, open, open, full],
    7: [full, end, end, end, end, end, end],
    8: [full, open, open, full, open, open, full],
    9: [full, open, open, full, end, end, full],
  }

  const colon = [spaces, spaces, middle, spaces, middle, spaces, spaces]

  const one = numbers[time[0]]
  const two = numbers[time[1]]
  const four = numbers[time[3]]
  const five = numbers[time[4]]

  let i = 0

  for (const item of clock) {
    item.push(
      ...one[i],
      ' ',
      ...two[i],
      ...colon[i],
      ...four[i],
      ' ',
      ...five[i],
    )

    i++
  }

  return clock
}
