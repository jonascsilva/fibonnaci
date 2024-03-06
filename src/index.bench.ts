import { fibonacci1, fibonacci2 } from './index.ts'

Deno.bench('1', { group: '1º fibonacci number' }, () => {
  fibonacci1(1)
})

Deno.bench('2', { group: '1º fibonacci number' }, () => {
  fibonacci2(1)
})

Deno.bench('1', { group: '5º fibonacci number' }, () => {
  fibonacci1(5)
})

Deno.bench('2', { group: '5º fibonacci number' }, () => {
  fibonacci2(5)
})

Deno.bench('1', { group: '10º fibonacci number' }, () => {
  fibonacci1(10)
})

Deno.bench('2', { group: '10º fibonacci number' }, () => {
  fibonacci2(10)
})

Deno.bench('1', { group: '20º fibonacci number' }, () => {
  fibonacci1(20)
})

Deno.bench('2', { group: '20º fibonacci number' }, () => {
  fibonacci2(20)
})

Deno.bench('1', { group: '30º fibonacci number' }, () => {
  fibonacci1(30)
})

Deno.bench('2', { group: '30º fibonacci number' }, () => {
  fibonacci2(30)
})

Deno.bench('1', { group: '40º fibonacci number' }, () => {
  fibonacci1(40)
})

Deno.bench('2', { group: '40º fibonacci number' }, () => {
  fibonacci2(40)
})
