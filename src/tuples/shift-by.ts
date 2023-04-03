import type { Equal, ExpectTrue } from '@type-challenges/utils'
import type { Subtract } from '../math/subtract'
import type { UnknownArray } from '../unknown-array'

/**
 * Removes the first `N` elements from a tuple type. Does not return the removed types.
 *
 * @remarks Its worth noting `Pop`, `Push`, `Shift`, and `Unshift` are inspired by JS; however, the types are not 1:1 for design reasons. More information can be found in [README](
 * @example
 * ```
 * declare const tuple: ['d', 'a', 'v', 'i', 'd']
 * type Tuple = ShiftN<typeof tuple, 2> // ['v', 'i', 'd']
 * ```
 */
export type ShiftBy<T extends UnknownArray, N extends number> = T extends [
	any,
	...infer U
]
	? N extends 0
		? T
		: ShiftBy<U, Subtract<N, 1>>
	: T extends readonly [any, ...infer U]
	? N extends 0
		? T
		: ShiftBy<U, Subtract<N, 1>>
	: T

/**
 * @internal
 */
type _Cases = [
	ExpectTrue<Equal<ShiftBy<['a', 'b', 'c'], 0>, ['a', 'b', 'c']>>,
	ExpectTrue<Equal<ShiftBy<['a', 'b', 'c'], 1>, ['b', 'c']>>,
	ExpectTrue<Equal<ShiftBy<['a', 'b', 'c'], 2>, ['c']>>,
	ExpectTrue<Equal<ShiftBy<['a', 'b', 'c'], 3>, []>>
]
