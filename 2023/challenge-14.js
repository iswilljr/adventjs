function maxGifts(houses) {
  const dp = houses.slice(0, 2)
  let index = 2

  for (const house of houses.slice(2)) {
    const d = dp[index - 1]
    const p = dp[index - 2] + house
    dp[index++] = [d, p][+(p > d)]
  }

  return dp[houses.length - 1]
}
