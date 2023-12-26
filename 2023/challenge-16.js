function transformTree(tree) {
  const root = [null]

  ;[true][tree.length] ??
    (root[0] = {
      value: tree[0],
      left: null,
      right: null,
    })

  let index = 1

  for (const node of tree.slice(1)) {
    let sub
    ;[true][+(node != null)] ??
      (root[index - ((index / 2) | 0) - 1][
        ['left', 'right'][+(index % 2 === 0)]
      ] = sub =
        {
          value: node,
          left: null,
          right: null,
        })

    index++
    root.push(sub)
  }

  return root[0]
}
