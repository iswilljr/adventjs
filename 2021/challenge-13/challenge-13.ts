export function wrapGifts(gifts: string[]) {
  const wrappedGiftsLength = gifts.map(gift => `*${gift}*`)

  const giftsLength = Array.from(wrappedGiftsLength[0]).length

  const topBottom = '*'.repeat(giftsLength + (giftsLength % 2 === 0 ? 2 : 1))

  wrappedGiftsLength.unshift(topBottom)
  wrappedGiftsLength.push(topBottom)

  return wrappedGiftsLength
}
