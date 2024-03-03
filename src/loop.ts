function fibonacciLoop(position: number): number {
  const memoizedResults: number[] = [0, 1]

  for (let i = 2; i <= position; i++) {
    memoizedResults[i] = memoizedResults[i - 1] + memoizedResults[i - 2]
  }

  return memoizedResults[position]
}

function validate(position: number) {
  if (position < 0 || !Number.isInteger(position)) return

  return fibonacciLoop(position)
}

export { validate as default }
