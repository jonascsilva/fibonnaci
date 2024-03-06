function fibonacci2(n: number): number {
  const memo: number[] = Array(n + 1).fill(0)

  return fibonacciMemo(n, memo)
}

function fibonacciMemo(n: number, memo: number[]): number {
  if (n <= 1) {
    return n
  }

  if (memo[n] !== 0) {
    return memo[n]
  }

  memo[n] = fibonacciMemo(n - 1, memo) + fibonacciMemo(n - 2, memo)

  return memo[n]
}

export { fibonacci2 }
