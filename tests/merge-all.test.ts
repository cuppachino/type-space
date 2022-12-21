import type { MergeAll } from '../src/merge-all'
import type { Simplify } from '../src/simplify'
import type { UnknownRecord } from '../src/unknown-record'
import { expectType } from 'tsd-lite'

// * Case 1
declare const expectedBasicMerge: {
	a: string
	b: string
	c: string
}
declare function merge1<Level extends readonly UnknownRecord[]>(
	...levels: [...Level]
): MergeAll<Level>

expectType<typeof expectedBasicMerge>(
	merge1({ a: 'a' }, { b: 'b' }, { c: 'c' })
)

// * Case 2
type Color = 'red' | 'green' | 'yellow' | 'bold' | 'white'
type LevelConfig = Record<string, Color | Color[]>
declare const levels: readonly [
	{ error: ['red', 'bold'] },
	{ warn: 'yellow' },
	{ info: 'green' }
]
declare const expectedMerge: {
	error: ['red', 'bold']
	warn: 'yellow'
	info: 'green'
}
declare function merge2<Level extends readonly LevelConfig[]>(
	...levels: [...Level]
): MergeAll<Level>

expectType<typeof expectedMerge>(merge2(...levels))
expectType<Simplify<typeof expectedMerge & { debug: ('white' | 'bold')[] }>>(
	merge2(...levels, { debug: ['white', 'bold'] })
)
