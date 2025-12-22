export function findInAgenda(
  agenda: string,
  phone: string,
): { name: string; address: string } | null {
  const lines = agenda.split('\n')

  const matchingLines = lines.filter(line => line.includes(phone))
  if (matchingLines.length !== 1) return null

  const line = matchingLines[0]

  const nameMatch = line.match(/<([^>]+)>/)
  if (!nameMatch) return null
  const name = nameMatch[1]

  const phoneRegex = /\+\d{1,2}-\d{3}-\d{3}-\d{3}/
  let addressPart = line.replace(phoneRegex, '')
  addressPart = addressPart.replace(/<[^>]+>/, '')

  const address = addressPart
    .replace(/[^a-zA-Z0-9.\-\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()

  return { name, address }
}
