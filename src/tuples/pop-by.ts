import type { Equal, ExpectTrue } from '@type-challenges/utils'
import type { Subtract } from '../math/subtract'
import type { UnknownArray } from '../unknown-array'

/**
 * Removes the last `N` elements from a tuple type. Does not return the removed types.
 *
 * @remarks Its worth noting `Pop`, `Push`, `Shift`, and `Unshift` are inspired by JS; however, the types are not 1:1 for design reasons. More information can be found in [README](
 * @example
 * ```
 * declare const tuple: ['d', 'a', 'v', 'i', 'd']
 * type Tuple = PopN<typeof tuple, 2> // ['d', 'a', 'v']
 * ```
 */
export type PopBy<T extends UnknownArray, N extends number> = T extends [
	...infer U,
	any
]
	? N extends 0
		? T
		: PopBy<U, Subtract<N, 1>>
	: T

/**
 * @internal
 */
type _PopBy_Cases = [
	ExpectTrue<Equal<PopBy<['a', 'b', 'c'], 0>, ['a', 'b', 'c']>>,
	ExpectTrue<Equal<PopBy<['a', 'b', 'c'], 1>, ['a', 'b']>>,
	ExpectTrue<Equal<PopBy<['a', 'b', 'c'], 2>, ['a']>>,
	ExpectTrue<Equal<PopBy<['a', 'b', 'c'], 3>, []>>
]
