function partition(arr: number[], left: number, right: number): number {
  let x = arr[left]
  let i = left
  let j = right
  while (i < j) {
    while (i < j && arr[j] > x) {
      j--
    }
    if (i < j) {
      arr[i] = arr[j]
    }
    while (i < j && arr[i] < x) {
      i++
    }
    if (i < j) {
      arr[j] = arr[i]
    }
  }

  arr[i] = x

  return i
}

function quickSort(arr: number[], left: number = 0, right?: number): number[] {
  const len = arr.length
  let start = left
  let end = right === undefined ? len - 1 : right
  if (start < end) {
    const index = partition(arr, start, end)
    quickSort(arr, start, index - 1)
    quickSort(arr, index + 1, end)
  }
  return arr
}

const arr = quickSort([1, 3, 2, 6, 4, 5, 9, 8, 7])
console.log(arr)
