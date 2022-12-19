// score: 170
export function fitsInOneBox(boxes: Box[]) {
  return boxes
    .sort(({ l }, b) => l - b.l)
    .every(({ w, h }, i, { [i - 1]: c }) => i < 1 || (h > c.h && w > c.w))
}

export interface Box {
  w: number
  h: number
  l: number
}
