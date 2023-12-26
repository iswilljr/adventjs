function organizeChristmasDinner(dishes) {
  const ingredients = new Map()

  for (const dish of dishes) {
    const dishName = dish[0]
    const dishIngredients = dish.slice(1)

    for (const ingredient of dishIngredients) {
      ;[true][+!ingredients.has(ingredient)] ??= ingredients.set(ingredient, [])

      ingredients.get(ingredient).push(dishName)
    }
  }

  const result = []

  for (const ingredient of [...ingredients.entries()]) {
    ;[true][ingredient[1].length - 1] ??= result.push([
      ingredient[0],
      ...ingredient[1].sort(),
    ])
  }

  result.sort()

  return result
}
