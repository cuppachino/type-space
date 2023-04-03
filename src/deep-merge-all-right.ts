import type { Equal, Expect } from '@type-challenges/utils'
import type { DeepMergeRight } from './deep-merge-right'
import type { Last } from './tuples/last'
import type { Pop } from './tuples/pop'
import type { UnknownArray } from './unknown-array'

/**
 * Deeply merges a tuple of objects from right to left, recursively.
 */
export type DeepMergeAllRight<T extends UnknownArray, Acc = {}> = T extends []
	? Acc
	: DeepMergeAllRight<Pop<T>, DeepMergeRight<Acc, Last<T>>>

/**
 * @internal
 */
type _deep_merge_all_right_cases = [
	//    ^?
	Expect<Equal<DeepMergeAllRight<[]>, {}>>,
	Expect<Equal<DeepMergeAllRight<[{} | undefined]>, {}>>,
	Expect<Equal<DeepMergeAllRight<[{ a: 1 }]>, { a: 1 }>>,
	Expect<
		Equal<
			DeepMergeAllRight<[{ a: 1 }, { b: 2 }, { c: 3 }, { d: 4 }, { e: 5 }]>,
			{ a: 1; b: 2; c: 3; d: 4; e: 5 }
		>
	>,
	Expect<
		Equal<
			DeepMergeAllRight<[{ a: 1; c: { 0: 0 } }, { b: 2; readonly c: {} }]>,
			{ a: 1; b: 2; c: { 0: 0 } }
		>
	>
]
