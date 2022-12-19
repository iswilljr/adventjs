// score: 320
export function selectSleigh(distance: number, sleighs: Sleight[]) {
  let maxW = 20
  return sleighs.reduce<null | string>(
    (acc, s) =>
      s.consumption * distance > maxW
        ? ((maxW = s.consumption * distance), acc)
        : s.name,
    null
  )
}

export interface Sleight {
  name: string
  consumption: number
}
