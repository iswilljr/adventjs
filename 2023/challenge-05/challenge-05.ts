export function cyberReindeer(road: string, time: number) {
  let standingOnBarricade = false
  const finalRodal = [road]

  for (let i = 1; i < time; i++) {
    if (i === 5) {
      road = road.replaceAll('|', '*')
    }

    const sledPos = road.indexOf('S')
    const canGoForward = sledPos !== road.indexOf('|') - 1

    const goToStandOnBarricade = sledPos === road.indexOf('*', sledPos) - 1

    road = canGoForward
      ? road.replace(/S(\.|\*)/, `${standingOnBarricade ? '*' : '.'}S`)
      : road

    standingOnBarricade = goToStandOnBarricade
    finalRodal.push(road)
  }

  return finalRodal
}
