import { assertEquals } from 'https://deno.land/std@0.218.0/assert/mod.ts'
import { fibonacci1, fibonacci2, fibonacci3 } from './index.ts'

const functionsArray = [fibonacci1, fibonacci2, fibonacci3]

const testHelper = (input: number, expected?: number) => () => {
  for (const func of functionsArray) {
    assertEquals(func(input), expected)
  }
}

Deno.test('fibonacci(-2.4) should return undefined', testHelper(-2.4, undefined))

Deno.test('fibonacci(2.4) should return undefined', testHelper(2.4, undefined))

Deno.test('fibonacci(-16) should return undefined', testHelper(-16, undefined))

Deno.test('fibonacci(-1) should return undefined', testHelper(-1, undefined))

Deno.test('fibonacci(-1) should return undefined', testHelper(-1, undefined))

Deno.test('fibonacci(0) should return undefined', testHelper(0, 0))

Deno.test('fibonacci(1) should return 1', testHelper(1, 1))

Deno.test('fibonacci(2) should return 1', testHelper(2, 1))

Deno.test('fibonacci(5) should return 5', testHelper(5, 5))

Deno.test('fibonacci(10) should return 55', testHelper(10, 55))
