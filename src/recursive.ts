function fibonacciRecursive(position: number): number {
  if (position <= 1) {
    return position
  }

  const result = fibonacciRecursive(position - 1) + fibonacciRecursive(position - 2)

  return result
}

function validate(position: number) {
  if (position < 0 || !Number.isInteger(position)) return

  return fibonacciRecursive(position)
}

export { validate as default }
