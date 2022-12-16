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

        return [
          topTree
            .slice(0, -1)
            .reduce(
              (acc, letter, i) =>
                acc.concat(
                  dict[(letter + topTree[i + 1]) as keyof typeof dict]
                ),
              [] as string[]
            )
            .join(' '),
          ...tree,
        ]
      },
      [base]
    )
}
