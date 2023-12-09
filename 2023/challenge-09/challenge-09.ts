export function adjustLights(lights: string[]) {
  const start = lights[0]
  const colors = ['🟢', '🔴']
  const isStartColorGreen = lights[0] === '🟢'
  const next = colors[+isStartColorGreen]

  let count = 0
  let index = 0

  for (const light of lights) {
    const values = [light !== start, light !== next]

    count += +values[index++ % 2]
  }

  return Math.min(lights.length - count, count)
}
