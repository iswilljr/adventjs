// score: 360
export function checkPart(part: string) {
  return [...part.slice(0, part.length / 2)].every(
    (l, i) =>
      l === part[part.length - i - 1] ||
      l === part[part.length - i - 2] ||
      part[i + 1] === part[part.length - i - 1]
  )
}

console.log(checkPart('uwu'))
