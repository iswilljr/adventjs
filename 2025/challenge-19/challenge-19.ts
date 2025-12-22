export function revealSantaRoute(routes: Array<[string, string]>): string[] {
  let current = routes[0][0]
  const result = [current]

  const map = new Map<string, string>(routes)

  for (; map.has(current); ) {
    const next = map.get(current)
    if (next === undefined) break
    result.push(next)
    current = next
  }

  return result
}
