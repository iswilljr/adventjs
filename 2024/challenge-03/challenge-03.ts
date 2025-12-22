export function organizeInventory(
  inventory: Array<{ name: string; quantity: number; category: string }>,
): Record<string, Record<string, number>> {
  const groups: Record<string, Record<string, number>> = {}

  for (const toy of inventory) {
    groups[toy.category] ??= {}
    groups[toy.category][toy.name] ??= 0
    groups[toy.category][toy.name] += toy.quantity
  }

  return groups
}
