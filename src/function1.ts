function fibonacci1(position: number): number {
  if (position <= 1) {
    return position
  }

  const result = fibonacci1(position - 1) + fibonacci1(position - 2)

  return result
}

export { fibonacci1 }
