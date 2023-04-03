import type { Equal, Expect } from '@type-challenges/utils'
import type { IgnoreMutability, UnknownArray } from 'type-space'

/**
 * Reverses a tuple type.
 *
 * @example
 * ```
 * Reverse<[1, 2, 3]> // [3, 2, 1]
 * ```
 */
export type Reverse<T extends UnknownArray> = IgnoreMutability<T> extends T
	? ReverseReadonly<T>
	: ReverseMutable<T>

/**
 * @internal
 */
type ReverseMutable<T> = T extends [infer F, ...infer R]
	? [...Reverse<R>, F]
	: []

/**
 * @internal
 */
type ReverseReadonly<T> = T extends readonly [infer F, ...infer R]
	? readonly [...ReverseReadonly<R>, F]
	: readonly []

/**
 * @internal
 */
type _reverse_cases = [
	//    ^?
	Expect<Equal<Reverse<[]>, []>>,
	Expect<Equal<Reverse<[0]>, [0]>>,
	Expect<Equal<Reverse<[1, 2, 3]>, [3, 2, 1]>>,
	Expect<Equal<Reverse<['a', 'b']>, ['b', 'a']>>,
	Expect<Equal<Reverse<readonly [1, 2, 3]>, readonly [3, 2, 1]>>,
	Expect<Equal<Reverse<readonly ['a', 'b']>, readonly ['b', 'a']>>
]
