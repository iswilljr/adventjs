// score: 320
export function selectSleigh(distance: number, sleighs: Sleight[]) {
  let maxW = 20
  return sleighs.reduce(
    (acc, s) =>
      s.consumption * distance > maxW
        ? ((maxW = s.consumption * distance), acc)
        : s.name,
    null as null | string
  )
}

export interface Sleight {
  name: string
  consumption: number
}
