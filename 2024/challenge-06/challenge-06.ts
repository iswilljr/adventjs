export function inBox(box: string[]): boolean {
  let res = false
  for (const row of box.slice(1, -1)) {
    res ||= row.slice(1, -1).includes('*')
  }
  return res
}
