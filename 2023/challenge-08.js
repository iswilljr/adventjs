function organizeGifts(gifts) {
  let organizedGifts = ''
  const groups = gifts.match(/\d+\w/g)

  for (const group of groups) {
    const total = +group.slice(0, -1)
    const gift = group.slice(-1)

    const pallets = total / 50
    const boxes = (total / 10) % 5
    const bags = total % 10

    const palletGifts = `[${gift}]`.repeat(pallets)
    const boxGifts = `{${gift}}`.repeat(boxes)
    const bagGifts = `(${gift.repeat(bags)})`.repeat(+(bags > 0))

    organizedGifts += `${palletGifts}${boxGifts}${bagGifts}`
  }

  return organizedGifts
}
