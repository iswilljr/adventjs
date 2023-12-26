function drawClock(time) {
  let clock = [[], [], [], [], [], [], []]
  let full = ['*', '*', '*']
  let open = ['*', ' ', '*']
  let start = ['*', ' ', ' ']
  let end = [' ', ' ', '*']
  let spaces = [' ']
  let middle = ['*']

  let numbers = {
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

  let colon = [spaces, spaces, middle, spaces, middle, spaces, spaces]

  let one = numbers[time[0]]
  let two = numbers[time[1]]
  let four = numbers[time[3]]
  let five = numbers[time[4]]

  for (let [i, item] of clock.entries()) {
    item.push(...one[i])
    item.push(' ')
    item.push(...two[i])
    item.push(' ')
    item.push(...colon[i])
    item.push(' ')
    item.push(...four[i])
    item.push(' ')
    item.push(...five[i])
  }

  return clock
}
