/**
 * Converts the first letter in a text to uppercase.
 */
export function toUpperFirst(text: string) {
  if (typeof text === `string`) {
    return text.charAt(0).toUpperCase() + text.slice(1)
  }
  return ``
}
