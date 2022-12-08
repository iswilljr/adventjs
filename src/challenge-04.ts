// score: 170
export function fitsInOneBox(
  boxes: Array<{ w: number; h: number; l: number }>
) {
  return boxes
    .sort((a, b) => a.l - b.l)
    .every((b, i) => i == 0 || (b.w > boxes[i - 1].w && b.h > boxes[i - 1].h))
}
