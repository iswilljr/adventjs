export function contains(
  store: string | Record<string, any>,
  product: string
): boolean {
  if (typeof store === 'object') {
    return Object.values(store).some(value => contains(value, product))
  }

  return store === product
}
