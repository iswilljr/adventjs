// score: 170
export function fitsInOneBox(boxes: Box[]) {
  return boxes
    .sort((a, b) => a.l - b.l)
    .every((box, i) => {
      const next = boxes[i - 1]
      return i < 1 || (box.h > next.h && box.w > next.w)
    })
}

export interface Box {
  w: number
  h: number
  l: number
}
