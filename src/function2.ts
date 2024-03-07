function fibonacci2(position: number): number {
  const memo: number[] = Array(position + 1).fill(0)

  return fibonacciMemo(position, memo)
}

function fibonacciMemo(position: number, memo: number[]): number {
  if (position <= 1) {
    return position
  }

  if (memo[position] !== 0) {
    return memo[position]
  }

  memo[position] = fibonacciMemo(position - 1, memo) + fibonacciMemo(position - 2, memo)

  return memo[position]
}

export { fibonacci2 }
