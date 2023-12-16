export function transformTree(tree: Array<number | null>) {
  if (!tree.length) return null

  const rootTree: Array<Record<string, any> | null> = [
    {
      value: tree[0],
      left: null,
      right: null,
    },
  ]

  let index = 1

  for (const node of tree.slice(1)) {
    let subTree = null

    if (node != null) {
      const parentIndex = index - Math.trunc(index / 2) - 1
      const side = index % 2 === 0 ? 'right' : 'left'
      const parent = rootTree[parentIndex]

      subTree = {
        value: node,
        left: null,
        right: null,
      }

      if (parent) {
        parent[side] = subTree
      }
    }

    index++
    rootTree.push(subTree)
  }

  return rootTree[0]
}
