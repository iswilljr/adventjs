export function manufacture(gifts: string[], materials: string) {
  return gifts.filter(gift => {
    const words = gift.split('')
    return words.every(word => materials.includes(word))
  })
}
