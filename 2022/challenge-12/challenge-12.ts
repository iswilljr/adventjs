// score: 320
export function selectSleigh(distance: number, sleighs: Sleight[]) {
  let maxW = 20
  return sleighs.reduce<null | string>((acc, s) => {
    if (s.consumption * distance > maxW) {
      maxW = s.consumption * distance
      return acc
    }

    return s.name
  }, null)
}

export interface Sleight {
  name: string
  consumption: number
}
