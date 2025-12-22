export function maxDepth(s: string): number {
  let depth = 0
  let max = 0

  for (const ch of s) {
    if (ch === '[') {
      depth++
      max = Math.max(max, depth)
    } else if (ch === ']') {
      depth--
    }
    if (depth < 0) return -1
  }

  return depth === 0 ? max : -1
}
