function cyberReindeer(road, time) {
  let block
  let pos = 1
  const final = [road]
  const roads = [road, road.replaceAll('|', '*')]

  for (const index of new Array(time - 1).keys()) {
    road = roads[+(index > 3)]
    ;[true][+(road[pos] !== '|')] ??
      (block = '.' + road.slice(1, pos) + 'S' + road.slice(++pos))

    final.push(block)
  }

  return final
}
