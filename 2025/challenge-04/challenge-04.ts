export function decodeSantaPin(code: string): string | null {
  let pin = ''
  const parts = code.split(/[\\[\]]/).filter(Boolean)
  for (const _part of parts) {
    const part = _part
    if (part === '<') {
      pin += pin[pin.length - 1]
      continue
    }
    let digit = +part[0]
    const operations = part.slice(1).split('')
    for (const op of operations) {
      if (op === '-') digit--
      if (op === '+') digit++
    }
    pin += ((10 + digit) % 10).toString()
  }
  if (pin.length < 4) return null
  return pin
}
