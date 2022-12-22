export function checkStepNumbers(systemNames: string[], stepNumbers: number[]) {
  const bag = systemNames.reduce<Record<string, number[]>>(
    (bag, systemName, i) => {
      const stepNumber = stepNumbers[i]
      const prevBag = bag[systemName] || []

      bag[systemName] = [...prevBag, stepNumber]

      return bag
    },
    {}
  )

  const bagValues = Object.values(bag)

  return bagValues.every(bag =>
    bag.slice(1).every((number, i) => number > bag[i])
  )
}
