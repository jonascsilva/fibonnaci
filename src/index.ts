import { fibonacci1 } from './function1.ts'
import { fibonacci2 } from './function2.ts'
import { fibonacci3 } from './function3.ts'

const validate = (
  fibonacci: (position: number) => number,
  position: number,
): number | undefined => {
  if (position < 0 || !Number.isInteger(position)) {
    return undefined
  }

  return fibonacci(position)
}

const fibonacciWrapper1 = (position: number) => validate(fibonacci1, position)
const fibonacciWrapper2 = (position: number) => validate(fibonacci2, position)
const fibonacciWrapper3 = (position: number) => validate(fibonacci3, position)

export {
  fibonacciWrapper1 as fibonacci1,
  fibonacciWrapper2 as fibonacci2,
  fibonacciWrapper3 as fibonacci3,
}
