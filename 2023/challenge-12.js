function checkIsValidCopy(original, copy) {
  let i = 0
  const arr = [[]][+(original.length == copy.length)] ?? [...original]
  const SYMBOLS = '#+:. '

  for (const l of arr) {
    const c = copy[i++]

    ;[true][
      +!`${l}${l.toLowerCase()}${SYMBOLS.slice(
        SYMBOLS.indexOf(l) + 1,
      )}`.includes(c)
    ] ?? arr.splice(0)
  }

  return !!arr.length
}
