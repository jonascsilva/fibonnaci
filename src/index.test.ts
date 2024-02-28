import { assertEquals } from 'https://deno.land/std@0.150.0/testing/asserts.ts'
import fibonacciRecursive from './recursive.ts'
import fibonacciLoop from './loop.ts'

Deno.test('fibonacci(0) should return 0', () => {
  assertEquals(fibonacciRecursive(0), 0)
  assertEquals(fibonacciLoop(0), 0)
})

Deno.test('fibonacci(1) should return 1', () => {
  assertEquals(fibonacciRecursive(1), 1)
  assertEquals(fibonacciLoop(1), 1)
})

Deno.test('Fibonacci of 2 should be 1', () => {
  assertEquals(fibonacciRecursive(2), 1)
  assertEquals(fibonacciLoop(2), 1)
})

Deno.test('fibonacci(5) should return 5', () => {
  assertEquals(fibonacciRecursive(5), 5)
  assertEquals(fibonacciLoop(5), 5)
})

Deno.test('fibonacci(10) should return 55', () => {
  assertEquals(fibonacciRecursive(10), 55)
  assertEquals(fibonacciLoop(10), 55)
})
