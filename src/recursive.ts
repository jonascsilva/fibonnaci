function fibonacciRecursive(n: number): number {
  if (n <= 1) {
    return n
  }

  const result = fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2)

  return result
}

export { fibonacciRecursive as default }
