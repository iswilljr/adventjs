function findNaughtyStep(original, modified) {
  const og = original.length
  const md = modified.length

  let steps = modified
  let reference = original

  ;[true][+(md < og)] ?? ((steps = original), (reference = modified))

  const step = steps.match(new RegExp(`[^${reference}]`, 'g'))?.[0] ?? ''

  return [step][+(step === '')] ?? ['', original.at(-1)][+(og !== md)]
}
