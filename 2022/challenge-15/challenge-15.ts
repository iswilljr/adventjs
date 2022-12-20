// score: 300
export function decorateTree(base: string) {
  const dict = {
    PP: 'P',
    PR: 'B',
    PB: 'R',
    RR: 'R',
    RP: 'B',
    RB: 'P',
    BB: 'B',
    BP: 'R',
    BR: 'P',
  }

  return base
    .split(' ')
    .slice(1)
    .reduce(
      tree => {
        const topTree = tree[0].split(' ')
        const top = topTree.slice(0, -1).reduce<string[]>((acc, letter, i) => {
          const key = (letter + topTree[i + 1]) as keyof typeof dict
          return acc.concat(dict[key])
        }, [])

        return [top.join(' '), ...tree]
      },
      [base]
    )
}
