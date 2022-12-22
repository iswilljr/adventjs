export function checkStepNumbers(systemNames: string[], stepNumbers: number[]) {
  const bag: Record<string, number> = {}

  return systemNames.every((systemName, i) => {
    const number = stepNumbers[i]
    const prevNumber = bag[systemName] || number
    const valid = prevNumber <= number
    bag[systemName] = number

    return valid
  })
}
