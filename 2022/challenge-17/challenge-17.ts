export function carryGifts(gifts: string[], maxWeight: number) {
  return gifts
    .filter(g => g.length <= maxWeight)
    .reduce<string[]>((bags, bag) => {
      const lastBag = bags.at(-1)
      const lastBagLength = (lastBag && lastBag.replace(/\s/g, '').length) || 0

      if (bags.length > 0 && lastBagLength + bag.length <= maxWeight) {
        bags[bags.length - 1] += ` ${bag}`
      } else bags.push(bag)

      return bags
    }, [])
}
