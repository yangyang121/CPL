class Heap {
  private container: number[]
  private isMax: boolean
  constructor(arr: number[], isMax: boolean = true) {
    this.container = arr
    this.isMax = isMax
    arr.forEach((data) => this.insert(data))
  }

  insert(data: number) {
    const { container, isMax } = this
    container.push(data)
    let index = container.length - 1
    let parent = (index - 1) >> 1
    while (index) {
      if (
        (isMax && container[index] <= container[parent]) ||
        (!isMax && container[index] >= container[parent])
      ) {
        break
      }
      ;[container[index], container[parent]] = [
        container[parent],
        container[index],
      ]
      index = parent
      parent = (index - 1) >> 1
    }
  }

  extract() {
    const { container, isMax } = this
    if (!container.length) return null
    ;[container[0], container[container.length - 1]] = [
      container[container.length - 1],
      container[0],
    ]
    const ans = container.pop()
    let index = 0
    let exchange = index * 2 + 1
    while (exchange < container.length) {
      let right = index * 2 + 2
      if (
        right < container.length &&
        ((isMax && container[right] > container[exchange]) ||
          (!isMax && container[right] < container[exchange]))
      ) {
        exchange = right
      }
      if (
        (isMax && container[index] >= container[exchange]) ||
        (!isMax && container[index] <= container[exchange])
      ) {
        break
      }
      ;[container[index], container[exchange]] = [
        container[exchange],
        container[index],
      ]
      index = exchange
      exchange = index * 2 + 1
    }

    return ans
  }

  top() {
    if (this.container.length) return this.container[0]
    return null
  }

  getContainer() {
    return this.container
  }
}
