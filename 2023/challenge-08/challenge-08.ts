export function organizeGifts(gifts: string) {
  let organizedGifts = ''
  const groups = gifts.match(/\d+\w/g) ?? []

  for (const group of groups) {
    const total = +group.slice(0, -1)
    const gift = group.slice(-1)

    const pallets = Math.floor(total / 50)
    const boxes = Math.floor((total / 10) % 5)
    const bags = total % 10

    const palletGifts = `[${gift}]`.repeat(pallets)
    const boxGifts = `{${gift}}`.repeat(boxes)
    const bagGifts = bags > 0 ? `(${gift.repeat(bags)})` : ''

    organizedGifts += `${palletGifts}${boxGifts}${bagGifts}`
  }

  return organizedGifts
}
