function partition(arr: number[], left: number, right: number): number {
  const x = arr[right]
  let i = left - 1
  for (let j = left; j < right; j++) {
    if (arr[j] <= x) {
      i++
      ;[arr[j], arr[i]] = [arr[i], arr[j]]
    }
  }

  i++
  ;[arr[right], arr[i]] = [arr[i], arr[right]]
  return i
}

function randomPartition(arr: number[], l: number, r: number): number {
  const i = Math.floor(Math.random() * (r - l)) + l
  ;[arr[i], arr[r]] = [arr[r], arr[i]]
  return partition(arr, l, r)
}

function quickSort(arr: number[], left: number = 0, right?: number): number[] {
  const len = arr.length
  let start = left
  let end = right === undefined ? len - 1 : right
  if (start < end) {
    const index = randomPartition(arr, start, end)
    quickSort(arr, start, index - 1)
    quickSort(arr, index + 1, end)
  }
  return arr
}

const arr = quickSort([1, 3, 2, 6, 4, 5, 9, 8, 7])
console.log(arr)
