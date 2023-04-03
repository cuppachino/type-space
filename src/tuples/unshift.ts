import type { Equal } from '@type-challenges/utils'
import type { IgnoreMutability } from 'type-space'
import type { UnknownArray } from '../unknown-array'

/**
 * Create a tuple type with a new type inserted at the beginning. Does not return the length of the tuple.
 *
 * @remarks Its worth noting `Pop`, `Push`, `Shift`, and `Unshift` are inspired by JS; however, the types are not 1:1 for design reasons. More information can be found in [README](https://github.com/Cuppachino/type-space/#type-space).
 * @example
 * ```
 * declare const tuple: [2, 3]
 * type Tuple = Unshift<typeof tuple, 1> // [1, 2, 3]
 * ```
 */
export type Unshift<T extends UnknownArray, V> = IgnoreMutability<T> extends T
	? readonly [V, ...T]
	: [V, ...T]

/**
 * @internal
 */
type _unshift_cases = [
	//    ^?
	Equal<Unshift<[2, 3], 1>, [1, 2, 3]>,
	//    ^?
	Equal<Unshift<readonly [2, 3], 1>, readonly [1, 2, 3]>
	//    ^?
]
