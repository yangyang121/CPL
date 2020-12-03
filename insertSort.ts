function insertSort(arr: number[]) {
  const len = arr.length
  let preIndex = 0
  let current = 0
  for (let i = 0; i < len; i++) {
    preIndex = i - 1
    current = arr[i]
    while (preIndex >= 0 && arr[preIndex] > current) {
      arr[preIndex + 1] = arr[preIndex]
      preIndex--
    }
    arr[preIndex + 1] = current
  }
  console.log(arr)
}

insertSort([1, 3, 2, 6, 4, 5, 9, 8, 7])
