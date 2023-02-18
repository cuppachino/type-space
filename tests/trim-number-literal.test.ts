import type { NumberLiteral } from '../src/number-literal'
import type { TrimNumberLiteral } from '../src/experimental/trim-number-literal'
import { expectType } from 'tsd-lite'

type TrimMany<T extends NumberLiteral[]> = {
	[K in keyof T]: TrimNumberLiteral<T[K]>
}

type Case1 = [
	'.000', // 0
	'000.', // 0
	'000.000', // 0
	'.1000', // 0.1
	'000.1', // 0.1
	'000.1000', // 0.1
	'0001', // 1
	'1000', // 1000
	'0001000' // 1000
]

declare const case1: TrimMany<Case1>

expectType<['0', '0', '0', '0.1', '0.1', '0.1', '1', '1000', '1000']>(case1)
