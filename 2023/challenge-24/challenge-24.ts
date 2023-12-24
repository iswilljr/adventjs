export function getStaircasePaths(steps: number, maxJump: number) {
  function generatePaths(remainingSteps: number, path: number[]): number[][] {
    const result = []

    if (remainingSteps === 0) {
      result.push(path)
    }

    for (let jump = 1; jump <= Math.min(remainingSteps, maxJump); jump++) {
      result.push(...generatePaths(remainingSteps - jump, [...path, jump]))
    }

    return result
  }

  const staircasePaths = generatePaths(steps, [])

  return staircasePaths
}
