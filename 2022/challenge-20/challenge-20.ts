export function howManyReindeers(
  reindeerTypes: Reindeer[],
  gifts: Gift[]
): Result[] {
  reindeerTypes.sort((a, b) => b.weightCapacity - a.weightCapacity)

  return gifts.map(({ country, weight }) => {
    const remainingRnds = reindeerTypes.filter(x => x.weightCapacity < weight)
    let total = remainingRnds.reduce(
      (acc, curr) => (acc += curr.weightCapacity),
      0
    )

    const reindeers = remainingRnds.map(({ type, weightCapacity }) => {
      const num = (weight / total) >> 0
      total -= weightCapacity
      weight -= num * weightCapacity
      return { type, num }
    })

    return { country, reindeers }
  })
}

export interface Reindeer {
  type: string
  weightCapacity: number
}

export interface Gift {
  country: string
  weight: number
}

export interface Result {
  country: string
  reindeers: Array<{
    type: string
    num: number
  }>
}
