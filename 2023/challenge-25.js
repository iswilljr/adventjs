function travelDistance(map) {
  const roadmapArr = map.split('\n')
  const roadmap = roadmapArr.join('')
  const cols = roadmapArr[0].length
  const santaPos = roadmap.indexOf('S')

  let gift = 1
  let distance = 0
  let santaCol = santaPos % cols
  let santaRow = (santaPos / cols) | 0

  const numbers = roadmap.match(/\d/g)

  const rowValues = [0, 0]
  const colValues = [0, 0]

  for (const _number of numbers) {
    const giftPos = roadmap.indexOf(`${gift}`)
    const giftCol = giftPos % cols
    const giftRow = (giftPos / cols) | 0

    const row = santaRow - giftRow
    const col = santaCol - giftCol

    rowValues[0] = row
    rowValues[1] = -row
    colValues[0] = col
    colValues[1] = -col

    distance += rowValues[+(row < 0)] + colValues[+(col < 0)]

    santaCol = giftCol
    santaRow = giftRow

    gift++
  }

  return distance
}
