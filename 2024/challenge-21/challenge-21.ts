export interface TreeNode {
  value: string
  left: TreeNode | null
  right: TreeNode | null
}

export function treeHeight(tree: TreeNode | null): number {
  if (tree === null) {
    return 0
  }

  const leftHeight = treeHeight(tree.left)
  const rightHeight = treeHeight(tree.right)

  return Math.max(leftHeight, rightHeight) + 1
}
