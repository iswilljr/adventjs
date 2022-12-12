// score: 170
export function fitsInOneBox(
  boxes: Array<{ w: number; h: number; l: number }>
) {
  return boxes
    .sort(({ l }, b) => l - b.l)
    .every(({ w, h }, i, { [i - 1]: c }) => 1 > i || (h > c.h && w > c.w))
}
