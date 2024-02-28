function fibonacciRecursive(position: number): number {
  if (position <= 1) {
    return position
  }

  const result = fibonacciRecursive(position - 1) + fibonacciRecursive(position - 2)

  return result
}

export { fibonacciRecursive as default }
