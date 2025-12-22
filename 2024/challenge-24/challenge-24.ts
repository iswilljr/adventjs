export interface TreeNode {
  value: string
  left?: TreeNode | null
  right?: TreeNode | null
}

export function isMirror(
  tree1: TreeNode | null,
  tree2: TreeNode | null,
): boolean {
  if (!tree1 && !tree2) return true
  if (!tree1 || !tree2) return false
  if (tree1.value !== tree2.value) return false

  return (
    isMirror(tree1.left ?? null, tree2.right ?? null) &&
    isMirror(tree1.right ?? null, tree2.left ?? null)
  )
}
