function fibonacciLoop(n: number): number {
  const numbersArray: number[] = [0, 1]

  for (let i = 2; i <= n; i++) {
    numbersArray[i] = numbersArray[i - 1] + numbersArray[i - 2]
  }

  return numbersArray[n]
}

export { fibonacciLoop as default }
