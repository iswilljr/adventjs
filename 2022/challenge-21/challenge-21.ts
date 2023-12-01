export function printTable(gifts: Gift[]) {
  const giftWidth = Math.max(...gifts.map(gift => gift.name.length), 4)
  const quantityWidth = Math.max(
    ...gifts.map(gift => `${gift.quantity}`.length),
    8,
  )

  const tableWidth = giftWidth + quantityWidth + 7

  const top = '+'.repeat(tableWidth)
  const bottom = '*'.repeat(tableWidth)
  const head = `Gift${' '.repeat(giftWidth - 4)} | Quantity${' '.repeat(
    quantityWidth - 8,
  )}`
  const border = `${'-'.repeat(giftWidth)} | ${'-'.repeat(quantityWidth)}`
  const body = gifts
    .map(
      gift =>
        `| ${gift.name}${' '.repeat(giftWidth - gift.name.length)} | ${
          gift.quantity
        }${' '.repeat(quantityWidth - `${gift.quantity}`.length)} |`,
    )
    .join('\n')

  return `${top}\n| ${head} |\n| ${border} |\n${body}\n${bottom}`
}

export interface Gift {
  name: string
  quantity: number
}
