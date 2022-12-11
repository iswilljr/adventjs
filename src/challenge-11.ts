export function getCompleted(part: string, total: string) {
  const [h1, m1, s1] = part.split(':')
  const [h2, m2, s2] = total.split(':')

  const partSeconds = (+h1 * 60 + +m1) * 60 + +s1
  const totalSeconds = (+h2 * 60 + +m2) * 60 + +s2

  let gcd = partSeconds
  let b = totalSeconds

  while (b) {
    const aux = b
    ;(b = gcd % b), (gcd = aux)
  }

  return `${partSeconds / gcd}/${totalSeconds / gcd}`
}
