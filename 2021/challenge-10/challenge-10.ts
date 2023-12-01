export function getCoins(change: number) {
  const coins = [50, 20, 10, 5, 2, 1]

  return coins
    .reduce(
      (acc, coin, i) => {
        if (change >= coin) {
          const nCoins = Math.floor(change / coin)
          acc[i] = nCoins
          change -= coin * nCoins
        }

        return acc
      },
      [0, 0, 0, 0, 0, 0],
    )
    .reverse()
}
