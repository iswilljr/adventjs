export function getMinJump(obstacles: number[]) {
  let minJump = 1

  for (let i = 1; i <= obstacles.length; i++) {
    if (obstacles.includes(minJump * i)) {
      minJump++
      i = 0
    }
  }

  return minJump
}
