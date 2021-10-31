export function offsetIndex(
  length: number,
  currentIndex: number,
  offset: number,
) {
  const newIndex =
    (currentIndex + offset) % length;
  return newIndex < 0
    ? newIndex + length
    : newIndex;
}
