// score: 360
export function checkPart(part: string) {
  return [...part.slice(0, part.length / 2)].every((word, i) => {
    const next = part[i + 1]
    const nextLeft = part[part.length - i - 1]
    const nextRight = part[part.length - i - 2]

    return word === nextLeft || word === nextRight || next === nextLeft
  })
}
