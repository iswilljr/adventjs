export function createFrame(names: string[]) {
  let frame = ''
  const maxNameLength = Math.max(...names.map(name => name.length))
  const longestBorder = '*'.repeat(maxNameLength)
  const necessaryRightSpaces = ' '.repeat(maxNameLength)
  const namesWithSpaces = []

  for (const name of names) {
    const numberOfRightSpaces = maxNameLength - name.length
    namesWithSpaces.push(
      `* ${name}${necessaryRightSpaces.slice(0, numberOfRightSpaces)} *`,
    )
  }

  frame = `**${longestBorder}**\n${namesWithSpaces.join(
    '\n',
  )}\n**${longestBorder}**`

  return frame
}
