export function randomElement<T>(items: T[]) {
  const next = Math.floor(Math.random() * items.length)
  return items[next]
}