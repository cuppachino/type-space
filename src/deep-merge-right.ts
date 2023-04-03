import type { Equal, Expect } from '@type-challenges/utils'
import type { OmitExactOptionalUndefined } from './exclue-exact-optional-undefined'
import type { Primitive } from './primitive'

/**
 * Deeply merges a tuple of objects from right to left.
 *
 * @example
 */
export type DeepMergeRight<A, B> = OmitExactOptionalUndefined<{
	[K in keyof A | keyof B]: (
		K extends keyof B ? B[K] : A[Extract<K, keyof A>]
	) extends infer V extends Primitive
		? V
		: K extends keyof A
		? K extends keyof B
			? DeepMergeRight<A[K], B[K]>
			: A[K]
		: B[Extract<K, keyof B>]
}>

type _deep_merge_right_cases = [
	//    ^?
	Expect<Equal<DeepMergeRight<{}, {}>, {}>>,
	Expect<Equal<DeepMergeRight<{}, undefined>, {}>>,
	Expect<Equal<DeepMergeRight<{ a: 1 }, { b: 1 }>, { a: 1; b: 1 }>>,
	Expect<
		Equal<
			DeepMergeRight<{ a: 1; c: { 0: 0 } }, { b: 2; readonly c: {} }>,
			{ a: 1; b: 2; c: { 0: 0 } }
		>
	>
]
