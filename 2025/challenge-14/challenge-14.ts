export type Key = string | number | symbol

export function findGiftPath(
  workshop: Record<string, any>,
  gift: string | number | boolean,
): Key[] {
  for (const [key, nested] of Object.entries(workshop)) {
    if (typeof nested === 'object') {
      const keys = findGiftPath(nested, gift)
      if (keys.length) return [key, ...keys]
    } else if (nested === gift) {
      return [key]
    }
  }
  return []
}
