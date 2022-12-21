export function shouldBuyFidelity(times: number) {
  const PRICE = 12
  let total = 0

  for (let i = 1; i <= times; i++) total += PRICE * 0.75 ** i

  return times * PRICE > 250 + total
}
