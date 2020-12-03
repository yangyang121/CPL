function merge(left: number[], right: number[]): number[] {
  const ans = []
  while (left.length && right.length) {
    if (left[0] > right[0]) {
      ans.push(right.shift())
    } else {
      ans.push(left.shift())
    }
  }
  while (left.length) {
    ans.push(left.shift())
  }
  while (right.length) {
    ans.push(right.shift())
  }
  return ans as number[]
}

function mergeSort(arr: number[]): number[] {
  const len = arr.length
  if (len < 2) return arr
  const mid = len >> 1

  return merge(mergeSort(arr.slice(0, mid)), mergeSort(arr.slice(mid)))
}

console.log(mergeSort([1, 3, 2, 6, 4, 5, 9, 8, 7]))
