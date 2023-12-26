function drawGift(size, symbol) {
  let min = size - 1
  let hashes = '#'.repeat(size)
  let spaces = ' '.repeat(min)
  let symbols = symbol.repeat(min)
  let middle = symbols.slice(1)
  let index = ((size + min) / 2) | 0
  let gift = `${hashes}${middle}#\n`

  for (let _ of middle) {
    let line = `#${middle}#${symbols.slice(2, index)}#`
    gift = `${spaces.slice(--index, size)}${line}\n${gift}${line}\n`
  }

  return (['#\n'][+(size != 1)] ??= `${spaces}${hashes}\n${gift}${hashes}\n`)
}
