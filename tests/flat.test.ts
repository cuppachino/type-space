import type { Flat } from '../src/flat'
import { expectType } from 'tsd-lite'

declare const data: [
	['first', ['second']],
	0,
	[[1], 2],
	[['second-last'], 'last']
]
declare const readonlyData: readonly [
	['first', ['second']],
	0,
	[[1], 2],
	[['second-last'], 'last']
]

declare const readonlyFlat_D0: Flat<typeof readonlyData, 0>
declare const readonlyFlat_D1: Flat<typeof readonlyData>
declare const readonlyFlat_D2: Flat<typeof readonlyData, 2>
expectType<typeof readonlyData>(readonlyFlat_D0)
expectType<readonly ['first', ['second'], 0, [1], 2, ['second-last'], 'last']>(
	readonlyFlat_D1
)
expectType<readonly ['first', 'second', 0, 1, 2, 'second-last', 'last']>(
	readonlyFlat_D2
)

declare const flat_D0: Flat<typeof data, 0>
declare const flat_D1: Flat<typeof data>
declare const flat_D2: Flat<typeof data, 2>
expectType<typeof data>(flat_D0)
expectType<['first', ['second'], 0, [1], 2, ['second-last'], 'last']>(flat_D1)
expectType<['first', 'second', 0, 1, 2, 'second-last', 'last']>(flat_D2)
