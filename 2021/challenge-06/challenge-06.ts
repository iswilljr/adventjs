export function sumPairs(numbers: number[], result: number) {
  const sum = (pairs: number[]) => pairs.reduce((acc, pair) => acc + pair, 0)

  const [, pairs] = numbers.slice(1).reduce<[number, number[]]>(
    ([acc, pairs], number, i) => {
      if (pairs.length < 2 && acc + number === result) {
        acc += number
        pairs.push(number)
      }

      if (i === numbers.length - 2 && sum(pairs) !== result) {
        pairs = [numbers.at(-2) as number, number]
      }

      return [acc, pairs]
    },
    [numbers[0], [numbers[0]]]
  )

  return sum(pairs) === result ? pairs : null
}
