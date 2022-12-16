export const typeOfValue = (value: unknown) =>
  Array.isArray(value) ? 'array' : typeof value
