export function groupBy<T>(
  collection: T[],
  it: keyof T | ((value: T) => string | number)
): Record<string | number, T[]> {
  const group: Record<string | number, T[]> = {}
  const isItFunction = typeof it === 'function'

  for (const value of collection) {
    const key = isItFunction ? it(value) : (value[it] as string)
    group[key] ??= []
    group[key].push(value)
  }

  return group
}
