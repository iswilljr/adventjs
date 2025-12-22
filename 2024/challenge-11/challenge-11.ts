export function decodeFilename(filename: string): string {
  return filename.match(/[^_]+_(.+)\.(.+)/)?.[1] ?? ''
}
