export function manufactureGifts(
  giftsToProduce: Array<{ toy: string; quantity: number }>,
): string[] {
  const producedGifts = []

  for (const gift of giftsToProduce) {
    for (let i = 0; i < gift.quantity; i++) {
      producedGifts.push(gift.toy)
    }
  }

  return producedGifts
}
