export function maxProfit(prices: number[]) {
  return prices.reduce((maxProfit, price, i) => {
    const profit = Math.max(...prices.slice(i + 1)) - price
    return profit > 0 && profit > maxProfit ? profit : maxProfit
  }, -1)
}
