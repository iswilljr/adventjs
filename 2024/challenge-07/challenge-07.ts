export function fixPackages(packages: string): string {
  let result = packages

  while (result.includes('(')) {
    result = result.replace(/\(([^()]*)\)/g, (_, content: string) => {
      return content.split('').reverse().join('')
    })
  }

  return result
}
