import type { Equal } from '@type-challenges/utils'
import type { UnknownArray } from '../unknown-array'

/**
 * Remove the first element from a tuple type. Does not return the removed type.
 *
 * @remarks Its worth noting `Pop`, `Push`, `Shift`, and `Unshift` are inspired by JS; however, the types are not 1:1 for design reasons. More information can be found in [README](https://github.com/Cuppachino/type-space/#type-space).
 * @example
 * ```
 * declare const tuple: [1, 2, 3]
 * type Tuple = Shift<typeof tuple> // [2, 3]
 * ```
 */
export type Shift<T extends UnknownArray> = T extends [any, ...infer U]
	? U
	: T extends readonly [any, ...infer U]
	? readonly [...U]
	: never

/**
 * @internal
 */
type _shift_cases = [
	//    ^?
	Equal<Shift<[1, 2]>, [2]>,
	//    ^?
	Equal<Shift<readonly [1, 2]>, readonly [2]>
	//    ^?
]
