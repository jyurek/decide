export const discontiguousRandomArray = ({
  length,
  max,
}: {
  length: number
  max: number
}): number[] => {
  let value = Math.floor(Math.random() * max)
  const values = new Array(max - 1)
    .fill(0)
    .map((_, idx) => (idx >= value ? idx + 1 : idx))
  const array = new Array(length)
  for (let x = 0; x < length; x++) {
    let index = Math.floor(Math.random() * (max - 1))
    let swap = values[index]
    values[index] = value
    value = swap
    array[x] = value
  }
  return array
}
