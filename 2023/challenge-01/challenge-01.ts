export function findFirstRepeated(gifts: number[]) {
  const firstRepeatedGift = gifts.find((gift, index) => {
    return gifts.indexOf(gift) !== index
  })

  return firstRepeatedGift ?? -1
}
