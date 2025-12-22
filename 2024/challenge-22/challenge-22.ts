export function generateGiftSets(gifts: string[]): string[][] {
  const result: string[][] = []

  function backtrack(start: number, currentCombination: string[]) {
    if (currentCombination.length > 0) {
      result.push([...currentCombination])
    }

    for (let i = start; i < gifts.length; i++) {
      currentCombination.push(gifts[i])
      backtrack(i + 1, currentCombination)
      currentCombination.pop()
    }
  }

  backtrack(0, [])

  result.sort((a, b) => a.length - b.length)

  return result
}
