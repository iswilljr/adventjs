// score: 170
export function fitsInOneBox(boxes: Array<{ w: number; h: number; l: number }>) {
  return boxes
    .sort(({ l }, b) => l - b.l)
    .every((a, _i, arr, i = _i + 1, b = arr[i]) => i === arr.length || (a.w < b.w && a.h < b.h));
}
