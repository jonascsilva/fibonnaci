import fibonacciRecursive from './recursive.ts'
import fibonacciLoop from './loop.ts'

Deno.bench('Recursive', { group: 'Without memo' }, () => {
  fibonacciRecursive(10)
})

Deno.bench('Loop', { group: 'Without memo' }, () => {
  fibonacciLoop(10)
})
