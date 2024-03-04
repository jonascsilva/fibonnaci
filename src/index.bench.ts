import fibonacciRecursive from './recursive.ts'
import fibonacciLoop from './loop.ts'

Deno.bench('Recursive', { group: 'Fibonacci - 1' }, () => {
  fibonacciRecursive(1)
})

Deno.bench('Loop', { group: 'Fibonacci - 1' }, () => {
  fibonacciLoop(1)
})

Deno.bench('Recursive', { group: 'Fibonacci - 2' }, () => {
  fibonacciRecursive(2)
})

Deno.bench('Loop', { group: 'Fibonacci - 2' }, () => {
  fibonacciLoop(2)
})

Deno.bench('Recursive', { group: 'Fibonacci - 5' }, () => {
  fibonacciRecursive(5)
})

Deno.bench('Loop', { group: 'Fibonacci - 5' }, () => {
  fibonacciLoop(5)
})

Deno.bench('Recursive', { group: 'Fibonacci - 10' }, () => {
  fibonacciRecursive(10)
})

Deno.bench('Loop', { group: 'Fibonacci - 10' }, () => {
  fibonacciLoop(10)
})

Deno.bench('Recursive', { group: 'Fibonacci - 30' }, () => {
  fibonacciRecursive(30)
})

Deno.bench('Loop', { group: 'Fibonacci - 30' }, () => {
  fibonacciLoop(30)
})
