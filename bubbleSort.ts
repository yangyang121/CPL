function bubbleSort(arr: number[]) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        ;[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
  }
  console.log(arr)
}

bubbleSort([1, 3, 2, 6, 4, 5, 9, 8, 7])
