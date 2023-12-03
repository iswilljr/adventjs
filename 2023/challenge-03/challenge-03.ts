export function findNaughtyStep(original: string, modified: string) {
  const originalLen = original.length
  const modifiedLen = modified.length

  const sequences = {
    [originalLen]: [original, modified],
    [modifiedLen]: [modified, original],
  }

  const [steps, reference] = sequences[Math.max(originalLen, modifiedLen)]

  return [...steps].find((step, index) => step !== reference[index]) ?? ''
}
