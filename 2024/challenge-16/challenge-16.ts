export function removeSnow(s: string): string {
  let match
  let result = s

  while ((match = result.match(/(\w)\1/))) {
    result = result.replace(match[0], '')
  }

  return result
}
