export type Tree = { value: string; left?: Tree; right?: Tree } | undefined

export function isTreesSynchronized(
  tree1: Tree | undefined,
  tree2: Tree | undefined,
): [boolean, string] {
  function isMirror(t1: Tree | undefined, t2: Tree | undefined): boolean {
    if (t1 == null && t2 == null) return true
    if (t1 == null || t2 == null) return false
    if (t1.value !== t2.value) return false

    return isMirror(t1.left, t2.right) && isMirror(t1.right, t2.left)
  }
  const isSynchronized = isMirror(tree1, tree2)
  return [isSynchronized, tree1?.value ?? '']
}
