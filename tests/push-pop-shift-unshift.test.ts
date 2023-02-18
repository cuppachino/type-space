import type { Pop } from '../src/tuples/pop'
import type { Push } from '../src/tuples/push'
import type { Shift } from '../src/tuples/shift'
import type { Unshift } from '../src/tuples/unshift'
import { expectType } from 'tsd-lite'

declare const fruit: ['apple', 'banana']
type Fruit = typeof fruit

// Helper for string literals
declare function lit<T extends string[]>(...args: T): [...T]
expectType<string[]>(['apple', 'banana'])
expectType<Fruit>(lit('apple', 'banana'))

// Pop
expectType<Pop<Fruit>>(lit('apple'))
expectType<Pop<Pop<Fruit>>>(lit())

// Push
expectType<Push<Fruit, 'plum'>>(lit('apple', 'banana', 'plum'))

// Shift
expectType<Shift<Fruit>>(lit('banana'))
expectType<Shift<Shift<Fruit>>>(lit())

// Unshift
expectType<Unshift<Fruit, 'orange'>>(lit('orange', 'apple', 'banana'))
expectType<Unshift<Unshift<Fruit, 'orange'>, 'plum'>>(
	lit('plum', 'orange', 'apple', 'banana')
)
