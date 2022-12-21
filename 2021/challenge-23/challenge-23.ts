export function canReconfigure(from: string, to: string) {
  if (from.length !== to.length) return false
  const store: Record<string, string> = {}

  for (const [i, fromLetter] of [...from].entries()) {
    const toLetter = to[i]

    const isFromInvalid = store[toLetter] && store[toLetter] !== fromLetter
    const isToInvalid = store[fromLetter] && store[fromLetter] !== toLetter

    if (isFromInvalid || isToInvalid) return false

    store[toLetter] = fromLetter
  }
  return true
}
