// score: 200
export function createCube(size: number) {
  return [
    ...Array.from(
      { length: size },
      (_v, i) =>
        `${' '.repeat(size - i - 1)}${'/\\'.repeat(i + 1)}${'_\\'.repeat(size)}`
    ),
    ...Array.from(
      { length: size },
      (_v, i) => `${' '.repeat(i)}${'\\/'.repeat(size - i)}${'_/'.repeat(size)}`
    ),
  ].join('\n')
}
