import { functionsArray } from './src/index.ts'

const n = 10

for (const func of functionsArray) {
  const result = func(n)

  console.log(`${n}º = ${result}`)
}
